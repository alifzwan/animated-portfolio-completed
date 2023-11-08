
import "./app.scss";
// import Hero from "./components/pages/home/homepage/hero/Hero";
// import Navbar from "./components/pages/home/homepage/navbar/Navbar";
// import AboutNavBar from "./components/pages/home/about/aboutNavbar/AboutNavBar";
// import About from "./components/pages/home/about/About";
// import AboutBotBar from "./components/about/aboutBotbar/AboutBotBar";
// import Frameworks from "./components/pages/home/frameworks/Frameworks";
// import Credits from "./components/pages/home/credits/Credits";

import Home from "./components/pages/home/Home"


import Project from "./components/pages/showcase/project/Project";
import Register from "./components/pages/showcase/register/Register";
import Order from "./components/pages/showcase/order/Order";
import Admin from "./components/pages/showcase/admin/Admin";
import Track from "./components/pages/showcase/track/Track";
import Info from "./components/pages/showcase/info/Info";




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <>
    <Router>
    <Routes>
        <Route path = '/' exact element={<Home />}/>
          <Route path = '/project' exact  element={<Project />} />
          <Route path = '/register' exact  element={<Register />} />
          <Route path = '/order' exact  element={<Order />} />
          <Route path = '/admin' exact  element={<Admin />} />
          <Route path = '/track' exact  element={<Track />} />
          <Route path = '/info' exact  element={<Info />} />
        </Routes>
          
    </Router>
    </>
    
  );
};

export default App;
