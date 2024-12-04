

/* grab first the id you want to manipulate*/ 
const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

/* now after you have grabbed the id with queryselector then add event listener to the 
grabbed id */

signUpBtn.addEventListener("click", ()=> {container.classList.toggle("change");});