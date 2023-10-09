import React from 'react';
import Header from '../../sharedComponents/Header/Header';
import Footer from '../../sharedComponents/Footer/Footer';

const Error = () => {
    return (
        <div>
            <div className='shadow-lg shadow-slate-200'>
                <Header></Header>
            </div>
            <div>
                <h1 className='text-4xl text-center mt-10'>404 Page Not Found</h1>
            </div>
            <div className='absolute bottom-0 w-full'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Error;