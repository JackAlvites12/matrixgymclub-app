import { axiosInstance } from "../utils/axiosInstance"

export const postSelectMembership = async ( id: string ) => {

    await axiosInstance.post( '/select-membership', { _id: id }, { withCredentials: true } )
    
}
