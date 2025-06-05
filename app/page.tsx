import Header from "@/components/Header";
import About from "@/components/sections/home/About";
import Hero from "@/components/sections/home/Hero";
import Locations from "@/components/sections/home/Locations";

export default function Home() {
  return (
 <main>
  <Header />
  <Hero />
  <About />
  <Locations />
  <div className="h-[300vh] bg-background" />
 </main>
  );
}
