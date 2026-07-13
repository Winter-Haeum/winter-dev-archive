---
title: "실습: state 활용 훈련 1~8"
status: "completed"
description: "Counter, Toggle, Mirror, Color Box, Traffic Light, Login Check, Tab Menu, Accordion 등 8가지 미니 실습으로 useState 활용 패턴을 훈련한다."
category: "React"
section: "Core"
tags:
  - react
  - state
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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
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

<h2>1. 💻 실습 : Counter (숫자)</h2>

가장 기본이 되는 숫자를 세는 기능입니다. 아래 가이드에 따라 증가와 감소 기능을 모두 구현해 봅시다.

### 1) Mission

`src/components/Counter.jsx`를 만들고 다음을 구현하세요.

1. **State:** 초기값 `0`인 숫자 상태를 만드세요.
2. **기능:**
   - `+1` 버튼을 누르면 숫자가 1 증가합니다.
   - `-1` 버튼을 누르면 숫자가 1 감소합니다.
3. **핵심:** 이전 값을 기반으로 안전하게 변경하는 **함수형 업데이트**(`prev => ...`)를 사용해 보세요.

### 2) 결과 예시

- **+1 클릭:** 0 ➡ 1 ➡ 2
- **-1 클릭:** 2 ➡ 1 ➡ 0 ➡ -1

### 3) 정답 코드

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // 핵심: prev는 "변경 직전의 최신 값"을 의미합니다.
  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrease = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "10px" }}>
      <h2>1. Counter</h2>
      <p>현재 값: <strong>{count}</strong></p>
      <button onClick={handleIncrease} style={{ marginRight: "10px" }}>+1</button>
      <button onClick={handleDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>함수형 업데이트 (<code>prev =&gt; prev + 1</code>)</strong>
  <p>위 정답 예시처럼 <code>setCount(count + 1)</code> 대신 <code>prev</code>를 사용하는 것이 더 안전합니다. 연속으로 버튼을 따다닥 눌렀을 때도 숫자가 정확하게 반영됩니다.</p>
</div>

---

<h2>2. 💻 실습 : Toggle (불리언)</h2>

스위치를 껐다 켰다 하는 ON/OFF 기능입니다.

### 1) Mission

`src/components/Toggle.jsx`를 만들고 다음을 구현하세요.

1. **State:** 초기값 `false`인 불리언 상태(`isOn`)를 만드세요.
2. **화면:** 상태가 `true`면 **"ON"**, `false`면 **"OFF"**라고 글자가 보여야 합니다. (삼항 연산자 사용)
3. **기능:** 버튼을 클릭할 때마다 상태가 반대로(`true ↔ false`) 바뀌어야 합니다.

### 2) 결과 예시

- 초기 화면: **상태: OFF**
- 버튼 클릭: **상태: ON** ➡ **상태: OFF** (반복)

### 3) 정답 코드

```jsx
import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "10px" }}>
      <h2>2. Toggle</h2>
      {/* 삼항 연산자: 조건 ? 참일때 : 거짓일때 */}
      <p>상태: <strong>{isOn ? 'ON' : 'OFF'}</strong></p>

      {/* !isOn : 현재 값의 반대(Not)를 넣음 */}
      <button onClick={() => setIsOn(!isOn)}>스위치</button>
    </div>
  );
}

export default Toggle;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>논리 부정 연산자 (<code>!</code>)</strong>
  <ul>
    <li><code>!true</code> ➡ <code>false</code></li>
    <li><code>!false</code> ➡ <code>true</code></li>
  </ul>
  <p>현재 상태의 반대값을 넣으면 토글(Toggle) 기능이 완성됩니다.</p>
</div>

---

<h2>3. 💻 실습 : Mirror (문자열)</h2>

입력한 글자를 거울처럼 실시간으로 보여주는 기능입니다.

### 1) Mission

`src/components/Mirror.jsx`를 만들고 다음을 구현하세요.

1. **State:** 빈 문자열(`""`)로 초기화된 상태(`text`)를 만드세요.
2. **연결:** `input` 태그의 `value`와 `onChange`를 State에 연결하세요.
3. **출력:** 입력된 글자가 바로 아래 `<p>` 태그에 똑같이 나타나야 합니다.

### 2) 결과 예시

입력창에 "안녕하세요" 입력 ➡ 아래에 **"입력값: 안녕하세요"** 출력

### 3) 정답 코드

```jsx
import { useState } from 'react';

function Mirror() {
  const [text, setText] = useState("");

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px" }}>
      <h2>3. Mirror</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>입력값: <strong>{text}</strong></p>
    </div>
  );
}

export default Mirror;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>e.target.value</strong>
  <p>사용자가 방금 입력한 키보드 값을 가져오는 명령어입니다. 이 값을 <code>setText</code>에 넣어주면 화면이 다시 그려지면서 글자가 나타납니다.</p>
</div>

---

<h2>4. 💻 실습 : Color Box</h2>

배열과 인덱스를 활용하여 색상을 순서대로 변경하는 로직입니다.

### 1) Mission

`src/components/ColorBox.jsx`를 만들고 다음을 구현하세요.

1. **배열 준비:** `['red', 'blue', 'green']` 색상 배열을 컴포넌트 내부나 외부에 선언하세요.
2. **State:** 현재 색상이 아닌, **현재 색상의 순서(index)**를 저장하는 숫자 state를 만드세요. (0부터 시작)
3. **기능:** 버튼을 누를 때마다 인덱스가 1씩 증가해야 하며, 마지막 색상 다음에는 다시 첫 번째(`0`)로 돌아와야 합니다. (나머지 연산자 `%` 활용)

### 2) 결과 예시

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">초기</div>
    <div class="wda-sbody"><div class="wda-sdsc">빨간 상자</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">1회</div>
    <div class="wda-sbody"><div class="wda-sdsc">파란 상자</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2회</div>
    <div class="wda-sbody"><div class="wda-sdsc">초록 상자</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3회</div>
    <div class="wda-sbody"><div class="wda-sdsc">다시 빨간 상자 (무한 반복)</div></div>
  </div>
</div>

### 3) 정답 코드

```jsx
import { useState } from 'react';

function ColorBox() {
  const colors = ['red', 'blue', 'green'];
  // 색상 자체가 아니라, '몇 번째'인지(index)를 기억합니다.
  const [index, setIndex] = useState(0);

  const handleChangeColor = () => {
    // (현재번호 + 1)을 전체개수(3)로 나눈 나머지(%)를 구하면
    // 0, 1, 2, 0, 1, 2... 가 반복됩니다.
    setIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "10px" }}>
      <h2>4. Color Box</h2>
      <div style={{
        width: "100px",
        height: "100px",
        backgroundColor: colors[index], // 배열에서 색 꺼내오기
        marginBottom: "10px"
      }}></div>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}

export default ColorBox;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>나머지 연산자 (<code>%</code>)</strong>
  <p><code>(index + 1) % 3</code> 공식은 순환하는 로직을 만들 때 개발자들이 가장 즐겨 쓰는 패턴입니다. <code>if</code>문을 쓰지 않아도 돼서 코드가 훨씬 깔끔해집니다.</p>
</div>

---

<h2>5. 💻 실습 : Traffic Light</h2>

객체(Object)를 활용하여 다음 상태를 미리 정의해두는 패턴입니다.

### 1) Mission

`src/components/TrafficLight.jsx`를 만들고 다음을 구현하세요.

1. **State:** 현재 신호등 색상(`light`)을 저장하세요. (초기값: `'red'`)
2. **매핑 객체:** 각 색상일 때 다음 색상이 무엇인지 정의한 객체(`next`)를 만드세요.
   - red ➡ yellow
   - yellow ➡ green
   - green ➡ red
3. **기능:** 버튼을 누르면 이 객체를 참조하여 다음 색상으로 변경하세요.

### 2) 결과 예시

버튼을 누를 때마다 원의 색상이 **빨강 ➡ 노랑 ➡ 초록 ➡ 빨강** 순서로 바뀝니다.

### 3) 정답 코드

```jsx
import { useState } from 'react';

function TrafficLight() {
  const [light, setLight] = useState('red');

  // 상태 기계(State Machine)처럼 동작을 미리 정의합니다.
  const next = {
    red: 'yellow',
    yellow: 'green',
    green: 'red'
  };

  const handleChangeLight = () => {
    setLight(next[light]); // 현재가 red면 next['red']인 yellow가 됨
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "10px" }}>
      <h2>5. Traffic Light</h2>
      <div style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: light,
        marginBottom: "10px",
        transition: "0.3s" // 부드럽게 바뀌는 효과
      }}></div>
      <button onClick={handleChangeLight}>Change Light</button>
    </div>
  );
}

export default TrafficLight;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>객체 매핑(Object Mapping)</strong>
  <p>복잡한 <code>if-else</code>나 <code>switch</code> 문을 사용하는 대신, 이렇게 객체에 "A 다음은 B"라고 적어두고 꺼내 쓰는 방식이 훨씬 읽기 좋고 유지 보수하기 좋습니다.</p>
</div>

---

<h2>6. 💻 실습 : Login Check</h2>

여러 개의 입력값(Input)을 검사하여 버튼을 활성화/비활성화하는 기능입니다.

### 1) Mission

`src/components/LoginCheck.jsx`를 만들고 다음을 구현하세요.

1. **State:** 아이디(`id`)와 비밀번호(`pw`)를 저장할 2개의 state를 만드세요.
2. **Input:** 각각의 input 태그를 만들고 state와 연결하세요.
3. **유효성 검사:** 아이디와 비밀번호가 **둘 다 입력되었을 때만** 버튼이 눌리도록 만드세요. (하나라도 비어있으면 `disabled`)

### 2) 결과 예시

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">초기</div><div class="wda-sdsc">로그인 버튼이 회색이고 눌리지 않음.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">아이디만 입력</div><div class="wda-sdsc">여전히 눌리지 않음.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">비밀번호까지 입력</div><div class="wda-sdsc">버튼이 활성화되어 클릭 가능해짐.</div></div>
  </div>
</div>

### 3) 정답 코드

```jsx
import { useState } from 'react';

function LoginCheck() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px" }}>
      <h2>6. Login Check</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디 입력"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="비밀번호 입력"
        />
      </div>

      {/* 논리 연산자 OR(||): 둘 중 하나라도 비어있으면(true) -> disabled는 true */}
      <button disabled={!id || !pw}>
        로그인
      </button>
    </div>
  );
}

export default LoginCheck;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Disabled 처리</strong>
  <p><code>&lt;button disabled={true}&gt;</code>가 되면 버튼이 비활성화됩니다.</p>
  <strong>조건식 <code>!id || !pw</code></strong>
  <ul>
    <li><code>!id</code>: 아이디가 비어있으면 참(True)</li>
    <li><code>||</code>: 또는 (OR)</li>
  </ul>
  <p>즉, "아이디가 없거나, 비밀번호가 없으면 ➡ 비활성화해라"라는 뜻입니다.</p>
</div>

---

<h2>7. 💻 실습 : Tab Menu</h2>

현재 선택된 탭이 무엇인지 기억하고, 그에 따라 다른 내용을 보여주는 UI 패턴입니다.

### 1) Mission

`src/components/TabMenu.jsx`를 만들고 다음을 구현하세요.

1. **State:** 현재 선택된 탭의 이름(`currentTab`)을 저장하세요. (초기값: `'home'`)
2. **버튼:** 'Home', 'About', 'Contact' 3개의 버튼을 만드세요.
3. **스타일:** 선택된 버튼은 글자색이나 배경색을 다르게 하여 표시하세요. (조건부 스타일링)
4. **내용:** 선택된 탭에 따라 아래 텍스트가 바뀌어야 합니다. (조건부 렌더링)

### 2) 결과 예시

- **초기:** 'Home' 버튼이 활성화되어 있고 "🏠 홈 화면입니다."가 보임.
- **About 클릭:** 'About' 버튼 색이 바뀌고 내용이 "ℹ️ 소개 화면입니다."로 교체됨.

### 3) 정답 코드

```jsx
import { useState } from 'react';

function TabMenu() {
  const [currentTab, setCurrentTab] = useState('home');

  // 선택된 탭에만 적용할 스타일 객체
  const activeStyle = { backgroundColor: "black", color: "white" };

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "10px" }}>
      <h2>7. Tab Menu</h2>

      {/* 탭 버튼 영역 */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setCurrentTab('home')}
          // 조건부 스타일링: 현재 탭이 'home'이면 activeStyle 적용
          style={currentTab === 'home' ? activeStyle : {}}
        >
          Home
        </button>

        <button
          onClick={() => setCurrentTab('about')}
          style={currentTab === 'about' ? activeStyle : {}}
        >
          About
        </button>

        <button
          onClick={() => setCurrentTab('contact')}
          style={currentTab === 'contact' ? activeStyle : {}}
        >
          Contact
        </button>
      </div>

      {/* 내용 표시 영역 (조건부 렌더링) */}
      <div style={{ marginTop: "20px", padding: "10px", border: "1px dashed #ccc" }}>
        {currentTab === 'home' && <p>🏠 홈 내용이 보입니다.</p>}
        {currentTab === 'about' && <p>ℹ️ 서비스 소개입니다.</p>}
        {currentTab === 'contact' && <p>📞 010-1234-5678</p>}
      </div>
    </div>
  );
}

export default TabMenu;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>조건부 렌더링 (<code>&&</code> 연산자)</strong>
  <p><code>{조건 &amp;&amp; &lt;태그 /&gt;}</code> 패턴을 사용하면, 조건이 <code>true</code>일 때만 뒤에 있는 태그가 화면에 그려집니다. 리액트에서 무언가를 보여줬다 숨겼다 할 때 가장 많이 쓰는 문법입니다.</p>
</div>

---

<h2>8. 💻 실습 : Accordion</h2>

클릭하면 내용이 펼쳐지고, 다시 클릭하면 접히는 UI입니다.

### 1) Mission

`src/components/Accordion.jsx`를 만들고 다음을 구현하세요.

1. **State:** 내용이 열려있는지 닫혀있는지(`isOpen`)를 저장하는 불리언(Boolean) state를 만드세요. (초기값: `false`)
2. **제목:** 클릭할 수 있는 제목 영역을 만드세요.
3. **기능:** 제목을 클릭할 때마다 `isOpen` 상태가 반전(`true ↔ false`)되어야 합니다.
4. **내용:** `isOpen`이 `true`일 때만 상세 내용이 화면에 나타나야 합니다.

### 2) 결과 예시

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">초기</div><div class="wda-sdsc">제목만 보이고 내용은 숨겨져 있음.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">클릭 1회</div><div class="wda-sdsc">내용이 아래로 펼쳐짐.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">클릭 2회</div><div class="wda-sdsc">내용이 다시 사라짐.</div></div>
  </div>
</div>

<h3>3) 정답 코드</h3>

```jsx
import { useState } from 'react';

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px" }}>
      <h2>8. Accordion</h2>

      <div
        // 현재 값의 반대(!)로 설정하여 토글 기능 구현
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <span>토글 제목</span>
        <span>{isOpen ? "🔼" : "🔽"}</span>
      </div>

      {/* 논리 연산자(&&)를 이용한 조건부 렌더링 */}
      {isOpen && (
        <div style={{ padding: "20px", backgroundColor: "#fafafa" }}>
          <p>여기에 상세 내용이 들어갑니다.</p>
          <p>필요할 때만 보여주는 패턴입니다.</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>토글 패턴 (<code>!state</code>)</strong>
  <p><code>setIsOpen(!isOpen)</code>은 "현재 열려있으면 닫고, 닫혀있으면 열어라"라는 뜻입니다.</p>
  <p>탭 메뉴(Tab)와 아코디언(Accordion)은 리액트 State를 활용하는 가장 대표적인 UI 예제입니다. 이 원리만 알면 드롭다운 메뉴, 모달 창 등 다양한 기능을 만들 수 있습니다.</p>
</div>
