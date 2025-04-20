// src/pages/robots.txt.js
export async function GET() {
  const siteUrl = 'https://getlinkme.app';

  const robotsTxt = `User-agent: *
Allow: /
Allow: /blog/
Sitemap: ${siteUrl}/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain' },
  });
}