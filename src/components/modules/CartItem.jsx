import { useState } from "react";

export default function CartItem({ element, addQuantity, removeFromCart }) {
  const [quantity, setQuantity] = useState(element.quantity);

  const inc = () => {
    addQuantity(element.id, quantity + 1);
    setQuantity(quantity + 1);
  };

  const dec = () => {
    addQuantity(element.id, quantity - 1);
    setQuantity(quantity - 1);
  };

  return (
    <div className="row mb-4 d-flex justify-content-between align-items-center">
      <div className="col-md-2 col-lg-2 col-xl-2">
        <img
          src={element.image}
          className="img-fluid rounded-3"
          alt={element.title}
        />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h6 className="text-muted">Shirt</h6>
        <h6 className="text-black mb-0">{element.title}</h6>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button
          className="btn btn-link px-2"
          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
          disabled={quantity < 2}
          onClick={() => dec()}
        >
          <i className="fa fa-minus"></i>
        </button>

        <input
          id="form1"
          min="0"
          name="quantity"
          value={quantity}
          className="form-control form-control-sm"
        />

        <button
          className="btn btn-link px-2"
          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
          onClick={() => inc()}
        >
          <i class="fa fa-plus"></i>
        </button>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">{element.price}</h6>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <a
          href="#!"
          className="text-muted"
          onClick={() => removeFromCart(element.id)}
        >
          <i class="fa fa-trash"></i>
        </a>
      </div>
    </div>
  );
}
