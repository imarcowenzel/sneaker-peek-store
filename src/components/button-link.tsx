import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface ButtonLinkProps {
  children: React.ReactNode;
  arrowSize?: number;
  className?: string;
  href: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  arrowSize = 14,
  className,
  href,
}) => {
  return (
    <Link href={href} className="block">
      <Button
        variant={"ghost"}
        className={cn(
          "flex items-center justify-between gap-x-4 rounded-full bg-white px-5 py-4 text-xs uppercase shadow-lg transition duration-700 ease-in-out hover:bg-gray-700 hover:text-white lg:px-8 lg:py-5 lg:text-sm",
          className,
        )}
      >
        <ArrowRightIcon size={arrowSize} />
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
