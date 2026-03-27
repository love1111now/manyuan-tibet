import { Card } from "@/components/ui/card";

export type PageIllustration = {
  src: string;
  alt: string;
};

export default function PageIllustrations({
  images,
  className = "",
}: {
  images: PageIllustration[];
  className?: string;
}) {
  if (!images?.length) return null;

  const cols = images.length >= 4 ? "md:grid-cols-4" : images.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <section className={`mx-auto max-w-6xl px-4 pt-10 pb-6 ${className}`.trim()}>
      <div className={`grid gap-4 ${cols}`}>
        {images.map((img) => (
          <Card key={img.src} className="overflow-hidden gold-border bg-card/70">
            <img
              src={img.src}
              alt={img.alt}
              className="h-44 w-full object-cover sm:h-52"
              loading="lazy"
              decoding="async"
            />
          </Card>
        ))}
      </div>
    </section>
  );
}
