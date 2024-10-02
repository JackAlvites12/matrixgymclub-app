import { postRegisterClient } from "@/helpers/postRegisterClient"
import { Cliente } from "@/interfaces"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export const RegisterClientForm = () => {

    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<Cliente>()
    const router = useRouter()

    const fechaNacimiento = watch('fechaNacimiento')
    
    useEffect(() => {

        if( fechaNacimiento ){
            const fechaActual = new Date()
            const nacimiento = new Date( fechaNacimiento )
            const edad = fechaActual.getFullYear() - nacimiento.getFullYear()

            setValue('edad', edad )

        } else {
            setValue('edad', '')
        }

    }, [ fechaNacimiento, setValue ])


    const onSubmit = handleSubmit( async ( data: Cliente ) => {

        try {
            
            const res = await postRegisterClient( data )
            console.log( res );

            reset()
            router.push('/checkout')

            
        } catch (error) {
            console.log( error );
            
        }
        
    })

  return (

        <form className="text-white mt-5 m-auto max-lg:w-[290px] p-4 flex flex-col justify-center gap-y-4 md:grid md:w-[650px] md:grid-cols-2 md:gap-x-8" 
              onSubmit={ onSubmit } >
            <label className="">
                Nombres
                <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md" 
                        type="text" {...register('nombre', { required: { value: true, message: 'Este campo es requerido' }, maxLength: { value: 30, message: 'No puede tener más de 20 carácteres' } })} 
                />
                <span className="block mt-2 pl-2 text-[#FF4136] text-start text-[14px]">{ errors?.nombre?.message }</span>
            </label>

            <label>
                Apellidos
                <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md" 
                    type="text" {...register('apellido', { required: { value: true, message: 'Este campo es requerido' }, maxLength: { value: 50, message: 'No puede tener más de 35 carácteres' } })}  
                />
                <span className="block mt-2 pl-2 text-[#FF4136] text-start text-[14px]">{ errors?.apellido?.message }</span>
            </label>

            <label>
                Fecha de Nacimiento:
                <input
                    className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md"
                    type="date"
                        {...register('fechaNacimiento', {
                            required: { value: true, message: 'Este campo es requerido' },
                            validate: ( value ) => {
                                
                                // Verifica si es una fecha válida
                                const currentDate = new Date();
                                const inputDate = new Date( value );

                                // Validación: la fecha debe ser anterior a la fecha actual
                                if (inputDate > currentDate) {
                                    return 'La fecha no puede ser mayor a hoy';
                                }

                                // Validación: año debe ser lógico (mayor de 1900)
                                const inputYear = inputDate.getFullYear();
                                if ( inputYear < 1945 || inputYear > 2010 ) {
                                    return 'El año debe estar en un rango de 1945 a 2010';
                                }

                                return true;
                            }
                        })}
                />
                <span className="block mt-2 pl-2 text-[#FF4136] text-start text-[14px]">{ errors?.fechaNacimiento?.message }</span>
            </label>

            <label>
                Edad
                <input className="font-bold w-full p-3 bg-yellow-600 outline-none text-black rounded-md" 
                    type="string" readOnly {...register('edad', { validate: ( value ) => {
                            const edad = parseInt( value );
                            return edad > 14 || 'Edad no permitida';
                        }})}
                />
            </label>

            <label>
                DNI
                <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md" 
                        type="number" { ...register('docIdentidad', { required: { value: true, message: 'Este campo es requerido' }, maxLength: { value: 8, message: 'DNI sólo debe tener 8 dígitos' } })} 
                />
                <span className="block mt-2 pl-2 text-[#FF4136] text-start text-[14px]">{ errors?.docIdentidad?.message }</span>
            </label>

            <label>
                Género
                <select defaultValue="default" {...register('genero', { required: { value: true, message: 'Este campo es requerido' }}) } className="appearance-none bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md" >
                    <option value="default" disabled >Seleccionar...</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                </select>
                <span className="block mt-2 pl-2 text-[#FF4136] text-start text-[14px]">{ errors?.genero?.message }</span>
            </label>

            <label>
                Domicilio
                <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md" 
                    type="text" {...register('domicilio', { required: { value: true, message: 'Este campo es requerido' }, maxLength: { value: 50, message: 'No debe tener más de 50 carácteres' } })}
                />
                <span className="block mt-2 pl-2 text-[#FF4136] text-start text-[14px]">{ errors?.domicilio?.message }</span>
            </label>

            <label>
                Distrito
                <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md" 
                    type="text" { ...register('distrito', { required: { value: true, message: 'Este campo es requerido' }, maxLength: { value: 20, message: 'No debe tener más de 20 carácteres' } })}
                />
                <span className="block mt-2 pl-2 text-[#FF4136] text-start text-[14px]">{ errors?.distrito?.message }</span>
            </label>

            <label>
                Teléfono
                <input className="bg-black w-full p-3 border-yellow-400 border-2 outline-none text-yellow-400 rounded-md"  
                    type="text" { ...register('telefono', { required: { value: true, message: 'Este campo es requerido' }, maxLength: { value: 9, message: 'Teléfono debe tener 9 dígitos' } })}
                />
                <span className="block mt-2 pl-2 text-[#FF4136] text-start text-[14px]">{ errors?.telefono?.message }</span>
            </label>

            <button className="mt-5 bg-yellow-400 p-3 font-bold text-black outline-none rounded-md transition-all hover:scale-105 md:col-span-2 md:w-[50%] md:m-auto md:mt-10">Continuar al Checkout</button>

        </form>
  )
}
