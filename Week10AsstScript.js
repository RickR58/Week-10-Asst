/* Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit. */

/* What do I need?
Button on-click should add info to table
how do I get it from the <input> fields and the value()
Need the header information names, etc
How are we getting the values from the form -- on submit -- then append() that infor to the talbe.
Need to get balues with : getElementById( )
*/

// LEFT OFF AT 15:25

const formButton = document.getElementById("formSubmit");
let number = 0;

formButton.addEventListener("click", (event) => {
  event.preventDefault(); //keeps fields from refreshing on submit
  console.log(event);

  // Variables to hold in form
  let newDogsName = document.getElementById("newDogsName").value;
  let breedX = document.getElementById("breedX").value;
  let nickname = document.getElementById("nickname");
  let rescueShelter = document.getElementById("rescueShelter").value;
  let dogAge = document.getElementById("dogAge").value;

  //Append Rows
  let newTableRow = document.createElement("tr");

  let numberNode = document.createElement("td");
  numberNode.innerHTML = number;
  newTableRow.append(numberNode);

  let dogsNameNode = document.createElement("td");
  dogsNameNode.innerHTML = newDogsName;
  newTableRow.append(dogsNameNode);

  let breedXNode = document.createElement("td");
  breedXNode.innerHTML = breedX;
  newTableRow.append(breedXNode);

  let nicknameNode = document.createElement("td");
  nicknameNode.innerHTML = nickname;
  newTableRow.append(nicknameNode);

  let rescueShelterNode = document.createElement("td");
  rescueShelterNode.innerHTML = rescueShelter;
  newTableRow.append(rescueShelterNode);

  let dogAgeNode = document.createElement("td");
  dogAgeNode.innerHTML = dogAge;
  newTableRow.append(dogAgeNode);

  console.log(newTableRow);

  document.getElementById("tbody").appendChild(newTableRow);
});
