type StarProps = {
  className?: string;
  color?: string;
};

/** Purely decorative 5-point star. Hidden from assistive tech. */
export default function Star({ className = "", color = "#1FB6A6" }: StarProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 51 48"
      className={className}
      fill={color}
    >
      <path d="M25.5 0 L31.7 17.6 L50.5 18.3 L35.4 29.6 L40.7 47.7 L25.5 37.2 L10.3 47.7 L15.6 29.6 L0.5 18.3 L19.3 17.6 Z" />
    </svg>
  );
}
