import React from "react"
import { CustomerMembership, Membership } from "@/interfaces"

interface Props {
    membershipData: Membership | CustomerMembership
}

export const CardCustomer = ({ membershipData }: Props ) => {

    if( !membershipData ) return

    const { clasesIncluidas, congelacion, duracion, fechaInicio, fechaExpiracion } = membershipData as CustomerMembership
    
  return (
    <>
        <figure style={{ background: 'url(/assets/logo-matrix.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}  className="mt-2 p-3 w-[160px] h-[30px]">
        </figure>
        <div className="text-[13px] p-3 *:py-1">

            <h4>Incluye: { clasesIncluidas.join(' y ') }</h4>
            <h4>Fecha Inicio: { fechaInicio }</h4>
            <h4>Fecha expiración: { fechaExpiracion }</h4>
        </div>
        <div className="flex justify-between items-center text-[14px]">
            <h3 className="font-bold text-yellow-400 p-2">{congelacion ? 'Con freezing' : 'Sin freezing'}</h3>
            <h3 className="font-bold text-yellow-400 p-2">{duracion }</h3>
        </div>
    </>
  )
}
