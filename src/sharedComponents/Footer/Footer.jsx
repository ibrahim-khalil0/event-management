import { FaPhone, FaEnvelope, FaMapLocation, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-black pt-16">
            <div className="flex text-white gap-5 justify-center">
                <FaFacebookF className="border-[#EDB602] border-[1px] w-[40px] h-[40px] p-2 rounded-full"></FaFacebookF>
                <FaTwitter className="border-[#EDB602] border-[1px] w-[40px] h-[40px] p-2 rounded-full"></FaTwitter>
                <FaLinkedinIn className="border-[#EDB602] border-[1px] w-[40px] h-[40px] p-2 rounded-full"></FaLinkedinIn>
                <FaInstagram className="border-[#EDB602] border-[1px] w-[40px] h-[40px] p-2 rounded-full"></FaInstagram>
            </div>
            <div className="text-white text-center space-x-10 mt-8">
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contact Us</Link>
                <Link to={'/service'}>All services</Link>
            </div>
            <hr className="border-[1px] border-slate-100 mt-10"/>
            <p className="text-white text-center">Copyright @2023; Designed By IBRAHIM KHALIL</p>
        </div>
    );
};

export default Footer;