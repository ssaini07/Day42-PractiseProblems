//UC1 => First name starts with cap and minimum 3 characters.
const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
text.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "Sorry name is incorrect";
    }
})