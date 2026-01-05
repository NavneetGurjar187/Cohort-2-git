"use strict";

/* =======================
   DOM SELECTORS
======================= */
const form = document.querySelector(".form-container");
const cardContainer = document.querySelector(".card-container");

const nameInput = document.querySelector("#name");
const roleInput = document.querySelector("#role");
const bioInput = document.querySelector("#bio");
const photoInput = document.querySelector("#photo");

/* =======================
   DATA
======================= */
let users = [];

/* =======================
   EVENTS
======================= */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = createUserObject();
  users.push(user);

  renderUsers();
  form.reset();
});

/* =======================
   FUNCTIONS
======================= */

// 1️⃣ Create user object
function createUserObject() {
  return {
    username: nameInput.value.trim(),
    role: roleInput.value.trim(),
    bio: bioInput.value.trim(),
    photo: photoInput.value.trim()
  };
}

// 2️⃣ Remove user
function removeUser(index) {
  users.splice(index, 1);
  renderUsers();
}

// 3️⃣ Render all users
function renderUsers() {
  cardContainer.innerHTML = "";

  users.forEach((user, index) => {
    const card = createUserCard(user, index);
    cardContainer.appendChild(card);
  });
}

// 4️⃣ Create single card
function createUserCard({ username, role, bio, photo }, index) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = photo || "https://via.placeholder.com/150";
  img.alt = username;

  const nameEl = document.createElement("h3");
  nameEl.textContent = username;

  const roleEl = document.createElement("p");
  roleEl.className = "role";
  roleEl.textContent = role;

  const bioEl = document.createElement("p");
  bioEl.className = "bio";
  bioEl.textContent = bio;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => removeUser(index));

  card.append(img, nameEl, roleEl, bioEl, deleteBtn);
  return card;
}
