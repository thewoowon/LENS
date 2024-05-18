import axios from "axios";

// Axios 인스턴스 생성
const customAxios = axios.create({
  withCredentials: true, // CORS 요청 시 인증 정보를 전송하도록 설정
  // 기타 필요한 기본 설정 추가
  baseURL:
    "http://lens-server-load-balancer-486960209.ap-northeast-2.elb.amazonaws.com",
});

// 에러 처리
customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.data.code == 950) {
      window.location.replace("/auth/kakao");
    }
    // 요청 실패 시 특별히 처리할 작업이 없으면 그대로 반환
    return Promise.reject(error);
  }
);

export default customAxios;
