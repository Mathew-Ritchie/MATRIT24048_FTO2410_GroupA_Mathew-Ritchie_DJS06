// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = ["Ashwin", "Sibongile", "Jan-Hendrik", "Sifso", "Shailen", "Frikkie"];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Number 1 //

provinces.forEach((item) => console.log(item)); //iterating through provices array and logging each name.
names.forEach((item) => console.log(item)); //iterating through names array and logging each name.
names.forEach((name, index) => console.log(`${name}(${provinces[index]})`)); //iterating through names array with each names index. logging the name and using the index to log the provice with the same indext to the name.

// Number 2 //

const upperCaseProvinces = provinces.map((province) => province.toUpperCase()); //uses map() to make a new array of provices and toUpperCase() to convert each provice to all caps.
console.log(upperCaseProvinces); //logs new array of capitalised provises.

// Number 3 //

const nameLength = names.map((name) => name.length); // uses map() to create a new array and length() to convert the names to the number of letters
console.log(nameLength); // logs the new array

// Number 4 //

const provincesSortAlph = provinces.sort(); // uses .sort() to sort the provices into aphabetical order.
console.log(provincesSortAlph);

// Number 5 //

const provincesFilterCape = provinces.filter((province) => !province.includes("Cape")); // uses filter() to create a new array, exclude (!provice)  any provice that includes "Cape" in its name.
console.log(provincesFilterCape.length); //logs the number of provices in the new array

// Number 6 //

const namesWithS = names.map((name) => {
  // .map() creates a new array.
  return name.split("").some((char) => char === "S" || char === "s"); // split() turns each name into an array of letters, some() itterates over these letter arrays and sees wich names contain either a capital "S" or (||) a lowercase "s"
});
console.log(namesWithS); //logs the new array that will consist of booleans, true if containing an s, false if there is no s.

// Number 7 //

const nameProvinceObject = names.reduce((acc, name, index) => {
  //using reduce() on the names array passing the accumulator, name, and index
  acc[name] = provinces[index]; //the accumulator which is the name is equal to the provice with the same index.
  return acc; // return the accumulator
}, {}); // intial accumulator is an empty object {}.

console.log(nameProvinceObject);

// Advanced //
//all in one console.log
console.log(
  // Number 1
  products.map((item) => item.product), // create a new array using the map() method and targetting only the product in the products array.
  // Number 2
  products.filter((item) => item.product.length <= 5), //using the filter() function and .lenth to filter out the products with more than 5 characters.
  // Number 3
  products
    .filter((item) => item.price !== "" && !isNaN(Number(item.price))) // filter out empty strings && if not a number make a number
    .reduce((total, item) => total + Number(item.price), 0), // Takes filtered list of all numbers and uses reduce to get a total.

  //Number 4
  products.reduce((acc, item) => acc + (acc ? ", " : "") + item.product, ""), // uses reduce() to add all product names to one string.
  // Ternary operator used to add a ',' if there is a accumulator or
  //will set empty string if no accumulator.

  // Number 5
  `Highest: ${
    // using template literals and having all logic in ${}.
    products
      .filter((item) => item.price !== "" && item.price !== " " && !isNaN(Number(item.price))) //filter removes the products with no prices, or those that cant be converted to a number.
      .reduce(
        (acc, item) => {
          const price = typeof item.price === "string" ? Number(item.price.trim()) : item.price; // Ternary converts strings into numbers or if not a string keep item.price.
          if (acc.highest === null || price > acc.highest) {
            acc.highest = price;
            acc.highestName = item.product;
          }
          return acc;
        },
        { highest: null, highestName: "" }
      ).highestName
  }. 
  
  Lowest: ${
    products
      .filter((item) => item.price !== "" && item.price !== " " && !isNaN(Number(item.price)))
      .reduce(
        (acc, item) => {
          const price = typeof item.price === "string" ? Number(item.price.trim()) : item.price;
          if (acc.lowest === null || price < acc.lowest) {
            acc.lowest = price;
            acc.lowestName = item.product;
          }
          return acc;
        },
        { lowest: null, lowestName: "" }
      ).lowestName
  }`,
  //number 6
  Object.entries(products).reduce((acc, [index, value]) => {
    acc[index] = { name: value.product, cost: value.price };
    return acc;
  }, {})
);
