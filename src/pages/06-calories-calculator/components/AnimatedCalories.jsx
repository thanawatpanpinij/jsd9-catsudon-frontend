import React, { useEffect, useState } from "react";
import formatNumber from "../../../utils/formatNumber";

export default function AnimatedCalories({ target, duration = 500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    initialCounting()
  }, [target, duration]);

  async function initialCounting() {
    for (let i = 0; i < target; i+=target/50) {
      await sleep(20);
      setCount(i);
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return <p className="text-heading02-size text-secondary text-center font-bold">{formatNumber(Math.round(count))}</p>;
}
