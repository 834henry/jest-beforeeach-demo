describe("Shopping Cart Tests", () => {
  global.cart = [];

  beforeEach(() => {
    global.cart = [];

    // Mock localStorage
    global.localStorage = {
      clear: jest.fn(),
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };
  });

  test("should add item to cart", () => {
    global.cart.push({ id: 1, name: "Product A", price: 29.99 });
    expect(global.cart.length).toBe(1);
    expect(global.cart[0].name).toBe("Product A");
  });

  test("should start with empty cart", () => {
    expect(global.cart.length).toBe(0);
  });
});
