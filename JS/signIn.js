const emailInput= document.querySelector('#emailInput');

function CheckEmail(event) {
    event.preventDefault();
    console.log("11111111");
}

emailInput.addEventListener("submit",CheckEmail);