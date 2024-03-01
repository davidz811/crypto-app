import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const FirebaseSignIn = () => {
  const {signIn} = UserAuth();
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {  
      await signIn(email, password);
      navigate('/account');
    } catch {
      alert('Invalid Email or Password');
    }
  }

  return (
    <div className='max-w-[400px] mx-auto min-h-[600px] my-12'>
      <div>
        <h1 className='font-bold text-3xl py-5'>Sign In</h1>
      </div>
      <form onSubmit={handleSubmit}>
            <div className='my-5'>
              <label className='text-sm ml-1'>Email</label>
              <div className='py-3'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  placeholder='Enter your Email'
                  className='w-full rounded-2xl bg-gray-200 border p-3'/>
              </div>
            </div>

            <div>
              <label className='text-sm ml-1'>Password</label>
                <div className='py-3'>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Enter your Password'
                    className='w-full rounded-2xl bg-gray-200 border p-3'/>
                </div>           
                <button className='w-full bg-blue-400 rounded-2xl p-2 my-2 text-btnText'>Sign In</button>           
            </div>
          </form>

          <div className='flex my-2'>
            <p>Don't have an account?</p>
            <Link to={"/signUp"} className='px-2'>
              <button className='text-blue-950'>Sign Up</button>
            </Link>
          </div>
    </div>
  )
}

export default FirebaseSignIn