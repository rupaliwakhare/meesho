

// for serch-container
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



let container = document.querySelector(".original-grand-img-porsion");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  container.scrollLeft += 220;
});

prevBtn.addEventListener("click", () => {
  container.scrollLeft -= 220;
});



