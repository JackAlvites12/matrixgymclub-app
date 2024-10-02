import { poppins } from "@/fonts";
import { SignUpProps } from "@/interfaces";
import { useUserStore } from "@/store/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const SignUpForm = () => {

    const router = useRouter()
    const { register, handleSubmit, setError, watch, formState: { errors }, reset } = useForm<SignUpProps>()
    const signUp = useUserStore( state => state.signUp )

      // Obtenemos los valores actuales de los campos
    const username = watch('username');
    const email = watch('email');
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    // Expresión regular para validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación para habilitar/deshabilitar el botón
    const isFormValid = emailRegex.test(email) && username?.length > 0 && password?.length > 0 && confirmPassword?.length > 0;
    

    const onSubmit = handleSubmit( async ( data ) => {
      
        try {
          
          // Imprimir en un sweet alert el mensaje que devuelva el res 
          await signUp( data )
          router.push('/profile')
          
          reset()
    
        } catch ( error: any ) {
    
          switch( error.type ){
    
            case 'user-duplicate':
              setError('username', { type: error.type, message: error.message })
              break;
              
            case 'email-duplicate':
              setError('email', { type: error.type, message: error.message })
              break;
    
          }
        }
    
    })

  return (
    <div className="w-[80%] max-w-[400px] m-auto border-2 border-yellow-400">
    
      <h1 className={`text-yellow-400 pt-5 text-center text-4xl font-extrabold ${ poppins.className }`}>Crear cuenta</h1>

      <form onSubmit={ onSubmit } className="text-white m-auto w-[290px]  p-4 flex flex-col justify-center gap-y-4">
          <label>
              Nombre de usuario
              <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md"
              type="text" 
              {...register('username', { required: true })} 
              onChange={(e) => e.target.value = e.target.value.toLowerCase()}
              />
          </label>

          <span className="text-[#FF4136] text-center text-[14px]">{ errors?.username?.message }</span>

          <label>
              Correo electrónico
              <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md"
              type="email" 
              {...register('email', { required: true })}
              onChange={(e) => e.target.value = e.target.value.toLowerCase()}
              />

          </label>

          <span className="text-[#FF4136] text-cente text-[14px]">{ errors?.email?.message }</span>

          <label>
              Contraseña
              <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md"
              type="password" 
              {...register('password', { required: true })}
              
              />
          </label>
          <label>
              Confirmar contraseña
              <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md"
              type="password" 
              {...register('confirmPassword', { 
                      required: true, 
                      validate: ( value: string ) => {
                          return value === watch('password') || 'Las contraseñas no coinciden'
                      } 
                      }
              )}
              />

          
          </label>

          <span className="text-[#FF4136] text-center">{ errors?.confirmPassword?.message }</span>
          <button disabled={ !isFormValid } className={`${ isFormValid ? 'bg-yellow-400 p-3 font-bold text-black outline-none rounded-md transition-all' : 'bg-yellow-400 opacity-50 p-3 font-bold text-black outline-none rounded-md transition-all'}`}>Crear cuenta</button>

      </form>

      <div className="p-5">
        <h3 className="text-white font-bold text-center">¿Ya tienes una cuenta?</h3>
        <Link className="block text-yellow-400 font-bold text-center" href="/login">Iniciar sesión</Link>
      </div>
    </div>

  )
}
