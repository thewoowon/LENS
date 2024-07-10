type GoogleType = {
  width?: string;
  height?: string;
  fill?: string;
};

const Google = ({
  width = "180",
  height = "62",
  fill = "none",
}: GoogleType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 62"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_123_1224)">
        <path
          d="M76.5989 31.781C76.5989 40.2317 69.9879 46.4589 61.8747 46.4589C53.7614 46.4589 47.1504 40.2317 47.1504 31.781C47.1504 23.2707 53.7614 17.103 61.8747 17.103C69.9879 17.103 76.5989 23.2707 76.5989 31.781ZM70.1533 31.781C70.1533 26.5001 66.3217 22.8869 61.8747 22.8869C57.4276 22.8869 53.596 26.5001 53.596 31.781C53.596 37.0089 57.4276 40.6751 61.8747 40.6751C66.3217 40.6751 70.1533 37.0023 70.1533 31.781Z"
          fill="white"
        />
        <path
          d="M108.364 31.781C108.364 40.2317 101.753 46.4589 93.6393 46.4589C85.5261 46.4589 78.915 40.2317 78.915 31.781C78.915 23.2773 85.5261 17.103 93.6393 17.103C101.753 17.103 108.364 23.2707 108.364 31.781ZM101.918 31.781C101.918 26.5001 98.0864 22.8869 93.6393 22.8869C89.1922 22.8869 85.3606 26.5001 85.3606 31.781C85.3606 37.0089 89.1922 40.6751 93.6393 40.6751C98.0864 40.6751 101.918 37.0023 101.918 31.781Z"
          fill="white"
        />
        <path
          d="M138.805 17.9898V44.3413C138.805 55.181 132.413 59.6082 124.855 59.6082C117.741 59.6082 113.46 54.8501 111.845 50.9589L117.457 48.6229C118.456 51.0119 120.904 53.831 124.849 53.831C129.686 53.831 132.684 50.8464 132.684 45.228V43.117H132.459C131.016 44.8971 128.237 46.4523 124.729 46.4523C117.391 46.4523 110.667 40.0596 110.667 31.8339C110.667 23.5486 117.391 17.103 124.729 17.103C128.23 17.103 131.01 18.6582 132.459 20.3854H132.684V17.9964H138.805V17.9898ZM133.141 31.8339C133.141 26.6655 129.693 22.8869 125.305 22.8869C120.858 22.8869 117.132 26.6655 117.132 31.8339C117.132 36.9494 120.858 40.6751 125.305 40.6751C129.693 40.6751 133.141 36.9494 133.141 31.8339Z"
          fill="white"
        />
        <path
          d="M148.897 2.54419V45.5589H142.61V2.54419H148.897Z"
          fill="white"
        />
        <path
          d="M173.395 36.6119L178.398 39.9472C176.784 42.3361 172.892 46.4523 166.169 46.4523C157.831 46.4523 151.604 40.0067 151.604 31.7744C151.604 23.0457 157.884 17.0964 165.448 17.0964C173.065 17.0964 176.79 23.1582 178.008 26.4339L178.676 28.1016L159.055 36.2281C160.557 39.1729 162.893 40.6751 166.169 40.6751C169.451 40.6751 171.728 39.0604 173.395 36.6119ZM157.996 31.331L171.112 25.8847C170.391 24.0516 168.22 22.7744 165.666 22.7744C162.39 22.7744 157.831 25.6663 157.996 31.331Z"
          fill="white"
        />
        <path
          d="M23.3537 27.9625V21.7353H44.3383C44.5434 22.8206 44.6493 24.1044 44.6493 25.4941C44.6493 30.1662 43.3721 35.9434 39.2559 40.0596C35.2523 44.2287 30.1368 46.4522 23.3603 46.4522C10.8 46.4522 0.238281 36.2213 0.238281 23.661C0.238281 11.1008 10.8 0.869873 23.3603 0.869873C30.3089 0.869873 35.2589 3.59634 38.978 7.15002L34.5839 11.5441C31.917 9.04267 28.3037 7.09708 23.3537 7.09708C14.1817 7.09708 7.00813 14.489 7.00813 23.661C7.00813 32.8331 14.1817 40.225 23.3537 40.225C29.303 40.225 32.6912 37.8361 34.8618 35.6655C36.6221 33.9052 37.7802 31.3905 38.2368 27.9559L23.3537 27.9625Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_123_1224">
          <rect
            width="180"
            height="60.8824"
            fill="white"
            transform="translate(0 0.558838)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Google;
