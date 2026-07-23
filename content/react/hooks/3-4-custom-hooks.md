---
title: "3-4 Custom Hooks 만들기"
status: "completed"
description: "반복되는 상태 로직을 함수로 추출하는 Custom Hook의 개념과 use 접두사 규칙, useToggle·useInput·useFetch·useLocalStorage 등 실전 패턴을 정리한다."
category: "React"
section: "Hooks"
tags:
  - react
  - hooks
  - custom-hooks
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
  • <strong>개념과 필요성</strong> — 반복되는 로직을 함수로 추출하여 재사용성을 높이는 원리를 이해합니다<br>
  • <strong>use 접두사 규칙</strong> — 리액트가 Hook을 인식하도록 돕는 명명 규칙(Convention)을 익힙니다<br>
  • <strong>로직 추출 실습</strong> — 실제 컴포넌트에서 중복되는 코드를 찾아 Custom Hook으로 분리해봅니다
</div>

---

<h2>1. Custom Hook이란?</h2>

**📌 정의 (Definition)**

<div class="wda-callout wda-ci">
  <p><strong>"이름이 use로 시작하는 자바스크립트 함수입니다."</strong></p>
  <p>단순한 함수가 아니라, <strong>내부에서 다른 Hook(useState, useEffect 등)을 호출</strong>하여 상태 관련 로직(Stateful Logic)을 재사용 가능한 형태로 추출해 낸 리액트의 고유 패턴입니다.</p>
</div>

**📌 핵심 특징 (Key Features)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">로직 재사용</div><div class="wda-fcard-dsc">UI(JSX)가 아닌, 기능과 상태 관리 로직만 쏙 뽑아서 여러 컴포넌트에서 공유합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">독립된 상태</div><div class="wda-fcard-dsc">같은 Hook을 여러 컴포넌트에서 사용해도, 각 컴포넌트의 상태(State)는 서로 간섭하지 않고 독립적으로 유지됩니다.</div></div>
</div>

**📌 공식 (Formula)**

<div class="wda-callout wda-ci">
  <p><strong>use로 시작하는 함수</strong> + <strong>다른 Hook 사용</strong> = <strong>Custom Hook</strong></p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"상태는 공유되지 않고, 로직만 공유됩니다."</strong></p>
  <p>많은 초보자분들이 "A 컴포넌트에서 훅을 쓰고 B 컴포넌트에서도 쓰면, A에서 바꾼 값이 B에도 반영되나요?"라고 묻습니다. 정답은 <strong>NO</strong>입니다.<br>🔒 Custom Hook은 '상태를 만드는 기계(로직)'를 빌려주는 것이지, '만들어진 상태 값'을 공유하는 것이 아닙니다. (기계는 같아도 거기서 찍혀 나온 물건은 서로 다릅니다!)</p>
</div>

---

<h2>2. 왜 Custom Hook이 필요한가?</h2>

**⚠️ 문제 : 반복되는 코드 (Problem)**

**"컴포넌트마다 똑같은 코드를 계속 짜야 하나요?"**
컴포넌트 A와 B를 보면, 변수 이름만 다를 뿐 **'상태를 만들고(useState), 입력값이 바뀌면 업데이트하는(onChange)'** 로직이 토씨 하나 안 틀리고 똑같습니다.

💻 **수정 전 코드**

```jsx
// 1. 컴포넌트 A
const [value, setValue] = useState("");
const handleChange = (e) => {
  setValue(e.target.value);
};

// 2. 컴포넌트 B - 똑같은 코드의 반복!
const [text, setText] = useState("");
const handleTextChange = (e) => {
  setText(e.target.value);
};
```

**💡 해결 : Custom Hook (Solution)**

**"공통 로직을 뽑아서 나만의 훅으로 만듭니다."**
`useInput`이라는 함수를 만들어 중복되는 로직을 한곳에 모아둡니다.

💻 **useInput 훅 정의**

```jsx
// 초기값(initial)을 받아서 상태와 핸들러를 반환하는 함수
function useInput(initial = "") {
  const [value, setValue] = useState(initial);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // 값과 함수를 객체로 묶어서 반환 (핵심!)
  return { value, onChange };
}
```

**🧪 결과 : 간결해진 사용 (Usage)**

**"단 한 줄로 끝납니다."**
이제 복잡한 로직 없이, `useInput`을 호출하기만 하면 됩니다.

💻 **사용 예시**

```jsx
// 이름 입력창 연결
const name = useInput("");

// 이메일 입력창 연결
const email = useInput("");
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"로직의 압축과 재사용"</strong></p>
  <p>위 예제에서 볼 수 있듯이 Custom Hook은 <strong>UI(화면)</strong>와는 상관없이, <strong>기능(데이터 처리)</strong>만을 따로 떼어내어 포장하는 기술입니다.<br>덕분에 코드가 훨씬 짧아지고, 유지보수가 쉬워집니다.</p>
</div>

---

<h2>3. Custom Hook 기본 구조</h2>

**⚙️ 구조 흐름 (Flow)**

<div class="wda-callout wda-ci">
  <p><strong>use로 시작</strong> 👉 <strong>내부에서 Hook 사용</strong> 👉 <strong>값/함수 반환</strong></p>
</div>

**📝 예제 코드 (Template)**

보통 `src/hooks` 폴더 안에 파일을 따로 만들어 관리합니다.

```jsx
// 파일명: hooks/useXxx.js
import { useState, useEffect } from 'react';

// 함수 이름은 반드시 'use'로 시작해야 합니다.
function useXxx(initialValue) {
  // 1. 상태 정의 (State)
  const [state, setState] = useState(initialValue);

  // 2. 로직 (Logic - 선택사항)
  useEffect(() => {
    // 여기에 필요한 Side Effect 로직을 작성
    console.log("Hook이 실행되었습니다.");
  }, []);

  // 3. 핸들러 함수 (Handler - 선택사항)
  const doSomething = () => {
    // 상태를 변경하거나 특정 작업을 수행
    setState("새로운 값");
  };

  // 4. 반환값 (Return)
  // 컴포넌트에서 필요한 값과 함수들을 객체나 배열로 묶어서 내보냄
  return { state, doSomething };
  // 또는 return [state, doSomething];
}

export default useXxx;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"무엇을 반환(Return)해야 하나요?"</strong></p>
  <p>정해진 규칙은 없습니다.<br>배열(<code>[]</code>)로 반환하면 <code>useState</code>처럼 이름을 마음대로 바꿔서 받기 편하고, 객체(<code>{}</code>)로 반환하면 순서 상관없이 필요한 것만 꺼내 쓰기 편합니다.</p>
  <ul>
    <li><strong>배열 반환</strong>: <code>const [val, setVal] = useXxx();</code> (이름 변경 쉬움)</li>
    <li><strong>객체 반환</strong>: <code>const { doSomething } = useXxx();</code> (필요한 것만 선택 가능)</li>
  </ul>
</div>

---

<h2>4. 분석 : useToggle</h2>

**💡 언제 사용하나요? (Use Case)**

**"켰다 껐다 하는 모든 곳에!"**
모달(Modal), 체크박스, 아코디언 메뉴, 사이드바 등 **ON/OFF(Boolean) 상태**가 필요한 모든 곳에 사용합니다.

**📝 구현 코드**

```jsx
// hooks/useToggle.js
import { useState, useCallback } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // 1. 토글 함수 (이전 값을 반전)
  // useCallback으로 감싸서 불필요한 재생성을 방지합니다.
  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  // 2. 명시적 함수 제공 (선택 사항)
  // "켜기"와 "끄기"를 확실하게 구분하고 싶을 때 사용
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  // 3. 배열로 반환하여 이름을 마음대로 짓게 함
  return [value, toggle, setTrue, setFalse];
}

export default useToggle;
```

**📌 구현 포인트 (Key Points)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">useCallback 사용</div><div class="wda-fcard-dsc">useCallback을 사용하면 반환하는 함수의 참조를 안정적으로 유지할 수 있습니다.<br>이 함수가 자식 컴포넌트의 props로 전달되거나 다른 Hook의 의존성 배열에 들어갈 때 유용합니다.<br>단순 예제에서는 필수는 아니지만, 재사용 Hook에서는 안정적인 API를 제공하는 데 도움이 됩니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">함수형 업데이트 (prev =&gt; !prev)</div><div class="wda-fcard-dsc">현재 상태(<code>value</code>)를 직접 참조하지 않고, 이전 상태 값(<code>prev</code>)을 인자로 받아 안전하게 반전시킵니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">직관적인 사용</div><div class="wda-fcard-dsc">매번 <code>setIsModalOpen(true)</code>라고 길게 쓰는 것보다, <code>openModal()</code>이나 <code>toggle()</code>처럼 작성하는 것이 훨씬 직관적이고 실수를 줄여줍니다.</div></div>
</div>

**🧪 사용 예시 (Usage)**

```jsx
import useToggle from './hooks/useToggle';

function DarkModeToggle() {
  // 배열 구조 분해 할당으로 이름 변경해서 사용
  const [isDark, toggleDark] = useToggle(false);

  return (
    <button type="button" onClick={toggleDark}>
      {isDark ? '라이트 모드로' : '다크 모드로'}
    </button>
  );
}

export default DarkModeToggle;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"왜 배열(<code>[]</code>)로 반환하나요?"</strong></p>
  <p>객체(<code>{}</code>)가 아닌 배열로 반환하면, 사용하는 쪽에서 <strong>변수 이름을 자유롭게 지을 수 있기 때문</strong>입니다.</p>
  <ul>
    <li><code>const [isModalOpen, toggleModal] = useToggle();</code></li>
    <li><code>const [isMenuOpen, toggleMenu] = useToggle();</code></li>
  </ul>
  <p>이렇게 하나의 컴포넌트 안에서 여러 개의 토글을 쓸 때 이름 충돌을 쉽게 피할 수 있습니다.</p>
</div>

---

<h2>5. 분석 : useInput</h2>

**📝 구현 코드**

`e.target.value`를 업데이트하는 로직을 미리 만들어둡니다.

```jsx
// hooks/useInput.js
import { useState } from 'react';

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  // 1. 변경 감지 핸들러
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // 2. 초기화 기능 (선택 사항)
  const reset = () => setValue(initialValue);

  // 3. 값과 함수들을 객체로 묶어서 반환
  // 객체로 반환하면 스프레드 문법(...email)을 쓸 수 있어 편리합니다.
  return { value, onChange, reset, setValue };
}

export default useInput;
```

**🧪 사용 예시 (Usage)**

**"스프레드 문법(`...`)의 마법"**
`value`와 `onChange`를 일일이 적지 않고, `{...email}` 하나로 해결하는 것이 핵심입니다.

```jsx
import useInput from './hooks/useInput';

function LoginForm() {
  // 훅을 여러 번 호출하여 각각 독립적인 상태 생성
  const email = useInput("");
  const password = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.value, password.value);
    
    // 폼 제출 후 초기화
    email.reset();
    password.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 원래 코드: value={email.value} onChange={email.onChange}
         단축 코드: {...email}
      */}
      <input type="email" {...email} placeholder="이메일" />
      <input type="password" {...password} placeholder="비밀번호" />
      <button type="submit">로그인</button>
    </form>
  );
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"왜 객체(<code>{}</code>)로 리턴했나요?"</strong></p>
  <p>앞서 본 <code>useToggle</code>은 배열(<code>[]</code>)로 리턴했지만, <code>useInput</code>은 보통 객체로 리턴합니다.<br>그 이유는 리액트의 <strong>전개 연산자(Spread Operator)</strong> 때문입니다.</p>
  <ul>
    <li><code>input</code> 태그는 <code>value</code>와 <code>onChange</code>라는 속성을 필요로 합니다.</li>
    <li>우리가 만든 훅이 <code>{ value, onChange }</code>를 뱉어내므로,</li>
    <li>태그 안에 <code>{...email}</code>이라고만 적으면 자동으로 <code>value={email.value} onChange={email.onChange}</code>로 풀려서 들어갑니다. 코드가 엄청나게 깔끔해지죠!</li>
  </ul>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><strong>주의: {...email}처럼 전체 객체를 넘길 때</strong></p>
  <p><code>{...email}</code>처럼 전체 객체를 <code>input</code>에 넘기면 <code>reset</code>, <code>setValue</code>처럼 input이 필요로 하지 않는 값까지 전달될 수 있습니다.<br>따라서 실제 코드에서는 필요한 값만 구조분해해서 넘기거나, <code>reset</code>/<code>setValue</code>를 분리한 뒤 나머지 <code>inputProps</code>만 전달하는 방식이 더 안전합니다.</p>
</div>

**🧪 구조분해 방식 (추천)**

```jsx
const { value, onChange, reset } = useInput("");
```

```jsx
<input value={value} onChange={onChange} />
<button type="button" onClick={reset}>
  초기화
</button>
```

**💡 보충 설명**

<div class="wda-callout wda-cs">
  <p><strong>설명</strong></p>
  <p>1. 객체에서 필요한 속성만 꺼낸다.<br>
  2. input에는 필요한 값만 명시적으로 전달한다.<br>
  3. reset은 버튼에서 직접 호출한다.<br>
  4. 코드 가독성이 좋아진다.<br>
  5. 전달되는 props가 명확해진다.</p>
</div>

**🧪 Spread + 구조분해 혼합 방식 (고급 패턴)**

```jsx
const { reset, setValue, ...inputProps } = useInput("");
```

```jsx
<input {...inputProps} />
<button type="button" onClick={reset}>
  초기화
</button>
```

**💡 보충 설명**

<div class="wda-callout wda-cs">
  <p><strong>설명</strong></p>
  <p>1. reset만 분리한다.<br>
  2. 나머지(value, onChange 등)는 inputProps에 모인다.<br>
  3. 불필요한 함수 전달을 방지한다.<br>
  4. 실무에서 자주 사용하는 패턴이다.</p>
</div>

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl"><code>{...email}</code></div><div class="wda-fcard-dsc">간단하지만 내부 전달 값이 명확하지 않음</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">구조분해</div><div class="wda-fcard-dsc">필요한 것만 사용 가능, 가독성 우수</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">혼합 방식</div><div class="wda-fcard-dsc">가장 실무 친화적</div></div>
</div>

---

<h2>6. 예제 : useWindowSize</h2>

**💡 언제 사용하나요? (Use Case)**

**"화면 크기를 실시간으로 알고 싶어요."**
반응형 레이아웃을 구현하거나, HTML5 Canvas처럼 창 크기에 맞춰 다시 그려야 하는 요소가 있을 때 사용합니다.

**📝 구현 코드**

`window.innerWidth`와 `window.innerHeight`를 상태로 관리합니다.

```jsx
import { useState, useEffect } from 'react';

// 1. SSR 환경(서버)에는 window가 없으므로, 안전하게 크기를 계산하는 함수로 분리
function getWindowSize() {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function useWindowSize() {
  // 2. 초기값 설정 (현재 창 크기)
  const [size, setSize] = useState(getWindowSize);

  useEffect(() => {
    // 3. 리사이즈 핸들러
    const handleResize = () => {
      setSize(getWindowSize());
    };

    handleResize();

    // 4. 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 5. 클린업 (뒷정리) - 필수!
    // 컴포넌트가 사라질 때 이벤트를 지워줘야 메모리 누수가 안 생깁니다.
    return () => window.removeEventListener('resize', handleResize);
  }, []); // 빈 배열: 마운트 시 1회만 등록

  return size;
}

export default useWindowSize;
```

**📌 구현 포인트 (Key Points)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Cleanup 필수</div><div class="wda-fcard-dsc"><code>useEffect</code>의 <code>return</code> 문에서 <code>removeEventListener</code>를 해주지 않으면, 컴포넌트가 사라져도 브라우저가 계속 이벤트를 감시하여 메모리 누수(Memory Leak)가 발생합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">빈 배열 []</div><div class="wda-fcard-dsc"><code>addEventListener</code>는 컴포넌트가 처음 생길 때(Mount) 딱 한 번만 실행하면 되므로 의존성 배열을 비워둡니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <p><strong>주의: SSR (Server Side Rendering)</strong></p>
  <p>Next.js 같은 서버 사이드 렌더링 환경에서는 코드가 서버에서 먼저 실행됩니다.<br>서버에는 브라우저 창(<code>window</code> 객체)이 존재하지 않으므로, 그냥 실행하면 "window is not defined" 에러가 발생할 수 있습니다.<br>그래서 위 코드에서는 <code>getWindowSize</code> 함수 안에서 <code>typeof window === 'undefined'</code>를 먼저 확인하여, 서버에서는 안전한 기본값(<code>{ width: 0, height: 0 }</code>)을 반환하도록 방어했습니다.</p>
</div>

---

<h2>7. useFetch 예제</h2>

**📌 개념 (Concept)**

**"로딩 중, 에러, 데이터를 한 번에 관리하고 싶어요."**
서버에서 데이터를 가져올 때는 항상 3가지 상태(**로딩 중, 성공 시 데이터, 에러**)를 관리해야 합니다. 컴포넌트마다 이 로직을 매번 짜는 대신, `useFetch` 하나로 통합하여 관리합니다.

**📝 구현 코드**

```jsx
// hooks/useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
  // 1. 3가지 상태 정의 (데이터, 로딩 상태, 에러)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. 새로운 요청 시작 시 로딩/에러 상태 초기화
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        // HTTP 상태 코드가 실패(400번대, 500번대)여도 fetch는 에러를 던지지 않으므로 직접 확인
        if (!res.ok) {
          throw new Error('데이터 요청 실패');
        }

        return res.json(); // 응답을 JSON으로 변환
      })
      .then((data) => {
        setData(data); // 성공: 데이터 저장
      })
      .catch((err) => {
        setError(err); // 실패: 에러 저장
      })
      .finally(() => {
        setLoading(false); // 성공/실패 상관없이 로딩 종료
      });

  }, [url]); // 3. URL이 바뀔 때마다 재실행

  // 필요한 값들을 객체로 반환
  return { data, loading, error };
}

export default useFetch;
```

**🧪 사용 예시 (Usage)**

**"복잡한 비동기 로직이 3줄로 끝납니다."**

```jsx
function UserList() {
  // 훅 사용: URL만 던져주면 상태 3개를 알아서 관리해 줌
  const { data, loading, error } = useFetch('/api/users');

  // 1. 로딩 처리
  if (loading) return <p>로딩 중 ...</p>;
  
  // 2. 에러 처리
  if (error) return <p>에러 발생!</p>;

  // 3. 데이터가 아직 없는 경우 처리
  if (!data) return <p>데이터가 없습니다.</p>;

  // 4. 데이터 렌더링 (로딩도 에러도 아닐 때)
  return (
    <ul>
      {data.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"왜 의존성 배열에 [url]을 넣었나요?"</strong></p>
  <p>만약 사용자가 다른 사용자 목록을 보고 싶어서 <strong>URL이 바뀌면</strong>, <code>useEffect</code>가 다시 실행되어야 새로운 데이터를 가져올 수 있기 때문입니다.<br>만약 빈 배열<code>[]</code>로 두면 처음에 딱 한 번만 실행되고 URL이 바뀌어도 반응하지 않습니다.</p>
</div>

---

<h2>8. (심화) useFetch (Async & Error)</h2>

**💡 언제 사용하나요? (Use Case)**

**"비동기 통신의 정석 패턴"**
서버에서 데이터를 가져와야 하는데, 매번 `useEffect`와 `fetch`를 반복해서 작성하기 귀찮을 때 사용합니다. `async/await` 문법을 사용하여 가독성을 높이고 에러 처리를 강화한 버전입니다.

**📝 구현 코드**

`useEffect` 안에서는 `async`를 직접 쓸 수 없기 때문에, **내부에 함수를 만들고 즉시 호출**하는 패턴을 사용해야 합니다.

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  // 1. 상태 3대장 정의 (데이터, 로딩, 에러)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. async 함수를 내부에 정의 (useEffect 자체는 async 불가)
    const fetchData = async () => {
      // 로딩 시작 및 에러 초기화
      setLoading(true);
      setError(null);
      
      try {
        const res = await fetch(url);
        
        // HTTP 상태 코드가 성공(200번대)이 아닐 경우 에러 발생
        if (!res.ok) throw new Error('데이터 요청 실패');

        const json = await res.json();
        setData(json); // 성공 데이터 저장
      } catch (err) {
        setError(err.message); // 에러 메시지 저장
      } finally {
        setLoading(false); // 성공하든 실패하든 로딩은 끝남
      }
    };

    // 3. 정의한 비동기 함수를 즉시 호출
    fetchData();
  }, [url]); // url이 바뀌면 다시 실행

  return { data, loading, error };
}

export default useFetch;
```

**📌 구현 포인트 (Key Points)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">비동기 처리</div><div class="wda-fcard-dsc"><code>useEffect</code> 자체는 <code>async</code> 함수가 될 수 없습니다. (리턴값으로 cleanup 함수만 받아야 하기 때문)<br>따라서 내부에 <code>const fetchData = async () =&gt; {}</code>를 정의하고 호출하는 방식을 씁니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">상태 3대장</div><div class="wda-fcard-dsc"><code>loading</code>(로딩 중), <code>error</code>(에러), <code>data</code>(성공) 패턴은 비동기 통신의 가장 기본이자 정석입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">try-catch-finally</div><div class="wda-fcard-dsc">에러가 발생했을 때 앱이 멈추지 않도록 <code>catch</code>로 잡고, 성공/실패 여부와 상관없이 <code>finally</code>에서 로딩바를 꺼주는(<code>setLoading(false)</code>) 것이 사용자 경험(UX)에 좋습니다.</div></div>
</div>

**💡 보완 : 이전 요청 취소하기 (AbortController)**

<div class="wda-callout wda-cw">
  <p><strong>남은 문제</strong>: 위 코드는 <code>url</code>이 빠르게 여러 번 바뀌거나 컴포넌트가 사라질 때, 이미 보낸 이전 요청을 취소하지 않습니다.<br>응답이 늦게 도착하는 이전 요청이 최신 상태를 덮어써버리는 문제가 생길 수 있습니다.<br><code>AbortController</code>를 사용하면 이런 이전 요청을 취소할 수 있습니다.</p>
</div>

```jsx
useEffect(() => {
  const controller = new AbortController();

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, {
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error('데이터 요청 실패');
      }

      const json = await res.json();
      setData(json);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  fetchData();

  return () => {
    controller.abort();
  };
}, [url]);
```

**💡 실무 팁**

<div class="wda-callout wda-cs">
  <p><strong>"이걸 더 편하게 해주는 라이브러리가 있나요?"</strong></p>
  <p>실무에서는 이 <code>useFetch</code>를 직접 구현해서 쓰기보다는, <strong>React Query (TanStack Query)</strong> 같은 라이브러리를 주로 사용합니다.<br>우리가 만든 훅보다 훨씬 강력한 기능(캐싱, 자동 재시도, 윈도우 포커스 시 갱신 등)을 제공하기 때문입니다.<br>하지만 Custom Hook의 원리를 이해하기 위해 이 패턴을 아는 것은 매우 중요합니다.</p>
</div>

---

<h2>9. useLocalStorage 예제</h2>

**📌 개념 (Concept)**

**"새로고침해도 데이터가 살아있어요."**
브라우저의 `localStorage`를 사용하여 상태를 저장합니다. 테마 설정(다크 모드), 로그인 아이디 기억하기 등 **사용자의 설정을 유지**할 때 필수적으로 사용됩니다.

**📝 구현 코드**

이 코드의 핵심은 `useState` 초기값에 **함수**를 전달하는 **'지연 초기화(Lazy Initialization)'** 기법입니다.

```jsx
// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // 1. 지연 초기화 (Lazy Initialization)
  // localStorage 접근은 느리기 때문에, 매번 실행되지 않고 
  // 최초 1회만 실행되도록 함수 형태로 값을 전달합니다.
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      // 저장된 값이 있으면 파싱해서 쓰고, 없으면 초기값을 씁니다.
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      // 저장된 값이 손상되어 JSON.parse가 실패해도 앱이 멈추지 않도록 초기값으로 대체
      return initialValue;
    }
  });

  // 2. 값이 바뀔 때마다 스토리지에 동기화
  useEffect(() => {
    try {
      // 객체나 배열도 저장할 수 있도록 문자열로 변환(JSON.stringify)
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // 저장 공간 부족 또는 private mode 등으로 저장이 실패할 수 있음
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
```

**🧪 사용 예시 (Usage)**

**"useState처럼 쓰는데, 새로고침해도 기억합니다."**

```jsx
function Settings() {
  // 'theme'이라는 키값으로 'light'를 기본값으로 설정
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="light">라이트 모드</option>
      <option value="dark">다크 모드</option>
    </select>
  );
}
```

**📌 구현 포인트**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">JSON 변환</div><div class="wda-fcard-dsc"><code>localStorage</code>는 문자열만 저장할 수 있습니다. 따라서 <code>JSON.stringify</code>로 저장하고, <code>JSON.parse</code>로 읽어와야 객체나 배열 데이터를 깨지지 않고 관리할 수 있습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">성능 최적화</div><div class="wda-fcard-dsc"><code>useState(() => {...})</code> 패턴을 사용하지 않고 <code>useState(localStorage.getItem(...))</code> 처럼 바로 쓰면, 리렌더링 될 때마다 스토리지를 읽어와 성능이 저하될 수 있습니다. 꼭 함수형으로 작성하세요!</div></div>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><strong>주의: SSR 환경에서는 localStorage가 없습니다</strong></p>
  <p><code>localStorage</code>는 브라우저 전용 API입니다. Next.js 같은 SSR 환경에서는 서버에 <code>localStorage</code>가 없기 때문에, <code>typeof window !== 'undefined'</code> 또는 <code>typeof localStorage !== 'undefined'</code> 확인이 필요할 수 있습니다.</p>
</div>

---

<h2>10. Hook 규칙 (Rules of Hooks)</h2>

**📝 규칙 1 : use로 시작**

**"이름표를 제대로 붙여주세요."**
리액트가 "아, 이건 훅이구나!" 하고 인식할 수 있도록, 함수 이름은 반드시 **use** 로 시작해야 합니다.

```jsx
// ✅ 올바른 이름 (React가 Hook으로 인식함)
function useCounter() { ... }
function useWindowSize() { ... }

// ❌ 잘못된 이름 (일반 함수로 취급되어 Hook 기능 작동 안 함)
function counter() { ... }
function getWindowSize() { ... }
```

<div class="wda-callout wda-cw">
  <p>함수 이름이 <code>use</code>로 시작하지 않으면 React와 ESLint가 Hook으로 인식하기 어렵습니다.<br>그 안에서 <code>useState</code>, <code>useEffect</code> 같은 Hook을 호출하면 Rules of Hooks 위반으로 경고가 발생할 수 있습니다.<br>Custom Hook은 반드시 <code>use</code>로 시작해야 합니다.</p>
</div>

**📝 규칙 2 : 최상위에서만 호출**

**"줄 서는 순서를 바꾸지 마세요."**
반복문(`for`), 조건문(`if`), 중첩 함수 안에서 훅을 호출하면 안 됩니다.  
리액트는 훅이 **호출되는 순서**를 기억해서 상태를 관리하는데, 조건문에 따라 호출 순서가 뒤죽박죽이 되면 에러가 발생합니다.

```jsx
function Component() {
  // ✅ 올바른 위치 : 컴포넌트의 최상위 (Top Level)
  const [count] = useCounter();

  // ...

  // ❌ 잘못된 위치 : 조건문 안 (절대 금지!)
  if (condition) {
    const [theme] = useCounter(); // 여기서 에러 발생 가능성 높음
  }
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"자동으로 검사해 줍니다."</strong></p>
  <p>이 규칙들을 사람이 일일이 기억하고 검사하기는 힘듭니다.<br>그래서 <strong>eslint-plugin-react-hooks</strong>라는 플러그인이 설치되어 있으면, 규칙을 어기는 순간 빨간 밑줄을 쫙 그어주며 경고해 줍니다.<br>프로젝트 템플릿에 따라 기본 설정이 포함되어 있을 수 있습니다.<br>설정이 없다면 <code>eslint-plugin-react-hooks</code>를 설치하거나 ESLint 설정에서 <code>react-hooks/rules-of-hooks</code>, <code>react-hooks/exhaustive-deps</code> 규칙을 확인해야 합니다.</p>
</div>

---

<h2>11. 📈 패턴 1 : Logic vs State</h2>

**📌 Logic Reuse (로직 재사용)**

**"어떻게 동작하는가(Logic)를 공유합니다."**
Custom Hook은 반복되는 상태 관리 로직을 하나의 함수로 추출해 재사용하는 방식입니다.  
같은 로직을 여러 곳에서 사용하더라도, 각 호출은 독립적인 state를 가집니다.  
즉, **기능(Functionality)** 만 공유하고 데이터는 공유하지 않습니다.

```jsx
// 두 호출은 같은 코드(로직)를 쓰지만, 서로 다른 데이터를 다룹니다.
const { data: userA } = useFetch('/api/A');
const { data: userB } = useFetch('/api/B');
```

**📌 State Independence (상태의 독립성)**

**"호출할 때마다 '새로운 상태 저장소'가 생깁니다."**
같은 훅을 여러 번 사용하더라도, 각각의 훅은 **서로 다른 메모리 공간(State)** 을 가집니다.

- **State A ≠ State B**
- A 컴포넌트에서 훅의 상태를 바꿔도, B 컴포넌트의 훅에는 전혀 영향을 주지 않습니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"그럼 상태를 진짜로 공유하려면요?"</strong></p>
  <p>만약 로그인 정보나 테마 설정처럼 여러 컴포넌트가 <strong>하나의 상태를 바라봐야 한다면</strong>, Custom Hook만으로는 불가능합니다.<br>이때는 <strong>Context API</strong>나 <strong>Redux, Zustand</strong> 같은 전역 상태 관리 라이브러리를 함께 사용해야 합니다.</p>
</div>

---

<h2>12. 📈 패턴 2 : Hook Composition</h2>

**📌 개념 (Concept)**

**"Hook 안에서 Hook 호출하기"**
Custom Hook의 가장 강력한 점은 **다른 Hook들을 조합**할 수 있다는 것입니다. 마치 **레고 블록**처럼 작은 Hook(`useState`, `useFetch`)들을 모아 더 큰 기능(`useUser`)을 만듭니다.

**📝 예제 코드 (Combination)**

`useFetch`가 데이터를 가져오면, `useUser`가 그 데이터를 가공해서 관리하는 구조입니다.

```jsx
function useUser(userId) {
  // 1. Built-in Hook 사용 (상태 관리)
  const [user, setUser] = useState(null);

  // 2. Custom Hook 사용 (useFetch)
  // 우리가 앞서 만든 useFetch를 여기서 또 재사용합니다!
  const { data } = useFetch(`/api/users/${userId}`);

  // 3. 조합된 로직 (데이터 가공)
  useEffect(() => {
    // 데이터가 로딩되면 포맷팅 함수를 거쳐서 상태에 저장
    if (data) {
      setUser(formatUser(data));
    }
  }, [data]);

  return user;
}
```

<div class="wda-callout wda-cw">
  <p><strong>formatUser는 어디서 왔나요?</strong></p>
  <p><code>formatUser</code>는 서버에서 받은 user 데이터를 화면에서 쓰기 좋은 형태로 바꾸는 예시 함수입니다.<br>실제 코드에서는 직접 정의하거나 필요한 가공 로직으로 대체해야 합니다. 예를 들면 다음과 같이 정의할 수 있습니다.</p>
</div>

```jsx
const formatUser = (data) => ({
  id: data.id,
  name: data.name,
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"레고 조립하듯이 개발하세요."</strong></p>
  <ul>
    <li><strong>useFetch 블록</strong>: "데이터를 서버에서 가져온다"는 기능만 담당합니다.</li>
    <li><strong>useUser 완성품</strong>: <code>useFetch</code> 블록을 가져와서 "유저 정보에 맞게 가공한다"는 살을 붙여 완성했습니다.</li>
    <li>이처럼 훅을 잘게 쪼개 놓으면, 나중에 <code>useProduct</code>, <code>useCart</code> 등을 만들 때도 <code>useFetch</code> 블록을 <strong>재사용</strong>할 수 있습니다.</li>
  </ul>
</div>

<img src="/images/content/react/3-4/react-3-4-hook-composition-lego.png" alt="useFetch, useState, useEffect가 합쳐져 useUser가 되는 블록 다이어그램" style="display:block;width:100%;max-width:210px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.9rem;font-weight:700;opacity:.85;margin:.6rem auto 0;max-width:210px;white-space:nowrap;">마치 레고 블록처럼 작은 Hook들을 모아 큰 기능을 만듭니다.</div>
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.3rem auto 1.4rem;max-width:520px;">[그림] Hook Composition — 작은 Hook을 조합해 만드는 useUser</div>

**📌 상태는 공유되지 않음 (State Independence)**

**"각 컴포넌트는 자신만의 상태를 가집니다."**
같은 훅(`useToggle`)을 사용하더라도, 컴포넌트 A와 컴포넌트 B의 상태는 **완전히 별개**입니다. 한쪽을 켰다고 해서 다른 쪽이 켜지지 않습니다.

```jsx
function ComponentA() {
  const { value } = useToggle(false);
  // value: false (A만의 독립적인 상태)
}

function ComponentB() {
  const { value } = useToggle(false);
  // value: false (A와는 전혀 상관없는 B만의 상태)
}
```

**⚙️ Hook 안에서 Hook 호출 가능 (Nesting)**

**"다른 Hook을 재료로 사용할 수 있습니다."**
우리가 만든 Custom Hook 안에서 `useState`, `useEffect` 같은 내장 훅뿐만 아니라, **또 다른 Custom Hook**(`useFetch`)을 호출하여 로직을 구성할 수 있습니다.

```jsx
function useUser(userId) {
  // 1. 또 다른 Custom Hook 사용 (데이터 가져오기)
  const { data } = useFetch(`/api/users/${userId}`);
  
  // 2. 내장 Hook 사용 (상태 관리)
  const [name, setName] = useState("");

  // 3. 데이터가 들어오면 이름을 업데이트
  useEffect(() => {
    if (data) setName(data.name);
  }, [data]);

  return { name, setName };
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"설계도(Class)와 제품(Instance)의 차이"</strong></p>
  <p>Custom Hook은 <strong>'기능을 찍어내는 틀(설계도)'</strong>입니다.</p>
  <ul>
    <li><code>useToggle</code>이라는 틀을 <code>ComponentA</code>에서 찍어내고, <code>ComponentB</code>에서 또 찍어냈기 때문에 서로 다른 제품이 나온 것입니다.</li>
    <li>따라서 <strong>"훅을 쓰면 전역 변수처럼 다 같이 공유되겠지?"</strong>라는 오해를 하지 않도록 주의해야 합니다. 🙅‍♂️</li>
  </ul>
</div>

---

<h2>13. 🙋‍♀️ FAQ</h2>

**🧠 Q1. 작명 규칙 (Naming)**

**"Custom Hook을 만들 때 함수 이름은 반드시 무엇으로 시작해야 하나요?"**

**정답: `use`**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>리액트가 해당 함수를 Hook으로 인식하고, 내부적인 규칙(최상위 호출 등)을 적용하기 위해 반드시 <strong>use</strong>라는 접두사로 시작해야 합니다. 예: <code>useUser</code>, <code>useFetch</code>, <code>useWindowSize</code></p>
</div>

**🧠 Q2. 상태 공유 여부 (State Sharing)**

**"두 컴포넌트가 같은 Custom Hook을 사용할 때, 상태(state)는 공유되나요?"**

**정답: 아니요 (No)** 🙅‍♂️

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>Custom Hook은 <strong>'로직(Logic)'</strong>을 재사용하는 것이지, <strong>'상태 값(Data)'</strong>을 공유하는 것이 아닙니다.<br>마치 붕어빵 틀(Hook)은 같아도, 거기서 찍혀 나온 붕어빵(State)은 서로 다른 개체인 것과 같습니다.<br>각 컴포넌트마다 <strong>독립적인 상태 저장소</strong>가 생성됩니다.</p>
</div>

---

<h2>14. ✅ 핵심 요약</h2>

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>Custom Hook은 이름이 반드시 <strong>use로 시작</strong>하는, 내부에서 다른 Hook을 호출하는 함수다.</li>
    <li>Custom Hook은 <strong>로직(기능)만 공유</strong>하고, 상태(state)는 컴포넌트마다 <strong>독립적으로 생성</strong>된다.</li>
    <li>Hook은 반복문·조건문·중첩 함수 안이 아니라 항상 <strong>컴포넌트 최상위</strong>에서만 호출해야 한다.</li>
    <li><code>useToggle</code>은 배열로, <code>useInput</code>은 객체로 반환하는 것이 일반적이며, 이유는 이름 변경 vs 필요한 것만 선택하는 사용 편의성 차이다.</li>
    <li>Custom Hook 안에서 다른 Custom Hook을 조합(Hook Composition)해 더 큰 기능을 만들 수 있다.</li>
    <li>실무에서는 <strong>React Hook Form, TanStack Query</strong> 같은 검증된 라이브러리를 먼저 검토하는 것이 좋다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 같은 Custom Hook을 여러 컴포넌트에서 쓰면 상태도 공유된다?</div>
    <div class="wda-mistake-right">정답: 로직(틀)만 공유되고, 상태(찍혀 나온 결과물)는 호출할 때마다 <strong>독립적으로 생성</strong>된다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 함수 이름이 use로 시작하지 않아도 내부에서 useState를 쓰면 Hook으로 동작한다?</div>
    <div class="wda-mistake-right">정답: React와 ESLint가 Hook으로 인식하려면 반드시 <strong>use로 시작</strong>해야 하며, 아니면 Rules of Hooks 위반 경고가 발생할 수 있다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 조건문 안에서 Hook을 호출해도 조건만 잘 맞으면 문제없다?</div>
    <div class="wda-mistake-right">정답: React는 Hook이 <strong>호출되는 순서</strong>로 상태를 관리하므로, 조건문 안에서 호출하면 순서가 뒤섞여 에러가 발생할 수 있다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 여러 컴포넌트가 상태를 진짜로 공유하려면 Custom Hook만으로 충분하다?</div>
    <div class="wda-mistake-right">정답: 로그인 정보나 테마처럼 진짜 상태를 공유하려면 <strong>Context API</strong>나 Redux·Zustand 같은 전역 상태 도구가 필요하다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 작명 규칙</div>
    <div class="wda-formula-block-body"><code>함수명은 반드시 use로 시작</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 호출 위치</div>
    <div class="wda-formula-block-body"><code>컴포넌트 최상위에서만</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 공유 범위</div>
    <div class="wda-formula-block-body"><code>로직 공유 O / 상태 공유 X</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">Custom Hook을 만들 때 함수 이름은 반드시 무엇으로 시작해야 하나요?</div>
    <div class="wda-flip-back">use. 예: useUser, useFetch, useWindowSize</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">두 컴포넌트가 같은 Custom Hook을 사용할 때 상태는 공유되나요?</div>
    <div class="wda-flip-back">아니요. 로직만 재사용되고, 각 컴포넌트마다 독립적인 상태 저장소가 생성됩니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Hook을 반복문이나 조건문 안에서 호출하면 안 되는 이유는?</div>
    <div class="wda-flip-back">React가 Hook 호출 순서로 상태를 관리하기 때문에, 순서가 뒤섞이면 에러가 발생합니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">폼 유효성 검사를 쉽게 만들어주는 대표적인 라이브러리는?</div>
    <div class="wda-flip-back">React Hook Form. useForm 훅 하나로 검증·에러 처리·성능 최적화를 구현할 수 있습니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">다양한 Custom Hook 구현 코드를 복사해서 바로 쓸 수 있는 레시피 사이트는?</div>
    <div class="wda-flip-back">usehooks.com. useCopyToClipboard, useOnClickOutside 등을 복사해서 바로 사용할 수 있습니다.</div>
  </div>
</div>
