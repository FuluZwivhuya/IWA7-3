const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const newAmount = -parseInt(leoBalance) + -parseFloat(sarahBalance);//parseInt has a tendency of rounding off whereas Parsefloat accomodates decimals
const owed =`R ${newAmount.toFixed(2)}`

//console.log('R', parseInt(leoBalance) + parseFloat(sarahBalance));
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}";
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result);