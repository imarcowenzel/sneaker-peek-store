import React from "react";

import { cn } from "@/lib/utils";

const MainContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <main
      className={cn("flex flex-col min-h-dvh items-center justify-center", className)}
    >
      {children}
    </main>
  );
};

export default MainContainer;
