import "./home.css";
import Header from "@/components/header";

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="h-screen bg-custom md:shrink-0">
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
}
