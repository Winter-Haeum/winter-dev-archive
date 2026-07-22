---
title: "3-2 useEffect로 사이드 이펙트 처리하기"
status: "completed"
description: "순수 함수와 부수 효과의 차이, 의존성 배열에 따른 실행 시점, Cleanup 함수, 데이터 페칭·이벤트 리스너·타이머 등 실무 패턴까지 useEffect를 정리한다."
category: "React"
section: "Hooks"
tags:
  - react
  - hooks
  - useeffect
  - side-effect
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
.wda-fcard-pro{border-left:3px solid rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
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
</style>

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>Side Effect 이해</strong> — 순수 함수와 부수 효과의 차이를 이해하고 설명합니다<br>
  • <strong>useEffect 문법</strong> — 의존성 배열을 활용하여 실행 시점을 제어합니다<br>
  • <strong>Cleanup 함수</strong> — 메모리 누수를 방지하기 위한 정리 작업을 수행합니다<br>
  • <strong>실무 패턴 활용</strong> — 데이터 페칭, 타이머 등 다양한 실무 사례를 익힙니다
</div>

---

<h2>1. Side Effect란?</h2>

**📌 순수 함수 (Pure Function)**

입력값(매개변수)이 같으면 **항상 똑같은 결과값**을 반환하며, 함수 외부의 상태를 변경하지 않는 함수입니다.

```javascript
// 순수 함수 예시
function add(a, b) {
  // 오직 입력값 a, b만 사용하여 결과를 만듦
  return a + b;
}

// add(1, 2)는 언제나 3을 반환함 (예측 가능)
```

**📌 Side Effect (부수 효과)**

함수가 실행되면서 **함수 외부의 상태를 변경**하거나, 외부와 상호작용하여 **결과를 예측할 수 없는** 경우입니다.

```javascript
let count = 0;

// Side Effect가 있는 함수 예시
function addCount(num) {
  // 함수 바깥에 있는 count 변수를 변경함 (부수 효과)
  count += num;
}

// 호출할 때마다 count 값이 달라지므로 결과를 예측하기 어려움
addCount(1);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>React 컴포넌트는 렌더링 과정에서 '순수'해야 합니다.</strong></p>
  <p>React는 컴포넌트가 같은 Props를 받으면 항상 같은 화면(JSX)을 그려낼 것이라고 기대합니다.<br>만약 렌더링 도중에 <code>count</code> 같은 외부 변수를 마음대로 바꾸거나 서버에 데이터를 요청하면, 화면이 꼬이거나 무한 루프에 빠질 수 있습니다.<br>그래서 React에서는 이런 Side Effect들을 <strong>useEffect</strong>라는 별도의 안전한 창고에 격리해서 처리합니다.</p>
</div>

---

<h2>2. useEffect 기본 문법</h2>

**📝 기본 구조**

```jsx
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // 여기에 side effect 작성 (API 호출, 타이머 등)
    console.log('컴포넌트가 렌더링됨!');
  }, []); // <- 의존성 배열 (Dependency Array)

  return <div>Hello</div>;
}
```

**📌 핵심 구성 요소**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">첫 번째 인자 (콜백 함수)</div><div class="wda-fcard-dsc">실행할 구체적인 코드를 작성합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">두 번째 인자 (의존성 배열)</div><div class="wda-fcard-dsc">이 배열 안의 값이 변할 때만 효과를 재실행합니다. (언제 실행할지 결정)</div></div>
</div>

**⚙️ 실행 시점**

**렌더링 완료 후**: `useEffect`는 렌더링 결과가 화면에 반영된 뒤 실행됩니다. 따라서 API 요청, 타이머, 이벤트 리스너 등록처럼 렌더링 자체와 분리해야 하는 작업을 처리할 때 사용합니다.

다만 `useEffect` 안에서도 너무 무거운 동기 작업을 오래 실행하면 브라우저 반응성에 영향을 줄 수 있으므로 주의해야 합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>의존성 배열(Dependency Array)의 비밀</strong></p>
  <p>두 번째 인자인 배열(<code>[]</code>)은 <code>useEffect</code>의 <strong>제동 장치</strong>입니다.</p>
  <ul>
    <li><code>[]</code> (빈 배열): "처음 딱 한 번만 실행해!" (초기화 로직)</li>
    <li><code>[count]</code> (값이 있음): "처음 실행하고, <code>count</code>가 바뀔 때마다 또 실행해!"</li>
    <li>(생략): "렌더링할 때마다 매번 실행해!" (위험: 무한 루프 주의)</li>
  </ul>
</div>

---

<h2>3. 왜 useEffect가 필요한가요?</h2>

React 컴포넌트의 주 업무는 "화면을 그리는 것(UI 렌더링)"입니다. 데이터 요청이나 타이머 같은 무거운 작업(Side Effect)이 렌더링 과정을 방해하지 않도록 하기 위해 `useEffect`가 필요합니다.

**💡 화면이 멈추는 것을 방지 (Non-blocking)**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">직접 작성 시 (Bad)</div><div class="wda-fcard-dsc">데이터 요청 같은 Side Effect를 렌더링 과정에 직접 섞으면, 렌더링이 반복될 때 요청도 반복되거나 상태 업데이트와 맞물려 무한 루프가 생길 수 있습니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">useEffect 사용 시 (Good)</div><div class="wda-fcard-dsc"><code>useEffect</code>는 이런 작업을 렌더링 이후의 정해진 시점에 실행하도록 분리해 줍니다.<br>일단 화면(UI)을 먼저 보여주고, 데이터 요청은 그 이후에 처리합니다.</div></div>
</div>

**💡 실행 시점 제어 (Control Timing)**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">직접 작성 시 (Bad)</div><div class="wda-fcard-dsc">컴포넌트가 리렌더링 될 때마다 API를 계속 호출합니다.<br>서버에 과부하가 걸리고 비용이 발생합니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">useEffect 사용 시 (Good)</div><div class="wda-fcard-dsc">"처음 렌더링 될 때 딱 한 번만" 실행하거나, "특정 값이 바뀔 때만" 실행하도록 똑똑하게 제어할 수 있습니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>식당 주문에 비유하자면?</strong></p>
  <p><strong>useEffect 없이</strong>: 요리사가 요리가 다 끝날 때까지 손님을 문밖에서 기다리게 하고, 요리가 완성되면 그제야 자리에 앉히는 것과 같습니다.</p>
  <p><strong>useEffect 사용</strong>: 일단 손님을 자리에 앉히고 물부터 줍니다(렌더링). 그 후 주방에서 요리를 시작해서 완성되면 서빙(Side Effect 처리)하는 것과 같습니다.</p>
</div>

---

<h2>4. React 컴포넌트의 생애 주기 (Lifecycle)</h2>

| 단계 | 의미 | 주요 동작 | useEffect 코드 |
| --- | --- | --- | --- |
| **마운트**(Mount) | 화면에 처음 나타남 | 초기화 · DOM 객체 생성 | `useEffect(() => { ... }, [])` (빈 배열) |
| **업데이트**(Update) | 상태가 변함 | 재렌더링 · props/state 변경 | `useEffect(() => { ... }, [dep])` (의존성 배열) |
| **언마운트**(Unmount) | 화면에서 사라짐 | 정리(Cleanup) · 페이지 이동/삭제 | `return () => { ... }` (Clean-up 함수) |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>사람의 인생과 똑같습니다.</strong></p>
  <p>👶 <strong>태어남 (Mount)</strong> : 세상에 처음 나와서 이름을 등록(초기화)합니다.<br>
  🧑 <strong>성장함 (Update)</strong> : 키가 크거나 옷을 갈아입으며(State 변경) 모습이 바뀝니다.<br>
  👻 <strong>떠남 (Unmount)</strong> : 살던 집을 깨끗이 비우고(정리 작업) 떠납니다.</p>
  <p>이 흐름을 이해해야 "API는 언제 호출하고, 타이머는 언제 꺼야 하는지" 정확한 타이밍을 잡을 수 있습니다.</p>
</div>

---

<h2>5. 의존성 배열 1: 빈 배열 []</h2>

**⚙️ 동작 원리: "딱 한 번만 실행"**

`useEffect`의 두 번째 인자로 빈 배열(`[]`)을 전달하면, 이 코드는 컴포넌트가 **처음 화면에 나타날 때(마운트) 단 한 번만 실행**되고, 그 이후에는 절대 다시 실행되지 않습니다.

**📝 예제 코드**

```jsx
useEffect(() => {
  console.log('환영합니다!');
  
  // API 호출 등 초기화 작업
  fetchUser();
}, []); // <-- 의존성 배열이 비어있음
```

**⚙️ 실행 흐름**

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">컴포넌트 렌더링</div><div class="wda-sdsc">화면이 그려짐</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">Effect 실행!</div><div class="wda-sdsc"><code>useEffect</code> 내부 코드 실행</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">이후 재렌더링 시</div><div class="wda-sdsc">의존성 배열을 확인해보니 변한 게 없음 → 무시됨 (실행 X)</div></div></div>
</div>

<img src="/images/content/react/3-2/react-3-2-mount-once-flow.png" alt="빈 의존성 배열 실행 흐름: 컴포넌트 렌더링 → Effect 실행! → 이후 재렌더링 시 무시됨" style="display:block;width:100%;max-width:200px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:200px;white-space:nowrap;">[그림] 빈 배열 의존성 — 마운트 시 1회만 실행</div>

**💡 언제 쓰나요? (Best Practice)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">API 데이터 초기 로딩</div><div class="wda-fcard-dsc">페이지 들어오자마자 서버에서 데이터 가져올 때</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">라이브러리 연동</div><div class="wda-fcard-dsc">지도(Map), 차트(Chart) 등 외부 라이브러리를 처음 한 번만 초기화할 때</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">전역 이벤트 리스너 등록</div><div class="wda-fcard-dsc"><code>window.addEventListener</code> 등을 한 번만 붙여야 할 때</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"지켜볼 게 없다"는 뜻입니다.</strong></p>
  <p>React에게 "이 Effect는 어떤 변수에도 의존하지 않아. 그러니까 처음 만들 때 딱 한 번만 실행하고 신경 꺼도 돼!"라고 말해주는 것과 같습니다.<br>그래서 초기화(Initialization) 로직에 가장 많이 사용되는 패턴입니다.</p>
</div>

---

<h2>6. 의존성 배열 2: 값이 있을 때 [deps]</h2>

**⚙️ 동작 원리: "값이 변하면 실행"**

`useEffect`의 의존성 배열에 변수(예: `count`)를 넣으면, **"처음 렌더링 될 때"** 그리고 **"그 변수의 값이 바뀔 때마다"** 이펙트가 실행됩니다.

**📝 예제 코드**

```jsx
useEffect(() => {
  console.log('count 변경됨:', count);

  // 유효성 검사 등
  if (count > 10) alert('경고');

}, [count]); // <-- count를 지켜봄 (주시 대상)
```

**🆚 실행 흐름 비교**

| 렌더링 회차 | `count` 값 | 동작 여부 | 비고 |
| --- | --- | --- | --- |
| **Render 1** | `0` | Effect 실행! | 초기 렌더링 (Mount) |
| **Render 2** | `0` | 건너뜀 | 값이 이전과 동일함 |
| **Render 3** | `1` | Effect 실행! | `0` → `1`로 변경됨 |

<img src="/images/content/react/3-2/react-3-2-dependency-render-sequence.png" alt="렌더링 회차별 count 값과 Effect 실행 여부: Render 1(count 0, Effect 실행 초기) → Render 2(count 0, 건너뜀 값 동일) → Render 3(count 1, Effect 실행 변경됨)" style="display:block;width:100%;max-width:380px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:380px;white-space:nowrap;">[그림] 의존성 값 변경에 따른 렌더링 회차별 실행 여부</div>

**🆚 비교 원리 (Object.is)**

React는 렌더링 전/후의 의존성 값을 **`Object.is()`** 메서드를 사용하여 얕은 비교(Shallow Compare)를 수행합니다. 이 결과가 `false`(다르다)일 때만 Effect를 다시 실행하여 효율성을 높입니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"감시자(Watcher)를 붙이는 것과 같습니다."</strong></p>
  <p>빈 배열(<code>[]</code>)이 "아무것도 신경 쓰지 마"라면, 값이 있는 배열(<code>[count]</code>)은 "<strong>count가 변하는지 잘 감시하고 있다가, 변하면 알려줘!</strong>"라고 명령하는 것입니다.<br>주로 <strong>검색어 필터링</strong>, <strong>알림 발송</strong>, <strong>특정 데이터 변경 시 자동 저장</strong> 기능을 구현할 때 사용합니다.</p>
</div>

---

<h2>7. 의존성 배열 3: 생략 시 (주의!)</h2>

**⚙️ 동작 원리: "매 렌더링마다 실행"**

`useEffect`의 두 번째 인자인 배열을 아예 생략하면, 이 코드는 **컴포넌트가 렌더링 될 때마다 무조건 실행**됩니다. 즉, 화면을 고칠 때마다 매번 작동합니다.

**⚠️ 위험한 이유: 무한 루프 (Infinite Loop)**

가장 치명적인 문제는 **무한 루프**에 빠질 수 있다는 점입니다.

```jsx
useEffect(() => {
  console.log('난 매번 실행돼');
  
  // ⚠️ 만약 여기서 state를 변경한다면?
  setCount(count + 1); 
  
  // 1. Effect 실행 -> state 변경
  // 2. state 변경 -> 리렌더링 발생
  // 3. 리렌더링 -> Effect 또 실행
  // 4. (무한 반복...) 💥
}); // <-- 의존성 배열 없음
```

**💡 권장 사항**

<div class="wda-callout wda-cw">
  <p><strong>의존성 배열을 생략하면 매 렌더링마다 Effect가 실행됩니다.</strong><br>React를 사용하는 주된 이유 중 하나는 '필요한 부분만 업데이트하는 최적화'인데, 의존성 배열을 생략하면 그 장점이 사라집니다.</p>
  <p><strong>의도적으로 매번 실행해야 하는 경우가 아니라면</strong>, 빈 배열 <code>[]</code> 또는 필요한 의존성 배열을 명시하는 것이 안전합니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"브레이크 없는 자동차와 같습니다."</strong></p>
  <p>의존성 배열은 <code>useEffect</code>가 언제 멈추고 언제 달릴지 알려주는 브레이크/액셀 페달입니다.<br>이걸 떼버리면 컴포넌트는 멈추지 않고 계속 달리기 때문에(매번 실행), 결국 과부하가 걸려 뻗어버릴 수 있습니다.<br>특별한 경우가 아니면 <strong>항상 배열을 챙겨주세요.</strong></p>
</div>

---

<h2>8. 💻 미니 실습 : 실행 시점 예측</h2>

**🎯 Mission**

다음 두 가지 `useEffect` 코드가 **언제 실행되는지** 예측해 보세요.

**🧪 Quiz Code**

**케이스 1**

```jsx
useEffect(() => {
  console.log("Hello");
}, []); // 의존성 배열이 비어있음
```

**케이스 2**

```jsx
useEffect(() => {
  console.log("Updated");
}, [count]); // 의존성 배열에 count가 있음
```

**✅ 정답 확인**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">케이스 1 정답: 마운트 시 1회만 실행</div><div class="wda-fcard-dsc">화면이 처음 그려진 직후 딱 한 번만 <code>Hello</code>가 출력되고, 그 뒤로는 절대 실행되지 않습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">케이스 2 정답: 마운트 시 + count가 변할 때마다 실행</div><div class="wda-fcard-dsc">화면이 처음 그려질 때 <code>Updated</code>가 출력되고, 이후 <code>count</code> 값이 바뀔 때마다 계속 출력됩니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>1. <strong>화살표 함수</strong>: <code>() &gt;</code> 가 아니라 <code>() =&gt;</code> 입니다.</p>
  <p>2. <strong>의존성 배열</strong>: 두 번째 인자는 반드시 <strong>배열(<code>[]</code>)</strong> 형태여야 합니다.<br>숫자 <code>0</code>을 넣으면 에러가 발생하거나 의도대로 동작하지 않습니다.<br>빈 배열은 <code>[]</code>로 작성해야 합니다.</p>
</div>

---

<h2>9. 마운트 시 실행 (빈 배열)</h2>

**📌 개념**

**빈 배열 `[]` = 처음 나타날 때 1번만 실행**
컴포넌트가 화면에 처음 나타나는 시점(Mount)에 딱 한 번만 코드를 실행하고 싶다면, 의존성 배열을 비워두면 됩니다.

**📝 예제 코드 : 데이터 페칭**

```jsx
import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 컴포넌트가 화면에 나타날 때 1번 실행
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []); // ⬅ 빈 배열: 마운트 시 1회만

  if (!user) return <p>로딩 중...</p>;

  return <h1>안녕하세요, {user.name}님!</h1>;
}

export default UserProfile;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>초기화 작업 전용</strong></p>
  <p>위 코드처럼 API에서 사용자 정보를 가져오거나, 초기 설정을 해야 할 때 가장 많이 사용하는 패턴입니다.<br>배열을 비워두지 않고 생략해버리면 데이터 요청을 무한 반복하게 되므로 주의해야 합니다.</p>
</div>

---

<h2>10. 특정 값 변경 시 실행</h2>

**📌 개념**

**`[dep]` = 의존성 값이 변할 때마다 실행**
`useEffect`의 두 번째 인자인 배열에 변수(예: `query`)를 넣으면, 컴포넌트가 **처음 나타날 때**와 그 **변수의 값이 바뀔 때마다** 코드가 다시 실행됩니다.

**📝 예제 코드 : 검색 결과 조회**

```jsx
import { useState, useEffect } from 'react';

function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // 1. query가 변경될 때마다 실행됨
    if (query) {
      fetch(`/api/search?q=${query}`)
        .then(res => res.json())
        .then(data => setResults(data));
    }
  }, [query]); // ⬅ query가 변경되면 다시 실행

  return (
    <ul>
      {results.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  );
}

export default SearchResults;
```

**⚙️ 핵심 동작 원리**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">감시 대상 지정</div><div class="wda-fcard-dsc"><code>[query]</code>라고 적으면 React에게 "query 값이 바뀌는지 잘 지켜봐줘"라고 요청하는 것입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">조건부 실행</div><div class="wda-fcard-dsc"><code>query</code> 값이 <code>apple</code>에서 <code>banana</code>로 바뀌면 Effect가 실행되어 새로운 검색 결과를 가져옵니다. 값이 그대로라면 실행되지 않습니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>불필요한 실행 방지</strong></p>
  <p>만약 의존성 배열을 생략해버리면, 검색어(<code>query</code>)가 바뀌지 않았는데도 화면을 클릭하거나 다른 State가 변할 때마다 계속 API를 호출하게 됩니다.<br>정확히 <strong>"내가 원하는 데이터가 변했을 때만"</strong> 서버에 요청을 보내기 위해 이 패턴을 꼭 사용해야 합니다.</p>
</div>

---

<h2>11. Cleanup 함수 (뒷정리)</h2>

**📌 개념**

**`return 함수` = 정리 작업 (타이머 해제, 이벤트 제거 등)**
`useEffect` 안에서 어떤 함수를 **`return` (반환)** 하면, 그 함수는 컴포넌트가 **화면에서 사라질 때(Unmount)** 실행됩니다.

**Cleanup은 Unmount 때만 실행되는 것이 아닙니다.** 의존성 배열의 값이 바뀌어 **다음 Effect가 다시 실행되기 직전에도** 먼저 실행됩니다. 즉 "완전히 사라질 때" 한 번만이 아니라, "이전 Effect를 정리하고 새 Effect를 시작하기 직전"마다 매번 호출된다고 이해하는 것이 정확합니다. (자세한 실행 순서는 부록 문서 "리액트 라이프사이클 — Updating" 부분에서 다룹니다.)

**📝 예제 코드 : 타이머 정리**

```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. 타이머 시작
    const id = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // 2. Cleanup 함수 (뒷정리)
    // 컴포넌트가 사라질 때(Unmount) 실행됨
    return () => {
      clearInterval(id); // 타이머 멈춤
      console.log('타이머 정리됨!');
    };
  }, []);

  return <p>{seconds}초</p>;
}

export default Timer;
```

**💡 왜 필요한가요?**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">메모리 누수 방지</div><div class="wda-fcard-dsc">컴포넌트는 사라졌는데 타이머가 계속 돌아가면 메모리를 잡아먹고 에러를 발생시킵니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">충돌 방지</div><div class="wda-fcard-dsc">키보드 이벤트 등을 제거하지 않으면 다른 페이지에서도 이벤트가 계속 발생할 수 있습니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"머문 자리는 아름답게"</strong></p>
  <p>우리가 식당에서 나오고 나면 종업원이 테이블을 치우듯이, 컴포넌트도 사라질 때(Unmount) 자신이 어질러 놓은 것들(타이머, 이벤트 리스너 등)을 치우고 가야 합니다.<br>이 '치우는 작업'을 담당하는 것이 바로 <strong>Cleanup 함수</strong>입니다.</p>
</div>

---

<h2>12. 데이터 페칭 패턴 (Data Fetching)</h2>

**📝 예제 코드 : 게시글 조회**

```jsx
import { useState, useEffect } from 'react';

function PostDetail({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. 요청 시작 전 로딩 상태 켜기
    setLoading(true);

    fetch(`/api/posts/${postId}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        // 2. 데이터 도착 후 로딩 끄기
        setLoading(false);
      });
      
  }, [postId]); // ⬅ postId가 바뀌면 다시 실행

  // 3. 로딩 중일 때 보여줄 화면
  if (loading) return <p>로딩 중...</p>;
  
  return <article>{post.title}</article>;
}

export default PostDetail;
```

**📌 핵심 포인트**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">로딩 상태 관리 (loading)</div><div class="wda-fcard-dsc">데이터를 불러오는 동안 화면이 텅 비어있지 않도록, <code>loading</code> state를 두어 사용자에게 진행 상황을 알려줍니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">의존성 배열 활용 ([postId])</div><div class="wda-fcard-dsc">사용자가 다른 글을 클릭해서 <code>postId</code>가 바뀌면, <code>useEffect</code>가 이를 감지하고 자동으로 새로운 데이터를 서버에 요청합니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"사용자 경험(UX)을 위한 필수 패턴입니다."</strong></p>
  <p>네트워크 요청은 우리가 생각하는 것보다 느릴 수 있습니다. 로딩 화면 없이 멈춰있는 화면을 보여주는 것보다, "데이터를 불러오는 중입니다"라고 알려주는 것이 훨씬 좋은 앱입니다.<br>또한, <code>postId</code>가 바뀔 때마다 자동으로 데이터를 갱신해주므로, 개발자가 일일이 "새로고침" 로직을 짤 필요가 없습니다.</p>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><strong>실무에서는 조금 더 신경 써야 합니다.</strong></p>
  <p>위 예제는 개념을 익히기 위한 기초 버전입니다. 실제 서비스 코드에서는 아래 상황들을 함께 고려해야 합니다.</p>
  <ul>
    <li><strong>요청 실패 처리</strong> — <code>.catch()</code>나 <code>try/catch</code>로 에러를 잡지 않으면, 네트워크 오류나 서버 에러가 발생했을 때 화면이 계속 "로딩 중..." 상태에 머무르게 됩니다.</li>
    <li><strong>loading false 처리 보장</strong> — 성공 시에만 <code>setLoading(false)</code>를 호출하면, 실패한 경우 로딩 상태가 영원히 꺼지지 않습니다. 성공/실패와 상관없이 로딩을 꺼주는 처리가 필요합니다.</li>
    <li><strong>컴포넌트 언마운트 후 setState 방지</strong> — 요청 응답이 오기 전에 사용자가 페이지를 이동(언마운트)하면, 이미 사라진 컴포넌트에 <code>setPost</code>/<code>setLoading</code>을 호출하게 되어 경고나 메모리 누수의 원인이 될 수 있습니다.</li>
    <li><strong>AbortController를 이용한 요청 취소</strong> — <code>postId</code>가 빠르게 여러 번 바뀌면 이전 요청들이 뒤늦게 도착해 최신 데이터를 덮어쓸 수 있습니다. <code>AbortController</code>로 이전 요청을 취소하면 이런 경쟁 상태(race condition)를 막을 수 있습니다.</li>
  </ul>
  <p>이 내용들은 위 예제 코드의 의미를 바꾸는 것이 아니라, 실무에 적용할 때 추가로 고려해야 할 안전장치입니다.</p>
</div>

---

<h2>13. 이벤트 리스너 패턴</h2>

**📝 예제 코드 : 창 크기 감지**

```jsx
import { useState, useEffect } from 'react';

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 1. 이벤트 핸들러 함수 정의
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // 2. 이벤트 등록 (구독)
    window.addEventListener('resize', handleResize);

    // 3. Cleanup: 이벤트 제거 (구독 취소)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // ⬅ 빈 배열: 컴포넌트 마운트 시 1회만 등록

  return <p>창 너비: {width}px</p>;
}

export default WindowSize;
```

**📌 핵심 포인트 : 짝꿍(Pair) 맞추기**

<div class="wda-callout wda-cw">
  <p><strong>등록(add)했으면 반드시 제거(remove)해야 합니다.</strong></p>
  <p><code>addEventListener</code>: 컴포넌트가 나타날 때 브라우저에게 "창 크기 바뀌면 알려줘"라고 등록합니다.<br>
  <code>removeEventListener</code>: 컴포넌트가 사라질 때 "이제 그만 알려줘도 돼"라고 해제합니다. 이 부분이 없으면 컴포넌트가 사라져도 계속 메모리를 차지하고 작동하려 해서 에러가 발생합니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"구독과 해지"</strong></p>
  <p>유튜브 채널을 구독(<code>add</code>)했다가 더 이상 안 볼 때는 구독 취소(<code>remove</code>)를 해야 알림이 오지 않는 것과 같습니다.<br><code>scroll</code>, <code>resize</code>, <code>keydown</code> 같은 전역 이벤트를 다룰 때는 반드시 이 <strong>Cleanup 함수</strong>를 통해 깔끔하게 뒷정리를 해줘야 앱이 느려지지 않습니다.</p>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><strong>SSR(서버 사이드 렌더링) 환경 주의</strong></p>
  <p>이 예제는 브라우저 환경 기준입니다.<br>Next.js 같은 SSR 환경에서는 서버에 <code>window</code> 객체가 없기 때문에, <code>typeof window !== 'undefined'</code> 확인이 필요할 수 있습니다.</p>
</div>

---

<h2>14. 타이머 패턴</h2>

**📝 예제 코드 : 카운트다운**

```jsx
import { useState, useEffect } from 'react';

function Countdown({ seconds }) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    // 1. 종료 조건: 0초면 타이머를 시작하지 않음 (재귀 중단)
    if (remaining <= 0) return;

    // 2. 1초 뒤에 상태를 1 줄이는 타이머 예약
    const id = setTimeout(() => {
      setRemaining(r => r - 1);
    }, 1000);

    // 3. Cleanup: 타이머 취소 (중복 실행 방지)
    return () => clearTimeout(id);
    
  }, [remaining]); // ⬅ remaining이 변할 때마다 새로운 타이머 설정

  return <p>{remaining > 0 ? `${remaining}초 남음` : '완료!'}</p>;
}

export default Countdown;
```

**⚙️ 핵심 동작 원리 (체인 반응)**

이 코드는 `setInterval` 대신 **`setTimeout`과 `useEffect`의 의존성 배열**을 이용해 반복 효과를 냅니다.

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">실행</div><div class="wda-sdsc"><code>useEffect</code> 실행 → <code>setTimeout</code> 등록</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">대기</div><div class="wda-sdsc">1초 후 <code>setRemaining</code> 실행 → State 변경</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">재렌더링</div><div class="wda-sdsc">State가 변했으므로 컴포넌트 다시 그려짐</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">재실행</div><div class="wda-sdsc">의존성(<code>remaining</code>)이 변했으므로 <code>useEffect</code>가 다시 실행됨 → 다시 1초 대기 (반복)</div></div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>왜 setInterval을 안 썼나요?</strong></p>
  <p><code>setInterval</code>은 "무조건 1초마다" 실행하려고 하지만, 위 패턴(<code>setTimeout</code> + 재귀)은 "화면이 그려지고 나서 1초 뒤"에 실행합니다.<br>React의 렌더링 주기에 더 자연스럽게 맞춰지며, 타이머가 꼬이는 문제를 예방하기 쉬운 고급 패턴입니다.<br><code>clearTimeout</code>으로 정리를 잘 해주는 것이 핵심입니다.</p>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><strong>props가 나중에 바뀌는 경우 주의</strong></p>
  <p><code>useState(seconds)</code>의 초기값은 컴포넌트가 처음 렌더링될 때만 사용됩니다. 부모가 <code>seconds</code> 값을 나중에 바꿔도 <code>remaining</code>이 자동으로 다시 초기화되지는 않습니다.<br><code>seconds</code> 변경에 맞춰 카운트다운을 재시작하려면 <code>useEffect(() =&gt; setRemaining(seconds), [seconds])</code>처럼 별도의 Effect로 <code>remaining</code>을 다시 설정해야 하며, 이때 위 카운트다운용 Effect와 실행 순서가 겹치지 않도록 함께 고려해야 합니다.</p>
</div>

---

<h2>15. useEffect 주의사항</h2>

**⚠️ 무한 루프 주의 (Infinite Loop)**

의존성 배열에 있는 값을 Effect 내부에서 변경하면 **"변경 → 실행 → 변경 → 실행"**의 굴레에 빠지게 됩니다.

```jsx
// ❌ 잘못된 코드 (무한 루프 발생)
useEffect(() => {
  setCount(count + 1); // state를 변경함
}, [count]); // ⬅ 변경된 state가 다시 Effect를 호출함
```

<div class="wda-callout wda-ci">
  <p>여기서 문제는 <code>setCount</code> 자체가 아니라, <code>[count]</code>를 의존성으로 둔 Effect 안에서 다시 <code>count</code>를 변경한다는 점입니다.<br><code>count</code>가 바뀌면 Effect가 다시 실행되고, Effect가 다시 <code>count</code>를 바꾸기 때문에 무한 반복이 됩니다.</p>
</div>

**⚠️ 의존성 누락 주의 (Missing Dependency)**

Effect 내부에서 사용하는 변수(예: `name`)를 의존성 배열에 넣지 않으면, 나중에 그 값이 변해도 Effect가 실행되지 않아 **과거의 값(오래된 데이터)을 참조**하는 버그가 생깁니다.

```jsx
// ❌ 경고 발생 (버그 위험)
useEffect(() => {
  console.log(name);
}, []); // name을 쓰는데 배열에 없음!

// ✅ 올바른 코드
useEffect(() => {
  console.log(name);
}, [name]); // name이 변할 때마다 실행됨
```

**💡 해결책 : ESLint 규칙 활용**

개발자가 실수로 의존성을 빠뜨리는 것을 막기 위해 **Linter(코드 검사 도구)** 의 도움을 받는 것이 가장 확실합니다.

<div class="wda-callout wda-cw">
  <p><strong>ESLint의 <code>react-hooks/exhaustive-deps</code> 규칙을 활성화하세요!</strong></p>
  <p>이 규칙을 켜두면 의존성 배열에 빠진 변수가 있을 때 빨간 줄로 경고를 띄워줍니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"기계가 사람보다 낫습니다."</strong></p>
  <p><code>useEffect</code>의 의존성 배열을 사람이 일일이 챙기다 보면 반드시 실수가 나옵니다.<br>React 팀에서도 공식적으로 <strong>ESLint 플러그인 사용을 강력 권장</strong>하고 있으니, 개발 환경 설정에서 이 규칙이 켜져 있는지 꼭 확인해 보세요.</p>
</div>

---

<h2>16. ⁉️ FAQ</h2>

**🧠 Q1. useEffect의 의존성 배열(dependency array)을 빈 배열(`[]`)로 설정하면 언제 실행되나요?**

**정답: 컴포넌트가 처음 화면에 나타날 때(마운트) 딱 한 번만 실행됩니다.**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>React에게 "이 코드는 어떤 값에도 의존하지 않으니, 처음 렌더링 직후에만 실행하고 그 뒤로는 신경 쓰지 마"라고 알려주는 것입니다.<br>주로 API 호출이나 초기 설정에 사용됩니다.</p>
</div>

**🧠 Q2. 컴포넌트가 언마운트되거나 업데이트되기 직전에 리소스를 정리(clean-up)하려면 어떻게 해야 하나요?**

**정답: useEffect 함수 내부에서 정리 작업을 수행하는 함수를 return (반환)하면 됩니다.**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>이를 <strong>Cleanup 함수</strong>라고 부릅니다.<br>컴포넌트가 사라지기(Unmount) 직전이나, 다음 Effect가 실행되기 전에 호출되어 타이머 해제나 이벤트 리스너 제거 같은 뒷정리 작업을 수행합니다.</p>
  <p><strong>질문과 답변 요약</strong> — <strong>언제 실행? (<code>[]</code>)</strong> 👉 "태어날 때 한 번만!" (Mount) / <strong>어떻게 정리? (<code>return</code>)</strong> 👉 "나갈 때 이거 하고 가!" (Cleanup).<br>이 두 가지만 기억하면 <code>useEffect</code>의 80%는 이해한 것입니다.</p>
</div>

---

<h2>17. ✅ 핵심 요약</h2>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>⚡ Side Effect</strong></td>
    <td>API 호출, 타이머 설정, DOM 조작 등 화면을 그리는 것(렌더링) 외의 작업을 의미합니다. 절대로 컴포넌트 본문(렌더링 중)에 직접 작성하면 안 되며, 반드시 <code>useEffect</code>를 사용하여 안전하게 처리해야 합니다.</td>
  </tr>
  <tr>
    <td><strong>🏁 Dependency Array</strong></td>
    <td>Effect의 실행 시점(Timing)을 제어하는 핵심 장치입니다. 빈 배열 <code>[]</code>은 마운트 시 1회만 실행(초기화), 값이 있는 <code>[deps]</code>는 해당 값이 변경될 때마다 실행(업데이트 감지)됩니다. 배열에 필요한 값을 빠뜨리면(누락) 최신 값을 읽지 못하는 버그의 원인이 됩니다.</td>
  </tr>
  <tr>
    <td><strong>🧹 Cleanup Function</strong></td>
    <td><code>useEffect</code> 안에서 함수를 <code>return</code> 하면 됩니다. 컴포넌트가 화면에서 사라지거나(Unmount), 다음 Effect가 실행되기 직전에 호출되어 타이머 해제(<code>clearInterval</code>), 이벤트 리스너 제거(<code>removeEventListener</code>) 등 메모리 누수를 방지하는 필수 단계입니다.</td>
  </tr>
</table>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>useEffect 마스터를 위한 한 문장 요약</strong></p>
  <p>"화면이 다 그려진 뒤(<strong>Side Effect</strong>), 언제 실행할지 정하고(<strong>Dependency Array</strong>), 필요 없어지면 치운다(<strong>Cleanup</strong>)." 이 3박자만 기억하세요!</p>
</div>
