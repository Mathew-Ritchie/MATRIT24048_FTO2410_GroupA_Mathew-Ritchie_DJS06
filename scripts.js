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

provinces.forEach((item) => console.log(item));
names.forEach((item) => console.log(item));
names.forEach((name, index) => console.log(`${name}(${provinces[index]})`));

// Number 2 //

const upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

// Number 3 //

const nameLength = names.map((name) => name.length);
console.log(nameLength);

// Number 4 //

const provincesSortAlph = provinces.sort();
console.log(provincesSortAlph);

// Number 5 //

const provincesFilterCape = provinces.filter((province) => !province.includes("Cape"));
console.log(provincesFilterCape.length);

// Number 6 //

const namesWithS = names.map((name) => {
  return name.split("").some((char) => char === "S");
});
console.log(namesWithS);

// Number 7 //

const nameProvinceObject = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(nameProvinceObject);

// Advanced //
//all in one console.log
console.log(
  // Number 1
  products.map((item) => item.product),
  // Number 2
  products.filter((item) => item.product.length <= 5),
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
