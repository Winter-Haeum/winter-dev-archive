---
title: "부록: JSON 데이터 다루기"
status: "completed"
description: "JSON의 개념과 JavaScript Object와의 차이, JSON.stringify·JSON.parse 사용법, 지원 데이터 타입, 자주 겪는 에러까지 JSON 처리를 정리한다."
category: "JavaScript"
section: "Async"
tags:
  - javascript
  - json
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
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:150px}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
.wda-callout p{margin:0 0 .45rem;font-size:.83rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-deco{position:absolute;z-index:2;pointer-events:none}
@media (max-width:640px){
.wda-deco{width:34px !important}
}
</style>

## 🎯 학습 목표

<div class="wda-goal" style="position:relative;overflow:visible;padding-right:150px;padding-top:14px;">
  <img class="wda-deco" src="/images/character/번뜩.webp" alt="" style="width:118px;right:0;top:-15px;opacity:.9;transform:rotate(-4deg);">
  <strong>JSON 개념</strong> — 서버·클라이언트가 데이터를 주고받는 "만국 공통어" 형식을 이해합니다.<br>
  <strong>JS Object와의 차이</strong> — JavaScript 객체와 JSON의 문법 차이를 정확히 구분합니다.<br>
  <strong>직렬화/역직렬화</strong> — `JSON.stringify()`, `JSON.parse()` 사용법을 익힙니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. JSON이란?</h2>
  <img class="wda-deco" src="/images/decoration/포스트잇 (2).webp" alt="" style="width:76px;top:-16px;right:8px;opacity:.8;transform:rotate(6deg);">
</div>

데이터 교환을 위한 **"만국 공통어"**

### 1) 정의 (Definition)

**JavaScript Object Notation**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">경량 (Lightweight)</div>
    <div class="wda-fcard-dsc">데이터를 저장하고 전달하기 위한 가벼운 텍스트 형식입니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">독립적 (Independent)</div>
    <div class="wda-fcard-dsc">JavaScript에서 파생됐지만, 대부분의 프로그래밍 언어가 지원합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">가독성</div>
    <div class="wda-fcard-dsc">사람과 기계 모두 읽고 쓰기 쉬운 텍스트 기반입니다.</div>
  </div>
</div>

### 2) 왜 쓰나요?

**서버와 클라이언트가 대화할 때 사용해요!**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">통신 매개체</div>
    <div class="wda-fcard-dsc">클라이언트(Client)와 서버(Server) 사이에서 데이터를 주고받는 역할을 합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">언어 초월</div>
    <div class="wda-fcard-dsc">서로 다른 언어(JS, Python, Java 등)를 써도 JSON으로 소통하면 다 알아들을 수 있습니다.</div>
  </div>
</div>

**보충설명**

<div class="wda-callout wda-ci">
  <strong>만국 공통어란?</strong> — 한국인과 미국인이 대화할 때 '영어'를 공용어로 쓰듯이, 프로그래밍 세계에서는 <strong>Python 프로그램</strong>과 <strong>Java 프로그램</strong>이 대화하기 위해 <strong>JSON</strong>이라는 공용어 형식을 사용한다고 이해하면 쉽습니다.<br><br>
  <strong>독립적이라는 의미</strong> — 이름에 'JavaScript'가 들어가서 자바스크립트에서만 쓸 수 있을 것 같지만, 실제로는 <strong>텍스트(문자열)</strong> 형태이기 때문에 C언어, 파이썬, 자바 등 거의 모든 언어에서 자유롭게 읽고 쓸 수 있습니다.<br><br>
  <strong>왜 가벼울까?</strong> — 복잡한 코드나 불필요한 장식 없이 <code>{"이름": "값"}</code> 형태의 단순한 규칙만 따르기 때문에, 데이터를 전송할 때 인터넷 데이터 소모량이 적고 속도가 빠릅니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. JSON vs JavaScript Object 비교</h2>
  <img class="wda-deco" src="/images/decoration/화살표 아이콘 (7).webp" alt="" style="width:48px;top:-10px;left:34%;opacity:.76;transform:rotate(-8deg);">
</div>

### 1) JavaScript Object (자바스크립트 객체)

자바스크립트 문법 내에서는 비교적 자유로운 형식을 가집니다.

```js
const person = {
  name: "Gemini",      // Key에 따옴표 생략 가능
  age: 20,
  skills: ['JS'],
  sayHi: () => {},     // 함수 포함 가능
  data: undefined,     // undefined 값 포함 가능
  // 주석 사용 가능합니다.
  // 마지막 항목 뒤에 쉼표(Trailing Comma) 있어도 됨
};
```

### 2) JSON (데이터 포맷)

데이터 교환을 목적으로 하기에 **엄격한 규칙**을 따라야 합니다.

```json
{
  "name": "Jane",
  "age": 20,
  "skills": ["JS"]
}
```

JSON에서는 key와 문자열 값에 반드시 쌍따옴표를 사용해야 합니다. 함수, undefined, 주석, 마지막 쉼표는 사용할 수 없습니다.

### 3) 주요 차이점 요약

| **구분** | **JavaScript Object** | **JSON** |
| --- | --- | --- |
| **Key 따옴표** | 생략 가능 | **필수 (" ")** |
| **문자열 따옴표** | 홑따옴표('), 쌍따옴표(") | **쌍따옴표(")만 허용** |
| **포함 가능 데이터** | 함수, undefined 등 | **순수 데이터만 (문자, 숫자, 불리언 등)** |
| **주석** | 가능 | **불가능** |

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 JSON은 이렇게 엄격할까요?</strong> — JSON은 특정 언어(자바스크립트)에 종속되지 않고, 파이썬이나 자바 같은 다른 언어에서도 쉽게 해석(Parsing)할 수 있어야 하기 때문입니다. 규칙이 단순하고 엄격할수록 컴퓨터가 데이터를 분석할 때 오류가 날 확률이 줄어듭니다.<br><br>
  <strong>실수하기 쉬운 포인트</strong> — 초보자들이 가장 많이 하는 실수는 Key 값에 따옴표를 안 붙이거나, 홑따옴표(')를 사용하는 것입니다. JSON 파일(.json)을 작성할 때는 무조건 쌍따옴표(")만 쓴다고 기억하면 됩니다.
</div>

---

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/메모지 아이콘 (7).webp" alt="" style="width:48px;top:6px;right:36%;opacity:.74;transform:rotate(8deg);">
</div>

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. JSON 데이터 vs JSON 객체</h2>
  <img class="wda-deco" src="/images/decoration/핀 아이콘 (9).webp" alt="" style="width:56px;top:-12px;right:9%;opacity:.76;transform:rotate(7deg);">
</div>

**데이터(String)와 도구(Object)의 차이를 명확히 구분해야 합니다.**

### 1) JSON 데이터 (Format)

우리가 서버와 주고받는 **"데이터 그 자체"**입니다.

- **타입 (Type)** : 무조건 **`string` (문자열)** 입니다.
- **특징** — 겉모습은 객체처럼 생겼지만, 실제로는 긴 텍스트 덩어리입니다.

<div class="wda-callout wda-cy">
  JSON은 텍스트 기반 데이터 형식입니다. JavaScript에서 서버로 전송하거나 저장소에 저장할 때는 보통 문자열 형태의 JSON으로 다룹니다. 다만 JSON 문법 자체는 객체, 배열, 문자열, 숫자, 불리언, null 같은 값을 표현할 수 있습니다.
</div>

```js
// ' ' 안에 들어있는 문자열입니다.
const data = '{"name":"Kim"}';

console.log(typeof data); // "string"
```

### 2) JSON 객체 (Global Object)

브라우저(자바스크립트 엔진)에 내장된 **"기능 도구함"**입니다.

- **역할** — JSON 데이터를 만들거나 해석하기 위한 **메서드(`parse`, `stringify`)를 제공**합니다.
- **특징** — 자바스크립트가 기본적으로 가지고 있는 전역 객체입니다.

```js
// 자바스크립트 내장 객체
console.log(typeof JSON);       // "object"
console.log(typeof JSON.parse); // "function"
```

**핵심 요약**

<div class="wda-callout wda-cy">
  "JSON 객체(도구)를 사용해서, JSON 데이터(문자열)를 다룹니다."<br><br>
  <strong>JSON 데이터</strong> = 재료 (String)<br>
  <strong>JSON 객체</strong> = 요리 도구 (Tool)
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. JSON 사용법 (메서드)</h2>
  <img class="wda-deco" src="/images/decoration/잎사귀 아이콘 (6).webp" alt="" style="width:54px;top:-11px;left:8%;opacity:.78;transform:rotate(-7deg);">
</div>

직렬화(Stringify)와 역직렬화(Parse)의 개념과 사용법입니다.

### 1) 직렬화 (Serialization) : `JSON.stringify()`

**JS 객체 ➡ JSON 문자열** (서버로 데이터를 보낼 때 사용)

```js
// 1. 자바스크립트 객체 생성 (메모리에 있는 데이터)
const user = {
  name: "Kim",
  age: 30
};

// 2. 객체를 JSON 문자열로 변환 (직렬화)
const jsonStr = JSON.stringify(user);

// 3. 결과 확인
console.log(jsonStr);
// 출력결과: '{"name":"Kim","age":30}' (하나의 긴 문자열이 됨)
```

### 2) 역직렬화 (Deserialization) : `JSON.parse()`

**JSON 문자열 ➡ JS 객체** (서버에서 받은 데이터를 쓸 때 사용)

```js
// 1. 서버에서 받았다고 가정한 JSON 문자열
const jsonStr = '{"name":"Kim"}';

// 2. 문자열을 자바스크립트 객체로 변환 (역직렬화)
const user = JSON.parse(jsonStr);

// 3. 이제 점(.)을 찍어서 데이터에 접근 가능!
console.log(user.name);
// 출력결과: "Kim" (다시 JS 객체로 돌아옴!)
```

### 3) 데이터 변환 흐름 요약

데이터가 이동하는 방향에 따라 사용하는 메서드가 다릅니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">JS Object (메모리 상의 데이터)</div>
      <div class="wda-sdsc">자바스크립트 코드에서 다루는 원본 객체입니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">⬇️ stringify (포장하기)</div>
      <div class="wda-sdsc">JSON String (전송/저장용 텍스트)으로 변환합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">⬇️ parse (포장 뜯기)</div>
      <div class="wda-sdsc">다시 JS Object (메모리 상의 데이터)로 되돌립니다.</div>
    </div>
  </div>
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>직렬화(Stringify)가 뭔가요?</strong> — 쉽게 말해 데이터를 <strong>'택배 포장'</strong> 하는 것입니다. 객체(Object) 상태로는 인터넷 선을 타고 날아갈 수 없기 때문에, 전송 가능한 형태인 <strong>문자열(String)</strong>로 납작하게 펴서 포장하는 과정입니다.<br><br>
  <strong>역직렬화(Parse)가 뭔가요?</strong> — 도착한 택배의 <strong>'포장을 뜯는'</strong> 것입니다. 문자열 상태로는 <code>name</code>이나 <code>age</code>를 꺼내 쓸 수 없으니, 다시 우리가 프로그래밍에서 사용할 수 있는 <strong>객체(Object)</strong> 형태로 되돌리는 과정입니다.
</div>

<img src="/images/content/appendix-json/JS 객체와 JSON 문자열 변환.png" alt="JS Object(메모리 상의 데이터)가 stringify를 거쳐 JSON String(전송/저장용 텍스트)으로, JSON String이 parse를 거쳐 다시 JS Object로 되돌아가는 양방향 변환 다이어그램" style="display:block;width:100%;max-width:640px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<p style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:640px;">[그림] JS 객체와 JSON 문자열 변환</p>

---

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/하트 아이콘 (5).webp" alt="" style="width:50px;top:6px;left:62%;opacity:.74;transform:rotate(-9deg);">
</div>

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. 지원하는 데이터 타입</h2>
  <img class="wda-deco" src="/images/decoration/꽃 아이콘 (9).webp" alt="" style="width:58px;top:-12px;right:33%;opacity:.78;transform:rotate(-7deg);">
</div>

가능한 것과 불가능한 것을 명확히 구분해야 데이터 손실을 막을 수 있습니다.

### 1) 지원 (OK)

JSON 표준에서 허용하는 6가지 데이터 타입입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">String (문자열)</div>
    <div class="wda-fcard-dsc"><code>"Hello"</code> (반드시 쌍따옴표)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Number (숫자)</div>
    <div class="wda-fcard-dsc"><code>10</code>, <code>3.14</code> (정수, 실수)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Boolean (논리)</div>
    <div class="wda-fcard-dsc"><code>true</code>, <code>false</code> (소문자)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">null</div>
    <div class="wda-fcard-dsc"><code>null</code> (빈 값)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Array (배열)</div>
    <div class="wda-fcard-dsc"><code>[1, 2, 3]</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Object (객체)</div>
    <div class="wda-fcard-dsc"><code>{"key": "value"}</code></div>
  </div>
</div>

### 2) 미지원 (무시/에러)

프로그래밍 로직이나 언어 특화 기능은 저장할 수 없습니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Function (함수)</div>
    <div class="wda-fcard-dsc">로직은 데이터가 아니므로 제외됩니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Date (날짜 객체)</div>
    <div class="wda-fcard-dsc">날짜 전용 객체는 없습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">undefined</div>
    <div class="wda-fcard-dsc">값이 정의되지 않은 상태는 저장하지 않습니다.</div>
  </div>
</div>

### 3) 💡 참고 : Date 객체 처리

날짜(`Date`)는 JSON으로 변환(stringify)하면 **단순 문자열**로 바뀝니다.

```js
const today = { date: new Date() };

const jsonStr = JSON.stringify(today);
// 결과: '{"date":"2024-05-20T10:00:00.000Z"}' (문자열로 변함)

// 주의: 다시 parse 해도 Date 객체가 아니라 "문자열"로 나옵니다!
```

다시 Date 객체로 사용하려면 parse 후 `new Date(saved.date)`처럼 직접 Date 객체로 변환해야 합니다.

```js
const parsed = JSON.parse(jsonStr);
const date = new Date(parsed.date);
```

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>`undefined`와 함수는 어떻게 되나요?</strong> — 객체의 프로퍼티 값이 <code>undefined</code>, 함수, <code>Symbol</code>이면 해당 프로퍼티는 JSON 문자열에서 <strong>제외</strong>됩니다. 배열 안에 들어 있는 <code>undefined</code>, 함수, <code>Symbol</code>은 <strong>`null`</strong>로 변환됩니다. 단, <code>undefined</code>나 함수 자체를 <code>JSON.stringify()</code>에 바로 넣으면 문자열 <code>"undefined"</code>가 아니라 실제 <code>undefined</code>가 반환됩니다.<br><br>
  <strong>왜 다 지원 안 하나요?</strong> — JSON은 <strong>'데이터 교환'</strong>이 목적이기 때문입니다. 파이썬에는 자바스크립트의 '함수' 개념이 다르고, 자바에는 'undefined'가 없습니다. 서로 다른 언어끼리 오해 없이 주고받으려면 가장 <strong>기초적이고 공통적인 형태(숫자, 문자, 목록)</strong>만 남겨야 하기 때문입니다.
</div>

```js
JSON.stringify(undefined);      // undefined
JSON.stringify(function () {}); // undefined
JSON.stringify(Symbol());       // undefined
```

**NaN / Infinity / BigInt 주의**

<div class="wda-callout wda-cw">
  NaN과 Infinity는 JSON으로 변환하면 <code>null</code>이 됩니다. BigInt는 <code>JSON.stringify()</code>에서 <code>TypeError</code>가 발생하므로 그대로 저장할 수 없습니다.
</div>

```js
JSON.stringify({ value: NaN });      // {"value":null}
JSON.stringify({ value: Infinity }); // {"value":null}
JSON.stringify({ value: 10n });      // TypeError
```

---

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/종이 클립 아이콘 (5).webp" alt="" style="width:46px;top:6px;left:38%;opacity:.74;transform:rotate(7deg);">
</div>

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. 자주 겪는 에러와 궁금증 (FAQ &amp; Common Mistakes)</h2>
  <img class="wda-deco" src="/images/decoration/스탬프 아이콘 (3).webp" alt="" style="width:56px;top:-12px;right:8px;opacity:.78;transform:rotate(6deg);">
  <img class="wda-deco" src="/images/character/꼭 기억.webp" alt="" style="width:110px;right:0;top:-94px;opacity:.9;transform:rotate(3deg);">
</div>

### 1) 🔴 SyntaxError (문법 오류)

`JSON.parse()`를 실행할 때 가장 많이 발생하는 에러입니다. 다음 3가지를 주의하세요.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">홑따옴표(') 사용</div>
    <div class="wda-fcard-dsc">JSON은 무조건 쌍따옴표(")만 허용합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Key에 따옴표 누락</div>
    <div class="wda-fcard-dsc"><code>{ name: "Kim" }</code> (X) ➡ <code>{"name": "Kim"}</code> (O)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">마지막 쉼표 (Trailing Comma)</div>
    <div class="wda-fcard-dsc">배열이나 객체의 마지막 항목 뒤에 쉼표를 남기면 에러가 납니다.</div>
  </div>
</div>

### 2) ✖️ 주석 (Comments)

**"JSON 파일에 주석을 달 수 없나요?"**

<div class="wda-callout wda-ci">
  <strong>불가능</strong> : 네, 표준 JSON은 주석을 지원하지 않습니다.<br><br>
  <strong>예외</strong> : VS Code의 설정 파일(<code>settings.json</code>) 등에서 주석이 보이는 이유는, 해당 파일이 표준 JSON이 아닌 <strong>JSONC (JSON with Comments)</strong>라는 변형 포맷을 사용하기 때문입니다.
</div>

### 3) 📱 깊은 복사 (Deep Copy)

자바스크립트에서 객체를 완전히 별개의 것으로 복사할 때 사용하는 간단한 트릭입니다.

```js
// 객체를 문자열로 만들었다가(stringify) 다시 객체로 만듦(parse)
const copy = JSON.parse(JSON.stringify(original));
```

<div class="wda-callout wda-cw">
  ⚠️ <strong>주의사항</strong> — 이 방법은 함수(Function), 날짜(Date), undefined 등 JSON이 지원하지 않는 데이터가 포함되어 있으면 유실되거나 변형됩니다. (완벽한 복사 방법은 아닙니다!)
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  최신 JavaScript에서는 깊은 복사가 필요할 때 <code>structuredClone()</code>을 사용할 수도 있습니다. 다만 함수는 복사할 수 없고, 지원 환경을 확인해야 합니다.
</div>

```js
const copy = structuredClone(original);
```

### 4) 📄 package.json

우리가 프론트엔드 개발을 할 때 매일 보는 **`package.json`** 설정 파일도 바로 이 **JSON 파일**입니다.

<div class="wda-callout wda-ci">
  <code>package.json</code>은 표준 JSON 형식이므로 주석이나 trailing comma를 사용할 수 없습니다.
</div>

---

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/마스킹 테이프 (17).webp" alt="" style="width:108px;top:-10px;left:32%;opacity:.84;transform:rotate(-5deg);">
</div>

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🔑 핵심 정리</h2>
  <img class="wda-deco" src="/images/character/이해 완료.webp" alt="" style="width:116px;right:0;top:-96px;opacity:.9;transform:rotate(-3deg);">
  <img class="wda-deco" src="/images/decoration/별 아이콘 (8).webp" alt="" style="width:78px;top:-18px;left:8%;opacity:.82;transform:rotate(8deg);">
</div>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>JSON 개념</strong></td>
    <td>• 경량·독립적·가독성 좋은 텍스트 기반 데이터 교환 형식<br>• 서로 다른 언어(JS, Python, Java 등) 간 공통 소통 수단</td>
  </tr>
  <tr>
    <td><strong>JS Object와 차이</strong></td>
    <td>• Key·문자열 값 모두 <strong>쌍따옴표(") 필수</strong><br>• 함수·undefined·주석 <strong>불가능</strong></td>
  </tr>
  <tr>
    <td><strong>사용 기준</strong></td>
    <td>• <strong>JSON.stringify()</strong> : JS 객체 → JSON 문자열 (전송/저장)<br>• <strong>JSON.parse()</strong> : JSON 문자열 → JS 객체 (사용)</td>
  </tr>
  <tr>
    <td><strong>주의사항</strong></td>
    <td>• `JSON.parse(JSON.stringify(obj))`는 함수·Date·undefined가 유실될 수 있어 완벽한 깊은 복사가 아님<br>• 홑따옴표, Key 따옴표 누락, Trailing Comma는 SyntaxError의 주범</td>
  </tr>
</table>
