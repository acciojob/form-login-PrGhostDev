function getFormvalue() {
    //Write your code here
    let first = document.getElementById('first');
    let last = document.getElementById('second');

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