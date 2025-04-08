'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NavItem = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => (
  <Link
    href={href}
    className={cn(
      "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
      className
    )}
  >
    {children}
  </Link>
);

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm bg-opacity-10" role="banner">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <svg className="h-8 w-8" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 2C8.376 2 3 7.376 3 14C3 20.624 8.376 26 15 26C21.624 26 27 20.624 27 14C27 7.376 21.624 2 15 2ZM15 4C20.543 4 25 8.457 25 14C25 19.543 20.543 24 15 24C9.457 24 5 19.543 5 14C5 8.457 9.457 4 15 4ZM15 7C13.895 7 13 7.895 13 9C13 10.105 13.895 11 15 11C16.105 11 17 10.105 17 9C17 7.895 16.105 7 15 7ZM11.4004 11.1992C10.7644 11.1992 10.2148 11.5426 10.0098 12.1016L8.0098 17.1016C7.8028 17.6626 8.0223 18.2713 8.6113 18.5703C9.2003 18.8693 9.8028 18.6499 10.0098 18.0859L12.0098 13.0859C12.2168 12.5249 12.0145 11.9162 11.4824 11.6172C11.2937 11.3182 11.4004 11.1992 11.4004 11.1992ZM18.5898 11.1992C18.5898 11.1992 18.6966 11.3182 18.5078 11.6172C17.9758 11.9162 17.7735 12.5249 17.9805 13.0859L19.9805 18.0859C20.1875 18.6499 20.79 18.8693 21.3789 18.5703C21.9679 18.2713 22.1874 17.6626 21.9805 17.1016L19.9805 12.1016C19.7755 11.5426 19.2258 11.1992 18.5898 11.1992ZM15 13C13.343 13 12 14.343 12 16C12 17.657 13.343 19 15 19C16.657 19 18 17.657 18 16C18 14.343 16.657 13 15 13ZM15 15C15.552 15 16 15.448 16 16C16 16.552 15.552 17 15 17C14.448 17 14 16.552 14 16C14 15.448 14.448 15 15 15Z"
                fill="#3FC186"
              />
            </svg>
            <span className="font-bold text-lg text-white">Modal</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavItem href="/use-cases" className="text-white hover:text-primary">Use Cases</NavItem>
            <NavItem href="/pricing" className="text-white hover:text-primary">Pricing</NavItem>
            <NavItem href="/docs" className="text-white hover:text-primary">Docs</NavItem>
            <NavItem href="/company" className="text-white hover:text-primary">Company</NavItem>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="hidden md:flex text-white hover:text-white hover:bg-transparent">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild variant="ghost" className="hidden md:flex text-white hover:text-primary hover:bg-transparent">
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button asChild className="modal-button rounded-full">
            <Link href="/book-a-demo">Try for Free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
