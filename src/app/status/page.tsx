import StatusHeader from "@/components/sections/status-header";
import OverallStatus from "@/components/sections/overall-status";
import UptimeMonitoring from "@/components/sections/uptime-monitoring";
import RecentIncidents from "@/components/sections/recent-incidents";
import StatusFooter from "@/components/sections/status-footer";

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      <StatusHeader />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <OverallStatus />
        <UptimeMonitoring />
        <RecentIncidents />
      </main>
      <StatusFooter />
    </div>
  );
}
