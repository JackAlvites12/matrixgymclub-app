import { permanentMarker } from '@/fonts'
import { Sede } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    titulo: 'LIMA' | 'PROVINCIA',
    sedesRegion: Sede[],
}

export const SedeItem = ({ titulo, sedesRegion }: Props ) => {
    return(

        <div className=''>
            <h1 className={`text-[35px] text-yellow-400 text-center uppercase ${ permanentMarker.className } transition-all md:text-[50px]` }>{ titulo }</h1>
            
            { 
                sedesRegion.map(({ id, img, nombre, direccion, telefono }) => (
                    <div key={ id } className="p-6 m-auto max-w-[440px] flex items-center gap-4 text-white">
                        <figure className="flex-1">
                            <Image className="rounded-md hover:cursor-pointer hover:scale-105 transition-all" src={`${ img }`} width={ 270 } height={ 150 } alt={`${ nombre }`} />
                        </figure>
                        <section className="flex-1 *:transition-all">
                            <div className="text-yellow-400 flex items-center gap-1">
                                <i className='bx bxs-map bx-sm'></i><span className="uppercase font-semibold md:text-[20px]">{ nombre }</span>
                            </div>
                            <p className="py-2 text-xs text-center md:text-sm">{ direccion }</p>
                                <div className="mt-4 hover:cursor-pointer hover:bg-yellow-400 hover:text-black p-2 text-yellow-400 border border-yellow-400 xs:p-2 md:p-3">
                                    <Link href={`https://wa.me/+${ telefono }?text=Hola,%20quisiera%20más%20información.`} target='_blank' className='flex justify-center items-center gap-x-1'><i className='bx bxl-whatsapp bx-sm'></i><span className="font-semibold md:text-xl">{ telefono }</span></Link>
                                </div>
                        </section>
                    </div>
                ))
            }
        </div>
    )
}

