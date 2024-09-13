import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="min-h-[92px] min-w-full flex-nowrap bg-dark-100 flex w-full items-center justify-between gap-2 px-4;">
      <Link href="/" className="md:flex-1">
        <Image src="/assets/icons/logo.svg" alt="MediScan logo" width={150} height={120} className="hidden md:block" />
        <Image src="/assets/images/logo.png" alt="Logo" width={30} height={30} className="mr-2 md:hidden" />
      </Link>
      {children}
    </div>
  );
};

export default Header;
