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
    <header className='bg-blue-500 text-white py-4'>
      <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'}>
          <h1 className="text-3xl font-semibold">Miguel</h1>
        </Link>
        <nav className="space-x-4 flex">
          {headerLinks.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx('flex', 'hover:bg-sky-100 hover:text-blue-600', { 'bg-sky-100 text-blue-600': pathName === link.href })}
              >
                <h4 className="md:block px-4 py-2">{link.name}</h4>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  )
}
