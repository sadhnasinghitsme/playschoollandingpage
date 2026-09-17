import type { ReactNode } from "react";

const BUMPS = [
  [0.86, 0.5],
  [0.791, 0.712],
  [0.611, 0.842],
  [0.389, 0.842],
  [0.209, 0.712],
  [0.14, 0.5],
  [0.209, 0.288],
  [0.389, 0.158],
  [0.611, 0.158],
  [0.791, 0.288],
];

/**
 * Renders children cropped to a scalloped, cloud/flower-like blob shape,
 * with a slightly larger colored copy of the same shape peeking out behind
 * it to read as a playful picture frame.
 */
export default function ScallopFrame({
  children,
  frameColor = "bg-brand-teal",
  className = "",
}: {
  children: ReactNode;
  frameColor?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="scallop-frame-clip" clipPathUnits="objectBoundingBox">
            <circle cx="0.5" cy="0.5" r="0.38" />
            {BUMPS.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.155" />
            ))}
          </clipPath>
        </defs>
      </svg>

      <div
        aria-hidden="true"
        className={`absolute inset-0 translate-x-3 translate-y-3 ${frameColor}`}
        style={{ clipPath: "url(#scallop-frame-clip)" }}
      />
      <div
        className="absolute inset-3 overflow-hidden sm:inset-4"
        style={{ clipPath: "url(#scallop-frame-clip)" }}
      >
        {children}
      </div>
    </div>
  );
}
