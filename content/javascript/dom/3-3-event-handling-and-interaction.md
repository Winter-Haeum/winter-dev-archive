---
title: "3-3 이벤트 처리로 인터랙션 만들기"
status: "completed"
description: "addEventListener 등록부터 이벤트 객체, 전파(버블링)와 위임까지 사용자 인터랙션을 처리하는 핵심 기법을 정리한다."
category: "JavaScript"
section: "DOM"
tags:
  - javascript
  - dom
  - events
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
.wda-fcard-pro{border-left:3px solid rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(245,158,11,.15);color:#f59e0b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px}
.wda-compare-ttl{font-size:.94rem;font-weight:700;margin-bottom:8px}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:4px}
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
.image-text-row{display:grid;grid-template-columns:1fr minmax(120px,160px);gap:24px;align-items:center;margin:.8rem 0 1.4rem}
.image-text-row ul{margin:0;padding-left:1.1rem}
.image-text-row li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.image-text-row img{width:100%;max-width:160px;height:auto;object-fit:contain;margin:0 auto}
@media (max-width:768px){
.image-text-row{grid-template-columns:1fr}
.image-text-row img{max-width:100%;margin:16px auto}
}
</style>

<blockquote style="margin:.3rem 0 .8rem;">사용자 행동에 반응하는 동적인 웹페이지!</blockquote>

---

## 🎯 학습 목표

<div class="wda-goal">
  🔔 <strong>이벤트 개념 이해</strong> — 브라우저에서 발생하는 다양한 이벤트 종류를 알아봅니다.<br>
  ◀️▶️ <strong>이벤트 핸들러 등록</strong> — addEventListener를 사용한 등록법을 익힙니다.<br>
  { } <strong>이벤트 객체 활용</strong> — 이벤트의 상세 정보를 담은 객체를 활용합니다.<br>
  🔁 <strong>이벤트 전파와 위임</strong> — 버블링 개념과 위임 패턴을 이해합니다.
</div>

---

## 1. 이벤트(Event)란?

### 1) 브라우저가 전달하는 사건

이벤트는 사용자 행동이나 브라우저 상태 변화 중, **브라우저가 감지하여 JS에 전달해주는 사건**입니다.

| **분류** | **이벤트 항목** | **설명** |
| --- | --- | --- |
| **사용자 입력 이벤트** | 클릭 (Click) | 사용자가 마우스 버튼을 눌렀을 때 발생합니다. |
|  | 마우스 이동 (Mouse Move) | 마우스 커서가 요소 위에서 움직일 때 발생합니다. |
|  | 키보드 타이핑 (Keydown/up) | 키보드 자판을 누르거나 뗄 때 발생합니다. |
| **시스템/브라우저 이벤트** | 페이지 로드 완료 (Load) | 웹페이지의 모든 요소가 불러와졌을 때 발생합니다. |
|  | 이미지 로드 실패 (Error) | 이미지를 불러오지 못했을 때 발생하는 오류 사건입니다. |

### 2) 이벤트 기반 프로그래밍

**핵심 원리**

<div class="wda-callout wda-cy">
  <ul>
    <li>이벤트는 항상 발생하지만, <strong>우리가 리스너를 등록한 이벤트만 처리</strong>할 수 있습니다.</li>
  </ul>
</div>

이벤트 처리 흐름은 다음과 같습니다.

이벤트 발생 → 리스너 등록 여부 확인? → (Yes) 핸들러 실행 → 결과 반영

<img src="/images/content/javascript/3-3/javascript-3-3-event-driven-programming.png" alt="이벤트 기반 프로그래밍 다이어그램" style="display:block;width:100%;max-width:430px;height:auto;border-radius:8px;margin:.6rem auto 1rem;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:430px;">[그림] 이벤트 기반 프로그래밍 흐름 (이벤트 발생 → 상태 검사 → 동작 수행/대기)</div>

### 3) 용어 정리

- **이벤트** : 브라우저에서 발생한 사건
- **리스너** : 특정 이벤트를 기다리는 장치 (귀)
- **핸들러** : 이벤트가 발생했을 때 실행되는 함수 (행동)

<blockquote style="margin:.3rem 0 .8rem;">"리스너가 이벤트를 듣고, 핸들러를 실행시킨다"</blockquote>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>이벤트 발생 → 리스너 등록?</strong> 브라우저에서 사건(클릭 등)이 일어나면, 먼저 해당 요소에 그 사건을 감시하는 '리스너'가 있는지 확인합니다.</li>
    <li><strong>핸들러 실행 (Yes)</strong> 리스너가 있다면 연결된 '핸들러(함수)'를 실행하여 결과를 화면에 반영합니다.</li>
    <li><strong>무시됨 (No)</strong> 만약 리스너가 등록되어 있지 않다면, 이벤트가 발생하더라도 브라우저는 아무런 동작을 하지 않고 무시합니다.</li>
  </ul>
</div>

---

## 2. 이벤트 종류 (1) - 마우스 이벤트

### 1) 클릭 관련

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>click</code></div><div class="wda-fcard-dsc">클릭 (누르고 떼기)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>dblclick</code></div><div class="wda-fcard-dsc">더블클릭</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>mousedown</code></div><div class="wda-fcard-dsc">마우스 버튼 누름</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>mouseup</code></div><div class="wda-fcard-dsc">마우스 버튼 뗌</div></div>
</div>

### 2) 이동 관련

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>mousemove</code></div><div class="wda-fcard-dsc">마우스 이동</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>mouseenter</code></div><div class="wda-fcard-dsc">요소에 진입 (버블링 X)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>mouseleave</code></div><div class="wda-fcard-dsc">요소에서 벗어남 (버블링 X)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>mouseover</code></div><div class="wda-fcard-dsc">요소 위로 (버블링 O)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>mouseout</code></div><div class="wda-fcard-dsc">요소 밖으로 (버블링 O)</div></div>
</div>

### 3) 실행 순서 및 코드

클릭 시 이벤트 순서는 `mousedown` → `mouseup` → `click` 입니다.

```jsx
button.addEventListener('mousedown', function() {
  console.log('1. mousedown'); // 마우스 버튼을 '꾹' 누르는 순간 실행됩니다.
});

button.addEventListener('mouseup', function() {
  console.log('2. mouseup');   // 누르고 있던 마우스 버튼에서 손을 떼는 순간 실행됩니다.
});

button.addEventListener('click', function() {
  console.log('3. click');     // 누르고 떼는 동작이 모두 완료되어야 최종 '클릭'으로 인정됩니다.
});
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <ul>
    <li><strong>mouseenter / mouseleave</strong> : 자식 요소의 경계는 무시하고 해당 요소의 경계만 따집니다.</li>
    <li><strong>mouseover / mouseout</strong> : 자식 요소 사이를 이동할 때도 이동을 감지합니다.</li>
    <li><strong>권장사항</strong> : 단순히 특정 요소에 마우스가 들어오고 나가는 것만 감지할 때는 <code>mouseenter / mouseleave</code>가 이해하기 쉽습니다. 다만 이벤트 위임처럼 부모 요소에서 자식의 마우스 진입을 함께 처리해야 할 때는 <code>mouseover / mouseout</code>을 사용할 수 있습니다.</li>
  </ul>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>버블링(Bubbling) 유무</strong> — <code>mouseenter</code> 계열은 이벤트가 부모로 전달되지 않아 의도치 않은 작동을 방지하기 좋습니다. 반면 <code>mouseover</code> 계열은 자식 요소까지 세밀하게 감지해야 할 때 사용합니다.</li>
    <li><strong>이벤트 순서 활용</strong> — 사용자가 마우스를 누른 채 움직이는 '드래그' 기능을 만들 때는 <code>click</code>이 아닌 <code>mousedown</code> 시점에 동작이 시작되도록 설계해야 합니다.</li>
  </ul>
</div>

---

## 💻 실습 : 마우스 이벤트

### 1) Mission (미션)

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1
    <div class="wda-sbody">
      <div class="wda-sttl">click</div>
      <div class="wda-sdsc">"클릭됨!" 경고창</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">mouseover</div>
      <div class="wda-sdsc">"마우스 위로!" 콘솔 출력</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">mouseout</div>
      <div class="wda-sdsc">"마우스 나감!" 콘솔 출력</div>
    </div>
  </div>
</div>
</div>

### 2) 실습 코드

```jsx
<button id="my-btn">테스트 버튼</button>

const btn = document.querySelector('#my-btn'); // 아이디가 my-btn인 버튼 요소를 선택합니다.

// 1. 클릭 이벤트 (click)
btn.addEventListener('click', function() {
  alert('클릭됨!'); // 버튼을 클릭했을 때 브라우저에 경고창을 띄웁니다.
});

// 2. 마우스 오버 이벤트 (mouseover)
btn.addEventListener('mouseover', function() {
  console.log('마우스 위로!'); // 마우스 커서가 버튼 영역 안으로 들어오면 콘솔에 출력합니다.
});

// 3. 마우스 아웃 이벤트 (mouseout)
btn.addEventListener('mouseout', function() {
  console.log('마우스 나감!'); // 마우스 커서가 버튼 영역을 벗어나면 콘솔에 출력합니다.
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>아이디 선택자 (<code>#my-btn</code>)</strong> — HTML에서 설정한 <code>id</code> 값을 자바스크립트에서 불러올 때는 앞에 <code>#</code> 기호를 붙여야 정확히 해당 요소를 찾아올 수 있습니다.</li>
    <li><strong>이벤트의 차이</strong> — <code>mouseover</code>는 마우스가 들어오는 순간 "똑똑" 하고 노크하는 것과 같고, <code>mouseout</code>은 마우스가 나가면서 "안녕" 하고 인사하는 것과 같습니다.</li>
    <li><strong>경고창(<code>alert</code>) vs 콘솔(<code>console.log</code>)</strong> — <code>alert</code>는 사용자 화면에 직접 메시지 박스를 띄워 즉각적인 알림을 줄 때 사용하고, <code>console.log</code>는 개발자 도구(F12) 창에만 기록을 남기므로 작업 과정에서 코드가 잘 작동하는지 확인하는 용도로 주로 쓰입니다.</li>
  </ul>
</div>

---

## 3. 이벤트 종류 (2) - 키보드 이벤트

### 1) 키보드 이벤트 종류

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>keydown</code></div><div class="wda-fcard-dsc">키를 누를 때</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>keyup</code></div><div class="wda-fcard-dsc">키를 뗄 때</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>keypress</code></div><div class="wda-fcard-dsc"><strong>deprecated</strong> — 새 코드에서는 사용하지 않음</div></div>
</div>

`keypress`는 deprecated된 이벤트이므로 새 코드에서는 사용하지 않습니다. 일반적으로 `keydown` 또는 `keyup`을 사용합니다.

### 2) 이벤트 객체 속성 및 코드

```jsx
input.addEventListener('keydown', function(e) {
  console.log(e.key);     // 사용자가 입력한 문자(예: "a", "Enter")를 출력합니다.
  console.log(e.code);    // 누른 키의 물리적 위치(예: "KeyA", "Enter")를 출력합니다.

  // 조합키 확인 (Boolean 반환 - 눌렸으면 true, 아니면 false)
  console.log(e.altKey);   // Alt 키가 함께 눌렸는지 확인합니다.
  console.log(e.ctrlKey);  // Ctrl 키가 함께 눌렸는지 확인합니다.
  console.log(e.shiftKey); // Shift 키가 함께 눌렸는지 확인합니다.
  console.log(e.metaKey);  // Cmd(Mac) 또는 Win(Windows) 키가 눌렸는지 확인합니다.
});
```

### 3) ⌨️ key vs code 차이 비교표

| **입력 상황** | **e.key (입력된 문자)** | **e.code (물리적 위치)** | **비고** |
| --- | --- | --- | --- |
| **'A' 키를 Shift 없이 누름** | `"a"` | `"KeyA"` | 소문자 값과 해당 키의 위치를 반환합니다. |
| **'A' 키를 Shift와 함께 누름** | `"A"` | `"KeyA"` | 입력 문자는 대문자로 바뀌지만, <strong>물리적 키 위치는 동일</strong>합니다. |
| **숫자패드 1을 누름** | `"1"` | `"Numpad1"` | 입력 값은 1이지만, 위치가 <strong>숫자패드</strong>임을 명시합니다. |
| **일반(자판 상단) 1을 누름** | `"1"` | `"Digit1"` | 입력 값은 1이지만, 위치가 <strong>자판 상단 숫자키</strong>임을 나타냅니다. |

**언제 뭘 쓰나?**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>key</strong> — 실제로 어떤 문자가 입력되었는지가 중요할 때 사용합니다. (일반적인 텍스트 입력)</li>
    <li><strong>code</strong> — 키보드 상의 물리적 위치가 중요할 때 사용합니다. (게임의 WASD 조작 등)</li>
  </ul>
</div>

---

## ❓ 매개변수 e, 언제 쓰나요?

### 1) 이벤트 객체는 항상 전달됩니다

이벤트가 발생하면 브라우저는 이벤트 정보를 담은 객체를 만들고, 이벤트 핸들러의 **첫 번째 인자로 전달**합니다.  
필요하면 매개변수 `e`로 받아 사용할 수 있고, 필요 없으면 생략해도 됩니다.

### 2) 언제 받아야 하나요?

| **분류** | **상황 (언제?)** | **구체적 예시** |
| --- | --- | --- |
| **✔️ 받아야 할 때** | **구체적인 정보가 필요할 때** | 어떤 키를 눌렀는지(`e.key`)<br>마우스 좌표가 어디인지(`e.clientX`)<br>입력된 값이 무엇인지(`e.target.value`)<br>기본 동작을 막아야 할 때(`e.preventDefault()`) |
| **❌ 안 받아도 될 때** | **단순 실행만 하면 될 때** | 그냥 "클릭되었다"는 사실만 중요할 때<br>단순한 메뉴 열기/닫기<br>고정된 메시지 출력 |

### 3) 실습 코드

```jsx
// 1. 안 받는 경우 (e 필요 없음)
btn.addEventListener('click', function() {
  console.log('그냥 클릭만 알면 돼!'); // 이벤트 정보가 필요 없으므로 매개변수를 비워둡니다.
});

// 2. 받는 경우 (e 필요함)
btn.addEventListener('click', function(e) {
  console.log('좌표가 궁금해:', e.clientX, e.clientY); // 클릭된 상세 좌표를 꺼내 쓰기 위해 e를 받습니다.
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>매개변수 e의 정체</strong> — <code>e</code>는 <code>event</code>의 줄임말로 자주 쓰이며, 브라우저가 배달해주는 '사건 보고서'와 같습니다. 보고서가 필요하면 괄호 안에 이름을 적어 받고, 필요 없으면 무시해도 브라우저는 뒤에서 항상 보고서를 만들고 있습니다.</li>
    <li><strong><code>e.preventDefault()</code></strong> — 초보자가 가장 많이 쓰는 속성 중 하나로, 링크(<code>&lt;a&gt;</code>)를 클릭했을 때 페이지가 이동하거나 폼(<code>submit</code>)을 보냈을 때 새로고침되는 등의 브라우저 기본 행동을 강제로 멈추게 할 때 사용합니다.</li>
  </ul>
</div>

---

## 💻 실습 : 키보드 이벤트

### 1) Mission (미션)

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">타이핑 시</div>
      <div class="wda-sdsc">누른 키(<code>key</code>) 콘솔 출력</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">엔터 키(Enter) 입력 시</div>
      <div class="wda-sdsc">"전송!" 경고창</div>
    </div>
  </div>
</div>

### 2) 실습 코드

```jsx
<input type="text" id="chat-input" placeholder="메시지 입력">

const input = document.querySelector('#chat-input'); // 아이디가 chat-input인 입력창을 선택합니다.

// 키보드 이벤트 리스너 등록
input.addEventListener('keydown', function(e) { // 키를 눌렀을 때 실행됩니다.
  
  // 1. 타이핑 시 누른 키 콘솔 출력
  console.log(e.key); // 사용자가 누른 키 값을 콘솔 창에 보여줍니다.

  // 2. 엔터 키 입력 시 "전송!" 경고창
  if (e.key === 'Enter') { // 누른 키가 'Enter'인지 확인합니다.
    alert('전송!'); // 조건이 맞으면 화면에 알림창을 띄웁니다.
  }
  
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong><code>e.key</code> 활용</strong> — 미션 1번에서 요구한 '누른 키' 정보를 가져오기 위해 이벤트 객체(<code>e</code>)의 <code>key</code> 속성을 사용했습니다.</li>
    <li><strong>조건문 (<code>if</code>)</strong> — 특정 키(Enter)가 눌렸을 때만 동작을 수행해야 하므로 <code>if</code> 문을 사용하여 키 값을 비교하는 과정이 필요합니다.</li>
    <li><strong><code>keydown</code> vs <code>keyup</code></strong> — 엔터를 누르는 즉시 반응하게 하려면 <code>keydown</code>이 적합하고, 입력을 끝내고 손을 뗄 때 반응하게 하려면 <code>keyup</code>을 사용합니다. 본 실습에서는 보통 누르는 순간 반응하는 <code>keydown</code>을 주로 사용합니다.</li>
  </ul>
</div>

---

## 4. 이벤트 종류 (3) - 폼 이벤트

### 1) 폼 관련 이벤트

| **이벤트** | **설명** |
| --- | --- |
| `submit` | 폼 제출 |
| `reset` | 폼 초기화 |
| `input` | 값 변경 (실시간) |
| `change` | 값 변경이 확정되었을 때 (텍스트: 포커스 이탈 후 / checkbox·radio·select: 선택 변경 시) |
| `focus` | 포커스 받음 |
| `blur` | 포커스 잃음 |
| `select` | 텍스트 선택 |

### 2) input vs change

```jsx
const input = document.querySelector('input'); // 화면에서 입력창 요소를 찾아서 변수에 담습니다.

// input: 타이핑할 때마다 발생 (실시간)
input.addEventListener('input', function(e) {
  console.log('input:', e.target.value); // 글자를 하나하나 입력할 때마다 현재 값을 실시간으로 출력합니다.
});

// change: 포커스를 잃을 때 발생
input.addEventListener('change', function(e) {
  console.log('change:', e.target.value); // 입력을 마치고 다른 곳을 클릭해서 입력창을 벗어날 때만 출력합니다.
});
```

### 3) 사용 시나리오

| **이벤트** | **활용 시점** | **구체적 예시** |
| --- | --- | --- |
| **`input`** | **실시간 반응**이 필요할 때 | 사용자가 글자를 타이핑할 때마다 즉시 검색 결과를 보여주거나, 현재 몇 글자를 썼는지 숫자로 표시할 때 사용합니다. |
| **`change`** | **최종 결과값**만 중요할 때 | 입력을 모두 마치고 마우스로 다른 곳을 클릭하여 입력창을 벗어났을 때, 바뀐 내용이 최종적으로 무엇인지 확인할 때 사용합니다. |
| **`focus / blur`** | **유효성 검사**를 할 때 | 입력창에 커서가 들어올 때(`focus`) 안내 문구를 띄우거나, 커서가 나갈 때(`blur`) 아이디 중복 확인이나 비밀번호 양식이 맞는지 체크할 때 사용합니다. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong><code>e.target.value</code></strong> — 이벤트 객체(<code>e</code>)를 통해 현재 입력창에 적힌 글자가 무엇인지 정확히 알아낼 수 있는 아주 중요한 속성입니다.</li>
    <li><strong><code>focus</code>와 <code>blur</code></strong> — 마우스 클릭이나 Tab 키 이동으로 입력창에 커서가 들어가고 나가는 상태를 감지합니다. 보통 입력창 테두리 색을 바꾸거나 경고 문구를 띄울 때 많이 사용합니다.</li>
    <li><strong><code>submit</code></strong> — 보통 버튼을 눌러 데이터를 보낼 때 사용하며, 페이지 새로고침을 막기 위해 <code>e.preventDefault()</code>와 함께 자주 쓰입니다.</li>
  </ul>
</div>

---

## 💻 실습 : 폼 이벤트

### 1) Mission (미션)

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">글자를 칠 때마다(<code>input</code>) 실행</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">현재 입력된 글자 수(길이) 콘솔 출력</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl"><code>e.target.value.length</code> 활용</div>
    </div>
  </div>
</div>

### 2) 실습 코드

```jsx
<input type="text" id="msg-input" placeholder="내용 입력">

const msgInput = document.querySelector('#msg-input'); // 아이디가 msg-input인 입력창을 선택합니다.

// input 이벤트 리스너 등록
msgInput.addEventListener('input', function(e) { // 사용자가 글자를 입력할 때마다 실시간으로 실행됩니다.
  
  // 미션 2, 3번 수행: 현재 입력된 글자 수(길이) 출력
  console.log(e.target.value.length); // 현재 입력창에 적힌 글자 전체의 길이를 숫자로 알려줍니다.
  
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong><code>e.target.value</code></strong> — 이벤트가 발생한 대상(<code>input</code>)에 입력된 전체 텍스트 값을 가져옵니다.</li>
    <li><strong><code>.length</code></strong> — 자바스크립트에서 문자열 뒤에 붙여서 글자 수를 계산할 때 사용하는 속성입니다. 띄어쓰기를 포함한 전체 길이를 반환합니다.</li>
    <li><strong>실시간 글자 수 제한</strong> — 이 실습을 응용하면 "100자 이내로 입력해주세요"와 같은 글자 수 제한 기능을 만들 수 있습니다.</li>
  </ul>
</div>

---

## 5. 이벤트 종류 (4) - 문서/창 이벤트

### 1) 페이지 로드 관련

| **이벤트** | **대상** | **설명** |
| --- | --- | --- |
| `DOMContentLoaded` | `document` | HTML 파싱 완료 (DOM 트리 완성) |
| `load` | `window` | 모든 리소스(이미지, 스타일 등) 로드 완료 |
| `beforeunload` | `window` | 페이지를 떠나기 전 |
| `unload` | `window` | 페이지 언로드 (완전히 떠남) |

### 2) 뷰포트 관련

| **이벤트** | **설명** |
| --- | --- |
| **`resize`** | **브라우저 창 크기 변경** |
| **`scroll`** | **스크롤 발생** |

### 3) 주요 코드 비교 및 실행

```jsx
// [DOMContentLoaded] DOM 트리만 완성된 시점 (이미지 로드 전)
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM 준비 완료!'); // HTML 구조가 파악되면 즉시 실행되어 DOM 조작이 가능해집니다.
});

// [load] 이미지, CSS 등 모든 리소스가 로드된 후
window.addEventListener('load', function() {
  console.log('모든 리소스 로드 완료!'); // 모든 파일이 불러와진 상태라 이미지 크기 등에 접근할 때 씁니다.
});

// [beforeunload] 페이지 떠나기 전 확인
window.addEventListener('beforeunload', function(e) {
  e.preventDefault(); // 브라우저가 사용자에게 정말 떠날 것인지 묻는 대화상자를 띄웁니다.
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>DOMContentLoaded vs load</strong> — 대부분의 자바스크립트 동작은 <code>DOMContentLoaded</code>만 되어도 충분합니다. 이미지가 다 뜰 때까지 기다릴 필요가 없어 더 빨리 실행되기 때문입니다.</li>
    <li><strong>뷰포트 이벤트의 활용</strong> — <code>resize</code>는 창 크기에 따라 레이아웃을 재배치해야 하는 반응형 웹을 구현할 때 사용하고, <code>scroll</code>은 스크롤 위치에 따라 나타나는 애니메이션이나 '맨 위로 가기' 버튼 등을 만들 때 필수적입니다.</li>
  </ul>
</div>

**💼 실무 팁**

<div class="wda-callout wda-cs">
  <ul>
    <li>대부분의 작업은 <strong><code>DOMContentLoaded</code></strong> 시점에서 처리하는 것이 사용자 경험 측면에서 훨씬 유리합니다.</li>
  </ul>
</div>

---

## 💻 실습 : 문서/창 이벤트

### 1) Mission (미션)

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">scroll</div>
      <div class="wda-sdsc">현재 스크롤 위치(<code>window.scrollY</code>) 콘솔 출력</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">resize</div>
      <div class="wda-sdsc">현재 창 너비(<code>window.innerWidth</code>) 콘솔 출력</div>
    </div>
  </div>
</div>

### 2) 실습 코드

```jsx
// 1. 스크롤 이벤트 (scroll)
window.addEventListener('scroll', function() {
  // 사용자가 페이지를 위아래로 움직일 때마다 실행됩니다.
  console.log('현재 스크롤 위치:', window.scrollY); // 페이지 맨 위에서부터 얼마나 내려왔는지 픽셀(px) 단위로 출력합니다.
});

// 2. 창 크기 조절 이벤트 (resize)
window.addEventListener('resize', function() {
  // 브라우저 창의 크기를 마우스로 조절할 때마다 실행됩니다.
  console.log('현재 창 너비:', window.innerWidth); // 현재 브라우저 화면의 가로 길이를 출력합니다.
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong><code>window</code> 객체 사용</strong> — <code>scroll</code>이나 <code>resize</code>는 특정 버튼이 아니라 브라우저 창 전체에서 일어나는 사건이므로 <code>document</code>가 아닌 <code>window</code>에 리스너를 등록해야 정확히 작동합니다.</li>
  </ul>
</div>

| **속성명** | **설명** | **활용 사례** |
| --- | --- | --- |
| **`window.scrollY`** | **Y축(세로) 방향의 스크롤 양**을 의미합니다. 숫자가 클수록 페이지의 더 아래쪽을 보고 있다는 뜻입니다. | '맨 위로 가기' 버튼 표시<br>스크롤 위치에 따른 애니메이션 실행<br>무한 스크롤 구현 |
| **`window.innerWidth`** | **사용자에게 보이는 웹페이지의 실제 가로 영역 너비**입니다. 브라우저 창의 크기를 나타냅니다. | 반응형 웹(모바일/태블릿/PC) 대응<br>창 크기에 따른 레이아웃 변경<br>특정 너비 이하에서 메뉴 숨기기 |

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <ul>
    <li><code>scroll</code>과 <code>resize</code>는 아주 짧은 시간 동안 수백 번 발생할 수 있습니다. 실제 서비스에서는 성능을 위해 <code>throttle</code>이나 <code>debounce</code> 같은 기술을 섞어 쓰기도 합니다.</li>
  </ul>
</div>

---

## 🚫 기본 동작 방지 - `preventDefault()`

### 1) 기본 동작이란?

브라우저의 특정 요소들은 자바스크립트 조작 없이도 고유하게 수행하는 동작이 있습니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>&lt;a&gt;</code></div><div class="wda-fcard-dsc">클릭 시 지정된 링크로 이동</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>&lt;form&gt;</code></div><div class="wda-fcard-dsc">데이터 제출 시 페이지 새로고침</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>&lt;input type="checkbox"&gt;</code></div><div class="wda-fcard-dsc">클릭 시 체크 상태 토글</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">우클릭</div><div class="wda-fcard-dsc">브라우저 컨텍스트 메뉴 출력</div></div>
</div>

### 2) 주요 활용 코드

**① 링크 이동 방지**

```jsx
const link = document.querySelector('a'); // 링크 요소를 선택합니다.

link.addEventListener('click', function(e) {
  e.preventDefault(); // 링크 클릭 시 다른 페이지로 넘어가는 것을 막습니다.
  console.log('링크 클릭됨, 하지만 이동 안 함'); // 커스텀 동작만 수행합니다.
});
```

**② 폼 제출 방지 (가장 많이 사용)**

```jsx
const form = document.querySelector('form'); // 폼 요소를 선택합니다.

form.addEventListener('submit', function(e) {
  e.preventDefault(); // 제출 시 페이지가 새로고침되는 현상을 방지합니다.

  // 유효성 검사 예시
  const email = form.elements.email.value; // 입력된 이메일 값을 가져옵니다.
  if (!email.includes('@')) { // 이메일 형식이 맞는지 확인합니다.
    alert('올바른 이메일을 입력하세요'); // 경고창을 띄웁니다.
    return; // 함수를 종료합니다.
  }

  // AJAX로 제출 (페이지 이동 없이 데이터만 전송)
  fetch('/api/submit', { method: 'POST', body: new FormData(form) });
});
```

### 3) ⚠️ 주의사항

<div class="wda-callout wda-cw">
  <ul>
    <li><strong><code>e.cancelable</code> 이 <code>true</code>인 이벤트만</strong> 취소가 가능합니다.</li>
    <li>브라우저가 제공하는 강력한 기본 기능을 막는 것이므로, 반드시 필요한 상황에서만 사용해야 합니다.</li>
  </ul>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>왜 막나요?</strong> 폼 제출 시 새로고침이 일어나면 자바스크립트로 처리하던 데이터가 초기화되기 때문입니다. 현대 웹(SPA 등)에서는 새로고침 없이 데이터를 주고받기 위해 필수적으로 사용합니다.</li>
    <li><strong>커스텀 메뉴</strong> — '우클릭 방지'를 응용하면 브라우저 기본 메뉴 대신 내가 직접 만든 디자인의 메뉴(컨텍스트 메뉴)를 띄울 수 있습니다.</li>
    <li><strong>체크박스 응용</strong> — 특정 조건(예: 약관 동의 확인 등)이 충족되지 않았을 때 체크박스가 체크되지 않도록 막는 로직을 구현할 때도 쓰입니다.</li>
  </ul>
</div>

---

## 💻 실습 : 기본 동작 막기

### 1) Mission (미션)

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">링크 이동 막기</div>
      <div class="wda-sdsc"><code>&lt;a&gt;</code> 태그 클릭 시 페이지 이동을 멈추고 경고창 띄우기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">우클릭 막기</div>
      <div class="wda-sdsc">문서 전체에서 마우스 오른쪽 클릭(<code>contextmenu</code>) 차단하기</div>
    </div>
  </div>
</div>

### 2) 실습 코드

```jsx
<a href="https://www.naver.com" id="my-link">네이버로 이동</a>

// 1. 링크 이동 막기
const link = document.querySelector('#my-link');

link.addEventListener('click', function(e) {
  e.preventDefault();    // <a> 태그의 기본 기능인 '페이지 이동'을 강제로 막습니다.
  alert('이동이 차단되었습니다!'); // [주석] 이동 대신 경고창을 띄우는 커스텀 동작을 실행합니다.
});

// 2. 우클릭 막기
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();    // 마우스 오른쪽 클릭 시 나타나는 메뉴창을 막습니다.
  alert('우클릭을 사용할 수 없습니다.'); // [주석] 안내 메시지를 띄웁니다.
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong><code>contextmenu</code> 이벤트</strong> — 마우스 오른쪽 버튼을 눌렀을 때 발생하는 이벤트입니다. 주로 불펌 방지나 웹 애플리케이션 내 전용 메뉴를 구현할 때 사용합니다.</li>
    <li><strong><code>e.preventDefault()</code>의 역할</strong> — 브라우저가 정해둔 '기본 시나리오'를 파괴하고 개발자가 작성한 '새로운 시나리오'대로 동작하게 만드는 핵심 함수입니다.</li>
    <li><strong>범위 설정</strong> — 미션 2번처럼 문서 전체를 대상으로 할 때는 <code>document</code> 객체에 직접 이벤트 리스너를 연결해야 모든 영역에서 우클릭이 차단됩니다.</li>
  </ul>
</div>

---

## 6. 이벤트 핸들러 등록 방법

### 1) 이벤트 핸들러 등록 방식 비교

| **방식** | **설명** | **특징** |
| --- | --- | --- |
| **인라인 방식 (Inline)** | HTML 속성에 직접 자바스크립트를 작성 | HTML과 JS가 섞여 있어 유지보수가 어렵고 권장되지 않음 |
| **프로퍼티 방식 (Property)** | DOM 요소의 프로퍼티에 함수를 할당 | 하나의 이벤트에 <strong>단 하나의 핸들러</strong>만 등록 가능 |
| **addEventListener 방식** | 메서드를 사용하여 이벤트와 함수를 연결 | <strong>가장 권장되는 방식</strong>. 여러 개의 핸들러 등록 가능 |

### 2) 방법별 코드 및 상세 설명

**🔹 방법 1: HTML 속성 (비권장)**

HTML과 JS가 섞여 있어 유지보수가 어렵습니다.

```jsx
<button onclick="handleClick()">클릭</button>
<input onchange="validate(this)">
```

**🔹 방법 2: DOM 프로퍼티**

하나의 핸들러만 등록 가능합니다. 새로운 핸들러를 등록하면 이전 핸들러는 사라집니다.

```jsx
const btn = document.getElementById('btn');

// 하나의 핸들러만 등록 가능
btn.onclick = function() {
  console.log('클릭됨!');
};

// 덮어쓰면 이전 핸들러 사라짐!
btn.onclick = function() {
  console.log('새 핸들러로 교체됨'); // 위 코드는 무시되고 이 내용만 실행됩니다.
};
```

**🔹 방법 3: addEventListener (권장)**

가장 유연한 방식이며, 동일한 이벤트에 여러 기능을 동시에 등록할 수 있습니다.

```jsx
const btn = document.getElementById('btn');

// 여러 핸들러 등록 가능!
btn.addEventListener('click', function() {
  console.log('첫 번째 핸들러'); // 첫 번째로 등록된 기능이 실행됩니다.
});

btn.addEventListener('click', function() {
  console.log('두 번째 핸들러'); // 기존 기능에 더해 이 내용도 함께 실행됩니다.
});

// 결과: 둘 다 실행됨!
```

### 3) ✅ addEventListener 장점

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ico">🧩</div>
    <div class="wda-fcard-ttl">복수 등록</div>
    <div class="wda-fcard-dsc">같은 이벤트에 <strong>여러 핸들러</strong>를 등록할 수 있습니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ico">🗑️</div>
    <div class="wda-fcard-ttl">쉬운 제거</div>
    <div class="wda-fcard-dsc"><strong>removeEventListener</strong>를 사용해 등록된 이벤트를 쉽게 제거할 수 있습니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ico">⚙️</div>
    <div class="wda-fcard-ttl">옵션 지원</div>
    <div class="wda-fcard-dsc"><strong>옵션</strong>(capture, once, passive) 기능을 지원하여 세밀한 제어가 가능합니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ico">🧹</div>
    <div class="wda-fcard-ttl">관심사 분리</div>
    <div class="wda-fcard-dsc"><strong>HTML과 JS를 완벽히 분리</strong>하여 코드 가독성이 좋아집니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>아이디 선택</strong> — <code>getElementById('btn')</code>를 사용하면 특정 HTML 요소의 <code>id</code> 값을 직접 찾아오는 가장 빠른 방법입니다.</li>
    <li><strong>덮어쓰기 주의</strong> — <code>btn.onclick</code> 방식은 실수로 코드를 덧붙였을 때 기존 기능을 망가뜨릴 수 있으므로, 실무에서는 거의 항상 <code>addEventListener</code>를 사용합니다.</li>
    <li><strong>이벤트 제거</strong> — 이벤트를 제거하려면 <code>addEventListener</code>에 익명 함수 대신 이름을 가진 함수를 연결해야 나중에 <code>removeEventListener</code>로 정확히 지목하여 끌 수 있습니다.</li>
  </ul>
</div>

---

## 7. addEventListener 상세

### 1) 기본 문법

```jsx
element.addEventListener(type, handler, options);
```

- **type** : 이벤트 종류 (예: 'click')
- **handler** : 이벤트 발생 시 실행할 함수
- **options** : 추가 설정 (선택 사항)

### 2) 핸들러 등록 방식 비교

```jsx
const btn = document.getElementById('btn'); // 아이디가 btn인 요소를 선택합니다.

// ① 기본 사용 (익명 함수)
btn.addEventListener('click', function(e) {
  console.log('클릭!', e); // 이벤트 발생 시 로그와 이벤트 객체(e)를 출력합니다.
});

// ② 별도 함수 참조 (기명 함수)
function handleClick(e) {
  console.log('클릭!', e);
}
btn.addEventListener('click', handleClick); // 정의된 함수의 이름을 전달하여 연결합니다.
```

### 3) removeEventListener

**🔹 이벤트 제거 방법**

이벤트를 제거하려면 **등록할 때와 같은 함수 참조**가 반드시 필요합니다.

```jsx
function handleClick(e) {
  console.log('클릭!');
}

// 1. 등록
btn.addEventListener('click', handleClick); // 기명 함수인 handleClick을 등록합니다.

// ... (특정 시점에) ...

// 2. 제거
btn.removeEventListener('click', handleClick); //  등록했던 함수와 똑같은 함수를 전달해야 제거됩니다.
```

**🔹 ⚠️ 주의사항: 익명 함수 제거 불가**

```jsx
// 익명 함수는 제거할 수 없습니다!
btn.addEventListener('click', function(e) {
  console.log('클릭!');
});

btn.removeEventListener('click', function(e) { 
  // 위에서 등록한 익명 함수와 겉모습은 같지만 
  // 실제로는 다른 함수로 인식되어 제거되지 않습니다.
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>기명 함수 사용의 중요성</strong> — 나중에 이벤트를 제거해야 할 가능성이 있다면 반드시 이름이 있는 함수(기명 함수)를 만들어서 등록해야 합니다.</li>
    <li><strong>이벤트 객체(e)</strong> — 핸들러 함수의 첫 번째 인자로 전달되는 <code>e</code>는 클릭 좌표, 눌린 키 등 발생한 사건에 대한 모든 상세 보고서를 담고 있습니다.</li>
    <li><strong>메모리 관리</strong> — 더 이상 필요 없는 이벤트 리스너를 <code>removeEventListener</code>로 적절히 제거해 주면 브라우저의 메모리 낭비를 줄이고 성능을 높일 수 있습니다.</li>
  </ul>
</div>

---

## 8. 옵션 (1) - once &amp; capture

### 1) once: true

> "딱 한 번만 실행하고 싶을 때"

- **설명**: 이벤트가 한 번 실행되면 리스너가 스스로 삭제됩니다.
- **사용 사례**:
  - 회원가입 완료 팝업
  - 게임 시작 버튼
  - 초기 데이터 로딩 트리거

**코드 예시**

```jsx
btn.addEventListener('click', function() {
  console.log('초기화 완료! (이제 사라짐)'); // 클릭 시 한 번만 실행됩니다.
}, { once: true }); // 실행 후 리스너가 자동으로 제거됩니다.
```

### 2) capture: true

> "이벤트가 내려올 때 잡고 싶을 때"

- **설명**: 브라우저의 이벤트 전파 단계 중 '캡처링' 단계에서 이벤트를 발생시킵니다.
- **기본값**: `false` (기본적으로는 버블링 단계에서 실행됨)

**코드 예시**

```jsx
elem.addEventListener('click', handler, {
  capture: true // 버블링(올라가는 단계)이 아닌 캡처링(내려가는 단계)에서 이벤트를 가로챕니다.
});
```

### 3) 🔍 핵심 개념: 캡처링이란?

이벤트는 발생 시 특정 방향으로 흐릅니다.

<div class="wda-callout wda-cy">
  <ul>
    <li><strong>캡처링(Capturing)</strong> — 이벤트가 <code>window</code>에서부터 실제 타겟 요소(클릭한 지점)로 <strong>내려가는</strong> 단계입니다.</li>
    <li><strong>버블링(Bubbling)</strong> — 이벤트가 타겟 요소에서 다시 <code>window</code> 방향으로 <strong>올라가는</strong> 단계입니다.</li>
  </ul>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong><code>once</code> 옵션의 편리함</strong> — 과거에는 한 번만 실행하기 위해 함수 내부에서 <code>removeEventListener</code>를 직접 호출해야 했지만, 이 옵션을 사용하면 코드가 훨씬 간결해집니다.</li>
    <li><strong>캡처링을 쓰는 이유</strong> — 보통은 버블링 단계에서 이벤트를 처리하는 것이 일반적이지만, 자식 요소의 이벤트를 부모가 미리 가로채서 제어해야 하는 특수한 경우에 <code>capture: true</code>를 사용합니다.</li>
    <li><strong>성능 팁</strong> — 불필요한 이벤트 전파를 막고 싶다면 <code>e.stopPropagation()</code>과 함께 이러한 옵션들을 적절히 조합하여 설계하는 것이 중요합니다.</li>
  </ul>
</div>

---

## 9. 옵션 (2) - passive (성능 최적화)

### 1) "나 막지 않을게(Active)!"

- **핵심 개념** — 이 핸들러 안에서 `preventDefault()`를 **절대 호출하지 않겠다**고 브라우저에 미리 약속(Promise)하는 옵션입니다.
- **효과** — 브라우저는 자바스크립트 실행을 기다리지 않고 즉시 스크롤을 계산하므로 화면 버벅임 없이 부드러운 동작이 가능합니다.

### 2) 언제 써야 하나요?

> 스크롤 및 터치 이벤트에 필수!

- **wheel** (마우스 휠)
- **touchstart**, **touchmove** (모바일 터치)
- **scroll** (스크롤 바)

### 3) 실습 코드

```jsx
document.addEventListener('touchstart', handler, {
  passive: true // 브라우저가 스크롤 계산을 멈추지 않고 계속하도록 설정합니다.
});
```

### 4) ⚠️ 만약 약속을 어기면?

<div class="wda-callout wda-cw">
  <ul>
    <li>핸들러 내부에서 <code>e.preventDefault()</code>를 호출하더라도 브라우저는 이를 <strong>무시</strong>합니다.</li>
    <li>콘솔(Console) 창에 아래와 같은 강력한 경고 문구를 띄웁니다.</li>
  </ul>
</div>

> [Intervention] Unable to preventDefault inside passive event listener...

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>성능의 비밀</strong> — 원래 브라우저는 <code>preventDefault()</code>가 호출되어 스크롤이 막힐지 아닐지 끝까지 지켜본 뒤에 화면을 움직입니다. <code>passive: true</code>는 이 기다림을 없애주는 스위치입니다.</li>
    <li><strong>최신 브라우저</strong> — 구글 크롬 등 최신 브라우저는 스크롤 성능을 위해 위 이벤트들에 대해 기본값을 <code>passive: true</code>로 자동 설정해 두기도 합니다.</li>
    <li><strong>반대 상황</strong> — 만약 스크롤을 의도적으로 막아야 하는 상황이라면, 이 옵션을 절대로 쓰면 안 됩니다.</li>
  </ul>
</div>

---

## 💻 실습 : 이벤트 리스너

### 1) Mission (미션)

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">아이디 <code>btn</code></div>
      <div class="wda-sdsc">클릭 시 콘솔에 "Clicked!" 출력</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">제거 미션</div>
      <div class="wda-sdsc">5초 뒤 해당 이벤트 핸들러 제거</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">아이디 <code>once-btn</code></div>
      <div class="wda-sdsc">클릭 후 자동으로 해제되도록 설정 (<code>once</code> 옵션 활용)</div>
    </div>
  </div>
</div>

### 2) 실습 코드

```jsx
<button id="btn">5초만 작동하는 버튼</button>        <!-- 5초 뒤 이벤트가 사라질 버튼 -->
<button id="once-btn">딱 한 번만 작동하는 버튼</button> <!-- 한 번만 반응하는 버튼  -->

<script>    
const btn = document.querySelector('#btn');           // id가 btn인 버튼 요소를 선택한다
const onceBtn = document.querySelector('#once-btn'); // id가 once-btn인 버튼 요소를 선택한다
function handleClick() {                              // 나중에 제거하기 위해 이름 있는 함수로 만든다
  console.log('Clicked!');                            // 버튼을 클릭하면 콘솔에 메시지를 출력한다
}   
btn.addEventListener('click', handleClick);           // btn 버튼에 클릭 이벤트를 등록한다
setTimeout(function() {                               // 5초(5000ms) 후에 실행된다  
  btn.removeEventListener('click', handleClick);      // btn에 등록된 클릭 이벤트를 제거한다
  console.log('버튼 이벤트 제거됨');                   // 이벤트가 사라졌음을 콘솔로 알린다
}, 5000);   
onceBtn.addEventListener(   
  'click',  
  function() {                                        // once-btn을 클릭했을 때 실행된다
    console.log('한 번만 실행됩니다!');                // 한 번만 메시지를 출력한다 
  },    
  { once: true }                                      // 클릭 1회 후 이벤트 리스너가 자동으로 제거된다
);
</script>
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong><code>setTimeout</code> 활용</strong> — <code>setTimeout</code>은 특정 시간이 지난 뒤 코드를 실행합니다. 이를 <code>removeEventListener</code>와 조합하면 기간 한정 이벤트를 만들 수 있습니다.</li>
    <li><strong><code>once</code> 옵션의 마법</strong> — 별도로 삭제 코드를 적지 않아도 브라우저가 알아서 뒷정리를 해줍니다. 일회성 쿠폰 발급이나 중복 클릭 방지가 필요한 버튼에 매우 유용합니다.</li>
    <li><strong>참조의 중요성</strong> — 5초 뒤 이벤트를 정확히 제거하려면 익명 함수가 아닌 <code>handleClick</code>처럼 이름이 있는 함수를 사용해야 브라우저가 어떤 기능을 지울지 찾아낼 수 있습니다.</li>
  </ul>
</div>

---

## 10. 자주 하는 2가지 실수 (Common Pitfalls)

### 1) 함수를 즉시 실행해버림

이벤트 리스너의 핸들러 자리에 함수 이름 뒤에 괄호 `()`를 붙여서 전달하는 경우입니다. 사용자가 클릭하기도 전에 **페이지가 로드되는 시점에 함수가 즉시 실행**되어 버립니다.

| **구분** | **코드 예시** | **결과** |
| --- | --- | --- |
| ❌ **잘못된 코드** | `btn.addEventListener('click', handleClick());` | 클릭 전 즉시 실행됨 |
| ✅ **올바른 코드** | `btn.addEventListener('click', handleClick);` | 클릭 시에만 실행됨 |

### 2) 요소를 못 찾음 (null 에러)

HTML 요소가 브라우저에 의해 다 그려지기(해석되기) 전에 자바스크립트가 실행되어 요소를 찾지 못하는 경우입니다.  
`Cannot read property ... of null` 에러가 발생하며 이벤트 리스너가 등록되지 않습니다.

**✅ 해결 방법**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>&lt;script&gt;</code> 태그 위치 변경</div>
    <div class="wda-fcard-dsc">HTML 파일의 <code>&lt;body&gt;</code> 태그 맨 끝에 작성합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl"><code>defer</code> 속성 사용 (권장)</div>
    <div class="wda-fcard-dsc">스크립트 태그에 <code>defer</code>를 추가하여 HTML 해석이 끝난 뒤 실행되도록 설정합니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>함수 참조 vs 실행</strong> — <code>addEventListener</code>의 두 번째 인자에는 함수 그 자체가 아니라, 나중에 실행할 함수의 이름(참조)만 넘겨주어야 한다는 점을 명심하세요.</li>
    <li><strong>순서가 중요한 이유</strong> — 브라우저는 코드를 위에서 아래로 읽습니다. 자바스크립트가 HTML 버튼보다 먼저 나오면, 브라우저는 아직 존재하지 않는 버튼에 이벤트를 걸려고 시도하기 때문에 <code>null</code> 에러가 납니다.</li>
    <li><strong><code>defer</code> 속성의 장점</strong> — 스크립트 로딩과 HTML 파싱을 동시에 진행하여 페이지 로딩 속도를 높이면서도, 실행 시점은 HTML이 다 준비된 후로 미뤄주기 때문에 가장 효율적인 해결책입니다.</li>
  </ul>
</div>

---

## 11. 이벤트 객체 (Event Object)

### 1) 이벤트 객체란?

이벤트가 발생하면 브라우저는 해당 이벤트에 대한 상세 정보를 담은 **객체**를 생성합니다.  
이벤트 핸들러의 첫 번째 매개변수로 이 객체가 전달됩니다. (관례적으로 `e` 또는 `event` 명명)

```jsx
// 이벤트 객체(event)가 자동으로 전달됨
btn.addEventListener('click', function(event) {
  console.log(event); // 발생한 이벤트 객체 전체를 출력합니다.
});

// 또는 e로 줄여서 사용
btn.addEventListener('click', function(e) {
  console.log(e.type);   // 발생한 이벤트 종류(예: "click")를 출력합니다.
  console.log(e.target); // 실제 이벤트가 발생한 요소를 출력합니다.
});
```

### 2) 공통 프로퍼티 (Property)

| **프로퍼티** | **설명** |
| --- | --- |
| **`type`** | 이벤트 종류 (예: `"click"`, `"keydown"`) |
| **`target`** | 이벤트가 발생한 요소 |
| **`currentTarget`** | 이벤트 핸들러가 등록된 요소 |
| **`timeStamp`** | 이벤트가 발생한 시간 |
| **`bubbles`** | 버블링 여부 |
| **`cancelable`** | `preventDefault()`로 취소 가능 여부 |

### 3) 공통 메서드 (Method)

| **메서드** | **설명** |
| --- | --- |
| **`preventDefault()`** | 브라우저의 **기본 동작을 방지**합니다. |
| **`stopPropagation()`** | 이벤트의 **전파(버블링/캡처링)를 중단**시킵니다. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>상세 정보 저장소</strong> — 이벤트 객체는 단순한 '발생 사실'을 넘어, 마우스의 클릭 좌표나 어떤 키가 눌렸는지 등 해당 사건의 모든 데이터가 담긴 보고서와 같습니다.</li>
    <li><strong><code>target</code>과 <code>currentTarget</code></strong> — 이벤트가 자식 요소에서 발생해 부모로 올라온 경우, <code>target</code>은 실제 클릭된 자식을, <code>currentTarget</code>은 이벤트가 걸려 있는 부모 요소를 가리킵니다.</li>
    <li><strong>매개변수 이름</strong> — <code>function(e)</code>의 <code>e</code>는 변수명일 뿐이므로 자유롭게 바꿀 수 있지만, 개발자 간의 약속인 <code>e</code>나 <code>event</code>를 쓰는 것이 유지보수에 유리합니다.</li>
  </ul>
</div>

---

## 12. 마우스 이벤트 객체: 좌표 프로퍼티 완벽 정리

### 1) 좌표 관련 프로퍼티 비교

마우스 이벤트가 발생했을 때, 클릭한 지점의 위치를 알 수 있는 다양한 좌표값들입니다.

| **프로퍼티** | **설명** | **기준점** |
| --- | --- | --- |
| **`clientX`, `clientY`** | **뷰포트(Viewport)** 기준 | 브라우저 화면 좌상단 |
| **`pageX`, `pageY`** | **문서 전체(Document)** 기준 | 전체 문서(스크롤 포함) 좌상단 |
| **`offsetX`, `offsetY`** | **이벤트 대상(Target)** 기준 | 이벤트가 발생한 요소의 좌상단 |
| **`screenX`, `screenY`** | **모니터(Screen)** 기준 | 모니터 화면 전체의 좌상단 |

> 💡 Tip: 페이지에 스크롤이 없다면 client 값과 page 값은 동일합니다.

### 2) 좌표 차이 시각화 이해

이벤트 발생 시 각 기준점이 어떻게 다른지 이해하는 것이 중요합니다.

- **Monitor (`screenX/Y`)**: 전체 모니터 화면 기준
- **Viewport (`clientX/Y`)**: 현재 눈에 보이는 브라우저 창 내부 기준
- **Target (`offsetX/Y`)**: 클릭된 특정 HTML 박스 내부 기준

<img src="/images/content/javascript/3-3/javascript-3-3-coordinate-system-diagram.png" alt="좌표 시스템 UI 다이어그램" style="display:block;width:100%;max-width:400px;height:auto;border-radius:8px;margin:.6rem auto 1rem;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:400px;">[그림] 마우스 이벤트 좌표 기준점 비교 (Monitor/Viewport/Target)</div>

### 3) 🧮 pageY 계산 공식 (스크롤 발생 시)

문서 전체에서의 위치를 구하고 싶을 때 브라우저가 내부적으로 계산하는 방식입니다.

> clientX/Y + scrollY(스크롤된 양) = pageX/Y

현재 화면상의 위치(`clientY`)에 스크롤로 인해 위로 올라가 가려진 부분(`scrollY`)을 더하면 문서 전체 기준의 위치(`pageY`)가 됩니다.

### 4) 실습 코드 활용 예시

```jsx
const target = document.querySelector('.box');

target.addEventListener('click', function(e) {
  // 브라우저 화면 기준 (자주 사용)
  console.log('브라우저 창 기준:', e.clientX, e.clientY); // 현재 보이는 창 안에서의 위치입니다.

  // 실제 문서 전체 기준 (스크롤 포함)
  console.log('전체 문서 기준:', e.pageX, e.pageY); // 스크롤을 내려도 문서 맨 위 기준 위치를 알려줍니다.

  // 클릭한 박스 안에서의 좌표
  console.log('해당 박스 내 기준:', e.offsetX, e.offsetY); // 박스의 왼쪽 위 모서리가 0, 0이 됩니다.
});
```

---

## 13. target vs currentTarget 차이점 정리

### 1) 핵심 개념 정의

이벤트가 발생했을 때, 두 속성은 서로 다른 요소를 가리킬 수 있습니다.

| **속성** | **핵심 정리** |
| --- | --- |
| **`target`** | **실제 이벤트를 유발한 요소** (실제로 클릭된 요소) |
| **`currentTarget`** | **이벤트 리스너가 달린 요소** (핸들러가 등록된 요소) |

**⭐ 중요**

<div class="wda-callout wda-cy">
  <ul>
    <li>버블링 현상으로 인해 이 두 요소는 서로 다를 수 있습니다.</li>
  </ul>
</div>

### 2) 실습 코드

부모 요소인 `div`에 리스너를 달고 내부의 `button`을 클릭했을 때의 동작을 확인하는 코드입니다.

```jsx
<div id="parent">
  <button id="child">클릭</button>
</div>

const parent = document.getElementById('parent');

parent.addEventListener('click', function(e) {
  // target: 실제로 클릭된 요소
  console.log('target:', e.target.id); 

  // currentTarget: 핸들러가 등록된 요소
  console.log('currentTarget:', e.currentTarget.id);
});

// 버튼 클릭 시 결과:
// target: child (실제 클릭된 것)
// currentTarget: parent (핸들러가 등록된 것)
```

### 3) 시각화 및 동작 이해

사용자가 `button`(child)을 클릭하면 이벤트가 발생합니다.  
이 이벤트는 부모인 `div`(parent)로 전달(버블링)됩니다.  
이때 부모에 걸린 함수가 실행되면서, `target`은 최초 원인인 **버튼**을 가리키고, `currentTarget`은 현재 함수를 실행 중인 **div**를 가리키게 됩니다.

**추가 학습 팁**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>일치하는 경우</strong> — 만약 자식이 없는 요소를 클릭하거나, 리스너가 달린 요소를 직접 클릭했다면 <code>target</code>과 <code>currentTarget</code>은 동일한 요소를 가리킵니다.</li>
    <li><strong>this 키워드</strong> — 일반 함수 핸들러 내에서 <code>this</code>는 항상 <code>e.currentTarget</code>과 같습니다.</li>
  </ul>
</div>

<img src="/images/content/javascript/3-3/javascript-3-3-ui-event-model-diagram.png" alt="target과 currentTarget UI 이벤트 모델 다이어그램" style="display:block;width:100%;max-width:320px;height:auto;border-radius:8px;margin:.6rem auto 1rem;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:320px;">[그림] target과 currentTarget 비교 (버튼 클릭 시 target=button, currentTarget=parent)</div>

---

## 💻 실습 : 타겟 구분하기 (`target` vs `currentTarget`)

### 1) Mission

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl"><code>outer</code> 요소에 클릭 핸들러 등록하기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">내부 버튼 클릭 시 <code>target</code>과 <code>currentTarget</code> 값 비교하기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">배경(<code>outer</code>)을 직접 클릭했을 때의 차이점 확인하기</div>
    </div>
  </div>
</div>

### 2) 실습 코드

```jsx
<div id="outer" class="p-4 bg-gray-200">   <!-- 클릭 이벤트를 걸 부모 요소 -->
    <button id="inner">버튼</button>         <!-- outer 안에 있는 자식 버튼 -->
</div>
<script>
const outer = document.getElementById('outer');       // id가 outer인 요소를 가져온다
outer.addEventListener('click', function(e) {         // outer에 클릭 이벤트를 등록한다
    console.log('target:', e.target.tagName);            // 실제로 클릭된 요소의 태그 이름을 출력한다
    console.log('currentTarget:', e.currentTarget.tagName); // 이벤트가 등록된 요소의 태그 이름을 출력한다
    if (e.target === e.currentTarget) {                  // 클릭한 대상과 이벤트 등록 대상이 같다면
      console.log('부모 직접 클릭');                     // outer 배경을 직접 클릭한 경우다
    } else {                                             // 둘이 다르다면
      console.log('자식 요소 클릭 (버블링)');             // 자식(inner)을 클릭했고 이벤트가 부모로 올라온 상태다
    }
});
</script>

```

### 3) 실습 결과 요약

| **클릭 위치** | **e.target 결과** | **e.currentTarget 결과** | **이유** |
| --- | --- | --- | --- |
| **내부 버튼 클릭 시** | `inner` | `outer` | 버튼에서 발생한 이벤트가 부모(`outer`)로 **버블링**되었기 때문입니다. |
| **배경(outer) 클릭 시** | `outer` | `outer` | 발생지와 핸들러 위치가 동일하므로 두 값이 같습니다. |

**📝 핵심 정리**

<div class="wda-callout wda-cs">
  <ul>
    <li><strong><code>target</code></strong> — "누가 범인인가?" (실제 사건 발생지)</li>
    <li><strong><code>currentTarget</code></strong> — "누가 이 일을 처리하고 있는가?" (핸들러 소유자)</li>
    <li>이 차이를 이해하면 부모 요소 하나로 여러 자식의 이벤트를 관리하는 <strong>이벤트 위임</strong> 기술을 쓸 수 있습니다.</li>
  </ul>
</div>

---

## 14. 이벤트 전파 (Event Propagation)

이벤트가 발생했을 때 브라우저가 이벤트를 타겟 요소까지 전달하고, 다시 상위로 올리는 전체 과정을 의미합니다.

### 1) 이벤트 전파의 3단계

이벤트는 항상 다음의 세 단계를 거쳐 흐릅니다.

<div class="image-text-row">
  <div>
    <ul>
      <li><strong>캡처링 (Capturing)</strong> — 이벤트가 <code>window</code>에서 시작해 <code>document</code>, <code>html</code>, <code>body</code>를 거쳐 실제 타겟 요소까지 <strong>내려가는</strong> 단계입니다.</li>
      <li><strong>타겟 (Target)</strong> — 이벤트가 실제 발생한 요소에 도착한 상태입니다.</li>
      <li><strong>버블링 (Bubbling)</strong> — 이벤트가 다시 타겟 요소에서 부모 요소를 거쳐 <code>window</code> 방향으로 <strong>올라가는</strong> 단계입니다.</li>
    </ul>
  </div>
  <img src="/images/content/javascript/3-3/javascript-3-3-event-propagation-flow.png" alt="이벤트 전파 흐름도" style="display:block;width:100%;max-width:160px;height:auto;border-radius:8px;margin:0 auto;object-fit:contain;">
</div>
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;">[그림] 이벤트 전파 3단계 (캡처링 → 타겟 → 버블링)</div>

### 2) 전파 시각화 및 흐름

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">캡처링 (Capturing)</div>
    <strong>방향</strong> : <strong>내려감 (Top → Down)</strong><br>
    <strong>시작점</strong> : <code>window</code> (최상위 객체)<br>
    <strong>종착점</strong> : 이벤트가 발생한 <strong>타겟(Target)</strong><br>
    <strong>상세 경로</strong> : <code>window</code> → <code>document</code> → <code>html</code> → <code>body</code> → ... → 부모 → <strong>타겟</strong><br>
    <strong>기본 동작</strong> : 기본적으로는 실행되지 않음 (<code>capture: true</code> 시 실행)<br>
    <strong>비유</strong> : 폭포수처럼 위에서 아래로 떨어짐
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">버블링 (Bubbling)</div>
    <strong>방향</strong> : <strong>올라감 (Down → Top)</strong><br>
    <strong>시작점</strong> : 이벤트가 발생한 <strong>타겟(Target)</strong><br>
    <strong>종착점</strong> : <code>window</code> (최상위 객체)<br>
    <strong>상세 경로</strong> : <strong>타겟</strong> → 부모 → ... → <code>body</code> → <code>html</code> → <code>document</code> → <code>window</code><br>
    <strong>기본 동작</strong> : <strong>기본 동작 방식</strong> (대부분의 이벤트 리스너 실행 시점)<br>
    <strong>비유</strong> : 물속의 거품처럼 아래에서 위로 올라감
  </div>
</div>

**기본 동작**

<div class="wda-callout wda-cy">
  <ul>
    <li><code>addEventListener</code>의 기본값은 버블링 단계에서 실행되도록 설정되어 있습니다. 즉, 특별한 옵션을 주지 않으면 이벤트는 아래에서 위로 올라오며 실행됩니다.</li>
  </ul>
</div>

<img src="/images/content/javascript/3-3/javascript-3-3-web-event-propagation-diagram.png" alt="웹 이벤트 전파 다이어그램" style="display:block;width:100%;max-width:360px;height:auto;border-radius:8px;margin:.6rem auto 1rem;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:360px;">[그림] window~button DOM 트리에서의 캡처링(하강)·버블링(상승) 경로</div>

### 3) 주요 개념 정리

- **`window`란?** 브라우저 창 전체를 담당하는 최상위 객체(전역 객체)입니다. `DOM(document)`보다 더 상위에 존재합니다.
- **이벤트 전파 방지 (`e.stopPropagation()`)** — 버블링이나 캡처링이 더 이상 진행되지 않도록 막고 싶을 때 사용하는 중요한 메서드입니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>앞선 실습에서 <code>target</code>과 <code>currentTarget</code>이 달랐던 이유는 바로 이 <strong>버블링</strong> 때문입니다. 자식에서 발생한 이벤트가 부모(Handler)로 전파되어 올라가는 과정에서 부모에 등록된 리스너가 실행되는 원리입니다.</li>
  </ul>
</div>

---

## 15. 이벤트 버블링 (Event Bubbling)

이벤트가 발생한 요소에서 시작하여 부모 요소를 거쳐 최상위(`window`)까지 **이벤트가 거꾸로 올라가는 현상**을 의미합니다.

### 1) 버블링 예제

계층 구조와 실행 순서를 정리합니다.

```jsx
<div id="grandparent">
  <div id="parent">
    <button id="child">클릭</button>
  </div>
</div>

['grandparent', 'parent', 'child'].forEach(function(id) {
  document.getElementById(id).addEventListener('click', function() {
    console.log(id + ' 클릭!'); //
  });
});

// 버튼 클릭 시 출력 순서 (아래에서 위로 전파)
// 1. "child 클릭!"
// 2. "parent 클릭!"
// 3. "grandparent 클릭!"
```

### 2) 전파 중단: `stopPropagation()`

이벤트가 부모 요소로 더 이상 퍼지지 않게 막고 싶을 때 사용합니다.

```jsx
document.getElementById('child')
  .addEventListener('click', function(e) {
    console.log('child 클릭!');
    e.stopPropagation();
    // 현재 이벤트가 더 이상 다른 요소로 전파되지 않게 막습니다.
    // 버블링 단계에서는 부모로 올라가는 흐름을 막고,
    // 캡처링 단계에서는 이후 전파 흐름을 막습니다.
  });

// 결과: "child 클릭!" 만 출력되고 상위 요소로 전파되지 않음
```

### 3) ⚠️ 주의사항 및 팁

<div class="wda-callout wda-cw">
  <ul>
    <li><strong><code>stopPropagation()</code> 주의</strong> — 꼭 필요할 때만 사용하세요.</li>
    <li>분석 도구나 이벤트 위임(Delegation) 방식을 방해할 수 있습니다.</li>
    <li>대부분의 경우 불필요하게 사용되지 않도록 주의해야 합니다.</li>
  </ul>
</div>

**버블링이 없는 이벤트**

모든 이벤트가 위로 올라가는 것은 아닙니다.

- `focus`, `blur`
- `mouseenter`, `mouseleave` 등

**핵심 요약**

<div class="wda-callout wda-cs">
  <ul>
    <li><strong>기본 동작</strong> — <code>addEventListener</code>의 기본값은 항상 <strong>버블링 단계</strong>에서 실행됩니다.</li>
    <li><strong>흐름</strong> — 타겟(Target) → 부모 → ... → <code>document</code> → <code>window</code> 순으로 전파됩니다.</li>
  </ul>
</div>

---

## 💻 실습 : 버블링 제어(`stopPropagation`)

### 1) Mission

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">Box 1, 2, 3 모두 클릭 이벤트 등록하기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">가장 안쪽 Box 3 클릭 시</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">Box 2까지만 전파되고 멈추게 만들기</div>
      <div class="wda-sdsc">Box 1은 실행되지 않아야 함</div>
    </div>
  </div>
</div>

### 2) 실습 코드

```jsx
<div class="box1">
    <div class="box2">
        <div class="box3">Click Me</div>
    </div>
</div>
<script>
const boxes = document.querySelectorAll('div[class^="box"]'); 
// class 이름이 box로 시작하는 모든 div(box1, box2, box3)를 가져온다
boxes.forEach(box => {                                
  // 가져온 각 box 요소에 대해 반복 실행한다
    box.addEventListener('click', function(e) {          
    // 각 박스에 클릭 이벤트를 등록한다 
    console.log(this.className + ' 클릭!');            
    // 현재 클릭 이벤트가 실행된 요소의 클래스 이름을 콘솔에 출력한다   
    if (this.className === 'box2') {                    
      // 현재 실행 중인 요소가 box2라면
      e.stopPropagation();                              
      // 이벤트 전파(버블링)를 여기서 멈춘다 → box1은 실행되지 않는다
    }
  });
});
</script>
```

### 3) 결과 및 핵심 정리

Box 3을 클릭하면 이벤트가 **Box 3 → Box 2 → Box 1** 순서로 올라가려 합니다.  
`box2` 핸들러에서 `e.stopPropagation()`이 호출되면서 전파가 중단되어, 콘솔에는 **"box3 클릭!"**, **"box2 클릭!"**까지만 출력됩니다.

> **⚠️ stopPropagation 주의사항**
>
> - 꼭 필요할 때만 사용해야 합니다.
> - 분석 도구나 상위 요소의 이벤트 위임(Delegation)을 방해할 수 있습니다.
> - 대부분의 일반적인 상황에서는 사용하지 않는 것이 권장됩니다.

---

## 16. 이벤트 위임 (Event Delegation)

### 1) 이벤트 위임이란?

**🔹 HTML 구조**

```jsx
<ul id="menu">
  <li data-action="save">저장</li>
  <li data-action="load">불러오기</li>
  <li data-action="delete">삭제</li>
</ul>
```

**🔹 개별 등록 방식 (비효율적)**

```jsx
// 1. 개별 등록 방식 (비효율적)

// #menu 아이디를 가진 요소 안의 모든 li 태그를 찾아서 가져옵니다.
const items = document.querySelectorAll('#menu li');

// 찾아낸 모든 li 요소들을 하나씩 순회(반복)합니다.
items.forEach(function(item) {
  // 각 li 요소마다 하나씩 직접 클릭 이벤트를 등록합니다.
  // 문제점 1: 아이템이 100개라면 리스너도 100개가 생성되어 메모리를 많이 차지합니다.
  // 문제점 2: 코드가 실행된 이후에 새로 추가되는 li에는 클릭 이벤트가 적용되지 않습니다.
  item.addEventListener('click', handleClick);
});
```

**🔹 이벤트 위임 방식 (권장)**

```jsx
// 2. 이벤트 위임 방식 (권장)

// 자식 요소마다 리스너를 달지 않고, 부모(#menu)에 단 하나의 리스너만 등록합니다.
// 이렇게 하면 메모리를 절약하고, 나중에 추가되는 자식 요소에도 자동으로 적용됩니다.
document.getElementById('menu')
  .addEventListener('click', function(e) {

    // [중요] 필터링 로직 (Guard Clause)
    // 이벤트 버블링으로 인해 부모의 여백(padding) 등을 클릭해도 이 함수가 실행됩니다.
    // 따라서 실제 클릭된 요소(e.target)가 우리가 원하는 'LI' 태그인지 확인해야 합니다.
    // (HTML 태그명은 항상 대문자 'LI'로 반환됩니다.)
    if (e.target.tagName !== 'LI') return;

    // 조건을 통과했다면 실제 클릭된 li의 data-action 속성 값을 가져옵니다.
    // (예: <li data-action="save"> -> "save")
    const action = e.target.dataset.action;
    console.log('실행:', action);
  });
```

이벤트 위임에서는 `e.target`과 `e.currentTarget`을 구분해야 합니다.

- **`e.target`** : 실제로 이벤트가 발생한 가장 안쪽 요소입니다.
- **`e.currentTarget`** : 이벤트 리스너가 등록된 요소입니다.

부모 요소에 이벤트를 걸어두고 자식 요소를 구분하려면 `e.target`을 사용합니다.

### 2) 이벤트 위임의 장점

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ico">⚡</div>
    <div class="wda-fcard-ttl">성능</div>
    <div class="wda-fcard-dsc">핸들러 개수 감소 → 메모리 절약</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ico">🔄</div>
    <div class="wda-fcard-ttl">동적 요소</div>
    <div class="wda-fcard-dsc">나중에 추가되는 요소에도 자동 적용</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ico">🧹</div>
    <div class="wda-fcard-ttl">코드 간결</div>
    <div class="wda-fcard-dsc">하나의 핸들러로 여러 요소 처리</div>
  </div>
</div>

### 3) 동적 요소 추가 예시

위임 방식을 사용하면 나중에 추가된 요소에도 이벤트가 자동으로 적용됩니다.

```jsx
// 동적으로 추가된 li도 자동으로 동작!
const newLi = document.createElement('li');
newLi.dataset.action = 'print';
newLi.textContent = '인쇄';
menu.appendChild(newLi);
// 별도의 이벤트 등록 불필요!
```

---

## 💻 실습 : 이벤트 위임 기초

### 1) Mission

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl"><code>ul</code> 요소에만 이벤트 리스너 등록하기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">클릭된 <code>li</code>의 숫자(텍스트) 콘솔에 출력하기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl"><code>li</code>가 아닌 영역(padding 등) 클릭 시 무시하기</div>
    </div>
  </div>
</div>

### 2) 실습 코드

```jsx
<ul id="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>

<script>
const list = document.getElementById('list');

// 1. Mission: 개별 li가 아닌 부모 ul에만 리스너 등록
list.addEventListener('click', function(e) {
  
  // 3. Mission: li가 아닌 영역 클릭 시 무시 (필터링)
  // [중요] tagName은 항상 대문자('LI')로 반환됩니다.
  if (e.target.tagName !== 'LI') {
    return; 
  }

  // 2. Mission: 실제 클릭된 요소(target)의 텍스트 출력
  console.log(e.target.textContent); 
});
</script>
```

### 3) 핵심 정리 및 동작 원리

<div class="wda-callout wda-cs">
  <ul>
    <li><strong>효율성</strong> — 자식 요소가 아무리 많아져도 부모(<code>ul</code>)에 <strong>단 하나의 리스너</strong>만 존재하므로 메모리를 절약합니다.</li>
    <li><strong>필터링 필수</strong> — 버블링으로 인해 부모의 여백(padding)을 클릭해도 이벤트가 발생합니다. 따라서 <code>e.target.tagName</code>을 확인하여 내가 원하는 요소(<code>LI</code>)인지 확인하는 조건문(Guard Clause)이 반드시 필요합니다.</li>
    <li><strong><code>e.target</code></strong> — 이벤트 리스너는 부모(<code>ul</code>)에 있지만, <code>e.target</code>은 실제 사용자가 클릭한 자식(<code>li</code>)을 가리킵니다.</li>
  </ul>
</div>

---

## 🌈 이벤트 위임 실전 예제 (Todo List)

### 1) 할 일 목록 (Todo List) 삭제 구현

개별 삭제 버튼마다 이벤트를 걸지 않고, `ul` 부모 요소에서 클릭을 감지하여 삭제 기능을 처리하는 코드입니다.

```jsx
<ul id="todo-list">
  <li>
    <span>할 일 1</span>
    <button class="delete">삭제</button>
  </li>
  <li>
    <span>할 일 2</span>
    <button class="delete">삭제</button>
  </li>
</ul>
```

```jsx
const todoList = document.getElementById('todo-list');

todoList.addEventListener('click', function(e) {
  // 1. 삭제 버튼 클릭 확인: 클릭된 요소(e.target)가 'delete' 클래스를 가졌는지 확인
  if (e.target.classList.contains('delete')) {
    
    // 2. 부모 요소 찾기: 클릭된 버튼에서 가장 가까운 상위 'li' 태그를 찾음
    const li = e.target.closest('li');
    
    // 3. 요소 제거: 찾은 li를 DOM에서 삭제
    li.remove();
  }
});
```

### 2) 핵심 메서드: `closest()`

이벤트 위임 패턴에서 매우 중요하게 사용되는 메서드입니다.

- **기능** — 자신을 포함하여 위쪽(조상)으로 DOM 트리를 타고 올라가며 **가장 가까운 선택자** 요소를 반환합니다.
- **용도** — "삭제 버튼을 눌렀을 때, 이 버튼이 담긴 리스트 아이템(`li`) 전체를 찾고 싶을 때" 사용합니다.

```jsx
// 사용 예시
const li = e.target.closest('li');      // 가장 가까운 li 찾기
const form = e.target.closest('form');  // 가장 가까운 form 찾기
const card = e.target.closest('.card'); // 가장 가까운 .card 찾기
```

`e.target.matches('선택자')`는 실제 클릭된 요소가 특정 선택자와 일치하는지 확인할 때 사용합니다.  
`e.target.closest('선택자')`는 클릭된 요소 자신 또는 가장 가까운 부모 중 조건에 맞는 요소를 찾을 때 사용합니다.  
버튼 안에 span 같은 자식 요소가 있을 수 있으므로, 실무에서는 `closest`를 사용하면 더 안전합니다.

### 3) 더 정교한 위임 패턴 (Advanced)

하나의 리스트 안에 **삭제, 수정, 체크박스** 등 여러 기능이 있을 때, 이를 하나의 핸들러(`addEventListener`)로 깔끔하게 분기 처리하는 방법입니다.

```jsx
todoList.addEventListener('click', function(e) {
  // closest를 사용하여 클릭된 요소가 해당 기능을 담당하는지 확인 (없으면 null 반환)
  const deleteBtn = e.target.closest('.delete');
  const editBtn = e.target.closest('.edit');
  const checkbox = e.target.closest('.checkbox');

  // 조건문으로 기능 분기
  if (deleteBtn) {
    deleteBtn.closest('li').remove(); // 삭제 로직
  } else if (editBtn) {
    // 수정 로직
  } else if (checkbox) {
    // 완료 토글 로직
  }
});
```

---

## 🌈 실전 예제: 버튼 클릭 카운터

### 1) HTML 구조 (공통)

카운터 앱의 기본 뼈대입니다. 부모인 `counter-app` 안에 숫자 표시(`p`)와 버튼 3개가 들어있습니다.

```jsx
<div id="counter-app">
  <p id="count">0</p>
  <button id="increase">+1</button>
  <button id="decrease">-1</button>
  <button id="reset">리셋</button>
</div>
```

### 2) 방식 비교

**❌ 방식 1: 개별 핸들러 방식 (비효율적)**

각 버튼마다 일일이 `addEventListener`를 붙이는 방식입니다.

```jsx
const countDisplay = document.getElementById('count');
let count = 0;

const updateDisplay = function() {
  countDisplay.textContent = count;
};

// 각 버튼마다 별도로 이벤트를 등록함
document.getElementById('increase').addEventListener('click', function() {
  count++;
  updateDisplay();
});

document.getElementById('decrease').addEventListener('click', function() {
  count--;
  updateDisplay();
});
```

**✅ 방식 2: 이벤트 위임 방식 (추천)**

부모 요소(`counter-app`)에만 이벤트를 붙이고, `target.id`를 이용해 어떤 버튼이 눌렸는지 구별하는 방식입니다.

```jsx
// 부모 요소에만 핸들러 등록!
document.getElementById('counter-app')
  .addEventListener('click', function(e) {
    // 1. 이벤트 타겟 확인
    const target = e.target;

    // 2. 각 버튼 식별 (id로 구분)
    if (target.id === 'increase') count++;
    else if (target.id === 'decrease') count--;
    else if (target.id === 'reset') count = 0;

    // 3. 화면 업데이트
    updateDisplay();
  });
```

### 3) 이벤트 위임의 장점 (정리)

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">메모리 절약</div>
    <div class="wda-fcard-dsc">핸들러를 1개만 생성하면 됩니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">동적 처리</div>
    <div class="wda-fcard-dsc">나중에 버튼이 추가되어도 자바스크립트 코드를 수정할 필요가 없습니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">코드 관리</div>
    <div class="wda-fcard-dsc">로직이 한 곳(<code>addEventListener</code> 내부)에 모여있어 유지보수가 편합니다.</div>
  </div>
</div>

---

## 🌈 실전 예제: 폼 유효성 검사

### 1) HTML 구조 설계

HTML에서는 입력 필드와 에러 메시지를 표시할 영역을 미리 만들어둡니다.

```jsx
<form id="signup-form">
  <div class="mb-4">
    <input type="email" name="email" 
           placeholder="이메일" 
           class="w-full p-2 border rounded">
    <span class="error text-red-500 text-sm" 
          id="email-error"></span>
  </div>

  <div class="mb-4">
    <input type="password" name="password" 
           placeholder="비밀번호 (8자 이상)" 
           class="w-full p-2 border rounded">
    <span class="error text-red-500 text-sm" 
          id="password-error"></span>
  </div>

  <button type="submit" 
          class="bg-blue-500 text-white px-4 py-2 rounded">
    가입
  </button>
</form>
```

**구조 설계 포인트**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong><code>form</code> 태그</strong> — 엔터키 제출 등 브라우저 기본 동작을 활용하기 위해 사용합니다.</li>
    <li><strong><code>name</code> 속성</strong> — 자바스크립트에서 <code>form.elements.email</code>처럼 쉽게 접근하기 위해 필수입니다.</li>
    <li><strong>에러 메시지 영역</strong> — <code>span</code> 태그를 미리 만들어두고, JS로 텍스트를 제어합니다.</li>
  </ul>
</div>

### 2) 유효성 검사 로직 (JavaScript)

`submit` 이벤트를 감지하여 검사를 수행합니다.

```jsx
const form = document.getElementById('signup-form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // 1. 중요: 새로고침(서버 전송) 방지

  // 2. 값 가져오기 (name 속성 활용)
  const email = form.elements.email;
  const password = form.elements.password;
  let isValid = true;

  // 3. 이메일 검사 (간단히 '@' 포함 여부만 확인)
  if (!email.value.includes('@')) {
    document.getElementById('email-error')
      .textContent = '올바른 이메일 필요';
    isValid = false;
  }

  // 4. 비밀번호 검사 (8자 미만 확인)
  if (password.value.length < 8) {
    document.getElementById('password-error')
      .textContent = '비밀번호는 8자 이상';
    isValid = false;
  }

  // 5. 모든 검사 통과 시 처리
  if (isValid) console.log('제출 성공!'); 
});
```

**⚠️ 핵심 주의사항: `e.preventDefault()`**

<div class="wda-callout wda-cw">
  <ul>
    <li><strong>e.preventDefault() 필수!</strong> 폼의 submit 이벤트는 기본적으로 페이지를 새로고침하며 서버로 데이터를 전송합니다. JavaScript로 유효성을 검사하거나 AJAX(fetch) 통신을 하려면 반드시 이 기본 동작을 막아야 합니다.</li>
  </ul>
</div>

---

## 🌈 실전 예제: 실시간 검색창

### 1) HTML 구조

검색어를 입력할 `input` 창과 결과를 보여줄 `ul` 목록을 준비합니다.

```jsx
<input type="text" id="search" 
       placeholder="검색어 입력">
<ul id="results"></ul>
```

### 2) JavaScript 로직

**`input` 이벤트**를 사용하여 사용자가 타이핑할 때마다 즉시 반응하도록 구현합니다.

```jsx
const searchInput = document.getElementById('search');
const resultsEl = document.getElementById('results');

// 검색 대상 데이터
const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Melon', 'Grape'];

// 1. 입력 감지 및 필터링
searchInput.addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase();

  // 검색 결과 필터링
  const filtered = data.filter(function(item) {
    return item.toLowerCase().includes(query);
  });

  // 결과 표시 함수 호출
  displayResults(filtered);
});

// 2. 결과 표시 함수
function displayResults(items) {
  resultsEl.innerHTML = ""; // 기존 결과 삭제

  // 결과가 없을 때 처리
  if (items.length === 0) {
    resultsEl.innerHTML = '<li>결과 없음</li>';
    return;
  }

  // 필터링된 데이터 DOM에 추가
  items.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item;
    resultsEl.appendChild(li);
  });
}
```

**✅ 핵심 포인트 (Key Points)**

<div class="wda-callout wda-cs">
  <ul>
    <li><strong><code>input</code> 이벤트</strong> — 키를 누를 때마다(타이핑할 때마다) 이벤트가 발생하여 실시간 반응을 구현합니다.</li>
    <li><strong>필터링</strong> — 대소문자를 구분하지 않도록 <code>toLowerCase()</code>를 사용하여 데이터를 걸러냅니다.</li>
    <li><strong>DOM 업데이트</strong> — 필터링된 결과를 바탕으로 <code>li</code> 요소를 동적으로 생성하여 화면에 표시합니다.</li>
  </ul>
</div>

---

## 🚀 최종 핵심 정리

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>이벤트 개념</strong></td>
    <td>• 이벤트는 브라우저가 감지해 JS로 전달하는 사건이며, 리스너가 등록된 것만 처리됩니다.<br>• 마우스/키보드/폼/문서·창 이벤트로 크게 구분됩니다.</td>
  </tr>
  <tr>
    <td><strong>등록 방식</strong></td>
    <td>• 인라인, 프로퍼티, addEventListener 3가지 중 <strong>addEventListener</strong>가 가장 권장됩니다.<br>• once, capture, passive 옵션으로 세밀한 제어가 가능합니다.</td>
  </tr>
  <tr>
    <td><strong>이벤트 객체</strong></td>
    <td>• <code>target</code>은 실제 발생 요소, <code>currentTarget</code>은 핸들러가 등록된 요소입니다.<br>• <code>preventDefault()</code>로 기본 동작을, <code>stopPropagation()</code>으로 전파를 제어합니다.</td>
  </tr>
  <tr>
    <td><strong>전파와 위임</strong></td>
    <td>• 이벤트는 캡처링 → 타겟 → 버블링 순으로 전파됩니다.<br>• 이벤트 위임은 부모에 하나의 리스너만 등록해 메모리를 절약하고 동적 요소에도 자동 적용됩니다.</td>
  </tr>
  <tr>
    <td><strong>주의사항</strong></td>
    <td>• 익명 함수는 <code>removeEventListener</code>로 제거할 수 없으므로 기명 함수를 사용해야 합니다.<br>• <code>stopPropagation()</code>은 이벤트 위임을 방해할 수 있어 꼭 필요할 때만 사용합니다.</td>
  </tr>
  <tr>
    <td><strong>최종 암기 포인트</strong></td>
    <td>• "선택 없이 조작 없다"처럼, <strong>"등록 없이 반응 없다"</strong> — 리스너를 등록해야 이벤트가 의미를 가집니다.<br>• 자식이 많은 목록에는 개별 등록 대신 <strong>이벤트 위임</strong>을 먼저 고려하세요.</td>
  </tr>
</table>
