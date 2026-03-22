import { renderToString } from "react-dom/server";
import L from "leaflet";
export const getKTPIcon = (color: string, size = 60) => {
  const svgString = renderToString(
    <div className="flex items-center">
      <div
        style={{ backgroundColor: color }}
        className="shrink-0 w-4 h-4 rounded-full"
      />
      <svg
        className="shrink-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Градиент для металла */}
          <linearGradient
            id="metalGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#708090"
            />
            <stop
              offset="100%"
              stopColor="#4A5568"
            />
          </linearGradient>

          {/* Градиент для крыши */}
          <linearGradient
            id="roofGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="#CD5C5C"
            />
            <stop
              offset="100%"
              stopColor="#8B3A3A"
            />
          </linearGradient>

          {/* Анимация вращения */}
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 30 30;5 30 30;0 30 30"
            dur="3s"
            repeatCount="indefinite"
          />
        </defs>

        {/* Тень */}
        <circle
          cx="30"
          cy="32"
          r="28"
          fill="rgba(0,0,0,0.2)"
        />

        {/* Основной корпус */}
        <rect
          x="12"
          y="22"
          width="36"
          height="30"
          rx="4"
          fill="url(#metalGradient)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <animate
            attributeName="stroke-width"
            values="2;2.5;2"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Крыша */}
        <polygon
          points="12,22 30,14 48,22"
          fill="url(#roofGradient)"
          stroke="#FFFFFF"
          strokeWidth="2"
        />

        {/* Вентиляционные решетки */}
        <rect
          x="18"
          y="30"
          width="6"
          height="12"
          fill="#2C3E50"
          stroke="#FFFFFF"
          strokeWidth="1"
        />
        <rect
          x="36"
          y="30"
          width="6"
          height="12"
          fill="#2C3E50"
          stroke="#FFFFFF"
          strokeWidth="1"
        />

        {/* Вентиляционные отверстия */}
        <line
          x1="18"
          y1="34"
          x2="24"
          y2="34"
          stroke="#FFFFFF"
          strokeWidth="1"
        />
        <line
          x1="18"
          y1="37"
          x2="24"
          y2="37"
          stroke="#FFFFFF"
          strokeWidth="1"
        />
        <line
          x1="18"
          y1="40"
          x2="24"
          y2="40"
          stroke="#FFFFFF"
          strokeWidth="1"
        />
        <line
          x1="36"
          y1="34"
          x2="42"
          y2="34"
          stroke="#FFFFFF"
          strokeWidth="1"
        />
        <line
          x1="36"
          y1="37"
          x2="42"
          y2="37"
          stroke="#FFFFFF"
          strokeWidth="1"
        />
        <line
          x1="36"
          y1="40"
          x2="42"
          y2="40"
          stroke="#FFFFFF"
          strokeWidth="1"
        />

        {/* Дверь */}
        <rect
          x="25"
          y="38"
          width="10"
          height="14"
          fill="#8B5A2B"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          rx="2"
        />

        {/* Ручка */}
        <circle
          cx="33"
          cy="45"
          r="1.5"
          fill="#FFD700"
        >
          <animate
            attributeName="r"
            values="1.5;2;1.5"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Высоковольтные изоляторы */}
        <circle
          cx="30"
          cy="28"
          r="3"
          fill="#C0C0C0"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        >
          <animate
            attributeName="r"
            values="3;3.5;3"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="20"
          cy="26"
          r="2.5"
          fill="#C0C0C0"
          stroke="#FFFFFF"
          strokeWidth="1"
        />
        <circle
          cx="40"
          cy="26"
          r="2.5"
          fill="#C0C0C0"
          stroke="#FFFFFF"
          strokeWidth="1"
        />

        {/* Электрическая дуга */}
        <path
          d="M30 28 L28 32 L32 34 L30 38"
          stroke="#FFD700"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;10;0"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>

        {/* Анимированные молнии */}
        <path
          d="M28 18 L26 22 L30 24 L28 28"
          stroke="#FFE55C"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.9;0.4"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );

  return L.divIcon({
    className: "custom-marker ktp-marker",
    html: svgString,
    iconSize: [60, 60],
    iconAnchor: [30, 55],
    popupAnchor: [0, -30],
  });
};
