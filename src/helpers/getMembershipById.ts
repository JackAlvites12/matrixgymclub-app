import { axiosInstance } from "@/utils/axiosInstance"

export const getMembershipById = async ( id: string ) => {

    try {

        const{ data } = await axiosInstance.get(`/memberships/${ id }`, { withCredentials: true })
        return data

    } catch ( error: any ) {
        throw error.response.data
    }
}
