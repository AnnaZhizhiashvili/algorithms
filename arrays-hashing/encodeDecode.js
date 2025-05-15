// code kaka lala
const encode = (strs) => {
    if(strs.length === 0) return;
    let encodedString = "";
    for(let str of strs) {
        encodedString+= str.length + '|' + str;
    }
    return encodedString;
}

// 4|neet4|code4|love3|you
const decode = (str) => {
    const decodedStrs = [];

    for(let i = 0; i < str.length; i++) {
        let j = i;
        while(str[j] !== '|') {
            j++;
        }
        let size = parseInt(str.substring(i, j))
        decodedStrs.push(str.substring(i+1, i+size))
        i = i + size;

    }

    
}

console.log(encode( ["neet","code","love","you"]))