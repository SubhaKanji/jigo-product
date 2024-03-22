//product

import React from 'react'
import img from '../img/1.webp'
import Slider from './Slider'
export const Hero = () => {
  return (
    <div>
      <div className='w-[80%] mx-auto h-[100%] space-x-10 flex flex-row'>
        <div className='w-[30%] mt-[10rem] flex flex-col'>
          {/* <img src={img} className='w-[20rem] h-[20rem]  mt-40'></img> */}
          <Slider  className='mt-[]'/>
          <div className='flex flex-row -ml-10'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52-MjUk4zchX1dZUKR68t00L_ep0gejKE2Q&usqp=CAU'
             className='h-[110px] w-[110px]  border-[4px] border-blue-500'></img>
              <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIXZwkRKLkEV4Y6Z-QG00iFSIkdBVzgtXKA&usqp=CAU'
             className='h-[110px] w-[110px]'></img>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6e4LWSd8vFE3BJHu8leoUOpYFimB0YxhMtg&usqp=CAU'
             className='h-[110px] w-[110px]'></img>
          </div>
        </div> 
        <div className='w-[70%]'>
          <div className='flex flex-col  justify-center items-center'>
          <p className='text-2xl font-bold mt-5'>Float Switch</p>
          <p className='mt-8'>पानी बचाओ देश बचाओ” (Save water to save the country)</p>
          <button className='bg-purple-900 hover:bg-purple-700 text-white p-2 px-[13rem]  mt-16 rounded-md'>Add TO Quote</button>
          </div>
          <div>
          <p className='font-semibold mt-8'>Product Details:</p>
          <p className='mt-4 mb-10'>Insert the cable in the counterweight. From the conical 
            part and rotate it, thus causing the plastic ring inserted
             in the opening to become detached (if necessary this operation
              can be facilitated with the use of a screwdriver)
            . The ring should be then positioned in the point where 
            it is desired to block the counterweight.</p>
            <div>
              <table className=' border border-gray-400 font-thin'>
                <thead className=' border border-gray-400'>
                  <tr className=' border border-gray-400'>
                    <th className=' border border-gray-400 '>Model No.</th>
                    <th className=' border border-gray-400'>Description</th>
                    <th className=' border border-gray-400'>Technical Parameters</th>
                    <th className=' border border-gray-400'></th>
                    </tr>
                </thead>
                <tbody>
                  <tr className='bg-gray-100'>
                    <th className=' border border-gray-400 font-normal'>JG ‐ FLS01</th>
                    <th className=' border border-gray-400 font-normal'>Float Switch 2m	</th>
                    <th className=' border border-gray-400 font-normal'>Microswitch Switch currency	</th>
                    <th className=' border border-gray-400 font-normal'>10 (8) 250V~10 (4) A 380V 50000C according VDE special standard to test the operation switch</th>
                  </tr>
                  <tr>
                    <th className=' border border-gray-400 font-normal'>JG ‐ FLS03</th>
                    <th className=' border border-gray-400 font-normal'>Float Switch 3m</th>
                    <th className=' border border-gray-400 font-normal'>Protective connection Protection	</th>
                    <th className=' border border-gray-400 font-normal'>T 70U 88 Waterproof</th>
                  </tr>
                  <tr className='bg-gray-100'>
                    <th className=' border border-gray-400 font-normal'>JG ‐ FLS05</th>
                    <th className=' border border-gray-400 font-normal'>Float Switch 5m</th>
                    <th className=' border border-gray-400 font-normal'>bMax. Temperature Max. Working pressure</th>
                    <th className=' border border-gray-400 font-normal'>70 Max.lbay</th>
                  </tr>
                  <tr>
                    <th className=' border border-gray-400 font-normal'>JG ‐ FLS09</th>
                    <th className=' border border-gray-400 font-normal'>Float Switch 9m</th>
                    <th className=' border border-gray-400 font-normal'>Limit Circuit breaking capacity</th>
                    <th className=' border border-gray-400 font-normal'>250V 1KW DC Voltage</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}
