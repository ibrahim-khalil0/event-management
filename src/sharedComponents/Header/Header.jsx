import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo1.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
    }
    return (
        <div className='flex justify-between items-center py-2 w-[90%] mx-auto z-20 relative'>
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
                    <button onClick={handleSignOut} className='bg-[#EDB602] text-white rounded-md px-5 py-2 text-2xl'>Sign Out</button>
                    :
                    <Link to={'/login'} className='bg-[#EDB602] text-white rounded-md px-5 py-2 text-2xl'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;