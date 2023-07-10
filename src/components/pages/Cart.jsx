import React from "react";
import { NavLink } from "react-router-dom";
import "./AllStyle.css";
import cart from "../../utils/cart";
import { useState } from "react";
import CartItem from "../modules/CartItem";

const Cart = () => {
  const [, setCart] = useState(cart);
  const removeFromCart = (id) => {
    cart.removeFromCart(id);
    setCart(cart.getCart());
  };
  const addQuantity = (id, quantity) => {
    cart.setQuantity(id, quantity);
    setCart(cart.getCart());
  };

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="CardDitail card card-registration card-registration-2">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between">
                        <h1 className="fw-bold mb-0 text-black">Корзина</h1>
                      </div>
                      <hr className="my-4" />
                      {cart.getCart().map((element) => (
                        <CartItem
                          element={element}
                          removeFromCart={removeFromCart}
                          addQuantity={addQuantity}
                          addQ
                        />
                      ))}

                      <hr className="my-4" />

                      <button
                        type="button"
                        className="btn btn-outline-dark btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        <NavLink className="nav-link" to="/products">
                          <i class="fa fa-arrow-left"></i> К покупкам
                        </NavLink>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="summary">
                      <div className="p-5">
                        <h3 className="fw-bold mb-4 mt-3">Итог</h3>

                        <hr className="my-4" />

                        <h5 className="text-uppercase mb-3">Доставка</h5>

                        <div className="mb-4 pb-2">
                          <select className="select">
                            <option value="1">Стандартная доставка</option>
                            <option value="2">СДЭК</option>
                            <option value="3">Почта России</option>
                          </select>
                        </div>

                        <h5 className="text-uppercase mb-3">Промокод</h5>

                        <div className="mb-3">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Examplea2">
                              Введите код
                            </label>
                          </div>
                        </div>

                        <h5 className="text-uppercase mb-3">
                          Комментарий к заказу
                        </h5>
                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="formComment"
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Всего</h5>
                          <h5>€ {cart.getTotalCount()}</h5>
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Оплатить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
