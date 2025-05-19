# JavaScript 기초

- 반드시 스스로 개념을 정리하셔야 합니다.
- 타인에게 특히, 초등학생에게 설명 할 정도로 쉽게 개념을 정리하시면 좋습니다.

## 1. 기초상식

- HTML5 : 웹 브라우저에 데이터를 보여주는 형식을 지정한 문법구조
- CSS3 : 데이터를 잘 보여주기 위해서 꾸며주는 용도의 문법
- JS

```
1. css 제어 : 레이아웃 변경하도록 지시
2. html 제어 : 데이터의 결과를 CRUD 하도록 지시
3. Server, DB, 데스크탑 Application 를 제어 : Node.js 로 가능함.
```

## 2. JS의 종류는 2가지

### 2.1. 웹 브라우저용 JS (Web API)

- Web API 는 웹 브라우저에 미리 기능이 만들어져 있는 JS 기능
- 주로 직접 코딩하는 것이 아니고 미리 만들어진 기능을 사용하는 것.

### 2.2. 데이터 관리 JS (ES6)

- 이전에 JS는 웹 브라우저 마다 모두 달랐다.
- 이에 대한 불편함을 해소하기 위해서 JS의 문법을 통일하였다.
- 기준이 ECMAScript 라고 하며, ES6가 가장 기준이 된다.

## 3. 실습

### 3.1. 웹 브라우저에서 JS 실행하기

- `F12` 실행 > `Console 탭`을 선택 : console 탭은 js의 `결과, 오류`를 보는 곳

```js
console.log("안녕");
```

```js
console.clear();
```

```js
alert("안녕");
```

- 1줄 이상 작성하는 경우는 `shift + Enter` 키를 입력하여야 함.

```js
console.log("안녕하세요.");
console.log("좋은 금요일입니다.");
```

### 3.2. html에서 JS 실행하기

- index.html 파일을 생성합니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
  </head>
  <body></body>
</html>
```

## 4. `JS 작성 위치` 고민하기

- `<script></script>` 태그를 지원합니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <script>
      console.log("1. 안녕");
    </script>
  </head>
  <body>
    <script>
      console.log("2. body 입니다.");
    </script>
  </body>
</html>
<script>
  console.log("3. html 끝 입니다.");
</script>
```

### 4.1. 3번자리. 즉, `html의 끝`이 좋다.

- 일반적으로 css와 html을 제어하는 것이 js의 목적이다.
- `웹 브라우저가 css와 html을 모두 읽고 난 후의 자리`

### 4.2. 1번자리. 즉, head 자리는 `기능`의 정의

- 내가 즉, 개발자가 만든 많은 `기능들`을 코딩하기 좋은 자리
- 다른 개발자가 만든 많은 `기능들`을 불러와서 사용하기 좋은 자리

## 5. JS도 외부에 파일로 만들어서 관리하자.

- js 폴더 생성
- js 폴더에 `lib.js` 파일 생성
- `js/lib.js 내용`

```js
// 커피를 출력하는 기능
function 커피머신(_msg) {
  console.log(_msg);
}
console.log("1. 안녕");
```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <script src="js/lib.js"></script>
    <!-- 자바스크립트는 외부에 보관하라 -->
  </head>
  <body>
    <script>
      console.log("2. body 입니다.");
    </script>
  </body>
</html>
<script>
  console.log("3. html 끝 입니다.");
  커피머신("아이스아메리카노");
</script>
```

# JavaScript 문법

## 1. 변수(Variables)

- 웹 브라우저에 `값 보관시 사용할 공간`

### 1.1. 필요로 한 항목들을 파악하기

#### 1.1.1. 단계 1 (필요로 한 기능에 대해서 서술 - 피그마, UI 다이어그램)

- 나는 `사용자 정보`를 입력받아서 `DB에 보관`하고 싶다.
- 사용자가 로그인을 하고 나면 사용자 정보를 화면에 출력하고 싶다.

#### 1.1.2. 단계 2 (어떤 정보를 보관할 지 결정한다. - 요구사항명세서)

```
이름, 주민번호, 전화번호, 주소(우편번호, 상세주소), 이메일, 아이디, 비밀번호, 동의체크
```

#### 1.1.3. 단계 3 (각각의 정보를 보관할 공간을 마련)

```
이름 : 글자 20자 제한
주민번호 : 글자 13자 제한
전화번호 : 글자 11자 제한
우편번호 : 글자 5자 제한
상세주소 : 글자 50자 제한
이메일 : 글자 20자 제한
아이디 : 글자 16자 제한
비밀번호 : 글자 16자 제한
동의체크 : 참/거짓 숫자 1자 제한
```

### 1.2. 각 항목에 대해서 웹 브라우저에서 임시로 보관하는 작업

#### 1.2.1. 단계 1

- 웹 브라우저 메모리 `빈 공간` 요청

```js
var
let
const
```

#### 1.2.2. `var` 라고 작성을 하면 `변수`로 인정

- `hoisting`으로 오류가 발생할 소지가 높음.
- 미리 만들지 않고 사용해도 되는 문제
- 이건 옛날 JS 버전에서만 씁니다.

```
무조건 공간에다가 undefined 라는 값을 넣어버린다.
호이스팅의 대상이 된다.
```

#### 1.2.3. `let` 라고 작성하면 `변수`로 인정

-`hoisting`의 문제를 사전에 차단한다.

- `let` 으로 작성시 미리 사용하면 오류로 알려준다.
- 수시로 내용 바뀐다.

#### 1.2.4. `const` 라고 작성하면 `상수` 로 인정

-`hoisting`의 문제를 사전에 차단한다.

- `const` 로 작성시 미리 사용하면 오류로 알려준다.
- 절대로 내용이 변하지 않는다.

#### 1.2.5. 실제로 var, let, const 중에 선택합니다.

- 값이 사용자 마다 변할 것이다. 그래서 `let` 선택했어요.

```js
let 이름 : 글자 20자 제한
let 주민번호 : 글자 13자 제한
let 전화번호 : 글자 11자 제한
let 우편번호 : 글자 5자 제한
let 상세주소 : 글자 50자 제한
let 이메일 : 글자 20자 제한
let 아이디 : 글자 16자 제한
let 비밀번호 : 글자 16자 제한
let 동의체크 : 참/거짓 숫자 1자 제한
```

### 1.3. 메모리 공간에 이름 짓는 법 (변수명명법)

- 정말 중요합니다. 이름을 잘못지으면 다른 개발자에게 혼란을 줌.
- 개발자들은 코딩 컨벤션이 있습니다.
- 변수의 철자는 `명사+명사` `영어`로 하셔야 합니다.
- 숫자 및 공백 및 특수기호는 절대 안돼요.
- 허용되는 특수기호는 오로지 `_`, `$` 는 허용됩니다.

#### 1.3.1. CamelCase

- 반드시 소문자로 시작하고 새로운 명사는 대문자로 시작함.
- 많은 프로그래머들이 `변수`라고 생각합니다.

#### 1.3.2. Snake Case

- 이름을 모두 소문자로 작성하고 `_`로 연결한 이름

#### 1.3.3. kebab Case

- 이름을 소문자로 작성하고 `-`로 연결한 것.
- 파일 또는 css 파일에서는 사용합니다.
- 예) Next.js 의 파일명은 Kebab 이 표준입니다.

#### 1.3.4. Pascal Case

- 이름을 대문자로 작성하고 새로운 단어는 대문자로 시작
- 혹시 객채 변수 아닌가?
- 혹시 클래스 정의 아닌가?

#### 1.3.5. 대문자

- 상수명으로 판단함.

#### 1.3.6. 적용하기

```js
let userName : 글자 20자 제한
let userNum : 글자 13자 제한
let userPhone : 글자 11자 제한
let userPost : 글자 5자 제한
let userAddress : 글자 50자 제한
let userEmail : 글자 20자 제한
let userId : 글자 16자 제한
let userPassword : 글자 16자 제한
let userAgree : 참/거짓 숫자 1자 제한
```

### 1.4. 기본 데이터 종류 결정 (원시데이터 : Primitive Data Type)

- number : 숫자
- string : 글자 (문자, 문자열로 구분)
- boolean : true/false (나중에 falsy 한 것 알아야함.)
- undefined : 값이 없어요. (변수 초기 값으로 자동 셋팅)
- null : 개발자가 값이 없다고 지정함. (값이 비었다로 셋팅하라)
- symbol : 지구가 망해도 절대로 겹치지 않는 변수이다.

#### 1.4.1.

```js
let userName = ""; //20자 제한
let userNum = ""; //13자 제한
let userPhone = ""; //11자 제한
let userPost = ""; //5자 제한
let userAddress = ""; // 50자 제한
let userEmail = ""; //20자 제한
let userId = ""; //16자 제한
let userPassword = ""; //16자 제한
let userAgree = false; // 숫자 1자 제한
```

### 1.5. var, let, const 정확히 제약사항 파악하기

- 웹브라우저에 저장할 내용, 즉 변수가 있다면 아래를 고민하자.

#### 1.5.1. `1순위는 const` 입니다.

- 변수를 만든다면 나는 var, let , const 중에 무엇을 선택할까?
- const 는 변하지 않을 것이다 라는 작성법.
- 필요하면 즉, 값이 코딩하다 보니 바뀌어야 하는 경우에 let 으로 변경한다.
- const 의 특징

  - 만들기 전에 사용할 수 없다. (호이스팅 문제 해결 됨!)

  ```js
  console.log(userName); // Error
  const userName = "홍길동";
  ```

  - 동일한 이름으로 변수를 또 생성할 수 없다. (변수생성 중복 방지)

  ```js
  const userAge = 10;
  const userAge = 40; // Error
  ```

  - 값을 변경할 수 없다.

  ```js
  const userCity = "대구";
  userCity = "서울"; // Error
  ```

### 1.5.2. `2순위는 let` 입니다.

- 만들기 전에 사용할 수 없다.(호이스팅 문제 해결!)

```js
console.log(userName);
let userName = "홍길동";
```

- 동일한 이름으로 중복 생성할 수 없다. (중복 에러 생선 : const 와 동일)

```js
let userAge = 20;
let userAge = 30; // Error
```

- 값을 나중에 변경할 수 있다. (const 와의 유일한 차이점)

```js
let userCity = "대구";
userCity = "서울"; //괜찮다.
```

#### 1.5.3. `var는 사용하지 않는다`

- 호이스팅 통과되어 버림. (추후 오류의 원인)
- 동일한 이름으로도 중복 생성가능. (추후 오류의 원인)
- 값도 변경이 가능하다.
- 기존 코드에서 var 를 사용한 케이스가 있으면 그냥 유지한다.

### 1.6. 참조형 데이터 종류(Reference Data Type)

- 만약 interpark 사이트의 banner 영역의 데이터를 js 에서 관리하려고 한다.
- 배너는 링크 주소, 이미지 주소, 고유한 ID 가 있다.
- 하나의 배너는 변수 3개씩 가지고 있다.
- 총 5개의 배너가 있다.

```js
//첫 번째배너
const bannerUrl_1 = "https://~";
const bannerImg_1 = "https://~";
const bannerID_1 = "1";
//두 번째배너
const bannerUrl_2 = "https://~";
const bannerImg_2 = "https://~";
const bannerID_2 = "2";
//세 번째배너
const bannerUrl_3 = "https://~";
const bannerImg_3 = "https://~";
const bannerID_3 = "3";
//네 번째배너
const bannerUrl_4 = "https://~";
const bannerImg_4 = "https://~";
const bannerID_4 = "4";
//닷 번째배너
const bannerUrl_5 = "https://~";
const bannerImg_5 = "https://~";
const bannerID_5 = "5";
```

#### 1.6.1. 객체

- 관련 있는 기본형 데이터들을 `묶어서 하나로` 만들기

```js
const 객체명 = {}; // 1단계

//2단계
const 객체명 = {
    이름(key Name 키명, property 속성명) : 값, (key Value, value), // , 로 연결
    이름: 값,
    이름: 값,
};

const 객체명 = {
    key Name 키명 : 키값, (key Value), // , 로 연결
    이름: 값,
    이름: 값,
};

const 객체명 = {
   property 속성명: 속성값, (value), // , 로 연결
    이름: 값,
    이름: 값,
};


```

```js
//첫 번째배너
const bannerUrl_1 = "https://~";
const bannerImg_1 = "https://~";
const bannerID_1 = "1"; //이름을 계속 만들어야함

const banner_1 = {
  url: "https://",
  img: "https://",
  id: "1",
};

//두 번째배너
const bannerUrl_2 = "https://~";
const bannerImg_2 = "https://~";
const bannerID_2 = "2";

const banner_2 = {
  url: "https://~",
  img: "https://~",
  id: "2",
};
```

- 객체 변수 정보에 담겨진 속성 즉, 키명을 통한 값 사용 (호출)

```js
객체명.키명;
banner_1.url;

["객체명"].키명;
["banner_1"].url;
```

#### 1.6.2. 배열

- 하나의 이름으로 여러개의 데이터를 묶어서 관리

```js
const userArray = [1, 2, 3, "안녕", false, null, undefined];
const bannerId = ["1", "2", "3"];

//첫 번째배너
const banner_1 = {
  url: "https://",
  img: "https://",
  id: "1",
};

//두 번째배너
const banner_2 = {
  url: "https://~",
  img: "https://~",
  id: "2",
};

const banner = [
  { url: "http~", img: "http~", id: "1" },
  { url: "http~", img: "http~", id: "2" },
  { url: "http~", img: "http~", id: "3" },
]; //순서가 있다
```

- 배열의 요소에 값 사용 (호출)

```js
배열명[인덱스번호];
banner[1];
```

### 1.7. 변수 종합 예제

- 인터파크 티켓 랭킹 작업

```js
//섹션의 타이틀
const sectionTitle + "티켓 랭킹";
console.log(sectionDesc);
//섹션의 설명글
const sectionDesc = "~~~";
//섹션의 카테고리
const sectionCategory_1 = "뮤지컬"
const sectionCategory_2 = "콘서트"
const sectionCategory_3 = "???" // 손이많이간다

// 시작부터 끝나기 전까지가 0
const sectionCategoryArr = ["뮤지컬","콘서트","스포츠"];
sectionCategory[0]; // 뮤지컬
sectionCategory[1]; // 콘서트
sectionCategory[2]; // 스포츠

console.log(sectionCategory);
console.log(sectionCategory[0]);
console.log(sectionCategory[1]);
console.log(sectionCategory[2]);

// 티켓의 타이틀 정보
const tiketTitleArr = [
    "팬텀 10주년 기념 공연",
    "뮤지컬 <메디슨 카운티의 다리>",
    "뮤지컬 <라이카>",
];
console.log(tiket);
console.log(sectionDesc);
console.log(sectionDesc);
// 티켓의 이미지 경로
const tiketImgArr = [
    "https://a.jpg",
    "https://b.jpg",
    "https://c.jpg"
];
// 티켓의 링크 경로
const tiketUrlArr = [
    "https://a.html",
    "https://b.html",
    "https://c.html"
];
// 티켓의 순위
const tiketRankArr = [
    "1",
    "2",
    "3"
];
// 티켓의 공연장소
const tiketPlaceArr = [
    "대구",
    "서울",
    "제주"
];
// 공연일시
const tiketDayArr = [
    "04/07",
    "05/09",
    "05/04"
];

// 위의 사항을 효율적으로 관리하기 위한 작업

const ticket_1 = {
    title: "팬텀 10주년 기념 공연",
    img: "https://a.jpg",
    url:"https://a.html",
    rank: 1,
    place: "대구",
    day: "04/07"
};

console.log(ticket_1);
console.log(ticket_1.title);
console.log(ticket_1.img);
console.log(ticket_1.url);
console.log(ticket_1.rank);
console.log(ticket_1.place);
console.log(ticket_1.day);

const ticket_2 = {
    title: "뮤지컬 <메디슨 카운티의 다리>",
    img: "https://b.jpg",
    url:"https://b.html",
    rank: 2,
    place: "서울",
    day: "05/09"
};

console.log(ticket_2);
console.log(ticket_2["title"]);
console.log(tiket_2["img"]);
console.log(tiket_2["url"]);
console.log(tiket_2["rank"]);
console.log(tiket_2["place"]);
console.log(tiket_2["day"]);

const ticket_3 = {
    title: "뮤지컬 <라이카>",
    img: "https://c.jpg",
    url:"https://c.html",
    rank: 3,
    place: "제주",
    day: "05/04"
};

ticketInfoJsonArr[0].title
ticketInfoJsonArr[1].title
ticketInfoJsonArr[2].title

const ticketInfoArr = [ticket_1,ticket_2,ticket_3]

// 보통 아래의 형태로 데이터가 들어오는 것을
// JavaScript Object Notation 즉, `JSON` 이라고 합니다.

const tiketInfoJsonArr =[
    {
    title: "팬텀 10주년 기념 공연",
    img: "https://a.jpg",
    url:"https://a.html",
    rank: 1,
    place: "대구",
    day: "04/07"
    },
    {
    title: "뮤지컬 <메디슨 카운티의 다리>",
    img: "https://b.jpg",
    url:"https://b.html",
    rank: 2,
    place: "서울",
    day: "05/09"
    },
    {
    title: "뮤지컬 <라이카>",
    img: "https://c.jpg",
    url:"https://c.html",
    rank: 3,
    place: "제주",
    day: "05/04"
    }
];
```

## 2. 연산자(Operator)

- 연상을 해서 결과값을 만드는 `기호`
- 연산자 에 의한 새로운 `결과값이 나오는 것을 연산식`

### 2.1. 사칙연산(`+ - * /`)

- `+ 연산자`

```js
const numA = 0;
const numB = 1;
const result = numA + numB; // 1
```

```js
const numA = "안녕";
const numB = "hello";
const result = strA + strB; // "안녕hello"
```

```js
const numA = "홍길동";
const numAge = 20;

const result = "저기~" + strA + "님은 나이가" + numAge + "이군요!";
// "저기~ 홍길동 님은 나이가 20 이군요!"
// 숫자 + 글자는 글자로 인정함.

// 아래처럼 템플릿 문법을 추천합니다. 흔히 백틱 이라고 합니다.

const resultTemplate = `저기~ ${strA}님은 나이가 ${numAge}이군요!`;
```

```js
<div class="section">
  <div class="box_wrap">
    <a href="https:~">뮤지컬 팬텀</a>
    <img src="https:~" alt="뮤지컬 팬텀 배너이미지" />
  </div>
</div>
```

```js
const link = "https~";
const img = "https~";
const title = "뮤지컬 팬텀";
const alt = "뮤지컬 팬텀 배너이미지";
let tag = '<div class="section">';
tag = tag + ' <div class="box_wrap">';
tag = tag + '  <a href="https:~">' + title + "</a>";
```

```js
const link = "https~";
const img = "https~";
const title = "뮤지컬 팬텀";
const alt = "뮤지컬 팬텀 배너이미지";
const tag = `
<div class="section">
  <div class="box_wrap">
    <a href="${link}">${title}</a>
    <img src="${img}" alt="${alt}" />
  </div>
</div>
`;
```

```js
const numA = 5;
const numB = 8;
const resultA = `${numA} + ${numB} = ${numA + numB}`;
const resultB = `${numA} - ${numB} = ${numA - numB}`;
const resultC = `${numA} * ${numB} = ${numA * numB}`;
const resultD = `${numA} / ${numB} = ${numA / numB}`;
```

```js
const a = 1; // number
const b = "1"; // string
// 1단계 number ===> string 으로 물어보지 않고 변환(암묵적 데이터 타입 변환)
// string + string =====> string
const result = a + b;
```

- `- 연산자`

```js
const numA = 100; // string
const numB = 10; // number
// string 을 number 로 암묵적 변환
// number - number
const result = numA - numB; // 90
```

```js
const numA = "ABC"; // string
const numB = 10; // number
// string 을 number 로 암묵적 변환 실패
const result = numA - numB; // NaN (Not a Number)
```

- `* / 연산자`

```js
const numA = 4;
const numB = 2;
const resultMulti = numA * numB; // 8
const resultDevide = numA / numB; // 2
```

### 2.2. 나머지 연산 (`%`)

- 총 게시글 52개
- 한 페이지당 5개 목록
- 몇 페이지가 필요한가?
- 마지막 페이지에서 보여주어야 하는 게시글 수?

```js
const total = 52;
const count = 5;
const totalPage = total / count; // 소숫점 나옴
const totalPageNumber = Math.ceil(totalPage); // 올림
const lastCount = total % count; // 나머지 나옴 ,모듈러연산사
```

### 2.3. 복합연산자 (연산 타이핑 수를 줄인다)

```js
const numA = 5;
let result = numA + 3; // 5 + 3 = 8

// 코딩에 의한 가독성이 떨어집니다
// 그런데 PG 들은 많이 사용하는 방식입니다.
//result = result + 10; 줄여서 작성함.
result += 10; // 18
// result = result - 5;
result -= 5; // 13
// result = result * 4;
result *= 4; // 52
// result = result / 2;
result /= 2; // 26
// result = result % 2; % 나머지 , 모듈러 연산자
result %= 2; // 0
```

### 2.4. 증감연산자 ( ++ -- )

- 개발자는 타이핑 수를 줄이려고 노력합니다.

```js
let num = 5;
num = num + 1;
num += 1;
num++; // 1 증가한다 , 후치연산자
++num;
```

```js
let num = 20;
// 후에 배치된 후치연산 이라서
let numA = num--; // numA 에는 20입니다. 그리고 연산
num--; //19
```

```js
let num = 20;
// 전에 배치된 전치연산 이라서
let numA = --num; // numA 에는 19입니다. 그리고 연산
--num; //19
```

### 2.5. 논리연산자

- ` 무조건 이해` 하셔야 합니다.
- `falsy` 한 값의 종류 (js 에서 false 라고 판단하는 값)

```js
"";
0;
undefined;
null;
NaN;
false;
```

#### 2.5.1. OR 연산자

- 2개 중 1개만 true 이면 true, 나머지 false

```js
let result = true || true;
result = false || false;
result = false || true;
// 참일것 같은 연산이 앞에와야 연산횟수가 줄어든다,속도가 다름
result = "" || true;

const userPass; // 초기의 값이 들어가야함
result = userpass || "비밀번호 넣으세요.";

let userPass; // undefined
result = userpass || "비밀번호 넣으세요.";
```

#### 2.5.2. And 연산자 (그리고)

- 둘다 true 면 true, 아니면 false
- 변수에 결과값은 true, false 가 담겨진다.

```js
let result = true && true;
result = false && true; //성능상 좋음
result = false && false;
//할일없을때 성능 최적화
```

#### 2.5.3. Not 연산자 (반대)

```js
let result = !true;
result = !false;
```

#### 2.5.4. 실습 예제

```js
let nickName = "";
let displayName = nickName || "Guest";
console.log(displayName); // Guest
```

```js
let title + null;
let result = title || "제목 없음";
console.log(result); //제목 없음
```

```js
let totalMoney = 0;
let result = totalMoney || "장바구니가 비었습니다.";
console.log(result); //장바구니가 비었습니다.
```

```js
let isLogin = true;
let result = isLogin && "환영합니다.";
console.log(result); // 환영합니다.
```

```js
let isAdmin = false;
let result = isAdmin && "관리자 메뉴 표시";
console.log(result); //
```

```js
let config = {};
config.theme = config.theme || "light"; // 테마가있냐 물어봤는데
console.log(config); // { theme: "light" } , 사용자 테마가 없으면 이거다.
// 초기값세팅
```

```js
let config = { theme: "red" };
config.theme = config.theme || "light";
console.log(config); // { theme: "red" }
```

```js
let options = {
  long: null,
  fontSize: 0,
};
let lang = options.lang || "ko";
let fontSize = options.fontSize || 20;
```

### 2.6. 비교연산자

- 정말 중요합니다.

```js
// 데이터 값의 종류는 비교하지 않음.
let resultA = "1" == 1; // true

// 데이터 값과 데이터 종류도 비교함.
let resultB = "1" === 1; // false

let resultC = 1 > 2;
let resultD = 1 < 2;
let resultE = 1 >= 2;
let resultF = 1 <= 2;
let resultG = 1 != 2; // 다르냐
let resultH = 1 !== 2; // 데이터 타입도 다르냐
```

### 2.7. 병합연산자

- 내가 FE 라면 반드시 알아야 함.
- 일반적으로 기본값 셋팅에서 활용
- falsy 가 아니라 `null, undefined` 일때만 값을 비교할 경우
- 아래에서 기대한 코드는 `0` 값이 나오길 기대하고 코드 진행함.

```js
let urerPoint = 0; // 사용자에게 0을 보여줌
let displayPoint = userPoint || 500000;
console.log(displayPoint); // 500000

let userPoint = undefined;
let displayPoint = userPoint || 500000;
console.log(displayPoint); // 500000
```

- `??` 연산자는 null 과 undefined 만 비교한다.
- 나머지는 `||` 과 같다.

```js
let userPoint = 0; // undefined,null 이 아니다.
let displayPoint = userPoint ?? 500000;
console.log(displayPoint); // 0 고대로 출력
```

```js
let formInput = {
  name: "",
  email: null, // 개발자가 값이 없다고 지정하는 것, 값 지워라 청소해라 방빼라
  phone: undefined, // 값이 없다고 JS 가 기본으로 지정
};
const name = formInput.name ?? "이름 없음";
const email = formInput.email ?? "이메일 없음";
const phone = formInput.phone ?? "전화 없음";
```

### 2.8. 옵셔널체이닝 (`?.`)

- FE 라면 알아야 합니다.
- 객체의 속성 존재 여부에 따라 코드 진행.
- `{ 속성:값, }`

```js
const user = {
  profile: null, // 웹브라우저가 멈춘다
};
const age = user.profile.age; // null Error 발생 후 서비스 멈춤
```

```js
const user = {
  profile: { age: 10, name: "홍길동" },
};
const age = user.profile.age; // 정상적 실행
```

```js
const user = {
  profile: { name: "홍길동" },
};
const age = user.profile.age; // 웹브라우저 다운
```

```js
const user = {
  profile: { name: "홍길동" },
};
const age = user.profile?.age; // 프로필 속성중에 age가 없어도 정상작동
```

```js
const user = {
  profile: null,
};
const age = user.profile?.age ?? "정보가 없어서 나이정보를 몰라요";
// ??
```

### 2.9. 3항 연산자

- 연산자가 3개라서 3항 연산자라고 합니다.
- `결과 = 조건식 ? 참일떄 결과 : 거짓일때 결과;`
- 활용 빈도가 너무 높습니다.

```js
const userRole = "ADMIN"; // 사용자 등급
// const url = 조건 ? 참 : 거짓;
const url = userRole === "ADMIN" ? "admin.html" : "guest.html";
```

- 미성년자 체크

```js
const age = 10;
const result = age < 19 ? "동의서 필요" : "성인 인증";
```

```js
const goodCount = 10;
const result = goodCount > 0 ? "재고가 있어요" : "재고가 없어요";
```

```js
const user = {
  isLogin: true,
  name: "아이유",
};
const result = user.isLogin ? `${user.name}님 반가워요. ` : "로그인 해 주세요.";
```

```js
const user = {
  isLogin: true,
  name: "아이유",
};
const result = user?.isLogin
  ? `${user?.name}님 반가워요. `
  : "로그인 해 주세요."; // 서버다운 막기위해 ? 넣기도함
```

```js
let num = 5;
let result = 조건식 ? "짝수" : "홀수";
```

```js
let num = 5;
let result = num % 2 === 0 ? "짝수" : "홀수";
```

## 3. 조건문(Condition)

### 3.1. if 문

- `참/거짓`을 판단하여 코드 분기 실행함.
- 모양 1.

```js
if(조건){
  조건이 참이면 실행;
}
```

- 모양 2.

```js
if(조건){
  조건이 참이면 실행;
  }else{
     조건이 거짓이면 실행;
  }
```

모양 3.

```js
if(조건1){
  조건이 참이면 실행;
  }else if(조건2){
     조건2 가 참이면 실행;
  }else if(조건3){
     조건3 이 참이면 실행;
  }else if{
     모든 조건에 거짓이면 실행;
  }
```

- 예제) 로그인이 된 경우의 메시지 출력하기

```js
const isLogin = true;
if (isLogin === true) {
  console.log("로그인하셨네요. 반갑습니다.");
}
```

```js
if (isLogin === true) {
  console.log("로그인하셨네요. 반갑습니다.");
  console.log("오늘도 좋은 하루되세요.");
}
```

```js
//아래처럼 하시면 힘들어요. 코드 가독성 떨어져요. 한줄은 괜찮으나 두개일때는 중괄호가 필요하다
if (isLogin === true) console.log("로그인하셨네요. 반갑습니다.");
```

- 예제) 로그인 된 경우의 메세지와 로그인 안된 경우의 메시지 출력하기.

```js
const isLogin = true;
if (isLogin) {
  console.log("어서오세요.");
} else {
  console.log("로그인 하셔야 합니다.");
}
```

- 예제) 나이에 따라서 다른 메시지 출력하기 (조건이 2개 이상인 경우)

```js
const age = 100;
if (age >= 60) {
  console.log("어르신 이시네요.");
} else if (age >= 50) {
  console.log("50 대 이시네요.");
} else if (age >= 40) {
  console.log("40 대 이시네요.");
} else if (age >= 30) {
  console.log("30 대 이시네요.");
} else if (age >= 20) {
  console.log("청년 이시네요.");
} else {
  console.log("미성년 이시네요.");
}
```

- 예) 사용자가 입력한 항목이 값이 `없을 경우` 메시지 보내기 (필수 입력 사항)

```js
const name = "홍길동";
const pass = "1234";
const useInfoCheck = false; // 사용자 정보 활용 동의
const useEmailCheck = false; // 이메일 수신 동의

if (name === "") {
  alert("이름을 입력하세요.");
}
// 비어있으면 이름 입력해라
if (!name) {
  alert("이름을 입력하세요.");
}
// 잘못입력하면 이름 입력해라
----------------------------------------------------
if (name === "" || !name) {
  alert("이름을 입력하세요.");
}
// 조건이 여러개 들어감
----------------------------------------------------
if (name === "") {
  alert("이름을 입력하세요.");
  return; //파사드패턴. 밑에꺼 중복실행 안됨. 여기까지하고 끊어버리겠다.
}
if (!name) {
  alert("이름을 입력하세요.");
  return;
}
----------------------------------------------------
if (useInforCheck) {
  alert("개인정보 동의를 체크하세요.");
  return;
}

if (useInforCheck === false) {
  alert("개인정보 동의를 체크하세요.");
  return;
}
// 위에가 헷깔리면 이렇게도 나타낼수있음
----------------------------------------------------
if (useEmailCheck === false) {
  alert("이메일 수신 동의를 체크해주세요");
  return;
}

console.log("저희 서비스를 자유롭게 활용하세요.");

```

### 3.2. switch 문

- `여러 개의 값` 중 하나의 `값`이 같은지 판단 후 실행 (값을 비교)

```js
swich (값) {
  case 비교값 1:
                실행 코드
    break;
  case 비교값 2:
                실행 코드
    break;
  case 비교값 3:
                실행 코드
    break;
  default:
                실행 코드
    break;
}
```

- 예) 엘리베이터 층 예제

```js
const layer = 5; //값
switch (layer) {
  case 1:
    console.log("1층 내리세요.");
    break;
  case 2:
    console.log("2층 내리세요.");
    break;
  case 3:
    console.log("3층 내리세요.");
    break;
  case 4:
    console.log("4층 내리세요.");
    break;
  case 5:
    console.log("5층 내리세요.");
    break;
  default:
    console.log("당신은 내릴 층이 없습니다.");
    break;
}
// 범위를 잡아내기는 어렵다 그래서 스위치보다 이프를 많이씀
```

- if 와 switch 종합 예제

```js
const userRole = "ADMIN";

if (userRole === "MEMBER") {
  console.log("회원");
} else if (userRole === "ADMIN") {
  console.log("관리자");
} else {
  console.log("비회원");
}
//스위치문으로 변경
switch (userRole) {
  case "MEMBER":
    console.log("회원");
    break;
  case "ADMIN":
    console.log("관리자");
    break;
  default:
    console.log("비회원");
    break;
}
```

## 4. 반복문(Loop)

- 동일한 실행을 반복하는 문법

### 4.1. for 구문

- 주어진 `횟수만큼` 반복 실행 (`개발자가 반복횟수를 아는 경우`)

```js
for(초기값은 단 한번만 실행; 조건식의 결과가 true/false ; 증감식은 조건식을 false 로 만들기 ) {
  할일 코드 작성
}
```

```js
const total = 10; //반복 횟수
for (let i = 0; i < 10; i = i + 1) {
  console.log(`guswo ${i} 입니다.`);
}

const total = 1000000; //반복 횟수
for (let i = 0; i < total; i++) {
  console.log(`guswo ${i} 입니다.`);
}
```

```js
// 장바구니 담긴 제품 가격 모음.
const bucketsArr = [1000, 500, 700, 400];
// 반복 횟수
const total = bucketsArr.length; //길이 어쩌고
--------------------------------------------------
// 반복문 없다면
let totalPrice = bucketsArr[0] + bucketsArr[1] + bucketsArr[2] + bucketsArr[3];
--------------------------------------------------
// 반복문을 활용한다면
let totalPriceFor = 0;
for (let i = 0; i < 4; i++) {
  totalPriceFor = totalPriceFor + bucketsArr[i];
  //totalPriceFor += bucketsArr[i]; 이렇게도 작성가능
}
```

- 예) 제품의 이름과 가격 및 재고를 html 태그로 출력하는 예제
- 예) 백엔드에서 제품의 목록은 json 으로 주어진다

```js
// 백엔드에서 가져온 자료 json
const goodData = [
  { id: 542, name: "사과", price: 1000, stock: 10 },
  { id: 5557, name: "딸기", price: 200, stock: 0 },
  { id: 2147, name: "키위", price: 5000, stock: 5000 },
];
// 반복횟수
const total = goodData.length;
for (let i = 0; i < total; i++) {
  // 제품 1개를 뽑아서 보관한다.
  const good = goodData[i];
  //html 만들기
  const tag = `<div>
    <p>제품명 : ${good.name}</p>
    <p>가격 : ${good.price}</p>
    <p>재고수량 : ${good.stock}</p>
  </div>`;
------------------------------------------------------------
  const tag = `<div id="${good.id}" class="good-box">
    <p>제품명 : ${good.name}</p>
    <p>가격 : ${good.price}</p>
    <p>재고수량 : ${good.stock || "재고가 없어요"}</p>
  </div>`;
}
```

- 예) 구구단
- 가까운 for 문에서 `break` 는 반복문 빠져나오고 종료됨
- 가까운 for 문에서 `continue` 는 반목문 실행 건너뛰고 계속 실행.

```js
const total = 9;
for (let i = 1; i <= total; i++) {
  console.log(i + " 단");
  // 1 단, 2 단, .....
}
-------------------------------
// 중첩 반복문
const total = 9;
for (let i = 1; i <= total; i++) {
  console.log(i + " 단");
  for(let j = 1; j <= total; j++) {
    console.log(i + " * " + j + " = " + (i*j));
  }
}
// 백틱사용
const total = 9;
for (let i = 1; i <= total; i++) {
  console.log(i + " 단");
  for(let j = 1; j <= total; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
// 5단 까지 나오게 하고싶음
const total = 9;
for (let i = 1; i <= total; i++) {
  if(i === 6){
    break;
  }
    console.log(i + " 단");
  for(let j = 1; j <= total; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
// 브레이크는 가장 가까운곳의 폼을 빠져나오기
  if(i === 6){
    // 종료하기
    break;
  }
  if (i % 3 === 0) {
    // 건너뛰기
    continue;
  }
```

### 4.2. for in 구문

- for 문으로 모두 가능하다.
- for 를 `객체를 대상` 으로 편리하게 사용하도록 지원하는 문법

```js
// for in 구문 예제 (대상은 객체 속성 반복)
const singer = {
  id: 123,
  name: "아이유",
  age: 30,
  city: "서울",
};
// 개발자가 직접 알아내는 경우
// singer.id;
// singer.name;
// singer.age;

// console.log(singer.id);
// console.log(singer.name);
// console.log(singer.age);

// 반복문 활용
for (let key in singer) {
  console.log(key);
  console.log(singer[key]);
  //연관배열
  //반복문으로 마음대로 꺼내쓸수있음
  //console.log(singer.key); 이렇게 넣으면 안나옴
}
```

### 4.3. for of 구문

- for 문으로 모두 가능하다.
- for 를 `배열, 문자열등을 대상` 으로 편리하게 사용하도록 지원하는 문법
- `iterator` 즉, `순서가 있는 데이터형`에서 사용

```js
const citiesArr = ["대구", "서울", "부산"];
for (let city of citiesArr) {
  console.log(city);
}

const words = "안녕하세요.반가워요.";
for (let i of words) {
  console.log(i);
}
```

### 4.4. while 구문

- `조건이 참`인 동안 무한히 반복함.
- 반복의 횟수를 모르는 경우

```js
while(조건){
  할일;
  반드시 거짓으로 만들어야 합니다.
  // 안만들면 계속반복함
}
```

```js
let count = 0;

while (count < 5) {
  //거짓을 만들기 위한 조건을 작성함.
  count = count + 1;
  console.log(count);
}
// 몇번반복되는지 모르는경우는 잘없음 잘안씀
```

### 4.5. do while 구문

- while 과 다르게 일단 실행하고 조건 검사

```js
do {
  할일;
} while (조건);
```

```js
let count = 0;

do {
  //거짓을 만들기 위한 조건을 작성함.
  count = count + 1;
  console.log(count);
} while (count < 5);
```

## 5. 함수(function)

- 독립된 역할별 기능을 `{중괄호}` 로 묶고 `function 함수명` 을 주어서 관리
- 여러번 재활용(`호출, call`)한다. : `함수명()`
- 문서 즉 설명서(JSDoc)가 잘 만들어져야함.
- 기능 예외처리를 잘 해야 한다.

### 5.1. 함수가 왜 필요하지?

- 반복되는 1줄 이상의 코드가 있다면 함수라는 것을 만들 생각해 보자.
- 코드에 대한 가독성이 필요하면 함수라는 것을 만들 생각해 보자.
- 한번에 코드를 수정하여 다양한 곳에 동시에 반영되는 것을 원하면 함수 라는 것을 만들 생각해 보자.
- 코드에 안정성을 생각한다면 함수라는 것을 만들 생각해 보자.
- 협업을 한다면 기능을 만들어서 재활용하여야 하며 이때 함수라는 것을 만들 생각해 보자.

```js
// 아래는 사용자의 명단과 반가워요라는 메세지를 출력하는 기능이다.
let user_1 = "홍길동";
let user_2 = "김길동";
let user_3 = "박길동";
let user_4 = "고길동";
let user_5 = "정길동";
console.log(user_1 + "님 반가워요.");
console.log(user_2 + "님 반가워요.");
console.log(user_3 + "님 반가워요.");
console.log(user_4 + "님 반가워요.");
console.log(user_5 + "님 반가워요.");
```

- 기능을 구분해서 관리하고 싶다. (여기서는 회원명단 및 인사 기능)

```js
// 각각의 기능별로 블락을 줘서 분류가능 `=`대신에 `()`
function useMember() {
  let user_1 = "홍길동";
  let user_2 = "김길동";
  let user_3 = "박길동";
  let user_4 = "고길동";
  let user_5 = "정길동";
  console.log(user_1 + "님 반가워요.");
  console.log(user_2 + "님 반가워요.");
  console.log(user_3 + "님 반가워요.");
  console.log(user_4 + "님 반가워요.");
  console.log(user_5 + "님 반가워요.");
}
// 실제로 사용할때는 , 함수 활용, 함수 호출, 함수 call
useMember();
```

### 5.2. 함수 만들기

```js
// 함수 이름은 동사로 짓는다. 함수는 기능임
function 함수명() {
  기능1;
  기능2;
  기능3;
}
//
function 함수명(재료1,재료2,재료3) {
  재료1 처리 기능1;
  재료2 처리 기능2;
  재료3 처리 기능3;
}
```

### 5.3. 계산기 만들기

- 단계 1.

```js
// 계산기를 만들거에여
const result_1 = 5 + 4;
const result_2 = 8 + 3;
const result_3 = 7 + 2;
const result_4 = 6 + 1;
```

- 단계 2.

```js
// 함수로 바꿔볼게여
function result_1() {
  5 + 4;
}
function result_2() {
  8 + 3;
}
function result_3() {
  7 + 2;
}
function result_4() {
  6 + 1;
}
```

- 단계 3. 재료(숫자)만 다르고 하는 일은 + 기능이다.

```js
//
function add(재료1, 재료2) {
  재료1 + 재료2;
}
add(5, 4);
add(8, 3);
add(7, 2);
add(6, 1);
```

- 단계 4. minus 기능 만들기

```js
function minus(매개변수1, 매개변수2) {
  매개변수1 - 매개변수2;
}
ninus(5, 4);
```

- 단계 5. 기능에 예외처리(오류처리) 적용하기
- 오류 : 원하지 않는 결과, Error도 모두 포함해서 오류라 생각합니다.

```js
function add(매개변수1, 매개변수2) {
  매개변수1 + 매개변수2;
}
function minus(매개변수1, 매개변수2) {
  매개변수1 - 매개변수2;
}

add(5, "100"); //원하지않는 결과가 나온 오류 , 논리적오류
add(5, undefined); // 원하지 않는 결과이므로 오류
add(5); // 원하지않는 결과 이므로 오류

// 방어코드를 넣어줍미다
function add(매개변수1, 매개변수2) {
  // 방어코드 (예외처리)

  /*if (매개변수1 === typeof string) {
  매개변수1 + 매개변수2;
  }*/

  if (매개변수1 === undefind) {
    return alert("매개변수 1 을 입력하세요.");
  }
}
if (매개변수2 === undefind) {
  return alert("매개변수 2 을 입력하세요.");
  매개변수1 + 매개변수2;
}
```

### 5.4. JSDoc(자바스크립트다큐멘트) 으로 함수 사용에 대해서 안내(설명서)하기

- jsDoc 기본 이해
- 재료, 매개변수를 parameter 라고 합니다.

```js
/**
 * 두개의 변수를 받아서 덧셈하는 기능
 * @param {number} numA - 첫번째 숫자
 * @param {number} numB - 두번째 숫자
 * @returns {number} 두 숫자의 덧셈결과
 */
function add(numA, numB) {
  if (numA === undefind) {
    return alert("첫번째 매개변수 입력해주세요.");
  }
  if (numB === undefind) {
    return alert("두번째 매개변수 입력해주세요.");
  }
  return numA + numB;
}
```

- JSDoc 작성이 번거롭더라도 팀내에서는 협의 하셔서 작성여부를 결정하자
  더불어서 ESLint 도 설정하여야한다.
  ESLint 는 JSDoc 과 맞지않으면 오류를 띄워서 JS 실행을 못하게 한다.

### 5.5. JSDoc 을 이용한 계산기 함수 만들어보기

- 추가 함수

````js
/**
 * 숫자 더하기 기능
 *  @param {number} a
 *  @param {number} b
 *  @returns {number} - 덧셈결과
 */
function add(a, b) {
  return a + b;
}
/**
 * 숫자 빼기 기능
 *  @param {number} a
 *  @param {number} b
 *  @returns {number} - 뺄셈결과
 */
function minus(a, b) {
  return a - b;
}
/**
 * 숫자 곱하기 기능
 *  @param {number} a
 *  @param {number} b
 *  @returns {number} - 곱셈결과
 */
function multi(a, b) {
  return a * b;
}
/**
 * 숫자 나누기 기능
 *  @param {number} a
 *  @param {number} b
 *  @returns {number} - 나눗셈결과
 * -------호출 예------
 * ```javascript
 * let result = divide(5,4)
 * ```
 */
function divide(a, b) {
  if (b === 0) {
    return alert("분모는 0이 아니어야 합니다.");
  }
  // 데이터 알아내고, 타입 비교하기
  if (typeof a !== "number") {
    return alert("분자는 숫자여야 합니다.");
  }
  if (typeof b !== "number") {
    return alert("분자는 숫자여야 합니다.");
  }
  return a / b;
}
// 덧셈사용
const resultAdd = add(5, 4);
const resultMinus = minus(5, 4);
const resultMulti = multi(5, 4);
const resultDivide = devide(5, 4);

const age = 1;
console.log(typeof age); // "number"

/**
* 계산기 기능
* 계산기 기능은 +, -, \, / 기능이 있습니다.
* @param {string} symbol - +, -, \, / 기호중 1개 입력
* @param {number} a 숫자 입력
* @param {number} b 숫자 입력
* @returns {number} 결과는 숫자
* 사용 예)

```javascript
const result = calcurator("+", 5, 4);
```
*/

function calcurator(symbol,a,b){
 if (typeof symbok !== "string") {
return alert("기호를 입력하세요.");
}
let result = 0;

switch (symbol){
case "+":
result = add(a,b)
break;
case "-":
result = minus(a,b)
break;
case "/":
result = divide(a,b)
break;
case "\":
result = multi(a,b)
break;
default:
return alert("올바른 기호를 입력해 주세요.");
}
  return result;
}
````

```js
/**
 * 메시지를 콘솔에 출력하기
 * @param {string} message - 출력할 메시지
 */
function showMessage(message) {
  console.log(message);
}
showMessage("안녕");
showMessage("홍길동 반가워");
```

```js
/**
 * 객체의 속성 값을 출력하는 기능
 * @param { {id:number, nickName:string, age:number } } user - 사용자 객체
 */
function showUser(user) {
  console.log(user.id);
  console.log(user.nickName);
  console.log(user.age);
}
```

### 5.7. 함수의 기본 값 설정하기

````js
/**
 * 나이를 10살 더하여서 출력함.
 * @param {number} age - 현재 나이 입력
 * ```javascript
 * const result = showAge(10); //20
 * ```
 */
function showAge(age = 0) {
  // (age=0) 기본값
  return age + 10;
}
showAge(); // nan
````

### 5.8. 매개변수의 총 개수 자동으로 알아내기

- Rest 파라메터는 전달된 매개변수에 `정확한 값만 배열`로 만든다.

```js
/**
 * 입력된 매개 변수 만큼 총합계산하기
 * Rest 파라메터 이용하기
 * @param {...number} numbers - 숫자 값
 */
function showTotal(a = 0) {}

showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
// 자바에서는오류 자바스크립트에서는 아님, 갯수체크를 안함 알아서 늘어남
function showTotal(a+b) {
  return a + b;
}
showTotal(`4`, `5`, 6, 7, 8, 9, 1, 2, 0);
// 앞쪽 두개만 사용

function showTotal() {
    console.log(arguments);
  let total = 0;
  for(let i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
return total;
}
const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
// 2015년도 전에 사용하던 문법
```

```js
// 이제는 이거씀
function showTotal(...rest) {
  console.log(rest);
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total = total + rest[i];
  }
  return total;
}
const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
```

```js
function showTotal(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total = total + rest[i];
  }
  return total;
}
const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
// 엄청나게 많이씀
```

## 6. 함수 선언법을 꼭 이해하자.

- 1. 일반적 함수 만드는 법

```js
function 함수명(매개변수) {
  return 결과값;
}
함수명(매개변수);
```

- 2. `변수의 값`으로 함수를 만드는 법

```js
const 변수명 = function (매개변수) {
  return 결과값;
};
변수명(매개변수);
// 이름없는 함수
```

- 3. 왜 `const 변수명 = function 형태`가 필요하지?

```js
function add() {
  return 1 + 2;
}
// add();

const addFun = function () {
  return 1 + 2;
};
// addFun();

const minusFun = function () {
  return 1 - 2;
};
// minusFun();

function test(_func) {
  _func();
}

test(add); // 값이 아니라서 안된다.
test(addFun);
test(minusFun);
```

```js
/**
 * 객체의 속성 값을 출력하는 기능
 * @param { {id:number, nickName:string, age:number } } user - 사용자 객체
 */
function showUser(user) {
  console.log(user.id);
  console.log(user.nickName);
  console.log(user.age);
}
```

- 아래 코드는 특히 위치를 살펴보자. : 완성하고 사용하자.

```js
add(); // 오이스팅이 되므로 괜찮다. 함수를 아무데나 적어놔도 됨
addFN(); // 호이스팅 에러 발생한다. 코드 젤 윗줄에 적어야함 (주의하자)
function add() {}
const addFN = function () {};
```

## 7. 함수 추가 정리

### 7.1. 함수를 만들 시점 (언제 함수를 만들까에 대한 안내)

#### 7.1.1. 코드가 너무 긴 경우 (`하나의 결과를 만들기 위해서 작성시`)

- 코드 가독성이 너무 떨어져서 추후 분석이 곤란할때
- 하나의 결과를 만들기 위한 과정을 작성중 너무많은 코드가 작성될때
- 여러 줄이 작성되어서 한개의 결과를 만든다면 함수로 묶어서 만들까? 고민하자.

#### 7.1.2. 동일한 기능이 여러번 사용될때

- 2번이상 동일한 기능이라면 함수를 만들까? 고민
- 2번이상 동일한 기능인데 재료(매개변수)만 다르다? 함수만들까? 고민

#### 7.1.3 코드를 누군가에게 주어야 할때

- 코드를 공유할 때 함수만들까? 고민

### 7.2. 함수 만드는법

- `{중괄호}` 로 코드 블럭을 이용해서 묶어준다.
- 이름을 짓는데, `동사`로 지어준다 (기본 : Camel, 생성자함수 : Pascal)
- 이름 뒤에 `(소괄호)` 를 작성한다.
- 이름 뒤에 `(재료, 재료)` 를 작성한다.
- 이름 뒤에 `(매개변수, 매개변수)` 를 작성한다.
- 이름 뒤에 `(parameter, parameter)` 를 작성한다.
- function 키워드를 작성해 준다.
- `JSDoc` 으로 사용설명서를 작성해 주면 좋겠다.

### 7.3. 함수 사용법(`호출, Call` 등으로 명칭함)

- 함수이름 ();
- 함수명을 호출했다.
- 함수명 Call 했다.

### 7.4. 함수 샘플

- 넓이를 계산하는 기능, 그런데 2번이상 사용, 누군가에게 공유

````js
/**
 * 너비를 계산해 주는 함수
 * @param {number} _width
 * @param {number} _height
 * @returns {number}
 * -- 함수사용 예 --
 * ```js
 *  const result = calcRect(5, 4);
 * ```
 */
function calcRect(_width = 0, _height = 0) {
  // 추후에 무수하게 예외처리 코드가 작성이 된다.
  // 업데이트
  return _width * _height;
}
// 함수호출
const result = calcRect(5, 4);
console.log(result);
````

### 7.5. 함수에 추가 지식

- 매개변수에 기본값을 지정할 수 있다.

```js
function 함수명(매개변수 = 기본값) {}
```

- 매개변수 개수에는 제한이 없다.

```js
function 함수명(매개변수1, 매개변수2) {
  const prams = arguments; // 배열로 접근가능
}
함수명(1, 2, 3, 4, 5);
// arguments 함수전용
```

- arguments 말고 `rest 파라메터` 를 쓰자.
- ...aaa 이렇게 적어도 상관 X

```js
function 함수명(매개변수1, 매개변수2, ...rest) {
  const prams = res; // 배열로 접근가능
}
함수명(1, 2, 3, 4, 5);
```

- 함수를 `표현식(Expression)`으로 만드는법
- 변수에 함수를 담는 이유는 `함수에 매개변수`에

```js
// 함수 표현식 정의
const 함수명 = function () {};

const add = function () {};
function calcFunc(_fn) {
  add();
}
calcFunc(add);
```

- 콜백함수는 `특정한 이벤트`가 발생시 덩달아서 실행(추후 다시 보자)

## 8. 화살표 함수(Arrow Function)

### 8.1. 화살표 함수가 필요한 이유

- 함수가 간략해 집니다.
- 함수가 최적화 됩니다.(메모리 절약, 성능 최적화 )
- this 의 범위가 고정됩니다.
- new 를 사용 못합니다.

### 8.2. 화살표 함수 작성법 (반드시 이해하세요)

```js
// 기본함수
function say() {
  console.log("안녕");
}
// 표현식 함수
const say = function () {
  console.log("안녕");
};
// 화살표함수
const sayArrow = () => {
  console.log("안녕");
};
// 실행코드가 1 줄이면 {} 블럭 생략 가능
const sayArrow2 = () => console.log("안녕");
```

- `매개변수`가 오로지 `1개 있을 때`

```js
// 기본함수
function say(_word) {
  console.log(_word);
}
// 표현식 함수
const say = function (_word) {
  console.log(_word);
};
// 화살표함수
const sayArrow = (_word) => {
  console.log(_word);
};
// 실행코드가 1 줄이면 {} 블럭 생략 가능
const sayArrow2 = (_word) => console.log(_word);

// 실행코드가 1 줄이면 {} 블럭 생략 가능
// 매개변수 () 가 생략이 가능하다.
const sayArrow3 = (_word) => console.log(_word);
```

- 매개변수가 2개 이상일 때

```js
// 기본함수
function say(_word, _name) {
  console.log(_word, _name);
}
// 표현식 함수
const say = function (_word, _name) {
  console.log(_word, _name);
};
// 화살표함수
const sayArrow = (_word, _name) => {
  console.log(_word, _name);
};
// 실행코드가 1 줄이면 {} 블럭 생략 가능
const sayArrow2 = (_word, _name) => console.log(_word, _name);

// 실행코드가 1 줄이면 {} 블럭 생략 가능
// 매개변수 2이상은 () 가 필수.
const sayArrow3 = _word, _name => console.log(_word, _name);

```

## 9. 스코프(Scope)의 이해

- 변수의 활용 가능한 범위
- 제일 중요한 것은 `{}` 입니다.

### 9.1. Scope 의 종류 2가지

- 전역 범위 : Global Scope
- 지역 범위 : Local Scope
- function 은 js 실행전에 미리 모아서 전역 스코프에 보관해 둔다.
- 알고보면 전역 스코프를 위한 메모리 공간이 별도로 있다는 것입니다.
- 지역에서 못찾으면 전역에서 찾음
- function 전역에 세팅

### 9.2. 전역 범위

- 프로그램 어디서든 마음대로 접근해서 활용

```js
// 전역 변수
const appName = "JavaScript World";

{
  console.log(appName);
}

function say() {
  console.log(appName);
}
say();
```

```js
// 전역 자리
function say() {
  console.log("안녕");
}

// 지역 자리
{
  say();
}

say();
```

### 9.3. 지역 범위

- `{}` 블록 안쪽을 `지역범위`라고 합니다.

```js
{
  // 지역 변수
  const appName = "JavaScript World";
  console.log(appName);
}

function say() {
  console.log(appName);
}
say();
```

- 아래는 정상적으로 실행된다.
- `function 키워드`는 전역 범위에 등록이 된다.
- 개발자의 선택권한 없다.

```js
// 전역 자리

// 지역 자리
{
  function say(_name) {
    console.log(_name + " 안녕");
  }
  say("홍길동");
}

say("박길동");
```

- function 은 전역에 등록되므로 예측 곤란
- 아래 코드는 협업 실패 : `function ` 은 전역에 등록해서 쓰자
- `function ` 은 지역에 코드하지 말자.

```js
// 전역 자리

// 개발자: 홍길동 지역 자리
{
  function say(_name) {
    console.log(_name + " Hello");
  }
  say("홍길동");
}

// 개발자 : 고길동 지역자리
{
  function say(_name) {
    console.log(_name + " 반가워");
  }
  say("고길동");
}

say("테스터");
```

- 아래를 추천함.

```js
// 전역 자리
function say(_word) {
  console.log("기본 실행 함수 : " + _word);
}
// 개발자: 홍길동 지역 자리
{
  const say = function (_name) {
    console.log(_name + " Hello");
  };
  say("홍길동");
}

// 개발자 : 고길동 지역자리
{
  const say = function (_name) {
    console.log(_name + " 반가워");
  };
  say("고길동");
}

say("테스터");
```

- 화살표로 고치면

```js
// 전역 자리
function say(_word) {
  console.log("기본 실행 함수 : " + _word);
}
// 개발자: 홍길동 지역 자리
{
  const say = (_name) => console.log(_name + " Hello");
  say("홍길동");
}

// 개발자 : 고길동 지역자리
{
  const say = (_name) => console.log(_name + " 반가워");
  say("고길동");
}

say("테스터");
```

## 10. `this` 라는 키워드가 우리를 괴롭힐 겁니다.

- this 가 스코프와 연결되면서 혼란스럽다.

### 10.1. 전역 스코프의 this 는 `Window` 이다.

```js
console.log(this); // Window{...
```

### 10.2. function 의 this 는 `Window` 이다.

```js
function say() {
  console.log(this); // Window{...
  function hi() {
    console.log(this); // Window{...
  }
  hi();
}
say();
```

### 10.3. function 또는 표현식 함수는 this 사용시 위험한 코드이다.

- this 는 동일한 스코프를 가르쳐서 값이 변할 위험 존재
- this 는 물어보지도 않고 `var 변수`를 만들고 window 변수에 등록

```js
var brand = "nike";

function now() {
  this.brand = "adidas";
}

console.log("함수 실행전 : ", brand);

now();
console.log("함수 실행후 : ", brand);
```

<!-- ### 10.4. 화살표 함수의 this 는 `Window` 가 아닐 수 있다. -->

### 10.4. 객체에 속성으로 만든 함수에서의 this

- 객체에서의 this 는 객체 전체를 가르킨다.
- 어? function 사용하니까 `this 가 상황에 따라서 변하는데?`

```js
const Person = {
  name: "아이유",
  age: 20,
  sayHi: function () {
    console.log(this);
  },
};

Person.sayHi();
```

### 10.5. 객체 생성자 함수로 사용시 this

- 생성된 객체가 this 가 된다.

```js
// 대문자 즉 Pascal
function Coffee() {
  console.log(this);
}

Coffee();
new Coffee();
```

<!-- 객체를 생성하는 함수로 사용하고 싶다
new robot("길동이"); -->

<!-- function 배너만들기(_data) {
this.id = _data.id;
this.title = _data.title;
}

배너만들기 (1번)
new 배너만들기 (1번) -->

<!-- 홍길동 작업자
function 여행만들기(_data) {
this.id = _data.id;
this.title = _data.title;
}

김길동 작업자
function 여행만들기(_data) {
this.id = _data.id;
this.title = _data.title;
}

여행만들기(
  {
    id:5,
    title:"대구여행"
  }
)
window.id = 5;
window.title = "대구여행"
로컬 스코프를 만들어서 새로 빼낸다
대문자로 시작되는 함수는 객체만들려고 함
this를 사용해도 개별이라서 영향을 받지않음-->

### 10.6. 내가 이해하기로 아래처럼 정리했다.

- function 에 작성한 곳에 this 는 `어디서 함수를 사용했는가`에 따라 다르다.

```js
function say(){
  this 는 ?
}
say(); 지금은 global 영역 즉, window 에서 사용했으므로
```

```js
const Person = {
  say: function (){
    this ? Person 을 가르킨다.
  }
}

Person.say(); 지금은 Person dl say 함수를 사용했으므로

```

- 과연 출력 결과는 무엇이 나올까요?

```js
const Person = {
  name: "아이유",
  say: function () {
    console.log(this.name); // 아이유
  },
};
Person.say();
```

### 10.7. 화살표 함수의 this 는?

```js
const say = () => {
  console.log(this); // 현재의 상위 범위를 가리킨다
}; // window 출력됨
say();
```

```js
const Person = {
  name: "아이유",
  say: function () {
    console.log(this); // Person 객체
    console.log(this.name); // 아이유
  },
  sayArrow: () => {
    console.log(this); // window
    console.log(this.name); // window.name undefined
  },
};

Person.say();
Person.sayArrow();
```

## 11. 생성자 함수 (목적이 `객체를 생성`하는 것)

- `new 키워드`를 붙여서 함수를 호출한다.

```js
function Person() {
  console.log(this);
}
new Person();
```

```js
function Person(_name) {
  this.name = _name;
  this.say = function () {
    console.log(this.name + " 안녕하세요.");
  };
  console.log(this);
  console.log(this.name);
}
const a = new Person("둘리");
a.say();
const b = new Person("또치");
b.say();
const c = new Person("마이콜");
c.say();
const d = new Person("고길동");
d.say();
```

- `prototype `을 이용하면 공통 기능을 자동으로 부여한다.

```js
function Person(_name) {
  this.name = _name;
  console.log(this);
  console.log(this.name);
}
Person.prototype.say = function () {
  console.log(this.name + " 안녕하세요.");
};

const a = new Person("둘리");
a.say();
const b = new Person("또치");
b.say();
const c = new Person("마이콜");
c.say();
const d = new Person("고길동");
d.say();
```

## 12. 클래스

- 목적이 `객체를 생성`하는 것

### 12.1. 생성자 메소드 ( constructor Method )

```js
class Person {
  // 클래스에서 메소드 함수 만드는 법
  // 메소드명(){}

  // 객체를 생성하는 함수 : 변경 불가
  // 디폴트 객체 생성자 함수
  constructor(_name, _age) {
    console.log("new 하면 자동 실행");
    console.log(_name);
    this.name = _name;
    this.age = _age;
  }
}

const a = new Person("둘리", 500000);
console.log(a);
```

### 12.2. 나의 메소드 만들기

- `메소드명() { 할일 }`

```js
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  // say 라는 메소드
  say() {
    console.log(this.name);
  }
}

const a = new Person("둘리", 500000);
a.say();
```

### 12.3. 나의 속성 만들기

- Property : 프로퍼티
- constructor 메소드에서 만든다.

```js
 constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
```

### 12.4. 상속 이해해 보기

- 1단계

```js
// 동물
class Animal {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
// 강아지
class Dog {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
// 새
class Bird {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
```

- 단계 2.

```js
// 동물
class Animal {
  constructor(eye, nose) {
    this.eye = eye;
    this.nose = nose;
  }
  speak() {
    console.log("소리를 내요");
  }
}
const a = new Animal(2, 1);
a.speak();

console.log(a);
// 강아지
class Dog extends Animal {
  constructor() {
    super(2, 5); // new Animal();
    this.name = "강아지";
  }
  speak() {
    console.log("멍멍이라고 소리를 내요");
  }
}

const b = new Dog();
b.speak();
console.log(b);

// 새
class Bird extends Animal {
  constructor() {
    super(2, 1);
    this.name = "이쁜새";
    this.city = "대구";
  }
  speak() {
    console.log("짹짹이라고 소리를 내요");
  }
}
const c = new Bird();
c.speak();
console.log(c);
```

### 12.5. 접근 제한자 이해하기

- 프로퍼티와 메소드를 활용하는 경우 제한 걸기

### 12.5.1. 종류

- 만약 java 라면

```java
public  : 마음대로 접근가능, 공유하는
private : 사적인 즉, 클래스 내부에서만 접근가능
protected : 상속 받은 클래스들만 접근 가능
```

- 만약 javaScript 라면

```js
public : 마음대로 접근가능, 공유하는
#  : 사적인 즉, 클래스 내부에서만 접근가능(private 역할)
```

```js
class Animal {
  // 안적으면 public (기본값)
  eye;
  // #을 적으면 private
  #nose;

  constructor(eye, nose) {
    this.eye = eye;
    this.#nose = nose;
  }
}

class Dog extends Animal {
  constructor() {
    super(2, 5);
  }
}

const a = new Dog();
console.log(a);
console.log(a.eye);
console.log(a.#nose); // private 오류
```

### 12.6. static : 클래스에 고정된 속성, 메소드

```js
class MathCalc {
  constructor() {}
  static add(a, b) {}
  static minus(a, b) {}
}
MathCalc.add(3, 4);
MathCalc.minus(3, 4);

const a = new MathCalc();
a.add(3, 4); // 에러:생성된 객체로 접근 불가
```

## 13. 콜백함수

- `call` 은 함수를 실행(호출)한다는 의미
- 일반 함수에 `매개변수로 전달된 함수`를 callback 함수라 칭한다.

### 13.1. 콜백함수 활용처

- 주로 사용자 행동에 따른 `이벤트 발생`시 실행하는 함수
- 서버 연동하여 자료를 호출하는 `이벤트 발생`시 실행하는 함수

```js
const say = function () {};
const cry = () => {};

// 매개변수로 전달된 함수 실행
function run(a) {
  a();
}

run(say);
run(눈물);

// 아래 추천함.
run(function () {});
```

```js
const bt = document.querySelector(".bt");
bt.addEventListener("click", function () {});
```

## 14. 객체(Object)

### 14.1. 객체를 `가장 간단`하게 만드는 법.

-`객체 리터럴`로 생성한다. -`리터럴(literal)` 이라는 단어는 꼭 정의해 두세요.

- 리터럴은 정해진 `값을 개발자가 직접 작성`해 주는 것.
- 숫자 리터럴, 문자열 리터럴, 배열 리터럴, 객체 리터럴 등

```js
const 객체 = {
  객체키명: 키값,
  객체키명: 키값,
};
```

-만약 객체를 1개씩 만든다면 즉, `객체리터럴로 생성한다`면 객체명은 `Camel Case`로

```js
const personInfo = {
  nickName: "아이유",
  age: 20,
  jab: "singer",
};
```

### 14.2. 여러 개의 동일한 형태(구조)의 객체를 생성한다면

- `객체 생성자 함수`를 이용하는법

```js
function PersonInfo(_name, _age) {
  this.nickName = "아이유";
  this.age = 20;
  this.jab = "singer";
}
const 아이유 = new PersonInfo("아이유", 20);
const BTS = new PersonInfo("BTS", 20);
```

-`클래스`를 이용하는 법(클래스 이름이 `Pascal Case`)

```js
class PersonInfo {
  constructor(_name, _age) {
    this.nickName = "아이유";
    this.age = 20;
    this.jab = "singer";
  }
}
const 아이유 = new PersonInfo("아이유", 20);
const BTS = new PersonInfo("BTS", 20);
```

### 14.3. 연습예제

```js
const student_1 = {
  name: "홍길동",
  age: 10,
};
const student_1 = {
  name: "둘리",
  age: 2000,
};
```

```js
function student(_name, _age) {
  this.Name = _name;
  this.age = _age;
}
const student_1 = new student("홍길동", 10);
const student_2 = new student("둘리", 2000);
```

### 14.4 객체에 값 말고 `기능 추가` 하기

- 기능은 흔히 `메소드(Method)` 또는 `행위(Behavior)` 라고 호칭
- 객체 리터럴로 메소드 추가해 보기

```js
const student_1 = {
  name: " 홍길동",
  age: 20,
  // 정확하게는 property 로 기능 정의하기
  sayName: function () {
    this.name; //객체
  },
  sayAge: () => {
    this.age; //window
  },
  // 가장 최신 문법으로 정확히 메소드 임을 표현
  sayHi() {},
};
```

```js
function Student(){
  this.name = _name;
  this.age + _age;
  this.sayName = function (){
    consol.log(this.name); //객체
  },// 속성에 기능주기
  // 아 위험하다. 화살표 주의
    this.age = () => {
    consol.log(this.age); //window
  },
  // this.sayHi = () {
  //   consol.log(this.age);
  // },
}
Student.prototype.sayHi
const student_1 = new Student("홍길동",20)
```

- 클래스로 만들어 보자. (지금 괜찮다. 활용도 떨어진다.)

```js
class Student {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  sayName() {
    this.name;
  }
  // 화살표 독특하다. class 의 화살표는 객체
  sayAge = () => {
    this.age;
  };
  sayHi() {
    this.name;
  }
}
const student_1 = new Student("홍길동", 20);
```

- `정말 중요함 1. : Vue, React 에서는 기본이 객체 생성으로 시작함.`
- `정말 중요함 2. : Vue, React 에서는 화살표 함수를 기본으로 함.`
- `객체 생성자 함수`, `클래스`의 화살표 함수에서의 `this 는 모듈객체`를 가르킨다.

## 15. 배열(Array)

- 데이터 종류와 상관없이 여러개를 `인덱싱(순서대로)` 할 수 있습니다.

### 15.1. 배열 만드는 법

```js
//가장 많이 함 (배열 리터럴)
const 배열명 = [요소, 요소, 요소];
// 추천하지 않음
const 배열명 = new Array(3);
```

### 15.2. 배열의 요소를 인덱스로 찾기

```js
const 배열 = [1, "안녕", false, function () {}];
배열[0];
배열[1];
배열[2];
배열[3];
```

### 15.3. 배열도 객체라서 `속성`이 있어요.

```js
const 배열 = [1, 3, 5];
배열.length; //3개
```

### 15.4. 무지막지하게 데이터 종류 중 배열을 다룹니다.

- 일반적 데이터 형태 : `[{},{},{},{}]`
- 배열을 프로그래밍에서 많이 다루므로 `미리 함수를 제공`함 (빌트인 함수).
- 주의 사항으로서 절대로 `원본을 훼손하지 마셔야 합니다`(불변성 유지).

### 15.5. 배열을 다루는 함수에서 원본을 훼손하는 배열함수

- `이거 쓰시면 안됩니다.`

- push() : 배열 `끝`에 추가 // 메소드

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.push("커피");
console.log(lunchArr);
// 커피 추가 (원본 훼손)
// [  "사과",  "딸기",  "과자",  "햄버거",  "커피"]
```

- pop() : `끝` 요소 제거 및 제거된 요소 반환

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.pop();
console.log(lunchArr);
// 햄버거 제거 (원본 훼손)
// [  "사과",  "딸기",  "과자"]
```

- unshift() : `앞` 요소 추가

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.unshift("커피");
console.log(lunchArr);
// 햄버거 앞자리 추가 (원본 훼손)
// ["커피", "사과",  "딸기",  "과자", "햄버거"]
```

- shift() : `앞 첫번째` 요소 제거

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.shift();
console.log(lunchArr);
// 햄버거 앞자리 제거 (원본 훼손)
// ["딸기",  "과자", "햄버거"]
```

- splice() : `원하는 인덱스` 부터 추가, 제거

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.splice(1, 2);
console.log(lunchArr);
// 인덱스로 부터 개수만큼 제거 (원본 훼손)
// ["사과", "햄버거"]
```

- sort() : 배열의 순서를 정렬하기

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.sort();
console.log(lunchArr);
// ['과자', '딸기', '사과', '햄버거']
const enArr = ["k", "o", "r", "e", "A", "j", "p", "a", "n"];

// 원본훼손
enArr.sort();
console.log(enArr);
// ['A', 'a', 'e', 'j', 'k', 'n', 'o', 'p', 'r']
const numArr = [1, 2, 12, 25, 37, 30];
// 원본훼손
numArr.sort();
console.log(numArr);
// 단순히 sort() 를 사용하면 앞 글자를 기준으로 정렬됨.
// [1, 12, 2, 25, 30, 37]

// 내림 차순으로 정렬해 보자.
// numArr.sort((a, b) => b - a);
// [37, 30, 25, 12, 2, 1]

// 올림 차순
numArr.sort((a, b) => a - b);
console.log(numArr);
// [1, 2, 12, 25, 30, 37]
```

- reverse() : `역순` 순서를 뒤집어 저장

```js
const numArr = [1, 2, 12, 25, 37, 30];
// 원본 훼손
numArr.reverse();
console.log(numArr);
// [30, 37, 25, 12, 2, 1]
```

- fill() : 요소에 값을 채운다.

```js
const numArr = [1, 2, 12, 25, 37, 30];
// 원본 훼손
// numArr.fill(0);
console.log(numArr);
// [0, 0, 0, 0, 0, 0]
// 값 1 을 채워라
// 인덱스 3번으로 부터
// 인덱스 5번 전까지
numArr.fill(1, 3, 5);
console.log(numArr);
// [1, 2, 12, 1, 1, 30]
```

- flat() : `배열을 평탄화` 사용합니다.
  : flat 을 위한 별도의 라이브러가 존재합니다.
  : react 에서 모듈을 설치해서 사용합니다.

```js
const numArr = [1, 2, 3, ["a", "b", "c"], 8, 9];
// flat(배열의 단계)
const result = numArr.flat(1);
console.log(result);
// [1, 2, 3, 'a', 'b', 'c', 8, 9]
const num2Arr = [1, 2, [3, [4, [5, 6]]], 100];
const result2 = num2Arr.flat(1);
console.log(result2);
// [1, 2, 3, Array(2), 100]
const result3 = result2.flat(1);
console.log(result3);
// [1, 2, 3, 4, Array(2), 100]
const result4 = result3.flat(1);
console.log(result4);
// [1, 2, 3, 4, 5, 6, 100]
```

### 15.6. 배열을 다루는 함수에서 원본을 훼손하지 않고 `새로운 배열을 만들어 주는 함수`

- `데이터 불변성(immutability)` 유지하셨나요?

#### 15.6.1. map() 중요★☆★☆★☆★☆★☆★☆★☆★☆

배열.map(function(item, index,arr){return 값})
html 태그 형태로 배열을 만듦
배열.filter (function(요소, 인덱스,원본배열){return 값})

- `star가 1000만개` 가치가 있고, 자주활용
- 원본 배열의 요소에 동일한 함수 실행 후 새로운 배열로 생성

```js
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

const copyArrowArr = originArr.map((item, index) => {
  return `<a href="${index}">${item}</a>`;
});
console.log(`복제본 copyArrowArr : ${copyArrowArr}`);
```

#### 15.6.2. filter()

- `조건에 참`인 것만 모아서 배열 리턴
- 자주 사용은 합니다.

```js
const memberHong = {
  age: 10,
  name: "홍길동",
  role: "GUEST",
};
const memberKim = {
  age: 18,
  name: "김수한무",
  role: "MEMBER",
};
const memberPark = {
  age: 25,
  name: "박둘리",
  role: "ADMIN",
};

const originArr = [memberHong, memberKim, memberPark];

const result = originArr.filter(function (item, index, arr) {
  // return item.role === "ADMIN";
  return item.age <= 20;
});
console.log(result);
```

#### 15.6.3. slice()

- 배열의 일부를 복사한다.

```js
const numArr = [1, "a", "b", 4];
// 시작 인덱스로 부터 도착 인덱스 미만 요소 출력
const nowArr = numArr.slice(1, 3);
console.log(numArr);
console.log(nowArr); //  ['a', 'b']
```

#### 15.6.4. concat();

- 배열을 `합쳐서` 하나의 배열을 리턴.

```js
const numArr1 = [1, "a", "b", 4];
const numArr2 = [8, 100];
const result = numArr1.concat(numArr2);
console.log(result);
// [1, 'a', 'b', 4, 8, 100]
```

#### 15.6.5. reduce();

- 배열의 요소를 탐색하면서 누적 연산함.
- 누적된 결과를 출력함.

```js
const numArr1 = [1, 2, 3, 4];
// 문법이 좀 다릅니다.
// 보통은 ===>  (item, index, arr)
// const total = numArr1.reduce(함수, 초기값)
const total = numArr1.reduce((acc, cur) => {
  console.log("acc : ", acc);
  console.log("cur : ", cur);
  return acc + cur;
}, 0);

console.log("total : ", total);
```

```js
const numbers = [1, 4, 9, 16];

const sum = numbers.reduce(function (acc, num) {
  return acc + num;
});

console.log(sum); // 10
```

#### 15.6.6. join();

- `문자열로 배열을 연결한 결과`를 만든다.

```js
const numArr1 = [1, 2, 3, 4];
// 기본은 ,  연결된 글자
const result = numArr1.join("#");
// 결과는 string
console.log(`typeof ${typeof result} , ${result}`);
// typeof string , 1#2#3#4
```

#### 15.6.7. indexOf();

- 찾는 요소가 몇번째 인덱스 인지를 파악

```js
const numArr1 = [1, 2, 3, 4];
const result = numArr1.indexOf(3);
console.log(`typeof ${typeof result} , ${result}`);
// typeof number , 인덱스 2
```

#### 15.6.8. includes();

- 요소가 포함되었는지 아닌지

```js
const numArr1 = [1, 2, 3, 4];
const result = numArr1.includes(3);
console.log(`typeof ${typeof result} , ${result}`);
// typeof boolean , true
```

05/15
const todoArr = [
{id: 1, title: "공부", completed: true},
{id: 1, title: "운동", completed: true},
{id: 1, title: "식사", completed: false},
];
const completedArr = todoArr.filter(function(item, index, arr){
if(item.completed === true) {
retun item;
}
})
05/16
목표. 새로운 배열을 만듦 메소드 결과가
const 새배열 = 배열.메소드명(function(요소, 인덱스, 원본배열){})
const 새배열 = 배열.map(function(요소, 인덱스, 원본배열){})
const 새배열 = 배열.filter(function(요소, 인덱스, 원본배열){})

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(function (x) {
return x \* 2;
});

console.log(map1);

https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures
자바스크립트 안내서

const numArr1 = [1, 2, 3, 4];
const result = numArr1.join("#");

result ... "1#2#3#4" // 문자열 만들때

## 16. 객체(`{리터럴}`)와 배열(`[]`)의 필수 이해 사항

### 16.1. 반복문

- 배열에서 사용하는 경우의 반복문 문법

```js
const arr = [1, 2, 3, 4];
// 가장 전통적인 방식
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 배열의 요소 반복문 버전
arr.forEach(function (item) {
  console.log(item);
});
// 배열의 for of 문
for (const item of arr) {
  console.log(item);
}
// 배열의 map : 새로운 배열을 만듦
const now = arr.map(function (item) {
  return item;
});
```

- 객체에서 사용하는 경우의 반복문 문법

```js
const person = {
  age: 10,
  nickName: "hong",
  isMember: false,
};

// 객체의 속성명 알아내기
for (let key in person) {
  console.log(key); //age,nickName,isMember
}
for (let key in person) {
  console.log(person[key]); //10,hong,fals
}
```

### 16.2. 값을 추출해서 보관하기

```js
const arr = ["사과", "딸기", "참외"];
// 아래처럼 요소 값을 알아내는 것은 비추천
arr[0];
arr[1];
arr[2];
// 반복문으로 알아내기
for (let i = 0; i < arr.lenght; i++) {
  arr[i];
}
```

- `배열 Spread 문법 : 별이 5000 만개` 흩뿌린다
  - 배열의 요소를 알아내고,
  - 배열의 요소를 복사하고,
  - 새로운 배열에 담아주고

```js
const arr = ["사과", "딸기", "참외"];
// 아래처럼 하지는 않습니다.
const apple == arr[0];
const straw == arr[1];
const malon == arr[2];

// 배열 Spread 문법
const[apple, straw, malon]= [...arr];
// 두 배열을 Spread 문법으로 합치기
const numArr = [1, 2, 3];
const strArr = ["a", "b", "c"];
// [1,"a","b","c",2,3]
// 아래처럼 권장하진 않습니다
const sampleArr = [1, strArr[0],strArr[1],strArr[2],2,3];
// Spread 활용
const resultArr = [1, ...strArr, 2, 3];
// 구분하세요. (Rest 파라메터 문법)
functiong showArr(...rest){}
```

- 객체

```js
const person = {
  age: 10,
  nickName: "hong",
  isMember: false,
};
// 아래처럼 하지 않습니다
const newperson = {
  age: person.age,
  nickName: person.nickName,
  isMember: person.isMember,
};
// 객체 Spread 문법
const nowPerson = { ...person };
// 두개의 객체 를 합치기
const a = { age: 10, name: "hong" };
const b = { city: "대구", year: 2025 };
const result = { ...a, ...b };
// 결과 {age: 10, name: "hong",city: "대구", year: 2025}
// 원복 객체 복사하고 새로운 속성 추가하기
const ori = { a: 1, b: "안녕" };
const now = { ...ori, gogo: "happy" };
// now { a:1, b:"안녕", gogo: happy"}
// 함수에 매개변수로 객체를 복사해서 전달하기

function show({ name, age }) {
  console.log(name);
  console.log(age);
}
const user = { name: "아이유", age: 20 };
show({ ...user });
```

## 17. 비동기(Asyncronous) 통신

-`비동기`는 시간이 오래 걸리는 작업

- 예) 데이터 서버에서 자료를 요청(Request) 및 응답(Response)
- 예) 데이터 서버에서 파일 전송 시
- 비동기 작업 중에 결과를 기다리지 않고 다른 작업을 병렬로 실행하도록

### 17.1. 비동기 작업 문법 종류

- XHR (Xml Http Request)
- Callback
- Promise
- aysnc/await

### 17.2. 데모용 API 사이트

- https://jsonplaceholder.typicode.com/
- https://www.data.go.kr/index.jsp

### 17.3 XHR

- 서버와 통신하는 작업을 위해서 기본적으로 제공이 됨.
- `Request` : url 로 자료를 요청한다.
- `Response` : 응답, url로 부터 자료를 돌려받는다.
- status 200 류의 값 : 정상적으로 자료를 응답합.
- status 400 류의 값 : url 이 존재하지 않음.
- status 500 류의 값 : 데이터 서버가 오류거나 전원이 꺼짐.
- https://developer.moilla

```js
// 데이터 서버에 자료를 호출함
// 1. xhr 객체 한개 만듦
const xhr = new XMLHttpRequest();
// 2. 주소를 연결함
// 백엔드 호출시 메소드 5가지 (RestAPI 라고 함)
// GET : 자료를 주세요.
// POST : 자료를 추가합니다.
// DELETE : 자료를 삭제해 주세요.
// PUT : 자료 전체를 수정해 주세요.
// PATCH : 자료 내용에서 일부분ㅁ나 수정해 주세요.
xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
// 3. 웹브라우저로 요청을 합니다. 리퀘스트
xhr.send();
// 4. 요청 이후 응답이 오기를 기다린다.
xhr.onload = function () {
  console.log("요청이 되어졌을 때 백엔드 회신정보:", xhr);
  if (xhr.status === 200) {
    console.log("정상적인 Response 됨");
  } else if (xhr.status === 404) {
    console.log("주소가 잘못되었네요.");
  } else if (xhr.status === 505) {
    console.log("서버에 오류입니다. 잠시 후 시도해 주세요.");
  }
};
```

### 17.4. Callback 활용하기

- 자료 응답 후 처리하기

```js
// 데이터 서버에 자료를 호출함
function getData(api = "posts") {
  // 1. xhr 객체 한개 만듦
  const xhr = new XMLHttpRequest();
  // 2. 주소를 연결함
  xhr.open("GET", `https://jsonplaceholder.typicode.com/photos${api}`);
  // 3. 웹브라우저로 요청을 합니다. 리퀘스트
  xhr.send();
  // 4. 요청 이후 응답이 오기를 기다린다.
  xhr.onload = function () {
    console.log("요청이 되어졌을 떄 백엔드 회신정보:", xhr);
    if (xhr.status === 200) {
      console.log("정상적인 Response 됨");
    } else if (xhr.status === 404) {
      console.log("주소가 잘못되었네요.");
    } else if (xhr.status === 505) {
      console.log("서버에 오류입니다. 잠시 후 시도해 주세요.");
    }
  };
}

// 함수사용 ${api} 를 사용하면 다 안적어도됨
getData("posts"); // 함수call
getData("comments");
getData("albums");
getData("photos");
getData("todos");
getData("users");
```

```js
// 데이터 서버에 자료를 호출함
function getData(api = "posts", fn) {
  // 1. xhr 객체 한개 만듦
  const xhr = new XMLHttpRequest();
  // 2. 주소를 연결함
  xhr.open("GET", `https://jsonplaceholder.typicode.com/photos${api}`);
  // 3. 웹브라우저로 요청을 합니다. 리퀘스트
  xhr.send();
  // 4. 요청 이후 응답이 오기를 기다린다.
  xhr.onload = function () {
    // console.log("요청이 되어졌을 떄 백엔드 회신정보:", xhr);
    if (xhr.status === 200) {
      // console.log("정상적인 Response 됨:",xhr.response);
      // 콜백함수 : 자료가 오면 자료를 활용하고 싶다.
      fn(xhr.response);
    } else if (xhr.status === 404) {
      console.log("주소가 잘못되었네요.");
    } else if (xhr.status === 505) {
      console.log("서버에 오류입니다. 잠시 후 시도해 주세요.");
    }
  };
}
// 콜백함수 만들기 : 자료가 들어오면 처리함.
const postsParser = function (res) {
  console.log(res);
};
const commentsParser = function (res) {};
const albumsParser = function (res) {};
const photosParser = function (res) {};
const todosParser = function (res) {};
const usersParser = function (res) {};
// 함수사용
getData("posts", postsParser); // 함수call
getData("comments", commentsParser);
getData("albums", albumsParser);
getData("photos", photosParser);
getData("todos", todosParser);
getData("users", usersParser);
```

```js
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
        reject("데이터 없어요.");
      } else if (xhr.status === 505) {
        console.log("서버가 불안정합니다. 잠시 후 재접속해주세요.");
      }
    };
  });
}

getData("posts")
  .then(function (data) {})
  .catch(function (err) {}); // then(성공할때 resolve).catch(실패할때 reject)

getData("posts").then().catch(); // 함수call
getData("comments").then().catch();
getData("albums").then().catch();
getData("photos").then().catch();
getData("todos").then().catch();
getData("users").then().catch();
```

### 17.5. Promise 활용하기

- 서버 연동이 끝날 때 원하는 콜백함수 실행
- 2개의 매개변수를 전달 받는다.
- resolve 콜백함수 : 성공시 실행함수
- reject 콜백함수 : 실패시 실행함수

```js
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
  .then(function (data) {
    return getData("comments");
  })
  .then(function (data) {
    return getData("albums");
  })
  .then(function (data) {
    return getData("photos");
  })
  .then(function (data) {
    return getData("todos");
  })
  .then(function (data) {
    return getData("users");
  })
  .catch(function (err) {});
```

### 17.6. async / await

- 강력히 추천합니다.
- Promise 를 편하게 쓰기위해서 최신 문법 제공
- `function 키워드 앞쪽에 async` 를 작성합니다.
- `BE 연동 쪽에 await` 를 작성합니다.
- 1단계

```js
async function getAllData() {
  try {
  } catch (error) {}
}

getAllData();
```

- 2단계

```js
async function getAllData() {
  try {
    const apiUrl = "https://jsonplaceholder.typicode.com";
    // BE 데이터 연동 시도
    let res = await fetch(`${apiUrl}/posts`);
    let data = await res.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
    console.log(data);
    res = await fetch("https://jsonplaceholder.typicode.com/comments");
    data = await res.json();
    console.log(data);
    res = await fetch("https://jsonplaceholder.typicode.com/albums");
    data = await res.json();
    console.log(data);
    res = await fetch("https://jsonplaceholder.typicode.com/photos");
    data = await res.json();
    console.log(data);
    res = await fetch("https://jsonplaceholder.typicode.com/todos");
    data = await res.json();
    console.log(data);
    res = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("ERROR 입니다. : " + error);
  }
}

getAllData();
```
