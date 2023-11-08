import React from 'react';
import proPic from '../images/profile_pic.jpg';
import './Header.css'


const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h1>Cafe Intellectual</h1>
            </div>
            <img src={proPic} alt="" />

        </nav>

    );
};

export default Header;