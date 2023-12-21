import { useSelector } from "react-redux";
import ShelfItem from "./ShelfItem";
import { LuCakeSlice, LuIceCream } from "react-icons/lu";
import { useDispatch } from "react-redux";
import buyCake from "../redux/cakes/cakeActions";
import buyIcecream from "../redux/icecreams/icecreamActions";

const Shelf = () => {
  const items = [
    {
      name: "cakes",
      count: useSelector((state) => state.cake.cakeCount),
      icon: <LuCakeSlice size={30} />,
      description: "20% discount",
    },
    {
      name: "icecreams",
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
    <div className="flex flex-col items-center justify-center gap-5 my-5 max-w-fit">
      {/* Items Display */}
      <div className="shadow stats">{renderedItems}</div>

      {/* Buttons Group */}
      <div className="flex flex-col justify-center gap-5 md:flex-row ">
        <button className="btn btn-primary" onClick={handleCake}>
          Buy cake
        </button>
        <button className=" btn btn-secondary" onClick={handleIcecream}>
          Buy icecream
        </button>
        <button className=" btn btn-accent" onClick={handleBoth}>
          Buy Both
        </button>
      </div>
    </div>
  );
};

export default Shelf;
