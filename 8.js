function expandedForm(num) {
    let strNum = String(num);
    let result = [];

    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] !== '0') {
            let value = strNum[i] + '0'.repeat(strNum.length - i - 1);
            result.push(value);
        }
    }

    return result.join(' + ');
}