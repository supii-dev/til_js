// 데이터 서버에 자료를 호출함
function getData(api = "posts") {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/photos${api}`);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        // 성공
        resolve(xhr.response);
      } else if (xhr.status === 404) {
        // 실패
        reject();
      } else if (xhr.status === 505) {
        console.log("서버가 불안정합니다. 잠시 후 재접속해주세요.");
      }
    };
  });
}

getData("posts")
  .then(function (data) {})
  .catch(function (err) {}); // then(성공할때).catch(실패할때)

getData("posts").then().catch(); // 함수call
getData("comments").then().catch();
getData("albums").then().catch();
getData("photos").then().catch();
getData("todos").then().catch();
getData("users").then().catch();
