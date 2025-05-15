const originArr = ["홍길동", "고길동", "김수한무"];
const copyArr = originArr.map(function (item, index, arr) {
  // console.log(`item : ${item}, index: ${index}`);
  const tag = `<div class="user-info">${item}</div>`;
  console.log(tag);
  // 리턴해야 배열이 담깁니다.
  return tag;
});
console.log(`원본 originArr : ${originArr}`);
console.log(`복제본 copyArr : ${copyArr}`);
