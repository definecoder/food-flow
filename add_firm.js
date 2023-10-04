

const nextButton = document.querySelector('.next-button');
const reg_noElement = document.getElementById('reg-no');
const nameElement = document.getElementById('firm-name');
const proprietorElement = document.getElementById('proprietor');
const nomineeElement = document.getElementById('address');
const phoneElement = document.getElementById('contact-no');
const emailElement = document.getElementById('email');
const tradeLicenseElement = document.getElementById('trade-license');


nextButton.addEventListener('click', () => {

    // reg_no, name, proprietor, nominee, phone, email, trade_license, uid 

    const data = {
        reg_no: reg_noElement.value,
        name: nameElement.value,
        proprietor: proprietorElement.value,
        nominee: nomineeElement.value,
        phone: phoneElement.value,
        email: emailElement.value,
        trade_license: tradeLicenseElement.value,
        uid: 1
    }


    fetch('http://127.0.0.1:8080/createFirm', {
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
})