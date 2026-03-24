import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// 1. 導入 Analytics 組件 (注意是 /react)
import { Analytics } from '@vercel/analytics/react' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* 2. 在 App 旁邊加上 Analytics 組件 */}
    <Analytics /> 
  </StrictMode>,
)