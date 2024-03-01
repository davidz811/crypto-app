import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import DOMPurify from 'dompurify';
import { MdOutlineHorizontalRule } from "react-icons/md";


//display data for every single coin we have
const CoinPage = () => {
  const [coinData, setCoinData] = useState({});
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

  useEffect(() => {
    async function fetchCoinData() {
      await axios.get(url)
        .then((res) => {
        const data = res.data;
        setCoinData(data);
        console.log(data);
      })
    }
    fetchCoinData();
  }, [url])
  // console.log(coinData)

  return (
    <div className='rounded-div my-10'>
        <div className='py-8 flex items-center'>
          <img src={coinData.image?.large} className='w-20 h-20' alt='coinImg'/>
          <div className='px-6'>
            <p className='font-bold text-2xl'>{coinData.name} Price</p>
            <p className='font-serif'>{coinData.symbol?.toUpperCase()} / USD</p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <div className='flex justify-between'>
              {coinData.market_data?.current_price ? (
                <p className='font-bold text-xl'>${coinData.market_data.current_price.usd.toLocaleString()}</p>
              ) : null}
              <p>7 Day</p>
            </div>
            <div>
              <Sparklines data={coinData.market_data?.sparkline_7d.price}>
                <SparklinesLine color='teal' />
              </Sparklines>
            </div>
            <div className='flex justify-between py-2'>
              <div>
                <p className='text-sm text-gray-500'>Market Cap</p>
                <p className='font-bold'>${coinData.market_data?.market_cap.usd.toLocaleString()}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Volume (24h)</p>
                <p className='font-bold'>${coinData.market_data?.total_volume.usd.toLocaleString()}</p>
              </div> 
            </div> 

            <div className='flex justify-between py-5'>
              <div>
                <p className='text-sm text-gray-500'>24h High</p>
                <p className='font-bold'>${coinData.market_data?.high_24h.usd.toLocaleString()}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>24h Low</p>
                <p className='font-bold'>${coinData.market_data?.low_24h.usd.toLocaleString()}</p>
              </div> 
            </div> 
          </div>

          <div>
            <div>
              <h1 className='font-bold text-xl'>Market Stats</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 my-5'>
              <div>
                <p className='text-sm text-gray-500'>Market Rank</p>
                <p className = 'font-bold'>{coinData.market_cap_rank}</p> 
              </div>
              <div>
                <p className='text-sm text-gray-500'>Hashing Algorithm</p>
                {coinData.hashing_algorithm ? <p className='font-bold'>{coinData.hashing_algorithm}</p> : (<div className='flex justify-center w-28'> <MdOutlineHorizontalRule className='text-2xl'/> </div>)}
              </div>
              <div>
                <p className='text-sm text-gray-500'>Watchlist Portofolio Users</p>
                <p className='font-bold'>{coinData.watchlist_portfolio_users?.toLocaleString()}</p>
              </div>
              <div className='py-6'>
                <p className='text-sm text-gray-500'>Price change (24h)</p>
                <p className = 'font-bold'>{coinData.market_data?.price_change_percentage_24h.toFixed(2)}%</p>
              </div>
              <div className='py-6'>
                <p className='text-sm text-gray-500'>Price Change(7d)</p>
                <p className = 'font-bold'>{coinData.market_data?.price_change_percentage_7d.toFixed(2)}%</p>
              </div>
              <div className='py-6'>
                <p className='text-sm text-gray-500'>Price Change(14d)</p>
                <p className = 'font-bold'>{coinData.market_data?.price_change_percentage_14d.toFixed(2)}%</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Price Change(30d)</p>
                <p className = 'font-bold'>{coinData.market_data?.price_change_percentage_30d.toFixed(2)}%</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Price Change(60d)</p>
                <p className = 'font-bold'>{coinData.market_data?.price_change_percentage_60d.toFixed(2)}%</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Price Change(1y)</p>
                <p className = 'font-bold'>{coinData.market_data?.price_change_percentage_1y.toFixed(2)}%</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className='font-bold text-lg'>About {coinData.name}</p>
          <p className='font-serif py-2' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coinData.description?.en)}}></p>
        </div>
    </div>
  )
}

export default CoinPage