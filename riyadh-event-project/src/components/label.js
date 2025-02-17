import DesktopContainer from "./desktop-container";
import MobileContainer from "./mobile-container";
import SocialLinks from './social-links';

export default function Label() {
  const heading = "Riyadh Rising ";
  const year = "2025";
  const subHeading = "Unleashing Global Innovation in the Heart of Riyadh";
  return (
    <>
      <DesktopContainer>
      <div className="flex justify-between items-center">
        <div className="w-1/2 hidden sm:block h-200 sm:ml-10">
          <div className="h-175 w-1553">
            <p className="[font-family:'Gotham_Ultra-Regular', Helvetica] font-black text-transparent text-[158px] tracking-tight leading-[normal] whitespace-nowrap">
              <span className="[font-family:'Gotham_Ultra-Italic', Helvetica] italic text-white">
                {heading}
              </span>
              <span className="[font-family:'Gotham_Ultra-Italic', Helvetica] italic text-[#66fcf1]">
                {year}
              </span>
            </p>
          </div>
          <div className="h-68 w-1554">
            <p className="[font-family:'Gotham_Book-Italic', Helvetica] font-normal italic text-white text-[61px] tracking-[0] leading-[normal] whitespace-nowrap">
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
            <div className="[font-family:'Gotham_Book-Italic', Helvetica] font-normal italic text-white text-[45px] tracking-[0] leading-[normal] whitespace-nowrap">
                April 21-22, 2025.
            </div>
          </div>
          <div className="w-[497px] h-9 sm:mt-8">
            <div className="border-2 border-[#66fcf1] p-2 rounded-lg">
              <div className="[font-family:'Gotham_BoldItalic', Helvetica] font-bold italic text-[#66fcf1] text-[37px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Discover Event Highlights
              </div>
            </div>
          </div>
          <div className="w-1/2 list-none p-0 flex justify-end gap-4 w-[497px] h-9 sm:mt-8">
            <SocialLinks/>
          </div>
        </div>
        </div>
      </DesktopContainer>

      <MobileContainer>
        <div className="h-175 w-1553">
          <p className="block px-3 py-2 [font-family:'Gotham_Ultra-Regular', Helvetica] font-black text-transparent text-base tracking-tight leading-[normal] whitespace-nowrap">
            <span className="[font-family:'Gotham_Ultra-Italic', Helvetica] italic text-white">
              {heading}{" "}
            </span>
            <span className="[font-family:'Gotham_Ultra-Italic', Helvetica] italic text-[#66fcf1]">
              {year}
            </span>
          </p>
        </div>
        <div className="h-68 w-1554">
          <p className="block px-3 py-2 [font-family:'Gotham_Book-Italic', Helvetica] font-normal italic text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
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
            <div className="absolute block px-3 py-2 [font-family:'Gotham_Book-Italic', Helvetica] font-normal italic text-white text-base tracking-[0] leading-[normal] break-normal">
                April 21-22, 2025.
            </div>
          </div>
          <div className="w-[375px] h-9">
          <div className="border-3 border-[#66fcf1] p-2 rounded-lg">
            <div className=" [font-family:'Gotham_BoldItalic', Helvetica] font-bold italic  text-[#66fcf1] text-base tracking-[0] leading-[normal] break-normal">
                Discover Event Highlights
            </div>
            </div>
          </div>
      </MobileContainer>
    </>
  );
}


function Content({text1 , text2, screenType = 'D', additionalClass}) {

    let contentClasses =
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