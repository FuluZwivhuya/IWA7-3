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
const leo = `${leoName} ${leoSurname}(Owed : R${-parseInt(leoBalance).toFixed(2)})`;
const sarah = `${sarahName}${sarahSurname}(Owed : R${-parseFloat(sarahBalance).toFixed(2)})`;
const total = "Total amount owed:";
const result = `${leo}\n${sarah}\n${divider}\n${total}${owed}\n${divider}`

console.log(result);