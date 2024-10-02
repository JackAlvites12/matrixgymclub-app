'use client'

import { Loading } from "@/components/Loading";
import { poppins } from "@/fonts";
import { useUserStore } from "@/store/userStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function CheckoutPage(){

    const [ isMounted, setIsMounted ] = useState<boolean>( false )
    const isClient = useUserStore( state => state.isClient ) 
    const handleCheckoutStatus = useUserStore( state => state.handleCheckoutStatus )
    const router = useRouter()


    useEffect(() => {
        
        setIsMounted( true )

    }, [])

    useEffect(() => {

        if( !isMounted ) return 

        handleCheckoutStatus( true )

    }, [ isMounted, isClient ]) 

    if ( !isMounted ) return <Loading />


    return(
        <section className={`min-h-screen bg-white flex justify-center items-center ${ poppins.className } animate__animated animate__fadeIn`}>
            <div className="w-[80%] text-center *:p-2">
                <figure>
                    <Image className="m-auto" src="/assets/success.png" width={ 150 } height={ 150 } alt="Success Image" />
                </figure>
                <h2 className={`font-bold text-3xl `}>Gracias por su compra!</h2>
                <p className="font-extralight">Hemos enviado el comprobante de pago a su correo electrónico.</p>

                <div className="mt-20">
                    <button onClick={ () => router.push('/profile') } className="bg-black p-5 text-white font-bold text-3xl">Hecho</button>
                </div>

            </div>
        </section>
    )
}