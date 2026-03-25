import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 1. 匯入 Vercel 追蹤組件
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. 加入數據與效能監控元件 */}
    <Analytics />
    <SpeedInsights />
    
    <App />
  </StrictMode>,
)