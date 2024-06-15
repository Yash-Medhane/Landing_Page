import React from 'react'

const footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-evenly lg:justify-between'>
      <div>
        <ul className='flex gap-6 font-mono text-gray-600 lg:order-2 relative left-12 lg:text-2xl transition-all'>
            <li>
                <a href="#" className='hover:underline'>Instagram</a>
            </li>
            <li>
                <a href="#" className='hover:underline'>Linkdin</a>
            </li>
            <li>
                <a href="#" className='hover:underline'>Github</a>
            </li>
        </ul>
      </div>
      <div className='flex gap-2 lg:relative right-28'>
        <img src="./confused.png" alt="" className='w-11'/>
        <div>
        <p className='font-sans font-medium'>Have a quetion ?</p>
        <a  className='font-sans font-thin'  href="#">Talk to our specialist developer</a>
        </div>
      </div>
    </div>
  )
}

export default footer
