
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../../sharedComponents/Header/Header';

const Details = () => {
    const {id} = useParams()
    const services = useLoaderData()
    console.log(services)
    const detail = services.find(service => service.id == id)
    const {title, image, description, price} = detail
    return (
        <div>
            <div className='text-black'>
                <Header></Header>
            </div>
            <div className='w-[90%] mx-auto pt-10'>
                <div className='relative'>
                    <img src={image} alt="" className='w-full h-[500px]' />
                    <button className='bg-[#0000005c] text-white px-5 py-2 text-2xl absolute bottom-0 rounded-tr-md'>Book Now: {price}</button>
                </div>
                <div className='flex justify-between my-8 items-center'>
                    <h1 className='text-5xl'>{title}</h1>
                </div>
                <p className='text-xl leading-10 mb-10'>{description}</p>
            </div>
        </div>
    );
};

export default Details;