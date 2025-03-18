export const Sun = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path
            stroke-dasharray="36"
            stroke-dashoffset="36"
            d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.5s"
              values="36;0"
            />
          </path>
          <path
            stroke-dasharray="2"
            stroke-dashoffset="2"
            d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
            opacity="0"
          >
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.6s"
              dur="0.2s"
              values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.6s"
              dur="0.2s"
              values="2;0"
            />
            <set fill="freeze" attributeName="opacity" begin="0.6s" to="1" />
            <animateTransform
              attributeName="transform"
              dur="30s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
          <path
            stroke-dasharray="2"
            stroke-dashoffset="2"
            d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
            opacity="0"
          >
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.8s"
              dur="0.2s"
              values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.8s"
              dur="0.2s"
              values="2;0"
            />
            <set fill="freeze" attributeName="opacity" begin="0.8s" to="1" />
            <animateTransform
              attributeName="transform"
              dur="30s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </g>
      </svg>
    );
  };
  
  