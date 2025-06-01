import { FeedbackForm } from "../components/FeedbackForm";
export function TrendDetails({ trend, onBack }: { trend: any; onBack: () => void }) {
  if (!trend) return null;
  return (
    <div>
      <button className="mb-4 text-schaeffler" onClick={onBack}>
        ← Back
      </button>
      <h2 className="text-2xl font-bold mb-2">{trend.selected_trend}</h2>
      <div className="mb-2 text-gray-600">{trend.trend_solutions}</div>
      <div className="mb-4 text-xs text-schaeffler">
        Confidence Score: {trend.confidence_score}
      </div>
      <h3 className="text-lg font-semibold mt-4">Leave Feedback</h3>
      <FeedbackForm trendId={trend.id} />
    </div>
  );
}
