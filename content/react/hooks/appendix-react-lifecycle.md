---
title: "(부록) 리액트 라이프사이클"
status: "completed"
description: "마운트·업데이트·언마운트로 이어지는 컴포넌트 생명주기를 useEffect와 연결지어 정리하고, Class 생명주기 메서드와의 대응 관계, Strict Mode 이중 실행의 이유까지 살펴본다."
category: "React"
section: "Hooks"
tags:
  - react
  - hooks
  - lifecycle
  - useeffect
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
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
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

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>생명주기 흐름 이해</strong> — 마운트(Mount), 업데이트(Update), 언마운트(Unmount)의 과정을 이해합니다<br>
  • <strong>Class vs Hooks 비교</strong> — 과거 클래스 메서드와 현재 useEffect Hook의 대응 관계를 파악합니다<br>
  • <strong>useEffect 심화</strong> — 의존성 배열(deps)에 따른 실행 시점을 정확히 제어합니다<br>
  • <strong>주의사항 숙지</strong> — 무한 루프, Cleanup 누락, Strict Mode 등 흔한 실수를 방지하는 법을 배웁니다
</div>

---

<h2>1. React 생명주기 한눈에 보기</h2>

**⚙️ Mounting (탄생) 🌱**

**"컴포넌트가 처음 화면에 나타나는 단계입니다."**

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">컴포넌트 함수 호출</div><div class="wda-sdsc">리액트가 함수를 실행합니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">DOM 그리기 (Render → Commit)</div><div class="wda-sdsc">HTML을 화면에 그려줍니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">Effect 실행</div><div class="wda-sdsc"><code>useEffect</code>는 렌더링 결과가 DOM에 반영된 뒤 실행됩니다. API 호출, 이벤트 등록, 타이머 설정처럼 화면 계산과 분리해야 하는 작업을 이 시점에 처리합니다.</div></div></div>
</div>

<div class="wda-callout wda-cw">
  <p><strong>Render와 Commit은 엄밀히 다른 단계입니다</strong></p>
  <p>엄밀히 말하면 Render는 화면에 바로 그리는 단계가 아니라, React가 화면에 무엇을 보여줄지 계산하는 단계입니다.<br>실제 DOM에 반영되는 단계는 Commit입니다.</p>
  <ul>
    <li><strong>Render Phase</strong>: React가 컴포넌트 함수를 실행하고 JSX 결과를 계산합니다.</li>
    <li><strong>Commit Phase</strong>: 계산된 결과를 실제 브라우저 DOM에 반영합니다.</li>
    <li><strong>Effect 실행</strong>: DOM 반영 이후 <code>useEffect</code>가 실행됩니다.</li>
  </ul>
</div>

**⚙️ Updating (변화) 🔄**

**"데이터(Props, State)가 바뀌어 갱신되는 단계입니다."**

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">Props / State 변경</div><div class="wda-sdsc">사용자 입력 등으로 데이터가 바뀝니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">DOM 업데이트 (Re-render)</div><div class="wda-sdsc">바뀐 부분만 화면에 다시 그립니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">Cleanup 실행 (이전)</div><div class="wda-sdsc"><strong>중요!</strong> 새로운 Effect를 실행하기 전에, <strong>직전에 실행했던 Effect의 뒷정리(청소)</strong>를 먼저 합니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">Effect 실행 (새것)</div><div class="wda-sdsc">청소가 끝나면 새로운 Effect를 실행합니다.</div></div></div>
</div>

<div class="wda-callout wda-cw">
  <p>업데이트가 발생하면 React는 새 화면을 계산하고 DOM에 반영합니다.<br>그 뒤 이전 <code>useEffect</code>의 cleanup을 실행하고, 새로운 <code>useEffect</code>를 실행합니다.</p>
  <p>입문 단계에서는 <strong>'이전 Cleanup → 새 Effect'</strong> 순서를 핵심으로 기억하면 됩니다.</p>
  <p><strong>실행 흐름 요약</strong>: 업데이트 시 핵심 순서 — 새 화면 반영 👉 이전 Effect Cleanup 👉 새 Effect 실행</p>
</div>

<img src="/images/content/react/appendix-lifecycle/react-appendix-lifecycle-updating-flow.png" alt="Updating 흐름: Props/State 변경 → DOM 업데이트(Re-render) → Cleanup 실행(이전) → Effect 실행(새것)" style="display:block;width:100%;max-width:260px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:260px;white-space:nowrap;">[그림] Updating(변화) 단계의 실행 순서</div>

**⚙️ Unmounting (죽음) 💀**

**"컴포넌트가 화면에서 사라지는 단계입니다."**

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">화면에서 사라짐</div><div class="wda-sdsc">페이지 이동이나 조건부 렌더링으로 인해 제거됩니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">Cleanup 함수 실행</div><div class="wda-sdsc">타이머 해제(<code>clearInterval</code>), 이벤트 리스너 제거(<code>removeEventListener</code>) 등 메모리 누수를 막기 위한 <strong>최종 뒷정리</strong>를 수행합니다.</div></div></div>
</div>

**🔁 흐름 정리**

<div class="wda-callout wda-ci">
  <p><strong>Render(화면 그리기) 👉 Effect(부수 효과) 👉 Cleanup(뒷정리)</strong></p>
  <p>이 순서만 기억하면 됩니다! 특히 <strong>Updating</strong> 과정에서 <strong>'이전 Cleanup → 새 Effect'</strong> 순서로 실행된다는 점을 꼭 기억해 주세요. (청소를 하고 새 물건을 들여놓는 것과 같습니다!)</p>
</div>

---

<h2>2. Mounting : 탄생의 순간</h2>

**⚙️ 실행 단계 (Process)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">1. 함수 본문 실행 (Rendering)</div><div class="wda-fcard-dsc">컴포넌트 내부의 자바스크립트 로직이 위에서부터 아래로 실행됩니다. 최종적으로 JSX를 반환(Return)합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">2. DOM 부착 (Commit)</div><div class="wda-fcard-dsc">리액트가 계산된 결과물을 실제 브라우저 DOM에 끼워 넣습니다. 이때 사용자의 눈에 UI가 보이기 시작합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">3. Effect 실행 (Passive Effect)</div><div class="wda-fcard-dsc">화면이 다 그려진 직후에 <code>useEffect</code>가 실행됩니다. 따라서 API 호출이나 구독 설정 등은 이미 화면이 나온 뒤에 처리됩니다.</div></div>
</div>

**🧪 예시 코드 (Execution Order)**

콘솔이 찍히는 순서를 주목해 주세요!

```jsx
import { useEffect } from 'react';

function UserProfile() {
  // 1. 함수 실행 (Rendering)
  console.log('Rendering...');

  useEffect(() => {
    // 3. 화면에 보여진 후 실행 (Effect)
    console.log('Mounted! (Effect)');
    // API 호출, 구독 설정 등...
  }, []);

  // 2. JSX 반환 -> DOM에 그려짐 (Commit)
  return <div>프로필</div>;
}

export default UserProfile;
```

**🔁 흐름 정리**

<div class="wda-callout wda-ci">
  <p><strong>순서: Rendering... 👉 (화면 표시) 👉 Mounted!</strong></p>
  <p>사용자가 빈 화면을 보지 않도록 <strong>UI를 먼저 보여주고</strong>, 그다음에 <strong>Effect(데이터 가져오기 등)</strong>를 실행하는 것이 리액트의 기본 원칙입니다.</p>
</div>

---

<h2>3. Updating : 변화와 갱신</h2>

**⚙️ 실행 과정 (Process)**

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">변경 감지</div><div class="wda-sdsc"><code>props</code>나 <code>state</code>가 변경되면 업데이트 과정이 시작됩니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">Cleanup (이전 Effect 정리) ⭐️중요⭐️</div><div class="wda-sdsc">새로운 Effect를 실행하기 전에, <strong>직전 렌더링(Old)</strong>에서 생성된 Effect의 뒷정리 함수(<code>return</code> 내부)를 <strong>먼저</strong> 실행합니다. 단, 의존성 배열(<code>deps</code>)에 있는 값이 바뀌었을 때만 수행합니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">새 Effect 실행</div><div class="wda-sdsc">청소가 끝난 후, 새로운 <code>props</code>/<code>state</code>로 업데이트된 <strong>새로운 Effect</strong>를 실행합니다.</div></div></div>
</div>

**🧪 예시 코드 & 실행 순서**

`userId`가 **1에서 2로 바뀔 때** 어떤 순서로 실행되는지 주목해 주세요.

```jsx
useEffect(() => {
  // 3. 새 구독 시작 (New)
  console.log(`구독 시작: ${userId}`);

  return () => {
    // 2. 이전 구독 취소 (Old)
    console.log(`구독 취소: ${userId}`);
  };
}, [userId]);
```

**실행 시나리오 (userId: 1 ➡️ 2)**

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">UI 렌더링</div><div class="wda-sdsc">화면이 <code>userId: 2</code>에 맞춰서 먼저 그려집니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">구독 취소 (Cleanup)</div><div class="wda-sdsc"><code>userId: 1</code>일 때 예약해둔 청소 함수가 실행됩니다. ("구독 취소: 1")</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">구독 시작 (Effect)</div><div class="wda-sdsc"><code>userId: 2</code>에 대한 새로운 로직이 실행됩니다. ("구독 시작: 2")</div></div></div>
</div>

**🔁 흐름 정리**

<div class="wda-callout wda-ci">
  <p><strong>"치우고(Clean) 👉 새로 깝니다(Effect)"</strong></p>
  <p>새로운 가구가 들어오기 전에 헌 가구를 먼저 버리는 것과 같습니다. 항상 <strong>'이전 값 정리(Cleanup 1)'</strong>가 먼저 실행되고, 그다음에 <strong>'새로운 값 적용(Start 2)'</strong>이 일어난다는 순서를 꼭 기억하세요!</p>
</div>

---

<h2>4. Unmounting : 마지막 정리</h2>

**📌 개념 (Concept)**

**"Good Bye, Component! 👋"**
컴포넌트가 더 이상 화면에 필요 없게 되어 사라지는 순간입니다. 이때 우리가 `useEffect`의 `return` 문에 작성해둔 **Cleanup 함수가 마지막으로 실행**됩니다.

**⚠️ 반드시 정리해야 할 것들 (Checklist)**

그냥 두면 계속 살아남아 문제를 일으키는 녀석들입니다.

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">⏱️ 타이머</div><div class="wda-fcard-dsc"><code>setInterval</code>, <code>setTimeout</code></div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">👂 이벤트 리스너</div><div class="wda-fcard-dsc"><code>window.addEventListener</code> (스크롤, 리사이즈 등)</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">🌐 네트워크</div><div class="wda-fcard-dsc">WebSocket 연결, 실시간 구독</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">📚 라이브러리</div><div class="wda-fcard-dsc">외부 라이브러리 인스턴스 (지도, 차트 등)</div></div>
</div>

**⚠️ 정리하지 않으면? (Consequences)**

<div class="wda-callout wda-cw">
  <p><strong>"메모리 누수(Memory Leak) 발생! 🚨"</strong></p>
  <p>컴포넌트는 화면에서 사라졌는데, 타이머는 뒤에서 계속 돌아가고 있거나 이벤트 리스너가 계속 클릭을 감지하려고 합니다.<br>정리하지 않은 타이머나 이벤트 리스너는 불필요한 작업을 계속 실행하게 만들고, 성능 저하나 예상치 못한 상태 업데이트의 원인이 될 수 있습니다.</p>
</div>

---

<h2>5. Class vs Hooks 비교</h2>

**🆚 코드 대응표 (Mapping)**

과거 클래스 컴포넌트의 생명주기 메서드 3개가 `useEffect` 하나로 통합되었습니다.

<div class="wda-callout wda-cw">
  <p><code>useEffect</code>는 클래스 컴포넌트의 <code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>와 비슷한 상황을 처리할 수 있습니다.<br>다만 1:1로 완전히 같은 것은 아니며, Hooks에서는 '언제 실행되는가'보다 '어떤 값이 바뀌었을 때 실행되는가'를 기준으로 생각합니다.</p>
</div>

| 구분 | Legacy (Class) 👴 | Modern (Hooks) 👶 | 설명 |
| --- | --- | --- | --- |
| **마운트** | `componentDidMount` | `useEffect(..., [])` | 의존성 배열을 **빈 배열**로 두면, 처음에 딱 **1회만** 실행됩니다. |
| **업데이트** | `componentDidUpdate` | `useEffect(..., [deps])` | **deps(의존성 배열)**에 있는 값이 변할 때마다 실행됩니다. |
| **언마운트** | `componentWillUnmount` | `return () => { ... }` | `useEffect` 안에서 함수를 **반환(Return)**하면, 그 함수가 뒷정리(Cleanup) 역할을 합니다. |

**🆚 핵심 철학의 변화 (Paradigm Shift)**

이 부분이 가장 중요합니다! 단순히 문법만 바뀐 게 아니라 **생각하는 방식**이 바뀌었습니다.

<div class="wda-callout wda-ci">
  <p><strong>Class는 "시점(When)"</strong>을 기준으로 코드를 쪼갭니다.<br>
  <strong>Hooks는 "무엇(What)"</strong>을 관찰할지를 기준으로 코드를 뭉칩니다.</p>
</div>

- **Class**: "컴포넌트가 **켜질 때** 이거 하고, **꺼질 때** 저거 해." (시간 순서 중심)
- **Hooks**: "**userId가 바뀌면** 데이터를 가져오고 연결을 끊어." (데이터 의존성 중심)

덕분에 관련된 로직(구독 시작과 해제)을 **한곳에 모아서 관리**할 수 있게 되어 코드가 훨씬 깔끔해졌습니다.

---

<h2>6. 주의사항 : Strict Mode</h2>

**⚠️ 문제 상황 (Issue)**

**"콘솔이 두 번 찍혀요! 😭"**
`useEffect` 안에 `console.log`를 한 번만 썼는데, 브라우저 콘솔을 보면 **똑같은 로그가 두 번 연속**으로 찍혀있는 현상을 발견하게 됩니다.

**⚠️ 원인 (Cause)**

**"React가 고의로 두 번 실행시킨 것입니다."**
개발 환경(Development Mode)에서 리액트는 컴포넌트의 **순수성(Purity)** 을 보장하고, **메모리 누수** 같은 잠재적인 버그를 미리 찾기 위해 일부러 Effect를 **두 번** 실행합니다.

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">Mount</div><div class="wda-sdsc">컴포넌트 생성</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">Unmount (Cleanup)</div><div class="wda-sdsc">바로 제거 (뒷정리가 잘 되는지 테스트)</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">Mount</div><div class="wda-sdsc">다시 생성</div></div></div>
</div>

<div class="wda-callout wda-cw">
  <p>개발 모드의 Strict Mode에서는 React가 일부 컴포넌트를 의도적으로 한 번 더 마운트/언마운트하는 흐름을 시뮬레이션할 수 있습니다.<br>이 과정에서 <code>useEffect</code>가 두 번 실행된 것처럼 보일 수 있습니다.<br>이는 cleanup이 제대로 작성되었는지 확인하기 위한 개발용 검사이며, 프로덕션 빌드에서는 동일하게 반복되지 않습니다.</p>
  <p>다만 이 과정에서 이벤트 리스너가 중복 등록되거나 타이머가 계속 남는다면, Strict Mode가 문제가 아니라 cleanup 코드가 빠진 것이므로 cleanup을 추가해야 합니다.</p>
</div>

**💡 해결책 (Solution)**

**"정상적인 동작이니 안심하세요."**
이 현상은 **오직 개발 모드(Dev)에서만** 발생하며, 실제 사용자에게 배포하는 **프로덕션(Production) 빌드에서는 한 번만 실행**됩니다.  
코드를 고치려고 애쓰지 않으셔도 됩니다.

**💡 왜 이렇게 하나요? (Purpose)**

**"Cleanup 테스트를 위해서입니다."**

<div class="wda-callout wda-ci">
  <p>만약 <code>useEffect</code>에서 구독을 시작했는데 <code>Cleanup</code> 함수에서 구독 해제를 제대로 안 했다면, 이 <strong>'빠른 껐다 켜기(Mount -&gt; Unmount -&gt; Mount)'</strong> 테스트 과정에서 메모리 누수가 발생하거나 에러가 터지게 됩니다.<br>즉, <strong>"뒷정리 잘했는지 감시하는 기능"</strong>이라고 보시면 됩니다.</p>
</div>

---

<h2>7. ✅ 핵심 요약</h2>

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>컴포넌트 생명주기는 <strong>Mount(탄생) → Update(변화) → Unmount(죽음)</strong> 3단계로 나뉜다.</li>
    <li>Mount는 <code>useEffect(..., [])</code>로 처음 <strong>1회만</strong> 실행된다.</li>
    <li>Update는 <code>useEffect(..., [dep])</code>로 <strong>dep 값이 바뀔 때마다</strong> 실행된다.</li>
    <li>Unmount는 useEffect 안에서 <code>return () =&gt; { ... }</code>로 반환한 <strong>Cleanup 함수</strong>가 처리한다.</li>
    <li>실행 순서는 <strong>Render(화면 그리기) → Effect(부수 효과) → Cleanup(뒷정리)</strong>이며, Update 시엔 <strong>'이전 Cleanup → 새 Effect'</strong> 순서로 실행된다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: Render(렌더)는 화면에 바로 그려지는 단계다?</div>
    <div class="wda-mistake-right">정답: Render는 무엇을 보여줄지 <strong>계산</strong>하는 단계이고, 실제 DOM 반영은 <strong>Commit</strong> 단계에서 일어나며 Effect는 그 이후에 실행된다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: useEffect는 클래스의 생명주기 메서드와 1:1로 완전히 같다?</div>
    <div class="wda-mistake-right">정답: 비슷한 상황을 처리할 수 있지만 완전히 같지 않으며, Hooks는 <strong>'언제(When)'</strong>가 아니라 <strong>'어떤 값이 바뀌었을 때(What)'</strong>를 기준으로 생각한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 개발 모드에서 useEffect가 두 번 실행되는 건 버그다?</div>
    <div class="wda-mistake-right">정답: Strict Mode가 Cleanup이 제대로 작성됐는지 검증하려고 <strong>의도적으로 Mount→Unmount→Mount</strong>를 시뮬레이션하는 것이며, 프로덕션 빌드에서는 한 번만 실행된다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 컴포넌트가 사라지기 직전에 타이머를 정리하려면 별도의 훅이 필요하다?</div>
    <div class="wda-mistake-right">정답: useEffect 내부에서 함수를 <strong>return</strong>하면 그 함수가 Cleanup 역할을 하며, 언마운트 시 자동으로 호출된다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 전체 흐름</div>
    <div class="wda-formula-block-body"><code>Render → Effect → Cleanup</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · Update 순서</div>
    <div class="wda-formula-block-body"><code>이전 Cleanup → 새 Effect</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 코드 매핑</div>
    <div class="wda-formula-block-body"><code>[] = Mount 1회</code><br><code>[dep] = Update</code><br><code>return = Unmount</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">컴포넌트 생명주기 3단계는?</div>
    <div class="wda-flip-back">Mount(탄생) → Update(변화) → Unmount(죽음) 순서로 진행된다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">컴포넌트가 화면에서 사라지기 직전에 타이머를 해제하려면?</div>
    <div class="wda-flip-back">useEffect 안에서 Cleanup 함수를 반환(return)해야 한다. 이 함수가 언마운트 시 자동으로 호출된다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Render와 Commit의 차이는?</div>
    <div class="wda-flip-back">Render는 화면에 무엇을 보여줄지 계산하는 단계이고, Commit은 그 결과를 실제 DOM에 반영하는 단계다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Update 시 Effect 실행 순서는?</div>
    <div class="wda-flip-back">새 화면 반영 → 이전 Effect의 Cleanup 실행 → 새 Effect 실행 순서다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Class와 Hooks의 사고방식 차이는?</div>
    <div class="wda-flip-back">Class는 '시점(When)'을 기준으로 코드를 나누고, Hooks는 '무엇(What)'을 관찰할지를 기준으로 코드를 뭉친다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Strict Mode에서 useEffect가 두 번 실행되는 이유는?</div>
    <div class="wda-flip-back">Cleanup이 제대로 작성됐는지 검증하기 위해 React가 의도적으로 Mount→Unmount→Mount를 시뮬레이션하는 개발 전용 기능이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">useEffect의 의존성 배열 []와 [dep]의 차이는?</div>
    <div class="wda-flip-back">[]는 마운트 시 1회만 실행되고, [dep]는 dep 값이 변경될 때마다 실행된다.</div>
  </div>
</div>
