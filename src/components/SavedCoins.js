import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa';
import {doc, onSnapshot, updateDoc} from 'firebase/firestore';
import { db } from '../firebase'
import { UserAuth } from '../context/AuthContext';

const SavedCoins = () => {
    const [coinsSaved, setCoinsSaved] = useState([]);
    const {user} = UserAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'users' , `${user.email}`) , (doc) => {
            setCoinsSaved(doc.data()?.watchList)
        })
    }, [user.email])

    const coinPath = doc(db, 'users' , `${user?.email}`)
    async function deleteCoin(id) {
        try {
            const result = coinsSaved.filter((coin) => coin.id !== id)
            await updateDoc(coinPath , {
                watchList: result
            })          
        } catch(e) {
            console.log(e.message);
        }
    }

    return (
        <div>
            {coinsSaved.length === 0 ? (
                <div>
                <h1 className='font-bold text-2xl py-3'>Watch List</h1>
                <p className=''>You don't have any coins saved. Save a coin to add it to your watch list.</p>
                <Link to={"/"}>
                    Click here to explore coins.
                </Link>
            </div>
            ) : (
                <table className='w-full text-center'>
                    <thead>
                        <tr>
                            <th>Rank #</th>
                            <th>Coin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinsSaved.map((savedCoin) => (
                            <tr key={savedCoin.id}>
                                <td className='text-lg'>{savedCoin?.rank}</td>
                                <td>
                                    <Link to={`/coin/${coinsSaved.id}`}>
                                        <div className='flex justify-center'>
                                            <img className='w-6 py-2 rounded-2xl' src={savedCoin?.image} alt='/img' />
                                        </div>
                                        <p className=''>{savedCoin?.name}</p>
                                        {/* <p>{savedCoin?.symbol.toUpperCase()}</p> */}
                                    </Link>
                                </td>
                                    <td>
                                        <div className='flex justify-center'>
                                            <FaTimes onClick={() => deleteCoin(savedCoin.id)} className='cursor-pointer'/>
                                        </div>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default SavedCoins