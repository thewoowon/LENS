// 캐시 이름과 캐시할 파일 목록을 정의합니다.
const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
];

// 서비스 워커 설치 이벤트
self.addEventListener('install', function (event) {
    // 설치 단계에서 캐시 초기화
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// 서비스 워커 활성화 및 캐시 관리
self.addEventListener('activate', function (event) {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 네트워크 요청 가로채기
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // 캐시에서 응답을 찾으면 반환하고, 그렇지 않으면 네트워크에서 가져옵니다.
                return response || fetch(event.request);
            })
            .catch(function () {
                // 네트워크 요청이 실패하면 기본 오프라인 페이지 제공
                return caches.match('/index.html');
            })
    );
});
