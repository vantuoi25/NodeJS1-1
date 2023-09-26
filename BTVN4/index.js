// 1. Cho một mảng các số nguyên. Sử dụng forEach để in ra mỗi phần tử trong mảng.
const integer_array = [1,2,8,9,5,6,15];
// integer_array.forEach(index => console.log(index));

// 2. Cho một mảng các số nguyên. Sử dụng map để tạo một mảng mới chứa bình phương của mỗi số.
let a = integer_array.map(v => Math.pow(2));
console.log(a);

// 3. Cho một mảng các số nguyên. Sử dụng filter để tạo một mảng mới chứa các số lẻ.
let b = integer_array.filter(v => v % 2 == 1);
// console.log(b);

// 4. Cho một mảng các số nguyên. Sử dụng every để kiểm tra xem tất cả các số có phải là số dương không.
let c = integer_array.every(v => v%2 === 1);
// console.log(c);

// 5. Cho một mảng các số nguyên. Sử dụng some để kiểm tra xem có số âm nào trong mảng không.
let d = integer_array.some(index => index < 0);
// console.log(d);

// 6. Cho một mảng các chuỗi. Sử dụng indexOf để tìm vị trí đầu tiên của một chuỗi cụ thể trong mảng.
const chuoi =[ 'tuoi', 'hung', 'nhan', 'kien']
// console.log(chuoi.indexOf('hung'));

// 7. Cho một mảng các số nguyên. Sử dụng lastIndexOf để tìm vị trí cuối cùng của một số cụ thể trong mảng.
let f = integer_array.lastIndexOf(integer_array.length);
// console.log(f);

// 8. Cho một mảng các số nguyên. Sử dụng find để tìm số đầu tiên lớn hơn 10 trong mảng.
let g = integer_array.find(index => index > 10);
// console.log(g);

// 9. Cho một mảng các số nguyên. Sử dụng includes để kiểm tra xem số 5 có trong mảng không.
let h = integer_array.includes(5);
// console.log(h);

// 10. Cho một mảng các số nguyên. Sử dụng reduce để tính tổng của các số trong mảng.
let k = integer_array.reduce((a,b) =>{
    return a+b;
});
// console.log(k);
