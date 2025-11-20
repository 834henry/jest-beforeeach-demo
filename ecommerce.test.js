const { Builder, By, until, Key } = require("selenium-webdriver");

describe("LambdaTest eCommerce Playground Tests", () => {
  let driver;
  const gridUrl = "https://hub.lambdatest.com/wd/hub";

  async function clickSafe(el) {
    try {
      await el.click();
    } catch {
      await driver.executeScript("arguments[0].click()", el);
    }
  }

  async function waitAndFind(selector, timeout = 15000) {
    await driver.wait(until.elementLocated(By.css(selector)), timeout);
    return driver.findElement(By.css(selector));
  }

  beforeEach(async () => {
    const capabilities = {
      browserName: "Chrome",
      browserVersion: "latest",
      "LT:Options": {
        username: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
        platformName: "Windows 10",
        project: "Jest beforeEach Demo",
        build: "eCommerce Tests",
        name: "Product Search Test",
        w3c: true,
        plugin: "node_js-jest",
      },
    };

    driver = await new Builder()
      .usingServer(gridUrl)
      .withCapabilities(capabilities)
      .build();
  });

  afterEach(async () => {
    if (driver) await driver.quit();
  });

  // ===============================================
  // TEST 1 — SEARCH
  // ===============================================
  test("should search for a product successfully", async () => {
    await driver.get("https://ecommerce-playground.lambdatest.io/");

    const searchBox = await waitAndFind("input[name='search']");
    await searchBox.sendKeys("iPhone");

    const searchButton = await waitAndFind("button[type='submit']");
    await clickSafe(searchButton);

    // Wait for search results to load
    await driver.wait(until.elementLocated(By.css(".product-thumb")), 15000);
    const products = await driver.findElements(By.css(".product-thumb"));
    expect(products.length).toBeGreaterThan(0);
  }, 45000);

  // ===============================================
  // TEST 2 — PRODUCT DETAILS
  // ===============================================
  test("should display product details when clicked", async () => {
    await driver.get("https://ecommerce-playground.lambdatest.io/");

    const searchBox = await waitAndFind("input[name='search']");
    await searchBox.sendKeys("MacBook");

    const searchButton = await waitAndFind("button[type='submit']");
    await clickSafe(searchButton);

    // Wait for and click first product
    const firstProduct = await waitAndFind(".product-thumb h4 a");
    await clickSafe(firstProduct);

    // Wait for product detail page to load
    const title = await waitAndFind("h1", 15000);
    const titleText = await title.getText();
    expect(titleText.toLowerCase()).toContain("macbook");
  }, 45000);

}); // <-- Make sure this closing brace is here and there's no code after it
