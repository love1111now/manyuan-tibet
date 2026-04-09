import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RitualMarkdownProps {
  mdPath: string; // 例如: "medicine-buddha-healing.md"
}

export default function RitualMarkdown({ mdPath }: RitualMarkdownProps) {
  const [content, setContent] = useState<string>("內容載入中...");

  useEffect(() => {
    // 透過 fetch 從 public 資料夾抓取檔案
    const fetchMarkdown = async () => {
      try {
        // Vite 會自動把 public 資料夾的內容掛載到根目錄 "/"
        const response = await fetch(`/content/${mdPath}`);
        
        if (!response.ok) {
          throw new Error(`找不到檔案: ${mdPath}`);
        }
        
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Markdown 讀取失敗:", error);
        setContent("無法載入儀軌內容，請確認檔案是否存在。");
      }
    };

    fetchMarkdown();
  }, [mdPath]);

  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}