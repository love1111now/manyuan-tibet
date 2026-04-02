import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto w-full max-w-3xl px-4 py-24 flex items-center justify-center">
        <Card className="p-8 md:p-12 gold-border bg-card/70 paper-grain w-full text-center">
          <div className="font-display text-4xl text-primary mb-2">404</div>
          <div className="font-display text-2xl">此頁面不存在</div>
          <p className="mt-4 text-muted-foreground readable max-w-md mx-auto">
            您尋找的頁面可能已被移動或刪除。別擔心，您可以回到首頁重新選擇本尊，或直接前往登記總表。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button className="gold-border w-full sm:w-32 tracking-widest font-bold">回首頁</Button>
            </Link>
            <Link href="/pay">
              <Button variant="outline" className="gold-border w-full sm:w-auto tracking-widest">前往法事登記總表</Button>
            </Link>
          </div>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}