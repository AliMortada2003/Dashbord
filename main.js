let productTable = document.querySelector("#productTable");
let btn = document.querySelector(".btns");
let log_out = document.querySelector(".log-out");
let menu = document.querySelector(".menu");
let content = document.querySelector(".content");
let section = document.querySelector(".section") ; 
let firstName= document.getElementById("firstName");
let lastName= document.getElementById("lastName");
let gmail= document.getElementById("Email");
let password= document.getElementById("password");
let opens= document.getElementById("opens");
let LGN= document.querySelector(".LGN");
let hello= document.querySelector(".hello");
let body = document.body;
//--------------------------------add new Product
addelement=function()
{
    const product = prompt("Enter Product ");
    const price = prompt ("Enter Price Of Product");
    const count = prompt ("Enter Numbers of Product");
    //cheeck if data is empty or not
    if(!(price==""||count==""||product==""))
    {
        const newRow = document.createElement("tr");
        //the row with data
        newRow.innerHTML = `
        <td>${product}</span></td>
        <td><span class="price">$${price}</td>
        <td><span class="count">${count}</span></td>
    `
    newRow.classList="tr"
    productTable.appendChild(newRow);
    }
}
//-----------------------Log
let log = function () {
    section.classList = "hide";
    LGN.classList.remove("hide");
    LGN.classList.add("LGN");
    body.classList.add("bg")
}

let login = function (){
    if(gmail.value=='alimortada@gmail.com'&&password.value==1234){
        section.classList.remove("hide");
        LGN.classList="hide";
        body.classList.remove("bg");
        hello.classList.add("hide")
        
    }
    else{
        alert("please try agin");
    }
    
}
btn.addEventListener("click",addelement);
opens.addEventListener("click",login);
log_out.addEventListener("click",log);
