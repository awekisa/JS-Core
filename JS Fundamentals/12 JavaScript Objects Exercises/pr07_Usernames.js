function usernames(input){
    let set = new Set();
    input.sort((e1, e2) => sortByLength(e1, e2)).forEach(e => set.add(e));

    set.forEach(e => console.log(e));

    function sortAlphabetical(s1, s2){
        return s1.localeCompare(s2);
    }

    function sortByLength(s1, s2){
        let result = s1.length - s2.length;
        return (result != 0)? result : sortAlphabetical(s1, s2);
    }
}

usernames([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot',
    '1',
    '2',
    '3',
    '0'
])