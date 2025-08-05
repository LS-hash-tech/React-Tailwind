import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="text-2xl font-bold text-blue-600">
        Tailwind is working!
      </div>

      <Navbar />
      <Hero />
    </>
  );
}

export default App;
