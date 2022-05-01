import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';
import Inventory from '../Inventory/Inventory';
import Documents from '../Documents/Documents';
import Settings from '../Settings/Settings';
import home from '../../../Images/home.png';
import inventory from '../../../Images/inventory.png';
import documents from '../../../Images/documents.png';
import settings from '../../../Images/settings.png';


const Dashboard = () => {
    const toogleMenu = () => {
        const toggleButton = document.getElementById("toogleDashboard");
        if (toggleButton.style.display === "none") {
            toggleButton.style.display = "block";
        } else {
            toggleButton.style.display = "none";
        }
    }
    return (
        <>
            <button
                onClick={toogleMenu}
                type="button"
                className="fixed left-3 p-2 rounded-md text-gray-400 hover:text-[#6B6C72] hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mobileBtn" aria-controls="mobile-menu" aria-expanded="false">
                <i className="fas fa-bars text-2xl px-2"></i>
            </button>
            <main className="flex w-full h-full">
                <aside className="w-[235px] h-screen bg-[#F2F2F3] border-r border-r-[#E5E5E6]" id="toogleDashboard">
                    {/* <div className="flex flex-col justify-between h-screen p-4 bg-[#F2F2F3]">
                        <div> */}
                    <Link
                        to="/dashboard"
                        className="text-[#6B6C72] p-2 rounded mt-2 cursor-pointer hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md flex mx-[23px]">
                        <img className="ml-[12px]" src={home} alt="Home Icon" />
                        <span className="text-[14px] ml-[13px]">Dashboard</span>
                    </Link>
                    <Link
                        to="inventory"
                        className="text-[#6B6C72] p-2 rounded mt-2 cursor-pointer hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md flex mx-[23px]">
                        <img className="ml-[15px]" src={inventory} alt="Home Icon" />
                        <span className="text-[14px] ml-[13px]">Inventory</span>
                    </Link>
                    <Link
                        to="documents"
                        className="text-[#6B6C72] p-2 rounded mt-2 cursor-pointer hover:bg-white  hover:shadow-md focus:bg-white focus:shadow-md flex mx-[23px]">
                        <img className="ml-[15px]" src={documents} alt="Home Icon" />
                        <span className="text-[14px] ml-[13px]">Documents</span>
                    </Link>
                    <Link
                        to="settings"
                        className="text-[#6B6C72] p-2 rounded mt-2 cursor-pointer hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md flex mx-[23px]">
                        <img className="ml-[15px]" src={settings} alt="Home Icon" />
                        <span className="text-[14px] ml-[13px]">Settings</span>
                    </Link>
                    {/*  </div>
                    </div> */}
                </aside>
                <section className=" w-5/6">
                    <Routes>
                        <Route path="/dashboard" element={<DashboardHome />} />
                        <Route path="inventory" element={<Inventory />} />
                        <Route path="documents" element={<Documents />} />
                        <Route path="settings" element={<Settings />} />
                    </Routes>
                </section>
            </main>
        </>
    );
};

export default Dashboard;