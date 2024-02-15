import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/work";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
