import React from 'react';
import search from '../../Images/Search.png';

const SearchBar = () => {
    return (
        <div className="relative hidden sm:block">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                <img className='w-[16.67px] h-[16.67px]' src={search} alt="Search Icon" />
            </div>
            <input type="text" className="w-[392px] h-10 pl-10 bg-[#F2F2F3] rounded-[8px]" placeholder="Search..." />
        </div>
    );
};

export default SearchBar;