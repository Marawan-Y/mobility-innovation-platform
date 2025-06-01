export async function fetchTrends() {
  const res = await fetch("/api/trends");
  return await res.json();
}

export async function postTrend(trend: any) {
  const res = await fetch("/api/trends", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(trend),
  });
  return await res.json();
}

export async function postFeedback(feedback: any) {
  const res = await fetch("/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(feedback),
  });
  return await res.json();
}
