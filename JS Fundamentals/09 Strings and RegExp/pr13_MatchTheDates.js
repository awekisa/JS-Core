function getAllDates(input){
    let arrDates = [];
    for (let line of input){
        let lineArr = line.match(/\b([\d]{1,2}-[A-Z]{1}[a-z]{2}-[\d]{4})\b/g);
    arrDates.push.apply(arrDates, lineArr);
    }
    arrDates.forEach(function(e){
        let arr = e.split('-');
        console.log(e + ` (Day: ${arr[0]}, Month: ${arr[1]}, Year: ${arr[2]})`);
        });
}

getAllDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
'My father is born on the 29-Jul-1955.'])