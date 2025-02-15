import Header from '@/components/header';
import WhyRiyadh from '@/components/why-riyadh';
import EventHighlights from '@/components/event-highlights';


export default function Home() {
  return (
    <>
      <div className="m-auto bg-black h-full w-full">
        <div className="m-auto bg-pink-500 w-full ">
          <Header />
        </div>

        <div className="m-auto max-w-[1920px] border-2 border-yellow-500 h-full">
          <WhyRiyadh />
          <EventHighlights />
          
        </div>
      </div>
    </>
  );
}
