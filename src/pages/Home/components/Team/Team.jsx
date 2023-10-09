import team1 from '../../../../assets/team-image-5.jpg'
import team2 from '../../../../assets/team-image-6.jpg'
import team3 from '../../../../assets/team-image-7.jpg'

const Team = () => {
    return (
        <div className='w-[90%] mx-auto text-center space-y-5 mb-10'>
            <h1 className='text-5xl'>Meet Our Awesome Team</h1>
            <p className='text-lg md:px-40'>Meet the passionate professionals behind Wedding Management. With creativity and precision, our dedicated team turns your dreams into unforgettable weddings. Get to know the faces behind the magic, committed to making your special day truly extraordinary.</p>
            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-14'>
                <div>
                    <img src={team1} alt="" />
                    <h2 className='text-xl font-semibold mt-5'>Dennis Goodman</h2>
                    <h5 className='text-lg'>Creative Director</h5>
                </div>
                <div>
                    <img src={team2} alt="" />
                    <h2 className='text-xl font-semibold mt-5'>Dennis Goodman</h2>
                    <h5 className='text-lg'>Creative Director</h5>
                </div>
                <div>
                    <img src={team3} alt="" />
                    <h2 className='text-xl font-semibold mt-5'>Dennis Goodman</h2>
                    <h5 className='text-lg'>Creative Director</h5>
                </div>
            </div>
        </div>
    );
};

export default Team;