
const String = "abccbgghttdghj";
let longestSubstring = "";
let currentSubstring = "";

for (let i = 0; i < String.length; i++) {
  const currentChar = String[i];
  const charIndex = currentSubstring.indexOf(currentChar);

  if (charIndex === -1) {
    // Ký tự chưa xuất hiện trong chuỗi con tạm thời
    currentSubstring += currentChar;
  } else {
    // Ký tự đã xuất hiện, cập nhật chuỗi lớn nhất nếu cần
    if (currentSubstring.length > longestSubstring.length) {
      longestSubstring = currentSubstring;
    }
    // Cắt chuỗi con tạm thời để bắt đầu từ vị trí sau của ký tự trùng
    currentSubstring = currentSubstring.slice(charIndex + 1) + currentChar;
  }
}

// Kiểm tra và cập nhật lại chuỗi lớn nhất sau khi kết thúc vòng lặp
if (currentSubstring.length > longestSubstring.length) {
  longestSubstring = currentSubstring;
}

console.log(longestSubstring); // In ra chuỗi lớn nhất
