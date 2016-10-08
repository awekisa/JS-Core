function jsonTable(input){
    let html = '<table>\n'
    for (let el of input){
        html += '   <tr>\n';
        let json = JSON.parse(el);
        html += '       <td>' + json.name + '</td>\n';
        html += '       <td>' + json.position + '</td>\n';
        html += '       <td>' + json.salary + '</td>\n';
        html += '   <tr>\n';
    }
    html += '</table>';
    console.log(html);
}

jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])