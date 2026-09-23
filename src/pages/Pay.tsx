/*
Design philosophy: Neo-thangka noir (Mobile Typography & UX Defense)
- Mobile Fix 1: Refactored "Intuitive Navigation" buttons to prevent icon crushing and awkward wrapping on small screens.
- Mobile Fix 2: Decoupled Plan Title and Price in the Plan Cards. They now stack vertically on mobile and align horizontally on desktop.
- Mobile Fix 3: Scaled down massive typography on mobile breakpoints to prevent 4-line text walls.
- 100% Unabbreviated Production Ready Code.
*/

import React from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
// 🟢 AI SEO 必備：引入 Helmet 動態注入總覽頁 SEO 與定價型錄結構化資料
import { Helmet } from "react-helmet-async";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { 
  CheckCircle2, 
  MessageCircle, 
  Heart, 
  ShieldCheck, 
  Lock,
  CreditCard,
  Clock,
  Info,
  Layers,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Coffee,
  Coins,