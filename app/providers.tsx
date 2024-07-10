"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Analytics from "@/components/Analytics";
import { GoogleAnalytics } from "@next/third-parties/google";
import * as gtag from "@/lib/gtag";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function Providers({
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
    <>
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
    </>
  );
}
