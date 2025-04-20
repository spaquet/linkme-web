// src/pages/sitemap-blog.xml.js

import { getCollection } from 'astro:content';

export async function GET() {
  const siteUrl = 'https://getlinkme.app';
  const posts = await getCollection('blog');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${posts.map(post => `  <url>
      <loc>${siteUrl}/blog/${post.slug}/</loc>
      <lastmod>${post.data.date.toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
    status: 200,
  });
}

export const revalidate = 3600; // Revalidate hourly