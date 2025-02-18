import Link from 'next/link';

export default function NavLink({ sectionId, text, screenType = 'D' }) {
  if (screenType == 'M') {
    return (
      <Link
        href={sectionId}
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        {text}
      </Link>
    );
  }
  return (
    <Link
      href={sectionId}
      className="rounded-md px-3 py-2 w-200 h-23 font-book font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap"
    >
      {text}
    </Link>
  );
}
