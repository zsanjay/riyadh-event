import Link from 'next/link';

export default function NavLink({ sectionId, text, screenType = 'D' }) {
  return (
    <Link href={sectionId} className={screenType == 'M' ? 'header-link-mobile' : 'header-link-desktop'}>
      {text}
    </Link>
  );
}
