import useCartContext from "../../../contexts/cartContext/useCartContext.jsx";
import RecommendedDishCard from "./RecommendedDishCard.jsx";

export default function MenuDetailCard({ menu, recommendedDishes }) {
  const { addToCart } = useCartContext();

  return (
    <div
      className="
      px-8 w-[min(100%,1024px)]
      576px:p-0
      767px:mb-8
      1023px:p-8 1023px:border-[1.5px] 1023px:border-bright-grey 1023px:rounded-4xl 1023px:shadow-[0_0_5px_0_rgba(0,0,0,0.1)]"
    >
      <section
        className="
        mb-8
        767px:flex 767px:gap-8 767px:justify-between"
      >
        <section
          className="
          w-full mb-8
          767px:w-[min(40%,437px)]"
        >
          <div className="overflow-hidden mb-8 rounded-4xl">
            <img
              className="w-full object-cover transition-transform duration-200 hover:scale-[1.1]"
              src={menu.imageUrl}
              alt={menu.name}
            />
          </div>
          <section
            className="
            grid grid-cols-2 gap-y-4 place-items-center py-4 font-medium border-2 border-primary rounded-2xl
            576px:grid-cols-4
            767px:grid-cols-2
            1440px:grid-cols-4"
          >
            <div className="w-full border-r-2 border-primary">
              <p className="text-center text-medium-size text-primary">
                {menu.nutrition.calories}
              </p>
              <p className="text-center text-dark-grey">Calories</p>
            </div>
            <div
              className="
              w-full
              576px:border-r-2 576px:border-primary
              767px:border-0
              1440px:border-r-2"
            >
              <p className="text-center text-medium-size text-primary">
                {menu.nutrition.protein} g
              </p>
              <p className="text-center text-dark-grey">Protein</p>
            </div>
            <div className="w-full border-r-2 border-primary">
              <p className="text-center text-medium-size text-primary">
                {menu.nutrition.fat} g
              </p>
              <p className="text-center text-dark-grey">Fat</p>
            </div>
            <div className="w-full ">
              <p className="text-center text-medium-size text-primary">
                {menu.nutrition.carbohydrates} g
              </p>
              <p className="text-center text-dark-grey">Carb</p>
            </div>
          </section>
        </section>
        <section
          className="
          w-full text-grey
          767px:w-[min(60%,491px)]"
        >
          <section className="mb-4 text-third font-semibold">
            <h1 className="mb-2 text-[2rem]">{menu.name}</h1>
            <div className="mb-2">
              <div className="inline-flex gap-2 mr-4">
                <i className="fa-solid fa-star text-[1.25rem] text-fourth"></i>
                <i className="fa-solid fa-star text-[1.25rem] text-fourth"></i>
                <i className="fa-solid fa-star text-[1.25rem] text-fourth"></i>
                <i className="fa-solid fa-star text-[1.25rem] text-fourth"></i>
                <i className="fa-regular fa-star text-[1.25rem]"></i>
              </div>
              <span className="text-normal-size">(4.5)</span>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-heading03-size">{menu.price} THB</span>
              <span className="px-4 py-2 text-base-size text-white font-medium bg-fourth round rounded-full">
                {menu.servingSize}
              </span>
            </div>
          </section>
          <section className="mb-4">{menu.description.en}</section>
          <section className="mb-4">
            <h2 className="mb-2 text-third text-normal-size font-medium">
              INGREDIENTS
            </h2>
            <ol className="text-pretty">
              {menu.ingredients.en.map((ingredient, index) => (
                <div key={index + 1} className="flex gap-1">
                  <span>{index + 1}.</span>
                  <li key={index + 1}>{ingredient}</li>
                </div>
              ))}
            </ol>
          </section>
          <button
            onClick={() => addToCart(menu._id)}
            className="cursor-pointer w-full px-6 py-4 bg-primary text-white rounded-full transition-colors duration-200 hover:bg-third"
          >
            Add to Your Cart
          </button>
        </section>
      </section>
      <section>
        <h2 className="mb-8 text-third text-normal-size font-medium">
          RECOMMENDED DISHES
        </h2>
        <section
          className="
          767px:grid 767px:grid-cols-3 767px:gap-8
          1023px:grid-cols-2"
        >
          {recommendedDishes.map((recommendedDish) => (
            <RecommendedDishCard
              key={recommendedDish._id}
              recommendedDish={recommendedDish}
            />
          ))}
        </section>
      </section>
    </div>
  );
}
