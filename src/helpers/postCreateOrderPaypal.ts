import { Membership } from "@/interfaces";
import { axiosInstance } from "@/utils/axiosInstance";

export const postCreateOrderPaypal = async ( body: Membership ) => {
    
    try {
        
        const { data } = await axiosInstance.post('/checkout/create-order', body, { withCredentials: true })
        return data 

    } catch ( error: any ) {

        throw error.response.data
        
    }
}
