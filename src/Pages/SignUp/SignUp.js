import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

const SignUp = () => {

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

    }

    return (
        <div className="hero w-full py-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left ">
                    <img src={img} alt="" className='w-3/4' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-600" type="submit" value="Sing Up" />
                        </div>
                    </form>
                    <p className="text-center pb-5">Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;