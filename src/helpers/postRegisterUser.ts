import { SignUpProps } from "@/interfaces";
import { axiosInstance } from "@/utils/axiosInstance";


export const postRegisterUser = async ( body: SignUpProps ) => {

    const newBody = {
        username: body.username, 
        email: body.email,
        password: body.password
    }

    try {
        
        const { data } = await axiosInstance.post('/users/signup', newBody, { withCredentials: true } )
        return data 

    } catch ( error: any ) {

        throw error.response.data

    }

}
