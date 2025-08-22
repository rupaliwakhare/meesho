let api = "https://fakestoreapi.com/products";
let product_container = document.getElementsByClassName("product-container");

const product = async () => {
  let res = await fetch(api);
  let data = await res.json();
  display(data);
};
product();

const display = (data) => {
  data.map((el) => {
    let Title = document.createElement("h1");
    Title.innerText = el.title;

    let image = document.createElement("img");
    image.src = el.image;

    let price = document.createElement("h2");
    price.innerText = "₹" + Math.floor(el.price);

    let description = document.createElement("p");
    description.innerText = el.description;

    let id = document.createElement("h1");
    id.innerText = el.id;

    let AddToCartbtn = document.createElement("button");
    AddToCartbtn.innerText = "Add To Cart";
     AddToCartbtn.addEventListener("click", function () {
       AddToCart(el);
     });

    let Div = document.createElement("div");
    Div.append(image, Title, price, AddToCartbtn);

    // ✅ Use product_container[0] and correct variable name
    product_container[0].append(Div);
  });
};
// AddToCart
// const AddToCart = (product) => {
//    let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert("Product Added To Your Cart")
    
// };
const AddToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product already exists
  let existing = cart.find((p) => p.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 }); // ✅ Yeh line add karo
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product Added To Your Cart");
};
