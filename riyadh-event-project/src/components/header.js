import Image from 'next/image';
import Link from 'next/link';
import DesktopContainer from './desktop-container';
import MobileContainer from './mobile-container';
import NavLink from './nav-link';

export default function Header() {
  return (
    <>
      <nav className="m-auto max-w-[2500px]">
        <DesktopContainer>
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-around sm:items-stretch sm:justify-around">
              <div className="flex shrink-0 items-center">
                <Image
                  className="h-8 w-auto"
                  src="/images/rising-riyadh-logo.svg"
                  alt="Riyadh Rising Logo"
                  width={80}
                  height={80}
                  priority={true}
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink sectionId="#event-highlights" text="Discover Event Highlights" />
                  <NavLink sectionId="#event-highlights" text="Explore Ticket Options" />
                  <NavLink sectionId="#event-highlights" text="Join as a Partner" />
                  <NavLink sectionId="#event-highlights" text="Get in Touch" />
                </div>
              </div>
              <div>
                <Link
                  href="#"
                  className="header-link-register-now"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </DesktopContainer>

        <MobileContainer>
          <Link
            href="#event-highlights"
            className="header-link-first-mobile"
            aria-current="page"
          >
            Discover Event Highlights
          </Link>
          <NavLink sectionId="#event-highlights" text="Explore Ticket Option" screenType="M" />
          <NavLink sectionId="#event-highlights" text="Join as a Partner" screenType="M" />
          <NavLink sectionId="#event-highlights" text="Get in Touch" screenType="M" />
        </MobileContainer>
      </nav>
    </>
  );
}
