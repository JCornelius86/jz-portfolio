"use client";

import Button from "./Button";

interface PrintButtonProps {
  children?: React.ReactNode;
}

export default function PrintButton({
  children = "Print resume",
}: PrintButtonProps) {
  return (
    <Button variant="ghost" size="sm" onClick={() => window.print()}>
      {children}
    </Button>
  );
}
