---
title: "2-3 props로 데이터 전달하기"
status: "completed"
description: "props 개념과 전달·수신 방법, 구조 분해 할당, 기본값 설정, children을 활용한 컴포넌트 합성까지 React props의 기초를 정리한다."
category: "React"
section: "Core"
tags:
  - react
  - props
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
  • <strong>props 개념</strong> — props가 무엇이고 부모 컴포넌트에서 자식 컴포넌트로 어떻게 전달하는지 이해합니다.<br>
  • <strong>구조 분해 할당</strong> — 자바스크립트의 '구조 분해 할당' 문법을 사용하여 props 코드를 더 간결하고 읽기 좋게 작성할 수 있습니다.<br>
  • <strong>children과 합성</strong> — <code>children</code>이라는 특별한 props를 활용하여 컴포넌트 사이에 다른 컴포넌트를 끼워 넣는 합성 방식을 배웁니다.
</div>

---

<h2>1. 💻 실습 1 : 실습용 프로젝트 만들기</h2>

기존 `react-study` 프로젝트는 그대로 두고, Props와 State를 마음껏 연습할 수 있는 **새로운 놀이터**를 만듭니다.

**✅ 1단계: 프로젝트 생성**

터미널을 열고 작업 폴더로 이동한 뒤, Vite 명령어를 입력합니다.

```bash
# 1. 작업 폴더로 이동 (이미 Workspace라면 생략 가능)
cd ~/Workspace

# 2. 새 프로젝트 생성 명령어 입력
npm create vite@latest
```

`npm create vite@latest` 뒤에 프로젝트 이름과 템플릿을 함께 지정하는 한 줄 명령어도 있습니다.

```bash
npm create vite@latest react-props-state -- --template react
```

<div class="wda-callout wda-ci">
  <p>위 명령어는 프로젝트 이름과 React(JavaScript) 템플릿을 한 번에 지정하는 방식입니다. 수업에서는 선택 과정을 익히기 위해 <code>npm create vite@latest</code> 방식으로 진행해도 됩니다.</p>
</div>

**✅ 2단계: 옵션 선택 (중요!)**

방향키와 엔터키를 사용하여 아래와 같이 설정합니다.

- **Project name:** `react-props-state` *(Props와 State를 마스터하기 위한 전용 프로젝트입니다)*
- **Select a framework:** `React`
- **Select a variant:** `JavaScript`

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <strong>지우지 마세요!</strong>
  <p>이 <code>react-props-state</code> 프로젝트는 앞으로 이어질 <strong>Props, State, 이벤트 처리</strong> 실습에서 계속 사용하게 됩니다.</p>
</div>

---

<h2>2. Props란 무엇인가요?</h2>

Props는 Properties의 줄임말로 **속성** 또는 부모가 자식에게 건네주는 데이터 주머니(보따리)를 의미합니다.

**🆚 HTML과 React 비교**

HTML 태그에 속성을 주는 것과 똑같은 방식으로 사용합니다.

| **구분** | **코드 예시** | **설명** |
| --- | --- | --- |
| **HTML 태그** | `<img src="..." alt="..." />` | 이미지의 경로(`src`)와 설명(`alt`) 전달 |
| **React 컴포넌트** | `<Student name="김철수" age={20} />` | 학생의 이름(`name`)과 나이(`age`) 전달 |

**🆚 함수와 컴포넌트 비교 (작동 원리)**

Props는 함수의 매개변수(Parameter)와 원리가 완전히 같습니다.

**🧪 일반 자바스크립트 함수**

괄호 `()` 안에 데이터를 넣어서 함수를 호출합니다.

```javascript
// 함수 정의
function Student(name, age) {
  console.log(`이름: ${name}, 나이: ${age}`);
}

// 함수 사용 (호출)
Student("김철수", 20);
```

**🧪 리액트 컴포넌트**

태그 `< />` 안에 `이름=값` 형태로 데이터를 넣어서 컴포넌트를 사용합니다.

```jsx
// 컴포넌트 정의 (props라는 보따리로 받음)
function Student(props) {
  return (
    <div>
      <p>이름: {props.name}</p>
      <p>나이: {props.age}</p>
    </div>
  );
}

// 컴포넌트 사용 (props 전달)
<Student name="김철수" age={20} />
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>읽기 전용 (Read-Only)</strong>
  <p>부모가 자식에게 건네준 데이터 보따리(Props)는 <strong>자식이 수정할 수 없습니다.</strong><br>자식 컴포넌트는 받은 데이터를 <strong>읽어서 화면에 보여주는 용도</strong>로만 사용해야 합니다.</p>
</div>

---

<h2>3. Props 전달하기 (부모)</h2>

데이터를 줄 때 가장 중요한 규칙은 "데이터의 종류(Type)에 따라 포장지가 다르다"는 것입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">문자열 (String)</div>
    <div class="wda-fcard-dsc">규칙: <code>" "</code> (Double Quotes)<br>글자(Text)를 전달할 때는 HTML 속성처럼 큰따옴표를 사용합니다.<br><code>&lt;Student name="홍길동" /&gt;</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">그 외 모든 것 (숫자, 변수, 논리값)</div>
    <div class="wda-fcard-dsc">규칙: <code>{ }</code> (Curly Braces)<br>문자열이 아닌 모든 값(숫자, 변수, true/false, 배열 등)은 중괄호로 감싸야 합니다.<br><code>&lt;Student age={20} isSmart={true} /&gt;</code></div>
  </div>
</div>

**💡 보충 설명 (주의사항)**

<div class="wda-callout wda-cw">
  <p><strong>Q. 작은따옴표('') 써도 되나요?</strong><br>A: 동작은 하지만, 리액트(JSX)에서는 HTML과 비슷하게 큰따옴표("")를 쓰는 것이 전 세계적인 약속(Convention)입니다. (Prettier 같은 도구가 자동으로 바꿔줍니다.)</p>
  <p><strong>⚠️ 주의: 숫자를 따옴표로 감싸지 마세요!</strong><br><code>age="20"</code>이라고 쓰면 숫자 20이 아니라 문자열 "20"이 전달됩니다. 계산이 안 될 수 있으니 주의하세요!</p>
</div>

---

<h2>4. Props 받기 (자식)</h2>

부모가 던져준 데이터 보따리를 자식이 받는 방법입니다. 두 가지 방법 중 **방법 B**를 훨씬 더 많이 사용합니다.

**📝 방법 A: 통째로 받기 (기본)**

데이터 보따리(`props`)를 통째로 받은 뒤, 사용할 때마다 점(`.`)을 찍어서 꺼내는 방식입니다.

```jsx
// 1. 매개변수 이름을 보통 'props'라고 짓습니다.
function Student(props) {

  // 2. 점(.) 연산자로 꺼내 씁니다. (매번 props. 을 붙여야 함)
  return <div>이름: {props.name}</div>;
}
```

**📝 방법 B: 뜯어서 받기 (구조 분해 할당) ✨ 추천!**

보따리를 받음과 동시에 포장을 뜯어서, **필요한 내용물만 쏙** 골라내는 방식입니다.

```jsx
// 1. 받을 데이터 이름만 중괄호 안에 쏙 넣습니다!
function Student({ name, age }) {

  // 2. 'props.' 없이 변수 이름만으로 바로 쓸 수 있습니다.
  return <div>이름: {name} (나이: {age})</div>;
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>구조 분해 할당 (Destructuring Assignment)</strong>
  <p><strong>방법 B</strong>의 정식 명칭입니다. 자바스크립트의 최신 문법으로, 객체 안에 있는 값을 추출해서 변수로 바로 만들어주는 아주 편리한 기능입니다. 리액트 개발자들은 <strong>타이핑을 줄이기 위해</strong> 이 방식을 압도적으로 선호합니다.</p>
</div>

---

<h2>5. 💻 실습 2 : 학생증 만들기 (기초)</h2>

가장 기본적인 props 전달을 연습해봅시다. `StudentCard` 컴포넌트를 만들고 데이터를 띄워보세요.

**🎯 Mission**

다음 3단계에 걸쳐 미션을 수행하세요.

1. **컴포넌트 생성:** `src/components` 폴더에 `StudentCard.jsx`를 만드세요.
2. **데이터 전달 (부모):** `App.jsx`에서 `name`과 `studentId`라는 이름으로 데이터를 전달하세요.
3. **데이터 표시 (자식):** `StudentCard`에서 props를 받아서 화면에 표시하세요.

**📝 예제 코드 (작성 가이드)**

아래의 빈칸을 채우거나 주석을 참고하여 코드를 작성해 보세요.

**Step 1: 자식 컴포넌트 (StudentCard.jsx)**

```jsx
function StudentCard(props) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      {/* 여기에 props로 받은 데이터를 표시하세요 */}
      <h3>이름: ???</h3>
      <p>학번: ???</p>
    </div>
  );
}
export default StudentCard;
```

**Step 2: 부모 컴포넌트 (App.jsx)**

```jsx
import StudentCard from './components/StudentCard';

function App() {
  return (
    <>
      {/* name과 studentId를 전달하세요 */}
      <StudentCard name="???" studentId={???} />
      <StudentCard name="???" studentId={???} />
    </>
  );
}
export default App;
```

**✅ 결과 예시**

브라우저에 다음과 같은 학생증 카드가 나타나면 성공입니다.

- **카드 1:** 이름: 김철수 / 학번: 2024001
- **카드 2:** 이름: 이영희 / 학번: 2024002

**📝 정답 코드**

작성한 코드와 비교해 보세요.

**src/components/StudentCard.jsx**

```jsx
// 방법 B: 구조 분해 할당 사용 (추천)
function StudentCard({ name, studentId }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h3>이름: {name}</h3>
      <p>학번: {studentId}</p>
    </div>
  );
}

export default StudentCard;
```

**src/App.jsx**

```jsx
import StudentCard from './components/StudentCard';

function App() {
  return (
    <>
      {/* 문자열은 따옴표(""), 숫자는 중괄호({}) */}
      <StudentCard name="김철수" studentId={2024001} />
      <StudentCard name="이영희" studentId={2024002} />
    </>
  );
}

export default App;
```

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <strong>숫자 전달 시 주의사항</strong>
  <p>학번(<code>studentId</code>)처럼 숫자를 전달할 때는 반드시 <strong>중괄호 <code>{ }</code></strong>를 사용해야 합니다.</p>
  <ul>
    <li><code>studentId="2024001"</code> (X) 👉 문자열 "2024001"로 전달됨</li>
    <li><code>studentId={2024001}</code> (O) 👉 숫자 2024001로 전달됨</li>
  </ul>
  <p>이번 실습에서는 숫자 props 전달을 연습하기 위해 <code>studentId</code>를 숫자로 전달합니다.<br>다만 실제 서비스에서는 학번, 전화번호, 우편번호처럼 계산하지 않는 식별자는 문자열로 관리하는 경우도 많습니다.</p>
</div>

---

<h2>6. 💻 실습 3 : 구조 분해 할당 적용</h2>

`props.name`, `props.studentId` 처럼 매번 `props.`을 붙이는 것은 번거롭습니다. 최신 문법으로 코드를 깔끔하게(Refactoring) 고쳐봅시다.

**🎯 Mission**

실습 1에서 만든 `StudentCard.jsx` 파일을 열고 다음 3가지를 수정하세요.

1. **매개변수 수정:** 함수 괄호 안의 `props` 대신 `{ name, studentId }`로 직접 받으세요.
2. **접두사 제거:** 코드 안에서 사용하던 `props.`를 모두 지우세요.
3. **결과 확인:** 브라우저에서 화면이 여전히 잘 나오는지 확인하세요.

**🆚 코드 비교 (Before & After)**

어떻게 바뀌는지 비교해 보세요.

**수정 전 (Before)**

```jsx
// 매개변수가 props
function StudentCard(props) {
  return (
    <div>
      {/* 매번 props. 을 붙여야 함 (귀찮음) */}
      <h3>이름: {props.name}</h3>
      <p>학번: {props.studentId}</p>
    </div>
  );
}
```

**수정 후 (After) ✨ 정답 코드**

```jsx
// src/components/StudentCard.jsx

// 1. 필요한 것만 쏙 뽑아서 받기 (구조 분해 할당)
function StudentCard({ name, studentId }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      {/* 2. 이제 변수 이름만 쓰면 끝! */}
      <h3>이름: {name}</h3>
      <p>학번: {studentId}</p>
    </div>
  );
}

export default StudentCard;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 이렇게 쓰나요?</strong>
  <p>실무에서는 컴포넌트가 받는 데이터(props)가 5개, 10개가 넘기도 합니다. <code>props.name</code>, <code>props.age</code>, <code>props.address</code>, <code>props.phone</code> ... 🤯</p>
  <p>구조 분해 할당을 쓰면 <strong>"이 컴포넌트는 name과 studentId가 필요하구나!"</strong> 라고 함수 첫 줄만 봐도 바로 알 수 있어 가독성이 훨씬 좋아집니다.</p>
</div>

---

<h2>7. 기본값 설정 (Props 기본값)</h2>

데이터가 안 들어왔을 때 프로그램이 "펑" 터지거나 화면에 빈 칸이 나오는 것을 막아주는 안전장치입니다. 여기서는 React의 옛 `defaultProps` 방식이 아니라, 자바스크립트 구조 분해 할당의 기본값 문법을 사용합니다.

**📝 작성 방법 (Syntax)**

매개변수 자리에서 구조 분해 할당을 할 때, **등호(`=`)**를 사용하여 기본값을 미리 지정해둡니다.

```jsx
// role 데이터가 없으면 자동으로 "학생"이라는 값을 씁니다.
function Student({ name, role = "학생" }) {
  return <div className="badge">{name} ({role})</div>;
}
```

**🧪 사용 예시**

데이터를 보냈을 때와 보내지 않았을 때의 차이를 확인해 보세요.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">데이터 없음</div>
    <div class="wda-fcard-dsc"><code>&lt;Student name="영희" /&gt;</code><br>👉 결과: <strong>"영희 (학생)"</strong> (기본값 적용됨)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">데이터 있음</div>
    <div class="wda-fcard-dsc"><code>&lt;Student name="철수" role="반장" /&gt;</code><br>👉 결과: <strong>"철수 (반장)"</strong> (전달한 값 적용됨)</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-cs">
  <strong>안전한 코딩</strong>
  <p>기본값을 설정해두면 부모 컴포넌트에서 실수로 데이터를 빠뜨려도 화면이 깨지지 않고 자연스럽게 표시됩니다.<br>특히 API로 데이터를 받아올 때, 로딩 중이거나 데이터가 비어있는 경우를 대비해 자주 사용합니다.</p>
</div>

---

<h2>8. 💻 실습 4 : 전공이 없는 경우?</h2>

모든 학생이 전공이 정해진 것은 아닙니다. 전공 데이터가 없을 때 자동으로 "전공 미정"이라고 뜨도록 처리해 봅시다.

**🎯 Mission**

다음 3가지 단계를 수행하여 코드를 수정하세요.

1. **속성 추가:** `StudentCard` 컴포넌트가 `major`라는 props를 받을 수 있게 수정하세요.
2. **데이터 차별:** `App.jsx`에서 첫 번째 학생에게는 전공을 넣어주고, 두 번째 학생은 전공을 넣지 마세요.
3. **기본값 처리:** 전공을 넣지 않은 학생은 화면에 **"전공 미정"**이라고 나오도록 기본값을 설정하세요.

**📝 예제 코드 (작성 가이드)**

아래 주석을 참고하여 빈칸을 채워보세요.

**src/components/StudentCard.jsx**

```jsx
// 힌트: major를 추가하고 등호(=)로 기본값을 설정하세요.
function StudentCard({ name, studentId, major = "???" }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h3>이름: {name}</h3>
      <p>학번: {studentId}</p>
      {/* 전공을 표시하는 태그를 추가하세요 */}
      <p>전공: {major}</p>
    </div>
  );
}
export default StudentCard;
```

**src/App.jsx**

```jsx
import StudentCard from './components/StudentCard';

function App() {
  return (
    <>
      {/* 1번 학생: 전공 있음 */}
      <StudentCard name="김철수" studentId={2024001} major="컴퓨터공학" />

      {/* 2번 학생: 전공 없음 (삭제) */}
      <StudentCard name="이영희" studentId={2024002} />
    </>
  );
}
export default App;
```

**✅ 결과 예시**

브라우저에서 다음과 같이 보여야 합니다.

- **김철수:** 전공: 컴퓨터공학
- **이영희:** 전공: **전공 미정** (자동 적용)

**📝 정답 코드**

**src/components/StudentCard.jsx**

```jsx
function StudentCard({ name, studentId, major = "전공 미정" }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h3>이름: {name}</h3>
      <p>학번: {studentId}</p>
      <p>전공: {major}</p>
    </div>
  );
}

export default StudentCard;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>선택적 Props (Optional Props)</strong>
  <p>이렇게 기본값이 설정된 props는 부모 컴포넌트에서 <strong>넣어도 되고 안 넣어도 되는(Optional)</strong> 속성이 됩니다.</p>
  <ul>
    <li>필수 정보(이름, 학번)는 꼭 받아야 하지만,</li>
    <li>부가 정보(전공, 취미 등)는 상황에 따라 생략 가능하게 만들 때 아주 유용합니다.</li>
  </ul>
</div>

---

<h2>9. Children Props</h2>

일반적인 props가 '속성'으로 데이터를 전달한다면, `children`은 **태그와 태그 '사이'의 내용**을 전달받을 때 사용합니다.  
주로 "액자"나 "레이아웃" 같은 역할을 하는 컴포넌트를 만들 때 유용합니다.

**📌 개념 설명**

부모 컴포넌트가 자식 컴포넌트의 **시작 태그와 종료 태그 사이**에 넣은 모든 것(HTML 태그, 텍스트, 또 다른 컴포넌트 등)이 `children`이라는 이름으로 전달됩니다.

**🧪 예시 코드**

**🧪 보내는 쪽 (App.jsx)**

태그 사이에 원하는 내용을 자유롭게 채워 넣습니다.

```jsx
// App.jsx
<CardLayout>
  {/* 이 사이에 있는 모든 내용이 children으로 넘어갑니다 */}
  <img src="https://picsum.photos/200/300" alt="랜덤 이미지" />
  <p>이 부분이 children 입니다!</p>
</CardLayout>
```

**🧪 받는 쪽 (CardLayout.jsx)**

약속된 이름인 `children`으로 받아서 원하는 위치에 배치합니다.

```jsx
// CardLayout.jsx

// 1. 구조 분해 할당 시 이름은 꼭 'children'이어야 합니다.
function CardLayout({ children }) {
  return (
    <div className="beautiful-border">
      {/* 2. 태그 사이의 내용이 이 위치에 쏙 들어갑니다. */}
      {children}
    </div>
  );
}

export default CardLayout;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 쓰나요? (Composition)</strong>
  <p><code>children</code>을 사용하면 껍데기(레이아웃)는 그대로 두고, <strong>내용물만 바꿔 끼우는</strong> 유연한 컴포넌트를 만들 수 있습니다.</p>
  <ul>
    <li>예: 모달 창(껍데기) 안에 로그인 폼(내용물) 넣기, 알림 창(껍데기) 안에 경고 메시지(내용물) 넣기 등</li>
  </ul>
</div>

---

<h2>10. ⁉️ Q&A (FAQ)</h2>

**🧠 Q1. props는 수정할 수 없나요? (`props.name = "개명"` 처럼요)**

**정답: props는 React에서 읽기 전용처럼 다루어야 합니다. (Read-Only)**

- **이유:** Props는 부모가 자식에게 주는 **'명령'**이나 **'재료'**와 같습니다.  
  자식 컴포넌트가 props를 직접 수정하면 부모가 가진 원본 데이터와 화면의 흐름이 어긋날 수 있으므로 금지하는 규칙으로 이해하면 됩니다.
- **해결책:** 값이 바뀌어야 한다면 Props가 아니라, 다음 챕터에서 배울 **State(상태)**를 사용해야 합니다.

**🧠 Q2. `children`은 꼭 이름이 `children`이어야 하나요?**

**정답: React가 태그 사이의 내용을 전달할 때 사용하는 기본 prop 이름은 `children`입니다.**

- **이유:** 리액트에서 **태그와 태그 사이(`opening tag`와 `closing tag` 사이)**에 넣은 내용은 `children`이라는 이름의 props로 전달됩니다. 초보자 단계에서는 반드시 `{ children }`으로 받는다고 이해하면 됩니다.
- **참고:** 고급 문법으로는 `{ children: content }`처럼 별칭을 붙일 수도 있지만, 처음에는 `children`이라는 이름 그대로 사용하는 것이 가장 안전합니다.
- **주의:** 구조 분해 할당을 할 때 `{ children }`이 아니라 `{ myContent }` 처럼 다른 이름만 쓰면, 리액트가 데이터를 넣어주지 못해 `undefined`가 됩니다. 꼭 `children`으로 받아주세요!

---

<h2>11. ✅ 핵심 요약</h2>

이번 챕터에서 반드시 기억해야 할 내용을 4단계 복습 카드로 정리합니다.

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>Props는 부모가 자식에게 전달하는 데이터이며, 항상 <strong>부모 → 자식</strong> 방향으로만 흐릅니다. (단방향 데이터 흐름)</li>
    <li>자식 컴포넌트는 받은 props를 <strong>읽기만</strong> 할 수 있고, 절대 수정할 수 없습니다 (Read-Only).</li>
    <li>문자열은 큰따옴표(<code>""</code>), 숫자·변수·불리언 등 그 외 값은 중괄호(<code>{ }</code>)로 전달합니다.</li>
    <li><strong>구조 분해 할당</strong> <code>{ name }</code>으로 받으면 매번 <code>props.</code>을 붙이지 않아도 됩니다.</li>
    <li>기본값은 매개변수 자리에서 <strong>등호(<code>=</code>)</strong>로 설정하며, 값이 없을 때 자동 적용됩니다.</li>
    <li><strong>children</strong>은 태그와 태그 사이에 넣은 내용을 전달받는 특별한 props입니다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 자식 컴포넌트에서 props.name = "개명"처럼 값을 바꿔도 된다?</div>
    <div class="wda-mistake-right">정답: props는 <strong>읽기 전용</strong>이며, 값이 바뀌어야 한다면 Props가 아니라 다음 챕터에서 배울 <strong>State</strong>를 사용해야 합니다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 숫자를 전달할 때도 studentId="20"처럼 따옴표를 써도 된다?</div>
    <div class="wda-mistake-right">정답: 따옴표로 감싸면 숫자가 아닌 문자열 "20"이 전달되므로, 숫자는 반드시 <strong>중괄호 {20}</strong>으로 전달해야 합니다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: children은 아무 이름으로나 구조 분해해서 받아도 된다?</div>
    <div class="wda-mistake-right">정답: 태그 사이의 내용은 항상 <strong>children</strong>이라는 이름으로 전달되므로, <code>{ myContent }</code>처럼 다른 이름으로 받으면 <code>undefined</code>가 됩니다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 이 챕터에서 쓴 기본값 문법은 리액트만의 특별한 기능이다?</div>
    <div class="wda-mistake-right">정답: 리액트의 옛 <code>defaultProps</code> 방식이 아니라, 자바스크립트 <strong>구조 분해 할당의 기본값(<code>=</code>) 문법</strong>을 그대로 활용한 것입니다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 데이터 흐름</div>
    <div class="wda-formula-block-body"><code>부모 → 자식 (단방향)</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 전달 규칙</div>
    <div class="wda-formula-block-body"><code>문자열="", 나머지={ }</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 받기</div>
    <div class="wda-formula-block-body"><code>{ name } 구조 분해</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 4 · children</div>
    <div class="wda-formula-block-body"><code>태그 사이 내용 = children</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">props는 자식 컴포넌트에서 수정할 수 있나?</div>
    <div class="wda-flip-back">없습니다. 읽기 전용이며, 값이 바뀌어야 한다면 State를 사용해야 합니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">children은 꼭 이름이 children이어야 하나?</div>
    <div class="wda-flip-back">그렇습니다. 태그 사이의 내용은 기본적으로 children이라는 이름의 props로 전달됩니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">숫자 props를 전달할 때 올바른 문법은?</div>
    <div class="wda-flip-back">중괄호 {20}으로 감싸야 합니다. 따옴표로 감싸면 문자열이 됩니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">props.name처럼 매번 점을 찍지 않고 쓰는 방법은?</div>
    <div class="wda-flip-back">구조 분해 할당으로 { name }처럼 받으면 됩니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">props 기본값은 어떻게 설정하나?</div>
    <div class="wda-flip-back">매개변수 자리에서 등호(=)로 지정합니다. 예: { role = "학생" }</div>
  </div>
</div>
