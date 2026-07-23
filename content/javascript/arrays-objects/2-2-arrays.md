---
title: "2-2 배열로 여러 데이터 관리하기"
status: "completed"
description: "배열 생성부터 접근, 추가/제거, 검색, 정렬, 복사, 구조분해까지 배열의 핵심 메서드를 정리한다."
category: "JavaScript"
section: "Arrays & Objects"
tags:
  - javascript
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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
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

<div class="wda-goal" style="position:relative;overflow:visible;">
  • <strong>배열의 개념</strong> — 순서가 있는 데이터 집합의 필요성과 구조 이해합니다.<br>
  • <strong>추가와 제거</strong> — push, pop, splice 등으로 배열 조작할 수 있습니다.<br>
  • <strong>검색과 변환</strong> — find, slice, sort 등 다양한 메서드 활용할 수 있습니다.<br>
  • <strong>복사와 구조</strong> — 얕은 복사, 다차원 배열의 개념 이해합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. 배열이란 무엇인가?</h2>
</div>

데이터를 순서대로 담는 바구니를 **배열(Array)**이라고 합니다.

**📌 왜 필요한가?**

변수가 너무 많아지면 관리가 힘들어집니다.

```js
// 😱 변수가 너무 많음!
const s1 = "철수"; // 1번 학생을 s1이라는 이름표에 저장
const s2 = "영희"; // 2번 학생을 s2라는 이름표에 저장
// ... 만약 학생이 100명이라면? 변수를 100개 만들어야 할까요?
```

**📌 배열로 해결**

하나의 변수에 여러 데이터를 묶어서 관리할 수 있습니다.

```js
// 😊 하나의 변수에 쏙!
const students = ["철수", "영희"];
// students라는 바구니(배열)에 철수와 영희를 같이 담음
```

**📌 핵심 용어**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📍</div>
    <div class="wda-fcard-ttl">인덱스 (Index)</div>
    <div class="wda-fcard-dsc">데이터의 위치 번호입니다. <strong>0부터 시작</strong>한다는 점이 가장 중요합니다. 예: <code>students[0]</code>은 "철수", <code>students[1]</code>은 "영희"입니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🧩</div>
    <div class="wda-fcard-ttl">요소 (Element)</div>
    <div class="wda-fcard-dsc">배열 안에 저장된 <strong>각각의 값(데이터)</strong>을 의미합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📏</div>
    <div class="wda-fcard-ttl">길이 (Length)</div>
    <div class="wda-fcard-dsc">배열 안에 들어있는 요소의 <strong>총 개수</strong>입니다. 예: 위 예시에서 <code>students.length</code>는 2입니다.</div>
  </div>
</div>

**📌 수도코드(Pseudo-code)란?**

실제 컴퓨터 언어는 아니지만, 사람이 이해하기 쉽게 프로그래밍 논리를 한글이나 영어로 적어 놓은 '가짜 코드'를 말합니다.

**🔹 생성**

```text
생성 학생목록 = [ "철수", "영희", "민수" ]
// '학생목록'이라는 이름의 바구니를 만들고 세 명을 순서대로 넣음
```

**🔹 읽기**

```text
읽기 학생목록[0] 을 꺼내면? -> "철수"
// 인덱스는 0부터 시작하므로, 첫 번째 칸([0])에 있는 '철수'를 가져옴
```

**🔹 수정**

```text
수정 학생목록[1] 에 "지수" 대입
// 두 번째 칸([1])에 있던 '영희'를 빼고 '지수'를 새로 넣음

// -> 결과: ["철수", "지수", "민수"]
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. 배열 생성</h2>
</div>

가장 직관적인 리터럴 방식과 전통적인 생성자 방식을 알아봅니다.

**📝 배열 리터럴 (강력 추천!)**

대부분의 경우 이 방식을 사용합니다. 대괄호 `[]`를 사용하여 생성합니다.

```js
// 대괄호 []를 사용하여 생성
const fruits = ["사과", "바나나"]; // 사과와 바나나가 들어있는 바구니 만들기
const empty = []; // 비어있는 바구니 만들기 (빈 배열)
```

**📌 개념**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">리터럴이란?</span>
  '리터럴(Literal)'은 복잡한 과정 없이 보이는 그대로의 값을 써서 데이터를 만드는 방식을 말해요.<br>
  배열에서는 <code>[]</code>가 그 약속입니다.
</div>

**📝 Array 생성자**

`new` 키워드를 사용하여 배열을 만듭니다.

```js
// new 키워드 사용
const nums = new Array(1, 2, 3); // 1, 2, 3이 들어있는 배열 생성
const spaces = new Array(5); // [empty x 5]
// 주의: 숫자 하나만 넣으면 데이터가 아니라 '길이'가 됩니다. 즉, 5칸짜리 빈 방을 만든 거예요.
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">생성자 주의점</span>
  <code>new Array(5)</code>처럼 숫자 하나만 쓰면 숫자 '5'를 저장하는 게 아니라, <strong>"비어있는 5칸을 미리 만들어줘"</strong>라는 뜻이 됩니다.<br>
  헷갈리기 쉽기 때문에 리터럴 방식(<code>[]</code>)을 더 권장해요.
</div>

**📌 배열 생성 - 특수**

특정 상황에서 사용하는 배열 생성 고급 방법입니다.

**📝 Array.of()**

인자로 전달받은 값을 무조건 배열의 요소로 만듭니다.

```js
// 인자를 무조건 요소로 만듦
Array.of(3); // 결과: [3]
// [해설] 앞에서 배운 new Array(3)이 '빈 공간 3개'를 만들었다면,
// 이 방식은 숫자 '3'이 딱 들어있는 1칸짜리 배열을 만듭니다. (길이 아님!)
```

**📝 Array.from()**

유사 배열(배열처럼 보이지만 배열은 아닌 것)을 진짜 배열로 변환할 때 사용합니다.

```js
// 유사 배열을 배열로 변환
Array.from("Hello");
// 결과: ["H", "e", "l", "l", "o"]
// [해설] "Hello"라는 글자 뭉치를 하나하나 쪼개서 배열의 요소로 담아줍니다.
```

**📌 개념**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">유사 배열이란?</span>
  length 속성과 숫자 인덱스를 가지고 있어서 배열처럼 보이지만, 실제 배열은 아닌 객체를 말합니다.<br>
  그래서 <code>push</code>, <code>pop</code>, <code>map</code> 같은 배열 메서드를 바로 사용할 수 없습니다.<br>
  <code>Array.from()</code>은 이런 데이터들에게 "배열의 자격"을 주는 마법 같은 명령어입니다.
</div>

---

## 3. 배열 접근

**📌 수도코드 (Pseudo-code)**

- 읽기 : "0번 칸에 뭐 있어?" → "철수"
- 쓰기 : "1번 칸을 '민수'로 바꿔줘" → (영희가 사라지고 민수가 들어감)

**📌 개념**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">읽기와 쓰기의 차이</span>
  <ul>
    <li><strong>읽기(Access)</strong> : 배열 안의 값을 건드리지 않고 무엇이 들어있는지만 확인하는 작업입니다. 원본은 그대로 유지됩니다.</li>
    <li><strong>쓰기(Update)</strong> : 특정 위치의 값을 새로운 값으로 바꾸는 작업입니다. 기존 값은 삭제되니 주의해야 합니다.</li>
  </ul>
</div>

**📌 인덱스 구조 이해**

| **인덱스(위치)** | **0번** | **1번** | **2번** |
| --- | --- | --- | --- |
| **기존 데이터** | "철수" | "영희" | ? |
| **수정 후** | "철수" | "민수" | ? |

**핵심 포인트**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">번호표와 덮어쓰기</span>
  <ul>
    <li><strong>번호표는 0번부터</strong> : 첫 번째 데이터는 항상 [0]에 들어있습니다.</li>
    <li><strong>덮어쓰기</strong> : 수정(쓰기)은 기존 것을 지우고 새로운 것을 채워 넣는 개념입니다.</li>
  </ul>
</div>

**📝 문법 및 활용**

**📝 요소 읽기 (Read) - 기본**

대괄호 `[]` 안에 인덱스 숫자를 넣어 특정 위치의 값을 가져옵니다.

```js
const colors = ["빨강", "파랑", "초록"];

// 0번 인덱스(첫 번째) 읽기
console.log(colors[0]); // 출력: "빨강"

// 1번 인덱스(두 번째) 읽기
console.log(colors[1]); // 출력: "파랑"
```

**🧪 요소 읽기 (Read) - 응용: 마지막 요소 찾기**

배열의 전체 길이를 활용하여 마지막 칸의 데이터를 정확히 가져오는 방법입니다.

```js
const colors = ["빨강", "파랑", "초록"];

// 💡 공식: [배열의 길이 - 1]
// 배열의 길이는 3이지만, 마지막 번호는 2이므로 1을 빼줍니다.

console.log(colors[colors.length - 1]);
// 출력: "초록" (가장 마지막에 있는 데이터)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">왜 length - 1 인가요?</span>
  <ul>
    <li>컴퓨터는 번호를 0부터 세기 때문입니다.</li>
    <li>데이터가 3개(길이)라면 번호는 0, 1, 2까지만 존재합니다.</li>
    <li>그래서 항상 '길이보다 1 작은 수'가 마지막 번호가 됩니다.</li>
  </ul>
</div>

**📝 요소 쓰기 (Write)**

특정 인덱스 위치에 새로운 값을 대입하여 기존 내용을 수정하거나 추가합니다.

```js
const colors = ["빨강", "파랑", "초록"];

// 1번 인덱스 수정하기 ("파랑" -> "노랑")
colors[1] = "노랑";

// [결과] ["빨강", "노랑", "초록"]
// 원본의 "파랑"이 삭제되고 "노랑"이 그 자리를 차지합니다.

// ⚠️ 주의: 인덱스를 건너뛰고 추가할 경우
colors[5] = "보라";

// [결과] ["빨강", "노랑", "초록", empty × 2, "보라"]
// 중간에 비어있는 칸(empty)들이 생겨 관리가 어려워지므로 순서대로 추가하는 것이 좋습니다.
```

**📝 요약 메모**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">읽기와 쓰기 정리</span>
  <ul>
    <li><strong>순서대로 읽기</strong> : [0]부터 시작해서 [length - 1]까지 읽을 수 있습니다.</li>
    <li><strong>덮어쓰기</strong> : 배열[번호] = 값은 해당 칸의 물건을 새것으로 바꾸는 '교체' 작업입니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. 배열의 수정 - 심화</h2>
</div>

**📌 length의 비밀 : 길이를 직접 수정하기**

자바스크립트에서는 배열의 길이를 나타내는 `length` 값을 강제로 바꿀 수 있습니다.  
이 기능은 데이터를 삭제하거나 공간을 확보할 때 사용되지만 매우 주의해야 합니다.

```js
const arr = ["A", "B", "C"];
console.log(arr.length); // 출력: 3

// ✂️ 길이를 줄이면? 데이터가 잘려 나갑니다!
arr.length = 1;
console.log(arr); // 결과: ["A"] (B와 C는 영원히 삭제됨)

// ➕ 길이를 늘리면? 빈 공간이 생깁니다!
arr.length = 3;
console.log(arr); // 결과: ["A", empty × 2]
// [해설] undefined가 아니라 정말 '비어 있는' 공간이 생깁니다.
```

**⚠️ 범위 밖 접근 (Out of bounds)**

배열에 존재하지 않는 번호(인덱스)를 부를 때 발생하는 현상입니다.  
자바스크립트는 에러를 내뱉는 대신 `undefined`를 돌려줍니다.

```js
const arr = ["A", "B"];

// ❓ 없는 인덱스 접근
console.log(arr[99]); // 결과: undefined
// [주의] 프로그램이 멈추지(에러 나지) 않기 때문에 버그를 찾기 더 힘들 수 있습니다.

// ➖ 음수 인덱스 접근
console.log(arr[-1]); // 결과: undefined
// [해설] 파이썬 등 다른 언어와 달리 자바스크립트는 뒤에서부터 세는 기능을 지원하지 않습니다.
```

**⚠️ 초보자를 위한 헷갈림 정리 (심화)**

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  length는 함부로 건드리지 마세요! 길이를 줄이는 순간 배열 뒷부분의 데이터는 완전히 삭제되어 복구할 수 없습니다.
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">undefined의 위험성</span>
  없는 번호를 불러도 컴퓨터가 "에러!"라고 외치지 않고 슬쩍 undefined를 주기 때문에, 내가 엉뚱한 번호를 부르고 있는 것은 아닌지 항상 체크해야 합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 접근과 수정</h2>
</div>

배열을 만들고 값을 변경하는 가장 기초적인 연습입니다.

**🎯 미션: 신호등 만들기**

1. `signals` 배열을 생성하고 "빨강", "노랑", "파랑"을 넣으세요.
2. "파랑"을 "초록"으로 수정하세요.
3. 배열의 길이를 출력하세요.

**📝 정답 코드 및 해설**

```js
// 1. signals 배열 생성 및 데이터 초기화
const signals = ["빨강", "노랑", "파랑"];
// [주석] 대괄호 []를 사용하여 세 가지 색상을 순서대로 담았습니다.

// 2. "파랑"을 "초록"으로 수정
// "파랑"은 2번 인덱스(0:빨강, 1:노랑, 2:파랑)에 있습니다.
signals[2] = "초록";
// [주석] 인덱스 번호 [2]를 사용하여 해당 칸의 값을 "초록"으로 교체했습니다.

// 3. 배열의 길이 출력
console.log(signals.length);
// [주석] .length를 사용하여 현재 배열에 담긴 데이터 개수인 '3'을 출력합니다.

// 최종 확인용 출력
console.log(signals); // 결과: ["빨강", "노랑", "초록"]
```

**✅ 실습 포인트 정리**

<div class="wda-callout wda-cs">
  <ul>
    <li><strong>인덱스 번호 매기기</strong> : "파랑"이 몇 번째인지 셀 때 반드시 0부터(0, 1, 2) 세어야 한다는 것을 잊지 마세요!</li>
    <li><strong>값의 교체</strong> : signals[2] = "초록" 문법을 실행하면 기존에 있던 "파랑"은 완전히 사라지고 그 자리를 "초록"이 차지하게 됩니다.</li>
    <li><strong>길이 확인</strong> : 데이터의 내용이 바뀌어도 전체 개수는 변함이 없으므로 length는 여전히 3이 나옵니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. 배열 메서드의 추가/제거</h2>
</div>

**📌 끝에서 추가/제거**

배열의 오른쪽(끝)에서 데이터를 넣고 빼는 가장 빠르고 효율적인 방법입니다.

**📝 push(): 끝에 추가**

배열의 맨 마지막 칸에 새로운 데이터를 밀어 넣습니다.

```js
const fruits = ["사과", "바나나"];

// ➕ 배열 끝에 "오렌지" 추가
fruits.push("오렌지");

// [결과] ["사과", "바나나", "오렌지"]
// [주석] push는 실행 후 "새로운 배열의 길이(3)"를 결과값으로 돌려줍니다.
```

**📝 pop(): 끝에서 제거**

배열의 맨 마지막 칸에 있는 데이터를 쏙 뽑아냅니다.

```js
const fruits = ["사과", "바나나"];

// ➖ 배열 끝에 있는 데이터 제거
const last = fruits.pop();

// [결과] 배열은 ["사과"]만 남게 됨
// [주석] pop은 단순히 지우기만 하는 게 아니라, 제거된 "바나나"를 변수에 담아 돌려줍니다.
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🌈 [부록] pop()의 결과값(Return Value) 이해하기</h2>
</div>

"삭제된 값이 어디로 갔을까?" 에 대한 보충 설명입니다.

### 🔹 컴퓨터의 처리 과정 (시각화)

컴퓨터가 `const grabbedFruit = fruits.pop();` 이라는 코드를 읽을 때, 내부에서는 다음과 같은 순서로 일이 벌어집니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">명령 확인</div>
      <div class="wda-sdsc">fruits 배열의 맨 뒤에서 요소를 하나 빼라는 명령을 확인합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">배열 수정</div>
      <div class="wda-sdsc">배열에서 마지막 요소(예: "바나나")를 실제로 잘라냅니다. 이때 배열은 크기가 줄어듭니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">값 던져주기</div>
      <div class="wda-sdsc">잘라낸 "바나나"를 버리지 않고, 명령어가 있던 그 자리에 결과물로 툭 던져놓습니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">변수에 저장</div>
      <div class="wda-sdsc">= 기호가 그 결과물을 낚아채서 grabbedFruit라는 변수(상자)에 담습니다.</div>
    </div>
  </div>
</div>

### 🔹 그냥 쓸 때 vs 변수에 담을 때의 차이

```js
const fruits = ["사과", "바나나"];

// Case A: 그냥 삭제만 하고 싶을 때
fruits.pop();
// [비유] 서랍에서 물건을 꺼내서 그냥 바닥에 버린 상황입니다.
// 배열에서는 사라졌지만, 그 물건을 다시 쓸 수는 없습니다.

// Case B: 꺼낸 물건을 나중에 다시 쓰고 싶을 때
const grabbedFruit = fruits.pop();
// [비유] 서랍에서 물건을 꺼내서 내 주머니(변수)에 쏙 넣은 상황입니다.
// 나중에 console.log(grabbedFruit)라고 부르면 "바나나"를 다시 꺼내 쓸 수 있습니다.
```

### 🔹 요약 메모

<div class="wda-callout wda-cs">
  <span class="wda-clabel">pop() 관점별 요약</span>
  <ul>
    <li><strong>배열 입장</strong> : pop()을 하면 무조건 마지막 칸이 사라집니다.</li>
    <li><strong>사용자 입장</strong> : pop()이 실행된 자리에 삭제된 그 값이 남게 됩니다.</li>
    <li><strong>결론</strong> : 그 값을 활용하고 싶다면 변수에 담고, 그냥 지우기만 하려면 변수 없이 코드만 적으면 됩니다.</li>
  </ul>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">왜 이 방법이 효율적인가요?</span>
  "맨 마지막 인덱스만 건드리기 때문입니다."<br>
  앞에 있는 데이터들을 옆으로 밀거나 당길 필요 없이, 맨 뒤에 붙이거나 떼기만 하면 끝납니다.<br>
  그래서 데이터가 수만 개 있는 배열에서도 매우 빠르게 동작합니다.
</div>

---

**📝 요약 메모**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">push와 pop 정리</span>
  <ul>
    <li><strong>push(값)</strong> : 배열을 한 칸 늘리고 그 자리에 값을 채웁니다. 결과값은 배열의 길이입니다.</li>
    <li><strong>pop()</strong> : 마지막 칸을 없애고 그 안에 있던 값을 직접 반환합니다. (배열이 비어있으면 undefined를 줍니다.)</li>
  </ul>
</div>

**📌 앞에서 추가/제거**

배열의 왼쪽(첫 번째)에서 데이터를 넣고 빼는 방법입니다. 끝에서 작업하는 것보다 컴퓨터가 더 많은 일을 합니다.

**📝 unshift() : 앞에 추가**

배열의 맨 첫 번째 칸(0번 인덱스)에 새로운 데이터를 끼워 넣습니다.

```js
const fruits = ["바나나", "오렌지"];

// ➕ 배열 맨 앞에 "사과" 추가
fruits.unshift("사과");

// [결과] ["사과", "바나나", "오렌지"]
// [주석] 원래 0번이었던 "바나나"는 1번으로, 1번이었던 "오렌지"는 2번으로 밀려납니다.
```

**📝 shift() : 앞에서 제거**

배열의 맨 첫 번째 칸(0번 인덱스)에 있는 데이터를 쏙 뽑아냅니다.

```js
const fruits = ["사과", "바나나", "오렌지"];

// ➖ 배열 맨 앞의 데이터 제거
const first = fruits.shift();

// [결과 확인]
console.log(fruits); // 출력: ["바나나", "오렌지"]
console.log(first);  // 출력: "사과" (꺼낸 값을 변수에 담을 수 있습니다)
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">unshift와 shift가 느린 이유</span>
  "모든 데이터의 번호표(인덱스)를 새로 붙여야 하기 때문입니다."<br>
  맨 앞에 하나가 들어오거나 나가면, 뒤에 줄 서 있던 모든 데이터가 한 칸씩 옆으로 이동해야 합니다.<br>
  데이터가 100만 개라면 100만 개를 다 옮겨야 하므로, 끝에서 작업하는 push/pop보다 훨씬 느리고 비효율적입니다.
</div>

**📝 요약 메모**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">초보자를 위한 핵심 요약</span>
  <ul>
    <li><strong>unshift(값)</strong> : 0번 자리에 값을 넣고 기존 데이터들을 뒤로 한 칸씩 밉니다.</li>
    <li><strong>shift()</strong> : 0번 자리에 값을 빼고 뒤에 있던 데이터들을 앞으로 한 칸씩 당깁니다.</li>
    <li><strong>공통점</strong> : pop()과 마찬가지로 shift()도 제거된 값을 반환하므로 변수에 담아 쓸 수 있습니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 데이터 추가와 제거</h2>
</div>

push, unshift, shift 메서드를 실제 대기열 관리 시스템처럼 활용해 봅니다.

**🎯 미션: 대기열 관리**

1. `queue` 배열에 "철수", "영희"를 차례로 뒤에 추가하세요.
2. "민수"를 새치기(맨 앞) 시키세요.
3. 맨 앞의 사람을 입장(제거) 시키고 이름을 출력하세요.
4. 현재 대기열 상태를 확인하세요.

**📝 정답 코드**

```js
const queue = [];

// 1. 뒤에 추가 (push)
queue.push("철수");
queue.push("영희");

// 2. 앞에 추가 (unshift)
queue.unshift("민수");

// 3. 앞에서 제거 (shift) 및 추출된 값 출력
const person = queue.shift();
console.log(`${person} 입장!`); // 출력: "민수 입장!"

// 4. 확인
console.log(queue); // 출력: ["철수", "영희"]
```

**핵심 포인트**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">실습 핵심</span>
  <ul>
    <li><strong>동적 출력</strong> : console.log(`${person} 입장!`) 처럼 변수를 문자열 안에 넣어 출력하면, 어떤 데이터가 배열에서 빠져나왔는지 사용자에게 친절하게 알려줄 수 있습니다.</li>
    <li><strong>배열의 변화</strong> : 초기 [] → push 후 ["철수", "영희"] → unshift 후 ["민수", "철수", "영희"] → shift 후 ["철수", "영희"] (민수는 person 변수로 이동)</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. 배열 메서드 - splice()</h2>
</div>

배열의 중간에서 요소를 빼고, 넣고, 바꾸는 모든 작업을 수행하는 만능 도구입니다.

**📝 기본 문법 이해하기**

```text
배열.splice(시작_인덱스, 삭제_개수, ... 넣을_값들);
```

- **시작_인덱스** : 작업을 시작할 번호 (어디서부터?)
- **삭제_개수** : 시작점부터 제거할 요소의 개수 (몇 개를?)
- **넣을_값들** : 그 자리에 새롭게 끼워 넣을 데이터 (무엇으로 바꿀까? - 생략 가능)

**🧪 활용 사례 (1) : 삭제만 할 때**

두 번째 인자인 '삭제 개수'만 지정하고 세 번째 인자를 비워두면 특정 구간을 도려냅니다.

```js
const items = ["A", "B", "C", "D"];

// 1번 인덱스부터 2개를 삭제합니다.
items.splice(1, 2);

// [결과 확인]
console.log(items); // 출력: ["A", "D"]
// [주석] 인덱스 1번인 "B"와 그다음인 "C"가 제거되었습니다.
```

**🧪 활용 사례 (2) : 추가만 할 때**

두 번째 인자인 '삭제 개수'를 0으로 설정하면, 아무것도 지우지 않고 새로운 값을 그 자리에 끼워 넣습니다.

```js
const items = ["A", "D"];

// 1번 인덱스 자리에 "B"와 "C"를 끼워 넣습니다. (0개 삭제)
items.splice(1, 0, "B", "C");

// [결과 확인]
console.log(items); // 출력: ["A", "B", "C", "D"]
// [주석] 기존에 1번 자리에 있던 "D"는 뒤로 밀려나고 그 사이에 새 값이 들어갑니다.
```

**핵심 포인트**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">splice 사용 시 유의점</span>
  <ul>
    <li><strong>배열 파괴 메서드</strong> : splice()는 원본 배열을 직접 수정하는 파괴적 메서드입니다. 원본을 유지해야 하는 상황에서는 slice(), concat(), 스프레드 문법 등을 고려해야 합니다.</li>
    <li><strong>만능 교체</strong> : 삭제 개수와 추가할 값을 동시에 넣으면 특정 위치의 데이터를 다른 데이터로 '교체'하는 효과를 낼 수 있습니다.</li>
    <li><strong>반환값</strong> : pop()이나 shift()처럼 splice()도 삭제된 요소들을 배열 형태로 반환합니다. 필요하다면 변수에 담아 쓸 수 있습니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. 배열 메서드 - splice 교체</h2>
</div>

**⚙️ 교체 메커니즘 이해**

삭제와 추가를 동시에 진행하면 특정 위치의 데이터를 원하는 값으로 바꾸는 교체(Replace) 효과를 낼 수 있습니다.

```js
const items = ["A", "B", "C"];

// 1번 인덱스에서 1개를 삭제하고, 그 자리에 "K"를 넣습니다.
items.splice(1, 1, "K");

// [결과 확인]
console.log(items); // 출력: ["A", "K", "C"]
// [해설] 1번 방에 있던 "B"가 빠지고 "K"가 그 자리를 차지했습니다.
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 자르고 붙이기 (splice)</h2>
</div>

splice를 활용하여 실생활의 메뉴판을 수정하듯 배열을 자유자재로 다뤄봅니다.

**🎯 미션: 점심 메뉴 수정**

1. `menus` 배열을 생성하고 `["짜장", "짬뽕", "탕수육", "볶음밥"]`을 넣으세요.
2. "짬뽕"을 삭제하세요.
3. "탕수육" 자리에 **"군만두"**와 **"콜라"**를 교체(삽입)하세요.
4. 최종 메뉴를 확인하세요.

**📝 정답 코드 및 해설**

```js
const menus = ["짜장", "짬뽕", "탕수육", "볶음밥"];

// 1. "짬뽕" 삭제하기 (1번 인덱스부터 1개 삭제)
menus.splice(1, 1);
// 결과: ["짜장", "탕수육", "볶음밥"]

// 2. "탕수육" 자리에 "군만두", "콜라" 교체(삽입)
// 현재 "탕수육"은 1번 인덱스에 있습니다.
menus.splice(1, 1, "군만두", "콜라");
// [해설] 1번 위치의 "탕수육" 1개를 지우고 그 자리에 두 개를 넣습니다.

// 3. 최종 확인
console.log(menus);
// 출력: ["짜장", "군만두", "콜라", "볶음밥"]
```

**📝 요약 메모**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">splice 실습 정리</span>
  <ul>
    <li><strong>인덱스 변화 주의</strong> : 1단계에서 "짬뽕"을 지우면, 뒤에 있던 "탕수육"의 번호가 2번에서 1번으로 당겨집니다. 그래서 2단계에서 작업을 시작할 인덱스가 1번이 되는 것입니다.</li>
    <li><strong>1:N 교체</strong> : splice(1, 1, "A", "B") 처럼 1개를 지우고 2개 이상의 값을 넣는 것도 가능합니다. 배열의 길이가 유연하게 늘어납니다.</li>
    <li><strong>실무 팁</strong> : splice는 원본을 완전히 바꾸기 때문에, 인덱스 번호를 한 번만 실수해도 배열 전체가 엉망이 될 수 있습니다. 작업 전 항상 인덱스 위치를 확인하는 습관이 중요합니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. 배열 메서드 - 검색</h2>
</div>

indexOf, includes 등을 사용하여 배열 안에 특정 요소가 있는지, 있다면 어디에 있는지 찾아냅니다.

**📝 indexOf() / lastIndexOf()**

찾으려는 값이 배열의 몇 번째 인덱스에 있는지 **위치(숫자)**를 알려줍니다.

```js
const arr = ["a", "b", "c", "b"];

// 🔍 앞에서부터 검색 (인덱스 반환)
arr.indexOf("b");       // 결과: 1

// 🔍 뒤에서부터 검색
arr.lastIndexOf("b");   // 결과: 3

// ❌ 배열에 없는 값을 찾을 때
arr.indexOf("z");       // 결과: -1
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">중요 포인트</span>
  indexOf는 찾는 값이 없으면 에러가 아닌 -1을 내뱉습니다. 조건문을 쓸 때 이 -1을 체크하는 것이 매우 중요합니다.
</div>

**🔎 참고**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">왜 'O'를 대문자로 쓰나요? (카멜 케이스)</span>
  자바스크립트의 메서드 이름은 여러 단어가 합쳐질 때 <strong>카멜 케이스(Camel Case)</strong> 규칙을 따릅니다.<br>
  규칙 : 첫 단어는 소문자로 시작하고, 이어지는 단어의 첫 글자만 대문자로 씁니다. (낙타의 혹처럼 굴곡이 있다고 해서 붙여진 이름입니다.)<br>
  적용 : index + of → indexOf<br>
  주의 : indexof (소문자 o)라고 쓰면 컴퓨터는 이를 인식하지 못하고 <strong>에러(에러명: TypeError)</strong>를 발생시킵니다.<br><br>
  [자주 쓰는 메서드 예시]<br>
  · lastIndexOf() : last + index + of<br>
  · includes() : 단어가 하나뿐이라 모두 소문자입니다.<br>
  · getElementById() : get + element + by + id (단어가 많아도 규칙은 동일합니다.)
</div>

**📝 includes()**

단순히 특정 값이 배열에 들어있는지 여부만 궁금할 때 사용합니다. 결과는 true 아니면 false로 나옵니다.

```js
const fruits = ["사과", "바나나"];

// ✅ 포함 여부 확인
fruits.includes("바나나"); // 결과: true
fruits.includes("포도");   // 결과: false

// 📍 검색 시작 위치 지정 가능
fruits.includes("사과", 1); // 결과: false (1번 인덱스부터는 사과가 없음)
```

**🆚 검색 메서드 비교**

| **메서드** | **결과값** | **용도** |
| --- | --- | --- |
| **indexOf** | 숫자 (인덱스) | 데이터의 정확한 위치가 필요할 때 |
| **includes** | 불리언 (T/F) | 존재 여부만 빠르게 확인할 때 |

indexOf와 includes는 단순한 값(숫자, 문자열 등)을 비교하는 데 최적화되어 있습니다.  
만약 배열 안에 들어있는 객체의 속성으로 데이터를 찾고 싶다면, 다음 챕터에서 배울 find() 메서드를 사용해야 합니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>9. 배열 메서드 - slice()와 concat()</h2>
</div>

기존 배열은 그대로 유지하면서, 필요한 부분만 복사하거나 다른 배열과 합쳐서 새로운 배열을 만듭니다.

**📝 slice(): 부분 추출**

배열의 특정 구간을 복사해서 가져옵니다. 케이크를 한 조각 잘라내도 원본 케이크는 그대로 있는 것과 같습니다.

```js
const arr = ["a", "b", "c", "d", "e"];

// 1. 특정 구간 추출 (시작 인덱스, 끝 인덱스 직전)
arr.slice(1, 3);    // 결과: ["b", "c"] (1번부터 3번 '직전'까지)

// 2. 시작부터 끝까지 추출
arr.slice(2);       // 결과: ["c", "d", "e"] (2번부터 끝까지)

// 3. 음수 활용 (뒤에서부터 추출)
arr.slice(-2);      // 결과: ["d", "e"] (뒤에서 2개)

// ⚠️ 중요: 원본 유지!
console.log(arr);   // 결과: ["a", "b", "c", "d", "e"] (변하지 않음)
```

**📝 concat(): 배열 합치기**

두 개 이상의 배열을 하나로 합쳐서 새로운 배열을 반환합니다.

```js
const arr1 = [1, 2];
const arr2 = [3, 4];

// 1. 배열과 배열 합치기
const combined = arr1.concat(arr2);
console.log(combined); // 결과: [1, 2, 3, 4]

// 2. 값도 함께 추가하며 합치기
const added = arr1.concat(3, [4, 5]);
console.log(added);    // 결과: [1, 2, 3, 4, 5]

// ✅ 원본 유지: arr1과 arr2는 여전히 처음 그대로입니다.
```

**핵심 비교: 원본이 변하는가?**

| **메서드** | **원본 변경 여부** | **비유** |
| --- | --- | --- |
| **splice()** | O (변함) | 종이를 실제로 가위로 잘라내는 것 |
| **slice()** | X (유지) | 종이를 그대로 두고 복사기(Copy)로 찍어내는 것 |

**언제 무엇을 쓰나요?**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">활용 기준</span>
  <ul>
    <li><strong>원본 데이터를 보호해야 할 때</strong> : slice나 concat을 사용하세요. (실무에서 훨씬 선호되는 방식입니다.)</li>
    <li><strong>원본 자체를 수정해서 메모리를 아끼거나 데이터를 바로 바꿔야 할 때</strong> : splice, push, pop 등을 사용하세요.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>📂 자바스크립트 배열(Array) 중간 정리</h2>
</div>

### 🔹 배열의 기초: 접근과 수정

배열은 0부터 시작하는 인덱스를 사용하여 데이터를 관리합니다.

| **구분** | **문법 및 특징** | **설명** |
| --- | --- | --- |
| **요소 읽기 (Read)** | `arr[0]` / `arr[arr.length - 1]` | 첫 번째 요소와 마지막 요소를 읽는 법 |
| **요소 쓰기 (Update)** | `arr[1] = "새 값"` | 특정 인덱스의 값을 새로운 값으로 수정 |
| **length 특징** | 길이를 줄이면 데이터 삭제<br>길이를 늘리면 빈 공간(empty) 발생 | 배열의 크기를 수동으로 조절할 때의 변화 |
| **⚠️ 주의사항** | 존재하지 않는 인덱스 접근 시 | 에러가 발생하지 않고 **undefined**를 반환 |

### 🔹 배열 메서드 (1): 추가와 제거

데이터의 위치에 따라 성능과 결과가 다릅니다.

| **메서드** | **위치** | **동작 설명** | **특징 및 성능** |
| --- | --- | --- | --- |
| **push()** | 끝 (End) | 데이터를 배열 마지막에 추가 | 가장 빠름. 새로운 길이를 반환 |
| **pop()** | 끝 (End) | 마지막 데이터를 제거 | 가장 빠름. 제거된 요소를 반환 |
| **unshift()** | 앞 (Front) | 데이터를 배열 맨 앞에 추가 | 상대적으로 느림. 인덱스가 뒤로 밀림 |
| **shift()** | 앞 (Front) | 맨 앞의 데이터를 제거 | 상대적으로 느림. 인덱스가 앞으로 당겨짐 |

### 🔹 배열 메서드 (2): 중간 제어 (splice)

배열의 중간 요소를 빼고, 넣고, 바꾸는 만능 도구입니다. 기본 문법: `arr.splice(시작_번호, 삭제_개수, 넣을_값들)`

| **작업 종류** | **예시 코드** | **동작 설명** |
| --- | --- | --- |
| **삭제 (Delete)** | `splice(1, 2)` | 1번 인덱스부터 2개의 요소를 제거합니다. |
| **추가 (Add)** | `splice(1, 0, "A")` | 1번 자리에 아무것도 지우지 않고(0), **"A"**를 삽입합니다. |
| **교체 (Replace)** | `splice(1, 1, "K")` | 1번 자리의 요소 1개를 지우고, 그 자리에 **"K"**를 넣습니다. |

**주의사항 및 핵심 체크**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">splice 체크리스트</span>
  <ul>
    <li><strong>원본 파괴(Destructive)</strong> : splice는 실행 즉시 원본 배열의 데이터가 변합니다. 원본을 유지해야 한다면 사용 전 복사본을 만들거나 slice를 사용해야 합니다.</li>
    <li><strong>반환값</strong> : 메서드를 실행하면 삭제된 요소들이 담긴 배열을 반환합니다. 삭제된 데이터가 필요할 때 유용하게 쓸 수 있습니다.</li>
    <li><strong>유연성</strong> : 넣을_값들 자리에 여러 개의 인자를 쉼표로 구분해서 넣으면 한 번에 여러 개를 추가할 수도 있습니다. (예: splice(1, 0, "A", "B", "C"))</li>
  </ul>
</div>

### 🔹 배열 메서드 (3): 검색과 추출

데이터를 찾거나 원본을 유지하며 복사할 때 사용합니다.

| **메서드** | **동작 설명** | **반환값 (결과)** | **특징 및 주의사항** |
| --- | --- | --- | --- |
| **indexOf()** | 특정 값의 인덱스 번호를 찾음 | 인덱스 숫자 (없으면 -1) | O 대문자 주의. 가장 처음 발견된 위치 반환 |
| **includes()** | 특정 값이 포함되어 있는지 확인 | true 또는 false | 존재 여부만 단순 확인할 때 가장 간결함 |
| **slice()** | 특정 범위의 요소를 복사 | 새로운 배열 | 원본을 건드리지 않음 (비파괴적) |
| **concat()** | 여러 배열을 하나로 합침 | 새로운 배열 | 기존 배열들은 유지되고 합쳐진 새 배열 생성 |

**개념 체크**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">검색 메서드 체크</span>
  <ul>
    <li><strong>-1의 의미</strong> : indexOf에서 값을 찾지 못했을 때 0을 반환하면 0번 인덱스와 헷갈릴 수 있기 때문에, 존재하지 않음을 뜻하는 -1을 반환하는 것입니다.</li>
    <li><strong>복사 vs 수정</strong> : slice와 concat은 원본 배열을 변형시키지 않습니다. 원본 데이터를 보존해야 하는 안정적인 코드 작성 시 우선적으로 고려해야 합니다.</li>
    <li><strong>대소문자 구분</strong> : 자바스크립트는 대소문자를 엄격히 구분합니다. indexof가 아니라 indexOf임을 반드시 기억해야 에러를 방지할 수 있습니다.</li>
  </ul>
</div>

### 🔹 ⚠️ 중요: 파괴적 vs 비파괴적 비교

원본 배열이 직접 수정되는지 여부가 가장 큰 차이점입니다.

- **파괴적 (원본 변경)** : push, pop, shift, unshift, splice
- **비파괴적 (원본 유지)** : slice, concat, indexOf, includes

**암기 팁**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">파괴적 vs 비파괴적 암기법</span>
  <ul>
    <li><strong>Painful</strong> : s<em>p</em>lice (원본을 잘라내서 아프다!)</li>
    <li><strong>Copy</strong> : s<em>l</em>ice (사본을 복사한다!)</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 배열 잘라내기 (slice)</h2>
</div>

**🎯 미션: 상위권 명단 추출하기**

1. `ranks` 배열을 생성하고 `["A", "B", "C", "D", "E"]`를 넣으세요.
2. slice를 사용해 상위 3명("A", "B", "C")만 따로 복사해 `top3` 변수에 담으세요.
3. 원본 배열(ranks)과 복사본(top3)을 각각 출력해서 비교하세요.

**📝 정답 코드**

```js
// 1. 초기 배열 생성
const ranks = ["A", "B", "C", "D", "E"];

// 2. 상위 3명 잘라내기 (0번 인덱스부터 3번 '직전'까지)
const top3 = ranks.slice(0, 3);

// 3. 결과 확인
console.log(top3);  // 출력: ["A", "B", "C"]
console.log(ranks); // 출력: ["A", "B", "C", "D", "E"] (원본 유지)
```

**핵심 포인트**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">slice 실습 핵심</span>
  <ul>
    <li><strong>끝 인덱스의 미포함</strong> : slice(0, 3)이라고 쓰면 0, 1, 2번까지만 가져오고 3번은 포함하지 않습니다. (이 부분을 가장 많이 실수하니 주의하세요!)</li>
    <li><strong>원본 보존 (비파괴)</strong> : splice와 달리 slice는 원본 배열을 가위로 오려내는 것이 아니라, 복사기로 찍어내는 것입니다. 따라서 ranks 배열은 그대로 남아있습니다.</li>
    <li><strong>새로운 그릇</strong> : 잘라낸 결과물을 나중에 쓰기 위해서는 반드시 const top3 처럼 새로운 변수에 담아줘야 합니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>10. 배열 메서드 - sort()와 reverse()</h2>
</div>

**📝 reverse() : 순서 뒤집기**

배열의 요소 순서를 거꾸로 뒤집습니다.

- **동작** : 첫 번째 요소를 마지막으로, 마지막 요소를 첫 번째로 보냅니다.
- **원본 변경** : ⚠️ 원본 배열이 직접 변합니다.

```js
const arr = ["a", "b", "c"];

// 순서 뒤집기
arr.reverse();

console.log(arr); // 결과: ["c", "b", "a"]
```

**📝 sort(): 요소 정렬하기**

배열의 요소를 정렬합니다. 기본적으로는 문자열로 취급하여 오름차순 정렬합니다.

- **문자 정렬** : 알파벳 순서대로 정렬됩니다.
- **원본 변경** : ⚠️ 원본 배열이 직접 변합니다.

```js
const fruits = ["banana", "apple", "cherry"];

// 알파벳 순 정렬
fruits.sort();

console.log(fruits); // 결과: ["apple", "banana", "cherry"]
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">숫자를 정렬할 때 발생하는 문제</span>
  sort()는 기본적으로 데이터를 문자로 변환해서 비교하기 때문에, 숫자를 정렬할 때 예상치 못한 결과가 나옵니다.
</div>

```js
const numbers = [10, 1, 2, 25];

numbers.sort();

console.log(numbers); // 결과: [1, 10, 2, 25] (문자열로 비교되어 "10"이 "2"보다 앞에 옴)
```

```js
const numbers = [10, 1, 2, 25];

numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 10, 25]
```

a - b가 음수이면 a가 앞에 오고, 양수이면 b가 앞에 옵니다. 그래서 숫자를 오름차순으로 정렬할 수 있습니다.

**해결책**

<div class="wda-callout wda-cs">
  숫자를 제대로 정렬하려면 나중에 배울 <strong>'비교 함수'</strong>를 sort() 안에 넣어주어야 합니다.<br>
  지금은 "기본적으로는 문자열 순서로 정렬된다"는 점만 기억하세요!
</div>

**📝 요약 메모**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">reverse와 sort 정리</span>
  <ul>
    <li><strong>reverse()</strong> : 단순히 거꾸로! (가족 사진의 왼쪽 오른쪽을 바꾸는 것)</li>
    <li><strong>sort()</strong> : 기준에 맞춰 정렬! (키 순서대로 줄 세우는 것)</li>
    <li><strong>공통점</strong> : 둘 다 <strong>파괴적 메서드(Mutator)</strong>입니다. 원본이 보존되지 않으니 주의하세요.</li>
  </ul>
</div>

sort()와 reverse()는 원본 배열을 직접 변경하므로, 원본을 지키고 싶을 때는 복사 후 사용합니다.

```js
const sorted = [...numbers].sort((a, b) => a - b);
const reversed = [...arr].reverse();
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. 배열 메서드 - sort() - 숫자 정렬</h2>
</div>

**⚠️ 왜 그냥 sort()를 쓰면 안 되나요?**

자바스크립트의 sort()는 숫자를 정렬할 때도 **'문자열'**로 변환해서 비교하기 때문입니다.

- **현상** : `[10, 1, 2]`를 정렬하면 `[1, 10, 2]`가 나옵니다.
- **이유** : 문자열 비교 시 "10"이 "2"보다 사전순으로 앞서기 때문입니다. (1로 시작하니까요!)

**📝 숫자 정렬 해결법 : 비교 함수 (Compare Function)**

숫자 크기를 제대로 비교하려면 sort() 괄호 안에 작은 함수를 하나 넣어줘야 합니다.

```js
const numbers = [4, 2, 10, 1, 25];

// ✅ 오름차순 정렬 (작은 순)
numbers.sort((a, b) => a - b);
console.log(numbers); // 결과: [1, 2, 4, 10, 25]

// ✅ 내림차순 정렬 (큰 순)
numbers.sort((a, b) => b - a);
console.log(numbers); // 결과: [25, 10, 4, 2, 1]
```

**💡 동작 원리 (이해하면 안 까먹어요!)**

컴퓨터는 두 숫자 a와 b를 빼서 나오는 결과값의 양수/음수 여부로 순서를 결정합니다.

<div class="wda-callout wda-ci">
  <span class="wda-clabel">동작 원리</span>
  <ul>
    <li><strong>a - b (오름차순)</strong> : 결과가 음수면 a를 앞으로 보냅니다(a가 더 작으니까). 결과가 양수면 b를 앞으로 보냅니다(b가 더 작으니까).</li>
    <li><strong>b - a (내림차순)</strong> : 반대로 작동하여 큰 수가 앞으로 오게 됩니다.</li>
  </ul>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">sort 원본 변경 주의</span>
  <ul>
    <li><strong>원본 변경</strong> : sort()는 실행 즉시 원본 배열의 순서를 바꿔버립니다. 원본을 유지해야 한다면 slice()로 복사본을 만든 뒤 정렬하세요.</li>
    <li><strong>화살표 함수</strong> : (a, b) => a - b 문법은 자바스크립트의 표준 방식입니다. a와 b라는 두 숫자를 받아서 그 차이를 계산한다는 뜻입니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>12. 배열 메서드 - 연결 join()</h2>
</div>

**📝 join(): 배열을 문자열로 합치기**

배열 안에 있는 모든 요소를 하나의 문자열로 연결하여 반환합니다.

- **기능** : 요소를 연결할 때 사용할 **구분자(Separator)**를 직접 지정할 수 있습니다.
- **원본 유지** : ⚠️ join()은 원본 배열을 수정하지 않고, 합쳐진 새로운 문자열만 만들어냅니다.

**🧪 사용 예시 (구분자에 따른 차이)**

```js
const fruits = ["사과", "바나나", "오렌지"];

// 1. 아무것도 넣지 않았을 때 (기본값: 쉼표)
const result1 = fruits.join();
// 결과: "사과,바나나,오렌지"

// 2. 빈 문자열을 넣었을 때 (구분자 없음)
const result2 = fruits.join("");
// 결과: "사과바나나오렌지"

// 3. 공백과 특수문자를 넣었을 때
const result3 = fruits.join(" + ");
// 결과: "사과 + 바나나 + 오렌지"
```

**🆚 split()과 함께 사용하기 (환상의 짝꿍)**

join()은 나중에 배울 문자열 메서드인 split()과 반대로 작동합니다.

- **split()** : 문자열 ➔ 배열 (쪼개기)
- **join()** : 배열 ➔ 문자열 (합치기)

**주의할 점**

<div class="wda-callout wda-cw">
  <ul>
    <li><strong>데이터 타입 변화</strong> : 이 메서드를 실행하고 나면 더 이상 배열 메서드(push, pop 등)를 쓸 수 없습니다. 결과값이 <strong>'문자열'</strong>이 되었기 때문입니다.</li>
    <li><strong>구분자 생략</strong> : join() 괄호 안에 아무것도 쓰지 않으면 자동으로 쉼표(,)가 들어갑니다. 쉼표가 싫다면 반드시 join("")처럼 빈 문자열이라도 넣어줘야 합니다.</li>
  </ul>
</div>

**📝 요약 메모**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">join() 정리</span>
  <ul>
    <li><strong>배열.join("구분자")</strong> : 배열을 하나의 긴 글로 만든다.</li>
    <li><strong>원본은 그대로</strong> : 원본 배열은 변하지 않는다.</li>
    <li><strong>활용</strong> : 주로 배열 데이터를 화면에 예쁘게 출력할 때(예: "사과, 바나나, 포도") 사용한다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🚀 join() 실전 활용 사례</h2>
</div>

**🧪 실무 활용 예시**

데이터를 특정 형식으로 포맷팅할 때 매우 자주 사용됩니다.

- **URL 경로 만들기** : 배열의 요소들을 `/`로 연결하여 웹사이트 주소나 파일 경로를 생성합니다.
- **전화번호 포맷팅** : 나뉘어 저장된 숫자 묶음을 하이픈(`-`)으로 연결하여 완성된 번호로 만듭니다.

```js
// 1. URL 경로 만들기
const path = ["users", "john", "profile"];
path.join("/");
// 결과: "users/john/profile"

// 2. 전화번호 포맷팅
const tel = ["010", "1234", "5678"];
tel.join("-");
// 결과: "010-1234-5678"
```

**📌 특수 값 처리**

배열 안에 유효하지 않은 값이 섞여 있을 때 join()이 처리하는 방식입니다.

- **null이나 undefined** : 연결 시 **빈 문자열("")**로 취급되어 사라집니다.
- **빈 슬롯(empty)** : 배열의 구멍난 부분도 빈 문자열로 처리됩니다.

```js
const data = [1, null, undefined, 2];

data.join("-");
// 결과: "1---2" (중간의 null과 undefined가 빈 글자로 변환됨)
```

**💡 HTML 목록 생성 꿀팁**

배열 데이터를 HTML 태그 안에 넣어 목록(List) 구조를 한 번에 만들 때 유용합니다.

```js
const items = ["메뉴1", "메뉴2"];

// 배열 요소 사이에 </li><li> 태그를 끼워 넣어 목록 완성
const html = `<ul><li>${items.join("</li><li>")}</li></ul>`;

console.log(html);
// 결과: "<ul><li>메뉴1</li><li>메뉴2</li></ul>"
```

**📝 요약 메모**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">join 활용 정리</span>
  <ul>
    <li><strong>join()</strong>은 배열을 하나의 문자열로 합쳐줍니다.</li>
    <li>null, undefined와 같은 특수 값은 무시하고 빈 문자로 연결합니다.</li>
    <li>복잡한 HTML 태그 구조를 문자열로 만들 때 매우 강력한 도구입니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 배열 변환 (join &amp; reverse)</h2>
</div>

**🎯 미션: 해시태그 만들기**

1. `tags` 배열을 생성하고 `["맛집", "여행", "서울"]`을 넣으세요.
2. 이 태그들을 # 기호로 연결하여 하나의 문자열로 만드세요. (예: "맛집#여행#서울")
3. tags 배열의 순서를 뒤집어 보세요.

**📝 정답 코드**

```js
// 1. 초기 배열 생성
const tags = ["맛집", "여행", "서울"];

// 2. # 기호로 연결하여 문자열 생성
const hashTag = tags.join("#");
console.log(hashTag);
// 출력: "맛집#여행#서울"

// 3. 배열 순서 뒤집기
tags.reverse();
console.log(tags);
// 출력: ["서울", "여행", "맛집"]
```

**핵심 포인트**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">join 실습 핵심</span>
  <ul>
    <li><strong>join("#")의 역할</strong> : 배열의 각 요소 사이에 #를 끼워 넣어 하나의 문장으로 합쳐줍니다. 결과물은 배열이 아닌 문자열입니다.</li>
    <li><strong>reverse()의 특징</strong> : 실행하는 순간 원본 배열인 tags의 순서가 즉시 바뀝니다. (파괴적 메서드)</li>
    <li><strong>데이터 타입 주의</strong> : hashTag는 문자열이므로 배열 메서드를 쓸 수 없지만, tags는 여전히 배열이므로 reverse() 같은 배열 메서드를 계속 사용할 수 있습니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>13. 배열 복사</h2>
</div>

**⚠️ 참조의 함정**

**📌 현상: 왜 원본까지 같이 변할까?**

일반적인 변수(숫자, 문자)와 달리, 배열은 변수에 값을 직접 저장하지 않고 값이 있는 메모리 주소만 저장합니다.

```js
const original = ["a", "b", "c"];

// ❌ 잘못된 복사 (주소값만 복사됨)
const copy = original;

copy.push("d");

console.log(copy);     // 결과: ["a", "b", "c", "d"]
console.log(original); // 결과: ["a", "b", "c", "d"] 😱 (원본도 변함!)
```

**📌 원인 : 참조(Reference)의 이해**

자바스크립트에서 배열은 **참조 타입(Reference Type)**입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🏠</div>
    <div class="wda-fcard-ttl">변수의 상태</div>
    <div class="wda-fcard-dsc">original 변수에는 배열 자체가 들어있는 것이 아니라, 배열이 살고 있는 <strong>집 주소(예: 0x0001)</strong>가 적혀 있습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📋</div>
    <div class="wda-fcard-ttl">복사의 실체</div>
    <div class="wda-fcard-dsc"><code>const copy = original;</code>이라고 쓰는 순간, copy 변수에도 <strong>똑같은 집 주소(0x0001)</strong>가 복사됩니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔗</div>
    <div class="wda-fcard-ttl">결론</div>
    <div class="wda-fcard-dsc">결국 original과 copy는 <strong>같은 집(배열)</strong>을 바라보고 있습니다. copy가 벽지를 바꾸면(push), original이 보는 벽지도 바뀌어 있는 것입니다.</div>
  </div>
</div>

**🧠 팩트 체크**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⚖️</div>
    <div class="wda-fcard-ttl">대입 연산자(=)의 한계</div>
    <div class="wda-fcard-dsc"><code>=</code>는 새로운 배열을 만드는 것이 아니라, 기존 배열의 <strong>'주소표'</strong>를 하나 더 발행하는 것뿐입니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🚫</div>
    <div class="wda-fcard-ttl">독립성 부재</div>
    <div class="wda-fcard-dsc">이 방식으로 복사된 배열들은 <strong>운명을 같이</strong> 합니다. 하나를 수정하면 다른 하나도 무조건 바뀝니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔮</div>
    <div class="wda-fcard-ttl">해결책 예고</div>
    <div class="wda-fcard-dsc">원본 배열 자체를 지키려면 새 배열을 만드는 복사 기법을 사용해야 합니다. 단, 얕은 복사는 배열의 1단계만 새로 만들고, 배열 안에 객체나 배열이 들어 있으면 그 내부 객체의 참조는 그대로 공유될 수 있습니다.</div>
  </div>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">참조 복사 정리</span>
  "배열을 =로 복사하는 것은 복사가 아니라 공유다." 원본을 유지해야 한다면 절대로 =를 사용하지 마세요.<br>
  쉽게 말하면 주소표가 복사되는 것처럼 동작합니다.<br>
  엄밀히 말하면 JavaScript는 값을 전달하지만, 참조 타입의 경우 그 값이 객체를 가리키는 참조값입니다.<br>
  초보자 단계에서는 '같은 배열을 함께 바라본다'라고 이해하면 됩니다.
</div>

**✅ 올바른 방법**

**📝 스프레드 문법 (추천)**

이미지에서 가장 모던하고 직관적인 방법으로 추천된 방식입니다.

```js
const original = [1, 2, 3];

// 1. Spread syntax (...)
const copy = [...original];

copy.push(4);

console.log(original); // [1, 2, 3] (안전함! 👍)
console.log(copy);     // [1, 2, 3, 4]
```

**📝 slice() 메서드**

이미지에서 옛날 코드(Legacy)에서 많이 보인다고 명시된 방식입니다.

```js
const original = [1, 2, 3];

// 2. slice() (인자 없이)
const copy = original.slice();

// 결과는 위와 동일
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">배열 안에 객체가 들어있다면?</span>
  <strong>얕은 복사(Shallow Copy)</strong>만으로는 부족할 수 있습니다. 배열 내부의 요소가 객체인 경우, 해당 객체까지 완전히 복사되지는 않습니다.<br>
  해결책 : 깊은 복사가 필요할 때는 structuredClone()을 사용할 수 있습니다.<br>
  JSON.stringify() / JSON.parse() 방식도 있지만, 함수, undefined, Date, Map 같은 값은 제대로 보존되지 않을 수 있으므로 주의해야 합니다.
</div>

**📝 요약 메모**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">복사 방법 정리</span>
  위 두 방법은 새로운 주소를 가진 별도의 배열을 생성하므로, 복사본을 수정해도 원본이 바뀌지 않습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>14. 다차원 배열</h2>
</div>

**📌 다차원 배열이란?**

배열의 요소로 또 다른 배열이 들어있는 구조를 말합니다.  
보통 2차원 배열이 가장 많이 쓰이며, 데이터를 표(Table) 형태로 관리할 때 유용합니다.

**📌 2차원 배열의 구조와 접근**

이미지 속 예시 코드를 그대로 적용한 접근 방법입니다.

```js
// 2차원 배열 생성 (3행 3열 구조)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 요소에 접근하기: matrix[행][열]
console.log(matrix[0]);    // [1, 2, 3] (0번 인덱스인 첫 번째 줄 전체)
console.log(matrix[0][1]); // 2 (첫 번째 줄의 두 번째 요소)
console.log(matrix[1][2]); // 6 (두 번째 줄의 세 번째 요소)
```

**📌 핵심 원리 파악**

- **중첩 구조** : 배열 안에 배열이 중첩되어 있으므로, 원하는 데이터에 도달하려면 대괄호(`[]`)를 단계별로 사용해야 합니다.
- **첫 번째 인덱스** : 바깥쪽 배열의 위치(행)를 가리킵니다.
- **두 번째 인덱스** : 안쪽 배열의 위치(열)를 가리킵니다.
- **데이터 타입** : matrix[0]의 결과값은 그 자체로 다시 배열이 됩니다.

**🧪 요소 접근**

행(Row)을 먼저 선택한 후 열(Col)을 선택하여 특정 데이터에 접근합니다.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 행(Row) 선택 -> 열(Col) 선택
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][0]); // 7
```

**⚙️ 중첩 반복문 (Nested Loop)**

이중 for문을 사용하여 다차원 배열의 모든 요소를 순회할 수 있습니다.

```js
for (let i = 0; i < matrix.length; i++) {
  // i: 행 인덱스
  for (let j = 0; j < matrix[i].length; j++) {
    // j: 열 인덱스
    console.log(matrix[i][j]);
  }
}
// 1, 2, 3 ... 9 순서로 출력
```

바깥 루프는 **행(i)**을 담당하고, 안쪽 루프는 해당 행 내부의 **열(j)**을 담당하여 전체 데이터를 훑습니다.

**핵심 체크**

<div class="wda-callout wda-cw">
  <ul>
    <li><strong>대괄호의 순서</strong> : matrix[행][열] 순서를 반드시 지켜야 합니다. 반대로 적으면 전혀 다른 데이터에 접근하게 됩니다.</li>
    <li><strong>루프의 범위</strong> : 안쪽 루프의 조건식(j &lt; matrix[i].length)은 각 행마다 열의 개수가 다를 수 있음을 고려하여 작성되었습니다.</li>
    <li><strong>데이터 흐름</strong> : 중첩 루프 실행 시 (0,0) -&gt; (0,1) -&gt; (0,2)와 같이 첫 번째 행의 모든 열을 먼저 처리한 뒤 다음 행으로 넘어갑니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>15. 배열 구조분해 맛보기</h2>
</div>

**📌 구조 분해 할당이란?**

배열의 각 요소를 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식입니다.

**🧪 코드 표현**

```js
const colors = ["빨강", "파랑", "초록"];

// 구조 분해 할당
const [first, second, third] = colors;

console.log(first);  // "빨강"
console.log(second); // "파랑"
console.log(third);  // "초록"
```

**📝 기본 문법**

**🔹 기존 방식 (번거로움)**

인덱스를 하나하나 지정하여 개별적으로 변수를 선언해야 합니다.

```js
const colors = ["빨강", "파랑", "초록"];

const red = colors[0];
const blue = colors[1];
const green = colors[2];
```

**🔹 구조 분해 방식 (깔끔 ✨)**

대괄호 `[]`를 사용하여 선언과 할당을 한 번에 처리합니다.

```js
const colors = ["빨강", "파랑", "초록"];

// 변수 선언과 할당을 한 번에!
const [red, blue, green] = colors;

console.log(red);   // "빨강"
console.log(blue);  // "파랑"
console.log(green); // "초록"
```

**왜 구조 분해가 더 좋은가요?**

| **구분** | **핵심 효과** | **상세 내용** |
| --- | --- | --- |
| **가독성** | 의도 파악의 단순화 | 여러 줄의 복잡한 로직을 단 한 줄로 축약하여, 코드가 수행하려는 목적을 즉시 이해할 수 있게 합니다. |
| **유지보수** | 중앙 집중 관리 | 데이터나 변수명을 한곳에서 정의하고 관리하므로, 변경 사항 발생 시 수정 범위가 최소화됩니다. |
| **실수 방지** | 인덱스 오류 차단 | arr[1], arr[2]와 같이 인덱스를 수동으로 입력할 때 발생하는 오타나 논리적 오류를 근본적으로 방지합니다. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">구조분해 원리 분석</span>
  <ul>
    <li><strong>인덱스 맵핑</strong> : 좌변의 변수 first, second, third는 각각 배열의 0, 1, 2번 인덱스와 1:1로 대응됩니다.</li>
    <li><strong>선언과 할당의 결합</strong> : const [변수명] 형태를 사용하여 변수의 선언과 동시에 배열의 값을 할당하는 간결한 문법입니다.</li>
    <li><strong>데이터 타입 유지</strong> : 배열 내부의 값이 문자열이므로, 분해되어 담긴 변수들의 타입 역시 <strong>String(문자열)</strong>이 됩니다.</li>
  </ul>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <span class="wda-clabel">구조분해 주의사항</span>
  <ul>
    <li><strong>순서가 핵심</strong> : 배열 구조 분해는 이름이 아니라 <strong>순서(위치)</strong>에 의해 값이 결정됩니다. 만약 second 위치에 다른 이름을 써도 배열의 두 번째 값인 "파랑"이 들어옵니다.</li>
    <li><strong>배열 크기 초과</strong> : 만약 배열 요소보다 더 많은 변수를 선언하면(예: 네 번째 변수), 해당 변수에는 undefined가 할당됩니다.</li>
  </ul>
</div>

**🧪 변수 교환 (Swap)**

임시 변수 없이도 두 변수의 값을 간단하게 맞바꿀 수 있습니다. 알고리즘 문제 풀이에서 매우 유용합니다.

```js
let x = 1;
let y = 2;

// 임시 변수 없이 교환!
[x, y] = [y, x];

console.log(x); // 2
console.log(y); // 1
```

**📝 나머지 할당 (Rest)**

특정 요소들을 제외한 나머지 요소들을 다시 하나의 배열로 모을 때 사용합니다.

```js
const numbers = [1, 2, 3, 4, 5];

// 앞의 2개만 빼고 나머지는 모으기
const [one, two, ...rest] = numbers;

console.log(one);  // 1
console.log(rest); // [3, 4, 5]
```

⚠️ 주의 : `...rest`는 항상 구조 분해 할당의 마지막에 위치해야 합니다.

**📝 요소 건너뛰기**

쉼표를 사용하여 배열 내에서 필요 없는 값을 건너뛰고 할당할 수 있습니다.

```js
const [a, , c] = [1, 2, 3]; // 가운데 쉼표로 건너뜀

console.log(c); // 3
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">구조분해 원리</span>
  <ul>
    <li><strong>배열 교환의 원리</strong> : 우변에서 새로운 배열 [y, x]를 생성한 뒤, 이를 좌변의 변수들에 다시 할당하는 방식으로 작동합니다.</li>
    <li><strong>Rest 파라미터</strong> : ... 문법은 할당되지 않은 모든 남은 요소를 새로운 배열에 담아줍니다.</li>
    <li><strong>공백 할당</strong> : [a, , c]에서 두 번째 위치를 비워두면 인덱스 1번에 해당하는 값 2는 어떤 변수에도 할당되지 않고 무시됩니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 구조분해 할당</h2>
</div>

배열의 값을 변수로 우아하게 추출해봅시다.

**🎯 미션: 사용자 정보 추출**

1. `user = ["Steve", "Jobs", "Apple"]` 배열이 있습니다.
2. 구조분해 할당을 사용하여 firstName, lastName 변수에 값을 담으세요.
3. "Apple"은 company 변수에 담으세요.

**📝 정답 코드**

```js
// 1. 초기 배열 생성
const user = ["Steve", "Jobs", "Apple"];

// 2 & 3. 구조분해 할당을 사용하여 각 변수에 값 담기
const [firstName, lastName, company] = user;

// 결과 확인
console.log(firstName); // "Steve"
console.log(lastName);  // "Jobs"
console.log(company);   // "Apple"
```

**💡 보충 설명**

| **구분** | **핵심 원칙** | **상세 설명 및 예시** |
| --- | --- | --- |
| **순서 일치** | 인덱스 기반 할당 | 배열의 순서대로 변수에 저장됩니다.<br>· user[0] ("Steve") → firstName<br>· user[1] ("Jobs") → lastName<br>· user[2] ("Apple") → company |
| **변수 선언** | 동시 선언 및 할당 | 좌변에 const [ ... ] 형식을 사용하여 여러 개의 새로운 변수를 한 번에 선언하고 값을 채웁니다. |
| **가독성** | 코드 축약 | const firstName = user[0]; 처럼 여러 줄에 걸쳐 개별 할당할 필요 없이 단 한 줄로 처리가 가능합니다. |

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>16. 기초 훈련 - 전통적인 배열 순회</h2>
</div>

고차 함수를 배우기 전, 가장 기본이 되는 배열 순회 방법을 마스터합니다.

**📝 전통적인 for문**

인덱스(i) 제어가 필요할 때 유용합니다.

```js
const members = ["A", "B", "C"];

for (let i = 0; i < members.length; i++) {
  console.log(`${i}번: ${members[i]}`);
}
```

*특징 : 인덱스 번호를 직접 사용할 수 있어 세밀한 조정이 가능합니다.*

**📝 간결한 for...of**

인덱스 없이 값만 순회할 때 가장 깔끔합니다.

```js
const members = ["A", "B", "C"];

for (const member of members) {
  console.log(`회원명: ${member}`);
}
```

*특징 : 코드가 간결하며 가독성이 매우 좋습니다.*

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">순회 방식 선택 기준</span>
  <ul>
    <li><strong>선택 기준</strong> : 단순히 모든 요소를 한 번씩 훑어야 한다면 for...of를, 몇 번째 데이터인지(인덱스)가 중요하거나 특정 조건에서 인덱스를 건너뛰어야 한다면 전통적인 for문을 선택하는 것이 논리적입니다.</li>
    <li><strong>성능</strong> : 두 방식 모두 대규모 데이터를 처리하는 데 효율적이며, 가독성 측면에서 현대 자바스크립트는 for...of나 이후에 배울 forEach 등을 권장합니다.</li>
    <li><strong>변수 선언</strong> : for...of 루프 내부에서 member는 매 반복마다 새로 생성되므로 const를 사용하는 것이 안전합니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>17. 기초 훈련 - forEach 메서드</h2>
</div>

배열에는 forEach라는 자체적인 순회 메서드가 내장되어 있습니다.

**📌 수도코드 (Pseudo-code)**

동작 원리를 한글로 풀어낸 가이드입니다.

```text
배열의_요소마다_반복한다( (하나의_요소, 번호) => {
  기록(` ${번호}번: ${하나의_요소} `)
} )
```

**📝 forEach 문법**

실제 자바스크립트에서 사용하는 표준 문법입니다.

```js
const members = ["A", "B", "C"];

members.forEach((member, index) => {
  console.log(`${index}번째 회원: ${member}`);
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">forEach 특징</span>
  <ul>
    <li><strong>콜백 함수</strong> : forEach는 인자로 함수를 받습니다. 배열의 각 요소에 대해 이 함수를 한 번씩 실행합니다.</li>
    <li><strong>매개변수의 순서</strong> : 첫 번째 인자(member)는 현재 순회 중인 값이고, 두 번째 인자(index)는 해당 값의 인덱스 번호입니다. 이 순서는 고정되어 있으므로 이름을 바꿀 수는 있어도 순서를 바꿔서 사용할 수는 없습니다.</li>
    <li><strong>간결함</strong> : 전통적인 for문과 달리 let i = 0이나 length를 직접 계산할 필요가 없어 실수를 줄여줍니다.</li>
    <li><strong>반환 값 없음</strong> : forEach는 반복 작업만 수행할 뿐, 새로운 배열을 만들거나 값을 반환하지 않습니다. 단순히 "뿌려주는" 용도로 적합합니다.</li>
  </ul>
</div>

### 🔹 순회 방법 비교 요약

| **방법** | **특징** | **적합한 상황** |
| --- | --- | --- |
| **전통적인 for** | 인덱스 제어가 매우 자유로움 | 중간에 멈추거나 건너뛰어야 할 때 |
| **for...of** | 문법이 가장 직관적임 | 인덱스 없이 값만 필요할 때 |
| **forEach** | 배열 전용 메서드로 가독성이 좋음 | 인덱스와 값을 동시에 활용하며 코드를 줄이고 싶을 때 |

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 배열 기본 조작</h2>
</div>

**🎯 미션: 나의 취미 리스트 관리**

1. `hobbies`라는 이름의 빈 배열을 생성하세요.
2. push() 메서드를 사용하여 취미 3개를 문자열로 추가하세요.
3. 두 번째 취미를 콘솔에 출력하세요.
4. 배열의 마지막 취미를 "코딩"으로 변경하세요.

**📝 정답 코드**

```js
// 1. 빈 배열 생성
const hobbies = [];

// 2. 취미 3개 추가
hobbies.push("독서");
hobbies.push("영상보기");
hobbies.push("뒹굴기");
// hobbies[0] = "독서";
// hobbies[1] = "영상보기";
// hobbies[2] = "뒹굴기";

// 3. 두 번째 취미 출력 (index 1 사용)
console.log(hobbies[1]); // 결과: "영상보기"

// 4. 마지막 취미를 "코딩"으로 변경 (index 2 사용)
hobbies[2] = "코딩";

// 최종 결과 확인
console.log(hobbies); // 결과: ["독서", "영상보기", "코딩"]
```

**📝 요약 메모**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">배열 조작 실습 정리</span>
  <ul>
    <li><strong>정확한 인덱스 사용</strong> : 배열은 0부터 시작하므로 두 번째는 [1], 세 번째는 [2]입니다. 이 규칙을 어기면 undefined를 만나거나 원하지 않는 데이터를 수정하게 됩니다.</li>
    <li><strong>배열의 가변성</strong> : const로 선언된 배열이라도 내부 요소(Element)를 추가하거나 수정하는 것은 문법적으로 허용됩니다. 이는 '배열이라는 바구니' 자체를 바꾸는 것이 아니기 때문입니다.</li>
    <li><strong>순차적 처리</strong> : push()를 세 번 호출하여 데이터를 넣는 방식은 데이터의 입력 순서를 보장하는 가장 확실한 방법입니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>💻 실습 : 데이터 가공 Routine</h2>
</div>

지금까지 배운 함수, 배열, 반복문을 조합하여 실제 서비스를 구축하듯 실습합니다.

**✅ 데이터 및 로직 설계**

장바구니에 담긴 상품들의 총 결제 금액을 계산하는 프로세스입니다.

```js
// 🛒 장바구니 데이터
const cart = [
  { name: "MacBook", price: 2500000, quantity: 1 },
  { name: "Magic Mouse", price: 89000, quantity: 2 },
  { name: "iPad Air", price: 920000, quantity: 1 }
];

// 💰 총 결제 금액 계산 함수
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

// 실행 및 결과 출력
const finalPrice = calculateTotal(cart);
console.log(`총 결제 금액: ${finalPrice.toLocaleString()}원`);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">cart 예제 해설</span>
  <ul>
    <li><strong>데이터 구조</strong> : cart 배열 내부의 각 요소는 name, price, quantity 속성을 가진 <strong>객체(Object)</strong>로 구성되어 있습니다.</li>
    <li><strong>순회 로직</strong> : for...of 문을 사용하여 배열 내의 각 상품 객체에 접근합니다.</li>
    <li><strong>누적 연산</strong> : total += ... 구문을 통해 각 상품의 단가 * 수량 값을 합산하여 최종 금액을 산출합니다.</li>
    <li><strong>포맷팅</strong> : toLocaleString() 메서드는 숫자를 해당 국가의 통화 표기법에 맞게 쉼표(,)를 찍어 문자열로 변환해 줍니다.</li>
  </ul>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>📂 자바스크립트 배열(Array) 요약</h2>
</div>

### 1️⃣ 배열 생성: 상황별 선택 가이드

| **상황** | **추천 문법** | **코드 예시** |
| --- | --- | --- |
| **가장 일반적인 생성** | 리터럴 (`[]`) | `const arr = ["사과", "바나나"];` |
| **빈 방을 n개 미리 확보** | `new Array(n)` | `const spaces = new Array(5);` |
| **숫자 n 하나만 요소로** | `Array.of(n)` | `Array.of(3); // 결과: [3]` |
| **문자열/유사배열 변환** | `Array.from()` | `Array.from("ABC"); // ["A","B","C"]` |

### 2️⃣ 데이터 접근 및 수정: 기본 원칙

| **구분** | **문법 (Syntax)** | **원본 변경 여부** | **상세 설명 및 주의사항** |
| --- | --- | --- | --- |
| **읽기 (Read)** | `arr[인덱스]` | 유지 (No) | 특정 위치의 값을 참조만 하며, 배열 자체는 변하지 않습니다. |
| **쓰기 (Update)** | `arr[인덱스] = 값` | 변경 (Yes) | 해당 인덱스의 기존 데이터를 새로운 값으로 덮어쓰기 합니다. |
| **마지막 요소** | `arr[arr.length - 1]` | 유지 (No) | 배열의 길이(length)에서 1을 뺀 번호가 마지막 인덱스입니다. |
| **범위 초과** | `arr[존재하지_않는_번호]` | 해당 없음 | 에러가 발생하지 않고 undefined를 반환하므로 주의가 필요합니다. |

### 3️⃣ 요소 추가 및 제거: 위치별 선택 가이드

| **작업 위치** | **메서드** | **특징 및 성능** |
| --- | --- | --- |
| **맨 뒤에 추가** | `push()` | 가장 빠름. 새로운 길이를 반환합니다. |
| **맨 뒤에서 제거** | `pop()` | 가장 빠름. 제거된 요소를 반환합니다. |
| **맨 앞에 추가** | `unshift()` | 느림. 모든 인덱스를 새로 매깁니다. |
| **맨 앞에서 제거** | `shift()` | 느림. 첫 번째 요소를 빼고 나머지를 당깁니다. |
| **중간 제어 (만능)** | `splice()` | 특정 위치에서 삭제, 추가, 교체를 수행합니다. |

### 4️⃣ 검색과 추출: 상황별 도구함

| **기능** | **메서드** | **반환값 (Return)** | **핵심 특징** |
| --- | --- | --- | --- |
| **정확한 위치 찾기** | `indexOf(값)` | 인덱스 번호 (없으면 -1) | 데이터가 시작되는 위치를 숫자로 반환합니다. |
| **존재 여부 확인** | `includes(값)` | true / false | 복잡한 계산 없이 포함 여부만 판단할 때 유용합니다. |
| **특정 범위 복사** | `slice(시작, 끝)` | 새로운 배열 | 원본을 유지하는 비파괴적 메서드입니다. |
| **배열 합치기** | `concat()` | 새로운 배열 | 기존 배열들을 건드리지 않고 하나로 합친 새 배열을 만듭니다. |

### 5️⃣ 정렬과 변환: 데이터 가공하기

```js
// 1. 순서 뒤집기 (원본 변경)
arr.reverse();

// 2. 텍스트 정렬 (원본 변경)
arr.sort();

// 3. 숫자 정렬 (오름차순 공식 필수)
arr.sort((a, b) => a - b);

// 4. 문자열 합치기 (배열 -> 문자열)
const str = arr.join(", ");
```

### 6️⃣ 순회(반복): 상황별 선택 가이드

| **상황** | **추천 방식** | **특징** |
| --- | --- | --- |
| **인덱스 제어가 필요할 때** | 전통적인 for | 중간에 멈추거나 특정 조건 건너뛰기 가능 |
| **인덱스 없이 값만 쓸 때** | for...of | 문법이 가장 간결하고 직관적임 |
| **인덱스와 값을 동시 활용** | forEach | 배열 전용 메서드로 가독성이 우수함 |

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>✅ 핵심 요약</h2>
</div>

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>배열 인덱스는 <strong>항상 0부터</strong> 시작하고, 마지막 요소는 <code>arr[arr.length - 1]</code>이다.</li>
    <li><strong>원본을 바꾸는(파괴적)</strong> 메서드: push, pop, unshift, shift, splice, sort, reverse</li>
    <li><strong>원본을 유지하는(비파괴적)</strong> 메서드: slice, concat, indexOf, includes, join</li>
    <li>실무 데이터 가공은 <strong>꺼내서(순회) → 합치고(가공) → 반환한다</strong>의 3단계 루틴을 따른다.</li>
    <li>안전한 배열 복사는 <strong>스프레드(...) 또는 slice()</strong>로 한다 (<code>=</code> 대입은 참조만 복사됨).</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: const copy = original;로 복사하면 안전하다?</div>
    <div class="wda-mistake-right">정답: 배열은 참조 타입이라 <strong>주소만 복사</strong>되어 원본과 사본이 같이 바뀐다. 안전하게 복사하려면 <code>[...original]</code>이나 <code>original.slice()</code>를 쓴다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: indexOf()가 값을 못 찾으면 0을 반환한다?</div>
    <div class="wda-mistake-right">정답: 못 찾으면 <strong>-1</strong>을 반환한다. 0은 실제 인덱스이므로 혼동하면 안 된다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: arr.sort()는 숫자를 크기순으로 정렬해준다?</div>
    <div class="wda-mistake-right">정답: sort()는 기본적으로 <strong>문자열로 변환해 비교</strong>하므로 [10,1,2]가 [1,10,2]가 될 수 있다. 숫자는 <code>(a, b) =&gt; a - b</code> 비교 함수가 필요하다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: slice()와 splice()는 이름이 비슷하니 동작도 비슷하다?</div>
    <div class="wda-mistake-right">정답: <strong>splice는 원본을 파괴</strong>(자르기), <strong>slice는 원본을 유지</strong>(복사)한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 존재하지 않는 인덱스에 접근하면 에러가 난다?</div>
    <div class="wda-mistake-right">정답: 에러 없이 <strong>undefined를 반환</strong>한다. 그래서 실수를 눈치채기 더 어렵다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 파괴 vs 비파괴</div>
    <div class="wda-formula-block-body">
      <code>push/pop/shift/unshift/splice/sort/reverse = 파괴</code><br>
      <code>slice/concat/indexOf/includes/join = 비파괴</code>
    </div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 안전한 복사</div>
    <div class="wda-formula-block-body"><code>const copy = [...original]</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 숫자 정렬</div>
    <div class="wda-formula-block-body"><code>arr.sort((a, b) =&gt; a - b)</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 4 · 가공 3단계</div>
    <div class="wda-formula-block-body"><code>꺼내서 → 합치고 → 반환한다</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">배열에서 존재하지 않는 인덱스에 접근하면?</div>
    <div class="wda-flip-back">에러 없이 undefined를 반환한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">push()와 unshift()의 성능 차이는?</div>
    <div class="wda-flip-back">push는 끝에 추가해 빠르고, unshift는 앞에 추가하며 모든 인덱스를 다시 매겨야 해서 느리다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">splice()와 slice()의 가장 큰 차이는?</div>
    <div class="wda-flip-back">splice는 원본을 직접 수정하고, slice는 원본을 유지한 채 복사본을 반환한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">배열을 안전하게 복사하는 방법은?</div>
    <div class="wda-flip-back">스프레드 문법 [...arr] 또는 arr.slice()를 사용한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">sort()로 숫자를 오름차순 정렬하려면?</div>
    <div class="wda-flip-back">arr.sort((a, b) => a - b)처럼 비교 함수를 넣어야 한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">indexOf()가 값을 찾지 못하면 무엇을 반환하나?</div>
    <div class="wda-flip-back">-1을 반환한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">2차원 배열 matrix[1][2]는 무엇을 의미하나?</div>
    <div class="wda-flip-back">두 번째 행(인덱스 1)의 세 번째 열(인덱스 2) 값이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">구조분해 할당에서 특정 요소를 건너뛰려면?</div>
    <div class="wda-flip-back">const [a, , c] = arr처럼 쉼표만 남겨 건너뛴다.</div>
  </div>
</div>
