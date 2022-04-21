const findTheFrequencyOfEachCharachters = (string) => {
  // Processing the string to uppercase char for matching and convert them into an array
  const processedString = string.toUpperCase().split("");

  // This will store the frequency for each char
  let frequency = [];

  // These two loops will used to count the frequncy
  for (let i = 0; i <= processedString.length; i++) {
    // initially set the index of the frequency array to 1
    frequency[i] = 1;

    // This loop will take a char and compare them with the others
    for (let j = i + 1; j < processedString.length; j++) {
      if (processedString[i] === processedString[j]) {
        // Increment the indexing of char if they matched
        frequency[i]++;

        // By setting the processed char to undefined helped
        // to avoid consoling the duplicate char overtime
        processedString[j] = undefined;
      }
    }
  }

  // Finally this loop is used to consoling result
  for (let i = 0; i < frequency.length; i++) {
    // This condition will reduce the whitespace and undefined from being rendered
    if (processedString[i] !== " " && processedString[i] !== undefined) {
      console.log(`${processedString[i]} ${frequency[i]}`);
    }
  }
};
