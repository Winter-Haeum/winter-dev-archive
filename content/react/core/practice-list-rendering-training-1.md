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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
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
</style>

<h2>1. 💻 실습 1 : 데이터 목록 표시 (map)</h2>

### 1) Mission

- `map()` 함수를 사용하여 배열 렌더링
- 각 항목에 `key` 속성 부여 (`id` 사용)
- 이름과 타입을 리스트 아이템으로 표시

```javascript
{ id: 1, name: 'Apple', type: 'Fruit' }
```

### 2) 결과 예시

- **Apple** 🍎 Fruit
- **Carrot** 🥕 Vegetable
- **Banana** 🍌 Fruit

### 3) 정답 코드

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

### 1) Mission

- `filter()` 함수를 사용하여 데이터 걸러내기
- 입력된 가격보다 비싼 상품만 보여주기 (최소 가격 설정)
- 원본 데이터(products)는 변형되지 않고 보존되어야 함

### 2) 결과 예시

(최소 가격이 $40으로 설정된 경우)

- **Laptop** $1000
- **Keyboard** $50
- **Monitor** $300
- *(Mouse는 $20이므로 제외됨)*

### 3) 정답 코드

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
