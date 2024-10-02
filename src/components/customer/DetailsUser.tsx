import { UserData } from "@/interfaces"

interface Props {
    user: UserData,
}

export const DetailsUser = ({ user }: Props ) => {
  return (
    <section className="mt-10 w-[80%] m-auto lg:mt-0">
        <div className="">
            <h3 className="font-bold py-2 border-b-2 text-[18px] border-yellow-400 lg:w-[80%] lg:text-xl">Perfil de usuario</h3>
            <h3 className="p-3 lg:text-[18px]">Correo: <span className="font-bold text-yellow-400">{ user?.email }</span></h3>
        </div>
    </section>
  )
}
