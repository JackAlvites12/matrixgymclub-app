import Link from "next/link"
import { Navbar } from "../Navbar"
import { poppins } from "@/fonts"
import React from "react"


export const ClientMessage = () => {

  return (
    <> 
        <Navbar /> 
        <div className="*:p-2 min-h-screen flex flex-col justify-center items-center text-white *:transition-all animate__animated animate__fadeIn">
            <h1 className={`font-bold ${ poppins.className } xs:text-xl`}>Usted ya es cliente de MatrixGym!</h1>
            <Link className="font-bold underline text-blue-500 xs:text-xl" href="/profile">Ir a mi perfil</Link>
        </div> </>
  )
}
