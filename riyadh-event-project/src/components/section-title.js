'use client';

export function SectionTitleCircle() {
  return (
    <div className="size-[20px] rounded-[50%] bg-section-title-circle"></div>
  );
}
export default function SectionTitle(props) {
  return (
    <div className="flex justify-center items-center gap-[15px] ">
      {SectionTitleCircle()}
      <div className="text-custom-teal font-medium italic text-[98px] font-ultra pr-[15px]">
        {props.title}
      </div>
      {SectionTitleCircle()}
    </div>
  );
}
