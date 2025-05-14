import "../sidebar.css";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router";
import { SidebarFavContext } from "../../../../contexts/sidebarFavContext/SidebarFavContext.jsx";
import FavItem from "./FavItem.jsx";
import { RiShoppingBag3Fill } from "react-icons/ri";

export default function SidebarFav() {
  const sidebarFavRef = useRef();
  const { showSidebarFav, setShowSidebarFav, favRef, mobileFavRef } =
    useContext(SidebarFavContext);

  useEffect(() => {
    function handleClickOutside(e) {
      const target = e.target;
      if (
        !favRef.current.contains(target) &&
        !mobileFavRef.current.contains(target) &&
        !sidebarFavRef.current.contains(target)
      ) {
        setShowSidebarFav(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <aside
      ref={sidebarFavRef}
      className={`z-200 fixed top-[100.44px] ${
        showSidebarFav
          ? "opacity-100 right-0 animate-[slide-in_0.4s_cubic-bezier(0.4,0,0.2,1)]"
          : "opacity-0 right-[-483px] animate-[slide-out_0.4s_cubic-bezier(0.4,0,0.2,1)]"
      } bottom-0 flex flex-col justify-between w-[min(100%,483px)] p-8 pt-0 bg-white transition-opacity duration-200`}
    >
      <section className="flex flex-col overflow-hidden mb-8">
        <div className="flex justify-between items-end text-grey font-semibold">
          <p
            className={`text-third text-medium-size transition-colors duration-200`}
          >
            My favorites
          </p>
          <p className={`transition-colors duration-200`}>0 item</p>
        </div>
        <section className="overflow-y-auto grid gap-4 py-8">
          <FavItem />
        </section>
      </section>
      <Link to="/checkout">
        <button className="cursor-pointer flex items-center justify-center gap-2 w-full px-8 py-3 text-normal-size text-white font-medium bg-primary rounded-full transition-colors duration-200 hover:bg-secondary">
          <RiShoppingBag3Fill />
          <span>Shop Now</span>
        </button>
      </Link>
    </aside>
  );
}
