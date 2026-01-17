export function SponsorIcon({ className }: { className?: string }) {
  const randomInit = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  };

  return (
    // <Button className={cn("max-w-fit bg-amber-900 flex gap-4 h-40 w-80", className)}>
    <svg
      width={240}
      height={240}
      viewBox="0 0 150 150"
      className="outline-blue-500 outline-1 group bg-black"
      // onMouseEnter={}
    >
      <g transform="translate(25, 25)" className="heart-container ">
        <path
          id="heart"
          d="M50,30
        C30,10 10,20 10,40
        C10,60 30,80 50,90
        C70,80 90,60 90,40
        C90,20 70,10 50,30
        Z"
          fill="none"
          stroke="pink"
          strokeWidth={5}
          strokeDasharray={300}
          strokeDashoffset={300}
          transform-origin="50 50"
          filter="url(#glow)"
          className="main-heart"
        >
          <animate
            id="draw"
            attributeName="stroke-dashoffset"
            from="300"
            to="0"
            dur="2s"
            begin="0s"
            fill="freeze"
          />
          <animate
            attributeName="stroke-opacity"
            values="1;1;0"
            keyTimes="0;0.8;1"
            dur="2s"
            begin="draw.end"
            fill="freeze"
          />
          <animate
            attributeName="stroke-dashoffset"
            from="300"
            to="0"
            dur="2s"
            begin="0s"
            fill="freeze"
          />

          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.15; 0.95; 1.1; 1"
            keyTimes="0; 0.2; 0.4; 0.6; 1"
            dur="2.8s"
            begin="draw.end"
            repeatCount={"indefinite"}
            additive="sum"
          />
          <animate attributeName="fill" values="transparent; #ff69b4; pink" dur="2.8s" />
          <animate
            attributeName="fill"
            values="pink; #ff69b4; pink"
            begin="2s"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M59.6251 19.2044L32.6251 13.7044L22.6251 1.20441L20.1251 17.7044L1.62508 25.2044L20.1251 29.7044L27.6251 52.2044L34.6251 29.7044L59.6251 19.2044Z"
          stroke="#FFFB00"
          fill="#ddba20"
          transform="scale(0.1)"
        >
          <animate
            attributeName="opacity"
            begin={0}
            dur={"1.5s"}
            repeatCount={"indefinite"}
            values="1;0.4;1"
          />
        </path>
      </g>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* <!-- Маленькие сердечки (скрыты по умолчанию) --> */}
      {new Array(5).fill("").map((item, index) => (
        <g key={index} transform={`translate(${randomInit(0, 75)}, ${randomInit(0, 75)})`}>
          <path
            className="mini-heart fill-pink-300 opacity-0 scale-0 origin-center duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 delay-75"
            d="M30,20 C25,15 15,18 15,25 C15,32 25,38 30,42 C35,38 45,32 45,25 C45,18 35,15 30,20 Z"
            fill="rgba(255,192,203,0.7)"
            transform-origin={`50 50`}
            // style={{ transitionDelay: `${index}s` }}
          />
        </g>
      ))}
    </svg>

    //   Поддержать меня
    // </Button>
  );
}
