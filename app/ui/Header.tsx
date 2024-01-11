'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const headerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Contact Me', href: '/contact' }
];

export default function Header() {
  const pathName = usePathname();

  return (
    <>
      <header className='w-full z-10'>
        <nav className="max-w-[1440px] mx-auto flex gap-5 sm:px-16 px-6 py-4">
          {headerLinks.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx('flex', 'hover:bg-sky-100 hover:text-blue-600', { 'bg-sky-100 text-blue-600': pathName === link.href })}
              >
                <p className="md:block px-4 py-2">{link.name}</p>
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  )
}
