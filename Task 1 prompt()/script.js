//test();

let number;

while (true) {
    number = Number(prompt('Введіть 4-х значне число'));

    if (Number.isInteger(number) && number.toString().length == 4) {
        break;
    }
}

if (number % 2 == 0) {
    console.log(`Число ${number} є парним`);

    console.log(`Добуток чисел є ${productAllNumbers(number)}`);
} else {
    console.log(`Число ${number} є не парним`);

    console.log(`Сумма чисел є ${sumAllNumbers(number)}`);
}


function getArraySimpleNumbers(number) {
    const splitNumber = number.toString().split('');

    for (let i = 0; i < splitNumber.length; i++) {
        splitNumber[i] = Number(splitNumber[i]);
    }

    return splitNumber;
}

function productAllNumbers(number) {

    const arraySimpleNumbers = getArraySimpleNumbers(number);

    let result = arraySimpleNumbers[0];

    for (let i = 1; i < arraySimpleNumbers.length; i++) {
        result *= arraySimpleNumbers[i];
    }
    return result;
}

function sumAllNumbers(number) {

    const arraySimpleNumbers = getArraySimpleNumbers(number);

    let result = arraySimpleNumbers[0];

    for (let i = 1; i < arraySimpleNumbers.length; i++) {
        result += arraySimpleNumbers[i];
    }

    return result;
}

function testProductAllNumbers(number, result) {
    const test = productAllNumbers(number);
    if (test == result) {
        console.log(`Test productAllNumbers complete! Number -> ${number} and result -> ${test}`);
    } else {
        console.log(`Test productAllNumbers is not complete! Number -> ${number} and result -> ${test}`);
    }
}

function testSumAllNumbers(number, result) {
    const test = sumAllNumbers(number);
    if (test == result) {
        console.log(`Test sumAllNumbers complete! Number -> ${number} and result -> ${test}`);
    } else {
        console.log(`Test sumAllNumbers is not complete! Number -> ${number} and result -> ${test}`);
    }
}


function test() {
    console.log('TEST');

    console.log('\nTest productAllNumbers\n\n');

    testProductAllNumbers('2548',320);
    testProductAllNumbers('8478',1792);
    testProductAllNumbers('4354',240);

    console.log('\nTest sumAllNumbers\n\n');

    testSumAllNumbers('4799',29);
    testSumAllNumbers('9785',29);
    testSumAllNumbers('1473',15);
}

