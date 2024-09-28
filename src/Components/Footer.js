import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PiSpinnerBallDuotone } from "react-icons/pi";
import { PiNotebookFill } from "react-icons/pi";
import { PiHandTapFill } from "react-icons/pi";
// import { IoWalletSharp } from "react-icons/io5";
import { useUser } from "../context/userContext";




const Footer = () => {
  const location = useLocation();
  const {selectedExchange} = useUser();


const footerLinks = [
  {
    title: "Earn",
    link: "/",
    icon: selectedExchange.id === 'selectex' ? (
  <img src="https://img.icons8.com/?size=100&id=111607&format=png&color=000000" alt="selectex" className={location.pathname === "/" ? "w-[28px] h-[28px]" : "w-[28px] h-[28px]"} />
) : (
  <img id={selectedExchange.id} src={selectedExchange.icon} alt="selected" className="w-[26px]" />
)
  },
  {
    title: "LuckyWin",
    link: "/roulette",
    icon: <img src='https://img.icons8.com/?size=100&id=111401&format=png&color=000000' alt="spinner" className={location.pathname === "/mongo" ? "w-[26px] h-[26px]" : ""}/>
  },
  {
      title: "Mine",
      link: "/mine",
      icon: <img src='https://img.icons8.com/?size=100&id=ZsO1TG7py63J&format=png&color=000000' alt='mine'className={location.pathname === "/mine" ? "w-[26px] h-[26px]" : ""}/>
    },

{
  title: "Activities",
  link: "/tasks",
  icon: <img src='https://img.icons8.com/?size=100&id=114415&format=png&color=000000' alt="wallet"  className={location.pathname === "/tasks" ? "w-[26px] h-[26px]" : ""} />
},
  {
      title: "Wallet",
      link: "/wallet",
      icon: <img src='https://img.icons8.com/?size=100&id=ZsO1TG7py63J&format=png&color=000000' alt="wallet" className={location.pathname === "/wallet" ? "w-[26px] h-[26px]" : ""}/>
  },
]
  return (
    <div className="w-full z-30 flex items-center px-[8px] h-[72px] pbd-[2px] justify-center space-x-2 pb-[3px] rounded-[35px]">

      {footerLinks.map((footer, index) => (
      <NavLink 
      id={`reels${footer.title}`}
      key={index}
      to={footer.link}
      className={location.pathname === `${footer.link}` ? 
      'w-[25%] py-3 flex flex-col h-[60px] px-[6px] mt-1 rounded-[10px] bg-cards items-center justify-center text-[#fff] text-[13px] relative before:h-[4px] before:absolute before:top-[1px] before:w-[4px] before:rounded-full before:bg-accent'
  : 'w-[25%] py-3 flex flex-col space-y-[2px] rounded-[10px] items-center justify-center text-[#c6c6c6] text-[13px]'}>
              <div id={`reels2${footer.title}`} className={location.pathname === `${footer.link}` ? 
  "space-y-[2px] flex flex-col rounded-[10px] items-center justify-center text-white text-[11px]"
  : "flex flex-col space-y-[4px] rounded-[10px] items-center justify-center text-[#949494] text-[11px]"}>
                {footer.icon}
           
        <span id="reels3" className={`${location.pathname === `${footer.link}` ? "text-[#fff]" : "text-[#949494]"} font-medium mb-[-2px]`}>{footer.title}</span>
        </div>
        </NavLink>
      ))}
    
    </div>
  );
};

export default Footer;
