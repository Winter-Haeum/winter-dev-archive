---
title: "1-5 가상 DOM의 개념"
status: "completed"
description: "브라우저 렌더링 파이프라인부터 가상 DOM의 개념, Diffing과 재조정(Reconciliation), Batch Update와 Fiber까지 React 성능 원리를 정리한다."
category: "React"
section: "Basics"
tags:
  - react
  - virtual-dom
  - performance
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
.wda-fcard-pro{border-left:3px solid rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
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

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>DOM 이해하기</strong> — Document Object Model의 개념과 구조를 파악합니다.<br>
  • <strong>DOM 조작의 문제점</strong> — 직접 DOM 조작이 성능에 미치는 영향을 이해합니다.<br>
  • <strong>가상 DOM 이해하기</strong> — 메모리 상의 가상 트리 개념과 동작 원리를 파악합니다.<br>
  • <strong>재조정 알아보기</strong> — Diffing(비교)과 Reconciliation(재조정) 과정을 이해합니다.
</div>

---

<h2>1. 렌더링 파이프라인</h2>

**⚙️ 브라우저가 화면을 그리는 과정**

브라우저는 우리가 짠 코드를 화면에 보여주기 위해 총 5단계를 거칩니다.

<img src="/images/content/react/1-5/react-1-5-rendering-pipeline.png" alt="렌더링 파이프라인: Parse(HTML/CSS 파싱) → Style(스타일 계산) → Layout(위치/크기 계산, Heavy) → Paint(픽셀 그리기, Heavy) → Composite(레이어 합성)" style="display:block;width:100%;max-width:640px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:640px;">[그림] 렌더링 파이프라인</div>

1. **Parse:** HTML과 CSS를 읽어서 해석합니다.
2. **Style:** 어떤 스타일을 입힐지 계산합니다.
3. **Layout (Heavy):** 요소의 **위치와 크기**를 계산합니다. (가장 힘든 작업)
4. **Paint (Heavy):** 계산된 면적에 **색깔과 그림자**를 칠해서 픽셀로 만듭니다.
5. **Composite:** 만들어진 여러 층(Layer)을 하나로 **합칩니다.**

**📌 핵심 단계 분석 (비용 차이)**

위 이미지의 색깔별 박스는 각 단계가 컴퓨터에게 얼마나 부담을 주는지를 보여줍니다.

| **단계 (Phase)** | **설명 (Description)** | **비용 (Cost)** |
| --- | --- | --- |
| **Layout**(레이아웃) | **위치와 크기 계산**<br>화면의 구조를 잡는 공사 단계입니다. 하나가 움직이면 주변 요소들도 다 다시 계산해야 해서 **가장 비용이 큽니다.** | **매우 높음**(Heavy) |
| **Paint**(페인트) | **픽셀로 변환**<br>레이아웃이 잡힌 곳에 색을 칠하는 단계입니다. 여전히 컴퓨터가 할 일이 많습니다. | **높음**(Heavy) |
| **Composite**(컴포지트) | **레이어 합성**<br>이미 그려진 판들을 겹치기만 하면 되는 단계입니다. | **낮음**(Light) |

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <strong>Reflow(리플로우)를 조심하세요!</strong>
  <ul>
    <li><strong>Reflow:</strong> <code>Layout</code> 단계가 다시 발생하는 현상입니다. (요소의 크기나 위치를 바꿀 때) → 가장 느림</li>
    <li><strong>Repaint:</strong> <code>Layout</code>은 건너뛰고 <code>Paint</code>만 다시 하는 현상입니다. (색상만 바꿀 때) → 조금 덜 느림</li>
  </ul>
  <p>결론: 우리가 자바스크립트로 DOM을 직접 막 건드리면, 브라우저는 툭하면 Layout(가장 비싼 작업)을 처음부터 다시 해야 합니다. 이게 쌓이면 화면이 버벅거리게 됩니다.</p>
</div>

---

<h2>2. 가상 DOM이란? (Virtual DOM)</h2>

**📌 핵심 개념**

가상 DOM은 실제 DOM을 그대로 복사한 것이 아니라, 화면 구조를 JavaScript 객체 형태로 표현한 가벼운 트리입니다.  
실제 DOM을 직접 조작하기 전에 메모리에서 먼저 변경 결과를 계산하는 데 사용됩니다.

**💡 비유 (Analogy)**

아주 적절한 비유로 설명해 보겠습니다.

<div class="wda-fgrid" style="position:relative;overflow:visible;">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">실제 DOM (종이 인쇄)</div>
    <div class="wda-fcard-dsc">한 번 인쇄하면 수정하기 어렵습니다. 오타를 고치려면 종이를 버리고 <strong>다시 인쇄</strong>해야 합니다. (느리고 비쌈)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">가상 DOM (태블릿 스케치)</div>
    <div class="wda-fcard-dsc">화면상에서 썼다 지웠다 하는 것이 자유롭습니다. <strong>수정이 다 끝난 뒤에 딱 한 번만 인쇄</strong>하면 됩니다. (빠르고 효율적)</div>
  </div>
</div>

**🆚 실제 DOM vs 가상 DOM 비교**

왜 가상 DOM이 더 효율적인지 보여주는 비교표입니다.

| **구분** | **실제 DOM (Real)** | **가상 DOM (Virtual)** |
| --- | --- | --- |
| **관리 주체** | 브라우저가 직접 관리 | **JavaScript 객체**(메모리) |
| **작동 방식** | 변경 내용에 따라 스타일 계산, Layout, Paint 같은 렌더링 작업이 다시 발생할 수 있음<br>(위치·크기 변경은 Reflow를 유발해 비용이 큼) | **메모리에서만 연산**(화면 갱신 X) |
| **속도** | 느림(상대적) | **상대적으로 빠름**(단, UI 규모와 변경량에 따라 비용은 달라질 수 있음) |
| **무게** | 무거움(화면 정보 포함) | **가벼움**(데이터만 존재) |

**🧪 가상 DOM의 실체 (Code)**

"가상 DOM"이라고 해서 거창한 기술이 아닙니다. 사실은 단순히 데이터를 담고 있는 자바스크립트 객체(Object)일 뿐입니다.

```javascript
// 실제 <div class="container"><h1>제목</h1></div>를
// 자바스크립트 객체로 표현한 모습입니다.

const virtualElement = {
  type: 'div',                    // 태그 이름
  props: { className: 'container' }, // 속성 (클래스 등)
  children: [                     // 자식 요소들
    { type: 'h1', props: {}, children: ['제목'] }
  ]
};
```

설명: 브라우저는 이 가벼운 객체(데이터)를 가지고 놀기 때문에, 실제 화면을 건드리는 것보다 훨씬 속도가 빠릅니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Batch Update (일괄 처리)</strong>
  <p>React는 여러 상태 변경을 가능한 한 모아서 처리해 <strong>실제 DOM 반영 횟수를 줄입니다.</strong><br><br>덕분에 매번 즉시 DOM을 수정하는 방식보다 렌더링 비용을 줄일 수 있습니다.<br><br>단, 모든 상황에서 무조건 실제 DOM 반영이 정확히 1번만 일어난다고 단정하면 안 됩니다.</p>
</div>

---

<h2>3. 가상 DOM 동작 원리 (3단계)</h2>

**⚙️ 전체 흐름 (Flow)**

아래 다이어그램은 **데이터(State)가 'A'에서 'B'로 바뀌었을 때**의 처리 과정을 보여줍니다.

<img src="/images/content/react/1-5/react-1-5-virtual-dom-update-flow.png" alt="가상 DOM 업데이트 흐름: Old VDOM(A, p) → State Change → New VDOM(B, p) → Diff & Patch → Real DOM(B, p)" style="display:block;width:100%;max-width:640px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:640px;">[그림] React 가상 DOM 업데이트 흐름</div>

**⚙️ 단계별 상세 분석**

리액트는 무턱대고 화면을 고치지 않고, 다음 3단계를 침착하게 밟습니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">새 가상 DOM 생성 (Render Phase)</div>
      <div class="wda-sdsc">데이터가 바뀌면(State Change), 변경된 내용을 반영한 새로운 가상 DOM 트리(New VDOM)를 메모리에 찍어냅니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">비교 (Diffing)</div>
      <div class="wda-sdsc"><strong>"옛날 것(Old)과 새것(New)의 차이가 뭐지?"</strong><br>두 개의 스냅샷을 비교해서 바뀐 부분(초록색 <code>B</code>)을 찾아냅니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">적용 (Commit Phase)</div>
      <div class="wda-sdsc"><strong>"이것만 고쳐!"</strong><br>찾아낸 변경 사항(<code>B</code>)만 실제 브라우저(Real DOM)에 반영합니다. 나머지는 건드리지 않습니다.</div>
    </div>
  </div>
</div>

**📝 핵심 용어 정리**

<div class="wda-callout wda-ci">
  <strong>Diff &amp; Patch</strong>
  <ul>
    <li><strong>Diff (비교):</strong> 틀린 그림 찾기처럼 변경된 부분을 찾아내는 과정입니다.</li>
    <li><strong>Patch (패치):</strong> 구멍 난 곳을 때우듯이, 변경된 부분만 실제 화면에 붙여넣는 작업입니다.</li>
  </ul>
  <p><strong>결과:</strong> 사용자 눈에는 화면이 순식간에 바뀌는 것처럼 보이지만, 사실은 <strong>최소한의 부분만</strong> 교체된 것입니다.</p>
</div>

---

<h2>4. 재조정 (Reconciliation)과 Diffing 알고리즘</h2>

**📝 비교 규칙 (Comparison Rules)**

리액트는 굳이 모든 것을 정밀하게 비교하지 않고, **두 가지 단순한 대원칙**을 따릅니다.

**규칙 1: 다른 타입의 요소 ➔ 전체 교체**

태그가 `<div>`에서 `<span>`으로 바뀌었다면? "아, 아예 다른 물건이구나!"라고 판단하고, 기존 트리를 **과감하게 버리고 새로 만듭니다.**

```jsx
// div가 span으로 바뀌면, 내부 내용이 같아도 싹 다 새로 그립니다.
<div>내용</div>  ➔  <span>내용</span>
```

**규칙 2: 같은 타입의 요소 ➔ 속성만 비교**

태그는 그대로고 클래스나 스타일만 바뀌었다면? "물건은 그대로 두고 옷만 갈아입히자."라고 판단하여 **변경된 속성만 살짝 수정합니다.** (가장 효율적)

```jsx
// DOM은 유지하고, className만 "old"에서 "new"로 바꿔줍니다.
<div className="old"> ➔ <div className="new">
```

**⚠️ Key의 중요성 (List Keys)**

리스트(목록)를 출력할 때 가장 중요한 규칙입니다.

- **문제점:** 리스트의 순서가 바뀌거나 중간에 하나가 끼어들면, 리액트는 멍청하게 모든 리스트를 다 다시 그려야 할 수도 있습니다.
- **해결책:** 각 항목에 주민등록번호처럼 고유한 이름표(`key`)를 달아주면, 순서가 섞여도 누가 누구인지 정확히 추적할 수 있습니다.

```jsx
// ⚠️ 리스트에는 반드시 고유한 key를 지정해야 합니다!
// key가 없으면 콘솔에 빨간 에러 경고가 뜹니다.
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 O(n)인가요?</strong>
  <p>원래 컴퓨터 과학에서 두 개의 복잡한 트리를 완벽하게 비교하려면 <code>O(n^3)</code>만큼의 엄청난 계산이 필요합니다. (요소가 1,000개면 10억 번 연산)<br><br>하지만 리액트는 위에서 본 "단순한 휴리스틱(규칙)"을 적용해서, 계산량을 <code>O(n)</code>으로 획기적으로 줄였습니다. (1,000개면 1,000번만 훑어보면 끝!)</p>
</div>

---

<h2>5. 재조정 (Reconciliation) 과정</h2>

**📌 정의**

가상 DOM이 찾아낸 "변경된 부분(Diff 결과)"을 실제 브라우저(DOM)에 **최종적으로 적용하는 과정**입니다.

**⚙️ 6단계 프로세스 (Flow)**

아래 표를 보면, 리액트가 얼마나 치밀하게 계산한 뒤에 화면을 건드리는지 알 수 있습니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">시작 — State 변경</div>
      <div class="wda-sdsc">사용자가 버튼을 누르는 등 <strong>데이터(상태)가 바뀔 때</strong> 시작됩니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">생성 — New Virtual DOM</div>
      <div class="wda-sdsc">변경된 데이터로 새로운 <strong>가상 DOM 트리</strong>를 메모리에 만듭니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">비교 — Diffing</div>
      <div class="wda-sdsc">방금 만든 것과 예전 것을 비교해서 <strong>차이점</strong>을 찾아냅니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">목록 — Patch List</div>
      <div class="wda-sdsc">"A는 텍스트 변경, B는 색상 변경"처럼 <strong>변경 사항 목록</strong>을 만듭니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">5</div>
    <div class="wda-sbody">
      <div class="wda-sttl">적용 — Batch Update</div>
      <div class="wda-sdsc"><strong>(핵심)</strong> 목록에 있는 변경 사항들을 한꺼번에 모아서 <strong>실제 DOM에 딱 한 번 반영</strong>합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">6</div>
    <div class="wda-sbody">
      <div class="wda-sttl">완료 — Browser Paint</div>
      <div class="wda-sdsc">브라우저가 변경된 <strong>최소 범위</strong>만 다시 그려서 화면을 갱신합니다.</div>
    </div>
  </div>
</div>

**🔑 핵심: Batch Update (일괄 처리)**

<div class="wda-callout wda-ci">
  <strong>여러 번 고치지 않고 한 번에!</strong>
  <p>5번 단계가 리액트 속도의 비결입니다.<br><br>데이터를 100번 연속으로 바꿔도, 리액트는 그것을 가능한 한 모아뒀다가 <strong>최소한의 횟수로</strong> 실제 DOM을 수정합니다.<br><br>덕분에 브라우저가 힘든 일(렌더링)을 최소화할 수 있습니다.</p>
</div>

---

<h2>6. Batch Update와 Fiber (Deep Dive)</h2>

**⚙️ Batch Update (속도의 비밀)**

리액트는 성격이 급하지 않습니다. 변경 사항이 생길 때마다 즉시 화면을 고치는 게 아니라, "조금만 기다렸다가 한 번에 처리하자!"라는 전략을 씁니다.

상황: 아래처럼 같은 이벤트 처리 함수 안에서 상태 변경 함수(`setCount`)를 3번 연속으로 호출했습니다.

```javascript
function handleClick() {
  setCount(1);
  setCount(2);
  setCount(3);
}
// 질문: 화면은 몇 번 다시 그려질까요?
// 정답: 딱 1번!
```

같은 이벤트 처리 함수 안에서 위 코드가 실행되면 React는 상태 변경 요청을 모아서 처리할 수 있습니다. 이 경우 최종 상태는 마지막 요청인 3이 되고, 렌더링 횟수도 줄어듭니다.

- **원리:** 리액트는 이 요청들을 큐(Queue, 대기열)에 모아둡니다. 그리고 함수 실행이 다 끝나면 **가장 마지막 결과(3)만 가지고 딱 한 번 렌더링**합니다.
- **비유:** 식당에서 손님이 "물 주세요", "수저 주세요", "접시 주세요"라고 할 때, 종업원이 주방을 3번 왔다 갔다 하는 게 아니라 **한 번에 다 챙겨서 나오는 것**과 같습니다.

**⚙️ React Fiber (부드러움의 비밀)**

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">정의</div>
      <div class="wda-sdsc">리액트 16버전부터 도입된 <strong>새로운 렌더링 엔진(아키텍처)</strong>입니다. 핵심 기술은 <strong>"Time Slicing (시간 쪼개기)"</strong>입니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">기존 문제점 (Before)</div>
      <div class="wda-sdsc"><strong>"무거운 작업 시 멈춤"</strong><br>만약 렌더링이 1초 걸린다면, 그 1초 동안 화면이 완전히 멈춰버렸습니다. (렉 걸림)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">해결책 (Fiber)</div>
      <div class="wda-sdsc"><strong>"작업 쪼개기 & 양보하기"</strong><br>1. 작업을 아주 잘게 쪼갭니다.<br>2. "사용자 클릭? 먼저 처리해!" 하며 제어권을 <strong>양보</strong>합니다.<br>3. 급한 일을 처리하고 나서 중단된 작업을 다시 수행합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">결과</div>
      <div class="wda-sdsc">Fiber는 렌더링 작업을 잘게 나누고 우선순위를 조정해 사용자 입력에 더 빠르게 반응할 수 있게 합니다.<br>그 결과 무거운 UI 업데이트에서도 화면이 멈추는 느낌을 줄이는 데 도움이 됩니다.</div>
    </div>
  </div>
</div>

**📝 요약**

<div class="wda-callout wda-cs">
  <strong>빠르고 부드럽다!</strong>
  <ul>
    <li><strong>Batch Update:</strong> 일거리를 모아서 한 방에 처리 (속도 UP)</li>
    <li><strong>Fiber:</strong> 바쁠 때도 사용자 입력을 먼저 챙김 (반응성 UP)</li>
  </ul>
</div>

---

<h2>7. 직접 조작 vs 가상 DOM (성능 비교)</h2>

왜 리액트를 써야 하는지, 코드로 보는 결정적인 이유입니다.

| **구분** | **직접 DOM 조작 (Bad)** | **가상 DOM (Good)** |
| --- | --- | --- |
| **코드 예시** | `item1.textContent = '새값1';`<br>`item2.textContent = '새값2';`<br>... (일일이 수정) | `setItems(newItems);`<br>(상태만 변경하면 끝) |
| **작동 방식** | 변경 사항이 생길 때마다 **즉시 브라우저에 반영**합니다. | 1. 가상 DOM에서 미리 계산하고<br>2. **한 번에 묶어서(Batch)** 실제 DOM에 반영합니다. |
| **렌더링 발생 방식**(10개 수정 시) | 변경 방식에 따라 **여러 번 렌더링 작업**을 유발할 수 있음(수정할 때마다 파이프라인 가동) | 변경 사항을 비교·**모아서(Batch)** 실제 DOM 반영 횟수를 줄이는 방향으로 동작 |
| **결과** | 불필요한 연산으로 인해 화면이 버벅거릴 수 있습니다. | 렌더링 횟수를 최소화해 더 나은 성능을 기대할 수 있습니다. |

직접 DOM 조작은 변경 방식에 따라 여러 번 렌더링 작업을 유발할 수 있습니다. React는 변경 사항을 비교하고 모아서 실제 DOM 반영 횟수를 줄이는 방향으로 동작합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>배치 업데이트 (Batch Update)</strong>
  <p>핵심은 "여러 변경을 모아서 한 번에 처리!"라는 것입니다.<br><br>리액트는 마치 <strong>"장바구니"</strong>와 같습니다. 물건을 10개 담을 때마다 결제하는 게 아니라(직접 조작), 다 담고 나서 <strong>한 번에 결제(가상 DOM)</strong>하는 방식이라서 빠른 것입니다.</p>
</div>

---

<h2>8. 가상 DOM의 장점</h2>

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">1) 성능 최적화 (Performance)</div>
    <div class="wda-fcard-dsc">부분 업데이트와 배치 처리(Batching)로 컴퓨터를 혹사시키지 않고 효율적으로 일합니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">2) 선언적 프로그래밍 (Declarative)</div>
    <div class="wda-fcard-dsc">"어떻게(How)"가 아니라 "무엇(What)"이 되어야 하는지만 선언하면 됩니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">3) 크로스 플랫폼 (Cross Platform)</div>
    <div class="wda-fcard-dsc">React Native로 같은 원리를 웹뿐 아니라 앱 개발에도 그대로 적용할 수 있습니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">4) 디버깅 용이 (Easy Debugging)</div>
    <div class="wda-fcard-dsc">"데이터가 변하면 화면이 변한다"는 규칙이 확실해 상태 변화만 추적하면 됩니다.</div>
  </div>
</div>

**📌 성능 최적화 (Performance)**

컴퓨터를 혹사시키지 않고 효율적으로 일합니다.

- **부분 업데이트:** 화면 전체를 새로 고치지 않고, **변경된 부분만 콕 집어서 업데이트**합니다.
- **배치 처리 (Batching):** 변경 사항을 모았다가 **한 번에 처리해서 렌더링 횟수를 최소화**합니다.
- **보호:** 개발자가 실수로 불필요한 DOM 조작을 남발하는 것을 막아줍니다.

**📌 선언적 프로그래밍 (Declarative)**

코딩 스타일이 "명령(Command)"에서 "선언(Declare)"으로 바뀝니다.

- **"What"에 집중:** "어떻게(How) 고쳐라"라고 명령하지 않고, "결과적으로 무엇(What)이 되어야 한다"고 선언만 하면 됩니다.
- **코드 단축:** `document.getElementById` 같은 지루한 DOM 조작 코드를 짤 필요가 없습니다.
- **가독성:** 코드가 간결해져서 읽기 쉽습니다.

**코드 비교 : 명령형 vs 선언형**

```jsx
// ❌ 명령형 (기존 방식): 일일이 지시해야 함
// "div를 찾아서, 텍스트를 바꾸고, 색깔도 바꿔!"
const box = document.getElementById('box');
box.innerText = '안녕하세요';
box.style.color = 'red';

// ✅ 선언형 (React 방식): 결과만 말하면 됨
// "빨간색 안녕하세요 박스 하나 줘."
return <div style={{ color: 'red' }}>안녕하세요</div>;
```

**📌 크로스 플랫폼 (Cross Platform)**

웹(Web)뿐만 아니라 앱(App)도 만들 수 있습니다.

- **React Native:** React의 컴포넌트 모델과 선언적 UI 작성 방식을 활용해 **iOS/Android 앱**을 만들 수 있게 해줍니다. 다만 웹의 DOM을 그대로 사용하는 것은 아니며, 네이티브 UI 요소로 렌더링됩니다.
- **확장성:** React 생태계에는 웹뿐 아니라 모바일, 데스크톱 등 다양한 플랫폼을 다루는 도구들이 있습니다.

**📌 디버깅 용이 (Easy Debugging)**

에러를 찾고 수정하기가 훨씬 쉬워집니다.

- **추적 가능:** 데이터(State)가 변하면 화면이 변한다는 규칙이 확실하므로, **상태 변화만 추적**하면 버그를 잡을 수 있습니다.
- **예측 가능:** 코드를 짠 대로 결과가 나오기 때문에, UI 업데이트를 예측하기 쉽습니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>택시 타는 것과 같아요 (선언적 프로그래밍)</strong>
  <ul>
    <li><strong>명령형 (직접 운전):</strong> "직진하다가 사거리에서 좌회전하고, 300m 가서 멈춰주세요." (과정을 다 알아야 함)</li>
    <li><strong>선언형 (택시):</strong> "서울역으로 가주세요." (목적지만 말하면 기사님(React)이 알아서 최적의 길로 감)</li>
  </ul>
</div>

---

<h2>9. 가상 DOM의 한계 (Limitations)</h2>

**⚠️ 무조건 빠른 건 아니다**

리액트는 "가상 DOM 생성 ➔ 비교 ➔ 적용"이라는 3단계 절차를 무조건 거쳐야 합니다. 그래서 아주 단순한 작업에서는 오히려 바로 고치는 것보다 느릴 수 있습니다.

```javascript
// [상황] 단순히 숫자 하나를 바꾸는 경우

// 1. 직접 조작 (Vanilla JS)
// -> 중간 단계 없이 바로 수정하므로 미세하게 더 빠릅니다.
document.getElementById('count').textContent = count;

// 2. 리액트 (React)
// -> 메모리에 가상 화면을 만들고 비교하는 과정(오버헤드)이 추가됩니다.
// -> "배보다 배꼽이 더 큰" 상황이 될 수 있습니다.
setCount(count);
```

**⚠️ 메모리 사용 (Memory Usage)**

가상 DOM은 메모리 위에 존재하는 '객체'입니다.

- **더블 버퍼링:** 가상 DOM은 UI 구조를 표현하는 객체 트리를 메모리에 유지합니다. 따라서 직접 DOM만 다루는 방식보다 추가 메모리 비용이 생길 수 있습니다.
- **대규모 트리:** 화면에 요소가 수만 개 있다면, 그것을 그대로 메모리에 복사하는 것도 부담이 될 수 있습니다.

**🆚 언제 유리한가? (성능 비교표)**

단순한 작업은 직접 조작이 빠르지만, **현대 웹 앱처럼 복잡하고 데이터가 자주 바뀌는 환경**에서는 리액트가 압도적으로 유리합니다.

| **상황 (Situation)** | **직접 조작 (Direct)** | **가상 DOM (React)** |
| --- | --- | --- |
| **단순 업데이트** | **빠름**(Fast) | 약간 느림(Slightly Slow) |
| **복잡한 UI 변경** | 느림(Slow) | **빠름**(Fast) |
| **빈번한 업데이트** | 매우 느림(Very Slow) | **빠름**(Fast) |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>트럭으로 피자 배달하기</strong>
  <ul>
    <li><strong>단순 작업(피자 1판):</strong> 오토바이(직접 조작)가 훨씬 빠릅니다. 트럭(리액트)은 시동 걸고 주차하는 데 시간이 더 걸리죠.</li>
    <li><strong>복잡한 작업(이사짐):</strong> 오토바이로는 100번 왔다 갔다 해야 하지만, 트럭은 <strong>한 번에(Batch)</strong> 실어 나를 수 있어서 훨씬 빠릅니다.</li>
  </ul>
  <p>우리는 이사짐 수준의 <strong>복잡한 웹 애플리케이션</strong>을 만들기 위해 리액트를 쓰는 것입니다.</p>
</div>

---

<h2>✅ 핵심 요약</h2>

지금까지 배운 React의 이론적 배경을 관통하는 핵심 키워드입니다.

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>DOM 문제</strong></td>
    <td>직접 DOM을 조작하는 것은 비용(연산)이 매우 크며, 빈번하게 발생할 경우 심각한 성능 저하를 유발합니다.</td>
  </tr>
  <tr>
    <td><strong>가상 DOM</strong></td>
    <td>메모리상에 존재하는 가상의 트리에서 미리 변경 사항을 계산한 뒤, 꼭 필요한 최소한의 부분만 실제 DOM에 반영합니다.</td>
  </tr>
  <tr>
    <td><strong>Diffing</strong></td>
    <td>이전 가상 DOM과 새로운 가상 DOM을 비교하여, 구체적으로 무엇이 바뀌었는지 찾아내는 비교 알고리즘입니다.</td>
  </tr>
  <tr>
    <td><strong>주의사항</strong></td>
    <td>가상 DOM이 무조건 빠른 것은 아닙니다. 아주 단순한 업데이트에서는 직접 DOM 조작이 더 빠를 수 있고, 메모리를 더 많이 사용할 수 있습니다.</td>
  </tr>
  <tr>
    <td><strong>최종 암기 포인트</strong></td>
    <td>데이터(State)가 바뀌면 화면이 바뀐다 — 변경 계산은 가상 DOM에서, 실제 반영(Commit)은 Batch Update로 최소한만.</td>
  </tr>
</table>
