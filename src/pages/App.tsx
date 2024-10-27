import CardSection from "@/components/CardSection";
import Contacts from "../components/Contacts";
import Hero from "../components/Hero";
import "../styles/App.css";

function App() {
  //TODO: lock onscroll and add anchor points

  return (
    <>
      <main className="w-full p-2 ">
        <Hero className=" flex justify-center " />
        <CardSection />
        <Contacts />
      </main>
    </>
  );
}

export default App;
