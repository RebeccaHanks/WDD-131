function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	console.log(this.card-number.value)
	// clear any previous errors
	displayError('')
	// check credit card number
	if (isNaN(this.card-number.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.card-number.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n'
	}
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}
	return true
}


document.querySelector('#back-card').addEventListener('submit', submitHandler);
document.querySelector('#front-card').addEventListener('submit', submitHandler);

function validateDate() {
    let inputYear = parseInt(document.getElementById("card-Y").value, 10);
    let inputMonth = parseInt(document.getElementById("card-M").value, 10) - 1; // Convert to 0-based (Jan = 0)

    if (isFutureDate(inputYear, inputMonth)) {
        console.log("Valid: Date is in the future.");
    } else {
        console.log("Invalid: Date must be in the future.");
    }
}

function isFutureDate(inputYear, inputMonth) {
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth(); // 0-based

    return inputYear > currentYear || (inputYear === currentYear && inputMonth > currentMonth);
}

// Example: Call validateDate() when a button is clicked
document.getElementById("submit-1").addEventListener("click", validateDate);