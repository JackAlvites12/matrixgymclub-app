'use client'

import { Loading } from "@/components/Loading"
import { ClientGuard } from "@/components/security/ClientGuard"
import { poppins } from "@/fonts"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function CancelPage(){

    const router = useRouter()
    const [ isMounted, setIsMounted ] = useState<boolean>( false )


    useEffect(() => {

        setIsMounted( true )

    }, [])

    
    const handleContinue = ( value: boolean ) => {

        if( value ){

            router.back()

        } else{

            router.push('/')
        }

    }

    if ( !isMounted ) return <Loading />


    return(

        <ClientGuard>

            <section className="w-[80%] min-h-screen m-auto flex flex-col justify-center text-white max-w-[440px] animate__animated animate__fadeIn">
                <h1 className={`${ poppins.className } text-white text-center font-bold text-lg xsm:text-2xl`}>Saliste del formulario</h1>
                
                <div className="mt-10 flex flex-col gap-y-5 *:p-5 *:rounded-md *:transition-all">
                    <button className="font-bold bg-yellow-400 text-black xsm:text-lg hover:scale-105" onClick={ () => handleContinue( true )}>Continuar con el pago</button>
                    <button className="font-bold bg-[#FF4136] text-black xsm:text-lg hover:scale-105" onClick={ () => handleContinue( false )}>Cancelar pago</button>
                </div>
            </section>

        </ClientGuard>
    )
    
}