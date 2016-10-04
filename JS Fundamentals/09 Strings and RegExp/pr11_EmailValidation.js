function validateEmail(input){
    let email = input[0];
    console.log((/^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/gm.test(email))? 'Valid': 'Invalid');
}

validateEmail(['Vva1lid@email.bg'])