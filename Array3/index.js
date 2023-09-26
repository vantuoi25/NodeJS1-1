// Bài 1: Tính tổng tiền thanh toán của giỏ hàng sau
const cart = [
    {
      title: "DẾ MÈN PHIÊU LƯU KÝ",
      price: 50000,
      quantity: 2,
    },
    {
      title: "KIM ĐỒNG",
      price: 40000,
      quantity: 7,
    },
    {
      title: "NGỌN LỬA ĐÊM BA MƯƠI",
      price: 21000,
      quantity: 4,
    },
    {
      title: "CÔ BÉ GANH TỊ",
      price: 27500,
      quantity: 5,
    },
  ];
  const reducing = cart.reduce((pre, curr) =>{
    return curr.price * curr.quantity;
  })
// console.log(reducing);

// Bài 2: Nhóm các cầu thủ theo quốc gia
const team = [
    { name: "Công Phượng", country: "Việt Nam" },
    { name: "Ronaldo", country: "Portugal" },
    { name: "Quang Hải", country: "Việt Nam" },
    { name: "Messi", country: "Argentina" },
    { name: "Nani", country: "Portugal" },
  ]
  const group_by_country = team.reduce((pre, curr) =>{
    if(!pre[curr.country]){
      pre[curr.country] = [];
    }
    pre[curr.country].push(curr.name);
    return pre;
  },{});
    
  // console.log(group_by_country);
  // kết quả:
  // {
  //   'Việt Nam': [
  //     { name: 'Công Phượng', country: 'Việt Nam' },
  //     { name: 'Quang Hải', country: 'Việt Nam' }
  //   ],
  //   Portugal: [
  //     { name: 'Ronaldo', country: 'Portugal' },
  //     { name: 'Nani', country: 'Portugal' }
  //   ],
  //   Argentina: [ { name: 'Messi', country: 'Argentina' } ]

  
// Bài 3: Gom các object của posts thành mảng posts
const topics = [
    {
      topic: "ReactJS",
      posts: [
        { postID: "id1", title: "title1" },
        { postID: "id2", title: "title2" },
      ],
    },
    {
      topic: "Vue.js",
      posts: [
        { postID: "id3", title: "title3" },
        { postID: "id4", title: "title4" },
      ],
    },
  ];
const array = topics.reduce((acc,curr) =>{
  return acc.concat(curr.posts);
},[]);
// console.log(array);
  // kết quả:
  // [
  //   { postID: 'id1', title: 'title1' },
  //   { postID: 'id2', title: 'title2' },
  //   { postID: 'id3', title: 'title3' },
  //   { postID: 'id4', title: 'title4' }
  // ]


  
// // Bài 4: Tính tổng và tích của mảng
const arr = [49, 30, 19, 2, 29];
const Accumulation = arr.reduce((t, v) => t+v, 0);
const Multiplication = arr.reduce((t, v) => t*v, 1);
// console.log(Accumulation);
// console.log(Multiplication);


// // Bài 5: Tìm phần tử khác nhau giữa 2 mảng
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];
const result = arr2.reduce((pre, curr) =>{
  if(!arr1.includes(curr)){
    pre.push(curr);
  }
  return pre;
},[]);
// console.log(result);
// kết quả: [1, 4, 5, 6]


// // Bài 6: Làm phẳng mảng
const arrFlat = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// console.log(arrFlat.flat(Infinity));


// // Bài 7: Đến số lần xuất hiện các phần tử trong mảng
const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];
const k = arrCount.reduce((acc, curr) =>{
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
// console.log(k);
// // kết quả: { '1': 1, '2': 4, '3': 2, '4': 2, '5': 1, '7': 1, '8': 2 }


//cho 1 chuỗi, VD: "jflsweoi234rgjodfnkwhr5igofsflksfjkfd" 
//đếm số lần xuất hiện của từng ký tự

const chuoi = `jflsweoi234rgjodfnkwhr5igofsflksfjkfd`
const reduce_of_chuoi = chuoi.reduce(values =>{
  chuoi[values] = (chuoi[values] || 0) + 1;
  return values;
},[])
console.log(reduce_of_chuoi);