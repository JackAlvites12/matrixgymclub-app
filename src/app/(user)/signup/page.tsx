'use client'

import React from "react"
import { SignUpForm } from "@/components/forms/SignUpForm"
import { Navbar } from "@/components/Navbar"
import { useUserStore } from "@/store/userStore"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function SignUpPage(){

  const router = useRouter()
  const isAuthenticated = useUserStore( state => state.isAuthenticated )
  

  useEffect(() => {
    
    if( isAuthenticated ){
      router.push('/')
    }

  }, [ isAuthenticated ])


  return (
    <>
      <Navbar />

      <section className="pt-[130px] pb-10 min-h-screen flex items-center animate__animated animate__fadeIn">

          <SignUpForm />

      </section>

    </>
  )
}
