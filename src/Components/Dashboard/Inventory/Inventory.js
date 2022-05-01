import React, { useEffect, useState } from 'react';
import search from '../../../Images/Search.png';
import arrow from '../../../Images/Arrow.png';

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
                {/* <div className="w-full my-5">
                    <div className="relative ">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                            <img className='w-[16.67px] h-[16.67px]' src={search} alt="Search Icon" />
                        </div>
                        <input type="text" className="w-[392px] h-10 pl-10 bg-[#F2F2F3] rounded-[8px]" placeholder="Search..." />
                    </div>
                </div> */}
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className=" align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                                                    <div className="text-[16px] text-[#3E3F48]">{item?.Status}</div>
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
                                                {/* <div className="flex items-center">
                                                    {
                                                        item.status === "Active" ?
                                                            <div className="text-[16px] text-[#3E3F48] bg-green-200 px-2 rounded-lg">{item.status}</div> :
                                                            <div className="text-[16px] text-[#3E3F48] bg-red-300 px-2 rounded-lg">{item.status}</div>
                                                    }
                                                </div> */}
                                                <div className="flex items-center">
                                                    <div className="text-[16px] text-[#3E3F48]">${item?.Unit_Price * item?.Remaining}.00</div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>








            </div>
        </div>
    );
};

export default Inventory;