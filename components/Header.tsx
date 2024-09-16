import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <Image src="/assets/icons/logo.svg" alt="MediScan logo" width={150} height={120} className="hidden md:block" />
        <Image src="/assets/images/logo.png" alt="Logo" width={30} height={30} className="mr-2 md:hidden" />
      </Link>
      {children}
    </div>
  );
};

export default Header;
