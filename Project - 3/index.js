let form = document.querySelector(".expense-form");
let list = document.querySelector(".expense-list");

let expense = document.querySelector("#title");
let amount = document.querySelector("#amount");
let date = document.querySelector("#date");
let totals = document.querySelector("#totalAmount")

let datas = [];

form.addEventListener("submit" , function(e){
    e.preventDefault();
    let data = {
        userExpense : expense.value,
        userAmount : amount.value,
        userDate : date.value, 
    };

    datas.push(data);
    console.log(datas);
    renderUI();
    form.reset();
});


function renderUI(){
    list.innerHTML = "";
    datas.forEach(function(data,index){
        let li = document.createElement("li");
        li.textContent = `${data.userExpense} | ${data.userAmount} | ${data.userDate}`;

        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "delete-btn";

        delBtn.addEventListener("click" , function(){
            deleteExpense(index);
        });

        li.appendChild(delBtn);
        list.appendChild(li);
    });
    calculateTotal();
}

function calculateTotal(){
    let total = 0;
    datas.forEach(function(data){
        total += Number(data.userAmount);
    });
    totals.textContent = total;
}

function deleteExpense(index){
    datas.splice(index,1);
    renderUI();
}