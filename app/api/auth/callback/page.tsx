"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    const getQueryParams = (): { [key: string]: string } => {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      const queryParams: {
        [key: string]: string;
      } = {};

      params.forEach((value, key) => {
        queryParams[key] = value;
      });

      return queryParams;
    };

    const handleGoogle = async () => {
      const { code } = getQueryParams();
      const result = await axios({
        method: "POST",
        url: "/api/auth/login",
        data: {
          code,
        },
      }).then((res) => res.data);

      localStorage.setItem("accessToken", result["access_token"]);
      router.push("/");
    };

    handleGoogle();
  }, [router]);

  return <div>Callback</div>;
};

export default CallbackPage;
