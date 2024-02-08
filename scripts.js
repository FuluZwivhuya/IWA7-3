const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

//parseInt has a tendency of rounding off whereas Parsefloat accomodates decimals
const sarahName1 = sarahName.trimEnd();
const leoSurname1 = leoSurname.trimEnd();

const leoConvert = parseInt(leoBalance * -1).toFixed(2);
const sarahConvert = parseFloat(sarahBalance * -1).toFixed(2);
const newAmount = parseFloat(leoConvert) + parseFloat(sarahConvert);

const owed = newAmount.toFixed(2);

const leo = `${leoName} ${leoSurname1}(Owed : R${leoConvert})`;
const sarah = `${sarahName1} ${sarahSurname}(Owed : R${sarahConvert})`;
const total = "Total amount owed: ";

const formatAmount = newAmount.toLocaleString("en-ZA", {
  style: "currency",
  currency: "ZAR",
});
const result = `${leo}\n${sarah}\n${divider}\n${total}${formatAmount}\n${divider}`;
console.log(result);

/*const leoBalanceA =-parseInt(leoBalance);
const sarahBalanceA =-parseFloat(sarahBalance);
const leoConvert = (leoBalanceA.toFixed(2));
const sarahConvert = (sarahBalanceA.toFixed(2));
const newAmount = parseFloat(leoConvert) + parseFloat(sarahConvert);
console.log (newAmount)

const owed = (newAmount.toFixed(2));

//console.log('R', parseInt(leoBalance) + parseFloat(sarahBalance));
const leo = `${leoName} ${leoSurname}(Owed : R${-parseInt(leoBalance).toFixed(2)})`;

const sarah = `${sarahName}${sarahSurname}(Owed : R${-parseFloat(sarahBalance).toFixed(2)})`;

const total = "Total amount owed: ";
const { format } = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  });

const result = `${leo}\n${sarah}\n${divider}\n${total}${format(owed)}\n${divider}`;

console.log(result)*/
