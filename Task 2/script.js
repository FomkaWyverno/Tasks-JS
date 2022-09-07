//test();

function returnFunction(number1, number2) {
    if (number1 > number2) {
        return 1; 
    } else if (number1 == number2) {
        return 0;
    } else {
        return -1;
    }
}

function test() {
    const number1 = getNumberPrompt('Введіть першу цифру');
    const number2 = getNumberPrompt('Введіть другу цифру');

    alert(returnFunction(number1,number2));

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

