function hasTwoCubeSums(n) {
    let count = 0;

    for (let a = 1; a ** 3 < n; a++) {
        for (let b = a; a ** 3 + b ** 3 <= n; b++) {
            if (a ** 3 + b ** 3 === n) {
                count++;
                if (count === 2) return true; 
            }
        }
    }
    return false;
}

