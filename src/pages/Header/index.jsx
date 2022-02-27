import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import './style.css'

export const HeaderPage = ({setIsNavBar, isNavBar}) => {
    return (
        <header className='header-container'>
            {!isNavBar && <button className='button-toogle-header' onClick={() => setIsNavBar(true)}><GiHamburgerMenu className='icon'/></button>}
        </header>
    )
};
