interface PixelDividerProps {
  className?: string;
}

export default function PixelDivider({ className = "" }: PixelDividerProps) {
  return (
    <div
      className={`flex items-center gap-2 my-8 ${className}`}
      aria-hidden="true"
    >
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-border-pixel to-transparent" />
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-accent-cyan" />
        <div className="w-2 h-2 bg-accent-magenta" />
        <div className="w-2 h-2 bg-accent-green" />
      </div>
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-border-pixel to-transparent" />
    </div>
  );
}
