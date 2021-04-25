import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const { items = [], addToBasket = Function.prototype } = props;

  if (!items.length) {
    <h4>Nothing here</h4>;
  }

  return (
    <div className="items">
      {items.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export { GoodsList };
