import Hero from "@/components/Hero";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <Hero />
      <Career />
      <Skills />
      <About />
    </main>
  );
}
