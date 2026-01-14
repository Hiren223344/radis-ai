import { NextResponse } from 'next/server';

const API_KEY = "u2610207-9d370d7c4bd489057c973fd6";
const MONITOR_ID = "802143959";

export async function GET() {
  try {
    const response = await fetch("https://api.uptimerobot.com/v2/getMonitors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: API_KEY,
        monitors: MONITOR_ID,
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
      return NextResponse.json({ error: "Failed to fetch monitor data" }, { status: 500 });
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
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
