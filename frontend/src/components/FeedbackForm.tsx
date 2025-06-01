import { useState } from "react";
import { postFeedback } from "../api/api";

export function FeedbackForm({ trendId }: { trendId: number }) {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await postFeedback({ trend_id: trendId, user_name: userName, comment, rating });
    setStatus(res.status);
  }

  return (
    <form className="space-y-2 mt-4" onSubmit={handleSubmit}>
      <input
        className="border rounded p-1 w-full"
        value={userName}
        onChange={e => setUserName(e.target.value)}
        placeholder="Your Name (optional)"
      />
      <textarea
        className="border rounded p-1 w-full"
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Leave feedback..."
      />
      <label className="block">
        Rating:
        <input
          type="number"
          min={1}
          max={10}
          value={rating}
          onChange={e => setRating(+e.target.value)}
          className="border rounded ml-2 w-12"
        />
      </label>
      <button className="bg-schaeffler text-white px-4 py-1 rounded" type="submit">
        Submit
      </button>
      {status && <div className="text-schaeffler mt-1">{status}</div>}
    </form>
  );
}
