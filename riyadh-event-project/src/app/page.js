import Home from "@/components/home";
import WhyRiyadh from '@/components/why-riyadh';
import EventHighlights from '@/components/event-highlights';

export default function Root() {
  return (
    <>
        <div className="m-auto w-full sm:mt-16">
          <Home />
        </div>
        <div className="m-auto bg-custom-black h-full">
          <WhyRiyadh />
          <EventHighlights />
        </div>
    </>
  );
}
