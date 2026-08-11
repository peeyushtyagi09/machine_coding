function Cart() {
    this.items = [];
}

Cart.prototype.add = function (product) {
    const existing = this.items.find(item => item.id === product.id);

    if (existing) {
        existing.quantity++;
    } else {
        this.items.push({
            ...product,
            quantity: 1
        });
    }
};

Cart.prototype.remove = function (productId) {
    const index = this.items.findIndex(item => item.id === productId);

    if (index > 0) {
        this.items.splice(index, 1);
    }
};

Cart.prototype.updateQuantity = function (productId, quantity) {
    const item = this.items.find(item => item.id === productId);

    if (item) {
        item.quantity = quantity;
    }
};

Cart.prototype.getTotal = function () {
    return this.items.reduce((total, item) => {
        total + item.price * item.quantity;
    }, 0);
};

const cart = new Cart();

cart.add({
    id: 1,
    name: "Keyboard",
    price: 2000
});

cart.add({
    id: 2,
    name: "Mouse",
    price: 1000
});

cart.add({
    id: 1,
    name: "Keyboard",
    price: 2000
});

cart.updateQuantity(2, 3);

console.log(cart.items);
console.log(cart.getTotal());

cart.remove(1);

console.log(cart.items);