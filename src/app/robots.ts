import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

  sitemap: "https://sumaiya-portfolio-pro.vercel.app/sitemap.xml",

host: "https://sumaiya-portfolio-pro.vercel.app",
};
}