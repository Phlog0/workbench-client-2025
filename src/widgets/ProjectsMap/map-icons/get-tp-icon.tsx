import { renderToString } from "react-dom/server";
import L from "leaflet";
export const getTPIcon = (color: string, size = 60) => {
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
          {/* Градиент для бетона */}
          <linearGradient
            id="concreteGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#95A5A6"
            />
            <stop
              offset="100%"
              stopColor="#7F8C8D"
            />
          </linearGradient>

          {/* Анимация пульсации энергии */}
          <radialGradient id="pulseGradient">
            <stop
              offset="0%"
              stopColor="#FFD700"
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor="#FFD700"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        {/* Тень */}
        <ellipse
          cx="30"
          cy="52"
          rx="25"
          ry="8"
          fill="rgba(0,0,0,0.2)"
        >
          <animate
            attributeName="rx"
            values="25;27;25"
            dur="2s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Основной корпус */}
        <rect
          x="14"
          y="20"
          width="32"
          height="32"
          rx="6"
          fill="url(#concreteGradient)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <animate
            attributeName="stroke"
            values="#FFFFFF;#ECF0F1;#FFFFFF"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Крыша с антенной */}
        <polygon
          points="14,20 30,12 46,20"
          fill="#BDC3C7"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
        <circle
          cx="30"
          cy="12"
          r="3"
          fill="#E67E22"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        >
          <animate
            attributeName="r"
            values="3;4;3"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <line
          x1="30"
          y1="12"
          x2="30"
          y2="8"
          stroke="#E67E22"
          strokeWidth="2"
        >
          <animate
            attributeName="y2"
            values="8;6;8"
            dur="1s"
            repeatCount="indefinite"
          />
        </line>

        {/* Трансформаторы (три цилиндра) */}
        <rect
          x="18"
          y="32"
          width="8"
          height="16"
          fill="#34495E"
          stroke="#FFFFFF"
          strokeWidth="1"
          rx="1"
        >
          <animate
            attributeName="fill"
            values="#34495E;#2C3E50;#34495E"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="26"
          y="30"
          width="8"
          height="18"
          fill="#2C3E50"
          stroke="#FFFFFF"
          strokeWidth="1"
          rx="1"
        >
          <animate
            attributeName="height"
            values="18;19;18"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="34"
          y="32"
          width="8"
          height="16"
          fill="#34495E"
          stroke="#FFFFFF"
          strokeWidth="1"
          rx="1"
        />

        {/* Провода */}
        <path
          d="M22 28 L22 32"
          stroke="#95A5A6"
          strokeWidth="2"
        />
        <path
          d="M30 28 L30 30"
          stroke="#95A5A6"
          strokeWidth="2"
        />
        <path
          d="M38 28 L38 32"
          stroke="#95A5A6"
          strokeWidth="2"
        />

        {/* Энергетические волны */}
        <path
          d="M18 40 L22 42 L26 40 L30 42 L34 40 L38 42 L42 40"
          stroke="#FFD700"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;20;0"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>

        {/* Анимированные частицы */}
        {[1, 2, 3, 4, 5].map(i => (
          <circle
            key={i}
            cx={25 + i * 2.5}
            cy={38 + Math.sin(i) * 3}
            r="1"
            fill="#FFD700"
          >
            <animate
              attributeName="cy"
              values={`${38 + Math.sin(i) * 3};${35 + Math.sin(i) * 3};${38 + Math.sin(i) * 3}`}
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Индикатор работы */}
        <circle
          cx="30"
          cy="48"
          r="2.5"
          fill="#27AE60"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        >
          <animate
            attributeName="r"
            values="2.5;3;2.5"
            dur="0.8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="#27AE60;#2ECC71;#27AE60"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );

  return L.divIcon({
    className: "custom-marker tp-marker",
    html: svgString,
    iconSize: [60, 60],
    iconAnchor: [30, 55],
    popupAnchor: [0, -30],
  });
};
