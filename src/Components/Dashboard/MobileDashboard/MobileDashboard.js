import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../../Images/home.png';
import inventory from '../../../Images/inventory.png';
import documents from '../../../Images/documents.png';
import settings from '../../../Images/settings.png';

const MobileDashboard = () => {
    return (
        <div className='flex justify-between px-8 py-5 xl:hidden lg:hidden md:hidden'>
            <Link
                to="/dashboard">
                <img src={home} alt="Home Icon" />
            </Link>
            <Link
                to="inventory">
                <img src={inventory} alt="Home Icon" />
            </Link>
            <Link
                to="documents">
                <img src={documents} alt="Home Icon" />
            </Link>
            <Link
                to="settings">
                <img src={settings} alt="Home Icon" />
            </Link>
        </div>
    );
};

export default MobileDashboard;