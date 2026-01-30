interface RetroCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function RetroCard({
  children,
  className = "",
  hover = true,
}: RetroCardProps) {
  return (
    <div
      className={`bg-bg-card pixel-border rounded-sm p-6 ${
        hover ? "hover:bg-bg-elevated" : ""
      } transition-colors ${className}`}
    >
      {children}
    </div>
  );
}
