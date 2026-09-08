import emblem from "@assets/100b-emblem-trimmed.png";

/**
 * The distribution chain, and what happens to it.
 *
 * Factory to distributor to wholesaler to retailer to buyer, then the three in
 * the middle are struck through and fade out and 100B stands in their place.
 * It runs on a six-second loop and holds its finished state for anyone who has
 * asked for reduced motion. The animation classes live in globals.css.
 *
 * Two drawings rather than one: the desktop run is five stops across 900px,
 * which squeezes into illegible labels on a phone, so the small screens get a
 * tighter 480px board with shorter labels.
 */

type Stop = {
  x: number;
  label: string;
  /** A second label line, for the names that will not fit on one. */
  sub?: string;
};

const ARROW = "M2 8 L22 8 M16 2 L22 8 L16 14";

function Defs() {
  return (
    <defs>
      <radialGradient id="shiftSphere" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#3A3835" />
        <stop offset="100%" stopColor="#161513" />
      </radialGradient>
      <filter id="shiftShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.8" />
      </filter>
      <filter id="shiftGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#C3A374" floodOpacity="0.65" />
      </filter>

      <symbol id="shiftFactory" viewBox="0 0 24 24">
        <path
          d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V8L2 13Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d="M17 18h1M12 18h1M7 18h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </symbol>
      <symbol id="shiftBox" viewBox="0 0 40 40">
        <path d="M8 14 L20 8 L32 14 L20 20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14 V30 L20 36 V20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 14 V30 L20 36" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </symbol>
      <symbol id="shiftTruck" viewBox="0 0 40 40">
        <rect x="4" y="14" width="20" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 18 H32 L36 22 V28 H24" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="30" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="29" cy="30" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </symbol>
      <symbol id="shiftShop" viewBox="0 0 40 40">
        <rect x="6" y="16" width="28" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 16 L8 8 H32 L36 16 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="12" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <line x1="20" y1="16" x2="20" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <line x1="28" y1="16" x2="28" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </symbol>
      <symbol id="shiftPerson" viewBox="0 0 40 40">
        <circle cx="20" cy="14" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 36 C10 26 14 22 20 22 C26 22 30 26 30 36"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol id="shiftArrow" viewBox="0 0 28 16" overflow="visible">
        <path
          d={ARROW}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
    </defs>
  );
}

/** One of the three links 100B removes. */
function Middleman({
  x,
  y,
  r,
  icon,
  iconSize,
  label,
  labelY,
  fontSize,
}: {
  x: number;
  y: number;
  r: number;
  icon: string;
  iconSize: number;
  label: string;
  labelY: number;
  fontSize: number;
}) {
  return (
    <g className="shift-vanish">
      <circle
        cx={x}
        cy={y}
        r={r}
        fill="url(#shiftSphere)"
        stroke="#E0DCD3"
        strokeWidth="1"
        filter="url(#shiftShadow)"
      />
      <g color="#E0DCD3" transform={`translate(${x - iconSize / 2} ${y - iconSize / 2})`}>
        <use href={`#${icon}`} width={iconSize} height={iconSize} />
      </g>
      <text
        x={x}
        y={labelY}
        textAnchor="middle"
        fill="#E0DCD3"
        fontFamily="Inter, sans-serif"
        fontSize={fontSize}
        fontWeight="500"
      >
        {label}
      </text>
    </g>
  );
}

/** A stop that stays: the factory at one end, the buyer at the other. */
function Endpoint({
  x,
  y,
  r,
  icon,
  iconSize,
  lines,
  labelY,
  lineHeight,
  fontSize,
}: {
  x: number;
  y: number;
  r: number;
  icon: string;
  iconSize: number;
  lines: string[];
  labelY: number;
  lineHeight: number;
  fontSize: number;
}) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={r}
        fill="url(#shiftSphere)"
        stroke="#C3A374"
        strokeWidth="1.5"
        filter="url(#shiftShadow)"
      />
      <g color="#C3A374" transform={`translate(${x - iconSize / 2} ${y - iconSize / 2})`}>
        <use href={`#${icon}`} width={iconSize} height={iconSize} />
      </g>
      {lines.map((line, i) => (
        <text
          key={line}
          x={x}
          y={labelY + i * lineHeight}
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Inter, sans-serif"
          fontSize={fontSize}
          fontWeight="500"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

const DESKTOP_MIDDLE: Stop[] = [
  { x: 270, label: "Distributor" },
  { x: 450, label: "Wholesaler" },
  { x: 630, label: "Retailer" },
];
const DESKTOP_ICONS = ["shiftBox", "shiftTruck", "shiftShop"];

const MOBILE_MIDDLE: Stop[] = [
  { x: 144, label: "Distributor" },
  { x: 240, label: "Wholesaler" },
  { x: 336, label: "Retailer" },
];

export function DistributionShift() {
  return (
    /* The whole diagram sits in a card rather than running the width of the
       section: bordered, held short of the edges, with the drawing itself
       inset again so it reads as a compact panel rather than a full-bleed
       illustration. */
    <div className="max-w-5xl mx-auto bg-bg-card rounded-3xl border border-border-subtle px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
      <p className="text-center text-[11px] uppercase tracking-[0.22em] font-semibold text-text-body mb-10 lg:mb-14">
        How the chain changes
      </p>

      {/* Desktop board: five stops across 900 units */}
      <svg
        viewBox="0 0 900 200"
        className="hidden md:block w-full max-w-4xl mx-auto h-auto"
        role="img"
        aria-label="The distribution chain runs factory, distributor, wholesaler, retailer, buyer. The three in the middle drop out and 100B stands in their place, leaving factory, 100B, buyer."
      >
        <Defs />

        {[122, 302, 482, 662].map((x1, i) => (
          <line
            key={x1}
            x1={x1}
            y1="90"
            x2={x1 + 116}
            y2="90"
            className="shift-draw"
            style={{ animationDelay: `${0.1 + i * 0.2}s` }}
            stroke="#937C54"
            strokeWidth="0.8"
            strokeDasharray="3 4"
            opacity="0.2"
          />
        ))}

        {[156, 336, 516, 696].map((x) => (
          <g key={x} color="#C3A374" className="shift-arrow-old">
            <use href="#shiftArrow" x={x} y="82" width="48" height="16" />
          </g>
        ))}
        {[238, 602].map((x) => (
          <g key={x} color="#C3A374" className="shift-arrow-new">
            <use href="#shiftArrow" x={x} y="82" width="60" height="16" />
          </g>
        ))}

        <Endpoint
          x={90}
          y={90}
          r={32}
          icon="shiftFactory"
          iconSize={40}
          lines={["Factory"]}
          labelY={148}
          lineHeight={18}
          fontSize={13}
        />

        {DESKTOP_MIDDLE.map((stop, i) => (
          <Middleman
            key={stop.label}
            x={stop.x}
            y={90}
            r={28}
            icon={DESKTOP_ICONS[i]}
            iconSize={40}
            label={stop.label}
            labelY={146}
            fontSize={12}
          />
        ))}

        {DESKTOP_MIDDLE.map((stop) => (
          <line
            key={`strike-${stop.label}`}
            className="shift-strike"
            x1={stop.x - 22}
            y1="68"
            x2={stop.x + 22}
            y2="112"
            stroke="#B84A3E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}

        <g className="shift-emblem">
          <circle
            cx="450"
            cy="90"
            r="36"
            fill="url(#shiftSphere)"
            stroke="#C3A374"
            strokeWidth="1.5"
            filter="url(#shiftGlow)"
          />
          <image
            href={emblem.src}
            x="416"
            y="56"
            width="68"
            height="68"
            preserveAspectRatio="xMidYMid meet"
          />
          <text
            x="450"
            y="148"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Inter, sans-serif"
            fontSize="13"
            fontWeight="500"
          >
            100B
          </text>
          <text
            x="450"
            y="166"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Inter, sans-serif"
            fontSize="13"
            fontWeight="500"
          >
            Strategic partner
          </text>
        </g>

        <Endpoint
          x={810}
          y={90}
          r={32}
          icon="shiftPerson"
          iconSize={40}
          lines={["Developers", "and contractors"]}
          labelY={148}
          lineHeight={18}
          fontSize={13}
        />
      </svg>

      {/* Phone board: the same run, tighter */}
      <svg
        viewBox="0 0 480 140"
        className="md:hidden w-full h-auto"
        role="img"
        aria-label="The distribution chain runs factory, distributor, wholesaler, retailer, buyer. The three in the middle drop out and 100B stands in their place, leaving factory, 100B, buyer."
      >
        <Defs />

        {[
          [72, 124],
          [164, 220],
          [260, 316],
          [356, 408],
        ].map(([x1, x2], i) => (
          <line
            key={x1}
            x1={x1}
            y1="60"
            x2={x2}
            y2="60"
            className="shift-draw"
            style={{ animationDelay: `${0.1 + i * 0.2}s` }}
            stroke="#937C54"
            strokeWidth="0.8"
            strokeDasharray="3 4"
            opacity="0.2"
          />
        ))}

        {[86, 180, 276, 370].map((x) => (
          <g key={x} color="#C3A374" className="shift-arrow-old">
            <use href="#shiftArrow" x={x} y="52" width="24" height="16" />
          </g>
        ))}
        {[116, 308].map((x) => (
          <g key={x} color="#C3A374" className="shift-arrow-new">
            <use href="#shiftArrow" x={x} y="52" width="56" height="16" />
          </g>
        ))}

        <Endpoint
          x={48}
          y={60}
          r={24}
          icon="shiftFactory"
          iconSize={32}
          lines={["Factory"]}
          labelY={106}
          lineHeight={14}
          fontSize={11}
        />

        {MOBILE_MIDDLE.map((stop, i) => (
          <Middleman
            key={stop.label}
            x={stop.x}
            y={60}
            r={20}
            icon={DESKTOP_ICONS[i]}
            iconSize={32}
            label={stop.label}
            labelY={106}
            fontSize={10}
          />
        ))}

        {MOBILE_MIDDLE.map((stop) => (
          <line
            key={`strike-${stop.label}`}
            className="shift-strike"
            x1={stop.x - 22}
            y1="38"
            x2={stop.x + 22}
            y2="82"
            stroke="#B84A3E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}

        <g className="shift-emblem">
          <circle
            cx="240"
            cy="60"
            r="24"
            fill="url(#shiftSphere)"
            stroke="#C3A374"
            strokeWidth="1.5"
            filter="url(#shiftGlow)"
          />
          <image
            href={emblem.src}
            x="216"
            y="36"
            width="48"
            height="48"
            preserveAspectRatio="xMidYMid meet"
          />
          <text
            x="240"
            y="106"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Inter, sans-serif"
            fontSize="11"
            fontWeight="500"
          >
            100B
          </text>
        </g>

        <Endpoint
          x={432}
          y={60}
          r={24}
          icon="shiftPerson"
          iconSize={32}
          lines={["Developers", "and contractors"]}
          labelY={104}
          lineHeight={14}
          fontSize={10}
        />
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 lg:mt-14 pt-10 border-t border-border-subtle">
        {[
          { figure: "1", line: "One strategic partner, not a chain of middlemen" },
          { figure: "3-5%", line: "Visible commission. You pay the factory direct" },
        ].map((stat) => (
          <div key={stat.figure} className="flex flex-col items-center text-center gap-4">
            <span className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none">
              {stat.figure}
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-text-body leading-relaxed max-w-[220px]">
              {stat.line}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
