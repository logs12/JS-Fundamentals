/** Что выведется в console.log */

let a = { n: 1, };
console.log('a 1 = ', a); // Console log выводит всегда последнее значние.
let b = a;
a.x = a = { n: 2 };

console.log('a = ', a); // Question what output and why ?


/**
    Необходимо перемешать филды объекта, чтобы получилась коллекция вот в таком виде

    [
        { name: 'Vasya', size: 'xs', color: 'red' },
        { name: 'Vasya', size: 'xs', color: 'green'},
        { name: 'Vasya', size: 's', color: 'red' },
        { name: 'Vasya', size: 's', color: 'green'},
        { name: 'Kolya', size: 'xs', color: 'red' },
        { name: 'Kolya', size: 'xs', color: 'green'},
        { name: 'Kolya', size: 's', color: 'red' },
        { name: 'Kolya', size: 's', color: 'green'},
    ]
 */


const someObj = {
	name: ['Vasya', 'Kolya'],
    size: ['xs', 's'],
    color: ['red', 'green']
};

let outputArr;

function () {
	const outputArr;
    let tempObj = {};
	return Object.keys(someObj).reduce((accum, current) => {
  	if (!accum.length) {
    	someObj[current].foreach(item => {
      	accum.push({[current]: item});
      });

    } else {

    }
    someObj[current].foreach(item => {
    accum.push({[current]: item});
    });

  }, []);

}

/** Написать функцию которая позволит получить значение филда объекта по ключу вида a.b.c */

const someObj = {
  a: {
    b: {
	c: 'c'
    }
  }
}

cons key = 'a.b.c';

function getObjLey() {
   const arrKey = key.split();
   const tempObj = someObj;
   arrKey.foreach(key => {
	tempObj = someObj[key];
   });

   return tempObj;
} 


/** Найти два минимальных числа за один проход(цикл) */

const arr1 = [12,321,123,2,31,2,45,456,67];

const doubleMin = (arr) => {
    let min1, min2, buffer;

    if (arr[0] < arr[1]) {
        min1 = arr[0];
        min2 = arr[1];
    } else {
        min1 = arr[1];
        min2 = arr[0];
    }

    for (let i = 2; i < arr.length; i++) {
        if (min1 > arr[i]) {
            buffer = min1;
            min1 = arr[i];
            if (buffer < min2) {
                min2 = buffer;
            }
        } else {
            if (min2 > a[i]) {
                min2 = a[i];
            }
        }
    }
    return {
        min1,
        min2
    };
}
console.log('doubleMin = ', doubleMin(arr1));

// checkMathes([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]) === true;
// checkMathes([1, 2, 3, 4, 5], [7, 8, 9, 10, 11]) === false;

export function checkMathes(arr1, arr2) {

    var result = new Set([...arr1, ...arr2]);
    var result1 = arr1.concat(arr2);
    return result1 !== result.size;

    /* let maxArr1 = Math.max(...arr1);
    let minArr1 = Math.min(...arr1);

    let maxArr2 = Math.max(...arr2);
    let minArr2 = Math.min(...arr2);

    if(minArr2 > maxArr1 || minArr1 > maxArr2){
        return false;
    }

    let obr1 = arr1.filter(arg1 => arg1 >= minArr2 && arg1 <= maxArr2);
    let obr2 = arr2.filter(arg2 => arg2 >= minArr1 && arg2 <= maxArr1);

    let test = obr1.find(arg1 => obr2.find(arg2 => arg2 === arg1));

    return test !== undefined; */
}
checkMathes([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]);
checkMathes([1, 2, 3, 4, 5], [7, 8, 9, 10, 11]);

// creationOfString("молоко", "кол") === true;
// creationOfString("молоко", "моно") === false;
export function creationOfString(str1, str2) {}
// flatten([[[1, 2, 3], [3, 4, 5]], [12, 13]].deep.equal([1, 2, 3, 3, 4, 5, 12, 13])
export function flatten(obj) {}
// calc(2)(2)(3)((x, y) => x + y) === 7
// calc(1)(5)(2)((x, y) => x * y) === 10
// calc(16)(8)((x, y) => x / y) === 2
export function calc() {}