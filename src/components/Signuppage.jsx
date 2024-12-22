import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const Signuppage = () => {
  return (
    <diV className='flex items-center justify-center mt-20'>
        <SignUp path="/sign-up" signInUrl="sign-in"/>
    </diV>
    
  )
}

export default Signuppage