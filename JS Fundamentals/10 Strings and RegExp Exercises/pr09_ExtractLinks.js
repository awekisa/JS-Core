function extractLinks(input){
    let validLinks = [];
    let regex = /[w]{3}\.[A-Za-z0-9-]+(?:\.{1}[a-z]+)+/g
    input.forEach(line => {
        let match = regex.exec(line);
        while(match){
            validLinks.push(match[0]);
            match = regex.exec(line);
        }
    });
    validLinks.forEach(e => console.log(e));
}

extractLinks([
    'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'

])