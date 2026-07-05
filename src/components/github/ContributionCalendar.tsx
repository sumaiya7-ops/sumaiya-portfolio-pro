"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[180px] items-center justify-center text-slate-400">
        Loading Contribution Calendar...
      </div>
    ),
  }
);

export default function ContributionCalendar() {
  return (
    <div className="overflow-x-auto">
 <GitHubCalendar
  username="sumaiya7-ops"
  blockSize={15}
  blockMargin={5}
  fontSize={14}
/>
    </div>
  );
}