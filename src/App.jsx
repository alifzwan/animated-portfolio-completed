
import "./app.scss";
import Hero from "./components/homepage/hero/Hero";
import Navbar from "./components/homepage/navbar/Navbar";
import AboutNavBar from "./components/about/aboutNavbar/AboutNavBar";
import About from "./components/about/About";
// import AboutBotBar from "./components/about/aboutBotbar/AboutBotBar";
import Project from "./components/project/Project";

import Register from "./components/register/Register";
import Order from "./components/order/Order";
import Admin from "./components/admin/Admin";
import Track from "./components/track/Track";
import Info from "./components/info/Info";


import Frameworks from "./components/frameworks/Frameworks";
import Credits from "./components/credits/Credits";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <div className="App">
      
      <section id="Homepage">
      <Navbar />
      <Hero />
      </section>

      <section id="About Me">
      <AboutNavBar />
      <About />
      {/* <AboutBotBar /> */}
      </section>
      
      <section id="Project">
      <Project />
      </section>

      <section id="Register">
      <Register />
      </section>

      <section id="Order">
      <Order />
      </section>

      <section id="Administer">
      <Admin />
      </section>

      <section id="Track">
      <Track />
      </section>

      <section id="Info">
      <Info />
      </section>

      <section id="Framework">
      <Frameworks />
      <Credits />
      </section>









    {/* <section id="Homepage">
        <React.Fragment>
          <Navbar />
          <Hero />
          <AboutNavBar />
          <About />
          <AboutBotBar />
          <Frameworks />
          <Credits />
        </React.Fragment>
    </section> */}

      {/* <Routes>
          <Route exact path="/"         element={<Project />} />
          <Route exact path="/register" element={<Register /> } />
          <Route exact path="/order"    element={<Order /> } />
          <Route exact path="/admin"    element={<Admin /> } />
          <Route exact path="/track"    element={<Track /> } />
          <Route exact path="/info"     element={<Info /> } />
      </Routes> */}
    </div>
    
  );
};

export default App;
