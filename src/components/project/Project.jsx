import React from "react";
import "./project.scss";
import { motion } from "framer-motion";
import ProjectLinksReg from "./projectlinks/ProjectLinksReg"
import ProjectLinksOrd from "./projectlinks/ProjectLinksOrd"
import ProjectLinksInfo from "./projectlinks/ProjectLinksInfo"
import ProjectLinksTrack from "./projectlinks/ProjectLinksTrack"

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
  const supplychains = [
    { name: "Farmer"      , image: "/farmer.svg"      , action:  <ProjectLinksReg />},
    { image: "/arrow.png"},

    { name: "Manufacturer", image: "/manufacturer.svg", action:  <ProjectLinksOrd /> },
    { image: "/arrow.png"},

    { name: "Distributor" , image: "/distributor.svg" , action:  <ProjectLinksTrack />},
    { image: "/arrow.png"},

    { name: "Retailer"    , image: "/retailer.svg"    , action: <ProjectLinksInfo />},
  ];

  return (
    <motion.div className="supplychain"
          variants={Variants} 
          initial="initial"
          animate="animate" >

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

      <h2 className="description">Only Owner can register the supply chain. Owner is the the person who deployed the smart contract on the blockchain</h2>

    </motion.div>
  );
};

export default Project;
