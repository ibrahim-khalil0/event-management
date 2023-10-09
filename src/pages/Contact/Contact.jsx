import { FaPhone, FaEnvelope, FaMapLocation, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import Header from '../../sharedComponents/Header/Header';
import contact1 from '../../assets/contact1.jpg'
import contact2 from '../../assets/contact2.jpg'

const Contact = () => {
    return (
        <div>
            <div className='text-black shadow-lg shadow-slate-200'>
                <Header></Header>
            </div>
            <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 pt-16 items-center space-y-8'>
                <div>
                    <img src={contact1} alt="" className='w-full' />
                </div>
                <div className='pl-14'>
                    <h1 className='text-4xl'>Contact Us</h1>
                    <hr className='border-[#EDB602] w-[80px] border-2 mt-4'/>
                    <div className="mt-8">
                        <ul className="space-y-4 text-xl">
                            <li className="flex gap-4 items-center">
                                <span><FaPhone></FaPhone></span>
                                <span>+8801837508011</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <span><FaEnvelope></FaEnvelope></span>
                                <span>mdibrahimkhalil0183@gmail.com</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <span><FaMapLocation></FaMapLocation></span>
                                <span>Mirpur, Road 11, Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                        <div>
                            <h2 className="text-3xl mt-10">Connect With Social Media</h2>
                            <div className="flex text-[#EDB602] border-[#EDB602] gap-5 mt-6">
                                <FaFacebookF className="border-[#EDB602] border-[1px] w-[40px] h-[40px] p-2 rounded-full"></FaFacebookF>
                                <FaTwitter className="border-[#EDB602] border-[1px] w-[40px] h-[40px] p-2 rounded-full"></FaTwitter>
                                <FaLinkedinIn className="border-[#EDB602] border-[1px] w-[40px] h-[40px] p-2 rounded-full"></FaLinkedinIn>
                                <FaInstagram className="border-[#EDB602] border-[1px] w-[40px] h-[40px] p-2 rounded-full"></FaInstagram>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[90%] mx-auto flex flex-col-reverse lg:grid grid-cols-2 mb-16 items-center'>
                <div className='pl-0 lg:pl-14'>
                    <h1 className='text-4xl'>Subscribe Our Newsletter</h1>
                    <hr className='border-[#EDB602] w-[80px] border-2 mt-4'/>
                    <div className="mt-10">
                        <form>
                            <input type="text" placeholder="Your Name" className="border-[#EDB602] rounded-md border-2 w-full lg:w-3/4 outline-0 py-2 px-3 text-xl"/>
                            <br /><br></br>
                            <input type="email" name="" id="" placeholder="Your Email" className="border-[#EDB602] rounded-md border-2 w-full lg:w-3/4 outline-0 py-2 px-3 text-xl"/>
                            <br /><br />
                            <textarea name="" id="" cols="30" rows="5" placeholder="Write Your Comments" className="border-[#EDB602] rounded-md border-2 w-full lg:w-3/4 outline-0 py-2 px-3 text-xl"></textarea>
                            <br />
                            <input type="submit" name="" id="" value="Submit" className="bg-[#EDB602] px-5 py-2 rounded-md text-xl text-white"/>
                        </form>
                    </div>
                </div>
                <div className="mb-8 mt-8">
                    <img src={contact2} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Contact;