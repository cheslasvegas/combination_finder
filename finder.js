"use strict";

function combinationFinder(pass) {
    let CharArray = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k',
        'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', '-', '[', ']', '<', '>'];

    let result = '',
        count = 0,
        randomizedIndexes = [],
        beginTime = new Date().getTime();

    do {
        for (let i = 0; i < pass.length; i++) {
            let arrIndex = randomizer();
            randomizedIndexes[i] = arrIndex;
        }
        result = getResultStr(randomizedIndexes);
        if ((count % 1000) > 0) console.log(result + "  " + randomizedIndexes);
        else if
        (((count % 1000) == 0) && (count != 0)) console.log(result, '  ', randomizedIndexes);
        count++;
    } while (result != pass);

    console.log("\nFound!!! " + result);
    let elapsedTime = new Date().getTime() - beginTime;
    console.log("Time elapsed: " + (elapsedTime));

    function getResultStr(arr) {
        let res = "";
        for (let i = 0; i < arr.length; i++) {
            res = res.concat(CharArray[arr[i]]);
        }
        return res;
    }

    function randomizer() {
        while (true) {
            let res = (Math.random() * 100).toFixed(0);
            if (res >= 0 && res < CharArray.length) return res;
            else continue;
        }
    }

    return {
        password: pass,
        elapsedTime: elapsedTime,
        count: count
    };
}


module.exports = combinationFinder;





