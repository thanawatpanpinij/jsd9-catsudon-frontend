import React, { useEffect, useState } from "react";
import formatNumber from "../../../utils/formatNumber";

export default function AnimatedCalories({ target, duration = 500 }) {
  const [count, setCount] = useState(0);
  // console.log(target);
  useEffect(() => {
    // if (!startCount) return;
    let start = 0;
    const end = target;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    // setStartCount(false);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <p className="text-heading02-size text-secondary text-center font-bold">{formatNumber(count)}</p>;
}
