---
title: "2-3 객체로 데이터 구조화하기"
status: "completed"
description: "객체 리터럴 생성부터 프로퍼티 접근·조작, 순회, 복사, 중첩 객체, 메서드와 this까지 객체의 핵심 개념을 정리한다."
category: "JavaScript"
section: "Arrays & Objects"
tags:
  - javascript
  - objects
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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.84rem;font-weight:700;margin-bottom:3px}
.wda-fcard-dsc{font-size:.78rem;opacity:.72;line-height:1.5}
.wda-fcard-list{list-style:none;padding:0;margin:.4rem 0 0;font-size:.71rem;line-height:1.6;opacity:.75}
.wda-fcard-list li::before{content:"· "}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(245,158,11,.15);color:#f59e0b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.81rem;font-weight:700;margin-bottom:2px}
.wda-sdsc{font-size:.78rem;opacity:.75;line-height:1.55}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:160px}
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

<div class="wda-goal" style="position:relative;overflow:visible;padding-top:14px;">
  <img src="/images/decoration/마스킹 테이프 (9).webp" alt="" style="position:absolute;width:108px;top:-16px;right:26%;z-index:2;pointer-events:none;opacity:.80;">
  🗂️ <strong>객체의 개념</strong> — key-value 쌍으로 데이터를 구조화하는 방법 이해합니다.<br>
  🔑 <strong>프로퍼티 다루기</strong> — 접근, 추가, 수정, 삭제 방법을 익힙니다.<br>
  🔁 <strong>객체 순회</strong> — for...in과 Object 메서드로 객체를 탐색할 수 있습니다.<br>
  🛠️ <strong>메서드</strong> — 객체 내부의 함수와 this 키워드를 알게 됩니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. 객체란 무엇인가?</h2>
  <img src="/images/decoration/꽃 아이콘 (11).webp" alt="" style="position:absolute;width:112px;top:-22px;right:8px;z-index:2;pointer-events:none;opacity:.74;transform:rotate(8deg);">
</div>

관련 데이터와 기능을 묶은 집합을 **객체(Object)**라고 합니다.

### 1) 왜 필요한가?

관련된 데이터들을 하나로 묶어서 관리하기 위해서입니다.

### 2) 객체 없이 관리한다면... 😱

객체를 사용하지 않고 각각의 변수로 관리할 경우 발생하는 문제입니다.

```jsx
const userName = "철수";
const userAge = 25;
const userEmail = "cs@email.com";
```

- **데이터의 파편화** : 데이터가 서로 흩어져 있어 각 변수 간의 연관 관계를 알기 어렵습니다.
- **관리의 어려움** : 사용자가 100명이 된다면 `userName1`, `userName2`처럼 수많은 변수를 만들어야 하므로 관리가 불가능해집니다.

### 3) 객체로 관리할 때의 이점 😊

이미지 속 코드를 객체 구조로 변환한 모습입니다.

```jsx
const user = {
  userName: "철수",
  userAge: 25,
  userEmail: "cs@email.com"
};
```

- **의미의 명확성** : `user`라는 하나의 바구니 안에 이름, 나이, 이메일이 담겨 있어 "누구의 데이터인지" 한눈에 파악됩니다.
- **구조화된 관리** : 관련 있는 데이터를 `Key-Value` 쌍으로 묶어 프로그래밍적으로 훨씬 다루기 쉬운 상태가 됩니다.

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>4) 구조 시각화</h3>
  <img src="/images/decoration/반짝이 아이콘 (5).webp" alt="" style="position:absolute;width:48px;top:-8px;left:33%;z-index:2;pointer-events:none;opacity:.72;transform:rotate(-7deg);">
</div>

객체는 **현실의 사물을 코드로 옮겨놓은 것**과 같습니다. (예: 명함, 프로필 카드)

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📇</div>
    <div class="wda-fcard-ttl">명함 전체</div>
    <div class="wda-fcard-dsc"><code>user</code> (객체)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🏷️</div>
    <div class="wda-fcard-ttl">항목 이름</div>
    <div class="wda-fcard-dsc"><code>Key</code> (name, age)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📝</div>
    <div class="wda-fcard-ttl">실제 내용</div>
    <div class="wda-fcard-dsc"><code>Value</code> ("철수", 25)</div>
  </div>
</div>

> "이름(Key)표가 붙은 여러 개의 서랍(Value)"

**개념**

<div class="wda-callout wda-cy">
  <span class="wda-clabel">Key와 Value</span>
  객체는 <strong>Key(키)</strong>와 <strong>Value(값)</strong>의 쌍으로 이루어져 있습니다.
</div>

### 5) Pseudo-code (객체의 문법 구조)

객체를 선언하고 구성하는 표준 규칙입니다.

- **선언** : `const 변수명 = { ... };`
- **속성** : `키(Key) : 값(Value),`
- **구분** : 각 속성은 **쉼표(,)**로 구분합니다.

### 6) 데이터 타입 구성

객체의 키와 값에는 다음과 같은 규칙이 적용됩니다.

| **구분** | **허용 타입** | **예시** |
| --- | --- | --- |
| **Key (키)** | **"문자열"** | `"name"`, `"age"` |
| **Value (값)** | **모든 타입** | `"철수"`, `25`, `true`, `[]` 등 |

객체의 key는 대부분 문자열처럼 사용됩니다. 다만 JavaScript에서는 Symbol도 객체 key로 사용할 수 있습니다. 초보자 단계에서는 문자열 key를 기본으로 이해하면 됩니다.

### 7) 실제 코드

```jsx
const user = {
  name: "철수",  // Key는 "name", Value는 "철수"
  age: 25        // Key는 "age", Value는 25
};
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. 객체 생성</h2>
  <img src="/images/character/이해 완료.webp" alt="" style="position:absolute;width:130px;right:0;top:-104px;opacity:.88;z-index:2;pointer-events:none;">
  <img src="/images/decoration/화살표 아이콘 (5).webp" alt="" style="position:absolute;width:52px;top:-60px;right:22%;z-index:2;pointer-events:none;opacity:.72;transform:rotate(-8deg);">
</div>

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>&lt;리터럴&gt;</h3>
</div>

중괄호를 사용하여 객체를 만드는 **객체 리터럴 방식**이 가장 일반적입니다.

### 1) ⭐ 객체 리터럴 (추천)

가장 직관적이고 코드가 간결합니다.

```jsx
const user = {
  name: "철수",
  age: 25,
  isStudent: true
};

const empty = {}; // 빈 객체
```

### 2) Object 생성자 (비추천)

특별한 이유가 없다면 리터럴을 사용하세요.

```jsx
const user = new Object();

user.name = "철수";
user.age = 25;
```

**핵심 차이점**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">리터럴 vs 생성자</span>
  <ul>
    <li><strong>가독성</strong> : 리터럴 방식은 객체의 구조를 한눈에 파악할 수 있어 유지보수가 훨씬 쉽습니다.</li>
    <li><strong>사용성</strong> : 객체 리터럴 방식은 코드가 짧고 구조가 한눈에 보여 일반적으로 더 많이 사용됩니다.</li>
    <li><strong>권장사항</strong> : 거의 모든 경우에 리터럴 방식을 사용하는 것이 표준입니다.</li>
  </ul>
</div>

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>&lt;키 룰 (Key Rules)&gt;</h3>
  <img src="/images/decoration/핀 아이콘 (11).webp" alt="" style="position:absolute;width:90px;top:-16px;right:6%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(7deg);">
</div>

키는 **문자열**이어야 하며, **특수문자가 포함되면 따옴표가 필요**합니다.

### 3) 기본 규칙 (따옴표 생략)

**영문, 숫자, _, $ 조합 (숫자 시작 금지)**

```jsx
const good = {
  name: "값",       // OK
  age: 25,         // OK
  _private: true,  // OK
  $id: 123         // OK
};
```

### 4) 특수 규칙 (따옴표 필수)

**띄어쓰기, 하이픈, 숫자로 시작 등**

```jsx
const special = {
  "my-key": "값",        // 하이픈
  "home address": "값",  // 공백
  "1stPlace": "값"      // 숫자 시작
};
```

> 이런 키들은 접근할 때도 obj["key"] 만 가능합니다.

---

<div style="position:relative;overflow:visible;height:0;">
  <img src="/images/decoration/잎사귀 아이콘 (3).webp" alt="" style="position:absolute;width:54px;left:66%;top:0;z-index:2;pointer-events:none;opacity:.72;transform:rotate(9deg);">
</div>

## 3. 프로퍼티 접근

**점 표기법**과 **대괄호 표기법**으로 프로퍼티에 접근합니다.

### 1) 점 표기법 (Dot Notation)

**가장 많이 사용하는 간결한 방식**입니다.

```jsx
const user = {
  name: "철수",
  age: 25
};

console.log(user.name); // "철수"
console.log(user.age);  // 25
```

### 2) 대괄호 표기법 (Bracket Notation)

**키 이름을 문자열로 전달해야 함**에 유의하세요.

```jsx
const user = {
  name: "철수",
  age: 25
};

console.log(user["name"]); // "철수"
console.log(user["age"]);  // 25
```

**보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">언제 무엇을 쓸까?</span>
  단순히 접근법이 두 개인 것이 아니라, <strong>상황에 따라 반드시 써야 하는 경우</strong>가 정해져 있습니다.<br><br>
  <strong>① 대괄호 표기법을 반드시 써야 하는 경우</strong><br>
  · <strong>특수문자/공백이 포함된 키</strong> : <code>user["user-email"]</code>처럼 접근해야 합니다. (<code>user.user-email</code>은 에러)<br>
  · <strong>변수를 통해 접근할 때</strong> : 키 이름이 변수에 담겨 있다면 반드시 <code>user[variable]</code> 형식을 써야 합니다.
</div>

**② 요약 비교**

| **구분** | **점 표기법 (.)** | **대괄호 표기법 ([])** |
| --- | --- | --- |
| **가독성** | **우수 (권장)** | 보통 |
| **특수문자 키** | 사용 불가 | **사용 가능** |
| **변수로 접근** | 사용 불가 | **사용 가능** |
| **주의사항** | 키 이름을 그대로 작성 | 키 이름을 **"문자열"**로 감싸기 |

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>&lt; 동적 접근&gt;</h3>
  <img src="/images/decoration/책갈피 아이콘 (2).webp" alt="" style="position:absolute;width:52px;top:-10px;right:10%;z-index:2;pointer-events:none;opacity:.74;">
</div>

변수를 사용하여 키에 접근하거나, 특수 문자가 포함된 키에 접근할 때 사용합니다.

### 3) 변수로 접근하기

변수를 키로 사용하여 객체의 프로퍼티에 접근하는 방법입니다.

```jsx
const user = { name: "철수", age: 25 };
const key = "name";

// 점 표기법: 불가능 ❌
console.log(user.key); // undefined

// 대괄호 표기법: 가능 ✅
console.log(user[key]); // "철수"
```

**보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">점 표기법이 undefined를 반환하는 이유</span>
  <code>user.key</code>라고 작성하면 자바스크립트는 객체 내부에서 실제 이름이 <code>"key"</code>인 프로퍼티를 찾습니다.<br>
  위 코드에서 <code>user</code> 객체에는 <code>key</code>라는 이름의 프로퍼티가 없으므로 <code>undefined</code>가 출력되는 것입니다.
</div>

### 4) 특수 키 접근

> 키 이름에 하이픈(-)이나 공백 등 특수 문자가 포함된 경우에 사용합니다.

```jsx
const data = {
  "user-id": 123,
  "home address": "Seoul"
};

data["user-id"];      // OK
data["home address"]; // OK
```

**보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">언제 대괄호를 쓰나요?</span>
  <ul>
    <li>키가 고정되지 않고 바뀔 때 (동적)</li>
    <li>키 이름에 특수 문자나 공백이 포함되어 점 표기법(<code>.</code>)을 사용할 수 없을 때</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 생성과 접근</h2>
  <img src="/images/decoration/체크 아이콘 (2).webp" alt="" style="position:absolute;width:50px;top:-10px;right:10%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(6deg);">
</div>

객체를 만들고 다양한 방법으로 값을 꺼내봅시다.

### 1) 미션: 내 폰 정보 저장하기

다음 조건에 맞는 자바스크립트 코드를 작성하세요.

1. **myPhone 객체를 생성하세요.** (model: "iPhone", color: "Black", price: 100)
2. **점 표기법**으로 `model`을 출력하세요.
3. **대괄호 표기법**으로 `color`를 출력하세요.

### 2) 정답 코드

```jsx
// 1. 객체 생성
const myPhone = {
  model: "iPhone",
  color: "Black",
  price: 100
};

// 2. 점 표기법으로 접근
console.log(myPhone.model); // "iPhone"

// 3. 대괄호 표기법으로 접근
console.log(myPhone["color"]); // "Black"
```

`myPhone.price` 또는 `myPhone["price"]`를 입력하면 설정된 값인 `100`을 얻을 수 있습니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. 프로퍼티 조작</h2>
  <img src="/images/decoration/말풍선 아이콘 (7).webp" alt="" style="position:absolute;width:116px;top:-22px;right:8px;z-index:2;pointer-events:none;opacity:.74;transform:rotate(-6deg);">
</div>

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>&lt;추가와 수정&gt;</h3>
</div>

**값을 할당하면 자동으로 추가되거나 수정됩니다.**

### 1) 없으면 추가

객체에 존재하지 않는 키에 값을 할당하면 새로운 프로퍼티가 자동으로 추가됩니다.

- **점 표기법 사용** : `객체명.새로운키 = 값;`
- **대괄호 표기법 사용** : `객체명["새로운키"] = 값;`

```jsx
const user = { name: "철수" };

// 1. 점 표기법으로 추가
user.age = 25;

// 2. 대괄호 표기법으로 추가
user["email"] = "cs@email.com";

console.log(user);
// 출력 결과: { name: "철수", age: 25, email: "cs@email.com" }
```

### 2) 있으면 수정

이미 객체 내에 존재하는 키에 새로운 값을 할당하면, **기존 값이 새로운 값으로 덮어씌워집니다.**

```jsx
const user = {
  name: "철수",
  age: 25
};

// 이미 있는 키 'age'에 새로운 값 30을 할당
user.age = 30;

console.log(user);
// 출력 결과: { name: "철수", age: 30 }
```

### 3) 특징 및 주의사항

- **동적 확장성** : 자바스크립트 객체는 실행 중에 자유롭게 프로퍼티를 추가하거나 수정할 수 있는 동적 구조를 가집니다.
- **재할당과의 차이** : `const`로 선언된 객체 변수 자체를 통째로 바꾸는 것은 불가능하지만, 위 예시처럼 객체 내부의 '프로퍼티'를 조작하는 것은 언제든 가능합니다.
- **덮어쓰기** : 수정 시 기존 데이터는 보존되지 않고 완전히 대체되므로 주의가 필요합니다.

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>&lt;삭제와 const&gt;</h3>
  <img src="/images/decoration/느낌표 아이콘 (1).webp" alt="" style="position:absolute;width:46px;top:-10px;right:8%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(-6deg);">
</div>

`delete` 연산자로 삭제하며, `const` 객체도 수정 가능함을 주의하세요.

### 4) 프로퍼티 삭제

객체 내부의 특정 프로퍼티를 제거할 때 사용합니다.

```jsx
const user = { name: "철수", age: 25 };

// 삭제
delete user.age;

console.log(user.age); // undefined
console.log(user);    // { name: "철수" }
```

존재하지 않는 값을 삭제해도 에러는 나지 않습니다.

- **delete의 특징** : 단순히 값을 비우는 것이 아니라 키 자체를 객체에서 완전히 뽑아내는 동작입니다.

### 5) const 객체의 비밀

`const`는 변수와 객체의 연결만 고정합니다. 객체 내용은 바꿀 수 있습니다.

```jsx
const user = { name: "철수" };

// O 내부 프로퍼티 변경 가능!
user.name = "영희";

// X 객체 자체 재할당 불가!
user = { name: "민수" }; // Error
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 수정과 삭제</h2>
  <img src="/images/decoration/스탬프 아이콘 (3).webp" alt="" style="position:absolute;width:116px;top:-22px;right:10%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(7deg);">
</div>

객체의 정보를 업데이트하고 불필요한 정보를 지워봅시다.

### 1) 미션: 폰 정보 업데이트

이미 생성된 `myPhone` 객체를 대상으로 다음 지시사항을 수행하세요.

1. **price 를 120으로 수정하세요.**
2. **새로운 속성 year (2023)를 추가하세요.**
3. **color 속성을 삭제하세요.**
4. **최종 객체를 출력하세요.**

### 2) 정답 코드

```jsx
// 1. 객체 생성 (기본 데이터)
const myPhone = {
  model: "iPhone",
  color: "Black",
  price: 100
};

// 2. 점 표기법으로 접근 예시
console.log(myPhone.model); // "iPhone"

// 3. 대괄호 표기법으로 접근 예시
console.log(myPhone["color"]); // "Black"

// --- 미션 수행 부분 ---

// 1) price를 120으로 수정
myPhone.price = 120;

// 2) 새로운 속성 year(2023) 추가
myPhone.year = 2023;

// 3) color 속성 삭제
delete myPhone.color;

// 4) 최종 객체 출력
console.log(myPhone);
// 출력 결과: { model: "iPhone", price: 120, year: 2023 }
```

### 3) 주요 포인트 및 보충

- **수정과 추가** : `myPhone.price`와 같이 기존 키에 할당하면 **수정**이 되고, `myPhone.year`와 같이 없는 키에 할당하면 **추가**가 됩니다.
- **삭제의 결과** : `delete` 연산자를 사용하면 객체에서 해당 프로퍼티가 완전히 제거됩니다. 이후 접근 시 `undefined`가 반환되는 것을 확인할 수 있습니다.
- **const의 동작** : `myPhone`은 `const`로 선언되었지만, 객체 내부의 값(`price`, `year`, `color`)을 조작하는 것은 자바스크립트 엔진에서 허용되는 정상적인 동작입니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. 계산된 프로퍼티 (Computed Property)</h2>
  <img src="/images/decoration/구름 아이콘 (4).webp" alt="" style="position:absolute;width:58px;top:-12px;right:8px;z-index:2;pointer-events:none;opacity:.72;">
</div>

대괄호 `[]` 안에 표현식을 넣어 키 이름을 **동적**으로 생성할 수 있습니다.

### 1) 특징

- 변수의 값을 키 이름으로 사용 ✅
- 문자열 결합 등 표현식 사용 가능 ✅
- 대괄호 없이 쓰면 에러 발생 ❗

### 2) 예제 코드

```jsx
const key = "name";
const i = 1;

const obj = {
  [key]: "철수",             // name: "철수"
  ["user-" + i]: "member", // user-1: "member"
  [1 + 2]: "three"         // 3: "three"
};

console.log(obj);
// { '3': 'three', name: '철수', 'user-1': 'member' }
// (참고: 정수처럼 보이는 키는 일반 문자열 키보다 먼저 나열되는 규칙이 있습니다.
//       다만 객체의 출력 순서에 의존하는 코드는 피하는 것이 좋습니다.)
```

- **대괄호의 역할** : 자바스크립트에서 객체 리터럴(`{}`) 내부에 대괄호를 사용하면, 엔진은 그 안의 코드를 실행(Evaluate)한 뒤 그 결과값을 키 이름으로 사용합니다.
- **에러 방지** : 이미지의 주의사항처럼 변수명을 대괄호 없이 키 위치에 그대로 쓰면, 변수에 담긴 값이 아닌 변수명 자체가 키가 되거나 문법 에러가 발생할 수 있습니다. 동적 키를 원한다면 반드시 `[]`가 필요합니다.

---

<div style="position:relative;overflow:visible;height:0;">
  <img src="/images/decoration/별 아이콘 (4).webp" alt="" style="position:absolute;width:66px;left:33%;top:0;z-index:2;pointer-events:none;opacity:.72;transform:rotate(-8deg);">
</div>

## 6. 단축 문법 (Shorthand)

키와 변수 이름이 같거나, 메서드를 정의할 때 코드를 생략하여 간결하게 쓸 수 있습니다.

### 1) 단축 프로퍼티

변수명과 키 이름이 같으면 `: 값` 부분을 생략할 수 있습니다.

```jsx
const name = "철수";
const age = 25;

const user = {
  name: name,
  age: age,
};

// 👇 줄여서 쓰기
const user = {
  name,
  age
};
```

### 2) 단축 메서드

객체 내부에서 함수(메서드)를 정의할 때 `function` 키워드를 생략할 수 있습니다.

```jsx
// 기존 방식
const user1 = {
  greet: function() {
    console.log("Hello");
  }
};

// 👇 줄여서 쓰기
const user2 = {
  greet() {
    console.log("Hello");
  }
};
```

### 3) 특징

- **메서드 정의** : 단축 메서드 문법(`greet() {}`)은 기존 방식(`greet: function() {}`)과 기능적으로 거의 동일하지만, 코드가 훨씬 간결해집니다.
- **주의사항** : 단축 프로퍼티 사용 시, 참조하려는 변수가 스코프 내에 반드시 존재해야 하며 이름이 정확히 일치해야 합니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. 프로퍼티 존재 확인</h2>
  <img src="/images/decoration/종이 클립 아이콘 (3).webp" alt="" style="position:absolute;width:52px;top:-10px;right:8px;z-index:2;pointer-events:none;opacity:.70;">
</div>

객체에 특정 키가 있는지 확인할 때는 `in` 연산자나 `hasOwnProperty()` 메서드를 사용합니다.

### 1) `in` 연산자

가장 일반적으로 사용되는 방법으로, 해당 객체가 상속받은 프로퍼티까지 모두 확인합니다.

```jsx
const user = { name: "철수", age: 25 };

// "키" in 객체
console.log("name" in user);   // true
console.log("email" in user);  // false
```

**특징 :** 프로토타입 체인(상속)까지 확인합니다.

### 2) `hasOwnProperty()` 메서드

객체가 **자기 자신(own)**의 프로퍼티로 해당 키를 가지고 있는지 판별합니다.

```jsx
const user = { name: "철수" };

// 객체.hasOwnProperty("키")
console.log(user.hasOwnProperty("name")); // true
```

**특징** : 오직 자신의 속성만 확인합니다.

다만 객체가 `hasOwnProperty`라는 이름의 프로퍼티를 직접 가지고 있을 수도 있으므로, 최신 문법에서는 `Object.hasOwn(obj, key)`를 사용할 수도 있습니다.

```jsx
Object.hasOwn(user, "name"); // true
```

### 3) 비교 및 주의사항

- **문자열 체크** : `in` 연산자 사용 시 왼쪽의 키 이름은 반드시 따옴표(`""`)로 감싸야 합니다. 그렇지 않으면 변수로 취급되어 의도치 않은 동작이 발생합니다.
- **상속 여부 판별** : 단순히 키가 존재하는지 알고 싶다면 `in`을 사용하고, 상속받은 속성이 아닌 해당 객체 고유의 속성인지 엄격히 가려내야 할 때는 `hasOwnProperty()`를 사용해야 합니다.
- **undefined와의 차이** : 객체에 키 자체가 없는 경우와 키는 있지만 값이 `undefined`인 경우를 명확히 구분할 수 있다는 점이 이 확인법들의 존재 이유입니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. 안전한 접근 - 옵셔널 체이닝 (Optional Chaining)</h2>
  <img src="/images/decoration/소품 아이콘 (2).webp" alt="" style="position:absolute;width:56px;top:-12px;right:8px;z-index:2;pointer-events:none;opacity:.74;transform:rotate(6deg);">
</div>

`?.` 연산자는 값이 존재하는지 확인하면서 접근합니다. (없으면 `undefined` 반환)

### 1) 일반 접근의 문제점

존재하지 않는 프로퍼티의 하위 속성에 접근하려고 하면 에러가 발생하여 프로그램이 멈춥니다.

```jsx
const user = {};
// 주소 정보가 없는데 접근하면?
console.log(user.address.city);
// 🚨 TypeError: Cannot read properties of undefined
```

### 2) 옵셔널 체이닝으로 해결

`?.`을 사용하면 앞의 대상이 없더라도 에러를 내지 않고 즉시 중단하며 `undefined`를 반환합니다.

```jsx
const user = {};

// ?. 앞이 없으면 즉시 중단하고 undefined
console.log(user.address?.city); // undefined

// 에러가 발생하지 않습니다! 😍
```

### 3) 특징 및 요약

- **안정성** : 데이터가 중첩된 객체 구조(예: API 응답 데이터)에서 특정 값이 있는지 확신할 수 없을 때 에러 방지를 위해 필수적으로 사용합니다.
- **동작 원리** : `?.` 앞의 평가 대상이 `null`이거나 `undefined`이면 평가를 멈추고 즉시 `undefined`를 반환합니다.
- **주의사항** : 존재하지 않아도 괜찮은 대상에만 선택적으로 사용해야 합니다. 반드시 있어야 하는 데이터임에도 옵셔널 체이닝을 남용하면 디버깅이 어려워질 수 있습니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>9. 객체 순회 - for...in</h2>
  <img src="/images/decoration/하트 아이콘 (6).webp" alt="" style="position:absolute;width:46px;top:-10px;left:50%;transform:translateX(-50%) rotate(6deg);z-index:2;pointer-events:none;opacity:.74;">
</div>

객체의 모든 키(key)를 하나씩 꺼내서 반복문을 실행할 때 사용합니다.

### 1) 기본 문법 및 코드

`for...in` 문을 사용하면 객체의 프로퍼티 개수만큼 반복하며 각 키의 이름을 가져옵니다.

```jsx
const user = {
  name: "철수",
  age: 25,
  job: "Developer"
};

for (const key in user) {
  console.log(key);       // name, age, job (키 출력)
  console.log(user[key]); // "철수", 25, "Developer" (값 출력)
}
```

### 2) 순회 시 주의사항 (대괄호 표기법)

반복문 내에서 값(value)에 접근할 때는 반드시 **대괄호 표기법**을 사용해야 합니다.

```jsx
for (const key in user) {
  // ✅ 올바른 방법: 변수 key에 담긴 값을 이용해 접근
  console.log(user[key]); 

  // ❌ 틀린 방법: 실제 이름이 "key"인 프로퍼티를 찾으려 함
  console.log(user.key); // undefined
}
```

### 3) 부모 객체에 메서드 추가 시 주의점 (hasOwnProperty)

`for...in`은 상속받은 부모의 프로퍼티까지 순회합니다. 본인의 속성만 출력하려면 `hasOwnProperty` 체크가 필요합니다.

```jsx
// 부모 격인 Object 프로토타입에 메서드 추가 (예시)
Object.prototype.globalMethod = function() {};

const user = { name: "철수" };

for (const key in user) {
  // 1. 그냥 출력하면 상속받은 globalMethod까지 나옴
  console.log(key); // name, globalMethod

  // 2. 본인의 속성만 확인하여 출력
  if (user.hasOwnProperty(key)) {
    console.log(key); // name (자신이 가진 속성만 출력됨)
  }
}
```

**보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">프로토타입 체인 주의</span>
  <ul>
    <li><strong>프로토타입 체인</strong> : 자바스크립트의 <code>for...in</code>은 객체 자신뿐만 아니라 프로토타입 체인을 따라 상속된 '열거 가능한' 속성들을 모두 훑습니다.</li>
    <li><strong>엄격한 순회</strong> : 상속받은 프로퍼티를 제외하고 객체 자신의 프로퍼티만 순회하려면 <code>hasOwnProperty</code> 또는 <code>Object.hasOwn()</code>으로 확인하는 것이 안전합니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>10. 객체 순회 - Loops 비교</h2>
  <img src="/images/decoration/책갈피 아이콘 (4).webp" alt="" style="position:absolute;width:52px;top:-10px;right:20%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(8deg);">
</div>

객체는 `for...in`, 배열은 `for...of`를 사용합니다.

### 1) for...in

- **용도** : 객체 전용
- **특징** : 주로 **Key (이름)**를 가져옵니다.

```jsx
const obj = { a: 1, b: 2 };

for (const key in obj) {
  console.log(key);
}
// "a", "b"
```

### 2) for...of

- **용도** : 배열/이터러블
- **특징** : 주로 **Value (값)**를 가져옵니다.

```jsx
const arr = ["a", "b"];

for (const val of arr) {
  console.log(val);
}
// "a", "b"
```

### 3) 특징 요약 및 보충

- **순회 대상의 차이** : `for...in`은 객체의 프로퍼티 키를 순회하기 위해 설계되었으며, `for...of`는 배열, 문자열, Map, Set 등 반복 가능한(iterable) 객체의 실제 데이터를 순회할 때 사용합니다.
- **배열에서 for...in 사용 시 주의** : 배열에 `for...in`을 사용하면 값이 아니라 인덱스 key가 문자열로 반환됩니다. 또한 배열에 직접 추가한 사용자 정의 프로퍼티까지 순회될 수 있어 배열 값 순회에는 적합하지 않습니다. 배열의 실제 값을 순회할 때는 `for...of`를 사용하는 것이 더 적절합니다.
- **데이터 접근 방식** : 이미지의 코드처럼 `for...in`은 속성 이름에, `for...of`는 데이터 자체에 집중합니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. 객체 순회 - Keys &amp; Values</h2>
  <img src="/images/decoration/전구 아이콘.webp" alt="" style="position:absolute;width:44px;top:-8px;right:8px;z-index:2;pointer-events:none;opacity:.74;">
</div>

객체의 키(Key) 목록이나 값(Value) 목록만 따로 뽑아낼 수 있습니다.

### 1) Object.keys()

객체의 키 목록을 배열로 반환합니다.

```jsx
const user = { name: "철수", age: 25 };

// 키 목록을 배열로 반환
const keys = Object.keys(user);

console.log(keys);
// ["name", "age"]

// 활용: 키 개수 확인
console.log(keys.length); // 2
```

### 2) Object.values()

객체의 값 목록을 배열로 반환합니다.

```jsx
const user = { name: "철수", age: 25 };

// 값 목록을 배열로 반환
const values = Object.values(user);

console.log(values);
// ["철수", 25]

// 활용: 특정 값 포함 여부
console.log(values.includes("철수")); // true
```

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>3) 특징 및 주의사항</h3>
  <img src="/images/decoration/메모지 아이콘 (2).webp" alt="" style="position:absolute;width:50px;top:-8px;left:38%;z-index:2;pointer-events:none;opacity:.72;transform:rotate(-6deg);">
</div>

- **데이터 타입 변환** : 이 메서드들은 객체(Object)를 배열(Array) 형태로 변환해 줍니다. 따라서 변환 후에는 `length` 속성이나 `includes()` 같은 배열 전용 메서드를 즉시 사용할 수 있어 데이터 처리가 매우 편리해집니다.
- **고유 속성만 추출** : `for...in` 루프와 달리, 상속받은 프로퍼티는 제외하고 해당 객체가 직접 가지고 있는 프로퍼티들만 결과 배열에 담깁니다.
- **정적 메서드** : `user.keys()`가 아니라 `Object.keys(user)`와 같이 대문자 **Object**를 직접 호출하여 사용해야 한다는 점에 유의하십시오.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>12. 객체 순회 - Entries</h2>
  <img src="/images/decoration/소품 아이콘 (20).webp" alt="" style="position:absolute;width:56px;top:-12px;right:8px;z-index:2;pointer-events:none;opacity:.74;transform:rotate(-6deg);">
</div>

객체의 키(Key)와 값(Value)을 한꺼번에 배열로 변환하여 순회하는 방법입니다.

### 1) Object.entries()

객체의 키와 값을 쌍으로 묶어 배열 형태로 반환합니다.

```jsx
const user = { name: "철수", age: 25 };

const entries = Object.entries(user);

console.log(entries);
// [ ["name", "철수"], ["age", 25] ]
```

### 2) 순회에 활용하기 (오른쪽 섹션)

배열 구조분해 할당과 조합하여 키와 값을 간결하게 사용할 수 있습니다.

```jsx
// 배열 구조분해 할당과 조합하여 강력해짐
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
// "name: 철수"
// "age: 25"
```

for...in 보다 더 현대적이고 안전한 방법입니다.

### 3) 특징 요약

- **직관적인 데이터 추출** : `for...in`은 키만 제공하므로 값을 얻기 위해 다시 객체에 접근(`user[key]`)해야 하지만, `entries`는 처음부터 두 데이터를 묶어서 제공하므로 실무적 효율성이 더 높습니다.
- **안전성 보장** : `Object.entries()`는 객체 자신의 속성만 반환하므로, 부모 객체의 메서드가 섞여 나오는 `for...in`의 단점을 원천 차단합니다.
- **구조 분해 할당** : `[key, value]` 형식을 사용하면 반복문 내부에서 변수명을 자유롭게 지정할 수 있어 가독성이 향상됩니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 객체 순회</h2>
  <img src="/images/decoration/말풍선 아이콘 (11).webp" alt="" style="position:absolute;width:54px;top:-10px;right:10%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(6deg);">
</div>

객체의 모든 정보를 반복문을 통해 출력해 봅시다.

### 1) 미션: 모든 정보 출력하기

1. `for...in` 반복문을 사용하세요.
2. `console.log` 로 **키: 값** 형태로 출력하세요. (예: "model: iPhone")
3. (선택) `Object.keys()` 를 사용해 키 목록만 배열로 만드세요.

### 2) 정답 코드

```jsx
// 1, 2. for...in 순회
for (const key in myPhone) {
  console.log(`${key}: ${myPhone[key]}`);
}

// 3. 키 배열 만들기
const keys = Object.keys(myPhone);
console.log(keys);
// ["model", "price", "year"]
```

### 3) 특징 요약

- **정확한 출력 형식** : 작성 예시에서는 템플릿 리터럴(backtick)을 사용하여 `${key}: ${myPhone[key]}` 형태로 출력하도록 되어 있습니다.
- **데이터 일관성** : `Object.keys(myPhone)`를 통해 반환된 배열의 마지막 주석을 보면, `color`가 삭제된 이후의 상태인 `["model", "price", "year"]`가 출력됨을 알 수 있습니다.
- **참조 방식** : 객체 순회 시 변수 `key`를 이용해 값에 접근할 때는 점(`.`)이 아닌 대괄호(`[]`)를 사용해야 함이 예시 코드에 명확히 드러나 있습니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>13. 객체 복사와 병합</h2>
  <img src="/images/character/꼭 기억.webp" alt="" style="position:absolute;width:220px;right:0;top:-150px;opacity:.88;z-index:2;pointer-events:none;">
  <img src="/images/decoration/핀 아이콘 (1).webp" alt="" style="position:absolute;width:50px;top:-8px;left:28%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(-7deg);">
</div>

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>&lt;얕은 복사&gt;</h3>
</div>

원본 객체를 보존하면서 새로운 객체를 만들 때 사용합니다. **스프레드 연산자**가 가장 널리 쓰입니다.

### 1) ... 스프레드 문법 (권장)

객체의 내용을 펼쳐서 새로운 객체에 담는 가장 현대적인 방식입니다.

```jsx
const user = { name: "철수", age: 25 };

// 1. 단순 복사
const copy = { ...user };

// 2. 병합 (Merge)
const merged = { ...user, city: "서울" };
// { name: "철수", age: 25, city: "서울" }

// 3. 업데이트 (Override)
const updated = { ...user, age: 30 };
// { name: "철수", age: 30 }
```

### 2) Object.assign (옛날 방식)

기존 객체에 다른 객체의 속성을 복사해 넣는 방식입니다.

```jsx
const target = { a: 1 };
const source = { b: 2 };

Object.assign(target, source);

console.log(target); // { a: 1, b: 2 }
```

요즘은 거의 스프레드 문법을 사용합니다.

### 3) 특징 및 요약

- **원본 보존** : 스프레드 문법을 사용하면 원본 객체(`user`)는 변하지 않고, 완전히 새로운 참조를 가진 객체(`copy`, `merged`, `updated`)가 생성됩니다.
- **덮어쓰기 규칙** : 동일한 키가 존재할 경우, 뒤에 작성된 프로퍼티가 앞의 값을 덮어씁니다(`Override`).
- **얕은 복사의 한계** : 객체 내부의 중첩된 객체까지 복사하지는 않으며, 1단계 수준의 프로퍼티만 복사됩니다.

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>&lt;깊은 복사&gt;</h3>
  <img src="/images/decoration/소품 아이콘 (18).webp" alt="" style="position:absolute;width:52px;top:-10px;right:8%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(8deg);">
</div>

객체 안에 객체가 있을 때(중첩), 얕은 복사는 참조만 복사하는 문제가 있습니다.

### 4) 얕은 복사의 함정

스프레드 문법을 사용하더라도 중첩된 내부 객체는 원본과 연결되어 있습니다.

```jsx
const original = {
  meta: { version: 1 }
};

// 얕은 복사
const copy = { ...original };

// 복사본을 수정했는데...
copy.meta.version = 2;

// 원본도 바뀜!! 😱
console.log(original.meta.version); // 2
```

### 5) 해결: 깊은 복사

완전히 독립된 복사본을 생성하기 위한 두 가지 방법입니다.

```jsx
// 1. JSON 이용 (단순한 경우)
const deep1 = JSON.parse(JSON.stringify(original));

// 2. structuredClone (최신 브라우저)
const deep2 = structuredClone(original);
```

완전히 독립된 복사본이 생성됩니다.

### 6) 특징 요약

- **참조의 완전한 단절** : `JSON` 방식이나 `structuredClone`을 사용하면 1단계뿐만 아니라 내부의 모든 중첩 객체까지 새로운 메모리 공간에 할당되어 원본 데이터가 안전하게 보호됩니다.
- **JSON 방식의 제약** : 이미지의 1번 방법인 JSON 방식은 구현이 간단하지만, 객체 내에 함수나 `undefined`가 있을 경우 복사하지 못하고 누락시킨다는 점을 유의해야 합니다.
- **권장 사항** : 최신 환경에서는 `structuredClone()`이 JSON 방식보다 더 다양한 값을 보존할 수 있어 적절한 선택지가 될 수 있습니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>14. 중첩 객체</h2>
  <img src="/images/decoration/소품 아이콘 (23).webp" alt="" style="position:absolute;width:58px;top:-12px;right:8px;z-index:2;pointer-events:none;opacity:.74;">
</div>

객체 안에 또 다른 객체가 들어갈 수 있습니다. 관련된 데이터를 계층적으로 표현할 때 유용합니다.

### 1) 중첩 구조 생성

객체 내부의 프로퍼티 값으로 또 다른 객체를 할당하여 계층을 만듭니다.

```jsx
const user = {
  name: "철수",
  // 객체 안에 객체
  address: {
    city: "서울",
    zip: "12345"
  },
  // 또 다른 객체
  contacts: {
    email: "cs@email.com"
  }
};
```

### 2) 깊은 접근

중첩된 데이터에 접근하기 위해 점 표기법이나 대괄호 표기법을 연속해서 사용합니다.

```jsx
// 점 표기법 체이닝
console.log(user.address.city);
// "서울"

// 대괄호 표기법 체이닝
console.log(user["contacts"]["email"]);
// "cs@email.com"

// 혼합 사용도 가능
console.log(user.address["zip"]);
```

### 3) 특징 및 요약

- **데이터 계층화** : 복잡한 실세계의 데이터를 논리적인 구조로 묶어 관리할 수 있게 해줍니다.
- **체이닝(Chaining)** : 하위 속성으로 내려갈 때마다 마침표(`.`)나 대괄호(`[]`)를 추가하여 연결하며, 순차적으로 접근이 이루어집니다.
- **에러 주의** : 존재하지 않는 상위 객체에 대해 하위 접근을 시도할 경우 에러가 발생하므로, 앞서 배운 옵셔널 체이닝(`?.`)과 병행하여 사용하는 것이 안전합니다.

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>&lt;수정과 주의점&gt;</h3>
  <img src="/images/decoration/하트 아이콘 (7).webp" alt="" style="position:absolute;width:88px;top:-16px;right:10%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(7deg);">
</div>

중첩된 객체의 값을 수정하거나 새로운 중첩 객체를 추가할 수 있습니다.

### 4) 수정과 추가

이미 존재하는 깊은 곳의 값을 변경하거나, 새로운 객체를 통째로 할당할 수 있습니다.

```jsx
// 1. 깊은 값 수정
user.address.city = "부산";

// 2. 새로운 중첩 객체 할당
user.company = {
  name: "Naver",
  team: "Frontend"
};

console.log(user.company.name); // "Naver"
```

### 5) 안전하게 접근하기

중간 경로가 존재하지 않을 때 발생하는 에러를 방지하기 위해 **옵셔널 체이닝(`?.`)**을 사용합니다.

```jsx
// 중간 경로가 없으면 에러가 납니다.
// 중간 경로가 없을 가능성이 있는 데이터에는 옵셔널 체이닝(?.)을 사용하면 안전합니다.
// 다만 반드시 있어야 하는 데이터라면 남용하지 않는 것이 좋습니다.

const city = user.address?.city;
const fax = user.contacts?.fax ?? "없음";
```

- **에러 방어** : 중첩 객체를 다룰 때는 항상 상위 객체의 존재 여부를 확신할 수 없으므로, `?.`와 `??`(널 병합 연산자)를 조합하여 안전한 기본값을 설정하는 것이 표준적인 방식입니다.

**보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">중첩 객체 접근 방식의 다양한 조합</span>
  중첩된 프로퍼티에 접근할 때는 점 표기법과 대괄호 표기법을 자유롭게 혼합하여 사용할 수 있습니다.<br><br>
  <strong>1) 일반 접근 (Chaining)</strong> — 데이터가 반드시 존재한다는 가정하에 사용하는 기본 접근 방식입니다.
</div>

```jsx
// 모든 경로가 점 표기법인 경우
obj.props.props

// 점 표기법과 대괄호 표기법을 혼합한 경우
obj.props["props"]
obj["props"].props

// 모든 경로가 대괄호 표기법인 경우
obj["props"]["props"]
```

<div class="wda-callout wda-ci">
  <span class="wda-clabel">2) 안전한 접근 (Optional Chaining)</span>
  중간 경로가 <code>null</code>이거나 <code>undefined</code>일 가능성이 있을 때 에러를 방지하는 방식입니다.
</div>

```jsx
// 점 표기법에 옵셔널 체이닝 적용
obj.props?.props

// 대괄호 접근 전 옵셔널 체이닝 적용
obj.props?.["props"]
obj["props"]?.props

// 모든 단계에서 안전하게 확인하며 접근
obj?.["props"]?.["props"]
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>15. 메서드 (1) - 정의와 호출</h2>
  <img src="/images/decoration/소품 아이콘 (9).webp" alt="" style="position:absolute;width:56px;top:-12px;left:40%;z-index:2;pointer-events:none;opacity:.74;transform:rotate(6deg);">
</div>

**객체의 프로퍼티가 함수일 때, 이를 메서드(Method)라고 합니다.**

### 1) 메서드 정의

객체 리터럴 안에서 함수를 정의하는 두 가지 방법입니다.

```jsx
const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  }
};
```

### 2) 메서드 호출

점 표기법을 사용하여 객체에 담긴 함수를 실행합니다.

```jsx
// 점 표기법으로 호출
const sum = calculator.add(5, 3);
const diff = calculator.subtract(10, 4);

console.log(sum); // 8
console.log(diff); // 6
```

데이터(객체)가 스스로 행동(함수)을 수행합니다.

### 3) 특징

- **객체 지향적 설계** : 데이터(`calculator`)와 그 데이터를 처리하는 행위(`add`, `subtract`)를 하나의 단위로 묶어 관리할 수 있습니다.
- **문법 최적화** : **단축 문법**은 `function` 키워드와 콜론(`:`)을 생략하여 코드의 가독성을 높여주므로 현대 자바스크립트에서는 이 방식을 우선적으로 사용합니다.
- **호출 방식** : 메서드는 반드시 해당 메서드가 속한 객체를 통해 호출되어야 하며, 호출 시 소괄호`()`를 사용하여 인자를 전달합니다.

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>4) this를 사용하는 이유</h3>
  <img src="/images/decoration/구름 아이콘 (5).webp" alt="" style="position:absolute;width:60px;top:-14px;left:50%;transform:translateX(-50%);z-index:2;pointer-events:none;opacity:.72;">
</div>

메서드 내부에서 `this`를 사용하면 **"메서드를 호출한 객체"**를 가리킵니다.

객체 내부의 다른 프로퍼티(데이터)에 접근할 때 사용합니다.

```jsx
const user = {
  name: "철수",
  greet() {
    // this는 현재 객체(user)를 의미함
    console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`);
  }
};

user.greet();
// "안녕하세요, 제 이름은 철수입니다."
```

### 5) 화살표 함수와 this (주의!)

화살표 함수는 자신만의 `this`를 가지지 않아 메서드로 사용하기에 적합하지 않습니다.

```jsx
const user = {
  name: "철수",
  // ❌ 메서드로 화살표 함수는 권장하지 않음
  greet: () => {
    console.log(this.name); 
  }
};

user.greet(); // undefined (또는 에러)
```

메서드 정의 시에는 일반 함수(단축 문법)를 사용하세요!

### 6) 특징 및 요약

- **동적 바인딩** : `this`의 값은 함수가 정의될 때가 아니라, **호출되는 시점**에 결정됩니다. 즉, "누가 이 메서드를 불렀는가"가 `this`의 정체를 결정합니다.
- **캡슐화** : 객체 내부의 데이터(`name`)와 행위(`greet`)를 `this`를 통해 긴밀하게 연결함으로써, 객체 외부의 변수에 의존하지 않는 독립적인 모듈 작성이 가능해집니다.
- **화살표 함수의 한계** : 화살표 함수는 자신만의 `this`를 만들지 않고 외부 스코프의 `this`를 그대로 사용합니다. 그래서 객체 메서드에서 '이 메서드를 호출한 객체'를 `this`로 사용해야 하는 경우에는 적합하지 않습니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 메서드 만들기</h2>
  <img src="/images/character/체크 완료.webp" alt="" style="position:absolute;width:120px;right:0;top:-96px;opacity:.88;z-index:2;pointer-events:none;">
  <img src="/images/decoration/잎사귀 아이콘 (5).webp" alt="" style="position:absolute;width:48px;top:-8px;left:26%;z-index:2;pointer-events:none;opacity:.72;transform:rotate(-6deg);">
</div>

객체에 기능을 추가하여 스스로 행동하게 만들어봅시다.

### 1) 미션: 폰 기능 추가

1. `myPhone` 에 `showModel` 메서드를 추가하세요.
2. 메서드 내부에서 `this` 를 사용해 모델명을 출력하세요. (예: "내 폰은 iPhone입니다.")
3. 메서드를 호출하여 결과를 확인하세요.

### 2) 정답 코드

```jsx
// 1. 객체 생성 (기본 데이터)
const myPhone = {
  model: "iPhone",
  color: "Black",
  price: 100,

  // 2. showModel 메서드 추가 및 this 사용
  showModel() {
    console.log(`내 폰은 ${this.model}입니다.`);
  }
};

// 3. 메서드 호출하여 결과 확인
myPhone.showModel();
// 출력: "내 폰은 iPhone입니다."
```

### 3) 특징

- **객체 데이터 활용** : `model`, `color`, `price` 프로퍼티를 가진 객체에서 `this`를 통해 특정 데이터(`model`)에만 선택적으로 접근하여 로직을 수행합니다.
- **this의 역할** : 메서드 내부의 `this`는 해당 메서드를 소유한 `myPhone` 객체를 가리키므로, 객체 외부의 변수명에 의존하지 않고 내부 데이터에 접근할 수 있습니다.
- **주의점** : 메서드 정의 시 화살표 함수를 사용하면 `this`가 `myPhone`을 가리키지 못해 `undefined`가 출력되므로, 반드시 일반 함수나 단축 문법을 사용해야 합니다.

<div style="position:relative;overflow:visible;height:0;">
  <img src="/images/decoration/마스킹 테이프 (13).webp" alt="" style="position:absolute;width:98px;top:-22px;right:18%;z-index:2;pointer-events:none;opacity:.78;transform:rotate(-5deg);">
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>📊 객체(Object) 핵심 요약 정리</h2>
</div>

### 1. 객체 접근 및 확인 방법 비교

| **구분** | **방식** | **특징** | **사용 예시** |
| --- | --- | --- | --- |
| **기본 접근** | **점 표기법 (`.`)** | 가독성이 우수하며 표준 식별자 접근 시 권장됨 | `user.name` |
| **동적 접근** | **대괄호 표기법 (`[]`)** | 변수 활용이나 특수문자/공백 키 접근 시 필수임 | `user[key]` |
| **안전 접근** | **옵셔널 체이닝 (`?.`)** | 참조 대상이 없어도 에러 대신 `undefined` 반환 | `user.address?.city` |
| **존재 확인** | **`in` 연산자** | 상속받은 프로퍼티까지 포함하여 존재 여부 확인 | `"name" in user` |
| **고유 확인** | **`hasOwnProperty()`** | 상속 제외, 객체 고유의 프로퍼티만 엄격히 판별 | `user.hasOwnProperty("name")` |

### 2. 동적 프로퍼티 및 단축 문법 (Shorthand)

| **항목** | **문법 예시** | **핵심 논리** |
| --- | --- | --- |
| **계산된 프로퍼티** | `{[key]: value}` | 대괄호 안의 표현식을 실행하여 키 이름을 동적으로 결정함 |
| **프로퍼티 단축** | `{name, age}` | 변수명과 키 이름이 같을 경우 `: 값` 부분을 생략 가능함 |
| **메서드 단축** | `greet() { }` | `function` 키워드 생략. 현대 JS에서 가장 권장되는 방식 |

<div style="position:relative;overflow:visible;margin:1.2rem 0 0.3rem;">
  <h3>3. 객체 순회 방식 선택 가이드</h3>
  <img src="/images/decoration/체크 아이콘 (4).webp" alt="" style="position:absolute;width:46px;top:-8px;right:4%;z-index:2;pointer-events:none;opacity:.72;transform:rotate(6deg);">
</div>

| **순회 방식** | **대상** | **주요 특징** | **사용 결과** |
| --- | --- | --- | --- |
| **`for...in`** | **객체의 키(Key)** | 프로토타입 체인의 모든 속성을 순회하므로 필터링 권장 | `name`, `age` 등 키 문자열 |
| **`Object.keys()`** | **키 목록** | 객체 고유의 키만 배열로 반환하며 `length` 활용 가능 | `["name", "age"]` |
| **`Object.values()`** | **값 목록** | 객체 고유의 값만 배열로 반환하여 데이터 존재 확인 용이 | `["철수", 25]` |
| **`Object.entries()`** | **[키, 값] 쌍** | 키와 값을 쌍으로 반환하여 동시 제어에 최적화 | `[["name", "철수"], ...]` |

### 4. 복사 및 병합 방식 비교

| **복사 유형** | **방법** | **복사 범위** | **한계점** |
| --- | --- | --- | --- |
| **얕은 복사** | `{ ...obj }` | **1단계(Depth 1)** | 중첩 객체는 원본과 주소를 공유하여 오염 위험 있음 |
| **깊은 복사 (JSON)** | `JSON.stringify` | **모든 단계** | 함수나 `undefined`는 복사 과정에서 유실됨 |
| **깊은 복사 (최신)** | `structuredClone()` | **모든 단계** | 참조를 완전히 끊어 독립적 객체를 생성하는 표준 방식 |

### 5. 메서드와 this 핵심 원칙

| **항목** | **권장 사항** | **이유 및 논리** |
| --- | --- | --- |
| **메서드 정의** | **단축 문법** | `function` 키워드 생략으로 가독성 및 효율 극대화 |
| **`this` 바인딩** | **일반 함수 사용** | 메서드를 호출한 주체(객체)를 동적으로 정확히 가리킴 |
| **화살표 함수** | **메서드의 this가 필요한 경우 사용 주의** | 자체 `this`가 없어 호출한 객체를 this로 가리키지 못함 |
