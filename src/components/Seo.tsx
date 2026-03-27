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
    "滿願藏庫：以《金光明最勝王經》為主軸的線上招財法事入口。選對本尊、選對方案，並導向第三方金流完成護持。";

  const imageUrl = image ?? `${SITE.url}${SITE.defaultOgImage}`;
  const keywords = SITE.keywords.join(",");

  return (
    <Helmet>
      <title>{`${title}｜${SITE.name}`}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="format-detection" content="telephone=no" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={`${title}｜${SITE.name}`} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="zh_TW" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title}｜${SITE.name}`} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          url: SITE.url,
          keywords: SITE.keywords,
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${title}｜${SITE.name}`,
          url,
          description: desc,
          inLanguage: "zh-TW",
        })}
      </script>
    </Helmet>
  );
}
