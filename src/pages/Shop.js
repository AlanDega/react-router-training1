import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-api.theapinetwork.com/store/get'
    ); 

    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
};  

  return (
    <div>
      {items.map(item => (
        
          <h1 key={item.itemid}>
          <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
          </h1> 
      ))}
    </div>
  );
}

export default Shop;
