'use client'

import React from "react";
import { Navbar } from "@/components/Navbar";
import { permanentMarker } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogPage(){

    const [ isSelected, setIsSelected ] = useState<boolean>( true )    
    

    return(

        <>
            <Navbar />
            <section className="pt-[150px] min-h-screen relative animate__animated animate__fadeIn">
                <div className="pb-32">
                    <h1 className={`text-[35px] text-yellow-400 text-center uppercase ${ permanentMarker.className } transition-all md:text-[50px]` }>Blog</h1>

                    <div className="w-[80%] max-w-[440px] m-auto pt-5 flex justify-center text-yellow-400 uppercase md:text-lg">
                        <button onClick={ () => setIsSelected( true )} className={`flex-1 p-2 border outline-none border-yellow-400 font-bold ${ isSelected ? 'bg-yellow-400 text-black' : '' }`}>Reels</button>
                        <button onClick={ () => setIsSelected( false )} className={`flex-1 p-2 border outline-none border-yellow-400 font-bold ${ !isSelected ? 'bg-yellow-400 text-black' : '' }`}>Motivación</button>
                    </div>

                    <div className="max-w-[440px] m-auto lg:max-w-[90%]">

                        {
                            isSelected 
                            ? 
                                <div className="lg:max-w-[950px] lg:flex lg:m-auto lg:justify-center lg:gap-x-4 *:transition-all">
                                    <section className="mt-5 w-[80%] m-auto border-yellow-400 border-2 lg:w-[400px]">
                                        <video className="w-full lg:h-[520px]" width={ 200 } height={ 200 } controls poster="https://firebasestorage.googleapis.com/v0/b/appkotlin-mymfashion.appspot.com/o/poster.png?alt=media&token=5abe89cc-77aa-4ea6-b704-5f1a82f00ec3">
                                            <source src="https://firebasestorage.googleapis.com/v0/b/matrixgym-club.appspot.com/o/reel1.mp4?alt=media&token=773126f7-0891-49ee-9bca-dbd336a5d682" type="video/mp4" />
                                        </video>
                                    </section>
                                    <section className="mt-5 w-[80%] m-auto border-yellow-400 border-2 lg:w-[400px]" >
                                        <video className="w-full lg:h-[520px]" width={ 200 } height={ 200 } controls poster="https://firebasestorage.googleapis.com/v0/b/appkotlin-mymfashion.appspot.com/o/poster.png?alt=media&token=5abe89cc-77aa-4ea6-b704-5f1a82f00ec3">
                                            <source src="https://firebasestorage.googleapis.com/v0/b/matrixgym-club.appspot.com/o/reel2.mp4?alt=media&token=da130c2c-9c2f-49d8-b30f-90a92e605b56" type="video/mp4" />
                                        </video>
                                    </section>
                                    <section className="mt-5 w-[80%] m-auto border-yellow-400 border-2 lg:w-[400px]" >
                                        <video className="w-full lg:h-[520px]" width={ 200 } height={ 200 } controls poster="https://firebasestorage.googleapis.com/v0/b/appkotlin-mymfashion.appspot.com/o/poster.png?alt=media&token=5abe89cc-77aa-4ea6-b704-5f1a82f00ec3">
                                            <source src="https://firebasestorage.googleapis.com/v0/b/matrixgym-club.appspot.com/o/reel3.mp4?alt=media&token=c6bdf5ef-cdaa-4f70-a1d9-0fbf0b8dfd95" type="video/mp4" />
                                        </video>
                                    </section>
                                </div>
                            :   
                            <section className="mt-5 w-[80%] m-auto flex flex-col gap-y-5 lg:max-w-[750px] lg:flex-row lg:justify-center lg:gap-5 lg:flex-wrap lg:overflow-auto lg:h-[460px] section__client">
                                <figure>
                                    <Image className="m-auto border-2 border-yellow-400" src="/assets/frase1.png" width={ 350 } height={ 250 } alt="Motivacion 1" />
                                </figure>
                                <figure>
                                    <Image className="m-auto border-2 border-yellow-400" src="/assets/frase2.png" width={ 350 } height={ 250 } alt="Motivacion 1" />
                                </figure>
                                <figure>
                                    <Image className="m-auto border-2 border-yellow-400" src="/assets/frase2.png" width={ 350 } height={ 250 } alt="Motivacion 1" />
                                </figure>
                                <figure>
                                    <Image className="m-auto border-2 border-yellow-400" src="/assets/frase2.png" width={ 350 } height={ 250 } alt="Motivacion 1" />
                                </figure>
                            </section> 
                        }
                    </div>
                </div>

                <section className="absolute bottom-0 w-full p-6 mt-5 flex justify-end items-center gap-1 text-white">
                    <h3 className="font-bold px-1 text-yellow-400 md:text-xl">Ver más aquí: </h3>
                    <Link href="https://www.tiktok.com/@matrixgymclub1" target="_blank"><i className='hover:scale-110 transition-all bx bxl-tiktok bx-md'></i></Link>
                    <Link href="https://www.instagram.com/matrixgymchorrillos/" target="_blank"><i className='hover:scale-110 transition-all bx bxl-instagram bx-md'></i></Link>
                </section>
            </section>

        </>
    )
}