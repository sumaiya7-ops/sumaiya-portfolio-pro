import { github } from "@/data/github";

export async function getGithubUser() {
  console.log("TOKEN:", process.env.GITHUB_TOKEN);

  const res = await fetch(
    `https://api.github.com/users/${github.username}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  console.log("Status:", res.status);

  if (!res.ok) {
    console.log(await res.text());
    throw new Error("Failed to fetch GitHub data");
  }

  return res.json();
}

export async function getGithubRepos() {
const res = await fetch(
  `https://api.github.com/users/${github.username}/repos?per_page=100`,
  {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    next: {
      revalidate: 3600,
    },
  }
);

if (!res.ok) {
  throw new Error("Failed to fetch languages");
}

const repos = await res.json();
 return repos;
}

export async function getGithubLanguages() {
  const repos = await getGithubRepos();

  const languages: Record<string, number> = {};

  repos.forEach((repo: any) => {
    if (!repo.language) return;

    languages[repo.language] =
      (languages[repo.language] || 0) + 1;
  });

  return Object.entries(languages).sort(
    (a, b) => b[1] - a[1]
  );
}

export async function getGithubStats() {
  const res = await fetch(
    `https://api.github.com/users/${github.username}/repos?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub stats");
  }

  const repos = await res.json();

  const totalStars = repos.reduce(
    (sum: number, repo: any) => sum + repo.stargazers_count,
    0
  );

  const totalForks = repos.reduce(
    (sum: number, repo: any) => sum + repo.forks_count,
    0
  );

  return {
    totalStars,
    totalForks,
  };
}