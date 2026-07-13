---
title: "1-3 데이터 타입"
status: "completed"
description: "JavaScript의 데이터 타입과 원시 타입, 참조 타입의 차이를 이해합니다."
category: "JavaScript"
section: "Basics"
tags:
  - javascript
  - basics
  - data-types
---

<style>
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-cy{background:rgba(234,179,8,.06);border-color:#eab308}
.wda-cy .wda-clabel{color:#ca8a04}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 16px;margin:.8rem 0 1.6rem;font-size:.83rem;line-height:1.75}
.wda-goal-label{font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#22c55e;display:block;margin-bottom:10px}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-fcard-list{list-style:none;padding:0;margin:.4rem 0 0;font-size:.71rem;line-height:1.6;opacity:.75}
.wda-fcard-list li::before{content:"· "}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(245,158,11,.15);color:#f59e0b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-sdsc ul{margin:.3rem 0 0;padding-left:1.1rem}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px}
.wda-compare-ttl{font-size:.84rem;font-weight:700;margin-bottom:8px}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:4px}
.wda-legacy{border-color:rgba(239,68,68,.22);background:rgba(239,68,68,.02)}
.wda-modern{border-color:rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.79rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:200px}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
</style>

## 🎯 학습 목표

<div class="wda-goal">


  📌 <strong>데이터 타입</strong> — 원시 타입과 참조 타입을 구분하고 특징을 설명할 수 있다.<br>
  🔄 <strong>타입 변환</strong> — 암묵적 타입 변환과 명시적 타입 변환의 동작을 이해한다.
</div>

---

## 1. 데이터 타입이란?

데이터 타입은 **값의 종류를 구분하는 분류**다. 아래 표처럼 크게 **원시 타입**과 **참조 타입**으로 나뉜다.

| 구분 | 원시 타입 (Primitive) | 참조 타입 (Reference) |
| --- | --- | --- |
| 의미 | 값 자체를 저장한다 | 값의 주소(참조)를 저장한다 |
| 저장 방식 | 값 하나만 저장한다 | 여러 값을 묶어서 관리한다 |
| 포함 타입 | `number` `string` `boolean` `null` `undefined` `symbol` `bigint` | `object` `array` `function` |
| 특징 요약 | 단순한 값 | 복합 구조 |
| 메모리 개념 | 값 자체가 변수에 들어간다 | 변수에는 주소만 들어간다 |

타입이 중요한 이유는 다음과 같다.
- **연산** — 의도한 숫자 계산은 number 타입에서 안전하게 수행된다.<br>
  JavaScript는 암묵적 타입 변환이 있어 문자열도 숫자로 바뀌는 경우가 있지만, 예측하기 어려워 버그의 원인이 될 수 있다.
- **메모리** — 타입마다 저장 방식이 다르다.
- **에러 방지** — 잘못된 연산을 미리 막을 수 있다.

**📝 핵심 정리**

<div class="wda-callout wda-ci">
  JavaScript의 값은 크게 <strong>원시 타입(값 자체)</strong>과 <strong>참조 타입(주소)</strong>로 나뉜다.
</div>



---

## 2. 원시 타입과 특수 값

JavaScript의 원시 타입은 정확히 **7가지**(`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`)다.

| 타입 | 설명 | 예시 |
| --- | --- | --- |
| **string** | 문자열을 표현한다 | `"안녕"` `'hello'` |
| **number** | 숫자를 표현한다. 정수·실수 구분이 없다 | `42` `3.14` `-10` `1e6` |
| **boolean** | 참 / 거짓 값이다 | `true` `false` |
| **null** | 의도적으로 비어 있음을 의미한다 | `null` |
| **undefined** | 값이 아직 정의되지 않았다 | `undefined` |
| **symbol** | 고유한 식별자다 | `Symbol()` |
| **bigint** | 아주 큰 정수를 표현한다 | `9007n` |

아래는 함께 알아두면 좋은 관련 개념이다. **별도 타입이 아니라는 점**에 주의한다.

| 개념 | 설명 | 예시 |
| --- | --- | --- |
| **template literal** | 별도 타입이 아니라 백틱(`` ` ``)을 사용해 string을 만드는 표기법이다. 변수 삽입·여러 줄 가능하다 | `` `이름: ${name}` `` |
| **특수 숫자 값** | 별도 타입이 아니라 number 타입에 속하는 특수 값이다 | `Infinity` `-Infinity` `NaN` |
| **NaN** | 별도 타입이 아니라 number 타입에 속하는, 숫자가 아닌 연산 결과 값이다 | `"abc" * 2` → `NaN` |

---

## 3. 원시 타입 vs 참조 타입

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">원시 타입 (Primitive)</div>
    • 값(Value) 그 자체가 변수에 담긴다<br>
    • 작고 가벼워서 주머니(스택 메모리)에 쏙 들어간다<br>
    • 복사하면 내용물만 똑같이 베껴서 새로운 포스트잇에 적어준다
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">참조 타입 (Reference)</div>
    • 값이 너무 커서 창고(힙 메모리)에 보관한다<br>
    • 변수에는 창고 열쇠(주소)만 담긴다<br>
    • 복사하면 열쇠만 복사해준다. 열쇠로 문을 열면 같은 물건이 들어 있다
  </div>
</div>

> 스택/힙 설명은 실제 엔진 내부 구현을 단순화한 비유다. 핵심은 원시 타입은 값 자체가 복사되고, 참조 타입은 객체를 가리키는 참조가 복사된다는 점이다.

```javascript
// 원시 타입 — 값 자체가 복사된다
let primitiveA = 10;
let primitiveB = primitiveA;
// primitiveA와 primitiveB는 완전히 별개다
```

```javascript
// 참조 타입 — 주소가 복사된다
let objectA = { name: "김" };
let objectB = objectA;
// objectA와 objectB는 같은 객체를 가리킨다
```



---

## 4. string 타입

문자열을 표현하는 타입이다.

**📝 문자열 선언 방법** — 따옴표 3가지 방식을 모두 사용할 수 있다.

```javascript
let str1 = "큰따옴표";   // 큰따옴표 문자열
let str2 = '작은따옴표'; // 작은따옴표 문자열
let str3 = `백틱`;       // 템플릿 리터럴

// 문자열 연결
let name = "철수";
let greeting = "안녕, " + name; // 안녕, 철수
```

**⚡ 템플릿 리터럴 (ES6)** — `${}` 안에 변수·표현식을 삽입하고, 여러 줄 문자열도 가능하다.

```javascript
let name = "영희";
let age = 20;

let intro = `이름: ${name}, 나이: ${age}세`;
// 결과: 이름: 영희, 나이: 20세

let multi = `첫째 줄
둘째 줄`;
```

<div class="wda-callout wda-ci">
  <span class="wda-clabel">🔹 백틱(`) 사용 시 장점</span>
  • 변수 삽입 가능<br>
  • 여러 줄 문자열 가능<br>
  → <strong>실무에서 권장</strong>
</div>



---

## 💻 실습: 문자열 다루기

직접 **Console에 입력**해본다.

```javascript
let firstName = "길동";
let lastName = "홍";

lastName + firstName;            // 더하기(+)로 연결
`제 이름은 ${lastName}${firstName}입니다`; // 템플릿 리터럴
`1 더하기 2는 ${1 + 2}입니다`;
```

핵심 정리:
- 문자열은 `" "`, `' '`, `` ` ` `` 세 가지로 만든다.
- 문자열 연결은 `+` 또는 **템플릿 리터럴**을 사용한다.
- 템플릿 리터럴은 **${}**, **여러 줄**, **가독성** 때문에 실무 필수다.



---

## 5. 리터럴(Literal)이란?

값 그 자체를 코드에 직접 적은 것이다.

```javascript
100              // 숫자 리터럴
"Hello"          // 문자열 리터럴
true             // 불리언 리터럴
{ name: "Kim" } // 객체 리터럴
// 코드에 적힌 그대로 데이터가 되는 것
```

"템플릿 리터럴"은 문자열 값을 만드는 새로운 표기법이라는 뜻이다.

**❌ 리터럴이 아닌 것** — 변수나 식은 계산되거나 참조되어야 값이 된다.

```javascript
let age = 20;
let year = 2023;
// 변수 age나 식 10 + 10은 계산되거나 참조되어야 값이 된다
```

---

## 6. number 타입

숫자를 표현하는 타입이다. **정수와 실수를 구분하지 않는다.**

**🔢 숫자 종류**

```javascript
let integer    = 42;   // 정수
let float      = 3.14; // 실수
let negative   = -10;  // 음수
let scientific = 1e6;  // 1000000 (지수 표기법)
```

**∞ 특수 숫자 값**

```javascript
let inf    = Infinity;  // 무한대
let negInf = -Infinity; // 음의 무한대
let notNum = NaN;       // Not a Number
```

**❓ NaN (Not a Number)** — 숫자가 아닌 연산 결과다.

```javascript
let result  = "abc" * 2; // NaN
let invalid = 0 / 0;     // NaN
```

<div class="wda-callout wda-ci">
  <span class="wda-clabel">🔹 NaN 확인 방법</span>
  <code>isNaN(result);         // true</code><br>
  <code>Number.isNaN(result);  // true (더 정확)</code>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <code>NaN === NaN; // false</code><br>
  NaN은 <strong>자기 자신과도 같지 않은 유일한 값</strong>이다.
</div>

**⚠️ 부동소수점 오류와 해결책**

<div class="wda-callout wda-ci">
  JavaScript는 <strong>부동소수점 방식</strong>을 사용하여 <code>0.1 + 0.2 !== 0.3</code>이 된다.<br><br>
  컴퓨터는 효율을 위해 <strong>IEEE 754(부동소수점)</strong> 표준을 사용하지만, 정밀도에 한계가 있다.<br><br>
  <strong>이진수의 한계</strong><br>
  • 컴퓨터는 숫자를 1/2, 1/4, 1/8... 의 합으로 표현한다.<br>
  • 0.5 (1/2)는 깔끔하게 표현되지만, 0.1은 이진수로 변환 시 무한소수가 된다.<br>
  • (마치 10진수에서 1/3 = 0.3333... 인 것과 같은 원리다.)<br><br>
  <strong>Trade-off (교환)</strong><br>
  한정된 메모리로 매우 큰 수와 작은 수를 모두 표현하기 위해, <strong>범위</strong>와 <strong>속도</strong>를 얻는 대신 <strong>정확성</strong>을 일부 포기했다.
</div>

**🔢 방법 1. 정수로 변환하여 계산** — 소수점을 제거하기 위해 10의 배수를 곱해 정수로 만든 뒤, 다시 나누는 방식이다.

```javascript
(0.1 * 10 + 0.2 * 10) / 10
// 3 / 10 = 0.3
```

**📐 방법 2. 반올림 함수 사용** — `toFixed()` 메서드를 사용하여 소수점 자릿수를 제한한다.

```javascript
(0.1 + 0.2).toFixed(1)
// "0.3" (주의: 문자열로 반환됨)
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  toFixed()는 결과값을 <strong>문자열(String)</strong>로 반환하므로, 숫자 계산이 더 필요하다면 다시 Number()로 형변환해야 한다.
</div>

---

## 💻 실습: 숫자 다루기

```javascript
10 / 0;    // Infinity
"수학" / 2; // NaN
0.1 + 0.2; // 0.30000000000000004
```

```javascript
let price = 1000;
let rate  = 0.5;

price * rate; // 500
```



---

## 7. boolean, null, undefined 타입

자바스크립트에서 논리적인 상태나 "없음"을 나타내는 중요한 타입들이다.

**boolean 타입**은 논리적 참(`true`)과 거짓(`false`) 두 가지 값만 가진다.  
주로 조건문에서 프로그램의 흐름을 제어할 때 사용한다.

```javascript
let isLoggedIn = true;  // 사용자가 로그인한 상태임을 나타냄
let hasApple  = false;  // 사과를 가지고 있지 않은 상태임을 나타냄

console.log(isLoggedIn); // true 출력
```

**💡 보충 설명 — 비교 연산자와 boolean**

<div class="wda-callout wda-ci">
  • 직접 true, false를 타이핑하기보다 <code>10 > 5</code> 같은 비교 연산의 결과로 얻는 경우가 훨씬 많다.<br>
  • 이 결과값들이 모여서 서비스의 복잡한 로직(예: 권한이 있는가? 품절인가?)을 결정하게 된다.
</div>

**🔄 undefined vs null** — 두 타입 모두 "값이 없다"는 의미를 가지지만, 사용 목적이 명확히 다르다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">📭 undefined</div>
    <div class="wda-compare-label">시스템이 자동 할당</div>
    변수를 선언만 하고 값을 할당하지 않았을 때 자바스크립트 엔진이 자동으로 할당하는 값이다. (시스템적인 "없음")
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">🚫 null</div>
    <div class="wda-compare-label">개발자가 의도적으로 할당</div>
    변수에 값이 없음을 명시적으로 나타내기 위해 개발자가 의도적으로 넣는 값이다. (의도적인 "없음")
  </div>
</div>

```javascript
let empty;            // 변수만 만들고 아무것도 넣지 않음
console.log(empty);   // 결과: undefined (컴퓨터가 "비어있네?"라고 판단)

let user = null;      // 개발자가 "지금은 유저 정보가 없다"고 직접 표시
console.log(user);    // 결과: null (의도된 빈 값)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <code>undefined</code>는 "아무것도 안 들어있어서 뭔지 모르겠다"는 뜻이다.<br>
  • <code>null</code>은 "여기는 확실히 비어있는 상태다"라고 도장을 찍어놓은 것이다.<br>
  • 값이 의도적으로 비어 있음을 표현해야 할 때는 null을 명시적으로 사용하면 코드의 의도를 더 분명하게 만들 수 있다.
</div>

**🔍 typeof로 타입 확인**

```javascript
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (자바스크립트의 유명한 설계상 오류)
```

<div class="wda-callout wda-cs">
  <span class="wda-clabel">📌 핵심 요약</span>
  • <strong>boolean</strong> — 스위치처럼 온/오프 상태를 나타낸다.<br>
  • <strong>undefined</strong> — 선언 후 할당되지 않은 상태다.<br>
  • <strong>null</strong> — 의도적으로 비워둔 상태다.

</div>

---

## 💻 실습: 참/거짓과 빈 값 비교

```javascript
// 진실 판별
10 > 5;          // 결과: true
"A" === "B";     // 결과: false (문자가 다르므로)
Boolean("");     // 결과: false (빈 문자열은 거짓으로 취급됨)

// 텅 빈 값 비교
let empty;       // 선언만 함
console.log(empty);              // undefined (컴퓨터가 자동으로 넣은 상태)

let blank = null;                // 개발자가 직접 비움
console.log(blank === undefined); // 결과: false (의도적으로 비운 것과 원래 없는 것은 다름)
```

**💡 보충 설명: null vs undefined 한 줄 요약**

<div class="wda-callout wda-ci">
  • <strong>null :</strong> "여기는 빈 자리라고 내가 직접 표시해뒀어!" (개발자의 의지)<br>
  • <strong>undefined :</strong> "여기는 아직 아무것도 들어온 적이 없어서 나도 몰라!" (시스템의 기본값)
</div>

---

## 8. 참조 타입 (Reference Type)

여러 값을 묶어서 저장하는 복합 타입이다.  
메모리에 값이 직접 들어가는 원시 타입과 달리, 값이 있는 **주소**를 참조한다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📦</div>
    <div class="wda-fcard-ttl">object (객체)</div>
    <div class="wda-fcard-dsc">키(key)와 값(value)의 쌍으로 이루어진 데이터 뭉치다.</div>
    <ul class="wda-fcard-list">
      <li>중괄호 <code>{}</code>로 생성한다</li>
      <li>점 표기법 또는 대괄호 표기법으로 접근한다</li>
    </ul>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📋</div>
    <div class="wda-fcard-ttl">array (배열)</div>
    <div class="wda-fcard-dsc">순서가 있는 리스트 형태의 데이터다.</div>
    <ul class="wda-fcard-list">
      <li>대괄호 <code>[]</code>로 생성한다</li>
      <li>인덱스는 0부터 시작한다</li>
    </ul>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⚙️</div>
    <div class="wda-fcard-ttl">function (함수)</div>
    <div class="wda-fcard-dsc">특정 작업을 수행하는 코드의 집합이다.</div>
    <ul class="wda-fcard-list">
      <li><code>function</code> 키워드로 선언한다</li>
      <li>호출(call)하면 실행된다</li>
    </ul>
  </div>
</div>

**object (객체)** 예제

```javascript
let user = {
  name: "철수", // 이름 속성 (key: name, value: "철수")
  age: 25       // 나이 속성 (key: age, value: 25)
};

console.log(user.name);    // 마침표 표기법: "철수" 출력
console.log(user["age"]);  // 대괄호 표기법: 25 출력 (키 이름을 문자열로 입력)
```

**array (배열)** 예제

```javascript
let fruits = [
  "사과",   // 0번 인덱스
  "바나나", // 1번 인덱스
  "포도"    // 2번 인덱스
];

console.log(fruits[0]);      // 0번부터 시작하므로 "사과" 출력
console.log(fruits.length);  // 배열의 길이인 3 출력
```

**function (함수)** 예제

```javascript
function greet(name) {
  return `안녕, ${name}!`;
}

console.log(greet("영희")); // 결과: "안녕, 영희!"
```

**💡 보충 설명: 원시 타입 vs 참조 타입 (메모리 비유)**

<div class="wda-callout wda-ci">

| **구분** | **비유** | **특징** |
| --- | --- | --- |
| **원시 타입** | 포스트잇 | 값 자체를 직접 주머니에 넣는다. 복사하면 포스트잇을 하나 더 써서 주는 것과 같아 **서로 영향을 주지 않는다.** |
| **참조 타입** | 사물함 키 | 물건(데이터)은 거대한 사물함(Heap)에 넣고, 주머니에는 그 **사물함 키(주소)**만 넣는다. 복사하면 키만 하나 더 주는 것이라, **같은 사물함을 열게 되어 서로 영향을 준다.** |

</div>

---

## 💻 실습: 참조 타입 맛보기

모양이 완전히 같아도, 가리키는 **주소(사물함 키)**가 다르면 컴퓨터는 "다르다"고 판단한다.

```javascript
// 모양은 같지만 서로 다른 사물함(주소)을 생성함
{} === {} // 결과: false (다른 사물함 키임)
[] === [] // 결과: false (다른 사물함 키임)
```

**💡 보충 설명: 왜 false가 나오나요?**

<div class="wda-callout wda-ci">
  • 참조 타입에서 <code>===</code> 비교는 내부의 내용물이 같은지가 아니라, <strong>"같은 사물함 키(주소)를 가졌는가?"</strong>를 본다.<br>
  • <code>{}</code>를 새로 쓸 때마다 새로운 사물함이 배정되기 때문에, 겉모양이 똑같은 빈 객체라도 주소가 달라 false가 뜨는 것이다.
</div>

간단한 데이터 묶기 실습:

```javascript
let me = { name: "나" };
me.name           // 결과: "나" (마침표로 속성에 접근)

let list = [1, 2];
list[0]           // 결과: 1 (0번 인덱스로 첫 번째 값 접근)
```

---

## 9. typeof 연산자

값의 타입을 확인하여 문자열(`string`)로 반환해주는 연산자다.  
데이터가 어떤 타입인지 불확실할 때 사용하여 안전하게 코드를 작성할 수 있다.

```javascript
// 원시 타입 확인
typeof "Hello"       // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof Symbol()      // "symbol"
typeof 10n           // "bigint"

// 참조 타입 확인
typeof {}            // "object"
typeof []            // "object" (주의: 배열도 객체로 표시됨!)
typeof function(){}  // "function"
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <code>typeof</code>는 함수가 아니다! <code>typeof(123)</code>처럼 괄호를 써도 작동은 하지만, 원래는 <code>typeof 123</code>처럼 한 칸 띄우고 쓰는 연산자다. 마치 <code>+</code>, <code>-</code> 같은 기호와 비슷한 지위라고 생각하면 된다.
</div>

⚠️ **typeof 주의점** — 자바스크립트의 오래된 설계상 오류(버그)와 배열 확인법을 반드시 기억해야 한다.

<div class="wda-callout wda-cw">
  <span class="wda-clabel">🔹 typeof null === "object" (유명한 버그)</span>
  • <code>null</code>은 빈 값임에도 불구하고 <code>typeof</code>를 쓰면 <code>"object"</code>가 나온다.<br>
  • 이는 자바스크립트 초기의 버그이지만, 기존 웹사이트들과의 호환성 때문에 수정되지 않고 유지되고 있다.<br>
  • <strong>해결책:</strong> <code>null</code>인지 확인하려면 <code>typeof</code> 대신 <strong>직접 비교</strong>를 사용하라.
</div>

```javascript
let x = null;
console.log(x === null); // 결과: true (이 방법이 정확함)
```

<div class="wda-callout wda-cw">
  <span class="wda-clabel">🔹 배열(Array) 확인 방법</span>
  • 배열에 <code>typeof</code>를 쓰면 <code>"object"</code>가 나오기 때문에, 일반 객체인지 배열인지 구분할 수 없다.<br>
  • <strong>해결책:</strong> <code>Array.isArray()</code> 메서드를 사용하라.
</div>

```javascript
let arr = [1, 2, 3];

typeof arr;           // "object" (구분 불가)
Array.isArray(arr);   // true (배열임을 정확히 확인 가능)
```



---

## 💻 실습: 타입 확인해보기

직접 콘솔에 입력하여 애매한 녀석들을 판별해 봅시다.

```javascript
// 애매한 녀석들 확인
typeof 123       // "number"
typeof "123"     // "string" (따옴표가 있으면 무조건 문자열)
typeof null      // "object" (버그 주의!)
typeof undefined // "undefined"

// 배열과 객체 정밀 확인
typeof []         // "object"
typeof {}         // "object"
Array.isArray([]) // true (배열 판독기)
```

---

## 10. 타입 변환 (Type Conversion)

자바스크립트는 상황에 따라 데이터의 타입을 자동으로 바꾸기도 하고, 개발자가 직접 바꾸기도 한다.

**🤖 암묵적 변환 (Type Coercion)** — 자바스크립트가 편의를 위해 자동으로 타입을 바꾸는 현상이다.  
예측하기 어려워 버그의 원인이 되기도 한다.

```javascript
"5" + 3     // 결과: "53" (숫자 3이 문자열로 바뀌어 붙음)
"5" - 3     // 결과: 2 (문자열 "5"가 숫자로 바뀌어 계산됨)
"5" * 2     // 결과: 10
!0          // 결과: true (숫자 0은 거짓(falsy)이므로 반대로 뒤집으면 참)
!""         // 결과: true (빈 문자열은 거짓(falsy)임)
"10" == 10  // 결과: true (타입을 숫자로 맞춰본 후 비교함)
```

**🎯 명시적 변환** — 개발자가 의도를 가지고 함수를 사용하여 타입을 직접 바꾸는 방식이다. (권장 방법)

```javascript
// 문자열로 변환
String(123)        // 결과: "123"
(123).toString()   // 결과: "123"

// 숫자로 변환
Number("42")       // 결과: 42
parseInt("42px")   // 결과: 42 (숫자만 추출해서 정수로 바꿈)
parseFloat("3.14") // 결과: 3.14 (소수점까지 유지함)

// 불리언으로 변환
Boolean(1)         // 결과: true
Boolean("")        // 결과: false
```



---

## ✅ 실무 꿀팁 : 안전하게 문자열로 바꾸기

`String()`과 `.toString()`은 비슷해 보이지만, **데이터가 없을 때(null, undefined)** 큰 차이가 난다.

<div class="wda-compare">
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-ttl">✅ String()</div>
    <div class="wda-compare-label">추천</div>
    어떤 값이 들어와도 에러 없이 문자열로 바꿔준다. <code>null</code>, <code>undefined</code>도 안전하게 처리한다.
  </div>
  <div class="wda-compare-card wda-legacy">
    <div class="wda-compare-ttl">⚠️ .toString()</div>
    <div class="wda-compare-label">주의 필요</div>
    값이 비어있으면(<code>null</code>, <code>undefined</code>) 앱이 멈춰버린다 (TypeError).
  </div>
</div>

```javascript
// String() — 안전
let empty = null;
String(empty); // 결과: "null" (안전하게 글자로 변함)
```

```javascript
// .toString() — 위험
let empty = null;
empty.toString(); // 결과: 🚨 TypeError! (에러 발생하며 코드 중단)
```

**💡 보충 설명: 언제 .toString()을 쓰나요?**

<div class="wda-callout wda-ci">
  • 숫자를 2진수나 16진수로 바꿀 때 유용하다. (예: <code>num.toString(16)</code>)<br>
  • 그 외 일반적인 변환은 무조건 <strong>String()</strong>을 쓰는 것이 안전하다.
</div>



---

## 📌 데이터 타입 최종 핵심 요약

<table class="wda-summary-table">
  <thead>
    <tr>
      <th>주제</th>
      <th>핵심 내용</th>
      <th>⚠️ 암기 포인트</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>메모리 저장 방식<br><small>(참조 타입의 함정)</small></td>
      <td>
        • 원시 타입은 <strong>값 자체</strong>가 복사된다.<br>
        • <code>a = 10; b = a;</code> 일 때 둘은 남남이다.<br>
        • 참조 타입은 <strong>주소(열쇠)</strong>가 복사된다.<br>
        • <code>a = {name: "Kim"}; b = a;</code> 일 때 한쪽을 바꾸면 <strong>둘 다 바뀐다.</strong>
      </td>
      <td>• <code>[] === []</code> 또는 <code>{} === {}</code>는 항상 <strong>false</strong>다.<br>• 모양이 같아도 사물함 열쇠(주소)가 다르기 때문이다.</td>
    </tr>
    <tr>
      <td>"없음"의 두 상태</td>
      <td>
        • <code>undefined</code> — 변수 선언 후 값이 할당되지 않아 <strong>시스템이 자동</strong>으로 넣은 상태다.<br>
        • <code>null</code> — 개발자가 "여기는 확실히 비어있다"고 <strong>의도적으로</strong> 표시한 상태다.
      </td>
      <td>• 값이 의도적으로 비어 있음을 표현할 때는 개발자가 직접 <strong><code>null</code></strong>을 사용하면 의도를 더 분명히 드러낼 수 있다.</td>
    </tr>
    <tr>
      <td>숫자 연산 2대 결함</td>
      <td>
        • <strong>NaN</strong> — 숫자가 아닌 연산의 결과물이다.<br>
        • <strong>부동소수점 오차</strong> — <code>0.1 + 0.2 !== 0.3</code>이다.<br>
        • 해결: 정수 변환 계산 또는 <code>.toFixed()</code> 사용
      </td>
      <td>• <code>NaN === NaN</code> → <strong>false</strong><br>• 자기 자신과도 같지 않은 유일한 값</td>
    </tr>
    <tr>
      <td>typeof 한계</td>
      <td>
        • <code>typeof null</code> → <strong><code>"object"</code></strong> (JS의 대표적인 설계 버그)<br>
        • <code>typeof []</code>와 <code>typeof {}</code>는 둘 다 <strong><code>"object"</code></strong>다.
      </td>
      <td>• null 확인: <code>x === null</code> 직접 비교<br>• 배열 확인: <strong><code>Array.isArray(arr)</code></strong></td>
    </tr>
    <tr>
      <td>안전한 타입 변환</td>
      <td>
        • <code>.toString()</code>은 <code>null</code>이나 <code>undefined</code>를 만나면 에러를 내며 멈춘다.<br>
        • <code>String(value)</code>는 어떤 상황에서도 에러 없이 변환한다.
      </td>
      <td>• <strong><code>String(value)</code></strong> 사용 원칙<br>• <code>.toString()</code>은 null 시 TypeError</td>
    </tr>
  </tbody>
</table>
