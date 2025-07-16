import Sections1 from "./components/Sections";
import Section3 from "./components/Section3";
import Section2 from "./components/Section2";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <Sections1 />
      <Section2 className="h-screen" />
      <Section3 className="h-screen" />
      <Footer/>
    </div>
  );
}
