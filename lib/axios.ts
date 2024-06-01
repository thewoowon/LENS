import axios from "axios";

// Axios 인스턴스 생성
const customAxios = axios.create({
  withCredentials: true, // CORS 요청 시 인증 정보를 전송하도록 설정
  // 기타 필요한 기본 설정 추가
  baseURL: "https://api.lensql.chat",
  headers: {
    "Content-Type": "application/json",
    // access_token: localStorage.getItem("accessToken") || "",
    // refresh_token: localStorage.getItem("refreshToken") || "",
  },
});

// 에러 처리
customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 로그아웃 처리하기
    if (error.response?.status === 401) {
      // 로그아웃 처리
      // localStorage.removeItem("accessToken");
      window.location.href = "/auth/login";
    }
    // 요청 실패 시 특별히 처리할 작업이 없으면 그대로 반환
    return Promise.reject(error);
  }
);

export default customAxios;
