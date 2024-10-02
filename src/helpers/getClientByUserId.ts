import { axiosInstance } from "@/utils/axiosInstance"

export const getClientByUserId = async ( userId: string ) => {

    try {

        const { data } = await axiosInstance.get(`/client/${ userId }`, { withCredentials: true })
        return data

    } catch ( error: any ) {
        throw error.response.data
    }

}