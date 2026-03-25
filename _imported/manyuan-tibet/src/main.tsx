import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 1. 加入 Vercel 數據與效能監控的匯入指令
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. 在渲染流程中植入監控元件 */}
    <Analytics />
    <SpeedInsights />
    
    <App />
  </StrictMode>,
)