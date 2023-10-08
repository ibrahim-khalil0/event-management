import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, title, description, price, image} = service
    return (
        <div className='space-y-6 bg-[#edb60229] rounded-lg'>
            <img src={image} alt="" className='w-full h-[250px] rounded-t-md'/>
            <div className='space-y-3 px-6 pb-8 flex flex-col h-[330px]'>
                <div>
                    <h1>{title}</h1>
                </div>
                <div className='grow'>
                    <p className='text-lg tracking-wider'>{description.slice(0, 200)}...</p>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-2xl font-semibold'>Price: {price}</span>
                    <Link to={`/details/${id}`}><button className='text-2xl bg-[#EDB602] rounded-md px-5 py-2 text-white'>Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;