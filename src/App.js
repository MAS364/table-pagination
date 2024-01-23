import "./index.css";
import React, { useState, useEffect } from "react";
import Table from "./table.jsx";

export default function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const API = "d.json";
  const fetchdata = async (url) => {
    try {
      const res = await fetch(url);
      const fetcheddata = await res.json();
      setData(fetcheddata);
      console.log(fetcheddata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata(API);
  }, []);

  // const handleInput = (e) => {
  //    console.log(e.target.value)
  //    setSearchTerm(e.target.value)
  // }

  const filtereddata = data
    .slice(page * 10 - 10, page * 10)
    .filter((item) =>
      searchTerm.toLowerCase() === ""
        ? item
        : item.SYMBOL.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handlePage = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= 10) setPage(selectedPage);
  };

  return (
    <div className="App">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by SYMBOL..."
          className="search-box"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Table data={filtereddata} />

      <div className="pagination">
        <span onClick={() => handlePage(page - 1)}>◀︎</span>
        {[...Array(Math.ceil(data.length / 10))].slice(0, 10).map((_, i) => (
          <span
            key={i + 1}
            className={page === i + 1 ? "page-selected" : ""}
            onClick={() => handlePage(i + 1)}
          >
            {i + 1}
          </span>
        ))}
        <span onClick={() => handlePage(page + 1)}>▶︎</span>
      </div>
    </div>
  );
}
