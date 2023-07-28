import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import SloganSection from "./components/sloganSection/SloganSection";
import Testimonials from "./components/testimonials/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 20, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Intro />
      <Services />
      <SloganSection />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
