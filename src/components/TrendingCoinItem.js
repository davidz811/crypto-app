import React from 'react';
import btcImg from '../assets/Bitcoin.svg.webp';

const TrendingCoinItem = ({trendingCoin}) => {
  return (
    <div className='flex items-center w-full py-5 shadow-xl rounded-xl'>
        <div className='mx-3'>
            <img src={trendingCoin.item.thumb} className='rounded-lg w-20'/>
        </div>
        <div className='flex-col mr-5 w-full'>
            <p className='font-bold border-b-2'>{trendingCoin.item.name}</p>
            <p className='font-serif'>{trendingCoin.item.symbol}</p>
        </div>
        <div className='flex w-full justify-center items-center'>
            <img src={btcImg} className='w-4 h-4 mr-1'/>
            <p>{Number(trendingCoin.item.data.price_btc).toFixed(8)}</p>
        </div>
    </div>
  )
}

export default TrendingCoinItem