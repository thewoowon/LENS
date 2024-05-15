"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Analytics from "@/components/Analytics";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import * as gtag from "@/lib/gtag";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        retry: 0,
      },
    },
  });

  const pathName = usePathname();

  useEffect(() => {
    if (document.body.getAttribute("style") === "") {
      document.body.removeAttribute("style");
    }
    // 뷰포트 높이를 계산하고 해당 값을 사용하여 요소의 스타일을 업데이트하는 함수
    function adjustViewportHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    // 뷰포트 높이를 계산하는 함수를 실행
    adjustViewportHeight();

    // 뷰포트 높이를 계산하는 함수를 resize 이벤트에 바인딩
    window.addEventListener("resize", adjustViewportHeight);

    // 이벤트를 제거하는 함수를 반환
    return () => {
      window.removeEventListener("resize", adjustViewportHeight);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta property="og:title" content={process.env.NEXT_PUBLIC_TITLE} />
        <meta
          property="og:description"
          content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_OG_IMAGE} />
        <meta property="og:image:alt" content="My custom alt" />
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />
        <meta property="og:type" content={process.env.NEXT_PUBLIC_OG_TYPE} />
        <meta
          property="og:description"
          content={process.env.NEXT_PUBLIC_OG_DESCRIPTION}
        />

        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_OG_SITE_NAME}
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_OG_URL} />
        <meta
          property="og:locale"
          content={process.env.NEXT_PUBLIC_OG_LOCALE}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:id" content="1467726470533754880" />
        <meta name="twitter:creator" content="@nextjs" />
        <meta name="twitter:creator:id" content="1467726470533754880" />
        <meta name="twitter:title" content="Next.js" />
        <meta
          name="twitter:description"
          content="The React Framework for the Web"
        />
        <meta name="twitter:image" content="https://nextjs.org/og.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        {/* <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
        <meta
          name="naver-site-verification"
          content={process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION}
        /> */}
      </head>
      <body>
        <Analytics />
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          {!pathName.startsWith("/chat") && <Footer />}
        </QueryClientProvider>
        <GoogleAnalytics gaId={gtag.GA_TRACKING_ID || ""} />
        {/* <GoogleTagManager gtmId={gtag.GTM_TRACKING_ID || ""} /> */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Flip}
        />
      </body>
    </html>
  );
}
