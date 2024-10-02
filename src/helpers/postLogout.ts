import { axiosInstance } from "@/utils/axiosInstance"

export const postLogout = async () => {

    try {

        const { data } = await axiosInstance.get('/users/logout', { withCredentials: true })
        return data

    } catch ( error: any ) {
        throw error.response.data
    }

} 