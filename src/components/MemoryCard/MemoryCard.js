import React, { useEffect, useState } from "react";
import "./MemoryCard.scss";
import { MemoryCardItem } from "../index";

export default function MemoryCard() {
  const [cardItems, setCardItems] = useState([]);
  const [clickTracking, setClickTracking] = useState(0);
  const [handleItems, setHandleItems] = useState([]);

  useEffect(() => {
    const items = [
      { id: 1, number: 25, isOpened: true, isCorrect: true },
      { id: 2, number: 25, isOpened: true, isCorrect: true },
      { id: 3, number: 30, isOpened: false, isCorrect: false },
      { id: 4, number: 30, isOpened: false, isCorrect: false },
      { id: 5, number: 35, isOpened: false, isCorrect: false },
      { id: 6, number: 35, isOpened: false, isCorrect: false },
      { id: 7, number: 40, isOpened: false, isCorrect: false },
      { id: 8, number: 40, isOpened: false, isCorrect: false },
      { id: 9, number: 45, isOpened: false, isCorrect: false },
      { id: 10, number: 45, isOpened: false, isCorrect: false },
      { id: 11, number: 50, isOpened: false, isCorrect: false },
      { id: 12, number: 50, isOpened: false, isCorrect: false },
      { id: 13, number: 55, isOpened: false, isCorrect: false },
      { id: 14, number: 55, isOpened: false, isCorrect: false },
      { id: 15, number: 60, isOpened: false, isCorrect: false },
      { id: 16, number: 60, isOpened: false, isCorrect: false },
    ];
    setCardItems(items);
  }, []);

  useEffect(() => {
    console.log("render");
  }, [clickTracking]);

  const checkCardItems = (filteredData) => {
    if (filteredData.length > 1) {
      if (filteredData.every((val, i, arr) => val.number === arr[0].number)) {
        setCardItems(
          cardItems.map((data) => {
            return {
              ...data,
              isOpened: !data.isCorrect
                ? data.number === filteredData[0].number
                : true,
              isCorrect: !data.isCorrect
                ? data.number === filteredData[0].number
                : true,
            };
          })
        );
      } else {
        setCardItems(
          cardItems.map((data) => {
            return {
              ...data,
              isOpened: !data.isCorrect ? false : true,
            };
          })
        );
      }
    } else {
      setCardItems(cardItems);
    }
    setClickTracking(clickTracking + 1);
  };

  const handleClick = (item) => {
    cardItems.find((data) => data.id === item.id).isOpened = true;
    const filteredData = cardItems.filter(
      (data) => !data.isCorrect && data.isOpened
    );

    setCardItems(cardItems);
    setClickTracking(clickTracking + 1);

    setTimeout(() => {
      checkCardItems(filteredData);
    }, 1000);
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
