

const nextButton = document.querySelector('.next-button');
const userNameElement = document.getElementById('username');
const contactNoElement = document.getElementById('contact_no');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');
const confirmPasswordElement = document.getElementById('confirm_password');





nextButton.addEventListener('click', () => {

    if (confirmPasswordElement.value != passwordElement.value) {
        alert("Password did not matched")
    }
    else {

        const data = {
            username: userNameElement.value,
            phone: contactNoElement.value,
            email: emailElement.value,
            password: passwordElement.value
        }

        console.log(data)

        fetch('http://127.0.0.1:8080/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (!response.ok) {
                alert("invalid information");
            }
        })

    }

})