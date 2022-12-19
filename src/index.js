// const baseURL = `https://api.sampleapis.com/coffee/hot`;
// fetch(baseURL)
//   .then((resp) => resp.json())
//   .then((data) => displayData(data));

// function displayData(data) {
//   const container = getElementByClassName("container");
//   const preElement = document.createElement("pre");
//   const textNode = document.createTextNode(JSON.stringify(data, null, 2));
//   preElement.appendChild(textNode);
//   container.appendChild(preElement);
// }

fetch("https://api.sampleapis.com/coffee/hot")
  .then((resp) => resp.json())
  .then((types) => renderTypes(types));

const renderTypes = (types) => {
  // console.log(types);
  const typesList = document.getElementById(`types-list`);
  //displaying list in the browser
  types.forEach((type) => {
    const li = document.createElement("li");
    li.innerText = type.title;
    typesList.append(li);
    li.addEventListener(`click`, () => renderCoffeeDetails(type));
  });
};

const renderCoffeeDetails = (type) => {
  console.log(type);
  document.getElementById('image').src = type.image;
  document.getElementById(`title`).innerHTML = type.title;
  document.getElementById(`description`).innerHTML = type.description;
  document.getElementById(`ingredients`).innerHTML = type.ingredients;
  document.getElementById(`price`).innerHTML = type.price;
};
const button = document.getElementById(`Button`).innerHTML;

Button.addEventListener("click", () => {
  alert("Coming Right Up!");
});
const Payment = document.getElementById(`payment`).innerHTML;
payment.addEventListener("click", () => {
  prompt("ENTER PAYMENT METHOD");
});
