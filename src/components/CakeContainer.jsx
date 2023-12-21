import { useSelector, useDispatch } from "react-redux";
import buyCake from "../redux/cakes/cakeActions";

const CakeContainer = () => {
  const cakes = useSelector((state) => state.cake.cakeCount);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(buyCake);
  };
  return (
    <section className="shadow stats">
      <article className="flex flex-col items-center stat">
        <h2 className="stat-title">Number of cakes</h2>
        <p className="stat-value">{cakes}</p>
        <button className="mt-2 btn btn-primary" onClick={handleClick}>
          Buy cake
        </button>
      </article>
    </section>
  );
};

export default CakeContainer;
