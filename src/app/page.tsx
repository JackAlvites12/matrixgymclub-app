'use client'

import React from "react";
import Image from "next/image";
import { permanentMarker } from "@/fonts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";


export default function MatrixGymApp() {

    const router = useRouter()

    const animadosRef = useRef<HTMLElement[]>([]);

    const mostrarScroll = () => {

      const scrollTop = document.documentElement.scrollTop;
  
      animadosRef.current.forEach((element) => {

        const alturaAnimado = element.offsetTop;
  
        if (alturaAnimado - 800 < scrollTop) {
          element.style.opacity = '1';
          element.classList.add('mostrarArriba');
        }

      })

    }

    const addToAnimadosRef = (el: HTMLElement | null) => {
      if (el && !animadosRef.current.includes(el)) {
        animadosRef.current.push(el);
      }
    };

    useEffect(() => {

      window.addEventListener('scroll', mostrarScroll);
      
      return () => window.removeEventListener('scroll', mostrarScroll);

    }, [])


    
  return(

    <>
    
      <Navbar />
    
      <main className="animate__animated animate__fadeIn">

        <figure className="pt-[50px] xsm:pt-[100px] lg:pt-0 lg:min-h-screen">
          <Image className="mt-10 lg:mt-0 lg:absolute lg-top-0 w-full" src="https://firebasestorage.googleapis.com/v0/b/matrixgym-club.appspot.com/o/portada-matrix.png?alt=media&token=fe781616-380d-4865-9457-7dae114aad72"  width={ 1800 } height={ 800 } alt="Portada MatrixGym" />0
        </figure>

        <section ref={( el ) => addToAnimadosRef( el )} className=" mt-5 m-auto max-w-[415px] md:max-w-[650px] lg:mt-20 transition-all text-center p-5 lg:animado">
              <h1 className={`text-[35px] text-yellow-400 ${ permanentMarker.className } md:text-[50px]` }>¿Quiénes Somos?</h1>
              <div className="mt-4 p-5 border-yellow-400 border">
                <p className="text-white text-balance md:text-[22px]">Somos MatrixGym Club, una cadena nacional de gimnasios donde tu bienestar y progreso son nuestra prioridad. Nuestro equipo de entrenadores altamente calificados está comprometido a brindarte el apoyo necesario.</p>
              </div>
        </section>

        <section ref={( el ) => addToAnimadosRef( el )} className="mt-5 m-auto max-w-[415px] max-lg:md:max-w-[515px] lg:max-w-[90%] transition-all text-center p-5 lg:animado">
              
              <h1 className="text-white font-bold md:text-[24px]">Más que un gimnasio: <span className="text-yellow-400">Tu estilo de vida</span></h1>

            <div className="lg:flex lg:*:flex-1 lg:pt-8 lg:gap-x-8 lg:max-w-[1200px] lg:m-auto">

              <div className="text-center pt-8 lg:pt-0 hover:scale-105 transition-all">
                <figure className="m-auto w-[80%] rounded-t-[15px] lg:w-full">
                  <Image className=" rounded-t-[15px] m-auto w-full" src="https://firebasestorage.googleapis.com/v0/b/matrixgym-club.appspot.com/o/1era-section%2Fequipos-modernos.png?alt=media&token=dd736022-280d-4f67-84dc-6e839844c9ae" width={ 500 } height={ 500 } alt="Equipos modernos" />
                </figure>
                <h3 className="m-auto w-[80%] text-white font-bold p-3 border-b-4 border-yellow-400 rounded-b-[15px] md:text-[22px] md:py-5 lg:w-full">Equipos Modernos</h3>
              </div>

              <div className="text-center pt-8 lg:pt-0 hover:scale-105 transition-all">
                <figure className="m-auto w-[80%] rounded-t-[15px] lg:w-full">
                  <Image className="m-auto w-full rounded-t-[15px]" src="https://firebasestorage.googleapis.com/v0/b/matrixgym-club.appspot.com/o/1era-section%2Fclases-grupales.png?alt=media&token=70ff5480-7eda-4cbf-bc52-7cb070992d84" width={ 500 } height={ 500 } alt="Clases grupales" />
                </figure>
                <h3 className="m-auto w-[80%] text-white font-bold p-3 border-b-4 border-yellow-400 rounded-b-[15px] md:text-[22px] md:py-5 lg:w-full">Clases grupales</h3>
              </div>
              
              <div className="text-center pt-8 lg:pt-0 hover:scale-105 transition-all">
                <figure className="m-auto w-[80%] rounded-t-[15px] lg:w-full">
                  <Image className="m-auto w-full rounded-t-[15px]" src="https://firebasestorage.googleapis.com/v0/b/matrixgym-club.appspot.com/o/1era-section%2Farea-nutricion.png?alt=media&token=0252cf80-29da-4338-9a41-7b2cf5b4ac16" width={ 500 } height={ 500 } alt="Área de nutrición" />
                </figure>
                <h3 className="m-auto w-[80%] text-white font-bold p-3 border-b-4 border-yellow-400 rounded-b-[15px] md:text-[22px] md:py-5 lg:w-full">Área de nutrición</h3>
              </div>
            </div>

        </section>

        <section ref={( el ) => addToAnimadosRef( el )} className="mt-5 m-auto max-w-[415px] md:max-w-[515px] lg:max-w-[90%] transition-all text-center p-5 lg:animado">

          <h1 className="text-white font-bold md:text-[24px]">Alcanza tus metas en <span className="text-yellow-400">MatrixGym</span></h1>
          
          <div className="lg:flex lg:gap-x-8 lg:*:flex-1 lg:max-w-[1200px] lg:m-auto lg:pt-8">
            <div className="text-center pt-8 lg:pt-0 hover:scale-105 transition-all">
              <figure className="m-auto w-[80%] rounded-t-[15px] lg:w-full">
                <Image className="m-auto w-full rounded-t-[15px]" src="https://firebasestorage.googleapis.com/v0/b/matrixgym-club.appspot.com/o/2da-section%2Ffuncional.png?alt=media&token=152b2e89-5535-4c1c-a8e9-15f62270830b" width={ 250 } height={ 200 } alt="Funcional" />
              </figure>

              <div className="w-[80%] m-auto lg:w-full">
                <h3 className="m-auto text-white font-bold p-3 border-y-2 border-yellow-400 md:text-[22px] md:py-5">Funcional</h3>
                <p className="m-auto p-5 text-white text-balance border-b-4 border-b-yellow-400 rounded-b-[15px] md:text-[20px]">Se centra en movimientos que imitan actividades cotidianas, mejorando la fuerza, la estabilidad y la resistencia.</p>
              </div>
            </div>

            <div className="text-center pt-8 lg:pt-0 hover:scale-105 transition-all">
              <figure className="m-auto w-[80%] rounded-t-[15px] lg:w-full">
                <Image className="m-auto w-full rounded-t-[15px]" src="https://firebasestorage.googleapis.com/v0/b/matrixgym-club.appspot.com/o/2da-section%2Fmusculacion.png?alt=media&token=02c145b9-223d-4287-8a42-d33d12b3a333" width={ 250 } height={ 200 } alt="Musculación" />
              </figure>

              <div className="w-[80%] m-auto lg:w-full">
                <h3 className="m-auto text-white font-bold p-3 border-y-2 border-yellow-400 md:text-[22px] md:py-5">Musculación</h3>
                <p className="m-auto p-5 text-white text-balance border-b-4 border-b-yellow-400 rounded-b-[15px] md:text-[20px]">Entrenamiento que se enfoca en el desarrollo de la fuerza y el tamaño muscular mediante el uso de pesos libres y máquinas de resistencia.</p>
              </div>
            </div>

            <div className="text-center pt-8 lg:pt-0 hover:scale-105 transition-all">
              <figure className="m-auto w-[80%] rounded-t-[15px] lg:w-full">
                <Image className="m-auto w-full rounded-t-[15px]" src="https://firebasestorage.googleapis.com/v0/b/matrixgym-club.appspot.com/o/1era-section%2Fclases-grupales.png?alt=media&token=70ff5480-7eda-4cbf-bc52-7cb070992d84" width={ 250 } height={ 200 } alt="Clases de Baile" />
              </figure>

              <div className="w-[80%] m-auto lg:w-full">
                <h3 className="m-auto text-white font-bold p-3 border-y-2 border-yellow-400 md:text-[22px] md:py-5">Clases de baile</h3>
                <p className="m-auto p-5 text-white text-balance border-b-4 border-b-yellow-400 rounded-b-[15px] md:text-[20px]"> Ejercicio físico combinado con la danza que mejora la coordinación, la resistencia cardiovascular y la flexibilidad.</p>
              </div>
            </div>
          </div>


        </section>

        <section ref={( el ) => addToAnimadosRef( el )} className="mt-5 m-auto text-center p-5 max-w-[515px] lg:max-w-[50%] transition-all lg:animado">

          <h1 className="text-white font-bold md:text-[24px]">Conoce nuestro <span className="text-yellow-400">Horario</span></h1>
          
          <figure className="pt-6 transition-all lg:w-full lg:max-w-[1200px] lg:m-auto hover:scale-105">
            <Image className="m-auto object-cover lg:w-[1200px]" src="https://firebasestorage.googleapis.com/v0/b/matrixgym-club.appspot.com/o/horario-matrix.png?alt=media&token=4a752b88-9dff-4e48-9aa6-16e8395ab657" width={ 1520 } height={ 500 } alt="Horario MatrixGym" />
          </figure>

        </section>

        <section ref={( el ) => addToAnimadosRef( el )} className="mt-5 m-auto max-w-[515px] text-center p-5 *:font-bold *:transition *:duration-200 *:ease-in lg:animado">
          <h2 className="text-white md:text-[24px]">Vive la energía de MatrixGym</h2>
          <h2 className="text-yellow-400 md:text-[24px]">¡Únete hoy!</h2>
        
          <div className="w-[80%] group hover:bg-yellow-400 hover:cursor-pointer m-auto border-2 border-yellow-400 mt-4 p-5 md:p-8">
              <h2 onClick={ () => router.push('/select-membership')} className={`group-hover:text-black text-yellow-400 text-3xl ${ permanentMarker.className } md:text-[45px]`}>Inscríbete YA!</h2>
          </div>
        </section>

        <hr className="mt-16 border border-yellow-400"/>

        <Footer />

      </main>
      
    </>


    
  )
}
