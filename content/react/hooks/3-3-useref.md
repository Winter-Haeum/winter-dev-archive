---
title: "3-3 useRef 사용하기"
status: "completed"
description: "useRef의 문법과 DOM 요소 접근, 렌더링 없이 값을 유지하는 특성, useState와의 선택 기준, forwardRef와 동적 Refs 관리까지 useRef 심화 패턴을 정리한다."
category: "React"
section: "Hooks"
tags:
  - react
  - hooks
  - useref
  - dom
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
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-compare-ttl{font-size:.84rem;font-weight:700;margin-bottom:8px}
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
  • <strong>useRef 란 & 사용법</strong> — <code>useRef</code>의 문법적 구조와 올바른 사용 방법을 배웁니다<br>
  • <strong>DOM 요소 접근</strong> — <code>focus</code>, <code>scroll</code> 등 DOM API를 직접 제어하는 방법을 익힙니다<br>
  • <strong>값 유지 (No Render)</strong> — 렌더링 없이 값을 유지하는 <code>useRef</code>의 특성을 이해합니다<br>
  • <strong>useState vs useRef</strong> — 화면 갱신 필요 여부에 따른 올바른 Hook 선택 기준을 정립합니다
</div>

---

<h2>1. useRef란?</h2>

**📌 정의 (Definition)**

<div class="wda-callout wda-ci">
  <p><strong>"렌더링을 유발하지 않고 값을 저장할 수 있는 변경 가능한 저장소입니다."</strong></p>
</div>

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">값 유지 (Persist)</div><div class="wda-fcard-dsc">컴포넌트가 다시 렌더링되어도 내부의 값은 사라지지 않고 유지됩니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">렌더링 방지</div><div class="wda-fcard-dsc">값이 바뀌어도 화면은 갱신(Re-rendering)되지 않습니다.</div></div>
</div>

**📝 기본 문법**

```jsx
import { useRef } from 'react';

function MyComponent() {
  // 1. 초기화: { current: 초기값 } 형태의 객체 생성
  const myRef = useRef(초기값);

  // 2. 값 확인
  console.log(myRef);         // { current: 초기값 }
  console.log(myRef.current); // 초기값

  // 3. 값 변경 (렌더링 X)
  myRef.current = 새로운값; 

  return <div>...</div>;
}
```

**📌 핵심 구성 요소**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">ref 객체</div><div class="wda-fcard-dsc"><code>useRef</code>를 호출하면 반환되는 값은 항상 <code>{ current: 값 }</code> 형태의 객체입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">.current</div><div class="wda-fcard-dsc">실제 값을 읽거나 수정하려면 반드시 <strong>.current</strong> 속성을 통해서 접근해야 합니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"상자(Box)라고 생각하세요."</strong></p>
  <p><code>useRef</code>는 어떤 값을 담아둘 수 있는 상자를 하나 만드는 것입니다.</p>
  <ul>
    <li><strong>useState</strong>: 상자의 내용물이 바뀌면 알림이 울려서 모두가 쳐다봅니다 (화면 갱신).</li>
    <li><strong>useRef</strong>: 상자의 내용물을 몰래 바꿔도 아무도 모릅니다 (화면 갱신 안 함).</li>
  </ul>
</div>

---

<h2>2. useRef 문법과 사용법 (Syntax & Usage)</h2>

**⚙️ 3단계 핵심 동작**

`useRef`를 사용하는 과정은 크게 **선언(만들기) → 접근(읽기) → 수정(쓰기)** 의 3단계로 나뉩니다.

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">선언 (Declaration)</div><div class="wda-sdsc"><code>useRef(초기값)</code>을 호출하여 Ref 객체를 만듭니다. 초기값으로는 숫자(<code>0</code>), <code>null</code>, 배열(<code>[]</code>), 객체 등 어떤 타입이든 들어갈 수 있습니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">접근 (Access)</div><div class="wda-sdsc">반드시 <strong>.current</strong> 속성을 통해 값을 꺼내와야 합니다. 예: <code>console.log(refContainer.current);</code></div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">수정 (Mutation)</div><div class="wda-sdsc">값을 바꿀 때도 <strong>.current</strong>에 새로운 값을 대입합니다. 값을 바꿔도 <strong>리렌더링이 발생하지 않습니다.</strong> (화면은 그대로임)</div></div></div>
</div>

**📝 예제 코드 (Example.jsx)**

```jsx
// 1. Import
import { useRef } from 'react';

function Component() {
  // 2. 선언: 초기값을 0으로 설정
  const countRef = useRef(0);

  const handleClick = () => {
    // 3. 수정: .current로 값을 읽고 씀
    countRef.current += 1; 
    
    // 4. 접근: 콘솔에는 변경된 값이 찍히지만, 화면은 갱신되지 않음
    console.log(countRef.current); 
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>왜 귀찮게 .current를 붙여야 하나요?</strong></p>
  <p><code>useRef</code>는 자바스크립트의 <strong>객체(Object)</strong>를 반환하기 때문입니다. <code>const ref = useRef(0)</code>을 하면 실제로는 <code>{ current: 0 }</code>이라는 객체가 만들어집니다.</p>
  <ul>
    <li><code>ref</code> 자체는 <strong>상자(Box)</strong>입니다.</li>
    <li><code>ref.current</code>는 상자 안의 <strong>내용물</strong>입니다.</li>
  </ul>
  <p>우리는 내용물을 꺼내거나 바꿔야 하므로 항상 <code>.current</code>를 열어봐야 합니다.</p>
</div>

---

<h2>3. Why useRef? (변수의 딜레마)</h2>

React 컴포넌트 안에서 데이터를 저장하는 방식은 크게 3가지가 있는데, 각각의 특징과 한계가 있습니다.

**🆚 일반 변수 (`let` / `const`) : 기억상실증 🤯**

```jsx
let count = 0; 
// ❌ 렌더링될 때마다 0으로 초기화됨
```

**문제점**: 컴포넌트(함수)가 다시 실행(리렌더링)될 때마다 변수가 다시 선언되므로, 저장했던 값이 날아가고 초기화됩니다. 값을 유지할 수 없습니다.

**🆚 상태 (`useState`) : 과한 반응 📢**

```jsx
const [count, set] = useState(0);
// ✅ 값은 유지됨
// ❌ 변경 시마다 리렌더링 발생 (성능 이슈)
```

**문제점**: 값은 잘 기억하지만, 값이 바뀔 때마다 무조건 화면을 다시 그립니다(리렌더링). 화면에 보여줄 필요가 없는 데이터(예: 타이머 ID) 때문에 렌더링이 일어나는 것은 비효율적입니다.

**🆚 해결책 (`useRef`) : 조용한 천재 🤫**

```jsx
const count = useRef(0);
// ✅ 렌더링되어도 값 유지
// ✅ 값 변경해도 리렌더링 없음
```

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">값 유지</div><div class="wda-fcard-dsc">컴포넌트가 아무리 리렌더링되어도 값이 사라지지 않습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">렌더링 방지</div><div class="wda-fcard-dsc">값을 아무리 변경해도 화면 갱신을 유발하지 않습니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"컴포넌트의 비밀 주머니"</strong></p>
  <p><code>useRef</code>는 "남들은 모르게 나만 간직하고 싶은 비밀 주머니"와 같습니다.</p>
  <ul>
    <li>화면(UI)에는 안 보여줘도 되지만,</li>
    <li>프로그램이 돌아가는 내내 기억해야 할 정보 (타이머 ID, 스크롤 위치, 이전 값 등)를 넣어두기에 가장 적합한 저장소입니다.</li>
  </ul>
</div>

---

<h2>4. DOM 요소 접근하기</h2>

**📝 예제 코드 : 버튼 클릭 시 포커스**

```jsx
import { useRef } from 'react';

function TextInput() {
  // 1. 초기값 null로 Ref 객체 생성
  const inputRef = useRef(null);

  const handleClick = () => {
    // 3. .current를 통해 실제 input 태그에 접근하여 포커스 주기
    inputRef.current?.focus(); // DOM 요소에 직접 접근
  };

  return (
    <div>
      {/* 2. input 태그와 inputRef 변수를 연결 */}
      <input ref={inputRef} type="text" />
      
      {/* 버튼 클릭 시 handleClick 함수 실행 */}
      <button type="button" onClick={handleClick}>입력창 포커스</button>
    </div>
  );
}

export default TextInput;
```

**⚙️ 핵심 동작 원리**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">ref={inputRef}</div><div class="wda-fcard-dsc">이 속성을 적는 순간, 리액트는 화면에 <code>&lt;input&gt;</code> 태그를 그릴 때 해당 태그(DOM 요소)를 <code>inputRef.current</code>에 쏙 넣어줍니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">이벤트 핸들링</div><div class="wda-fcard-dsc">사용자가 버튼을 클릭하면 <code>handleClick</code>이 실행되고, 이때 저장해둔 <code>input</code> 태그를 꺼내와서 <code>focus()</code> 명령을 내립니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"리모컨 버튼을 누르는 것과 같아요."</strong></p>
  <p>위 코드는 <strong>"내가 원할 때(Click)"</strong> 특정 기능을 수행하는 방식입니다.</p>
  <ul>
    <li><strong>useRef</strong>: TV(DOM 요소)와 연결된 리모컨입니다.</li>
    <li><strong>onClick</strong>: 리모컨의 전원 버튼을 누르는 행동입니다.</li>
    <li><strong>focus()</strong>: TV가 켜지는 결과입니다.</li>
  </ul>
  <p>화면이 켜지자마자 자동으로 되는 것이 아니라, <strong>사용자의 행동(이벤트)에 따라</strong> 특정 태그를 조작하고 싶을 때 이 패턴을 사용합니다.</p>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><strong>null guard(안전 접근) 습관</strong></p>
  <p><code>ref.current</code>는 DOM이 아직 연결되기 전에는 <code>null</code>일 수 있습니다. 따라서 실제 서비스 코드에서는 <code>inputRef.current?.focus()</code>처럼 존재 여부를 확인하는 방식이 안전합니다.</p>
</div>

---

<h2>5. focus() 활용 예제</h2>

**📝 예제 코드 : 검색어 자동 포커스**

```jsx
import { useRef, useEffect } from 'react';

function SearchForm() {
  const searchRef = useRef(null);

  useEffect(() => {
    // 2. 컴포넌트 마운트 시 자동 포커스
    searchRef.current?.focus();
  }, []);

  return (
    <form>
      <input
        ref={searchRef} // 1. 요소 연결
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <button type="submit">검색</button>
    </form>
  );
}

export default SearchForm;
```

**⚙️ 핵심 동작 원리**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">useEffect와 조합</div><div class="wda-fcard-dsc">앞선 예제(버튼 클릭)와 달리, 이번에는 화면이 나타나자마자(Mount) 자동으로 포커스를 주기 위해 <code>useEffect</code>를 사용했습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">사용자 편의성</div><div class="wda-fcard-dsc">검색 페이지에 들어오자마자 마우스 클릭 없이 바로 타이핑을 시작할 수 있어 사용자 경험(UX)이 좋아집니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>타이밍이 중요합니다!</strong></p>
  <p><code>focus()</code> 같은 DOM 명령은 반드시 <strong>HTML 태그가 화면에 그려진 이후</strong>에 실행되어야 합니다. 리액트가 화면을 그림(Render) → <code>input</code> 태그 생성됨 → <code>useEffect</code> 실행 → <code>focus()</code> 호출. 이 순서를 보장받기 위해 <code>useEffect</code> 안에서 호출하는 것입니다.</p>
</div>

---

<h2>6. scrollIntoView() 활용</h2>

**📝 예제 코드 : 채팅 자동 스크롤**

채팅 앱처럼 **새로운 메시지가 도착했을 때** 화면을 자동으로 맨 아래로 내려주는 기능입니다.

```jsx
import { useRef, useEffect } from 'react';

function MessageList({ messages }) {
  // 1. 스크롤 위치를 잡을 ref 생성
  const bottomRef = useRef(null);

  useEffect(() => {
    // 3. 메시지 목록(messages)이 바뀔 때마다 실행
    // bottomRef가 가리키는 요소(맨 아래 빈 div)가 화면에 보이도록 스르륵 이동
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]); // ⬅ 의존성 배열: 새 메시지가 추가될 때마다 감지

  return (
    <div style={{ height: '300px', overflow: 'auto' }}>
      {/* 메시지 목록 출력 */}
      {messages.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
      
      {/* 2. 스크롤의 목적지가 될 '빈 태그'를 맨 아래에 배치하고 ref 연결 */}
      <div ref={bottomRef} /> {/* 스크롤 타겟 */}
    </div>
  );
}

export default MessageList;
```

**⚙️ 핵심 동작 원리**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">빈 div를 타겟으로 사용</div><div class="wda-fcard-dsc">스크롤 바의 높이를 수학적으로 계산(<code>scrollTop = scrollHeight</code>)하는 복잡한 방식 대신, "목록의 맨 끝에 보이지 않는 점(div)을 찍고, 거기로 가라"고 명령하는 아주 영리한 패턴입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">scrollIntoView()</div><div class="wda-fcard-dsc">특정 DOM 요소가 화면에 보이도록 스크롤을 자동으로 이동시켜주는 브라우저 내장 함수입니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"부드럽게 이동하기"</strong></p>
  <p>코드에 있는 <code>{ behavior: 'smooth' }</code> 옵션을 넣으면, 화면이 딱딱하게 끊기며 이동하는 게 아니라 부드럽게 미끄러지듯 내려갑니다. 사용자 경험(UX)을 훨씬 고급스럽게 만들어주는 옵션이니 꼭 활용해 보세요.</p>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><strong>key로 index를 사용한 이유</strong></p>
  <p>이 예제에서는 <code>messages</code>가 단순 문자열 배열이라고 가정해 <code>index</code>를 사용했습니다. 실제 채팅 데이터에서는 <code>message.id</code> 같은 고유 id를 key로 사용하는 것이 안전합니다.</p>
</div>

---

<h2>7. 💻 실습 1 : 미디어 제어하기</h2>

**🎯 Mission**

<div class="wda-callout wda-cs">
  <p><strong>HTMLMediaElement 직접 제어하기</strong></p>
  <p>리액트의 데이터 흐름(State)으로 처리하기 까다로운 비디오/오디오 API를 <code>useRef</code>를 사용해 직접 호출해 봅니다.</p>
  <ul>
    <li><code>video.play()</code>: 비디오 재생 시작</li>
    <li><code>video.pause()</code>: 비디오 일시 정지</li>
    <li><code>currentTime</code>: 재생 위치 제어</li>
  </ul>
</div>

**📝 예제 코드**

```jsx
// 1. 비디오 태그를 담을 ref 생성
const videoRef = useRef(null);

const handlePlay = () => {
  // 2. DOM API를 직접 호출하여 재생
  videoRef.current?.play();
};

const handlePause = () => {
  // 3. DOM API를 직접 호출하여 정지
  videoRef.current?.pause();
};
```

**✅ 결과 예시**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">화면</div><div class="wda-fcard-dsc">비디오 플레이어와 'Play', 'Pause' 버튼이 있습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">동작</div><div class="wda-fcard-dsc">Play 버튼 클릭 → 비디오 재생 시작 🎬<br>Pause 버튼 클릭 → 비디오 멈춤 ⏸️</div></div>
</div>

<img src="/images/content/react/3-3/react-3-3-media-control-demo.png" alt="비디오 테이프 아이콘과 Play(초록), Pause(빨강) 버튼, 현재 상태 Paused 표시" style="display:block;width:100%;max-width:260px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:260px;white-space:nowrap;">[그림] 비디오 Play/Pause 제어 데모 화면</div>

**📝 정답 코드**

```jsx
import { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null); // 초기값 null 설정

  const handlePlay = () => {
    videoRef.current?.play(); // 내장 API: 재생
  };

  const handlePause = () => {
    videoRef.current?.pause(); // 내장 API: 정지
  };

  return (
    <div>
      {/* video 태그와 ref 연결 */}
      <video 
        ref={videoRef} 
        src="/sample-video.mp4" 
        width="400" 
        controls 
      />
      
      <div style={{ marginTop: '10px' }}>
        <button type="button" onClick={handlePlay}>Play ▶</button>
        <button type="button" onClick={handlePause} style={{ marginLeft: '10px' }}>
          Pause ⏸
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>왜 State를 안 쓰나요?</strong></p>
  <p>비디오나 오디오 같은 미디어 태그는 브라우저가 자체적으로 재생 상태(시간, 버퍼링 등)를 관리합니다. 이를 리액트의 <code>useState</code>와 억지로 동기화하려고 하면 코드가 매우 복잡해지고 성능이 떨어집니다. 따라서 이런 경우에는 리액트의 규칙을 잠시 내려놓고, <strong>ref를 통해 브라우저의 고유 기능(API)을 직접 명령</strong>하는 것이 훨씬 효율적입니다.</p>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><strong>sample-video.mp4 파일 위치</strong></p>
  <p><code>sample-video.mp4</code> 파일은 <code>public</code> 폴더에 있어야 합니다. 예: <code>public/sample-video.mp4</code></p>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><strong>video.play()는 실패할 수도 있어요</strong></p>
  <p><code>video.play()</code>는 브라우저 정책에 따라 실패할 수 있으며 Promise를 반환합니다. 버튼 클릭처럼 사용자 동작 안에서 실행하면 대부분 정상 동작하지만, 실제 서비스에서는 <code>videoRef.current?.play().catch(error =&gt; console.error(error))</code> 처럼 실패 가능성을 catch로 처리할 수 있습니다.</p>
</div>

---

<h2>8. 렌더링 없이 값 유지하기</h2>

이 장은 **"값이 바뀔 때 화면이 깜빡여야(다시 그려져야) 하는가?"** 를 기준으로 `useState`와 `useRef`를 구분하는 가장 중요한 개념을 설명합니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">🆚 useState : 렌더링 O (화면 갱신)</div>
    값이 변하면 리액트에게 "화면 다시 그려!"라고 알립니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">🆚 useRef : 렌더링 X (조용한 변경)</div>
    값이 변해도 리액트는 모른 척 넘어갑니다. 화면은 그대로 유지됩니다.
  </div>
</div>

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // 값을 바꾸면 컴포넌트 함수가 다시 실행됨 (리렌더링 발생!)
    setCount(count + 1); 
  };

  // 화면에 바뀐 숫자가 즉시 반영됨
  return <p>{count}</p>;
}
```

```jsx
import { useRef } from 'react';

function Counter() {
  const countRef = useRef(0);

  const handleClick = () => {
    // 값을 바꿔도 컴포넌트는 다시 실행되지 않음 (렌더링 없음!)
    countRef.current += 1; 
    console.log(countRef.current); // 콘솔에는 찍히지만 화면은 그대로
  };

  return <p>콘솔 확인</p>;
}
```

**💡 🧭 선택 가이드**

<div class="wda-callout wda-ci">
  <p><strong>화면에 표시할 값</strong> 👉 <code>useState</code> (예: 카운터 숫자, 입력창 내용, 게시글 목록)<br>
  <strong>내부에서만 쓸 값</strong> 👉 <code>useRef</code> (예: 타이머 ID, 스크롤 위치, 이전 값 기억)</p>
</div>

---

<h2>9. 이전 값 기억하기</h2>

**📌 개념 (Concept)**

**"렌더링 후 저장 = 다음 번엔 과거의 값"**
`useEffect`가 **화면이 다 그려진 뒤에 실행된다**는 점을 이용한 고급 패턴입니다. 현재의 값을 `ref`에 저장해두면, 다음 렌더링 때 그 값은 **'직전 값(Previous Value)'** 이 됩니다.

**📝 예제 코드**

```jsx
import { useState, useRef, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // 현재 값
  const prevCountRef = useRef(0);        // 이전 값을 담을 상자

  useEffect(() => {
    // 2. 렌더링이 다 끝난 뒤 실행됨
    // 현재 count 값을 ref에 백업해둠
    prevCountRef.current = count; 
  }, [count]);

  return (
    <div>
      {/* 1. 화면이 그려질 때는 아직 ref 값이 업데이트되기 전임 (즉, 이전 값) */}
      <p>현재: {count}</p>
      <p>이전: {prevCountRef.current}</p>
      
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
}
```

**⚙️ 핵심 동작 순서 (Flow)**

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">렌더링 (Render)</div><div class="wda-sdsc">화면에 <code>현재: 1</code>, <code>이전: 0</code>을 그립니다. (아직 Effect 실행 전)</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">이펙트 실행 (Effect)</div><div class="wda-sdsc"><code>prevCountRef.current</code>에 <code>1</code>을 저장합니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">상태 변경 (Update)</div><div class="wda-sdsc">사용자가 버튼을 눌러 <code>count</code>가 <code>2</code>가 됩니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">다음 렌더링 (Next Render)</div><div class="wda-sdsc">화면에 <code>현재: 2</code>를 그립니다. 이때 <code>prevCountRef</code>는 아까 저장해둔 <code>1</code>을 가지고 있으므로 <code>이전: 1</code>이 출력됩니다.</div></div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"타임캡슐 효과"</strong></p>
  <p>이 패턴은 주식 차트에서 '전일 대비 상승/하락'을 표시하거나, 값이 변했을 때 <strong>어떤 값에서 바뀌었는지</strong> 비교해야 할 때 유용하게 쓰입니다. 렌더링 시점의 차이를 이용한 아주 똑똑한 트릭입니다.</p>
</div>

---

<h2>10. 변수 관리 (Stopwatch)</h2>

**📌 개념 (Concept)**

**"렌더링에 영향을 주지 않는 변수 저장소"**
컴포넌트 내에서 **값이 바뀌어도 화면을 다시 그릴(Re-render) 필요가 없는 데이터**를 관리할 때 `useRef`를 사용합니다. 가장 대표적인 예시가 바로 `setInterval`의 **타이머 ID**입니다.

**📝 예제 코드**

```jsx
import { useEffect, useRef, useState } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <p>{time}초</p>
      <button type="button" onClick={start}>시작</button>
      <button type="button" onClick={stop}>정지</button>
    </div>
  );
}

export default Stopwatch;
```

**⚙️ 핵심 동작 원리**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">intervalRef (저장소)</div><div class="wda-fcard-dsc"><code>setInterval</code>이 반환하는 고유 ID(숫자)를 <code>intervalRef.current</code>에 보관합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">값 유지 (Persistence)</div><div class="wda-fcard-dsc"><code>setTime</code>으로 인해 화면이 매초 다시 그려져도, <code>intervalRef</code> 안에 있는 ID 값은 사라지지 않고 유지됩니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">렌더링 방지 (No Re-render)</div><div class="wda-fcard-dsc">타이머 ID를 저장하거나 바꿀 때, 굳이 화면을 다시 그릴 필요가 없으므로 <code>useState</code> 대신 <code>useRef</code>를 사용하여 불필요한 렌더링을 막습니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>왜 let id 변수를 쓰면 안 되나요?</strong></p>
  <p>함수형 컴포넌트는 렌더링될 때마다 함수가 <strong>'새로'</strong> 실행됩니다.<br>
  만약 <code>let id</code>로 선언했다면, 1초마다 화면이 갱신될 때 <code>id</code> 변수도 초기화되어 날아가 버립니다.<br>
  결국 <code>stop</code> 함수를 눌렀을 때, 멈춰야 할 타이머 ID를 찾지 못해 멈추지 않는 버그가 발생합니다.</p>
</div>

---

<h2>11. 잠깐! 왜 여기서 setInterval을 쓰나요?</h2>

**🆚 타이머 함수 선택 가이드**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">🥁 setInterval (메트로놈)</div><div class="wda-fcard-dsc"><strong>동작</strong>: "1초마다 계속 울려라" (설정한 간격으로 무한 반복)<br><strong>목적</strong>: 반복 실행 (Loop)<br><strong>예시</strong>: 스톱워치, 시계, 카운트다운</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">⏳ setTimeout (모래시계)</div><div class="wda-fcard-dsc"><strong>동작</strong>: "1초 뒤에 한 번만 울려라" (설정한 시간 뒤에 1회 실행)<br><strong>목적</strong>: 지연 실행 (Delay)<br><strong>예시</strong>: 알림 창 닫기, 검색어 입력 대기(디바운싱)</div></div>
</div>

**🆚 Q. setTimeout을 계속 부르면 똑같지 않나요? ("이어달리기")**

**답변**: 네, `useEffect`나 재귀 호출을 이용하면 비슷하게 동작합니다. 하지만 용도에 따라 선택이 달라집니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">정밀한 간격 (setInterval)</div><div class="wda-fcard-dsc">스톱워치처럼 시간 간격(0.01초 등)이 일정하게 유지되어야 할 때는 <code>setInterval</code>이 오차(Drift)가 적고 관리가 편합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">순차적 실행 (setTimeout)</div><div class="wda-fcard-dsc">API 요청처럼 "앞의 작업이 완전히 끝난 뒤에" 다음 작업을 시작해야 할 때는 <code>setTimeout</code> 재귀 호출 패턴이 더 안전합니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"기차와 택시의 차이"</strong></p>
  <ul>
    <li><strong>setInterval (기차)</strong>: 승객이 탔든 안 탔든 정해진 시간표대로 무조건 출발합니다. (시간 엄수 중요)</li>
    <li><strong>setTimeout 재귀 (택시)</strong>: 목적지에 도착해서 손님을 내려주고 나야 다음 손님을 태우러 갑니다. (앞 작업 완료 중요)</li>
  </ul>
  <p>스톱워치는 시간이 정확해야 하는 '기차' 같은 상황이므로 <code>setInterval</code>이 정답입니다.</p>
  <p><code>setInterval</code>은 일정 간격으로 반복 실행해야 할 때 사용하기 쉽습니다.<br>
  다만 브라우저 상태나 메인 스레드 작업에 따라 시간 오차가 생길 수 있으므로, 정밀한 스톱워치가 필요하다면 <code>Date.now()</code>나 <code>performance.now()</code>를 함께 사용해 실제 경과 시간을 계산하는 방식이 더 안전합니다.</p>
</div>

---

<h2>12. 유용한 패턴 1 : useIsMounted</h2>

**📝 구현 코드**

이 커스텀 훅(Custom Hook)은 **컴포넌트가 현재 화면에 붙어있는지(Mount) 아니면 사라졌는지(Unmount)** 를 판단해줍니다.

```jsx
import { useRef, useEffect } from 'react';

function useIsMounted() {
  const isMounted = useRef(false); // 1. 초기값 false 설정

  useEffect(() => {
    isMounted.current = true; // 2. 마운트 되면 true로 변경

    return () => {
      isMounted.current = false; // 3. 언마운트(사라짐) 되면 false로 변경
    };
  }, []); // 빈 배열: 처음 한 번만 실행

  return isMounted; // ref 객체 반환
}
```

**💡 활용 사례 (Use Case)**

**"비동기 작업 후, 컴포넌트 생사 확인"**
API 요청을 보냈는데 응답이 오기 전에 사용자가 **페이지를 이동(언마운트)** 해버린 경우를 방지합니다.

<div class="wda-callout wda-cw">
  <p><strong>문제 상황</strong>: 이미 사라진 컴포넌트에 <code>setState</code>를 하려고 하면 "메모리 누수(Memory Leak)" 경고가 뜨거나 에러가 발생할 수 있습니다.</p>
  <p><strong>해결 방법</strong>: <code>isMounted</code> 값을 확인한 뒤, <strong>컴포넌트가 살아있을 때만</strong> 상태를 업데이트합니다.</p>
  <p>다만 최신 React에서는 언마운트 후 <code>setState</code> 경고가 예전처럼 표시되지 않을 수 있으며,<br>
  실제 데이터 요청에서는 <code>AbortController</code>로 요청 자체를 취소하는 방식이 더 권장됩니다.</p>
</div>

```jsx
// 활용 예시
if (isMounted.current) {
  setState(newData); // ✅ 안전하게 업데이트
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"집에 사람 있나요?"</strong></p>
  <p>택배(데이터)가 도착했는데 집(컴포넌트)이 이사 가고 없으면 택배를 두고 갈 수 없습니다. <code>useIsMounted</code>는 문을 두드려 "아직 거기 계신가요?"라고 확인하는 절차와 같습니다. 특히 <strong>느린 인터넷 환경</strong>이나 <strong>빠른 페이지 이동</strong> 시 발생할 수 있는 버그를 막아주는 아주 든든한 패턴입니다.</p>
</div>

---

<h2>13. 유용한 패턴 2 : useClickOutside</h2>

**📝 구현 코드**

모달(Modal)이나 드롭다운 메뉴가 열려 있을 때, **그 영역의 바깥쪽을 클릭하면 닫히게 만드는** 커스텀 훅입니다.

```jsx
import { useRef, useEffect } from 'react';

function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      // 핵심 로직:
      // 1. ref가 현재 연결되어 있고 (ref.current)
      // 2. 클릭한 요소(e.target)가 ref 영역 안에 포함되지 않는다면 (!contains)
      // => "바깥을 클릭했다"고 판단!
      if (ref.current && !ref.current.contains(e.target)) {
        callback(); // 닫기 함수 실행
      }
    };

    // 화면 전체(document)에 클릭 감지기 부착
    document.addEventListener('mousedown', handleClick);
    
    // 뒷정리: 컴포넌트 사라질 때 감지기 제거
    return () => document.removeEventListener('mousedown', handleClick);
  }, [callback]);

  return ref;
}
```

**💡 활용 사례 (Use Case)**

**"모달 창 닫기 구현의 국룰 패턴"**

<div class="wda-callout wda-ci">
  <p><strong>상황</strong>: 사용자가 모달 창을 띄웠다가, 취소 버튼을 누르지 않고 그냥 <strong>어두운 배경(Dimmed Area)을 클릭</strong>해서 닫고 싶어 할 때 사용합니다.</p>
</div>

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sdsc">모달 박스(<code>div</code>)에 <code>ref</code>를 연결합니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sdsc"><code>useClickOutside</code> 훅이 화면 전체의 클릭 이벤트를 감시합니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sdsc">클릭된 위치가 <strong>"내 구역(ref) 안인가, 밖인가?"</strong>를 <code>Node.contains()</code> 메서드로 판별하여 바깥일 때만 닫기 명령을 내립니다.</div></div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>contains 메서드가 뭔가요?</strong></p>
  <ul>
    <li><code>부모요소.contains(자식요소)</code>: 부모 요소 안에 자식 요소가 들어있는지 확인하는 자바스크립트 표준 함수입니다.</li>
    <li>"내 집 안에 있는 물건인가?"를 확인해서, 집 밖의 물건(배경)을 건드렸을 때만 반응하도록 만드는 똑똑한 필터 역할을 합니다.</li>
  </ul>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><strong>callback이 매 렌더링마다 바뀐다면?</strong></p>
  <p><code>useEffect</code>의 의존성 배열에 <code>callback</code>이 들어있으므로, 부모 컴포넌트에서 매 렌더링마다 새로운 함수를 넘기면 이벤트 리스너가 계속 재등록될 수 있습니다.<br>
  이런 경우 <code>callback</code>을 <code>useCallback</code>으로 감싸 함수를 안정적으로 유지하면 불필요한 재등록을 줄일 수 있습니다.</p>
</div>

---

<h2>14. 유용한 예제 : Canvas API</h2>

**📝 구현 코드**

리액트의 가상 DOM은 캔버스 내부의 픽셀 단위 그래픽을 제어할 수 없습니다. 따라서 `ref`를 사용하여 실제 캔버스 요소에 접근한 뒤, 그래픽 명령(`getContext`)을 직접 내려야 합니다.

```jsx
import { useRef, useEffect } from 'react';

function CanvasDraw() {
  const canvasRef = useRef(null); // 1. DOM 연결용 ref 생성

  useEffect(() => {
    // 3. 화면이 다 그려진 후(Mount) 실행
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d'); // 캔버스의 그리기 도구(Context) 가져오기
    if (!ctx) return;

    // 4. 리액트와 무관하게 직접 그리기 명령 수행
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
  }, []); // 빈 배열: 처음 한 번만 실행

  // 2. ref 연결
  return <canvas ref={canvasRef} width="200" height="200" />;
}
```

**📌 DOM 직접 제어의 정석**

**"리액트의 통제권 밖과 소통하는 연결 고리"**
리액트 렌더링 사이클 외부에서 동작하는 시스템을 연동할 때 `ref`는 필수적인 다리 역할을 합니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Canvas API</div><div class="wda-fcard-dsc">그래픽 그리기</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Map Library</div><div class="wda-fcard-dsc">Google Maps, Naver Maps, Kakao Maps 연동</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Chart Library</div><div class="wda-fcard-dsc">D3.js, Chart.js 등 복잡한 시각화 라이브러리 제어</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"액자는 리액트가, 그림은 내가"</strong></p>
  <ul>
    <li><strong>React (&lt;canvas /&gt;)</strong>: "여기 200x200 크기의 캔버스를 놔둘게." (액자 설치)</li>
    <li><strong>Ref (ctx.fillRect)</strong>: "그 안에 초록색 사각형을 그려줘." (실제 그림 그리기)</li>
  </ul>
  <p>리액트는 캔버스 태그의 생성과 삭제만 관리하고, 그 내부의 복잡한 그림은 <code>ref</code>를 통해 직접 그리는 분업 구조입니다.</p>
</div>

---

<h2>15. 초급 패턴 : 토글 포커스 (Toggle Focus)</h2>

**📌 개념 (Concept)**

**"조건부 렌더링 요소 포커스"**
버튼을 누르면 숨겨져 있던 입력창(`input`)이 나타나면서, 동시에 **자동으로 커서가 깜빡이게(Focus)** 만드는 UI 패턴입니다.

**📝 예제 코드**

```jsx
import { useState, useRef } from 'react';

function ToggleFocus() {
  const inputRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    // 1. 상태 변경 (화면 갱신 요청)
    setIsEnabled((prev) => !prev); 
    
    // 2. 포커스 이동 시도
    // 현재는 '비활성화(false)' 상태지만, 버튼을 눌렀으니 곧 '활성화(true)'가 될 것임.
    // 그래서 (!isEnabled) 조건문 안에서 포커스를 줌.
    if (!isEnabled) {
      // 🚨 핵심: setTimeout을 사용하여 '한 템포 늦게' 실행
      setTimeout(() => {
        // 이때는 이미 리액트가 화면에 input을 그려놓은 상태임
        inputRef.current?.focus();
      }, 0);
    }
  };

  return (
    <>
      <button type="button" onClick={handleToggle}>
        {isEnabled ? '비활성화' : '활성화 및 입력'}
      </button>
      
      {/* isEnabled가 true일 때만 DOM에 input이 생성됨 */}
      {isEnabled && <input ref={inputRef} />}
    </>
  );
}
```

**💡 핵심 테크닉 : `setTimeout(..., 0)`**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">문제점</div><div class="wda-fcard-dsc"><code>setIsEnabled(true)</code>를 호출했다고 해서 바로 화면에 <code>&lt;input&gt;</code> 태그가 생기는 것이 아닙니다. 리액트가 화면을 그리는 데는 아주 짧지만 시간이 걸립니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">해결책</div><div class="wda-fcard-dsc"><code>setTimeout(..., 0)</code>을 사용하면, 리액트가 화면 그리기(렌더링)를 끝낼 때까지 기다렸다가 포커스 명령을 실행하게 됩니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"순서를 기다리는 번호표"</strong></p>
  <p><code>setTimeout(func, 0)</code>은 시간을 지연시키는 게 목적이 아니라, "지금 하고 있는 일(화면 그리기) 다 끝나면 실행해줘"라고 번호표를 뽑고 맨 뒤로 가서 줄을 서는 것과 같습니다.<br>
  덕분에 코드는 <strong>DOM 생성 완료 ➡ 포커스 실행</strong>의 안전한 순서를 보장받게 됩니다.</p>
  <p><code>setTimeout(..., 0)</code>은 현재 실행 중인 코드가 끝난 뒤 포커스 코드를 나중에 실행하도록 미루는 방식입니다.<br>
  간단한 예제에서는 동작할 수 있지만, React에서 DOM 생성 이후의 작업을 안정적으로 처리하려면 <code>useEffect</code> 버전이 더 권장됩니다.</p>
</div>

---

<h2>16. (보충) 토글 포커스 (useEffect 버전)</h2>

**🎯 Mission**

**"렌더링이 끝난 뒤에 포커스 주기"**
`setTimeout`으로 시간을 억지로 지연시키는 대신, **"화면 그리기(Render)가 완료되면 실행하라"**는 `useEffect`의 본래 기능을 활용합니다.

**📝 예제 코드**

```jsx
import { useState, useRef, useEffect } from 'react';

function ToggleFocusEffect() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  // 1. 화면 갱신(렌더링)이 끝난 직후 실행됨
  useEffect(() => {
    // 2. 입력창이 화면에 존재하고(isOpen이 true), ref가 연결되었다면
    if (isOpen && inputRef.current) {
      inputRef.current.focus(); // 3. 포커스 실행
    }
  }, [isOpen]); // 4. 의존성 배열: isOpen 상태가 바뀔 때마다 감지

  return (
    <div>
      <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? '닫기' : '열기 & 포커스'}
      </button>

      {/* isOpen이 true일 때만 입력창 생성 */}
      {isOpen && <input ref={inputRef} placeholder="자동 포커스!" />}
    </div>
  );
}

export default ToggleFocusEffect;
```

**⚙️ 동작 원리**

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">State 변경</div><div class="wda-sdsc">버튼을 누르면 <code>setIsOpen(true)</code>가 실행되어 리액트가 화면을 다시 그립니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">DOM 생성</div><div class="wda-sdsc">화면에 <code>&lt;input&gt;</code> 태그가 새로 생겨납니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">Effect 실행</div><div class="wda-sdsc">렌더링이 완료된 직후 <code>useEffect</code>가 실행됩니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">조건 확인</div><div class="wda-sdsc"><code>isOpen</code>이 <code>true</code>이므로 <code>inputRef.current.focus()</code>가 안전하게 실행됩니다.</div></div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>왜 이 방법이 더 좋은가요?</strong></p>
  <ul>
    <li><strong>정확한 타이밍</strong>: <code>setTimeout</code>은 0초라도 '지연'을 시키는 것이라 미세한 오차가 있을 수 있지만, <code>useEffect</code>는 "DOM 업데이트가 확실히 끝난 시점"을 리액트가 보장해 줍니다.</li>
    <li><strong>가독성</strong>: "상태가 변하면 → 부수 효과(Focus)를 실행한다"는 흐름이 코드에 명확하게 보입니다.</li>
  </ul>
</div>

---

<h2>17. (심화) 자식 컴포넌트 DOM 제어 (forwardRef)</h2>

**📌 개념 (Concept)**

**"부모가 자식의 내장 기관(DOM)을 직접 제어하고 싶을 때"**
리액트에서 `ref`는 일반적인 `props`처럼 자식에게 그냥 전달되지 않습니다. 자식 컴포넌트가 자신의 내부 DOM 요소(예: `<input>`)를 부모에게 공개하려면, **React 18 이하(기존 방식)** 에서는 반드시 **`forwardRef`** 라는 특수한 함수로 자신을 감싸야 합니다.

**React 19부터는 상황이 조금 달라집니다.** `ref`를 일반 `prop`처럼 함수 컴포넌트의 두 번째 매개변수가 아니라 `props.ref` 형태로 바로 받을 수 있게 되어, `forwardRef`로 감싸지 않아도 자식이 `ref`를 전달받을 수 있습니다.  
즉 React 19 이상에서는 `forwardRef`가 **필수가 아니며**, React 팀에서도 향후 버전에서 **점진적으로 제거(deprecate)할 예정**이라고 안내하고 있습니다.  
다만 기존 코드(React 18 이하)나 라이브러리에는 `forwardRef`가 여전히 많이 쓰이고 있으므로, 아래 예제처럼 **읽고 이해할 수 있어야** 합니다.

**📝 예제 코드**

```jsx
import { forwardRef, useRef, useEffect } from 'react';

// 1. 자식 컴포넌트 (Child)
// props와 함께 ref를 두 번째 인자로 받으려면 forwardRef로 감싸야 합니다.
const CustomInput = forwardRef((props, ref) => {
  // 부모가 보낸 ref를 자신의 내부 input 태그에 연결합니다.
  return <input ref={ref} className="input-style" {...props} />;
});

// 2. 부모 컴포넌트 (Parent)
function Parent() {
  const inputRef = useRef(null);

  useEffect(() => {
    // 3. 부모가 자식 컴포넌트 안의 input을 직접 제어(Focus) 할 수 있습니다.
    inputRef.current?.focus(); 
  }, []);

  // 마치 html 태그에 ref를 달듯이 컴포넌트에 ref를 전달합니다.
  return <CustomInput ref={inputRef} />;
}

export default Parent;
```

**📝 핵심 규칙**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">전달 불가</div><div class="wda-fcard-dsc">일반적인 함수형 컴포넌트는 <code>ref</code>라는 속성을 받지 못하고 무시합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">forwardRef</div><div class="wda-fcard-dsc">"이 컴포넌트는 외부에서 <code>ref</code>를 받을 수 있어요"라고 리액트에게 알려주는 래퍼(Wrapper)입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">연결</div><div class="wda-fcard-dsc">자식 컴포넌트는 전달받은 <code>ref</code>를 자신이 가진 실제 HTML 태그(<code>input</code>, <code>button</code> 등)에 연결해 줍니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"택배 대리 수령"</strong></p>
  <ul>
    <li><strong>부모</strong>: "내 리모컨(ref)을 줄 테니, 네 안에 있는 TV(input)에 연결해 줘."</li>
    <li><strong>자식(일반)</strong>: "전 ref 같은 거 안 받는데요?" (거절)</li>
    <li><strong>자식(forwardRef)</strong>: "아, 이건 제 내부 TV에 연결하라는 거군요. 알겠습니다!" (수락 및 연결)</li>
  </ul>
</div>

<div class="wda-callout wda-cw">
  <p><strong>정리</strong>: <strong>React 18 이하 / 기존 코드</strong>에서는 자식의 DOM을 부모에게 노출하려면 <code>forwardRef</code>가 필수입니다.<br>
  <strong>React 19부터</strong>는 <code>forwardRef</code> 없이도 <code>ref</code>를 일반 <code>prop</code>처럼 전달할 수 있어 필수는 아니며, 향후 버전에서 <code>forwardRef</code> 자체가 점진적으로 사라질(deprecated) 예정입니다.<br>
  다만 지금 당장 기존 코드에서 사라지는 것은 아니므로, 두 방식을 모두 이해해 두는 것이 안전합니다.</p>
</div>

---

<h2>18. (심화) 동적 Refs 관리 (List)</h2>

**⚠️ 문제점과 해결책**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">문제점</div><div class="wda-fcard-dsc"><code>const ref = useRef(null)</code> 방식은 <strong>단 하나의 DOM 요소</strong>만 담을 수 있습니다. 따라서 반복문(<code>map</code>)으로 생성되는 <strong>여러 개의 목록 아이템(li)</strong>을 각각 제어하기엔 부족합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">해결책</div><div class="wda-fcard-dsc"><code>Map</code>이나 <code>Array</code> 같은 컬렉션(Collection)을 저장소로 만듭니다. <code>ref</code> 속성에 변수 대신 함수(Callback)를 전달하여, 각 요소를 저장소에 직접 등록합니다.</div></div>
</div>

**📝 예제 코드 (종합)**

두 가지 패턴을 하나의 컴포넌트에서 비교하는 코드입니다.

```jsx
import { useRef } from 'react';

function ItemList({ items }) {
  // -------------------------------------------------------
  // 1. 저장소 생성 (취향과 상황에 따라 선택)
  // -------------------------------------------------------

  // [방법 A] FM 패턴 : Map 사용 (가장 안전함)
  // 장점: ID를 키로 사용하므로 순서가 바뀌어도 안전함
  const itemsRef = useRef(new Map());

  // [방법 B] Simple 패턴 : Array 사용 (간편함)
  // 장점: 코드가 짧고 인덱스로 접근 가능
  const simpleRefs = useRef([]);

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item.id}
          
          // ---------------------------------------------------
          // 2. Callback Ref : DOM 요소를 받아 저장소에 넣기
          // ---------------------------------------------------
          ref={(node) => {
            // [방법 A 로직] Map에 저장 (ID 기반)
            if (node) {
              itemsRef.current.set(item.id, node); // 생성 시 등록
            } else {
              itemsRef.current.delete(item.id);    // 삭제 시 청소
            }

            // [방법 B 로직] Array에 저장 (Index 기반)
            // simpleRefs.current[index] = node;
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
```

**🆚 두 가지 방법 비교 분석**

상황에 맞춰 더 적절한 방법을 선택하세요.

| 구분 | 방법 A : Map (권장) | 방법 B : Array (단순) |
| --- | --- | --- |
| **저장 방식** | `ID`를 키(Key)로 사용하여 저장 | 순서(`Index`)대로 배열에 저장 |
| **코드 예시** | `map.set(id, node)` | `arr[index] = node` |
| **안전성** | ⭐️⭐️⭐️⭐️⭐️ (매우 안전) | ⭐️⭐️⭐️ (보통) |
| **추천 상황** | 목록의 **추가/삭제/순서 변경**이 잦을 때 | 목록이 고정되어 있고 **단순할 때** |
| **접근 방법** | `itemsRef.current.get(3)` (ID가 3인 요소) | `simpleRefs.current[2]` (3번째 요소) |

**⚙️ 핵심 원리 : Callback Ref**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">동작 원리</div><div class="wda-fcard-dsc"><code>ref={(node) => ...}</code> 처럼 함수를 전달하면, 리액트는 해당 태그가 화면에 그려질 때 그 DOM 노드를 함수의 인자(<code>node</code>)로 넣어줍니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">활용</div><div class="wda-fcard-dsc">개발자는 이 <code>node</code>를 받아서 <code>Map</code>에 넣든, <code>Array</code>에 넣든, 입맛대로 관리하면 됩니다.</div></div>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><strong>Callback Ref와 Strict Mode</strong></p>
  <p>Callback ref는 DOM이 연결될 때 <code>node</code>를 받고, 연결이 해제될 때 <code>null</code>을 받을 수 있습니다. 개발 모드나 Strict Mode에서는 ref 콜백이 예상보다 자주 호출될 수 있으므로, 위 코드처럼 Map에 <code>set</code>/<code>delete</code>하는 로직으로 연결/해제를 모두 처리하는 방식이 안전합니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"지정석 vs 선착순"</strong></p>
  <ul>
    <li><strong>Map (지정석)</strong>: "학생 ID가 'cheolsu'인 친구는 여기 앉으세요." (이름표를 보고 자리를 찾음 → 순서가 섞여도 사람을 찾을 수 있음)</li>
    <li><strong>Array (선착순/번호순)</strong>: "첫 번째 온 사람 여기, 두 번째 온 사람 저기 앉으세요." (번호표대로 앉음 → 중간에 한 명이 빠지면 뒷사람 번호가 당겨지면서 꼬일 수 있음)</li>
  </ul>
</div>

**🆚 핵심 차이 : Key(ID)로 찾느냐 vs 순서(Index)로 찾느냐**

**Map 방식 (객체 성격)** — "이름표(ID)를 붙여서 관리"

순서가 뒤죽박죽 섞여도 **고유한 ID**만 알면 정확한 친구(DOM)를 찾아낼 수 있습니다.

- **저장 형태**: `key-value` 쌍으로 관리
- **접근 방법**: `itemsRef.current.get('user_123')`
- **비유**: "사물함" (101호 사물함, 102호 사물함... 위치가 바뀌어도 번호는 그대로)

```jsx
// 내부 데이터 모습 (Map)
{
  "id_1": <li id="1">...</li>,
  "id_5": <li id="5">...</li>, // 중간 번호가 없어도 상관없음
  "id_9": <li id="9">...</li>
}
```

**Array 방식 (배열)** — "번호표(Index) 순서대로 줄 세우기"

철저하게 **순서(0, 1, 2...)** 에 의존합니다. 중간에 한 명이 빠지면 뒤에 있는 친구들의 번호가 전부 앞당겨집니다.

- **저장 형태**: 순서가 있는 리스트
- **접근 방법**: `itemsRef.current[2]`
- **비유**: "줄 서기" (3번째 서 있는 사람! → 중간에 한 명이 집에 가면 4번째 사람이 3번째가 됨)

```jsx
// 내부 데이터 모습 (Array)
[
  <li id="1">...</li>, // index 0
  <li id="5">...</li>, // index 1
  <li id="9">...</li>  // index 2
]
```

**💡 왜 Map(객체) 방식을 더 권장하나요?**

**"삭제(Delete)" 상황 때문입니다.**

만약 **2번째 아이템을 삭제**했다고 가정해 봅시다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Array(배열) 방식</div><div class="wda-fcard-dsc">2번방에 있던 요소가 사라지면, <strong>3번방에 있던 요소가 2번방으로 강제로 이사</strong>를 옵니다. 이 과정에서 <code>ref</code> 정보가 꼬이거나, 엉뚱한 DOM을 가리키는 버그가 발생할 확률이 높습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Map(객체) 방식</div><div class="wda-fcard-dsc">그냥 <strong>해당 ID(id_5)의 데이터만 쏙 빼내면 끝</strong>입니다. 다른 아이템(id_1, id_9)에는 아무런 영향을 주지 않습니다.</div></div>
</div>

**🧭 선택 가이드**

<div class="wda-callout wda-cs">
  <p><strong>결론</strong></p>
  <p><strong>Map</strong>: 데이터가 자주 바뀌는 <strong>동적인 리스트</strong> (추가/삭제/정렬 빈번)<br>
  <strong>Array</strong>: 한 번 그려지면 안 바뀌는 <strong>정적인 리스트</strong> (단순 메뉴판 등)</p>
</div>

---

<h2>19. useRef vs useState 정리</h2>

**🆚 핵심 비교표**

두 훅의 가장 큰 차이는 "값이 변했을 때 리액트가 화면을 다시 그리느냐(Rendering)"에 있습니다.

| 특성 | useState | useRef |
| --- | --- | --- |
| **값 변경 시** | 렌더링 발생 (화면 갱신) | 렌더링 없음 (조용히 값만 바뀜) |
| **주요 용도** | 화면에 보여줄 데이터 (UI) | DOM 접근, 화면과 무관한 내부 변수 |
| **값 바꾸는 법** | `setState(새값)` 함수 사용 | `.current = 새값` 직접 할당 |
| **대표 예시** | 카운터 숫자, 입력창 내용, 게시글 | 타이머 ID, 스크롤 위치, input 태그 |

**📝 예제 코드 비교**

```jsx
// 1. 화면에 보여줄 값 👉 useState
// 값이 바뀌면 화면이 "번쩍"하고 다시 그려져야 사용자가 알 수 있음
const [visible, setVisible] = useState(false);

// 2. 내부에서만 쓸 값 👉 useRef
// 타이머 ID 같은 건 개발자만 알면 됨. 화면을 다시 그릴 필요가 없음 (성능 절약)
const timerIdRef = useRef(null);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"무대 위 배우 vs 무대 뒤 스태프"</strong></p>
  <ul>
    <li><strong>useState (배우)</strong>: 옷(값)을 갈아입으면 관객(사용자)이 바로 알아챕니다. 화면에 변화를 보여줘야 할 때 씁니다.</li>
    <li><strong>useRef (스태프)</strong>: 무대 뒤에서 바쁘게 움직여도 관객은 모릅니다. 하지만 연극(앱)이 돌아가는 데 꼭 필요한 중요한 일을 처리합니다.</li>
  </ul>
  <p><strong>결정 기준 (Decision Rule)</strong>: "이 값이 바뀌었을 때 화면이 깜빡여야 하는가?" — YES 👉 useState / NO 👉 useRef</p>
</div>

---

<h2>20. 주의사항 : ref 사용 시 금기사항</h2>

**⚠️ 화면 갱신이 안 됩니다**

**"ref는 알람을 울리지 않습니다."**
`ref.current`의 값을 아무리 바꿔도 리액트는 그 사실을 모릅니다. 따라서 화면에 숫자가 바로 바뀌길 기대하면 안 됩니다.

```jsx
import { useRef } from 'react';

// ❌ 기대와 다른 동작
function Bad() {
  const countRef = useRef(0);

  const handleClick = () => {
    // 값은 0 -> 1로 확실히 변했습니다. (동기적 변경)
    countRef.current += 1; 
    console.log(countRef.current); // 콘솔에는 1이 찍힘
    
    // 😱 하지만 리액트에게 "다시 그려!"라는 신호(Render)를 안 보냈으므로
    // 화면의 숫자는 여전히 0으로 남아있습니다.
  };

  return <p>{countRef.current}</p>;
}
```

**⚠️ 렌더링 도중에 값을 바꾸면 안 됩니다**

**"계산 중에 장부를 조작하지 마세요."**
리액트가 컴포넌트 함수를 실행해서 화면을 그리고 있는 도중(Render Phase)에 `ref` 값을 수정하면 치명적인 버그가 발생할 수 있습니다.

```jsx
import { useRef, useEffect } from 'react';

// ❌ 잘못된 코드 (렌더링 도중 변경)
function Bad() {
  const ref = useRef(0);
  
  // 함수 본문(Rendering)에서 값을 바꾸면 예측 불가능한 동작을 함
  // (Strict Mode에서 두 번 실행되면서 값이 2씩 증가하거나 꼬임)
  ref.current += 1; 

  return <p>{ref.current}</p>;
}

// ✅ 올바른 코드 (useEffect 또는 핸들러 사용)
function Good() {
  const ref = useRef(0);

  useEffect(() => {
    // 렌더링이 다 끝난 뒤(Commit Phase)에 안전하게 변경
    ref.current += 1;
  }, []);

  return <p>{ref.current}</p>; // (단, 화면 갱신은 안 됨)
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"순수(Pure)해야 합니다."</strong></p>
  <p>리액트의 컴포넌트 함수는 "입력(Props)이 같으면 항상 같은 결과(JSX)를 내놓는 순수 함수"여야 합니다.<br>
  그런데 렌더링 도중에 <code>ref</code> 같은 외부 변수를 조작하면, 실행할 때마다 결과가 달라지는 부작용(Side Effect)이 생깁니다.<br>
  값을 바꾸는 행위는 항상 <strong>이벤트 핸들러</strong>(<code>onClick</code>)나 <strong>useEffect</strong> 안에서만 수행해야 합니다.</p>
</div>

<div class="wda-callout wda-cw">
  <p><strong>정리하면: ref.current는 "화면에 무엇을 그릴지"를 결정하는 값으로 쓰지 않는 것이 좋습니다.</strong></p>
  <p><code>ref.current</code>를 바꿔도 리액트는 리렌더링을 트리거하지 않으므로, 만약 <code>ref.current</code> 값을 기준으로 JSX 내용을 다르게 그리려고 하면 화면이 실제 값과 어긋나는(stale) 상태로 남을 수 있습니다.<br>
  그래서 <code>ref.current</code>는 일반적으로 <strong>이벤트 핸들러나 useEffect 안에서 읽고 쓰는 용도</strong>(DOM 접근, 타이머 ID 보관 등)로 사용하는 것이 안전하며, 화면에 표시되어야 하는 값이라면 <code>useState</code>로 관리하는 것이 맞습니다.</p>
</div>

---

<h2>21. ✅ 핵심 요약</h2>

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>useRef는 <strong>렌더링을 유발하지 않고</strong> 값을 저장하는 상자이며, 값은 <code>.current</code>로 읽고 쓴다.</li>
    <li><code>ref={myRef}</code>로 DOM 요소에 연결하면 focus, scrollIntoView 등 <strong>브라우저 API를 직접 호출</strong>할 수 있다.</li>
    <li>컴포넌트가 리렌더링돼도 <code>ref.current</code> 값은 <strong>사라지지 않고 유지</strong>된다 (타이머 ID, 이전 값 저장에 적합).</li>
    <li>화면에 보여줄 값은 <strong>useState</strong>, 내부에서만 쓸 값(타이머 ID, 스크롤 위치 등)은 <strong>useRef</strong>.</li>
    <li>ref.current는 렌더링 로직(함수 본문)이 아니라 <strong>이벤트 핸들러나 useEffect 안</strong>에서만 변경해야 한다.</li>
    <li>동적 리스트의 여러 DOM을 다룰 때는 <strong>Map 기반 콜백 ref</strong>가 배열보다 안전하다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: ref.current를 바꾸면 화면도 바로 갱신된다?</div>
    <div class="wda-mistake-right">정답: ref.current를 바꿔도 리액트는 <strong>리렌더링을 트리거하지 않는다</strong>. 값은 바뀌지만 화면은 그대로다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: let 변수로도 타이머 ID를 안전하게 기억할 수 있다?</div>
    <div class="wda-mistake-right">정답: 함수형 컴포넌트는 렌더링마다 새로 실행되므로 let 변수는 <strong>초기화</strong>된다. useRef만 리렌더링과 무관하게 값을 유지한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 목록의 여러 DOM을 다룰 땐 배열(Array)이 항상 더 안전하다?</div>
    <div class="wda-mistake-right">정답: 배열은 삭제 시 인덱스가 밀려 ref가 꼬일 수 있다. 추가·삭제가 잦은 동적 리스트는 <strong>Map(ID 기반)</strong>이 더 안전하다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: forwardRef는 React 19에서도 반드시 필요하다?</div>
    <div class="wda-mistake-right">정답: React 19부터는 ref를 일반 prop처럼 받을 수 있어 forwardRef가 <strong>필수가 아니며</strong>, 향후 점진적으로 제거될 예정이다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 선택 기준</div>
    <div class="wda-formula-block-body"><code>화면 갱신 필요 → useState / 불필요 → useRef</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 접근 방식</div>
    <div class="wda-formula-block-body"><code>.current로 읽고 쓴다</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 변경 위치</div>
    <div class="wda-formula-block-body"><code>이벤트 핸들러 · useEffect 안에서만</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">useRef가 반환하는 값의 형태는?</div>
    <div class="wda-flip-back">항상 { current: 값 } 형태의 객체다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">useRef 값을 바꿔도 화면이 갱신되지 않는 이유는?</div>
    <div class="wda-flip-back">값이 바뀌어도 리액트에게 "다시 그려라"는 렌더링 신호를 보내지 않기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">useState와 useRef를 구분하는 결정 기준 한 문장은?</div>
    <div class="wda-flip-back">"이 값이 바뀌었을 때 화면이 깜빡여야 하는가?" — YES면 useState, NO면 useRef.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">동적으로 추가·삭제되는 리스트의 여러 DOM을 관리할 때 권장되는 저장소는?</div>
    <div class="wda-flip-back">Map. ID를 키로 저장하면 순서가 바뀌어도 안전하게 접근할 수 있다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">forwardRef는 왜 필요했나?</div>
    <div class="wda-flip-back">일반 함수형 컴포넌트는 ref를 받지 못하기 때문에, 자식이 자신의 DOM을 부모에게 노출하려면 forwardRef로 감싸야 했다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">ref.current는 어디서 변경해야 안전한가?</div>
    <div class="wda-flip-back">렌더링 도중(함수 본문)이 아니라 이벤트 핸들러나 useEffect 안에서 변경해야 한다.</div>
  </div>
</div>
