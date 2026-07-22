---
title: "2-1 함수 선언하고 호출하기"
status: "completed"
description: "함수 선언문과 표현식, 매개변수와 반환값, 콜백과 IIFE까지 함수의 핵심 개념을 정리한다."
category: "JavaScript"
section: "Functions"
tags:
  - javascript
  - functions
---

<style>
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-cy{background:rgba(250,204,21,.07);border-color:#ca8a04}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-cy .wda-clabel{color:#92400e}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 16px;margin:.8rem 0 1.6rem;font-size:.83rem;line-height:1.75}
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
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:160px}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
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
  • <strong>함수의 개념</strong> — 재사용 가능한 코드 블록의 필요성과 구조를 이해합니다.<br>
  • <strong>선언 방식</strong> — 함수 선언문과 표현식의 차이점을 파악합니다.<br>
  • <strong>매개변수와 반환값</strong> — 입력과 출력을 통한 함수 활용법을 익힙니다.<br>
  • <strong>고급 패턴</strong> — 콜백 함수와 IIFE로 실전 활용법을 익힙니다.
</div>

---

## 1. 함수란 무엇인가?

**정의**: 특정 작업을 수행하는 **재사용 가능한 코드 블록**입니다.

### 1) 왜 함수가 필요한가? (Necessity)

똑같은 코드를 매번 복사해서 붙여넣기 하면, 수정할 때 모든 곳을 다 고쳐야 하는 **유지보수의 어려움**이 발생합니다.

**❌ 함수가 없을 때 (Bad)**

```js
// 매번 같은 패턴을 반복해야 함 (코드 중복 발생)
console.log("안녕하세요, 철수님!");
console.log("안녕하세요, 영희님!");
console.log("안녕하세요, 민수님!");
```

**✅ 함수로 해결 (Good)**

```js
// 틀(함수)을 하나 만들어 둠
function greet(name) {
  console.log(`안녕하세요, ${name}님!`);
}

// 이름만 바꿔서 계속 재사용 가능!
greet("철수");
greet("영희");
greet("민수");
```

### 2) 함수의 4대 장점 (Advantages)

함수를 사용해야 하는 4가지 핵심 이유입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">♻️</div>
    <div class="wda-fcard-ttl">재사용성 (Reusability)</div>
    <div class="wda-fcard-dsc"><strong>한 번 작성</strong>해두면, 필요할 때마다 계속 가져다 쓸 수 있습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🛠️</div>
    <div class="wda-fcard-ttl">유지보수 (Maintainability)</div>
    <div class="wda-fcard-dsc">수정할 때 <strong>한 곳(함수)만</strong> 고치면, 사용하는 모든 곳에 자동으로 반영됩니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📖</div>
    <div class="wda-fcard-ttl">가독성 (Readability)</div>
    <div class="wda-fcard-dsc">복잡한 코드 덩어리에 <code>greet</code> 같은 <strong>이름</strong>을 붙여주어 이해하기 쉽게 만듭니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📦</div>
    <div class="wda-fcard-ttl">추상화 (Abstraction)</div>
    <div class="wda-fcard-dsc">복잡한 내부 로직은 <strong>숨기고(블랙박스)</strong>, 이름만 불러서 단순하게 사용합니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">핵심 개념: 블랙박스 (Black Box)</span>
  함수는 자판기(블랙박스)와 같습니다. <strong>입력(Input)</strong>을 넣으면 내부에서 알아서 <strong>처리(Process)</strong>를 거쳐 <strong>출력(Output)</strong>이 나옵니다.
</div>

---

## 2. 함수의 근본 원리 (IPO 모델)

함수는 입력을 받아 정의된 절차에 따라 처리하고 결과를 돌려주는 **데이터 공장**과 같습니다.

### 1) IPO 모델 (Input-Process-Output)

함수가 동작하는 3단계 흐름입니다.

| 단계 | 구성 요소 | 설명 |
| --- | --- | --- |
| **Input (입력)** | `매개변수 (Parameters)` | 공장에 들어가는 원재료입니다. |
| **Process (처리)** | `함수의 본문 (Logic)` | 재료를 가공하는 내부 로직입니다. |
| **Output (출력)** | `반환값 (Return Value)` | 가공이 끝난 완제품입니다. |

<img src="/images/content/javascript/2-1/javascript-2-1-input-process-output-diagram.webp" alt="IPO 모델 다이어그램" style="display:block;width:100%;max-width:680px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:680px;">[그림] IPO 모델 (Input 매개변수 → Process 함수 본문 → Output 반환값)</div>

### 2) 동작 원리 (수도코드)

함수는 **설계도(정의)**와 **사용(호출)**으로 나뉩니다.

<p><strong>① 함수 정의 (설계도)</strong></p>
  <p>먼저 "이 함수는 이렇게 동작해"라고 컴퓨터에게 알려주는 과정입니다.</p>

```js
function 함수이름 ( 재료 ) {
  // 투입된 재료로 요리하기
  결과_반환;
}
```

**② 함수 호출 (사용)**

만들어진 함수에 실제 데이터를 넣어서 실행하는 과정입니다.

```js
결과 = 함수이름 ( 실제_재료 );
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">핵심 주의사항</span>
  <p>"정의만 해서는 실행되지 않습니다."</p>
  함수를 <code>function ...</code>으로 만들기만 하고 <code>호출()</code>하지 않으면 아무 일도 일어나지 않습니다.<br>
  반드시 <strong>호출(Call)</strong>해야 공장이 가동됩니다.
</div>

---

## 3. 함수 선언문과 표현식

### 1) 함수 선언문 (Function Declaration) — 기본 구조

`function` 키워드를 사용하여 함수를 정의하는 가장 직관적이고 기본적인 방법입니다.

```js
function 함수이름(매개변수1, 매개변수2) {
  // 실행할 코드
  return 반환값;
}
```

- **function** : 함수를 선언하겠다는 **필수 키워드**입니다.
- **함수이름** : 나중에 이 함수를 호출(사용)할 때 부르는 이름입니다.
- **매개변수** : 함수 내부로 전달되는 **입력값**입니다. (선택 사항)
- **return** : 함수의 실행 결과를 밖으로 내보내는 **반환값**입니다. (선택 사항)

**실제 예시**

```js
// 1. 정의하기 (설계도)
function add(a, b) {
  return a + b;
}

// 2. 사용하기 (호출)
const result = add(3, 5);
console.log(result); // 8
```

**💡 보충 설명**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">네이밍 관례</span>
  함수 이름은 어떤 동작을 하는지 명확히 알 수 있도록 <strong>동사</strong>로 짓는 것이 관례입니다.

| **접두어** | **의미** | **예시** |
| --- | --- | --- |
| **get** | 값을 가져올 때 | `getUserName` |
| **set** | 값을 설정할 때 | `setVolume` |
| **create** | 무언가 생성할 때 | `createPost` |
| **handle** | 처리를 담당할 때 | `handleClick` |
</div>

### 2) 함수 표현식 (Function Expression) — 기본 구조

변수에 함수를 **할당(Assignment)**하는 방식으로 함수를 정의합니다.  
함수를 마치 **값(Value)**처럼 취급하여 변수에 저장하는 형태입니다.

```js
const 변수이름 = function(매개변수) {
  // 실행할 코드
  return 반환값;
}; // ⬅️ 세미콜론(;) 필수!
```

- **const / let** : 함수를 담을 변수를 선언합니다. (주로 `const` 권장)
- **function** : 이름이 없는 **익명 함수**를 사용합니다.
- **세미콜론(;)** : 함수 표현식은 변수에 함수를 할당하는 문장이므로, 문장 끝에 세미콜론을 붙이는 것을 권장합니다.

```js
// 곱하기 함수를 변수에 할당
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">기명 함수 표현식 (Named Function Expression)</span>
  익명 함수 대신 이름을 붙일 수도 있습니다. 일반적인 코드에서는 자주 쓰이지 않지만, 디버깅이나 함수 내부에서 자기 자신을 참조해야 하는 경우 도움이 될 수 있습니다.<br>
  예시: <code>const fn = function myFn() { ... };</code>
</div>

### 3) 선언문 vs 표현식 비교

| **구분** | **함수 선언문** | **함수 표현식** |
| --- | --- | --- |
| **형태** | `function name() {}` | `const name = function() {}` |
| **호이스팅** | **전체 호이스팅** (값까지 포함) | 변수 선언은 인식되지만, TDZ 때문에 초기화 전에는 접근 불가 |
| **사용 시점** | 정의하기 **전**에도 사용 가능 | 반드시 정의한 **후**에 사용 가능 |
| **세미콜론** | 불필요 | **필수** |

---

## 4. 함수 호출하기

정의해 둔 함수를 실제로 사용하는 방법입니다. **`함수이름()`** 형태로 실행하며 필요한 재료(인자)를 전달합니다.

### 1) 기본 호출 (Basic Call)

함수 이름 뒤에 반드시 **소괄호 `()`**를 붙여야 코드가 실행됩니다.

```js
function greet(name) {
  console.log(`안녕, ${name}!`);
}

greet("철수"); // 안녕, 철수!
greet("영희"); // 안녕, 영희!
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  괄호 없이 <code>greet</code>라고만 쓰면 함수가 실행되지 않고, 함수 그 자체(코드 덩어리)만 가리키게 됩니다.
</div>

### 2) 인자 전달 (Argument Passing)

함수를 정의할 때 만든 매개변수(구멍)의 순서대로 값을 넣어줍니다.

```js
function introduce(name, age) {
  console.log(`${name}, ${age}살`);
}

// 순서대로 매핑됩니다 (첫 번째 -> name, 두 번째 -> age)
introduce("민수", 25); // 민수, 25살
introduce("지영", 30); // 지영, 30살
```

자바스크립트는 인자의 개수를 엄격하게 체크하지 않습니다.

| **상황** | **결과** |
| --- | --- |
| **인자가 부족할 때** | 채워지지 않은 변수는 **`undefined`**가 됩니다. |
| **인자가 남을 때** | 필요한 만큼만 들어가고, **나머지는 무시**됩니다. |

### 3) 반환값 받기 (Return Value)

함수가 `return`한 결과값은 변수에 저장하거나 다른 계산식에 바로 사용할 수 있습니다.

```js
function add(a, b) {
  return a + b;
}

// 1. 반환값을 변수에 저장하기
const sum = add(10, 20);
console.log(sum); // 30

// 2. 표현식의 일부로 바로 사용하기
console.log(add(5, 3) + 10); // 18
```

### 4) 호출 vs 참조 ⭐️ 중요

함수 이름 뒤에 **괄호 `()`가 있느냐 없느냐**에 따라 천지차이입니다.

```js
function sayHi() {
  console.log("Hi!");
}

// ① 호출 (Call) : "일해라!"
sayHi();
// 결과: 함수가 실행되어 "Hi!"가 출력됨

// ② 참조 (Reference) : "이 함수 좀 봐봐"
sayHi;
// 결과: 실행되지 않음. 함수 그 자체를 가리킴
// [Function: sayHi]
```

| **구분** | **형태** | **설명** | **용도** |
| --- | --- | --- | --- |
| **호출** | `함수명()` | 당장 실행해서 결과를 달라 | 일반적인 사용 |
| **참조** | `함수명` | 실행하지 말고 함수 자체만 넘겨라 | **콜백 함수**, 이벤트 핸들러 등 |

---

## 5. return 문

`return`은 함수의 실행을 **종료**하고, 값을 호출한 곳으로 **반환**하는 역할을 합니다.

### 1) return을 생략하면? (Implicit Return)

```js
function doSomething() {
  console.log("일은 합니다"); // 내부 코드는 실행됨
  // return 문이 없음 (생략)
}

const result = doSomething();
console.log(result); // undefined
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">핵심 원리</span>
  명시적으로 <code>return</code>을 작성하지 않으면, 자바스크립트 엔진이 알아서 <strong><code>undefined</code></strong>를 반환합니다. 즉, "아무것도 안 돌려준다"는 뜻 자체가 <code>undefined</code> 값으로 표현됩니다.
</div>

### 2) 조기 반환 패턴 (Guard Clause)

함수 도입부에서 **예외 상황을 미리 처리하고 종료**(`return`)하여, 코드의 복잡도(들여쓰기)를 줄이는 실무 필수 패턴입니다.

**❌ 나쁜 예: 중첩된 if문**

```js
function login(user) {
  if (user) {
    if (user.password) {
      if (user.isValid) {
        return "로그인 성공";
      } else {
        return "인증 안됨";
      }
    } else {
      return "비밀번호 없음";
    }
  } else {
    return "유저 없음";
  }
}
// 해석하기 너무 어렵습니다 😵
```

**✅ 좋은 예: 조기 반환 (Guard Clause)**

```js
function login(user) {
  // 1. 예외 상황을 먼저 처리하고 끝냄!
  if (!user) return "유저 없음";
  if (!user.password) return "비밀번호 없음";
  if (!user.isValid) return "인증 안됨";

  // 2. 여기까지 왔다는 건 통과했다는 뜻 (핵심 로직)
  return "로그인 성공";
}
```

**💡 보충 설명**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">핵심 효과</span>
  <ul>
    <li><strong>가독성 향상</strong> : 핵심 로직이 들여쓰기 없이 한눈에 들어옵니다.</li>
    <li><strong>불필요한 연산 방지</strong> : 조건이 맞지 않으면 즉시 함수를 종료하므로 효율적입니다.</li>
  </ul>
</div>

---

## 💻 실습: 함수 만들기

직접 함수를 선언하고 실행해보는 기초 실습입니다.

### 실습 1) 자기소개 함수

**미션**: `introduce`라는 이름의 함수를 만들고, 실행하면 **"안녕하세요, 저는 [이름]입니다."**를 출력하세요.

```js
// 1. 함수 정의하기 (설계도)
function introduce(name) {
  // 템플릿 리터럴(``)을 사용하면 문자열 합치기가 편합니다.
  console.log(`안녕하세요, 저는 ${name}입니다.`);
}

// 2. 함수 호출하기 (사용)
introduce("철수");
introduce("영희");
```

```js
안녕하세요, 저는 철수입니다.
안녕하세요, 저는 영희입니다.
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">정의 vs 호출</span>
  <code>function introduce() { ... }</code>만 작성하고 실행 버튼을 누르면 아무 일도 일어나지 않습니다. 반드시 밑에서 <code>introduce();</code>라고 <strong>이름을 불러(Call)</strong>주어야 코드가 실행됩니다.
</div>

### 실습 2) 더하기 함수 (return 활용)

**미션**: `add` 함수를 만들고, 두 숫자를 더한 값을 **`return`** 하세요.

```js
// 1. 함수 정의하기 (재료 a, b를 받음)
function add(a, b) {
  // 2. 더한 값을 '반환' (공장 밖으로 내보냄)
  return a + b;
}

// 3. 함수 호출하고 결과 받기
const result = add(5, 3);
console.log(result); // 8
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">출력 vs 반환</span>
  <ul>
    <li><strong><code>console.log</code></strong> : 화면에 보여주고 끝납니다. (휘발성)</li>
    <li><strong><code>return</code></strong> : 값을 프로그램의 다른 부분으로 전달합니다. (재사용 가능)</li>
  </ul>
  값을 변수에 담으려면 반드시 <code>return</code>을 사용해야 합니다.
</div>

### 심화 실습 1) 만능 계산기 (조건문 활용)

**미션**: `calculate` 함수를 만들고, `operator`에 따라 연산 결과를 반환하세요.

```js
function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else {
    return "지원하지 않는 연산";
  }
}

console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 5, "/")); // "지원하지 않는 연산"
```

**테스트 방식 비교 (변수 vs 바로 출력)**

| **방식** | **특징** |
| --- | --- |
| **변수에 담아서 확인** | 재사용 가능, 실제 기능 개발에 적합 |
| **바로 출력** | 1줄로 짧음, 단순 테스트에 적합, 값이 저장되지 않음 |

### 심화 실습 2) 구구단 출력기 (반복문 활용)

**미션**: `printGugudan` 함수를 만들고, 특정 단의 구구단을 1~9까지 출력하세요.

```js
function printGugudan(dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}

printGugudan(3);
```

```js
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
...
3 * 9 = 27
```

### 심화 실습 3) 짝수 합계 계산기 (조건 + 반복)

**미션**: `sumEvens` 함수를 만들고, 1부터 `limit`까지의 짝수 합계를 반환하세요.

```js
function sumEvens(limit) {
  let sum = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

const total = sumEvens(10);
console.log(`1~10 짝수 합: ${total}`); // 30
```

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">변수 위치 주의</span>
  <code>let sum = 0;</code>은 반드시 <strong>반복문 밖(위)</strong>에 있어야 합니다. 반복문 안에서 만들면 매번 0으로 초기화되어 합계가 쌓이지 않습니다.
</div>

---

## 6. 매개변수와 인자

비슷해 보이지만 엄연히 다른 두 용어의 차이를 이해하고, 자바스크립트만의 독특한 인자 전달 방식을 배웁니다.

### 1) 용어 구분 (Terminology)

| **구분** | **영어 (Eng)** | **설명** | **시점** |
| --- | --- | --- | --- |
| **매개변수** | **Parameter** | 함수를 **정의(만들) 때** 사용하는 변수 이름 | 정의 시점 |
| **인자** | **Argument** | 함수를 **호출(사용) 할 때** 실제로 넣어주는 값 | 호출 시점 |

```js
// 매개변수 (Parameter): name, age
function greet(name, age) {
  console.log(`${name}, ${age}살`);
}

// 인자 (Argument): "철수", 25
greet("철수", 25);
```

### 2) 인자 개수 불일치 (Mismatch)

자바스크립트는 인자의 개수가 달라도 **에러를 내지 않습니다.**

```js
function test(a, b) {
  console.log(a, b);
}

// ① 부족할 때: 채워지지 않은 칸은 undefined
test(1);       // 1, undefined

// ② 딱 맞을 때: 정상 동작
test(1, 2);    // 1, 2

// ③ 넘칠 때: 필요한 만큼만 쓰고 나머지는 '무시'됨
test(1, 2, 3); // 1, 2 (3은 무시됨)
```

### 3) arguments 객체 (Special Object)

매개변수를 따로 정하지 않아도, 전달된 **모든 인자**를 한꺼번에 받아볼 수 있는 숨겨진 마법 상자입니다.

```js
function sum() {
  // 들어온 모든 값을 배열 형태(유사 배열)로 보여줌
  console.log(arguments);
}

sum(10, 20, 30, 40, 50);
// 결과: [10, 20, 30, 40, 50] 처럼 보임
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">유사 배열 주의</span>
  <code>arguments</code>는 <strong>배열과 비슷(유사 배열)</strong>하지만, 실제 배열은 아니어서 <code>filter</code>, <code>map</code> 같은 배열 메서드는 사용할 수 없습니다.<br>
  최신 JS에서는 나머지 매개변수(<code>...rest</code>)를 더 권장합니다.
</div>

---

## 7. 함수 스코프 (Scope)

**스코프(Scope)**란 변수가 **"어디까지 유효한가"**를 정하는 **'유효 범위'**를 뜻합니다.  
변수가 어디서 태어났느냐에 따라 수명이 결정됩니다.

### 1) 전역 스코프 (Global Scope)

함수 바깥(코드 맨 위)에서 선언된 변수입니다. **코드 어디서든** 자유롭게 접근하고 사용할 수 있습니다.

```js
const globalVar = "전역 변수"; // 어디서든 보임

function test() {
  console.log(globalVar); // 함수 안에서도 사용 가능!
}

test();                    // "전역 변수"
console.log(globalVar);   // "전역 변수"
```

### 2) 지역 스코프 (Local Scope)

함수 내부(`{ }` 안)에서 선언된 변수입니다. 일반적으로 **함수 밖에서는 접근할 수 없고**, 함수 실행이 끝나면 더 이상 사용할 수 없습니다.

```js
function test() {
  const localVar = "지역 변수"; // 이 함수 안에서만 존재
  console.log(localVar);         // "지역 변수" (가능)
}

test();

// ❌ 에러 발생! (함수 밖에서는 localVar가 안 보임)
console.log(localVar); // ReferenceError
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">중요 포인트</span>
  함수를 정의할 때 괄호 안에 넣은 매개변수(<code>name</code>, <code>age</code> 등)도 함수 내부에서만 쓸 수 있는 <strong>지역 변수</strong>로 취급됩니다.<br>
  밖에서는 부를 수 없습니다.
</div>

| **구분** | **선언 위치** | **사용 가능 범위** | **비유** |
| --- | --- | --- | --- |
| **전역 (Global)** | 함수 밖 | 어디서나 가능 | **공기** (어디서든 마실 수 있음) |
| **지역 (Local)** | 함수 안 | 함수 내부만 가능 | **내 방 물건** (남이 못 씀) |

---

## 8. 기본값 매개변수와 나머지 매개변수

### 1) 기본값 매개변수 (Default Parameters)

함수를 호출할 때 인자를 전달하지 않았거나, 전달된 값이 `undefined`일 때 대신 사용할 **'기본값'**을 미리 정해두는 문법입니다.  
단, `null`을 전달하면 값이 직접 들어온 것으로 보기 때문에 기본값이 적용되지 않습니다.

```js
// name이 들어오면 그걸 쓰고, 안 들어오면 "손님"을 씀
function greet(name = "손님") {
  console.log(`안녕하세요, ${name}님!`);
}

greet("철수"); // 안녕하세요, 철수님! (입력값 사용)
greet();       // 안녕하세요, 손님! (기본값 사용)
```

**실무 활용**: 주로 **'옵션'** 설정에 많이 사용합니다.

```js
function createUser(name, role = "user") {
  return { name, role };
}

console.log(createUser("철수", "admin")); // { name: "철수", role: "admin" }
console.log(createUser("영희"));          // { name: "영희", role: "user" }
```

**동적 기본값 (Dynamic Default)**

기본값은 함수가 정의될 때가 아니라, **호출될 때마다(Run-time)** 새로 평가됩니다.

```js
// date 값이 없으면 '현재 시간'을 기본값으로 생성
function getDate(date = new Date()) {
  return date.toLocaleDateString();
}

getDate();                       // 함수를 호출하는 '그 순간'의 날짜
getDate(new Date("2024-01-01")); // 2024. 1. 1.
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">순서 주의 (Order Matters)</span>
  <strong>"필수(Required)는 앞에, 선택(Optional/Default)은 뒤에"</strong> 두는 것이 원칙입니다.<br><br>
  ❌ <code>function test(a = 1, b) { }</code> — 앞에 기본값이 있으면 불편<br>
  ✅ <code>function test(b, a = 1) { }</code> — 깔끔하게 호출 가능
</div>

### 2) 나머지 매개변수 (Rest Parameters)

정해지지 않은 **여러 개의 인자**를 한꺼번에 **배열(Array)**로 묶어서 받는 최신 문법입니다.

```js
// ...rest는 나머지 인자들을 '배열'로 만들어줍니다.
function example(a, b, ...rest) {
  console.log(a);    // 1
  console.log(b);    // 2
  console.log(rest); // [3, 4] (배열)
}

example(1, 2, 3, 4);
```

**실전 예제: 쇼핑몰 장바구니**

```js
function calculateTotal(isMember, ...prices) {
  let total = 0;

  for (const price of prices) {
    total += price;
  }

  if (isMember) {
    return total * 0.9; // 회원 10% 할인
  }

  return total;
}

console.log(calculateTotal(true, 1000, 2000, 3000));  // 5400 (10% 할인)
console.log(calculateTotal(false, 500, 500));          // 1000 (할인 없음)
```

**실전 예제: 팀원 소개하기**

```js
function introduceTeam(leader, ...members) {
  console.log(`팀장: ${leader}`);
  console.log(`팀원: ${members.join(", ")}`);
  console.log(`총원: ${members.length + 1}명`);
}

introduceTeam("손흥민", "이강인", "김민재", "황희찬");
/* 출력 결과
팀장: 손흥민
팀원: 이강인, 김민재, 황희찬
총원: 4명
*/
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">arguments와 차이</span>
  <code>arguments</code>와 달리, <code>...rest</code>는 <strong>진짜 배열</strong>이라서 <code>forEach</code>, <code>map</code>, <code>join</code> 같은 강력한 배열 메서드를 바로 쓸 수 있습니다. 나머지 매개변수는 무조건 <strong>가장 마지막</strong>에 와야 합니다.
</div>

---

## 🛠️ 실무 응용 패턴

### 1) 복합 유틸리티 함수

실무에서는 자주 사용하는 기능을 **유틸리티 함수(Helper Function)**로 따로 만들어두고, 필요할 때마다 블록처럼 조립해서 사용합니다.

```js
// 금액 포맷팅 유틸리티
function formatCurrency(amount, currency = "KRW", locale = "ko-KR") {
  if (typeof amount !== "number") return "Invalid Amount";

  const formatted = new Intl.NumberFormat(locale).format(amount);

  return currency === "KRW" ? `${formatted}원` : `${currency} ${formatted}`;
}

// 할인율 계산 유틸리티
function calculateDiscount(price, discountRate) {
  if (discountRate < 0 || discountRate > 100) return price;

  return price * (1 - discountRate / 100);
}

// 함수 조립: 할인 계산(40000) -> 포맷팅("40,000원") -> 출력
const salePrice = calculateDiscount(50000, 20);
console.log(formatCurrency(salePrice)); // "40,000원"
```

**💡 보충 설명**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">좋은 함수의 조건</span>
  <ul>
    <li><strong>단일 책임 (Single Responsibility)</strong> : 하나의 함수는 하나의 작업만 수행해야 합니다.</li>
    <li><strong>입력값 검증 (Validation)</strong> : 이상한 값이 들어왔을 때 에러가 터지지 않도록 방어 코드(<code>if 문</code>)가 필수입니다.</li>
  </ul>
</div>

### 2) 유효성 검사 및 가공

함수를 활용해 들어오는 데이터가 올바른지 **검사(Validation)**하고, 안전하게 **가공(Processing)**하여 사용하는 실무 패턴입니다.

```js
// 개인정보 마스킹 함수
function maskEmail(email) {
  const [id, domain] = email.split("@");

  if (!id || !domain) return "Invalid Email";

  return `${id.slice(0, 3)}****@${domain}`;
}

// 회원가입 프로세스
function registerUser(email, password) {
  if (!email.includes("@")) return "이메일 형식이 아닙니다.";
  if (password.length < 8) return "비밀번호는 8자 이상이어야 합니다.";

  return {
    email: maskEmail(email),
    status: "success"
  };
}

console.log(registerUser("javascript@lecture.com", "pass1234"));
// 결과: { email: "jav****@lecture.com", status: "success" }
```

---

## 9. Deep Dive: 함수 호이스팅

똑같이 함수를 만드는 것 같지만, **"언제 사용할 수 있는가"**에 결정적인 차이가 있습니다.  
핵심은 **호이스팅(Hoisting)**의 동작 방식이 다르기 때문입니다.

### 1) 함수 선언문 — 전체 호이스팅

함수 선언문은 자바스크립트 엔진이 코드를 실행하기 전에 **미리 읽어서 메모리에 등록**해 둡니다. 그래서 코드를 작성한 위치보다 위에서 호출해도 문제없이 작동합니다.

```js
// 선언하기 전인데도 실행이 됨! (성공)
console.log(add(1, 2)); // 3

function add(a, b) {
  return a + b;
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">원리</span>
  엔진이 "아, add라는 함수가 있네? 내가 미리 챙겨놔야지!" 하고 함수 <strong>전체(이름+내용)</strong>를 스코프 최상단으로 끌어올려 놓습니다.
</div>

### 2) 함수 표현식 — 변수 호이스팅

함수 표현식은 변수(`const`, `let`)에 함수를 담는 방식입니다. 변수의 규칙을 따르기 때문에, **할당(코드 실행)이 되기 전**에는 사용할 수 없습니다.

```js
// 변수는 알지만, 아직 함수가 안 들어감 (에러!)
console.log(sub(10, 5)); // ReferenceError (TDZ 접근 불가)

const sub = function(a, b) {
  return a - b;
};
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">TDZ (일시적 사각지대)</span>
  <code>const sub</code>라는 이름표는 미리 붙여놓음(호이스팅).<br>
  하지만 값(함수 내용)은 코드가 저 줄에 도착해야 넣어줍니다.<br>
  그 전까지는 <strong>TDZ(Temporal Dead Zone)</strong>에 갇혀 있어서 건드리면 에러가 납니다.
</div>

| **구분** | **함수 선언문** | **함수 표현식** |
| --- | --- | --- |
| **호이스팅** | **전체 호이스팅** (값까지 포함) | 변수 선언은 인식되지만, TDZ 때문에 초기화 전에는 접근 불가 |
| **사용 시점** | 정의하기 **전**에도 사용 가능 | 반드시 정의한 **후**에 사용 가능 |
| **유연성** | 매우 유연함 | 규칙이 엄격함 |

즉, 함수 표현식은 반드시 선언과 할당이 끝난 뒤에 호출해야 합니다.

---

## 10. Deep Dive: 재귀 함수 (Recursion)

**재귀(Recursion)**란 함수가 실행 도중에 **자기 자신을 다시 호출**하는 기법입니다.  
복잡한 반복 작업을 우아하고 짧은 코드로 해결할 때 사용합니다.

### 1) 팩토리얼 예시 (Factorial)

```js
function factorial(n) {
  // ① 종료 조건 (Base Case): 더 이상 쪼갤 수 없을 때 멈춤
  if (n <= 1) return 1;

  // ② 재귀 호출 (Recursive Case): 자기 자신을 호출하며 문제를 줄여나감
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
// 계산 과정: 5 * 4 * 3 * 2 * 1 = 120
```

### 2) 핵심 구성 요소

재귀 함수는 반드시 두 가지 부분으로 구성되어야 합니다.

| **구성** | **역할** | **예시** |
| --- | --- | --- |
| **종료 조건 (Base Case)** | 무한 반복을 막기 위한 브레이크 | `if (n <= 1) return 1;` |
| **재귀 호출 (Recursive Case)** | 조금 더 작아진 문제로 자기 자신을 부름 | `return n * factorial(n - 1);` |

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <ul>
    <li><strong>무한 루프 위험</strong> : 종료 조건이 없거나 잘못 설정되면, 함수가 영원히 자기 자신을 호출합니다.</li>
    <li><strong>스택 오버플로우 (Stack Overflow)</strong> : 함수 호출이 너무 깊어지면 메모리(스택)가 꽉 차서 에러가 발생합니다.</li>
    <li>에러 메시지: <code>Maximum call stack size exceeded</code></li>
  </ul>
</div>

---

## 11. 함수의 본질: 객체와 일급 객체

### 1) 함수는 객체다 (Function as Object)

자바스크립트에서 함수는 단순한 동작 덩어리가 아니라, **특별한 기능을 가진 객체(Object)**입니다.  
함수에도 점(`.`)을 찍고 값을 저장할 수 있습니다.

```js
function sayHi() {
  console.log("Hi");
}

// 함수에 속성 추가하기
sayHi.myProp = "난 속성도 가짐";

// 기본 내장 속성 확인
console.log(sayHi.name);   // "sayHi" (함수 이름)
console.log(sayHi.length); // 0 (매개변수 개수)
console.log(sayHi.myProp); // "난 속성도 가짐"
```

### 2) 함수의 주요 속성

| **속성** | **설명** | **예시** |
| --- | --- | --- |
| **`name`** | 함수의 이름 | `sayHi.name → "sayHi"` |
| **`length`** | 정의된 매개변수의 개수 (rest 제외) | `fn.length → 2` |
| **`prototype`** | 일반 함수가 생성자 함수로 사용될 때 연결되는 객체 (화살표 함수는 prototype이 없음) | 클래스·상속의 핵심 |

```js
function one(a) {}
console.log(one.length); // 1

function two(a, b) {}
console.log(two.length); // 2

// rest 파라미터는 카운트 제외!
function three(a, b, ...rest) {}
console.log(three.length); // 2 (a, b만 셈)
```

### 3) 일급 객체의 3가지 조건

자바스크립트의 함수는 **숫자나 문자열 같은 일반 값(Value)과 완전히 똑같은 권리**를 누립니다.

**① 변수에 할당할 수 있다**

```js
const myFunc = function() { console.log("Hello"); };

const arr = [myFunc, 1, "text"];
arr[0](); // "Hello" (배열에 담긴 함수 실행)
```

**② 다른 함수의 인자로 전달할 수 있다 (콜백의 원리)**

```js
function runner(fn) {
  fn(); // 넘겨받은 함수를 실행
}

runner(myFunc); // "Hello"
```

**③ 다른 함수의 반환값으로 사용할 수 있다**

```js
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(3)); // 8
```

---

## 12. 콜백 함수 (Callback Function)

**정의**: 다른 함수에 **인자로 전달되어**, 나중에 필요한 시점에 실행되는 함수입니다.

### 1) 기본 개념

"호출 vs 참조"에서 배운 것처럼, **괄호 없이** 함수를 넘기면 그 함수 자체가 전달됩니다. 이를 활용한 것이 콜백 패턴입니다.

```js
function greet(name) {
  console.log(`안녕, ${name}!`);
}

function executeWith(fn, value) {
  fn(value); // 넘겨받은 함수를 나중에 실행
}

executeWith(greet, "철수"); // 안녕, 철수!
```

### 2) 동기 콜백 (Synchronous Callback)

배열 메서드처럼 **즉시** 실행되는 콜백입니다.

```js
const numbers = [1, 2, 3, 4, 5];

// forEach: 각 요소마다 콜백 실행
numbers.forEach(function(num) {
  console.log(num * 2);
});
// 2, 4, 6, 8, 10

// filter: 조건에 맞는 요소만 골라냄
const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evens); // [2, 4]
```

### 3) 비동기 콜백 (Asynchronous Callback)

**나중에** 실행되는 콜백입니다. `setTimeout`처럼 시간이 걸리는 작업에 사용합니다.

```js
console.log("시작");

setTimeout(function() {
  console.log("3초 후 실행");
}, 3000);

console.log("끝");

// 출력 순서: "시작" → "끝" → (3초 후) "3초 후 실행"
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">참조로 전달하기</span>
  이미 만들어진 함수를 콜백으로 넘길 때는 보통 <strong>괄호 없이 함수 이름만</strong> 전달합니다. 괄호를 붙이면 함수가 즉시 실행되고, 그 실행 결과가 전달될 수 있으므로 주의해야 합니다.<br><br>
  ❌ <code>setTimeout(sayHi(), 1000)</code> — 지금 즉시 실행됨<br>
  ✅ <code>setTimeout(sayHi, 1000)</code> — 1초 후 실행됨
</div>

```js
function sayHi() {
  console.log("Hi!");
}

// ❌ setTimeout(sayHi(), 1000)  → 지금 즉시 실행됨
// ✅ setTimeout(sayHi, 1000)    → 1초 후 실행됨
```

### 4) 화살표 함수로 콜백 간결하게 쓰기

ES6 이후 콜백은 **화살표 함수(`=>`)**로 더 짧게 표현하는 것이 일반적입니다.

```js
const numbers = [1, 2, 3, 4, 5];

// 기존 방식
const doubled1 = numbers.map(function(num) {
  return num * 2;
});

// 화살표 함수
const doubled2 = numbers.map(num => num * 2);

console.log(doubled2); // [2, 4, 6, 8, 10]
```

---

## 13. 즉시 실행 함수 (IIFE)

**IIFE (Immediately Invoked Function Expression)**: 함수를 **정의함과 동시에 즉시 실행**하는 패턴입니다.

### 1) 기본 문법 (Syntax)

```js
// 기본형: 함수를 ()로 감싸고 바로 ()를 붙여 호출
(function() {
  console.log("즉시 실행됩니다!");
})();

// 화살표 함수 버전
(() => {
  console.log("화살표 IIFE");
})();
```

### 2) 매개변수 전달

IIFE에도 인자를 전달할 수 있습니다.

```js
(function(name, age) {
  console.log(`${name}님, ${age}살`);
})("철수", 25);
// 출력: "철수님, 25살"
```

### 3) 언제 사용하나? (Use Cases)

**① 스코프 오염 방지**

변수가 전역으로 새어나가지 않도록 독립된 스코프를 만들 때 사용합니다.

```js
(function() {
  const privateVar = "외부에서 접근 불가";
  console.log(privateVar); // "외부에서 접근 불가"
})();

console.log(typeof privateVar); // "undefined" (접근 불가)
```

**② 초기화 코드**

애플리케이션 시작 시 한 번만 실행할 초기화 로직을 담을 때 사용합니다.

```js
const config = (function() {
  const env = "production";
  const version = "1.0.0";

  return {
    env,
    version,
    isProduction: env === "production"
  };
})();

console.log(config.env);          // "production"
console.log(config.isProduction); // true
```

**💡 보충 설명**

<span class="wda-clabel">요즘 사용 빈도</span>
모듈 시스템(<code>import</code>/<code>export</code>)이 발전하면서 IIFE의 사용 빈도는 줄었습니다.<br>
하지만 레거시 코드나 즉각적인 초기화 패턴에서 여전히 자주 보이므로, 읽을 수 있는 것이 중요합니다.

---

## ✅ 핵심 요약

<table class="wda-summary-table">
  <thead>
    <tr>
      <th>개념</th>
      <th>핵심 내용</th>
      <th>형태 / 예시</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>함수의 역할</td>
      <td>재사용 가능한 코드 블록. 재사용성·유지보수·가독성·추상화</td>
      <td><code>function greet(name) { ... }</code></td>
    </tr>
    <tr>
      <td>IPO 모델</td>
      <td>Input(매개변수) → Process(본문) → Output(반환값)</td>
      <td>데이터 공장 흐름</td>
    </tr>
    <tr>
      <td>함수 선언문</td>
      <td>전체 호이스팅 — 정의 전에도 호출 가능</td>
      <td><code>function add(a, b) { return a + b; }</code></td>
    </tr>
    <tr>
      <td>함수 표현식</td>
      <td>변수 호이스팅 — 정의 후에만 호출 가능</td>
      <td><code>const add = function(a, b) { ... };</code></td>
    </tr>
    <tr>
      <td>호출 vs 참조</td>
      <td><code>fn()</code> 실행 / <code>fn</code> 함수 자체 전달</td>
      <td>콜백에서는 참조로 넘김</td>
    </tr>
    <tr>
      <td>return 생략</td>
      <td>반환값 없으면 자동으로 <code>undefined</code></td>
      <td><code>const r = doSomething(); // undefined</code></td>
    </tr>
    <tr>
      <td>조기 반환</td>
      <td>Guard Clause — 예외 조건을 먼저 처리해 중첩 제거</td>
      <td><code>if (!user) return "없음";</code></td>
    </tr>
    <tr>
      <td>매개변수 vs 인자</td>
      <td>Parameter: 정의 시 이름 / Argument: 호출 시 값</td>
      <td>부족 시 <code>undefined</code>, 초과 시 무시</td>
    </tr>
    <tr>
      <td>기본값 매개변수</td>
      <td>인자 없을 때 사용할 기본값 설정</td>
      <td><code>function greet(name = "손님") { ... }</code></td>
    </tr>
    <tr>
      <td>나머지 매개변수</td>
      <td>가변 인자를 배열로 수집. 무조건 마지막에</td>
      <td><code>function sum(...nums) { ... }</code></td>
    </tr>
    <tr>
      <td>함수 스코프</td>
      <td>전역 변수는 어디서든, 지역 변수는 함수 안에서만</td>
      <td>매개변수도 지역 변수</td>
    </tr>
    <tr>
      <td>일급 객체</td>
      <td>변수 할당 / 인자 전달 / 반환값 사용 가능</td>
      <td>함수를 값처럼 다룰 수 있음</td>
    </tr>
    <tr>
      <td>콜백 함수</td>
      <td>인자로 전달되어 나중에 실행되는 함수</td>
      <td><code>arr.forEach(fn)</code>, <code>setTimeout(fn, ms)</code></td>
    </tr>
    <tr>
      <td>IIFE</td>
      <td>즉시 실행 함수 — 정의와 동시에 실행</td>
      <td><code>(function() { ... })()</code></td>
    </tr>
  </tbody>
</table>
