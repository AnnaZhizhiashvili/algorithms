function firstNonRepeatingChar(str) {
    if (str.length === 0) return null;
    if (str.length === 1) return str;

    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        if(!map.has(str[i])) {
            map.set(str[i], 1)
        } else {
            map.set(str[i], map.get(str[i]) + 1)
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1) return str[i]
    }
    return null;

}
console.log("Single Character:");
console.log("Input: 'a'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('a')));
console.log("---------------");
