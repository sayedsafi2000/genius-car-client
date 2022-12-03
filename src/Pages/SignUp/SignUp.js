import React ,{ useContext }from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaBeer, FaFacebookF, FaGoogle, FaLinkedin } from 'react-icons/fa';
import img from "../../assets/images/login/login.svg";
const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result =>{
            const user =  result.user;
            console.log(user);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder="Full Name"
                                name='name'
                                className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="email"
                                name='email'
                                className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                name='password'
                                className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='w-full mx-auto text-center'>
                        <p className='text-xl'>or signup with</p>
                        <div className='flex justify-center px-10 my-8'>
                            <FaFacebookF className=' bg-white  mr-5 text-2xl text-blue-700'/>
                            <FaLinkedin className=' bg-white  text-blue-500 mr-5 text-2xl'/>
                            <FaGoogle className=' bg-white  text-orange-700 mr-5 text-2xl'/>
                        </div>
                    </div>
                    <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold ' to="/login">Login</Link> ?</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;