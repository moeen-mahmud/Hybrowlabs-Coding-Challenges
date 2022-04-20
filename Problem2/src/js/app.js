// Random Number Function
const randomizeNumber = (minNumber, maxNumber) =>
  parseInt(Math.random() * (maxNumber - minNumber)) + minNumber;

const endpoint = "https://swapi.dev/api/people/";

const fetchPeople = async () => {
  try {
    const response = await fetch(`${endpoint}${randomizeNumber(1, 11)}`);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

fetchPeople();
