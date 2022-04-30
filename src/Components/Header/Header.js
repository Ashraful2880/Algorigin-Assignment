import React from 'react';
import bell from '../../Images/Bell.png';
import user from '../../Images/User.png';
import arrow from '../../Images/Arrow Down.png';
import search from '../../Images/Search.png';

const Header = () => {
    return (
        <nav className="flex items-center justify-between pl-[26px] pr-[18px] py-2">
            <div className="flex items-center">
                <p className="text-[#3E3F48] text-[14px] font-[500]">Starbucks</p>
                <img className="ml-[7px] mr-[7px]" src={arrow} alt="Down Arrow" />
                <div className="relative lg:ml-[128px] md:ml-[10px] hidden sm:block">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                        <img className=' w-[16.67px] h-[16.67px]' src={search} alt="Search Icon" />
                    </div>
                    <input type="text" className="w-[392px] h-10 pl-10 bg-[#F2F2F3] rounded-[8px]" placeholder="Search..." />
                </div>
            </div>
            <div className="flex items-center justify-end relative w-full">
                <img src={bell} alt="Bell Icon" />
                <img className="flex items-center rounded-full mr-[16px] ml-[19px]" src={user} alt="User" />
                <p className="text-[14px] font-[500]">John Doe</p>
                <img className="ml-[11px]" src={arrow} alt="Down Arrow" />
            </div>
        </nav>
    );
};

export default Header;