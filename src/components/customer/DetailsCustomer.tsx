import React from 'react'
import { poppins } from '@/fonts';
import { ClientData } from '@/interfaces'
import { Card3D } from '../Card3D';
import { NoDetailsCustomer } from '../messages/NoDetailsCustomer';

interface Props {
    clientData: ClientData
}

export const DetailsCustomer = ({ clientData }: Props ) => {



    let convertDate;

    if( clientData?.fechaNacimiento ){
        const date = new Date( clientData?.fechaNacimiento as Date )
        convertDate = date.toISOString().split('T')[0]
    }



  return (
    <section className="mt-5 w-[80%] m-auto lg:mt-0">
        <div className="">
            <h3 className="font-bold py-2 border-b-2 text-[18px] border-yellow-400 lg:w-[80%] lg:text-xl">Información de cliente</h3>
            <section>
                {
                    ( clientData 
                        ? 
                        <section className="lg:overflow-auto lg:h-[460px] section__client">
                            <h3 className="p-3 lg:text-[18px]">Tu código de acceso es: <span className="font-bold text-yellow-400">{ clientData?.codigo }</span></h3>
                            <section className="grid grid-cols-2 grid-rows-5">
                                <div>
                                    <h3 className="p-3 lg:text-[18px]">Nombres</h3>
                                    <span className="pl-3 font-bold text-yellow-400">{ clientData?.nombre }</span>
                                </div>
                                <div>
                                    <h3 className="p-3 lg:text-[18px]">Apellidos</h3>
                                    <span className="pl-3  font-bold text-yellow-400">{ clientData?.apellido }</span>
                                </div>
                                <div>
                                    <h3 className="p-3 lg:text-[18px]">Fecha Nacimiento</h3>
                                    <span className="pl-3  font-bold text-yellow-400">{ convertDate }</span>
                                </div>
                                <div>
                                    <h3 className="p-3 lg:text-[18px]">Edad</h3>
                                    <span className="pl-3 font-bold text-yellow-400">{ clientData?.edad }</span>
                                </div>
                                <div>
                                    <h3 className="p-3 lg:text-[18px]">DNI</h3>
                                    <span className="pl-3 font-bold text-yellow-400">{ clientData?.docIdentidad }</span>
                                </div>
                                <div>
                                    <h3 className="p-3 lg:text-[18px]">Género</h3>
                                    <span className="pl-3 font-bold text-yellow-400">{ clientData?.genero }</span>
                                </div>
                                <div>
                                    <h3 className="p-3 lg:text-[18px]">Domicilio</h3>
                                    <span className="pl-3 font-bold text-yellow-400">{ clientData?.domicilio }</span>
                                </div>
                                <div>
                                    <h3 className="p-3 lg:text-[18px]">Distrito</h3>
                                    <span className="pl-3 font-bold text-yellow-400">{ clientData?.distrito }</span>
                                </div>
                                <div>
                                    <h3 className="p-3 lg:text-[18px]">Teléfono</h3>
                                    <span className="pl-3 font-bold text-yellow-400">{ clientData?.telefono }</span>
                                </div>
                            </section>
                            <section className="mt-10 lg:max-w-[415px] lg:m-auto lg:mt-14">
                                <h1 className={`${ poppins.className } text-white text-center font-bold text-lg`}>Mi membresía</h1>

                                <Card3D membershipData={ clientData.membershipData } type="customer" />

                            </section>
                            <section className="mt-10 pb-10 lg:mt-14 lg:max-w-[415px] lg:m-auto transition-all">
                                <h1 className={`${ poppins.className } text-white text-center font-bold text-lg`}>Mis transacciones</h1>
                                <div className="mt-5 border-2 border-yellow-400 rounded-md p-3 *:py-1">
                                    <h5 className="text-white text-xs font-extralight">ID: { clientData.transactionData.transactionId }</h5>
                                    <div className="flex justify-between">
                                        <span className="font-bold text-yellow-400">{ clientData?.transactionData.estado }</span>
                                        <span className="font-bold text-[#FF4136]">-{ clientData?.transactionData.monto_total }{ clientData?.transactionData.moneda }</span>
                                    </div>
                                    <h5 className="text-white text-xs font-extralight">{ clientData.transactionData.fecha.split('GMT')[0] }</h5>
                                </div>
                            </section>
                        </section>

                        : <NoDetailsCustomer />
                    )
                }
            </section>
        </div>
    </section>
  )
}
