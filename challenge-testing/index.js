class CarritoCompra {
    constructor() {
        this.carrito = [];
    }

    getShoppingCart () { 
        return this.carrito; 
    };

    addProduct (product) {
        this.carrito.push(product)
    };

    calculateTotal () {
        const allProducts = this.carrito;

        if (!allProducts.length) throw Error("No hay productos en el carrito");

        const totalPrice =  allProducts.reduce((acc, currProd) => acc + currProd.price , 0);
        
        return totalPrice;
    };

    calculateDiscount (discount) {
        const total = this.calculateTotal();
        const operator = (100 - discount) / 100

        return total * operator;
    };

};

module.exports = CarritoCompra;

