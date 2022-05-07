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
    return (
        <>
            <main className="flex w-screen h-full">
                <aside className=" lg:w-[14%] md:w-[8%] h-screen bg-[#F2F2F3] border-r border-r-[#E5E5E6] lg:inline-block md:inline-block hidden">
                    <Link
                        to="/dashboard"
                        className="text-[#6B6C72] p-2 rounded mt-2 cursor-pointer hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md flex xl:mx-[30px] lg:mx-[10px] md:mx-[5px]">
                        <img className="ml-[12px]" src={home} alt="Home Icon" />
                        <span className="text-[14px] ml-[13px] lg:inline-block md:hidden">Dashboard</span>
                    </Link>
                    <Link
                        to="inventory"
                        className="text-[#6B6C72] p-2 rounded mt-2 cursor-pointer hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md flex xl:mx-[30px] lg:mx-[10px] md:mx-[5px]">
                        <img className="ml-[15px]" src={inventory} alt="Home Icon" />
                        <span className="text-[14px] ml-[13px] lg:inline-block md:hidden">Inventory</span>
                    </Link>
                    <Link
                        to="documents"
                        className="text-[#6B6C72] p-2 rounded mt-2 cursor-pointer hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md flex xl:mx-[30px] lg:mx-[10px] md:mx-[5px]">
                        <img className="ml-[15px]" src={documents} alt="Home Icon" />
                        <span className="text-[14px] ml-[13px] lg:inline-block md:hidden">Documents</span>
                    </Link>
                    <Link
                        to="settings"
                        className="text-[#6B6C72] p-2 rounded mt-2 cursor-pointer hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md flex xl:mx-[30px] lg:mx-[10px] md:mx-[5px]">
                        <img className="ml-[15px]" src={settings} alt="Home Icon" />
                        <span className="text-[14px] ml-[13px] lg:inline-block md:hidden">Settings</span>
                    </Link>
                </aside>
                <section className="lg:w-[86%] md:w-[92%] w-full">
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