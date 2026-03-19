import '../styles/home.css';
import Logo from '../assets/LogoMC.svg';
import { Bars3Icon, MagnifyingGlassIcon, ChatBubbleBottomCenterTextIcon} from '@heroicons/react/16/solid';


const Header = () => {
    return (
        <>
            <header className="relative flex items-center gap-2.5 h-16 px-4">
                <Bars3Icon className="size-6" />
                <MagnifyingGlassIcon className="size-6" />

                <img
                    src={Logo}
                    alt="Melody Coffiure logo"
                    className="absolute left-1/2 -translate-x-1/2 h-18 md:h-20"
                />

                <ChatBubbleBottomCenterTextIcon className='size-6 ml-auto'/>
            </header>
        </>
    )
}

export default Header