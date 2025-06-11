import React from 'react'
import { auth } from '../../auth'
import { redirect } from 'next/navigation'

const page = async () => {

  const  autheticate = await auth()
if(autheticate){
  redirect('/dashboard')
} else {
  redirect('/login')
}

  return (
    <div>
      
    </div>
  )
}

export default page
