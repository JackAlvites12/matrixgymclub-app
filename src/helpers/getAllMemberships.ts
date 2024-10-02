import { axiosInstance } from "../utils/axiosInstance"

export const getAllMemberships = async () => {

    try {
        
        const { data } = await axiosInstance.get('/memberships', { withCredentials: true })

        return data

    } catch ( error: any ) {

        throw error.response.data
        
    }

}