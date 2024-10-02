'use client'

import { RegisterClientForm } from "@/components/forms/RegisterClientForm"
import { Loading } from "@/components/Loading"
import { AuthMessage } from "@/components/messages/AuthMessage"
import { Navbar } from "@/components/Navbar"
import { ClientGuard } from "@/components/security/ClientGuard"
import { useUserStore } from "@/store/userStore"
import { useEffect, useState } from "react"


export default function RegisterClientPage(){

    const [ isMounted, setIsMounted ] = useState<boolean>( false );
    const isAuthenticated = useUserStore( state => state.isAuthenticated )
    const clearUserState = useUserStore( state => state.clearUserState )

    useEffect(() => {
        setIsMounted( true )
    }, [])


    useEffect(() => {

        if ( !isMounted ) return

        if (!isAuthenticated) {
            console.log('No estás autenticado');
            clearUserState(); 
        }
        
    }, [isAuthenticated, isMounted ]);


    if( !isMounted ) return <Loading />
    
    
  return (
    
    <ClientGuard>
        <Navbar />

        {
            isAuthenticated 
            ?  
            <section className="pt-[150px] *:transition-all min-h-screen md:flex md:justify-center md:items-center animate__animated animate__fadeIn">
                
                <div className="flex-1">
                    <h1 className="text-white text-center font-bold xsm:text-lg md:text-[22px]">El cambio comienza ahora, <span className="text-yellow-400">Regístrate</span></h1>
                    <RegisterClientForm />

                </div>

            </section> 
            : <AuthMessage />
        }
    </ClientGuard>
  )
}
