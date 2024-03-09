//? constructor(): Inicializa el carrito como un array vacío.

//? agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

//? calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

//? aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

const CarritoCompra = require("../index");

let carrito;

const mockGetProducts = jest.fn(() => carrito.getShoppingCart());


const mockaddProducts = jest.fn( obj => carrito.addProduct(obj));

const mockCalculateTotal = jest.fn(() => carrito.calculateTotal());

const mockCalculateTotalDiscount = jest.fn( discount => carrito.calculateDiscount(discount));

describe("Carrito de Compra", () => {

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it("Inicializar el carrito sin productos", () => {
    expect(mockGetProducts()).toEqual([]);
    expect(mockGetProducts).toHaveBeenCalledTimes(1);
  });

  it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
    const product = {
      product: "iphone",
      price: 500,
    };
    mockaddProducts(product)
    expect(mockGetProducts()).toContain(product);
  });
  it("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
    const product = {
      product: "iphone",
      price: 500,
    };
    const product2 = {
      product: "Tv LG",
      price: 900,
    };
    mockaddProducts(product)
    mockaddProducts(product2)
    expect(mockCalculateTotal()).toBe(1400);
  });
  it("Si no hay productos en el carrito al momento de calcular el total, se espera que lance el error 'No hay productos en el carrito'", () => {
    expect(() => mockCalculateTotal()).toThrow("No hay productos en el carrito");
  });
  it("Aplica un descuento al total de la compra según el porcentaje especificado", () => {
    const product2 = {
      product: "iphone",
      price: 500,
    };
    const product3 = {
      product: "Tv LG",
      price: 900,
    };
    mockaddProducts(product2)
    mockaddProducts(product3)
    expect(mockCalculateTotalDiscount(15)).toBe(1190);
  });
}); 