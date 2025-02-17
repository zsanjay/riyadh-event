import Header from '@/components/header';
import WhyRiyadh from '@/components/why-riyadh';
import EventHighlights from '@/components/event-highlights';

export default function Home() {
  return (
    <>
      <div className="m-auto bg-custom-black h-full w-full">
        <div className="m-auto w-full ">
          <Header />
        </div>
        <div className="m-auto max-w-[1920px] h-full">
          <WhyRiyadh />
          <EventHighlights />
        </div>
      </div>
    </>
  );
}
