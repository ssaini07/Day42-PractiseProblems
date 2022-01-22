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
});

//UC2 => User need to enter a valid email address

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
email.addEventListener('input', function() {
    let emailRegex = RegExp('^[a-z.+_-]+[.a-z0-9]*@[a-z0-9]+[.a-z]+[.a-z0-9]*$');
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "Entered email is not correct";
    }
});

//UC3 => User need to follow a pre-defined mobile format
const tel = document.querySelector("#tel");
const telError = document.querySelector(".tel-error");
tel.addEventListener('input', function() {
    let telRegex = RegExp('^([0-9]{2}\\s)?[0-9]{10}$');
    if (telRegex.test(tel.value)) {
        telError.textContent = "";
    } else {
        telError.textContent = "Entered phone number is not correct";
    }
});

//UC4 => User need to follow pre-defined password rules
const pass = document.getElementById("#pwd");
const passError = document.querySelector(".password-error");
pass.addEventListener('input', function() {
    let passwordRegex = RegExp('^[a-z0-9]{8,}$');
    if (passwordRegex.test(pass.value)) {
        passError.textContent = "";
    } else {
        passError.textContent = "Entered password is not correct";
    }
})