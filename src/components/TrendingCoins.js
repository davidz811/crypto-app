import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TrendingCoinItem from './TrendingCoinItem';

const TrendingCoins = () => {
    const [trendingCoins, setTrendingCoin] = useState([]);

    const url = 'https://api.coingecko.com/api/v3/search/trending';

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                const trendingCoinsData = res.data.coins;
                setTrendingCoin(trendingCoinsData);
            })
    } , [url])

  return (
    <div className='rounded-div rounded-lg py-6 w-full'>
        <h1 className='font-bold text-xl'>Trending Coins</h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
          {trendingCoins && trendingCoins.map((trendingCoin ,index) => (
              <TrendingCoinItem key={index} trendingCoin = {trendingCoin} />// console.log(trendingCoin.item.name)
          ))}
          
        </div>
    </div>
  )
}

export default TrendingCoins