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

// Number 8 //

console.log(
  products.forEach((item) => item.product),
  products.filter((item) => item.product.length <= 5),
  products
    .filter((item) => item.price !== "" && !isNaN(Number(item.price)))
    .reduce((total, item) => total + Number(item.price), 0),
  products.reduce((acc, item) => acc + (acc ? ", " : "") + item.product, "")
);
