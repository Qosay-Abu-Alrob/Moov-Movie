import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faBell,faUser,faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'
function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return ( 
    <>
    <div className='flex items-center justify-between'>
        <div className="flex items-center">
            <div className="flex py-8 px-10">
                <FontAwesomeIcon className='flex mr-8 md:hidden text-primary size-6 cursor-pointer' onClick={toggleMenu} icon={faBars} />
                <img  src={logo} alt="logo" />
                <p className="text-primary text-xl font-bold">OOV</p>
            </div>
            <nav>
                <ul className={` md:flex md:items-center  ${isMenuOpen ? ' bg-test text-primary overflow-hidden absolute right-0 top-[3.8rem] w-full text-center z-50':''} text-primary`}>
                    <li className={` md:flex md:items-center  ${isMenuOpen ? 'p-3 hover:bg-dark' : 'hidden mr-10 nav-bar-hover  '} md: text-primary`}><a href="#Home">Home</a></li>
                    <li className={` md:flex md:items-center  ${isMenuOpen ? 'p-3 hover:bg-dark' : 'hidden mr-10 nav-bar-hover '} md: text-primary`}><a href="#Movies">Movies</a></li>
                    <li className={` md:flex md:items-center  ${isMenuOpen ? 'p-3 hover:bg-dark' : 'hidden mr-10 nav-bar-hover '} md: text-primary`}><a href="#Series">Series</a></li>
                    <li className={` md:flex md:items-center  ${isMenuOpen ? 'p-3 hover:bg-dark' : 'hidden mr-10 nav-bar-hover '} md: text-primary`}><a href="#Kids">Kids</a></li>
                </ul>
            </nav>
            
        </div> 
        <div>
            <FontAwesomeIcon className='  mr-5 md:mr-10 text-primary cursor-pointer hover:text-dark' icon={faMagnifyingGlass} />
            <FontAwesomeIcon className='mr-5 md:mr-10 text-primary cursor-pointer hover:text-dark' icon={faBell } />
            <FontAwesomeIcon className='mr-5 md:mr-10 text-primary cursor-pointer hover:text-dark' icon={faUser } />
        </div>
    </div>
    </> 
    );
}

export default NavBar;