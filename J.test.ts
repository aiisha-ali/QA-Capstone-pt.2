import { pageObjects } from "./basePage";

const Pet = new Pet();

test("The logo link functionality", async () => {
  await Pet.click(Pet.lizardBtn);
  await Pet.click(Pet.logo);
  let value = await Pet.driver.getCurrentUrl();
  expect(value).toBe(Pet.url);
});

test("The cart function", async () => {
  await Pet.click(Pet.lizardBtn);
  await Pet.click(Pet.rsBtn);
  await Pet.click(Pet.vrsBtn);
  await Pet.click(Pet.addToCartBtn);
  await Pet.findElement(Pet.qty).sendKeys("1");
  await Pet.click(Pet.updateCartBtn);
  let response = await Pet.getText(Pet.getConfirm);
  expect(response).toBe("Added to cart!");
});

test("The criteria for adding to cart", async () => {
  await Pet.click(Pet.lizardBtn);
  await Pet.click(Pet.rsBtn);
  await Pet.click(Pet.vrsBtn);
  await Pet.click(Pet.addToCartBtn);
  await Pet.findElement(Pet.qty).sendKeys("1");
  await Pet.click(Pet.updateCartBtn);
  let response = await Pet.getText(Pet.subError);
  expect(response).toBe("Item not in stock");
});

test("The icons functionality", async () => {
  await Pet.click(Pet.lizardBtn);
  let value = await Pet.driver.getCurrentUrl();
  expect(value).toBe(Pet.url);
});

test("The search bar functionality", async () => {
  await Pet.click(Pet.searchBtn);
  let response = await Pet.getText(Pet.subError);
  expect(response).toBe("Field required");
});

afterAll(async () => {
  await Pet.driver.quit();
});
