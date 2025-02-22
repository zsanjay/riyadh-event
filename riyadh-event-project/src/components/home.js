import Link from "next/link";
import DesktopContainer from "./desktop-container";
import MobileContainer from "./mobile-container";
import SocialLinks from './social-links';

export default function Home() {
  const heading = "Riyadh Rising ";
  const year = "2025";
  const subHeading = "Unleashing Global Innovation in the Heart of Riyadh";
  return (
    <>
      <DesktopContainer>
      <div className="flex justify-between items-center">
        <div className="w-1/2 hidden sm:block sm:ml-10">
          <div>
            <p className="font-ultra font-black text-transparent text-[158px] tracking-tight leading-[normal] whitespace-nowrap">
              <span className="font-ultra italic text-white">
                {heading}
              </span>
              <span className="font-ultra italic text-custom-teal">
                {year}
              </span>
            </p>
          </div>
          <div className="h-68 w-1554">
            <p className="font-book font-normal italic text-white text-[61px] tracking-[0] leading-[normal] whitespace-nowrap">
              {subHeading}
            </p>
          </div>
          <div className="sm:mt-8">
            <Content text1={heading + year + " is where the world's brightest startups, visionary investors,"} text2="and industry leaders converge to drive innovation and unlock boundless" additionalClass="mt-8"/>
          </div>
          <div>
            <Content text1={"Join us for  where the world's brightest startups, visionary investors,"} text2="and industry leaders converge to drive innovation and unlock boundless" additionalClass="mt-8"/>
          </div>
          <div className="w-[389px] h-[50px]">
            <div className="font-book font-normal italic text-white text-[45px] tracking-[0] leading-[normal] whitespace-nowrap">
                April 21-22, 2025.
            </div>
          </div>
          <div className="w-[497px] h-20 sm:mt-8">
            <div className="border-2 border-custom-teal p-2 rounded-lg">
              <Link href="#event-highlights" className="font-bold italic text-custom-teal text-[37px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Discover Event Highlights
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden sm:block justify-end">
            <SocialLinks/>
          </div>
        </div>
      </DesktopContainer>

      <MobileContainer>
        <div className="h-175 w-1553">
          <p className="block px-3 py-2 font-ultra font-black text-transparent text-base tracking-tight leading-[normal] whitespace-nowrap">
            <span className="font-ultra italic text-white">
              {heading}{" "}
            </span>
            <span className="font-ultra italic text-custom-teal">
              {year}
            </span>
          </p>
        </div>
        <div className="h-68 w-1554">
          <p className="block px-3 py-2 font-book font-normal italic text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            {subHeading}
          </p>
        </div>
        <div className="sm:mt-8">
            <Content text1={heading + year + " is where the world's brightest startups, visionary investors,"} text2="and industry leaders converge to drive innovation and unlock boundless" screenType="M"/>
        </div>
        <div className="sm:mt-2">
            <Content text1={"Join us for  where the world's brightest startups, visionary investors,"} text2="and industry leaders converge to drive innovation and unlock boundless" screenType="M"/>
        </div>
        <div className="w-[389px] h-[50px]">
            <div className="absolute block px-3 py-2 font-book font-normal italic text-white text-base tracking-[0] leading-[normal] break-normal">
                April 21-22, 2025.
            </div>
          </div>
          <div className="w-[375px] h-9">
          <div className="border-2 border-custom-teal p-2 rounded-lg">
            <Link href="#event-highlights" className="font-bold italic  text-custom-teal text-base tracking-[0] leading-[normal] break-normal">
                Discover Event Highlights
            </Link>
            </div>
          </div>
      </MobileContainer>
    </>
  );
}


function Content({text1 , text2, screenType = 'D', additionalClass}) {

    const contentClasses =
      'absolute font-book font-normal  text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap ';

    
    if(screenType === 'M') {
        return (
          <div className="h-24 w-1034">
            <p className="absolute block px-3 py-2 font-book font-normal  text-white text-base tracking-[0] leading-[normal] break-normal">
              {text1}
            </p>
            <p className="absolute mt-10 block px-3 py-2 font-book font-normal  text-white text-base tracking-[0] leading-[normal] break-normal">
              {text2}
            </p>
          </div>
        );
    }
    return (
        <div className="h-20 w-1034">
          <p className={contentClasses}>
            { text1 } 
          </p>
          <p className={additionalClass ? contentClasses + additionalClass : contentClasses}>
            { text2 }
          </p>
        </div>
    )
}