import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
    <Particles 
    className = "particles-canvas"
      params = {{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape:  {
            type: "square",
            stroke: {
              width: 6,
              color: '#f9ab00'
            }
          }
        }
      }}

    />
    <Navbar />
    <Header />
    <AboutMe />
    </>
  );
}

export default App;