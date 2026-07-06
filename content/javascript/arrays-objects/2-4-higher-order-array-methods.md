---
title: "2-4 고차 함수로 배열 다루기"
status: "completed"
description: "map·filter·reduce 등 배열 고차 함수의 동작 원리와 메서드 체이닝, 불변성·순수 함수 개념까지 함수형 배열 처리를 정리한다."
category: "JavaScript"
section: "Arrays & Objects"
tags:
  - javascript
  - higher-order-function
  - array-methods
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
  <img class="wda-deco" src="/images/decoration/별 아이콘 (2).webp" alt="" style="width:64px;top:-18px;right:20px;opacity:.8;transform:rotate(8deg);">
  <strong>ƒ 고차 함수 (HOF)</strong> — 함수를 인자로 받거나 반환하는 함수형 프로그래밍의 기초를 다집니다.<br>
  <strong>배열 3대장</strong> — map, filter, reduce의 작동 원리와 활용법을 마스터합니다.<br>
  <strong>합성과 파이프라인</strong> — 메서드 체이닝으로 데이터를 우아하게 처리하는 법을 배웁니다.<br>
  <strong>불변성</strong> — 원본을 지키며 새로운 데이터를 만드는 안전한 패턴을 익힙니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. ƒ 고차 함수란?</h2>
  <img class="wda-deco" src="/images/character/번뜩.webp" alt="" style="width:128px;right:0;top:-104px;opacity:.9;transform:rotate(-3deg);">
</div>

### 1) 정의

**고차 함수 (Higher-Order Function)**

1. 함수를 인자로 받거나
2. 함수를 반환하는 함수

```jsx
// 함수를 인자로 받는 고차 함수
const numbers = [1, 2, 3];
numbers.map(x => x * 2); // 콜백 함수 전달

// 함수를 반환하는 고차 함수
function multiply(a) {
  return function(b) {
    return a * b;
  };
}
const double = multiply(2);
double(5); // 10
```

### 2) 왜 중요한가?

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⚙️</div>
    <div class="wda-fcard-ttl">제어 흐름의 추상화 (Abstraction)</div>
    <div class="wda-fcard-dsc">"어떻게(How)" 반복할지는 함수가 알아서 하고, 우리는 "무엇을(What)" 할지만 집중합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">👍</div>
    <div class="wda-fcard-ttl">가독성</div>
    <div class="wda-fcard-dsc">코드가 짧아지고 의도가 명확해짐</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🛡️</div>
    <div class="wda-fcard-ttl">부수효과 감소</div>
    <div class="wda-fcard-dsc">외부 상태 변경을 피하는 패턴 유도</div>
  </div>
</div>

| **구분** | **진행 과정** |
| --- | --- |
| **for문 (명령적)** | i = 0 초기화... → i &lt; length 체크... → i++ 증가... |
| **map (선언적)** | 그냥 변환해줘! (반복 과정은 숨겨짐) |

**보충 설명**

<div class="wda-callout wda-ci">
  "고차 함수"라는 이름이 어렵게 들릴 수 있지만, 사실 <strong>"함수를 다루는 함수"</strong>라고 생각하면 쉽습니다.<br><br>
  우리가 요리를 할 때:<br>
  1. <strong>일반 함수</strong>: "양파를 썬다" (구체적인 작업)<br>
  2. <strong>고차 함수</strong>: "요리사를 고용해서, 이 조리법(함수)대로 요리하게 시킨다" (작업을 관리)<br><br>
  <code>map</code>, <code>filter</code> 같은 녀석들이 바로 이 <strong>'관리자(고차 함수)'</strong>입니다.<br>
  우리가 <code>for</code> 문을 쓸 때는 "인덱스 0부터 시작해서, 하나씩 증가시키고, 길이보다 작을 때까지..." 하며 반복 과정을 일일이 지시해야 했습니다(명령적).<br>
  하지만 고차 함수를 쓰면, 반복하는 건 알아서 할 테니 <strong>"너는 곱하기 2만 해(x =&gt; x * 2)"</strong>라고 핵심 로직만 던져주면 됩니다(선언적). 이것이 바로 모던 자바스크립트가 추구하는 <strong>깔끔하고 안전한 코딩</strong>의 시작입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. 🔄 forEach - 순회하기</h2>
  <img class="wda-deco" src="/images/decoration/하트 아이콘 (2).webp" alt="" style="width:48px;top:-10px;right:8%;opacity:.76;transform:rotate(9deg);">
</div>

### 1) 기본 사용법

가장 기본적인 반복 작업입니다. 배열의 요소 개수만큼 함수를 실행합니다.

```jsx
const fruits = ['사과', '바나나', '오렌지'];

// forEach로 순회
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// 0: 사과
// 1: 바나나
// 2: 오렌지

// for문과 비교
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}: ${fruits[i]}`);
}
```

### 2) 특징과 주의점

단순 반복이 목적이라서 제약사항이 조금 있습니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">콜백 매개변수</div>
    <div class="wda-fcard-dsc"><code>forEach((element, index, array) => {})</code><br>(요소, 인덱스, 원본 배열 순서로 들어옵니다)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">반환값 없음!</div>
    <div class="wda-fcard-dsc"><code>forEach</code>는 항상 <code>undefined</code> 반환. 결과를 변수에 담을 수 없음</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">break/continue 불가!</div>
    <div class="wda-fcard-dsc">중간에 멈추려면 <code>for</code> 또는 <code>some</code>/<code>every</code> 사용</div>
  </div>
</div>

```jsx
// 이렇게 안 됨!
fruits.forEach(fruit => {
  if (fruit === '바나나') break; // Error
});
```

`forEach`가 실제로 무엇을 반환하는지 직접 찍어보면 확실히 알 수 있습니다.

```jsx
const result = fruits.forEach(fruit => console.log(fruit));
console.log(result); // undefined
```

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>"왜 for 문 대신 forEach를 쓰나요?"</strong><br>
  가장 큰 이유는 <strong>가독성(Readability)</strong>입니다. <code>for (let i = 0; i &lt; arr.length; i++)</code> 처럼 복잡한 인덱스 관리를 할 필요 없이, "이 배열의 <strong>각 요소(each)</strong>에 대해 이 일을 해줘!"라고 영어 문장처럼 읽히기 때문입니다.<br><br>
  하지만 <strong>주의할 점</strong>은 <code>forEach</code>는 <strong>"단방향 열차"</strong>와 같습니다. 한 번 출발하면 끝까지 가야 합니다(<code>break</code>로 멈출 수 없음). 중간에 멈춰야 하거나, 뭔가를 찾으면 바로 끝내야 하는 작업에는 적합하지 않습니다. 그럴 때는 <code>find</code>나 <code>some</code> 같은 다른 도구를 써야 합니다.
</div>

---

## 💻 실습 : forEach 맛보기

### 1) Mission

1. `foods` 배열을 순회하세요.
2. 각 음식을 콘솔에 출력하세요.

> Hint: 콜백 함수의 첫 번째 인자는 현재 요소(element)입니다.

### 2) 예제 코드

빈칸을 채워 완성해 보세요.

```jsx
const foods = ['Pizza', 'Burger', 'Sushi'];

// 정답 코드를 작성해보세요
foods.forEach(/* ??? */);
```

### 3) 정답

매개변수의 이름은 자유롭게 지을 수 있지만, 배열 이름의 단수형(food)으로 짓는 것이 관례입니다.

```jsx
const foods = ['Pizza', 'Burger', 'Sushi'];

// 1. 일반 함수 버전
foods.forEach(function(food) {
  console.log(food); // Pizza, Burger, Sushi 순서대로 출력
});

// 2. 화살표 함수 버전 (실무에서 주로 사용)
foods.forEach(food => console.log(food));
```

**보충 설명**

<div class="wda-callout wda-ci">
  <code>forEach</code>를 처음 쓸 때 가장 많이 하는 질문이 <strong>"저 <code>food</code>라는 단어는 어디서 튀어나왔나요?"</strong>입니다.<br>
  저건 여러분이 <strong>방금 지어준 별명(변수명)</strong>입니다. <code>forEach</code>가 배열의 요소를 하나씩 꺼내서 여러분이 만든 함수에게 던져주는데, 그때 "이걸 뭐라고 부를래?"라고 묻는 것이죠.<br>
  <code>item</code>, <code>x</code>, <code>menu</code> 뭐라고 지어도 상관없지만, <strong><code>foods</code> 리스트 안에 있으니까 <code>food</code>라고 부르는 것</strong>이 가장 읽기 좋습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. map - 변환하기</h2>
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (10).webp" alt="" style="width:58px;top:-14px;left:36%;opacity:.76;transform:rotate(-8deg);">
</div>

### 1) 기본 사용법

배열의 모든 요소를 변환하여 **새로운 배열**을 만듭니다.

```jsx
const numbers = [1, 2, 3, 4, 5];

// 각 요소를 2배로 변환
// map은 결과를 모아서 새로운 배열(doubled)을 뱉어냅니다!
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 원본은 그대로! (불변성 유지)
console.log(numbers); // [1, 2, 3, 4, 5]
```

**핵심 개념**

<div class="wda-callout wda-cy">
  콜백 매개변수: <code>map((element, index, array) => return newValue)</code><br>
  ✅ 원본 배열 변경 없이 새로운 배열 반환
</div>

### 2) 실전 활용

객체 배열에서 원하는 데이터만 뽑거나, 형태를 바꿀 때 강력합니다.

```jsx
const users = [
  { name: 'Kim', age: 25 },
  { name: 'Lee', age: 30 },
  { name: 'Park', age: 22 }
];

// 이름만 추출
// user 객체를 받아서 user.name 문자열로 바꿈
const names = users.map(user => user.name);
// ['Kim', 'Lee', 'Park']

// 객체 형태 변환
// 화면에 보여주기 좋은 형태로 가공
const formatted = users.map(user => ({
  displayName: `${user.name}(${user.age}세)`
}));
// [{ displayName: 'Kim(25세)' }, ...]
```

**핵심 개념**

<div class="wda-callout wda-cy">
  ⚛️ React에서 리스트 렌더링 시 필수!
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <code>map</code>은 자바스크립트에서 가장 사랑받는 메서드 1위입니다. <code>forEach</code>와의 결정적인 차이점은 <strong>"반환값(Return Value)"이 있다는 것</strong>입니다.<br><br>
  · <strong>forEach</strong> : 그냥 실행하고 끝남. (주로 <code>console.log</code> 찍거나 DOM 직접 수정할 때 사용)<br>
  · <strong>map</strong> : 실행 결과를 모아서 <strong>새로운 배열</strong>을 선물로 줌. (데이터를 가공할 때 사용)<br><br>
  특히 실전 활용 예제의 <strong>객체 형태 변환</strong> 부분에서 <code>user => ({ ... })</code> 처럼 소괄호 <code>()</code>로 중괄호 <code>{}</code>를 감싼 것을 주의 깊게 보세요. 화살표 함수에서 객체를 바로 반환할 때는 이렇게 감싸줘야 컴퓨터가 "이건 함수 본문이 아니라 객체야!"라고 알아듣습니다.
</div>

---

## 💻 실습 : map 맛보기

### 1) Mission

1. `prices` 배열의 각 요소를 변환하세요.
2. 각 가격 뒤에 "원"을 붙여 문자열로 만드세요.

> Hint: 템플릿 리터럴 `${price}원` 을 사용해보세요.

### 2) 예제 코드

빈칸을 채워 완성해 보세요.

```jsx
const prices = [1000, 2000, 3000];

// 각 가격 뒤에 "원"을 붙여보세요
const tagged = prices.map(/* ??? */);
```

### 3) 정답

숫자였던 가격이 "원"이 붙은 문자열로 변신해서 **새로운 배열**에 담깁니다.

```jsx
const prices = [1000, 2000, 3000];

// 1. 화살표 함수 버전 (권장)
const tagged = prices.map(price => `${price}원`);

// 2. 결과 확인
console.log(tagged); 
// ["1000원", "2000원", "3000원"]
```

**보충 설명**

<div class="wda-callout wda-ci">
  원본인 <code>prices</code> 안에는 계산 가능한 <strong>숫자(Number)</strong>가 들어있었지만, <code>map</code>을 통과하고 나온 <code>tagged</code> 안에는 화면에 보여주기 좋은 <strong>문자열(String)</strong>이 들어있습니다.<br><br>
  실무에서 쇼핑몰 가격표를 만들 때 정확히 이렇게 씁니다.<br>
  1. 서버에서는 숫자(<code>1000</code>)를 줍니다. (계산해야 하니까)<br>
  2. 프론트엔드에서는 <code>map</code>을 돌려 <code>"1,000원"</code>으로 예쁘게 포장해서 화면에 뿌립니다.<br><br>
  이처럼 <code>map</code>은 데이터를 <strong>"요리(가공)"</strong>해서 내놓을 때 쓰는 최고의 도구입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. filter - 필터링하기</h2>
  <img class="wda-deco" src="/images/decoration/책갈피 아이콘 (1).webp" alt="" style="width:50px;top:-11px;right:8px;opacity:.74;transform:rotate(6deg);">
</div>

### 1) 기본 사용법

조건에 맞는 요소만 걸러내어 **새로운 배열**을 만듭니다.

```jsx
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수만 필터링
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// 5보다 큰 수만
const big = numbers.filter(num => num > 5);
console.log(big); // [6, 7, 8, 9, 10]
```

**핵심 개념**

<div class="wda-callout wda-cy">
  콜백 매개변수: <code>filter((element, index, array) => return boolean)</code><br>
  콜백이 true를 반환하는 요소만 새 배열에 포함됩니다
</div>

### 2) 실전 활용

쇼핑몰 필터 기능처럼, 데이터 목록에서 원하는 조건의 항목만 남길 때 유용합니다.

```jsx
const products = [
  { name: '노트북', price: 1200000, inStock: true },
  { name: '마우스', price: 50000, inStock: false },
  { name: '키보드', price: 150000, inStock: true },
  { name: '모니터', price: 400000, inStock: true }
];

// 재고 있는 상품만
const available = products.filter(p => p.inStock);

// 30만원 이하 상품
const affordable = products.filter(p => p.price <= 300000);

// 복합 조건
const result = products.filter(
  p => p.inStock && p.price <= 500000
);
```

**보충 설명**

<div class="wda-callout wda-ci">
  <code>filter</code>는 이름 그대로 <strong>'거름망(Che)'</strong> 역할을 합니다. 배열의 요소들을 하나씩 꺼내서 거름망(콜백 함수) 위에 올려놓습니다.<br>
  · 조건이 <strong>참(True)</strong>이면? 👉 통과! (새 배열에 담김)<br>
  · 조건이 <strong>거짓(False)</strong>이면? 👉 탈락! (버려짐)<br><br>
가장 중요한 점은 <code>map</code>과 <code>filter</code>는 <strong>원본 배열 자체를 직접 변경하지 않고 새로운 배열을 반환한다</strong>는 것입니다. 다만 배열 안의 요소가 객체라면 객체 참조는 공유될 수 있으므로, 콜백 안에서 객체 내부 값을 직접 수정하는 코드는 주의해야 합니다. 데이터 삭제 기능을 구현할 때 "삭제할 녀석을 뺀 나머지만 필터링해서 남기는 방식"으로 아주 많이 사용합니다.
</div>

---

## 💻 실습 : filter 맛보기

### 1) Mission

1. `items` 배열에서 비싼 물건을 찾으세요.
2. 가격(price)이 3000원 이상인 것만 남기세요.

> Hint: 조건식이 true 인 요소만 남습니다.

### 2) 예제 코드

빈칸을 채워 완성해 보세요.

```jsx
const items = [
  { name: 'Gum', price: 500 },
  { name: 'Book', price: 12000 },
  { name: 'Milk', price: 3500 }
];

// 3000원 이상인 물건만 골라내세요
const expensive = items.filter(/* ??? */);
```

### 3) 정답

배열 안에 **객체**가 들어있으므로, 점(`.`)을 찍어 가격(`price`)에 접근해야 합니다.

```jsx
// item 하나씩 꺼내서 가격(item.price)을 검사
// 조건(3000 이상)이 참(True)인 녀석들만 남음
const expensive = items.filter(item => item.price >= 3000);

console.log(expensive);
// [
//   { name: 'Book', price: 12000 },
//   { name: 'Milk', price: 3500 }
// ]
// 껌(Gum)은 500원이라서 조건 탈락(False) -> 삭제됨
```

**보충 설명**

<div class="wda-callout wda-ci">
  배열의 요소들이 오디션을 보러 하나씩 들어옵니다. 여러분(콜백 함수)은 팻말을 듭니다.<br>
  · <code>item.price >= 3000</code> 조건이 맞으면? 👉 <strong>O (True)</strong>: 합격! (새 배열에 들어감)<br>
  · 조건이 틀리면? 👉 <strong>X (False)</strong>: 불합격! (집으로 돌아감)<br><br>
  그래서 <code>filter</code>를 거치고 나면, <strong>개수가 줄어들거나 같을 수</strong>는 있어도, 절대 원래보다 늘어나지는 않습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. reduce - 축소하기</h2>
  <img class="wda-deco" src="/images/decoration/말풍선 아이콘 (1).webp" alt="" style="width:56px;top:-12px;right:30%;opacity:.76;transform:rotate(-7deg);">
</div>

### 1) 기본 사용법

배열을 **하나의 값**으로 축소(Reduce)합니다.

```jsx
const numbers = [1, 2, 3, 4, 5];

// 합계 구하기
const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0); // 초기값 0

console.log(sum); // 15

// 한 줄로 쓰는 버전
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum2); // 15
```

**핵심 개념**

<div class="wda-callout wda-cy">
  콜백 매개변수: <code>reduce((acc, cur, index, array) => return newAcc, initial)</code><br>
  <code>reduce((누산기, 현재값) => 계산, 초기값)</code><br>
  배열을 하나의 값으로 축소
</div>

### 2) 동작 과정

눈덩이를 굴리는 것처럼 값이 누적됩니다.

`[1, 2, 3, 4, 5].reduce((acc, cur) => acc + cur, 0)`

| **단계** | **acc (누산기)** | **cur (현재값)** | **반환값 (새 누산기)** |
| --- | --- | --- | --- |
| 1 | 0 | 1 | 1 |
| 2 | 1 | 2 | 3 |
| 3 | 3 | 3 | 6 |
| 4 | 6 | 4 | 10 |
| 5 | 10 | 5 | **15** |

**주의**

<div class="wda-callout wda-cw">
  초기값을 꼭 넣으세요! 안 넣으면 빈 배열에서 에러
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  reduce는 배열 메서드 중 가장 어렵지만, 가장 강력한(Ultimate) 도구입니다. map, filter도 사실 내부적으로는 reduce로 만들 수 있을 만큼 활용도가 무궁무진합니다.<br><br>
  가장 쉬운 비유는 <strong>"RPG 게임의 경험치 바"</strong> 또는 <strong>"저금통"</strong>입니다.<br>
  · <strong>acc (Accumulator)</strong>: 저금통 (지금까지 모은 돈)<br>
  · <strong>cur (Current)</strong>: 내 손에 들린 동전 (지금 넣을 돈)<br>
  · <strong>initial (0)</strong>: 빈 저금통으로 시작<br><br>
  동전(cur)을 하나씩 집어서 저금통(acc)에 넣고(<code>acc + cur</code>), 다음 동전을 집을 때는 저금통이 조금 더 무거워져 있겠죠? 이 과정을 끝까지 반복해서 최종적으로 <strong>'꽉 찬 저금통(하나의 값)'</strong>을 만드는 것이 <code>reduce</code>의 핵심입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. reduce 다양한 활용</h2>
  <img class="wda-deco" src="/images/decoration/느낌표 아이콘 (4).webp" alt="" style="width:46px;top:-9px;left:8%;opacity:.76;transform:rotate(8deg);">
</div>

### 1) 집계 계산

단순 합계뿐만 아니라 최대값, 평균 등 다양한 계산이 가능합니다.

```jsx
const numbers = [10, 20, 30, 40, 50];

// 최대값
const max = numbers.reduce(
  (acc, cur) => cur > acc ? cur : acc,
  numbers[0]
); // 50

// 평균
const avg = numbers.reduce(
  (acc, cur, idx, arr) =>
    idx === arr.length - 1
    ? (acc + cur) / arr.length
    : acc + cur,
  0
); // 30
```

### 2) 데이터 그룹핑

실무에서 가장 많이 쓰는 패턴입니다. 데이터를 특정 기준(팀, 날짜 등)으로 묶어줍니다.

```jsx
const people = [
  { name: 'Kim', team: 'A' },
  { name: 'Lee', team: 'B' },
  { name: 'Park', team: 'A' },
  { name: 'Choi', team: 'B' }
];

// 팀별로 그룹핑
const byTeam = people.reduce((acc, person) => {
  const team = person.team;
  if (!acc[team]) acc[team] = [];
  acc[team].push(person);
  return acc;
}, {});

// { A: [{name:'Kim'...}, {name:'Park'...}],
//   B: [{name:'Lee'...}, {name:'Choi'...}] }
```

### 3) 핵심 조언

**실무 팁**

<div class="wda-callout wda-cs">
  reduce는 만능! map, filter도 reduce로 구현 가능. 하지만 가독성을 위해 적절한 메서드 선택하세요.
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>"데이터 그룹핑"</strong> 예제는 꼭 복습해두세요! 서버에서 데이터를 받아올 때 <code>[게시물1, 게시물2, 게시물3...]</code> 처럼 쭉 나열된 배열을 주는데, 프론트엔드에서는 이걸 <strong>"날짜별로 묶어서"</strong> 보여주거나 <strong>"카테고리별로 묶어서"</strong> 보여줘야 할 때가 정말 많습니다.<br><br>
  이때 <code>reduce</code>를 사용해서 <strong>초기값 <code>{}</code> (빈 객체)</strong> 안에 차곡차곡 정리해 넣는 기술은 중급 개발자로 가는 필수 관문입니다.<br><br>
  하지만 마지막 조언처럼, 너무 복잡한 로직을 억지로 <code>reduce</code> 하나에 구겨 넣으면 나중에 코드를 읽는 동료(혹은 미래의 나)가 힘들어할 수 있습니다. 단순 변환은 <code>map</code>, 필터링은 <code>filter</code>를 쓰는 것이 가독성 면에서는 훨씬 좋습니다.
</div>

---

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/화살표 아이콘 (2).webp" alt="" style="width:40px;top:6px;left:28%;opacity:.72;transform:rotate(10deg);">
</div>

## 💻 실습 : reduce 맛보기

### 1) Mission

1. `scores`의 모든 점수를 더하세요.
2. 초기값(`0`)을 반드시 설정하세요.

> Hint: acc는 누적값, cur는 현재 점수입니다.

### 2) 예제 코드

빈칸을 채워 완성해 보세요.

```jsx
const scores = [10, 20, 30, 40];

// 모든 점수를 더하세요 (초기값 0)
const total = scores.reduce(/* ??? */);
```

### 3) 정답

가장 전형적인 합계 구하기 패턴입니다.

```jsx
const total = scores.reduce((acc, cur) => {
  return acc + cur; // 누적값 + 현재값
}, 0); // 초기값 0

// 화살표 함수 단축형
// const total = scores.reduce((acc, cur) => acc + cur, 0);

console.log(total); // 100
```

**보충 설명**

<div class="wda-callout wda-ci">
  코드가 어떻게 돌아가는지 눈에 보이시나요?<br>
  1. <strong>초기값 0</strong>으로 시작합니다. (빈 저금통)<br>
  2. <strong>10(cur)</strong>이 들어와서 합쳐집니다. (<code>0 + 10 = 10</code>) 👉 <code>acc</code>는 이제 10<br>
  3. <strong>20(cur)</strong>이 들어와서 합쳐집니다. (<code>10 + 20 = 30</code>) 👉 <code>acc</code>는 이제 30<br>
  ...이렇게 끝까지 굴러가서 결국 <strong>100</strong>이라는 하나의 숫자가 됩니다.
</div>

**🔹 "초기값을 꼭 써야 하나요?"**

<div class="wda-callout wda-cw">
  초기값(<code>0</code>)을 생략하면 배열의 첫 번째 요소(<code>10</code>)가 자동으로 초기값이 됩니다. 하지만 습관적으로 <strong>초기값을 명시하는 것</strong>이 좋습니다. 만약 <code>scores</code>가 <strong>빈 배열(<code>[]</code>)</strong>이라면, 초기값이 없을 때 에러가 터지기 때문입니다! 안전하게 코딩하려면 초기값을 꼭 넣어주세요.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. find / findIndex - 찾기</h2>
  <img class="wda-deco" src="/images/decoration/스탬프 아이콘 (1).webp" alt="" style="width:60px;top:-13px;right:8px;opacity:.76;transform:rotate(6deg);">
</div>

### 1) find - 요소 찾기

조건에 맞는 **첫 번째 요소**를 찾아 반환합니다.

```jsx
const users = [
  { id: 1, name: 'Kim' },
  { id: 2, name: 'Lee' },
  { id: 3, name: 'Park' }
];

// 조건에 맞는 첫 번째 요소
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Lee' }

// 못 찾으면 undefined
const notFound = users.find(u => u.id === 999);
console.log(notFound); // undefined
```

**핵심 개념**

<div class="wda-callout wda-cy">
  콜백 매개변수: <code>find((element, index, array) => return boolean)</code>
</div>

### 2) findIndex - 인덱스 찾기

요소 자체가 아니라 그 요소가 있는 **위치(Index)**를 찾습니다.

```jsx
const numbers = [10, 20, 30, 40, 50];

// 조건에 맞는 첫 번째 인덱스
const idx = numbers.findIndex(n => n > 25);
console.log(idx); // 2 (30의 인덱스)

// 못 찾으면 -1
const notFound = numbers.findIndex(n => n > 100);
console.log(notFound); // -1
```

### 3) find vs filter 차이

가장 많이 헷갈리는 두 메서드의 차이점입니다.

| **메서드** | **반환값** |
| --- | --- |
| **find** | 첫 번째 요소 하나만 반환 (또는 undefined) |
| **filter** | 조건에 맞는 모든 요소를 배열로 반환 |

**보충 설명**

<div class="wda-callout wda-ci">
  <code>find</code>와 <code>filter</code>의 가장 큰 차이는 <strong>"멈추느냐, 끝까지 가느냐"</strong>입니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">filter (채망)</div>
    <div class="wda-fcard-dsc">바구니에 담긴 콩을 전부 쏟아부어서 걸러냅니다. 100개 중 100개를 다 확인해야 끝납니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">find (숨바꼭질)</div>
    <div class="wda-fcard-dsc">술래가 친구를 찾습니다. "찾았다!" 하는 순간 게임은 끝납니다. (효율적)</div>
  </div>
</div>

그래서 **"ID로 회원 찾기"**처럼 결과가 유일한 경우에는 `find`를 쓰는 것이 성능상 훨씬 유리합니다. 만약 찾는 요소가 없으면 **`find`는 `undefined`를, `findIndex`는 `-1`을 반환**한다는 점도 꼭 기억해 주세요! (`indexOf`와 규칙이 같습니다)

---

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/말풍선 아이콘 (5).webp" alt="" style="width:54px;top:-6px;right:22%;opacity:.76;transform:rotate(-8deg);">
</div>

## 💻 실습 : find 맛보기

### 1) Mission

1. `users` 배열에서 특정 유저를 찾으세요.
2. `id`가 3인 유저 객체를 반환하세요.

> Hint: find는 요소를 찾으면 그 즉시 반복을 멈춥니다.

### 2) 예제 코드

빈칸을 채워 완성해 보세요.

```jsx
const users = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' }
];

// id가 3인 유저를 찾으세요
const found = users.find(/* ??? */);
```

### 3) 정답

찾으려는 조건(`id === 3`)을 함수로 만들어서 전달하면 됩니다.

```jsx
// user를 하나씩 검사해서 id가 3인지 확인
// 찾으면 그 객체를 반환하고 종료
const found = users.find(user => user.id === 3);

console.log(found); 
// { id: 3, name: 'C' }
```

**보충 설명**

<div class="wda-callout wda-ci">
  배열에 데이터가 100만 개가 있어도, 운 좋게 3번째에서 <code>id</code>가 3인 유저를 찾았다면 <code>find</code>는 거기서 일을 멈추고 퇴근합니다. (나머지 99만여 개는 쳐다보지도 않죠!)<br><br>
  반면 <code>filter</code>를 썼다면? 100만 개를 끝까지 다 뒤져서 확인했을 겁니다. 그래서 <strong>단 하나의 결과만 필요할 때는 <code>filter</code>보다 <code>find</code>가 더 적절</strong>합니다. <code>find</code>는 조건을 만족하는 요소를 찾으면 즉시 순회를 멈출 수 있기 때문입니다. 다만 배열 크기가 작다면 성능 차이는 크지 않을 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. some / every - 조건 검사</h2>
  <img class="wda-deco" src="/images/decoration/체크 아이콘 (3).webp" alt="" style="width:44px;top:-9px;right:32%;opacity:.76;transform:rotate(-6deg);">
</div>

### 1) some - 하나라도?

배열의 요소 중 **하나라도** 조건을 만족하면 `true`를 반환합니다.

```jsx
const numbers = [1, 3, 5, 7, 8, 9];

// 하나라도 짝수가 있나?
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true (8이 있음)

// 하나라도 100 이상?
const hasBig = numbers.some(n => n >= 100);
console.log(hasBig); // false
```

**핵심 개념**

<div class="wda-callout wda-cy">
  하나라도 조건을 만족하면 true. 찾으면 바로 멈춤 (단락 평가)
</div>

### 2) every - 모두 다?

배열의 **모든 요소**가 조건을 만족해야 `true`를 반환합니다.

```jsx
const scores = [85, 90, 78, 92, 88];

// 모두 70점 이상?
const allPass = scores.every(s => s >= 70);
console.log(allPass); // true

// 모두 90점 이상?
const allExcellent = scores.every(s => s >= 90);
console.log(allExcellent); // false (78, 88)
```

**핵심 개념**

<div class="wda-callout wda-cy">
  모두 조건을 만족해야 true. 하나라도 실패하면 바로 멈춤
</div>

### 3) 핵심 요약

<div class="wda-callout wda-cy">
  💡 some은 OR 조건, every는 AND 조건으로 생각하세요!
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  이 두 메서드는 결과값으로 <strong>불리언(true/false)</strong>만 줍니다. 그래서 <code>if</code> 문의 조건식 안에서 정말 많이 쓰입니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">some 사용 예시</div>
    <div class="wda-fcard-dsc">회원가입 시 "이미 존재하는 아이디인가?" 체크할 때. (하나라도 겹치면 가입 불가)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">every 사용 예시</div>
    <div class="wda-fcard-dsc">"필수 약관에 모두 동의했는가?" 체크할 때. (하나라도 빠지면 다음 버튼 비활성화)</div>
  </div>
</div>

또한 둘 다 **'단락 평가(Short-circuit)'**를 하기 때문에 성능이 좋습니다. `some`은 정답을 찾는 순간 뒤도 안 돌아보고 `true`를 외치며 끝나고, `every`는 오답을 발견하는 순간 바로 `false`를 던지고 끝납니다. 불필요한 반복을 하지 않는 똑똑한 녀석들이죠.

---

## 💻 실습 : some / every 맛보기

### 1) Mission

1. 비밀번호 유효성을 검사하세요.
2. `every`를 사용해 모두 4자 이상인지 확인하세요.

> Hint: some은 하나라도, every는 전부 다 만족해야 합니다.

### 2) 예제 코드

빈칸을 채워 완성해 보세요.

```jsx
const pwList = ['1234', 'abcd', 'ok'];

// 비밀번호가 모두 4자리 이상인가요?
const isSafe = pwList.every(/* ??? */);
```

### 3) 정답

문자열의 길이는 `.length` 속성으로 알 수 있습니다.

```jsx
const pwList = ['1234', 'abcd', 'ok'];

// 비밀번호(pw) 하나씩 꺼내서 길이가 4 이상인지 검사
// 모든 요소가 통과해야 true, 하나라도 실패하면 false
const isSafe = pwList.every(pw => pw.length >= 4);

console.log(isSafe); 
// false
// ('ok'의 길이가 2글자라서 탈락! ❌)
```

**보충 설명**

<div class="wda-callout wda-ci">
  이 실습은 <strong>보안 검사 로직</strong>을 짤 때 아주 유용한 패턴입니다.<br><br>
  · <strong><code>every</code>를 쓴 이유</strong> — "비밀번호 리스트 중 <strong>단 하나라도</strong> 보안에 취약하면 안 되기 때문"입니다. (깐깐한 검사관)<br>
  · 만약 <strong><code>some(pw => pw.length >= 4)</code>를 사용했다면?</strong> 하나라도 4자 이상인 비밀번호가 있으면 <code>true</code>가 됩니다. 하지만 우리가 원하는 검사는 "모든 비밀번호가 4자 이상인가?"이므로 <code>every</code>가 맞습니다.<br><br>
  그래서 <strong>유효성 검사(Validation)</strong>처럼 "모든 조건이 완벽해야 한다"는 상황에서는 반드시 <code>every</code>를 사용해야 합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>9. sort - 정렬하기</h2>
  <img class="wda-deco" src="/images/character/실수 주의.webp" alt="" style="width:110px;right:0;top:-96px;opacity:.9;transform:rotate(3deg);">
</div>

### 1) 숫자 정렬의 함정

`sort`를 그냥 쓰면 숫자를 문자로 취급해서 정렬하는 대참사가 일어납니다.

```jsx
const numbers = [1, 10, 2, 20, 3];

// 기본 sort는 문자열로 비교!
numbers.sort();
console.log(numbers); // [1, 10, 2, 20, 3]
// 숫자 크기가 아니라 문자열 순서로 비교되기 때문에 10이 2보다 앞에 옵니다.

// 숫자 정렬은 비교 함수 필수!
numbers.sort((a, b) => a - b); // 오름차순
console.log(numbers); // [1, 2, 3, 10, 20]

numbers.sort((a, b) => b - a); // 내림차순
console.log(numbers); // [20, 10, 3, 2, 1]
```

**주의**

<div class="wda-callout wda-cw">
  ⚠️ sort()는 원본을 변경합니다!
</div>

### 2) 객체 배열 정렬

실무에서는 객체 안의 특정 값(나이, 이름 등)을 기준으로 정렬합니다.

```jsx
const users = [
  { name: 'Kim', age: 30 },
  { name: 'Lee', age: 25 },
  { name: 'Park', age: 35 }
];

// 나이순 오름차순
users.sort((a, b) => a.age - b.age);
// Lee(25), Kim(30), Park(35)

// 이름순 (문자열)
users.sort((a, b) => a.name.localeCompare(b.name));
// Kim, Lee, Park

// 원본 유지하려면 복사 후 정렬
const sorted = [...users].sort((a, b) => a.age - b.age);
```

**보충 설명**

<div class="wda-callout wda-ci">
  <code>sort</code>는 <strong>가장 위험하면서도 중요한</strong> 메서드입니다. 두 가지 이유 때문입니다.<br><br>
  1. <strong><code>sort()</code>의 기본 정렬은 값을 문자열로 바꾼 뒤 문자열 순서로 비교</strong>합니다. 그래서 숫자도 숫자 크기가 아니라 문자열처럼 비교되어 예상과 다른 결과가 나올 수 있습니다(<code>"1"</code>이 <code>"2"</code>보다 앞에 오니까요). 숫자를 정렬할 땐 반드시 <code>(a, b) => a - b</code> 공식을 외워서 써야 합니다. <code>a - b</code>가 음수면 <code>a</code>가 앞으로, 양수면 <code>b</code>가 앞으로 가는 원리입니다.<br>
  2. <strong>원본을 파괴(Mutation)</strong>합니다. <code>map</code>, <code>filter</code>는 원본은 놔두고 새 복사본을 주지만, <code>sort</code>는 원본 배열의 순서를 직접 바꿔버립니다. React 상태 배열을 <code>sort()</code>로 직접 변경하면 기존 배열 참조가 그대로 유지되어 상태 관리가 꼬일 수 있습니다. 그래서 React에서는 <code>[...arr].sort(...)</code>처럼 <strong>복사본을 만든 뒤 정렬</strong>하는 패턴을 사용합니다.
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  최신 JavaScript에서는 원본을 바꾸지 않는 <code>toSorted()</code>도 사용할 수 있습니다. 다만 브라우저 지원 환경을 확인해야 하므로, 초보자 단계에서는 <code>[...arr].sort(...)</code> 패턴을 먼저 익히면 됩니다.
</div>

```jsx
const sorted = users.toSorted((a, b) => a.age - b.age);
```

---

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/하트 아이콘 (3).webp" alt="" style="width:48px;top:4px;left:50%;opacity:.74;transform:rotate(6deg);">
</div>

## 💻 실습 : sort 맛보기

### 1) Mission

1. 숫자 배열을 정렬하세요.
2. 오름차순 (작은 수 -> 큰 수)으로 정렬하세요.

> Hint: a - b가 음수면 a가 앞으로 옵니다.

### 2) 예제 코드

빈칸을 채워 완성해 보세요.

```jsx
const nums = [10, 5, 20, 1];

// 원본을 변경합니다! 오름차순으로 정렬하세요
nums.sort(/* ??? */);
```

### 3) 정답

숫자를 비교할 때는 반드시 **비교 함수**를 넣어줘야 합니다.

```jsx
const nums = [10, 5, 20, 1];

// a - b 결과가 음수면 a를 앞으로 보냄 (오름차순)
// 10 - 5 = 5 (양수) 👉 5가 앞으로 (5, 10)
// 5 - 20 = -15 (음수) 👉 5가 그대로 (5, 20)
nums.sort((a, b) => a - b);

console.log(nums); 
// [1, 5, 10, 20]
```

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>"왜 <code>a - b</code>를 하면 오름차순이 되나요?"</strong><br>
  이 공식은 수학적인 약속입니다. <code>sort</code> 함수는 두 숫자 <code>a</code>와 <code>b</code>를 비교할 때, 우리가 돌려주는 <strong>계산 결과(반환값)</strong>만 보고 자리를 바꿀지 말지 결정합니다.<br><br>
  · <strong>결과가 음수(-)</strong>: "<code>a</code>가 더 작구나? 앞으로 보내!" (유지/이동)<br>
  · <strong>결과가 양수(+)</strong>: "<code>a</code>가 더 크구나? 뒤로 보내!" (자리 바꿈)<br>
  · <strong>결과가 0</strong>: "똑같네."<br><br>
  반대로 <strong>내림차순(큰 수 -> 작은 수)</strong>을 하고 싶다면? 순서만 뒤집어서 <code>b - a</code>를 하면 됩니다. 아주 간단하지만 강력한 공식이니 꼭 외워두세요!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>10. 메서드 체이닝</h2>
  <img class="wda-deco" src="/images/decoration/별 아이콘 (7).webp" alt="" style="width:62px;top:-15px;left:34%;opacity:.78;transform:rotate(-9deg);">
</div>

### 1) 체이닝이란?

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (4).webp" alt="" style="width:60px;top:2px;left:38%;opacity:.76;transform:rotate(-9deg);">
</div>

메서드들이 꼬리에 꼬리를 물고 이어지는 패턴입니다.

```jsx
const products = [
  { name: '노트북', price: 1200000, inStock: true },
  { name: '마우스', price: 50000, inStock: false },
  { name: '키보드', price: 150000, inStock: true },
  { name: '모니터', price: 400000, inStock: true }
];

// 재고 있는 상품의 가격 합계
const total = products
  .filter(p => p.inStock)   // 재고 있는 것만
  .map(p => p.price)        // 가격만 추출
  .reduce((a, b) => a + b, 0); // 합계

console.log(total); // 1750000
```

### 2) 데이터 파이프라인

복잡한 데이터 처리를 단계별로 명확하게 표현할 수 있습니다.

```jsx
// 복잡한 데이터 처리
const result = users
  .filter(u => u.age >= 18)     // 성인만
  .filter(u => u.isActive)      // 활성 사용자
  .map(u => ({                  // 형태 변환
    name: u.name,
    email: u.email
  }))
  .sort((a, b) =>               // 이름순 정렬
    a.name.localeCompare(b.name)
  );
```

**핵심 개념**

<div class="wda-callout wda-cy">
  ✅ 각 단계가 명확하게 구분됨. 데이터 흐름을 따라가기 쉬움
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>"점(.)만 찍으면 다 연결되나요?"</strong><br>
  메서드 체이닝의 핵심 비밀은 <strong>"반환값(Return Value)"</strong>에 있습니다.<br>
  1. <code>filter</code>가 실행되고 나서 결과물로 <strong>배열(Array)</strong>을 뱉어냅니다.<br>
  2. 그 배열이 바로 <code>map</code>의 입력으로 들어갑니다.<br>
  3. <code>map</code>도 실행 후 <strong>배열(Array)</strong>을 뱉어냅니다.<br>
  4. 그 배열을 <code>reduce</code>나 <code>sort</code>가 받습니다.<br><br>
  마치 공장의 컨베이어 벨트(파이프라인)와 같습니다. 단, 주의할 점은 <code>reduce</code>처럼 <strong>배열이 아닌 값(숫자, 문자 등)</strong>을 반환하는 메서드가 나오면, 그 뒤로는 더 이상 배열 메서드(<code>map</code>, <code>filter</code> 등)를 체이닝 할 수 없다는 점입니다. 끊어지는 지점을 잘 파악해야 합니다!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. 🧊 불변성과 함수형 프로그래밍</h2>
  <img class="wda-deco" src="/images/decoration/핀 아이콘 (2).webp" alt="" style="width:52px;top:-11px;right:8px;opacity:.76;transform:rotate(7deg);">
</div>

### 1) 불변성 (Immutability)

원본 데이터를 직접 고치는 것이 아니라, 새로운 복사본을 만드는 것이 핵심입니다.

```jsx
// 나쁜 예: 원본 변경
const arr = [1, 2, 3];
arr.push(4);    // 원본 변경!
arr[0] = 100;   // 원본 변경!

// 좋은 예: 새 배열 생성
const arr = [1, 2, 3];
const newArr = [...arr, 4];   // 새 배열
const updated = arr.map((x, i) =>
  i === 0 ? 100 : x
);            // 새 배열
```

**핵심 개념**

<div class="wda-callout wda-cy">
  ✅ 원본을 변경하지 않고 새로운 데이터를 생성
</div>

### 2) 순수 함수 (Pure Function)

입력이 같으면 결과도 항상 같아야 하며, 외부에 영향을 주지 않아야 합니다.

```jsx
// 순수 함수: 같은 입력 -> 같은 출력
function double(x) {
  return x * 2;
}

// 비순수 함수: 외부 상태에 의존
let multiplier = 2;
function multiply(x) {
  return x * multiplier; // 외부 변수!
}

// 비순수 함수: 부수 효과
function addToCart(item) {
  cart.push(item); // 외부 상태 변경!
  sendAnalytics(); // 외부 효과!
}
```

**핵심 개념**

<div class="wda-callout wda-cy">
  순수 함수는 예측 가능하고 테스트하기 쉬움
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>"왜 이렇게 귀찮게 원본을 지켜야 하나요?"</strong><br>
  이유는 <strong>"추적"</strong> 때문입니다. <code>arr.push(4)</code>를 하면 배열의 내용물은 바뀌지만, 배열 통(메모리 주소) 자체는 그대로입니다. 그래서 리액트(React) 같은 라이브러리는 <strong>"어? 통이 그대로네? 내용물 안 바뀌었나 보다."</strong> 하고 화면 갱신을 안 해버립니다.<br>
  반면에 <code>[...arr, 4]</code>로 새 배열을 만들면 <strong>"어? 통이 바뀌었네? 화면 다시 그려야겠다!"</strong> 하고 바로 알아챕니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">순수 함수 = 자판기</div>
    <div class="wda-fcard-dsc">500원을 넣으면 무조건 콜라가 나옴. (믿을 수 있음)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">비순수 함수 = 고장난 자판기</div>
    <div class="wda-fcard-dsc">500원을 넣었는데, 날씨가 덥다고 사이다가 나오거나, 돈을 먹어버림. (외부 상태 의존, 부수 효과)</div>
  </div>
</div>

프로그래밍에서 **예측 가능성**은 곧 **버그 없는 코드**를 의미합니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💡 핵심 정리</h2>
  <img class="wda-deco" src="/images/character/추천해요.webp" alt="" style="width:120px;right:0;top:-100px;opacity:.9;transform:rotate(-3deg);">
</div>

### 1) 메서드 분류

용도에 따라 크게 3가지 그룹으로 나뉩니다.

<table class="wda-summary-table">
  <tr>
    <th>대분류</th>
    <th>메서드</th>
    <th>핵심 역할</th>
    <th>반환값 (Result)</th>
  </tr>
  <tr>
    <td rowspan="2"><strong>순회 / 변환</strong></td>
    <td><strong>forEach</strong></td>
    <td>단순 순회 (반복 작업)</td>
    <td><strong>X</strong> (없음/undefined)</td>
  </tr>
  <tr>
    <td><strong>map</strong></td>
    <td>요소 변환 (매핑)</td>
    <td><strong>새 배열</strong> (New Array)</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>필터 / 축소</strong></td>
    <td><strong>filter</strong></td>
    <td>조건 필터링 (거름망)</td>
    <td><strong>새 배열</strong> (New Array)</td>
  </tr>
  <tr>
    <td><strong>reduce</strong></td>
    <td>값 축소 (누적 계산)</td>
    <td><strong>하나의 값</strong> (Any)</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>찾기 / 검사</strong></td>
    <td><strong>find</strong></td>
    <td>첫 번째 요소 찾기</td>
    <td><strong>요소 1개</strong> (값)</td>
  </tr>
  <tr>
    <td><strong>some / every</strong></td>
    <td>조건 만족 여부 검사</td>
    <td><strong>Boolean</strong> (true/false)</td>
  </tr>
</table>

### 2) 반환값 비교

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/메모지 아이콘 (3).webp" alt="" style="width:56px;top:-8px;right:6%;opacity:.76;transform:rotate(7deg);">
</div>

메서드 체이닝을 할 때 가장 중요한 기준입니다.

<table class="wda-summary-table">
  <tr>
    <th>메서드</th>
    <th>반환값</th>
  </tr>
  <tr>
    <td><strong>forEach</strong></td>
    <td>Undefined</td>
  </tr>
  <tr>
    <td><strong>map, filter</strong></td>
    <td>새 배열</td>
  </tr>
  <tr>
    <td><strong>reduce</strong></td>
    <td>누적 결과값</td>
  </tr>
  <tr>
    <td><strong>find</strong></td>
    <td>요소 or undefined</td>
  </tr>
  <tr>
    <td><strong>some, every</strong></td>
    <td>Boolean</td>
  </tr>
</table>

### 3) 원본 변경 여부

리액트(React) 등에서 불변성을 지킬 때 반드시 확인해야 합니다.

<table class="wda-summary-table">
  <tr>
    <th>메서드</th>
    <th>원본 변경</th>
  </tr>
  <tr>
    <td><strong>map, filter, reduce</strong></td>
    <td><strong>X (불변)</strong></td>
  </tr>
  <tr>
    <td><strong>find, some, every</strong></td>
    <td><strong>X (불변)</strong></td>
  </tr>
  <tr>
    <td><strong>sort</strong></td>
    <td><strong>O (변경!)</strong></td>
  </tr>
  <tr>
    <td><strong>push, pop</strong></td>
    <td><strong>O (변경!)</strong></td>
  </tr>
</table>

### 4) 🚀 (추가) 실전 선택 가이드 (Cheat Sheet)

코드를 짤 때 "어떤 메서드를 써야 하지?" 고민된다면 이 질문을 던져보세요.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">"배열을 돌면서 개수는 그대로 유지하고 내용물만 바꾸고 싶나?"</div>
      <div class="wda-sdsc">👉 <strong>map</strong> (ex: 가격에 '원' 붙이기)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">"조건에 안 맞는 건 버리고 싶은가?"</div>
      <div class="wda-sdsc">👉 <strong>filter</strong> (ex: 품절 상품 제외)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">"딱 하나만 찾으면 되나?"</div>
      <div class="wda-sdsc">👉 <strong>find</strong> (ex: 내 정보 찾기)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">"배열을 다 합쳐서 숫자나 객체 하나로 만들고 싶은가?"</div>
      <div class="wda-sdsc">👉 <strong>reduce</strong> (ex: 총 금액 계산)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">5</div>
    <div class="wda-sbody">
      <div class="wda-sttl">"그냥 반복만 하면 되나? (화면 출력 X, 데이터 저장 X)"</div>
      <div class="wda-sdsc">👉 <strong>forEach</strong> (ex: 로그 찍기)</div>
    </div>
  </div>
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>반환값(Return Value)</strong> 표를 머릿속에 꼭 넣어두세요.<br>
  · <code>forEach</code> 뒤에 점(<code>.</code>)을 찍고 다른 메서드를 붙이면 에러가 납니다. (반환값이 <code>undefined</code>니까요!)<br>
  · 반면 <code>map</code>, <code>filter</code> 뒤에는 계속 점을 찍어 연결(Chaining)할 수 있습니다. (새로운 배열이 나오니까요!)<br><br>
  그리고 <strong><code>sort</code>는 원본을 망가뜨리는 악동</strong>이라는 점을 절대 잊지 마세요.
</div>
