function extract(input){
    input = input.join('\n').toLowerCase();
    let arr = input.match(/\w+/g);
    let result = [];
    arr.forEach(e => {
        if (result.indexOf(e) === -1){
            result.push(e);
        }
    })
    console.log(result.join(', '))
}

extract([
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
        'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
        'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
        'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
        'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
        'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
        'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'

])
