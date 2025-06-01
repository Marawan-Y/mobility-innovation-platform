type Trend = {
  id: number;
  selected_trend: string;
  trend_solutions: string;
  confidence_score: number;
};

export function TrendCard({ trend, onClick }: { trend: Trend; onClick: () => void }) {
  return (
    <div className="bg-white rounded shadow p-4 border-l-4 border-schaeffler cursor-pointer" onClick={onClick}>
      <h3 className="text-lg font-bold">{trend.selected_trend}</h3>
      <div className="text-gray-700">{trend.trend_solutions?.substring(0, 250)}...</div>
      <div className="text-xs text-schaeffler mt-2">Confidence: {trend.confidence_score}</div>
    </div>
  );
}
