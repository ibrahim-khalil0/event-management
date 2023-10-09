import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../sharedComponents/Header/Header';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa6";

const Login = () => {

    const {signIn, signInWithGoogle} = useContext(AuthContext)

    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signIn(email, password)
        .then( (result) => {
            toast('Login Successfully Completed')
            
            const setToast = () => {
                navigate(location?.state ? location.state : '/')
            }
            setTimeout(function(){
                setToast()
            }, 2000)
        })
        .catch( error => {
            console.log(error.message)
        })

        
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then( (result) => {
            toast('Login Successfully Completed')
            
            const setToast = () => {
                navigate(location?.state ? location.state : '/')
            }
            setTimeout(function(){
                setToast()
            }, 2000)
        })
    }
    return (
        <div>
            <div className='shadow-lg shadow-slate-200'>
                <Header></Header>
            </div>
            <div className='w-2/4 border-2 border-gray-300 mx-auto mt-16 mb-10 text-center py-10 px-16 rounded-md bg-slate-50'>
                <h1 className='text-center text-6xl mb-8 text-[#EDB602] '>Login</h1>
                <div>
                    <form onSubmit={handleLogin}>
                        <input type="email" name="email" required placeholder='Enter Your Email' className='border-[1px] border-[#EDB602] w-full rounded-md text-xl px-4 py-3 outline-0'/>
                        <br /><br />
                        <input type="password" name="password" required placeholder='Enter Your Password' className='border-[1px] border-[#EDB602] w-full rounded-md text-xl px-4 py-3 outline-0' />
                        
                        <div>
                            <button className='text-xl py-5 text-[#EDB602] '>Forgot Password?</button>
                        </div>
                        
                        <input type="submit" name="" id="" className='bg-[#EDB602] w-full rounded-md text-2xl px-4 py-2 text-white cursor-pointer' />
                    </form>
                    <h1 className='text-xl py-5'>Don't have an account? <Link to={'/register'}><span className='text-[#EDB602]'>Sign Up</span></Link></h1>
                    <h1 className='text-xl'>Or</h1>
                    <button onClick={handleGoogleLogin} className='border-[1px] relative border-[#EDB602] rounded-md text-xl w-full py-2 my-5 '><FaGoogle className='absolute left-2 top-3'></FaGoogle>Login With Google</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;