import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import logo from '../../assets/logo1.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user)
    const handleSignOut = () => {
        logOut()
    }
    return (
        <div className='flex flex-col space-y-6 lg:flex-row justify-between items-center py-2 lg:w-[90%] sm:px-5 lg:px-0 px-0 mx-auto z-20 relative'>
            <div>
                <img className='w-[150px]' src={logo} alt="" />
            </div>
            <div className='space-x-8 text-2xl nav-bar font-semibold'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/contact'}>Contact Us</NavLink>
                <NavLink to={'/service'}>Other Services</NavLink>
            </div>
            <div>
                {
                    user ?
                        <div className='items-center mr-2 flex'>
                            <div>
                                <img src={user?.photoURL} alt="" className='w-[40px] rounded-full'/>
                            </div>
                            <div>
                                <p className='text-base'><span>{user?.displayName}</span> <span onClick={handleSignOut} className='bg-[#EDB602] py-1 px-2 rounded-md cursor-pointer ml-2 text-white'>Log Out</span></p>
                                <p className='text-base'>{user?.email}</p>
                            </div>
                        </div>
                    :
                    <Link to={'/login'} className='bg-[#EDB602] text-white rounded-md px-5 py-2 text-2xl'>Login</Link>
                    
                }
            </div>
        </div>
    );
};

export default Header;