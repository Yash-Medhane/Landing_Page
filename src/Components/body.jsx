import React from 'react'

const body = () => {
  return (
    <div>
    <div className='lg:flex lg:mx-12'>
      <div className='space-y-4 lg:flex-1 lg:order-2'>
        <img src="./web-developer.png" alt="cpp" className='w-72 h-72 mx-7 md:h-80 md:w-80 md:mx-48 lg:w-max lg:h-96'/>
      </div>
      <div className='lg:flex-1 lg:order-1 lg:my-12'>
        <h1 className='text-5xl font-bold font-serif leading-tight'><span className='font-sans font-bold'>Yash Medhane</span> & Team <span className='text-blue-600  text-4xl lg:text-5xl'>ATOM</span> Developers</h1>
        <p className='font-medium text-gray-500 lg:my-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio reprehenderit neque eum eos sapiente consequatur earum perspiciatis quisquam eaque praesentium iure enim sed esse, pariatur aperiam aliquid deleniti officiis cupiditate autem excepturi tempora? Quis.</p>
        <form action="" className='flex flex-col gap-4 my-5 md:flex-row'>
            <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type="email" placeholder='enter email' />
            <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join My Team</button>
        </form>
        <div className='flex gap-2'>
            <img src="./team.png" alt="coding" className='w-11'/>
            <p className='font-mono text-gray-400 lg:my-2 lg:mx-4'>Only Coffee Loving brains can join us</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default body
