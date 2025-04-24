import React from "react";
import { RiGeminiFill } from "react-icons/ri";
import styles from "./textScroller.module.css";

const message = "Grab your deal – up to 10% off! Hurry, it won’t last!";
const repeatCount = 10;

const TextScroller = () => {
  return (
    <div className="w-full bg-primary text-white text-small-size h-[30px] flex items-center overflow-hidden">
      <ul className={`flex gap-[16px] ${styles.textScroller}`}>
        {Array.from({ length: repeatCount }).map((_, index) => (
          <li key={index} className="flex items-center gap-[16px]">
            <p>{message}</p>
            <RiGeminiFill />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextScroller;