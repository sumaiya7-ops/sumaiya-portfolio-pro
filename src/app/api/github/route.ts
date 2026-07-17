import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.github.com/users/sumaiya7-ops", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: { revalidate: 3600 },
  });

  const data = await res.json();

  return NextResponse.json(data);
}