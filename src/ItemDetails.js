import React, { useEffect, useState } from "react";
import "./App.css";

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${
        match.params.id
      }`
    ).then(res => res.json());
    setItem(fetchItem);
  };

  return (
    <div className="App">
      <h1>{item.name}</h1>
      <img src={item.images.transparent} alt={item.name} />
    </div>
  );
}

export default ItemDetails;
