import { Membership } from "@/interfaces"
import Image from "next/image"
import { useRef } from "react";


interface Props extends Membership {

    membershipId: string,
    setMembershipId: ( id: string ) => void,

}

export const MembershipItem = ({ _id, membershipId, setMembershipId, congelacion, tipo, duracion, costo, clasesIncluidas }: Props ) => {

  const isSelected = _id === membershipId
  const membershipRef = useRef<HTMLLIElement>( null );
  

  const handleMoveCard = ( event: React.MouseEvent<HTMLLIElement> ) => {

      const el = membershipRef.current

      if( !el ) return 

      const { clientHeight: height, clientWidth: width } = el

      const { layerX, layerY } = event.nativeEvent

      const yRotation = (( layerX - width / 2 ) / width ) * 20
      const xRotation = (( layerY - height / 2 ) / height ) * 20
      
      const transformString = `perspective(500px) scale(1.1) rotateX(${ xRotation }deg) rotateY(${ yRotation }deg)`
  
      el.style.transform = transformString 
  }

  const handleMouseOut = () => {
    
    const el = membershipRef.current

    if( !el ) return 

    el.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`


  }
  

  return (

    <li onMouseMove={ handleMoveCard } onMouseOut={ handleMouseOut } style={{ background: 'url(/assets/fondo-membership.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}  ref={ membershipRef } className={`rounded-[10px] transition-transform duration-[.1s] ${ isSelected ? 'border-2 border-yellow-300' : '' }`} onClick={ ()=> setMembershipId( _id )}>

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
    </li>

  )
}
