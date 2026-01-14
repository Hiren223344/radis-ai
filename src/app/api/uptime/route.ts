import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const API_KEY = "u2610207-9d370d7c4bd489057c973fd6";

const MONITORS: Record<string, string> = {
  api: "802143959",
  auth: "802144013",
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const service = searchParams.get('service') || 'api';
  const listAll = searchParams.get('list') === 'true';
  const monitorId = MONITORS[service] || MONITORS.api;

  try {
    if (listAll) {
      const response = await fetch("https://api.uptimerobot.com/v2/getMonitors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: API_KEY,
          format: "json",
        }),
        cache: 'no-store',
      });
      const data = await response.json();
      return NextResponse.json(data);
    }

    const response = await fetch("https://api.uptimerobot.com/v2/getMonitors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: API_KEY,
        monitors: monitorId,
        custom_uptime_ranges: "1-24-168-720",
        response_times: 1,
        response_times_limit: 24,
        logs: 1,
        logs_limit: 50,
      }),
      cache: 'no-store',
    });

    const data = await response.json();
    
    if (data.stat !== "ok" || !data.monitors || data.monitors.length === 0) {
      return NextResponse.json({
        status: "up",
        uptime: {
          last1Hour: 100,
          last24Hours: 100,
          last7Days: 100,
          last30Days: 100,
        },
        hourlyStatus: Array.from({ length: 24 }, (_, i) => ({ hour: i, status: 'operational' })),
        friendlyName: service,
        url: "",
      });
    }

    const monitor = data.monitors[0];
    const uptimeRanges = monitor.custom_uptime_ranges?.split("-") || [];
    
    const logs = monitor.logs || [];
    const last24HoursLogs = logs.filter((log: { datetime: number }) => {
      const logTime = log.datetime * 1000;
      const now = Date.now();
      return now - logTime <= 24 * 60 * 60 * 1000;
    });

    const hourlyStatus: { hour: number; status: 'operational' | 'degraded' | 'outage' }[] = [];
    const now = new Date();
    
    for (let i = 23; i >= 0; i--) {
      const hourStart = new Date(now.getTime() - i * 60 * 60 * 1000);
      const hourEnd = new Date(hourStart.getTime() + 60 * 60 * 1000);
      
      const logsInHour = last24HoursLogs.filter((log: { datetime: number; type: number }) => {
        const logTime = log.datetime * 1000;
        return logTime >= hourStart.getTime() && logTime < hourEnd.getTime();
      });
      
      let status: 'operational' | 'degraded' | 'outage' = 'operational';
      for (const log of logsInHour) {
        if ((log as { type: number }).type === 1) {
          status = 'outage';
          break;
        } else if ((log as { type: number }).type === 2) {
          status = 'operational';
        }
      }
      
      hourlyStatus.push({
        hour: 23 - i,
        status
      });
    }

    return NextResponse.json({
      status: monitor.status === 2 ? "up" : monitor.status === 8 ? "seems_down" : monitor.status === 9 ? "down" : "paused",
      uptime: {
        last1Hour: parseFloat(uptimeRanges[0]) || 100,
        last24Hours: parseFloat(uptimeRanges[1]) || 100,
        last7Days: parseFloat(uptimeRanges[2]) || 100,
        last30Days: parseFloat(uptimeRanges[3]) || 100,
      },
      hourlyStatus,
      friendlyName: monitor.friendly_name,
      url: monitor.url,
    });
  } catch (error) {
    console.error("Error fetching uptime data:", error);
    return NextResponse.json({
      status: "up",
      uptime: {
        last1Hour: 100,
        last24Hours: 100,
        last7Days: 100,
        last30Days: 100,
      },
      hourlyStatus: Array.from({ length: 24 }, (_, i) => ({ hour: i, status: 'operational' })),
      friendlyName: service,
      url: "",
    });
  }
}
