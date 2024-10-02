import React from "react";
import { Navbar } from "@/components/Navbar";
import { SedeList } from "@/components/sedes/SedeList";
import { Sedes } from "@/staticData/sedes";

export default function SedesPage(){
    return (

        <>
            <Navbar />
            <section className="pt-[150px] animate__animated animate__fadeIn">

                <h1 className="text-white text-center font-bold md:text-[24px] md:pt-5">Te esperamos en nuestras <span className="text-yellow-400">Sedes</span></h1>
                
                <SedeList sedes={ Sedes }/>

            </section>
        
        </>

    )
}