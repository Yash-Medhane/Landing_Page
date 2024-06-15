import React from 'react'
import { FaBars } from 'react-icons/fa'

const header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-2'>
    <img src="./atom.png" alt="atom" className='w-7 h-7'/>
    <b className='font-serif text-gray-500'>ATOM</b>
    <button className='bg-gradient-to-r from-orange-400 to-red-500 text-m text-white px-3.5 py-1.5 rounded-2xl font-mono '>DEVELOPERS</button>
      </div>
      <ul className='hidden lg:flex justify-between items-center font-mono text-gray-400 gap-10'>
        <li>
        <a href="#">About</a>
        </li>
        <li>
          <a href="#">Job Role</a>
          </li>
          <li>
          <a href="#">Terms & Condition</a>
          </li>
          </ul>
          <div className='hidden lg:flex justify-center items-center font-serif gap-6'>
            <a href="#" className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Sign In</a>
            <p className='font-mono font-extrabold' >Join Us</p>
          </div>
      <div className='lg:hidden'>
        <FaBars/>
      </div>
    </div>
  )
}

export default header
