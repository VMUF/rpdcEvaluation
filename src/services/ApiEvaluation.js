const BASE_URL = "https://sheetdb.io/api/v1/lgjw6kt4fh4jg";

export async function createEvaluation(newData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("coundn't create a evalaution form");
  const { data } = await res.json();

  return data;
}
