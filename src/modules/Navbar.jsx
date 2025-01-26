import React, { useContext, useState } from 'react';
import Logo from "../assets/images/logo.svg";
import { navbarList } from '../hooks/useRoute';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import { IoIosMore } from 'react-icons/io';
import AvatarIcon from "../assets/images/avatar.png";
import { Modal } from '../components/Modal';
import { Context } from '../context/Context';

const Navbar = () => {
  const userInfo = JSON.parse(localStorage.getItem("user_info")) || {}
  const [logOutModal, setlogOutModal] = useState(false);
  const [activeIcon, setActiveIcon] = useState("Home");
  const {setToken} = useContext(Context)

  function handelLogOut(){
    setlogOutModal(true)
    location.replace("/")
    localStorage.removeItem("token")
    setToken(null)
  }

  return (
    <div className="w-[16.7%] bg-[#152259] h-[100vh] border-r-[2px] border-slate-400 overflow-y-auto flex items-center justify-center flex-col  ">
      <img 
        className="pb-[22px]" 
        src={Logo} 
        alt="Logo" 
        width={65} 
        height={65  } 
      />
      <p className='font-semibold text-[14px] leading-[18px] text-white mb-[40px]'>Udemy Inter. school</p>
      <span className='w-full h-[1px] bg-[#BDBDBD] mb-[16px]'></span>
      <nav className="space-y-[18px]">
        {navbarList.map(item => (
          <NavLink 
            onClick={() => setActiveIcon(item.title)} 
            
            className={`flex text-white ${item.title === "Features" ? "mt-[114px]" : ""} font-semibold text-[14px] py-[11px] leading-[18px] items-center px-[16px] rounded-[4px] gap-[16px]`} 
            key={item.id}
            to={item.path}
          >
            {activeIcon === item.title ? item.activeIcon : item.icon}
            <span>{item.title}</span>
            {item.title === "Features" ? <span className='fonst-semibold text-[10px] leading-[12px] w-[39px] border-[#152259] border-[1px] py-[3px] bg-[#B9D7F1] text-center rounded-[10px] text-black'>NEW</span> : "" }
            
          </NavLink>
          
        ))}
      </nav>
      
    </div>
  );
};

export default Navbar;
