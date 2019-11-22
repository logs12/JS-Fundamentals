let a = { n: 1, };
console.log('a 1 = ', a); // Console log выводит всегда последнее значние.
let b = a;
console.log('b = ', b);
a.x = a = { n: 2 };

console.log(' a = ', a); // Question what output and why ?



const someObj = {
	name: ['Vasya', 'Kolya'],
  size: ['xs', 's'],
  color: ['red', 'green']
};

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