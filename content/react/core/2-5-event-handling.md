---
title: "2-5 이벤트 처리하기"
status: "completed"
description: "React 이벤트의 카멜케이스 표기법과 함수 참조 전달 원칙, onClick/onChange/onSubmit 이벤트, 이벤트 객체 활용, 인자 전달 패턴까지 React 이벤트 처리의 기초를 정리한다."
category: "React"
section: "Core"
tags:
  - react
  - event
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
.wda-fcard-pro{border-left:3px solid rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>React 이벤트 문법 이해</strong> — HTML 이벤트와 React 이벤트의 차이점인 camelCase와 함수 참조 전달 방식을 이해합니다.<br>
  • <strong>이벤트 핸들러 작성하기</strong> — onClick, onChange, onSubmit에서 실행할 이벤트 핸들러 함수를 작성할 수 있습니다.<br>
  • <strong>이벤트 객체 활용하기</strong> — <code>e.preventDefault()</code>, <code>e.stopPropagation()</code>, <code>e.target.value</code> 같은 이벤트 객체 사용법을 익힙니다.<br>
  • <strong>인자 전달 패턴 익히기</strong> — 이벤트 핸들러에 id 같은 값을 전달할 때 화살표 함수로 감싸는 패턴을 이해합니다.
</div>

---

<h2>1. React 이벤트란?</h2>

HTML 이벤트와 비슷하지만 다릅니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">HTML 방식</div>
    <div class="wda-fcard-dsc"><code>&lt;button onclick="handleClick()"&gt;클릭&lt;/button&gt;</code><br>• 소문자: <code>onclick</code><br>• 문자열로 함수 호출</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">React 방식</div>
    <div class="wda-fcard-dsc"><code>&lt;button onClick={handleClick}&gt;클릭&lt;/button&gt;</code><br>• 카멜케이스: <code>onClick</code><br>• 함수 자체를 전달</div>
  </div>
</div>

**🔑 핵심 차이**

<div class="wda-callout wda-ci">
  <p>React는 카멜케이스로 이벤트명 작성, 함수 참조를 전달합니다.</p>
</div>

---

<h2>2. onClick 이벤트</h2>

가장 자주 사용하는 클릭 이벤트입니다.

**🧪 예시 코드**

```jsx
function App() {
  // 이벤트 핸들러: 클릭 시 실행할 함수 정의
  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  };

  return (
    <div>
      {/* 이벤트 리스너: 클릭(onClick)하면 핸들러(handleClick) 실행 */}
      <button onClick={handleClick}>클릭하세요</button>
    </div>
  );
}
```

### 2) 핵심 용어

- **이벤트 핸들러:** 이벤트가 발생했을 때 실행할 함수입니다.
- **이벤트 속성:** `onClick`처럼 이벤트 핸들러를 컴포넌트나 태그에 연결하는 JSX 속성입니다.

---

<h2>3. 이벤트 핸들러 작성 패턴 (심화)</h2>

함수 전달 vs 함수 호출: 이것만 알면 됩니다!

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">✅ 올바른 방식 (함수 전달)</div>
    <div class="wda-fcard-dsc"><code>&lt;button onClick={handleClick}&gt;클릭&lt;/button&gt;</code><br>• 함수의 이름(참조)만 전달합니다.<br>• 사용자가 버튼을 클릭할 때 React가 실행합니다.<br>• <code>e</code> 객체가 자동으로 첫 번째 인자로 전달됩니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl">❌ 틀린 방식 (함수 호출)</div>
    <div class="wda-fcard-dsc"><code>&lt;button onClick={handleClick()}&gt;클릭&lt;/button&gt;</code><br>• <code>()</code>를 붙이면 즉시 실행됩니다.<br>• 렌더링 되자마자 실행되어 버립니다 (무한 루프 위험).<br>• <code>handleClick()</code>처럼 괄호를 붙이면 렌더링 중 즉시 실행됩니다.<br>그 결과값이 onClick에 들어가므로, 반환값이 함수가 아니라면 클릭했을 때 실행할 핸들러가 없어집니다.</div>
  </div>
</div>

---

<h2>4. 인자가 필요한 경우</h2>

화살표 함수로 감싸서 전달하기 (Wrapper Function)

**🧪 예시 코드**

매개변수(ID 등)를 전달해야 할 때는 작성법이 달라집니다.

```jsx
const handleDelete = (id) => {
  console.log(id + '번 삭제');
};

// ❌ 틀림: 렌더링 시 즉시 실행됨 (괄호 안에 값을 넣었기 때문)
<button onClick={handleDelete(1)}>삭제</button>

// ✅ 정답: 화살표 함수로 감싸기 (클릭해야 실행됨)
<button onClick={() => handleDelete(1)}>삭제</button>
```

### 2) 동작 원리

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sdsc">사용자가 버튼을 클릭함</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sdsc">React가 <code>() =&gt; ...</code> 이 익명 함수를 실행함</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sdsc">익명 함수 안에서 <code>handleDelete(1)</code> 이 실행됨</div></div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>이벤트 객체도 같이 쓰려면?</strong>
  <p>ID도 전달하고 <code>e</code>(이벤트 객체)도 필요하다면 명시적으로 받아야 합니다.</p>
  <pre style="background:rgba(128,128,128,.08);border-radius:8px;padding:10px 12px;overflow-x:auto;font-size:.78rem;"><code>&lt;button onClick={(e) =&gt; handleDelete(1, e)}&gt;삭제&lt;/button&gt;</code></pre>
</div>

---

<h2>5. 이벤트 객체(e) 200% 활용하기</h2>

단순 클릭 그 이상을 처리해보자!

### 1) 🚫 기본 동작 막기 (preventDefault)

폼 제출 시 새로고침되거나, 링크 클릭 시 이동하는 것을 막습니다.

```javascript
const handleSubmit = (e) => {
  // 1. 새로고침 방지 (필수!)
  e.preventDefault();
  console.log('제출 완료');
};
```

### 2) 🛑 전파 멈춰! (stopPropagation)

부모에게 클릭 이벤트가 전달되지 않게 합니다. 모달 창 내부를 클릭했을 때 닫히지 않게 할 때 자주 씁니다.

```javascript
const handleInner = (e) => {
  // 부모에게 클릭 이벤트가 전달되지 않음
  e.stopPropagation();
  console.log('버튼만 클릭됨!');
};
```

부모-자식 관계에서 실제로 어떻게 동작하는지 예시로 확인해 보세요.

```jsx
function App() {
  const handleOuter = () => {
    console.log('부모 클릭');
  };

  const handleInner = (e) => {
    e.stopPropagation();
    console.log('자식 버튼만 클릭');
  };

  return (
    <div onClick={handleOuter}>
      <button onClick={handleInner}>안쪽 버튼</button>
    </div>
  );
}
```

`e.stopPropagation()`을 빼면 버튼을 클릭했을 때 자식 버튼 이벤트와 부모 div 이벤트가 모두 실행됩니다.

**💡 보충 설명**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">e.target</div>
    <div class="wda-fcard-dsc">실제 클릭된 요소 (예: 버튼 안의 span 아이콘)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">e.currentTarget</div>
    <div class="wda-fcard-dsc">이벤트 핸들러가 부착된 요소 (예: 버튼 그 자체)</div>
  </div>
</div>

---

<h2>6. onChange 이벤트</h2>

사용자가 입력창에 무언가를 입력하여 **값이 변경될 때** 발생하는 이벤트입니다.

**🧪 예시 코드**

입력한 글자가 화면에 실시간으로 반영되는 가장 기본적인 패턴입니다.

```jsx
import { useState } from 'react';

function App() {
  // 1. 텍스트를 저장할 공간 (State)
  const [text, setText] = useState("");

  // 2. 이벤트 핸들러: 타이핑할 때마다 실행
  const handleChange = (e) => {
    setText(e.target.value); // 3. 입력된 값을 State에 저장
  };

  return (
    <div>
      {/* 4. input과 핸들러 연결 */}
      <input type="text" value={text} onChange={handleChange} />
      <p>입력값: {text}</p>
    </div>
  );
}
```

### 2) 핵심 포인트

- **`e.target.value`:** 이벤트가 발생한 input 요소의 현재 입력값입니다. 사용자가 타이핑할 때마다 이 값을 `setText`에 넣어 State를 업데이트합니다.
- **동작 순서:** 타이핑 ➡ `onChange` 발생 ➡ `setText`로 값 저장 ➡ 화면 리렌더링 (글자 보임)

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 value={text}를 쓰나요?</strong>
  <p><code>value</code>에 State를 연결하면 React State가 입력값의 기준(source of truth)이 됩니다.<br>사용자가 입력하면 <code>onChange</code>로 State를 바꾸고, 변경된 State가 다시 input의 <code>value</code>로 표시됩니다.<br>이를 제어 컴포넌트(Controlled Component)라고 부릅니다.</p>
</div>

---

<h2>7. onSubmit 이벤트</h2>

폼(Form)이 제출될 때 발생하는 이벤트입니다.

**🧪 예시 코드**

`form` 태그 내부의 버튼을 클릭하면 실행됩니다.

```jsx
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 1. 페이지 새로고침 방지 (필수!)
    alert(`안녕하세요, ${name}님!`);
  };

  return (
    // 2. form 태그에 이벤트 연결
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {/* 3. type="submit" 버튼 클릭 시 발동 */}
      <button type="submit">제출</button>
    </form>
  );
}

export default App;
```

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <strong>e.preventDefault()</strong>
  <p>React에서 form 제출을 직접 처리하고 페이지 새로고침을 막으려면 <code>e.preventDefault()</code>를 사용합니다.<br>일반적인 SPA 폼 처리에서는 거의 항상 사용한다고 이해하면 됩니다.</p>
</div>

---

<h2>8. 인자 전달 패턴 복습: Wrapper Function</h2>

이벤트 핸들러 함수에 `id` 같은 **데이터(인자)를 함께 넘겨줘야 할 때** 사용하는 작성법입니다. 앞서 4장에서 본 Wrapper Function 패턴을 문법 공식으로 한 번 더 정리해 봅시다.

### 1) 핵심 문제 : "괄호를 쓰면 안 된다?"

리액트에서 함수 이름 뒤에 `()`를 붙이면 **화면이 그려질 때(렌더링) 즉시 실행**되어 버리는 문제가 발생합니다.

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl">❌ onClick={handleDelete(1)}</div>
    <div class="wda-fcard-dsc">(실행됨) <code>handleDelete(1)</code>은 렌더링 중 바로 실행되고, 반환값인 undefined가 onClick에 들어갑니다.<br>그래서 페이지가 열릴 때 console.log가 찍히고, 클릭할 때는 실행할 함수가 없습니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">✅ onClick={handleClick}</div>
    <div class="wda-fcard-dsc">(참조) 클릭해야 실행됨. 단, 인자를 넘길 수 없음.</div>
  </div>
</div>

### 2) 해결 방법 : "화살표 함수로 감싸기"

함수 실행을 **화살표 함수 `() => ...`** 안으로 쏙 넣어서 전달하면, 클릭할 때만 실행되도록 만들 수 있습니다.

```jsx
// 문법 공식
onClick={() => 함수이름(전달할값)}
```

**🧪 예시 코드**

```jsx
function App() {
  const handleDelete = (id) => {
    console.log(id + "번 게시물이 삭제되었습니다.");
  };

  return (
    <div>
      {/* 1. 잘못된 예 (즉시 실행됨) */}
      <button onClick={handleDelete(1)}>삭제(X)</button>

      {/* 2. 올바른 예 (화살표 함수로 감싸기) */}
      <button onClick={() => handleDelete(1)}>삭제(O)</button>
    </div>
  );
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Wrapper Function (래퍼 함수)</strong>
  <p>마치 선물을 포장지로 감싸듯이, 실행하고 싶은 함수(<code>handleDelete(1)</code>)를 익명 함수 <code>() =&gt; { }</code>로 한 번 감싸서 전달하는 원리입니다.<br>리액트가 클릭했을 때 이 '포장지(익명 함수)'를 뜯어서 그 안의 내용을 실행해 줍니다.</p>
</div>

---

<h2>9. 자주 쓰는 이벤트 종류</h2>

상황별로 적절한 이벤트를 선택하여 사용해야 합니다.

### 1) 주요 이벤트 목록

| **이벤트** | **설명** | **사용 예시** |
| --- | --- | --- |
| **onClick** | 클릭 시 | 버튼, 링크, 카드 |
| **onChange** | 값 변경 시 | input, select, textarea |
| **onSubmit** | 폼 제출 시 | form 태그 |
| **onFocus** | 포커스 시 | 입력 필드 활성화 |
| **onBlur** | 포커스 해제 시 | 유효성 검사 (입력 완료 후 체크) |
| **onKeyDown** | 키 누를 때 | 단축키, Enter 제출 |
| **onMouseEnter** | 마우스 진입 | 호버 효과 (마우스 올렸을 때) |
| **onMouseLeave** | 마우스 이탈 | 호버 해제 (마우스 뺐을 때) |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>공식 문서 확인:</strong> 여기에 없는 더 다양한 이벤트들은 React 공식 문서에서 확인할 수 있습니다.</li>
    <li><strong>onBlur 활용:</strong> 사용자가 아이디 입력을 마치고 다른 곳을 클릭할 때(<code>onBlur</code>), 중복 검사를 실행하는 방식으로 자주 사용됩니다.</li>
  </ul>
</div>

---

<h2>10. ⁉️ FAQ & Quiz</h2>

배운 내용을 점검해 보는 퀴즈 시간입니다.

### 1) Q1. 속성 이름 맞추기

**질문:** HTML의 `onclick=""`과 달리 React에서 클릭 이벤트를 처리하는 속성 이름은?

**정답:** **`onClick`** (카멜케이스)

### 2) Q2. 메서드 이름 맞추기

**질문:** 폼 제출 시 페이지가 새로고침되는 것을 막기 위해 호출해야 하는 메서드는?

**정답:** **`e.preventDefault()`**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>onClick:</strong> 리액트는 JSX 문법을 사용하므로, 이벤트 이름은 반드시 카멜케이스(CamelCase)로 작성해야 합니다.</li>
    <li><strong>e.preventDefault():</strong> <code>onSubmit</code> 같은 이벤트는 브라우저의 기본 동작(페이지 이동/새로고침)을 동반합니다.<br>SPA(Single Page Application)인 리액트에서 상태가 초기화되는 것을 막기 위해 꼭 사용해야 하는 필수 메서드입니다.</li>
  </ul>
</div>

---

<h2>11. ✅ 핵심 요약</h2>

이번 챕터에서 배운 이벤트 처리의 3가지 핵심 원칙입니다.

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>Event Basics (기본 문법)</strong></td>
    <td>• HTML과 달리 <strong>CamelCase</strong> 표기법을 사용합니다 (예: <code>onclick</code> ➡ <code>onClick</code>).<br>• 핸들러에는 함수 호출(<code>func()</code>)이 아닌 함수 참조(<code>func</code>)를 전달해야 합니다.</td>
  </tr>
  <tr>
    <td><strong>Prevention (기본 동작 방지)</strong></td>
    <td>• SPA(Single Page Application) 환경에서 폼(Form) 제출 시 페이지가 새로고침되는 것을 막아야 합니다.<br>• 반드시 <code>e.preventDefault()</code>를 호출하여 브라우저의 기본 동작을 차단하세요.</td>
  </tr>
  <tr>
    <td><strong>Arguments (인자 전달)</strong></td>
    <td>• 이벤트 핸들러에 <code>id</code> 같은 매개변수를 넘겨줘야 할 때가 있습니다.<br>• 이때는 <strong><code>() =&gt; func(id)</code> 형태의 화살표 함수</strong>로 감싸서 전달해야 실행 시점이 꼬이지 않습니다.</td>
  </tr>
</table>
