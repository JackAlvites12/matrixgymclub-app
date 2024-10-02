
import { useEffect, useState } from "react"
import { Membership } from "@/interfaces"
import { useRouter } from "next/navigation"
import { MembershipItem } from "./MembershipItem"
import { postSelectMembership } from "@/helpers/postSelectMembership"

interface Props {
    memberships: Membership[]
}


export const MembershipList = ({ memberships = [] }: Props) => {

    const [ membershipId, setMembershipId ] = useState<string>('')
    const router = useRouter()

    
    useEffect(() => {

        const savedMembershipId = localStorage.getItem("membershipId");

        if (savedMembershipId) {
          setMembershipId(savedMembershipId);
        }

    }, []);

    
    useEffect(() => {
        
        localStorage.setItem('membershipId', membershipId)

    },[ membershipId ])


    const onSelectMembership = async () => {
        
        await postSelectMembership( membershipId )
        router.push('/register-client')
    
    }
    
  return (

    <section className="w-[90%] max-w-[415px] m-auto">
        <ul className="flex flex-col gap-y-10 p-4 *:cursor-pointer">
            {
                memberships.map(({ _id, ...restArgs }) => (
                    <MembershipItem key={ _id } _id={ _id } membershipId={ membershipId } setMembershipId={ setMembershipId }  { ...restArgs } />
                ))
            }
        </ul>

        <div className="p-5 text-center">
            <button className="bg-yellow-400 p-3 font-bold text-black outline-none rounded-md transition-all hover:scale-105 md:p-4 md:text-lg" onClick={ () => onSelectMembership() }>Continuar al registro</button>
        </div>

    </section>

  )

}
