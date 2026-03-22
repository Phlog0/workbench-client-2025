import { renderToString } from "react-dom/server";
import L from "leaflet";
export const getRPIcon = (color: string, size = 60) => {
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
          {/* Градиент для корпуса */}
          <linearGradient
            id="rpGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#4A90E2"
            />
            <stop
              offset="100%"
              stopColor="#2C5A8C"
            />
          </linearGradient>
          {/* Анимация пульсации */}
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.05;1"
            dur="2s"
            repeatCount="indefinite"
            attributeType="XML"
          />
        </defs>
        {/* Тень */}
        <circle
          cx="30"
          cy="32"
          r="28"
          fill="rgba(0,0,0,0.2)"
          filter="url(#shadow)"
        />
        {/* Основной корпус */}
        <rect
          x="15"
          y="20"
          width="30"
          height="30"
          rx="5"
          fill="url(#rpGradient)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <animate
            attributeName="opacity"
            values="0.9;1;0.9"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
        {/* Крыша */}
        <polygon
          points="15,20 30,12 45,20"
          fill="#FFD966"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <animate
            attributeName="fill"
            values="#FFD966;#FFE68F;#FFD966"
            dur="2s"
            repeatCount="indefinite"
          />
        </polygon>
        {/* Дверь */}
        <rect
          x="25"
          y="35"
          width="10"
          height="15"
          fill="#8B4513"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          rx="2"
        />
        {/* Ручка */}
        <circle
          cx="33"
          cy="42"
          r="1.5"
          fill="#FFD700"
        >
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Окна */}
        <rect
          x="19"
          y="27"
          width="6"
          height="5"
          fill="#87CEEB"
          stroke="#FFFFFF"
          strokeWidth="1"
          rx="1"
        >
          <animate
            attributeName="fill"
            values="#87CEEB;#B0E0E6;#87CEEB"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="35"
          y="27"
          width="6"
          height="5"
          fill="#87CEEB"
          stroke="#FFFFFF"
          strokeWidth="1"
          rx="1"
        >
          <animate
            attributeName="fill"
            values="#87CEEB;#B0E0E6;#87CEEB"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
        {/* Молния/символ электричества */}
        <path
          d="M30 20 L27 27 L32 29 L28 36"
          stroke="#FFD700"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke"
            values="#FFD700;#FFE55C;#FFD700"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
        {/* Анимированные искры */}
        <circle
          cx="30"
          cy="24"
          r="1.5"
          fill="#FFD700"
        >
          <animate
            attributeName="r"
            values="1;2;1"
            dur="0.8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Декоративные элементы */}
        <circle
          cx="30"
          cy="48"
          r="2"
          fill="#FFD700"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );

  return L.divIcon({
    className: "custom-marker rp-marker",
    html: svgString,
    iconSize: [60, 60],
    iconAnchor: [30, 55],
    popupAnchor: [0, -30],
  });
};
