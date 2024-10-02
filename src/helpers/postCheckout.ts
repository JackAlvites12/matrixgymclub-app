import { Membership } from "@/interfaces"
import { axiosInstance } from "@/utils/axiosInstance"

export const postCheckout = async ( body: Membership ) => {
    
    try {
        
        const { data } = await axiosInstance.post('/checkout', body, { withCredentials: true })
        return data 

    } catch ( error: any ) {

        throw error.response.data
        
    }
}
