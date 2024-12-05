import { Menu, NavBar } from '@/components/molecule';
import { IMAGE } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[14%] xl:w-[12%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 "
        >
          <Image src={IMAGE.LOGO} alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold text-nPurpleDark">
            NovSchool
          </span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[86%] xl:w-[88%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
