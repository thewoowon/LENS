type ZerplyType = {
  width?: string;
  height?: string;
  fill?: string;
};

const Zerply = ({
  width = "200",
  height = "95",
  fill = "none",
}: ZerplyType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 95"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M97.2145 26.6853C99.358 26.6853 101.433 27.4831 101.709 29.5729C102.064 32.3225 102.015 35.3439 100.408 39.93C100.839 38.6892 96.2978 37.0153 92.723 38.1864C87.4596 39.9101 83.8646 48.922 79.0245 61.1251C78.0579 63.6365 76.8119 64.9599 73.358 64.9599C71.9747 64.9599 70.2437 64.7507 67.9629 64.33C73.2856 50.5972 75.7051 38.1864 75.7051 33.3095C75.7051 31.4953 75.5001 29.8893 74.9445 28.7078C77.9897 27.3816 80.4093 26.7531 82.2042 26.7531C84.3462 26.7531 85.8688 28.0779 85.8688 30.3109C85.8688 33.098 84.8354 37.1429 83.6576 41.8144C88.842 32.6099 92.723 26.7527 96.8679 26.6853C97.008 26.6853 97.0781 26.6853 97.2145 26.6853Z"
        fill="white"
      />
      <path
        d="M68.1742 53.6641C69.1437 55.4081 69.0011 57.5705 67.7589 59.1723C66.582 60.6336 64.8572 61.9598 62.5736 62.9359C59.115 64.5434 55.5209 65.3084 51.6521 65.3084C43.5609 65.3084 38.9292 61.7549 38.582 54.571C38.2391 47.3918 40.7279 40.3478 45.4978 35.1218C50.1281 29.543 57.6244 25.9458 63.7773 25.9458C69.5844 25.9458 72.3497 28.4559 72.2805 33.198C72.2805 37.9388 64.6488 44.6005 55.3153 47.9458C53.0999 48.7123 48.6079 50.7347 48.5421 52.5485C48.4682 54.2205 48.6799 55.6861 49.3008 56.593C50.8224 58.8232 53.3111 60.147 55.9358 59.7984C60.8469 59.3117 64.5788 57.1493 68.1742 53.6641ZM49.2312 47.8078C50.4057 45.2285 52.4795 44.3202 55.0369 42.9281C59.4621 40.4882 60.7048 38.1859 61.3986 35.7474C62.091 33.309 61.2613 31.2164 58.7721 31.2164C55.0374 31.2164 51.9264 36.0249 49.9231 44.6693C49.9231 44.6693 49.6437 45.8565 49.2312 47.8078Z"
        fill="white"
      />
      <path
        d="M136.648 36.3745C136.648 49.899 126.209 64.8189 114.316 64.8189C112.103 64.8189 109.82 64.3996 107.815 63.4966C107.058 66.4899 106.298 68.2724 106.298 71.2724C106.298 72.388 106.645 73.5705 106.986 74.7562C104.499 76.0117 102.147 76.5012 100.491 76.5012C97.6535 76.5012 96.3369 75.1053 96.3369 72.5948C96.3369 71.6201 96.4813 70.4348 96.7541 69.1802C97.2405 67.2299 102.908 44.7413 103.74 41.1162C104.639 37.2112 105.189 34.214 105.189 31.2168C105.189 30.1003 104.983 28.9837 104.499 27.9388C107.263 26.6857 109.615 26.1274 111.623 26.1274C114.178 26.1274 115.559 27.1709 115.559 29.3338C115.559 30.5893 114.661 34.703 113.209 40.2804C117.22 33.7975 122.684 26.8247 129.318 26.8247C129.872 26.8247 130.424 26.8925 131.048 26.9641C135.057 27.5191 136.648 32.1896 136.648 36.3745ZM126.487 38.4657C126.487 35.7474 125.862 34.213 124.341 34.213C120.745 34.213 112.102 48.3665 109.407 56.0352C109.82 57.9855 112.656 59.381 115.009 59.381C120.883 59.381 125.998 48.6449 126.486 39.3043C126.487 39.023 126.487 38.7456 126.487 38.4657Z"
        fill="white"
      />
      <path
        d="M45.1437 65.4512C45.4213 66.2959 45.5619 67.1407 45.5619 67.9859C45.5619 72.7769 41.7185 76.3727 37.1795 76.3727C31.5911 76.3727 26.6282 70.1706 21.3197 67.8455C18.663 66.7166 15.7994 66.0853 12.9344 66.0853C11.537 66.0853 10.2119 66.2276 8.88269 66.4368C8.67431 65.6608 8.5332 64.8146 8.5332 63.9727C8.5332 61.7871 9.37328 59.602 10.8389 57.9841C15.1009 53.1916 22.2284 45.5827 29.4231 36.2136C25.9297 36.4949 23.4175 36.5637 21.8789 36.5637C17.1978 36.5637 15.3126 34.9468 15.3126 32.9717C15.3126 31.4226 16.917 28.6043 18.5224 26.4912C20.83 27.8999 24.814 28.6043 30.33 28.6043C35.362 28.6043 38.5045 28.1812 42.6974 27.3374C42.8375 27.8999 42.909 28.4648 42.909 29.099C42.909 30.7169 42.3493 32.338 41.2308 33.6775C39.6945 35.5079 30.8926 45.726 29.4231 47.3438C25.441 51.8517 21.1809 55.6562 18.4547 59.3909C22.1574 59.4611 26.5586 61.7866 29.9123 64.1112C33.0572 66.2954 37.1795 67.5652 39.9034 67.5652C41.9297 67.5661 43.6047 66.932 45.1437 65.4512Z"
        fill="white"
      />
      <path
        d="M149.121 59.4416C148.918 59.5322 148.702 59.6 148.487 59.6636C147.988 59.7328 147.469 59.7755 146.953 59.7988C146.394 59.7551 145.848 59.6162 145.322 59.389C145.065 58.7942 144.855 58.0092 144.855 56.9192C144.855 55.1771 145.62 52.6343 146.103 50.4041C146.308 49.7064 146.446 49.0091 146.583 48.3859L146.653 47.9652C147.965 46.2202 151.905 38.2366 154.253 32.7981C155.703 29.3821 157.018 25.8959 157.362 22.9694C157.502 22.0597 157.502 21.2244 157.502 20.5267C157.502 18.925 157.294 18.0878 157.294 18.0167C157.225 17.5974 157.018 17.2516 156.743 16.9703C154.806 15.508 152.869 14.9493 150.865 14.8117C149.827 14.7401 148.581 14.9498 147.476 15.7148C146.369 16.4842 145.47 17.6695 145.125 18.7158C141.894 29.5448 138.48 43.7604 135.921 54.7611C135.909 54.8043 135.899 54.8512 135.89 54.8977C135.404 55.6576 131.589 60.6222 131.867 60.6222C132.073 60.6222 133.374 59.6773 135.441 57.1412C135.439 57.1844 135.374 57.6943 135.246 58.2132C134.978 59.933 135.246 57.9959 135.152 59.1205L135.137 59.1286C135.14 59.1385 135.147 59.1461 135.147 59.157C135.098 59.748 135.08 60.2982 135.102 60.8242C135.102 65.1471 137.595 67.1682 141.256 67.1682C143.415 67.1682 147.056 65.961 150.257 63.8333C151.306 63.2034 152.284 62.5128 153.083 61.8246C154.472 60.7028 156.651 57.9219 157.181 56.6797C157.731 55.3265 157.407 53.8044 156.403 52.7908C154.587 55.9066 152.427 58.1373 149.121 59.4416ZM151.075 30.3564C151.973 27.2174 153.012 24.0817 154.184 20.9451C154.323 20.5262 154.533 20.1084 154.739 19.7593C155.083 19.1308 155.982 19.4092 155.982 20.1079C156.053 20.8056 155.982 21.7125 155.915 22.6872C155.637 25.3367 154.588 28.8798 153.138 32.1592C151.683 35.643 148.97 41.653 147.618 44.0578C148.518 40.5745 149.968 33.7723 151.075 30.3564Z"
        fill="white"
      />
      <path
        d="M183.443 27.0462C182.88 27.0462 181.68 27.1164 180.831 27.2597C181.68 28.1855 181.508 30.5338 181.508 31.8164C181.508 36.9394 178.754 45.9248 171.766 55.8905C171.455 51.459 170.979 46.3222 170.403 41.314C169.921 35.5691 169.642 31.1296 169.642 29.8736C169.642 27.7121 168.26 26.6672 165.698 26.6672C163.693 26.6672 160.917 27.2255 158.156 28.4801C158.638 29.5264 159.027 30.6605 159.242 31.7542C159.735 34.316 160.086 35.6716 160.553 38.6441C160.684 39.6472 160.838 40.7016 161.01 41.8101C161.01 41.8196 161.011 41.8262 161.016 41.8357C161.68 46.1681 162.585 51.3471 163.366 57.7422C163.508 58.8071 163.649 60.0872 163.649 61.3015C163.649 62.6547 163.351 63.7741 163.017 64.5752C158.468 75.398 146.284 75.5616 146.284 75.7509C146.284 76.0345 146.284 76.9623 146.355 77.1743C146.775 79.4519 149.386 80.5903 152.425 80.5903C157.648 80.5903 166.34 76.9623 176.713 63.0792C187.936 48.2043 192.094 35.747 192.094 31.2619C192.095 27.9854 188.598 27.0462 183.443 27.0462Z"
        fill="white"
      />
    </svg>
  );
};

export default Zerply;