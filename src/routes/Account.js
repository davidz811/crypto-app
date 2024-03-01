import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SavedCoins from '../components/SavedCoins'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  async function handleSignOut() {
    try {
      await logOut();
      navigate("/");
    } catch(e) {
      console.log(e.message);
    }
  }

  return (
    <div className='rounded-div py-6 my-8'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-bold text-2xl'>Account</h1>
          <p className='py-2'>Welcome, {user?.email}</p>
        </div>
        <Link to={"/"}>
          <button onClick={handleSignOut} className='shadow-2xl border rounded-xl p-3'>Sign Out</button>
        </Link>
      </div>

      <div className='py-10'>
        <SavedCoins />
      </div>
    </div>
  )
}

export default Account