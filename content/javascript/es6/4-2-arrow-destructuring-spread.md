---
title: "4-2 화살표 함수, 구조분해, 스프레드"
status: "completed"
description: "화살표 함수의 축약 규칙과 this 바인딩 차이, 배열/객체 구조분해 할당, 스프레드·Rest 연산자를 정리한다."
category: "JavaScript"
section: "ES6+ 심화 문법"
tags:
  - javascript
  - es6
  - arrow-function
  - destructuring
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
.wda-fcard-code{font-size:.74rem;opacity:.8;background:rgba(128,128,128,.08);border-radius:6px;padding:4px 7px;margin-top:4px;display:inline-block}
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
.wda-deco{position:absolute;z-index:2;pointer-events:none}
@media (max-width:640px){
.wda-deco{width:34px !important}
}
</style>

## 🎯 학습 목표

<div class="wda-goal" style="position:relative;overflow:visible;padding-top:14px;">
  <img class="wda-deco" src="/images/decoration/별 아이콘 (2).webp" alt="" style="width:70px;top:-20px;right:4%;opacity:.78;transform:rotate(8deg);">
  🏹 <strong>화살표 함수</strong> — 함수를 간결하게 작성하고 this 바인딩 차이를 이해합니다.<br>
  📦 <strong>구조분해 할당</strong> — 배열과 객체에서 필요한 값을 쉽게 추출하는 법을 배웁니다.<br>
  🌊 <strong>스프레드 연산자</strong> — 배열과 객체를 펼쳐서 복사하거나 병합합니다.<br>
  🔀 <strong>Rest와 Spread 구분</strong> — 같은 문법(...)이지만 역할이 다른 두 개념을 구분합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. 화살표 함수란?</h2>
  <img class="wda-deco" src="/images/decoration/반짝이 아이콘 (1).webp" alt="" style="width:60px;top:-12px;right:8px;opacity:.76;transform:rotate(-9deg);">
</div>

### 1) 기존 함수 표현식

기존에는 함수를 만들 때마다 `function` 키워드를 매번 입력해야 해서 코드가 길어지고 번거로웠습니다.

```jsx
// [기존 방식] function 키워드를 반드시 써야 합니다.
const add = function(a, b) {
  return a + b;
};

// 간단한 곱하기 함수도 function이 필요합니다.
const double = function(x) {
  return x * 2;
};

console.log(double(10)); // 20
```

### 2) 화살표 함수 (Arrow Function)

`function` 키워드 대신 `=>` (화살표) 기호를 사용하여 함수 정의를 훨씬 간결하게 줄였습니다.

```jsx
// [화살표 함수] function을 없애고 => 로 대체합니다.
const add = (a, b) => {
  return a + b;
};

// 매개변수와 화살표만 남겨 핵심 로직에 집중합니다.
const double = (x) => {
  return x * 2;
};

console.log(double(10)); // 20
```

### 3) 핵심 변화

기존 function 키워드가 반복되는 문제를 해결하고, `=>` (Fat Arrow) 문법으로 코드의 가독성을 높였습니다.

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>화살표 함수는 단순히 타이핑을 줄여주는 것 이상의 의미가 있습니다.</li>
    <li>가장 큰 장점은 <strong>"보일러플레이트(반복되는 상용구) 제거"</strong>입니다.</li>
    <li><code>function</code>, <code>return</code>, <code>중괄호{}</code> 등 로직과 상관없는 기호들을 생략할 수 있어(다음 장에서 배울 예정), 코드를 읽을 때 <strong>"이 함수가 무엇을 하는지"</strong>에 더 빨리 집중할 수 있게 해줍니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. 화살표 함수 축약 규칙 (1)</h2>
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (1).webp" alt="" style="width:62px;top:-13px;left:6%;opacity:.76;transform:rotate(9deg);">
</div>

### 1) 매개변수 괄호 생략

매개변수가 **딱 1개**일 때만 소괄호 `()`를 생략할 수 있습니다.

```jsx
// [기본] 매개변수 감싸기
const squareBasic = (x) => {
  return x * x;
};

// [축약] 매개변수가 1개면 괄호 제거 가능
const squareShort = x => {
  return x * x;
};
```

### 2) return문 생략 (암묵적 반환)

함수의 내용이 **한 줄**이고 그것이 반환값이라면, 중괄호 `{}`와 `return` 키워드를 동시에 생략할 수 있습니다.

```jsx
// [기본] 중괄호와 return 명시
const squareBasic = x => {
  return x * x;
};

// [축약] 한 줄이면 괄호와 return을 생략하고 값만 작성 (Clean Code)
const squareShort = x => x * x;
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>매개변수 개수에 따른 괄호 규칙을 꼭 기억해 주세요.</li>
    <li><strong>0개</strong>: <code>() =&gt; ...</code> (괄호 필수)</li>
    <li><strong>1개</strong>: <code>x =&gt; ...</code> (생략 가능)</li>
    <li><strong>2개 이상</strong>: <code>(a, b) =&gt; ...</code> (괄호 필수)</li>
    <li>특히 <strong>규칙 2번(return 생략)</strong>은 리액트나 배열 메서드(<code>map</code>, <code>filter</code>)를 쓸 때 코드를 획기적으로 줄여주는 핵심 문법입니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. 화살표 함수 축약 규칙 (2)</h2>
  <img class="wda-deco" src="/images/decoration/하트 아이콘 (2).webp" alt="" style="width:46px;top:-10px;right:34%;opacity:.76;transform:rotate(10deg);">
</div>

### 1) 최종 축약 예시

앞서 배운 **매개변수 괄호 생략**과 **return 생략**을 동시에 적용하면, 코드가 극적으로 짧아집니다.

```jsx
// [기존 함수] function, 중괄호, return을 모두 적어야 해서 깁니다.
const greet = function(name) {
  return "Hello " + name;
};

// [화살표 함수 최종형] 매개변수 괄호와 return을 모두 생략한 가장 간결한 형태입니다.
const greet2 = name => "Hello " + name;
```

### 2) Best Practice

<div class="wda-callout wda-cs">
  <ul>
    <li>가능하면 가장 짧은 형태인 '암묵적 반환(Implicit Return)'을 사용하여 코드를 간결하게 만드세요.</li>
  </ul>
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이런 '한 줄짜리 함수'는 주로 배열 메서드(<code>map</code>, <code>filter</code>)의 콜백 함수로 쓸 때 진가를 발휘합니다.</li>
    <li>예를 들어 <code>numbers.map(n =&gt; n * 2)</code> 처럼 쓰면, "숫자들을 가져와서 2배로 만들어라"라는 의도가 마치 영어 문장을 읽는 것처럼 명확하게 보이기 때문입니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. 화살표 함수 주의사항</h2>
  <img class="wda-deco" src="/images/decoration/느낌표 아이콘 (1).webp" alt="" style="width:58px;top:-14px;left:36%;opacity:.76;transform:rotate(-8deg);">
</div>

### 1) 객체를 반환할 때 (가장 흔한 실수)

화살표 함수에서 객체 리터럴 `{}`을 반환할 때는 문법적 모호함이 발생하므로 주의해야 합니다.

```jsx
// [오답] 중괄호({})를 함수 본문(Block)으로 착각해 아무것도 반환하지 않습니다(undefined).
const getUser = () => { name: 'Kim' };

// [정답] 소괄호(())로 감싸주면 "이건 객체야!"라고 명확히 알려주게 됩니다.
const getUser2 = () => ({ name: 'Kim' });
```

### 2) 본문이 여러 줄일 때

암묵적 반환(return 생략)은 본문이 표현식 **딱 한 줄**일 때만 가능합니다. 로직이 길어지면 원래대로 돌아가야 합니다.

```jsx
// [오답] 여러 줄의 로직은 return 생략이 불가능합니다. (SyntaxError)
/*
const calc = (a, b) => 
  const sum = a + b; // 에러 발생
  return sum * 2; 
*/

// [정답] 코드가 두 줄 이상이면 중괄호({})를 열고 명시적으로 return을 적어야 합니다.
const calc = (a, b) => {
  const sum = a + b;
  return sum * 2;
};
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>특히 <strong>1번(객체 반환)</strong>은 리액트(React)에서 상태(State)를 업데이트하거나 초기값을 설정할 때 정말 많이 하는 실수입니다.</li>
    <li>자바스크립트 엔진 입장에서 <code>{</code>를 만나면 "아, 함수 내용을 시작하는구나"라고 먼저 생각하기 때문에, "아니야, 이건 데이터 객체야"라고 알려주기 위해 <strong>소괄호 <code>()</code> 안전장치</strong>를 씌운다고 이해하시면 됩니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. 화살표 함수 vs 일반 함수</h2>
  <img class="wda-deco" src="/images/decoration/핀 아이콘 (1).webp" alt="" style="width:64px;top:-13px;right:6px;opacity:.76;transform:rotate(9deg);">
</div>

### 1) 주요 차이점 비교

화살표 함수는 기존 함수의 '간단한 버전'이 아니라, 동작 방식 자체가 완전히 다른 **별개의 문법**입니다.

| **비교 항목** | **일반 함수 (Function)** | **화살표 함수 (Arrow)** |
| --- | --- | --- |
| **1. this 바인딩** | **호출 방식**에 따라 `this`가 변함 (동적 바인딩) | **선언된 위치**의 상위 `this`를 그대로 씀 (정적/Lexical 바인딩) |
| **2. 생성자 (new)** | `new` 키워드로 객체 생성 **가능** | `new` 사용 **불가** (에러 발생) |
| **3. arguments** | `arguments` 객체 사용 **가능** | `arguments` **없음** (Rest 파라미터 `...args`로 대체) |
| **4. prototype** | `prototype` 프로퍼티 **있음** | `prototype` **없음** (상속 불가, 더 가벼움) |

### 2) 설계 의도

화살표 함수는 "가벼운 함수"로 설계되었습니다. 복잡한 기능(생성자, 프로토타입)을 덜어내고, 메서드 정의보다는 콜백 함수나 간단한 유틸리티 함수를 만드는 데 최적화되어 있습니다.

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>가장 중요한 차이는 역시 <strong><code>this</code></strong>입니다.</li>
    <li>일반 함수는 누가 호출했냐에 따라 <code>this</code>가 계속 변해서(예: 버튼 클릭 시 <code>this</code>가 버튼 자체가 되어버림), 예전에는 <code>var self = this;</code> 같은 편법을 써야 했습니다.</li>
    <li>반면 화살표 함수는 <strong>"내 <code>this</code>는 내가 태어난 곳의 <code>this</code>야!"</strong>라고 고정되므로, 리액트(React)나 비동기 코드(<code>setTimeout</code> 등)에서 <code>this</code>가 꼬이는 문제를 완벽하게 해결해 줍니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. this 바인딩 차이 실습</h2>
  <img class="wda-deco" src="/images/decoration/구름 아이콘 (1).webp" alt="" style="width:64px;top:-14px;left:4%;opacity:.74;transform:rotate(7deg);">
</div>

### 1) 일반 함수의 문제점 (동적 바인딩)

일반 함수는 호출될 때 누가 불렀느냐에 따라 `this`가 바뀝니다. `setInterval` 같은 콜백 함수 안에서는 주인이 바뀌어버려(전역 객체 `window` 등), 우리가 의도한 객체(`counter`)를 찾지 못합니다.

```jsx
const counter = {
  count: 0,
  start: function() {
    // 1초마다 실행되는 콜백 함수 (일반 함수)
    setInterval(function() {
      // 여기서의 this는 counter가 아니라 전역 객체(window)가 되어버립니다.
      this.count++; 
      
      // 결과: window.count는 없으므로 NaN(Not a Number)이 나옵니다.
      console.log(this.count); 
    }, 1000);
  }
};

counter.start();
```

### 2) 화살표 함수의 해결책 (Lexical this)

화살표 함수는 자기 자신의 `this`를 만들지 않고, **작성된 위치(상위 스코프)**의 `this`를 그대로 가져다 씁니다.

```jsx
const counter = {
  count: 0,
  start: function() {
    // 1초마다 실행되는 콜백 함수 (화살표 함수)
    setInterval(() => {
      // 화살표 함수는 상위(start 메서드)의 this를 그대로 물려받습니다.
      // 즉, 여기서 this는 확실하게 counter 객체입니다.
      this.count++;
      
      // 결과: 1, 2, 3... 정상적으로 숫자가 올라갑니다.
      console.log(this.count); 
    }, 1000);
  }
};

counter.start();
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>과거에는 이 문제를 해결하기 위해 <code>var self = this;</code>나 <code>.bind(this)</code> 같은 복잡한 코드를 추가해야 했습니다.</li>
    <li>하지만 화살표 함수가 등장하면서, <strong>"콜백 함수 안에서 <code>this</code>를 쓰고 싶다? 그럼 무조건 화살표 함수!"</strong>라는 공식이 생겼을 정도로 코드가 깔끔해졌습니다.</li>
    <li>리액트 컴포넌트 메서드 작성 시에도 똑같은 원리가 적용됩니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. 화살표 함수, 이럴 때 쓰세요!</h2>
  <img class="wda-deco" src="/images/decoration/책갈피 아이콘 (2).webp" alt="" style="width:60px;top:-12px;right:36%;opacity:.74;transform:rotate(-10deg);">
</div>

### 1) 배열 메서드 콜백 (Best Case)

`map`, `filter`, `reduce` 같은 고차 함수와 함께 쓸 때 가독성이 극대화됩니다. 코드가 아니라 마치 '수식'처럼 보입니다.

```jsx
// [기존] 3줄짜리 콜백 함수
// arr.map(function(x) { return x * 2; });

// [화살표 함수] 한 줄로 끝! (직관적임)
const doubled = arr.map(x => x * 2);

// 짝수만 골라내기
const evens = arr.filter(x => x % 2 === 0);
```

### 2) 상위 this를 유지해야 하는 콜백 (비동기 처리)

`setTimeout`이나 `addEventListener` 안에서 외부(상위 스코프)의 데이터를 건드려야 할 때 필수입니다.

```jsx
// 외부의 this를 그대로 유지하므로, 별도의 바인딩이 필요 없습니다.
setTimeout(() => {
  this.count++;
  console.log('Updated!');
}, 1000);
```

### 3) 짧은 유틸리티 함수

수학 계산이나 단순 값 검증 로직처럼, 입력과 출력이 명확한 순수 함수를 만들 때 좋습니다.

```jsx
// 덧셈 함수
const add = (a, b) => a + b;

// 짝수 판별 함수 (true/false 반환)
const isEven = n => n % 2 === 0;
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>화살표 함수는 <strong>"짧고 굵게"</strong> 쓸 때 가장 아름답습니다.</li>
    <li>특히 1번(배열 메서드)의 경우, 모던 웹 개발(React, Vue 등)에서 데이터 목록을 화면에 뿌려줄 때 밥 먹듯이 사용하게 됩니다.</li>
    <li><strong>"데이터를 변환해서(map) =&gt; 화면에 그린다"</strong>는 흐름을 끊기지 않고 표현할 수 있기 때문입니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. 화살표 함수, 이럴 땐 피하세요!</h2>
  <img class="wda-deco" src="/images/decoration/마스킹 테이프 (3).webp" alt="" style="width:86px;top:-16px;right:0;opacity:.7;transform:rotate(-5deg);">
</div>

### 1) 객체 메서드 정의

화살표 함수의 `this`는 객체 자신을 가리키지 않고, 그 바깥(주로 전역 window)을 보게 됩니다. 따라서 메서드를 만들 때는 **일반 함수 단축 구문**을 쓰는 것이 좋습니다.

```jsx
// [Bad] 여기서 this는 obj가 아니라 전역 객체(window)입니다.
const badObj = {
  name: 'Kim',
  greet: () => `Hi, ${this.name}`
};

// [Good] 일반 함수 메서드 축약형을 써야 this가 obj를 가리킵니다.
const goodObj = {
  name: 'Kim',
  greet() {
    return `Hi, ${this.name}`;
  }
};
```

### 2) addEventListener 콜백

클릭된 요소(`button` 등) 자체에 접근하기 위해 `this`를 써야 한다면 화살표 함수는 피해야 합니다.

```jsx
const btn = document.querySelector('button');

// [Bad] this가 버튼이 아니므로 의도한 대로 동작하지 않습니다.
btn.addEventListener('click', () => {
  this.classList.add('active'); // Error or Window handling
});

// [Good] 일반 함수를 써야 this가 '이벤트가 발생한 요소'를 가리킵니다.
btn.addEventListener('click', function() {
  this.classList.add('active'); // OK
});
```

### 3) 생성자 함수 (new)

화살표 함수는 가볍게 설계되어 `prototype` 속성이 없습니다. 따라서 `new` 키워드로 객체를 생성할 수 없습니다.

```jsx
const Person = (name) => {
  this.name = name;
};

// TypeError: Person is not a constructor
const p = new Person('Kim');
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>결론적으로 <strong><code>this</code>가 상황에 따라 변해야 한다면(동적 바인딩) 일반 함수를 쓰고, <code>this</code>가 고정되어야 한다면(정적 바인딩) 화살표 함수</strong>를 쓰면 됩니다.</li>
    <li>하지만 최근 리액트나 모던 JS 개발 환경에서는 <code>class</code> 문법이나 <code>event.target</code>을 주로 사용하기 때문에, 2번(이벤트 리스너) 같은 경우도 화살표 함수(<code>e =&gt; e.target...</code>)로 대체하여 사용하는 추세입니다.</li>
  </ul>
</div>

---

## 💻 실습 : 화살표 함수로 변환하기

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/별 아이콘 (7).webp" alt="" style="width:72px;left:42%;top:-4px;opacity:.76;transform:rotate(9deg);">
</div>

### 1) Mission

아래 작성된 '일반 함수(`function`)' 코드를 보고, 최신 '화살표 함수(`=>`)' 문법으로 리팩토링해 보세요.

### 🔹 문제 1 : 덧셈 함수

```jsx
const add = function(a, b) {
  return a + b;
};
```

### 🔹 정답 1

```jsx
// return과 중괄호를 생략한 가장 간결한 형태
const add = (a, b) => a + b;
```

### 🔹 문제 2 : forEach 콜백

```jsx
const arr = [1, 2, 3];

arr.forEach(function(x) {
  console.log(x);
});
```

### 🔹 정답 2

```jsx
// 매개변수 괄호와 실행문 중괄호를 모두 생략
arr.forEach(x => console.log(x));
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>리팩토링(Refactoring)</strong>은 코드의 기능은 그대로 두면서, 내부 구조를 더 깔끔하고 효율적으로 바꾸는 작업을 말합니다.</li>
    <li>방금 하신 것처럼 <code>function</code>을 <code>=&gt;</code>로 바꾸는 것만으로도 코드가 획기적으로 짧아집니다.</li>
    <li>특히 2번처럼 배열 메서드(<code>forEach</code>, <code>map</code>) 안에 들어가는 콜백 함수는 99% 화살표 함수로 작성하니 손에 익혀두시면 좋습니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>9. 배열 구조분해 할당</h2>
  <img class="wda-deco" src="/images/decoration/잎사귀 아이콘 (1).webp" alt="" style="width:62px;top:-14px;left:8px;opacity:.76;transform:rotate(-9deg);">
</div>

### 1) 기본 문법

배열 안에 담긴 값을 변수로 꺼낼 때, 예전처럼 인덱스(`arr[0]`, `arr[1]`)를 일일이 지정하지 않고 **패턴 매칭**처럼 한 번에 할당하는 문법입니다.

```jsx
// [기존 방식] 인덱스로 하나씩 꺼내야 해서 코드가 길어집니다.
const arr = [1, 2, 3];
const first = arr[0]; // 1
const second = arr[1]; // 2

// [구조분해 할당] 왼쪽 변수 리스트에 오른쪽 값을 순서대로 꽂아줍니다.
const [one, two, three] = [1, 2, 3];

console.log(one); // 1
console.log(two); // 2
```

### 2) 다양한 활용 (꿀팁)

단순 할당 외에도 값을 건너뛰거나, 기본값을 주거나, 두 변수의 값을 맞바꿀 때 매우 유용합니다.

```jsx
// 1. 요소 건너뛰기: 콤마(,)로 빈 자리를 만들면 해당 순서의 값은 무시합니다.
const [a, , c] = [1, 2, 3]; // 2는 건너뜀
console.log(c); // 3

// 2. 기본값 설정: 값이 없거나 undefined일 때 사용할 값을 지정합니다.
const [x, y = 10] = [5]; // x=5, y는 값이 없으므로 기본값 10

// 3. 나머지 요소 (Rest): ...변수명을 쓰면 남은 요소를 모두 배열로 받습니다.
const [head, ...tail] = [1, 2, 3, 4]; // head=1, tail=[2, 3, 4]

// 4. 변수 교환 (Swap): 임시 변수 없이 두 값을 맞바꿉니다. (★매우 편리)
let n1 = 10, n2 = 20;
[n1, n2] = [n2, n1];
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이 문법이 가장 빛을 발하는 순간은 <strong>리액트(React)의 <code>useState</code> 훅</strong>을 사용할 때입니다.</li>
    <li><code>const [state, setState] = useState(0);</code> 이 코드가 바로 <strong>배열 구조분해 할당</strong>입니다.</li>
    <li><code>useState</code> 함수가 반환하는 배열의 첫 번째 값(상태)과 두 번째 값(함수)을 각각 <code>state</code>와 <code>setState</code>라는 변수에 순서대로 담는 원리입니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>10. 객체 구조분해 할당</h2>
  <img class="wda-deco" src="/images/decoration/종이 클립 아이콘 (1).webp" alt="" style="width:48px;top:-10px;right:8px;opacity:.76;transform:rotate(8deg);">
</div>

### 1) 기본 문법

배열과 달리 **순서가 중요하지 않습니다.** 객체의 **키(Key) 이름**만 맞으면 값을 쏙쏙 뽑아낼 수 있습니다.

```jsx
// [기존 방식] 객체명.속성명으로 계속 접근해야 해서 번거롭습니다.
const user = { name: 'Kim', age: 25 };
const userName = user.name;
const userAge = user.age;

// [구조분해 할당] 변수명과 키 이름이 같으면 자동으로 매칭되어 할당됩니다.
const { name, age } = user;

console.log(name); // 'Kim'
console.log(age);  // 25
```

### 2) 다양한 활용 (Renaming & Default)

변수 이름을 바꾸고 싶거나, 값이 없을 때를 대비한 기본값 설정도 가능합니다.

```jsx
// 1. 다른 변수명으로 할당 (Renaming)
const { name: userName } = user;
console.log(userName); // 'Kim'
```

```jsx
// 2. 기본값 설정 (Default)
const { name, job = '학생' } = user;
// job이 없으면 '학생' 사용
```

```jsx
// 3. 나머지 프로퍼티 (Rest)
const { name, ...rest } = user;
// rest = { age: 25 }
```

```jsx
// 4. 이름 변경 + 기본값 함께 사용
const { name: n, age: a = 0 } = user;
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>가장 큰 차이점은 <strong>"매칭 기준"</strong>입니다.</li>
    <li><strong>배열</strong> — <strong>순서(Index)가 중요함.</strong> (변수 이름을 내 맘대로 지을 수 있음)</li>
    <li><strong>객체</strong> — <strong>이름(Key)이 중요함.</strong> (순서가 뒤바뀌어도 상관없음)</li>
    <li>이 문법은 특히 <strong>함수의 매개변수</strong>를 다룰 때 강력합니다.</li>
    <li><code>function printUser({ name, age }) { ... }</code> 처럼 작성하면, 함수 내부에서 <code>user.name</code> 대신 바로 <code>name</code>을 쓸 수 있어 코드가 매우 깔끔해집니다.</li>
    <li>리액트 컴포넌트의 <code>props</code>를 받을 때 표준처럼 쓰이는 방식입니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. 중첩 구조분해 (상세)</h2>
  <img class="wda-deco" src="/images/decoration/말풍선 아이콘 (1).webp" alt="" style="width:64px;top:-13px;left:40%;opacity:.76;transform:rotate(-8deg);">
</div>

### 1) 중첩 객체 구조분해

객체 안에 있는 또 다른 객체의 속성을 한 번에 꺼내는 코드입니다.

```jsx
const user = {
  name: 'Kim',
  address: {
    city: 'Seoul',
    zip: '12345'
  }
};

// 중첩 구조분해: 주소만 파고들기
const {
  name,            // name은 그대로 추출
  address: { city, zip } // address 객체 안의 city, zip 추출
} = user;

console.log(name); // 'Kim'
console.log(city); // 'Seoul' (address.city)
console.log(zip);  // '12345' (address.zip)

// 주의: address 변수는 생성되지 않음!
// console.log(address); -> ReferenceError
```

### 2) 중첩 배열 + 객체

배열과 객체가 섞여 있는 복잡한 데이터 구조를 분해하는 코드입니다.

```jsx
const data = {
  results: [
    { id: 1, title: '첫 번째 글' },
    { id: 2, title: '두 번째 글' }
  ]
};

// 복합 구조분해: results 배열의 첫 요소 꺼내기
const {
  // results 프로퍼티의 값을 배열로 분해([first])
  results: [first, second]
} = data;

console.log(first); // { id: 1, ... }

// 더 깊게: 첫 요소의 id 추출하기
const {
  // results 배열 -> 첫 요소({}) -> id 프로퍼티
  results: [{ id, title }]
} = data;

console.log(id);    // 1
console.log(title); // '첫 번째 글'
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>마지막 부분(<code>results: [{ id, title }]</code>)이 가장 난이도가 높은 문법입니다.</li>
    <li>이것은 <strong>"data 객체의 results를 찾아라(:) → 그 안의 배열 첫 번째 요소를 잡아라([]) → 그 안의 객체에서 id와 title을 꺼내라({})"</strong>라는 3단계 명령을 한 줄로 요약한 것입니다.</li>
    <li>API 데이터를 다룰 때 매우 강력한 무기가 됩니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>12. 함수 매개변수 구조분해</h2>
  <img class="wda-deco" src="/images/decoration/스탬프 아이콘 (2).webp" alt="" style="width:60px;top:-14px;right:38%;opacity:.74;transform:rotate(10deg);">
</div>

### 1) 객체 매개변수 구조분해

함수가 객체를 받을 때, 괄호 안에서 바로 분해하면 코드가 훨씬 깔끔해집니다.

```jsx
// 기존 방식
function greet(user) {
  // user.name, user.age 처럼 매번 점(.)을 찍어야 해서 불편함
  console.log(`Hi, ${user.name}!`);
  console.log(`Age: ${user.age}`);
}

// 매개변수에서 바로 구조분해
// user 객체를 받자마자 name과 age 변수로 쪼개서 받음
function greet({ name, age }) {
  // 점(.) 없이 변수명만으로 바로 사용 가능
  console.log(`Hi, ${name}!`);
  console.log(`Age: ${age}`);
}

// 기본값과 함께
// age가 없으면 자동으로 0이 들어감 (안전장치)
function greet({ name, age = 0 }) {
  console.log(`${name}, ${age}세`);
}

// 함수 호출 시 객체를 전달
greet({ name: 'Kim', age: 25 });
```

### 2) 실전 활용 패턴

실무에서 API를 호출하거나 리액트 컴포넌트를 만들 때 실제로 쓰는 코드 형태입니다.

```jsx
// API 호출 옵션
// 순서 상관없이 필요한 옵션만 골라서 넣을 수 있어 편리함
function fetchData({
  url,            // 필수 값
  method = 'GET', // 값이 안 넘어오면 'GET'으로 설정 (기본값)
  headers = {}    // 값이 안 넘어오면 빈 객체로 설정
}) {
  // url, method, headers 바로 사용 가능
}

// React 컴포넌트 스타일 (매우 중요!)
// props 객체를 받아서 바로 { name, email, avatar }로 분해
const UserCard = ({ name, email, avatar }) => {
  return `
    <div>
      <img src="${avatar}" />
      <h2>${name}</h2>
      <p>${email}</p>
    </div>
  `;
};
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong><code>UserCard</code></strong> 예제는 리액트(React) 개발의 90%를 차지하는 패턴입니다.</li>
    <li><code>props</code>라는 객체를 통째로 받아서 <code>props.name</code>이라고 쓰는 것보다, 저렇게 <code>({ name })</code> 형식으로 받으면 <strong>"이 컴포넌트는 name 데이터가 꼭 필요하구나"</strong>라고 한눈에 알 수 있어 가독성이 2배 이상 좋아집니다.</li>
  </ul>
</div>

---

## 💻 실습 : 구조분해로 데이터 뽑기

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/체크 아이콘 (2).webp" alt="" style="width:44px;right:6%;top:-2px;opacity:.76;transform:rotate(-8deg);">
</div>

### 1) Mission

다음 API 응답 객체에서 필요한 정보를 구조분해 할당으로 한 번에 추출해보세요!

### 2) 문제 (Question)

**Q. 사용자 정보 추출하기**

```jsx
const response = {
  data: {
    user: {
      id: 1,
      name: 'Kim',
      settings: { theme: 'dark' }
    }
  }
};

// 미션: 한 줄로 id, name, theme 변수 만들기!
// const ... = response;
```

### 3) 정답

```jsx
// 한 번에 파고들기
const {
  data: { // 1. response 안의 data로 진입
    user: { // 2. data 안의 user로 진입
      id,    // 3. id 추출 (변수 생성)
      name,  // 4. name 추출 (변수 생성)
      settings: { theme } // 5. settings 안으로 또 진입해서 theme 추출
    }
  }
} = response;

console.log(id, name, theme); // 1, 'Kim', 'dark'
```

복잡하게 중첩된 객체를 한 번에 뚫고 들어가는 것이 핵심입니다.

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><code>response.data.user.settings.theme</code> 처럼 점(.)을 4번이나 찍어서 접근하는 대신, 위 정답처럼 구조분해를 해두면 이후 코드에서는 깔끔하게 <code>theme</code> 변수 하나만 쓰면 되기 때문에 코드의 유지보수성이 엄청나게 좋아집니다.</li>
    <li>처음엔 괄호 짝 맞추기가 헷갈릴 수 있으니 들여쓰기를 잘 활용해 보세요!</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>13. 스프레드 연산자 - 배열</h2>
  <img class="wda-deco" src="/images/decoration/꽃 아이콘 (2).webp" alt="" style="width:60px;top:-13px;left:6%;opacity:.76;transform:rotate(9deg);">
</div>

### 1) 배열 복사

기존 배열을 건드리지 않고 새로운 복사본을 만들 때 사용합니다. `...`은 괄호를 없애고 내용물만 펼치는 역할을 합니다.

```jsx
const original = [1, 2, 3];

// 스프레드로 복사 (얕은 복사)
// original 배열의 껍질을 벗겨 내용물(1,2,3)만 새 대괄호 [] 안에 담습니다.
const copy = [...original];

copy.push(4); // 복사본에만 4를 추가합니다.
console.log(original); // [1, 2, 3] 원본 유지 (원본은 안전합니다)
console.log(copy);     // [1, 2, 3, 4] (복사본만 변경되었습니다)
```

### 2) 배열 합치기 & 삽입

`concat` 같은 함수를 쓸 필요 없이, 레고 블록을 조립하듯 직관적으로 배열을 붙이거나 중간에 값을 끼워 넣을 수 있습니다.

```jsx
const arr1 = [1, 2];
const arr2 = [3, 4];

// 배열 합치기
// arr1을 펼치고 그 뒤에 arr2를 펼쳐서 하나의 배열로 만듭니다.
const merged = [...arr1, ...arr2];
// [1, 2, 3, 4]

// 중간에 삽입
// arr1을 펼친 다음 'X'를 넣고, 그 뒤에 arr2를 펼칩니다.
const middle = [...arr1, 'X', ...arr2];
// [1, 2, 'X', 3, 4]

// 앞뒤로 추가
// 0을 넣고, arr1을 펼치고, 마지막에 5를 추가합니다.
const extended = [0, ...arr1, 5];
// [0, 1, 2, 5]
```

### 3) 실전 활용

배열의 맨 앞에 데이터를 추가할 때 자주 사용하는 패턴입니다.

```jsx
// 실전: 배열 맨 앞에 추가하기
const todos = ['할일2', '할일3'];

// '할일1'을 앞에 두고 뒤에 기존 목록을 펼쳐서 붙입니다.
// 기존 배열(todos)을 변경하지 않고 새로운 목록(newTodos)을 만듭니다.
const newTodos = ['할일1', ...todos]; // unshift 대신!
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>리액트(React)에서는 <strong>"불변성(Immutability)"</strong>을 지키는 것이 생명입니다.</li>
    <li>기존의 <code>push</code>, <code>unshift</code> 같은 메서드는 원본 데이터를 직접 바꿔버리기 때문에 리액트가 변경 사항을 감지하지 못할 수 있습니다.</li>
    <li>반면 <strong>스프레드 연산자</strong>는 항상 <strong>"새로운 배열"</strong>을 만들어내므로, 리액트에서 상태(State)를 업데이트할 때 가장 권장되는 표준 방식입니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>14. 스프레드 연산자 - 객체</h2>
  <img class="wda-deco" src="/images/decoration/포스트잇 (1).webp" alt="" style="width:56px;top:-12px;right:4%;opacity:.74;transform:rotate(-9deg);">
</div>

### 1) 객체 복사

배열과 마찬가지로, 객체의 중괄호 `{}`를 벗겨서 내부 속성들을 새로운 객체에 복사할 때 사용합니다. 원본 데이터를 안전하게 지킬 수 있습니다.

```jsx
const original = { a: 1, b: 2 };

// 스프레드로 복사 (얕은 복사)
// original 객체의 속성(a, b)을 펼쳐서 새로운 중괄호 {} 안에 담음
const copy = { ...original };

copy.c = 3; // 복사본에만 c 속성을 추가
console.log(original); // { a: 1, b: 2 } (원본은 영향받지 않음)
console.log(copy);     // { a: 1, b: 2, c: 3 } (복사본만 변경됨)
```

### 2) 객체 병합 & 오버라이드

두 객체를 합치거나, 특정 속성값만 수정하고 싶을 때 매우 유용합니다. **"뒤에 오는 것이 이긴다(덮어쓴다)"**는 규칙만 기억하면 됩니다.

```jsx
const defaults = { theme: 'light', lang: 'ko' };
const userSettings = { theme: 'dark' };

// 병합 (뒤에 오는 값이 우선)
// defaults를 먼저 펼치고, userSettings가 theme 값을 'dark'로 덮어씀
const settings = { ...defaults, ...userSettings };
// { theme: 'dark', lang: 'ko' }

// 특정 값만 변경
// original의 모든 속성을 가져오되, b의 값만 100으로 교체
const updated = { ...original, b: 100 };
// { a: 1, b: 100 }
```

### 3) 실전 활용 (React)

리액트에서 `useState`로 관리하는 객체 상태를 업데이트할 때 사용하는 표준 패턴입니다.

```jsx
// 실전: 상태 업데이트 (React 스타일)
const state = { user: 'Kim', count: 0 };

// 기존 state를 모두 펼쳐서 복사하되, count 값만 1 증가시켜서 덮어씀
const newState = { ...state, count: state.count + 1 };
// { user: 'Kim', count: 1 } - 원본 유지하면서 count만 증가
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>객체 스프레드 문법은 <strong>"순서"</strong>가 핵심입니다.</li>
    <li><code>{ ...defaults, ...userSettings }</code> 라고 쓰면 "기본 설정을 깔고, 유저 설정으로 덮어써라"가 되지만, 순서를 반대로 뒤집으면 유저 설정이 기본 설정에 의해 지워져 버립니다.</li>
    <li>특히 3번 예제처럼 <strong>"기존 데이터 복사(<code>...state</code>) → 바뀔 부분만 명시(<code>count: ...</code>)"</strong> 하는 패턴은 리액트 개발의 알파이자 오메가이므로 꼭 숙지해 주세요!</li>
  </ul>
</div>

---

## 💻 실습 : 불변성 지키며 수정하기

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/반짝이 아이콘 (3).webp" alt="" style="width:66px;left:44%;top:-6px;opacity:.76;transform:rotate(8deg);">
</div>

### 1) Mission

원본 객체(`state`)를 건드리지 않고, 내용을 수정한 새로운 객체(`newState`)를 만들어보세요.

### 2) 문제 (Question)

**Q. 상태 업데이트 (불변성 유지)**

```jsx
const state = {
  name: 'Kim',
  age: 25,
  role: 'user'
};

// 미션: name은 유지하고, age를 26으로, role을 'admin'으로 변경한
// 'newState' 객체를 만드세요. (state 변경 X)
```

### 3) 정답

```jsx
const newState = {
  ...state,      // 1. 기존 state의 모든 내용(name, age, role)을 복사해서 가져옴
  age: 26,       // 2. age 값을 26으로 덮어씀 (Override)
  role: 'admin'  // 3. role 값을 'admin'으로 덮어씀 (Override)
};

console.log(newState);
// 결과: { name: 'Kim', age: 26, role: 'admin' }
// name은 건드리지 않았으므로 그대로 유지됨!
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>만약 <code>state.age = 26;</code> 처럼 직접 고치면 원본이 훼손되지만, 위 정답처럼 <code>...state</code>를 사용하면 원본은 안전하게 지키면서(Immutable) 변경된 새 데이터를 만들 수 있습니다.</li>
    <li><strong>"펼치고 → 덮어쓴다"</strong> 이 순서만 기억하세요!</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>15. 함수 호출 시 스프레드</h2>
  <img class="wda-deco" src="/images/decoration/화살표 아이콘 (2).webp" alt="" style="width:62px;top:-13px;right:8px;opacity:.76;transform:rotate(-9deg);">
</div>

### 1) 배열을 인자로 펼치기

배열에 들어있는 숫자들을 함수의 인수(Arguments)로 전달할 때, 반복문이나 `apply` 없이 한 번에 펼쳐서 넣을 수 있습니다.

```jsx
const numbers = [5, 2, 8, 1, 9];

// 기존 방식 (apply 사용)
const maxOld = Math.max.apply(null, numbers);

// 스프레드 사용
const maxNew = Math.max(...numbers);
// Math.max(5, 2, 8, 1, 9)와 같음

const min = Math.min(...numbers);
console.log(maxNew, min); // 9, 1
```

### 2) 다양한 활용

문자열을 한 글자씩 쪼개거나, 여러 배열을 합쳐서 함수에 전달할 때도 매우 유용합니다.

```jsx
// 문자열을 배열로
const chars = [...'hello'];
// ['h', 'e', 'l', 'l', 'o']

// 배열 합쳐서 함수 호출
const args1 = [1, 2];
const args2 = [3, 4];
someFunc(...args1, ...args2);
// someFunc(1, 2, 3, 4)

// push에 여러 값
const arr = [1, 2];
arr.push(...[3, 4, 5]);
// [1, 2, 3, 4, 5]
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><code>Math.max(...numbers)</code>는 코딩 테스트나 실무에서 가장 많이 쓰이는 패턴 중 하나입니다.</li>
    <li>과거에는 <code>apply</code>라는 어렵고 복잡한 메서드를 써야 했지만, 이제는 스프레드 문법 덕분에 "배열을 쫙 펼쳐서 숫자들만 쏙 넣는다"는 의도를 코드에 직관적으로 표현할 수 있게 되었습니다.</li>
    <li>또한 <strong>문자열</strong>도 '순서가 있는 데이터(이터러블)'이기 때문에 <code>[...'hello']</code> 처럼 사용하면 <code>split('')</code>과 똑같은 효과를 낼 수 있습니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>16. Rest vs Spread 구분</h2>
  <img class="wda-deco" src="/images/decoration/메모지 아이콘 (3).webp" alt="" style="width:78px;top:-16px;left:38%;opacity:.76;transform:rotate(7deg);">
</div>

### 1) Rest: 모으기 (여러 개 → 하나)

점 3개(`...`)가 **값을 담는 그릇(변수, 매개변수)** 쪽에 쓰이면, 흩어져 있는 여러 값들을 **하나의 배열이나 객체로 싹 긁어모으는** 역할을 합니다.

```jsx
// 함수 매개변수에서 rest
// 넘겨받은 1, 2, 3을 numbers라는 하나의 배열로 묶어줍니다.
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
sum(1, 2, 3); // numbers = [1, 2, 3]

// 구조분해에서 rest
// 앞에서 first(1)를 빼고 남은 나머지(2, 3, 4)를 rest 배열로 모읍니다.
const [first, ...rest] = [1, 2, 3, 4];
// first = 1, rest = [2, 3, 4]

// a를 제외한 나머지 속성들(b, c)을 others 객체로 모읍니다.
const { a, ...others } = { a: 1, b: 2, c: 3 };
// a = 1, others = { b: 2, c: 3 }
```

### 2) Spread: 펼치기 (하나 → 여러 개)

점 3개(`...`)가 **값을 할당하는 쪽(값, 함수 호출)**에 쓰이면, 뭉쳐 있는 배열이나 객체를 **낱개로 쫙 펼쳐주는** 역할을 합니다.

```jsx
// 배열 리터럴에서 spread
// arr1과 arr2의 껍질을 벗겨서 하나의 배열로 합칩니다.
const merged = [...arr1, ...arr2];

// 객체 리터럴에서 spread
// obj1과 obj2의 속성들을 펼쳐서 새로운 객체 하나로 합칩니다.
const newObj = { ...obj1, ...obj2 };

// 함수 호출에서 spread
// numbers 배열을 풀어서 인수(argument)로 전달합니다.
Math.max(...numbers);
console.log(...items);
```

### 3) 위치로 구분하기

| **구분** | **Rest (받는 쪽)** | **Spread (주는 쪽)** |
| --- | --- | --- |
| **위치** | `=`의 **왼쪽**이나 함수 **정의**(`function(...)`) | `=`의 **오른쪽**이나 함수 **호출**(`func(...)`) |
| **의미** | "나머지 다 내놔!"라고 <strong>주워 담는</strong> 역할 | "내용물 보여줄게!"라고 <strong>펼쳐 놓는</strong> 역할 |

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>문법은 <code>...</code>으로 똑같아서 헷갈리기 쉽지만, <strong>"위치"</strong>를 보면 구분할 수 있습니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🔑 핵심 정리 (Summary)</h2>
  <img class="wda-deco" src="/images/character/개념 연결.webp" alt="" style="width:128px;right:0;top:-100px;opacity:.88;">
</div>

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (4).webp" alt="" style="width:46px;left:4%;top:-8px;opacity:.76;transform:rotate(9deg);">
</div>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>화살표 함수</strong></td>
    <td>• <code>(params) =&gt; expression</code> 기본 형태이며, 매개변수 1개면 괄호 생략(<code>x =&gt; ...</code>), 본문 한 줄이면 <code>return</code> 생략 가능합니다.<br>• <strong>렉시컬 this</strong> — 자신의 <code>this</code>를 만들지 않고 상위 스코프의 <code>this</code>를 그대로 사용해 <code>map</code>, <code>filter</code> 콜백에 최적화되어 있습니다.</td>
  </tr>
  <tr>
    <td><strong>구조분해 할당</strong></td>
    <td>• 배열 분해 <code>[a, b] = arr</code>는 순서가 중요하고, 객체 분해 <code>{ a, b } = obj</code>는 이름이 중요합니다.<br>• 기본값(<code>a = 10</code>)과 나머지(<code>...rest</code>)를 함께 쓸 수 있으며, 함수 매개변수(<code>props</code>)를 받을 때 매우 유용합니다.</td>
  </tr>
  <tr>
    <td><strong>스프레드 연산자</strong></td>
    <td>• 배열 복사(<code>[...arr]</code>)와 객체 복사(<code>{ ...obj }</code>)로 불변성을 유지하며, 병합(<code>[...a, ...b]</code>)과 함수 호출(<code>fn(...arr)</code>)에도 사용합니다.<br>• 모으는 역할인 Rest(<code>...rest</code>)와는 문법은 같지만 위치(받는 쪽 vs 주는 쪽)로 구분해야 합니다.</td>
  </tr>
</table>

### 4) 추가 핵심 문법 (Handwritten Notes)

이미지에 손글씨로 적혀 있는 `&&`, `?.`, `??`는 모던 자바스크립트의 **안전한 코딩**을 돕는 필수 연산자들입니다.

```jsx
const user = { profile: { name: 'Kim' } };

// 1. 옵셔널 체이닝 (?.): 에러 없이 안전하게 접근
console.log(user.profile?.name); // 'Kim'
console.log(user.info?.age);     // undefined (에러 안 남!)

// 2. Nullish 병합 (??): null이나 undefined일 때만 뒤의 값 사용
const age = user.age ?? 20; // user.age가 없으면 20

// 3. 논리 연산자 (&&): 앞이 true면 뒤를 실행 (리액트 조건부 렌더링에 자주 씀)
user.profile && console.log('프로필이 있습니다.');
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이 세 가지(화살표 함수, 구조분해, 스프레드)는 <strong>현대 JavaScript의 3대장</strong>이라고 불릴 만큼 중요합니다.</li>
    <li>특히 리액트(React)나 뷰(Vue) 같은 프레임워크는 이 문법들을 기초로 만들어졌기 때문에, 숨 쉬듯이 자연스럽게 쓸 수 있도록 연습해 두시는 것이 좋습니다.</li>
    <li>마지막에 추가해 드린 <code>?.</code> (옵셔널 체이닝)도 실무에서 "undefined 에러"를 방지하는 구세주 같은 존재니 꼭 기억해 주세요!</li>
  </ul>
</div>
