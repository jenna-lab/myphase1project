etch("http://localhost:3000/types")
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