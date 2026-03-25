import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { injectSpeedInsights } from '@vercel/speed-insights'; 
import { inject } from '@vercel/analytics'; // 1. 新增：引入分析函式
import './index.css'
import App from './App.tsx'

// 2. 執行注入：這兩行缺一不可
injectSpeedInsights(); // 負責監控載入速度 (vitals)
inject();              // 負責統計訪客數據 (collect)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)