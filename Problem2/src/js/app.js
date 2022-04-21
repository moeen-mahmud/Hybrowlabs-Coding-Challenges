// Random Number Function
const randomizeNumber = (minNumber, maxNumber) =>
  parseInt(Math.random() * (maxNumber - minNumber)) + minNumber;

const endpoint = "https://swapi.dev/api/people/";
const dataTable = document.getElementById("data-table");
const addButton = document.getElementById("add-button");

const fetchPeople = async () => {
  addButton.setAttribute("disabled", true);
  let generatedPeople = [];
  try {
    const response = await fetch(`${endpoint}${randomizeNumber(1, 11)}`);
    const data = await response.json();
    generatedPeople.push(data);
    displayPeople(generatedPeople);
    console.log(generatedPeople);
    addButton.removeAttribute("disabled");
  } catch (err) {
    console.log(err.message);
  }
};

const displayPeople = (peopleArray) => {
  if (peopleArray?.length !== 0) {
    peopleArray?.forEach((people) => {
      const id = people?.homeworld;
      const peopleName = people?.name;

      const tableBody = document.createElement("tr");
      tableBody.setAttribute("id", id + peopleName);

      tableBody.innerHTML = `
          <td>${peopleName}</td>
          <td>
            <button onclick="deletePeople('${id + peopleName}')" 
              type="button"
            >
              Delete
            </button>
          </td>
      `;

      dataTable.appendChild(tableBody);
    });
  }
};

const deletePeople = (id) => {
  return document.getElementById(id).remove();
};
