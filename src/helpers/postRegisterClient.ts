import { Cliente } from "@/interfaces";
import { axiosInstance } from "@/utils/axiosInstance";

export const postRegisterClient = async ( body: Cliente ) => {

    try {
        
        const { data } = await axiosInstance.post('/register-client', body , { withCredentials: true })
        return data 

    } catch ( error: any ) {
        throw error.response.data
    }

    
}