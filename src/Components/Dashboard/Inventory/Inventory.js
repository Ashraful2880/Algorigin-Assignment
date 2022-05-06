import React, { useEffect, useState } from 'react';
import arrow from '../../../Images/Arrow.png';
import SearchBar from '../../SearchBar/SearchBar';
import Pagination from './../../Pagination/Pagination';

const Inventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('./Inventory.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="bg-[#F2F2F3] h-screen">
            <h1 className="text-left text-[#3E3F48] text-[20px] font-[700] h-[49px] border-b border-b-[#E5E5E6] pl-[24px] pt-[4px]">Inventory</h1>
            <div className="bg-white m-[24px] rounded-[4px] shadow-md">
                <div className="w-1/4 ml-[16px] py-[24px]">
                    <SearchBar />
                </div>
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                            <table className="min-w-full">
                                <thead className='bg-[#FDF4ED]'>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left">
                                            <input type="checkbox" />
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[13px] text-[#3E3F48]">
                                            <span>Date Updated</span>
                                            <img className="inline ml-[6px]" src={arrow} alt="arrow" />
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[13px] text-[#3E3F48]">
                                            <span>Title</span>
                                            <img className="inline ml-[4px]" src={arrow} alt="arrow" />
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[13px] text-[#3E3F48]">
                                            Details
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[13px] text-[#3E3F48]">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[13px] text-[#3E3F48]">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[13px] text-[#3E3F48]">
                                            Unit Price
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[13px] text-[#3E3F48]">
                                            <span>Amount</span>
                                            <img className="inline ml-[4px]" src={arrow} alt="arrow" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {items.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <input type="checkbox" />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className=" text-[16px] text-[#3E3F48]">{item?.Date_Updated}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-[16px] text-[#3E3F48]">{item?.Title}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-[16px] text-[#3E3F48]">{item?.Details}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-[16px] text-[#3E3F48]">
                                                        {item?.Status}

                                                        {item.Status === "Alright" && <span className=' inline-block ml-[8px] bg-[#44C776] h-2 w-2 rounded-full'></span>}
                                                        {item.Status === "In Progress" && <span className=' inline-block ml-[8px] bg-[#F58A28] h-2 w-2 rounded-full'></span>}
                                                        {item.Status === "Out Of Stock" && <span className=' inline-block ml-[8px] bg-[#F52828] h-2 w-2 rounded-full'></span>}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-[16px] text-[#3E3F48]"> <span className="font-bold">{item?.Remaining}</span> / {item?.Quantity}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-[16px] text-[#3E3F48]">${item?.Unit_Price}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-[16px] text-[#3E3F48]">${item?.Unit_Price * item?.Remaining}.00</div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;