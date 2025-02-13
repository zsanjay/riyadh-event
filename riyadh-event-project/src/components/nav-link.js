import Link from "next/link";

export default function NavLink({ text, screenType = "D" }) {
  if (screenType == "M") {
    return (
      <Link
        href="#"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        {text}
      </Link>
    );
  }
  return (
    <Link
      href="#"
      className="rounded-md px-3 py-2 w-200 h-23 [font-family:'Gotham-Book', Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap"
    >
      {text}
    </Link>
  );
}
