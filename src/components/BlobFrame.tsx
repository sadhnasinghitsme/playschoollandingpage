import type { ReactNode } from "react";

/**
 * Frames children in an organic "blob" shape with two layered, offset
 * outline blobs (orange outermost, teal innermost) behind it for a
 * playful sticker-style photo frame.
 */
export default function BlobFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-7 rounded-blob border-4 border-brand-orange sm:-inset-9"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-blob border-4 border-brand-teal sm:-inset-4"
      />
      <div className="relative overflow-hidden rounded-blob shadow-soft">{children}</div>
    </div>
  );
}
