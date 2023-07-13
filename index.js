// /*
// let a = 10;
// let b = 20;
// let c = a + b;
// console.log(c);

// let arr =　[
//     {
//         name: 'banh',
//         price: 1000,
//         quantity: 2
//     },
//     {
//         name: "keo",
//         price: 2000,
//         quantity: 3
//     }
// ]

// let sum = 0;
// for (let a of arr){
//     sum += a.price * a.quantity;
// }
// console.log(arr);
// */
// //let str = `hello code `
// //console.log(str.trim().length);
// //console.log(str.slice(0,2));
// //console.log(str.indexOf("co"));
// //console.log(str.lastIndexOf("co"));
// // tim kytu khong lap lai dau tien trong chuoi sau: ''aidhsdbds'
// /*let str = 'ababdioknjkl'
// for (let s of str){
//     if(str.indexOf(s) === str.lastIndexOf(s)){
//         console.log(s);
//         break;
//     }
// }*/
// // let array = [1,453,44,5,3,53]

// //function cb(a,b){
//   //  return a-b;
// //}
// //array.sort(cb)
// array.sort((a,b) => a-b);
// console.log(array);

console.log("Every day!! ");

// let str = 'tranduong';
// for ( let a of str){
//     if(str.indexOf(a) === str.lastIndexOf(a)){
//         console.log(str.indexOf(a));
//         break;
//     }
// }
 
// let str = 'aabb';
// for ( let b of str){
//     if(str.indexOf(b) === str.lastIndexOf(b)){
//         console.log(str.indexOf(b));
//     }else{
//         console.log(-1);
//         break;
//     }
// }

let listPersons = [
    {
        name: 'Hoang Duy Khanh',
        age: 18,
        gender: "boy",
    },
    {
        name: 'Le Van Nam',
        age: 60,
        gender: 'boy',
    },
    {
        name: 'Tran Chien Cong',
        age: 8,
        gender: 'boy',
    },
    {
        name: 'Bui Viet Hoang',
        age: 22,
        gender: 'boy',
    },
    {
        name: 'Pham Minh Chien',
        age: 16,
        gender: 'boy',
    },
    {
        name: 'Ngo Thi Thanh Tinh',
        age: 45,
        gender: 'girl',
    },
    {
        name: 'Nguyen Mai Huong',
        age: 8,
        gender: 'girl',
    },
    {
        name: 'Nguyen mai Phuong',
        age: 14,
        gender: 'girl',
    },
    {
        name: 'Le Van Ha',
        age: 55,
        gender: 'boy',
    }
]
// Tong so Nam
let listArray = [];
sum = 0;
for ( let i of listPersons){
if(i.gender === 'boy'){
    sum++;
};
}
listArray [sum] = {};
a = listArray.length-1;
console.log('Tong so nam la : '+ a);

// Tong so Nu
sum1 = 0;
let listArray1 = [];
for ( let a of listPersons){
 if(a.gender === 'girl'){
    sum1++;
    }
}
listArray1 [sum1] = {};
b = listArray1.length-1;
console.log('Tong so nu la : '+ b);

// Bang thong ke
sum3 = 0;
for ( let a of listPersons){
    if(a.age >= 30){
         b = sum3++;
    }else if(a.age < 18){ 
         c = sum3++;
    }else {
         d = sum3++;
    }
}
console.log('trecon : ' + c);
console.log('thanhnien : ' + d);
console.log('nguoigia : ' + b);