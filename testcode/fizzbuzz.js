let fizzBuzz = function (){
    let stop = 100;
    let fizzNum = 3;
    let buzzNum = 5;
    let curr = 1;

    let fizzed = false;
    let buzzed = false;
    let fizzBuzzed = false;

    while(curr <= stop)
    {
        fizzed = curr % fizzNum === 0;
        buzzed = curr % buzzNum === 0;

        if (fizzed && buzzed)
        {
            console.log('FizzBuzz');
        }

        if (fizzed && !buzzed)
        {
            console.log('Fizz');
        }

        if (buzzed && !fizzed)
        {
            console.log('buzz');
        }

        curr++;
    }
}

module.exports = fizzBuzz;