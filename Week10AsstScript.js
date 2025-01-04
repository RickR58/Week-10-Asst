/* Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit. */

/* What do I need?
Button on-click should add info to table
how do I get it from the <input> fields and the value()
Need the header information names, etc
How are we getting the values from the form -- on submit -- then append() that infor to the talbe.
Need to get values with : getElementById( )
*/

const formButton = document.getElementById("formSubmit");
let number = 0 + 1;

formButton.addEventListener("click", (event) => {
  event.preventDefault();

  let newDogsName = document.getElementById("newDogsName").value;
  let breedX = document.getElementById("breedX").value;
  let nickname = document.getElementById("nickname").value; // Get the value here
  let rescueShelter = document.getElementById("rescueShelter").value;
  let dogAge = document.getElementById("dogAge").value;

  let newTableRow = document.createElement("tr");

  let numberNode = document.createElement("td");
  numberNode.textContent = number; // Use textContent for plain text
  newTableRow.append(numberNode);

  let dogsNameNode = document.createElement("td");
  dogsNameNode.textContent = newDogsName;
  newTableRow.append(dogsNameNode);

  let breedXNode = document.createElement("td");
  breedXNode.textContent = breedX;
  newTableRow.append(breedXNode);

  let nicknameNode = document.createElement("td");
  nicknameNode.textContent = nickname; // Use the value of nickname
  newTableRow.append(nicknameNode);

  let rescueShelterNode = document.createElement("td");
  rescueShelterNode.textContent = rescueShelter;
  newTableRow.append(rescueShelterNode);

  let dogAgeNode = document.createElement("td");
  dogAgeNode.textContent = dogAge;
  newTableRow.append(dogAgeNode);

  document.getElementById("tbody").appendChild(newTableRow);

  number++;

  //Clear form inputs:
  document.getElementById("newDogsName").value = "";
  document.getElementById("breedX").value = "";
  document.getElementById("nickname").value = "";
  document.getElementById("rescueShelter").value = "";
  document.getElementById("dogAge").value = "";
});
