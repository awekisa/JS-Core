function usernames(input){
    let users = [];

    for (let line of input){
        let nameAndRest = line.split('@');
        let userN = nameAndRest[0];
        let rest = nameAndRest[1].split('.').map(e => e.slice(0, 1)).join('');
        let final = userN + '.' + rest;
        users.push(final);
    }
    console.log(users.join(', '));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])