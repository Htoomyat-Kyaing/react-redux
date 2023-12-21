const ShelfItem = ({ Icon, name, count, description }) => {
  return (
    <div className="stat">
      <div className="w-8 h-8 stat-figure text-secondary">{Icon}</div>
      <div className="stat-title">{name}</div>
      <div className="stat-value">{count}</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
};

export default ShelfItem;
