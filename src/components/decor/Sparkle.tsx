type SparkleProps = {
  className?: string;
  color?: string;
};

/** Purely decorative 4-point sparkle/starburst. Hidden from assistive tech. */
export default function Sparkle({ className = "", color = "#FF7A33" }: SparkleProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className={className}
      fill={color}
    >
      <path d="M50 0 C52 30 54 46 56 48 C58 50 70 52 100 50 C70 54 58 58 56 60 C54 62 52 78 50 100 C48 78 46 62 44 60 C42 58 30 54 0 50 C30 52 42 50 44 48 C46 46 48 30 50 0 Z" />
    </svg>
  );
}
