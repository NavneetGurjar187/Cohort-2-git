let input = document.querySelector("input");
let btn = document.querySelector("button");
let tasklist = document.querySelector(".task-list");

btn.addEventListener("click" , function(){

  if(input.value.trim() === ""){
    alert("please enter name");
    return;
  }
  
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = input.value;

  span.addEventListener("click" , function(){
    span.classList.toggle("completed");
  });

  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";

  delBtn.addEventListener("click" , function(e){
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(span)
  li.appendChild(delBtn);
  tasklist.appendChild(li);

  input.value = "";  
})