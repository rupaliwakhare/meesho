// let cartItemsContainer = document.getElementById("cart-items");
// let totalPriceEl = document.getElementById("total-price");

// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let total = 0;
//  const mobile = localStorage.getItem("userMobile");

//  if (!mobile) {
//    // User not logged in, redirect to signup
//    window.location.href = "signup.html"; // ✅ Replace with your actual signup page
//  }
// cart.forEach((item, index) => {
//   let div = document.createElement("div");
//   div.className = "cart-item";

//   let quantity = item.quantity || 1;
//   let itemTotal = Math.floor(item.price) * quantity;
//   total += itemTotal;

//   div.innerHTML = `
//     <img src="${item.image}" />
//     <h3>${item.title}</h3>
//     <p>₹${Math.floor(item.price)} x ${quantity} = ₹${itemTotal}</p>
//     <button onclick="changeQty(${index}, -1)">➖</button>
//     <button onclick="changeQty(${index}, 1)">➕</button>
//     <button onclick="removeItem(${index})">🗑️</button>
//   `;

//   cartItemsContainer.append(div);
// });

// totalPriceEl.innerText = total;

// function changeQty(index, delta) {
//   cart[index].quantity += delta;
//   if (cart[index].quantity < 1) {
//     cart.splice(index, 1);
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   location.reload();
// }

// function removeItem(index) {
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   location.reload();
// }
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const mobile = localStorage.getItem("userMobile");
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");

  if (!mobile) {
    window.location.href = "signup.html";
  }

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      let quantity = item.quantity || 1;
      let itemTotal = Math.floor(item.price) * quantity;
      total += itemTotal;

      let div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.image}" />
        <h3>${item.title}</h3>
        <p>₹${Math.floor(item.price)} x ${quantity} = ₹${itemTotal}</p>
        <button onclick="changeQty(${index}, -1)">➖</button>
        <button onclick="changeQty(${index}, 1)">➕</button>
        <button onclick="removeItem(${index})">🗑️</button>
      `;
      cartItemsContainer.appendChild(div);
    });

    totalPriceEl.innerText = total;
    updateCartCount(); // Optional: update badge
  }

  function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); // 👈 Instant update
  }

  function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); // 👈 Instant update
  }

  function updateCartCount() {
    const countEl = document.getElementById("cart-count");
    if (countEl) {
      let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      countEl.textContent = totalItems;
    }
  }

  document.addEventListener("DOMContentLoaded", renderCart);