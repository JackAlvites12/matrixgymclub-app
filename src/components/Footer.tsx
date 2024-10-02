import Image from "next/image"
import Link from "next/link"


export const Footer = () => {
  return (
    <footer className="py-10">
        <figure className="mt-8 w-[80%] m-auto">
            <Image className="m-auto md:scale-125" src="/assets/logo-matrix.svg" width={250} height={50} alt="Logo de MatrixGym" />
        </figure>
        <section className="p-5 flex flex-wrap gap-5 justify-center items-center *:p-2">
            <div className="">
                <h3 className="font-bold text-yellow-400 text-lg md:text-[22px]">Políticas y Términos</h3>
                <h5 className="text-white font-light text-xs md:text-base">Políticas y privacidad</h5>
                <h5 className="text-white font-light text-xs md:text-base">Términos y condiciones</h5>
            </div>

            <div className="">
                <h3 className="font-bold text-yellow-400 text-lg md:text-[22px]">Horarios</h3>
                <h5 className="text-white font-light text-xs md:text-base">Lunes a Sábado: 6am - 10pm</h5>
                <h5 className="text-white font-light text-xs md:text-base">Domingo: 7am - 1pm </h5>
            </div>

            <div className="">
                <h3 className="font-bold text-yellow-400 text-lg text-center md:text-[22px]">Síguenos</h3>
                <section className="flex text-white *:p-1 *:cursor-pointer">
                    <Link href="https://www.facebook.com/matrixgymclubchorrillos" target="_blank"><i className='hover:scale-110 transition-all bx bxl-facebook-circle bx-md'></i></Link>
                    <Link href="https://www.instagram.com/matrixgymchorrillos/" target="_blank"><i className='hover:scale-110 transition-all bx bxl-instagram bx-md'></i></Link>
                    <Link href="https://wa.me/+960504837?text=Hola,%20quisiera%20más%20información." target="_blank"><i className='hover:scale-110 transition-all bx bxl-whatsapp bx-md'></i></Link>
                    <Link href="https://www.tiktok.com/@matrixgymclub1" target="_blank"><i className='hover:scale-110 transition-all bx bxl-tiktok bx-md'></i></Link>
                    <Link href="mailto:matrixgymchorrillos@gmail.com?subject=CONSULTA" target="_blank"><i className='hover:scale-110 transition-all bx bx-envelope bx-md'></i></Link>
                </section>
            </div>
        </section>

            
        <h4 className="text-yellow-400 text-center font-light p-4 md:text-xl">MatrixGym 2024 - All Rights Reserved.</h4>
  </footer>
  )
}
