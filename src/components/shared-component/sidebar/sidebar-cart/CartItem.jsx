import { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IconContext } from "react-icons";
import useCartContext from "../../../../contexts/cartContext/useCartContext";
import useDebounce from "../../../../hooks/useDebounce";
import { GoTrash } from "react-icons/go";

export default function MyCartLists({
  itemId,
  name,
  servingSize,
  price,
  quantity,
  imageUrl,
}) {
  const { updateQuantity, deleteCartItem } = useCartContext();
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const debouncedQuantity = useDebounce(itemQuantity, 500);

  useEffect(() => {
    if (debouncedQuantity !== quantity) {
      updateQuantity(itemId, debouncedQuantity);
    }
  }, [debouncedQuantity]);

  return (
    <>
      <article className="flex gap-4 p-4 border-[1.5px] border-bright-grey rounded-4xl shadow-[0_0_5px_0_rgba(0,0,0,0.1)]">
        <div className="overflow-hidden max-w-[130px] rounded-4xl">
          <img
            className="w-full object-cover transition-transform duration-200 hover:scale-[1.1]"
            src={imageUrl}
            alt={name}
          />
        </div>
        <section className="flex flex-col justify-between w-full text-third font-semibold">
          <section className="flex justify-between items-start">
            <div>
              <p className="mb-2">{name}</p>
              <p className="text-grey">{servingSize}</p>
            </div>
            <button
              aria-label="Remove item from cart"
              onClick={() => deleteCartItem(itemId)}
              className="cursor-pointer mx-2 text-secondary text-xl"
            >
              <GoTrash />
            </button>
          </section>
          <section className="flex justify-between">
            <p className="text-primary">{price} THB</p>
            <div className="flex gap-4 items-center">
              <IconContext value={{ color: "var(--color-third)" }}>
                <button
                  aria-label="Decrease quantity"
                  onClick={() =>
                    setItemQuantity((prev) => Math.max(0, prev - 1))
                  }
                  className="cursor-pointer p-1 bg-bright-grey rounded-full"
                >
                  <FiMinus />
                </button>
                <p>{itemQuantity}</p>
                <button
                  aria-label="Increment quantity"
                  onClick={() => setItemQuantity((prev) => prev + 1)}
                  className="cursor-pointer p-1 bg-bright-grey rounded-full"
                >
                  <FaPlus />
                </button>
              </IconContext>
            </div>
          </section>
        </section>
      </article>
    </>
  );
}
