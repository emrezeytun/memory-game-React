import React from "react";
import "./MemoryCardItem.scss";

export default function MemoryCardItem({ item, handleClick }) {
  return (
    <div
      onClick={(item) => handleClick(item)}
      className={
        item.isOpened
          ? "memory-card-item memory-card-item-opened"
          : "memory-card-item memory-card-item-closed"
      }
    >
      <p>{item.number}</p>
    </div>
  );
}
