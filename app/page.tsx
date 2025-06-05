import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/sections/home/About";
import Hero from "@/components/sections/home/Hero";
import JoinUs from "@/components/sections/home/JoinUs";
import Locations from "@/components/sections/home/Locations";
import Socials from "@/components/sections/home/Socials";

export default function Home() {
  return (
 <main>
  <Header />
  <Hero />
  <About />
  <Locations />
  <Socials />
  <JoinUs />
  <Footer />
 </main>
  );
}
