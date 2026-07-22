---
title: "2-4 state로 상태 관리하기"
status: "completed"
description: "state 개념과 props와의 차이, useState Hook 문법과 리렌더링 원리, 여러 state 관리, 입력 폼 연동과 함수형 업데이트까지 React state의 기초를 정리한다."
category: "React"
section: "Core"
tags:
  - react
  - state
  - hooks
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
  • <strong>state 개념 이해</strong> — state가 무엇이고 props와 어떻게 다른지 이해합니다.<br>
  • <strong>useState Hook 사용</strong> — useState로 상태를 선언하고 변경하는 방법을 배웁니다.<br>
  • <strong>이벤트와 state 연결</strong> — 버튼 클릭으로 state를 변경하고 화면을 업데이트합니다.
</div>

---

<h2>1. 💻 실습 : 실습 준비 (카운터 만들기)</h2>

이전 시간(Props)에 만들었던 `react-props-state` 프로젝트를 그대로 사용하여, State를 연습하기 위한 환경을 세팅합니다.

**✅ 1단계: 프로젝트 열기**

터미널에서 프로젝트 폴더로 이동하고 개발 서버를 실행하세요.

```bash
# Workspace로 이동
cd ~/Workspace/react-props-state

# 개발 서버 실행
npm run dev
```

**✅ 2단계: 파일 생성 및 연결**

새로운 주인공인 `Counter` 컴포넌트를 만들고 화면에 띄워봅시다.

**✅ 파일 생성 (Counter.jsx)**

`src/components` 폴더 안에 `Counter.jsx` 파일을 새로 만드세요.

```jsx
// src/components/Counter.jsx
// 아직 기능은 없고 껍데기만 만듭니다.
function Counter() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h2>카운터</h2>
      <p>아직 기능 없음</p>
    </div>
  );
}

export default Counter;
```

**✅ 앱에 연결 (App.jsx)**

`App.jsx`를 열고 기존 내용을 지운 뒤, 방금 만든 `Counter`를 가져와서(import) 보여주세요.

```jsx
// src/App.jsx
import './App.css';
import Counter from './components/Counter'; // 가져오기

function App() {
  return (
    <>
      <h1>State 실습</h1>
      {/* 렌더링 */}
      <Counter />
    </>
  );
}

export default App;
```

<div class="wda-callout wda-cw">
  <p><code>App.css</code> 파일이 프로젝트에 남아 있으면 <code>import './App.css';</code>를 유지해도 됩니다. 이전 실습에서 <code>App.css</code>를 삭제했다면 이 import는 제거해야 합니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 새로 만드나요?</strong>
  <p>이번 챕터의 목표는 <strong>"State(상태)"</strong>를 익히는 것입니다. 기존의 학생증(Props) 코드가 섞여 있으면 헷갈릴 수 있으므로, <strong>카운터(Counter)</strong>라는 아주 단순하고 명확한 예제를 통해 State의 동작 원리만 집중적으로 파악하기 위함입니다.</p>
</div>

---

<h2>2. state가 뭔가요?</h2>

State는 한마디로 **"컴포넌트가 스스로 '기억'하고 관리하는 데이터"**입니다.  
Props가 부모에게 물려받은 유전자라면, State는 내 안에서 변하는 기분이나 상태와 같습니다.

**📌 State란?**

State는 컴포넌트 내부에서 생성하고 관리하는 데이터입니다.  
값은 바뀔 수 있지만, 직접 수정하는 것이 아니라 반드시 setter 함수로 변경해야 합니다.  
즉, '변경 가능한 데이터'라기보다 **'React가 관리하고 setter로 변경하는 데이터'**라고 이해하는 것이 안전합니다.

- **내부 관리:** 컴포넌트 안에서 만들고, setter 함수를 통해 수정합니다.
- **변경 가능:** Props와 다르게 값을 바꿀 수 있습니다. (단, 반드시 setter로)
- **자동 리렌더링:** State 값이 바뀌면 리액트가 알아서 화면을 새로 고침(Re-rendering)해서 바뀐 값을 보여줍니다. (가장 중요한 특징!)

**📌 언제 사용하나요?**

화면에서 "시간에 따라 변하는 모든 것"은 State로 만듭니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">사용자 입력값</div>
    <div class="wda-fcard-dsc">로그인 아이디, 비밀번호 입력창</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">카운트</div>
    <div class="wda-fcard-dsc">좋아요 수, 장바구니 수량</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">토글 (ON/OFF)</div>
    <div class="wda-fcard-dsc">다크 모드, 메뉴 열기/닫기</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">서버 데이터</div>
    <div class="wda-fcard-dsc">API로 받아온 상품 목록 등</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>🧭 선택 가이드</strong>
  <p><strong>"화면에 표시되는 데이터가 시간에 따라 변하고, 그 값을 해당 컴포넌트가 직접 관리해야 한다면 State로 관리합니다."</strong></p>
  <ul>
    <li><strong>Props:</strong> 부모가 줌, 읽기 전용 (Read-Only)</li>
    <li><strong>State:</strong> 내가 만듦, 변경 가능 (Read-Write)</li>
  </ul>
</div>

---

<h2>3. props vs state 비교</h2>

둘 다 리액트에서 다루는 **데이터**라는 점은 같지만, 그 **역할과 관리 주체**가 완전히 다릅니다.

**🆚 상세 비교표**

가장 큰 차이점은 "누가 관리하고 수정할 수 있는가"입니다.

| **구분** | **props (프롭스)** | **state (스테이트)** |
| --- | --- | --- |
| **데이터 출처** | 부모 컴포넌트 (외부에서 받음) | 자기 자신 (내부에서 만듦) |
| **변경 가능 여부** | ❌ **읽기 전용 (Read-Only)** | ⭕ **변경 가능 (Mutable)** |
| **변경 주체** | 부모만 변경 가능 | 컴포넌트 자신이 변경 |
| **주요 용도** | 고정된 설정값 전달 | 변하는 동적 데이터 관리 |

**🧪 사용 예시**

어떤 데이터를 어디에 담아야 할지 예시로 구분해 보세요.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">props 예시</div>
    <div class="wda-fcard-dsc">카드 제목, 사용자 이름, 프로필 사진 URL (부모가 정해주는 정보)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">state 예시</div>
    <div class="wda-fcard-dsc">좋아요 클릭 횟수, 로그인 입력창의 텍스트, 메뉴 토글 상태(ON/OFF)</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>쉽게 기억하기</strong>
  <ul>
    <li><strong>Props = 유전자:</strong> 부모님께 물려받은 것. 내가 임의로 바꿀 수 없음.</li>
    <li><strong>State = 기분:</strong> 내 안에서 생겨난 것. 상황에 따라 내가 바꿀 수 있음 (기쁨 ↔ 슬픔).</li>
  </ul>
</div>

---

<h2>4. useState Hook 소개</h2>

리액트가 제공하는 **상태 관리용 함수**입니다.  
"함수 컴포넌트"라는 평범한 함수에 리액트의 강력한 기능(상태 관리 등)을 **"갈고리(Hook)로 걸어서"** 당겨와 쓸 수 있게 해줍니다.

**📌 Hook이란?**

함수 컴포넌트에서 원래는 쓸 수 없었던 리액트의 핵심 기능(State, Lifecycle 등)을 연동할 수 있게 해주는 도구들입니다.

- **비유:** 평범한 인간(함수 컴포넌트)이 아이언맨 슈트(Hook)를 입으면 하늘을 날 수 있게 되는 것과 같습니다.
- **종류:** `useState`(상태 관리), `useEffect`(부수 효과), `useContext`(전역 상태) 등이 있으며, 오늘은 `useState`만 집중적으로 배웁니다.

**📝 Hook의 규칙 (Q&A)**

아래 질문에 대한 정답입니다. 아주 중요한 규칙이니 꼭 기억하세요!

**🧠 Q. 이름 앞에 꼭 `use`를 붙여야 하나요?**

정답: 네, 무조건 붙여야 합니다! React Hook과 커스텀 Hook은 이름이 `use`로 시작해야 합니다.  
이 규칙 덕분에 React와 ESLint가 Hook 사용 규칙을 검사할 수 있습니다.  
다만 일반 함수 이름을 `use`로 시작하게 만들면 Hook처럼 오해될 수 있으므로 피하는 것이 좋습니다. (예: `useState`, `useEffect`)

**🧠 Q. 제가 만든 함수에도 `use` 써도 되나요?**

정답: "커스텀 훅"을 만들 때만 씁니다. 리액트의 Hook들을 조합해서 나만의 기능을 만들 때(Custom Hook)는 `use`를 붙입니다. 하지만 일반적인 계산 함수나 로직에는 붙이지 않는 것이 약속입니다.

**📌 리액트 Hook 4대장 (미리보기)**

리액트에는 많은 Hook이 있지만, 실무에서 가장 많이 쓰는 것은 딱 4가지입니다. 오늘은 첫 번째인 `useState`만 확실히 잡으면 됩니다!

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">useState 🔴 — 상태 관리</div>
    <div class="wda-fcard-dsc">변하는 데이터를 저장하고 관리합니다. (오늘 배울 내용!)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">useEffect 🔴 — 부수 효과</div>
    <div class="wda-fcard-dsc">데이터 가져오기(API), 타이머 등 화면 그리기 외의 작업을 처리합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">useContext — 전역 상태</div>
    <div class="wda-fcard-dsc">테마(다크모드), 로그인 정보 등 앱 전체에서 쓸 데이터를 공유합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">useRef 🟠 — DOM 참조</div>
    <div class="wda-fcard-dsc">특정 입력창에 포커스를 주거나, 스크롤 위치를 조작할 때 사용합니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>"오늘은 useState만!"</strong>
  <p>위 표의 안내처럼, 한 번에 다 배우려고 하면 머리가 아픕니다. 가장 기본이 되는 <code>useState</code>를 먼저 완벽하게 익히고, 나머지는 필요할 때 하나씩 배우는 것이 가장 효율적입니다.</p>
</div>

이제 리액트의 도구들이 무엇인지 파악했습니다. 이제 본격적으로 오늘의 주인공인 `useState`를 코드로 작성하는 문법(Syntax)을 배워볼까요?

---

<h2>5. useState 문법 해부</h2>

```javascript
import { useState } from 'react';

const [state, setState] = useState(initialValue);
```

`useState`를 사용하려면 파일 상단에 `import { useState } from 'react';`가 필요합니다.  
이 코드는 **"초기값(initialValue)을 가진 변수(state)와, 그 변수를 바꿀 수 있는 함수(setState)를 만들어줘!"** 라고 리액트에게 요청하는 것입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">대괄호 [] : 배열 구조 분해 할당</div>
    <div class="wda-fcard-dsc"><code>useState</code> 함수는 실행되면 항상 두 개의 값이 담긴 배열 <code>[데이터, 변경함수]</code>를 반환합니다. 이 두 값을 꺼내서 쓰기 위해 자바스크립트의 구조 분해 할당 문법을 사용합니다. 변수 이름(<code>state</code>, <code>setState</code>)은 내 마음대로 지을 수 있습니다. (순서만 중요함)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">이름 짓기 setXxx : 국룰(Convention)</div>
    <div class="wda-fcard-dsc">내 마음대로 지어도 되지만, 전 세계 개발자들이 따르는 약속이 있습니다. 규칙: <code>set</code> + 상태이름(카멜케이스). 예: <code>count</code>→<code>setCount</code>, <code>name</code>→<code>setName</code>, <code>isVisible</code>→<code>setIsVisible</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">초기값 () : 딱 한 번만 사용</div>
    <div class="wda-fcard-dsc">괄호 안에 넣은 값은 컴포넌트가 <strong>맨 처음 렌더링될 때</strong>만 <code>state</code>의 값으로 사용됩니다. 이후에 상태가 변경되어 다시 실행(리렌더링)될 때는, 이 초기값은 무시되고 <strong>기억해둔 최신값</strong>이 사용됩니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">const : 값이 변하는데 왜 상수죠?</div>
    <div class="wda-fcard-dsc">리액트에서 상태가 바뀌면 컴포넌트 함수가 처음부터 다시 실행(리렌더링)됩니다. 함수가 다시 실행될 때마다 <strong>새로운 const 변수</strong>가 매번 새로 만들어지는 것이므로 문법적으로 전혀 문제가 없습니다!</div>
  </div>
</div>

---

<h2>6. 버튼 클릭으로 state 변경</h2>

state를 선언했으니, 이제 **버튼을 눌렀을 때** 값이 바뀌도록 만들어봅시다. 핵심은 `onClick` 이벤트에 `setState` 함수를 연결하는 것입니다.

**⚙️ 코드 흐름 파악**

아래 코드는 다음과 같은 순서로 작동합니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">버튼 클릭</div><div class="wda-sdsc">사용자가 <code>+1</code> 버튼을 클릭합니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">함수 실행</div><div class="wda-sdsc">연결된 <code>handleClick</code> 함수가 실행됩니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">상태 변경 요청</div><div class="wda-sdsc"><code>setCount(count + 1)</code>이 실행되어 리액트에게 "값을 1 늘려줘!"라고 요청합니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody"><div class="wda-sttl">화면 업데이트</div><div class="wda-sdsc">리액트가 변경된 값을 감지하고 화면을 다시 그립니다(Re-rendering).</div></div>
  </div>
</div>

**📝 예제 코드**

작성해야 할 코드의 구조입니다.

```jsx
import { useState } from 'react';

function Counter() {
  // 1. 상태 만들기 (초기값 0)
  const [count, setCount] = useState(0);

  // 2. 이벤트 핸들러 만들기 (버튼 누르면 할 일)
  const handleClick = () => {
    setCount(count + 1); // 현재 값에 1을 더해서 저장
  };

  return (
    <div>
      <p>현재 카운트: {count}</p>
      {/* 3. 버튼에 함수 연결하기 (괄호 없이 이름만!) */}
      <button onClick={handleClick}>+1</button>
    </div>
  );
}
```

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <strong>함수 연결 시 주의사항 (<code>()</code>)</strong>
  <p><code>onClick={handleClick}</code> 뒤에 괄호 <code>()</code>를 붙이면 안 됩니다!</p>
  <ul>
    <li><code>handleClick()</code> ❌ : 렌더링되자마자 즉시 실행되어버립니다. (무한 루프 위험)</li>
    <li><code>handleClick</code> ⭕ : "클릭할 때만 실행해!"라는 의미로 함수 이름만 넘겨야 합니다.</li>
  </ul>
</div>

---

<h2>7. 리렌더링 (Re-rendering)의 원리</h2>

우리가 `setCount` 같은 함수로 **State를 바꾸는 순간**, 리액트는 다음과 같은 3단계 과정을 통해 화면을 업데이트합니다.

**⚙️ 과정 단계 (Process)**

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">State 변경 감지</div><div class="wda-sdsc">사용자가 버튼을 클릭해서 <code>setCount(1)</code>을 실행합니다. 리액트는 "아, 데이터가 바뀌었구나!"라고 알아챕니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">컴포넌트 함수 재실행 (Re-run)</div><div class="wda-sdsc">리액트는 <code>Counter</code> 컴포넌트(함수)를 <strong>처음부터 끝까지 다시 실행</strong>합니다. 이때 <code>useState</code>는 아까와 달리 <code>0</code>이 아니라 새로운 값 <code>1</code>을 줍니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">화면 업데이트 (Update)</div><div class="wda-sdsc">함수가 다시 실행되면서 새로운 HTML(<code>count: 1</code>)을 만들어내고, 브라우저 화면을 교체합니다.</div></div>
  </div>
</div>

**💡 비유 : 플립북 (Flipbook)**

리렌더링은 마치 **플립북(책 넘기기 애니메이션)**과 같습니다.

- **Render 1:** 첫 번째 장 (count = 0)
- **State 변경:** "다음 장으로 넘겨!"
- **Render 2:** 두 번째 장 (count = 1)

우리 눈에는 숫자가 스르륵 바뀌는 것처럼 보이지만, 실제로는 리액트가 새로운 그림(새로운 장)을 아주 빠르게 갈아 끼우는 것입니다.

**💡 보충 설명 (중요!)**

<div class="wda-callout wda-ci">
  <strong>왜 const인데 값이 바뀌나요?</strong>
  <p><code>const [count, setCount] = useState(0);</code></p>
  <p><code>count</code>가 <code>const</code>(상수)로 선언되어 있어서 헷갈릴 수 있습니다. 하지만 리렌더링은 <strong>함수가 "새로" 실행되는 것</strong>입니다.</p>
  <p>즉, 첫 번째 실행 때의 <code>count</code> 변수와, 두 번째 실행 때의 <code>count</code> 변수는 <strong>이름만 같을 뿐, 완전히 다른 별개의 변수</strong>입니다. 그래서 <code>const</code>를 써도 문제가 없는 것입니다.</p>
</div>

---

<h2>8. 여러 개의 State 사용하기 (기본)</h2>

마치 옷장에 서랍이 여러 개 있는 것처럼, 하나의 컴포넌트 안에 **여러 개의 독립적인 데이터**를 보관할 수 있습니다.

**📝 사용 방법**

그냥 `useState`를 필요한 만큼 여러 줄 쓰면 됩니다. 아주 간단하죠?

```javascript
function App() {
  // 1. 숫자 관리 (카운터)
  const [count, setCount] = useState(0);

  // 2. 글자 관리 (입력창)
  const [text, setText] = useState("");

  // 3. ON/OFF 관리 (스위치)
  const [isOn, setIsOn] = useState(false);

  // ...
}
```

**⚙️ 독립적인 동작**

가장 중요한 점은 **서로 영향을 주지 않는다**는 것입니다.

- `setCount`를 써서 숫자를 바꿔도, `text`나 `isOn` 값은 변하지 않고 그대로 유지됩니다.
- 각각의 State는 **자기만의 방**에 따로 살고 있다고 생각하면 됩니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>객체로 한 번에 묶으면 안 되나요?</strong>
  <p>다음과 같이 객체 하나로 묶는 것도 가능은 합니다(초보자에겐 비추천).</p>
  <pre style="background:rgba(128,128,128,.08);border-radius:8px;padding:10px 12px;overflow-x:auto;font-size:.78rem;"><code>const [state, setState] = useState({ count: 0, text: "" });</code></pre>
  <p>이렇게 할 수도 있지만, 값을 바꿀 때 <strong>안 바뀐 나머지 값들도 같이 챙겨줘야 하는(Spread 연산자 사용 등)</strong> 번거로움이 있습니다. 리액트에서는 <strong>서로 관련 없는 데이터라면 각각 따로 <code>useState</code>를 만드는 것</strong>이 훨씬 관리하기 편하고 일반적인 방식입니다.</p>
</div>

---

<h2>9. 여러 개의 state로 폼 만들기 (입력 연동 예제)</h2>

하나의 컴포넌트 안에서 필요한 만큼 `useState`를 여러 번 호출하여 사용할 수 있습니다.

**🧪 예시 코드**

아래 `UserForm` 코드를 바탕으로 작성했습니다. 각 입력칸(`input`)이 서로 다른 State를 독립적으로 관리합니다.

```jsx
import { useState } from 'react';

function UserForm() {
  // 1. 이름 (문자열)
  const [name, setName] = useState("");

  // 2. 나이 (문자열로 관리 — input의 값은 항상 문자열로 들어오기 때문)
  const [age, setAge] = useState('');

  // 3. 동의 여부 (불리언, 초기값 false)
  const [isAgree, setIsAgree] = useState(false);

  return (
    <div>
      {/* 이름 입력: 타이핑할 때마다 setName 실행 */}
      <input value={name} onChange={(e) => setName(e.target.value)} />

      {/* 나이 입력: type="number"여도 e.target.value는 문자열입니다 */}
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

      {/* 체크박스: 이벤트 객체의 checked 값을 그대로 사용 */}
      <input
        type="checkbox"
        checked={isAgree}
        onChange={(e) => setIsAgree(e.target.checked)}
      />
    </div>
  );
}
```

**🧠 핵심 포인트**

- **독립적 관리:** 이름을 입력한다고 나이가 바뀌지 않고, 체크박스를 누른다고 이름이 지워지지 않습니다. 각 State는 서로에게 영향을 주지 않습니다.
- **다양한 타입:** 문자열(`""`), 숫자(`0`), 불리언(`false`) 등 데이터 타입에 상관없이 자유롭게 사용할 수 있습니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>체크박스 핸들링</strong>
  <p>위 코드의 체크박스 부분에서 <code>onChange={(e) => setIsAgree(e.target.checked)}</code>는 이벤트 객체의 <code>checked</code> 값을 그대로 state에 저장하는 방식입니다. 체크하면 <code>true</code>, 해제하면 <code>false</code>가 그대로 전달되어 의미가 명확합니다.</p>
  <p>토글(반전) 방식으로 작성하고 싶다면 함수형 업데이트를 사용하는 것이 더 안전합니다: <code>onChange={() => setIsAgree((prev) => !prev)}</code></p>
</div>

---

<h2>10. 입력값과 State 연결하기</h2>

HTML의 Input 태그를 리액트의 State와 연결하여 **"리액트가 값을 통제하도록(Controlled)"** 만드는 패턴입니다. 실무에서 폼을 다룰 때 가장 기본이 되는 규칙입니다.

**📌 연결해야 하는 이유 (Controlled Component)**

아래 비교 내용을 확인해 보세요.

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl">⛔ 연결 안 하면? (Uncontrolled)</div>
    <div class="wda-fcard-dsc">사용자가 타이핑은 할 수 있지만, 리액트는 그 안에 무슨 글자가 들어있는지 모릅니다. (데이터 전송 시 값을 찾기 어려움)</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">✅ 연결 하면 (Controlled)</div>
    <div class="wda-fcard-dsc">React state가 입력값의 기준(source of truth)이 됩니다. 사용자가 입력하면 <code>onChange</code>로 state를 바꾸고, 변경된 state가 다시 input의 <code>value</code>로 표시됩니다.</div>
  </div>
</div>

**📝 코드 작성 공식**

State와 Input을 연결하려면 **`value`**와 **`onChange`**를 반드시 세트로 작성해야 합니다.

```jsx
// 1. State가 Input을 제어함
<input
  value={text}            // 화면에 보여줄 값은 state야!
  onChange={handleChange} // 타이핑하면 state를 바꿔줘!
/>
```

**⚠️ 주의 : "입력이 안 돼요!"**

가장 많이 하는 실수 중 하나입니다.

- **증상:** Input 창을 아무리 클릭하고 키보드를 두드려도 글자가 입력되지 않음.
- **원인:** `value`는 설정했는데 `onChange`를 빼먹은 경우.
- **이유:** 리액트는 "값은 무조건 State여야 해! 근데 State를 바꾸는 함수가 없네? 그럼 영원히 이 값 그대로 유지해!"라고 판단해서 읽기 전용(Read-Only) 상태로 만들어버립니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>단방향 데이터 흐름의 법칙</strong>
  <p>리액트에서는 데이터가 흐르는 방향이 중요합니다.</p>
  <ul>
    <li><strong>화면 ➡️ 데이터:</strong> <code>onChange</code> (사용자의 입력이 State를 바꿈)</li>
    <li><strong>데이터 ➡️ 화면:</strong> <code>value</code> (변경된 State가 화면에 표시됨)</li>
  </ul>
  <p>이 사이클이 핑퐁처럼 돌아가며 입력이 완성됩니다.</p>
</div>

---

<h2>11. 이벤트 핸들러 함수</h2>

사용자가 키보드를 치는 순간 발생하는 이벤트를 잡아서, State 함수(`setText`)에게 전달하는 배달부 역할을 합니다. 주로 **화살표 함수**를 사용하여 작성합니다.

**📝 작성 방법 (2가지)**

상황에 따라 두 가지 방식 중 하나를 선택해서 사용합니다.

```jsx
// 방법 1: 인라인 함수 (한 줄로 끝나는 간단한 경우)
// (e) => 바로 실행
<input onChange={(e) => setText(e.target.value)} />

// 방법 2: 함수 분리 (로직이 길거나 복잡할 때)
// 미리 만들어둔 함수 이름만 전달
const handleChange = (e) => {
  console.log("입력 중...");
  setText(e.target.value);
};

<input onChange={handleChange} />
```

**📌 핵심 용어 설명**

이벤트가 발생할 때 리액트가 자동으로 만들어주는 중요한 친구들입니다.

- **`e` (이벤트 객체):** 이벤트가 발생한 상황의 모든 정보(어떤 키를 눌렀는지, 누가 눌렀는지 등)가 담겨 있는 '택배 상자'입니다.
- **`e.target.value`:** 택배 상자 안에 들어있는 내용물 중, "방금 사용자가 입력한 텍스트 값"을 콕 집어서 꺼낸 것입니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 onInput이 아니라 onChange인가요?</strong>
  <p>HTML을 원래 아시는 분들은 의아할 수 있습니다.</p>
  <ul>
    <li><strong>HTML 표준:</strong> <code>onchange</code>는 입력이 끝나고 커서가 밖으로 나가야(Blur) 실행됩니다. (실시간 X)</li>
    <li><strong>React 방식:</strong> 리액트는 개발 편의성을 위해 <strong>HTML의 <code>oninput</code> 동작(실시간 감지)을 <code>onChange</code>라는 이름으로 통합</strong>했습니다.</li>
  </ul>
  <p>따라서 리액트에서는 그냥 <code>onChange</code>만 쓰면 타이핑할 때마다 즉시 실행됩니다. 편하게 쓰세요!</p>
</div>

---

<h2>12. state 업데이트 주의사항</h2>

`state` 값은 일반 변수처럼 **직접 수정하면 절대 안 됩니다.** 반드시 변경 함수(setter)를 사용해야 합니다.

**🆚 코드 비교**

왜 안 되는지 코드로 확인해 보세요.

**🧪 ❌ 잘못된 코드 (직접 수정)**

```javascript
const [count, setCount] = useState(0);

// ❌ 잘못된 코드
// count는 const로 선언된 값이므로 직접 대입하면 에러가 납니다.
count = count + 1;
```

useState로 만든 state 값은 직접 대입해서 바꾸면 안 됩니다. 특히 위 예제처럼 `const`로 선언된 `count`에 다시 값을 넣으면 JavaScript 에러가 발생합니다. state를 바꾸려면 반드시 `setCount` 같은 setter 함수를 사용해야 합니다.

**🧪 ✅ 올바른 코드 (Setter 사용)**

```javascript
const [count, setCount] = useState(0);

// 반드시 이렇게 하세요!
setCount(count + 1);
// 결과: 리액트가 변경을 감지하고 화면을 1로 다시 그립니다.
```

**⚠️ 객체/배열 state는 더 주의가 필요합니다**

객체나 배열은 `const`로 선언되어 있어도 내부 속성은 직접 바꿀 수 있어서, 문법 에러 없이 조용히 실수하기 쉽습니다. 직접 수정하면 React가 변경을 제대로 감지하지 못할 수 있다는 설명은 객체/배열 state에서 더 잘 드러납니다.

```javascript
const [user, setUser] = useState({ name: '철수', age: 20 });

// ❌ 직접 수정
user.age = 21;

// ✅ 새 객체로 교체
setUser({ ...user, age: 21 });
```

객체나 배열 state는 내부 값을 직접 바꾸는 것이 아니라, 기존 값을 복사한 새 객체/배열을 만들어 setter로 교체해야 합니다.

**📌 왜 직접 수정하면 안 되나요?**

리액트는 'Setter 함수(`setCount`)가 호출되었는가?'를 기준으로 데이터 변경을 감지하기 때문입니다.

- **직접 수정:** 리액트 몰래 값을 바꾼 것이라, 리액트가 모르고 넘어갑니다. (화면 갱신 X, 객체/배열의 경우 에러 없이 조용히 넘어갈 수 있음)
- **Setter 사용:** 리액트에게 "값 바꿨으니까 화면 새로 그려줘!"라고 정식으로 요청하는 것입니다. (화면 갱신 O)

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <strong>불변성(Immutability) 유지</strong>
  <p>리액트의 가장 중요한 철학 중 하나입니다. "기존 데이터를 훼손하지 말고(직접 수정 X), <strong>새로운 값을 갈아 끼워라(Setter O)</strong>"는 원칙을 지켜야 리액트가 효율적으로 화면을 관리할 수 있습니다.</p>
</div>

---

<h2>13. 🔄 이전 state 기반 업데이트</h2>

`setCount`를 사용할 때 단순히 '값'을 넣는 게 아니라, **'함수'를 넣어서** 값을 변경하는 방법입니다.

**🆚 기본 방식 vs 함수형 업데이트**

두 방식의 차이를 비교해 보세요.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">기본 방식 (값 전달)</div>
    <div class="wda-fcard-dsc"><code>setCount(count + 1)</code><br>현재 시점의 <code>count</code> 값을 기준으로 변경합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">함수형 업데이트 (함수 전달)</div>
    <div class="wda-fcard-dsc"><code>setCount(prev => prev + 1)</code><br>리액트가 "가장 최신의 이전 값(prev)"을 함수에 넣어줍니다. 그 값을 받아서 수정합니다.</div>
  </div>
</div>

**📌 왜 함수형이 더 안전한가요?**

리액트는 성능을 위해 state 변경을 모아서 한 번에 처리(Batching)하기도 하는데, 이때 기본 방식은 예기치 않은 동작을 할 수 있습니다.

**예시 상황: "연속으로 3번 호출했을 때"**

```javascript
// ❌ 기본 방식
// count가 0일 때, 3번 호출해도 결과는 1입니다.
// 이유: 셋 다 처음의 0을 보고 "0+1 해줘"라고 똑같이 말하기 때문입니다.
setCount(count + 1); // 0 + 1 = 1
setCount(count + 1); // 0 + 1 = 1 (여전히 count는 0으로 인식)
setCount(count + 1); // 0 + 1 = 1
```

```javascript
// ✅ 함수형 업데이트 (권장)
// count가 0일 때, 3번 호출하면 결과는 3이 됩니다.
// 이유: 앞선 줄이 끝난 결과(prev)를 다음 줄이 받아서 처리하기 때문입니다.
setCount(prev => prev + 1); // 0에서 1로 만듦
setCount(prev => prev + 1); // 방금 만든 1을 받아서 2로 만듦
setCount(prev => prev + 1); // 방금 만든 2를 받아서 3으로 만듦
```

**💡 보충 설명**

<div class="wda-callout wda-cs">
  <strong>언제 써야 하나요?</strong>
  <p>"새로운 값이 이전 값에 의존할 때"는 무조건 함수형 업데이트를 쓰는 습관을 들이는 것이 좋습니다.</p>
  <ul>
    <li>카운터 증가 (<code>count + 1</code>)</li>
    <li>토글 (<code>!isToggle</code>)</li>
    <li>배열에 항목 추가 (<code>[...list, newItem]</code>)</li>
  </ul>
</div>

---

<h2>14. ⁉️ 핵심 Q&A (FAQ)</h2>

**🧠 Q1. state를 변경할 때 반드시 사용해야 하는 함수는?**

**정답: Setter 함수 (State 변경 함수)**

- **설명:** `useState`를 통해 만들어진 두 번째 값(예: `setCount`, `setName`)을 반드시 사용해야 합니다.
- **이유:** `state = 100` 처럼 직접 수정하면 리액트가 데이터 변경을 감지하지 못해 화면이 바뀌지 않습니다. 오직 Setter 함수를 통해서만 리액트에게 "화면을 다시 그려줘!"라고 요청할 수 있습니다.

**🧠 Q2. 이전 state 값을 기반으로 안전하게 업데이트하려면 어떻게 해야 하나요?**

**정답: 함수형 업데이트 (Functional Update)**

- **설명:** Setter 함수 안에 값이 아니라 '함수'를 전달하는 방식입니다. 예: `setCount(prev => prev + 1)`
- **이유:** 리액트가 처리 시점의 가장 최신 State 값(prev)을 보장해 주기 때문에, 연속적인 업데이트나 비동기 상황에서도 안전하게 값을 변경할 수 있습니다.

---

<h2>15. ✅ 핵심 요약</h2>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>State란?</strong></td>
    <td>• <strong>정의:</strong> 컴포넌트 내부에서 생성하고 관리하는 데이터이며, 값은 반드시 setter 함수로만 변경합니다.<br>• <strong>Props와 차이:</strong> Props는 부모가 주는 읽기 전용 데이터라면, State는 내 안에서 변화하는 상태입니다.<br>• <strong>역할:</strong> State가 바뀌면 리액트는 자동으로 화면을 새로 그립니다 (리렌더링).</td>
  </tr>
  <tr>
    <td><strong>사용법 (useState)</strong></td>
    <td><code>import { useState } from 'react';</code><br><code>const [count, setCount] = useState(0);</code><br>• 배열 구조 분해 할당을 사용하여 변수와 함수를 받아옵니다.<br>• <code>set</code> + 이름(CamelCase)으로 작명하는 것이 관례입니다.</td>
  </tr>
  <tr>
    <td><strong>불변성 원칙</strong></td>
    <td>• <strong>직접 수정 금지:</strong> <code>count = count + 1</code> (❌) ➔ const 재대입이라 에러가 나거나, 객체/배열은 조용히 변경 감지에 실패합니다.<br>• <strong>Setter 사용:</strong> <code>setCount(count + 1)</code> (⭕) ➔ 리액트에게 변경을 알리고 리렌더링을 요청합니다.<br>• <strong>함수형 업데이트:</strong> <code>setCount(prev =&gt; prev + 1)</code> ➔ 이전 값을 기반으로 안전하게 업데이트할 때 사용합니다.</td>
  </tr>
  <tr>
    <td><strong>입력 폼 핸들링</strong></td>
    <td>입력창(<code>input</code>)을 제어할 때는 <strong>value</strong>와 <strong>onChange</strong>를 반드시 세트로 사용해야 합니다 (Controlled Component).<br><code>&lt;input value={text} onChange={(e) =&gt; setText(e.target.value)} /&gt;</code></td>
  </tr>
</table>
