---
title: "실습: 조건부 렌더링 훈련 1~3"
status: "completed"
description: "로그인 토글, 경고 배너, 로그인/로그아웃 UI 3가지 실습으로 삼항 연산자와 && 연산자를 활용한 조건부 렌더링 패턴을 훈련한다."
category: "React"
section: "Core"
tags:
  - react
  - conditional-rendering
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

<h2>1. 💻 실습 1 : 로그인 토글 구현</h2>

**🎯 Mission**

- **삼항 연산자**(`조건 ? 참일 때 보여줄 값 : 거짓일 때 보여줄 값`)를 활용하여 로그인 상태에 따라 화면을 변경합니다.
- 로그인 상태(`isLoggedIn`)에 따라 **버튼 텍스트**와 **메시지**가 자동으로 바뀌도록 구현하세요.

**📝 예제 코드**

```jsx
// 상태 선언
const [isLoggedIn, setIsLoggedIn] = useState(false);

// 힌트: 메시지 조건부 렌더링
{isLoggedIn ? '환영합니다' : '로그인이 필요합니다'}
```

**✅ 결과 예시**

- **로그인 전:** "로그인이 필요합니다" 메시지와 [로그인] 버튼 표시
- **로그인 후:** "환영합니다" 메시지와 [로그아웃] 버튼 표시

**📝 정답 코드**

```jsx
import { useState } from 'react';

// 삼항 연산자를 이용한 로그인 토글
function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* 핵심 동작: 로그인 상태에 따라 메시지 변경 */}
      <h1>{isLoggedIn ? '환영합니다' : '로그인이 필요합니다'}</h1>

      {/* 핵심 동작: 클릭 시 상태를 반전시키고 버튼 텍스트 변경 */}
      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
    </div>
  );
}

export default LoginToggle;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>!isLoggedIn (부정 연산자):</strong> 현재 값이 <code>true</code>면 <code>false</code>로, <code>false</code>면 <code>true</code>로 상태를 뒤집어주는 아주 유용한 패턴입니다.</li>
    <li><strong>삼항 연산자의 활용:</strong> JSX 내부에서 조건에 따라 서로 다른 UI를 보여줘야 할 때 가장 간결하고 가독성 좋게 작성할 수 있는 방법입니다.</li>
    <li><strong>함수형 업데이트:</strong> 현재 state의 반대값으로 바꿀 때는 <code>setState((prev) =&gt; !prev)</code> 형태를 쓰면, React가 가장 최신의 이전 값을 기준으로 안전하게 업데이트합니다.</li>
  </ul>
</div>

---

<h2>2. 💻 실습 2 : 경고 배너 (&& 연산자)</h2>

**🎯 Mission**

- **&& 연산자**를 사용하여 에러 상태(`hasError`)가 `true`일 때만 경고 배너를 화면에 표시합니다.
- 에러가 없을 때는 배너가 화면에 렌더링되지 않도록 구현하세요.

**📝 예제 코드**

```jsx
// 상태 선언
const [hasError, setHasError] = useState(false);

// 힌트: && 연산자를 이용한 조건부 렌더링
{hasError && <div className="warning-banner">...</div>}
```

**✅ 결과 예시**

- **에러 없음 (false):** 화면에 아무것도 나타나지 않음
- **에러 발생 (true):** "시스템 경고 발생!" 배너가 화면에 나타남

**📝 정답 코드**

```jsx
import { useState } from 'react';

// && 연산자를 이용한 조건부 표시
function WarningSystem() {
  const [hasError, setHasError] = useState(false);

  return (
    <div>
      <h1>시스템 상태</h1>

      {/* 핵심 동작: hasError가 true일 때만 우측의 JSX를 렌더링 */}
      {hasError && (
        // warning-banner는 별도 CSS 파일에서 스타일을 분리할 때 사용할 수 있는 클래스명이며,
        // 현재 예제에서는 inline style로 바로 보이게 처리했습니다.
        <div className="warning-banner" style={{ backgroundColor: 'orange', padding: '10px' }}>
          <p>시스템 경고 발생!</p>
        </div>
      )}

      <button onClick={() => setHasError((prev) => !prev)}>
        {hasError ? '에러 해결' : '에러 발생 시뮬레이션'}
      </button>
    </div>
  );
}

export default WarningSystem;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>&& 연산자의 원리:</strong> 리액트에서 <code>{조건 &amp;&amp; JSX}</code>는 조건이 <code>true</code>일 때만 뒤의 내용을 보여주고, <code>false</code>일 때는 아무것도 렌더링하지 않습니다.<br>조건이 false이면 해당 배너 JSX가 렌더링되지 않으므로 실제 DOM에도 생성되지 않습니다.</li>
    <li><strong>삼항 연산자와의 차이:</strong> <code>true</code>와 <code>false</code>일 때 서로 다른 것을 보여줘야 한다면 삼항 연산자를 쓰지만, 단순히 "있거나 없거나"를 결정할 때는 <code>&&</code> 연산자가 훨씬 간결합니다.</li>
    <li><strong>함수형 업데이트:</strong> 현재 state의 반대값으로 바꿀 때는 <code>setState((prev) =&gt; !prev)</code> 형태를 쓰면, React가 가장 최신의 이전 값을 기준으로 안전하게 업데이트합니다.</li>
  </ul>
</div>

---

<h2>3. 💻 실습 과제 : 삼항 + && 조합 로그인 UI</h2>

**🎯 Mission**

- **목표:** 로그인 상태(`isLoggedIn`)에 따라 환영 메시지와 버튼 텍스트가 바뀌는 컴포넌트를 만듭니다.
- **요구사항:**
    - 초기 상태는 `false` (로그아웃 상태)로 설정합니다.
    - 버튼 클릭 시 상태를 토글(로그인 ↔ 로그아웃) 합니다.
    - 로그인 시: "환영합니다!" 메시지와 "로그아웃" 버튼을 표시합니다.
    - 로그아웃 시: "로그인해주세요" 메시지와 "로그인" 버튼을 표시합니다.
    - **삼항 연산자**를 사용하여 조건부 렌더링을 구현하세요.
    - 로그아웃 상태일 때만 **&& 연산자**로 안내 문구("더 많은 기능을 보시려면 로그인하세요")를 표시하세요.
    - 확인용으로 `isLoggedIn` 값을 `.toString()`으로 변환해 화면에 출력하세요.

**📝 예제 코드**

```jsx
// 1. 상태 선언 (useState)
const [isLoggedIn, setIsLoggedIn] = useState(false);

// 2. 클릭 핸들러 (Toggle)
const handleLogin = () => {
  setIsLoggedIn((prev) => !prev); // 이전 상태의 반대값으로 설정
};
```

**✅ 결과 예시**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">로그아웃 상태 (isLoggedIn: false)</div>
    <div class="wda-fcard-dsc">로그인해주세요<br>더 많은 기능을 보시려면 로그인하세요.<br>[로그인] 버튼</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">로그인 상태 (isLoggedIn: true)</div>
    <div class="wda-fcard-dsc">환영합니다!<br>[로그아웃] 버튼</div>
  </div>
</div>

**📝 정답 코드**

```jsx
import { useState } from 'react';

// 로그인/로그아웃 토글 UI
function AuthManager() {
  // 핵심 동작: 초기값은 false(로그아웃 상태)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // 핵심 동작: 이전 상태를 반대로 뒤집음 (함수형 업데이트로 안전하게)
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div>
      {/* 핵심 동작: 삼항 연산자를 사용한 메시지 조건부 출력 */}
      <h1>{isLoggedIn ? '환영합니다!' : '로그인해주세요'}</h1>

      {!isLoggedIn && <p>더 많은 기능을 보시려면 로그인하세요.</p>}

      <button onClick={handleLogin}>
        {/* 핵심 동작: 상태에 따른 버튼 텍스트 변경 */}
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>

      <p style={{ marginTop: '20px', color: 'gray' }}>
        isLoggedIn: {isLoggedIn.toString()}
      </p>
    </div>
  );
}

export default AuthManager;
```

**💡 보충 설명**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">!isLoggedIn (Toggle)</div>
    <div class="wda-fcard-dsc"><code>set</code> 함수 안에서 <code>!</code>를 사용하면 따로 <code>if</code>문을 쓰지 않아도 <code>true</code>를 <code>false</code>로, <code>false</code>를 <code>true</code>로 간결하게 바꿀 수 있습니다.<br>현재 state의 반대값으로 바꿀 때는 <code>setState((prev) =&gt; !prev)</code> 형태를 쓰면, React가 가장 최신의 이전 값을 기준으로 안전하게 업데이트합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">삼항 연산자 { ? : }</div>
    <div class="wda-fcard-dsc">JSX 내부에서 조건에 따라 서로 다른 텍스트나 컴포넌트를 보여줄 때 사용하는 가장 대표적인 문법입니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">불리언 값 출력</div>
    <div class="wda-fcard-dsc"><code>isLoggedIn</code> 같은 논리값은 화면에 그대로 나타나지 않으므로, 확인용으로 띄울 때는 <code>.toString()</code>을 붙여 문자열로 변환해야 합니다.</div>
  </div>
</div>

---

<h2>4. App.jsx에 모두 연결하기</h2>

각 컴포넌트 파일을 만든 뒤에는 `App.jsx`에서 import하고 JSX로 배치해야 브라우저 화면에 보입니다.

```jsx
import LoginToggle from './components/LoginToggle';
import WarningSystem from './components/WarningSystem';
import AuthManager from './components/AuthManager';

function App() {
  return (
    <div>
      <h1>조건부 렌더링 훈련</h1>
      <LoginToggle />
      <WarningSystem />
      <AuthManager />
    </div>
  );
}

export default App;
```

---

<h2>5. ✅ 핵심 요약</h2>

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>로그인 상태처럼 <strong>둘 중 하나</strong>를 보여줄 때는 삼항 연산자(<code>? :</code>)를 사용한다.</li>
    <li>에러 배너처럼 <strong>있을 때만</strong> 보여줄 때는 <strong>&& 연산자</strong>를 사용한다.</li>
    <li>상태를 반전시킬 때는 <code>setState((prev) =&gt; !prev)</code> 같은 <strong>함수형 업데이트</strong>가 더 안전하다.</li>
    <li>불리언 값을 화면에 그대로 확인용으로 찍고 싶다면 <code>.toString()</code>으로 문자열 변환이 필요하다.</li>
  </ul>
</div>

**🧠 실수 방지 체크**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: setIsLoggedIn(!isLoggedIn)처럼 현재 값을 직접 참조해 반전시킨다.</div>
    <div class="wda-mistake-right">방지: <code>setIsLoggedIn((prev) =&gt; !prev)</code>처럼 함수형 업데이트를 사용하면 항상 최신 상태를 기준으로 안전하게 뒤집힌다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: {isLoggedIn}처럼 불리언 값을 JSX에 그대로 출력한다.</div>
    <div class="wda-mistake-right">방지: 불리언은 화면에 나타나지 않으므로, 확인용으로 찍을 때는 <code>{isLoggedIn.toString()}</code>으로 변환한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: && 연산자 뒤에 오는 조건이 항상 명확한 boolean이라고 가정한다.</div>
    <div class="wda-mistake-right">방지: 조건이 falsy이지만 값이 있는 경우(숫자 0 등) 화면에 그대로 출력될 수 있으므로, <code>!isLoggedIn</code>처럼 boolean 조건을 명확히 작성한다.</div>
  </div>
</div>

**✅ 완성 기준**

<div class="wda-check-note">
  <ul>
    <li>실습 1: 로그인 상태에 따라 메시지와 버튼 텍스트가 삼항 연산자로 모두 바뀐다.</li>
    <li>실습 2: hasError가 true일 때만 경고 배너가 && 연산자로 나타나고, false면 DOM에 아예 렌더링되지 않는다.</li>
    <li>실습 3: 로그아웃 상태일 때만 안내 문구가 && 연산자로 추가 표시되고, isLoggedIn 값이 문자열로 화면에 출력된다.</li>
    <li>세 컴포넌트 모두 App.jsx에 import되어 화면에 정상적으로 렌더링된다.</li>
  </ul>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">로그인 토글에서 삼항 연산자를 쓴 이유는?</div>
    <div class="wda-flip-back">로그인/로그아웃처럼 둘 중 하나의 메시지·버튼 텍스트를 반드시 선택해야 하기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">경고 배너에서 && 연산자를 쓴 이유는?</div>
    <div class="wda-flip-back">hasError가 true일 때만 보여주고, false면 아무것도 렌더링하지 않아도 되기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">setIsLoggedIn((prev) => !prev)를 쓰는 이유는?</div>
    <div class="wda-flip-back">함수형 업데이트를 사용하면 React가 가장 최신 상태를 기준으로 안전하게 반전시킨다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">isLoggedIn 값을 화면에 그대로 출력하면?</div>
    <div class="wda-flip-back">불리언은 화면에 표시되지 않으므로 .toString()으로 문자열 변환이 필요하다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">AuthManager에서 && 연산자는 어디에 쓰였나?</div>
    <div class="wda-flip-back">로그아웃 상태(!isLoggedIn)일 때만 안내 문구를 추가로 보여주는 데 사용됐다.</div>
  </div>
</div>
