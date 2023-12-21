import { useSelector } from "react-redux";
import ShelfItem from "./ShelfItem";
import { LuCakeSlice, LuIceCream } from "react-icons/lu";
import { useDispatch } from "react-redux";
import buyCake from "../redux/cakes/cakeActions";
import buyIcecream from "../redux/icecreams/icecreamActions";
import { cn } from "../lib/util";

const Shelf = () => {
  const items = [
    {
      name: "Cake",
      count: useSelector((state) => state.cake.cakeCount),
      icon: <LuCakeSlice size={30} />,
      description: "20% discount",
    },
    {
      name: "Ice Cream",
      count: useSelector((state) => state.icecream.icecreamCount),
      icon: <LuIceCream size={30} />,
      description: "Best selling item",
    },
  ];

  const renderedItems = items.map((item) => (
    <ShelfItem
      key={item.name}
      Icon={item.icon}
      name={item.name}
      count={item.count}
      description={item.description}
    />
  ));

  const dispatch = useDispatch();
  const handleCake = () => {
    dispatch(buyCake);
  };
  const handleIcecream = () => {
    dispatch(buyIcecream);
  };
  const handleBoth = () => {
    dispatch(buyCake);
    dispatch(buyIcecream);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 px-6 md:px-12">
      {/* Items Display */}
      <div className="flex flex-col w-full gap-5 md:flex-row">
        {renderedItems}
      </div>

      {/* Buttons Group */}
      <div className="flex flex-col justify-center gap-5 md:flex-row">
        <button
          className={cn(
            "btn",
            items[0].count !== 0 ? "btn-primary" : "btn-disabled"
          )}
          onClick={handleCake}
        >
          Buy cake
        </button>
        <button
          className={cn(
            "btn",
            items[1].count !== 0 ? "btn-secondary" : "btn-disabled"
          )}
          onClick={handleIcecream}
        >
          Buy icecream
        </button>
        <button
          className={cn(
            "btn",
            items[0].count && items[1].count !== 0
              ? "btn-accent"
              : "btn-disabled"
          )}
          onClick={handleBoth}
        >
          Buy Both
        </button>
      </div>
    </div>
  );
};

export default Shelf;
