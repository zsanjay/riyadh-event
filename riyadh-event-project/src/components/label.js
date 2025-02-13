import DesktopContainer from "./desktop-container";
import MobileContainer from "./mobile-container";

export default function Label() {
  const heading = "Riyadh Rising ";
  const year = "2025";
  const subHeading = "Unleashing Global Innovation in the Heart of Riyadh";
  return (
    <>
      <DesktopContainer>
        <div className="hidden sm:block h-200 sm:ml-10">
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
            <Content text1={heading + year + " is where the world's brightest startups, visionary investors,"} text2="and industry leaders converge to drive innovation and unlock boundless" screenType="M"/>
        </div>
      </MobileContainer>
    </>
  );
}


function Content({text1 , text2, screenType = 'D', additionalClass}) {

    let contentClasses = "absolute [font-family:'Gotham-Book', Helvetica] font-normal  text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap ";

    
    if(screenType === 'M') {
        return (
            <div className="h-52 w-1034">
          <p className="absolute block px-3 py-2 [font-family:'Gotham-Book', Helvetica] font-normal  text-white text-base tracking-[0] leading-[normal] break-normal">
            { text1 } 
          </p>
          <p className="absolute mt-10 block px-3 py-2 [font-family:'Gotham-Book', Helvetica] font-normal  text-white text-base tracking-[0] leading-[normal] break-normal">
            { text2 }
          </p>
        </div>
        )
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