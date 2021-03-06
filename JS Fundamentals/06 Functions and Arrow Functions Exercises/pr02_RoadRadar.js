function roadRadar([speed, area]){
    speed = Number(speed);
    let limit = "";



    let checkIfSpeeding = function(speed, limit) {
        let diff = speed - limit;
        if (diff > 0 && diff <= 20) return 'speeding';
        else if (diff > 20 && diff <= 40) return 'excessive speeding';
        else if (diff > 40) return 'reckless driving';
        else return "";
    }

    let checkLimit = function(area){
        switch (area){
            case 'motorway': return 130; break;
            case 'interstate': return 90; break;
            case 'city': return 50; break;
            case 'residential': return 20; break;
            default: break;
        }
    }

    limit = checkLimit(area);

    let result = checkIfSpeeding(speed, limit);
    console.log(result);
}

roadRadar([500, 'residential']);