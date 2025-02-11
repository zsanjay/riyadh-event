import "./home.css";
import Header from "./header";

export default function HomeLayout({ children }) {
    return (
        <>
     <div className="h-screen bg-custom">
        <Header />
      <div className="container ml-28">
        {children}
        </div>
      </div>
      </>
    );
}
