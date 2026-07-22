---
title: "부록: 고차 함수로 배열 다루기 - 실습 12문"
status: "completed"
description: "map·filter·reduce·forEach·find·some·every·sort를 활용한 실무형 배열 실습 12문제를 풀이와 함께 정리한다."
category: "JavaScript"
section: "Arrays & Objects"
tags:
  - javascript
  - arrays
  - practice
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
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px}
.wda-compare-ttl{font-size:.94rem;font-weight:700;margin-bottom:8px}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:160px}
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
</style>

📎 <strong>부록(Appendix)</strong> — map·filter·reduce·forEach·find·some/every·sort를 실무형 문제 12개로 반복 연습하는 실습 전용 부록입니다.

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 1 : Map (1) - 데이터 변환하기</h2>
</div>

**🎯 Mission**

DB에서 가져온 `user` 정보를 프론트엔드에서 보여줄 **UI 전용 모델**로 변환하세요.

- `fullName` : firstName + lastName
- `isAdult` : age >= 18

> Tip: 화살표 함수에서 객체를 바로 리턴할 땐 (`{}`) 괄호를 잊지 마세요!

**📝 예제 코드**

빈칸을 채워 완성해 보세요.

```jsx
const users = [
  { firstName: 'Gildong', lastName: 'Hong', age: 25 },
  { firstName: 'Chulsoo', lastName: 'Kim', age: 15 },
  { firstName: 'Younghee', lastName: 'Lee', age: 30 }
];

// 여기에 코드를 작성하세요
const uiModels = users.map(/* ... */);

console.log(uiModels);
```

**📝 정답**

템플릿 리터럴로 이름을 합치고, 비교 연산자로 성인 여부를 판단합니다. 가장 중요한 건 **객체를 반환할 때 소괄호 `()`로 감싸는 것**입니다.

```jsx
const uiModels = users.map(user => ({
  // 1. 이름 합치기 (띄어쓰기 포함)
  fullName: `${user.firstName} ${user.lastName}`,
  
  // 2. 성인 여부 (true/false)
  isAdult: user.age >= 18
}));

console.log(uiModels);
/*
[
  { fullName: 'Gildong Hong', isAdult: true },
  { fullName: 'Chulsoo Kim', isAdult: false },
  { fullName: 'Younghee Lee', isAdult: true }
]
*/
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 실습에는 자바스크립트 초보자가 가장 많이 틀리는 <strong>함정</strong>이 숨어있습니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">함정</div>
    <div class="wda-fcard-dsc"><code>user =&gt; { fullName: ... }</code>처럼 쓰면 중괄호가 객체가 아니라 함수 본문으로 해석됩니다. 그래서 명시적으로 <code>return</code>을 쓰지 않으면 <code>undefined</code>가 반환되거나, 작성 방식에 따라 문법 오류가 날 수 있습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">이유</div>
    <div class="wda-fcard-dsc">화살표 함수에서 중괄호 <code>{}</code>는 원래 "함수의 몸통(Block)"을 의미하기 때문입니다. 컴퓨터는 "아, 여기서 함수 코드가 시작되는구나"라고 착각하고, 그 안의 <code>fullName:</code>을 라벨로 인식해버립니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">해결</div>
    <div class="wda-fcard-dsc">"이건 함수 몸통이 아니라 <strong>객체(Object)</strong>야!"라고 알려주기 위해, 전체를 소괄호 <strong><code>({})</code></strong>로 한 번 감싸줘야 합니다.</div>
  </div>
</div>

<div class="wda-callout wda-ci">
  실무에서 백엔드 데이터(스네이크 케이스 <code>user_name</code>)를 프론트엔드 변수(카멜 케이스 <code>userName</code>)로 바꿀 때, 이 패턴을 숨 쉬듯이 사용하게 될 것입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 2 : Map (2) - 데이터 포맷팅</h2>
</div>

**🎯 Mission**

가격(price) 데이터를 ₩ 통화 기호와 천 단위 콤마( , )가 포함된 문자열로 변환하세요.

- `price` ➔ `formattedPrice`

> Tip: map은 원본 배열의 개수와 동일한 새 배열을 만듭니다.

**📝 예제 코드**

빈칸을 채워 완성해 보세요.

```jsx
const products = [
  { name: 'Mouse', price: 35000 },
  { name: 'Keyboard', price: 150000 },
  { name: 'Monitor', price: 450000 }
];

// toLocaleString() 메서드 활용
const prices = products.map(/* ... */);

console.log(prices);
```

**📝 정답**

숫자에 쉼표를 찍을 때 복잡한 정규식 대신 `toLocaleString()`을 사용하면 아주 쉽습니다.

```jsx
const prices = products.map(product => ({
  name: product.name, // 이름은 그대로 유지
  // toLocaleString(): 숫자를 지역 형식에 맞는 문자열로 바꿔줌. 여기서는 천 단위 콤마를 만들기 위해 사용하고, ₩ 기호는 직접 붙임
  formattedPrice: `₩${product.price.toLocaleString('ko-KR')}`
}));

console.log(prices);
/*
[
  { name: 'Mouse', formattedPrice: '₩35,000' },
  { name: 'Keyboard', formattedPrice: '₩150,000' },
  { name: 'Monitor', formattedPrice: '₩450,000' }
]
*/
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 실습에서 배운 <strong><code>toLocaleString()</code></strong> 메서드는 실무 꿀팁 중 하나입니다. 숫자를 지역 형식에 맞는 문자열로 바꿔주는 메서드로, 여기서는 천 단위 콤마를 만들기 위해 사용했고 <code>₩</code> 기호는 템플릿 리터럴로 직접 붙였습니다.<br>
  초보자 시절에는 "1000 단위마다 콤마 찍기"를 구현하려고 for문을 돌리거나 복잡한 수학 계산을 하곤 합니다. 하지만 자바스크립트는 이 기능을 기본적으로 제공합니다.<br>
  · <code>(35000).toLocaleString()</code> 👉 <code>"35,000"</code> (자동으로 콤마 생성)<br><br>
  <code>map</code>과 <code>toLocaleString</code>의 조합은 <strong>"이커머스(쇼핑몰) 개발자"</strong>의 기본 소양과도 같습니다. 서버에서 받은 원시 데이터(Raw Data)를 사용자가 보기 편한 포맷으로 예쁘게 포장해서 내보내는 것, 이것이 프론트엔드 개발의 핵심 역할입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 3 : Map (3) - Null 안전 처리</h2>
</div>

**🎯 Mission**

서버 데이터 중 일부가 빠져있을 수 있습니다( `null` or `undefined` ). `address` 가 없으면 "주소 없음"으로 표시되도록 처리하세요.

> Tip: item.address || '주소 없음' 패턴은 실무에서 매우 자주 쓰입니다.

**📝 예제 코드**

빈칸을 채워 완성해 보세요.

```jsx
const orders = [
  { id: 1, address: 'Seoul Gangnam' },
  { id: 2, address: null }, // 주소 누락
  { id: 3, address: 'Busan Haeundae' }
];

// OR 연산자 (||) 활용
const shippingLabels = orders.map(/* ... */);

console.log(shippingLabels);
```

**📝 정답**

논리 연산자 `||` (OR)를 사용하여 **'데이터가 없으면(False) 이걸 써라'**는 기본값 설정을 할 수 있습니다.

```jsx
const shippingLabels = orders.map(order => ({
  id: order.id,
  // order.address가 있으면 그걸 쓰고, 없으면(null/false) 뒤에 있는 '주소 없음'을 씀
  label: order.address || '주소 없음'
}));

console.log(shippingLabels);
/*
[
  { id: 1, label: 'Seoul Gangnam' },
  { id: 2, label: '주소 없음' }, // Fallback 적용
  { id: 3, label: 'Busan Haeundae' }
]
*/
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 패턴을 <strong>'단락 평가(Short-circuit evaluation)'</strong> 또는 <strong>'기본값 할당(Default Value)'</strong>이라고 부릅니다.<br>
  프론트엔드 개발을 하다 보면 서버에서 <code>null</code>이나 <code>undefined</code>가 넘어와서 화면이 하얗게 깨지는(White Screen) 경우가 종종 발생합니다.<br>
  이때 <code>||</code> 연산자는 훌륭한 <strong>'안전장치(Safety Guard)'</strong> 역할을 합니다.<br><br>
  · <code>A || B</code>: "A가 진짜면 A를 쓰고, A가 가짜(null, undefined, 0, "")면 B를 써라!"<br>
  · 마치 "현금이 없으면(False), 신용카드를 써라(Fallback)"와 같은 논리입니다.<br>
  실무에서 가장 빈번하게 쓰이는 방어 코드이니 꼭 익혀두세요!
</div>

주소가 `null` 또는 `undefined`일 때만 기본값을 넣고 싶다면 `??` 연산자를 사용할 수 있습니다.

```jsx
label: order.address ?? '주소 없음'
```

<div class="wda-callout wda-ci">
  <code>||</code>는 <code>null</code>, <code>undefined</code>뿐 아니라 <code>""</code>, <code>0</code>, <code>false</code>도 기본값으로 대체합니다. 이 실습에서는 주소가 비어 있으면 '주소 없음'으로 표시하는 목적이므로 <code>||</code>도 사용할 수 있지만, <code>null</code>/<code>undefined</code>만 구분하고 싶다면 <code>??</code>가 더 정확합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 4 : Filter (1) - 복잡한 조건</h2>
</div>

**🎯 Mission**

"재고가 있고( `stock > 0` )" 그리고 "가격이 100만원 이상( `price >= 1000000` )"인 프리미엄 상품만 골라내세요.

> Tip: 두 조건이 모두 참이어야 할 땐 && (AND) 연산자를 사용합니다.

**📝 예제 코드**

빈칸을 채워 완성해 보세요.

```jsx
const items = [
  { name: 'Laptop', price: 1500000, stock: 5 },
  { name: 'Mouse', price: 35000, stock: 10 },
  { name: 'Luxury Bag', price: 3000000, stock: 0 }, // 품절
  { name: 'Desktop', price: 2000000, stock: 3 }
];

// AND 연산자 (&&) 활용
const premiumInStock = items.filter(/* ... */);

console.log(premiumInStock);
```

**📝 정답**

논리 연산자 `&&`를 사용하면 여러 개의 필터링 조건을 한 번에 연결할 수 있습니다.

```jsx
// item 하나씩 검사
// 1. 재고가 0보다 커야 함 (True) AND(&&)
// 2. 가격이 100만원 이상이어야 함 (True)
// 둘 다 만족해야 최종 합격!
const premiumInStock = items.filter(item => item.stock > 0 && item.price >= 1000000);

console.log(premiumInStock);
/*
[
  { name: 'Laptop', price: 1500000, stock: 5 },
  { name: 'Desktop', price: 2000000, stock: 3 }
]
// Luxury Bag은 비싸지만 재고가 없어서 제외됨
// Mouse는 재고는 있지만 싸서 제외됨
*/
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <code>filter</code> 메서드 안에서 <strong>논리 연산자</strong>를 잘 다루는 것이 데이터 처리의 핵심입니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">AND 연산자 (&&)</div>
    <div class="wda-fcard-dsc">"이것도 맞고, 그리고 저것도 맞아야 해!" (깐깐한 필터)<br>예: 성인 && 여자 (성인 여자만 통과)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">OR 연산자 (||)</div>
    <div class="wda-fcard-dsc">"이게 맞거나, 아니면 저거라도 맞으면 돼!" (너그러운 필터)<br>예: VIP회원 || 쿠폰보유자 (둘 중 하나만 해당돼도 할인 대상)</div>
  </div>
</div>

<div class="wda-callout wda-ci">
  실무에서는 보통 3~4개 이상의 조건이 주렁주렁 달리는 경우가 많습니다. 이때 괄호 <code>()</code>를 적절히 써서 우선순위를 정해주는 습관을 들이면 더욱 정확한 필터링을 할 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 5 : Filter (2) - 유효 데이터만 남기기</h2>
</div>

**🎯 Mission**

배열에 `null` , `undefined` , 빈 문자열 `""` 같은 허수 데이터가 섞여 있습니다. 실제 존재하는 값(Truthy)만 남기세요.

> Tip: filter(Boolean)은 filter(item => Boolean(item))과 같습니다.

**📝 예제 코드**

빈칸을 채워 완성해 보세요.

```jsx
const rawInput = [
  'Apple',
  null,
  'Banana',
  undefined,
  '',
  'Cherry'
];

// Boolean 생성자 활용 (꿀팁!)
const validFruits = rawInput.filter(/* ... */);

console.log(validFruits);
```

**📝 정답**

`Boolean` 함수 그 자체를 콜백으로 넘겨주면, 거짓 같은 값(Falsy)들은 알아서 다 걸러집니다.

```jsx
// Boolean 함수를 필터 조건으로 바로 전달
// (item) => Boolean(item) 과 100% 동일한 효과
const validFruits = rawInput.filter(Boolean);

console.log(validFruits);
/*
[
  'Apple',
  'Banana',
  'Cherry'
]
*/
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 코드는 자바스크립트 고수들이 즐겨 쓰는 <strong>'데이터 청소기'</strong> 패턴입니다. 자바스크립트에는 <strong>Falsy Value (거짓으로 취급되는 값)</strong> 라는 개념이 있습니다.
</div>

<div class="wda-callout wda-ci">
  · <code>null</code><br>
  · <code>undefined</code><br>
  · <code>0</code><br>
  · <code>""</code> (빈 문자열)<br>
  · <code>false</code>
</div>

<div class="wda-callout wda-ci">
  <code>Boolean</code> 함수는 이 값들을 만나면 가차 없이 <code>false</code>를 반환합니다. 그래서 <code>filter(Boolean)</code> 한 줄이면, 의미 없는 쓰레기 데이터들을 싹 걷어내고 알맹이만 남길 수 있습니다. API 통신 후 데이터를 정리할 때 정말 유용하니 꼭 기억해두세요!
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <code>filter(Boolean)</code>은 <code>null</code>, <code>undefined</code>, <code>""</code>, <code>0</code>, <code>false</code> 같은 Falsy 값을 모두 제거합니다. 따라서 <code>0</code>이나 <code>false</code>도 의미 있는 데이터인 경우에는 사용하면 안 됩니다. 그럴 때는 <code>item != null</code>처럼 조건을 명확히 작성하는 것이 안전합니다.
</div>

```jsx
const cleaned = rawInput.filter(item => item != null);
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 6 : Reduce (1) - 합계 구하기 (쇼핑몰)</h2>
</div>

**🎯 Mission**

장바구니에 담긴 상품들의 **총 결제 금액**을 계산하세요. ( `price` * `qty` 의 총합)

> Tip: acc는 누적값, cur는 현재 상품 객체입니다.

**📝 예제 코드**

빈칸을 채워 완성해 보세요.

```jsx
const cart = [
  { name: 'Apple', price: 1000, qty: 3 },
  { name: 'Banana', price: 2000, qty: 1 },
  { name: 'Melon', price: 5000, qty: 2 }
];

// 초기값 0 필수!
const totalPrice = cart.reduce(/* ... */, 0);

console.log(totalPrice);
```

**📝 정답**

`cur`가 단순 숫자가 아니라 **객체**이므로, `cur.price`와 `cur.qty`에 접근해서 계산해야 합니다.

```jsx
const cart = [
  { name: 'Apple', price: 1000, qty: 3 },
  { name: 'Banana', price: 2000, qty: 1 },
  { name: 'Melon', price: 5000, qty: 2 }
];

// acc: 저금통(누적 금액), cur: 현재 집어든 상품
const totalPrice = cart.reduce((acc, cur) => {
  // 현재 상품의 금액(가격 * 수량)을 계산해서 저금통에 더함
  return acc + (cur.price * cur.qty);
}, 0); // 0원부터 시작 (초기값)

console.log(totalPrice);
/*
15000
// 과정:
// 1. Apple: 0 + 3000 = 3000
// 2. Banana: 3000 + 2000 = 5000
// 3. Melon: 5000 + 10000 = 15000
*/
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 실습에서 가장 중요한 포인트는 <strong>"초기값 <code>0</code>"</strong>입니다.<br><br>
  만약 <code>0</code>을 넣지 않으면 어떻게 될까요? <code>reduce</code>는 자동으로 <strong>첫 번째 요소(객체)</strong>인 <code>{ name: 'Apple'... }</code>을 초기값(<code>acc</code>)으로 사용해버립니다.<br>
  그러면 계산식이 <code>[object Object] + 2000</code> 처럼 되어버려 엉뚱한 문자열 결과가 나옵니다.<br><br>
  그래서 객체 배열을 다룰 때는 <strong>"내가 지금 숫자를 더하려고 하는 거야!"</strong>라고 명확히 알려주기 위해 반드시 <code>0</code>을 초기값으로 넣어줘야 합니다.<br>
  이 규칙만 지키면 장바구니 계산 기능은 마스터하신 겁니다!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 7 : Reduce (2) - 그룹핑 (Grouping)</h2>
</div>

**🎯 Mission**

사람들을 `role` (직업) 별로 그룹핑하여 **객체**로 만드세요. (실무 면접 단골 문제입니다!)

> Tip: acc[cur.role] 배열이 없으면 [] 로 초기화 후 push!

**📝 예제 코드**

빈칸을 채워 완성해 보세요.

```jsx
const team = [
  { name: 'Bob', role: 'Developer' },
  { name: 'Alice', role: 'Designer' },
  { name: 'Charlie', role: 'Developer' }
];

// 초기값은 빈 객체 {}
const grouped = team.reduce(/* ... */, {});

console.log(grouped);
```

**📝 정답**

배열 안의 객체들을 특정 키(Key) 값에 따라 분류해서 넣는 로직입니다.

```jsx
const grouped = team.reduce((acc, cur) => {
  // 1. 현재 사람의 직업(role)을 확인 (예: 'Developer')
  const key = cur.role;

  // 2. 해당 직업의 방(배열)이 없으면 새로 만듦
  if (!acc[key]) {
    acc[key] = [];
  }

  // 3. 그 직업 방에 현재 사람을 집어넣음
  acc[key].push(cur);

  // 4. 정리된 명부(acc)를 다음 턴으로 넘김
  return acc;
}, {}); // 초기값은 빈 객체 {}

console.log(grouped);
/*
{
  Developer: [
    { name: 'Bob', role: 'Developer' },
    { name: 'Charlie', role: 'Developer' }
  ],
  Designer: [
    { name: 'Alice', role: 'Designer' }
  ]
}
*/
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 패턴은 <strong><code>reduce</code>의 꽃</strong>이라고 불릴 만큼 중요하고 강력한 기술입니다. 마치 <strong>"우편물 분류 작업"</strong>과 같습니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">1. 초기값 {}</div>
    <div class="wda-fcard-dsc">텅 빈 우편물 분류함(선반)을 준비합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">2. cur.role</div>
    <div class="wda-fcard-dsc">편지를 하나 집어서 "어느 부서(Developer/Designer)로 갈 거지?" 확인합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">3. if (!acc[key])</div>
    <div class="wda-fcard-dsc">"어? 'Developer' 칸이 아직 없네?" 👉 그럼 새로 칸을 만듭니다([]).</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">4. push</div>
    <div class="wda-fcard-dsc">그 칸에 편지를 쏙 넣습니다.</div>
  </div>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 8 : Reduce (3) - Lookup Table 만들기</h2>
</div>

**🎯 Mission**

배열을 `id`를 키(Key)로 하는 **객체(Lookup Table)**로 변환하세요. 이렇게 하면 특정 ID의 데이터를 찾을 때 `O(1)` 속도로 매우 빠르게 접근할 수 있습니다.

**📝 예제 코드**

빈칸(`/* ... */`)을 채워 배열을 객체로 만드는 문제입니다.

```jsx
const users = [
  { id: 101, name: 'John' },
  { id: 102, name: 'Sarah' },
  { id: 103, name: 'Mike' }
];

// 초기값 {} (빈 객체)에서 시작
const userMap = users.reduce((acc, cur) => {
  // Tip: `acc[cur.id] = cur`
  // 여기에 들어갈 코드를 작성해보세요! (정답은 보충 설명에)
  
  /* ... */
  
  return acc; // 누적된 객체 반환
}, {});

console.log(userMap);
```

**✅ 결과 예시**

배열이 아닌 **객체(Object)** 형태여야 합니다.

```jsx
{
  101: { id: 101, name: 'John' },
  102: { id: 102, name: 'Sarah' },
  103: { id: 103, name: 'Mike' }
}
```

**정답 코드**

```jsx
const userMap = users.reduce((acc, cur) => {
  acc[cur.id] = cur; // 1. 현재 객체(cur)를 ID를 키로 하여 저장
  return acc;        // 2. 업데이트된 주머니(acc)를 다음 턴으로 넘김
}, {});
```

이렇게 만들어두면 나중에 `userMap[102]`라고만 입력해도 Sarah의 정보를 즉시 가져올 수 있습니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 패턴은 실무에서 <strong>데이터 조회 성능을 최적화</strong>할 때 정말 자주 쓰이는 <strong>'룩업 테이블(Lookup Table)'</strong> 기법입니다.
</div>

**왜 쓰나요?**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">배열 (<code>find</code>)</div>
    "ID가 103인 사람 나와!"라고 하면 앞에서부터 하나씩 다 뒤져야 합니다. (데이터가 많아지면 느려짐, O(N))
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">객체 (<code>key</code>)</div>
    "103번 나와!" 하면 한 번에 딱 집어냅니다. 객체의 key 접근은 일반적으로 매우 빠르며, 평균적으로 O(1)에 가깝게 다룰 수 있습니다. 초보자 단계에서는 배열을 매번 find로 찾는 것보다 빠른 조회용 구조라고 이해하면 됩니다.
  </div>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 9 : forEach - 단순 반복 (Logging)</h2>
</div>

**🎯 Mission**

반환값이 필요 없습니다. 단순히 각 사용자에게 이메일을 발송하는 흉내를 내보세요.

**📝 예제 코드**

`forEach`를 사용하여 배열의 요소를 하나씩 꺼내 작업을 수행하는 문제입니다.

```jsx
const members = ['John', 'Sarah', 'Mike'];

// members 배열의 요소를 하나씩 member 변수에 담아 반복 실행
members.forEach(member => {
  // 여기에 작성 (이메일 발송 로직 구현)
  // 출력: "Sending email to John..."
  
  // 힌트: console.log를 사용하세요.
});
```

**✅ 결과 예시**

단순히 콘솔에 로그가 찍히면 성공입니다.

```jsx
Sending email to John...
Sending email to Sarah...
Sending email to Mike...
```

**📝 정답 코드**

```jsx
const members = ['John', 'Sarah', 'Mike'];

members.forEach(member => {
  // 템플릿 리터럴(백틱 ``)을 사용해 변수와 문자열 조합
  console.log(`Sending email to ${member}...`);
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 실습의 핵심은 <strong>"반환값(Return)이 필요 없는 경우"</strong>를 구분하는 것입니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">map</div>
    <div class="wda-fcard-dsc">"재료를 손질해서 새 그릇에 담아줘." (새 배열 반환 O)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">forEach</div>
    <div class="wda-fcard-dsc">"그냥 이 전단지 좀 돌리고 와." (반환 X, 행동만 함)</div>
  </div>
</div>

<div class="wda-callout wda-ci">
  이미지 속에 있는 <strong>Side Effect(부수 효과)</strong>라는 용어는 어렵게 생각하지 마세요.<br>
  데이터를 변환해서 새로운 값을 만드는 게 아니라, "화면에 출력하거나(log), 이메일을 보내거나, DB에 저장하는 등 외부 세상에 영향을 주는 행위"를 뜻합니다.<br>
  단순 반복 작업에는 <code>map</code>보다 <code>forEach</code>가 의미상 더 적합합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 10 : Find - 특정 데이터 찾기</h2>
</div>

**🎯 Mission**

ID가 `3` 인 유저를 찾으세요. ( `users` 배열 가정) 없으면 `undefined` 가 나옵니다.

**📝 예제 코드**

`find` 메서드를 사용하여 조건에 맞는 첫 번째 요소를 찾아내는 문제입니다.

```jsx
const userList = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' }
];

// find 사용
// 괄호 안에 들어갈 콜백 함수를 작성해 보세요.
const target = userList.find(/* ... */);

console.log(target);
```

**✅ 결과 예시**

배열이 아닌, 찾은 **객체 그 자체**가 반환되어야 합니다.

```jsx
{ id: 3, name: 'C' }
```

**📝 정답 코드**

```jsx
const userList = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' }
];

// userList의 각 요소를 user라고 부르며 순회
const target = userList.find(user => user.id === 3);

console.log(target);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <code>find</code>는 배열에서 <strong>"가장 먼저 발견된 딱 하나"</strong>만 반환하고 즉시 종료합니다.
</div>

**`filter` vs `find` 차이점 (면접 단골 질문)**

| **비교 항목** | **filter (필터)** | **find (파인드)** |
| --- | --- | --- |
| **🔍 탐색 범위** | 조건에 맞는 **모든 요소** 끝까지 탐색 | 조건에 맞는 **첫 번째 요소** 찾으면 즉시 종료 |
| **📦 반환 타입** | **배열 (Array)** | **값 그 자체 (Element)** |
| **❌ 없을 때** | **빈 배열 (`[]`)** | **`undefined`** |
| **💡 비유** | "빨간 공 **다** 가져와" (바구니에 담아옴) | "빨간 공 **하나만** 찾아와" (공만 손에 듦) |

<div class="wda-callout wda-ci">
  면접이나 실무에서 이 둘을 구분하는 핵심은 <strong>"껍데기(배열)가 있느냐 없느냐"</strong>입니다.<br><br>
  · <strong>filter</strong> — 결과가 1개라도 무조건 <strong>배열(<code>[{...}]</code>)</strong>로 감싸져서 나옵니다.<br>
  그래서 값을 쓰려면 <code>result[0]</code>처럼 껍질을 까야 합니다.<br>
  · <strong>find</strong> — 껍데기 없이 <strong>알맹이(<code>{...}</code>)</strong>가 바로 나옵니다.<br>
  유일한 값(ID 등)을 찾을 때 훨씬 코드가 깔끔해집니다.<br><br>
  단, <code>find</code>는 실패 시 <code>undefined</code>를 반환하므로, 그 값을 바로 사용하려고 하면(예: <code>found.name</code>) 에러가 터질 수 있습니다.<br>
  항상 <code>if (found)</code>로 확인하는 습관이 필요합니다!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 11 : Some / Every - 검증하기</h2>
</div>

**🎯 Mission**

1. `some` : 하나라도 `admin` 권한이 있는가?
2. `every` : 모두가 `active` 상태인가?

**📝 예제 코드**

`some`과 `every`를 사용하여 배열 내 데이터의 조건을 검증하는 문제입니다.

```jsx
const staff = [
  { role: 'admin', active: true },
  { role: 'user', active: true },
  { role: 'user', active: false }
];

const hasAdmin = staff.some(/* ... */);
const allActive = staff.every(/* ... */);
```

**✅ 결과 예시**

반환값은 `true` 또는 `false`여야 합니다.

```jsx
hasAdmin: true // admin이 한 명 있으니까
allActive: false // 마지막 사람이 false니까
```

**📝 정답 코드**

```jsx
const staff = [
  { role: 'admin', active: true },
  { role: 'user', active: true },
  { role: 'user', active: false }
];

// some: 조건을 만족하는 요소가 '하나라도' 있으면 OK (OR 연산 비슷)
const hasAdmin = staff.some(member => member.role === 'admin');

// every: '모든' 요소가 조건을 만족해야 OK (AND 연산 비슷)
const allActive = staff.every(member => member.active === true);

console.log('hasAdmin:', hasAdmin);
console.log('allActive:', allActive);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 두 메서드는 데이터를 변형하는 게 아니라, <strong>"질문에 대한 답(Yes/No)"</strong>을 얻을 때 사용합니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">some (하나라도?)</div>
    <div class="wda-fcard-dsc">"여기 관리자(admin) 있어?" ➔ "네, 한 명 있어요!" ➔ true</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">every (모두 다?)</div>
    <div class="wda-fcard-dsc">"여기 있는 사람 다 활성(active) 상태야?" ➔ "아니요, 한 명 꺼져있는데요." ➔ false</div>
  </div>
</div>

<div class="wda-callout wda-ci">
  <code>filter</code>로 배열을 만든 뒤 length를 확인하는 것보다, <code>some</code>/<code>every</code>를 쓰는 것이 의도가 더 명확하고 불필요한 배열 생성을 피할 수 있습니다. 조건을 만족하거나 실패하는 순간 순회를 멈출 수 있다는 장점도 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 12 : Sort - 정렬하기</h2>
</div>

**🎯 Mission**

점수(score)가 높은 순서대로(내림차순) 정렬하세요.

**📝 예제 코드**

`sort` 메서드를 사용하여 배열의 순서를 재배치하는 문제입니다.

```jsx
const scores = [85, 100, 70, 95];

// scores.sort(...)
```

**✅ 결과 예시**

숫자가 큰 것부터 작은 순서로 나열되어야 합니다.

```jsx
[100, 95, 85, 70]
```

**📝 정답 코드**

```jsx
const scores = [85, 100, 70, 95];

// 내림차순(Descending) : 큰 수가 앞으로 (b - a)
// 오름차순(Ascending) 이라면 (a - b)를 사용합니다.
scores.sort((a, b) => b - a);

console.log(scores);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <code>sort</code>는 초보자들이 가장 많이 실수하는 메서드 중 하나입니다. 두 가지 이유가 있습니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">1. 원본 파괴 (Mutation)</div>
    <div class="wda-fcard-dsc">이미지 속 Tip에도 나와있듯이, sort는 원본 배열(scores) 자체를 바꿔버립니다. 원본을 남겨야 한다면 [...scores].sort() 처럼 복사본을 만들어 사용해야 합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">2. 문자열 기준 정렬</div>
    <div class="wda-fcard-dsc">숫자라도 그냥 sort()만 쓰면 값을 문자열로 바꾼 뒤 문자열 순서로 비교합니다. 그래서 100이 2보다 앞에 오는 것처럼 예상과 다른 결과가 나올 수 있습니다. 그래서 반드시 비교 함수 (a, b) => a - b 를 넣어주어야 정확하게 숫자로 정렬됩니다.</div>
  </div>
</div>

<div class="wda-callout wda-ci">
  · <code>a - b</code>: 오름차순 (1, 2, 3...)<br>
  · <code>b - a</code>: 내림차순 (3, 2, 1...)
</div>

<div class="wda-callout wda-ci">
  최신 JavaScript에서는 원본을 바꾸지 않는 <code>toSorted()</code>도 사용할 수 있습니다. 다만 지원 환경을 확인해야 하므로, 초보자 단계에서는 <code>[...scores].sort(...)</code> 패턴을 먼저 익히면 됩니다.
</div>

```jsx
const sortedScores = scores.toSorted((a, b) => b - a);
```
