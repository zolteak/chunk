const chunk = (mass, size) => {
    let temporaryMass = [];
    let finalMass = [];
    let j = 0;
    
    for(let i = 0; i < mass.length; i += 1) {
        temporaryMass[j] = mass[i];
        
        if ((i + 1) % size === 0) {
            finalMass.push(temporaryMass);
            temporaryMass = [];
        }
        if (mass.length % size !== 0 && i === mass.length - 1) {
            finalMass.push(temporaryMass);
        }
        j = j + 1;
        if (j === size) {
            j = 0;
        }
    }
    return finalMass;
};

exports.chunk = chunk;
