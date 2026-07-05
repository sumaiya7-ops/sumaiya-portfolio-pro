import { github } from "@/data/github";

export async function getPinnedRepos() {
  const query = `
    query {
      user(login: "${github.username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              homepageUrl
              stargazerCount
              forkCount

              primaryLanguage {
                name
              }

              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pinned repositories");
  }

  const json = await res.json();

  return json.data.user.pinnedItems.nodes;
}

export async function getContributionCalendar() {
  const query = `
    query {
      user(login: "${github.username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions

            weeks {
              contributionDays {
                contributionCount
                date
                weekday
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch contribution calendar");
  }

  const json = await res.json();

  return json.data.user.contributionsCollection.contributionCalendar;
}