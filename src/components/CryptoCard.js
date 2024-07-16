import React from "react";
import { Link } from "react-router-dom";

const CryptoCard = ({ crypto }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{crypto.name}</h2>
      <p>{crypto.symbol}</p>
      <p>${Number(crypto.priceUsd).toFixed(2)}</p>
      <Link to={`/crypto/${crypto.id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default CryptoCard;
