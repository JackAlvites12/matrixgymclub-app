'use client'

import { Card3D } from "@/components/Card3D"
import { Loading } from "@/components/Loading"
import { AuthMessage } from "@/components/messages/AuthMessage"
import { Navbar } from "@/components/Navbar"
import { ClientGuard } from "@/components/security/ClientGuard"
import { poppins } from "@/fonts"
import { getMembershipById } from "@/helpers/getMembershipById"
import { Membership } from "@/interfaces"
import { useUserStore } from "@/store/userStore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function CheckoutPage(){

    const [ membership, setMembership ] = useState<Membership>()
    const [ isMounted, setIsMounted ] = useState<boolean>( false ); 
    const [ paymentSelected, setPaymentSelected ] = useState<string>('')     
    
    const router = useRouter()

    const isAuthenticated = useUserStore( state => state.isAuthenticated )
    const clearUserState = useUserStore( state => state.clearUserState )
    const handleCheckout = useUserStore( state => state.handleCheckout )
    const handleCheckoutPaypal = useUserStore( state => state.handleCheckoutPaypal )

    
    useEffect(() => {
        
        setIsMounted( true )
        
        const membershipId = localStorage.getItem('membershipId')
        if( membershipId ){
            
            getMembershipById( membershipId ).then( data => setMembership( data ))
        }

    }, [])
    
    
    useEffect(() => {

        if ( !isMounted ) return
        
        if (!isAuthenticated) {
            console.log('No estás autenticado');
            clearUserState(); 
        }

    }, [ isAuthenticated, isMounted ]);
    
    
    const handlePayVisa = async () => {

        try {

            if( !membership ) return 
            
            const { session } = await handleCheckout( membership )
            
            router.push( session.url )
            
        } catch (error) {
            console.log( error );
            
        }

    }

    const handlePayPaypal = async () => {


        try {

            if( !membership ) return 
            
            const res = await handleCheckoutPaypal( membership )
            
            router.push( res )
            
        } catch (error) {
            console.log( error );
            
        }
    }


    if( !isMounted ) return <Loading />

    if( !isAuthenticated ) return <AuthMessage />

  
    return(

        <ClientGuard>
            <Navbar />
            <section className="min-h-screen flex justify-center items-center gap-5 animate__animated animate__fadeIn">

                    <section className="pt-[150px] text-white w-[80%] max-w-[400px] m-auto">
                        <h1 className={`${ poppins.className } text-white text-center font-bold text-lg xsm:text-xl md:text-[22px] transition-all`}>Membresía seleccionada:</h1>
                        
                        <Card3D membershipData={ membership! } type="selected" />

                        <div className="pt-10 *:transition-all">
                            <h2 className="font-bold text-center xsm:text-lg">Elige el método de pago</h2>
                            
                            <section className="flex justify-center *:p-5 gap-5 mt-5 text-center *:cursor-pointer *:transition-all">
                                <div onClick={ () => setPaymentSelected('VISA') } className={`hover:bg-yellow-400 hover:text-black flex-1 border-2 border-yellow-400 font-bold ${ paymentSelected === 'VISA' ? 'bg-yellow-400 text-black' : '' }`}>
                                    <button className="outline-none md:text-lg">VISA</button>
                                </div>
                                <div onClick={ () => setPaymentSelected('PAYPAL') } className={`hover:bg-yellow-400 hover:text-black flex-1 border-2 border-yellow-400 font-bold ${ paymentSelected === 'PAYPAL' ? 'bg-yellow-400 text-black' : '' }`}>
                                    <button className="outline-none md:text-lg">PAYPAL</button>
                                </div>
                            </section>

                            <div className="pt-10">
                                <button onClick={ () => paymentSelected === 'VISA' ? handlePayVisa() : handlePayPaypal() } disabled={ paymentSelected.length === 0 } className={`block m-auto bg-yellow-400 py-3 px-10 font-bold text-black outline-none rounded-md transition-all md:text-lg md:px-10 ${ paymentSelected.length === 0 ? 'opacity-50' : 'hover:scale-105 ' } `}>Pagar</button>
                            </div>

                        </div>
                    </section> 

            </section>
        
        </ClientGuard>
    )
}
