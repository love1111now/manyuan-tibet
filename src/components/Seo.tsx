import { Helmet } from "react-helmet-async";
import { SITE } from "@/lib/siteData";

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export default function Seo({ title, description, path = "", image, noIndex }: SeoProps) {
  const url = `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`.replace(/\/$/, "");
  const desc =
    description ??
    "滿願藏庫提供藏傳佛教相關法事、供養、經典資訊與特別祭典，清楚說明法門、費用與參與流程。";
  const ogImage = image ?? `${SITE.url}/favicon.png`;

  return (
    <Helmet>
      <title>{`${title}｜${SITE.name}`}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={`${title}｜${SITE.name}`} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title}｜${SITE.name}`} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD (Global) */}
      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
            sameAs: [SITE.fbUrl ?? SITE.fb].filter(Boolean),
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE.name,
            url: SITE.url,
            inLanguage: "zh-Hant",
          },
        ])}
      </script>
    </Helmet>
  );
}
