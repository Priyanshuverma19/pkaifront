import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const Homepage = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row items-center gap-24 h-[calc(100vh-70px)]'>
   
     <div className='flex flex-1 flex-col items-center justify-center gap-4 '>
        <h1 className='text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#217bfe] to-[#e55571] text-clip text-transparent bg-clip-text'>PK AI</h1>
       
        <h2 className='text-2xl lg:text-3xl font-semibold p-2 text-center'>Super change your crativity and productivity</h2>
        <h3 className='text-center p-4 text-sm'>Pk Ai try to solve ervey problem and give posible solution every task using google gimini</h3>
        <Link to='/dashboard' className=' bg-gradient-to-r from-[#217bfe] to-[#e55571] rounded-lg p-2 hover:bg-sky-400'>Get Started</Link>
    
     </div>
      <div className=''>
       
          <div className='flex items-center animate-bounce flex-col'>
          <img src='/bot.png' alt='bot' className='w-40 h-40'/>
          <div className='flex items-center'>
            <img src="/bot.png" alt='' className='w-8 h-8'/>
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Human:what is ai',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Pkboat:Ai is  technology ',
        2000,
        'human2: human intelligence',
        2000,
        'pkboat:AI is technology',
        2000
      ]}
      wrapper="span"
      repeat={Infinity}
      cursor={true}
      omitDeletionAnimation={true}
    />
          </div>
          </div>
       
      </div>
      
    </div>
    <div className='flex item-center justify-center gap-2'>
      <Link className='text-sm text-gray-300'>Terms of Service</Link>
        <img src='/logo.png' alt='' className='w-8 h-8 rounded-full' />
        
        <Link className='text-sm text-gray-300'>Privacy Policy</Link>
      </div>
    </>
  )
}

export default Homepage