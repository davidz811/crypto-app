import CoinItem from './CoinItem';

const Coins = ({coins}) => {

  return (
    <div className='rounded-div my-6 rounded-lg'>
      <div className='flex flex-col md:flex-row justify-between pb-8 items-center'>
        <h1 className='font-bold text-xl my-2'>Search Crypto</h1>
        <form>
          <input type='text' className='w-full shadow-xl rounded-div p-2' placeholder='Search a coin'/>
        </form>
      </div>

      <table className='w-full text-center'>
        <thead>
          <tr className='border-b-2'>
            <th></th>
            <th className='px-3'>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24 Volume</th>
            <th className='hidden sm:table-cell'>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins && coins.map((coin) => (
            <CoinItem key={coin.id} coin={coin}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Coins