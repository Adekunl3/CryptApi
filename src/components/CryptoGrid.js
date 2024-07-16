import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const CryptoGrid = () => {
  const [cryptos, setCryptos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 25;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.coincap.io/v2/assets");
        // console.log(response.data);
        const cryptosData = response.data.data;
        setCryptos(cryptosData);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    getData();
  }, []);

  const SearchCrypto = (inputSearch) => {
    setSearchTerm(inputSearch.target.value);
  };

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCryptos.slice(indexOfFirstItem, indexOfLastItem);

  const renderCryptos = currentItems.map((crypto) => (
    <div
      key={crypto.id}
      className="bg-gray-900 p-4 rounded-md m-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-xl font-bold text-white">{crypto.name}</h2>
      <p className="text-gray-200">Symbol: {crypto.symbol}</p>
      <p className="text-gray-200">
        Price: ${Number(crypto.priceUsd).toFixed(2)}
      </p>
      <Link
        to={`/crypto/${crypto.id}`}
        className="text-blue-500 hover:underline mt-2 block"
      >
        View Details
      </Link>
    </div>
  ));

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search cryptocurrencies..."
        value={searchTerm}
        onChange={SearchCrypto}
        className="mb-4 p-2 w-1/2 rounded-full border border-gray-400"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {renderCryptos}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredCryptos.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CryptoGrid;
