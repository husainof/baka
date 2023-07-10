import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useFetcher } from "react-router-dom";
import cart from "../../utils/cart";

const Products = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [, setCart] = useState(cart);

  const addCart = (product) => {
    cart.appendToCart(product);
    setCart(cart.getCart());
  };

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.clone().json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filteredData = data.filter((item) => {
    return item.title?.toLowerCase().includes(searchValue.toLowerCase());
  });

  // console.log(filteredData);

  const filterProduct = (cat) => {
    const updatedList = filteredData.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const handleSearch = (event) => {
    setSearchValue(() => event.target.value);
    setFilter(
      data.filter((item) => {
        return item.title?.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  };

  return (
    <div className="container my-3 py-5">
      <div className="row">
        <div className="col-12 mb-6">
          <h1 className="display-6 fw-bolder text-center">Каталог</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="input-group rounded mb-4">
              <input
                type="text"
                className="form-control rounded me-1 p-3 fs-5 fw-normal opacity-30"
                placeholder="Поиск"
                aria-label="Search"
                aria-describedby="search-addon"
                value={searchValue}
                onChange={handleSearch}
              />

              <button
                type="button"
                className="btn btn-outline-dark"
                id="search-addon"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>

            <div className="buttons d-flex justify-content-left mb-5 pb-5">
              <button
                className="btn btn-outline-dark me-2"
                onClick={() => setFilter(filteredData)}
              >
                Всё
              </button>
              <button
                className="btn btn-outline-dark me-2"
                onClick={() => filterProduct("men's clothing")}
              >
                Мужская одежда
              </button>
              <button
                className="btn btn-outline-dark me-2"
                onClick={() => filterProduct("women's clothing")}
              >
                Женская одежда
              </button>
              <button
                className="btn btn-outline-dark me-2"
                onClick={() => filterProduct("jewelery")}
              >
                Украшения
              </button>
              <button
                className="btn btn-outline-dark me-2"
                onClick={() => filterProduct("electronics")}
              >
                Электроника
              </button>
            </div>
            {filter.map((product) => {
              return (
                <div className="col-md-3 mb-4">
                  <div className="card h-100 text-center p-4" key={product.id}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                      height="300px"
                    />

                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text fw-bold">${product.price}</p>

                      <NavLink
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark"
                        onClick={() => addCart(product)}
                      >
                        В корзину
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
