import { permanentMarker } from '@/fonts'
import { useRouter } from 'next/navigation'


export const NoDetailsCustomer = () => {

    const router = useRouter()

  return (
        <div className="h-[200px] flex flex-col justify-center items-center gap-y-3 animate__animated animate__fadeIn">
            <h4 className="text-center p-3">Debes adquirir una membresía para ser un cliente.</h4>
            <div className="group">
                <button onClick={ () => router.push('/select-membership')} className={`outline-none p-4 border-yellow-400 border-2 text-[25px] text-yellow-400 ${ permanentMarker.className } group-hover:text-black group-hover:bg-yellow-400 transition duration-200 ease-in`}>Inscríbete YA!</button>
            </div>
        </div>
  )
}
