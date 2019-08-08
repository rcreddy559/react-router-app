import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shope() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const items = await fetch(
      "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"
    ).then(res => res.json());
    setItems(items.items);
  };

  return (
    <div className="App">
      {items.map(item => (
        <h1 key={item.itemid}>
          <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shope;
