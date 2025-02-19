function longest(arr, n) {
    let indexedArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        indexedArr.push({ str: arr[i], index: i });
    }

    indexedArr.sort((a, b) => b.str.length - a.str.length || a.index - b.index);

    return indexedArr[n - 1].str;
}

