import React, { useEffect, useState } from 'react';

let api_url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

const Card = () => {
  const [quote, setQuote] = useState('');

  const getQuotes = () => {
    fetch(api_url)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Server Error');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setQuote(data.message);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className='flex-col items-center justify-items-center'>
      {/* Title */}
      <div>
        <h1 className='text-center text-4xl font-bold'>
          Random Quote Generator
        </h1>
      </div>
      {/* Card */}
      <div className='bg-blue-500 m-auto h-64 w-9/12 rounded-md container max-w-2xl flex-col shadow-xs'>
        <div className='pt-3'>
          <p className='text-white text-xl text-center mt-12'>{quote}</p>
        </div>
      </div>

      <button
        className='bg-pink-500 p-2 rounded text-white text-center float-right mt-3 hover:bg-pink-700'
        onClick={getQuotes}
      >
        Get a new Quote
      </button>
    </div>
  );
};

export default Card;
