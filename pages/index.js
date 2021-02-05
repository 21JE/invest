import Head from 'next/head'
import { useState , useEffect } from 'react';

export default function Home() {
  const [currency, setCurrency] = useState('USD');
  const [price , setPrice] = useState(0)
  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result)
          setPrice(result['bpi'][currency]['rate_float'])
          console.log(currency, 'currency')
        },
      )
  }, [currency])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="space-x-2">
          <button className="p-4 bg-blue-500 rounded" onClick={() => setCurrency('USD')}>USD</button>
          <button className="p-4 bg-blue-500 rounded" onClick={() => setCurrency('EUR')}>EUR</button>
          <button className="p-4 bg-blue-500 rounded" onClick={() => setCurrency('GBP')}>GBP</button>
        </div>
        <p className="py-2">{currency} - {price}</p>
      </div> 
    </>
  )
}
