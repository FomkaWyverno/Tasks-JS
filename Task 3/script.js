//test();

function numberToArrayNumbers(number) {
    const arrayNumber = new Array();

    const arraySplitNumber = number.toString().split('');

    console.log(`Lenght array is -> ${arraySplitNumber.length}`);

    for (let i = 0; i < arraySplitNumber.length; i++) {
        console.log(arrayNumber[i]);

        let numArray = [Number(arraySplitNumber[i])];

        arrayNumber.push(numArray);
    }

    console.log(arrayNumber);
}

function test() {

    const number = getNumberPrompt('Введіть число!');

    numberToArrayNumbers(number);

    function getNumberPrompt(message) {
        let result;
        while (true) {
            const promptResult = prompt(message);
            result = Number(promptResult);
            if (Number.isInteger(result) && promptResult.length != 0) {
                break;
            }
        }
        return result;
    }
}