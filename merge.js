const map1 = new Map([
    ["banana", 15],
    ["mango", 20],
    ["orange", 40]
    
]);
const map2 = new Map([
    ["banana", 25],
    ["mangoes", 20],
    ["oranges", 40]
]);
const mergeMap = new Map([...map1, ...map2]);
console.log(mergeMap);
