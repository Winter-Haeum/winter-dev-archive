---
title: "4-1 ES6 + 최신 문법 알아보기"
status: "completed"
description: "ECMAScript 버전 히스토리부터 템플릿 리터럴 심화, 이터러블, Map/Set, Symbol, ??·?. 연산자, ES2020+ 신기능까지 모던 자바스크립트 문법을 정리한다."
category: "JavaScript"
section: "ES6+ 심화 문법"
tags:
  - javascript
  - es6
  - iterable
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
.wda-fcard-code{font-size:.74rem;opacity:.8;background:rgba(128,128,128,.08);border-radius:6px;padding:4px 7px;margin-top:4px;display:inline-block}
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
  🔢 <strong>ECMAScript 버전 이해</strong> — ES5 → ES6 → ES2020+ 발전 과정을 이해합니다.<br>
  ✨ <strong>템플릿 리터럴 심화</strong> — 태그드 템플릿과 고급 활용법을 익힙니다.<br>
  🔁 <strong>이터러블과 for...of</strong> — 이터러블 프로토콜과 순회 방법을 배웁니다.<br>
  🧩 <strong>??, ?. 연산자</strong> — nullish 병합과 옵셔널 체이닝을 활용합니다.<br>
  🚀 <strong>ES2020+ 최신 기능</strong> — BigInt, 논리 할당 연산자 등 최신 기능을 알아봅니다.
</div>

---

## 1. ECMAScript 버전 히스토리

### 1) 주요 버전 연표

JavaScript의 발전 과정을 한눈에 볼 수 있는 연표입니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">ES5 (2009)</div><div class="wda-sdsc">strict mode, JSON, forEach</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">ES6/ES2015 (2015)</div><div class="wda-sdsc">let/const, 화살표, 클래스, 모듈, Symbol</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">ES2016 (2016)</div><div class="wda-sdsc">includes(), ** 연산자</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody"><div class="wda-sttl">ES2017 (2017)</div><div class="wda-sdsc">async/await, Object.entries</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">5</div>
    <div class="wda-sbody"><div class="wda-sttl">ES2018 (2018)</div><div class="wda-sdsc">Rest/Spread 객체, finally</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">6</div>
    <div class="wda-sbody"><div class="wda-sttl">ES2019 (2019)</div><div class="wda-sdsc">flat(), flatMap(), trimStart</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">7</div>
    <div class="wda-sbody"><div class="wda-sttl">ES2020 (2020)</div><div class="wda-sdsc">??, ?., BigInt</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">8</div>
    <div class="wda-sbody"><div class="wda-sttl">ES2021 (2021)</div><div class="wda-sdsc">||=, &&=, ??=</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">9</div>
    <div class="wda-sbody"><div class="wda-sttl">ES2022 (2022)</div><div class="wda-sdsc">at(), top-level await</div></div>
  </div>
</div>

### 2) ES6가 중요한 이유

**🔹 ES6 = JavaScript의 혁명**

- **6년 만의 메이저 업데이트**: ES5에서 ES6로 넘어가며 언어적 차원이 달라졌습니다.
- **대규모 기능 추가**: 클래스, 모듈, 화살표 함수 등 현대적 개발에 필수적인 기능이 대거 추가되었습니다.
- **시작점**: 우리가 흔히 말하는 "모던 JavaScript"의 기준점이 되는 버전입니다.

**🔹 연간 릴리스 체계 (매년 6월)**

- ES2016부터는 **매년 6월**에 새 버전을 발표합니다.
- 한 번에 많이 바꾸기보다, **작은 기능을 자주 추가**하는 방식으로 변경되었습니다.

**실무 팁: 호환성 걱정 NO!**

<div class="wda-callout wda-cs">
  <ul>
    <li><strong>Babel(바벨)</strong> 같은 트랜스파일러가 구형 브라우저(IE 등)에 맞게 코드를 자동으로 변환해줍니다.</li>
    <li>따라서 실무에서는 브라우저 버전을 걱정하지 말고 <strong>마음껏 최신 문법을 사용</strong>하세요!</li>
  </ul>
</div>

---

## 📋 ES6 주요 변경점 개요

### 1) 이미 배워서 익숙한 것들 (Review)

기초 단계에서 접해보았던 기본적인 ES6+ 문법입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">let, const (변수)</div>
    <div class="wda-fcard-code">let count = 0;</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">for...of (배열/이터러블 순회)</div>
    <div class="wda-fcard-code">for (const item of items) { ... }</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">스프레드 문법 (배열/객체 복사)</div>
    <div class="wda-fcard-code">const copy = { ...original };</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">기본 옵셔널 체이닝 / Nullish</div>
    <div class="wda-fcard-code">const val = obj?.prop ?? 'default';</div>
  </div>
</div>

### 2) 이번 차시에서 깊게 팔 것들 (Deep Dive)

실무에서 유용하게 쓰이는 심화 패턴과 최신 기능들입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">템플릿 리터럴 심화 (Tagged Template)</div>
    <div class="wda-fcard-code">const html = tag`&lt;div&gt;${text}&lt;/div&gt;`;</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Symbol (고유 식별자)</div>
    <div class="wda-fcard-code">const sym = Symbol('id');</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">옵셔널 체이닝 + Nullish 심화 활용</div>
    <div class="wda-fcard-dsc">실무에서 가장 많이 쓰는 패턴을 정복합니다.</div>
    <div class="wda-fcard-code">const name = user?.profile?.name ?? 'Guest';</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">ES2020+ 최신 기능 (BigInt 등)</div>
    <div class="wda-fcard-code">const big = 12345678901234567890n;</div>
  </div>
</div>

---

## 📋 ES6 주요 변경점 개요 (2)

### 1) 다음 차시에서 배울 것들 (Preview)

이후 강의에서 본격적으로 다루게 될 핵심 문법과 개념들입니다.

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>화살표 함수 &amp; 구조분해 할당 (심화)</strong> — <code>const add = (a, b) =&gt; a + b;</code> / <code>const { name, age } = person;</code></li>
    <li><strong>스코프 체인과 클로저</strong> — 자바스크립트의 동작 원리를 이해하는 데 필수적인 개념입니다. <code>function outer() { ... }</code></li>
    <li><strong>this 바인딩과 클래스(Class)</strong> — 객체 지향 프로그래밍 패턴을 익힙니다. <code>class Person { ... }</code></li>
    <li><strong>고차함수 (map, filter, reduce)</strong> — 배열을 다루는 가장 강력하고 모던한 방법입니다. <code>const evens = nums.filter(n =&gt; n % 2 === 0);</code></li>
  </ul>
</div>

### ℹ️ ES6 핵심 기능 5가지

모던 자바스크립트를 지탱하는 5대장 기능입니다. 꼭 기억해 두세요!

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">let / const</div>
    <div class="wda-fcard-dsc">블록 스코프</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">화살표 함수</div>
    <div class="wda-fcard-dsc">Arrow Function</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">클래스</div>
    <div class="wda-fcard-dsc">Class</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">모듈</div>
    <div class="wda-fcard-dsc">import / export</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Promise</div>
    <div class="wda-fcard-dsc">비동기 처리</div>
  </div>
</div>

---

## 2. &lt; &gt; 템플릿 리터럴 심화

### 1) 기본 복습 (Review)

ES6에서 도입된 템플릿 리터럴의 기본적인 기능입니다.

```jsx
const name = '홍길동';
const age = 25;

// 1. 기본 사용법 (변수 삽입)
const greeting = `안녕하세요, ${name}님!`;

// 2. 표현식 삽입 (연산 가능)
const info = `나이: ${age}, 내년: ${age + 1}`;

// 3. 멀티라인 (줄바꿈 자유로움)
const html = `
  <div>
    <h1>${name}</h1>
    <p>${age}세</p>
  </div>
`;
```

### 2) 태그드 템플릿 (Tagged Template)

템플릿 리터럴을 **함수**로 파싱하여 문자열과 변수를 분리해 처리할 수 있는 고급 기능입니다.

```jsx
// 태그 함수 정의
function highlight(strings, ...values) {
  // strings: 순수 문자열 배열 ["이름: ", ", 나이: ", ""]
  // values: ${}로 들어온 변수 값 배열 ["홍길동", 25]

  return strings.reduce((acc, str, i) => {
    return acc + str + (values[i] ? `<mark>${values[i]}</mark>` : "");
  }, "");
}

// 태그드 템플릿 사용
const result = highlight`이름: ${name}, 나이: ${age}`;

// 결과: 변수 부분이 <mark> 태그로 감싸짐
// "이름: <mark>홍길동</mark>, 나이: <mark>25</mark>"
```

### 3) 실무 활용 사례

태그드 템플릿은 라이브러리 내부에서 다음과 같은 용도로 강력하게 사용됩니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">HTML 이스케이프</div>
    <div class="wda-fcard-dsc">XSS 공격 방지를 위해 문자열 자동 소독</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">국제화 (i18n)</div>
    <div class="wda-fcard-dsc">언어별 번역 처리</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">styled-components</div>
    <div class="wda-fcard-dsc">React 등에서 CSS 스타일링 처리</div>
  </div>
</div>

---

## 3. 태그드 템플릿 활용 - HTML 이스케이프

### 1) XSS 방지용 이스케이프 함수

사용자가 입력한 내용에 악성 스크립트가 포함되어 있을 경우, 이를 실행되지 않는 일반 문자로 변환(치환)해주는 핵심 로직입니다.

```jsx
// 1. 특수 문자를 HTML 엔티티(일반 문자표기)로 변환하는 함수
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')   // '&' 기호를 '&amp;'로 변경
    .replace(/</g, '&lt;')    // '<' (태그 시작) 기호를 '&lt;'로 변경
    .replace(/>/g, '&gt;')    // '>' (태그 끝) 기호를 '&gt;'로 변경
    .replace(/"/g, '&quot;')  // 큰따옴표를 '&quot;'로 변경
    .replace(/'/g, '&#039;'); // 작은따옴표를 '&#039;'로 변경
}

// 2. 태그드 템플릿 함수 정의 (자동 이스케이프 기능 포함)
function safeHTML(strings, ...values) {
  // strings: 템플릿 문자열 배열 (예: ["<div>", "</div>"])
  // values: ${} 안에 들어온 변수 값 배열
  
  return strings.reduce((acc, str, i) => {
    const value = values[i];
    
    // 값이 존재하면 이스케이프 처리, 없으면 빈 문자열
    // ${} 변수 부분만 골라서 escapeHTML 함수를 통과시킵니다.
    const escaped = value !== undefined 
      ? escapeHTML(String(value)) 
      : "";
      
    // 기존 문자열(str)과 이스케이프된 변수값(escaped)을 이어 붙입니다.
    return acc + str + escaped;
  }, "");
}
```

### 2) 사용 예시 (위험 vs 안전)

실제 해킹 스크립트가 들어왔을 때, 일반 방식과 태그드 템플릿 방식의 차이를 비교합니다.

```jsx
// 해커가 악성 HTML(이벤트 핸들러 속성)을 입력했다고 가정
const userInput = `<img src="x" onerror="alert('해킹!')">`;

// [위험] innerHTML에 직접 삽입하는 경우
// innerHTML은 사용자 입력을 HTML로 해석하므로, 이미지 로드 실패 시 onerror가 실행될 수 있습니다.
div.innerHTML = `<p>${userInput}</p>`; 
// -> onerror 핸들러 실행됨! (보안 취약)

// [안전] 태그드 템플릿(safeHTML)으로 감싸서 넣는 경우
// 내부적으로 <, > 등의 기호가 변환되어 단순 텍스트로 화면에 표시됩니다.
div.innerHTML = safeHTML`<p>${userInput}</p>`;
// -> 결과 HTML: <p>&lt;img src="x" onerror="alert('해킹!')"&gt;</p>
// -> onerror가 실행되지 않고 텍스트 그대로 보임
```

### 3) 보안 이점

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">자동 방어</div>
    <div class="wda-fcard-dsc">사용자 입력을 HTML에 삽입할 때, 개발자가 일일이 치환 함수를 부를 필요 없이 <code>safeHTML</code> 태그만 붙이면 자동으로 처리됩니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">XSS 방지</div>
    <div class="wda-fcard-dsc">스크립트 코드가 실행되지 않고 단순 텍스트로 렌더링되므로 <strong>XSS(크로스 사이트 스크립팅) 공격을 원천 차단</strong>할 수 있습니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>XSS (Cross Site Scripting)란?</strong> 게시판이나 댓글 창에 해커가 악성 HTML을 몰래 적어서 올리는 공격 방식입니다.<br>현대 브라우저는 <code>innerHTML</code>로 삽입된 <code>&lt;script&gt;</code> 태그를 그대로 실행하지 않는 경우가 많지만, <code>innerHTML</code>은 사용자 입력을 HTML로 해석하기 때문에 <code>onerror</code>, <code>onclick</code> 같은 이벤트 핸들러 속성이나 다른 악성 HTML이 실행되어 로그인 정보(쿠키)를 탈취하거나 엉뚱한 사이트로 이동시킬 수 있습니다.</li>
    <li><strong>왜 문자를 바꿔야 하나요?</strong> 브라우저는 <code>&lt;</code>를 보면 "아, 태그가 시작되는구나!"라고 인식합니다.<br>하지만 이를 <code>&amp;lt;</code>로 바꿔놓으면 브라우저는 이를 태그가 아닌 <strong>"그냥 꺾쇠 기호 문자(&lt;)"</strong>로 화면에 그림만 그려줍니다. 즉, 기능은 죽이고 모양만 남기는 것입니다.</li>
  </ul>
</div>

---

## 4. for...of와 이터러블

### 1) for...of 기본 문법

배열이나 문자열처럼 순서가 있는 데이터(이터러블)를 순회할 때 사용하는 가장 모던한 반복문입니다.

```jsx
const arr = ['a', 'b', 'c'];

// 1. for...of: 배열의 '값(Value)'을 하나씩 꺼냅니다.
for (const item of arr) {
  console.log(item); // 'a', 'b', 'c'
}

// 2. for...in: 배열의 '인덱스(Index)'를 꺼냅니다.
// (배열 순회용으로는 권장하지 않음)
for (const index in arr) {
  console.log(index); // '0', '1', '2'
}

// 3. 문자열 순회: 문자열도 이터러블이므로 한 글자씩 순회 가능합니다.
for (const char of 'Hello') {
  console.log(char); // 'H', 'e', 'l', 'l', 'o'
}
```

### 2) 이터러블(Iterable)이란?

**"순회 가능한 객체"**를 뜻합니다. 기술적으로는 `Symbol.iterator`라는 특별한 메서드를 가지고 있는 객체를 말합니다.

**🔹 일반 객체(Object) vs 이터러블(Array 등)**

```jsx
// 1. 배열 (이터러블 O)
// Symbol.iterator가 있어 for...of 사용이 가능합니다.
console.log(Array.prototype[Symbol.iterator]); 

// 2. 일반 객체 (이터러블 X)
const obj = { a: 1, b: 2 };

// 일반 객체는 순서가 없어 for...of 사용 시 에러가 발생합니다.
// for (const item of obj) {} // TypeError!
```

**🔹 객체를 순회하는 방법 (우회법)**

객체를 `for...of`로 돌리고 싶다면, 객체를 배열로 바꿔주는 메서드를 사용해야 합니다.

```jsx
const obj = { a: 1, b: 2 };

// 키(Key)만 뽑아서 배열로 만든 뒤 순회
for (const key of Object.keys(obj)) {
  console.log(key, obj[key]); // a 1, b 2
}

// [키, 값] 쌍을 뽑아서 배열로 만든 뒤 순회
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value); // a 1, b 2
}
```

### 3) 내장 이터러블 종류

자바스크립트에서 기본적으로 `for...of`를 사용할 수 있는(이터러블인) 것들입니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Array</div><div class="wda-fcard-dsc">배열</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">String</div><div class="wda-fcard-dsc">문자열</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Map</div><div class="wda-fcard-dsc">맵</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Set</div><div class="wda-fcard-dsc">셋</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">NodeList</div><div class="wda-fcard-dsc">DOM 요소 리스트 (<code>querySelectorAll</code> 결과)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">arguments</div><div class="wda-fcard-dsc">함수 인수 목록</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">TypedArray</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong><code>for...in</code> vs <code>for...of</code> (쉽게 외우기)</strong> — <code>in</code>은 안에 있는 <strong>키(Key/Index)</strong>를 뽑습니다(객체의 속성 이름을 확인할 때 주로 씀). <code>of</code>는 안에 있는 <strong>알맹이(Value)</strong>를 뽑습니다(배열의 실제 값을 쓸 때 주로 씀).</li>
    <li><strong>이터러블(Iterable) 쉽게 이해하기</strong> — "순서대로 하나씩 꺼낼 수 있는 보따리"라고 생각하면 됩니다.<br>배열 <code>[1, 2, 3]</code>은 1번, 2번 순서가 있으니 보따리(이터러블)입니다.<br>일반 객체 <code>{ a: 1 }</code>는 순서가 정해져 있지 않은 그냥 데이터 덩어리라 보따리(이터러블)가 아닙니다. 그래서 <code>for...of</code>가 작동하지 않는 것입니다.</li>
  </ul>
</div>

---

## 5. 이터러블 심화 - 문자열 순회

### 1) 문자열 순회 기본

문자열도 **'이터러블(Iterable)'**에 속하므로, 배열처럼 `for...of` 문법을 사용하여 한 글자씩 순서대로 순회할 수 있습니다.

### 2) 동작 원리 (Iterator)

문자열 내부에는 순서대로 값을 하나씩 꺼내주는 **'똑똑한 이터레이터(Iterator)'**가 내장되어 있기 때문입니다.

- **System**: "다음 글자 주세요!"
- **Iterator**: "네, 여기 'H' 입니다."
- (이렇게 내부적으로 대화하듯 글자를 하나씩 넘겨줍니다.)

### 3) for loop vs for...of (이모지 처리)

`for...of`의 강력한 장점은 이모지(😊) 같은 **유니코드 문자도 깨지지 않고 정확하게 한 글자로 인식**한다는 점입니다.

```jsx
const text = "A😊B";

// [비교 1] 일반 for loop (비추천)
// 이모지를 2칸(4byte)이 아닌 1칸씩 쪼개버려 문자가 깨집니다.
for (let i = 0; i < text.length; i++) {
  console.log(text[i]); // A, (깨짐), (깨짐), B
}

// [비교 2] for...of 사용 (권장)
// 이모지를 하나의 온전한 글자로 인식하여 정확히 출력합니다.
for (const char of text) {
  console.log(char); // A, 😊, B
}
```

### 4) 내장 이터러블 종류 (복습)

자바스크립트에서 `for...of`를 바로 사용할 수 있는 것들입니다.

- Array (배열)
- String (문자열)
- Map
- Set
- NodeList

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>왜 이모지는 옛날 방식으로 하면 깨질까요?</strong> 컴퓨터는 원래 글자 하나를 작은 상자(2바이트) 하나에 담았는데, 이모지처럼 복잡한 그림은 상자가 2개 필요합니다. (이를 '써로게이트 페어'라고 합니다.)</li>
    <li><strong>일반 <code>for</code>문</strong> — 무조건 상자를 1개씩 엽니다. 그래서 이모지의 반쪽만 가져와서 문자가 깨집니다.</li>
    <li><strong><code>for...of</code></strong> — "어? 이건 상자 2개짜리네?" 하고 똑똑하게 2개를 묶어서 가져옵니다. 그래서 안전합니다.</li>
  </ul>
</div>

---

## 6. Map: 더 강력한 키-값 저장소

### 1) Object vs Map 비교

기존에 객체(Object)를 사용하여 데이터를 관리하던 방식과 비교했을 때, `Map`이 가진 강력한 장점들입니다.

| **비교 항목** | **Object (객체)** | **Map (맵)** |
| --- | --- | --- |
| **🔑 키(Key) 타입** | **제한적**<br>오직 `문자열`과 `Symbol`만 키로 사용할 수 있습니다. | **모든 타입 가능**<br>`객체`, `함수`, `숫자` 등 어떤 것이든 키로 설정할 수 있습니다. |
| **🔢 순서 보장** | **보장 안 됨** ❌<br>(과거 스펙 기준) 데이터의 순서를 신뢰할 수 없습니다. | **완벽 보장** ⭕<br>데이터를 `set`한 순서 그대로 유지됩니다. |
| **⚡ 사용 권장 시기 (성능)** | 데이터 구조가 정해져 있고 변동이 적을 때 사용합니다. | 데이터가 <strong>자주 추가/삭제</strong>되거나, 키의 타입을 미리 알 수 없을 때 사용합니다. (속도가 더 빠름) |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>Map을 써야 하는 결정적 순간 — 복잡한 키가 필요할 때</strong><br>예를 들어, HTML 태그(DOM 요소) 자체를 키로 잡고 데이터를 저장해야 한다면 <code>Map</code>이 유일한 해결책입니다.</li>
    <li><strong>데이터 갯수가 많고 자주 바뀔 때</strong> <code>Object</code>는 데이터를 지울 때(<code>delete</code>) 성능이 다소 느리지만, <code>Map</code>은 최적화가 잘 되어 있어 매우 빠릅니다.</li>
  </ul>
</div>

### 2) 사용법 예시

`Map`을 생성하고, 데이터를 추가하고, 조회하고, 순회하는 기본적인 방법입니다.

```jsx
// 1. Map 생성 및 데이터 추가 (체이닝 가능)
// 문자열뿐만 아니라 객체도 키로 쓸 수 있으며, .set()을 연달아 쓸 수 있습니다.
const map = new Map();
map.set('name', '홍길동')
   .set({ id: 1 }, 'UserObj');

// 2. 데이터 조회
// 'name' 키에 해당하는 값을 가져옵니다.
console.log(map.get('name')); // '홍길동'

// 3. 순회 (Map은 이터러블)
// [key, value] 형태로 값을 하나씩 꺼내옵니다.
for (const [key, val] of map) {
  console.log(key, val);
}
```

### 3) 핵심 활용 팁

> "빈번한 데이터 변경이 필요한 캐시(Cache) 구현 등에 유리합니다."

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>객체를 키로 쓴다는 게 무슨 뜻인가요?</strong> 일반 객체(<code>{}</code>)는 키로 <code>obj['key']</code>처럼 문자열만 쓸 수 있습니다.<br>만약 <code>obj[{a:1}] = '값'</code>이라고 쓰면, 자바스크립트는 내부적으로 저 객체를 <code>"[object Object]"</code>라는 문자열로 강제로 바꿔버립니다.<br>하지만 <code>Map</code>은 저 객체 그 자체를 고유한 열쇠로 인식합니다. 그래서 복잡한 데이터를 연결할 때 훨씬 안전하고 강력합니다.</li>
    <li><strong>체이닝(Chaining)이란?</strong> <code>map.set(...)</code>을 하고 나면, <code>set</code>은 다시 <code>map</code> 자기 자신을 반환합니다. 그래서 꼬리에 꼬리를 물고 <code>.set().set().set()</code> 처럼 기차처럼 연결해서 쓸 수 있는 편리한 문법입니다.</li>
  </ul>
</div>

---

## 7. Set: 중복 없는 리스트

### 1) Array vs Set 비교

데이터를 담는 리스트지만, 성격이 완전히 다른 **Array(배열)**와 **Set(셋)**의 차이점입니다.

| **비교 항목** | **Array (배열)** | **Set (셋)** |
| --- | --- | --- |
| **중복 값** | **허용 O** 🙆‍♂️<br>같은 값이 여러 개 들어갈 수 있습니다. (예: `[1, 1, 2]`) | **허용 X** 🙅‍♂️<br>중복된 값은 <strong>자동으로 제거</strong>됩니다. (예: `{1, 2}`) |
| **인덱스 접근** | **가능 O** 🔢<br>`arr[0]`처럼 "첫 번째 거 줘!"라고 순서 번호로 꺼낼 수 있습니다. | **불가능 X** 🚫<br>순서는 존재하지만, 번호(Index)를 사용해 콕 집어 꺼낼 수 없습니다. |
| **값 찾기 속도 (성능)** | **느림** 🐢<br>`includes()` 사용 시, 데이터가 많으면 처음부터 끝까지 다 훑어야 합니다. | **매우 빠름** ⚡<br>`has()` 사용 시, 데이터 양과 상관없이 <strong>즉시(O(1))</strong> 찾아냅니다. |

### 2) ✨ 실무 패턴: 배열 중복 제거

실무에서 `Set`을 가장 많이 쓰는 경우는 바로 **"배열에서 중복된 데이터를 싹 지우고 싶을 때"**입니다.

```jsx
const numbers = [1, 1, 2, 2, 3, 3];

// 1. Set으로 변환하여 중복 제거
// Set은 중복을 허용하지 않으므로 {1, 2, 3}만 남습니다.
const set = new Set(numbers);

// 2. 다시 배열로 변환 (Spread 문법)
// 쓰기 편한 배열 형태로 되돌립니다.
const unique = [...set];

console.log(unique); // [1, 2, 3]
```

### 3) 한 줄로 해결하기

위의 과정을 실무 고수들은 딱 한 줄로 줄여서 사용합니다.

```jsx
// [한 줄 완성] 배열 -> Set(중복제거) -> 배열로 즉시 변환
const unique = [...new Set(array)];
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong><code>Set.has()</code>가 왜 그렇게 빠른가요?</strong></li>
    <li><strong>Array(배열)</strong> — 만약 도서관에 책이 번호 순서대로 꽂혀 있다면, 특정 책을 찾으려면 1번부터 하나씩 제목을 확인해야 합니다. (데이터가 많을수록 느려짐)</li>
    <li><strong>Set(셋)</strong> — 도서관 사서에게 "해리포터 책 있나요?"라고 물어보는 것과 같습니다.<br>사서는 위치를 바로 알고 있어서, 책이 100만 권이 있어도 <strong>즉시(0.0001초 만에)</strong> 있다고 대답해줍니다. 이를 <strong>해시 테이블(Hash Table)</strong> 방식이라고 합니다.</li>
  </ul>
</div>

---

## 8. Symbol 기초 (1)

### 1) Symbol이란?

ES6에서 새롭게 추가된 원시 타입으로, **"절대 겹치지 않는 고유한 식별자"**를 만들 때 사용합니다.

```jsx
// 유일무이한 식별자(Symbol)를 생성합니다.
const sym1 = Symbol();
const sym2 = Symbol();

// 매번 새로운 고유 값을 만드므로, 둘은 서로 다릅니다.
console.log(sym1 === sym2); // false

// 디버깅 용도로 설명을 붙일 수 있습니다. (값의 고유성에는 영향 없음)
const sym3 = Symbol('description');
console.log(sym3.toString()); // "Symbol(description)"
```

### 2) 객체 프로퍼티 키로 사용

Symbol은 객체(Object)의 비밀스러운 키(Key)로 사용할 때 진가를 발휘합니다.

```jsx
const SECRET = Symbol('secret');

const user = {
  name: '홍길동',
  // [SECRET] 변수를 키로 사용하여 '비밀 정보'를 저장합니다.
  [SECRET]: '비밀 정보'
};

// 일반 프로퍼티 접근
console.log(user.name); // '홍길동'

// 심볼 프로퍼티 접근 (반드시 대괄호 [] 사용)
console.log(user[SECRET]); // '비밀 정보'

// 은닉성: for...in이나 Object.keys에는 심볼 키가 나타나지 않습니다.
console.log(Object.keys(user)); // ['name']
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>Symbol이 왜 필요한가요? — 이름 충돌 방지</strong><br>만약 다른 사람이 만든 라이브러리 객체에 내가 <code>id</code>라는 속성을 추가하고 싶다고 가정해 봅시다. 이미 그 객체 안에 <code>id</code>가 있다면 내 코드가 기존 코드를 덮어씌워서 망가뜨릴 수 있습니다.</li>
    <li>하지만 <code>Symbol</code>로 만든 키는 세상에서 유일하기 때문에, <strong>절대로 이름이 겹치지 않습니다.</strong> 안심하고 객체에 새로운 기능을 갖다 붙일 수 있습니다.</li>
    <li><strong>비유하자면?</strong> 쌍둥이가 똑같이 생겼어도(코드 모양이 같아도), <strong>지문(Symbol)</strong>은 서로 다른 것과 같습니다.</li>
  </ul>
</div>

---

## 9. Symbol 기초 (2)

### 1) 내장 Symbol (Well-Known Symbol)

자바스크립트 엔진 내부에 이미 정의되어 있는 **"특별한 능력을 가진 심볼"**들입니다. 개발자가 이 심볼을 사용하면 자바스크립트의 **내부 동작 방식을 입맛대로 수정(커스터마이징)** 할 수 있습니다.

```jsx
// [Symbol.iterator]
const arr = [1, 2, 3];

// Symbol.iterator는 대괄호로 접근해야 하며, 호출하면 iterator 객체를 얻습니다.
const iterator = arr[Symbol.iterator]();

// iterator.next()로 다음 값을 순서대로 꺼냅니다. { value: 1, done: false }
console.log(iterator.next());

// [Symbol.toStringTag]
const myObj = {
  // 객체의 기본 타입 이름(Object)을 'MyObject'로 커스터마이징합니다.
  [Symbol.toStringTag]: 'MyObject'
};

// 객체의 진짜 타입을 확인해 보면 변경된 이름이 출력됩니다.
console.log(Object.prototype.toString.call(myObj)); // "[object MyObject]"
```

### 2) Symbol의 핵심 용도

왜 굳이 Symbol을 쓰는지 정리한 3가지 핵심 이유입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">충돌 없는 프로퍼티 키</div>
    <div class="wda-fcard-dsc">다른 라이브러리나 코드와 변수명이 겹치는 사고를 100% 방지합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">내부 동작 커스터마이징</div>
    <div class="wda-fcard-dsc">위의 예시(<code>iterator</code>, <code>toStringTag</code>)처럼 자바스크립트 언어 본연의 기능을 해킹하듯 수정할 수 있습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">프라이빗 프로퍼티 (유사 효과)</div>
    <div class="wda-fcard-dsc">외부에 쉽게 노출되지 않는 은밀한 속성을 만들 수 있습니다. (단, <code>getOwnPropertySymbols</code>로 찾을 수는 있어서 완전한 비공개는 아닙니다.)</div>
  </div>
</div>

### 3) 원시 타입 (Primitive Type)

**개념 정리**

<div class="wda-callout wda-cy">
  <ul>
    <li>Symbol은 ES6에서 추가된 자바스크립트의 <strong>원시 타입(Primitive Type)</strong>입니다. 객체가 아니라 숫자나 문자처럼 가장 기초적인 데이터 단위라는 뜻입니다.</li>
  </ul>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>'원시 타입'이 뭔가요?</strong> 자바스크립트에서 더 이상 쪼갤 수 없는 가장 작은 데이터 단위를 말합니다.<br>현대 JavaScript의 원시 타입은 <code>string</code>(문자), <code>number</code>(숫자), <code>bigint</code>(큰 정수), <code>boolean</code>(참/거짓), <code>undefined</code>(정의 안 됨), <code>symbol</code>(고유 식별자), <code>null</code>(빈 값)입니다.</li>
    <li><code>object</code>(객체)는 원시 타입이 아니라 <strong>참조 타입</strong>입니다. Symbol은 이 원시 타입들 중 ES6에서 새로 추가된 데이터 형태입니다.</li>
  </ul>
</div>

---

## 10. 단축 평가 심화

### 1) &amp;&amp; (AND) 연산자 활용

`&&`는 왼쪽이 **참(true)**이면 오른쪽 값을 반환하고, 왼쪽이 **거짓(false)**이면 왼쪽 값을 그대로 반환하는 성질이 있습니다. 이를 이용해 **if문 대신 조건부 실행**을 할 때 자주 사용합니다.

```jsx
// [조건부 실행] true일 때만 우측 코드를 실행합니다. (if문 대체)
const isLoggedIn = true;
isLoggedIn && console.log('환영합니다!');

// (참고) 리액트에서 조건부로 컴포넌트를 보여줄 때 주로 사용합니다.
// {isLoggedIn && <UserProfile />}

// [값 반환] 앞이 true면 뒤의 값, false면 앞의 값을 반환합니다.
const result = true && 'hello'; // 'hello'
const result2 = false && 'hello'; // false

// [Falsy 반환] 0이나 빈 문자열("")은 거짓으로 취급되어 즉시 반환됩니다.
const a = 0 && 'test'; // 0
const b = "" && 'test'; // ""
```

### 2) || (OR) 연산자 활용

`||`는 왼쪽이 **참(true)**이면 왼쪽 값을 바로 쓰고, 왼쪽이 **거짓(false)**일 때만 오른쪽 값을 봅니다. 이 특성을 이용해 전통적으로 **기본값(Default Value)**을 설정할 때 사용했습니다.

```jsx
// [기본값 설정] name이 없거나 거짓(Falsy)이면 'Guest'를 대입합니다.
function greet(name) {
  name = name || 'Guest';
  console.log(`Hello, ${name}!`);
}

greet('홍길동'); // "Hello, 홍길동!"
greet();       // "Hello, Guest!"

// [값 반환] 앞이 Falsy면 뒤의 값, Truthy면 앞의 값을 반환합니다.
const result = null || 'default';      // 'default' (null은 거짓)
const result2 = 'first' || 'second';   // 'first'  (문자열은 참)
```

### 3) ⚠️ || 연산자의 문제점

<div class="wda-callout wda-cw">
  <ul>
    <li><code>||</code> 연산자는 <code>0</code>, <code>""(빈 문자열)</code>, <code>false</code>처럼 <strong>'실제 값'이지만 '거짓'으로 취급되는 데이터</strong>조차도 없는 셈 치고 기본값을 덮어씌워 버리는 치명적인 단점이 있습니다.</li>
  </ul>
</div>

```jsx
// 의도: 이름 없이 빈칸("")으로 인사하고 싶음
// 결과: 빈 문자열("")도 false로 취급되어 강제로 'Guest'가 나와버림 (버그 발생)
greet(""); // "Hello, Guest!" <--- 문제 발생!
```

### 4) ✅ 해결책: 널리시 연산자 (??)

이 문제를 해결하기 위해 ES2020에서 등장했습니다. `??`는 오직 **`null`과 `undefined`** 일 때만 뒷부분을 실행합니다. 즉, `0`이나 `""`은 "값이 있다"고 판단하여 안전하게 지켜줍니다.

```jsx
const count = 0;

// 1. 기존 || (버그)
// 0을 거짓으로 착각해서 기본값 10으로 바꿔버립니다.
const num1 = count || 10; // 10

// 2. 해결사 ?? (권장)
// 0은 null이 아니므로 그대로 0을 유지합니다.
const num2 = count ?? 10; // 0
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>단축 평가(Short-circuit evaluation)란?</strong> 논리 연산자(<code>&amp;&amp;</code>, <code>||</code>)가 결과를 확실히 알 수 있는 시점에 <strong>평가를 멈추고 그 값을 즉시 반환</strong>하는 것을 말합니다.</li>
    <li><code>true || ...</code> — 앞이 참이면 뒤가 뭐든 무조건 참이니까, 뒤는 쳐다보지도 않고 앞의 값을 줍니다.</li>
    <li><code>false && ...</code> — 앞이 거짓이면 뒤가 뭐든 무조건 거짓이니까, 뒤는 쳐다보지도 않고 앞의 값을 줍니다.</li>
    <li><strong>Falsy(거짓 같은) 값</strong> — 자바스크립트에서 <code>false</code>는 아니지만 <code>false</code>처럼 취급당하는 값들입니다: <code>false</code>, <code>0</code>(숫자 0), <code>""</code>(빈 문자열), <code>null</code>, <code>undefined</code>, <code>NaN</code>(Not a Number).</li>
  </ul>
</div>

---

## 💻 실습 : 단축 평가

### 1) 목표

`&&` (AND) 와 `||` (OR) 연산자의 단축 평가 기능을 사용하여, 길게 작성된 조건부(`if`) 코드를 짧고 간결하게 줄여보는 연습입니다.

### 2) Mission 1. if문 줄이기 (&& 사용)

조건이 **참(True)**일 때만 특정 함수를 실행하는 코드를 변경해 봅니다.

```jsx
// [변경 전]
if (isReady) {
  startGame();
}

// [변경 후]
// isReady가 true일 때만 뒤쪽의 startGame()이 실행됩니다.
isReady && startGame();
```

### 3) Mission 2. 기본값 설정하기 (|| 사용)

값이 없을 때(Falsy) **기본값(Default)**을 넣어주는 코드를 변경해 봅니다.

```jsx
// [변경 전]
let name = inputName;
if (!name) {
  name = "익명";
}

// [변경 후]
// inputName에 값이 있으면 그걸 쓰고, 없으면 '익명'을 대입합니다.
const name = inputName || "익명";
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>가독성</strong> — 3~4줄짜리 코드를 1줄로 줄이면 전체적인 코드의 흐름을 한눈에 파악하기 좋습니다.</li>
    <li><strong>리액트(React) 필수 문법</strong> — 나중에 배우실 리액트에서는 <code>if</code>문을 직접 쓰기 어려운 상황(JSX 내부)이 많습니다. 이때 <code>&amp;&amp;</code> 연산자를 써서 "로그인했으면 보여줘!" 같은 기능을 구현하기 때문에 미리 익숙해지면 좋습니다.</li>
  </ul>
</div>

---

## 11. nullish 병합 연산자 (??)

### 1) ?? vs || 비교

`||` (OR) 연산자와 `??` (Nullish) 연산자가 데이터를 걸러내는 기준의 차이점입니다.

```jsx
// [|| 연산자]
// 0, "", false 등 '거짓 같은 값(Falsy)'이면 무조건 뒤의 값을 선택합니다.
console.log(0 || 'default'); // 'default'
console.log("" || 'default'); // 'default'
console.log(null || 'default'); // 'default'

// [?? 연산자]
// 오직 null, undefined일 때만 뒤의 값을 선택합니다. (0, ""는 값으로 인정)
console.log(0 ?? 'default'); // 0
console.log("" ?? 'default'); // ""
console.log(null ?? 'default'); // 'default'
```

### 2) 실전 활용 (API 응답 처리)

서버에서 데이터를 받아올 때, `0`이나 `빈 문자열`이 유효한 데이터일 경우 발생하는 문제를 해결하는 패턴입니다.

```jsx
// API 응답 데이터 (0과 빈 문자열이 실제 값으로 들어옴)
const response = {
  count: 0,
  name: "",
  data: null
};

// [|| 사용 시 문제점]
// 실제 값인 0을 '값이 없다'고 착각해 기본값 10을 덮어씌웁니다. (버그)
const count = response.count || 10; // 10

// [?? 사용 시 해결]
// 0은 null이 아니므로, 들어있는 값 그대로 0을 유지합니다. (정확)
const count2 = response.count ?? 10; // 0

// 빈 문자열("")도 값으로 인정하여 그대로 둡니다.
const name2 = response.name ?? 'Anonymous'; // ""

// null인 경우에만 기본값 빈 배열([])을 할당합니다.
const data = response.data ?? []; // []
```

### 3) Best Practice

<div class="wda-callout wda-cs">
  <ul>
    <li>기본값 설정에는 <strong>??</strong> 사용을 권장합니다. <code>0</code>, <code>""</code>(빈 문자열), <code>false</code>가 프로그램에서 의미 있는 유효한 값일 수 있기 때문입니다.</li>
  </ul>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>언제 <code>||</code>를 쓰고 언제 <code>??</code>를 쓰나요?</strong></li>
    <li><code>||</code> — "값이 없거나, 0이거나, 설정이 안 됐으면 이거 써!" (범위를 넓게 잡을 때)</li>
    <li><code>??</code> — "진짜로 값이 비어있을 때(<code>null</code>)만 이거 써!" (값을 엄격하게 지킬 때 - 추천)</li>
  </ul>
</div>

---

## 12. 옵셔널 체이닝 (?.)

### 1) 기본 사용법

객체 내부의 깊은 속성에 접근할 때, 중간에 값이 없어도 에러(TypeError)가 나지 않게 해주는 안전장치입니다.

```jsx
const user = {
  name: '홍길동',
  address: {
    city: '서울'
  }
};

// [기존 방식] 에러를 막기 위해 && 연산자를 계속 써야 해서 코드가 깁니다.
const city = user && user.address && user.address.city;

// [옵셔널 체이닝] '?.'을 쓰면 앞의 값이 없으면 즉시 멈추고 undefined를 반환합니다.
const city2 = user?.address?.city; // '서울'

// [안전한 접근] 중간에 address가 없어도 에러 없이 안전하게 넘어갑니다.
const user2 = { name: '김철수' }; // address 없음
const city3 = user2?.address?.city; // undefined (에러 발생 안 함!)
```

### 2) 다양한 활용

객체 속성뿐만 아니라 메서드, 배열, 함수 호출에도 사용할 수 있습니다.

```jsx
// 1. 메서드 호출: 메서드가 존재할 때만 실행합니다.
const result = obj?.method?.();

// 2. 배열 접근: 배열이 있을 때만 0번째 값을 꺼냅니다.
const first = arr?.[0];

// 3. 함수 호출: 콜백 함수가 전달되었을 때만 실행합니다.
const value = callback?.(arg1, arg2);
```

### 3) 실무 패턴: API 응답 처리

서버에서 받아온 데이터의 구조가 불확실할 때, 프로그램이 뻗지 않도록 방어 코드를 작성할 때 필수입니다.

```jsx
// API 응답 데이터 (구조를 확신할 수 없음)
const response = await fetch('/api/user');
const data = await response.json();

// [안전한 접근 + 기본값]
// 중간에 데이터가 끊겨 있어도 에러 대신 'Guest'를 넣습니다.
const userName = data?.user?.profile?.name ?? 'Guest';

// 게시글 목록이 없으면 빈 배열([])로 처리하여 에러를 방지합니다.
const posts = data?.user?.posts ?? [];

// 아주 깊숙한 곳에 있는 값도 안전하게 꺼냅니다.
const firstPost = data?.user?.posts?.[0]?.title;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>옵셔널 체이닝(?.)은 <strong>"만약에 없으면 그냥 멈춰!"</strong>라고 말하는 것과 같습니다.</li>
    <li>점(.) 대신 물음표 점(?.)을 쓰면, 앞의 값이 <code>null</code>이나 <code>undefined</code>일 때 에러를 뿜는 대신 조용히 <code>undefined</code>를 내뱉고 끝냅니다.</li>
    <li>특히 서버 통신할 때 데이터가 아직 안 왔거나 비어있을 수 있는데, 이때 그냥 접근하면 화면이 하얗게 변하면서 멈춰버립니다(TypeError).</li>
    <li>옵셔널 체이닝은 이를 막아주는 최고의 백신입니다.</li>
  </ul>
</div>

---

## 13. 옵셔널 체이닝 상세

### 1) 단락 평가 (Short-circuit)

옵셔널 체이닝은 왼쪽 값이 `null`이나 `undefined`라면, 오른쪽 코드는 아예 **실행조차 하지 않고** 즉시 중단합니다.

```jsx
let count = 0;
const user = null;

// user가 null이므로 뒤쪽의 메서드 호출(count++)은 실행되지 않습니다.
const name = user?.getProfile?.(count++);

// 결과: count는 증가하지 않고 그대로 0입니다.
console.log(count); // 0
```

### 2) 삭제 연산과 함께 (delete)

객체의 속성을 삭제할 때도 안전하게 사용할 수 있습니다.

```jsx
const obj = {
  nested: {
    value: 42
  }
};

// obj와 nested가 모두 존재할 때만 value를 삭제합니다.
delete obj?.nested?.value;
```

### 3) 주의사항 (Falsy 값 처리)

`?.`는 오직 `null`과 `undefined`에만 반응합니다. `0`이나 `빈 문자열("")` 같은 다른 '거짓 같은 값(Falsy)'에는 작동하지 않습니다.

```jsx
// [작동 O] 왼쪽이 null/undefined일 때만 undefined를 반환합니다.
const result = null?.prop; // undefined

// [작동 X] 빈 문자열("")은 유효한 객체로 취급되어 length 프로퍼티에 접근합니다.
const result3 = "".length; // 0 (정상 접근)

// [작동 X] 숫자 0도 유효한 객체로 취급되어 메서드에 접근합니다.
const result4 = 0?.toFixed; // function toFixed() (정상 접근)
```

### 4) 남용 주의 (Bug Hiding)

<div class="wda-callout wda-cw">
  <ul>
    <li>반드시 존재해야 하는 필수 값에는 <code>?.</code>를 쓰지 않는 것이 좋습니다. 에러가 나야 할 상황에서 에러를 숨겨버려, 나중에 버그를 찾기 어렵게 만듭니다.</li>
  </ul>
</div>

```jsx
// [나쁜 예] user는 반드시 있어야 하는데 ?.로 에러를 숨겼습니다.
const name = user?.name; 

// [좋은 예] 필수 데이터라면 확실하게 검사해서 에러를 띄우는 편이 낫습니다.
if (!user) throw new Error('User required');
const name = user.name;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>옵셔널 체이닝은 '혹시 없을 수도 있는 값'에만 써야 합니다.<br>"이건 무조건 있어야 돼!" 하는 데이터에 <code>?.</code>를 붙이면, 프로그램이 조용히 오작동(undefined 반환)해서 원인을 찾느라 밤을 새울 수도 있습니다. 에러는 터져야 할 때 확실히 터지는 게 오히려 안전합니다.</li>
  </ul>
</div>

---

## 14. 환상의 짝꿍: ?.와 ??

### 1) 최강 조합 패턴

옵셔널 체이닝(`?.`)으로 안전하게 접근하고, 널리시 병합(`??`)으로 기본값까지 챙기는 가장 많이 쓰이는 모던 자바스크립트 패턴입니다.

```jsx
// Step 1. obj?.prop -> 안전하게 접근 (없으면 undefined)
// Step 2. ?? "기본값" -> undefined라면 기본값 할당
const value = obj?.prop ?? "기본값";
```

### 2) 실전 예시 (사용자 프로필)

사용자 정보가 불완전해도 에러 없이 기본 이미지를 보여주는 방어 코드입니다.

```jsx
const user = {
  name: "홍길동"
  // profile 속성이 아예 없는 상태입니다.
};

// 1. user?.profile -> undefined (에러 안 남)
// 2. undefined?.url -> undefined (계속 안전)
// 3. undefined ?? "default.png" -> 기본값 당첨!
const img = user?.profile?.url ?? "default.png";

console.log(img); // "default.png"
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이 패턴이 강력한 이유는 <strong>"에러 방지"</strong>와 <strong>"데이터 보정"</strong>을 한 번에 해결하기 때문입니다.<br><code>?.</code>만 쓰면 값이 없을 때 <code>undefined</code>가 나와서 화면에 구멍이 뚫릴 수 있는데, <code>??</code>를 뒤에 붙여주면 그 구멍을 예쁜 기본값(이미지, 문구 등)으로 즉시 메꿔줍니다. 프론트엔드 개발에서 가장 사랑받는 관용구 중 하나입니다.</li>
  </ul>
</div>

---

## 💻 실습 : 안전한 데이터 처리

### 1) 목표

옵셔널 체이닝(`?.`)과 널리시 병합 연산자(`??`)를 조합하여, 구조가 불확실한 복잡한 데이터를 에러 없이 안전하게 다루는 연습입니다.

### 2) Mission

다음 `product` 객체에서 **제조사 이름**을 안전하게 꺼내고, 만약 정보가 없다면 **"Unknown"**을 출력하세요.

```jsx
const product = {
  name: "Smartphone",
  details: null // 상세 정보가 아예 없는 상태
};
```

### 3) 정답 코드

`details`가 `null`이어도 에러가 나지 않도록 처리하는 것이 핵심입니다.

```jsx
// 1. details가 없으면(?.) 멈추고, 결과가 없으면(??) 'Unknown'을 반환합니다.
const manufacturer = product.details?.manufacturer ?? "Unknown";

console.log(manufacturer); // "Unknown"
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이 코드는 <strong>2단계 방어막</strong>을 칩니다.</li>
    <li><strong><code>?.</code> (1차 방어)</strong> — <code>product.details</code>가 <code>null</code>이므로, 점(.)을 그냥 찍었으면 에러가 났겠지만, <code>?.</code> 덕분에 에러 없이 <code>undefined</code>가 됩니다.</li>
    <li><strong><code>??</code> (2차 방어)</strong> — 앞의 결과가 <code>undefined</code>이므로, 뒤에 대기하고 있던 <code>"Unknown"</code>이 최종 값으로 당첨됩니다.</li>
  </ul>
</div>

---

## 15. ES2020+ 주요 기능

### 1) BigInt (ES2020)

자바스크립트의 기존 숫자 타입(`Number`)이 표현할 수 있는 한계(2^53 - 1)를 넘어서는 **아주 큰 정수**를 다룰 때 사용합니다.

```jsx
// 기존 Number의 한계 (약 9000조)
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// 1. BigInt 생성: 숫자 뒤에 'n'을 붙이거나 함수를 사용합니다.
const big = 9007199254740992n; 
const big2 = BigInt('9007199254740992');

// 2. 연산: BigInt끼리는 일반 숫자처럼 연산이 가능합니다.
console.log(big + 1n); // 9007199254740993n

// [주의] 일반 Number와 섞어서 연산하면 에러가 발생합니다.
// console.log(big + 1); // TypeError!
console.log(big + BigInt(1)); // OK (형 변환 필요)
```

### 2) 숫자 구분자 (Numeric Separators, ES2021)

숫자가 길어질 때 `_`(언더스코어)를 넣어 **가독성**을 높입니다. 코드가 실행될 때는 무시됩니다.

```jsx
// 10억 (천 단위 콤마 대신 사용)
const billion = 1_000_000_000;

// 바이트, 2진수 등 표현에도 자유롭게 사용 가능
const bytes = 0xFF_FF_FF_FF;
const binary = 0b1010_0001_1000_0101;
```

### 3) 논리 할당 연산자 (Logical Assignment, ES2021)

연산과 할당을 한 번에 처리하는 단축 문법입니다. (`+=` 처럼 동작)

```jsx
// 1. ||= (OR 할당): 변수가 거짓(Falsy)이면 값을 채워 넣습니다.
let a = null;
a ||= 'default'; // a가 비었으니 'default' 할당
console.log(a); // 'default'

// 2. &&= (AND 할당): 변수가 참(Truthy)이면 값을 갱신합니다.
let b = { name: '홍길동' };
b &&= { ...b, age: 25 }; // b가 값이 있으니 age 추가하여 갱신
console.log(b); // { name: '홍길동', age: 25 }

// 3. ??= (Nullish 할당): 변수가 null/undefined일 때만 할당합니다. (★ 가장 추천)
let c = null;
c ??= 'default'; // 비어있으므로 'default' 할당

let d = 0;
d ??= 10; // 0은 값으로 인정하므로 10을 덮어쓰지 않음 (안전)
console.log(d); // 0
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>특히 <strong>??= (Nullish 할당 연산자)</strong>는 초기화 코드를 짤 때 혁명적인 기능입니다.</li>
    <li>기존에는 <code>if (x === null) x = 10;</code> 처럼 길게 썼던 코드를 <code>x ??= 10;</code> 딱 한 줄로 줄여줍니다.</li>
    <li>값이 진짜로 없을 때만 채워주므로, 0이나 false 같은 유효한 설정값이 날아갈 걱정 없이 마음 편히 쓸 수 있습니다.</li>
  </ul>
</div>

---

## 🚀 핵심 요약

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>ECMAScript</strong></td>
    <td>• ES6(2015)는 자바스크립트의 역사를 바꾼 대격변이며, 이때를 기점으로 '모던 자바스크립트'가 시작되었습니다.<br>• 이후 매년 6월마다 새로운 버전(ES2016, ES2017...)이 꾸준히 발표되고 있습니다.</td>
  </tr>
  <tr>
    <td><strong>템플릿 리터럴</strong></td>
    <td>• 백틱(`)과 <code>${}</code>를 사용해 <strong>변수 삽입</strong>과 <strong>멀티라인</strong> 문자열을 직관적으로 다룰 수 있습니다.<br>• <strong>태그드 템플릿</strong>은 <code>TagFn`str`</code> 형태로 사용하며, 보안(XSS 방지)이나 다국어 처리에 활용됩니다.</td>
  </tr>
  <tr>
    <td><strong>이터러블</strong></td>
    <td>• "순서대로 하나씩 꺼낼 수 있는 객체"이며, 핵심은 <code>Symbol.iterator</code>를 가지고 있다는 점입니다.<br>• <code>Array</code>, <code>String</code>, <code>Map</code>, <code>Set</code>, <code>NodeList</code> 등이 해당하며, <code>for...of</code>나 스프레드(<code>[...arr]</code>)로 다룰 수 있습니다.</td>
  </tr>
  <tr>
    <td><strong>?? vs ||</strong></td>
    <td>• <code>||</code>(OR)는 <code>0</code>, <code>false</code>, <code>""</code>도 '없는 값'으로 쳐서 덮어씌웁니다(범위가 넓음).<br>• <code>??</code>(Nullish)는 오직 <code>null</code>, <code>undefined</code>일 때만 기본값을 씁니다(<code>0</code>은 살림). 기본값 설정에는 안전한 <strong>??</strong> 사용을 권장합니다.</td>
  </tr>
  <tr>
    <td><strong>옵셔널 체이닝</strong></td>
    <td>• 중첩된 객체에서 깊숙한 값을 꺼낼 때 사용하는 '안전벨트'로, 앞의 값이 없으면 에러(<code>TypeError</code>) 대신 <code>undefined</code>를 반환하고 즉시 종료합니다.<br>• API 응답처럼 구조가 불확실한 데이터를 다룰 때 필수이며, <code>obj?.prop ?? "기본값"</code> 형태로 가장 많이 쓰입니다.</td>
  </tr>
  <tr>
    <td><strong>ES2020+</strong></td>
    <td>• <strong>BigInt</strong>는 숫자 뒤에 <code>n</code>을 붙여 2^53보다 큰 거대 정수를 다룹니다.<br>• <strong>숫자 구분자</strong>는 <code>1_000_000</code>처럼 언더스코어로 가독성을 높입니다.<br>• <strong>논리 할당</strong>은 <code>??=</code>, <code>&amp;&amp;=</code> 처럼 연산과 할당을 한 번에 처리해 코드를 줄여줍니다.</td>
  </tr>
</table>
