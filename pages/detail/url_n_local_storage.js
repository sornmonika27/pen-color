// 2. URL Parameter: please get id from URL
let id = 1;

function getPen() {
  // Fetch pen colors from API
  fetch("https://pens-api.vercel.app/api/pens/" + id)
    .then((response) => response.json())
    .then((pen) => {
      const penListDiv = document.getElementById("single-pen");
      // 3. Local Storage : Save data to localStorage
      saveLocalStorageData(pen);

      const penElement = createPenElement(pen);
      penListDiv.appendChild(penElement);
    })
    .catch((error) => {
      console.error("Error fetching pen colors:", error);
    });
}

// 3. Local Storage : Save data to localStorage
function saveLocalStorageData(pen) {
  // Please implement saving local storage function
}

function createPenElement(pen) {
  const penDiv = document.createElement("div");
  penDiv.classList.add("col-3", "text-center");

  const penColorDiv = document.createElement("div");
  penColorDiv.classList.add("pen-color");
  penColorDiv.style.backgroundColor = pen.color;

  const penNameP = document.createElement("p");
  penNameP.textContent = pen.name;

  penDiv.appendChild(penColorDiv);
  penDiv.appendChild(penNameP);

  return penDiv;
}

// call function getPen
getPen();

