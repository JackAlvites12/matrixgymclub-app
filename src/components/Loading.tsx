import { poppins } from '@/fonts'
import React from 'react'

export const Loading = () => {
  return (

    <div className="min-h-screen flex justify-center items-center">
        <h1 className={`font-bold ${ poppins.className } text-white text-2xl`}>Cargando...</h1>
    </div> 

  )
}
