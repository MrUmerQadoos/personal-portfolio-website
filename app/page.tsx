import Introduction from "@/components/Intro/Introduction";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-row  w-screen items-center  px-4">
      <div className="w-1/5 hidden lg:flex md:hidden flex-col ">
        <div className=" ">
          <Introduction />
        </div>
      </div>
      <div className="lg:w-4/5 md:w-screen sm:w-screen flex flex-col top-0 right-0">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
