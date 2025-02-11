import Image from 'next/image';

export default function Header() {
    return (
        <>
<nav>
  <div className="container ml-auto mx-auto max-w-full px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          
          <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-around sm:items-stretch sm:justify-around">
        <div className="flex shrink-0 items-center">
          <Image className="h-8 w-auto" src="/logo.png" alt="Logo" width={80} height={80} />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            
            {/* <a href="#" className="rounded-md px-3 py-2 text-sm w-297 h-33 font-gotham text-white hover:bg-gray-700" aria-current="page">Discover Event Highlights</a> */}
            <a href="#" className="rounded-md px-3 py-2 w-200 h-23 [font-family:'Gotham-Book', Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap" >Discover Event Highlights</a>
            <a href="#" className="rounded-md px-3 py-2 w-200 h-23 [font-family:'Gotham-Book', Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">Explore Ticket Options</a>
            <a href="#" className="rounded-md px-3 py-2 w-200 h-23 [font-family:'Gotham-Book', Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">Join as a Partner</a>
            <a href="#" className="rounded-md px-3 py-2 w-200 h-23 [font-family:'Gotham-Book', Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">Get in Touch</a>
            <a href="#" className="rounded-md bg-yellow-400 px-3 py-2 w-200 h-23 [font-family:'Gotham-Book', Helvetica] font-bold italic text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">Register Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
      <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Discover Event Highlights</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Explore Ticket Options</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Join as a Partner</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Get in Touch</a>
    </div>
  </div>
</nav>
</>
    )
}