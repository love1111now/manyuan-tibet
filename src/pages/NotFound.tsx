import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <Card className="p-8 gold-border bg-card/70 paper-grain">
          <div className="font-display text-3xl">此頁不存在</div>
          <p className="mt-3 text-muted-foreground readable">你可以回到首頁，重新選擇本尊或前往登記。</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/">
              <Button className="gold-border">回首頁</Button>
            </Link>
            <Link href="/pay">
              <Button variant="outline" className="gold-border">前往登記</Button>
            </Link>
          </div>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}
