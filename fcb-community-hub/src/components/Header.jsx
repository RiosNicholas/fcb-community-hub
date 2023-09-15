import React from 'react';

const Header = () => {
    return (
        <header className='flex flex-row justify-center center m-5'>
            <img src='../assets/fcb-logo.png'></img>
            <h1 className='text-3xl font-black text-red-100'>
                <span className='text-yellow-500'>FC Barcelona </span>
                Community Hub
            </h1>
        </header>
    ) 
}
export default Header;