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
