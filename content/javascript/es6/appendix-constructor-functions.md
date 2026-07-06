---
title: "부록: 생성자 함수의 모든 것 (The Guide to Constructor Functions)"
status: "completed"
description: "new 연산자의 4단계 동작 원리, 생성자 호출과 일반 호출의 차이, return 함정을 실전 예제와 함께 정리한다."
category: "JavaScript"
section: "ES6+ 심화 문법"
tags:
  - javascript
  - constructor
  - this
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
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
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

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. 생성자 함수란? (The Factory)</h2>
  <img class="wda-deco" src="/images/decoration/별 아이콘 (4).webp" alt="" style="width:70px;top:-18px;right:6%;opacity:.78;transform:rotate(9deg);">
</div>

### 1) 왜 필요한가요?

객체를 하나만 만들 때는 `{ ... }` (리터럴)을 쓰면 됩니다. 하지만 **똑같은 구조의 객체가 100개 필요하다면?** 일일이 다 쓰는 건 너무 힘들겠죠?

### 2) 붕어빵 틀 (Mold)

생성자 함수는 객체를 찍어내는 **틀(설계도)**입니다. 재료(매개변수)만 넣으면 완성품(객체)이 나옵니다.

### 3) 코드 비교

일반적인 방식과 생성자 함수를 사용한 방식의 차이점을 확인해 보세요.

```jsx
// 1. 일반 객체 (힘듦)
const user1 = { name: 'Kim', age: 20 };
const user2 = { name: 'Lee', age: 22 };
const user3 = { name: 'Park', age: 25 };
// ... 언제 다 만들지? (코드가 중복되고 유지보수가 힘듦)

// 2. 생성자 함수 (편함)
function User(name, age) {
  // this = {}; (보이지 않지만 빈 객체가 만들어짐)
  this.name = name; // 만들어진 객체에 이름표를 붙임
  this.age = age;   // 만들어진 객체에 나이를 적음
  // return this; (보이지 않지만 완성된 객체를 반환함)
}

const u1 = new User('Kim', 20);  // 붕어빵 1호
const u2 = new User('Lee', 22);  // 붕어빵 2호
const u3 = new User('Park', 25); // 붕어빵 3호
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>여기서 가장 중요한 핵심 키워드는 <strong><code>new</code></strong>입니다.</li>
    <li>함수 이름 앞글자를 <strong>대문자</strong>(<code>User</code>)로 쓰는 것은 개발자들 사이의 <strong>약속</strong>("이건 생성자 함수니까 그냥 호출하지 마!")입니다.</li>
    <li>실제로 마법을 부리는 건 <code>new</code> 연산자인데, <code>new</code>를 붙여서 함수를 실행하면 자바스크립트 엔진은 <strong>"아, 그냥 함수 실행이 아니라 객체를 하나 만들어 달라는 거구나?"</strong>라고 알아듣고, 내부적으로 빈 껍데기(객체)를 만들어서 <code>this</code>에 할당해 줍니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. new 연산자의 4단계 마법</h2>
  <img class="wda-deco" src="/images/decoration/반짝이 아이콘 (4).webp" alt="" style="width:52px;top:-11px;left:8%;opacity:.76;transform:rotate(-8deg);">
</div>

### 1) 동작 과정

`new`를 붙여서 함수를 실행하면, 자바스크립트 내부에선 **4가지 일**이 순서대로 일어납니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">빈 객체 생성</div>
      <div class="wda-sdsc">아무것도 없는 빈 깡통 객체 <code>{}</code>를 하나 만듭니다. 이때 새 객체는 생성자 함수의 <code>prototype</code>과 연결됩니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">this 바인딩</div>
      <div class="wda-sdsc">방금 만든 빈 객체를 <code>this</code>라고 부르기로 합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">함수 본문 실행</div>
      <div class="wda-sdsc"><code>this.name = name</code> 처럼 빈 객체에 속성을 채워 넣습니다. (쓰기 작업)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">객체 반환</div>
      <div class="wda-sdsc">함수에 <code>return</code>이 없어도, 꽉 찬 <code>this</code>가 자동으로 반환됩니다.</div>
    </div>
  </div>
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이 과정은 마치 <strong>"새 집으로 이사 가는 과정"</strong>과 비슷합니다.</li>
    <li><strong>건축 (<code>{}</code>)</strong>: 텅 빈 새 집을 하나 짓습니다.</li>
    <li><strong>명의 등록 (<code>this</code>)</strong>: "이 집은 이제 내 집(<code>this</code>)이야!"라고 선언합니다.</li>
    <li><strong>인테리어 (<code>this.name = ...</code>)</strong>: 가구를 들여놓고 색칠을 합니다.</li>
    <li><strong>입주 (<code>return</code>)</strong>: 완성된 집의 열쇠를 건네받습니다.</li>
    <li>개발자가 코드에 <code>return</code>을 적지 않아도 자바스크립트가 알아서 <strong>"자, 여기 완성된 객체입니다!"</strong> 하고 갖다 바치는 것이 바로 <code>new</code> 연산자의 핵심 마법입니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. 일반 호출 vs 생성자 호출</h2>
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (5).webp" alt="" style="width:60px;top:-13px;right:34%;opacity:.76;transform:rotate(10deg);">
</div>

### 1) 차이점 요약

똑같은 함수라도 `new`를 쓰냐 안 쓰냐에 따라 하늘과 땅 차이입니다.

### 2) ❌ 일반 호출 (그냥 실행)

`new` 없이 함수를 실행하면 단순히 코드를 읽어 내려갈 뿐, 객체는 만들어지지 않습니다.

```jsx
const u = User('Kim', 20);
```

- **빈 객체 생성?** `안 함`
- **this?** 브라우저의 일반 script, non-strict 모드에서는 `window (전역)` 😱 (strict mode나 module 환경에서는 `undefined`)
- **반환값?** `undefined` (return 문이 없으니까)

**경고**

<div class="wda-callout wda-cw">
  <ul>
    <li>🔥 대참사 발생 (일반 script, non-strict 모드): <code>window.name = 'Kim'</code>이 되어버림. 전역 변수가 오염됨!</li>
    <li>⚠️ strict mode나 <code>type="module"</code> 환경에서는 <code>this</code>가 <code>undefined</code>라서 <code>this.name = ...</code>에서 <strong>TypeError</strong>가 발생합니다.</li>
  </ul>
</div>

### 3) ✅ 생성자 호출 (new 사용)

`new`를 붙이면 자바스크립트가 객체 생성 모드로 전환됩니다.

```jsx
const u = new User('Kim', 20);
```

- **빈 객체 생성?** `OK!`
- **this?** `새로 만든 빈 객체`
- **반환값?** `완성된 객체` (User 인스턴스)

**정상 동작**

<div class="wda-callout wda-cs">
  <ul>
    <li>✨ 안전하고 깔끔함: 내 의도대로 새로운 객체가 예쁘게 만들어져서 반환됨.</li>
  </ul>
</div>

**보충 설명**

이 차이는 **"주문"**과 **"혼잣말"**의 차이입니다.

| **구분** | **🍕 new 사용 (생성자 호출)** | **🗣️ 일반 호출 (그냥 실행)** |
| --- | --- | --- |
| **상황 비유** | 피자 가게에 가서 <strong>"피자 만들어 주세요(new)"</strong>라고 주문함 | 허공에 대고 <strong>"치즈... 토마토..."</strong>라고 재료 이름만 외침 |
| **결과물** | 따끈한 **피자 (객체)**가 나옴 | 피자는 안 나옴, 목만 아픔 (**undefined**) |
| **영향** | 나만의 피자를 받음 (안전한 객체 생성) | 엄한 사람(**전역 객체 Window**)에게 피해를 줌 (재료를 쏟아부음) |

실수로 `new`를 빼먹으면, 일반 script의 non-strict 모드에서는 `this.name`이 전역 변수 `name`을 덮어써 버리는 심각한 버그가 생기고, strict mode나 module 환경에서는 `this`가 `undefined`라서 즉시 TypeError가 발생하니 꼭 주의해야 합니다!

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. 함정: return을 쓴다면?</h2>
  <img class="wda-deco" src="/images/decoration/느낌표 아이콘 (3).webp" alt="" style="width:58px;top:-14px;left:36%;opacity:.76;transform:rotate(-9deg);">
</div>

### 1) 기본 원칙

생성자 함수는 원래 `return`을 안 쓰는 게 원칙이지만, 만약 쓴다면?

### 2) 케이스별 동작 확인

`return` 뒤에 무엇이 오느냐에 따라 결과가 완전히 달라집니다.

**1. 원시값 반환 (return 100)** — 숫자, 문자열 같은 원시값을 리턴하면 **무시됩니다.**

```jsx
function Robot() {
  this.name = 'Robot';
  return 100; // 무시! (숫자는 객체가 아니므로 무시됨)
}

const bot = new Robot();
console.log(bot);
// { name: 'Robot' }
// this가 반환됨 (원래 만들려던 객체가 정상적으로 나옴)
```

**2. 객체 반환 (return {})** — 객체를 리턴하면 그 객체가 **진짜 반환됩니다.** (this 버려짐!)

```jsx
function Robot() {
  this.name = 'Robot';
  return { name: 'Fake' }; // 객체를 강제로 리턴함
}

const bot = new Robot();
console.log(bot);
// { name: 'Fake' }
// 공장 생산품 바꿔치기 당함! (열심히 만든 this는 버려짐)
```

**💡 여기서 "객체"의 범위**

<div class="wda-callout wda-ci">
  <ul>
    <li>여기서 말하는 "객체"에는 일반 객체(<code>{}</code>)뿐 아니라 배열(<code>[]</code>)이나 함수처럼 <strong>참조 타입</strong>이면 모두 포함됩니다. 이런 값을 반환하면 <code>this</code> 대신 그 값이 반환됩니다.</li>
    <li><code>null</code>은 <code>typeof</code> 결과가 <code>"object"</code>처럼 보이지만, 생성자 반환 규칙에서는 객체로 취급되지 않아 원래의 <code>this</code>가 그대로 반환됩니다.</li>
  </ul>
</div>

### 3) 결론

생성자 함수 내부에서는 보통 return을 쓰지 않습니다. 자바스크립트가 알아서 this를 리턴해주니까요!

**보충 설명 — 공장장과 고객의 대화**

`return` 뒤에 무엇이 오느냐에 따라 고객(`new`)의 반응이 완전히 달라집니다.

| **반환 타입** | **상황 비유 (👨‍🔧 공장장 vs 👤 고객)** | **실제 결과** |
| --- | --- | --- |
| **원시값 반환**(`return 100`) | 👨‍🔧: "자, 여기 **숫자 100** 가져가!" (이상한 물건)<br>👤: "뭐야 이거? 그냥 **원래 주문한 거(<code>this</code>)** 가져갈게요." (**무시**) | **원시값 무시됨**<br>원래 만들려던 <code>this</code> 객체가 정상 반환됨 |
| **객체 반환**(`return {}`) | 👨‍🔧: "자, 원래 거 말고 **이게 더 좋은 겁니다(새 객체)**."<br>👤: "어? 그런가요? 그럼 **그걸로 주세요.**" (**수령**) | **객체로 바꿔치기 됨**<br>열심히 만든 <code>this</code>는 버려지고, 새 객체가 반환됨 |

<div class="wda-callout wda-ci">
  <ul>
    <li>이 표를 보면 알 수 있듯이, 생성자 함수에서 <code>return</code>을 쓰는 것은 <strong>도박</strong>에 가깝습니다.</li>
    <li>원시값을 쓰면 <strong>무시</strong>당하고, 객체를 쓰면 기껏 만든 인스턴스(<code>this</code>)가 <strong>증발</strong>해 버립니다.</li>
    <li>그래서 생성자 함수를 만들 때는 <strong>"return 문은 아예 쓰지 않는다"</strong>는 것을 철칙으로 삼는 것이 가장 안전합니다. (자바스크립트가 알아서 <code>this</code>를 잘 포장해서 내보내 주니까 믿고 맡기세요!)</li>
  </ul>
</div>

---

## 🌈 실전 예제 1: 쇼핑몰 장바구니

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/하트 아이콘 (5).webp" alt="" style="width:56px;right:6%;top:-2px;opacity:.76;transform:rotate(8deg);">
</div>

### 1) 미션

생성자 함수로 여러 개의 상품을 표준화해서 만들어봅시다.

### 2) Product 틀 (생성자)

상품을 찍어낼 설계도(함수)를 먼저 만듭니다.

```jsx
function Product(name, price) {
  // 1. 빈 객체가 this로 옴 (new가 만든 빈 주머니)
  this.name = name;   // 상품 이름을 저장
  this.price = price; // 상품 가격을 저장
  this.sale = false;  // 할인 여부는 기본적으로 false로 통일
  // 2. this 반환 (완성된 상품 객체를 자동으로 내보냄)
}
```

### 3) 상품 찍어내기

설계도를 이용해 실제 상품(객체)들을 대량 생산합니다.

```jsx
// new 키워드로 사과 상품 생성
const apple = new Product('사과', 1000);
// new 키워드로 바나나 상품 생성
const banana = new Product('바나나', 2000);

console.log(apple);
// Product { name: '사과', price: 1000, sale: false }
// (규격에 맞는 사과 객체 완성!)

console.log(banana);
// Product { name: '바나나', price: 2000, sale: false }
// (규격에 맞는 바나나 객체 완성!)
```

**핵심**

<div class="wda-callout wda-cs">
  <ul>
    <li>"규격화된 객체(제품)"를 대량 생산할 때 생성자 함수가 빛을 발합니다!</li>
  </ul>
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이 예제에서 가장 눈여겨볼 점은 <strong><code>this.sale = false</code></strong>입니다.</li>
    <li><code>apple</code>과 <code>banana</code>를 만들 때 <code>sale</code> 값을 따로 넣어주지 않았지만, 생성자 함수가 알아서 <strong>"모든 상품의 기본 할인 상태는 안 함(false)"</strong>으로 설정해 주었습니다.</li>
    <li>만약 객체 리터럴(<code>{...}</code>)로 일일이 만들었다면, 실수로 <code>apple</code>에는 <code>sale</code> 속성을 빼먹거나, <code>banana</code>에는 <code>isSale</code>이라고 이름을 다르게 짓는 실수가 발생할 수 있습니다.</li>
    <li>생성자 함수는 이런 실수를 막아주고 <strong>데이터의 규격(Standard)</strong>을 확실하게 잡아줍니다.</li>
  </ul>
</div>

---

## 🌈 실전 예제 2: 게임 캐릭터

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/책갈피 아이콘 (5).webp" alt="" style="width:60px;left:42%;top:-4px;opacity:.74;transform:rotate(-9deg);">
</div>

### 1) 테스트 목표

캐릭터를 만들 때 `new`를 빼먹으면 어떤 일이 생기는지 확인해볼까요?

### 2) 캐릭터 설계도

직업(`job`)과 체력(`hp`)을 설정하고 공격 기능을 가진 생성자 함수입니다.

```jsx
function Character(job, hp) {
  this.job = job; // 입력받은 직업을 객체에 저장
  this.hp = hp;   // 입력받은 체력을 객체에 저장

  // 메서드 추가 (공격 기능)
  this.attack = function() {
    console.log(this.job + '가 공격합니다!');
  };
}
```

### 3) 호출 결과 비교

`new` 키워드 유무에 따른 극명한 차이를 확인하세요.

**✅ 정상 호출 (new O)**

```jsx
const warrior = new Character('전사', 100);
// -> warrior는 '전사' 객체가 됨.
```

**❌ 실수 호출 (new X)**

```jsx
const mage = Character('마법사', 50);
// 일반 script의 non-strict 모드에서는 mage가 undefined가 되고,
// this가 window를 가리켜 전역 오염이 발생할 수 있습니다.
// strict mode나 module 환경에서는 this가 undefined라 TypeError가 발생합니다.
```

**보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이 실수는 마치 <strong>"새 공책(new)"</strong>을 펴지 않고, 모두가 보는 <strong>"칠판(Window)"</strong>에 낙서를 하는 것과 같습니다.</li>
    <li><strong>new 사용</strong> — 나만의 새 공책(<code>this</code>)을 받아서 거기에 '전사'라고 적습니다. → 안전함</li>
    <li><strong>new 미사용</strong> — 공책을 안 주니까, 그냥 눈앞에 보이는 칠판(전역 객체)에 '마법사'라고 적어버립니다. → 다른 사람의 필기까지 망칠 수 있음(전역 오염)</li>
    <li>그래서 최신 자바스크립트에서는 이런 실수를 방지하기 위해 <code>class</code> 문법이나 <code>strict mode</code>('use strict')를 사용하기도 합니다. (엄격 모드에서는 칠판에 낙서하려 하면 에러를 띄워주거든요!)</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🔑 핵심 정리</h2>
  <img class="wda-deco" src="/images/character/체크 완료.webp" alt="" style="width:120px;right:0;top:-96px;opacity:.88;">
</div>

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/스탬프 아이콘 (5).webp" alt="" style="width:56px;left:4%;top:-8px;opacity:.76;transform:rotate(9deg);">
</div>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>생성자 함수</strong></td>
    <td>• 똑같은 구조의 객체를 여러 개 찍어낼 때 쓰는 "틀(설계도)"입니다.<br>• 함수 이름은 관례적으로 대문자로 시작합니다 (예: <code>User</code>).</td>
  </tr>
  <tr>
    <td><strong>new의 4단계</strong></td>
    <td>• ① 빈 객체 생성 → ② this 바인딩 → ③ 함수 본문 실행(속성 채우기) → ④ this 자동 반환 순서로 동작합니다.</td>
  </tr>
  <tr>
    <td><strong>new 유무 차이</strong></td>
    <td>• 일반 script, non-strict 모드에서 <code>new</code> 없이 호출하면 <code>this</code>가 전역 객체(window)가 되어 전역 변수를 오염시키고 반환값은 <code>undefined</code>입니다.<br>• strict mode나 module 환경에서는 <code>this</code>가 <code>undefined</code>가 되어 TypeError가 발생합니다.<br>• <code>new</code>와 함께 호출해야 안전하게 새 객체가 만들어져 반환됩니다.</td>
  </tr>
  <tr>
    <td><strong>주의사항</strong></td>
    <td>• 생성자 함수 안에서 원시값을 <code>return</code>하면 무시되고, 객체를 <code>return</code>하면 <code>this</code>가 버려지고 그 객체가 대신 반환됩니다.<br>• 그래서 생성자 함수에서는 <code>return</code>을 아예 쓰지 않는 것이 원칙입니다.</td>
  </tr>
  <tr>
    <td><strong>최종 암기 포인트</strong></td>
    <td>• "생성자 함수는 반드시 <strong><code>new</code></strong>와 함께 호출한다" — 이것만 지켜도 전역 오염 버그를 막을 수 있습니다.<br>• 규격화된 객체를 대량으로 만들어야 할 때 생성자 함수를 떠올리세요.</td>
  </tr>
</table>
