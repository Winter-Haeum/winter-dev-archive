---
title: "2-1 JSX 문법 익히기"
status: "completed"
description: "Fragment, className, camelCase 속성, 태그 닫기, 중괄호 표현식, 인라인 스타일까지 JSX 핵심 문법 규칙을 정리한다."
category: "React"
section: "Core"
tags:
  - react
  - jsx
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
.wda-legacy{border-color:rgba(239,68,68,.22);background:rgba(239,68,68,.02)}
.wda-modern{border-color:rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
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
  • <strong>Fragment 이해하기</strong> — 여러 JSX 요소를 불필요한 div 없이 하나로 묶는 방법을 배웁니다.<br>
  • <strong>JSX 속성 규칙 익히기</strong> — className, htmlFor, camelCase 속성 규칙을 익힙니다.<br>
  • <strong>중괄호 표현식 사용하기</strong> — JSX 안에서 JavaScript 변수, 연산, 삼항 연산자를 사용하는 방법을 이해합니다.<br>
  • <strong>인라인 스타일 작성하기</strong> — JSX에서 style을 객체 형태로 작성하는 방법을 익힙니다.
</div>

---

<h2>1. Fragment (유령 태그)</h2>

리액트에서 가장 많이 쓰는 문법 중 하나로, 실제 화면에는 나타나지 않으면서 여러 태그를 하나로 묶어주는 역할을 합니다.

**📌 사용하는 이유 (Why)**

리액트 컴포넌트는 무조건 **하나의 부모 태그**만 반환(return)해야 한다는 철칙이 있습니다.

- **문제:** 그렇다고 매번 `<div>`로 감싸면, 실제 HTML에도 `<div>`가 생겨서 스타일(CSS)이 꼬이거나 불필요한 태그가 늘어납니다.
- **해결:** 이때 **Fragment**를 사용하면 코드는 묶어주되, 실제 브라우저에는 아무 흔적도 남기지 않습니다.

**📝 사용법**

두 가지 방법이 있지만, 주로 짧은 문법을 사용합니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">긴 문법</div>
    <div class="wda-fcard-dsc"><code>&lt;React.Fragment&gt; ... &lt;/React.Fragment&gt;</code><br>Fragment를 명시적으로 작성하는 방식입니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">짧은 문법</div>
    <div class="wda-fcard-dsc"><code>&lt;&gt; ... &lt;/&gt;</code> (빈 태그처럼 보임)<br>축약 문법으로, 보통 더 간단해서 자주 사용하는 방식입니다.</div>
  </div>
</div>

**🆚 코드 비교**

`<div>`로 감쌌을 때와 Fragment로 감쌌을 때의 차이점입니다.

```jsx
// ❌ div 사용 (Bad)
// 결과: <div id="root"> <div> <h1>...</h1> <p>...</p> </div> </div>
// 불필요한 div가 한 겹 더 생깁니다.
return (
  <div>
    <h1>제목</h1>
    <p>내용</p>
  </div>
);

// ✅ Fragment 사용 (Good)
// 결과: <div id="root"> <h1>...</h1> <p>...</p> </div>
// 군더더기 없이 깔끔하게 내용만 들어갑니다.
return (
  <>
    <h1>제목</h1>
    <p>내용</p>
  </>
);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>"투명 망토라고 생각하세요"</strong>
  <p>리액트에게는 "이거 한 덩어리야"라고 알려주지만, 브라우저에게는 "아무것도 없으니 무시해"라고 말하는 <strong>투명 망토</strong>와 같습니다. 불필요한 부모 태그가 필요 없을 때는 <code>&lt;div&gt;</code> 대신 Fragment를 사용하는 습관을 들이세요. 다만 레이아웃이나 스타일 적용을 위해 실제 DOM 요소가 필요할 때는 <code>&lt;div&gt;</code>를 사용해도 됩니다.</p>
</div>

---

<h2>2. 규칙 1: class 대신 className 사용하기</h2>

HTML을 작성하던 습관 때문에 가장 많이 실수하는 부분입니다. JSX는 HTML처럼 보이지만 실제로는 자바스크립트이기 때문에, 용어 사용에 주의해야 합니다.

**📝 규칙 (Rule)**

CSS 클래스를 적용할 때 `class=""` 속성을 사용하면 안 됩니다. 반드시 **`className=""`** 이라고 써야 합니다.

**📌 이유 (Why?)**

자바스크립트에는 이미 **`class`** 라는 단어가 "객체지향 프로그래밍의 클래스(Class)"를 만드는 명령어로 등록(예약어, Reserved Word)되어 있습니다.  
JSX는 HTML처럼 보이지만 JavaScript 코드로 변환됩니다.  
React에서는 DOM 속성 이름과 충돌을 피하고 JavaScript 방식에 맞추기 위해 `class` 대신 `className`을 사용합니다.

**🆚 코드 비교**

```jsx
// ❌ HTML 방식 (틀린 예)
// 콘솔 경고: Warning: Invalid DOM property 'class'
<div class="container">
  <p class="text-red">내용</p>
</div>

// ✅ JSX 방식 (올바른 예)
// 자바스크립트의 class와 겹치지 않게 이름을 살짝 바꿈
<div className="container">
  <p className="text-red">내용</p>
</div>
```

---

<h2>3. 💻 실습 : JSX 수정해보기</h2>

이론만 보고 넘어가면 금방 까먹습니다. `react-study` 프로젝트를 열고 코드를 직접 수정해서 제대로 동작하는지 확인해봅시다.

**✅ App.jsx 작성**

`src/App.jsx` 파일을 열어 기존 내용을 지우고 아래와 같이 작성하세요. 앞서 배운 **두 가지 규칙(Fragment, className)**이 모두 적용된 코드입니다.

```jsx
function App() {
  return (
    <>
      {/* 1. 최상위 태그(Fragment)로 감싸기 */}
      <h1 className="title">Hello JSX</h1>

      {/* 2. class 대신 className 사용하기 */}
      <p className="desc">React 시작하기</p>
    </>
  );
}

export default App;
```

**✅ 확인 포인트 (Checklist)**

코드를 저장하고 브라우저(`http://localhost:5173`)와 개발자 도구(`F12`)를 확인해보세요.

1. **에러가 나나요?** 만약 `<>` ... `</>` 로 감싸지 않았다면 빨간색 에러 화면이 뜰 것입니다.
2. **경고가 뜨나요?** `className` 대신 `class`라고 일부러 써보세요. 콘솔(Console) 창에 "Invalid DOM property 'class'"라는 경고 메시지가 뜨는 것을 확인할 수 있습니다.

**💡 실습 팁**

<div class="wda-callout wda-cs">
  <strong>"일부러 틀려보세요"</strong>
  <p>공부할 때는 일부러 <code>&lt;div&gt;</code>를 없애보거나 <code>class</code>로 바꿔서 어떤 에러가 뜨는지 눈으로 확인해두는 것이 좋습니다. 나중에 진짜 에러를 만났을 때 당황하지 않게 됩니다.</p>
</div>

---

<h2>4. 규칙 2: camelCase 속성 사용하기</h2>

HTML에서는 속성 이름을 소문자로 막 써도 됐지만, JSX는 자바스크립트이기 때문에 **카멜 케이스(camelCase)** 규칙을 따릅니다.  
즉, 두 단어를 합칠 때 두 번째 단어의 첫 글자를 **대문자**로 써야 합니다.

**🧠 주요 변환 목록 (Cheat Sheet)**

자주 쓰이는 속성들이 어떻게 바뀌는지 표로 정리해 드립니다.

| **HTML 속성** | **JSX 속성** | **설명** | **비고** |
| --- | --- | --- | --- |
| `class` | **`className`** | CSS 클래스 지정 | 자바스크립트 `class`와 겹침 방지 |
| `for` | **`htmlFor`** | label 태그 연결 | 자바스크립트 반복문 `for`와 겹침 방지 |
| `onclick` | **`onClick`** | 클릭 이벤트 | 이벤트 핸들러는 대문자로 시작 |
| `onchange` | **`onChange`** | 입력 변경 이벤트 | - |
| `tabindex` | **`tabIndex`** | 탭 키 순서 | - |
| `maxlength` | **`maxLength`** | 입력 최대 길이 | - |
| `readonly` | **`readOnly`** | 읽기 전용 | - |

**🆚 코드 비교 (HTML vs JSX)**

특히 `label` 태그를 쓸 때 `for` 대신 `htmlFor`를 써야 한다는 점을 꼭 기억하세요.

```jsx
// ❌ HTML 스타일 (틀린 예)
// maxlength는 maxLength로, for는 htmlFor로 바꿔야 합니다.
<label for="email">이메일</label>
<input type="text" maxlength="10" />

// ✅ JSX 스타일 (올바른 예)
// 대소문자를 구분하는 camelCase를 완벽하게 지킨 모습입니다.
<label htmlFor="email">이메일</label>
<input type="text" maxLength="10" />
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 이렇게 복잡하게 바꿨나요?</strong>
  <p>JSX는 결국 브라우저가 읽기 전에 자바스크립트 코드로 변환됩니다.<br>자바스크립트에서 이미 <code>for</code>(반복문), <code>class</code>(클래스 정의) 같은 단어들을 문법으로 쓰고 있기 때문에, 충돌을 피하기 위해 이름을 살짝 바꾼 것입니다.</p>
</div>

---

<h2>5. 💻 실습: 에러 고치기 (태그와 속성)</h2>

백문이 불여일타! 리액트가 얼마나 엄격한지 몸소 체험해보기 위해, 멀쩡한 코드를 일부러 망가뜨려 보고 다시 고치는 과정을 진행합니다.

### 1단계: 틀린 코드 작성 (Break It)

`App.jsx` 파일에 아래와 같이 **틀린 코드**를 일부러 작성하고 저장해보세요.

```jsx
function App() {
  return (
    <>
      {/* 1. 태그를 안 닫음 */}
      <input type="text">
      <br>

      {/* 2. 이벤트 이름을 소문자로 씀 + 함수 실행 */}
      <button onclick={alert}>클릭</button>
    </>
  )
}
export default App;
```

### 2단계: 에러 확인 및 수정 (Fix It)

저장하자마자 화면이 빨갛게 변하거나 에러 메시지가 뜰 것입니다. 하나씩 고쳐봅시다.

1. **태그 닫기:** `input`과 `br` 태그 뒤에 `/`를 붙여서 닫아주세요. → `<input />`, `<br />`
2. **속성명 수정:** `onclick`을 대문자가 섞인 **`onClick`**으로 수정하세요.
3. **함수 전달:** `onClick`에는 클릭했을 때 실행할 함수를 전달해야 합니다. `alert`를 직접 넣기보다, 원하는 메시지를 실행하도록 화살표 함수로 감싸는 것이 안전합니다. → `onClick={() => alert("클릭")}`

**📝 정답 코드**

```jsx
function App() {
  return (
    <>
      <input type="text" /> <br />
      <button onClick={() => alert("클릭")}>클릭</button>
    </>
  );
}
```

**🔑 핵심 포인트**

<div class="wda-callout wda-ci">
  <strong>"리액트는 엄격한 선생님입니다"</strong>
  <p>HTML은 대충 태그를 안 닫아도 브라우저가 눈감아주지만, 리액트는 아주 사소한 문법 오류(오타, 대소문자, 닫는 태그)도 용납하지 않고 바로 에러를 띄웁니다.</p>
</div>

---

<h2>6. 규칙 3: 모든 태그 닫기 (Self-Closing)</h2>

HTML을 쓰던 습관대로 태그를 열기만 하고 닫지 않으면 바로 에러가 발생합니다. JSX에서는 예외 없이 **모든 태그를 명시적으로 닫아야** 합니다.

**📝 규칙 (Rule)**

HTML에서는 `input`, `br` 같은 태그들을 닫지 않아도 브라우저가 알아서 처리해줬지만, JSX(XML 기반)는 문법이 엄격하여 닫지 않은 태그를 허용하지 않습니다.

**📝 작성 방법 (Self-closing)**

태그 사이에 내용물(Content)이 없다면, 여는 태그 끝에 슬래시(`/`)를 붙여서 스스로 닫는 태그(Self-closing tag)로 만들어야 합니다.

- 문법: `<태그이름 />`

**🆚 코드 비교 (HTML vs JSX)**

| **태그 종류** | **HTML (닫지 않아도 됨)** | **JSX (반드시 닫아야 함)** |
| --- | --- | --- |
| 줄바꿈 | `<br>` | `<br />` |
| 이미지 | `<img src="...">` | `<img src="..." />` |
| 입력창 | `<input type="text">` | `<input type="text" />` |
| 구분선 | `<hr>` | `<hr />` |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>"내용이 있으면 감싸고, 없으면 스스로 닫는다"</strong>
  <ul>
    <li>내용이 있을 때: <code>&lt;div&gt;내용&lt;/div&gt;</code> (여는 태그 + 닫는 태그)</li>
    <li>내용이 없을 때: <code>&lt;img /&gt;</code>, <code>&lt;input /&gt;</code> (끝에 <code>/</code> 붙이기)</li>
  </ul>
  <p>이 규칙만 지키면 "Unterminated JSX contents" 같은 에러를 만날 일이 없습니다.</p>
</div>

---

<h2>7. 중괄호 표현식 (Expression)</h2>

중괄호 `{ }`는 자바스크립트 세상으로 들어가는 문입니다. 이 안에 자바스크립트 코드를 넣으면 결과값이 HTML에 출력됩니다.

**📌 표현식(Expression)이란?**

하나의 **값(Value)**으로 평가될 수 있는 코드 조각을 말합니다. 명령(Statement)이 아니라 결과가 남는 코드만 중괄호 안에 들어갈 수 있습니다.

**📝 사용 규칙 (Rule)**

무엇을 넣을 수 있고, 없는지 구분하는 것이 가장 중요합니다.

<div class="wda-compare">
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-ttl">✅ 가능한 것</div>
    결과값이 나오는 코드입니다.<br>
    예시: 변수, 사칙연산(<code>+ - * /</code>), 함수 호출(<code>map</code>), 삼항 연산자(<code>? :</code>)
  </div>
  <div class="wda-compare-card wda-legacy">
    <div class="wda-compare-ttl">❌ 불가능한 것</div>
    결과 없이 명령만 하는 코드입니다.<br>
    예시: <code>if</code> 문, <code>for</code> 문, 함수 선언(<code>function</code>), 객체 리터럴 직접 넣기
  </div>
</div>

**🧪 예시 코드**

아래 예제 코드에서 변수와 연산, 삼항 연산자가 어떻게 쓰이는지 확인해 보세요.

```jsx
function Profile() {
  // 데이터 준비 (변수 선언)
  const name = "홍길동";
  const birthYear = 2000;
  const currentYear = new Date().getFullYear(); // 현재 연도 구하기

  return (
    <div>
      {/* 1. 변수 출력 */}
      <h1>이름: {name}</h1>

      {/* 2. 텍스트와 함께 사용 */}
      <p>출생연도: {birthYear}년</p>

      {/* 3. 산술 연산 (빼기) */}
      <p>나이: {currentYear - birthYear}세</p>

      {/* 4. 삼항 연산자 (조건부 출력) */}
      <p>성인 여부: {currentYear - birthYear >= 19 ? "성인" : "미성년자"}</p>
    </div>
  );
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>if문을 쓰고 싶다면?</strong>
  <p>중괄호 안에는 <code>if</code>문을 넣을 수 없으므로, 대신 <strong>삼항 연산자</strong>(<code>조건 ? 참 : 거짓</code>)를 사용하거나, JSX 바깥에서 미리 연산을 끝낸 뒤 변수만 넣어주는 방식을 사용해야 합니다.</p>
  <p><strong>객체 리터럴은요?</strong> 객체 리터럴을 JSX의 자식으로 직접 출력하는 것은 불가능합니다. 예: <code>&lt;p&gt;{ name: '철수' }&lt;/p&gt;</code>는 오류가 납니다. 다만 <code>style</code> 속성처럼 객체를 prop 값으로 전달하는 것은 가능합니다. 예: <code>&lt;div style={{ color: 'red' }}&gt;내용&lt;/div&gt;</code></p>
</div>

---

<h2>8. 💻 실습 : 변수 보여주기</h2>

자바스크립트 변수를 만들고 중괄호 `{}`를 사용해 화면에 보여주는 미션입니다.

**🎯 Mission**

`App.jsx` 파일을 열고 다음 3가지 미션을 수행하세요.

1. **이름 변경:** `name` 변수의 값을 본인의 이름이나 닉네임으로 바꾸세요.
2. **로직 테스트:** `score`를 **50점**으로 바꿔보고 화면에 "불합격"이 나오는지 확인하세요.
3. **연산 추가:** 점수 옆에 연산식(예: `{score + 10}`)을 넣어보세요.

**📝 예제 코드**

실습을 시작하기 위한 기본 코드입니다. 작성 후 미션을 수행해 보세요.

```jsx
function App() {
  // 변수 선언 (반드시 return 위에서!)
  const name = "김철수";
  const score = 90;

  return (
    <>
      <h1>학생 정보</h1>
      <p>이름: {name}</p>
      <p>점수: {score}점</p>

      {/* 삼항 연산자 도전! (조건 ? 참 : 거짓) */}
      <p>결과: {score >= 80 ? "합격" : "불합격"}</p>
    </>
  );
}

export default App;
```

**✅ 결과 예시**

기본 코드 실행 시 브라우저 화면입니다.

- **학생 정보** (제목)
- 이름: 김철수
- 점수: 90점
- 결과: 합격

**📝 정답 코드 (미션 적용 후)**

점수를 50점으로 바꾸면 결과가 자동으로 변하는 것을 확인하세요.

```jsx
function App() {
  const name = "홍길동"; // 미션 1: 이름 변경
  const score = 50;     // 미션 2: 점수 변경

  return (
    <>
      <h1>학생 정보</h1>
      <p>이름: {name}</p>
      {/* 미션 3: 연산 추가 */}
      <p>점수: {score}점 (보너스 점수: {score + 10})</p>

      {/* 50점은 80점보다 작으므로 '불합격' 출력 */}
      <p>결과: {score >= 80 ? "합격" : "불합격"}</p>
    </>
  );
}

export default App;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>변수 선언 위치</strong>
  <p>변수는 반드시 <strong>컴포넌트 함수 안, 그리고 return 문 위</strong>에 만들어야 합니다.</p>
  <ul>
    <li><code>return</code> 아래에 쓰면? → <strong>도달할 수 없는 코드(Unreachable code)</strong>라서 실행되지 않습니다.</li>
    <li>함수 밖에는 변하지 않는 상수나 설정값을 둘 수 있습니다. 다만 화면에서 자주 바뀌어야 하는 값은 일반 변수가 아니라 나중에 배울 State로 관리해야 합니다. 이번 실습에서는 흐름을 이해하기 위해 변수를 컴포넌트 함수 안, <code>return</code> 위에 작성합니다.</li>
  </ul>
</div>

---

<h2>9. 인라인 스타일 적용 (Inline Styles)</h2>

HTML에서는 스타일을 문자열(`" "`)로 적었지만, JSX는 자바스크립트이기 때문에 **객체(Object)** 형태로 전달해야 합니다. 또한 CSS 속성 이름도 규칙에 맞게 변경해야 합니다.

**📝 객체로 전달 (Object)**

스타일은 자바스크립트 객체 `{ key: value }` 형태로 만듭니다. 따라서 JSX 안에서는 중괄호가 두 번 겹쳐진 **`{{ ... }}`** 모양이 자주 등장합니다.

- **바깥쪽 `{ }`**: 자바스크립트 표현식을 쓰겠다는 의미
- **안쪽 `{ }`**: 자바스크립트 객체(Object)라는 의미

**📝 속성명 변환 (camelCase)**

자바스크립트에서는 변수명에 빼기 기호(`-`)를 쓸 수 없습니다(빼기로 인식함). 따라서 CSS의 `kebab-case`를 **`camelCase`**로 바꿔서 작성해야 합니다.

| **CSS 속성 (HTML)** | **JSX 속성 (JavaScript)** |
| --- | --- |
| `background-color` | **`backgroundColor`** |
| `font-size` | **`fontSize`** |
| `margin-top` | **`marginTop`** |

**🆚 코드 비교**

문자열이 아닌 객체로, 대시(-) 대신 대문자로 바뀌는 점을 확인하세요.

```jsx
// ❌ HTML 방식 (JSX에서 사용 불가)
// 문자열로 지정하면 에러가 발생합니다.
<div style="background-color: blue; font-size: 16px;">
  내용
</div>

// ✅ JSX 방식 (권장)
// 1. 중괄호 두 개 {{ }} 사용
// 2. 속성명은 camelCase (backgroundColor)
// 3. 값은 문자열('blue')로 지정
<div style={{
  backgroundColor: 'blue',
  fontSize: '16px'
}}>
  내용
</div>
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>편리하지만 남용은 금물</strong>
  <p>인라인 스타일은 우선순위가 높고 코드가 지저분해질 수 있어, 간단한 테스트나 동적으로 변하는 값(예: 그래프 높이)을 넣을 때 주로 사용합니다.<br>대부분의 스타일링은 별도의 CSS 파일을 만들어서 <code>className</code>으로 연결하는 것이 좋습니다.</p>
</div>

---

<h2>10. ⁉️ FAQ</h2>

마지막으로 오늘 배운 내용을 2가지 핵심 질문으로 정리해 봅니다.

**🧠 Q1. Fragment 문법**

JSX에서 여러 요소를 반환할 때, 불필요한 `div` 없이 감싸기 위해 사용하는 문법은 무엇인가요?

- **정답: Fragment (`<> ... </>`)** — `<div>`로 감싸면 불필요한 태그가 생기지만, 빈 태그인 `Fragment`를 사용하면 실제 DOM에는 아무것도 남기지 않고 여러 요소를 그룹화할 수 있습니다.

**🧠 Q2. 속성명 변환**

HTML의 `class` 속성은 JSX에서 무엇으로 바꿔서 써야 하나요?

- **정답: `className`** — 자바스크립트의 클래스(Class) 예약어와 충돌을 피하기 위해 `className`을 사용해야 합니다.

---

<h2>11. ✅ 핵심 요약</h2>

지금까지 배운 JSX 문법의 핵심 규칙을 4단계 복습 카드로 정리해 드립니다. 이 규칙들만 잘 지켜도 리액트 문법 에러의 90%는 예방할 수 있습니다.

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>태그는 무조건 닫아야 합니다. 예: <code>&lt;br /&gt;</code>, <code>&lt;input /&gt;</code>, <code>&lt;img /&gt;</code></li>
    <li>최상위 태그는 하나여야 하며, 불필요한 <code>&lt;div&gt;</code> 대신 <strong>Fragment</strong>(<code>&lt;&gt;...&lt;/&gt;</code>)를 사용합니다.</li>
    <li><code>class</code> 대신 <strong>className</strong>을, <code>for</code> 대신 <strong>htmlFor</strong>를 사용합니다.</li>
    <li>중괄호 <code>{ }</code> 안에는 변수·연산·삼항 연산자 같은 <strong>값(표현식)</strong>만 넣을 수 있습니다.</li>
    <li>인라인 스타일은 문자열이 아닌 <strong>객체</strong> <code>{{ }}</code>로 작성하며, 속성명은 <code>backgroundColor</code>처럼 <strong>camelCase</strong>로 씁니다.</li>
    <li>JSX 주석은 <code>{/* 내용 */}</code> 형태로 작성해야 화면에 표시되지 않습니다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 여러 요소를 감쌀 때 그냥 &lt;div&gt;를 써도 상관없다?</div>
    <div class="wda-mistake-right">정답: 불필요한 div가 실제 DOM에 그대로 남아 스타일이 꼬일 수 있으므로, 감싸기만 할 때는 <strong>Fragment</strong>를 사용합니다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: class="container"라고 써도 동작하니 문제없다?</div>
    <div class="wda-mistake-right">정답: 자바스크립트의 <code>class</code> 예약어와 충돌해 콘솔에 경고가 뜨며, 반드시 <strong>className</strong>을 써야 합니다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: input, br 같은 태그는 HTML처럼 안 닫아도 된다?</div>
    <div class="wda-mistake-right">정답: JSX는 HTML보다 문법이 엄격해서, 내용이 없는 태그는 반드시 <code>/</code>로 스스로 닫아야 합니다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 중괄호 { } 안에 if문을 넣어 조건 분기를 할 수 있다?</div>
    <div class="wda-mistake-right">정답: 중괄호에는 값으로 평가되는 <strong>표현식</strong>만 들어갈 수 있어, if문 대신 <strong>삼항 연산자</strong>를 사용해야 합니다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: style="color:red"처럼 문자열로 스타일을 지정해도 된다?</div>
    <div class="wda-mistake-right">정답: JSX의 style은 <strong>객체</strong> <code>{{ color: 'red' }}</code> 형태로 전달해야 하며, 속성명도 camelCase여야 합니다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 태그 닫기</div>
    <div class="wda-formula-block-body"><code>모든 태그는 닫는다</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 속성명 변환</div>
    <div class="wda-formula-block-body"><code>class→className, for→htmlFor</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 중괄호</div>
    <div class="wda-formula-block-body"><code>{ } = 값만 가능</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 4 · 인라인 스타일</div>
    <div class="wda-formula-block-body"><code>style={{ camelCase }}</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">여러 JSX 요소를 불필요한 div 없이 묶는 문법은?</div>
    <div class="wda-flip-back">Fragment (<code>&lt;&gt; ... &lt;/&gt;</code>)입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">HTML의 class 속성은 JSX에서 무엇으로 바꿔 써야 하나?</div>
    <div class="wda-flip-back">className으로 바꿔 써야 합니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">label의 for 속성은 JSX에서 무엇으로 바뀌나?</div>
    <div class="wda-flip-back">htmlFor로 바뀝니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">JSX 중괄호 안에 if문을 넣을 수 있나?</div>
    <div class="wda-flip-back">없습니다. 값으로 평가되지 않는 문(Statement)이라 삼항 연산자를 대신 사용해야 합니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">인라인 스타일은 어떤 형태로 전달해야 하나?</div>
    <div class="wda-flip-back">객체 <code>{{ }}</code> 형태이며, 속성명은 camelCase로 작성합니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">JSX에서 주석은 어떻게 작성하나?</div>
    <div class="wda-flip-back"><code>{/* 내용 */}</code> 형태로 작성합니다.</div>
  </div>
</div>
