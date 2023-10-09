import React from 'react';
import Header from '../../sharedComponents/Header/Header';
import service_bg from '../../assets/bg_services.jpg'

const OtherServices = () => {
    return (
        <div>
            <div className='shadow-lg shadow-slate-200'>
                <Header></Header>
            </div>
            <div className='text-center mt-24'>
                <h4 className='text-xl text-gray-400'>SERVICES</h4>
                <h1 className='text-4xl font-semibold mt-3 mb-8'>Planning a Fabulous <br></br> Event?</h1>
                <div className='grid place-items-center mb-16'>
                    <hr className='w-[80px] border-2 border-[#EDB602]'/>
                </div>
            </div>

            <div className='w-[90%] grid grid-cols-3 mx-auto gap-8 mb-10'>
                <div className='space-y-10 pl-10'>
                    <div className='grid place-items-end text-right'>
                        <h3 className='text-xl font-semibold text-gray-600'>WEDDINGS</h3>
                        <hr className='w-[140px] border-2 border-gray-600 mt-4 mb-6'/>
                        <p className='text-gray-500'>On one of the most important days of your life, we provide a full catering program</p>
                    </div>
                    <div className='grid place-items-end text-right'>
                        <h3 className='text-xl font-semibold text-gray-600'>CORPORATE</h3>
                        <hr className='w-[140px] border-2 border-gray-600 mt-4 mb-6'/>
                        <p className='text-gray-500'>You can order a corporate full time or part-time service for personnel/staff lunches</p>
                    </div>
                    <div className='grid place-items-end text-right'>
                        <h3 className='text-xl font-semibold text-gray-600'>SOCIALS</h3>
                        <hr className='w-[140px] border-2 border-gray-600 mt-4 mb-6'/>
                        <p className='text-gray-500'>Social events are highly important to our clients, and we guarantee perfect service</p>
                    </div>
                </div>
                <div>
                    <img src={service_bg} alt="" />
                </div>
                <div className='space-y-10 pr-10'>
                    <div>
                        <h3 className='text-xl font-semibold text-gray-600'>PICNICS</h3>
                        <hr className='w-[140px] border-2 border-gray-600 mt-4 mb-6'/>
                        <p className='text-gray-500'>We will be more than happy to work for you during a family or a business picnic</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold text-gray-600'>FESTIVALS</h3>
                        <hr className='w-[140px] border-2 border-gray-600 mt-4 mb-6'/>
                        <p className='text-gray-500'>We are completely capable of serving for big, open, small, adults or kids festivals</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold text-gray-600'>PRIVATE PARTIES</h3>
                        <hr className='w-[140px] border-2 border-gray-600 mt-4 mb-6'/>
                        <p className='text-gray-500'>A private dining room, or a penthouse catering is one of our many great services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherServices;