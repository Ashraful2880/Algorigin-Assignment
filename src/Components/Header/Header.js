import React from 'react';
import bell from '../../Images/Bell.png';
import user from '../../Images/User.png';
import arrow from '../../Images/Arrow Down.png';
import search from '../../Images/Search.png';

const Header = () => {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-4">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div className="flex-grow items-center">
                    <a className="flex items-center mt-2 lg:mt-0 mr-1" href="#test">
                        <p>Starbucks</p>
                        <img src={arrow} alt="Down Arrow" />
                        <div className="relative mr-3">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                                <img src={search} alt="Search Icon" />
                            </div>
                            <input type="text" className="block p-2 pl-10 w-full rounded-lg border sm:text-sm" placeholder="Search..." />
                        </div>
                    </a>
                </div>
                <div className="flex items-center relative">
                    <div className="relative">
                        <img src={bell} alt="Bell Icon" />
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img className="flex items-center rounded-full" src={user} alt="User" />
                        <p>John Doe</p>
                        <img src={arrow} alt="Down Arrow" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;