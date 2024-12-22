import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center w-full' >
   <div className='flex flex-row gap-4'>
   
    <span className='text-3xl font-bold bg-gradient-to-r from-[#217bfe] to-[#e55571] text-clip text-transparent bg-clip-text'>PK AI</span>
   </div>
    <div>
    <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
 </header>
  )
}

export default Navbar