import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [ItemData, setItemData] = useState([]);
  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=egg").then(res => res.data).then(data => setItemData(data.meals))
  }, [])
  return (
    <ItemContext.Provider
      value={{ ItemData, setItemData }}
    >
      
      {children}
    </ItemContext.Provider >
  )
}
