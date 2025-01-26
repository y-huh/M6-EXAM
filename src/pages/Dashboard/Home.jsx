import React from 'react'
import Header from '../../components/Header'
import dashone from "../../assets/images/dash1.svg"
import dashtwo from "../../assets/images/dash2.svg"
import dashthree from "../../assets/images/dash3.png"
import { BiSupport } from 'react-icons/bi'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'


const Home = () => {
  
  return (
    
    <div className='flex relative flex-col'>
      <div className='absolute fixed items-center gap-[10px] w-[180px] flex py-[22px] justify-center rounded-[35px] bg-[#152259] bottom-[164px] right-[120px]'>
      <BiSupport color='white'/>
      <span className='text-white pr-[29px] '>Support</span>
      <MdOutlineKeyboardArrowUp color='white'/>


      </div>
      <div className='relative'>
      <div className='pt-[44px] pl-[150px]'>
          <h4 className='font-medium text-[16px] text-[#424242] leading-[20px]'>Learn  how to launch faster</h4>
          <p className='font-normal text-[16px] text-[#424242] leading-[20px]'>watch our webinar for tips from our experts and get a limited time offer.</p>
        </div>
      <Header/>
      </div>
      <div>
        <h1 className='text-center mt-[58px] text-[#4F4F4F] text-[36px] font-semibold leading-[44px]'>Welcome to your dashboard, Udemy school</h1>
        <div className='pl-[216px] pt-[23px]'>
          <p className='text-[#4F4F4F] pl-[20px] font-semibold text-[24px] leading-[30px]'>Uyo/school/@teachable.com</p>
          <ul className='mt-[75px] space-y-[45px]'>
            <li className='flex items-start gap-[20px]'>
              <img src={dashone} alt="" />
              <div className='w-[455px] space-y-[16px]'>
                <h2 className='text-[24px] text-[#4F4F4F] font-medium leading-[19px]'>Add classes  </h2>
                <p className='text-[14px] text-[#4F4F4F] leading-[px]'>Create rich course content and coaching products for your students.
                When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
            </li>
            <li className='flex items-start gap-[20px]'>
              <img src={dashtwo} alt="" />
              <div className='w-[455px] space-y-[16px]'>
                <h2 className='text-[24px] text-[#4F4F4F] font-medium leading-[19px]'>Add students </h2>
                <p className='text-[14px] text-[#4F4F4F] leading-[px]'>Create rich course content and coaching products for your students.
                When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
            </li>
            <li className='flex items-start gap-[20px]'>
              <img src={dashthree} alt="" />
              <div className='w-[455px] space-y-[16px]'>
                <h2 className='text-[24px] text-[#4F4F4F] font-medium leading-[19px]'>Add other admins </h2>
                <p className='text-[14px] text-[#4F4F4F] leading-[px]'>Create rich course content and coaching products for your students.
                When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home