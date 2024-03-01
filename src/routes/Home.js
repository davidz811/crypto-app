import React from 'react'
import Coins from '../components/Coins'
import TrendingCoins from '../components/TrendingCoins'

const Home = ({coins}) => {
  // console.log(coins)
  
  return (
    <div>
      <Coins coins={coins} />
      <TrendingCoins />
    </div>
  )
}

export default Home