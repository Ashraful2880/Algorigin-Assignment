import React from 'react';
import arrow from '../../Images/Pagination Arrow.png';
import left from '../../Images/Left Arrow.png';
import right from '../../Images/Right Arrow.png';

const Pagination = () => {
    return (
        <div className='pb-[25px] pt-[28px] lg:px-[16px] md:px-16 px-4'>
            <div className=' flex lg:justify-between md:justify-between sm:justify-start'>
                <div className='py-[6px] px-[8px] border border-[#B2B2B6] rounded-[4px] '>
                    <span className='text-[13px] text-[#88898E]'>10 Items per page</span>
                    <img className='inline lg:ml-[50px] md:ml-[50px] ml-[30px]' src={arrow} alt="Arrow Down" />
                </div>
                <div className='flex'>
                    <div className='py-[6px] px-[8px] border border-[#B2B2B6] rounded-[4px] hidden sm:block'>
                        <span className='text-[13px] text-[#88898E]'> Page 1 of 5 </span>
                        <img className='inline ml-[54px]' src={arrow} alt="Arrow Down" />
                    </div>
                    <div className='flex'>
                        <div className='mx-[16px] py-[6px] px-[18px] border border-[#B2B2B6] rounded-[4px] flex justify-center items-center'>
                            <img className=' w-[8px] h-[16px]' src={left} alt="Left Arrow" />
                        </div>
                        <div className='py-[6px] px-[18px] border border-[#B2B2B6] rounded-[4px] flex justify-center items-center'>
                            <img className=' w-[8px] h-[16px]' src={right} alt="Right Arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;