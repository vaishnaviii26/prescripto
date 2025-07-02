import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          {/* -----------Left Section---------*/}
          <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
             <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is an efficient hospital management platform designed to simplify healthcare for both patients and doctors. Patients can easily register, explore available doctors, and book appointments based on real-time availability. Doctors can manage their schedules, view patient bookings, and ensure smooth consultation processes. With Prescripto, healthcare becomes organized, accessible, and patient-friendly.</p>
          </div>
          
          {/* -----------Center Section---------*/}
          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>            
          </div>

          {/* -----------Right Section---------*/}
          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
               <li>+1-212-456-7890</li>
               <li>doctenro@gmail.com</li>
            </ul>            
          </div>
        </div>
        <div>
          {/*----------CopyRight Section-------------- */}
          <div>
            <hr />
          <p className='py-5 text-sm text-center'>Copyright © 2025 Prescripto - All Right Reserved.</p>
          </div>
        </div>
    </div>
  )
}

export default Footer