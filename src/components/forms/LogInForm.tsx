import { poppins } from "@/fonts";
import { LoginProps } from "@/interfaces";
import { useUserStore } from "@/store/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const LogInForm = () => {

    const { register, handleSubmit, setError, formState: { errors }, reset, watch } = useForm<LoginProps>()
    const router = useRouter()
    const login = useUserStore( state => state.login )

    // Obtenemos los valores actuales de los campos
    const email = watch('email');
    const password = watch('password');
  
    // Expresión regular para validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validación para habilitar/deshabilitar el botón
    const isFormValid = emailRegex.test(email) && password?.length > 0;

    const onSubmit = handleSubmit( async ( data ) => {

        try {
          
            const res = await login( data )
  
            // Mostrar mensaje en un sweetalert 
            // console.log( res );
  
            reset()
            router.push('/profile')
  
        } catch ( error: any ) {
            reset()
            setError('email', { type: 'invalid', message: error.message })
            setError('password', { type: 'invalid', message: error.message})
        }
  
    })

  return (
    <div className="w-[80%] max-w-[400px] m-auto border-2 border-yellow-400">

            <h1 className={`text-yellow-400 pt-8 text-center text-4xl font-extrabold ${ poppins.className }`}>Iniciar Sesión</h1>
            <span className="text-white block text-center py-4 text-[14px]">Bienvenido a MatrixGym Club!</span>
            
            <form onSubmit={ onSubmit } className="text-white m-auto w-[290px] p-4 flex flex-col gap-y-5">

              <label >
                Correo electrónico
                <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md"
                  type="email" 
                  {...register('email', { required: true })}
                  onChange={(e) => e.target.value = e.target.value.toLowerCase()}
                  />


              </label>

              <label>
                Contraseña
                <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md"
                  type="password"
                  {...register('password', { required: true })}
                  
                  />
              </label>

              <span className="text-[#FF4136] text-center">{ errors?.email?.message || errors?.password?.message }</span>

              <button disabled={ !isFormValid } className={`mt-3 bg-yellow-400 p-3 font-bold text-black outline-none rounded-md transition-all ${ isFormValid ? '' : 'opacity-50'}`}>Ingresar</button>
            </form>

            <div className="p-5">
              <h3 className="text-white font-bold text-center">¿No tienes una cuenta?</h3>
              <Link className="block text-yellow-400 font-bold text-center" href="/signup">Crear cuenta</Link>
            </div>
          </div>
  )
}
