---
title: "부록: 클래스 다루기"
status: "completed"
description: "생성자 함수의 진화형인 Class 문법의 기본 구조부터 상속(extends/super), 정적 메서드까지 클래스 다루기를 정리한다."
category: "JavaScript"
section: "ES6+ 심화 문법"
tags:
  - javascript
  - class
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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-compare-ttl{font-size:.94rem;font-weight:700;margin-bottom:8px}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:4px}
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
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:150px}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-deco{position:absolute;z-index:2;pointer-events:none}
@media (max-width:640px){
.wda-deco{width:34px !important}
}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-check-note{border:1px dashed rgba(128,128,128,.22);border-radius:8px;padding:14px 18px;background:rgba(128,128,128,.03);margin:.8rem 0 1.6rem;color:#2C2840}
.wda-check-note ul{list-style:none;margin:0;padding:0}
.wda-check-note li{position:relative;padding-left:1.4rem;margin:.4rem 0;font-size:.89rem;line-height:1.65}
.wda-check-note li::before{content:"✓";position:absolute;left:0;top:0;color:#6FB6C9;font-weight:700}
.wda-check-note strong{color:#1F1B2E;font-weight:700}
.wda-mistake-notes{display:flex;flex-direction:column;gap:8px;margin:.8rem 0 1.6rem}
.wda-mistake-note{border:1px solid #F6CFA8;border-radius:6px;padding:10px 14px;background:#FFF3E8}
.wda-mistake-wrong{font-size:.87rem;line-height:1.6;color:#C98245;text-decoration:line-through;text-decoration-color:#C98245;margin-bottom:4px}
.wda-mistake-right{font-size:.89rem;line-height:1.65;font-weight:600;color:#2C2840}
.wda-mistake-right strong{color:#1F1B2E;font-weight:700}
.wda-formula-board{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem;padding:14px;border-radius:12px;background:rgba(128,128,128,.025);border:1px dashed rgba(128,128,128,.22)}
.wda-formula-block{flex:1 1 160px;min-width:150px;border-radius:8px;padding:10px 13px;background:#FFF3F6;border:1px dashed #F0B4C2}
.wda-formula-block-ttl{font-size:.72rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#D86F8A;margin-bottom:6px}
.wda-formula-block-body{font-size:.87rem;line-height:1.7;font-weight:600;color:#2C2840}
.wda-formula-block-body code{background:transparent;padding:0;font-weight:700;font-family:'JetBrains Mono','Fira Code',monospace;color:#1F1B2E}
.wda-flip-deck{display:flex;flex-wrap:wrap;gap:12px;margin:.8rem 0 1.6rem}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>Class의 정체</strong> — Class가 생성자 함수를 감싼 Syntactic Sugar(문법적 설탕)임을 이해합니다.<br>
  • <strong>기본 문법</strong> — `class`, `constructor`, 메서드 작성 규칙을 익힙니다.<br>
  • <strong>상속과 정적 메서드</strong> — `extends`/`super`로 기능을 물려받고, `static`으로 유틸리티 기능을 만드는 법을 배웁니다.
</div>

---

## 1. 생성자 함수의 진화 (Evolution)

**📌 Syntactic Sugar (문법적 설탕)**

**기존의 복잡한 문법을 "달콤하고(보기 좋고) 쓰기 편하게" 바꿨다는 의미입니다.**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-label">구분</div>
    <div class="wda-compare-ttl">ES6 이전 (Legacy)</div>
    <strong>핵심 문법</strong>: <strong>생성자 함수</strong> (<code>function</code> + <code>prototype</code>)<br>
    <strong>구현 방식</strong>: 기존 문법으로 객체 지향을 <strong>억지로 흉내</strong> 냈습니다.<br>
    <strong>코드 특징</strong>: 구조가 복잡하고 직관적으로 이해하기 어려웠습니다.<br>
    <strong>작동 원리</strong>: 프로토타입을 직접 조작
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-label">구분</div>
    <div class="wda-compare-ttl">ES6 이후 (Modern)</div>
    <strong>핵심 문법</strong>: <strong>클래스</strong> (<code>Class</code> 문법)<br>
    <strong>구현 방식</strong>: <strong>직관적인 문법</strong>을 새롭게 제공합니다.<br>
    <strong>코드 특징</strong>: 개발자가 보기에 훨씬 <strong>깔끔하고 명확</strong>합니다.<br>
    <strong>작동 원리</strong>: <strong>내부적으로는 여전히 프로토타입 사용</strong>(Syntactic Sugar)
  </div>
</div>

**🆚 코드 비교 (Legacy vs Modern)**

똑같은 기능을 하는 코드가 어떻게 변했는지 비교해 봅니다.

**🔹 Legacy (생성자 함수)**

과거에는 함수와 프로토타입을 따로 정의해야 했습니다.

```js
function User(name) {
  // 객체의 속성(변수) 설정
  this.name = name;
}

// 객체의 기능(메서드)을 추가하려면 prototype을 직접 수정해야 했음
User.prototype.sayHi = function() {
  console.log('Hi!');
};
```

**🔹 Modern (Class)**

하나의 블록(`{}`) 안에서 속성과 기능을 모두 정의할 수 있어 보기에 편합니다.

```js
class User {
  // 생성자: 객체가 생성될 때 초기화하는 메서드 (약속된 이름)
  constructor(name) {
    this.name = name;
  }

  // 메서드: function 키워드 없이 바로 작성 가능
  sayHi() {
    console.log('Hi!');
  }
}
```

**🧠 중요 포인트**

<div class="wda-callout wda-ci">
  Class는 기존 프로토타입 기반 객체 생성 방식을 더 읽기 쉬운 문법으로 제공하는 형태입니다.
</div>

그래서 내부적으로는 여전히 prototype을 사용하지만, 생성자 함수와 완전히 똑같지는 않습니다.  
예를 들어 class는 `new` 없이 호출할 수 없고, class 내부 코드는 자동으로 strict mode가 적용되며, 선언 전에 사용할 수 없습니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Syntactic Sugar(문법적 설탕)란?</strong> — 프로그래밍 용어로, 기능은 똑같지만 <strong>사람이 읽고 쓰기 편하게 만든 단축 문법</strong>을 뜻합니다.<br>마치 쓴 약(복잡한 로직)에 설탕(쉬운 문법)을 발라 먹기 좋게 만든 것과 같다고 해서 붙여진 이름입니다.<br><br>
  <strong>`constructor`가 뭔가요?</strong> — 클래스로 객체(붕어빵)를 처음 만들 때 딱 한 번 실행되는 <strong>초기화 함수</strong>입니다. 여기서 <code>this.name = name</code> 처럼 기본 재료를 세팅합니다.
</div>

---

## 2. 기본 문법 (Basic Syntax)

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">class 선언 (이름 짓기)</div>
    <div class="wda-fcard-dsc">클래스(설계도)의 이름을 정의합니다.<br>• <code>class</code> 키워드 사용<br>• 문법상 필수는 아니지만, 관례적으로 <strong>파스칼 표기법(PascalCase)</strong>을 사용 (첫 글자를 대문자로)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">constructor (생성자)</div>
    <div class="wda-fcard-dsc"><code>new</code>로 인스턴스를 만들 때 <strong>자동으로 실행</strong>되는 초기화 메서드입니다.<br>• 이름은 무조건 <strong><code>constructor</code></strong>여야 함<br>• <code>new</code> 키워드 사용 시 자동 호출<br>• 상속받은 자식 클래스에서 constructor를 직접 작성했다면, <code>this</code> 사용 전 반드시 <code>super()</code> 먼저 호출</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">메서드 정의 (함수)</div>
    <div class="wda-fcard-dsc">클래스 안에 만드는 기능(함수)입니다.<br>• <code>function</code> 키워드 생략<br>• <strong>⚠️ 중요 : 메서드 사이에 콤마(<code>,</code>) 절대 금지!</strong></div>
  </div>
</div>

위 세 가지 요소는 따로 노는 개념이 아니라, **`class { ... }` 중괄호 안에서 위에서부터 순서대로 작성되는 하나의 흐름**이기 때문에 하나의 표로 묶었습니다.

**코드와 매칭해보기**

아래 코드는 실제 실행용이 아니라 구조를 보여주는 예시입니다.

```js
class Hero {          // 1. 선언
  constructor() {
    // 2. 생성자
  }

  attack() {
    // 3. 메서드
  }
}
```

**📝 예제 코드**

```js
class Hero {
  // 1. 생성자: new Hero() 할 때 자동 실행
  constructor(name, hp) {
    this.name = name;  // 이름 설정
    this.hp = hp;      // 체력 설정
    console.log('영웅 탄생!');
  }

  // 2. 메서드: function 키워드 생략
  attack() {
    console.log(this.name + '의 공격!');
  }

  // 3. 메서드: 콤마(,) 없이 바로 다음 메서드 작성
  heal(amount) {
    this.hp += amount; // 체력 증가
    console.log('체력 회복: ' + this.hp);
  }
}

// 사용법은 생성자 함수와 동일
const bat = new Hero('배트맨', 100);
bat.attack(); // "배트맨의 공격!"
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>파스칼 표기법(PascalCase)이 뭔가요?</strong> — 단어의 첫 글자를 대문자로 쓰는 방식입니다.<br>문법상 필수는 아니지만, 클래스 이름은 관례적으로 PascalCase를 사용합니다.<br>
  • <code>hero</code> (사용 가능하지만 비권장) ➡ 일반 변수 같아 보임<br>
  • <code>Hero</code> (권장) ➡ "아, 이건 객체를 만들기 위한 클래스구나!" 하고 바로 알아볼 수 있습니다.
</div>

<div class="wda-callout wda-cw">
  <strong>콤마(,) 실수 주의</strong> — 기존에 쓰던 객체(<code>{ key: value, ... }</code>)는 쉼표를 꼭 찍어야 했지만, 클래스(<code>class { ... }</code>) 안에서는 쉼표를 찍으면 <strong>에러(SyntaxError)</strong>가 발생합니다.
</div>

---

## 3. 상속(Inheritance)과 super

**`extends` 키워드로 기존 기능을 물려받아 확장할 수 있습니다.**

| **구분** | **개념** | **문법 (Syntax)** | **효과 및 특징** |
| --- | --- | --- | --- |
| **extends**(상속) | **"자식은 부모의 모든 것을 물려받습니다."** | `class 자식 extends 부모` | • 부모의 속성/메서드 자동 사용<br>• 코드를 다시 쓸 필요 없음 (재사용성) |
| **super()**(생성자 호출) | **"부모의 생성자를 실행합니다."** | `super()` | • **필수 조건**: 자식 `constructor`에서 `this`를 사용하기 전에 반드시 호출해야 함<br>• 자식 클래스에 `constructor`를 직접 작성하지 않으면 JavaScript가 기본 constructor를 자동으로 만들어 부모 constructor를 호출함 |
| **super.method()**(메서드 호출) | **"부모의 기능을 빌려 씁니다."** | `super.메서드명()` | • **기능 확장**: 부모의 기본 기능을 그대로 실행하면서, 뒤에 새로운 기능을 얹을 때 사용 |

**📝 예제 코드 (Legacy vs Modern)**

**🧪 부모 클래스 (기본 기능)**

동물이라면 누구나 가진 이름과 달리기 기능입니다.

```js
class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} 달린다!`);
  }
}
```

**🧪 자식 클래스 (기능 확장)**

`Animal`의 기능을 물려받은 `Rabbit`입니다.

```js
// extends: Animal의 모든 기능을 가져옴
class Rabbit extends Animal {

  // 메서드 오버라이딩 (덮어쓰기)
  run(speed) {
    super.run(speed);      // 1. 부모의 run() 먼저 실행 (기본 동작)
    console.log('깡충깡충!'); // 2. 토끼만의 동작 추가
  }

  // 새로운 메서드 추가
  hide() {
    console.log(`${this.name} 숨었다!`);
  }
}
```

**✅ 실행 결과**

```js
const bunny = new Rabbit('토끼');

bunny.run(5);
// 출력 1: "토끼 달린다!" (부모 기능: super.run)
// 출력 2: "깡충깡충!"   (자식 기능: 추가된 코드)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>오버라이딩(Overriding)이란?</strong> — 부모에게 물려받은 메서드(<code>run</code>)를 자식이 <strong>자신의 입맛에 맞게 재정의(덮어쓰기)</strong> 하는 것을 말합니다.<br>위 예제에서 토끼는 그냥 달리는 게 아니라 '깡충깡충' 뛰어야 하므로 <code>run</code>을 수정했습니다.<br><br>
  <strong>`super`가 왜 필요한가요?</strong> — 오버라이딩을 할 때, 부모가 해놓은 로직(속도 설정, 로그 출력 등)을 <strong>지우지 않고 재활용</strong>하기 위해서입니다.<br><code>super.run()</code>을 부르면 부모의 코드가 먼저 실행되고, 그 뒤에 내가 원하는 코드를 추가할 수 있어 효율적입니다.
</div>

---

## 4. 정적 메서드 (Static Method)

**인스턴스(객체)가 아닌 클래스 자체에 붙어있는 메서드입니다.**

**📌 특징 (Features)**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>static</code> 키워드</div>
    <div class="wda-fcard-dsc">메서드나 속성 이름 <strong>맨 앞</strong>에 붙여서 정의합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">호출 방법</div>
    <div class="wda-fcard-dsc"><code>new</code>로 만든 객체가 아니라, <strong>클래스 이름</strong>을 직접 불러서 사용합니다.<br>(예: <code>ClassName.method()</code>)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">제약 사항</div>
    <div class="wda-fcard-dsc"><strong>인스턴스(객체)</strong>에서는 호출할 수 없습니다.<br>(예: <code>obj.method()</code> ❌)</div>
  </div>
</div>

**💡 언제 쓰나요? (Use Cases)**

정적 메서드는 특정 인스턴스의 데이터가 아니라 **클래스 자체와 관련된 기능**을 만들 때 사용합니다.  
정적 메서드 안에서 `this`를 쓰면 인스턴스가 아니라 **클래스 자신**을 가리킬 수 있습니다.

| **사용처** | **설명 및 예시** |
| --- | --- |
| **유틸리티 함수** | 수학 계산, 날짜 변환 등 단순 기능 제공<br>(예: `Math.max()`, `Date.now()`) |
| **객체 생성 불필요** | 굳이 메모리를 써가며 객체를 만들 필요가 없을 때<br>(순수 기능만 필요할 때 효율적) |
| **팩토리 메서드** | 입력받은 데이터를 가공해서 객체를 대신 만들어주는 함수를 구현할 때 |

**📝 예제 코드**

```js
class MathUtil {
  // 정적 속성 (데이터)
  static PI = 3.14159;

  // 정적 메서드 (기능)
  static add(a, b) {
    return a + b;
  }
}

// 1. 객체 생성(new) 없이 바로 사용 가능
console.log(MathUtil.PI);          // 3.14159
console.log(MathUtil.add(10, 20)); // 30

// 2. ⚠️ 주의: 인스턴스(객체)로는 접근 불가
const m = new MathUtil();
// console.log(m.add(10, 20)); // Error: m.add is not a function
```

<div class="wda-callout wda-cw">
  <code>static PI = 3.14159</code> 같은 정적 필드 문법은 비교적 최신 문법입니다. 현대 브라우저와 최신 개발 환경에서는 사용할 수 있지만, 오래된 환경에서는 설정이 필요할 수 있습니다.
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>이미지 속 'Promise' 메모의 의미</strong> — 자바스크립트에서 비동기 처리를 할 때 쓰는 <code>Promise</code>도 정적 메서드를 많이 사용합니다.<br>
  • <code>new Promise(...)</code> : 인스턴스 생성<br>
  • <code>Promise.all(...)</code>, <code>Promise.resolve(...)</code> : <strong>정적 메서드</strong> (객체 생성 없이 유틸리티처럼 사용)<br><br>
  <strong>쉬운 비유</strong><br>
  • <strong>일반 메서드</strong> — <strong>"내 자동차"</strong>의 와이퍼 켜기 (내 차를 사야 쓸 수 있음)<br>
  • <strong>정적 메서드</strong> — <strong>"현대자동차 서비스센터"</strong> 전화하기 (차를 안 사도 전화는 걸 수 있음, 회사 자체의 기능)
</div>

---

## 5. ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>Class는 복잡한 프로토타입 문법을 감춘 <strong>Syntactic Sugar(문법적 설탕)</strong>이며, 내부적으로는 여전히 prototype을 사용합니다.</li>
    <li><code>constructor</code>는 <code>new</code>로 인스턴스를 만들 때 자동 실행되는 초기화 메서드이며, 클래스 메서드 사이에는 <strong>콤마(,)</strong>를 쓰지 않습니다.</li>
    <li><strong>extends</strong>로 상속하고, <strong>super()</strong>로 부모의 생성자를, <strong>super.method()</strong>로 부모의 메서드를 호출합니다.</li>
    <li><strong>static</strong> 키워드가 붙은 메서드/속성은 인스턴스가 아니라 <strong>클래스 자체</strong>에서 호출합니다 (<code>ClassName.method()</code>).</li>
    <li>Class는 let/const처럼 <strong>TDZ</strong>의 영향을 받아 선언 전에 사용할 수 없습니다 — 반드시 먼저 선언한 뒤 사용(<code>new</code>)해야 합니다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: Class는 생성자 함수와 완전히 동일하게 동작한다?</div>
    <div class="wda-mistake-right">정답: Class는 <strong>new 없이 호출할 수 없고</strong>, 내부 코드가 자동으로 strict mode이며, 선언 전 사용이 불가능하다는 점에서 생성자 함수와 다릅니다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 자식 클래스의 constructor에서 this를 먼저 써도 된다?</div>
    <div class="wda-mistake-right">정답: 자식 <code>constructor</code>에서 this를 사용하기 전에 반드시 <strong>super()를 먼저 호출</strong>해야 합니다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 클래스 메서드 사이에도 객체처럼 콤마(,)를 찍어야 한다?</div>
    <div class="wda-mistake-right">정답: 클래스 안에서 메서드 사이에 콤마를 찍으면 <strong>SyntaxError</strong>가 발생합니다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 정적(static) 메서드는 인스턴스에서도 호출할 수 있다?</div>
    <div class="wda-mistake-right">정답: 정적 메서드는 <strong>클래스 이름으로만</strong> 호출 가능하며, 인스턴스(new로 만든 객체)에서는 호출할 수 없습니다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 정체</div>
    <div class="wda-formula-block-body"><code>Class = 프로토타입의 Syntactic Sugar</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 상속</div>
    <div class="wda-formula-block-body"><code>extends + super()</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 정적 멤버</div>
    <div class="wda-formula-block-body"><code>static → ClassName.method()</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 4 · 사용 순서</div>
    <div class="wda-formula-block-body"><code>class는 선언 후 사용 (TDZ)</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">Syntactic Sugar란?</div>
    <div class="wda-flip-back">기능은 같지만 사람이 읽고 쓰기 편하게 만든 단축 문법이다. Class는 프로토타입 기반 객체 생성을 감싼 문법적 설탕이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">constructor는 언제 실행되나?</div>
    <div class="wda-flip-back">new로 인스턴스를 생성할 때 자동으로 한 번 실행되는 초기화 메서드다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">클래스 메서드 사이에 콤마를 찍으면?</div>
    <div class="wda-flip-back">SyntaxError가 발생한다. 객체 리터럴과 달리 클래스 메서드 사이에는 콤마를 쓰지 않는다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">extends와 super()의 역할은?</div>
    <div class="wda-flip-back">extends는 부모의 기능을 물려받게 하고, super()는 자식 constructor에서 부모의 constructor를 실행한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">super.method()는 언제 쓰나?</div>
    <div class="wda-flip-back">부모의 기본 기능을 그대로 실행하면서 자식만의 기능을 추가로 얹을 때(오버라이딩) 사용한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">static 메서드는 어떻게 호출하나?</div>
    <div class="wda-flip-back">new로 만든 인스턴스가 아니라 클래스 이름으로 직접 호출한다 (예: MathUtil.add()).</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">클래스를 선언 전에 사용하면?</div>
    <div class="wda-flip-back">let/const처럼 TDZ의 영향을 받아 ReferenceError가 발생한다.</div>
  </div>
</div>
