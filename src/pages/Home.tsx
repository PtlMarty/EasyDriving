import About from "@/components/About";
import CardSection from "@/components/CardSection";
import Contacts from "../components/Contacts";
import Hero from "../components/Hero";

import "../styles/App.css";

function App() {
  //TODO: lock onscroll and add anchor points

  return (
    <>
      <main className="w-full p-2 ">
        <Hero className="flex justify-center" />
        <CardSection ClassName="flex flex-col xl:flex-row items-center justify-center scroll-m-0 overflow-hidden" />
        <About />
        <Contacts />
      </main>
    </>
  );
}

export default App;
