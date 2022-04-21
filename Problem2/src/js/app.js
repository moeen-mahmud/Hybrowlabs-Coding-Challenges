/**
 * Function that generates random number
 * @param {integer} minNumber
 * @param {integer} maxNumber
 * @returns integer
 */
const randomizeNumber = (minNumber, maxNumber) =>
  parseInt(Math.random() * (maxNumber - minNumber)) + minNumber;

// Globals
const endpoint = "https://swapi.dev/api/people/";
const dataTable = document.getElementById("data-table");
const addButton = document.getElementById("add-button");

/**
 * Function for deleting
 * @param {string} id
 */
const deletePeople = (id) => {
  return document.getElementById(id).remove();
};

/**
 * Function for fetching the people
 */
const fetchPeople = async () => {
  // Disabling the Add Button on each click to avoid overload fetching
  // or preventing repeatative clicking.
  addButton.setAttribute("disabled", true);

  // empty array for storing the peoples
  let generatedPeople = [];
  try {
    const response = await fetch(`${endpoint}${randomizeNumber(1, 11)}`);
    const data = await response.json();

    // Populated the above empty array
    generatedPeople.push(data);

    // send the data to that function
    displayPeople(generatedPeople);
  } catch (err) {
    console.log(err.message);
  } finally {
    // Finally removed the disabled attribute
    addButton.removeAttribute("disabled");
  }
};

/**
 * Function for looping through the peoples data and render them
 * in the table body
 * @param {array} peopleArray
 */
const displayPeople = (peopleArray) => {
  if (peopleArray?.length !== 0) {
    peopleArray?.forEach((people) => {
      const id = people?.homeworld;
      const peopleName = people?.name;

      const tableBody = document.createElement("tr");

      // Setting up the element with a unique id for deleting
      tableBody.setAttribute("id", id + peopleName);

      tableBody.innerHTML = `
          <td>${peopleName}</td>
          <td>
            <button class="delete-button" onclick="deletePeople('${
              id + peopleName
            }')" 
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
