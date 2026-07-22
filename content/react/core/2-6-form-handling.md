---
title: "2-6 폼 입력 다루기"
status: "completed"
description: "제어 컴포넌트(Controlled Component)의 개념과 input/textarea/select/checkbox/radio 처리법, 객체 State로 여러 입력 관리하기, onSubmit과 유효성 검사까지 React 폼 처리의 기초를 정리한다."
category: "React"
section: "Core"
tags:
  - react
  - form
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
  • <strong>제어 컴포넌트</strong> — "Single Source of Truth" 개념을 완벽히 이해합니다.<br>
  • <strong>텍스트 입력</strong> — <code>input</code>과 <code>textarea</code>의 값을 state와 동기화합니다.<br>
  • <strong>선택형 입력</strong> — <code>select</code>, <code>radio</code>, <code>checkbox</code>의 다양한 처리법을 익힙니다.<br>
  • <strong>복합 상태 관리</strong> — 여러 개의 입력을 하나의 객체 state로 관리합니다.<br>
  • <strong>제출과 유효성</strong> — <code>onSubmit</code> 이벤트 처리와 기초적인 유효성 검사를 구현합니다.
</div>

---

<h2>1. 제어 컴포넌트란?</h2>

**React state가 입력값의 "유일한 진실 공급원"**

**📌 제어 컴포넌트의 특징**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">React state가 값을 관리</div>
    <div class="wda-fcard-dsc">입력창의 값을 리액트 상태가 직접 쥐고 있습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">value={state}로 표시</div>
    <div class="wda-fcard-dsc">HTML 요소의 <code>value</code> 속성에 리액트 상태를 연결합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">onChange로 state 업데이트</div>
    <div class="wda-fcard-dsc">사용자가 입력할 때마다 이벤트를 감지해 상태를 변경합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">항상 state와 화면이 동기화</div>
    <div class="wda-fcard-dsc">메모리의 상태 값과 화면의 입력값이 늘 일치합니다.</div>
  </div>
</div>

**💡 장점**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-dsc">입력값을 실시간으로 검증 가능</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-dsc">조건부로 버튼 활성화/비활성화 처리 용이</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-dsc">입력값 포맷팅 자동화 (전화번호 하이픈, 금액 콤마 등)</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-dsc">여러 입력을 한 곳에서 효율적으로 관리</div>
  </div>
</div>

**핵심 메커니즘**

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sdsc">사용자가 타이핑</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sdsc"><code>onChange</code> 발생</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sdsc">state 업데이트</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody"><div class="wda-sdsc">화면에 반영</div></div>
  </div>
</div>

---

<h2>2. 왜 제어 컴포넌트인가요?</h2>

**React가 입력값을 장악해야 하는 이유**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl">기존 HTML 방식 (비제어 방식)</div>
    <div class="wda-fcard-dsc"><code>const value = document.getElementById('input').value;</code><br>• "입력값 내놔!"라고 물어봐야 함 (필요할 때마다 DOM에 직접 접근)<br>• 데이터가 DOM에만 존재함<br>• React는 현재 값이 뭔지 실시간으로 모름<br>• 실시간 검증이 어려움</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">React 제어 컴포넌트 방식</div>
    <div class="wda-fcard-dsc"><code>return &lt;input value={text} onChange={handleChange} /&gt;;</code><br>• React가 이미 알고 있음 (데이터가 늘 state 내에 존재)<br>• 타이핑하는 순간 바로 반영됨<br>• 입력 제한, 자동 완성 등의 구현이 매우 쉬움</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Single Source of Truth (진실의 유일한 원천)</strong>
  <p>제어 컴포넌트에서는 React state가 입력값의 기준(source of truth)이 됩니다.<br>사용자가 입력하면 <code>onChange</code>로 state를 업데이트하고, 변경된 state가 다시 input의 <code>value</code>로 전달되어 화면에 표시됩니다.<br>이것이 React 폼 처리의 핵심 철학입니다.</p>
  <p>제어 컴포넌트를 사용하면 '제출' 버튼을 누르기 전에도 사용자가 무엇을 입력하고 있는지 실시간으로 파악하여 에러 메시지를 띄워주는 등의 인터랙티브한 UI를 만들기 좋습니다.</p>
</div>

---

<h2>3. 인풋 텍스트 다루기</h2>

가장 기본적인 텍스트 입력

**📝 예제 코드**

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState(""); // 이름 상태 관리
  const [text, setText] = useState(""); // 자기소개 상태 관리

  // 이름 입력 시 실행되는 함수
  const handleChangeName = (e) => {
    setName(e.target.value); // 입력된 값을 name 상태에 저장
  };

  // 자기소개 입력 시 실행되는 함수
  const handleChangeText = (e) => {
    setText(e.target.value); // 입력된 값을 text 상태에 저장
  };

  return (
    <div>
      <div>
        {/* value를 name 상태와 연결한 제어 컴포넌트 */}
        <input value={name} onChange={handleChangeName} placeholder="이름" />
      </div>
      <div>
        {/* textarea도 value와 onChange로 상태 동기화 */}
        <textarea value={text} onChange={handleChangeText} placeholder="자기소개" />
      </div>
    </div>
  );
}

export default App;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>핵심 동작:</strong> <code>input</code>과 <code>textarea</code>에 <code>value={state}</code>를 부여하고, <code>onChange</code>에서 <code>e.target.value</code>를 통해 상태를 업데이트하는 것이 포인트입니다.</p>
  <p><strong>제어 컴포넌트:</strong> React state가 입력값의 기준이 되어 값을 제어하는 방식으로, 위 코드의 핵심 구조입니다.</p>
</div>

---

<h2>4. textarea 다루기</h2>

**🧪 여러 줄 텍스트 입력**

```jsx
import { useState } from "react";

function TextareaInput() {
  const [content, setContent] = useState("");

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
        rows={4}
      />
      <p>글자 수: {content.length}</p>
    </div>
  );
}

export default TextareaInput;
```

**🆚 방식 비교**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">HTML 방식</div>
    <div class="wda-fcard-dsc"><code>&lt;textarea&gt;내용&lt;/textarea&gt;</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">React 방식</div>
    <div class="wda-fcard-dsc"><code>&lt;textarea value={content} /&gt;</code></div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>rows={4}:</strong> 텍스트 입력창의 기본 높이를 4줄로 설정하는 속성입니다.</li>
    <li><strong>content.length:</strong> 현재 입력된 문자열의 길이를 실시간으로 계산하여 화면에 표시합니다.</li>
    <li><strong>React 방식의 차이:</strong> HTML은 태그 사이에 내용을 넣지만, React는 <code>input</code> 태그처럼 <code>value</code> 속성을 사용하여 상태를 제어합니다.</li>
    <li><strong>value만 있으면 안 됨:</strong> 실제 제어 컴포넌트로 사용할 때는 <code>value</code>와 <code>onChange</code>를 함께 작성해야 합니다.<br><code>onChange</code> 없이 <code>value</code>만 있으면 읽기 전용처럼 동작할 수 있습니다.</li>
  </ul>
</div>

---

<h2>5. select 드롭다운 다루기</h2>

**🧪 선택 옵션 목록**

```jsx
import { useState } from "react";

function SelectInput() {
  const [fruit, setFruit] = useState('apple'); // 초기값을 'apple'로 설정

  return (
    <div>
      {/* select 태그의 value를 상태(fruit)와 연결하여 제어 */}
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="orange">오렌지</option>
      </select>
      <p>선택: {fruit}</p>
    </div>
  );
}

export default SelectInput;
```

**🆚 HTML과 차이**

HTML은 `selected` 속성을 `option` 태그에 붙여서 기본값을 설정하지만, **React는 `select` 태그의 `value` 속성으로 선택 상태를 관리**합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>useState('apple'):</strong> 컴포넌트가 처음 렌더링될 때 '사과'가 선택된 상태로 시작하도록 초기값을 설정한 것입니다.</li>
    <li><strong>제어 방식:</strong> 사용자가 드롭다운에서 다른 항목을 선택하면 <code>onChange</code>가 발생하고, <code>setFruit</code>를 통해 상태가 업데이트되면서 화면의 선택된 값이 바뀝니다.</li>
  </ul>
</div>

---

<h2>6. checkbox와 radio 다루기</h2>

선택/체크 입력 요소

**🧪 Checkbox (checked 사용)**

```jsx
const [isAgree, setIsAgree] = useState(false);

<input
  id="agree"
  type="checkbox"
  checked={isAgree} // value 대신 checked 속성 사용
  onChange={(e) => setIsAgree(e.target.checked)} // 체크 여부(true/false)로 상태 업데이트
/>
<label htmlFor="agree">약관 동의</label>
```

**🧪 Radio (같은 name으로 그룹)**

```jsx
const [gender, setGender] = useState("");

<label>
  <input
    type="radio"
    name="gender" // 같은 이름을 가져야 하나의 그룹으로 묶임
    value="male" // 해당 버튼이 가질 값
    checked={gender === 'male'} // 상태가 'male'일 때만 체크됨
    onChange={(e) => setGender(e.target.value)} // 선택 시 값 업데이트
  />
  남성
</label>

<label>
  <input
    type="radio"
    name="gender"
    value="female"
    checked={gender === 'female'}
    onChange={(e) => setGender(e.target.value)}
  />
  여성
</label>
```

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <ul>
    <li><strong>주의사항:</strong> 텍스트 입력(<code>value</code>)과 달리, <code>checkbox</code>와 <code>radio</code>는 선택된 상태를 표현하기 위해 반드시 <strong><code>checked</code> 속성</strong>을 사용해야 합니다.</li>
    <li><strong>e.target.checked:</strong> 체크박스에서는 <code>value</code>가 아닌 <code>checked</code> 프로퍼티를 통해 <code>true</code> 또는 <code>false</code> 값을 가져옵니다.</li>
  </ul>
</div>

---

<h2>7. 여러 입력 필드 관리하기</h2>

**📝 객체 state로 한 번에 관리**

```jsx
import { useState } from "react";

function Form() {
  // 여러 개의 상태를 하나의 객체로 묶어서 관리
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // 이벤트 발생한 요소의 name과 value 추출

    // 중요: 기존 데이터를 복사(...prev)하고, 변경된 부분만 덮어쓰기
    // [name]은 변수 안에 담긴 문자열(예: "email")을 키값으로 씁니다.
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      {/* 각 input의 name 속성이 state 객체의 키와 똑같아야 합니다 */}
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <textarea name="message" value={form.message} onChange={handleChange} />
    </form>
  );
}

export default Form;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>객체 관리의 장점:</strong> 입력창이 10개라도 <code>useState</code>를 10번 쓰지 않고, 하나의 <code>handleChange</code> 함수로 모두 처리할 수 있어 코드가 깔끔해집니다.</li>
    <li><strong>[name]: value:</strong> '계산된 속성 이름(Computed property name)' 문법으로, <code>name</code> 변수에 들어있는 값(예: "email")을 객체의 키로 사용하여 값을 업데이트합니다.</li>
    <li><strong>...prev (Spread 문법):</strong> 리액트 상태는 불변성을 지켜야 하므로, 기존 객체를 복사한 뒤 바뀐 값만 덮어씌워야 합니다. (<code>...prev</code>를 빼먹으면 다른 입력값이 다 사라집니다.)</li>
    <li><strong>checkbox까지 처리하려면:</strong> 위 <code>handleChange</code>는 text, email, textarea, select처럼 <code>value</code>를 사용하는 입력에 적합합니다. checkbox까지 하나의 handler로 처리하려면 <code>type</code>과 <code>checked</code>를 함께 확인해야 합니다.</li>
  </ul>
  <pre style="background:rgba(128,128,128,.08);border-radius:8px;padding:10px 12px;overflow-x:auto;font-size:.78rem;"><code>const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));
};</code></pre>
</div>

---

<h2>8. 폼 제출 처리하기</h2>

**onSubmit과 preventDefault**

**📝 예제 코드**

```jsx
import { useState } from "react";

function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    console.log('로그인 시도:', form);
    // API 호출 등 처리
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={form.email} onChange={handleChange} />
      <input name="password" type="password" value={form.password} onChange={handleChange} />
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoginForm;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>e.preventDefault():</strong> React에서 form 제출을 직접 처리하고 페이지 새로고침을 막으려면 <code>e.preventDefault()</code>를 사용합니다.<br>일반적인 SPA 폼 처리에서는 거의 항상 사용한다고 이해하면 됩니다.</li>
    <li><strong>객체 State 관리:</strong> <code>email</code>과 <code>password</code>를 <code>form</code>이라는 하나의 객체로 묶어서 관리하며, <code>[name]: value</code> 방식을 사용해 코드를 간결하게 유지했습니다.</li>
    <li><strong>onSubmit 활용:</strong> <code>button</code>에 이벤트를 거는 대신 <code>form</code> 태그에 <code>onSubmit</code>을 연결하여 표준 웹 접근성을 준수했습니다.</li>
  </ul>
</div>

---

<h2>9. 간단한 유효성 검사</h2>

**⚙️ 제출 전 입력값 확인하기**

```javascript
const handleSubmit = (e) => {
  e.preventDefault(); // 새로고침 막기

  // 1. 빈 값 검사 (공백만 입력한 경우도 걸러냄)
  if (!form.email.trim() || !form.password.trim()) {
    alert('모든 필드를 입력해주세요.');
    return; // 함수 종료 (더 이상 진행 X)
  }

  // 2. 이메일 형식 검사
  if (!form.email.includes('@')) {
    alert('올바른 이메일 형식이 아닙니다.');
    return;
  }

  // 3. 비밀번호 길이 검사 (공백 제외 기준)
  if (form.password.trim().length < 6) {
    alert('비밀번호는 6자 이상이어야 합니다.');
    return;
  }

  console.log('유효성 통과!', form);
};
```

위 코드는 아래 순서대로 검사를 진행하며, 하나라도 걸리면 그 자리에서 멈춥니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">빈 값 검사</div><div class="wda-sdsc"><code>!form.email.trim() || !form.password.trim()</code> — 아이디/비밀번호가 비어있거나 공백만 있으면 중단</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">이메일 형식 검사</div><div class="wda-sdsc"><code>form.email.includes('@')</code> — '@'가 없으면 중단</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">비밀번호 길이 검사</div><div class="wda-sdsc"><code>form.password.trim().length &lt; 6</code> — 공백 제외 6자 미만이면 중단</div></div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>return의 역할:</strong> <code>alert</code>을 띄운 뒤 <code>return;</code>을 해주지 않으면, 경고창이 떴는데도 밑에 있는 코드가 계속 실행되어 버립니다. 문제가 발생했을 때 즉시 함수를 멈추기 위해 사용합니다.</li>
    <li><strong>includes('@'):</strong> 문자열 안에 특정 문자('@')가 들어있는지 확인하는 메서드입니다.<br><code>includes('@')</code>는 학습용으로 사용하는 아주 기초적인 검사입니다.<br>실제 서비스에서는 더 정교한 검증 방식이나 서버 검증이 함께 필요합니다.</li>
    <li><strong>클라이언트 유효성 검사:</strong> 서버로 데이터를 보내기 전에 프론트엔드에서 미리 잘못된 입력을 걸러내어, 불필요한 서버 요청을 줄이고 사용자에게 빠르게 피드백을 줍니다.<br>클라이언트 유효성 검사는 사용자에게 빠른 피드백을 주기 위한 1차 검사이며, 보안과 최종 데이터 검증은 반드시 서버에서도 다시 확인해야 합니다.</li>
  </ul>
</div>

---

<h2>10. ⁉️ FAQ</h2>

**Q1. React state를 입력값의 '유일한 진실 공급원'으로 사용하는 패턴을 무엇이라 하나요?**

**Q2. 여러 개의 input 필드를 하나의 state로 관리할 때 사용하는 ES6 문법은?**

**💡 정답 및 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>A1. 제어 컴포넌트 (Controlled Component)</strong> — HTML 요소(<code>input</code>, <code>textarea</code> 등)가 자체적으로 값을 유지하지 않고, React의 <code>state</code>가 값을 전적으로 제어하는 방식을 말합니다.</li>
    <li><strong>A2. 계산된 속성 이름 (Computed property name)</strong> — 객체 안에서 대괄호 <code>[]</code>를 사용하여 변수에 담긴 값을 키(Key)로 사용하는 문법입니다. (예: <code>[e.target.name]: e.target.value</code>)</li>
  </ul>
</div>

---

<h2>11. ✅ 핵심 요약</h2>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>Controlled</strong></td>
    <td><strong>React State</strong>가 입력값의 기준(Single Source of Truth)이 되며, 입력 요소는 <strong>value와 onChange</strong>를 함께 사용해 state와 연결합니다.</td>
  </tr>
  <tr>
    <td><strong>Object State</strong></td>
    <td>여러 개의 Input 필드는 <strong>하나의 객체 State</strong>로 관리하며, <strong>[e.target.name]</strong> 계산된 속성명 문법을 활용해 업데이트합니다.</td>
  </tr>
  <tr>
    <td><strong>Validation</strong></td>
    <td>폼 제출 전 <strong>유효성 검사</strong>는 필수입니다. 빈 값 체크나 형식 검사를 통과하지 못하면 <strong>return</strong> 하여 제출을 막아야 합니다.</td>
  </tr>
</table>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>Single Source of Truth (진실의 유일한 원천):</strong> 화면에 보이는 값과 실제 데이터가 오직 하나의 공간(<code>state</code>)에서만 관리되어, 데이터의 불일치를 막는 중요한 개념입니다.</li>
    <li><strong>계산된 속성명 (Computed Property Name):</strong> 객체의 키(Key) 자리에 대괄호 <code>[]</code>를 쓰면, 그 안에 있는 변수의 값을 키 이름으로 사용할 수 있게 해주는 문법입니다.</li>
  </ul>
</div>
