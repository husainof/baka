class Cart {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem("cart")) ?? [];
  }

  getCart() {
    return this.cart;
  }

  getCount() {
    return this.cart.length;
  }

  removeFromCart(id) {
    const newCart = this.cart.filter((item) => item.id !== id);
    this.cart = newCart;
    this.saveCart();
  }

  setQuantity(id, quantity) {
    this.cart = this.cart.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
        return item;
      } else {
        return item;
      }
    });
    this.saveCart();
  }

  getTotalCount() {
    return this.cart.reduce(
      (totalCount, item) => totalCount + item.price * item.quantity,
      0
    );
  }

  appendToCart(item, quantity = 1) {
    // нужно проверить, нет ли уже такого товара в корзине
    const itemIndex = this.cart.findIndex((value) => value.id === item.id);
    if (itemIndex < 0) {
      // такого товара еще нет
      const newItem = {
        ...item,
        quantity: quantity,
      };
      this.cart = [...this.cart, newItem];
    } else {
      // такой товар уже есть
      const newItem = {
        ...this.cart[itemIndex],
        quantity: this.cart[itemIndex].quantity + quantity,
      };
      const newCart = this.cart.slice(); // копия массива cartItems
      newCart.splice(itemIndex, 1, newItem);
      this.cart = newCart;
    }
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}

export default new Cart();
