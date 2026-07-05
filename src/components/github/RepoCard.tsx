import {
  FiGithub,
  FiStar,
  FiGitBranch,
  FiExternalLink,
} from "react-icons/fi";
const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  React: "#61dafb",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  TailwindCSS: "#38bdf8",
  Python: "#3572A5",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
};

type Props = {
repo: {
  id: string;
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
  } | null;
  repositoryTopics: {
  nodes: {
    topic: {
      name: string;
    };
  }[];
};
};
};

export default function RepoCard({ repo }: Props) {
  return (
   <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-indigo-500/50 hover:shadow-[0_25px_80px_rgba(99,102,241,.35)]">
     <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">
          {repo.name}
        </h3>

        <FiGithub className="text-2xl text-slate-400 group-hover:text-indigo-400" />
      </div>

      <p className="mt-4 line-clamp-3 text-sm text-slate-400">
        {repo.description || "No description available."}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
  {repo.repositoryTopics.nodes.slice(0, 4).map((item) => (
    <span
      key={item.topic.name}
      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
    >
      #{item.topic.name}
    </span>
  ))}
</div>

      <div className="mt-6 flex items-center justify-between">
        <span
  className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300"
>
  <span
    className="h-3 w-3 rounded-full"
    style={{
      background:
        languageColors[repo.primaryLanguage?.name || ""] || "#64748b",
    }}
  />
  {repo.primaryLanguage?.name || "Unknown"}
</span>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-yellow-400">
            <FiStar />
            {repo.stargazerCount}
          </div>

          <div className="flex items-center gap-1 text-cyan-400">
            <FiGitBranch />
           {repo.forkCount}
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-xl border border-indigo-500/30 px-4 py-2 text-center text-indigo-300 transition hover:bg-indigo-500/10"
        >
          <span className="inline-flex items-center gap-2">
            <FiGithub />
            GitHub
          </span>
        </a>

        {repo.homepageUrl && (
          <a
           href={repo.homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-center font-semibold text-white transition hover:scale-105"
          >
            <span className="inline-flex items-center gap-2">
              <FiExternalLink />
              Live Demo
            </span>
          </a>
        )}
      </div>
    </div>
  );
}