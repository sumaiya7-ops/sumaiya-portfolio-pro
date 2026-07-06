 import Container from "@/components/common/Container";
import GitHubStatCard from "@/components/github/GitHubStatCard";
import RepoCard from "@/components/github/RepoCard";
import ContributionCalendar from "@/components/github/ContributionCalendar";
import FloatingAvatar from "@/components/github/FloatingAvatar";

import {
  getGithubUser,
    getGithubStats,
  getGithubLanguages,
} from "@/lib/github";
import { getPinnedRepos } from "@/lib/githubGraphql";

import {
  FiFolder,
  FiGithub,
  FiStar,
  FiGitBranch,
} from "react-icons/fi";

import {
  SiGit,
  SiReact,
} from "react-icons/si";

const languageColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  HTML: "#E34F26",
  CSS: "#1572B6",
  SCSS: "#CC6699",
  Python: "#3776AB",
  Java: "#ED8B00",
  C: "#A8B9CC",
  "C++": "#00599C",
  PHP: "#777BB4",
  Go: "#00ADD8",
  Dart: "#0175C2",
  Kotlin: "#7F52FF",
  Swift: "#FA7343",
  Rust: "#DEA584",
};

export default async function GitHub() {
  const user = await getGithubUser();
const repos = await getPinnedRepos();
  const stats = await getGithubStats();
  const languages = await getGithubLanguages();

  return (
    <section
      id="github"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[160px]" />
<div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

<div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

      <Container>

        <div className="mb-16 text-center">

          <div className="mb-5 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300">
            💻 GitHub
          </div>

          <h2 className="text-4xl font-black md:text-5xl">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              GitHub Activity
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            My coding journey, open-source contributions and development activity.
          </p>
  <div className="mt-10 flex flex-col items-center">
<FloatingAvatar
  src={user.avatar_url}
  alt={user.login}
/>

  <h3 className="mt-5 text-2xl font-bold text-white">
    {user.name}
  </h3>

  <p className="mt-1 text-slate-400">
    @{user.login}
  </p>

  <p className="mt-4 max-w-xl text-center text-slate-400">
    {user.bio}
  </p>
  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
  <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
    📍 {user.location || "Location not set"}
  </span>

  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
    👥 {user.followers} Followers
  </span>

  <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
    📦 {user.public_repos} Repositories
  </span>
</div>

</div>
</div>

     
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  <GitHubStatCard
    title="Repositories"
    value={user.public_repos.toString()}
    icon={<FiFolder />}
  />

  <GitHubStatCard
    title="Followers"
    value={user.followers.toString()}
    icon={<FiGithub />}
  />


  <GitHubStatCard
   title="Public Gists"
value={user.public_gists.toString()}
    icon={<SiReact />}
  />

</div>
<div className="mt-8 grid gap-6 md:grid-cols-2">
  <GitHubStatCard
    title="Total Stars"
    value={stats.totalStars.toString()}
    icon={<FiStar />}
  />

  <GitHubStatCard
    title="Total Forks"
    value={stats.totalForks.toString()}
    icon={<FiGitBranch />}
  />
</div>
<div className="mt-20">
  <h3 className="mb-8 text-center text-3xl font-bold text-white">
    Featured Repositories
  </h3>

  <div className="grid gap-6 md:grid-cols-2">
    {repos.map((repo: any) => (
      <RepoCard
        key={repo.id}
        repo={repo}
      />
    ))}
  </div>
</div>
<div className="mt-20">
  <div className="mb-10 text-center">
    <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
      📅 Open Source Activity
    </span>

    <h3 className="mt-5 text-3xl font-bold text-white md:text-4xl">
      GitHub Contribution Calendar
    </h3>

    <p className="mx-auto mt-4 max-w-2xl text-slate-400">
      A visual overview of my coding consistency and daily contributions on GitHub.
    </p>
  </div>

  <div className="rounded-3xl overflow-x-auto overflow-y-visible border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/70 p-8 shadow-2xl backdrop-blur-xl">
    <ContributionCalendar />
  </div>
</div>
<div className="mt-20">
  <h3 className="mb-8 text-center text-3xl font-bold text-white">
    Most Used Languages
  </h3>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
    {languages.map(([name, count]) => (
      <div key={name} className="mb-6 last:mb-0">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
  <span
    className="h-3 w-3 rounded-full"
    style={{
      backgroundColor: languageColors[name] || "#64748b",
    }}
  />

  <span className="font-medium text-white">
    {name}
  </span>
</div>

         <span className="text-sm text-slate-400">
  {Math.round((count / languages[0][1]) * 100)}%
</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-800">
         <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 transition-all duration-1000"
            style={{
              width: `${(count / languages[0][1]) * 100}%`,
            }}
          />
        </div>
      </div>
    ))}
  </div>
</div>

<div className="mt-16 gap-4 flex justify-center">
<a
  href={user.html_url}
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
>
  <FiGithub className="text-xl transition-transform duration-300 group-hover:rotate-12" />

  <span>Explore My GitHub</span>

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
<p className="mt-5 text-center text-sm text-slate-400">
  {user.public_repos} repositories • Open Source • Regularly updated
</p>
</div>
<div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </Container>
    </section>
  );
}