console.log("Welcome to Form Validation");

const uname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pin = document.getElementById('pin');

// console.log(uname, email, phone, password, cpassword, city, state, pin);

uname.addEventListener('blur', () => {
    // console.log("name is blur");
    const regex = /^[a-zA-Z]([a-zA-Z][ ]{0,1}){4,15}[a-zA-Z]$/; // Name can contain 5 to 15 characters and small or capital aphabet.(Must Start with alphabet ends with alphabet no more than 1 consecutive white spaces)

    let str = uname.value;
    // console.log(str);
    if (regex.test(str)) {
        uname.classList.remove('is-invalid');
        uname.classList.add('is-valid');
    }
    else {
        uname.classList.add('is-invalid');
    }
});


email.addEventListener('blur', () => {
    // console.log("email is blur");
    // const regex = //;
    const regex = /^([_\.\-0-9a-zA-Z]+)@([\_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;

    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
    else {
        email.classList.add('is-invalid');
    }
});


phone.addEventListener('blur', () => {
    // console.log("phone is blur");
    const regex = /[0-9]{10}/; // must contain only 10 digits.
    let str = phone.value;

    if (regex.test(str)) {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
    }
    else {
        phone.classList.add('is-invalid');
    }

});


password.addEventListener('blur', () => {
    // console.log("password is blur");
    const regex = /(?=.*?[A-Z])/;
    let str = password.value;

    if (regex.test(str)) {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
    else {
        password.classList.add('is-invalid');
    }
});


cpassword.addEventListener('blur', () => {
    // console.log("cpassword is blur");
    let pass = password.value;
    let cpass = cpassword.value;
    if (pass == cpass) {
        cpassword.classList.remove('is-invalid');
        cpassword.classList.add('is-valid');
    }
    else {
        cpassword.classList.add('is-invalid');
    }
});


city.addEventListener('blur', () => {
    // console.log("city is blur");
    const regex = /^[A-Z]([ ]{0,1}[A-Za-z]){5,20}$/;
    let str = city.value;

    if (regex.test(str)) {
        city.classList.remove('is-invalid');
        city.classList.add('is-valid');
    }
    else{
        city.classList.add('is-invalid');
    }
});


state.addEventListener('blur', () => {
    // console.log('State is blur');
    const regex = /^[A-Z]([ ]{0,1}[A-Za-z]){5,20}$/;
    let str = state.value;

    if (regex.test(str)) {
        state.classList.remove('is-invalid');
        state.classList.add('is-valid');
    }
    else{
        state.classList.add('is-invalid');
    }
});


pin.addEventListener('blur', () => {
    // console.log("pin is blur");
    const regex = /^[0-9]([0-9]){5}/;
    let str = pin.value;

    if(regex.test(str)){
        pin.classList.remove('is-invalid');
        pin.classList.add('is-valid');
    }
    else{
        pin.classList.add('is-invalid');
    }
});