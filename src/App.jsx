
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";



function App() {

  return (
    <div className="app">

      <Navbar />
      <main>
        
        <Hero/>
        <Work />
        
        <Stats/>
        <Testimonials/>
        
        <Booking />
        <Footer />
      
      </main>
    </div>
  );
}

export default App;

