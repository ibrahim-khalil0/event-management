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
            <div className='text-white'>
                <Header></Header>
            </div>
            <Banner></Banner>
            <div className='grid grid-cols-3 gap-6 w-[90%] mx-auto py-40'>
                {
                    services.map( service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <Team></Team>
        </div>
    );
};

export default Home;