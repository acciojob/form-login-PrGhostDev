function getFormvalue() {
    //Write your code here
    let first = document.querySelector('input[name="fname"]');
    let last = document.querySelector('input[name="lname"]');

    let firstName = first.value;
    let lastName = last.value;

    if (firstName && lastName) {
        alert(`${firstName} ${lastName}`)
    } 
	else {
        alert('Please enter both First Name and Last Name.');
    }
	return false
}