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
        </div>
    );
};

export default Home;