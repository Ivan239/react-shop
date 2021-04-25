function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    minusItem = Function.prototype,
    plusItem = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name}{' '}
      <i className="material-icons amount" onClick={() => minusItem(id)}>
        remove
      </i>
      x{quantity}{' '}
      <i className="material-icons amount" onClick={() => plusItem(id)}>
        add
      </i>
      ={price * quantity}
      <span
        href="#!"
        className="secondary-content"
        onClick={() => removeFromBasket(id)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
