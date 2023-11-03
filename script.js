// const form = document.getElementById('form');
// const username = document.getElementById('username');

// const password = document.getElementById('password');


// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };



// const validateInputs = () => {
//     const usernameValue = username.value.trim();
    
//     const passwordValue = password.value.trim();
    

//      if(usernameValue == "admin") {
//         setSuccess(username);
        
//      } else {
        
//          setError(username, 'Username is invalid');
//      }

   

//      if(passwordValue == "12345") {
//         setSuccess(password);
        
//      } else{
//         setError(password, 'password is invalid')
         
//      }
    
//      if(usernameValue == "admin" &&passwordValue == "12345" ){
//         window.location.assign("home.html");
//      }

// };

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateInputs()) {
        // If inputs are valid, navigate to another page
        window.location.href = "home.html";
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === "admin" && passwordValue === "12345") {
        // Validation passed
        return true;
    } else {
        // Validation failed
        setError(username, 'Invalid credentials');
        setError(password, 'Invalid credentials');
        return false;
    }
};
