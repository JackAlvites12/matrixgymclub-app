'use client'

import { poppins } from "@/fonts";
import { useNavbarStore } from "@/store/navbarStore";
import Image from "next/image";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";



export const Navbar = () => {

    const router = useRouter()
    const pathName = usePathname()

    const isMenuOpen = useNavbarStore( state => state.isMenuOpen )
    const redirectionHome = useNavbarStore( state => state.redirectionHome )
    const setIsMenuOpen = useNavbarStore( state => state.setIsMenuOpen )
    const handleLinkClick = useNavbarStore( state => state.handleLinkClick )

    return(
      <nav style={{ backdropFilter: 'blur(10px)' }} className="fixed w-full z-[3] ease-in-out bg-transparent md:border-b-yellow-400 md:border-b-2">
          <div className="flex justify-between items-center h-[120px] nav__container m-auto">
            
            <figure className="nav__figure z-10 cursor-pointer">
              <Image className="md:scale-125" onClick={ () => redirectionHome( router ) } src="/assets/logo-matrix.svg" width={250} height={50} alt="Logo de MatrixGym" />
            </figure>

            <label className="nav__toggle size-[50px] cursor-pointer bg-cover ease-in-out duration-500 z-10 md:hidden">
              <input type="checkbox" id="menu-input" className="hidden" checked={ isMenuOpen } onChange={() => setIsMenuOpen( isMenuOpen )} />
            </label>

            <ul className={`*:font-bold min-h-screen md:min-h-0 nav__list text-3xl fixed inset-0 grid place-content-center gap-[3rem] text-center bg-black
                            list-none py-[1.5rem] px-[5%] ease-in-out duration-500 md:text-[22px] md:gap-[3rem] md:bg-transparent md:w-full 
                            md:grid-flow-col md:translate-x-0 md:relative md:ml-5 ${ poppins.className }`}>
              <li className="nav__item">
                <Link href="/sedes" className={`text-yellow-400 no-underline ${ pathName === '/sedes' ? 'active' : '' }`} onClick={ handleLinkClick }>
                  Sedes
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/blog" className={`text-yellow-400 no-underline ${ pathName === '/blog' ? 'active' : '' }`} onClick={ handleLinkClick }>
                  Blog
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/select-membership" className={`text-yellow-400 no-underline ${ pathName === '/select-membership' ? 'active' : '' }`} onClick={ handleLinkClick }>
                  Inscríbete
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/profile" className={`text-yellow-400 no-underline ${ pathName === '/profile' ? 'active' : '' }`} onClick={ handleLinkClick }>
                  Mi cuenta
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    )
}