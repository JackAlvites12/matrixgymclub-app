import { Permanent_Marker, Poppins } from "next/font/google"

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '400', '700', '800']
  })
  
  export const permanentMarker = Permanent_Marker({
    subsets: ['latin'],
    weight: ['400']
  })