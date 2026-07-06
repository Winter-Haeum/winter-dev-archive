---
title: "4-4 this 바인딩 파헤치기"
status: "completed"
description: "함수 호출 방식에 따라 달라지는 this의 4가지 바인딩 규칙과 우선순위, 화살표 함수의 렉시컬 this까지 정리한다."
category: "JavaScript"
section: "ES6+ 심화 문법"
tags:
  - javascript
  - this
  - bind
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
.wda-deco{position:absolute;z-index:2;pointer-events:none}
@media (max-width:640px){
.wda-deco{width:34px !important}
}
</style>

## 🎯 학습 목표

<div class="wda-goal" style="position:relative;overflow:visible;padding-right:150px;padding-top:14px;">
  <img class="wda-deco" src="/images/decoration/별 아이콘 (9).webp" alt="" style="width:64px;top:-18px;right:20px;opacity:.8;transform:rotate(8deg);">
  <strong>🎯 this의 정체</strong> — 함수가 호출되는 방식에 따라 결정되는 원리를 이해합니다.<br>
  <strong>4가지 규칙</strong> — 기본, 암시적, 명시적, new 바인딩의 작동 방식을 익힙니다.<br>
  <strong>우선순위</strong> — 규칙이 충돌할 때 어떤 것이 먼저 적용되는지 배웁니다.<br>
  <strong>{} 실전 활용</strong> — 화살표 함수와 bind를 활용해 this 이슈를 해결합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. this란 무엇인가?</h2>
  <img class="wda-deco" src="/images/decoration/하트 아이콘 (10).webp" alt="" style="width:46px;top:-10px;right:6%;opacity:.76;transform:rotate(-9deg);">
</div>

### 1) 다른 언어에서의 this

Java나 C++ 같은 언어에서는 `this`가 항상 자기 자신(인스턴스)으로 고정되어 있습니다.

```jsx
// Java - this는 항상 "자기 자신"
class Person {
  String name;

  void sayName() {
    System.out.println(this.name);
    // this = 항상 Person 인스턴스
  }
}
```

- **Java, Python, C++**: `this`/`self`는 **항상 같은 것을 가리킴**

### 2) JavaScript에서의 this

하지만 자바스크립트에서는 **호출 방식**에 따라 `this`가 계속 변합니다.

```jsx
// JavaScript - this는 "호출 방식"에 따라 달라짐
const person = {
  name: 'Kim',
  sayName() {
    console.log(this.name);
  }
};

person.sayName(); // 'Kim' (this = person)
// (점 앞의 person이 호출했으므로 this는 person)

const fn = person.sayName;
fn();
// (점 없이 혼자 호출되었으므로 기본 바인딩이 적용됨)
// 브라우저 일반 script의 비엄격 모드에서는 this가 window가 되어 undefined가 출력되고,
// strict mode 또는 module 환경에서는 this가 undefined가 되어 에러가 발생할 수 있습니다.
```

**주의**

<div class="wda-callout wda-cw">
  같은 함수인데 this가 다르다!
</div>

### 3) JavaScript this의 핵심

이 문장을 반드시 기억해야 합니다.

**핵심 개념**

<div class="wda-callout wda-cy">
  누가 이 함수를 어떻게 호출했는가에 따라 this가 결정됩니다 (동적 바인딩)
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. this가 결정되는 시점</h2>
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (10).webp" alt="" style="width:58px;top:-14px;right:10%;opacity:.76;transform:rotate(7deg);">
</div>

### 1) ❌ 함수 정의 시점 (X)

함수를 작성하는 순간에는 `this`가 무엇인지 절대 알 수 없습니다.

```jsx
const obj = {
  name: 'obj',
  method() {
    console.log(this.name);
  }
};
// 여기서 this가 정해지는 게 아님!
```

> 함수를 "작성"할 때는 this를 알 수 없음

### 2) ✅ 함수 호출 시점 (O)

`this`는 코드가 실행되어 **함수가 호출되는 바로 그 순간**에 결정됩니다.

```jsx
obj.method();       // this = obj
const fn = obj.method;
fn();               // this = window(비엄격) 또는 undefined(strict mode·module)
fn.call(obj);       // this = obj
new obj.method();   // this = 새 객체
```

> 함수를 "호출"할 때 비로소 this 결정!

### 3) 💡 예외: 화살표 함수

유일한 예외가 있습니다.

**핵심 개념**

<div class="wda-callout wda-cy">
  화살표 함수는 자신만의 this를 만들지 않고, 만들어진 위치의 상위 스코프 this를 그대로 사용합니다.
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  이것이 바로 <strong>"동적 바인딩(Dynamic Binding)"</strong>의 핵심입니다.<br>
  <strong>일반 함수</strong> — "누가 나를 불렀어?" (호출 시점에 따라 계속 바뀜 -&gt; 변덕쟁이)<br>
  <strong>화살표 함수</strong> — "난 태어날 때부터 정해졌어." (작성 시점에 고정 -&gt; 지조파)<br><br>
  그래서 코드를 짤 때, <strong>"이 함수는 나중에 어떻게 호출될까?"</strong>를 고민해야 한다면 일반 함수를, <strong>"무조건 내 주변 환경(this)을 기억해야 해"</strong>라면 화살표 함수를 쓰는 것이 좋습니다.<br>
  특히 리액트(React)에서 콜백 함수를 넘길 때 화살표 함수를 많이 쓰는 이유가 바로 이 <strong>'고정된 this'</strong> 때문입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. this 바인딩 스펙트럼</h2>
  <img class="wda-deco" src="/images/decoration/핀 아이콘 (7).webp" alt="" style="width:48px;top:-10px;left:32%;opacity:.76;transform:rotate(-8deg);">
</div>

### 1) 4가지 바인딩 규칙

`this`가 결정되는 4가지 규칙을 **강도(결속력)** 순서대로 나열했습니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🌑</div>
    <div class="wda-fcard-ttl">기본 (Default)</div>
    <div class="wda-fcard-dsc">🍂 <strong>낙엽</strong> (소속 없음)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🟠</div>
    <div class="wda-fcard-ttl">암시적 (Implicit)</div>
    <div class="wda-fcard-dsc">🏷️ <strong>가격표</strong> (객체 소속)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔵</div>
    <div class="wda-fcard-ttl">명시적 (Explicit)</div>
    <div class="wda-fcard-dsc">🎮 <strong>리모컨</strong> (직접 지정)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🟣</div>
    <div class="wda-fcard-ttl">New (생성자)</div>
    <div class="wda-fcard-dsc">🏭 <strong>공장</strong> (새 인스턴스)</div>
  </div>
</div>

### 2) 우선순위 법칙

규칙이 서로 충돌할 때 승패를 가르는 중요한 원칙입니다.

**핵심 개념**

<div class="wda-callout wda-cy">
  오른쪽으로 갈수록 결속력(우선순위)이 강해집니다.<br>
  (규칙이 충돌하면 오른쪽 규칙이 이깁니다!)
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  이 스펙트럼은 <code>this</code> 판결을 내리는 <strong>'법전'</strong>과 같습니다. 만약 코드가 복잡하게 꼬여서 <code>this</code>가 헷갈릴 때는 이 그림을 떠올리며 오른쪽으로 갈수록 <strong>"더 센 규칙"</strong>이라고 생각하세요.<br>
  1. <strong>낙엽(기본)</strong> — 아무도 안 챙겨주면 바람 부는 대로(전역) 날아갑니다. (가장 약함)<br>
  2. <strong>가격표(암시적)</strong> — 물건(객체)에 딱 붙어 있습니다. 낙엽보다는 셉니다.<br>
  3. <strong>리모컨(명시적)</strong> — 사용자가 "이거 가리켜!"라고 강제로 지정(<code>call</code>, <code>apply</code>, <code>bind</code>)합니다. 가격표보다 셉니다.<br>
  4. <strong>공장(New)</strong> — 아예 새로운 생명(인스턴스)을 탄생시킵니다. 기존의 모든 규칙을 무시하고 <strong>최강의 권한</strong>을 가집니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. 바인딩 규칙 1 : 기본 바인딩 (Default Binding)</h2>
  <img class="wda-deco" src="/images/decoration/잎사귀 아이콘 (4).webp" alt="" style="width:52px;top:-12px;right:8px;opacity:.74;transform:rotate(10deg);">
</div>

### 1) 낙엽 같은 존재 (The Leaf)

함수를 **단독으로 실행**할 때 적용되는 규칙입니다. 누구의 소유도 아닌 상태이므로, 바람 부는 대로(전역으로) 날아갑니다.

- **호출 형태**: `func()` (앞에 아무것도 없이 함수 이름만 부름)
- **this의 운명**:
  1. **비엄격 모드**: 전역 객체 (**Window**)
  2. **엄격 모드**: 정의되지 않음 (**undefined**)

### 2) 코드 예시

가장 흔하게 보는 일반 함수 호출입니다.

```jsx
function hello() {
  console.log(this);
}

hello(); 
// 점(.)도 없고, new도 없이 혼자 호출됨!
// -> 브라우저 일반 script의 비엄격 모드에서는 전역 객체(window)가 됨 🍂
// -> strict mode 또는 module 환경이라면 undefined가 됨 (바로 아래에서 확인)
```

### 3) 엄격 모드 (Strict Mode)의 중요성

`use strict`를 사용하면 안전장치가 켜집니다.

```jsx
'use strict'; // 엄격 모드 켜기

function hello() {
  console.log(this);
}

hello();
// -> undefined 출력!
// (전역 객체를 건드리지 못하게 막아줌) 🛡️
```

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>"왜 이름이 '기본(Default)' 바인딩인가요?"</strong><br>
  나중에 배울 2, 3, 4번 규칙(암시적, 명시적, new) 중 <strong>어느 것에도 해당하지 않을 때</strong>, 최후의 수단으로 적용되는 <strong>'기본값'</strong>이기 때문입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. 바인딩 규칙 2 : 암시적 바인딩 (Implicit Binding)</h2>
  <img class="wda-deco" src="/images/decoration/종이 클립 아이콘 (5).webp" alt="" style="width:56px;top:-12px;left:40%;opacity:.76;transform:rotate(-7deg);">
</div>

### 1) Metaphor : 가격표 (Price Tag)

물건에 붙은 가격표처럼, 함수가 **점(.)으로 객체에 붙어있으면** 그 **객체가 주인(this)**이 됩니다. "누구의 메서드인가?"가 명확하죠.

```jsx
const person = {
  name: 'Kim',
  greet() { console.log(this.name); } // this는 나를 호출한 객체(person)
};

person.greet();
// 🏷️ person에 붙어있음 -> this는 person
// 출력: 'Kim'
```

### 2) 주의 : 가격표가 떨어지면?

가격표(함수)를 떼어서 주머니(변수)에 넣으면, 더 이상 그 물건(객체) 소속이 아닙니다. => **낙엽(기본 바인딩) 신세가 됩니다.**

```jsx
const myTag = person.greet; // ✂️ 떼어냄! (함수 자체만 변수에 담음)

myTag();
// 🍂 어디 붙어있지 않음 -> 점(.) 없이 호출했으므로 기본 바인딩 규칙 적용
// 브라우저 일반 script의 비엄격 모드에서는 전역(window)이 되고,
// strict mode 또는 module 환경에서는 undefined가 됩니다.
```

**보충 설명**

<div class="wda-callout wda-ci">
  가장 쉬운 판별법은 <strong>"함수 호출 코드의 점(.) 앞을 보는 것"</strong>입니다.<br>
  · <code>person.greet()</code> → 점 앞에 <code>person</code>이 있네? → <code>this</code>는 <code>person</code>!<br>
  · <code>myTag()</code> → 점이 없네? → <code>this</code>는 전역(<code>window</code> or <code>undefined</code>)!<br><br>
  이 규칙을 <strong>'Dot Rule'</strong>이라고도 부릅니다. 함수가 원래 어디에 정의되었는지는 중요하지 않습니다. <strong>"지금 당장 점을 찍고 불렀느냐"</strong>가 유일한 판단 기준입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. 바인딩 규칙 3 : 명시적 바인딩 (Explicit Binding)</h2>
  <img class="wda-deco" src="/images/decoration/말풍선 아이콘 (6).webp" alt="" style="width:60px;top:-14px;right:6%;opacity:.76;transform:rotate(8deg);">
</div>

### 1) Metaphor : 리모컨 (Remote Control)

리모컨으로 TV를 조종하듯, 함수가 사용할 `this`를 **직접 지정(Remote Control)**해서 실행합니다. "이 함수는 쟤(this) 거야!" 라고 강제로 연결하죠.

### 2) 3가지 방법

자바스크립트는 `this`를 강제로 주입하는 3가지 메서드를 제공합니다.

| **메서드** | **📦 인자 전달 방식** | **🚀 실행 여부** | **🔑 핵심 특징** |
| --- | --- | --- | --- |
| **call** | **콤마 ( , )**<br>`(a, b, c)` | **즉시 실행** | 함수를 빌려서 바로 사용함<br>(일회용) |
| **apply** | **배열 ( [ ] )**<br>`([a, b, c])` | **즉시 실행** | 인자가 리스트로 묶여있을 때 유용<br>(일회용) |
| **bind** | **콤마 ( , )**<br>`(a, b, c)` | **실행 안 함** ❌ | `this`가 고정된 **새 함수 반환**<br>(나중에 원할 때 실행) |

**이 셋을 구분하는 팁**

<div class="wda-callout wda-cy">
  · <strong>call</strong>은 <strong>comma(콤마)</strong>로 인자를 주고,<br>
  · <strong>apply</strong>는 <strong>array(배열)</strong>로 인자를 줍니다. (기능은 똑같습니다.)<br>
  · <strong>bind</strong>는 영어 단어 뜻 그대로 <strong>"꽉 묶어놓기만"</strong> 합니다. 실행은 하지 않고, <code>this</code>를 영구적으로 고정한 <strong>새로운 리모컨(함수)</strong>을 복사해서 만들어줍니다. 그래서 이벤트 리스너(<code>onClick</code> 등)처럼 <strong>"지금 말고 나중에 실행해줘"</strong>라고 할 때 가장 많이 쓰입니다.
</div>

### 3) Code Example

피카츄 객체를 `attack` 함수에 강제로 연결하는 예제입니다.

```jsx
const person = { name: 'Pikachu' };

function attack(skill) {
  console.log(`${this.name} uses ${skill}!`);
}

// 1. call (즉시 발사)
// attack 함수를 실행하되, this를 person으로 설정하고 'Thunder'를 인자로 넘김
attack.call(person, 'Thunder');
// "Pikachu uses Thunder!"

// 2. bind (전용 버튼 만들기)
// 실행은 안 하고, this가 person으로 고정된 새로운 함수(pikaAttack)를 만듦
const pikaAttack = attack.bind(person);

pikaAttack('Iron Tail'); // 나중에 필요할 때 실행
// "Pikachu uses Iron Tail!"
```

**보충 설명**

<div class="wda-callout wda-ci">
  이 세 가지(<code>call</code>, <code>apply</code>, <code>bind</code>)는 <strong>"남의 함수 빌려 쓰기"</strong> 기술입니다. <code>attack</code> 함수는 원래 혼자 있는 함수지만, <code>call</code>을 사용해서 마치 <code>person</code>이 가지고 있는 메서드인 것처럼 작동하게 만들었죠.<br><br>
  가장 중요한 차이점은 <strong>실행 시점</strong>입니다.<br>
  · <strong>call / apply</strong>: "지금 당장 실행해!" (일회용)<br>
  · <strong>bind</strong>: "나중에 쓸 거니까 미리 묶어만 놔." (재사용 가능)<br><br>
  과거 <strong>React 클래스 컴포넌트</strong>나 일부 이벤트 핸들러(<code>addEventListener</code>) 코드에서는 <code>this</code>가 끊어지는 것을 막기 위해 <code>bind</code>를 사용했습니다. 다만 최신 React 함수 컴포넌트에서는 <code>this</code>를 거의 사용하지 않습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. 바인딩 규칙 4: new 바인딩</h2>
  <img class="wda-deco" src="/images/decoration/구름 아이콘 (5).webp" alt="" style="width:58px;top:-14px;right:30%;opacity:.74;transform:rotate(-9deg);">
</div>

### 1) Metaphor : 공장

`new` 연산자는 **공장 가동 버튼**입니다. 누르는 순간 **완전히 새로운 제품(Instance)**이 뚝딱 만들어지고, 그 제품 겉면에 `this`라는 라벨이 붙습니다.

### 2) 코드 예시

함수는 그대로지만 `new`를 만나는 순간 공장으로 변신합니다.

```jsx
function Robot(name) {
  // 1. 빈 깡통(객체) 생성 {}
  // 2. this = 그 깡통
  this.name = name;
  // 3. 깡통에 이름 새기기
  // 4. return this (완성품 출고)
}

const bot = new Robot('Wally');
// 🏭 공장 가동! -> 새 로봇 Wally 탄생
```

### 3) 핵심 원리

이전에 `bind`로 묶었든, 어디에 소속되었든 상관없습니다.

<img src="/images/content/4-4/객체 생성 튜토리얼 다이어그램.png" alt="new Robot() 호출 시 this가 새로 생성된 객체 인스턴스가 되는 과정" style="display:block;width:100%;max-width:480px;height:auto;border-radius:8px;margin:.6rem auto 1rem;object-fit:contain;">

**핵심 개념**

<div class="wda-callout wda-cy">
  New Object (Instance): <code>this = { name: ... }</code><br>
  <strong>갓 태어난 이 객체</strong>가 무조건 <code>this</code>입니다.
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  이것이 바로 앞서 본 스펙트럼의 <strong>가장 오른쪽(최강자)</strong>에 위치한 규칙입니다.<br>
  생성자로 사용할 수 있는 일반 함수를 <code>bind</code>한 뒤 <code>new</code>로 호출하면, <code>bind</code>로 고정한 <code>this</code>보다 <code>new</code>로 생성된 새 객체가 우선합니다. 단, 메서드 단축 문법이나 화살표 함수처럼 생성자로 사용할 수 없는 함수에는 <code>new</code>를 사용할 수 없습니다.<br>
  왜냐하면 <code>new</code>는 <strong>"새로운 생명의 탄생"</strong>이기 때문입니다.<br>
  갓 태어난 아기(새 객체)에게 "너는 예전부터 철수였어"라고 강요할 수 없듯이, <code>new</code>로 만들어진 인스턴스는 과거의 모든 바인딩 규칙을 무시하고 <strong>자기 자신</strong>을 <code>this</code>로 삼습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. 바인딩 우선순위</h2>
  <img class="wda-deco" src="/images/decoration/책갈피 아이콘 (1).webp" alt="" style="width:50px;top:-11px;right:8px;opacity:.74;transform:rotate(6deg);">
</div>

### 1) 순위 요약

규칙이 충돌하면 누가 이길까요? 강력한 순서대로 나열했습니다.

> new &gt; 명시적 &gt; 암시적 &gt; 기본

### 2) 코드 증명 (Code Proof)

실제 코드로 싸움을 붙여보면 승자가 명확히 보입니다.

```jsx
const obj1 = {
  name: 'obj1',
  foo: function() {
    console.log(this.name);
  }
};
const obj2 = { name: 'obj2' };

// 1. 암시적 (기본)
obj1.foo(); // 'obj1'

// 2. 암시적 vs 명시적(call)
obj1.foo.call(obj2); // 'obj2' (명시적 승!)

// 3. 명시적(bind) vs New
const bound = obj1.foo.bind(obj1); // obj1로 고정
bound(); // 'obj1'

// 4. new bound() ??
// new가 만든 새 객체가 this가 되며, 그 객체에는 name이 없으므로 undefined 출력
new bound(); // undefined (New 승!)
```

**주의**

<div class="wda-callout wda-cw">
  이 예제가 성립하려면 <code>foo</code>가 <strong>생성자로 사용할 수 있는 일반 함수</strong>여야 합니다. 메서드 단축 문법(<code>foo() {}</code>)이나 화살표 함수로 정의된 함수는 애초에 <code>new</code>로 호출할 수 없어 <strong>TypeError</strong>가 발생합니다.
</div>

### 3) 판단 순서 (Checklist)

`this`가 헷갈릴 때는 위에서부터 순서대로 질문을 던져보세요.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">new로 호출?</div>
      <div class="wda-sdsc"><code>this</code> = <strong>새 객체</strong></div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">call/apply/bind?</div>
      <div class="wda-sdsc"><code>this</code> = <strong>지정 객체</strong></div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">obj.method()?</div>
      <div class="wda-sdsc"><code>this</code> = <strong>obj</strong></div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">그 외?</div>
      <div class="wda-sdsc"><code>this</code> = <strong>전역/undefined</strong></div>
    </div>
  </div>
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  가장 흥미로운 부분은 <strong>4번 케이스(<code>new bound()</code>)</strong>입니다.<br>
  <code>bind(obj1)</code>을 통해 <code>this</code>를 <code>obj1</code>으로 꽁꽁 묶어놨음에도 불구하고, <code>new</code> 연산자가 등장하자마자 그 강력한 결속이 끊어집니다.<br>
  결과가 <code>'obj1'</code>이 아니라 <code>undefined</code>가 나온 이유는, <code>new</code>가 만든 <strong>완전히 비어있는 새 객체(<code>{}</code>)</strong>가 <code>this</code>가 되었기 때문입니다. (빈 객체에는 <code>name</code> 프로퍼티가 없으니까요!)<br><br>
  즉, 자바스크립트 세계관에서 <strong>"새 생명의 탄생(New)"</strong>은 그 어떤 <strong>"계약(Bind)"</strong>보다 우선한다는 철학을 엿볼 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>9. 화살표 함수의 this</h2>
  <img class="wda-deco" src="/images/decoration/느낌표 아이콘 (6).webp" alt="" style="width:48px;top:-10px;right:8px;opacity:.76;transform:rotate(-6deg);">
</div>

### 1) 렉시컬 this (Lexical this)

화살표 함수는 기존의 `this` 규칙을 완전히 깨뜨리는 **반란군**입니다.

```jsx
const obj = {
  name: 'Kim',
  regularFn: function() {
    console.log(this.name); // 'Kim'

    setTimeout(function() {
      console.log(this.name); // undefined!
    }, 100);
  },
  arrowFn: function() {
    console.log(this.name); // 'Kim'

    setTimeout(() => {
      console.log(this.name); // 'Kim'!
    }, 100);
  }
};
```

### 2) 화살표 함수의 특징

기존 함수와 다르게 동작하는 3가지 핵심 특징이 있습니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">자신만의 this 없음</div>
    <div class="wda-fcard-dsc">상위 스코프의 this를 그대로 사용<br>"렉시컬 this" (정의 시점에 결정)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">call/apply/bind 무시</div>
    <div class="wda-fcard-dsc">사용해도 this는 바뀌지 않음. bind()는 새 함수를 반환하지만, 그 함수의 this도 상위 this를 그대로 사용</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">new 사용 불가</div>
    <div class="wda-fcard-dsc">생성자로 사용하면 TypeError</div>
  </div>
</div>

화살표 함수에 `call`/`apply`/`bind`를 사용해도 `this`는 바뀌지 않습니다. 단, `bind()` 자체는 새 함수를 반환하지만, 그 함수의 `this`도 기존 상위 `this`를 그대로 사용합니다.

```jsx
const arrow = () => console.log(this);
arrow.call({ a: 1 }); // 여전히 상위 this
```

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>"왜 화살표 함수를 쓰나요?"</strong><br>
  가장 큰 이유는 <code>this</code> 스트레스에서 해방되기 위해서입니다.<br>
  위 코드의 <code>regularFn</code> 안에 있는 <code>setTimeout</code>을 보세요. <code>setTimeout</code> 콜백의 일반 함수는 객체 메서드로 호출되는 것이 아니므로, <code>this</code>가 <code>obj</code>를 가리키지 않습니다. 브라우저 일반 script의 비엄격 모드에서는 <code>window</code>를 가리킬 수 있고, strict mode나 module 환경에서는 <code>undefined</code>가 될 수 있습니다.<br>
  반면 <strong>화살표 함수(<code>=&gt;</code>)</strong>는 태어날 때 부모의 <code>this</code>를 그대로 물려받아 가슴에 품고 삽니다. 그래서 <code>arrowFn</code> 안에서는 "내 부모(<code>obj</code>)의 이름은 Kim이야!"라고 정확하게 기억하는 것입니다. (React나 콜백 함수에서 아주 유용합니다!)
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>10. 콜백에서 this 손실 해결</h2>
  <img class="wda-deco" src="/images/decoration/스탬프 아이콘 (1).webp" alt="" style="width:60px;top:-14px;left:6%;opacity:.74;transform:rotate(9deg);">
</div>

### 1) 문제 상황

객체 안의 메서드라도, 콜백 함수(`setTimeout` 등)로 전달되면 `this`를 잃어버리는 심각한 문제가 발생합니다.

```jsx
const counter = {
  count: 0,
  increment() {
    setTimeout(function() {
      this.count++; // this = window(비엄격) 또는 undefined(strict mode·module)
      console.log(this.count); // NaN (strict mode·module이면 TypeError)
    }, 1000);
  }
};

counter.increment();
```

**주의**

<div class="wda-callout wda-cw">
  콜백으로 전달되면 this 손실<br>
  (counter가 호출한 게 아니라, 나중에 타이머가 따로 호출하기 때문)
</div>

### 2) 해결 방법 3가지

이 문제를 해결하는 역사를 순서대로 정리했습니다.

**1. 화살표 함수 (권장)**

가장 모던하고 깔끔한 해결책입니다. 상위 스코프의 `this`를 그대로 물려받습니다.

```jsx
// 1. 화살표 함수 (권장)
setTimeout(() => {
  this.count++;
}, 1000);
```

**2. bind 사용**

함수 뒤에 `.bind(this)`를 붙여서 강제로 주입합니다.

```jsx
// 2. bind 사용
setTimeout(function() {
  this.count++;
}.bind(this), 1000);
```

**3. self/that 패턴 (레거시)**

옛날 코드에서 자주 보이는 방식입니다. `this`를 변수에 따로 저장해둡니다.

```jsx
// 3. self/that 패턴 (레거시)
const self = this;
setTimeout(function() {
  self.count++;
}, 1000);
```

**정리 포인트**

<div class="wda-callout wda-cs">
  결론: 화살표 함수가 가장 깔끔!
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>"왜 잘 있다가 갑자기 this를 잃어버리나요?"</strong><br>
  <code>setTimeout</code>에게 함수를 넘겨주는 순간, 그 함수는 더 이상 <code>counter</code>의 소유가 아니게 됩니다.<br>
  · <strong>화살표 함수</strong> — 아이에게 "너는 누가 불러도 꼭 아빠 아들이라고 해야 해!"라고 교육해서 보내는 것과 같습니다. (가장 확실함)<br>
  · <strong>self 변수</strong> — 아이 가방에 "아빠 사진(<code>self</code>)"을 넣어주는 고전적인 방식입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. {...} 객체 메서드에서의 this</h2>
  <img class="wda-deco" src="/images/decoration/체크 아이콘 (1).webp" alt="" style="width:44px;top:-9px;right:34%;opacity:.76;transform:rotate(7deg);">
</div>

### 1) 메서드 단축 문법

객체 안에서 메서드를 만들 때 가장 권장되는 방식입니다.

```jsx
const user = {
  name: 'Kim',

  // 메서드 단축 문법 (권장)
  greet() {
    console.log(`Hi, ${this.name}`);
  },

  // 기존 방식도 동일
  sayBye: function() {
    console.log(`Bye, ${this.name}`);
  }
};

user.greet();   // "Hi, Kim"
user.sayBye();  // "Bye, Kim"
```

### 2) 화살표 함수 메서드 (X)

객체의 메서드를 화살표 함수로 정의하면 심각한 문제가 발생합니다.

```jsx
const user = {
  name: 'Kim',

  // 화살표 함수로 메서드? (비권장!)
  greet: () => {
    console.log(`Hi, ${this.name}`);
  }
};

user.greet(); // "Hi, undefined"
// this = 상위(최상위) 스코프의 this
// 브라우저 일반 script 최상위에서는 this가 window이고, module 환경에서는 this가 undefined입니다.
```

**주의**

<div class="wda-callout wda-cw">
  객체 자신의 프로퍼티를 this로 접근해야 하는 메서드에는 화살표 함수를 사용하지 않는 것이 좋습니다.<br>
  객체 리터럴은 스코프를 만들지 않음
</div>

### 3) 핵심 규칙

이것만 기억하면 됩니다.

**핵심 개념**

<div class="wda-callout wda-cy">
  객체의 this를 사용해야 하는 메서드는 일반 함수로, 상위 this를 유지해야 하는 콜백은 화살표 함수로 작성하는 경우가 많습니다.
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>"왜 객체 안인데 this가 window인가요?"</strong><br>
  이게 가장 헷갈리는 부분입니다. 우리는 중괄호 <code>{}</code>를 보면 본능적으로 "여기는 <code>user</code>의 땅이야!"라고 생각합니다.<br>
  하지만 자바스크립트에서 <strong>객체 리터럴의 <code>{}</code>는 스코프(Scope) 역할을 하지 못합니다.</strong> 그냥 값을 담는 주머니일 뿐이죠. 객체 리터럴의 중괄호는 블록 스코프를 만드는 중괄호가 아니라, 객체 값을 표현하는 문법입니다. 그래서 화살표 함수의 상위 <code>this</code>를 결정할 때 객체 자체가 새로운 <code>this</code> 스코프가 되지는 않습니다.<br>
  그래서 화살표 함수는 "내 상위 스코프를 찾아줘!" 하고 고개를 들었는데, <code>user</code> 객체는 투명 인간 취급을 받고, 그 바깥에 있는 <strong>전역 스코프(브라우저 일반 script라면 Window, module이라면 undefined)</strong>가 보이게 되는 것입니다.<br>
  반면 <strong>일반 함수(<code>greet() {}</code>)</strong>는 호출될 때 "나를 부른 놈(<code>user.</code>)이 누구지?"를 확인하므로 정상적으로 작동합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>12. 🏠 직관적 이해: "방" vs "가구"</h2>
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (18).webp" alt="" style="width:60px;top:-14px;right:8px;opacity:.76;transform:rotate(-8deg);">
</div>

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/화살표 아이콘 (1).webp" alt="" style="width:38px;top:6px;left:50%;opacity:.7;transform:rotate(10deg);">
</div>

### 1) 오해의 원인: 중괄호

모든 중괄호 `{ }`가 새로운 공간(스코프)을 만들진 않습니다. 가장 쉬운 비유는 "방(Room)"과 "가구(Furniture)"입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">함수 (Function) = "방" 🚪</div>
    <div class="wda-fcard-dsc">함수는 새로운 방을 만듭니다. 함수를 호출한다는 건, <strong>새 방으로 들어가는 것</strong>입니다. 그래서 this(현재 위치)가 바뀔 수 있습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">객체 (Object) = "가구" 🪑</div>
    <div class="wda-fcard-dsc">객체는 현재 방에 놓인 가구일 뿐입니다. 객체 안을 채우는 동안, <strong>우리는 이동하지 않았습니다.</strong> 여전히 원래 방(Global)에 서 있죠.</div>
  </div>
</div>

### 2) 코드로 확인하기

우리가 객체를 만들 때 실제로는 어디에 서 있는지를 보여주는 코드입니다.

```jsx
// 1. 우리는 지금 '거실(Global)'에 서 있습니다.

const myGagu = {

  // 2. 가구 서랍을 채우고 있습니다.
  // 하지만 내 발은 여전히 '거실'에 있죠!

  location: this
};

console.log(myGagu.location); // Global
```

### 3) 핵심 포인트

**핵심 개념**

<div class="wda-callout wda-cy">
  화살표 함수는 "내가 서 있는 곳"의 this를 기억합니다.<br>
  객체를 만들 때 우리는 Global에 서 있었으므로, 화살표 함수의 this도 Global이 됩니다.
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  이 비유는 <strong>"화살표 함수가 객체 안에서 왜 전역 객체를 가리키는가?"</strong>를 이해하는 최고의 열쇠입니다.<br>
  1. 여러분(코드 실행 흐름)은 지금 거실(전역)에 서 있습니다.<br>
  2. 거실에서 <code>myGagu</code>라는 서랍장(객체)을 조립하고 있습니다.<br>
  3. 서랍장 안에 스티커(화살표 함수)를 붙입니다.<br>
  4. 화살표 함수는 <strong>"내가 붙여질 때 주인이 어디 서 있었지?"</strong>를 기억합니다.<br>
  5. 서랍장 안으로 들어간 게 아니라, <strong>거실에 서서</strong> 서랍장 안을 채우고 있었죠?<br><br>
  그래서 화살표 함수는 <strong>"아, 나는 거실(Global)에서 만들어졌구나!"</strong>라고 기억하는 것입니다. 반면, <strong>함수(방)</strong>는 문을 열고 들어가야 하므로, 들어가는 순간 그 방이 나의 새로운 세계(this)가 될 수 있는 것이죠.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>❓ 퀴즈: 이 중괄호는 this를 가둘까?</h2>
  <img class="wda-deco" src="/images/decoration/별 아이콘 (10).webp" alt="" style="width:66px;top:-20px;left:30%;opacity:.8;transform:rotate(9deg);">
  <img class="wda-deco" src="/images/character/헷갈려요.webp" alt="" style="width:132px;right:0;top:-108px;opacity:.9;transform:rotate(3deg);">
</div>

### 1. Function (함수)

```jsx
function myRoom() {
  console.log(this); // ?
}
```

👉 **YES! 새로운 방 (New `this`)**

### 2. Object (객체)

```jsx
const myGagu = {
  name: this // ?
};
```

👉 **NO! 투명한 가구 (Global `this`)**

### 3. Block (if, for)

```jsx
if (true) {
  console.log(this); // ?
}
```

👉 **NO! 투명한 칸막이 (Global `this`)**

### 4. 🚨 오해 금지!

이것이 가장 중요한 핵심입니다.

**주의**

<div class="wda-callout wda-cw">
  'if', 'for' 문은 변수(let, const)의 방은 만들지만, this의 방은 만들지 못합니다!<br>
  오직 <strong>일반 함수(function)</strong>만이 this의 방을 만듭니다.
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  많은 분들이 <strong>"스코프(변수 유효범위)"</strong>와 <strong>"this 바인딩"</strong>을 혼동합니다.<br>
  · <strong>변수(let/const)</strong> — <code>if</code>, <code>for</code>, <code>function</code> 등 <strong>모든 중괄호 <code>{}</code></strong>가 새로운 방(스코프)이 됩니다.<br>
  · <strong>this</strong> — 오직 <strong><code>function</code> 중괄호</strong>만이 새로운 방을 만듭니다. 나머지는 그냥 <strong>투명 벽</strong>이나 다름없어서 바깥(Global)이 훤히 보입니다.<br><br>
  그래서 <code>if</code> 문 안에서 <code>this</code>를 쓰면 바깥의 <code>this</code>와 똑같고, 객체 안에서 <code>this</code>를 써도 바깥과 똑같은 것입니다. "오직 함수만이 <code>this</code>의 세계를 바꿀 수 있다"는 점을 꼭 기억하세요!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🌈 실습: this 바인딩 예측하기</h2>
  <img class="wda-deco" src="/images/decoration/반짝이 아이콘 (5).webp" alt="" style="width:50px;top:-11px;left:34%;opacity:.76;transform:rotate(-9deg);">
</div>

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/마스킹 테이프 (6).webp" alt="" style="width:110px;top:-8px;right:14%;opacity:.82;transform:rotate(6deg);">
</div>

### 1) Mission

1. 오른쪽 코드를 확인하세요.
2. 각 `console.log`가 출력할 값을 예측해보세요.

> 힌트: 호출 방식과 함수 종류(화살표 vs 일반)를 확인하세요!

### 2) 예제 코드

```jsx
const obj = {
  name: "Woowa",
  print: function() {
    console.log(this.name);
  },
  printArrow: () => {
    console.log(this.name);
  }
};

obj.print();       // 1. ?
obj.printArrow();  // 2. ?
```

### 3) 정답 및 해설

- **1. obj.print() ➡ "Woowa"** — `print`는 **일반 함수**입니다. 메서드로 호출(`obj.print`)되었으므로 `this`는 점 앞의 객체 **`obj`**가 됩니다.
- **2. obj.printArrow() ➡ undefined** — `printArrow`는 **화살표 함수**입니다. 화살표 함수는 자신이 정의된 곳의 상위 스코프(여기서는 전역, Global)의 `this`를 사용합니다. 전역에는 `name`이 없으므로 **undefined**가 출력됩니다.

**보충 설명**

<div class="wda-callout wda-ci">
  이 예제는 <strong>"메서드를 만들 때 어떤 함수를 써야 하는가?"</strong>에 대한 명확한 기준을 제시합니다.<br>
  · <strong>객체의 상태(this.name)를 사용해야 한다면?</strong> 👉 무조건 <strong>일반 함수</strong>(<code>function() {}</code> 또는 메서드 축약형 <code>print() {}</code>)를 쓰세요.<br>
  · <strong>객체의 상태와 상관없이 동작한다면?</strong> 👉 화살표 함수를 써도 되지만, 굳이 메서드로 쓸 이유는 없습니다.<br><br>
  화살표 함수는 <strong>"내 부모의 this를 훔쳐 쓰는 아이"</strong>라고 생각하면 쉽습니다. 객체(<code>obj</code>)는 스코프(방) 역할을 못 해주므로, 화살표 함수의 부모는 <code>obj</code>가 아니라 저 바깥의 전역 스코프(브라우저 일반 script라면 <code>Window</code>, module이라면 <code>undefined</code>)가 되는 것입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🔑 핵심 정리 (Summary)</h2>
  <img class="wda-deco" src="/images/character/코딩 팁.webp" alt="" style="width:134px;right:0;top:-110px;opacity:.9;transform:rotate(-3deg);">
</div>

### 1) 🕒 결정 시점

함수가 언제 만들어지고, 언제 불리는지가 중요합니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">일반 함수: 호출 시점 (동적)</div>
    <div class="wda-fcard-dsc">"누가 나를 불렀지?" (호출할 때 결정됨)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">화살표 함수: 정의 시점 (정적)</div>
    <div class="wda-fcard-dsc">"나는 태어날 때부터 정해졌어." (작성된 곳의 상위 스코프)</div>
  </div>
</div>

### 2) 4️⃣ 4가지 규칙

우리가 배운 4가지 바인딩 규칙입니다.

| **규칙** | **비유** | **적용 형태** |
| --- | --- | --- |
| **기본 (Default)** | 낙엽 🍂 | `Global` / `Undefined` (엄격 모드) |
| **암시적 (Implicit)** | 가격표 🏷️ | `obj.method()` (점 앞의 객체) |
| **명시적 (Explicit)** | 리모컨 🎮 | `call`, `apply`, `bind` (직접 지정) |
| **new (생성자)** | 공장 🏭 | `new Class()` (새로 생성된 인스턴스) |

### 3) ⚖️ 우선순위 & 실전

규칙이 충돌할 때의 승자와 실무 팁입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">우선순위</div>
    <div class="wda-fcard-dsc"><strong>new</strong> &gt; <strong>명시적</strong> &gt; <strong>암시적</strong> &gt; <strong>기본</strong></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Golden Tip</div>
    <div class="wda-fcard-dsc">· <strong>콜백</strong>은 <strong>화살표 함수</strong>로! (this 유지)<br>· <strong>메서드</strong>는 <strong>일반 함수</strong>로! (this 바인딩)</div>
  </div>
</div>

### 4) 🌟 (추가) 실전 코드 패턴

초보자 단계에서 this 문제를 판단할 때 유용한 기본 패턴입니다.

```jsx
const myApp = {
  name: 'Super App',

  // ✅ 1. 메서드는 일반 함수!
  // (그래야 myApp을 가리킴)
  run: function() {
    console.log('Start:', this.name);

    // ✅ 2. 콜백(타이머/이벤트)은 화살표 함수!
    // (그래야 상위 스코프인 myApp을 기억함)
    setTimeout(() => {
      console.log('Loading...', this.name);
    }, 1000);
  }
};

myApp.run();
```

**보충 설명**

<div class="wda-callout wda-ci">
  1. 코드를 볼 때 <strong>점(.) 앞</strong>을 확인하세요.<br>
  2. <strong>new</strong>가 있는지 확인하세요.<br>
  3. <strong>화살표 함수</strong>인지 확인하세요.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>📋 최종 핵심 요약표</h2>
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (7).webp" alt="" style="width:56px;top:-13px;right:10%;opacity:.76;transform:rotate(8deg);">
</div>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>this 정체</strong></td>
    <td>• 함수 호출 방식에 따라 결정되는 동적 바인딩<br>• 다른 언어(Java 등)와 달리 자바스크립트만 계속 바뀜</td>
  </tr>
  <tr>
    <td><strong>결정 시점</strong></td>
    <td>• 일반 함수: 호출 시점 (동적)<br>• 화살표 함수: 정의 시점 (정적, 상위 스코프의 this 사용)</td>
  </tr>
  <tr>
    <td><strong>4가지 규칙</strong></td>
    <td>• 기본(낙엽) → 암시적(가격표) → 명시적(리모컨) → new(공장)<br>• 오른쪽으로 갈수록 결속력이 강함</td>
  </tr>
  <tr>
    <td><strong>우선순위</strong></td>
    <td>• new &gt; 명시적(call/apply/bind) &gt; 암시적(obj.method()) &gt; 기본<br>• bind로 고정해도 new가 등장하면 결속이 풀림</td>
  </tr>
  <tr>
    <td><strong>화살표 함수</strong></td>
    <td>• 자신만의 this 없음(렉시컬 this)<br>• call/apply/bind 무시, new 사용 불가<br>• 콜백에서 this 손실을 해결하는 가장 깔끔한 방법</td>
  </tr>
  <tr>
    <td><strong>객체 메서드 규칙</strong></td>
    <td>• 객체 메서드는 일반 함수로 정의<br>• 콜백 함수는 화살표 함수로 정의</td>
  </tr>
  <tr>
    <td><strong>최종 암기 포인트</strong></td>
    <td>• 점(.) 앞을 확인한다<br>• new가 있는지 확인한다<br>• 화살표 함수인지 확인한다</td>
  </tr>
</table>
