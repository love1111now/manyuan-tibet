import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// 引入全域樣式（確保路徑相對於此檔案正確）
import './index.css';

// 引入主應用組件
import App from './App.tsx';

/**
 * 獲取根節點並初始化應用
 * 使用非空斷言 (!) 確保節點存在，或使用類型保護
 */
const container = document.getElementById('root');

if (!container) {
  throw new Error("找不到根節點 'root'，請檢查 index.html 是否包含 <div id=\"root\"></div>");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    {/* 主應用邏輯 */}
    <App />
    
    {/* Vercel 數據分析工具：自動追蹤訪問量與性能指標 */}
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
);