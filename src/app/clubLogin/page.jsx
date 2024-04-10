import React from 'react'

export default function page() {
  return (
    <>
    <div className=' border-2 border-[#155EB3] my-36 p-4   md:w-1/3  mx-10 md:mx-auto rounded-sm shadow-xl py-8'>
        <div className=' text-center'>
            <p className=' text-[#155EB3]  font-extrabold  text-4xl my-2'>Club Login</p>
            <input type="text" placeholder='Email ID' className=' my-2 p-1 mt-6 md:w-72' />
            <br />
            <input type="password" placeholder='password' className=' my-2 p-1 md:w-72'/>
            <br />
        
            <button className=' text-white bg-[#155EB3] p-1 px-4 rounded my-3 font-bold px-6'>Login</button>
        </div>
    </div>
    </>
  )
}
