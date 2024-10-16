function itemInCommon(arr1, arr2) {
    const mapFromArr1 = new Map();

    for (let i = 0; i < arr1.length; i++) {
        if (!mapFromArr1.has(arr1[i])) {
            mapFromArr1.set(arr1[i], 1)
        } else {
            mapFromArr1.set(arr1[i], mapFromArr1.get(arr1[i]) + 1)
        }
    }

    for(let i = 0; i < arr2.length; i++) {
        if (mapFromArr1.has(arr2[i])) {
            return true;
        }
    }
    return false;
}

console.log(itemInCommon([1, 1, 3, 5], [2, 4]))
