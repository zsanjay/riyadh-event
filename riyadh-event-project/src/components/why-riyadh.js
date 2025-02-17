'use client';

import SectionTitle from '@/components/section-title';

const cardTexts = [
  'Access to the world’s largest investment funds and capital networks.',
  'A thriving ecosystem for startups and entrepreneurs.',
  'Ai, Metaverse, Quantum Compution, DeepTech, FinTech, and Robotics and many more.',
  'Business-friendly policies and tax incentives driving growth.',
];

function Card({ text }) {
  return (
    <div className="w-full min-w-[390px] max-w-[390px] min-h-[390px] bg-gray-900 pt-[20px] pl-[20px]">
      <div className=" size-[68px] rounded-[50%] bg-custom-green shadow-custom-shadow"></div>
      <div className="text-start  mt-[63px] mr-[51px] font-bold text-3xl leading-[33.5px] font-regular">
        {text}
      </div>
    </div>
  );
}
export default function WhyRiyadh() {
  return (
    <div className="text-center text-white font-book bg-custom-why-riyadh">
      <SectionTitle title="Why Riyadh?"></SectionTitle>
      <div className="mt-[80px] mb-[101px] text-3xl italic">
        In Riyadh, innovation meets opportunity—position yourself at the heart
        of a city reshaping the future
      </div>
      <div className="flex flex-col justify-center content-center sm:flex-row gap-[24px] flex-wrap  border-1 border-sky-500">
        {cardTexts.map((text, index) => (
          <Card text={text} key={index}></Card>
        ))}
      </div>
      <div className="px-[200px] mt-[72px] pb-[143px] text-xl ">
        Riyadh, the capital of Saudi Arabia, is the epicenter of innovation and
        investment in the Middle East. Strategically located at the crossroads
        of Europe, Asia, and Africa, it provides access to global markets and
        unmatched opportunities. As the driving force behind
        <span className="text-yellow-500"> Saudi Arabia’s Vision 2030</span>
      </div>
    </div>
  );
}
