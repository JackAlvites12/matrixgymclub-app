import { getClientByUserId } from "@/helpers/getClientByUserId"
import { useUserStore } from "@/store/userStore"
import { ReactNode, useEffect, useState } from "react"
import { ClientMessage } from "../messages/ClientMessage"

interface ClientGuardProps {
    children: ReactNode;
  }

export const ClientGuard = ({ children }: ClientGuardProps ) => {
 
    const user = useUserStore( state => state.user )
    const isClient = useUserStore( state => state.isClient )
    const [ isMounted, setIsMounted ] = useState<boolean>( false )
    const handleCheckoutStatus = useUserStore( state => state.handleCheckoutStatus )


    useEffect(() => {
        setIsMounted( true )
    }, [])

    useEffect(()=>{

        if( !isMounted ) return 

        getClientByUserId( user?._id as string )
            .then(() => handleCheckoutStatus( true ))
            .catch(() => handleCheckoutStatus( false ))

    }, [ isMounted ])

    
  return isClient ? <ClientMessage /> : children

}
