import * as assert from "assert";
import cabbie from "cabbie-sync";

const driver = cabbie("taxirank", {
  base: "http://localhost:3000",
  debug: true,
});

driver.activeWindow.navigateTo("/");

const todoListCount = driver.activeWindow.getElement(".todo-list").getElements(".todo-item").length;
console.log(todoListCount);

const addButton = driver.activeWindow.getElement(".add-button");
addButton.mouse.click();

const textInput = driver.activeWindow.getElement("[data-qa='text']");
textInput.sendKeys("E2E test");

const createButton = driver.activeWindow.getElement("button.create");
createButton.mouse.click();

const newTodoListCount = driver.activeWindow.getElement(".todo-list").getElements(".todo-item").length;
assert(newTodoListCount === todoListCount + 1);

driver.dispose();