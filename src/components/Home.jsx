import '../styles/home.css';
import Logo from '../assets/Logo MC.svg';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/16/solid';


const Home = () => {
    return (
        <>
            <header className='flex gap-2.5'>
                <Bars3Icon className='size-6'/>
                <MagnifyingGlassIcon className='size-6'/>.
                <img src={Logo} alt="Melody Coffiure logo" className='min-w-28 max-h-20'/>
            </header>
        </>
    )
}

export default Home;