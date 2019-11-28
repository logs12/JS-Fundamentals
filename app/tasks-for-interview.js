let a = { n: 1 };
let b = a;
a.x = a = { n: 2 };
console.log(' a = ', a); // Question what output and why ?
console.log(' a.x = ', a.x); // Question what output and why ?
/*
    Ответ, выведется: { n: 2 }
    Почему: перед присваиванием foo.x все еще была ссылка на старый foo.
    let a = { n: 1 };
    let b = a;
    a = { n: 2 };
    b.x = a;
*/


/*
const someObj = {
	name: ['Vasya', 'Kolya'],
    size: ['xs', 's'],
    color: ['red', 'green']
}; */

/* [
    { name: 'Vasya', size: 'xs', color: 'red' },
    { name: 'Vasya', size: 'xs', color: 'green'},
    { name: 'Vasya', size: 's', color: 'red' },
    { name: 'Vasya', size: 's', color: 'green'},
    { name: 'Kolya', size: 'xs', color: 'red' },
    { name: 'Kolya', size: 'xs', color: 'green'},
    { name: 'Kolya', size: 's', color: 'red' },
    { name: 'Kolya', size: 's', color: 'green'},
] */


/* let outputArr;

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
} */


/** Найти два мининальных числа за один проход(цикл) */

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

/* --- Task #1 --- */

const arrTest = [4, '5', ['e', 3, ['sf', false, ['re', {re: 12}, 're', 43], 54], 'rwd'], ['e', 5, true, [4, 6]], 54];

const expectedResult = [
    4,
    '5',
    'e',
    3,
    'sf',
    false,
    're',
    { re: 12 },
    're',
    43,
    54,
    'rwd',
    'e',
    5,
    true,
    4,
    6,
    54,
];

/**
 *  Implementation with recursive algorithm
 * @param {*} array
 * @param {*} isArray
 */
function flatten(array, isArray = false) {
    const newArray = [];
    array.forEach((item) => {
        if (Array.isArray(item) && item.length) {
            flatten(item, true);
        } else {
            newArray.push(item);
        }
    });
    return newArray;
}

/**
 *  Implementation with stack algorithm
 * @param {*} array
 * @param {*} isArray
 */

function flatten(array, isArray = false) {
    const newArray = [];
    array.forEach((item) => {
        if (Array.isArray(item) && item.length) {
            flatten(item, true);
        } else {
            newArray.push(item);
        }
    });
    return newArray;
}

console.log('flatten = ', flatten(arrTest));


/**
    Каррирование
    Написать универсальную функцию каррирующую аргументы
*/

function carry(args) {
    return carried
}
