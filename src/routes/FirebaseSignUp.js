import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const FirebaseSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {signUp} = UserAuth();
  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/signIn");
    }
    catch(e) {
      console.log(e.message);
    }
  }

  return (
    <div className='max-w-[400px] mx-auto min-h-[600px] my-12'>
        <div className='flex-col'>
          <div>
            <h1 className='font-bold text-3xl py-5'>Sign Up</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='my-5'>
              <label className='text-sm ml-1'>Email</label>
              <div className='py-3'>
                <input
                  type='email'
                  placeholder='Enter your Email'
                  className='w-full rounded-2xl bg-gray-200 border p-3'
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
            </div>

            <div>
              <label className='text-sm ml-1'>Password</label>
                <div className='py-3'>
                  <input 
                    type='password' 
                    placeholder='Enter your Password' 
                    className='w-full rounded-2xl bg-gray-200 border p-3'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className='w-full bg-blue-400 rounded-2xl p-2 my-2 text-btnText'>Sign Up</button>
            </div>
          </form>

          <div className='flex my-2'>
            <p>Already have an account?</p>
            <Link to={"/signIn"} className='px-2'>
              <button className='text-blue-950'>Sign In</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default FirebaseSignUp