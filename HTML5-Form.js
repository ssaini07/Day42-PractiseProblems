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

//UC2 => User need to enter a valid email address

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
email.addEventListener('input', function() {
    let emailRegex = RegExp('^[a-z.+_-]+[.a-z0-9]*+@[a-z0-9]+[.a-z]+[.a-z0-9]*$');
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "Entered email is not correct";
    }
})
