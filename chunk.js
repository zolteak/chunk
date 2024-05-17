const chunk = (array, size) => {
    let aT = [];
    let aF = [];
    let j = 0;
    for(let i = 0; i < array.length; i += 1) {
        aT[j] = array[i];
        if ((i + 1) % size === 0) {
            aF.push(aT);
            aT = [];
        }
        if (array.length % size !== 0 && i === array.length - 1) {
            aF.push(aT);
        }
        j = j + 1;
        if (j === size) {
            j = 0;
        }
    }
    return aF;
};

exports.chunk = chunk;