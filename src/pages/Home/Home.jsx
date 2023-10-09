import React from 'react';
import Banner from './components/Banner/Banner';
import Header from '../../sharedComponents/Header/Header';
import { useLoaderData } from 'react-router-dom';
import Service from './components/Service/Service';
import Team from './components/Team/Team';

const Home = () => {
    const services = useLoaderData()
    
    return (
        <div className='text-3xl'>
            <div className='lg:text-white text-black mb-8 sm:mb-0'>
                <Header></Header>
            </div>
            <Banner></Banner>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-[90%] mx-auto py-40 px-8 lg:px-0'>
                {
                    services.map( service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <Team></Team>

            <div className='mb-16 w-[90%] mx-auto pt-16'>
                <h1 className='text-5xl'>Why Us</h1>
                <p className='text-2xl'>for all your catering needs</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-14'>
                    <div>
                        <h3 className='text-3xl'>Exclusive Design</h3>
                        <p className='text-lg'>Apparently we had reached a great height in the atmosphere</p>
                    </div>
                    <div>
                        <h3 className='text-3xl'>Client Focused</h3>
                        <p className='text-lg'>Apparently we had reached a great height in the atmosphere</p>
                    </div>
                    <div>
                        <h3 className='text-3xl'>Fresh Ingredients</h3>
                        <p className='text-lg'>Apparently we had reached a great height in the atmosphere</p>
                    </div>
                    <div>
                        <h3 className='text-3xl'>Diverse Client Base</h3>
                        <p className='text-lg'>Apparently we had reached a great height in the atmosphere</p>
                    </div>
                    <div>
                        <h3 className='text-3xl'>Responsible Sourcing</h3>
                        <p className='text-lg'>Apparently we had reached a great height in the atmosphere</p>
                    </div>
                    <div>
                        <h3 className='text-3xl'>Flexible Services</h3>
                        <p className='text-lg'>Apparently we had reached a great height in the atmosphere</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;