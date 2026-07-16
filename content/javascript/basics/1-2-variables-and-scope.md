---
title: "1-2 변수와 스코프 다루기"
status: "completed"
description: "JavaScript 변수 선언 방식과 스코프의 기본 개념을 이해합니다."
category: "JavaScript"
section: "Basics"
tags:
  - javascript
  - basics
  - variables
  - scope
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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-fcard-list{list-style:none;padding:0;margin:.4rem 0 0;font-size:.89rem;line-height:1.65}
.wda-fcard-list li::before{content:"· "}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(252,206,150,.32);color:#8a6d3b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-sdsc ul{margin:.3rem 0 0;padding-left:1.1rem}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px;font-size:.89rem;line-height:1.65;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-compare-ttl{font-size:.92rem;font-weight:700;line-height:1.5;margin-bottom:8px}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:4px}
.wda-legacy{border-color:rgba(245,158,11,.28);background:rgba(245,158,11,.035)}
.wda-modern{border-color:rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.79rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:200px}
.wda-flow{display:flex;flex-wrap:wrap;gap:4px;margin:.8rem 0 1.6rem;align-items:flex-start}
.wda-fnode{flex:1 1 90px;border:1px solid rgba(128,128,128,.18);border-radius:8px;padding:10px 12px;text-align:center;min-width:80px}
.wda-fnode-ttl{font-size:.88rem;font-weight:700;margin-bottom:3px}
.wda-fnode-dsc{font-size:.82rem;line-height:1.55}
.wda-farrow{color:rgba(139,92,246,.45);font-size:1.1rem;flex-shrink:0;padding:0 2px;align-self:center}
@media(max-width:600px){.wda-flow{flex-direction:column;align-items:center}.wda-farrow{transform:rotate(90deg)}}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
/* 같은 세트 내부 하위 항목(미니 소제목)의 위쪽 여백을 좁혀 형제 항목처럼 붙어 보이게
   한다 — 상위 소제목이 "새 세트 시작"의 넓은 여백을 그대로 유지하도록, 이 클래스는
   하위 항목들만 감싼 wrapper 안에서만 적용한다. 셀렉터 특이도(0,3,1)가 기본 padding-top
   규칙(단일 클래스, 0,1,0)보다 높아 !important 없이도 항상 이긴다. */
.wda-substep-set p.wda-minihead.wda-minihead{padding-top:.5rem}
/* 핵심 요약 전용 복습 UI — 색상 균형 조정(2026-07 38차 개편 — 4영역 전부에 강한 색을
   주면 알록달록해 보여, 먼저 외울 것과 공식 보드 바깥은 neutral로 낮추고 헷갈리기
   쉬운 것(피치)·공식 카드 안쪽(핑크)·클릭 복습 카드(라벤더/그린)에만 색 포인트를
   남긴다). 색은 background/border/accent에만 쓰고, 본문 텍스트는 카드 색과 무관하게
   진회색(#2C2840)·strong은 #1F1B2E로 고정한다. */
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
/* 공식 보드 — 바깥은 neutral(색 면적을 줄여 알록달록함 방지), 안쪽 카드 3개만 연핑크
   포인트로 통일한다(공식 1/2/3을 서로 다른 색으로 나누지 않는다). */
.wda-formula-board{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem;padding:14px;border-radius:12px;background:rgba(128,128,128,.025);border:1px dashed rgba(128,128,128,.22)}
.wda-formula-block{flex:1 1 160px;min-width:150px;border-radius:8px;padding:10px 13px;background:#FFF3F6;border:1px dashed #F0B4C2}
.wda-formula-block-ttl{font-size:.72rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#D86F8A;margin-bottom:6px}
.wda-formula-block-body{font-size:.87rem;line-height:1.7;font-weight:600;color:#2C2840}
.wda-formula-block-body code{background:transparent;padding:0;font-weight:700;font-family:'JetBrains Mono','Fira Code',monospace;color:#1F1B2E}
/* 클릭 복습 카드(FlipCard.jsx) 컨테이너 — 카드 자체의 모양/뒤집기 애니메이션·색(purple/green)은
   컴포넌트가 sx로 직접 관리하고, 여기서는 여러 장을 배치하는 grid 레이아웃만 담당한다. */
.wda-flip-deck{display:flex;flex-wrap:wrap;gap:12px;margin:.8rem 0 1.6rem}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  📦 <strong>변수 개념</strong> — 변수가 필요한 이유를 설명할 수 있게 된다.<br>
  🔑 <strong>선언문</strong> — var, let, const의 차이를 구분하고 사용한다.<br>
  ⬆️ <strong>호이스팅</strong> — 호이스팅과 TDZ 동작 원리를 이해한다.<br>
  🔍 <strong>스코프</strong> — 전역/지역, 블록/함수 스코프를 구분한다.
</div>

---

## 1. 무엇을 찾으시나요?

변수는 **데이터를 저장한 위치에 붙이는 이름표**다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">📦 상자와 라벨 개념</div>
    • 상자에는 <strong>값</strong>이 들어간다.<br>
    • 라벨은 <strong>이름(식별자)</strong>이다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">🧠 메모리 포인트</div>
    • 컴퓨터는 데이터를 <strong>메모리에 저장</strong>한다.<br>
    • 메모리 주소 예시: <code>0x7FF2A1 (복잡)</code><br>
    • 개발자는 주소 대신 <strong>이름으로 접근</strong>한다.<br>
    • 활용명 예시: <code>name</code> (이해하기 쉬운 이름)
  </div>
</div>

---

## 2. 왜 필요한가?

**❌ 대응하지 않음**

```javascript
console.log(10000 *1.1);// 부가세 포함
console.log(10000 *0.9);// 할인가
console.log(10000 +3000);// 배송비 포함

// 가격이 바뀌면 전부 수정해야 한다
```

• 같은 값을 여러 번 작성한다.<br>
• 유지 보수가 어렵다.

**✅ 활용**

```javascript
let price =10000;// 기준 가격을 변수로 저장한다

console.log(price *1.1);// 부가세 포함
console.log(price *0.9);// 할인가
console.log(price +3000);// 배송비 포함

// 가격이 바뀌면 price만 수정하면 된다
```

변수를 사용하면 **코드 재사용, 유지 보수, 가독성**이 좋아진다.

---

## 3. 변수의 생성 과정

내부적으로 **다음 3단계를 거친다.**

**📌 1단계: 선언**

• 해당 실행 컨텍스트(스코프)에 등록된다.<br>
• `"name이라는 변수를 쓸 것이다"`라고 알린다.

```javascript
// 아직 값은 없다
```

**⚙️ 2단계: 초기화**

• 메모리 공간을 확보한다.<br>
• 값은 아직 들어가지 않은 상태다.

```javascript
// var는 선언과 동시에 이 단계까지 진행된다
// 그래서 undefined가 된다
// let/const는 이 단계 전까지 TDZ 상태다
```

• let은 선언문에 도달하면 초기화되고, 값이 없으면 undefined가 들어갈 수 있습니다.<br>
• const는 선언과 동시에 반드시 값을 할당해야 합니다.

**💾 3단계: 할당**

• 실제 데이터가 저장된다.

```javascript
name ="김철수";// 실제 값이 메모리에 들어간다
```

---

## 4. var 키워드 (❌)

자바스크립트의 **가장 오래된 선언 방식**이다.

**⚡ 기본 동작 — var**

```javascript
var age =25;
console.log(age);// 25

age =30;// 재할당 가능
console.log(age);// 30

var age =35;// 재선언 가능
console.log(age);// 35
```

**⚠️ var의 문제**

<div class="wda-callout wda-cw">
  • 재선언 허용 → <strong>부담되는 위험</strong><br>
  • 블록 <code>{}</code> 무시<br>
  • 호이스팅 → 선언 전 접근 가능(미정의)
</div>

```javascript
console.log(test);// undefined
var test =10;
```

• var는 **레거시 코드에서만 사용**한다.<br>
• 새 코드에서는 **let / const를 사용**한다.

---

## 5. let 키워드

ES6에서 등장한 **블록 스코프 변수 선언 방식**이다.

**⚡ 기본 동작 — let**

```javascript
let score =100;
console.log(score);// 100
// score 변수에 100을 저장하고 출력한다

score =95;// 재할당 가능
console.log(score);// 95
// 기존 변수에 새로운 값을 다시 넣는다

let score =90;// Error! 재선언 불가
// 같은 스코프에서 같은 이름으로 다시 선언할 수 없다
```

**✅ let의 장점**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">재선언 불가</div>
    <div class="wda-fcard-dsc">같은 이름의 변수를 다시 만들 수 없다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">블록 스코프</div>
    <div class="wda-fcard-dsc"><code>{}</code> 안에서만 유효하다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">TDZ 적용</div>
    <div class="wda-fcard-dsc">선언 전에 접근하면 에러가 발생한다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">재할당 가능</div>
    <div class="wda-fcard-dsc">값이 변할 수 있는 경우에 사용한다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  반복문 카운터 조건에 따라 값이 변경될 때 재할당이 필요한 변수에 let을 사용합니다.
</div>

---

## 6. const 키워드

**재할당이 불가능한 값**을 선언한다.

**⚡ 기본 동작 — const**

```javascript
const PI =3.14159;
console.log(PI);// 3.14159
// 상수 값을 선언하고 출력한다

PI =3.14;// Error! 재할당 불가
// const는 값을 다시 넣을 수 없다
```

**⚠️ 초기화 필수**

```javascript
const TAX_RATE =0.1;
// 선언과 동시에 반드시 값을 넣어야 한다

const empty;// Error! 초기화 필수
// 값을 주지 않으면 에러가 발생한다
```

**🎯 선택 기준 — let vs const**

<div class="wda-compare">
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-ttl">const</div>
    <div class="wda-compare-label">값이 바뀌지 않을 때</div>
    예: 설정값, 기준값, API 주소 등
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">let</div>
    <div class="wda-compare-label">값이 바뀔 때</div>
    예: 카운터, 점수, 상태 값 등
  </div>
</div>

기본적으로 const를 먼저 사용하고, 재할당이 필요하면 let으로 변경한다.

**⚠️ 주의**

<div class="wda-callout wda-cw">
  • const로 선언한 <strong>객체/배열의 내부 값은 수정 가능</strong>하다.<br>
  • 재할당만 막는 것이지, 내부 변경까지 막는 것은 아니다.
</div>

---

## 7. 실습 : 변수 선언해보기

개발자 도구(F12) Console 탭에서 직접 입력해 확인한다.

**🔄 let — 바뀌는 값**

```javascript
let nickname ="초보자";
console.log(nickname);// "초보자"
// 초기 값을 출력한다

nickname ="고수";
console.log(nickname);// "고수"
// 값이 변경된다

let nickname ="중수";// Error! 재선언 불가
// 같은 이름으로 다시 선언할 수 없다
```

**🔒 const — 변하지 않는 값**

```javascript
const birthDay ="2000-01-01";
console.log(birthDay);// "2000-01-01"
// 최초 값 출력

birthDay ="2000-12-25";// Error! 재할당 불가
// const 값은 변경할 수 없다
```

콘솔에서 **Uncaught TypeError**를 직접 확인하는 것이 중요하다.

---

## 8. 호이스팅(Hoisting)

선언 코드가 **최상단으로 끌어올려진 것처럼 동작**한다.

**⬆️ var 호이스팅**

```javascript
console.log(userName);// undefined (에러 아님)
var userName ="철수";
console.log(userName);// "철수"
```

```javascript
// JavaScript 내부 처리 순서
var userName;// 선언만 끌어올림
console.log(userName);// undefined
userName ="철수";// 할당은 원래 위치
```

• 선언과 초기화가 동시에 이루어진다.<br>
• 그래서 undefined가 나온다.

**🔒 let / const 호이스팅**

```javascript
console.log(userName);// ReferenceError!
let userName ="철수";
```

```javascript
// 내부 동작 개념
// let userName;          // 선언은 끌어올려짐
// console.log(userName); // TDZ → 접근 불가
// userName = "철수";     // 여기서부터 사용 가능
```

호이스팅은 되지만 **TDZ 때문에 접근이 차단**된다.

**💡 왜 호이스팅이 생기나?**

<div class="wda-callout wda-ci">
  • JavaScript 엔진은 실행 전 <strong>실행 컨텍스트(Execution Context)</strong>를 먼저 만든다.<br>
  • 이 과정에서 선언 정보를 미리 등록한다.<br>
  • 그래서 선언부가 끌어올려진 것처럼 보인다.
</div>

---

## 9. TDZ (Temporal Dead Zone)

let / const는 **선언 전에 접근이 금지된 구간**이 존재한다.

**📋 TDZ 예제**

```javascript
// ↓ TDZ 시작 (스코프 진입)
console.log(score);  // ReferenceError!
//
// TDZ 구간 (접근 불가)
//
let score = 100;     // ← TDZ 끝 (선언문)
// ↓ 정상 접근 가능
console.log(score);  // 100
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  같은 콘솔에서 이미 선언한 let/const 변수명을 다시 사용하면 재선언 에러가 날 수 있습니다. 앞서 5번 항목에서 <code>score</code>를 이미 선언했다면, 예제를 다시 실행할 때는 새로고침하거나 변수명을 바꿔보세요.
</div>

**🔢 TDZ 3단계**

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">선언</div><div class="wda-fnode-dsc">스코프에 등록된다.</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">초기화</div><div class="wda-fnode-dsc">메모리 확보 + undefined 할당<br>아직 값은 없다.</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">할당</div><div class="wda-fnode-dsc">실제 값이 들어간다.</div></div>
</div>

**⚖️ var vs let/const 차이**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">var</div>
    선언 + 초기화 동시 → TDZ 없음
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">let / const</div>
    선언만 먼저 → 실행 시점까지 TDZ 유지
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • let/const는 <strong>코드가 실제로 읽히는 시점 이후</strong>에만 접근해야 한다.<br>
  • 선언 전에 접근하면 <strong>초기화 전 접근 오류</strong>가 발생한다.<br>
  • TDZ는 버그를 막기 위한 <strong>의도적인 안전장치</strong>다.<br>
  • "왜 안 되지?"가 아니라 "실수를 막아주고 있구나"라고 이해하면 된다.
</div>

---

## 10. 스코프: 전역 vs 지역

스코프는 **변수에 접근할 수 있는 범위**다.

**🌍 전역 스코프 (Global)**

```javascript
let globalVar ="전역 변수";
// 전역에서 선언된 변수다

function test() {
console.log(globalVar);
// 함수 안에서도 전역 변수에 접근 가능하다
}

test();
console.log(globalVar);
// 어디서든 접근 가능하다
```

어디서든 접근 가능하다.

**📦 지역 스코프 (Local)**

```javascript
function test() {
let localVar ="지역 변수";
// 함수 내부에서만 존재하는 변수다

console.log(localVar);
// "지역 변수" 출력된다
}

test();
console.log(localVar);
// Error! 함수 밖에서는 접근 불가다
```

선언된 범위 안에서만 접근 가능하다.

**⚠️ 주의**

<div class="wda-callout wda-cw">
  • 전역 변수는 편리하지만, <strong>최소한으로 사용</strong>해야 한다.<br>
  • 어디서든 수정 가능해 <strong>버그의 원인</strong>이 된다.
</div>

---

## 11. 스코프: 블록 vs 함수

var와 let/const는 **스코프 범위가 다르다**.

**⚡ 함수 스코프 — var**

```javascript
function test() {
if (true) {
var x =10;
// var는 함수 스코프다
  }

console.log(x);
// 10 출력된다 (블록 밖 접근 가능)
}

test();
console.log(x);
// Error! 함수 밖에서는 접근 불가다
```

var는 **함수 단위 스코프**를 가진다.

**🔒 블록 스코프 — let / const**

```javascript
function test() {
if (true) {
let y =20;
// let은 블록 스코프다
  }

console.log(y);
// Error! 블록 밖 접근 불가다
}

test();
console.log(y);
// Error! 함수 밖 접근 불가다
```

let/const는 `{}` 단위로 스코프가 생성된다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • 블록 스코프가 더 직관적이다.<br>
  • if, for, while 등의 <code>{}</code> 안에서 선언한 변수는 <strong>밖에서 접근 불가</strong>다.
</div>

---

## 12. 스코프 체인 & 섀도잉

변수를 찾을 때까지 **상위 스코프로 계속 올라간다**.

**🔗 스코프 체인 (Scope Chain)**

```javascript
let name ="전역";

function outer() {
function inner() {
console.log(name);
// inner → outer → 전역 순으로 탐색
// 최종적으로 전역 name을 찾는다
  }

inner();
}

outer();
```

• 가장 가까운 스코프부터 탐색한다.<br>
• 없으면 상위 스코프로 계속 올라간다.

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  같은 콘솔에서 이미 선언한 let/const 변수명을 다시 사용하면 재선언 에러가 날 수 있습니다. 예제를 다시 실행할 때는 새로고침하거나 변수명을 바꿔보세요.
</div>

**🌑 섀도잉 (Shadowing)**

```javascript
let name ="전역";

function outer() {
let name ="지역";
// 같은 이름의 변수를 다시 선언했다

console.log(name);
// "지역" 출력된다
}

outer();
```

• 가장 가까운 스코프의 변수가 우선된다.<br>
• 전역 변수는 가려진다(Shadowed).

---

## 13. 실습: 스코프 테스트

다음 코드를 **예측 후 Console에서 확인**한다.

```javascript
let apple ="빨간 사과";

{
let apple ="초록 사과";
// 블록 스코프 변수다 (섀도잉 발생)

console.log(apple);
// 1. "초록 사과" 출력된다

let banana ="노란 바나나";
}

console.log(apple);
// 2. "빨간 사과" 출력된다

console.log(banana);
// 3. Error! 블록 밖 접근 불가다
```

**결과 정답**

1. 초록 사과 (블록 안)<br>
2. 빨간 사과 (전역)<br>
3. ReferenceError (접근 불가)

---

## 14. 변수 명명 규칙

좋은 변수명은 **코드를 문서처럼 만든다**.

<div class="wda-substep-set">

**📋 기본 규칙**

• 문자, 숫자, `_`, `$` 사용 가능하다.<br>
• 숫자로 시작할 수 없다.<br>
• 예약어 사용 불가다 (let, const, if, for 등).<br>
• 대소문자를 구분한다 (`name` ≠ `Name`).

**🐪 camelCase 컨벤션**

```javascript
// 좋은 예
let userName ="철수";
let totalPrice =10000;
let isLoggedIn =true;

// 나쁜 예
let username ="철수";// 의미 구분 어려움
let total_price =10000;// snake_case (JS 비권장)
let a =true;// 의미 없는 이름
```

• 첫 단어는 소문자다.<br>
• 이후 단어의 첫 글자는 대문자다.<br>
• JavaScript 표준 컨벤션이다.

</div>

---

## 15. 표기법 종류 (Naming Cases)

**📝 표기법 3가지**

<table class="wda-summary-table">
    <thead>
      <tr>
        <th>camelCase</th>
        <th>PascalCase</th>
        <th>UPPER_SNAKE_CASE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>(낙타 등처럼 울퉁불퉁)</strong></td>
        <td><strong>(첫 글자도 대문자)</strong></td>
        <td><strong>(밑줄로 길게 연결)</strong></td>
      </tr>
      <tr>
        <td><code>userName</code></td>
        <td><code>UserCard</code></td>
        <td><code>MAX_COUNT</code></td>
      </tr>
      <tr>
        <td><code>isLoggedIn</code></td>
        <td><code>PaymentService</code></td>
        <td><code>API_KEY</code></td>
      </tr>
      <tr>
        <td><code>createdAt</code></td>
        <td><code>App</code></td>
        <td><code>IS_DEV_MODE</code></td>
      </tr>
      <tr>
        <td><strong>언제 쓰나?</strong></td>
        <td><strong>언제 쓰나?</strong></td>
        <td><strong>언제 쓰나?</strong></td>
      </tr>
      <tr>
        <td>변수, 함수, 메서드</td>
        <td>클래스, 생성자, React 컴포넌트</td>
        <td>변하지 않는 상수(const)</td>
      </tr>
    </tbody>
  </table>

**⚠️ 주의**

<div class="wda-callout wda-cw">
  소문자 snake_case는 Python이나 DB에서 주로 쓰며 <strong>JavaScript 변수명으로는 잘 쓰지 않는다</strong>.
</div>

---

## 16. 상수 활용 패턴

변하지 않는 값은 **상수로 선언**한다.

**🐍 UPPER_SNAKE_CASE**

```javascript
// 상수는 대문자 + 언더스코어
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
const TAX_RATE = 0.1;
const DAYS_IN_WEEK = 7;

// 사용 예
let totalTax = price *TAX_RATE;
// 세금 계산에 상수를 사용한다
```

**대문자 =** "이 값은 절대 바꾸지 마라"는 신호다.

**📅 언제 사용하나?**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">설정값</div>
    <div class="wda-fcard-dsc"><code>MAX_LENGTH</code>, <code>MIN_AGE</code>, <code>DEFAULT_SIZE</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">URL / 경로</div>
    <div class="wda-fcard-dsc"><code>API_URL</code>, <code>IMAGE_PATH</code>, <code>BASE_URL</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">수학 / 물리 상수</div>
    <div class="wda-fcard-dsc"><code>PI</code>, <code>GRAVITY</code>, <code>SPEED_OF_LIGHT</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">매직 넘버 대체</div>
    <div class="wda-fcard-dsc">숫자 <code>7</code> 대신 <code>DAYS_IN_WEEK</code></div>
  </div>
</div>

---

## 17. {} 실습 과제: 변수 사용해보기

아직 DOM(화면 조작)은 배우지 않았고, **Console을 활용**한다.

**🎯 목표**

나의 정보를 변수에 담고, **스코프 규칙을 지켜 Console에 출력**한다.

**📋 요구사항**

• `const`로 **바뀌지 않는 정보(이름)** 선언<br>
• `let`으로 **바뀔 수 있는 정보(나이, 상태)** 선언<br>
• 블록 `{}` 안에 **나만 알아야 할 정보**(예: 비밀번호) 선언 및 숨김<br>
• 블록 바깥에서 **공개 정보(이름, 나이)** 출력

```javascript
// 구성 예시: 이름(const) / 나이·상태(let) / 비밀번호(블록 스코프 안에 숨김)
```

**💡 힌트 1 — 로직**

🔹 **변수 선언**

```javascript
const myName ="김코딩";// 이름은 바뀌지 않으므로 const로 선언한다
let myAge =25;// 나이는 변할 수 있으므로 let으로 선언한다
```

• `const`는 재할당이 불가능한 값에 사용한다.<br>
• `let`은 값이 변경될 수 있을 때 사용한다.

🔹 **블록 스코프**

```javascript
{
let secret ="비밀";// 블록 안에서만 유효한 변수다
console.log(secret);// 정상 출력된다
}

// console.log(secret);         // ❌ 에러 발생 (블록 밖 접근 불가)
```

• `{}` 안에서 선언한 `let` 변수는 **블록 스코프**를 가진다.<br>
• 블록 밖에서 접근하면 **ReferenceError**가 발생한다.<br>
• 이는 **정상적인 동작**이다.

**💡 힌트 2 — 출력 꿀팁**

`console.log`로 여러 값을 출력하는 **대표적인 두 가지 방법**이다.

🔹 **콤마(,) 사용**

```javascript
console.log("이름:", myName);
```

• 값 사이를 콤마로 구분한다.<br>
• 자동으로 **띄어쓰기**가 들어간다.<br>
• 가장 **깔끔하고 많이 사용하는 방법**이다.

🔹 **더하기(+) 사용**

```javascript
console.log("제 나이는 " + myAge +"살입니다.");
```

• 문자열과 변수를 **문자열로 연결**한다.<br>
• 띄어쓰기를 직접 넣어야 한다.<br>
• 문장 형태 출력에 사용한다.

**📌 정리 메모**

• `const` → **재할당하지 않는 값**<br>
• `let` → **바뀔 수 있는 값**<br>
• `{}` 안의 `let` 변수 → **블록 밖 접근 불가**<br>
• 에러가 나는 것은 **잘못이 아니라 규칙을 잘 지킨 결과**다.

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>변수는 <strong>데이터를 저장하는 이름(공간)</strong>이다.</li>
    <li>변수 생성 순서는 <strong>선언 → 초기화 → 할당</strong>이다.</li>
    <li><strong>var ❌</strong> 사용하지 않는다 (재선언·호이스팅 위험).</li>
    <li><strong>const ✅ 기본값</strong>으로 사용한다.</li>
    <li>값이 바뀌면 <strong>let</strong>을 사용한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: var도 블록 스코프다?</div>
    <div class="wda-mistake-right">정답: let/const는 <strong>블록 스코프</strong>, var는 <strong>함수 스코프</strong>다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 스코프는 아무 데서나 찾을 수 있다?</div>
    <div class="wda-mistake-right">정답: <strong>가장 가까운 스코프부터</strong> 차례로 탐색한다 (스코프 체인).</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 같은 이름이면 바깥쪽(전역) 변수가 우선된다?</div>
    <div class="wda-mistake-right">정답: <strong>안쪽(가까운) 변수가 우선</strong>된다 (섀도잉).</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 호이스팅은 var에서만 발생한다?</div>
    <div class="wda-mistake-right">정답: 호이스팅은 <strong>모든 선언에서 발생</strong>한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 선언 전에 접근하면 항상 에러가 난다?</div>
    <div class="wda-mistake-right">정답: var는 <code>undefined</code>가 나오고, let/const만 <strong>TDZ 때문에 에러</strong>가 난다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 선언 키워드</div>
    <div class="wda-formula-block-body">
      <code>const 먼저 → 안 되면 let</code><br>
      <code>var는 레거시</code>
    </div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 스코프</div>
    <div class="wda-formula-block-body">
      <code>let / const = 블록 스코프</code><br>
      <code>var = 함수 스코프</code>
    </div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 선언 전 접근</div>
    <div class="wda-formula-block-body">
      <code>var = undefined</code><br>
      <code>let / const = TDZ 에러</code>
    </div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">변수란?</div>
    <div class="wda-flip-back">데이터를 저장한 위치에 붙이는 이름(공간)이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">변수 생성 순서 3단계는?</div>
    <div class="wda-flip-back">선언 → 초기화 → 할당 순서로 진행된다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">const와 let은 언제 구분하나?</div>
    <div class="wda-flip-back">기본은 const를 사용하고, 값이 바뀔 때만 let을 사용한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">var를 피하는 이유는?</div>
    <div class="wda-flip-back">재선언이 허용되고 호이스팅 위험이 있기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">TDZ란?</div>
    <div class="wda-flip-back">let/const가 선언 전에 접근되지 않도록 막는 구간이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">스코프 체인이란?</div>
    <div class="wda-flip-back">변수를 찾을 때 가장 가까운 스코프부터 상위로 계속 탐색해 올라가는 과정이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">섀도잉이란?</div>
    <div class="wda-flip-back">같은 이름의 변수가 있을 때 가장 안쪽(가까운) 스코프의 변수가 우선되는 것이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">선언 전 접근 시 var와 let/const의 차이는?</div>
    <div class="wda-flip-back">var는 undefined가 나오지만, let/const는 TDZ 때문에 에러가 발생한다.</div>
  </div>
</div>
