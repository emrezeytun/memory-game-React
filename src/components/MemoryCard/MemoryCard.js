import React, { useEffect, useState } from "react";
import "./MemoryCard.scss";
import { MemoryCardItem } from "../index";
import {
  commentSvg,
  usdCircle,
  heartIcon,
  giftIcon,
  sunIcon,
  gamepadIcon,
  pawIcon,
  childHead,
} from "../../assets/iconsData";

export default function MemoryCard() {
  const [cardItems, setCardItems] = useState([]);
  const [clickTracking, setClickTracking] = useState(0);
  const [handleItems, setHandleItems] = useState([]);

  const restartGame = () => {
    const items = shuffleArray(dummyItems);
    setCardItems(items);
    setClickTracking(0);
  };

  const dummyItems = [
    { id: 1, number: 25, icon: commentSvg, isOpened: false, isCorrect: false },
    { id: 2, number: 25, icon: commentSvg, isOpened: false, isCorrect: false },
    { id: 3, number: 30, icon: usdCircle, isOpened: false, isCorrect: false },
    { id: 4, number: 30, icon: usdCircle, isOpened: false, isCorrect: false },
    {
      id: 5,
      number: 35,
      icon: heartIcon,
      isOpened: false,
      isCorrect: false,
    },
    {
      id: 6,
      number: 35,
      icon: heartIcon,
      isOpened: false,
      isCorrect: false,
    },
    { id: 7, number: 40, icon: giftIcon, isOpened: false, isCorrect: false },
    { id: 8, number: 40, icon: giftIcon, isOpened: false, isCorrect: false },
    { id: 9, number: 45, icon: sunIcon, isOpened: false, isCorrect: false },
    { id: 10, number: 45, icon: sunIcon, isOpened: false, isCorrect: false },
    {
      id: 11,
      number: 50,
      icon: gamepadIcon,
      isOpened: false,
      isCorrect: false,
    },
    {
      id: 12,
      number: 50,
      icon: gamepadIcon,
      isOpened: false,
      isCorrect: false,
    },
    { id: 13, number: 55, icon: pawIcon, isOpened: false, isCorrect: false },
    { id: 14, number: 55, icon: pawIcon, isOpened: false, isCorrect: false },
    {
      id: 15,
      number: 60,
      icon: childHead,
      isOpened: false,
      isCorrect: false,
    },
    {
      id: 16,
      number: 60,
      icon: childHead,
      isOpened: false,
      isCorrect: false,
    },
  ];

  useEffect(() => {
    restartGame();
  }, []);

  useEffect(() => {
    console.log(clickTracking);
  }, [clickTracking]);

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

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
    <div className="memory">
      <div className="memory-tracking">
        <p> Recorder: {parseInt(clickTracking / 2)} </p>
      </div>
      <div className="memory-restart">
        <button className="memory-restart-btn" onClick={restartGame}>
          Restart Game
        </button>
      </div>

      <div
        className={`memory-card ${
          cardItems.filter((data) => !data.isCorrect && data.isOpened)
            .length === 2
            ? "memory-card-disable"
            : ""
        } `}
      >
        {cardItems.map((item) => (
          <MemoryCardItem
            key={item.id}
            item={item}
            handleClick={() => handleClick(item)}
          />
        ))}
      </div>
    </div>
  );
}
