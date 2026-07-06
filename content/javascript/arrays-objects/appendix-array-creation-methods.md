---
title: "부록: 배열 생성의 모든 것(new Array, of, from 완벽 가이드)"
status: "completed"
description: "new Array(), Array.of(), Array.from()의 동작 차이와 희소 배열, 유사 배열 객체를 변환하는 방법을 정리한다."
category: "JavaScript"
section: "Arrays & Objects"
tags:
  - javascript
  - arrays
  - array-creation
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
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.84rem;font-weight:700;margin-bottom:3px}
.wda-fcard-dsc{font-size:.78rem;opacity:.72;line-height:1.5}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:160px}
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

<div class="wda-callout wda-cy" style="position:relative;overflow:visible;padding-right:150px;">
  <img class="wda-deco" src="/images/character/잠깐 생각해보기.webp" alt="" style="width:120px;right:0;top:-12px;opacity:.9;transform:rotate(-3deg);">
  📎 <strong>부록(Appendix)</strong> — <code>new Array()</code>, <code>Array.of()</code>, <code>Array.from()</code>의 차이를 정리하는 보충 가이드입니다.
</div>

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. new Array()의 함정</h2>
  <img class="wda-deco" src="/images/decoration/별 아이콘 (8).webp" alt="" style="width:64px;top:-16px;right:6%;opacity:.8;transform:rotate(8deg);">
</div>

`new Array()` 는 인자의 개수와 타입에 따라 동작이 달라집니다. 이 "불일치" 때문에 실무에서는 잘 쓰지 않습니다.

### 1) 인자가 숫자 1개일 때

숫자만큼의 빈 공간(Slot)만 확보합니다.

```jsx
/* 길이가 3인 빈 배열 생성 */
const arr = new Array(3);

console.log(arr);
// [empty × 3] (요소가 아님!)
console.log(arr.length); // 3
console.log(arr[0]); // undefined
```

### 2) 인자가 여러 개일 때

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/반짝이 아이콘 (3).webp" alt="" style="width:44px;top:-6px;left:34%;opacity:.74;transform:rotate(-7deg);">
</div>

우리가 기대하는 일반적인 배열 생성입니다.

```jsx
/* 인자들을 요소로 갖는 배열 생성 */
const arr = new Array(1, 2, 3);

console.log(arr);
// [1, 2, 3]
console.log(arr.length); // 3
```

**보충 설명**

<div class="wda-callout wda-ci">
  만약 <code>new Array(3)</code>이 <code>[3]</code>을 만들기를 원했다면 당황스럽겠죠? 😅
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. 희소 배열과 Empty의 정체</h2>
  <img class="wda-deco" src="/images/decoration/핀 아이콘 (8).webp" alt="" style="width:52px;top:-11px;left:36%;opacity:.76;transform:rotate(7deg);">
</div>

구멍이 숭숭 뚫린 배열을 **희소 배열(Sparse Array)**이라고 하며, 이때의 구멍을 **Empty(비어있음)** 라고 합니다.

### 1) Empty vs Undefined

```jsx
const arr = [1, , 3]; // 중간을 비움

console.log(arr[1]);
// undefined (값은 undefined 처럼 보임)

// 하지만 동작은 다릅니다!
arr.forEach(v => console.log(v));
// 1
// 3
// (중간의 empty는 아예 무시됨!)
```

| **구분** | **정체** |
| --- | --- |
| **Empty** | 방 자체가 없음 (순회 시 건너뜀) |
| **Undefined** | 방은 있는데 값이 없음 (순회 함) |

### 2) 희소 배열이 만들어지는 경우

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>new Array(3)</code></div>
    <div class="wda-fcard-dsc"><code>[empty × 3]</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>arr[10] = 1</code> (빈 배열 기준)</div>
    <div class="wda-fcard-dsc"><code>[empty × 10, 1]</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>const arr = [1, 2, 3]; delete arr[0]</code></div>
    <div class="wda-fcard-dsc"><code>[empty, 2, 3]</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>[1, , 3]</code></div>
    <div class="wda-fcard-dsc">(쉼표 연속)</div>
  </div>
</div>

```jsx
const arr = [];
arr[10] = 1;
// 결과: [empty × 10, 1]
// length는 11
```

```jsx
const arr = [1, 2, 3];
delete arr[0];
// 결과: [empty, 2, 3]
```

**주의사항**

<div class="wda-callout wda-cw">
  희소 배열은 순회 시 건너뛰는 동작처럼 초보자가 예상하기 어려운 결과를 만들 수 있고, 엔진 최적화에도 불리할 수 있으므로 피하는 것이 좋습니다.<br>
  의도치 않은 희소 배열을 피하고 싶다면 <code>Array.from()</code>이나 <code>fill()</code> 등을 사용해 꽉 찬 배열(Dense Array)을 만드는 것이 좋습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. Array.of() - 일관성 있는 생성</h2>
  <img class="wda-deco" src="/images/decoration/말풍선 아이콘 (6).webp" alt="" style="width:56px;top:-12px;right:32%;opacity:.76;transform:rotate(-8deg);">
</div>

ES6에서 도입된 `Array.of()` 는 인자의 개수나 타입에 상관없이 **무조건 요소로 취급**하여 배열을 만듭니다.

### 1) 문법

```jsx
Array.of(items...);
```

### 2) 숫자 1개여도 요소로!

```jsx
const arr1 = Array.of(3);

console.log(arr1);
// [3] (길이 1)
```

### 3) 여러 개여도 요소로!

```jsx
const arr2 = Array.of(1, 2, 3);

console.log(arr2);
// [1, 2, 3]
```

**실무 팁**

<div class="wda-callout wda-cs">
  함수 인자로 받은 값들을 배열로 만들 때, <code>new Array()</code>보다 훨씬 안전합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. Array.from() - 변화의 마법사</h2>
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (12).webp" alt="" style="width:58px;top:-13px;right:8px;opacity:.76;transform:rotate(6deg);">
</div>

유사 배열 객체(array-like object)나 반복 가능한 객체(iterable)를 **진짜 배열로 바꿔줍니다.**

### 1) 유사 배열을 배열로 (NodeList 등)

DOM 요소들을 선택했을 때 반환되는 NodeList는 배열처럼 보이지만 진짜 배열은 아닙니다. `forEach`는 지원되는 환경이 많지만, `map`/`filter`/`reduce` 같은 배열 메서드는 바로 사용할 수 없습니다.

```jsx
// HTML: <div>A</div> <div>B</div> <div>C</div>
const divs = document.querySelectorAll('div'); // NodeList (유사 배열)

// divs.map(...) // ❌ Error! NodeList에는 map이 없음

const divArray = Array.from(divs); // ✅ 진짜 배열로 변환
divArray.map(div => console.log(div.textContent)); // "A", "B", "C"
```

### 2) 문자열을 배열로

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/화살표 아이콘 (6).webp" alt="" style="width:46px;top:4px;left:6%;opacity:.74;transform:rotate(-6deg);">
</div>

문자열(String)도 반복 가능한 객체이므로 배열로 쪼갤 수 있습니다.

```jsx
const str = "Hello";
const chars = Array.from(str);

console.log(chars);
// ["H", "e", "l", "l", "o"]
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. Array.from()의 강력한 기능 - 매핑</h2>
  <img class="wda-deco" src="/images/decoration/하트 아이콘 (5).webp" alt="" style="width:60px;top:-14px;left:34%;opacity:.78;transform:rotate(9deg);">
</div>

`Array.from()` 은 두 번째 인자로 **변환 함수(Mapping Function)**를 받을 수 있습니다. `map()` 을 한 번 더 쓸 필요가 없죠!

### 1) 문법

```jsx
Array.from(target, mapFn);
```

### 2) 예시: 1부터 5까지 숫자 배열 만들기

```jsx
// 길이가 5인 배열을 만들면서, 각 요소를 인덱스 + 1로 채우기
const numbers = Array.from({ length: 5 }, (v, i) => i + 1);

console.log(numbers);
// [1, 2, 3, 4, 5]
```

### 3) 왜 `{ length: 5 }` 가 유사 배열인가요?

**보충 설명**

<div class="wda-callout wda-ci">
  · <strong>조건 충족</strong> — 일반적인 유사 배열은 <strong><code>length</code> 속성</strong>과 숫자 형태의 인덱스를 가진 객체입니다. 다만 <code>Array.from({ length: 5 })</code>처럼 실제 인덱스 값이 없어도 <code>length</code>만 보고 지정한 횟수만큼 처리할 수 있습니다.<br>
  · <strong>동작 원리</strong> — <code>Array.from()</code>은 <code>length</code> 속성이 있는 객체를 array-like 객체처럼 처리할 수 있습니다. <code>{ length: 5 }</code>에는 실제 요소는 없지만, <code>Array.from()</code>은 <code>length</code> 값을 보고 0부터 4까지 총 5번 처리합니다.<br>
  · <strong>매핑 함수</strong> — 두 번째 함수 <code>(v, i) => i + 1</code>이 실행되면서 각 빈 칸(v는 undefined)에 인덱스(i)를 활용한 값이 채워집니다.
</div>

### 4) 배열 생성 도구 최종 비교

| **방식** | **결과** | **특징 및 한계 (T-모드)** |
| --- | --- | --- |
| **`new Array(5)`** | `[empty × 5]` | **희소 배열**이 생성되어 순회 시 요소를 건너뛰는 등 문제가 발생함 |
| **`Array.from({ length: 5 })`** | `[undefined × 5]` | **꽉 찬 배열(Dense Array)**을 보장하며, 즉시 원하는 값으로 가공(Mapping) 가능함 |

`{ length: 5 }`는 진짜 배열은 아니지만, **`length`라는 핵심 속성을 가지고 있기에** `Array.from`이 배열로 변환할 수 있는 **'유사 배열 객체'** 역할을 수행하는 것입니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💡 핵심 정리</h2>
  <img class="wda-deco" src="/images/character/집중 탐구.webp" alt="" style="width:118px;right:0;top:-100px;opacity:.9;transform:rotate(-3deg);">
</div>

### 1) 배열 생성 도구별 특징 비교

가장 효율적인 배열 생성 방식을 선택하기 위한 기준표입니다.

<table class="wda-summary-table">
  <tr>
    <th>생성 방식</th>
    <th>인자가 숫자 1개(3)일 때 결과</th>
    <th>특징 및 한계 (T-모드)</th>
  </tr>
  <tr>
    <td><strong>new Array(3)</strong></td>
    <td><code>[empty × 3]</code> (희소 배열)</td>
    <td>인자가 숫자면 <strong>길이</strong>로 인식하여 빈 슬롯만 확보함. 실무 지양</td>
  </tr>
  <tr>
    <td><strong>Array.of(3)</strong></td>
    <td><code>[3]</code> (길이 1인 배열)</td>
    <td>인자의 개수/타입 무관하게 <strong>무조건 요소</strong>로 취급하여 일관성 있음</td>
  </tr>
  <tr>
    <td><strong>Array.from({length:3})</strong></td>
    <td><code>[undefined, undefined, undefined]</code></td>
    <td><strong>유사 배열</strong>을 진짜 배열로 바꾸며, <strong>꽉 찬 배열(Dense)</strong>을 보장함</td>
  </tr>
</table>

### 2) 희소 배열(Sparse Array)의 위험성

구멍 뚫린 배열(`empty`)은 일반적인 `undefined`와 다르게 동작하므로 주의가 필요합니다.

**주의사항**

<div class="wda-callout wda-cw">
  · <strong>Empty의 정체</strong> — 방 자체가 존재하지 않는 상태입니다.<br>
  · <strong>차이점</strong> — <code>forEach</code> 등 순회 시 <strong>Empty는 아예 무시</strong>되지만, <code>undefined</code>는 순회 대상에 포함됩니다.<br>
  · <strong>발생 상황</strong> — <code>new Array(n)</code>, <code>delete arr[i]</code>, 쉼표 연속 사용(<code>[1, , 3]</code>) 시 발생합니다.<br>
  · <strong>결론</strong> — 초보자가 예상하기 어려운 동작을 유발하고 엔진 최적화에도 불리할 수 있으므로, 의도치 않은 희소 배열이라면 <strong><code>fill()</code>이나 <code>Array.from()</code>으로 꽉 찬 배열을 만드는 것이 좋습니다.</strong>
</div>

### 3) Array.from() 마법사의 활용 (핵심)

`Array.from()`은 유사 배열 변환이나 일정한 길이의 배열을 만들면서 값을 채울 때 매우 유용합니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">① 진짜 배열로 변환 (Type Casting)</div>
    <div class="wda-fcard-dsc">· <strong>유사 배열(NodeList)</strong> — <code>document.querySelectorAll</code> 결과물 등 배열 메서드가 없는 객체를 변환합니다.<br>· <strong>반복 가능 객체(String)</strong> — <code>"Hello"</code>를 <code>["H", "e", "l", "l", "o"]</code>로 즉시 분리합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">② 생성과 동시에 가공 (Mapping)</div>
    <div class="wda-fcard-dsc"><code>Array.from(target, mapFn)</code> 문법을 통해 별도의 <code>map()</code> 호출 없이 데이터를 채울 수 있습니다.</div>
  </div>
</div>

```jsx
// 1부터 5까지 숫자 배열 만들기 (강사님 예시)
const numbers = Array.from({ length: 5 }, (v, i) => i + 1); 
// 결과: [1, 2, 3, 4, 5]
```

### 🧐 `{ length: 5 }`가 왜 유사 배열인가요?

**보충 설명**

<div class="wda-callout wda-ci">
  · <strong>유사 배열의 조건</strong> — 일반적으로는 숫자 형태의 인덱스와 <strong><code>length</code> 속성</strong>을 가진 객체를 유사 배열로 간주하지만, <code>{ length: 5 }</code>처럼 인덱스 없이 <code>length</code>만 있어도 <code>Array.from()</code>은 그 값을 보고 지정한 횟수만큼 처리할 수 있습니다.<br>
  · <strong>논리적 해석</strong> — <code>Array.from</code>은 객체 내의 <code>length</code>를 보고 필요한 방의 개수를 판단하므로, <code>{ length: 5 }</code>는 훌륭한 <strong>배열 생성용 설계도</strong> 역할을 수행합니다.
</div>
