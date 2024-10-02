'use client'

import React from "react"
import { DetailsCustomer } from "@/components/customer/DetailsCustomer"
import { DetailsUser } from "@/components/customer/DetailsUser"
import { Loading } from "@/components/Loading"
import { AuthMessage } from "@/components/messages/AuthMessage"
import { Navbar } from "@/components/Navbar"
import { poppins } from "@/fonts"
import { getClientByUserId } from "@/helpers/getClientByUserId"
import { ClientData } from "@/interfaces"
import { useUserStore } from "@/store/userStore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProfilePage(){

    const [ clientData, setClientData ] = useState<ClientData>()
    const [ isMounted, setIsMounted ] = useState<boolean>( false ); 

    const router = useRouter()

    const user            = useUserStore( state => state.user )
    const isAuthenticated = useUserStore( state => state.isAuthenticated )
    const logout          = useUserStore( state => state.logout )
    const handleCheckoutStatus = useUserStore( state => state.handleCheckoutStatus )

    useEffect(() => {

        setIsMounted( true )
        if( !user ) return

        const userId = user?._id;
    
        getClientByUserId( userId )
            .then( data => {
                setClientData( data )
                handleCheckoutStatus( true )
            })
            .catch( error => {
                console.log( error )
                handleCheckoutStatus( false )
            });
        
    }, [ user ])


    if( !isMounted ) return <Loading />
    if( !isAuthenticated ) return <AuthMessage />


    return(
        <>
            <Navbar />

            <section className={`pt-[150px] text-white ${ poppins.className } animate__animated animate__fadeIn`}>

                <div className="flex justify-center text-yellow-400 lg:pt-10">
                    <h2 onClick={ () => { logout( router ) }} className="font-bold cursor-pointer transition-all border-2 border-yellow-400 p-2 flex items-center gap-x-2 hover:bg-yellow-400 hover:text-black lg:p-3 lg:text-lg"><i className='block bx bx-log-out bx-md'></i>Cerrar sesión</h2>
                </div>

                <h1 className={`mt-10 text-center text-4xl font-extrabold ${ poppins.className } lg:text-5xl lg:mt-12`}>Hola <span className="text-4xl font-extrabold text-yellow-400 lg:text-5xl">{ user?.username }!</span></h1>
                
                <div className="m-auto max-lg:max-w-[440px] lg:flex lg:max-w-[1000px] lg:mt-14 transition-all">              
                    <DetailsUser user={ user! } />
                    <DetailsCustomer clientData={ clientData! } />
                </div>

            </section>
            
        </>
    )
}