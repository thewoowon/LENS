import axios from "axios";

// Axios 인스턴스 생성
const customAxios = axios.create({
  withCredentials: true, // CORS 요청 시 인증 정보를 전송하도록 설정
  // 기타 필요한 기본 설정 추가
  baseURL: "https://api.lensql.chat",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add access token to headers
customAxios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refresh_token");

    if (
      error.response.status === 401 &&
      refreshToken &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          "https://api.lensql.chat/user/token/refresh",
          {
            token: refreshToken,
          }
        );

        const { access_token } = response.data;
        localStorage.setItem("access_token", access_token);

        // Update the Authorization header and retry the original request
        originalRequest.headers["Authorization"] = `Bearer ${access_token}`;
        return customAxios(originalRequest);
      } catch (refreshError) {
        // Handle token refresh errors, e.g., logout user
        console.error("Refresh token is invalid or expired", refreshError);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// // 에러 처리
// customAxios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // 로그아웃 처리하기
//     if (error.response?.status === 401) {
//       // 로그아웃 처리
//       // localStorage.removeItem("accessToken");
//       window.location.href = "/auth/login";
//     }
//     // 요청 실패 시 특별히 처리할 작업이 없으면 그대로 반환
//     return Promise.reject(error);
//   }
// );

export default customAxios;
