import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Signinpae = () => {
  return (
   <div className='flex items-center justify-center mt-20'>
     <SignIn path="/sign-in" signUpUrl="sign-up" forceRedirectUrl="/dashboard" />
   </div>
  )
}

export default Signinpae