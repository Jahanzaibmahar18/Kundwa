import Navbar from "./components/common/Navbar";
import HowWorks from "./components/pages/Howworks";
import Features from "./components/pages/Features";
import Pricing from "./components/pages/Pricing";
import Lovestories from "./components/pages/Lovestories";
import HelpVideos from "./components/pages/HelpVideos";
import Footer from "./components/common/Footer";
import Motion from "./components/pages/Motion";
import HeroSection from "./components/pages/HeroSection";


function App() {
  return (
    <div className="min-h-screen bg-[#080617]">
      <Navbar />
      <main>
        <HeroSection/>
        <HowWorks />
        <Features />
        <Pricing />
        <Lovestories />
        <Motion/> 
        <HelpVideos />
      </main>
      <Footer/> 
    </div>
  );
}

export default App;