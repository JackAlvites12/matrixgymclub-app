import { poppins } from "@/fonts"
import Link from "next/link"


export const AuthMessage = () => {

    return (

        <section className="min-h-screen flex justify-center items-center p-5 text-white animate__animated animate__fadeIn">
            <div className="text-center">
                <h1 className={`font-bold ${ poppins.className } xs:text-xl`}>Tienes que iniciar sesión o registrarte para poder continuar.</h1> 
                <div className="flex flex-col p-5 *:underline *:text-blue-500 gap-y-3">
                    <Link className="font-bold xs:text-xl" href="/signup">Registrarse</Link>
                    <Link className="font-bold xs:text-xl" href="/login">Iniciar sesión</Link>
                </div>

            </div>
        </section>
    )
}