import React from "react"
import { CustomerMembership, Membership } from "@/interfaces"

interface Props {
    membershipData: Membership | CustomerMembership
}

export const CardSelected = ({ membershipData }: Props ) => {

    if( !membershipData ) return

    const { clasesIncluidas, congelacion, duracion, tipo, costo } = membershipData

  return (
    <>
        <figure style={{ background: 'url(/assets/logo-matrix.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}  className="mt-2 p-3 w-[160px] h-[30px]">
        </figure>
        <div className="text-[13px] p-3 ">

          <h4>Incluye: { clasesIncluidas.join(' y ') }</h4>
          <h4>{ congelacion ? 'Incluye freezing' : 'No incluye freezing'}</h4>
          <h4>Duracion de { duracion }</h4>
          
        </div>
        <div className="flex justify-between items-center">
            <h3 className="font-bold text-yellow-400 text-[16px] pl-3">{ tipo }</h3>
            <h3 className="font-bold text-yellow-400 text-[20px] p-2 border-2 border-yellow-400 rounded-tl-md rounded-br-md">${ costo }</h3>
        </div>
    </>

  )
}
