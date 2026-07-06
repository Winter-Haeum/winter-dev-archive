---
title: "1-4 연산자 알아보기"
status: "completed"
description: "JavaScript 연산자의 종류와 사용 기준을 정리한다."
category: "JavaScript"
section: "Basics"
tags:
  - javascript
  - basics
  - operator
---

<style>
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.83rem;line-height:1.75}
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
.wda-fcard{flex:1 1 120px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ttl{font-size:.84rem;font-weight:700;margin-bottom:3px}
.wda-fcard-dsc{font-size:.78rem;opacity:.72;line-height:1.5}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:180px}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
p:has(> strong:only-child){margin-top:1.6rem;margin-bottom:.2rem}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem}
.wda-callout p{margin:0 0 .45rem;font-size:.83rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
</style>

## 🎯 학습 목표

<div class="wda-goal" style="position:relative;padding-top:14px;overflow:visible;">
  <img src="/images/decoration/마스킹 테이프 (10).webp" alt="" style="position:absolute;width:130px;top:-14px;right:24%;z-index:2;pointer-events:none;opacity:.82;">
  🔢 <strong>연산자</strong> — 산술, 비교, 논리 연산자를 활용할 수 있다.<br>
  ⚡ <strong>실전 활용</strong> — truthy / falsy, 단축 평가, 삼항 연산자 <code>? :</code>, 옵셔널 체이닝 <code>?.</code>, <code>??</code> 를 실무에 적용할 수 있다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. 산술 연산자 (Arithmetic Operators)</h2>
  <img src="/images/decoration/꽃 아이콘 (10).webp" alt="" style="position:absolute;width:100px;top:-28px;right:16%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(-14deg);">
</div>

숫자를 계산하여 새로운 값을 만드는 연산자입니다.

**🔢 기본 산술 연산자**

가장 많이 사용되는 사칙연산과 자바스크립트의 특수 연산들입니다.

| 연산자 | 의미 | 예시 | 결과 |
|---|---|---|---|
| **`+`** | 더하기 | `10 + 3` | `13` |
| **`-`** | 빼기 | `10 - 3` | `7` |
| **`*`** | 곱하기 | `10 * 3` | `30` |
| **`/`** | 나누기 | `10 / 3` | `3.333...` |
| **`%`** | 나머지 | `10 % 3` | `1` |
| **`**`** | 거듭제곱 | `10 ** 3` | `1000` |

```jsx
// 10과 3을 이용한 산술 연산 예시
console.log(10 + 3);  // 더하기 (결과: 13)
console.log(10 - 3);  // 빼기 (결과: 7)
console.log(10 * 3);  // 곱하기 (결과: 30)
console.log(10 / 3);  // 나누기 (결과: 3.333...)
console.log(10 % 3);  // 나머지 (결과: 1)
console.log(10 ** 3); // 거듭제곱 (결과: 1000)

// 문자열 연결 연산
// + 기호는 문자열을 만나면 글자를 하나로 합칩니다.
console.log("Hello" + " " + "World"); // 결과: "Hello World"
```

**보충 설명**

<div class="wda-callout wda-ci">
  • <code>n % 2 === 0</code> 조건을 사용하면 해당 숫자가 짝수인지 홀수인지 쉽게 판별할 수 있습니다.<br>
  • 나머지가 <strong>0이면 짝수</strong>, <strong>1이면 홀수</strong>입니다.
</div>

**➕ 증감 연산자 (Increment & Decrement)**

값을 1씩 증가시키거나 감소시키는 연산자입니다. 기호의 위치가 매우 중요합니다.

| 구분 | 형태 | 동작 방식 |
|---|---|---|
| **전위** | `++x` | 먼저 1 증가 후 값 반환 — "지금 당장 1 더해!" |
| **전위** | `--x` | 먼저 1 감소 후 값 반환 — "지금 당장 1 빼!" |
| **후위** | `x++` | 먼저 값 반환 후 1 증가 — "일단 지금 값 쓰고, 이 줄 끝나면 그때 1 더해!" |
| **후위** | `x--` | 먼저 값 반환 후 1 감소 — "일단 지금 값 쓰고, 이 줄 끝나면 그때 1 빼!" |

```jsx
let x = 5;

// 전위 연산: 먼저 계산하고 값을 반환함
console.log(++x); // x에 1을 먼저 더해서 6을 출력 (현재 x: 6)
console.log(--x); // x에서 1을 먼저 빼서 5를 출력 (현재 x: 5)

// 후위 연산: 값을 먼저 반환하고 나중에 계산함
console.log(x++); // 현재 값인 5를 먼저 출력하고, 이후에 1을 더함 (출력: 5, 현재 x: 6)
console.log(x--); // 현재 값인 6을 먼저 출력하고, 이후에 1을 뺌 (출력: 6, 현재 x: 5)
```

**보충 설명**

<div class="wda-callout wda-ci">
  • <strong>전위(<code>++x</code>)</strong>: "지금 당장 1 더해!"<br>
  • <strong>후위(<code>x++</code>)</strong>: "일단 지금 값 쓰고, 이 줄 끝나면 그때 1 더해!"<br>
  • 입문자라면 헷갈리지 않게 변수 하나만 단독으로 있는 줄에서 사용하는 것이 가장 안전합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. 할당 연산자 (Assignment Operators)</h2>
  <img src="/images/decoration/책갈피 아이콘 (4).webp" alt="" style="position:absolute;width:64px;top:-14px;right:28%;z-index:2;pointer-events:none;opacity:.76;transform:rotate(6deg);">
</div>

변수에 값을 저장하거나, 연산과 저장을 한 번에 처리합니다.

**📥 기본 할당 (`=`)**

오른쪽 값을 왼쪽 변수에 넣습니다.

```jsx
let x = 10; 
let y = x; // x의 값(10)을 y에 넣는다

// 결과: y에 10이 들어감
```

**⚙️ 복합 할당**

<div aria-hidden="true" style="position:relative;height:0;overflow:visible;z-index:2;"><img src="/images/decoration/반짝이 아이콘 (8).webp" alt="" style="position:absolute;top:-28px;left:60%;width:48px;pointer-events:none;opacity:.76;transform:rotate(16deg);"></div>

연산과 할당을 한 번에 처리하여 코드를 간결하게 만듭니다.

| 연산자 | 의미 | 풀어쓰기 |
|---|---|---|
| **`+=`** | 덧셈 후 할당 | `x = x + n` |
| **`-=`** | 뺄셈 후 할당 | `x = x - n` |
| **`*=`** | 곱셈 후 할당 | `x = x * n` |
| **`/=`** | 나눗셈 후 할당 | `x = x / n` |
| **`%=`** | 나머지 후 할당 | `x = x % n` |

```jsx
let x = 10;

x += 5; // x = x + 5; 와 같음 (결과: 15)
x -= 2; // x = x - 2; 와 같음 (결과: 13)
x *= 3; // x = x * 3; 와 같음 (결과: 39)

// 문자열 연결 할당
let str = "홍길동";
str += "님"; // str = "홍길동" + "님"; 과 같음 (결과: "홍길동님")
```

**보충 설명**

<div class="wda-callout wda-ci">
  • <code>x = x + 5</code>라고 길게 쓰는 대신 <code>x += 5</code>라고 짧게 줄여 쓸 수 있습니다.<br>
  • 변수명이 길어질수록 오타를 방지하고 가독성을 높이는 데 유리합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. 비교 연산자 (Comparison Operators)</h2>
  <img src="/images/decoration/잎사귀 아이콘 (5).webp" alt="" style="position:absolute;width:52px;top:-12px;right:6%;z-index:2;pointer-events:none;opacity:.76;transform:rotate(-18deg);">
</div>

값을 비교하여 참(<code>true</code>) 또는 거짓(<code>false</code>)인 **불리언(boolean)** 값을 반환합니다.

**📏 크기 비교**

수치적으로 어느 쪽이 더 크거나 작은지 비교합니다.

| 연산자 | 의미 | 예시 | 결과 |
|---|---|---|---|
| **`>`** | 초과 | `5 > 3` | `true` |
| **`>=`** | 이상 | `5 >= 5` | `true` |
| **`<`** | 미만 | `3 < 5` | `true` |
| **`<=`** | 이하 | `3 <= 3` | `true` |

**⚖️ 동등 비교 vs 일치 비교 (중요!)**

<div style="position:relative;overflow:visible;height:0;">
  <img src="/images/character/중요.webp" alt="" style="position:absolute;width:100px;right:0;top:-100px;opacity:.88;z-index:2;pointer-events:none;">
</div>

자바스크립트에는 두 값이 같은지 비교하는 두 가지 방법이 있으며, 결과가 다를 수 있습니다.

| 구분 | 연산자 | 타입 변환 | 권장 여부 |
|---|---|---|---|
| **동등 비교** | `==` | O — 타입이 달라도 값이 같으면 `true` | ❌ 비추천 |
| **일치 비교** | `===` | X — 값과 타입이 모두 같아야 `true` | ✅ 항상 사용 |

① 동등 연산자 (`==`) — 타입 변환 후 비교 (비권장)

```jsx
5 == "5";            // true (숫자와 문자열이지만 같다고 판단 ⚠️)
0 == false;          // true (⚠️)
null == undefined;   // true (⚠️)
```

② 일치 연산자 (`===`) — 타입까지 비교 (항상 사용 권장 👍)

```jsx
5 === "5";           // false (타입이 다르므로 안전하게 거짓 판별)
0 === false;         // false
null === undefined;  // false
```

**보충 설명**

<div class="wda-callout wda-ci">
  • <code>==</code> 연산자는 자바스크립트가 내부적으로 타입을 마음대로 바꿔서 비교하기 때문에 버그의 원인이 됩니다.<br>
  • 항상 <strong><code>===</code></strong>(일치 연산자)를 기본으로 사용하는 습관을 들여야 코드가 안전해집니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. 삼항 연산자 (Ternary Operator)</h2>
  <img src="/images/decoration/말풍선 아이콘 (1).webp" alt="" style="position:absolute;width:100px;top:-24px;right:32%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(8deg);">
</div>

`조건 ? 참 : 거짓` 형태로 사용하는 간결한 조건문입니다. 실무(특히 React 등)에서 필수적으로 사용됩니다.

**📋 기본 구조 및 비교**

기존 `if-else` 문을 한 줄로 줄여서 표현할 수 있습니다.

```jsx
let age = 20;

// ① 기존 if-else 문
let message;
if (age >= 18) {
  message = "성인";
} else {
  message = "미성년자";
}

// ② 삼항 연산자 사용 (동일한 로직)
// 조건 ? 참값 : 거짓값
let message2 = age >= 18 ? "성인" : "미성년자";

console.log(message2); // "성인" 출력
```

**실무 팁**

<div class="wda-callout wda-cs">
  React 같은 최신 프레임워크에서 화면에 특정 요소를 보여줄지 말지 결정하는 <strong>'조건부 렌더링'</strong>을 할 때 밥 먹듯이 사용합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. 논리 연산자 (Logical Operators)</h2>
  <img src="/images/decoration/종이 클립 아이콘 (1).webp" alt="" style="position:absolute;width:60px;top:-16px;left:50%;transform:translateX(-50%) rotate(-10deg);z-index:2;pointer-events:none;opacity:.76;">
</div>

boolean 값을 조합합니다.

| 연산자 | 이름 | 의미 |
|---|---|---|
| **`&&`** | AND | 둘 다 `true`여야 `true` |
| **`\|\|`** | OR | 하나라도 `true`면 `true` |
| **`!`** | NOT | 반대로 뒤집기 |

**&& (AND) — 둘 다 true여야 true**

```jsx
// [논리 구조]
true && true    // true  (둘 다 참이면 참)
true && false   // false (하나만 거짓이어도 거짓)
false && true   // false (순서가 바뀌어도 거짓이면 거짓)
false && false  // false (둘 다 거짓이면 당연히 거짓)

// [실용 예시]
let age = 25;
// "나이가 18세 이상" 그리고 "65세 미만"인가?
age >= 18 && age < 65; // true (두 조건이 모두 맞으므로 최종 참)
```

**|| (OR) — 하나라도 true면 true**

```jsx
// [논리 구조]
true || true    // true  (둘 다 참이면 당연히 참)
true || false   // true  (둘 중 하나만 참이어도 참)
false || true   // true  (앞이 거짓이어도 뒤가 참이면 참)
false || false  // false (둘 다 거짓일 때만 유일하게 거짓)

// [실용 예시]
let day = "토";
// "오늘이 토요일"이거나 "일요일"인가?
day === "토" || day === "일"; // true (토요일이 맞으므로 한쪽만 맞아서 참)
```

**! (NOT) — 반대로 뒤집기**

```jsx
// [논리 구조]
!true   // false (참을 부정하면 거짓)
!false  // true  (거짓을 부정하면 참)

// [실용 예시]
let isLoggedIn = false; // 현재 로그인 안 된 상태
if (!isLoggedIn) {
  // !false는 true가 됨 -> "로그인이 안 된 게 맞다면" 실행
  console.log("로그인이 필요합니다.");
}
```

**!! (이중 부정)**

값을 boolean으로 변환하는 트릭입니다. `Boolean()` 함수와 동일한 효과를 가집니다.

```jsx
!!1    // true  (데이터가 있음 -> 참으로 변환)
!!""   // false (데이터가 없는 빈 문자열 -> 거짓으로 변환)
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. truthy / falsy 값</h2>
</div>

JavaScript에서는 boolean 타입이 아닌 값도 조건문 내에서 참(`true`) 또는 거짓(`false`)으로 평가됩니다.

**❌ falsy 값 (6가지 필수 암기!)**

조건문에서 `false`로 평가되는 6가지 특정 값들입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>false</code></div>
    <div class="wda-fcard-dsc">boolean false</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>0</code></div>
    <div class="wda-fcard-dsc">숫자 0</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>""</code></div>
    <div class="wda-fcard-dsc">빈 문자열</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>null</code></div>
    <div class="wda-fcard-dsc">빈 값</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>undefined</code></div>
    <div class="wda-fcard-dsc">정의되지 않음</div>
  </div>
  <div class="wda-fcard" style="position:relative;overflow:visible;">
    <div class="wda-fcard-ttl"><code>NaN</code></div>
    <div class="wda-fcard-dsc">숫자가 아님</div>
    <img src="/images/decoration/구름 아이콘 (3).webp" alt="" style="position:absolute;width:64px;top:-14px;right:-26px;z-index:2;pointer-events:none;opacity:.72;transform:rotate(-6deg);">
  </div>
</div>

```jsx
// [실용 예시]
if (!0) {
  // 0은 falsy이므로 !0은 true가 되어 실행됨
  console.log("0은 falsy입니다"); // 출력됨
}
```

<div class="wda-callout wda-ci">
  기초 단계에서 자주 외우는 falsy 값은 <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>입니다. 추가로 <strong>BigInt의 <code>0n</code></strong>도 falsy입니다.
</div>

**✅ truthy 값 (나머지 전부)**

falsy 값을 제외한 모든 값은 `true`로 평가됩니다.

```jsx
// [논리 구조: 대표적인 참 취급 값들]
true        // boolean true
42          // 0이 아닌 숫자 (음수 포함)
"hello"     // 비어있지 않은 문자열
[]          // 빈 배열 (주의! truthy임)
{}          // 빈 객체 (주의! truthy임)
(function(){}) // 함수도 truthy

// [실용 예시]
if ([]) {
  // 빈 배열은 truthy이므로 조건문이 실행됨
  console.log("빈 배열도 truthy입니다"); // 출력됨
}
```

**주의사항**

<div class="wda-callout wda-cw">
  • <strong>빈 배열 <code>[]</code>과 빈 객체 <code>{}</code>는 truthy입니다.</strong> 데이터가 비어있더라도 객체 자체가 존재하기 때문입니다.<br>
  • <strong>해결책</strong>: 배열이 비어있는지 정확히 확인하려면 데이터 자체를 검사하는 대신 <strong>길이(<code>length</code>)</strong>를 확인해야 합니다.<br>
  &nbsp;&nbsp;→ <code>arr.length === 0</code>
</div>

<div style="position:relative;overflow:visible;height:0;">
  <img src="/images/character/디버깅.webp" alt="" style="position:absolute;width:100px;right:0;top:-110px;opacity:.88;z-index:2;pointer-events:none;">
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. 단축 평가 (Short-circuit Evaluation)</h2>
  <img src="/images/decoration/꽃 아이콘 (2).webp" alt="" style="position:absolute;width:64px;top:-16px;right:12%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(16deg);">
</div>

논리 연산 시 결과가 확정되면 나머지 연산을 생략하고 즉시 값을 반환하는 기능입니다.

**&& (AND) 단축 평가**

앞의 조건이 **false**이면 뒤는 보지도 않고 바로 앞의 값을 반환합니다. 앞이 **true**일 때만 뒤의 값을 확인하고 반환합니다.

```jsx
// [논리 구조 & 실용 예시]
// 앞이 false면 뒤에 무엇이 오든 결과는 false이므로 연산 종료
false && "anything";   // 결과: false (뒤의 "anything"은 쳐다도 안 봄)

// 앞이 true면? 뒤의 값에 따라 결과가 결정되므로 뒤의 값을 반환
true && "출력됨";       // 결과: "출력됨"

// 실무 활용 (조건부 실행)
let isLogin = true;
isLogin && console.log("환영합니다!"); // 결과: "환영합니다!" 출력
// 해석: "로그인 상태가 참(true)이면? 뒤에 있는 출력 코드를 실행해라"
```

**|| (OR) 단축 평가**

앞의 조건이 **true**이면 뒤는 보지도 않고 바로 앞의 값을 반환합니다. 앞이 **false**일 때만 뒤의 값을 확인하고 반환합니다.

```jsx
// [논리 구조 & 실용 예시]
// 앞이 true면 이미 결과가 true이므로 뒤는 계산하지 않고 종료
true || "anything";    // 결과: true (이미 참이 확정됨)

// 앞이 false면? 뒤의 값까지 봐야 결과가 나오므로 뒤의 값을 반환
false || "기본값";      // 결과: "기본값"

// 실무 활용 (기본값 설정)
let userName = ""; // 이름 데이터가 없는 상태 (falsy)
let displayName = userName || "익명"; 

console.log(displayName); // 결과: "익명"
// 해석: "userName이 비어있으면(false)? 대신 뒤에 있는 '익명'을 써라"
```

<div class="wda-callout wda-cw">
  주의: <code>&&</code>와 <code>||</code>는 항상 boolean만 반환하는 것이 아니라, 조건 판단에 사용된 실제 값을 그대로 반환합니다.<br>
  예: <code>0 && "출력"</code> → <code>0</code> / <code>"이름" || "익명"</code> → <code>"이름"</code>
</div>

**요약**

<div class="wda-callout wda-cs">
  • <strong><code>A && B</code></strong>: A가 <strong>참</strong>일 때만 B가 실행됨 — 주로 특정 조건에서 실행할 때 사용<br>
  • <strong><code>A || B</code></strong>: A가 <strong>거짓</strong>일 때 B가 실행됨 — 주로 데이터가 없을 때 기본값을 줄 때 사용
</div>

<div style="position:relative;overflow:visible;height:0;">
  <img src="/images/character/헷갈려요.webp" alt="" style="position:absolute;width:124px;right:2%;top:-80px;opacity:.88;z-index:2;pointer-events:none;">
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. 호출 및 접근 연산자</h2>
  <img src="/images/decoration/핀 아이콘 (8).webp" alt="" style="position:absolute;width:92px;top:-24px;right:6px;z-index:2;pointer-events:none;opacity:.76;transform:rotate(-14deg);">
</div>

함수를 실행하거나 객체 내부의 데이터를 꺼낼 때 사용하는 연산자입니다.

**📞 함수 호출 `()`**

괄호를 붙여야만 함수 내부에 작성된 코드가 실제로 실행됩니다.

```jsx
// [논리 구조 & 실용 예시]
function sayHi() { 
  return "Hi!"; 
}

sayHi;   // 함수 그 자체 (실행되지 않고 함수 내용물만 가리킴)
sayHi(); // 결과: "Hi!" (괄호를 붙여야 비로소 실행되어 결과를 반환함)
```

**🔑 속성 접근 `.` / `[]`**

객체에 저장된 값(속성)을 꺼내오는 열쇠 역할을 합니다. 두 가지 표기법이 있습니다.

```jsx
// [논리 구조 & 실용 예시]
let user = { 
  age: 20 
};

// ① 점 표기법 (Dot Notation)
user.age;   // 결과: 20 (가장 일반적으로 사용함)

// ② 대괄호 표기법 (Bracket Notation)
user["age"]; // 결과: 20 (속성 이름을 문자열로 넣어서 접근함)
```

| 표기법 | 형태 | 사용 상황 |
|---|---|---|
| **점 표기법** | `user.age` | 일반적인 속성 접근 — 간결하고 가독성이 좋음 |
| **대괄호 표기법** | `user["age"]` | 속성 이름에 공백이 있거나, 변수로 동적 접근이 필요할 때 필수 |

**요약**

<div class="wda-callout wda-cs">
  • <strong>함수 호출</strong>: <code>()</code>가 없으면 함수는 움직이지 않습니다. 함수 이름 뒤에 반드시 붙여야 명령이 실행됩니다.<br>
  • <strong>점 표기법(<code>user.age</code>)</strong>: 코드가 간결하여 가독성이 좋습니다.<br>
  • <strong>대괄호 표기법(<code>user["age"]</code>)</strong>: 속성 이름에 공백이 있거나, 변수를 통해 동적으로 접근해야 할 때 필수적입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>9. 그 외 연산자들 (참고용)</h2>
</div>

비트 연산자처럼 자주 쓰이지는 않는 연산자와, 뒤에서 자세히 다룰 옵셔널 체이닝을 간단히 먼저 살펴봅니다.

**🔢 비트 연산자 (`&`, `|`, `^`, `<<`)**

<div style="position:relative;overflow:visible;height:0;">
  <img src="/images/decoration/소품 아이콘 (1).webp" alt="" style="position:absolute;width:64px;top:-28px;right:38%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(-10deg);">
</div>

숫자를 이진수(0과 1) 비트 단위로 조작하는 연산자입니다.

```jsx
// 웹 개발 실무에서는 권한 관리 등 특수한 경우 외에는 거의 사용하지 않습니다.

/* 예시 (참고만 하세요) */
5 & 1; // 비트 AND 연산
```

**🛡️ 옵셔널 체이닝 (`?.`)**

값이 `null`이나 `undefined`여도 에러 없이 안전하게 속성에 접근하게 해주는 연산자입니다. 나중에 상세히 배울 예정인 매우 유용한 문법입니다.

```jsx
let user = null; 

// 일반적인 접근: user가 null이면 에러 발생 (프로그램 멈춤)
// user.address.city; 

// 옵셔널 체이닝 사용: 에러 대신 undefined를 반환하고 멈추지 않음
user?.address?.city;
```

**보충 설명**

<div class="wda-callout wda-ci">
  • "데이터가 있으면 가져오고, 없으면 에러 내지 말고 그냥 통과해줘"라는 뜻입니다.<br>
  • 데이터가 확실치 않은 객체를 다룰 때 프로그램이 꺼지는 것을 막아주는 방어막 역할을 합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습: 연산자 놀이터</h2>
  <img src="/images/decoration/핀 아이콘 (9).webp" alt="" style="position:absolute;width:40px;top:-10px;left:36%;z-index:2;pointer-events:none;opacity:.76;transform:rotate(14deg);">
</div>

복잡한 연산자들을 직접 섞어보며 결과를 예측하고 익혀봅시다.

<div style="position:relative;overflow:visible;height:0;">
  <img src="/images/character/코딩 중.webp" alt="" style="position:absolute;width:220px;right:0;top:-120px;opacity:.88;z-index:2;pointer-events:none;">
</div>

**🧩 비교 미로 찾기**

데이터 타입과 값의 일치 여부를 정확히 구분하는 것이 핵심입니다.

```jsx
// [실습 코드 및 해석]
1 == "1"    // true  (동등: 타입이 달라도 값이 같으면 참)
1 === "1"   // false (일치: 타입이 숫자와 문자열로 다르므로 거짓)

0 == false  // true  (0은 falsy 값이므로 false와 동등하게 취급)
0 === false // false (값의 의미는 비슷해도 숫자와 불리언 타입은 다름)
```

**🔬 논리 연산자 실험**

단축 평가와 최신 연산자(`??`)의 동작 원리를 확인합니다.

```jsx
// [실습 코드 및 해석]
true && "통과"   // "통과" (앞이 참이므로 뒤의 값을 반환 - AND 단축 평가)

false || "대타"  // "대타" (앞이 거짓이므로 뒤의 값을 반환 - OR 단축 평가)

null ?? "기본값" // "기본값" (앞이 null이므로 뒤의 기본값을 반환 - null 병합 연산자)
```

**📋 연산자 동작 원리 요약 (최종 체크)**

```jsx
// 1) 비교 연산자
// ==  : 느슨한 비교 (값이 같으면 참, 자동으로 형 변환을 수행함)
// === : 엄격한 비교 (값과 데이터 타입이 모두 같아야 참)

// 2) 논리 연산자 (단축 평가)
// &&  : 앞이 true면 뒤를 반환 (앞이 참일 때만 뒤를 확인)
// ||  : 앞이 false면 뒤를 반환 (앞이 거짓일 때만 뒤를 확인)

// 3) null 병합 연산자
// ??  : 앞이 null 또는 undefined면 뒤를 반환 (오직 빈 값만 체크)
```

**해석**

<div class="wda-callout wda-ci">
  • <strong><code>==</code> vs <code>===</code></strong>: <code>==</code>는 자바스크립트가 임의로 타입을 바꾸기 때문에 논리적 오류를 일으킬 수 있습니다. 무조건 <strong><code>===</code></strong>만 쓴다고 생각하는 것이 가장 효율적입니다.<br>
  • <strong><code>&&</code> vs <code>||</code></strong>: 연산자가 '어디서 멈추느냐'가 핵심입니다.<br>
  &nbsp;&nbsp;- <code>&&</code>는 첫 번째가 가짜(false)면 거기서 즉시 멈춥니다.<br>
  &nbsp;&nbsp;- <code>||</code>는 첫 번째가 진짜(true)면 거기서 즉시 멈춥니다.<br>
  • <strong><code>??</code>의 존재 이유</strong>: <code>0</code>이나 <code>""</code>(빈 문자열)을 유효한 값으로 처리하고 싶을 때, <code>||</code> 대신 사용하는 <strong>안전 장치</strong>입니다.
</div>

---

## 10. ?. (옵셔널 체이닝) 연산자

`null` 또는 `undefined` 값에 접근할 때 에러를 발생시키지 않고 안전하게 속성에 접근합니다.

**⚠️ ?. 없이 접근 (위험)**

값이 비어있을 가능성이 있는 객체에 직접 접근하면 프로그램이 강제 종료됩니다.

```jsx
let user = null;

// [에러 발생!]
// user.name; 
// 🚨 TypeError: Cannot read property 'name' of null

// [기존 방어 코드 (장황함)]
let name;
if (user && user.profile) {
  name = user.profile.name;
}
```

**✅ ?. 사용 (안전)**

<div aria-hidden="true" style="position:relative;height:0;overflow:visible;z-index:2;"><img src="/images/decoration/체크 아이콘 (4).webp" alt="" style="position:absolute;top:-26px;left:44%;width:46px;pointer-events:none;opacity:.76;transform:rotate(-10deg);"></div>

에러 대신 `undefined`를 반환하여 프로그램의 흐름을 유지합니다.

```jsx
let user = null;

// ① 기본 속성 접근
user?.name;           // undefined (에러 없이 안전하게 반환)

// ② 중첩 객체 접근
user?.profile?.name;  // undefined (단계별로 값이 있는지 확인하며 접근)

// ③ 메서드 호출 가능
user?.getName?.();    // undefined (함수가 존재할 때만 실행)

// ④ 배열 접근 가능
let arr = null;
arr?.[0];             // undefined (배열이 존재할 때만 0번째 인덱스 확인)
```

**요약**

<div class="wda-callout wda-cs">
  • <strong>등장 배경</strong>: ES2020에 추가된 문법으로, 데이터가 있을 수도 없을 수도 있는 상황(예: API 응답 데이터 처리)에서 매우 유용합니다.<br>
  • <strong>핵심 원리</strong>: <code>?.</code> 앞의 대상이 <code>null</code> 혹은 <code>undefined</code>라면 즉시 평가를 멈추고 <code>undefined</code>를 반환합니다.<br>
  • <strong>가독성</strong>: 기존의 복잡한 <code>if</code>문이나 <code>&&</code> 연산자를 나열하던 방어 코드를 획기적으로 줄여줍니다.
</div>

---

<div style="position:relative;overflow:visible;height:0;">
  <img src="/images/character/잠깐 생각해보기.webp" alt="" style="position:absolute;width:126px;left:3%;top:24px;opacity:.88;z-index:2;pointer-events:none;">
</div>

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. ?? (nullish 병합) 연산자</h2>
  <img src="/images/decoration/하트 아이콘 (5).webp" alt="" style="position:absolute;width:44px;top:-12px;left:60%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(10deg);">
</div>

`null` 또는 `undefined`일 때만 기본값을 사용합니다.

**❌ || 의 문제점 (모든 Falsy에 반응)**

`||` 연산자는 `0`이나 `""`(빈 문자열)처럼 실제로 유효한 데이터까지도 `falsy`로 취급하여 기본값으로 덮어버리는 문제가 있습니다.

```jsx
// [실용 예시 1: 숫자 0이 유효한 값일 때]
let count = 0;
let result = count || 100; 
// 결과: 100 (0이 falsy라서 기본값으로 대체됨!)

// [실용 예시 2: 빈 문자열 ""이 유효한 값일 때]
let text = "";
let display = text || "없음";
// 결과: "없음" (빈 문자열이 falsy라서 기본값으로 대체됨!)
```

**주의사항**

<div class="wda-callout wda-cw">
  0이나 ""가 실제 의미 있는 값임에도 불구하고 기본값으로 바뀌어 데이터가 왜곡될 수 있음.
</div>

**✅ ?? 의 해결책 (오직 Null / Undefined만 체크)**

`??` 연산자는 오직 `null`과 `undefined`인 경우에만 기본값을 사용하며, `0`이나 `""`은 유효한 값으로 유지합니다.

```jsx
// [해결 예시 1: 숫자 0 유지]
let count = 0;
let result = count ?? 100;
// 결과: 0 (0은 유효한 값으로 인정!)

// [해결 예시 2: 빈 문자열 유지]
let text = "";
let display = text ?? "없음";
// 결과: "" (빈 문자열 유지!)

// [해결 예시 3: 진짜 비어있을 때만 작동]
null ?? "기본"      // 결과: "기본"
undefined ?? "기본" // 결과: "기본"
```

**요약**

<div class="wda-callout wda-cs" style="position:relative;overflow:visible;">
  <img src="/images/decoration/꽃 아이콘 (5).webp" alt="" style="position:absolute;width:60px;top:-40px;left:28%;transform:rotate(-14deg);z-index:2;pointer-events:none;opacity:.74;">
  • <strong>결정적 차이</strong>: <code>0</code>과 <code>""</code>를 기본값으로 <strong>대체</strong>하고 싶다면 <code>||</code>를, 유효한 데이터로 <strong>유지</strong>하고 싶다면 <code>??</code>를 선택해야 합니다.<br>
  • <strong>원칙</strong>: 0이나 빈 문자열을 유효한 값으로 유지해야 할 때는 <strong><code>??</code></strong>를 사용하고, 모든 falsy 값을 기본값으로 대체하고 싶을 때는 <code>||</code>를 사용할 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>📌 연산자 최종 핵심 요약</h2>
  <img src="/images/decoration/별 아이콘 (2).webp" alt="" style="position:absolute;width:72px;top:-22px;left:40%;z-index:2;pointer-events:none;opacity:.70;transform:rotate(-16deg);">
  <img src="/images/character/코딩 팁.webp" alt="" style="position:absolute;width:130px;right:0;top:-112px;opacity:.88;z-index:2;pointer-events:none;">
</div>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>비교의 정석</strong></td>
    <td>• <strong><code>==</code></strong>: 타입을 멋대로 바꿔 비교 — 예측 불가 버그 원인. 절대 사용하지 마세요.<br>• <strong><code>===</code></strong>: 값과 타입이 모두 같아야 참. <strong>모든 비교는 이 연산자</strong>를 기준으로 삼으십시오.</td>
  </tr>
  <tr>
    <td><strong>기초 Falsy 값<br>(무조건 암기)</strong></td>
    <td>• <code>false</code>, <code>0</code>, <code>""</code>(빈 문자열), <code>null</code>, <code>undefined</code>, <code>NaN</code> (추가로 BigInt의 <code>0n</code>도 falsy)<br>• <strong>주의</strong>: 빈 배열 <code>[]</code>과 빈 객체 <code>{}</code>는 비어있어도 <strong>truthy</strong>입니다.</td>
  </tr>
  <tr>
    <td><strong>단축 평가 공식</strong></td>
    <td>• <strong><code>A && B</code></strong>: "A가 참일 때만 B를 해라." — 조건부 실행<br>• <strong><code>A || B</code></strong>: "A가 거짓이면 B(기본값)를 써라." — 포괄적 기본값</td>
  </tr>
  <tr>
    <td><strong>?. 옵셔널 체이닝</strong></td>
    <td>• 데이터가 있을지 없을지 모를 때 에러로 프로그램이 멈추는 것을 막는 <strong>최강의 방어막</strong>입니다.</td>
  </tr>
  <tr>
    <td><strong>?? nullish 병합</strong></td>
    <td>• <code>0</code>이나 <code>""</code>이 실제 의미 있는 데이터라면, <code>||</code> 대신 반드시 <code>??</code>를 써야 데이터 왜곡을 막을 수 있습니다.</td>
  </tr>
  <tr>
    <td><strong>최종 암기 포인트</strong></td>
    <td>• <strong>비교는 항상 <code>===</code></strong><br>• <strong>falsy 6가지</strong>: false / 0 / "" / null / undefined / NaN<br>• <strong><code>?.</code></strong> → 에러 방어막 / <strong><code>??</code></strong> → 정밀 기본값</td>
  </tr>
</table>
