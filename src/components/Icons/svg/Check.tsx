import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 18 18" {...props} fill="none">
    <path
      d="M2.4997 0.0589487C1.4707 -0.414007 1.03429 2.07507 0.944702 3.37873H3.84692C3.88532 2.4692 3.5287 0.531904 2.4997 0.0589487Z"
      fill="url(#paint0_linear_4467_401)"
    />
    <path
      d="M3.82769 13.0181C4.22661 0.274399 2.76431 0.0760145 2.25244 0C3.98093 0 8.40309 0.0123164 13.7199 0.0153282C15.0622 0.0160886 16.255 0.906184 16.5403 2.21778C17.5712 6.95821 17.3858 10.764 17.0469 13.6086C16.9586 14.3499 16.4474 14.968 15.7433 15.2161L10.9153 16.9171C10.4171 17.0926 9.86966 17.0673 9.38731 16.852C8.63602 16.5166 7.27745 15.9158 5.03116 14.9322C4.27706 14.602 3.80194 13.8409 3.82769 13.0181Z"
      fill="url(#paint1_linear_4467_401)"
    />
    <g filter="url(#filter0_d_4467_401)">
      <path
        d="M9.57508 12.9254L6.02441 7.89664H8.09698L9.67148 9.58361L15.5357 4.26562L9.57508 12.9254Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_4467_401"
        x="5.02441"
        y="4.26562"
        width="11.5113"
        height="10.6598"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4467_401"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4467_401"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_4467_401"
        x1="2.31008"
        y1="0"
        x2="2.31008"
        y2="3.37873"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AB2B02" />
        <stop offset="0.543266" stopColor="#C0260B" />
        <stop offset="1" stopColor="#671A11" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4467_401"
        x1="9.78351"
        y1="1.17821e-09"
        x2="9.78351"
        y2="20.5164"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F95625" />
        <stop offset="0.3" stopColor="#F37752" />
        <stop offset="0.68" stopColor="#C3512F" />
        <stop offset="1" stopColor="#933316" />
      </linearGradient>
    </defs>
  </ChakraIcon>
);

export default Icon;
