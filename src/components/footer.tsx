'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-border relative">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <svg className="h-8 w-8" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 2C8.376 2 3 7.376 3 14C3 20.624 8.376 26 15 26C21.624 26 27 20.624 27 14C27 7.376 21.624 2 15 2ZM15 4C20.543 4 25 8.457 25 14C25 19.543 20.543 24 15 24C9.457 24 5 19.543 5 14C5 8.457 9.457 4 15 4ZM15 7C13.895 7 13 7.895 13 9C13 10.105 13.895 11 15 11C16.105 11 17 10.105 17 9C17 7.895 16.105 7 15 7ZM11.4004 11.1992C10.7644 11.1992 10.2148 11.5426 10.0098 12.1016L8.0098 17.1016C7.8028 17.6626 8.0223 18.2713 8.6113 18.5703C9.2003 18.8693 9.8028 18.6499 10.0098 18.0859L12.0098 13.0859C12.2168 12.5249 12.0145 11.9162 11.4824 11.6172C11.2937 11.3182 11.4004 11.1992 11.4004 11.1992ZM18.5898 11.1992C18.5898 11.1992 18.6966 11.3182 18.5078 11.6172C17.9758 11.9162 17.7735 12.5249 17.9805 13.0859L19.9805 18.0859C20.1875 18.6499 20.79 18.8693 21.3789 18.5703C21.9679 18.2713 22.1874 17.6626 21.9805 17.1016L19.9805 12.1016C19.7755 11.5426 19.2258 11.1992 18.5898 11.1992ZM15 13C13.343 13 12 14.343 12 16C12 17.657 13.343 19 15 19C16.657 19 18 17.657 18 16C18 14.343 16.657 13 15 13ZM15 15C15.552 15 16 15.448 16 16C16 16.552 15.552 17 15 17C14.448 17 14 16.552 14 16C14 15.448 14.448 15 15 15Z"
                  fill="#3FC186"
                />
              </svg>
              <span className="font-bold text-lg">DataGenie</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transforming data into actionable insights to help businesses make smarter decisions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com/datagenieai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">Follow DataGenie on Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/datagenieai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">Connect with DataGenie on LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/overview" className="text-sm text-muted-foreground hover:text-foreground">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/genieplus" className="text-sm text-muted-foreground hover:text-foreground">
                  Genie+
                </Link>
              </li>
              <li>
                <Link href="/top-stories" className="text-sm text-muted-foreground hover:text-foreground">
                  Top Stories
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-sm text-muted-foreground hover:text-foreground">
                  Explorer
                </Link>
              </li>
              <li>
                <Link href="/forecasting" className="text-sm text-muted-foreground hover:text-foreground">
                  Forecasting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/datagenie-for-retail" className="text-sm text-muted-foreground hover:text-foreground">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="/datagenie-for-csps" className="text-sm text-muted-foreground hover:text-foreground">
                  Telecom
                </Link>
              </li>
              <li>
                <Link href="/finops" className="text-sm text-muted-foreground hover:text-foreground">
                  FinOps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faqs" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/data-sources" className="text-sm text-muted-foreground hover:text-foreground">
                  Data Connectors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about-us#team" className="text-sm text-muted-foreground hover:text-foreground">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-muted-foreground hover:text-foreground">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DataGenie. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
