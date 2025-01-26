import React from 'react';
import Navbar from '../modules/Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex	'>
      <Navbar />
      <div className='w-[83.3%]'>{children}</div>
    </div>
  );
};

export default DashboardLayout;
