import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { injectSpeedInsights } from '@vercel/speed-insights'; // 1. 新增：引入效能監控函式
import './index.css'
import App from './App.tsx'

// 2. 新增：執行注入，這會讓 Vercel 開始收集你的網站載入數據
injectSpeedInsights();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)