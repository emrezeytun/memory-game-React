import React, { useEffect, useState } from "react";
import "./MemoryCard.scss";
import { MemoryCardItem } from "../index";

export default function MemoryCard() {
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    const items = [
      { id: 1, number: 25, isOpened: true },
      { id: 2, number: 25, isOpened: false },
      { id: 3, number: 30, isOpened: true },
      { id: 4, number: 30, isOpened: false },
      { id: 5, number: 35, isOpened: false },
      { id: 6, number: 35, isOpened: false },
      { id: 7, number: 40, isOpened: false },
      { id: 8, number: 40, isOpened: false },
      { id: 9, number: 45, isOpened: false },
      { id: 10, number: 45, isOpened: false },
      { id: 11, number: 50, isOpened: false },
      { id: 12, number: 50, isOpened: false },
      { id: 13, number: 55, isOpened: false },
      { id: 14, number: 55, isOpened: false },
      { id: 15, number: 60, isOpened: false },
      { id: 16, number: 60, isOpened: false },
    ];
    setCardItems(items);
  }, []);

  const handleClick = (item) => {
    cardItems.find((data) => data.id === item.id).isOpened = true;
    setCardItems(cardItems);
    console.log("cardItems", cardItems);
  };
  return (
    <div className="memory-card">
      {cardItems.map((item) => (
        <MemoryCardItem
          key={item.id}
          item={item}
          handleClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
}
