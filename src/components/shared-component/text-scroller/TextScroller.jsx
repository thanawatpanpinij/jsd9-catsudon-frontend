import React from "react";
import { RiGeminiFill } from "react-icons/ri";
import styles from "./textScroller.module.css";

const message = "Grab your deal – up to 10% off! Hurry, it won’t last!";
const repeatCount = 10;

const TextScroller = () => {
  const renderMessages = () =>
    Array.from({ length: repeatCount }).map((_, index) => (
      <li key={index} className="flex items-center gap-[16px]">
        <p>{message}</p>
        <RiGeminiFill className="text-normal-size" />
      </li>
    ));

  return (
    <div className="w-full bg-primary text-white text-small-size h-[32px] flex items-center overflow-hidden">
      <ul className={`gap-[16px] ${styles.textScroller}`}>
        {renderMessages()}
        {renderMessages()}
      </ul>
    </div>
  );
};

export default TextScroller;
