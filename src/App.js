import React from "react";
import './index.css';
import { Route, Routes } from "react-router-dom";
import FirebaseSignIn from "./routes/FirebaseSignIn";
import FirebaseSignUp from "./routes/FirebaseSignUp";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Account from "./routes/Account";
import { useEffect, useState } from 'react'
import axios from 'axios';
import CoinPage from "./routes/CoinPage";
import Footer from "./components/Footer";
import { UserAuthProvider } from "./context/AuthContext";

function App() {
  const [coins, setCoins] = useState();

   const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en'

   useEffect(() => {
     axios.get(url)
         .then(res => {
           const coinData = res.data;
           setCoins(coinData);
         })
    } , [url])
    // console.log(coins)

  return (
      <ThemeProvider>
        <UserAuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home coins={coins} />} />
            <Route path="/signIn" element={<FirebaseSignIn />} />
            <Route path="/signUp" element={<FirebaseSignUp />} />
            <Route path="/account" element={<Account />} />
            <Route path="/coin/:coinId" element={<CoinPage />}>
              <Route path=":coinId" />
            </Route>
          </Routes>
          <Footer />
        </UserAuthProvider>
      </ThemeProvider>
  );
}

export default App;
