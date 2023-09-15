import React from 'react';
import FCBLogo from '../assets/fcb-logo.png';

const Header = () => {
    return (
        <header className='flex flex-row justify-center items-center m-5'>
            <img src={FCBLogo} alt="FC Barcelona Crest" className='h-10 w-auto m-1 self-center'/>
            <h1 className='text-3xl font-black text-red-100 m-1'>
                <span className='text-yellow-500'>FC Barcelona </span>
                Community Hub
            </h1>
        </header>
    ) 
}
export default Header;