import React from 'react'

export const Footer = () => {
  return (
    <div className='w-[100vw] h-[50vh] mt-20 flex flex-row bg-purple-800'>
    <div className='w-[50%]'></div>
    <div className='w-[50%] flex flex-row mt-10'>
        <div className='flex flex-col space-y-2'>
            <p className='text-xl text-white font-semibold'>Products</p>
            <p className='text-lg text-white'>Automation</p>
            <p className='text-lg text-white'>Panel</p>
            <p className='text-lg text-white'> Fan</p>
            <p className='text-lg text-white'> Cable</p>
        </div>
        <div className='flex flex-col ml-10 space-y-2'>
            <p className='text-xl text-white font-semibold'>Social Media</p>
            <p className='text-lg text-white'>Facebook</p>
            <p className='text-lg text-white'>Linkedin</p>
            <p className='text-lg text-white'> Twitter</p>
            <p className='text-lg text-white'> Instagram</p>
        </div>
        <div className='flex flex-col ml-10 space-y-2'>
        <p className='text-xl text-white font-semibold'> Contact Us</p>
            <p className='text-lg text-white'>32, Ezra Street Room No-</p>
            <p className='text-lg text-white'>518 Calcutta, W.B 700001</p>
            <p className='text-lg text-white'> +91 83360 22220</p>
            <p className='text-lg text-white'> www.jigoindia.com</p>
            <p className='text-lg text-white'>hirawat@jigoindia.com</p>
        </div>
   </div>
    </div>
  )
}
