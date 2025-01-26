import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Input = ({name, type, placeholder, extraClass, defaultValue}) => {
  const [showPass, setShowPass] = useState(false)

  return (
    <>
    {type == "password" ? 
      <label className='relative w-full'>
        <input defaultValue={defaultValue} autoComplete='off' required className={`py-[23px] text-[14px] w-full focus:border-[#1DA1F2] pl-[20px] outline-none border-[0.5px] border-[#00000033] rounded-[6px] ${extraClass}`} name={name} type={showPass ? "text" : type} placeholder={placeholder} />
        
      </label>
     : 
      <input defaultValue={defaultValue} required className={`py-[23px] text-[14px] focus:border-[#1DA1F2] pl-[20px] outline-none border-[1px] border-[#00000033] rounded-[6px] ${extraClass}`} name={name} type={type} placeholder={placeholder} />
      }
    </>
  )
}

export default Input