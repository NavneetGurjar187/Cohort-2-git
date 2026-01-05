let form = document.querySelector(".form-container");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");


const userManager = {
  users : [],
  init : function(){
    form.addEventListener("submit" , this.submitForm.bind(this));
  },
  submitForm : function(e){
    e.preventDefault();
    this.addUser();

  },
  addUser : function () {
    this.users.push({
      userName : userName.value,
      role : role.value, 
      bio : bio.value,
      photo : photo.value,
    });

    form.reset();
    this.renderUI();
    this.renderUI();
  },
  renderUI: function () {
  let cardContainer = document.querySelector(".card-container");

  // purane cards clear karo (important)
  cardContainer.innerHTML = "";

  this.users.forEach(function (user) {

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = user.photo;
    img.alt = user.userName;

    let h3 = document.createElement("h3");
    h3.textContent = user.userName;

    let roleP = document.createElement("p");
    roleP.classList.add("role");
    roleP.textContent = user.role;

    let bioP = document.createElement("p");
    bioP.textContent = user.bio;

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(roleP);
    card.appendChild(bioP);

    cardContainer.appendChild(card);
  });
},

renderUI: function () {
  let cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";

  this.users.forEach((user, index) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = user.photo;

    let h3 = document.createElement("h3");
    h3.textContent = user.userName;

    let roleP = document.createElement("p");
    roleP.classList.add("role");
    roleP.textContent = user.role;

    let bioP = document.createElement("p");
    bioP.textContent = user.bio;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    // 🔥 IMPORTANT: arrow function
    delBtn.addEventListener("click", () => {
      this.removeUser(index); // ✅ correct case
    });

    card.append(img, h3, roleP, bioP, delBtn);
    cardContainer.appendChild(card);
  });
},

removeUser: function (index) {
  this.users.splice(index, 1);
  this.renderUI();
}



}

userManager.init();