import { useRouter } from "next/navigation";
import { create, StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";

interface navbarState {
    isMenuOpen: boolean;
}

interface navbarActions {
    handleLinkClick: () => void;
    redirectionHome: ( router: ReturnType<typeof useRouter> ) => void;
    setIsMenuOpen: ( isMenuOpen: boolean ) => void;
}


const storeApi: StateCreator<navbarState & navbarActions, [["zustand/immer", never]]> = ( set ) => ({

    isMenuOpen: false,
    
    handleLinkClick: () => {
        set(( state ) => {
            state.isMenuOpen = false
        })
    },
    
    redirectionHome: ( router ) => {
        
        router.push('/')

        set(( state ) => {
            state.isMenuOpen = false
        })

    },

    setIsMenuOpen: ( isMenuOpen ) => {

        set(( state ) => {
            state.isMenuOpen = !isMenuOpen
        })
    }

})


export const useNavbarStore = create<navbarState & navbarActions>()( 
    immer( storeApi )
)