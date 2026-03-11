document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('myForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const submitBtn = document.getElementById('submit');


    form.addEventListener('submit', function(event){
        event.preventDefault();
            const firstPara = document.getElementById('firstPara');
            const lastPara = document.getElementById('lastPara');
            const emailPara = document.getElementById('emailPara');
            const passPara = document.getElementById('passPara');
            const pass = password.value.trim();

            firstName.value === ''?
            firstPara.textContent = 'First Name cannot be empty': firstPara.textContent = '';
       
            lastName.value === ''?
            lastPara.textContent = 'Last Name cannot be empty': lastPara.textContent = '';
        
            email.value === ''?
            emailPara.textContent = 'Email cannot be empty': emailPara.textContent = '';
        
            if (password.value === '') {
                passPara.textContent = 'Password cannot be empty';
            } else if(pass.length < 8){
                passPara.textContent = 'Password must be at least 8 characters long';
            } else {
                passPara.textContent = '';
            }
            
            firstPara.style.color = 'red';
            lastPara.style.color = 'red';
            emailPara.style.color = 'red';
            passPara.style.color = 'red';
        
            if(firstName.value !== '' && lastName.value !== '' && email.value !== '' && password.value !== '' && pass.length >= 8){
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = 'Form submitted successfully!';
            successMessage.style.color = 'green';
            form.reset();
        } else {    
        successMessage.textContent = '';        
    }
    })

})