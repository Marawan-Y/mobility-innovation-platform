import { useEffect, useState } from "react";
import { fetchTrends } from "../api/api";
import { TrendCard } from "../components/TrendCard";

export function TrendExplorer({ onSelectTrend }: { onSelectTrend: (trend: any) => void }) {
  const [trends, setTrends] = useState<any[]>([]);

  useEffect(() => {
    fetchTrends().then(setTrends);
  }, []);

  return (
    <div>
      <h2 className="text-2xl my-4 font-semibold">Latest Mobility Trends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trends.map(t => (
          <TrendCard key={t.id} trend={t} onClick={() => onSelectTrend(t)} />
        ))}
      </div>
    </div>
  );
}
