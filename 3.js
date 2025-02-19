function whatCentury(year)
{
  let num = Math.ceil(parseInt(year) / 100);
    let suffix = (num % 100 >= 11 && num % 100 <= 13) ? "th" :
                 (num % 10 === 1) ? "st" :
                 (num % 10 === 2) ? "nd" :
                 (num % 10 === 3) ? "rd" : "th";
    return `${num}${suffix}`;
}