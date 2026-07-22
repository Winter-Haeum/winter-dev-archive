---
title: "1-4 React가 뭔가요?"
status: "completed"
description: "React의 탄생 배경과 선언적 UI, 컴포넌트와 JSX 개념, SPA 구조, Vite 프로젝트 생성과 폴더 구조까지 React의 기초를 정리한다."
category: "React"
section: "Basics"
tags:
  - react
  - jsx
  - vite
---

<style>
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-cy{background:rgba(250,204,21,.07);border-color:#ca8a04}
.wda-cb{background:rgba(59,130,246,.035);border-color:rgba(59,130,246,.25)}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-cy .wda-clabel{color:#92400e}
.wda-cb .wda-clabel{color:#2563eb}
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
.wda-flow{display:flex;flex-wrap:wrap;gap:4px;margin:.8rem 0 1.6rem;align-items:center}
.wda-fnode{flex:1 1 90px;border:1px solid rgba(128,128,128,.18);border-radius:8px;padding:10px 12px;text-align:center;min-width:80px}
.wda-fnode-ico{font-size:1.1rem;margin-bottom:4px}
.wda-fnode-ttl{font-size:.88rem;font-weight:700;margin-bottom:3px}
.wda-fnode-dsc{font-size:.82rem;line-height:1.55}
.wda-farrow{color:rgba(139,92,246,.45);font-size:1.1rem;flex-shrink:0;padding:0 2px;align-self:center}
@media(max-width:600px){.wda-flow{flex-direction:column}.wda-farrow{transform:rotate(90deg)}}
.wda-group2{display:flex;flex-wrap:wrap;gap:14px;margin:.8rem 0 1.6rem}
.wda-group{flex:1 1 260px;border:1px solid rgba(128,128,128,.18);border-radius:12px;padding:14px 16px}
.wda-group-ttl{font-size:.92rem;font-weight:700;margin-bottom:10px}
.wda-group .wda-fgrid{margin:0}
.wda-group .wda-fcard{flex:1 1 100%}
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
  • <strong>React 이해하기</strong> — UI 라이브러리의 개념과 등장 배경을 알아봅니다.<br>
  • <strong>컴포넌트 이해하기</strong> — 재사용 가능한 UI 조각의 개념을 파악합니다.<br>
  • <strong>JSX 알아보기</strong> — JavaScript 안에서 HTML을 작성하는 문법을 맛봅니다.<br>
  • <strong>왜 React인가?</strong> — React를 배워야 하는 이유와 장점을 이해합니다.
</div>

---

<h2>1. React의 탄생 배경</h2>

2011년, 페이스북이 직면했던 기술적 한계와 이를 극복하기 위해 내놓은 혁신적인 해결책입니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">문제 발생 (The Struggle) — 👻 유령 메시지 버그</div>
      <div class="wda-sdsc">
        • <strong>증상:</strong> 알림 아이콘엔 <code>🔴1</code>이 떠 있는데, 들어가 보면 메시지가 없는 기현상.<br>
        • <strong>원인:</strong> 앱이 너무 복잡해져서 데이터가 어디서 어떻게 꼬였는지 추적 불가능.<br>
        • <strong>결과:</strong> 고치면 또 터지는 악순환 반복.<br><br>
        핵심: <strong>"데이터 흐름의 통제 불능"</strong>(기존 MVC 패턴의 한계)
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">발상 전환 (The Idea) — "그냥 싹 다 지우고 다시 그리자!"</div>
      <div class="wda-sdsc">
        • <strong>아이디어:</strong> 어디가 고장 났는지 찾지 말고, 데이터가 바뀔 때마다 <strong>화면을 처음부터 새로 그리면</strong> 버그가 없지 않을까?<br>
        • <strong>난관:</strong> 진짜 브라우저 화면(DOM)을 매번 새로 그리면 <strong>속도가 너무 느려서</strong> 불가능.<br><br>
        핵심: <strong>"초기화 전략"</strong>(단순함의 미학)
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">해결책 (Solution) — ⚡ 가상 DOM (Virtual DOM)</div>
      <div class="wda-sdsc">
        • 메모리 속에 <strong>가짜 화면(Virtual DOM)</strong>을 만듭니다.<br>
        • 1. 가짜 화면에 먼저 빠르게 다 그려봅니다.<br>
        • 2. 진짜 화면과 비교해서 <strong>바뀐 부분만 콕 집어</strong> 수정합니다.<br><br>
        핵심: <strong>"성능과 단순함 모두 잡음"</strong>(React의 탄생)
      </div>
    </div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>데이터 중심의 선언적 UI 탄생!</strong> 이 아이디어 덕분에 개발자는 "데이터 흐름"만 신경 쓰면, 화면 업데이트는 리액트가 알아서 해주는 혁신적인 시대가 열렸습니다. 이것이 바로 React의 핵심 철학입니다.
</div>

---

<h2>2. 선언적 UI (Declarative UI) - 코드 완벽 분석</h2>

아래 예제는 "데이터 목록(`data`)을 받아서 화면에 리스트(`<ul>`)로 뿌려주는 상황"입니다.

### 1) 명령형 (Imperative) - 일반 JavaScript 코드

**"어떻게(How)"** 할지를 하나하나 지시하는 방식입니다. (운전자가 핸들과 브레이크를 직접 조작하는 것과 같습니다.)

```javascript
// 1. 부모 요소를 직접 찾아옵니다. (DOM 접근)
const list = document.getElementById('list');

// 2. 기존 내용을 싹 비웁니다. (초기화)
list.innerHTML = '';

// 3. 데이터를 하나씩 돌면서 수동으로 조립합니다.
data.forEach(item => {
  // 4. <li> 태그를 직접 만듭니다. (Create)
  const li = document.createElement('li');

  // 5. 글자를 집어넣습니다. (Update)
  li.textContent = item.name;

  // 6. 클릭 이벤트를 직접 붙입니다. (Event)
  li.onclick = () => alert(item.name);

  // 7. 부모 태그에 자식으로 갖다 붙입니다. (Append)
  list.appendChild(li);
});
```

- **특징:** `getElementById`, `createElement`, `appendChild` 등 브라우저가 일하는 절차를 개발자가 **일일이 다 명령**하고 있습니다.
- **단점:** 코드가 길고, 중간에 순서가 바뀌면 에러가 날 확률이 높습니다.

### 2) 선언적 (Declarative) - React 코드

**"무엇(What)"**을 보여줄지만 선언하는 방식입니다. (택시 기사님께 "시청으로 가주세요"라고 목적지만 말하는 것과 같습니다.)

```jsx
function List({ data }) {
  // "결과적으로 이런 모양(UI)이 나와야 해"라고 리턴합니다.
  return (
    <ul>
      {/* 데이터를 이용해 바로 화면을 그립니다 (과정 생략) */}
      {data.map(item => (
        <li key={item.id} onClick={() => alert(item.name)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
```

- **특징:** 태그를 생성하고 붙이는 과정(`createElement`, `appendChild`)이 아예 없습니다. 그저 **"데이터가 이렇게 생겼으니, 화면은 이렇게 생겨야 한다"**라고 **구조(Template)**만 선언했습니다.
- **장점:** 복잡한 과정은 React가 알아서 처리하므로(DOM 조작 처리), 개발자는 **데이터와 결과 화면**에만 집중할 수 있습니다.
- **key:** React에서 배열을 렌더링할 때는 각 항목을 구분하기 위해 `key`가 필요합니다. 실무에서는 가능하면 고유한 `id` 값을 `key`로 사용합니다.

**🆚 비교 정리**

<div class="wda-callout wda-ci">
  위 두 코드의 비유가 핵심입니다!<br><br>
  • <strong>명령형:</strong> "좌회전, 우회전, 직진..." (과정 통제)<br>
  • <strong>선언적:</strong> "목적지는 시청입니다." (결과 중심)
</div>

---

<h2>3. 컴포넌트 (Component)</h2>

### 1) 개념: 레고 블록 (User's View)

사용자 입장에서 컴포넌트는 화면을 구성하는 **"독립적인 조각"**입니다.

- **비유:** **레고 블록** — 거대한 성(완성된 웹사이트)을 한 번에 깎아서 만드는 게 아니라, 작은 벽돌(컴포넌트)들을 하나하나 조립해서 만듭니다.
- **장점:** 똑같은 버튼이나 검색창을 여러 번 만들 필요 없이, **하나의 블록을 만들어서 여러 곳에 재사용**할 수 있습니다.

### 2) 구조: 함수 (Developer's View)

개발자 입장에서 컴포넌트는 사실 **"자바스크립트 함수(Function)"**와 같습니다. 아래 코드를 보면 이해가 쉽습니다.

```jsx
// 입력(Props)을 받아서 → 화면(UI/JSX)을 반환하는 기계
function MyComponent(props) {
  return <div>{props.name}</div>;
}
```

- **입력 (Input):** **`props`** (재료, 설정값) — 함수에 인자를 넣듯이, 컴포넌트에도 데이터를 전달할 수 있습니다.
- **출력 (Output):** **`UI (JSX)`** (결과물) — 일반 함수는 숫자나 문자를 반환하지만, 컴포넌트 함수는 **"보여질 화면(HTML 태그)"**을 반환합니다.

### 💡 보충 설명

<div class="wda-callout wda-ci">
  <strong>"입력을 받아 UI를 뱉어내는 함수"</strong><br><br>
  그냥 함수를 하나 만들고, 그 안에서 HTML 태그를 리턴하면 그것이 바로 리액트 컴포넌트입니다. 아주 간단하죠?
</div>

---

<h2>4. 컴포넌트로 화면 구성하기 (Composition)</h2>

리액트 개발은 **"큰 화면을 작은 단위로 쪼개고, 다시 조립하는 과정"**입니다.

### 1) 페이지 구조 (기획 단계)

웹사이트를 만들 때 가장 먼저 하는 일은 화면을 구역별로 나누는 것입니다.

- **Header:** 상단 메뉴바
- **Sidebar:** 왼쪽 카테고리
- **Content:** 실제 본문 내용
- **Footer:** 하단 정보

### 2) React 코드 (구현 단계)

나눠놓은 구역을 실제 코드로 옮기면, 마치 HTML 태그를 배치하는 것처럼 **직관적**입니다.

```jsx
function App() {
  return (
    <div>
      <Header />               {/* 상단 블록 조립 */}
      <div className="main">   {/* 중간 영역 그룹화 */}
        <Sidebar />            {/* 사이드바 조립 */}
        <Content />            {/* 본문 조립 */}
      </div>
      <Footer />               {/* 하단 블록 조립 */}
    </div>
  );
}
```

- **특징:** `<Header />`처럼 내가 만든 컴포넌트를 **HTML 태그 쓰듯이** 가져다 씁니다.

### 3) 이렇게 하면 뭐가 좋은가요?

<div class="wda-callout wda-cs">
  "독립적으로 개발, 테스트, 재사용 가능!"
</div>

1. **분업이 쉬워짐:** A 개발자는 `Header`만 만들고, B 개발자는 `Sidebar`만 만들어도 서로 코드가 섞일 일이 없습니다.
2. **유지보수:** "메뉴바가 고장 났어!"라고 하면 전체 코드를 뒤질 필요 없이 **`Header` 컴포넌트만** 열어보면 됩니다.

---

<h2>5. JSX란? (JavaScript XML)</h2>

**JavaScript XML**의 약자로, **자바스크립트 코드 안에서 HTML과 흡사한 문법을 쓸 수 있게 해주는 확장 문법**입니다.

### 1) 코드 비교 (일반 JS vs JSX)

"안녕하세요!"라는 문구가 적힌 `div` 태그 하나를 만들 때의 차이입니다.

| **구분** | **일반 JavaScript (DOM API)** | **JSX (React)** |
| --- | --- | --- |
| **방식** | **"수동 조립"** | **"직관적 작성"** |
| **코드** | `const div = document.createElement('div');`<br>`div.className = 'greeting';`<br>`div.textContent = '안녕하세요!';` | `return (`<br>&nbsp;&nbsp;`<div className="greeting">`<br>&nbsp;&nbsp;&nbsp;&nbsp;`안녕하세요!`<br>&nbsp;&nbsp;`</div>`<br>`);` |
| **느낌** | 기계에게 명령하는 느낌 (복잡함) | **HTML을 그냥 적는 느낌 (편안함)** |

### 2) 브라우저는 JSX를 모릅니다! 🚨

JSX는 자바스크립트 표준 문법이 아닙니다. 그래서 크롬이나 사파리 같은 브라우저에 이 코드를 그대로 던져주면 **에러가 납니다.**

- **해결책:** **"빌드 과정(Build Process)"**이 필요합니다.
  - 우리가 작성한 JSX 코드는 실행되기 전에 바벨(Babel) 같은 도구를 통해 **일반 자바스크립트 코드로 변환**됩니다.
  - 즉, 개발자는 편하게 JSX로 짜고, 브라우저는 변환된 JS를 실행하는 것이죠.

---

<h2>6. JSX의 진실 (Deep Dive)</h2>

JSX는 브라우저가 읽을 수 없는 문법이며, **빌드 도구(Babel)**가 이를 순수 자바스크립트 코드로 바꿔줍니다.  
전통적으로 JSX는 `React.createElement(...)` 호출로 변환된다고 설명합니다.  
다만 React 17 이후의 새 JSX Transform에서는 내부 변환 방식이 달라질 수 있습니다.  
초보자 단계에서는 "JSX는 브라우저가 직접 읽는 HTML이 아니라, 빌드 도구가 JavaScript로 바꿔주는 문법"이라고 이해하면 됩니다.

### 1) 코드 변환 과정 (Before & After)

개발자가 작성한 코드가 브라우저에 전달되기 전에 어떻게 변하는지 확인해 보세요.

**① JSX (우리가 쓰는 코드)**

```jsx
// HTML 태그처럼 생겼지만, 사실은 '가면(Syntax Sugar)'입니다.
<div id="app">
  <h1>Hello</h1>
</div>
```

⬇️ **Babel이 변환 (Transpiling)**

**② 변환된 JS (브라우저가 읽는 코드)**

```javascript
// 실제로는 React.createElement 함수를 계속 호출하는 것입니다.
React.createElement(
  "div",        // 1. 태그 이름
  { id: "app" }, // 2. 속성 (Props)
  React.createElement("h1", null, "Hello") // 3. 자식 요소 (Children)
);
```

### 2) 핵심 포인트

위 변환 과정에서 강조된 중요한 사실 2가지입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Syntax Sugar (문법적 설탕) 🍬</div>
    <div class="wda-fcard-dsc">사람이 코드를 짜기 편하게 만든 '달콤한 껍데기'일 뿐, 본질은 자바스크립트 함수 호출입니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">React 전용이 아님! 🙅‍♂️</div>
    <div class="wda-fcard-dsc">JSX는 React에서 널리 사용하는 JavaScript 문법 확장입니다.<br><br>브라우저 표준 문법은 아니기 때문에 Babel, Vite 같은 도구를 통해 JavaScript 코드로 변환되어야 합니다.<br><br>React 외에도 Preact, Solid처럼 JSX를 지원하는 도구들이 있지만, JSX 자체를 모든 프레임워크가 공통으로 사용하는 웹 표준이라고 표현하면 부정확합니다.</div>
  </div>
</div>

---

<h2>7. JSX 기본 문법 (HTML과 차이점)</h2>

HTML과 비슷해 보이지만, JSX는 **자바스크립트**이기 때문에 문법이 조금 다릅니다. 아래는 **4가지 필수 규칙**입니다.

### 1) class 대신 className

자바스크립트의 `class`(클래스 선언 예약어)와 겹치지 않게 이름을 바꿨습니다.

```jsx
// class -> className
<div className="container">
```

### 2) for 대신 htmlFor

`label` 태그를 쓸 때 `for`는 자바스크립트의 반복문(`for`)과 겹치므로 이름을 바꿨습니다.

```jsx
// for -> htmlFor
<label htmlFor="name">
```

### 3) 스타일은 객체로 (중괄호 2개)

문자열(`"color: red"`)이 아니라, **자바스크립트 객체**(`{ key: value }`) 형태로 넣어야 합니다.

```jsx
// 스타일은 객체로
// 바깥 {}는 JS 표현식 시작, 안쪽 {}는 객체 생성
<div style={{ color: 'red' }}>
```

### 4) 닫는 태그 필수

HTML에선 대충 넘어갔던 태그들도 JSX에선 **반드시 닫아줘야** 에러가 안 납니다.

```jsx
// 닫는 태그 필수 (Self-Closing)
<img src="..." />
<br />
```

### 5) 중괄호 `{ }`의 마법 (JavaScript Expression)

HTML 태그 사이에서 언제든지 **자바스크립트 변수나 계산식**을 사용할 수 있습니다.

```jsx
function Greeting({ name }) {
  const today = new Date();

  return (
    <div>
      {/* 1. 변수 넣기 */}
      <h1>안녕, {name}!</h1>

      {/* 2. 함수 실행 및 계산 */}
      <p>오늘은 {today.getMonth() + 1}월</p>

      {/* 3. 수식 계산 */}
      <p>{1 + 1} = 2</p>
    </div>
  );
}
```

---

<h2>8. SPA vs MPA & 라이브러리 (Deep Dive)</h2>

React는 사용자 인터페이스(UI)를 만들기 위한 라이브러리입니다. SPA는 React를 활용해 만들 수 있는 대표적인 웹 앱 구조 중 하나입니다.  
따라서 'React = SPA 전용 도구'라고 이해하기보다는, 'React는 UI를 만들고, SPA는 React를 활용하는 방식 중 하나'라고 이해하는 것이 정확합니다.  
이 관계를 조금 더 깊게 파헤쳐 보겠습니다.

### 1) Library vs Framework (주도권의 차이)

누가 누구를 호출하느냐, 즉 **"제어권(Control)"**이 누구에게 있느냐의 차이입니다.

| **구분** | **Framework (예: Vue, Angular)** | **Library (예: React)** |
| --- | --- | --- |
| **비유** | **"기성복 정장"** (틀이 정해짐) | **"옷감과 실"** (내가 직접 만듦) |
| **제어 흐름** | **프레임워크가 나를 부름 (IoC: 제어 역전)**<br>정해진 규칙과 틀 안에서만 코드를 작성해야 합니다. | **내가 라이브러리를 부름 (개발자 주도)**<br>내가 원하는 곳에, 원하는 방식(라우터 등)으로 자유롭게 조립합니다. |

### 2) SPA vs MPA (구조적 차이)

웹사이트가 **"파일(HTML)을 어떻게 다루느냐"**의 차이입니다.

| **구분** | **MPA (Multi Page App)** | **SPA (Single Page App)** |
| --- | --- | --- |
| **구조** | 페이지별로 **여러 개의 HTML 파일**이 존재합니다. | **단 하나(Single)의 HTML 파일**만 존재합니다. |
| **동작** | 페이지 이동 시마다 서버에서 **새로운 HTML을 받아옵니다.** | 처음에 한 번만 받고, 이후엔 **JavaScript가 내용만 교체**합니다. |
| **사용자 경험** | 이동할 때마다 화면이 **깜빡거립니다.** (새로고침) | 화면 **깜빡임 없이** 앱처럼 부드럽게 전환됩니다. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>렌더링과 구조는 다릅니다!</strong><br><br>
  • <strong>CSR/SSR:</strong> "누가 그리느냐" (렌더링 방식)<br>
  • <strong>SPA/MPA:</strong> "페이지 구조가 어떻게 되어있느냐" (파일 구조)<br><br>
  헷갈리기 쉽지만 엄연히 다른 개념이므로 구분해서 알아두어야 합니다.
</div>

---

<h2>9. React를 쓰는 이유</h2>

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">1) 컴포넌트 재사용 (Productivity)</div>
    <div class="wda-fcard-dsc">한 번 잘 만들어둔 UI 조각은 어디서든 가져다 쓸 수 있어 생산성이 폭발적으로 증가합니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">2) 선언적 UI (Maintainability)</div>
    <div class="wda-fcard-dsc">"어떻게(How)" 바꿀지 고민할 필요 없이, <strong>데이터만 바꾸면</strong> 리액트가 알아서 화면을 고쳐줍니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">3) 가상 DOM (Performance)</div>
    <div class="wda-fcard-dsc">메모리에 있는 가짜 화면(Virtual DOM)에서 먼저 계산하기 때문에, 실제 브라우저를 최소한으로 건드려 <strong>성능이 매우 빠르고 효율적</strong>입니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">4) 거대한 생태계 (Ecosystem)</div>
    <div class="wda-fcard-dsc">전 세계에서 가장 많이 쓰는 라이브러리인 만큼, 모르는 게 있으면 구글에 치면 다 나오고, 필요한 기능(달력, 차트 등)은 이미 남들이 다 만들어 놨습니다.</div>
  </div>
</div>

**1) 컴포넌트 재사용 예시**

```jsx
// 한 번만 정의해두면, 속성(Props)만 바꿔서 무한 재사용 가능
<Button />
<Button variant="primary" />
<Button size="large" />
```

**2) 선언적 UI 예시**

```jsx
// 버튼을 누르면 count 데이터만 변경 -> 화면은 리액트가 알아서 '1'로 업데이트
<p>클릭: {count}회</p>
<button onClick={() => setCount(count + 1)}>
  클릭
</button>
```

---

<h2>10. React의 인기 (현실적인 이유)</h2>

### 1) 압도적인 점유율 (npm 다운로드)

다른 라이브러리들과 비교했을 때, **전 세계적으로 가장 널리 쓰이는 라이브러리 중 하나**입니다.

npm 다운로드 수와 채용 비율은 시점에 따라 계속 변합니다. 아래 수치는 정확한 통계라기보다 **작성 시점 기준 예시**로 참고해주세요.

| **라이브러리** | **주간 다운로드 수(예시)** | **비고** |
| --- | --- | --- |
| **React** | **2,500만+** | **가장 많이 쓰이는 라이브러리 중 하나** |
| **Vue** | 500만+ | 2위지만 격차가 큼 |
| **Angular** | 300만+ | 기업용으로 주로 쓰임 |
| **Svelte** | 70만+ | 떠오르는 신흥 강자 |

### 2) 취업과 커리어 (Job Market)

리액트를 배우면 단순히 웹 개발만 할 수 있는 게 아니라, **커리어의 확장성**이 큽니다.

- **채용 시장:** 많은 프로젝트와 채용 공고에서 React를 요구합니다. (정확한 비율은 시점과 지역에 따라 달라집니다.)
- **모바일 확장:** **React Native**를 배우면 아이폰/안드로이드 앱도 만들 수 있습니다.
- **풀스택 확장:** **Next.js**를 배우면 백엔드까지 아우르는 풀스택 개발이 가능합니다.
- **수요:** 수요가 많은 만큼 관련 채용과 학습 자료도 풍부합니다.

### 💡 결론

<div class="wda-callout wda-cs">
  <strong>"가장 많이 쓰이는 데는 이유가 있습니다."</strong><br><br>
  생태계가 가장 크다는 것은, <strong>일자리가 가장 많고, 공부할 자료도 가장 많다</strong>는 뜻입니다. 이것이 여러분이 지금 리액트를 배우는 가장 큰 이유입니다.
</div>

---

<h2>11. React 역사 (History)</h2>

리액트는 2013년 공개 이후 매년 진화해 왔지만, 개발자들에게 가장 중요한 "대격변의 시기"는 바로 2019년(v16.8)입니다.

### 1) 주요 변화 타임라인

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ico">🏳️</div><div class="wda-fnode-ttl">2013 · v0.3</div><div class="wda-fnode-dsc">오픈소스 공개 — 페이스북 내부 도구를 세상에 공개</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">🔀</div><div class="wda-fnode-ttl">2015 · v0.14</div><div class="wda-fnode-dsc">React / ReactDOM 분리 — 웹뿐 아니라 앱(React Native)도 지원 준비</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">⭐</div><div class="wda-fnode-ttl">2019 · v16.8</div><div class="wda-fnode-dsc">Hooks 도입 — "함수형 컴포넌트"가 리액트 표준이 된 역사적 순간</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">⚡</div><div class="wda-fnode-ttl">2022 · v18.0</div><div class="wda-fnode-dsc">Concurrent Features — 렌더링 성능을 획기적으로 개선(동시성 모드)</div></div>
</div>

### 2) 왜 16.8 버전이 중요한가요? (Hooks 혁명)

**React 16.8**을 기점으로 코드를 짜는 방식이 완전히 바뀌었습니다.

- **이전 (Class):** `class App extends Component { ... }` — 코드가 길고 복잡했으며, `this` 키워드 때문에 헷갈리는 일이 많았습니다.
- **이후 (Function + Hooks):** `function App() { ... }` — `useState`, `useEffect` 같은 **Hooks**가 등장하면서, 함수형으로 훨씬 **짧고 직관적인 코드** 작성이 가능해졌습니다.

### 💡 학습 방향

<div class="wda-callout wda-cb">
  <strong>"우리는 최신 방식(Hooks)으로 배웁니다!"</strong><br><br>
  인터넷에 2019년 이전 자료(클래스형)가 있다면 과감히 패스하셔도 됩니다. 지금은 <strong>함수형 컴포넌트가 확실한 대세</strong>입니다.
</div>

---

<h2>12. React 버전 전략 (v18 vs v19)</h2>

결론부터 말씀드리면, 우리는 **"React 18"**을 기준으로 학습합니다.

<div class="wda-group2">
  <div class="wda-group">
    <div class="wda-group-ttl">React 18 (수업 기준)</div>
    <div class="wda-fgrid">
      <div class="wda-fcard"><div class="wda-fcard-ttl">표준 (Standard)</div><div class="wda-fcard-dsc">React 18은 여전히 많은 프로젝트에서 사용되는 안정적인 버전입니다.<br>수업에서는 <strong>React 18 기준</strong>으로 학습합니다.</div></div>
      <div class="wda-fcard"><div class="wda-fcard-ttl">호환성 (Compatibility)</div><div class="wda-fcard-dsc">React 19가 공식 릴리스된 이후에는 프로젝트 상황과 라이브러리 호환성에 따라 React 18 또는 React 19를 선택할 수 있습니다.</div></div>
      <div class="wda-fcard"><div class="wda-fcard-ttl">기능 (Features)</div><div class="wda-fcard-dsc">Automatic Batching(자동 배칭)과 <strong>동시성(Concurrent)</strong> 기능만으로도 성능 최적화에 충분합니다.</div></div>
    </div>
  </div>
  <div class="wda-group">
    <div class="wda-group-ttl">React 19 (차세대)</div>
    <div class="wda-fgrid">
      <div class="wda-fcard"><div class="wda-fcard-ttl">핵심 변화</div><div class="wda-fcard-dsc">Actions, <code>useActionState</code>, <code>useOptimistic</code>, <code>use</code>, form Actions 등 비동기 처리와 폼 처리 관련 기능이 강화되었습니다.<br>서버 컴포넌트 문맥에서는 <code>"use client"</code>, <code>"use server"</code> 같은 지시문을 볼 수 있는데, 이를 useClient/useServer라는 Hook으로 오해하면 안 됩니다.</div></div>
      <div class="wda-fcard"><div class="wda-fcard-ttl">Compiler</div><div class="wda-fcard-dsc">React Compiler는 React 19와 함께 사용하기 좋은 최적화 도구이지만, 별도 설정이 필요합니다.</div></div>
      <div class="wda-fcard"><div class="wda-fcard-ttl">학습 전략</div><div class="wda-fcard-dsc">기초를 <strong>React 18로 탄탄히</strong> 닦아두세요.<br>기본기가 있으면 19 버전으로 넘어가는 것은 아주 쉽습니다.</div></div>
    </div>
  </div>
</div>

### 💡 결론

<div class="wda-callout wda-cs">
  <strong>"안정성과 표준을 먼저 잡습니다."</strong><br><br>
  우리는 가장 널리 쓰이고 안정적인 <strong>React 18</strong>을 마스터하는 것을 목표로 하고, 이후에 19의 신기능을 얹는 방식으로 갈 것입니다.
</div>

---

<h2>13. Webpack vs Vite (도구 비교)</h2>

리액트 코드를 브라우저가 이해하도록 변환해 주는 "번들러(Bundler)와 빌드 도구"의 세대교체입니다.

### 1) Webpack (과거의 왕)

기존에 가장 많이 쓰이던 방식입니다. (CRA가 이 방식을 씁니다.)

- **방식:** **"전체 요리 후 서빙"** — 개발 서버를 켤 때, 모든 자바스크립트 파일을 하나로 뭉치는(Bundling) 작업을 **미리 다 끝내야** 화면이 뜹니다.
- **단점:** 프로젝트가 커질수록 **서버 켜지는 시간이 엄청나게 느려집니다.** (몇 분씩 걸리기도 함)

### 2) Vite (현대적 대안)

프랑스어로 '빠르다'는 뜻을 가진, 차세대 빌드 도구입니다.

- **방식:** **"주문 즉시 요리" (Native ESM)** — 미리 뭉치지 않고, 브라우저가 "이 파일 줘!"라고 요청할 때 **그 파일만 딱 변환해서 줍니다.**
- **장점:** Native ESM 기반 개발 서버와 빠른 HMR을 제공하여, 많은 현대 프론트엔드 프로젝트에서 사용됩니다.<br>
  다만 실제 실행 속도는 프로젝트 규모와 환경에 따라 달라질 수 있으므로 '항상 0.x초'처럼 단정하지는 않는 것이 좋습니다.

### 3) 비교 요약표

| **구분** | **Webpack** | **Vite (비트)** |
| --- | --- | --- |
| **비유** | 모든 메뉴를 미리 만들어둠 (느림) | **주문 들어오면 바로 만듦 (빠름)** |
| **시동 시간** | 프로젝트 크기가 커질수록 느려지는 경향 | 프로젝트가 커져도 상대적으로 빠른 편 |
| **갱신 속도** | 코드 수정 시 전체를 다시 묶음 | **수정한 부분만 갈아끼움 (HMR)** |
| **결론** | 과거에 CRA 등에서 주로 사용 | 많은 현대 프로젝트에서 널리 사용 |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 Vite를 쓰나요?</strong> 단순히 "빠르다"는 것을 넘어서, <strong>개발자의 스트레스를 없애줍니다.</strong> 코드 한 줄 고치고 3초 기다리던(Webpack) 시절에서, 저장하자마자 바로 반영되는(Vite) 신세계를 경험하면 다시는 돌아갈 수 없습니다.
</div>

---

<h2>💻 실습 : React 설치하기</h2>

**🎯 Mission**

Vite의 **Interactive(대화형) 모드**를 사용하여 복잡한 옵션을 외울 필요 없이, 화살표 키로 선택하며 안전하게 React 프로젝트를 생성하고 실행하세요.

**📝 예제 코드 (터미널 입력)**

VS Code 터미널을 열고 다음 명령어를 입력하여 설치 마법사를 시작합니다.

```bash
npm create vite@latest
```

**✅ 결과 예시 (선택 과정)**

명령어를 입력하면 아래와 같은 질문들이 나옵니다. **화살표 키(⬆️⬇️)**로 이동하고 **엔터(Enter)**로 선택하세요.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">Project name</div>
      <div class="wda-sdsc"><code>my-react-app</code> (또는 원하는 이름 입력)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">Select a framework</div>
      <div class="wda-sdsc"><code>React</code> 선택</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">Select a variant</div>
      <div class="wda-sdsc"><code>JavaScript</code> 선택</div>
    </div>
  </div>
</div>

**📝 정답 코드 (실행 및 확인)**

프로젝트 생성이 완료되면, 터미널에 안내된 다음 명령어들을 **한 줄씩 순서대로** 입력하여 서버를 실행합니다.

```bash
cd my-react-app   # 1. 방금 만든 폴더로 들어갑니다.
npm install       # 2. 필요한 부품(라이브러리)을 설치합니다.
npm run dev       # 3. 개발 서버를 켭니다.
```

- **성공 확인:** 브라우저 주소창에 `http://localhost:5173`을 입력해서 React 로고가 빙글빙글 도는 화면이 나오면 성공입니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 Interactive 모드인가요?</strong> 기존에는 <code>npm create vite my-app --template react</code>처럼 긴 옵션을 다 외워서 쳐야 해서 오타가 나기 쉬웠습니다. Interactive 모드는 <strong>화살표 키로 프레임워크(React)와 언어(JavaScript)를 눈으로 보고 직접 선택</strong>할 수 있어 실수가 적고 직관적입니다.
</div>

---

<h2>14. 프로젝트 폴더 구조</h2>

### 1) 폴더 구조 (비유 : 모델하우스)

프로젝트를 생성하면 기본 뼈대가 갖춰진 '모델하우스' 상태로 시작합니다.

```text
my-react-app/
├── node_modules/      # 📦 설치된 패키지 (라이브러리 창고)
├── public/            # 📁 정적 파일 (이미지, 폰트 등)
│   └── vite.svg
├── src/               # 📝 소스 코드 (우리가 작업할 곳)
│   ├── assets/        # 🖼️ 이미지 등 리소스
│   ├── App.css        # 🎨 App 컴포넌트용 스타일
│   ├── App.jsx        # 🏠 메인 컴포넌트 (가장 중요!)
│   ├── index.css      # 🎨 전체 공통 스타일
│   └── main.jsx       # 🚪 진입점 (React와 HTML 연결)
├── .gitignore         # 깃(Git) 제외 설정
├── index.html         # 📄 HTML 템플릿 (껍데기)
├── package.json       # 📋 프로젝트 정보 및 의존성 목록
└── vite.config.js     # ⚙️ Vite 설정 파일
```

### 2) 주요 파일 역할 및 수정 시점

**"우리가 건드려야 할 파일 3대장"**에 대한 설명입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">main.jsx — 진입점 (Entry)</div>
    <div class="wda-fcard-dsc">React를 HTML(<code>root</code>)에 부착하는 접착제 역할.<br><strong>수정 시점:</strong> 거의 수정 안 함 (전역 설정이나 라이브러리 초기화 시)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">App.jsx — 메인 컴포넌트 (Main)</div>
    <div class="wda-fcard-dsc">실제 화면 구성을 시작하는 곳.<br><strong>수정 시점:</strong> 항상 수정함 (Always) — 개발의 시작점이자 메인 작업장</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">index.html — HTML 껍데기 & 메타 태그</div>
    <div class="wda-fcard-dsc">React가 그려질 빈 도화지.<br><strong>수정 시점:</strong> 가끔 (폰트, 아이콘, 타이틀 변경 시)</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>"src 폴더 밖은 위험해!"</strong> 초보자 시절에는 <code>src</code> 폴더 안에서만 논다고 생각하면 편합니다. 특히 <code>node_modules</code>는 우리가 설치한 도구들이 들어있는 거대한 창고이므로, 절대 직접 파일을 수정하거나 지우면 안 됩니다. (자동으로 관리됩니다.)
</div>

---

<h2>15. index.html 살펴보기</h2>

### 1) 전체 코드 분석

React 앱의 가장 바깥 껍데기가 되는 파일입니다. 코드는 평범해 보이지만 React 구동을 위한 **필수 장치 2줄**이 포함되어 있습니다.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 2) 핵심 요소 설명

- **`#root` (컨테이너):** React 앱이 **렌더링(표시)되는 공간**입니다. 처음엔 비어있지만, 브라우저가 켜지면 React가 이 `div` 안을 컴포넌트들로 가득 채웁니다.
- **`type="module"` (ES 모듈):** 브라우저에서 **최신 자바스크립트 문법(import/export)**을 바로 사용할 수 있게 해주는 설정입니다.<br>
  개발 서버에서는 Vite가 ES Module 기반으로 필요한 파일을 빠르게 제공할 수 있습니다.<br>
  다만 배포용 빌드에서는 파일을 최적화하고 번들링하여 dist 폴더에 결과물을 생성합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>"HTML은 텅 비어있습니다."</strong> 코드를 보면 <code>&lt;body&gt;</code> 태그 안에 내용물이 하나도 없죠? (<code>&lt;div id="root"&gt;&lt;/div&gt;</code> 뿐) 일반적인 웹사이트와 달리, React(SPA)는 <strong>HTML이 껍데기만 제공하고, 실제 내용은 자바스크립트가 알아서 그려주는 방식</strong>이기 때문입니다.
</div>

---

<h2>16. npm 스크립트 (명령어)</h2>

### 1) package.json의 scripts

`package.json` 파일을 열어보면 `scripts`라는 항목이 있습니다. 긴 명령어를 매번 치기 귀찮으니, **짧은 단축키**로 등록해 둔 것입니다.

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

`dev`는 개발용 서버 켜기, `build`는 배포용 파일 만들기, `lint`는 코드 검사하기, `preview`는 만든 파일 미리보기를 의미합니다.

### 2) 핵심 명령어 2가지

개발자가 기억해야 할 명령어는 딱 2개입니다.

| **명령어** | **입력 코드** | **역할 (Role)** | **언제 쓰나요?** |
| --- | --- | --- | --- |
| **dev** | `npm run dev` | **개발 서버 실행**(`localhost:5173`) | **지금!** 코드를 수정하고 화면을 확인할 때 매일 사용합니다. |
| **build** | `npm run build` | **배포 파일 생성**(`dist/` 폴더 생성) | **나중에!** 개발이 다 끝나고 실제 서버에 올리기 전에 딱 한 번 씁니다. |

**💡 상세 설명**

<div class="wda-callout wda-ci">
  <strong><code>npm run dev</code></strong> — 우리가 아까 입력했던 명령어죠? 코드를 고치면 즉시 화면에 반영되는 "개발 모드"입니다.<br><br>
  <strong><code>npm run build</code></strong> — 개발 편의 기능을 싹 빼고, 용량을 최대한 줄여서 "최적화된 파일"을 만들어줍니다. (실제 고객에게 보여줄 때 사용)
</div>

---

<h2>⁉️ FAQ (핵심 복습)</h2>

### Q1. 프로젝트 생성 명령어는?

Vite로 React 프로젝트를 만들 때 가장 먼저 입력해야 하는 명령어입니다.

- **정답:** **`npm create vite@latest`**
- **설명:** 뒤이어 프로젝트 이름과 템플릿(React, JavaScript)을 선택하는 과정이 이어집니다. 이 한 줄만 기억하면 언제든 리액트 프로젝트를 시작할 수 있습니다.

### Q2. React가 들어가는 위치는?

우리가 만든 React 앱이 브라우저의 어느 부분에 그려지는지에 대한 질문입니다.

- **정답:** **`root`**
- **설명:** `index.html` 파일에 있는 **`<div id="root"></div>`** 태그를 말합니다. React는 이 빈 `div`를 찾아서 그 안을 우리가 만든 컴포넌트들로 채워 넣습니다.

---

<h2>✅ 핵심 요약</h2>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>1. React</strong></td>
    <td>• Facebook(메타)이 만든 <strong>UI 라이브러리</strong>입니다.<br>• 복잡한 화면을 한 번에 그리는 것이 아니라, <strong>컴포넌트 기반</strong>으로 쪼개서 구성하는 것이 핵심입니다.</td>
  </tr>
  <tr>
    <td><strong>2. JSX</strong></td>
    <td>• <strong>JavaScript 안에서 HTML 문법</strong>을 그대로 사용할 수 있게 해주는 도구입니다.<br>• <code>createElement</code> 같은 복잡한 코드 없이, 우리에게 익숙한 태그(<code>&lt;div&gt;</code>)로 <strong>직관적인 UI 코드</strong>를 짤 수 있게 해줍니다.</td>
  </tr>
  <tr>
    <td><strong>3. 컴포넌트</strong></td>
    <td>• 화면을 구성하는 <strong>재사용 가능한 UI 조각</strong>입니다.<br>• <strong>레고 블록</strong>처럼 작은 단위(버튼, 입력창 등)를 먼저 만들고, 이를 조립해서 거대한 성(웹사이트)을 완성합니다.</td>
  </tr>
</table>
