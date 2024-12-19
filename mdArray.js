let names = prompt("Enter names separated by commas:").split(",");
let ages = prompt("Enter ages separated by commas:").split(",").map(Number);

//Error Handling for Input Mismatch
if (names.length !== ages.length) {
    console.error("Error: The number of names and ages must be equal.");
    return;
}

let multiDimensionalArray = [names, ages];

let restructuredArray = [];
for (let i = 0; i < names.length; i++) {
  restructuredArray.push([names[i], ages[i]]);
}

console.log("Restructured array:");
restructuredArray.forEach(element => console.log(element));
