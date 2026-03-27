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
      {image ? <meta property="og:image" content={image} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title}｜${SITE.name}`} />
      <meta name="twitter:description" content={desc} />
      {image ? <meta name="twitter:image" content={image} /> : null}

      {/* JSON-LD (basic) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          url: SITE.url,
        })}
      </script>
    </Helmet>
  );
}
