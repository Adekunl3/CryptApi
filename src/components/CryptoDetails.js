import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const CryptoDetails = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coincap.io/v2/assets/${id}`
        );
        setCrypto(response.data.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, [id]);

  if (!crypto) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-4 bg-gray-800 text-white rounded-lg mt-4 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          {crypto.name} ({crypto.symbol})
        </h2>
        <p>Price: ${Number(crypto.priceUsd).toFixed(2)}</p>
        <p>Rank: {crypto.rank}</p>
        <p>Market Cap: ${Number(crypto.marketCapUsd).toFixed(2)}</p>
        <p>Volume (24Hr): ${Number(crypto.volumeUsd24Hr).toFixed(2)}</p>
        <p>Change (24Hr): {Number(crypto.changePercent24Hr).toFixed(2)}%</p>
      </div>

      <div className="container mx-auto mt-4">
        <button className="btn rou text-xlbtn bg-blue-500 hover:bg-white text-white font-bold py-2 px-4 rounded btn-primary hover:text-blue-700">
          <Link to="/">Return to Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default CryptoDetails;
