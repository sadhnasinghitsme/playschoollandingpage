type DotProps = {
  className?: string;
  color?: string;
  size?: number;
};

/** Purely decorative dot. Hidden from assistive tech. */
export default function Dot({ className = "", color = "bg-brand-yellow", size = 14 }: DotProps) {
  return (
    <span
      aria-hidden="true"
      className={`absolute rounded-full ${color} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
