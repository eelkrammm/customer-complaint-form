const submitButton = document.getElementById("submit-btn");
// complaint reason other
const complaintReasonOther = document.getElementById("other-complaint");

 const complaintDescription = document.getElementById("complaint-description-container"); 
  complaintDescription.style.display = "none"
complaintReasonOther.addEventListener("click", function(){
  if(complaintReasonOther.checked){
    complaintDescription.style = "display: flex"
  } else {
    complaintDescription.style.display = "none"
  }
})

//solution group 
const solutionDescription = document.getElementById("solution-description-container");
const otherSolutionGroup = document.getElementById("other-solution")
solutionDescription.style.display = "none";
otherSolutionGroup.addEventListener("click", function(){
solutionDescription.style.display = "flex"
})

function validateForm(){
const fullName = document.getElementById("full-name"); 
const email = document.getElementById("email"); 
const productCode = document.getElementById("product-code"); 
const orderNumber = document.getElementById("order-no"); 
const quantity = document.getElementById("quantity"); 
const complaintReason = document.querySelectorAll("input[type='checkbox']:checked"); 
const complaintTextArea = document.getElementById("complaint-description")
const solutionGroup = document.querySelectorAll("input[type='radio']:checked");
const solutionDescription = document.getElementById("solution-description"); 

let objectValidate = new Object(); 
//ensure that full-name is not empty 
if(fullName.value !== ''){
  objectValidate["full-name"] = true;
  fullName.style = "border-color: green";
} else{
  objectValidate["full-name"] = false;
  fullName.style = "border-color: red";
}
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/
if(email.value.match(regexEmail)){
  objectValidate["email"] = true;
  email.style = "border-color: green";
}else{
  objectValidate["email"] = false;
  email.style = "border-color: red";
}

const regexOrderNumber =  /^2024\d{6}$/
if(orderNumber.value.match(regexOrderNumber)){
  objectValidate["order-no"] = true;
  orderNumber.style = "border-color: green";
} else{
  objectValidate["order-no"] = false;
  orderNumber.style = "border-color: red";
}

const regexProductCode = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;
if(productCode.value.match(regexProductCode)){
  objectValidate["product-code"] = true;
  productCode.style = "border-color: green";
} else{
  objectValidate["product-code"] = false;
  productCode.style = "border-color: red";
}

if(quantity.value > 0){
  objectValidate["quantity"] = true;
  quantity.style = "border-color: green";
} else{
  objectValidate["quantity"] = false;
  quantity.style = "border-color: red"; 
}
  
let arrayComplaintReason = Array.from(complaintReason).map(function(item){
    return item.value
  })

if (arrayComplaintReason.length >= 1) {
  objectValidate["complaints-group"] = true;
  document.getElementById("complaints-group").style = "border-color: green";
}else{
  objectValidate["complaints-group"] = false;
    document.getElementById("complaints-group").style = "border-color: red";
}

  if(complaintReasonOther.checked){
  objectValidate["complaint-description"] = complaintTextArea.value.length >= 20;
  } else {
  objectValidate["complaint-description"] = true;
}

  if(objectValidate["complaint-description"]){
    document.getElementById("complaint-description").style.borderColor = "green";
  } else{
    document.getElementById("complaint-description").style.borderColor = "red";
  }


let arraySolution = Array.from(solutionGroup).map(function(item){
    return item.value
  })

let solution = arraySolution[0]
if(solution){
  objectValidate["solutions-group"] = true;
  document.getElementById("solutions-group").style = "border-color: green";
} else{
  objectValidate["solutions-group"] = false;
  document.getElementById("solutions-group").style = "border-color: red";
}

if(otherSolutionGroup.checked){
  objectValidate["solution-description"] = solutionDescription.value.length >= 20;
}

if(objectValidate["solution-description"]){
  document.getElementById("solution-description").style = "border-color: green";
}else{
  document.getElementById("solution-description").style = "border-color: red";
}

return objectValidate;
}


const input = document.querySelectorAll("input");
input.forEach(function(item){
  item.addEventListener("change", validateForm)
}
)

const textArea = document.querySelectorAll("textarea"); 
textArea.forEach(function(item){
  item.addEventListener("change", validateForm)
})

// complaint reason other


function isValid(){
let array = Object.values(validateForm())
return array.every(function(item){
  return item === true
})

}

const form = document.getElementById("form")
form.addEventListener("submit", function(event){
  event.preventDefault;
  return isValid();
})

document.querySelector("button").addEventListener("click", function(){
  console.log(validateForm())
})

