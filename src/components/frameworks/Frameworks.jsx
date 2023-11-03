import React from "react";
import "./frameworks.scss";
import { motion } from "framer-motion";


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


const Frameworks = () => {
  const frameworks = [
    { name: "Truffle"      , logo: "/truffle.svg", link: "https://trufflesuite.com/docs/truffle/"},
    { name: "Ganache"      , logo: "/ganache.svg", link: "https://trufflesuite.com/docs/ganache/"},
    { name: "Solidity"     , logo: "/solidity.svg", link: "https://docs.soliditylang.org/en/v0.8.22/"},
    { name: "Ethereum"     , logo: "/ethereum.svg", link: "https://ethereum.org/en/developers/docs/"},
    { name: "Remix"        , logo: "/remix.png", link: "https://remix.ethereum.org/"},
    { name: "React.js"     , logo: "/react.svg", link: "https://react.dev/learn/installation"},
    { name: "Vite"         , logo: "/vite.svg", link: "https://vitejs.dev/guide/"},
    { name: "Framer-Motion", logo: "/framer-motion.png", link: "https://www.framer.com/motion/"},
  ];

  return (
    <motion.div className="frameworks"
          variants={Variants} 
          initial="initial"
          animate="animate" >

      <h2 className="section-title">Frameworks</h2>


      <div className="framework-list">
        {frameworks.map((framework, index) => (

          <motion.div className="framework-item" 
          key={index} 
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.95 }}>
            
          <a href={framework.link} target="_blank" rel="noopener noreferrer">
          <img  src={framework.logo} alt={framework.name} />
          <p>{framework.name}</p>
          
          </a>
          </motion.div>

          
        ))}
      </div>


    </motion.div>
  );
};

export default Frameworks;
