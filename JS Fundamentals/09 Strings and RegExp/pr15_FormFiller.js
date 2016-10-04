function fill(input) {
    let username = input[0];
    let email = input[1];
    let telNumber = input[2];
    let lines = input.slice(3);

    let userReplace = /<![A-Za-z]+!>/g;
    let emailReplace = /<@[A-Za-z]+@>/g;
    let telReplace = /<\+[A-Za-z]+\+>/g;

    lines.map(function(e){
        e = e.replace(userReplace, username);
        e = e.replace(emailReplace, email);
        e = e.replace(telReplace, telNumber);
        return e;
    }).forEach(e => console.log(e));
}

fill([
    'Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    'Hello, <!username!>!',
    'Welcome to your Personal profile.',
    'Here you can modify your profile freely.',
    'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
    'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'
])