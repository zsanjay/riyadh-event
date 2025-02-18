import Label from "@/components/label";
import WhyRiyadh from '@/components/why-riyadh';
import EventHighlights from '@/components/event-highlights';

export default function Home() {
  return (
    <>
        <div className="m-auto w-full sm:mt-16">
          <Label />
        </div>
        <div className="m-auto bg-custom-black h-full">
          <WhyRiyadh />
          <EventHighlights />
        </div>
    </>
  );
}
