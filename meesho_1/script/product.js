// let api = "https://fakestoreapi.in/api/products";
// let product_container = document.querySelector(".product-container")

// const product = async()=>{
//   let res = await fetch(api);
//   // console.log(res);
//   let data = await res.json();
//   // console.log(data);
//   display(data)
// }
// product();

// const display = ()=>{
// data.map((el)=>{
// let Title = document.createElement("h1");
// console.log(Title);

// })

// }

let api = "https://fakestoreapi.in/api/products";
let product_container = document.querySelector(".product-container");
console.log(product_container);

product_arr = [];
const product = async () => {
  try {
    let res = await fetch(api);
    // console.log(res);
    let data = await res.json();
    // console.log(data);
    
    display(data);
  } catch (error) {
    console.log("Error fetching products:", error);
    
  }
};

product();

const display = (data) => {
  data.map((el) => {
    let Title = document.createElement("h1");
    console.log(Title);
    
    Title.textContent = el.title; 
    product_arr.push(Title);
    product_container.append(product_arr);
  });
};
