/*
Name: Yaneli Castillo
Date Created: April 8th, 2025
Version: 3
Description: Homework 3 - MIS 3371
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

//DOB validation js code
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date can't be more than 100 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

//SSN validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

//validate first name
function validateFname() {
    let fname = document.getElementById("fname").value;
    const namePattern = /^[A-Z]+$/;

    fname = fname.toUpperCase();
    document.getElementById("fname").value = fname;

    if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "First name must be more than a single letter";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

//validate last name
function validateLname() {
    let lname = document.getElementById("lname").value;
    const namePattern = /^[A-Z]+$/;

    lname = lname.toUpperCase();
    document.getElementById("lname").value = lname;

    if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Last Name must be more than a single letter";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

//validate middle initial
function validateMi() {
    let mini = document.getElementById("mi").value;
    const namePattern = /^[A-Z]+$/;

    mi = mi.toUpperCase();
    document.getElementById("mi").value = mi;

    if (!mi.match(namePattern)) {
        document.getElementById("mi-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mi-error").innerHTML = "";
        return true;
    }
}

//zip code validation js code
function validateZipc() {
    const zipInput = document.getElementById("zipc");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("cipc-error").innerHTML = "Zip Code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "_" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zipc-error").innerHTML = "";
    return true;
}

//validate city
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//validate email js code
var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail() {
    var emailInput = document.getElementById("email").value;

    if (emailInput.trim() === "") {
        alert("Email cannot be blank.");
        return false;
    } else if (!emailR.test(emailInput)) {
        alert("Please enter a valid email address.");
        return false;
    } else {
        return true;
    }
}

//validate phone number js code
function validatePhone() {
    var phoneInput = document.getElementById("phone");
    var phoneValue = phoneInput.value.replace(/\D/g, "");

    if (phoneValue === "") {
        alert("Phone number cannot be blank.");
        return false;
    } else if (phoneValue.length !== 10) {
        alert("Enter a valid 10-digit phone number.");
        return false;
    } else {
        var formatted = phoneValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        phoneInput.value = formatted;
        return true;
    }
}

//user id validation js code
function validateUid() {
    uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = "User ID can only have letters, numbers, underscores and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

//password validation js code
function validatePassword() {
    const pword = document.getElementById("pwd").value;
    const uid = document.getElementById("uid").value;
    const errorMessage = [];

    if (!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }

    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }

    if (!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number");
    }

    if (!pword.match(/[!@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }

    if (pword.toLowerCase().includes(uid.toLowerCase())) {
        errorMessage.push("Password can't contain user ID");
    }

    if (errorMessage.length > 0) {
        document.getElementById("pwd-error").innerHTML = errorMessage.join("<br>");
        return false;
    } else {
        document.getElementById("pwd-error").innerHTML = "";
        return true;
    }
}

//stop form from submitting js code
document.getElementById("patient-form").addEventListener("submit", function(event) {
    if (!validateUid() || !validatePassword()) {
        event.preventDefault(); 
    }
});

//confirm pwd validation js code
function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

//review button js code
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//remove review data js code
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//alert box js code
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

//validate everything
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }