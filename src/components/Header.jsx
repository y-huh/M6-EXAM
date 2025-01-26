import React from 'react'
import Bell from "../assets/images/bell.png"


const Header = () => {
    function handleLogOut(){
        location.replace("/")
        localStorage.removeItem("token")
        setToken(null)
    
      }
  return (
        
        <div  className='absolute top-10 right-10 flex items-center gap-[40px]'>
          <a href="">
            <img src={Bell} alt="" />
          </a>
          <button className='w-[120px] py-3 text-center text-white rounded-[10px] bg-[#509CDB] cursor-pointer' onClick={handleLogOut}>Log Out</button>

      </div>  )
}

export default Header