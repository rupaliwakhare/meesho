// let inputsearch = document.querySelector(".inputsearch");
// let recentinput = [];
// let inputformEl = document.getElementById("inputform");
// const listofrecentEl = document.querySelector(".listofrecent");
// let listofrecenHTMLEl = "";

// inputsearch.addEventListener("keydown", () => {
//   // console.log(inputsearch);

//   if (inputsearch.value) {
//     document.getElementById("closesearch").style.display = "block";
//   } else {
//     document.getElementById("closesearch").style.display = "none";
//   }
// });

// inputformEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   recentinput.push(inputsearch.value);
//   // console.log(recentinput);

//   if (recentinput.length > 0) {
//     for (i = 0; i < recentinput.length; i++) {
//       listofrecenHTMLEl += `
//         <div class="recentitem">
//           <div class="recenticon">
//             <i class="fa-solid fa-clock-rotate-left"></i>
//           </div>
//           <p>${recentinput[i]}</p>
//         </div>
      
//       `
//     }
//     listofrecenHTMLEl.innerHTML = listofrecenHTMLEl
//   }
// });

let inputsearch = document.querySelector(".inputsearch");
let recentinput = [];
let inputformEl = document.getElementById("inputform");
const listofrecentEl = document.querySelector(".listofrecent");

inputsearch.addEventListener("keydown", () => {
  if (inputsearch.value) {
    document.getElementById("closesearch").style.display = "block";
  } else {
    document.getElementById("closesearch").style.display = "none";
  }
});

inputformEl.addEventListener("submit", (e) => {
  e.preventDefault();

  // Push current input value
  recentinput.unshift(inputsearch.value);

  // Reset HTML string
  let listofrecenHTMLEl = "";

  // Build HTML from array
  for (let i = 0; i < recentinput.length; i++) {
    listofrecenHTMLEl += `
      <div class="recentitem">
        <div class="recenticon">
          <i class="fa-solid fa-clock-rotate-left"></i>
        </div>
        <p>${recentinput[i]}</p>
      </div>
    `;
  }

  // Update DOM element
  listofrecentEl.innerHTML = listofrecenHTMLEl;

  // Optional: Clear input field after submit
  inputsearch.value = "";
  document.getElementById("closesearch").style.display = "none";
});
