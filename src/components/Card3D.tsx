import { CustomerMembership, Membership } from "@/interfaces";
import { useRef } from "react"
import { CardCustomer } from "./cards3d/CardCustomer";
import { CardSelected } from "./cards3d/CardSelected";

interface Props {
    membershipData: Membership | CustomerMembership
    type: 'selected' | 'customer'
}

export const Card3D = ({ membershipData, type }: Props ) => {

    const membershipRef = useRef<HTMLLIElement>( null )

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
    
    <section ref={ membershipRef } onMouseMove={ handleMoveCard } onMouseOut={ handleMouseOut } style={{ background: 'url(/assets/fondo-membership.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className=" rounded-[10px] transition-transform duration-[.1s] my-5 p-1">

        {
            ( type === 'selected' ? <CardSelected membershipData={ membershipData } /> : <CardCustomer membershipData={ membershipData } /> )
        }


    </section>
  )
}
