// Array (non-premitive/reference data type) 
// const arr = [1,2,3,4,54,545,6]
// const newArr = arr // wrong method because array connot copy like premitive data type 
// console.log('arr',arr)
// arr.push('100');
// console.log('new arr',arr)

// slice() method to copy/clone array=============

// const arr1 = ['item1','item2','item3'];
// console.log('arr1',arr1);

// let arr2 = arr1.slice(0); // fastest way to copy array
// arr1.push('nikhil');
// console.log(arr2===arr1)
// console.log('arr1',arr1);
// console.log('arr2',arr2);


// concat() method to copy/clone array=============

// const arr1 = ['item1','item2','item3'];
// console.log('arr1',arr1);

// let arr2 = [].concat(arr1);
// arr1.push('nikhil');
// console.log(arr2===arr1)
// console.log('arr1',arr1);
// console.log('arr2',arr2);

// spread operator method to copy/clone array=============

// const arr1 = ['item1','item2','item3'];
// console.log('arr1',arr1);

// let arr2 = [...arr1];//most used way 
// arr1.push('nikhil');
// console.log(arr2===arr1) 
// console.log('arr1',arr1);
// console.log('arr2',arr2);

// ***** ==== task add extra item to array 2 while copy the array 1 
// method 1=============****
// const arr1 = ['item1','item2','item3'];
// let arr2 = arr1.slice(0).concat(['item4','item5']);
// console.log('arr1',arr1);
// console.log('arr2',arr2);

// method 2=============****
// const arr1 = ['item1','item2','item3'];
// let arr2 = [].concat(arr1,['item4','item5']);
// console.log('arr1',arr1);
// console.log('arr2',arr2);
// method 3=============****
// const arr1 = ['item1','item2','item3'];
// // let arr2 = [...arr1,'item4','item5']; 
// // or
// let moreArray = ['item4','item5'];
// let arr2 = [...arr1,...moreArray]

// console.log('arr1',arr1);
// console.log('arr2',arr2);



