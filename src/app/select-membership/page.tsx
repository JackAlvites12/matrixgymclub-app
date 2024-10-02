'use client'

import { AuthMessage } from "@/components/messages/AuthMessage"
import { MembershipList } from "@/components/memberships/MembershipList"
import { Navbar } from "@/components/Navbar"
import { getAllMemberships } from "@/helpers/getAllMemberships"
import { Membership } from "@/interfaces"
import { useUserStore } from "@/store/userStore"
import { useEffect, useState } from "react"
import { Loading } from "@/components/Loading"
import { ClientGuard } from "@/components/security/ClientGuard"


export default function SelectMembershipPage(){

    const clearUserState = useUserStore( state => state.clearUserState )
    const isAuthenticated = useUserStore( store => store.isAuthenticated )

    const [ memberships, setMemberships ] = useState<Membership[]>([])
    const [ isMounted, setIsMounted ] = useState<boolean>( false );

    
    useEffect(()=>{

        setIsMounted( true )

        getAllMemberships()
            .then( data => {
                setMemberships( data )
            })
            .catch( err => {
                clearUserState()
            })
        
    }, [])

    useEffect(() => {

        if ( !isMounted ) return

        if (!isAuthenticated) {
            console.log('No estás autenticado');
            clearUserState(); 
        }
        
    }, [ isAuthenticated, isMounted ]);


    if( !isMounted ) return <Loading />



  return(
    
    <ClientGuard>
    
      <Navbar />
      
      {
          isAuthenticated 
          ?

          <section className="pt-[115px] min-h-screen flex items-center text-white animate__animated animate__fadeIn">
            <div className="flex-1 *:transition-all">
              <h1 className="text-white text-center font-bold pb-5 xsm:text-xl">Selecciona una membresía:</h1>
              <MembershipList memberships={ memberships } />

            </div>
          </section> 

          : <AuthMessage /> 
      }

    </ClientGuard>
  )
}