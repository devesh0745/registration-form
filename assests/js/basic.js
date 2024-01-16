console.log("js file running");

//Validation on DOB.
function validateDOB() {
    // Get the entered components of the date of birth
    const day = parseInt(document.getElementById('dobDay').value, 10);
    const month = parseInt(document.getElementById('dobMonth').value, 10);
    const year = parseInt(document.getElementById('dobYear').value, 10);

    // Create a Date object with the entered date of birth
    const dob = new Date(year, month - 1, day); // Note: Months are 0-indexed in JavaScript Dates

    // Calculate age
    const today = new Date();
    age = today.getFullYear() - dob.getFullYear();

    console.log(age)
    // Check if age is within the specified range
    if (age < 15 || age >= 99) {
        document.getElementById('dobError').innerText = 'Age must be between 15 and 98.';
        return false;
    } else {
        document.getElementById('dobError').innerText = '';
        return true;
    }
}

//Function to get all the conutries using API call
var country;
var countrySelect = document.querySelector('.country'),
stateSelect = document.querySelector('.state'),
citySelect = document.querySelector('.city')


function loadCountries() {
console.log('fetching Countries')

// fetch('https://restcountries.com/v3.1/all')
// fetch(`https://api.first.org/data/v1/countries`)
fetch(`https://countriesnow.space/api/v0.1/countries`)
// let apiEndPoint = config.cUrl
//fetch(apiEndPoint)
.then(Response => Response.json())
.then(data => {
console.log(data);

data.data.forEach(country => {
    const option = document.createElement('option')
    option.value = country.country
    option.textContent = country.country
    countrySelect.appendChild(option)  
})
})
.catch(error => console.error('Error loading countries:', error))
}
//Will get the countries o window loading.
window.onload = loadCountries()


//Checking Validations on input Fields       
function checkValidation(){
    var firstName = document.getElementById('inputFirstName').value;
    var lastName= document.getElementById('inputLastName').value;     
    var email = document.getElementById('email').value; 

document.getElementById('firstNameError').innerText = '';
document.getElementById('lastNameError').innerText = '';
document.getElementById('emailError').innerText = '';

    console.log("first name:",firstName);
    // Validate Name
    if (firstName.trim() === '' || firstName.trim==Number) {
        document.getElementById('firstNameError').innerText = 'Enter Valid Name';
        return false;
    }
    if (lastName.trim() === '' || lastName==Number) {
        document.getElementById('lastNameError').innerText = 'Enter Valid Name.';
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').innerText = 'Invalid email address.';
            return false;
    }
return true;
}

