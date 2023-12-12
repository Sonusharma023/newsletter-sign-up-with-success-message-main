const button = document.getElementById("open-popup");

button.addEventListener("click", function () {
    let popupNode = document.querySelector("#popup")
    let inputvalue = document.getElementById("text");
    let overlay = popupNode.querySelector(".overlay");
    let closeBtn = popupNode.querySelector(".close-btn");

    let input_field = document.querySelector(".input-field");
    let emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let emailValue = inputvalue.value;
    if (!emailValue.match(emaiPattern)) {
        return input_field.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
    }
    input_field.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern

    document.getElementById("show").innerText = emailValue

    function closePopup() {
        return popupNode.classList.remove("active")
    }

    overlay.addEventListener("click", closePopup)
    closeBtn.addEventListener("click", closePopup)
    // return openPopup
    if(emailValue){
        inputvalue.value = "" 
    }
    return popupNode.classList.add("active")
})

