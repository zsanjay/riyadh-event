import NavBar from '@/components/navbar';
import SectionTitle from '@/components/section-title';
import WhyRiyadh from '@/components/why-riyadh';

export default function Home() {
  return (
    <>
      <div className="m-auto bg-black h-full w-full">
        <div className="m-auto bg-pink-500 w-full ">
          {/* div will have same bg as navbar */}
          <NavBar></NavBar>
        </div>

        <div className="m-auto max-w-[1920px] border-2 border-yellow-500 h-full">
          <WhyRiyadh></WhyRiyadh>
        </div>
      </div>
    </>
  );
}
