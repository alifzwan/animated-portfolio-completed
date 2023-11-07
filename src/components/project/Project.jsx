// import React from "react";
import "./project.scss";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"

import LinksAdmin from "./projectlinks/ProjectLinksAdmin";
import LinksInfo from "./projectlinks/ProjectLinksInfo";
import LinksOrd from "./projectlinks/ProjectLinksOrd";
import LinksReg from "./projectlinks/ProjectLinksReg";
import LinksTrack from "./projectlinks/ProjectLinksTrack";




const Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};


const Project = () => {
  //   const navigate = useNavigate()

  //   const redirect_to_registration = () => {
  //     navigate('/register')
  //   }
  //   const redirect_to_ordering = () => {
  //     navigate('/order')
  //   }
  //   const redirect_to_administration = () => {
  //     navigate('/admin')
  //   }
  //   const redirect_to_tracking = () => {
  //     navigate('/track')
  //   }
  //   const redirect_to_information = () => {
  //     navigate('/info')
  // }
   

    
  const supplychains = [
    { name: "Farmer"      , image: "/farmer.svg"      , action:  <LinksReg />},
    { image: "/arrow.png"},

    { name: "Manufacturer", image: "/manufacturer.svg", action: <LinksOrd /> },
    { image: "/arrow.png"},

    { name: "Distributor" , image: "/distributor.svg" , action:  <LinksTrack />},
    { image: "/arrow.png"},

    { name: "Retailer"    , image: "/retailer.svg"    , action:  <LinksInfo />},
  ];

  return (
    <motion.div className="supplychain"
          variants={Variants} 
          initial="initial"
          animate="animate" >

          {/* <Navbar />,
          <Hero />,
          <AboutNavBar />,
          <About />,
          <AboutBotBar />,
          <Frameworks />,
          <Credits />      */}

      <h2 className="section-title">Supply Chain Flow</h2>


      <div className="supplychain-list">
        {supplychains.map((supplychain, index) => (

        <motion.div className="supplychain-item" 
          key={index}>

          <motion.img src={supplychain.image} alt={supplychain.name} 
            whileHover={{ scale: 1.1}}
             whileTap={{ scale: 0.95 }}/>

        
            
          {supplychain.name && (
            <motion.p 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}>
                {supplychain.name}
            </motion.p>

          )}

          {supplychain.name && (
            <motion.div className="supplychain-button">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}                
                >
                  {supplychain.action}
                </motion.button>
            </motion.div>
              
            )}
        </motion.div>
        
        ))}
      </div>

      <motion.div className="adminsupplychain-button">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LinksAdmin />
                </motion.button>
      </motion.div>

      <p className="project-description">
        <b>Only</b> 
        <a href="https://coinsbench.com/understanding-contract-ownership-in-solidity-and-access-control-patterns-1a04116042ce#:~:text=Contract%20ownership%20refers%20to%20the,transferred%20dynamically%20using%20specific%20functions."> Owner </a> 
        <b>can register the supply chain. Owner is the the person who deployed the smart contract on the blockchain</b>
      </p>

    </motion.div>
  );
};

export default Project;
