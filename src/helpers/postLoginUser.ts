import { LoginProps } from "@/interfaces";
import { axiosInstance } from "@/utils/axiosInstance";


export const postLoginUser = async ( body: LoginProps ) => {

    try {

        const { data } = await axiosInstance.post('/users/login', body, { withCredentials: true })
        return data

    } catch ( error: any ) {
        throw error.response.data
    }

}
