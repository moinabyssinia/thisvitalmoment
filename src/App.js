import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Merchandise from "./components/Merchandise";
import Videos from "./components/Videos";
import Contacts from "./components/Contacts";
// use npm run deploy to publish

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
    <Services />
    <Merchandise />
    <Videos />
    <Contacts />
    </>
  );
}

export default App;
