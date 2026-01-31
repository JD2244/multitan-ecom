'use client';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { NavbarSidebar } from './navbar-sidebar';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const Navbaritem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        'bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg',
        isActive && 'bg-black text-white hover:bg-black hover:text-white',
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    href: '/',
    children: 'Home',
  },
  {
    href: '/about',
    children: 'About',
  },
  {
    href: '/features',
    children: 'Features',
  },
  {
    href: '/pricing',
    children: 'Pricing',
  },
  {
    href: '/contact',
    children: 'Contact',
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn('text-5xl font-semibold', poppins.className)}>GuumRoad</span>
      </Link>

      <NavbarSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} items={navbarItems} />

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <Navbaritem key={item.href} href={item.href} isActive={pathname === item.href}>
            {item.children}
          </Navbaritem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-blue-500 transition-colors text-lg"
        >
          <Link href="/sign-in">Log In</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-blue-500 hover:text-black transition-colors text-lg"
        >
          <Link href="/sign-up">Start Selling</Link>
        </Button>
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
