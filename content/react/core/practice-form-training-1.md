---
title: "실습: 폼 입력 훈련 1~4"
status: "completed"
description: "Transformer, Menu Order, Password Guard, Login Submit 4가지 실습으로 텍스트 변환, select/radio 처리, 유효성 검사, 폼 제출(onSubmit) 활용 패턴을 훈련한다."
category: "React"
section: "Core"
tags:
  - react
  - form
  - practice
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
</style>

<h2>1. &gt;_ 실습 준비: 폼 트레이닝 센터</h2>

### 1) 1단계: 프로젝트 생성

터미널에서 새 프로젝트를 만듭니다.

```bash
# Workspace로 이동
cd ~/Workspace

# 새 프로젝트 생성
npm create vite@latest
```

### 2) 2단계: 옵션 선택

명령어 입력 후 나타나는 옵션을 아래와 같이 선택합니다.

1. **Project name**: `react-form-training`
2. **Select a framework**: `React`
3. **Select a variant**: `JavaScript`

**생성 후 실행 명령어**

```bash
cd react-form-training
npm install
npm run dev
```

<h3>3) 3단계: 컴포넌트 파일 생성</h3>

`src/components` 폴더 안에 아래 4개의 실습 컴포넌트 파일을 만드세요.

- `Transformer.jsx`
- `MenuOrder.jsx`
- `PasswordGuard.jsx`
- `LoginSubmit.jsx`

### 4) 4단계: App.jsx 연결

`App.jsx`를 수정해서 4개 컴포넌트를 모두 화면에 띄우세요.

```jsx
import Transformer from './components/Transformer';
import MenuOrder from './components/MenuOrder';
import PasswordGuard from './components/PasswordGuard';
import LoginSubmit from './components/LoginSubmit';

function App() {
  return (
    <div>
      <Transformer />
      <MenuOrder />
      <PasswordGuard />
      <LoginSubmit />
    </div>
  );
}

export default App;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>Vite:</strong> 빠르고 가벼운 최신 프론트엔드 빌드 도구로, CRA(Create React App)보다 개발 서버 구동 속도가 훨씬 빠릅니다.</li>
    <li><strong>npm run dev:</strong> 개발 모드로 서버를 실행하여 코드를 수정할 때마다 즉시 브라우저에 반영되도록 합니다.</li>
    <li><strong>컴포넌트 연결:</strong> 새로운 파일을 만들면 반드시 부모 컴포넌트(<code>App.jsx</code>)에서 <code>import</code>하고 JSX 내부에 태그로 넣어주어야 화면에 보입니다.</li>
  </ul>
</div>

---

<h2>2. 💻 실습 1 : 텍스트 변환기 (Transformer)</h2>

**🎯 Mission**

**목표**

- 입력한 텍스트를 **대문자로 변환**하여 보여주세요. (Transformation)
- **글자 수(Length)**를 실시간으로 카운팅하세요.
- **조건**: 글자 수가 **15자를 넘으면 글자 색을 빨간색**으로 변경하세요.

**힌트 (Hint)**

1. `value.length > 15` 조건부 스타일링
2. `{text.toUpperCase()}` 로 변환 출력
3. 가장 기본적인 '제어 + 가공' 패턴

**✅ 결과 예시**

- **입력**: "hello react"
- **화면 출력**:
    - 글자 수: **11 / 15자** (검은색)
    - 변환 결과: **HELLO REACT**
- **입력 (15자 초과)**: "hello react happy hacking"
    - 글자 수: **25 / 15자** (빨간색으로 변경됨)

**📝 정답 코드**

```jsx
import { useState } from "react";

export default function Transformer() {
  // 1. State 선언 (텍스트 본체)
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 2. 파생 상태 (Derived State) - 렌더링 될 때마다 계산
  const count = text.length;      // 글자 수 계산
  const isLimit = count > 15;     // 15자 초과 여부 확인

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h3>한 줄 소감 (15자 기준 경고):</h3>

      {/* 3. 입력창 (테두리 색상 제어) */}
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="소감을 입력하세요..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
          border: "2px solid",
          // isLimit이 true면 빨간색, false면 회색 테두리 적용
          borderColor: isLimit ? "red" : "gray",
          outline: "none"
        }}
      />

      {/* 4. 글자 수 표시 (글자 색상 제어) */}
      <div style={{
        textAlign: "right",
        fontSize: "14px",
        color: isLimit ? "red" : "black", // 15자 넘으면 글자색도 빨강
        fontWeight: isLimit ? "bold" : "normal"
      }}>
        {count} / 15자
      </div>

      {/* 5. 변환 결과 출력 (대문자 변환) */}
      <div style={{
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "#1e1e1e",
        color: "#00ffcc",
        borderRadius: "8px",
        textAlign: "center"
      }}>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "5px" }}>
          변환 결과 (UPPERCASE)
        </p>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          {text.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>Derived State (파생 상태):</strong> <code>count</code>와 <code>isLimit</code>은 <code>text</code>에서 바로 계산할 수 있는 값입니다. 이런 값은 별도 state로 만들면 <code>text</code>와 동기화해야 하는 값이 늘어나므로, 렌더링 중 계산하는 편이 더 단순하고 안전합니다.</li>
    <li><strong>Controlled Component:</strong> Controlled Component에서는 React state가 입력값의 기준(source of truth)이 됩니다.<br>사용자가 입력하면 <code>onChange</code>로 state가 바뀌고, 변경된 state가 다시 <code>value</code>로 표시됩니다.<br>만약 15자가 넘었을 때 아예 입력을 막고 싶다면 <code>handleChange</code> 함수 안에서 <code>if (e.target.value.length &lt;= 15)</code> 조건을 걸 수도 있습니다.</li>
    <li><strong>조건부 스타일링:</strong> <code>isLimit ? 'red' : 'gray'</code>와 같은 삼항 연산자를 사용하여 상태에 따라 CSS 값을 동적으로 변경했습니다.</li>
    <li><strong>15자 기준의 의미:</strong> 현재 예제는 15자를 넘으면 색상으로 경고하는 방식입니다. 입력을 실제로 막는 제한은 아닙니다.</li>
  </ul>
</div>

---

<h2>3. 💻 실습 2 : 메뉴 주문 (Option)</h2>

**🎯 Mission**

- `select`로 커피 메뉴를, `radio` 버튼으로 사이즈를 선택합니다.
- 선택한 주문 내역을 하단에 표시하세요.

**📝 예제 코드 (데이터 구조)**

```javascript
const [menu, setMenu] = useState('americano');
const [size, setSize] = useState('tall');
```

**✅ 결과 예시**

**[UI 구성]**

- **메뉴 선택:** 카페라떼 (Select 박스)
- **사이즈:** ○ Tall ◉ Grande ○ Venti (Radio 버튼)
- **주문 내역:** 카페라떼 / GRANDE

**📝 정답 코드**

```jsx
import { useState } from 'react';

// 표시용 라벨 매핑: menu state에는 value("cafelatte")가 저장되므로
// 화면에 보여줄 한글 이름은 별도로 매핑해서 꺼내 씁니다.
const menuLabel = {
  americano: '아메리카노',
  cafelatte: '카페라떼',
  espresso: '에스프레소',
};

export default function MenuOrder() {
  // 초기 상태 설정
  const [menu, setMenu] = useState('americano');
  const [size, setSize] = useState('tall');

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>메뉴 주문</h2>

      {/* 1. Select Box: 메뉴 선택 */}
      <div style={{ marginBottom: '20px' }}>
        <label>메뉴 선택: </label>
        {/* 핵심 동작: select 태그 자체에 value를 바인딩하여 제어 */}
        <select
          value={menu}
          onChange={(e) => setMenu(e.target.value)}
          style={{ padding: '5px' }}
        >
          <option value="americano">아메리카노</option>
          <option value="cafelatte">카페라떼</option>
          <option value="espresso">에스프레소</option>
        </select>
      </div>

      {/* 2. Radio Button: 사이즈 선택 */}
      <div style={{ marginBottom: '20px' }}>
        <span>사이즈: </span>

        {/* Tall 사이즈 */}
        <label style={{ marginRight: '10px' }}>
          <input
            type="radio"
            name="sizeGroup" // 중요: 같은 그룹으로 묶어줌
            value="tall"
            checked={size === 'tall'} // 상태와 일치하면 체크됨
            onChange={(e) => setSize(e.target.value)}
          />
          Tall
        </label>

        {/* Grande 사이즈 */}
        <label style={{ marginRight: '10px' }}>
          <input
            type="radio"
            name="sizeGroup"
            value="grande"
            checked={size === 'grande'}
            onChange={(e) => setSize(e.target.value)}
          />
          Grande
        </label>

        {/* Venti 사이즈 */}
        <label>
          <input
            type="radio"
            name="sizeGroup"
            value="venti"
            checked={size === 'venti'}
            onChange={(e) => setSize(e.target.value)}
          />
          Venti
        </label>
      </div>

      <hr />

      {/* 3. 주문 결과 출력 (menuLabel로 화면에 보여줄 한글 이름을 꺼내옴) */}
      <div style={{ marginTop: '20px', fontSize: '1.2em', fontWeight: 'bold' }}>
        주문 내역: <span style={{ color: 'orange' }}>{menuLabel[menu]} / {size.toUpperCase()}</span>
      </div>
    </div>
  );
}
```

**💡 보충 설명**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Logic Check 1. Radio는 왜 name이 필요한가요?</div>
    <div class="wda-fcard-dsc">HTML 표준 동작입니다. 같은 <code>name</code>을 가진 라디오 버튼끼리만 "하나만 선택되는" 그룹이 형성됩니다.<br>React에서도 웹 접근성 준수 및 기본 브라우저 동작 보장을 위해 넣어주는 것이 좋습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Logic Check 2. Select Value binding</div>
    <div class="wda-fcard-dsc"><code>option</code>에 <code>selected</code> 속성을 쓰는 게 아니라, <strong>select 태그 자체에 value를 주는 것</strong>이 리액트 제어 컴포넌트의 핵심입니다.<br>React state가 select의 선택값 기준이 됩니다.<br>사용자가 선택을 바꾸면 <code>onChange</code>로 state가 업데이트되고, 그 state가 다시 select의 <code>value</code>로 반영됩니다.</div>
  </div>
</div>

---

<h2>4. 💻 실습 3 : 비밀번호 가드 (Validation)</h2>

**🎯 Mission**

- 비밀번호 입력 필드를 만듭니다.
- 8글자 미만일 때 **빨간색 에러 메시지**를 띄우세요.
- 8글자 이상이면 에러 메시지가 사라져야 합니다.

**📝 예제 코드 (힌트)**

```jsx
// 렌더링 부분
<input ... />
{password.length < 8 && (
  <span style={{color: 'red'}}>
    너무 짧아요!
  </span>
)}
```

**✅ 결과 예시**

**[UI 구성]**

- **비밀번호 설정:** [ 1234 ] (입력창)
- **메시지:** 8자 이상 입력해주세요! (빨간색 텍스트 표시됨)
- *(8자 이상 입력 시 메시지 사라짐)*

**📝 정답 코드**

```jsx
import { useState } from 'react';

export default function PasswordGuard() {
  // 상태 관리: 비밀번호 입력값
  const [password, setPassword] = useState('');

  // 에러 조건 계산
  // 1. 입력값이 있어야 함 (password.length > 0)
  // 2. 8글자 미만이어야 함 (password.length < 8)
  const isError = password.length > 0 && password.length < 8;

  return (
    <div style={{ padding: '20px' }}>
      <h3>비밀번호 설정:</h3>

      {/* 입력 필드 */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="8자 이상 입력하세요"
        // 조건부 스타일링: 에러일 때만 테두리 색을 빨간색으로 변경
        style={{
          padding: '8px',
          marginRight: '10px',
          border: isError ? '2px solid red' : '1px solid #ccc',
        }}
      />

      {/* JSX for Validation Message */}
      {/* isError가 참일 때만 span 태그 렌더링 (&& 연산자) */}
      {isError && (
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          8자 이상 입력해주세요!
        </span>
      )}
    </div>
  );
}
```

**💡 보충 설명**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Logic Check 1. 검증 로직은 어디에?</div>
    <div class="wda-fcard-dsc">간단한 UI 표시는 <strong>렌더링 중</strong>에 계산(<code>isError</code>)해도 충분합니다.<br>제출 버튼 클릭 시점에만 검사하고 싶다면, 별도의 '검사 시작 여부' state를 만들거나 <code>onSubmit</code> 핸들러 내부에서 검사할 수 있습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Logic Check 2. Logical AND operator (&&)</div>
    <div class="wda-fcard-dsc"><code>{ 조건 &amp;&amp; }</code> 패턴은 React에서 조건부 렌더링을 할 때 가장 많이 쓰는 단축 표현입니다. 조건이 <code>true</code>일 때만 뒤에 오는 UI 요소를 화면에 그립니다.</div>
  </div>
</div>

---

<h2>5. 💻 실습 4 : 로그인 처리 (Submit)</h2>

**🎯 Mission**

- `form` 태그로 감싸고 `onSubmit`을 처리하세요.
- 제출 시 새로고침을 막고(`preventDefault`) 알림창을 띄우세요.

**📝 예제 코드 (중요 코드)**

```jsx
const handleSubmit = (e) => {
  e.preventDefault(); // 필수!
  alert('로그인 시도: ' + email);
};

<form onSubmit={handleSubmit}>
  <button type="submit">로그인</button>
</form>
```

**✅ 결과 예시**

**[UI 구성]**

- **이메일:** [ 입력창 ]
- **[ 로그인 ]** (보라색 버튼)
- *(버튼 클릭 시 "로그인 시도: 입력한이메일" 알림창 팝업)*

**📝 정답 코드**

```jsx
import { useState } from 'react';

export default function LoginSubmit() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    // 1. 기본 동작(새로고침) 막기
    e.preventDefault();

    // 2. 빈 이메일 제출 방지
    if (!email.trim()) {
      alert('이메일을 입력해주세요.');
      return;
    }

    // 3. 데이터 전송 로직
    alert(`로그인 시도: ${email}`);

    // 4. (선택) 폼 초기화
    // setEmail('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>로그인</h3>

      {/* form 태그로 감싸서 Enter키 제출 등 웹 표준 동작 지원 */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>이메일: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            style={{ padding: '5px' }}
          />
        </div>

        {/* form 내부의 버튼은 기본이 submit 타입입니다 */}
        <button
          type="submit"
          style={{
            backgroundColor: '#8a4baf',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          로그인
        </button>
      </form>
    </div>
  );
}
```

**💡 보충 설명**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Logic Check 1. e.preventDefault() 안 하면?</div>
    <div class="wda-fcard-dsc">브라우저가 폼 데이터를 쿼리스트링으로 만들어서 URL을 바꾸고 <strong>페이지를 새로고침</strong>해버립니다.<br>React에서 form 제출을 직접 처리하고 페이지 새로고침을 막으려면 <code>e.preventDefault()</code>를 사용합니다.<br>일반적인 SPA 폼 처리에서는 거의 항상 사용한다고 이해하면 됩니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Logic Check 2. Button Type</div>
    <div class="wda-fcard-dsc"><code>form</code> 내부의 버튼은 기본이 <code>submit</code>입니다. 제출용이 아닌 일반 버튼(취소 등)을 만들 땐 반드시 <code>type="button"</code>을 명시하세요.</div>
  </div>
</div>
