// src/pages/sitemap-docs.xml.js

export async function GET() {
  const siteUrl = 'https://getlinkme.app';
  
  // In the future, we'll get this from the content collection:
  // import { getCollection } from 'astro:content';
  // const docs = await getCollection('docs');
  
  // For now, use the static list of docs
  const docs = [
    // Getting Started
    { slug: 'introduction', lastUpdated: new Date('2025-04-15') },
    { slug: 'creating-account', lastUpdated: new Date('2025-04-15') },
    { slug: 'digital-business-card', lastUpdated: new Date('2025-04-15') },
    
    // Features
    { slug: 'features/digital-business-cards', lastUpdated: new Date('2025-04-15') },
    { slug: 'features/contact-management', lastUpdated: new Date('2025-04-15') },
    { slug: 'features/network-intelligence', lastUpdated: new Date('2025-04-15') },
    { slug: 'features/micro-communities', lastUpdated: new Date('2025-04-15') },
    
    // Integrations
    { slug: 'integrations/slack', lastUpdated: new Date('2025-04-15') },
    { slug: 'integrations/crm', lastUpdated: new Date('2025-04-15') },
    { slug: 'integrations/calendar', lastUpdated: new Date('2025-04-15') },
    
    // API
    { slug: 'api/overview', lastUpdated: new Date('2025-04-15') },
    { slug: 'api/authentication', lastUpdated: new Date('2025-04-15') },
    { slug: 'api/endpoints', lastUpdated: new Date('2025-04-15') },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/docs/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  ${docs.map(doc => `  <url>
    <loc>${siteUrl}/docs/${doc.slug}/</loc>
    <lastmod>${doc.lastUpdated.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
    status: 200,
  });
}

export const revalidate = 3600; // Revalidate hourly