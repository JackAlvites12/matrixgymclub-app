'use client'

import React from "react"
import { LogInForm } from "@/components/forms/LogInForm"
import { Navbar } from "@/components/Navbar"
import { useUserStore } from "@/store/userStore"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function LoginPage(){

  const isAuthenticated = useUserStore( state  => state.isAuthenticated )

  const router = useRouter()
  
  useEffect(() => {
    
      if( isAuthenticated ){
        router.push('/')
      }

  }, [ isAuthenticated ])


  return (
    <>
        <Navbar />

        <section className="pt-[100px] min-h-screen flex items-center animate__animated animate__fadeIn"> 

          <LogInForm />
          
        </section>
    </>
  )
}
