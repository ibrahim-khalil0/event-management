
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../sharedComponents/Header/Header';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const {createNewUser, signInWithGoogle} = useContext(AuthContext)
    const [error, setError] = useState(null)


    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')

        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{6,}$/.test(password)){
            setError('Password will be minimum 6 character, one Uppercase letter, one special character and one number')
            return
        }
        

        createNewUser(email, password)
        .then( (result) => {
            toast('Register Successfully Completed')

            updateProfile(result.user, {
                displayName: name,
                photoURL: photo
            })
            
            
            const setToast = () => {
                navigate(location?.state ? location.state : '/')
            }
            setTimeout(function(){
                setToast()
            }, 2000)
        })
        .catch(error => {
            console.error(error)
        })
    }
    const handleGoogleRegister = () => {
        signInWithGoogle()
        .then( (result) => {
            navigate(location?.state ? location.state : '/')
        })
    }

    return (
        <div>
            <div className='shadow-slate-200 shadow-lg'>
                <Header></Header>
            </div>
            <div className='w-2/4 border-2 border-gray-300 mx-auto mt-16 mb-10 text-center py-10 px-16 rounded-md bg-slate-50'>
                <h1 className='text-center text-6xl mb-8 text-[#EDB602] '>Register</h1>
                <div>
                    <form onSubmit={handleRegister}>
                        <input type="text" name="name" placeholder='Your Name' required className='border-[1px] border-[#EDB602] w-full rounded-md text-xl px-4 py-3 outline-0'/>
                        <br /><br />
                        <input type="text" name="photo" placeholder='Photo Url' required className='border-[1px] border-[#EDB602] w-full rounded-md text-xl px-4 py-3 outline-0'/>
                        <br /><br />
                        <input type="email" name="email" required placeholder='Enter Your Email' className='border-[1px] border-[#EDB602] w-full rounded-md text-xl px-4 py-3 outline-0'/>
                        <br /><br />
                        <input type="password" name="password" required placeholder='Enter Your Password' className='border-[1px] border-[#EDB602] w-full rounded-md text-xl px-4 py-3 outline-0' />
                        <br /><br />
                        
                        <input type="submit" name="" id="" className='bg-[#EDB602] w-full rounded-md text-2xl px-4 py-2 text-white cursor-pointer' />
                    </form>
                    {
                        error && <p className='text-red-500'>{error}</p>
                    }
                    <h1 className='text-xl py-5'>Already have an account? <Link to={'/login'}><span className='text-[#EDB602]'>Login</span></Link></h1>
                    <h1 className='text-xl'>Or</h1>
                    <button onClick={handleGoogleRegister} className='border-[1px] border-[#EDB602] rounded-md text-xl w-full py-2 my-5 '>Login With Google</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;