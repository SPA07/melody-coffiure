import '../styles/index.css';
import Logo from '../assets/LogoMC.svg';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';





const Header = () => {
    return (
        <>
            <header className="relative flex items-center gap-2.5 h-16 px-4">
                <Bars3Icon className="size-8 text-pink-400 hover:text-pink-600 transition" />
                <MagnifyingGlassIcon className="size-8 text-pink-400 hover:text-pink-600 transition" />

                <img
                    src={Logo}
                    alt="Melody Coffiure logo"
                    className="absolute left-1/2 -translate-x-1/2 h-14 md:h-16 transition-transform duration-300 hover:scale-110"
                />

               <FontAwesomeIcon icon={faWhatsapp} className='ml-auto text-3xl text-#770b72 hover:text-pink-400 transition'/>
            </header>
        </>
    )
}

export default Header