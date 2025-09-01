import Home from "./Home";
import About from "./about";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Navbar from "./Navbar";

export default function Page() {
  return (
    <main className="main-page">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
