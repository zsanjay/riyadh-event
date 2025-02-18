'use client';

import SectionTitle from '@/components/section-title';
import Carousel from '@/components/corousal';
export default function EventHighlights() {
  return (
    <section id="event-highlights">
    <div className="text-center text-white font-book bg-custom-black">
      <SectionTitle title="Event Highlights"></SectionTitle>
      <div className="mt-[112px] mb-[265px] text-3xl italic">
        Riyadh Rising 2025 is designed to create unparalleled opportunities for
        startups, investors, and business leaders.
      </div>
      <Carousel />
    </div>
    </section>
  );
}
