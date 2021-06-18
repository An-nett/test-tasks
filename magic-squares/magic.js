// Функция создает двумерный массив заданной размерности (либо пустой, либо со значениями от 1 до n^2)
function makeArray(n, isEmpty) {
    let num = 1;
    let madeArray = [];
    for (let i = 0; i < n; i++) {
        madeArray[i] = [];
        for (let j = 0; j < n; j++) {
            if (!isEmpty) {
                madeArray[i][j] = num;
                num++;
            }
            else madeArray[i][j] = 0;   
        }
    }
    return madeArray;
}

// Заполнение пустого массива значениями из созданного
function fill(n) {

    let initialArray = makeArray(n);
    let arrayToFill = makeArray(n, true);

    let start = 0;
    let decrease = Math.floor(n / 2);
    let colStart = decrease;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            if (start < 0) start += n;
            if (colStart < 0) colStart += n;
            arrayToFill[i][j] = initialArray[start][colStart];
            start = start - decrease;
            colStart = colStart - decrease;
        }

        start = start + decrease + 1;
        colStart = colStart + decrease;
    }

    console.log(arrayToFill);
    
    check(n, arrayToFill);
}

// Функция для проверки правильности построения
function check(n, array) {

    let rowSums = [];
    let colSums = [];

    for (let i = 0; i < n; i++) {
        let sum = array[i].reduce((sum, current) => sum + current, 0);
        rowSums[i] = sum;
    }

    for (let j = 0; j < n; j++) {
        let colSum = 0;
        for (let i = 0; i < n; i++) {
            colSum += array[i][j];
        }
        colSums[j] = colSum; 
    }

    for (let n = 1; n < rowSums.length; n++) {
        if (rowSums[n] !== rowSums[n - 1] || colSums[n] !== colSums[n - 1]) {
            console.log('The square is not magic!');
        }
    }
}

// Вызов функции с заданным значением
fill(5);















