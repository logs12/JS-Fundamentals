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
