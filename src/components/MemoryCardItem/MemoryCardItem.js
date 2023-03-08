import React from "react";
import "./MemoryCardItem.scss";

export default function MemoryCardItem({ item, handleClick }) {
  return (
    <div
      onClick={(item) => handleClick(item)}
      className={`memory-card-item ${
        item.isOpened ? "memory-card-item-opened" : "memory-card-item-closed"
      } ${item.isCorrect ? "memory-card-item-correct" : ""}`}
    >
      {item.isOpened && <img src={item.icon} />}
    </div>
  );
}
