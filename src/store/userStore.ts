import { postCheckout } from "@/helpers/postCheckout";
import { postCreateOrderPaypal } from "@/helpers/postCreateOrderPaypal";
import { postLoginUser } from "@/helpers/postLoginUser";
import { postLogout } from "@/helpers/postLogout";
import { postRegisterUser } from "@/helpers/postRegisterUser";
import { LoginProps, Membership, SignUpProps } from "@/interfaces";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { create, type StateCreator} from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from 'zustand/middleware/immer';

interface BodyUser { 
    _id: string,
    username: string,
    email: string,
}

interface UserState {
    user: BodyUser | null,
    isAuthenticated: boolean,
    isClient: boolean,
}

interface UserActions {
    
    signUp: ( body: SignUpProps ) => Promise<void>,
    login: ( body: LoginProps ) => Promise<void>,
    logout: ( router: AppRouterInstance ) => void,
    clearUserState: () => void,
    handleCheckout: ( membership: Membership ) => Promise<any>
    handleCheckoutPaypal: ( membership: Membership ) => Promise<any>
    handleCheckoutStatus: ( value: boolean ) => void

}

// Crear  un storeAPI 
const storeApi: StateCreator<UserState & UserActions, [["zustand/immer", never]]> = ( set ) => ({
    
    user: null,
    isAuthenticated: false,
    isClient: false,
    signUp: async ( body: SignUpProps ) =>  {

        const res = await postRegisterUser( body )
        
        const { _id, username, email } = res.newUser

        const bodyUser = {
            _id, username, email
        }

        set(( state: UserState ) => {
            state.isAuthenticated = true
            state.user = bodyUser
            state.isClient = false 
        })
    },

    login: async ( body: LoginProps ) => {
        
        const res = await postLoginUser( body )
        
        const { _id, email, username, isClient } = res.bodyUser
        
        const bodyUser = {
            _id, 
            email,
            username,
        }

        set(( state: UserState ) => {
            state.isAuthenticated = true,
            state.user = bodyUser
            state.isClient = isClient
        })

    },

    logout: async ( router: AppRouterInstance) => {
        
        await postLogout()
        
        set(( state ) => {
            state.user = null,
            state.isAuthenticated = false,
            state.isClient = false 

        })

        router.push('/')

    },

    clearUserState: () => {

        set(( state ) => {
            state.user = null,
            state.isAuthenticated = false,
            state.isClient = false 
        })

    },

    handleCheckout: async ( membership: Membership ) => {

        const res = await postCheckout( membership )

        return res
    },

    handleCheckoutPaypal: async ( membership: Membership ) => {

        const res = await postCreateOrderPaypal( membership )
        return res

    },

    handleCheckoutStatus: ( value: boolean ) => {
        
        set(( state ) => {
            state.isClient = value
        })
    }

})

export const useUserStore = create<UserState & UserActions>()(
    
    devtools(
        persist(
            immer( storeApi ), 
            { name: 'user-store' }
        )
    )
)