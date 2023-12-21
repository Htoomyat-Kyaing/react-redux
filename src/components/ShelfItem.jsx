const ShelfItem = ({ Icon, name, count, description }) => {
  return (
    <div className="shadow-md stat">
      <div className="w-8 h-8 stat-figure text-secondary">{Icon}</div>
      <div className="stat-title">{name}</div>
      <div className="stat-value">{count}</div>
      {count !== 0 ? (
        <div className="stat-desc max-w-18 text-wrap">{description}</div>
      ) : (
        <div className="stat-desc max-w-18 text-wrap">{`Sorry, all the ${name} has been sold out!`}</div>
      )}
    </div>
  );
};

export default ShelfItem;
