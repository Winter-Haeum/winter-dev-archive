---
title: "실습: 리스트 렌더링 훈련 1~2"
status: "completed"
description: "데이터 목록 표시(map)와 가격 필터링(filter) 2가지 실습으로 배열 렌더링과 key, 파생 상태를 활용한 필터링 패턴을 훈련한다."
category: "React"
section: "Core"
tags:
  - react
  - list-rendering
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
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 16px;margin:.8rem 0 1.6rem;font-size:.83rem;line-height:1.75}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 140px;background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-steps{background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem;box-shadow:0 1px 3px rgba(0,0,0,.04)}
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

<h2>1. 💻 실습 1 : 데이터 목록 표시 (map)</h2>

**🎯 Mission**

- `map()` 함수를 사용하여 배열 렌더링
- 각 항목에 `key` 속성 부여 (`id` 사용)
- 이름과 타입을 리스트 아이템으로 표시

```javascript
{ id: 1, name: 'Apple', type: 'Fruit' }
```

**✅ 결과 예시**

- **Apple** 🍎 Fruit
- **Carrot** 🥕 Vegetable
- **Banana** 🍌 Fruit

**📝 정답 코드**

```jsx
function FruitList() {
  const items = [
    { id: 1, name: 'Apple', type: 'Fruit' },
    { id: 2, name: 'Carrot', type: 'Vegetable' },
    { id: 3, name: 'Banana', type: 'Fruit' }
  ];

  return (
    <ul>
      {/* 배열을 순회하며 리스트 아이템 반환 */}
      {items.map((item) => (
        // 고유한 key 값 필수 설정
        <li key={item.id}>
          <span>{item.name}</span>
          <span>{item.type === 'Fruit' ? '🍎' : '🥕'} {item.type}</span>
        </li>
      ))}
    </ul>
  );
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>JSX 내부에서의 중괄호 사용</strong>
  <p>JSX 안에서 자바스크립트 문법(변수, 함수, 표현식 등)을 사용하려면 반드시 <code>{ }</code> 중괄호로 감싸야 합니다.<br><code>map()</code> 함수 또한 자바스크립트 코드이므로 중괄호 내부에서 실행해야 화면에 정상적으로 렌더링됩니다.</p>
</div>

---

<h2>2. 💻 실습 2 : 가격 필터링 (filter)</h2>

**🎯 Mission**

- `filter()` 함수를 사용하여 데이터 걸러내기
- 입력된 가격보다 비싼 상품만 보여주기 (최소 가격 설정)
- 원본 데이터(products)는 변형되지 않고 보존되어야 함

**✅ 결과 예시**

(최소 가격이 $40으로 설정된 경우)

- **Laptop** $1000
- **Keyboard** $50
- **Monitor** $300
- *(Mouse는 $20이므로 제외됨)*

**📝 정답 코드**

```jsx
function PriceFilter() {
  const [minPrice, setMinPrice] = useState(0);

  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 20 },
    { name: 'Keyboard', price: 50 },
    { name: 'Monitor', price: 300 }
  ];

  // 조건에 맞는 상품만 골라내기 (파생 상태)
  const filteredProducts = products.filter(product => product.price >= minPrice);

  return (
    <div>
      <label>최소 가격: ${minPrice}</label>
      {/* 슬라이더 입력값 상태 연결 */}
      <input
        type="range" min="0" max="1000" step="10"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />

      <ul>
        {/* 필터링된 결과만 렌더링 */}
        {filteredProducts.map((product) => (
          <li key={product.name}>
            <strong>{product.name}</strong> ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>원본 데이터 보존의 중요성</strong>
  <p>필터링 기능을 만들 때 <code>setProducts</code>를 사용해 원본(<code>products</code>) 자체를 줄여버리면, 나중에 가격 조건을 낮췄을 때 사라진 데이터가 돌아오지 않습니다.<br>원본은 그대로 두고, 렌더링할 때만 <code>filter</code>를 거친 변수(<code>filteredProducts</code>)를 사용하는 것이 핵심입니다.</p>
</div>

---

<h2>3. ✅ 핵심 요약</h2>

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>배열을 화면에 표시할 때는 <strong>map()</strong>으로 각 항목을 JSX로 변환한다.</li>
    <li>map()이 반환하는 <strong>최상위 태그</strong>에는 고유한 <strong>key</strong>(가능하면 id)를 지정한다.</li>
    <li>조건에 맞는 데이터만 보여줄 때는 <strong>filter()</strong>로 새 배열을 만들고, 원본 배열(state)은 건드리지 않는다.</li>
    <li>필터링된 결과 같은 값은 별도 state 없이 렌더링 시점에 계산하는 <strong>파생 상태</strong>로 관리한다.</li>
  </ul>
</div>

**🧠 실수 방지 체크**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: key 없이 map()을 사용한다.</div>
    <div class="wda-mistake-right">방지: 콘솔 경고가 뜨고, React가 항목 변경을 비효율적으로 처리하게 되므로 항상 고유한 key를 지정한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: setProducts(products.filter(...))처럼 원본 state 자체를 필터링해버린다.</div>
    <div class="wda-mistake-right">방지: 조건을 다시 완화해도 사라진 데이터가 돌아오지 않는다. filteredProducts 같은 파생 변수만 걸러야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: range input의 e.target.value를 숫자로 변환하지 않고 그대로 비교한다.</div>
    <div class="wda-mistake-right">방지: input 값은 문자열이므로, price(숫자)와 비교하려면 반드시 Number()로 변환해야 필터링이 정확하게 동작한다.</div>
  </div>
</div>

**✅ 완성 기준**

<div class="wda-check-note">
  <ul>
    <li>실습 1: Apple/Carrot/Banana가 각각 이름과 타입 아이콘(🍎/🥕)과 함께 리스트로 표시된다.</li>
    <li>실습 2: 슬라이더로 최소 가격을 올리면 그보다 싼 상품이 실시간으로 목록에서 사라지고, 다시 내리면 복원된다.</li>
  </ul>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">FruitList에서 key로 무엇을 사용했나?</div>
    <div class="wda-flip-back">각 항목의 고유한 id(item.id)를 key로 사용했다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">PriceFilter의 filteredProducts는 어떻게 만들어지나?</div>
    <div class="wda-flip-back">products.filter(product => product.price >= minPrice)로 렌더링 시점마다 새로 계산되는 파생 상태다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">원본 products를 직접 필터링해서 state에 넣으면?</div>
    <div class="wda-flip-back">가격 조건을 낮춰도 이미 사라진 데이터가 돌아오지 않는 문제가 생긴다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">range input의 값은 왜 Number()로 변환하나?</div>
    <div class="wda-flip-back">input의 값은 항상 문자열이므로, 숫자인 price와 비교하려면 변환이 필요하다.</div>
  </div>
</div>
