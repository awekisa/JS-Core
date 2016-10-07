function secretData(input) {
    let replaceWord = function(w){
        return '|'.repeat(w.length);
    }

    input = input.join('\n');
    let regex = /(\*[A-Z][A-Za-z]*)(?=\s|$)|(\+[0-9-]{10})(?=\s|$)|(![A-Za-z0-9]+)(?=\s|$)|(_[A-Za-z0-9]+)(?=\s|$)/gm;
    let result = input.replace(regex, w => replaceWord(w));
    console.log(result)
}


secretData([
    'Agent *Ivankov was in the room when it all happened.*Ivankov',
    '    The person in the room was heavily armed.',
    '    Agent *Ivankov +555-49-796 had to act quick in order.',
    '    He picked up his phone +555-49-796 and called some unknown number.',
    '    I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about \"finishing work\" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...'

])