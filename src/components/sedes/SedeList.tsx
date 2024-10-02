import { Sede } from "@/interfaces"
import { SedeItem } from "./SedeItem"
import { ReactNode } from "react"

interface Props {
    sedes: Sede[]
}

export const SedeList = ({ sedes }: Props ) => {

    const sedesLima = sedes.filter( sede => sede.region === 'LIMA')
    const sedesProvincia = sedes.filter( sede => sede.region === 'PROVINCIA')


    const renderSedes = ( titulo: 'LIMA' | 'PROVINCIA', sedesRegion: Sede[] ): ReactNode => {

        return (
            <SedeItem  titulo={ titulo } sedesRegion={ sedesRegion }/>
        )
    } 

    
  return (
      <section className="mt-5 lg:flex lg:justify-center lg:gap-x-5 lg:mt-10">
        { renderSedes('LIMA', sedesLima ) }
        { renderSedes('PROVINCIA', sedesProvincia ) }   
      </section>
  )

}
