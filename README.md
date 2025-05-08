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
    <script scr="js/lib.js"></script>
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
