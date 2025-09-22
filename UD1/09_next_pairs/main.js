const assert = require('assert').strict;

function nextPairs(value) 
{
    let parMayor = value + 1;
    let parMenor = value - 1;

    if(parMayor%2 ===1){parMayor +=1}
    if(parMenor%2 ===1){parMenor -=1}
    
    return [parMenor, parMayor]
}

assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])

console.log('test ok');