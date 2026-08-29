import "./globals.css";
import AppNavigation from "./components/AppNavigation";

export const metadata = {
  metadataBase: new URL("https://app-router-api-five.vercel.app"),
  title: "AI x Next 학습 프로젝트",
  description: "Next.js App Router 학습 예제입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body id="root">
        <AppNavigation />
        {children}
      </body>
    </html>
  );
}
