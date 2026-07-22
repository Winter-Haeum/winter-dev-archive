---
title: "부록: call·apply·bind와 배열 생성 완벽 가이드"
status: "completed"
description: "함수의 this를 고정하는 call·apply·bind와 new Array·Array.of·Array.from을 활용한 배열 생성 방식을 한 번에 정리한다."
category: "JavaScript"
section: "Arrays & Objects"
tags:
  - javascript
  - this-binding
  - arrays
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

<div class="wda-goal" style="position:relative;overflow:visible;">
  • <strong>this 고정하기</strong> — call, apply, bind로 함수의 this를 원하는 객체로 지정하는 방법을 이해합니다.<br>
  • <strong>call과 apply</strong> — 즉시 실행되는 두 메서드의 인자 전달 방식 차이를 익힙니다.<br>
  • <strong>bind</strong> — this가 고정된 새 함수를 만들어 나중에 실행하는 패턴을 익힙니다.<br>
  • <strong>배열 생성</strong> — new Array, Array.of, Array.from의 차이와 희소 배열의 위험성을 이해합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>부록 A. call, apply, bind (this를 내 마음대로 조종하기)</h2>
</div>

### A-1. 왜 필요한가요?

자바스크립트에서 `this`는 호출하는 방법에 따라 달라집니다. 때로는 이 `this`를 우리가 원하는 객체로 고정하고 싶을 때가 있습니다.

#### 1) 문제 상황

```jsx
const person = {
  name: "철수",
  greet: function() {
    console.log(`안녕, 난 ${this.name}야`);
  }
};

const myGreet = person.greet;
myGreet();
// 실행 환경과 strict 모드 여부에 따라 this가 undefined가 되거나,
// 브라우저 전역 객체(window)를 가리킬 수 있습니다.
// 이 경우 this.name을 제대로 찾지 못합니다.
```

함수만 따로 떼어내면 `this`를 잃어버립니다.

#### 2) 해결 방법

```jsx
const myGreet = person.greet.bind(person);
myGreet();
// 안녕, 난 철수야!
```

`bind`를 사용해 `this`를 `person`으로 고정했습니다.

---

### A-2. call 메서드

함수를 즉시 실행하며, 첫 번째 인자로 `this`로 사용할 객체를 전달합니다.

**📝 문법**

```jsx
func.call(thisArg, arg1, arg2, ...);
```

**🧪 예시 코드**

```jsx
const user = { name: "영희" };

function introduce(age, city) {
  console.log(
    `${this.name}는 ${age}살, ${city} 거주`
  );
}

// this를 user로 지정하여 실행
introduce.call(user, 25, "서울");
```

**✅ 실행 결과**

```jsx
"영희는 25살, 서울 거주"
```

인자들을 쉼표(,)로 구분해서 하나씩 나열하여 전달합니다.

---

### A-3. apply 메서드

`call`과 기능은 똑같지만, 인자를 **배열**로 묶어서 전달한다는 점이 다릅니다.

**📝 문법**

```jsx
func.apply(thisArg, [argsArray]);
```

**🧪 예시 코드**

```jsx
const user = { name: "민수" };

function introduce(age, city) {
  console.log(
    `${this.name}는 ${age}살, ${city} 거주`
  );
}

// 인자를 배열 [30, "부산"] 로 전달
introduce.apply(user, [30, "부산"]);
```

**✅ 실행 결과**

```jsx
"민수는 30살, 부산 거주"
```

- **apply는 인자 목록을 배열 또는 유사 배열 형태로 받습니다. 초보자 단계에서는 'apply = array로 묶어서 전달'이라고 기억하면 됩니다.**

---

### A-4. bind 메서드

함수를 즉시 실행하지 않고, `this`가 바인딩된 **새로운 함수를 반환**합니다. 나중에 실행할 때 사용합니다.

**📝 문법**

```jsx
const boundFunc = func.bind(thisArg, arg1, arg2, ...);
```

**🧪 예시 코드**

```jsx
const user = { name: "지수" };

function introduce(age) {
  console.log(`${this.name}는 ${age}살`);
}

// 새로운 함수 생성 (실행 X)
const introduceJisu = introduce.bind(user);

// 나중에 실행
introduceJisu(22);
```

**✅ 실행 결과**

```jsx
"지수는 22살"
```

- **이벤트 핸들러나 콜백 함수에서 `this`를 잃어버리지 않게 고정할 때 주로 사용합니다.**
- **`bind()`는 원본 함수를 실행하거나 수정하지 않습니다. `this`와 일부 인자가 미리 고정된 새로운 함수를 만들어 반환합니다.**

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>📊 this 바인딩 메서드 최종 비교</h2>
</div>

절대 헷갈리지 않도록 강사님의 설명을 논리적으로 표로 묶었습니다.

| **메서드** | **실행 시점** | **인자 전달 방식** | **반환값 (핵심 논리)** |
| --- | --- | --- | --- |
| **`bind()`** | **나중에 실행** | 쉼표로 나열 | **새로운 함수**를 반환함 (예약 시스템) |
| **`call()`** | **즉시 실행** | 쉼표로 나열 | 함수의 **실행 결과** |
| **`apply()`** | **즉시 실행** | **배열 [ ]** 로 묶음 | 함수의 **실행 결과** (A=Array 기억법) |

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>부록 B. 배열 생성의 모든 것 (new Array, of, from 완벽 가이드)</h2>
</div>

### B-1. new Array()의 함정

`new Array()`는 인자의 개수와 타입에 따라 동작이 달라집니다.  
이 "불일치" 때문에 실무에서는 잘 쓰지 않습니다.

#### 1) 인자가 숫자 1개일 때

숫자만큼의 빈 공간(Slot)만 확보합니다.

```jsx
/* 길이가 3인 빈 배열 생성 */
const arr = new Array(3);

console.log(arr);
// [empty × 3] (요소가 아님!)
console.log(arr.length); // 3
console.log(arr[0]); // undefined
```

#### 2) 인자가 여러 개일 때

우리가 기대하는 일반적인 배열 생성입니다.

```jsx
/* 인자들을 요소로 갖는 배열 생성 */
const arr = new Array(1, 2, 3);

console.log(arr);
// [1, 2, 3]
console.log(arr.length); // 3
```

> 만약 new Array(3) 이 [3] 을 만들기를 원했다면 당황스럽겠죠? 😅

---

### B-2. 희소 배열과 Empty의 정체

구멍이 숭숭 뚫린 배열을 **희소 배열(Sparse Array)**이라고 하며, 이때의 구멍을 **Empty(비어있음)**라고 합니다.

#### 1) Empty vs Undefined

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

**📌 개념**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">Empty vs Undefined</span>
  <ul>
    <li><strong>Empty</strong> : 빈 슬롯(empty slot)입니다. 해당 인덱스에 요소 자체가 없는 상태라서 forEach 같은 일부 배열 메서드에서 건너뜁니다.</li>
    <li><strong>Undefined</strong> : 요소는 존재하지만 그 값이 undefined인 상태입니다. 순회 대상에 포함됩니다.</li>
  </ul>
</div>

#### 2) 희소 배열이 만들어지는 경우

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>new Array(3)</code></div>
    <div class="wda-fcard-dsc"><code>[empty × 3]</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>arr[10] = 1</code> (빈 배열에서)</div>
    <div class="wda-fcard-dsc"><code>[empty × 10, 1]</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>delete arr[0]</code></div>
    <div class="wda-fcard-dsc"><code>[empty, 2, 3]</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>[1, , 3]</code> (쉼표 연속)</div>
    <div class="wda-fcard-dsc">empty 생성</div>
  </div>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">희소 배열 지양</span>
  <ul>
    <li>희소 배열은 순회 시 건너뛰는 동작처럼 초보자가 예상하기 어려운 결과를 만들 수 있고, 엔진 최적화에도 불리할 수 있으므로 피하는 것이 좋습니다.</li>
    <li>항상 <code>Array.from()</code>이나 <code>fill()</code> 등으로 꽉 찬 배열(Dense Array)을 만드세요!</li>
  </ul>
</div>

---

### B-3. Array.of() - 일관성 있는 생성

ES6에서 도입된 `Array.of()`는 인자의 개수나 타입에 상관없이 **무조건 요소로 취급**하여 배열을 만듭니다.

**📝 문법**

```jsx
Array.of(items...);
```

#### 2) 숫자 1개여도 요소로!

```jsx
const arr1 = Array.of(3);

console.log(arr1);
// [3] (길이 1)
```

#### 3) 여러 개여도 요소로!

```jsx
const arr2 = Array.of(1, 2, 3);

console.log(arr2);
// [1, 2, 3]
```

- **함수 인자로 받은 값들을 배열로 만들 때, `new Array()`보다 훨씬 안전합니다.**

---

### B-4. Array.from() - 변화의 마법사

유사 배열 객체(array-like object)나 반복 가능한 객체(iterable)를 **진짜 배열로 바꿔줍니다.**

#### 1) 유사 배열을 배열로 (NodeList 등)

DOM 요소들을 선택했을 때 반환되는 NodeList는 배열처럼 보이지만 진짜 배열은 아닙니다.  
forEach는 지원되는 환경이 많지만, map/filter/reduce 같은 배열 메서드는 바로 사용할 수 없습니다.

```jsx
// HTML: <div>A</div> <div>B</div> <div>C</div>
const divs = document.querySelectorAll('div'); // NodeList (유사 배열)

// divs.map(...) // ❌ Error! NodeList에는 map이 없음

const divArray = Array.from(divs); // ✅ 진짜 배열로 변환
divArray.map(div => console.log(div.textContent)); // "A", "B", "C"
```

#### 2) 문자열을 배열로

문자열(String)도 반복 가능한 객체이므로 배열로 쪼갤 수 있습니다.

```jsx
const str = "Hello";
const chars = Array.from(str);

console.log(chars);
// ["H", "e", "l", "l", "o"]
```

---

### B-5. Array.from()의 강력한 기능 - 매핑

`Array.from()`은 두 번째 인자로 **변환 함수(Mapping Function)**를 받을 수 있습니다.  
`map()`을 한 번 더 쓸 필요가 없죠!

**📝 문법**

```jsx
Array.from(target, mapFn);
```

#### 2) 예시: 1부터 5까지 숫자 배열 만들기

```jsx
// 길이가 5인 배열을 만들면서, 각 요소를 인덱스 + 1로 채우기
const numbers = Array.from({ length: 5 }, (v, i) => i + 1);

console.log(numbers);
// [1, 2, 3, 4, 5]
```

#### 3) 왜 `{ length: 5 }`가 유사 배열인가요?

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">✅</div>
    <div class="wda-fcard-ttl">조건 충족</div>
    <div class="wda-fcard-dsc">Array.from()은 length 속성이 있는 객체를 array-like 객체처럼 처리할 수 있습니다. <code>{ length: 5 }</code>에는 실제 값은 없지만, Array.from()은 length를 보고 5번 반복할 수 있다고 판단합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⚙️</div>
    <div class="wda-fcard-ttl">동작 원리</div>
    <div class="wda-fcard-dsc"><code>Array.from()</code>은 <code>{ length: 5 }</code>를 보고 "방이 5개 필요한 유사 배열이구나"라고 판단하여 5개의 칸을 만듭니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🧩</div>
    <div class="wda-fcard-ttl">매핑 함수</div>
    <div class="wda-fcard-dsc">두 번째 함수 <code>(v, i) =&gt; i + 1</code>이 실행되면서 각 빈 칸(v는 undefined)에 인덱스(i)를 활용한 값이 채워집니다.</div>
  </div>
</div>

#### 4) 배열 생성 도구 최종 비교

| **방식** | **결과** | **특징 및 한계** |
| --- | --- | --- |
| **`new Array(5)`** | `[empty × 5]` | **희소 배열**이 생성되어 순회 시 요소를 건너뛰는 등 문제가 발생함 |
| **`Array.from({ length: 5 })`** | `[undefined × 5]` | **꽉 찬 배열(Dense Array)**을 보장하며, 즉시 원하는 값으로 가공(Mapping) 가능함 |

`{ length: 5 }`는 진짜 배열은 아니지만, **`length`라는 핵심 속성을 가지고 있기에** `Array.from`이 배열로 변환할 수 있는 **'유사 배열 객체'** 역할을 수행하는 것입니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>✅ 핵심 요약</h2>
</div>

### 1. 배열 생성 도구별 특징 비교

가장 효율적인 배열 생성 방식을 선택하기 위한 기준표입니다.

| **생성 방식** | **인자가 숫자 1개(3)일 때 결과** | **특징 및 한계** |
| --- | --- | --- |
| **`new Array(3)`** | `[empty × 3]` (희소 배열) | 인자가 숫자면 **길이**로 인식하여 빈 슬롯만 확보함. 실무 지양 |
| **`Array.of(3)`** | **`[3]`** (길이 1인 배열) | 인자의 개수/타입 무관하게 **무조건 요소**로 취급하여 일관성 있음 |
| **`Array.from({length:3})`** | **`[undefined, undefined, undefined]`** | **유사 배열**을 진짜 배열로 바꾸며, **꽉 찬 배열(Dense)**을 보장함 |

### 2. 희소 배열(Sparse Array)의 위험성

구멍 뚫린 배열(`empty`)은 일반적인 `undefined`와 다르게 동작하므로 주의가 필요합니다.

- **Empty의 정체** : 방 자체가 존재하지 않는 상태입니다.
- **차이점** : `forEach` 등 순회 시 **Empty는 아예 무시**되지만, `undefined`는 순회 대상에 포함됩니다.
- **발생 상황** : `new Array(n)`, `delete arr[i]`, 쉼표 연속 사용(`[1, , 3]`) 시 발생합니다.
- **결론** : 성능 문제와 예기치 못한 동작을 유발하므로 **`fill()`이나 `Array.from()`으로 꽉 찬 배열을 만드세요.**

### 3. Array.from() 마법사의 활용 (핵심)

<div style="position:relative;overflow:visible;">
  <p>Array.from()은 유사 배열 변환이나 일정한 길이의 배열을 생성하면서 값을 채울 때 매우 유용합니다.</p>
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔄</div>
    <div class="wda-fcard-ttl">① 진짜 배열로 변환 (Type Casting)</div>
    <div class="wda-fcard-dsc"><strong>유사 배열(NodeList)</strong> : document.querySelectorAll 결과물 등 배열 메서드가 없는 객체를 변환합니다.<br><strong>반복 가능 객체(String)</strong> : "Hello"를 ["H","e","l","l","o"]로 즉시 분리합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🧮</div>
    <div class="wda-fcard-ttl">② 생성과 동시에 가공 (Mapping)</div>
    <div class="wda-fcard-dsc"><code>Array.from(target, mapFn)</code> 문법을 통해 별도의 <code>map()</code> 호출 없이 데이터를 채울 수 있습니다.</div>
  </div>
</div>

```jsx
// 1부터 5까지 숫자 배열 만들기 (강사님 예시)
const numbers = Array.from({ length: 5 }, (v, i) => i + 1); 
// 결과: [1, 2, 3, 4, 5]
```

**📌 개념**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">{ length: 5 }가 왜 유사 배열인가요?</span>
  <ul>
    <li><strong>유사 배열의 조건</strong> : 숫자 형태의 인덱스와 <strong>length 속성</strong>만 있으면 유사 배열로 간주됩니다.</li>
    <li><strong>논리적 해석</strong> : <code>Array.from</code>은 객체 내의 <code>length</code>를 보고 필요한 방의 개수를 판단하므로, <code>{ length: 5 }</code>는 훌륭한 <strong>배열 생성용 설계도</strong> 역할을 수행합니다.</li>
  </ul>
</div>
