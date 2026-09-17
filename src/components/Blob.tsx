type BlobProps = {
  className?: string;
  color?: string;
};

/** Purely decorative background shape. Hidden from assistive tech. */
export default function Blob({ className = "", color = "bg-brand-yellow" }: BlobProps) {
  return (
    <div
      aria-hidden="true"
      className={`section-blob ${color} opacity-40 animate-blob ${className}`}
    />
  );
}
