import bannerImg from '../../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bannerImg})`}} className='h-screen lg:mt-[-90px] grid place-items-center bg-center md:bg-fixed bg-cover'>
            <div className='relative z-20 text-white px-10 lg:px-60'>
                <h1 className='text-4xl lg:text-7xl font-semibold text-center'>Your Perfect Wedding, <br></br> Our Impeccable Management</h1>
                <hr className='w-[100px] mx-auto border-2 border-[#EDB602] mt-10'/>
                <p className='text-center mt-8 text-xl font-normal'>Discover the Pinnacle of Wedding Excellence. Our meticulous planning, attention to detail, and passion for perfection ensure your special day unfolds seamlessly. Entrust us with your dreams, and let's create a wedding that's nothing short of extraordinary. Where every moment is crafted with love, and every detail is a testament to your unique love story.</p>
            </div>
            <div className='bg-[#0000001f] absolute w-full h-full z-10'></div>
        </div>
    );
};

export default Banner;