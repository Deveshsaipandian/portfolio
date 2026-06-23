import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Credentials } from "@/components/Credentials";
import { Projects } from "@/components/Projects";
import { Console } from "@/components/Console";
import { Research } from "@/components/Research";
import { Background } from "@/components/Background";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Credentials />
        <Projects />
        <Console />
        <Research />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
