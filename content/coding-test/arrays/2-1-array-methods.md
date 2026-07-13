---
title: "2-1 배열 메서드"
status: "completed"
description: "push/pop/shift/unshift, slice/splice, map/filter/sort, find/includes 등 코딩테스트 필수 배열 메서드를 익힙니다."
category: "Coding Test"
section: "Coding Test"
tags:
  - coding-test
  - array
  - javascript
  - data-structure
---

<style>
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-cy{background:rgba(234,179,8,.06);border-color:#eab308}
.wda-cy .wda-clabel{color:#ca8a04}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 16px;margin:.8rem 0 1.6rem;font-size:.83rem;line-height:1.75}
.wda-goal-label{font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#22c55e;display:block;margin-bottom:10px}
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
.wda-sdsc ul{margin:.3rem 0 0;padding-left:1.1rem}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px}
.wda-compare-ttl{font-size:.84rem;font-weight:700;margin-bottom:8px}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:4px}
.wda-legacy{border-color:rgba(239,68,68,.22);background:rgba(239,68,68,.02)}
.wda-modern{border-color:rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.79rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:200px}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
</style>

## 🎯 학습 목표

<div class="wda-goal">
➕ <strong>추가/삭제 메서드</strong> — push, pop, shift, unshift를 사용하여 배열의 앞뒤로 요소를 추가하거나 제거하는 방법을 배웁니다.<br>
✂️ <strong>자르기/변형 메서드</strong> — slice, splice를 사용하여 배열을 자르거나 중간의 값을 수정하는 등 구조를 조작합니다.<br>
⇄ <strong>변환 메서드</strong> — map, filter, reduce를 사용하여 원본 데이터를 원하는 형태의 새로운 데이터로 변환합니다. (가장 중요!)<br>
🔍 <strong>정렬/검색 메서드</strong> — sort, find, includes를 사용하여 데이터를 순서대로 정렬하거나 특정 값을 찾아냅니다.
</div>

---

## 1. 배열이란? (What is an Array?)

여러 데이터를 순서대로 저장하는 가장 기본적인 자료구조입니다.

**1) 📑 배열의 특징 (Features)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">인덱스 (Index)</div><div class="wda-fcard-dsc">0부터 시작하는 번호를 가집니다. (첫 번째 데이터는 0번)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">길이 (Length)</div><div class="wda-fcard-dsc">.length 프로퍼티로 데이터의 개수를 확인할 수 있습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">다양한 타입</div><div class="wda-fcard-dsc">숫자, 문자열, 객체 등 다양한 타입을 하나의 배열에 섞어서 저장할 수 있습니다.</div></div>
</div>

**2) 💻 기본 문법 (Syntax)**

```js
// 1. 배열 생성
const arr = [1, 2, 3, 4, 5];

// 2. 접근 (Access)
console.log(arr[0]);      // 1 (첫 번째 요소)
console.log(arr[4]);      // 5 (마지막 요소 - 인덱스는 4)
console.log(arr.length);  // 5 (길이 - 요소의 개수)
```

**3) ⚠️ 자주 하는 실수 (Common Mistakes)**

인덱스는 0부터 시작한다는 점 때문에 범위 계산 실수가 잦습니다.

| 구분 | 코드 예시 | 결과 | 설명 및 해결책 |
|---|---|---|---|
| 범위 초과 | `arr[5]` | undefined | 길이가 5라면 인덱스는 0~4까지입니다. 없는 방을 찾으면 undefined가 나옵니다. |
| 음수 인덱스 | `arr[-1]` | undefined | 파이썬과 달리 자바스크립트 `[]` 접근법은 음수 인덱스를 지원하지 않습니다. |
| 마지막 요소 | `arr[arr.length - 1]` | 5 (값) | 마지막 값은 항상 **(길이 - 1)**번 인덱스에 있습니다. 이 공식으로 안전하게 접근하세요. |

---

## 2. push & pop (끝에서 넣고 빼기)

배열의 맨 끝에 데이터를 추가하거나 삭제할 때 사용합니다.

**1) ➡ push (끝에 추가)**

배열의 맨 뒤에 새로운 요소를 밀어 넣습니다.

```js
const arr = [1, 2, 3];

arr.push(4);        // 끝에 4 추가
console.log(arr);   // [1, 2, 3, 4]

arr.push(5, 6);     // 여러 개도 가능
console.log(arr);   // [1, 2, 3, 4, 5, 6]
```

**2) ⬅ pop (끝에서 삭제)**

배열의 마지막 요소를 꺼내서 제거합니다.

```js
const arr = [1, 2, 3, 4];

const last = arr.pop(); // 마지막 제거
console.log(last);      // 4 (제거된 값)
console.log(arr);       // [1, 2, 3]
```

**💡 사용 팁**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">코테 활용</span>
  <strong>스택(Stack) 구현</strong> — push와 pop을 함께 사용하면 LIFO (Last In First Out) 구조인 스택을 만들 수 있습니다.
</div>

---

## 3. shift & unshift (앞에서 넣고 빼기)

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">unshift() — 앞에 추가</div>
    괄호 안의 값을 배열의 가장 앞에 넣습니다. 기존 데이터들은 뒤로 한 칸씩 밀려납니다. 여러 개를 한 번에 넣을 수도 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">shift() — 앞에서 삭제</div>
    배열의 첫 번째 요소를 제거하고 그 값을 반환합니다. 대기열에서 손님을 한 명씩 입장시키는 것과 같습니다.
  </div>
</div>

**💻 예제 코드**

```js
const arr = [2, 3, 4];

// 1. unshift (앞에 추가)
arr.unshift(1);
console.log(arr); // [1, 2, 3, 4] (1이 맨 앞에 추가됨)

// 2. shift (앞에서 삭제)
const first = arr.shift();
console.log(first); // 1 (삭제된 값 반환)
console.log(arr);   // [2, 3, 4] (나머지는 그대로)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>큐(Queue) 구현</strong> — push(뒤에 넣기)와 shift(앞에서 빼기)를 조합하면, 먼저 들어온 데이터가 먼저 나가는(FIFO: First In First Out) '큐' 자료구조가 됩니다.<br>
  <strong>주의할 점</strong> — 맨 앞에 데이터를 넣거나 빼면, 뒤에 있는 모든 데이터가 한 칸씩 이동해야 하므로 데이터가 많을 경우 속도가 느려질 수 있습니다.
</div>

---

## 4. 시간 복잡도 (Time Complexity)

**정의**

데이터의 개수($n$)가 많아질 때, 연산 속도($O$)가 얼마나 느려지는지 나타내는 척도입니다.

- $O$ (Order) : 증가하는 비율(기울기)을 의미합니다.
- $n$ (Input Size) : 입력 크기, 즉 데이터의 개수를 의미합니다.

**1) 주요 표기법 비교 ($O(1)$ vs $O(n)$)**

코딩테스트에서는 가능한 **$O(1)$**을 선호하고, **$O(n)$**은 데이터 크기를 고려해서 주의해서 써야 합니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">$O(1)$ — 상수 시간 (Constant)</div>
    데이터 양과 상관없이 속도가 일정합니다. 데이터가 1개든 100만 개든 똑같이 빠릅니다.<br>
    예시: 배열 끝에 추가 (push) / 인덱스로 접근 (arr[0])
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">$O(n)$ — 선형 시간 (Linear)</div>
    데이터 양에 비례해서 시간이 늘어납니다. 데이터가 10배면 걸리는 시간도 10배가 됩니다.<br>
    예시: 배열 앞에 추가 (unshift) / 전체 검색 (반복문)
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 unshift는 $O(n)$일까?</strong> — 맨 앞에 데이터를 넣으려면, 기존에 있던 모든 데이터를 뒤로 한 칸씩 밀어내야(Shifting) 하기 때문입니다.<br>
  데이터가 100만 개라면 100만 번의 이동 작업이 필요하므로 느릴 수밖에 없습니다.<br>
  <strong>왜 push는 $O(1)$일까?</strong> — 기존 데이터는 건드리지 않고, 맨 뒤 빈 공간에 값만 쏙 넣으면 되기 때문에 매우 빠릅니다.<br>
  <strong>활용</strong> — 데이터가 아주 많을 때는 unshift나 shift 사용을 자제하고, 다른 자료구조(Linked List 등)를 고려하거나 로직을 변경해야 합니다.
</div>

---

## 5. 종합 비교: push/pop vs shift/unshift

데이터를 어디서(앞/뒤) 넣고 빼느냐에 따라 **속도(성능)**와 용도가 완전히 달라집니다.

**1) 📊 메서드 상세 비교표 (Comparison Table)**

| 메서드 | 위치 (Pos) | 동작 (Action) | 반환값 (Return) | 시간 복잡도 | 속도 |
|---|---|---|---|---|---|
| push | 끝 (Back) | 추가 | 새로운 길이 | $O(1)$ | 빠름 🐇 |
| pop | 끝 (Back) | 삭제 | 삭제된 값 | $O(1)$ | 빠름 🐇 |
| unshift | 앞 (Front) | 추가 | 새로운 길이 | $O(n)$ | 느림 🐢 |
| shift | 앞 (Front) | 삭제 | 삭제된 값 | $O(n)$ | 느림 🐢 |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">왜 속도 차이가 날까요?</span>
  <strong>뒤쪽 조작($O(1)$)</strong> — 맨 뒤에 붙이거나 떼기만 하면 되므로 데이터 양과 상관없이 즉시 처리됩니다.<br>
  <strong>앞쪽 조작($O(n)$)</strong> — 맨 앞을 건드리면, 뒤에 줄 서 있는 모든 데이터가 한 칸씩 이동해야 하므로 데이터가 많을수록 느려집니다.
</div>

---

## 6. 💻 스택 vs 큐 코드 비교 (Code Implementation)

이 메서드들을 조합하여 **스택(Stack)**과 큐(Queue) 자료구조를 만듭니다.

**① 스택 (Stack) : 접시 쌓기 🥞**

LIFO (Last In First Out): 나중에 들어간 게 먼저 나옵니다. 👉 push (뒤에 넣기) + pop (뒤에서 빼기) 조합

```js
// 스택 (LIFO) - 뒤에서만 작업
const stack = [];

stack.push(1); // 넣기
stack.push(2); 
// 현재: [1, 2]

const item = stack.pop(); // 빼기 (맨 뒤 '2'가 나옴)

console.log(item);  // 2
console.log(stack); // [1]
```

**② 큐 (Queue) : 맛집 줄 서기 🎫**

FIFO (First In First Out): 먼저 들어간 게 먼저 나옵니다. 👉 push (뒤에 줄 서기) + shift (앞에서 입장하기) 조합

```js
// 큐 (FIFO) - 뒤로 넣고 앞으로 뺌
const queue = [];

queue.push(1); // 줄 서기
queue.push(2);
// 현재: [1, 2]

const person = queue.shift(); // 입장 (맨 앞 '1'이 나옴)

console.log(person); // 1
console.log(queue);  // [2] (2번이 이제 맨 앞)
```

---

## 7. 자르기/변형 메서드 ① : slice

"원본은 그대로 두고, 원하는 부분만 복사해서 가져오고 싶을 때" 사용합니다.

**1) ✂️ 기본 문법 (Syntax)**

`slice(시작, 끝)` 형태로 사용하며, **"끝 인덱스는 포함하지 않는다"**는 점을 꼭 기억해야 합니다.

| 코드 | 설명 (Description) | 예시 ([1, 2, 3, 4, 5]) |
|---|---|---|
| slice(1, 3) | 인덱스 1부터 3 전까지(1~2) 자릅니다. | [2, 3] |
| slice(2) | 인덱스 2부터 끝까지 다 자릅니다. | [3, 4, 5] |
| slice(-2) | 뒤에서부터 2개를 자릅니다. | [4, 5] |
| slice() | 아무것도 안 적으면 전체를 복사합니다. | [1, 2, 3, 4, 5] (복제본) |

**2) 💡 자주 쓰는 패턴 (Best Practice)**

코딩테스트에서 빈번하게 사용되는 패턴입니다.

- 배열 복사 : 원본을 건드리지 않고 똑같은 배열을 하나 더 만들 때 씁니다.

```js
const copy = arr.slice(); // 또는 [...arr]
```

- 뒤에서 N개 가져오기 : 최근 기록 3개만 보여주고 싶을 때 유용합니다.

```js
const recent = arr.slice(-3); // 뒤에서 3개
```

- 앞에서 N개 가져오기 : 상위 랭킹 3명만 뽑을 때 사용합니다.

```js
const top3 = arr.slice(0, 3); // 0번부터 3개
```

---

## 8. 자르기/변형 메서드 ② : splice (수술하기)

"원본을 변경하면서 요소를 삭제하거나 추가하고 싶을 때" 사용합니다.

**1) 🗑️ 삭제하기 (Delete)**

원하는 위치에서 요소를 콕 집어 제거할 수 있습니다.

```js
const arr = [1, 2, 3, 4, 5];

// splice(시작, 삭제개수)

// 인덱스 2번(값 3)부터 1개를 삭제합니다.
arr.splice(2, 1); 
console.log(arr); // [1, 2, 4, 5] (3이 사라짐)

// 인덱스 1번(값 2)부터 2개를 삭제합니다.
arr.splice(1, 2); 
console.log(arr); // [1, 5] (2, 4가 사라짐)
```

**2) ➕ 추가하기 (Add)**

삭제 개수를 0으로 설정하면, 아무것도 지우지 않고 중간에 새 값을 끼워 넣을 수 있습니다.

```js
const arr = [1, 2, 5];

// splice(시작, 0, 추가값들)

// 인덱스 2번 위치에 3과 4를 추가합니다.
arr.splice(2, 0, 3, 4); 
console.log(arr); // [1, 2, 3, 4, 5]
```

**3) ⇄ 교체하기 (Replace)**

삭제와 추가를 동시에 하면, 기존 값을 빼고 새 값으로 갈아끼우는 교체 효과를 낼 수 있습니다.

```js
const arr = [1, 2, 'X', 4, 5];

// splice(시작, 삭제개수, 추가값)

// 인덱스 2번에서 1개('X')를 지우고, 그 자리에 3을 넣습니다.
arr.splice(2, 1, 3); 
console.log(arr); // [1, 2, 3, 4, 5]
```

**4) ⚠️ slice vs splice 비교**

이 두 가지는 이름이 비슷해서 정말 많이 헷갈립니다.

| 구분 | slice (슬라이스) | splice (스플라이스) |
|---|---|---|
| 원본 | 유지 (안전) | 변경 (파괴) |
| 용도 | 복사, 부분 가져오기 | 삭제, 추가, 교체 |
| 반환값 | 잘라낸 복사본 | 삭제된 요소들의 배열 |

**🧠 기억법**

<div class="wda-callout wda-cs">
  splice의 p를 plastic surgery(성형수술) 또는 patch(수선)라고 생각하면 쉽습니다. 원본을 뜯어고치는 것이니까요!<br>
  splice = Change (변경)으로 외우셔도 좋습니다.
</div>

---

## 9. 변환 메서드 ① : map (변환하기)

"모든 요소를 변환해서 새 배열 만들기"

**1) `<>` 기본 사용법 (Basic Usage)**

map은 원본 배열(nums)은 건드리지 않고, 변환된 새로운 배열(doubled, squared)을 반환합니다.

```js
const nums = [1, 2, 3, 4, 5];

// 각 요소에 2 곱하기
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 각 요소를 제곱
const squared = nums.map(n => n ** 2);
console.log(squared); // [1, 4, 9, 16, 25]

// 원본은 그대로!
console.log(nums); // [1, 2, 3, 4, 5]
```

**2) 💡 코테 활용 예시**

실전 문제 풀이에서 자주 쓰이는 3가지 패턴입니다.

① 문자열 배열을 숫자로 변환

```js
const strs = ['1', '2', '3'];
const nums = strs.map(Number); // '1' -> 1 로 변환
// [1, 2, 3]
```

② 객체 배열에서 특정 값만 추출

```js
const users = [{name: 'Kim'}, {name: 'Lee'}];
const names = users.map(u => u.name); // 이름만 뽑기
// ['Kim', 'Lee']
```

③ 인덱스(Index)도 함께 활용

```js
const arr = ['a', 'b', 'c'];
// v: 값, i: 인덱스
arr.map((v, i) => `${i}: ${v}`); 
// ['0: a', '1: b', '2: c']
```

---

## 10. 변환 메서드 ② : filter (걸러내기)

"조건에 맞는 요소만 모아서 새로운 배열 만들기"

**1) 🧹 기본 사용법 (Basic Usage)**

filter 내부의 함수가 true를 반환하는 요소만 남기고 나머지는 버립니다. map과 마찬가지로 원본은 변하지 않습니다.

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// 1. 짝수만 걸러내기 (n % 2 === 0)
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8]

// 2. 5보다 큰 수만 남기기 (n > 5)
const big = nums.filter(n => n > 5);
console.log(big); // [6, 7, 8]

// 원본은 그대로 유지됨
console.log(nums); // [1, 2, 3, 4, 5, 6, 7, 8]
```

**2) 💡 코테 활용 예시 (Coding Test Examples)**

데이터 클렌징(전처리) 과정에서 정말 자주 쓰이는 3가지 패턴입니다.

① 특정 값 제거하기

```js
const arr = [1, 2, 3, 2, 4, 2];

// 2가 아닌 것만 남기면 -> 2를 제거하는 효과!
const no2 = arr.filter(n => n !== 2); 
// [1, 3, 4]
```

② 빈 값(Falsy) 제거하기 (꿀팁!)

```js
const arr = ['a', '', 'b', null, 'c'];

// Boolean 함수를 넣으면 false 취급되는 값(빈 문자열, null, 0 등)이 다 사라짐
const clean = arr.filter(Boolean); 
// ['a', 'b', 'c']
```

③ 중복 제거 (Set 활용)

엄밀히 말해 filter는 아니지만, "걸러내기" 주제에서 빠질 수 없는 패턴입니다.

```js
const arr = [1, 2, 2, 3, 3, 3];

// Set 자료구조는 중복을 허용하지 않음 -> 배열로 변환
const unique = [...new Set(arr)];
// [1, 2, 3]
```

---

## 11. 정렬/검색 메서드 ① : sort (정렬하기)

"배열을 순서대로 정렬하기 (주의: 원본이 변경됨!)"

**1) ⚠️ 기본 정렬의 함정 (The Trap)**

sort()를 그냥 쓰면 숫자를 **문자열(String)**로 취급해서 정렬합니다. 그래서 10이 2보다 먼저 나오는 대참사(?)가 일어납니다.

```js
const nums = [10, 2, 30, 4];

// 그냥 정렬하면 문자열 기준! ("10" < "2")
nums.sort(); 

console.log(nums); // [10, 2, 30, 4] (🚨 틀림!)
```

**2) ✅ 올바른 숫자 정렬 (Number Sort)**

숫자 크기대로 정렬하려면 비교 함수를 넣어줘야 합니다. 공식처럼 외우세요!

```js
const nums = [10, 2, 30, 4];

// 1. 오름차순 (작은 수 ➡ 큰 수)
// a - b 가 음수면 a를 앞으로 보냄
nums.sort((a, b) => a - b);
console.log(nums); // [2, 4, 10, 30]

// 2. 내림차순 (큰 수 ➡ 작은 수)
// b - a 가 양수면 b를 앞으로 보냄
nums.sort((a, b) => b - a);
console.log(nums); // [30, 10, 4, 2]
```

**3) 🔤 문자열 정렬 (String Sort)**

문자열(한글, 영어)은 기본 sort()만 써도 사전 순서대로 잘 정렬됩니다.

```js
const strs = ['banana', 'apple', 'cherry'];
strs.sort();
console.log(strs); // ['apple', 'banana', 'cherry']
```

**4) 📊 정렬 공식 요약표**

| 구분 | 코드 (공식) | 원리 |
|---|---|---|
| 숫자 오름차순 | `arr.sort((a, b) => a - b)` | 결과가 음수면 a가 앞으로 |
| 숫자 내림차순 | `arr.sort((a, b) => b - a)` | 결과가 양수면 b가 앞으로 |
| 문자열 정렬 | `arr.sort()` | 가나다/ABC 순서 자동 정렬 |

---

## 12. 검색 메서드 : find, includes, indexOf

상황에 따라 반환값(결과)이 다르므로 잘 구분해서 써야 합니다.

**1) ✅ includes (존재 여부 확인)**

"이 데이터가 있어?"라고 물어볼 때 사용합니다. 참(true) 또는 **거짓(false)**만 대답합니다.

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.includes(3));  // true  (있음!)
console.log(arr.includes(10)); // false (없음...)

// 활용: 조건문에서 아주 자주 쓰입니다.
if (arr.includes(3)) {
  console.log("있음!");
}
```

**2) 🔢 indexOf (위치 확인)**

"이 데이터가 **몇 번째(인덱스)**에 있어?"라고 물어볼 때 사용합니다.

```js
const arr = [1, 2, 3, 2, 5];

console.log(arr.indexOf(2));  // 1 (맨 앞에서부터 찾아서 첫 번째 2의 위치)
console.log(arr.indexOf(10)); // -1 (★ 없으면 무조건 -1 반환)
```

**3) 🕵️‍♀️ find (조건으로 찾기)**

단순한 값이 아니라, 복잡한 조건에 맞는 요소를 찾을 때 사용합니다. (주로 객체 배열에서 많이 씀)

```js
const users = [
  { id: 1, name: 'Kim' },
  { id: 2, name: 'Lee' }
];

// id가 2인 사람을 찾아줘!
const user = users.find(u => u.id === 2);

console.log(user); // { id: 2, name: 'Lee' } (찾은 요소 자체를 반환)
// ※ 만약 못 찾으면 undefined 반환
```

**📊 검색 메서드 요약표**

상황에 맞춰 골라 쓰세요.

| 메서드 | 찾는 기준 | 반환값 (성공/실패) | 용도 |
|---|---|---|---|
| includes | 값 | true / false | 단순히 있는지 확인할 때 |
| indexOf | 값 | 인덱스 / -1 | 위치가 필요할 때 |
| find | 조건 함수 | 요소 / undefined | 특정 조건의 객체를 찾을 때 |

---

## 13. 기타 유용한 메서드 (유틸리티)

**1) 🔗 join & split (문자열 ↔ 배열 변환)**

코딩테스트에서 문자열 처리 문제의 80%는 이 두 녀석으로 해결합니다.

- join : 배열을 문자열로 합침 (접착제 역할)
- split : 문자열을 배열로 쪼갬 (가위 역할)

```js
// join: 배열 ➔ 문자열
const arr = ['a', 'b', 'c'];

arr.join('-'); // 'a-b-c' (하이픈으로 연결)
arr.join('');  // 'abc'   (그냥 다 붙이기 - ★가장 많이 씀)
arr.join();    // 'a,b,c' (기본값은 쉼표)

// split: 문자열 ➔ 배열
const str = 'a-b-c';

str.split('-'); // ['a', 'b', 'c'] (하이픈 기준 자르기)
str.split('');  // ['a', '-', 'b', '-', 'c'] (한 글자씩 다 자르기)
```

**2) 🔄 reverse (뒤집기)**

배열의 순서를 거꾸로 뒤집습니다. 원본이 변경되므로 주의해야 합니다.

```js
const arr = [1, 2, 3];

arr.reverse(); 
console.log(arr); // [3, 2, 1] (원본이 바뀜!)

// 💡 원본 유지하며 뒤집기 (꿀팁)
const reversed = [...arr].reverse();
```

**3) ☑️ every & some (조건 검사)**

배열 안의 데이터를 검사하여 true / false를 반환합니다.

- every : 모두 만족해야 true (깐깐함)
- some : 하나라도 만족하면 true (관대함)

```js
const nums = [2, 4, 6, 8];

// every: 모두 짝수인가?
nums.every(n => n % 2 === 0); // true
nums.every(n => n > 5);       // false (2, 4 때문에 탈락)

// some: 하나라도 5보다 큰가?
nums.some(n => n > 5);        // true (6, 8이 있으니까 통과)
nums.some(n => n > 10);       // false (만족하는 게 하나도 없음)
```

**4) ➕ concat & flat (합치기 & 펼치기)**

```js
// concat: 배열 합치기
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
// 요즘은 spread 문법을 더 많이 씀: [...arr1, ...arr2]

// flat: 중첩 배열 펼치기 (2차원 -> 1차원)
[[1, 2], [3, 4]].flat(); // [1, 2, 3, 4]
```
