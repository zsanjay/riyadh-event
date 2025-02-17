import Header from '@/components/header';
import WhyRiyadh from '@/components/why-riyadh';
import EventHighlights from '@/components/event-highlights';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/rising-riyadh-logo.svg" />
      </Head>
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
