import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Flag, Gem, Flame, ShieldCheck, Users } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import FloatingFb from "@/components/FloatingFb";

const SPECIAL_FESTIVAL_CHECKOUT_URLS = {
  "wind-horse": "https://cart.cashier.ecpay.com.tw/qp/3gA9",
  "mani-stone": "https://cart.cashier.ecpay.com.tw/qp/3gBE",
  "butter-lamp-festival": "https://cart.cashier.ecpay.com.tw/qp/3gC5",
} as const;

interface FestivalData { title: string; tibetan: string; kicker: string; subtitle: string; icon: React.ElementType; heroImage: string; secondaryImage: string; imageCredit: string; intro: string; powerTitle: string; powerText: string; highlights: string[]; sections: [string, string][]; suitable: string[]; feedback: [string, string, string][]; }

const FESTIVALS: Record<string, FestivalData> = {
  "wind-horse": {
    title: "風馬旗", tibetan: "རླུང་རྟ་ · Lungta", kicker: "讓願心隨風而行",
    subtitle: "以風馬旗承載經咒與祈願，將一份發心延續為一季的護持",
    icon: Flag,
    heroImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ladakh_prayer_flag.jpg",
    secondaryImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Olympic_Lungtas.jpg",
    imageCredit: "圖片來源：Wikimedia Commons／Redtigerxyz、Renaud Detaille",
    intro: "風馬旗（Lungta）是藏傳佛教文化中極具代表性的祈願傳統。五色旗幟承載經咒、祈願與吉祥象徵，隨風飄揚，象徵善願向外傳遞。這不是一次性的祈福，而是把一份真正重要的願心交付於一段完整的護持週期。",
    powerTitle: "風起，願行；旗動，心續",