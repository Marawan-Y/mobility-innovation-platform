import { TrendExplorer } from "./TrendExplorer";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <TrendExplorer onSelectTrend={() => {}} />
      {/* You can add analytics, recent logs, etc., here */}
    </div>
  );
}
