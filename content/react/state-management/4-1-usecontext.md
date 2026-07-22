---
title: "4-1 useContext로 전역 상태 다루기"
status: "completed"
description: "Props Drilling 문제를 이해하고, createContext·Provider·useContext로 전역 상태를 만들고 소비하는 방법을 테마·인증 예제와 함께 정리한다."
category: "React"
section: "State Management"
tags:
  - react
  - hooks
  - usecontext
  - state-management
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
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
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

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>Props Drilling 이해</strong> — 깊은 컴포넌트 트리로의 데이터 전달 문제를 이해하고 해결합니다<br>
  • <strong>Context 생성과 제공</strong> — createContext와 Provider로 전역 상태를 설정하는 법을 배웁니다<br>
  • <strong>useContext 활용</strong> — Hook을 사용하여 컴포넌트 어디서든 전역 상태에 접근합니다<br>
  • <strong>적절한 사용 판단</strong> — Props와 Context 중 상황에 맞는 상태 관리 방법을 선택합니다
</div>

---

<h2>1. Props Drilling 문제</h2>

**📌 문제 상황 (Scenario)**

**"지하 3층에 있는 자식에게 도시락을 전해줘야 합니다."**
최상위 컴포넌트(App)에 있는 데이터를 저 깊숙한 곳에 있는 하위 컴포넌트(UserMenu)가 필요로 하는 상황입니다.

- **구조**: `App (user)` 👉 `Header` 👉 `Navigation` 👉 `UserMenu (user 필요!)`

**🧪 예시 코드 (The Drilling)**

데이터를 전달하기 위해, 중간에 있는 컴포넌트들이 계속해서 props를 내려줘야 합니다.

```jsx
// user 데이터는 오직 맨 아래 UserMenu에서만 필요한데...
<App user={user}>
  {/* Header는 user가 필요 없지만, 자식에게 주기 위해 받습니다. */}
  <Header user={user}>
    {/* Navigation도 마찬가지로 배달만 합니다. */}
    <Navigation user={user}>
      {/* 드디어 도착! */}
      <UserMenu user={user} />
    </Navigation>
  </Header>
</App>
```

**⚠️ 문제점 (Problems)**

**"배달부 역할만 하는 컴포넌트가 너무 많아집니다."**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">중간 컴포넌트의 희생</div><div class="wda-fcard-dsc">Header나 Navigation은 user 데이터를 쓰지도 않으면서 오직 전달하기 위해 props를 받아야 합니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">유지보수 지옥</div><div class="wda-fcard-dsc">만약 user 데이터를 다른 이름으로 바꾸거나 구조를 변경하면, 중간에 거쳐가는 모든 파일을 다 열어서 수정해야 합니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">가독성 저하</div><div class="wda-fcard-dsc">코드를 봤을 때 "이 데이터가 여기서 쓰이나?" 하고 헷갈리게 만듭니다.</div></div>
</div>

---

<h2>2. Context란?</h2>

**📌 개념 (Concept)**

**"컴포넌트 트리 전체에 데이터를 '방송'하는 방법"**
마치 라디오 방송국처럼, 가장 높은 곳(App)에서 데이터를 쏘면 필요한 컴포넌트(UserMenu, Sidebar)가 어디에 있든 직접 신호를 잡아서(수신) 사용할 수 있는 기술입니다.

**🆚 비교 (Props vs Context)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">📦 Props (일대일 전달)</div><div class="wda-fcard-dsc"><strong>방식</strong>: 이어달리기 (Relay)<br><strong>구조</strong>: App 👉 Header 👉 Nav 👉 UserMenu<br><strong>단점</strong>: 데이터를 쓰지도 않는 중간 단계(Header, Nav)를 반드시 거쳐야 하므로 비효율적이고 수정이 어렵습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">📡 Context (방송)</div><div class="wda-fcard-dsc"><strong>방식</strong>: 방송 송출 (Broadcast)<br><strong>구조</strong>: App (Provider) 📡 〰️〰️ 👉 UserMenu (직접 수신)<br><strong>장점</strong>: 중간 컴포넌트를 건너뛰고, 필요한 곳에서만 직접 데이터를 받아 쓸 수 있습니다.</div></div>
</div>

**🆚 비교 정리**

<div class="wda-callout wda-ci">
  <p><strong>"Props는 택배 배송, Context는 와이파이!"</strong></p>
  <p>택배는 손에서 손으로 거쳐가야 하지만, 와이파이는 비밀번호(Provider)만 알면 집안 어디서든 바로 쓸 수 있는 것과 같습니다.</p>
</div>

---

<h2>3. Context 생성하기 (Step 1)</h2>

**📌 개념 (Concept)**

**"방송 채널을 개설합니다."**
데이터를 공유하기 위한 공간(Context)을 만듭니다. 보통 관리하기 편하도록 별도의 파일로 분리해서 만듭니다.

**📝 구현 코드**

`createContext` 함수를 사용하여 Context 객체를 생성합니다.

```jsx
// contexts/ThemeContext.js
import { createContext } from 'react';

// 1. Context 생성 (기본값 설정 가능)
// 'light'는 Provider 없이 사용할 때 적용되는 기본값입니다.
export const ThemeContext = createContext('light');
```

**💡 구현 포인트**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">createContext(기본값)</div><div class="wda-fcard-dsc">괄호 안에 넣는 값은 Provider로 감싸지 않았을 때 컴포넌트가 사용하게 될 비상용 기본값(Fallback)입니다. 실수로 Provider를 안 썼을 때 에러를 방지하는 역할을 합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">별도 파일로 분리</div><div class="wda-fcard-dsc">여러 컴포넌트(Header, Footer 등)에서 이 Context를 import해서 써야 하므로, 파일을 따로 만들어두는 것이 정석입니다.</div></div>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p><code>createContext</code>의 기본값은 Provider가 없을 때 사용되는 fallback 값입니다. 간단한 값은 기본값을 넣어도 되지만, Provider가 반드시 필요한 전역 상태라면 <code>createContext(null)</code>로 만들고 커스텀 훅에서 Provider 누락 시 에러를 던지는 방식이 더 안전합니다.</p>
</div>

---

<h2>4. Provider 설정하기 (Step 2)</h2>

**📌 개념 (Concept)**

**"방송 송출을 시작합니다."**
만들어둔 Context의 Provider 컴포넌트로 데이터를 공유하고 싶은 영역을 감싸줍니다.  
이 Provider 내부에 있는 모든 컴포넌트(자식, 손자, 증손자...)는 데이터를 직접 받아볼 수 있게 됩니다.

**📝 구현 코드**

`value`라는 props를 통해 공유할 데이터를 내려줍니다.

```jsx
// App.jsx
import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext'; // 1단계에서 만든 것

function App() {
  const [theme, setTheme] = useState('light');

  return (
    // 2. Provider로 하위 컴포넌트에 값 제공
    // value props에 공유하고 싶은 데이터(theme)를 넣습니다.
    <ThemeContext.Provider value={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
```

**💡 구현 포인트**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">value 속성 필수</div><div class="wda-fcard-dsc">Provider에는 반드시 value라는 이름의 prop을 전달해야 합니다. 이 값이 바로 방송되는 실제 데이터입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">범위 설정</div><div class="wda-fcard-dsc">Provider 태그로 감싸진 모든 내부 컴포넌트가 데이터 접근 권한을 가집니다. 위 코드에서는 Header, Main, Footer 및 그 하위의 모든 컴포넌트가 theme 값에 접근할 수 있습니다.</div></div>
</div>

---

<h2>5. useContext로 사용하기 (Step 3)</h2>

**📌 개념 (Concept)**

**"필요한 곳에서 전파를 수신합니다."**
Provider 안에 있는 컴포넌트라면 어디서든 `useContext` 훅을 사용하여 공유된 데이터(Context Value)에 직접 접근할 수 있습니다.

**📝 구현 코드**

중간 부모들을 거치지 않고, `ThemeContext`에서 바로 `theme` 값을 가져옵니다.

```jsx
// components/ThemedButton.jsx
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // 만들어둔 Context 불러오기

function ThemedButton() {
  // 3. useContext로 현재 테마 값 가져오기
  // Provider의 value에 들어있는 값이 여기에 담깁니다.
  const theme = useContext(ThemeContext);

  return (
    <button type="button" className={theme === 'dark' ? 'btn-dark' : 'btn-light'}>
      현재 테마: {theme}
    </button>
  );
}

export default ThemedButton;
```

**💡 핵심 효과**

<div class="wda-callout wda-ci">
  <p><strong>"중간 컴포넌트 거치지 않고 직접 접근!"</strong></p>
  <p>기존에는 데이터를 받기 위해 부모 -&gt; 자식 -&gt; 손자로 계속 props를 전달해야 했지만,<br>이제는 원하는 컴포넌트에서 직통으로 데이터를 꺼내 쓸 수 있어 코드가 훨씬 깔끔해집니다.</p>
</div>

**✅ 권장 방식**

<div class="wda-callout wda-cw">
  <p>앞의 예제는 theme 값 하나만 공유하는 기본 예제이고, 뒤의 예제는 theme 값과 toggleTheme 함수를 함께 공유하는 확장 예제입니다.</p>
  <p>실제 프로젝트에서는 export/import 방식을 하나로 통일해서 사용하는 것이 좋습니다.</p>
</div>

---

<h2>6. 테마 전환 예제 (전체 코드)</h2>

**📌 개념 (Concept)**

**"데이터와 리모컨을 같이 포장해서 보냅니다."**
하위 컴포넌트가 테마를 조회(Read)할 수 있도록 `theme` 값을 보내고, 테마를 변경(Update)할 수 있도록 `toggleTheme` 함수도 함께 포장해서(object) 보냅니다.

**📝 구현 코드**

**파일 1: ThemeContext.js (뼈대 만들기)**
나중에 자동 완성을 돕고, Provider 실수를 방지하기 위해 기본값 모양을 미리 잡아줍니다.

```jsx
import { createContext } from 'react';

// Context 생성
// 기본값으로 theme 값뿐만 아니라 '함수'의 껍데기도 넣어줍니다.
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}, // 빈 함수 (Placeholder)
});
```

**파일 2: App.jsx (살 붙이고 배달하기)**
실제 `useState`로 상태를 만들고, 이를 변경하는 함수를 정의하여 Provider에 객체 형태로 전달합니다.

```jsx
import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Page from './Page';

function App() {
  // 1. 실제 상태 관리 (Master Data)
  const [theme, setTheme] = useState('light');

  // 2. 상태 변경 함수 정의 (Action)
  const toggleTheme = () => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  };

  return (
    // 3. 값과 함수를 하나의 객체로 묶어서 전달
    // value={{ theme, toggleTheme }} -> {{ 데이터, 변경함수 }}
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
}

export default App;
```

**💡 핵심 포인트**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">객체로 묶어서 전달</div><div class="wda-fcard-dsc"><code>value={{ theme, toggleTheme }}</code>처럼 이중 중괄호를 사용하는 이유는, JSX 문법(<code>{}</code>) 안에 자바스크립트 객체(<code>{...}</code>)를 넣었기 때문입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">양방향 소통 가능</div><div class="wda-fcard-dsc">이제 하위 컴포넌트인 &lt;Page /&gt; 내부 어디서든 useContext를 쓰면, theme을 확인해서 화면을 꾸밀 수도 있고, toggleTheme()를 호출해서 전역 상태를 직접 바꿀 수도 있습니다.</div></div>
</div>

---

<h2>7. 테마 전환 예제 (사용)</h2>

**📌 개념 (Concept)**

**"꺼내서 쓰기만 하면 됩니다."**
Provider가 내려준 선물 상자(`value={{ theme, toggleTheme }}`)를 `useContext`로 받아서, 구조 분해 할당으로 필요한 것만 쏙 뽑아 사용합니다.

**📝 구현 코드**

```jsx
// components/ThemeToggle.jsx
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemeToggle() {
  // 1. Context에서 데이터(theme)와 함수(toggleTheme)를 모두 가져옵니다.
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    // 2. theme 값에 따라 배경색 스타일을 다르게 적용 (Read)
    <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <p>현재 테마: {theme}</p>

      {/* 3. 버튼 클릭 시 toggleTheme 함수 실행 (Write/Update) */}
      <button type="button" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 다크 모드' : '☀️ 라이트 모드'}
      </button>
    </div>
  );
}

export default ThemeToggle;
```

**💡 핵심 포인트**

<div class="wda-callout wda-cs">
  <p><strong>어디서든 읽기 + 쓰기 가능</strong></p>
  <p>이 ThemeToggle 컴포넌트는 Header에 있든, Sidebar에 있든, SettingsPage에 있든 상관없이 똑같이 동작합니다. 이것이 Context API의 강력함입니다.</p>
  <p><strong>UI 동기화</strong>: 버튼을 눌러 toggleTheme이 실행되면 → App.js의 theme 상태가 바뀌고 → Provider를 통해 전파되어 → 이 컴포넌트의 배경색과 글자가 즉시 바뀝니다.</p>
</div>

---

<h2>8. 인증 상태 예제 (Auth Context)</h2>

**📌 개념 (Concept)**

**"로그인 정보를 전역에서 관리합니다."**
로그인한 사용자 정보(user)와 로그인(login), 로그아웃(logout) 기능을 Context에 담아, 앱의 어느 곳에서든 인증 상태를 확인하고 제어할 수 있게 만듭니다.

**📝 구현 코드**

Provider가 없을 때 에러를 띄워주는 안전장치를 포함하여 작성했습니다.

```jsx
// contexts/AuthContext.jsx
import { createContext, useState, useContext } from 'react';

// 1. Context 생성
const AuthContext = createContext(null);

// 2. Provider 컴포넌트 생성 (로직 캡슐화)
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom Hook
export function useAuth() {
  const context = useContext(AuthContext);

  // 안전장치: Provider 감싸지 않고 호출하면 에러 발생
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
```

**💡 구현 포인트 (Key Points)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">children 활용</div><div class="wda-fcard-dsc">AuthProvider 컴포넌트는 내부에 들어올 모든 하위 컴포넌트를 children으로 받아서 그대로 렌더링해 줍니다. 이렇게 하면 App.js에서 코드가 깔끔해집니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Custom Hook 패턴 (useAuth)</div><div class="wda-fcard-dsc">매번 useContext(AuthContext)를 import해서 쓰는 것은 귀찮고 코드가 길어집니다.<br>useAuth() 하나만 부르면 되도록 사용 편의성을 높였습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">에러 처리</div><div class="wda-fcard-dsc">실수로 Provider 밖에서 훅을 사용했을 때 명확한 에러 메시지를 띄워 디버깅을 돕습니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>"어떻게 사용하나요?"</strong></p>
</div>

```jsx
// App.js 등에서 사용 시
import { useAuth } from './contexts/AuthContext';

function LoginPage() {
  // useAuth() 한 방으로 모든 기능 가져옴!
  const { login } = useAuth();

  return (
    <button type="button" onClick={() => login({ name: 'Kim' })}>
      로그인
    </button>
  );
}

export default LoginPage;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>이 패턴을 사용하면 컴포넌트들은 "인증 로직이 어떻게 구현됐는지" 알 필요 없이, 그냥 가져다 쓰기만 하면 됩니다.</p>
</div>

---

<h2>9. 인증 상태 사용 (구현)</h2>

**📝 App.jsx : 유효 범위 설정 (Provider)**

**"우리 앱 전체를 '인증 구역'으로 만듭니다."**
우리가 만든 AuthProvider 컴포넌트로 앱의 주요 부분(Header, Main 등)을 감싸줍니다.  
이제 이 내부의 모든 컴포넌트는 로그인 정보를 공유받을 수 있습니다.

```jsx
// App.jsx
import { AuthProvider } from './contexts/AuthContext';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    // 1. Provider로 감싸서 로그인 정보가 흐르게 합니다.
    <AuthProvider>
      <Header />
      <Main />
    </AuthProvider>
  );
}

export default App;
```

**📝 Header.jsx : 상태 사용 (Consumer)**

**"로그인 여부에 따라 화면을 다르게 보여줍니다."**
`useAuth()` 훅을 사용하여 `user` 정보와 `logout` 함수를 꺼내 씁니다.

```jsx
// Header.jsx
import { useAuth } from '../contexts/AuthContext'; // 우리가 만든 커스텀 훅

function Header() {
  // 2. 훅 한 줄로 전역 상태(user)와 기능(logout)을 가져옵니다.
  const { user, logout } = useAuth();

  return (
    <header>
      {/* 3. 조건부 렌더링: 유저 정보가 있으면(로그인 됨) -> 환영 문구 & 로그아웃 버튼 */}
      {user ? (
        <>
          <span>{user.name}님</span>
          <button type="button" onClick={logout}>로그아웃</button>
        </>
      ) : (
        // 4. 유저 정보가 없으면(비로그인) -> 로그인 버튼
        <button type="button">로그인</button>
      )}
    </header>
  );
}

export default Header;
```

**💡 보충 설명**

<div class="wda-callout wda-cs">
  <p><strong>간결함</strong>: Header 컴포넌트는 부모로부터 어떤 props도 받지 않았습니다. 오직 useAuth() 하나로 필요한 모든 것을 해결했습니다.</p>
  <p><strong>반응성</strong>: AuthContext 내부의 user 상태가 바뀌면(로그인/로그아웃), 이를 사용하는 Header도 자동으로 리렌더링되어 UI가 즉시 바뀝니다.</p>
</div>

---

<h2>10. 다중 Context 사용</h2>

**📌 Provider 중첩 (Nesting)**

**"러시아 인형(마트료시카)처럼 감싸줍니다."**
여러 개의 Context를 사용하려면, 최상위 컴포넌트(App)에서 Provider들을 겹겹이 중첩하여 감싸주면 됩니다.

```jsx
// App.jsx
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Router from './Router';

function App() {
  return (
    // 1. 인증(Auth) 상태 공급
    <AuthProvider>
      {/* 2. 테마(Theme) 상태 공급 */}
      <ThemeProvider>
        {/* 3. 언어(Language) 상태 공급 */}
        <LanguageProvider>
          {/* 모든 Context에 접근 가능한 라우터 */}
          <Router />
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
```

**🧩 여러 Context 동시 사용 (Consuming)**

**"필요한 것만 쏙쏙 뽑아 씁니다."**
하위 컴포넌트에서는 필요한 Hook을 각각 호출하여, 여러 Context의 데이터를 한 번에 가져와서 사용할 수 있습니다.

```jsx
// Dashboard.jsx
import { useAuth } from './contexts/AuthContext';
import { useTheme } from './contexts/ThemeContext';
import { useLanguage } from './contexts/LanguageContext';

function Dashboard() {
  // 1. 각기 다른 Context에서 데이터 가져오기
  const { user } = useAuth();         // 인증 정보
  const { theme } = useTheme();       // 테마 정보
  const { language } = useLanguage(); // 언어 설정

  // 3. user가 아직 없을 수 있으므로 null guard 처리
  if (!user) {
    return <p>로그인이 필요합니다.</p>;
  }

  return (
    // 4. 가져온 데이터들을 조합해서 UI 렌더링
    <div className={theme}>
      <h1>
        {language === 'ko' ? '안녕하세요' : 'Hello'}, {user?.name ?? 'Guest'}!
      </h1>
    </div>
  );
}

export default Dashboard;
```

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <p><strong>순서의 중요성</strong>: 대부분의 경우 Provider를 감싸는 순서는 상관없습니다.</p>
  <p><strong>⚠️ 주의할 점 (의존성)</strong>: 만약 ThemeProvider 안에서 user 정보가 필요하다면(예: 유저 설정에 따른 테마), 반드시 데이터를 주는 쪽(AuthProvider)이 더 바깥쪽에 있어야 합니다.</p>
</div>

---

<h2>11. Context 사용 시 주의사항</h2>

**⚠️ 남용 금지**

**"단순한 경우는 Props가 낫습니다."**

```jsx
// ❌ Props로 충분한 경우
function Parent({ data }) {
  return <Child data={data} />; // 1단계면 props OK
}

// ✅ Context가 필요한 경우
// 3단계 이상 + 여러 곳에서 필요
```

**⚠️ 리렌더링 주의**

**"객체 생성에 주의하세요."**

```jsx
import { useMemo } from 'react';

// ❌ 매 렌더링마다 새 객체 (비효율)
<MyContext.Provider value={{ a, b }}>
  <Children />
</MyContext.Provider>

// ✅ useMemo로 최적화 (효율)
const value = useMemo(() => ({ a, b }), [a, b]);

<MyContext.Provider value={value}>
  <Children />
</MyContext.Provider>
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>Provider의 value에 객체를 직접 넣으면 렌더링마다 새 객체가 만들어질 수 있습니다.</p>
  <p>값이 커지거나 하위 소비 컴포넌트가 많아지면 useMemo로 value 객체를 안정화하는 것을 고려할 수 있습니다.</p>
</div>

**🆚 Props vs Context**

**"단순한 배달은 Props가 낫습니다."**
Context는 '전역적'인 데이터를 위한 것입니다.  
단순히 부모-자식 관계라면 Props를 사용하는 것이 데이터 흐름을 추적하기 훨씬 유리합니다.

| 구분 | 단계 (Depth) | 사용 권장 | 이유 |
| --- | --- | --- | --- |
| 단순 전달 | 1 ~ 3단계 | 📦 Props | 코드가 직관적이고 컴포넌트 재사용성이 높음 |
| 전역 공유 | 4단계 이상 | 📡 Context | 중간 컴포넌트의 불필요한 Props 전달(Drilling) 방지 |

---

<h2>12. ⁉️ FAQ</h2>

**📌 Q1. 컴포넌트 이름은?**

**"Context API를 사용할 때, 하위 컴포넌트들에게 값을 제공하기 위해 사용하는 컴포넌트는?"**

**✅ 정답: Provider (또는 Context.Provider)**

**💡 해설**

<div class="wda-callout wda-ci">
  <p><code>createContext</code>로 만든 Context 객체에는 <strong>Provider</strong>라는 컴포넌트가 들어있습니다. 이 컴포넌트로 감싸고 <code>value</code> props를 넣어줘야 비로소 내부의 컴포넌트들이 데이터를 구독할 수 있게 됩니다.</p>
</div>

**📌 Q2. Context 사용의 단점은?**

**"Props Drilling 문제를 해결하기 위해 Context를 사용할 때의 단점은 무엇인가요?"**

**✅ 정답: 컴포넌트의 재사용성이 떨어집니다.**

**💡 해설**

<div class="wda-callout wda-ci">
  <p>컴포넌트가 특정 Context에 의존하게 되면, 그 Context가 없는 곳에서는 해당 컴포넌트를 독립적으로 사용하기 어려워집니다. 또한, 값 관리를 잘못하면 불필요한 리렌더링(성능 이슈)이 발생할 수도 있습니다.</p>
</div>

---

<h2>13. ✅ 핵심 요약</h2>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td>⬇️ Props Drilling 해결</td>
    <td><strong>문제</strong>: 깊은 컴포넌트 트리에서 중간 단계들이 불필요하게 props를 계속 전달해야 하는 비효율적인 상황. <strong>해결</strong>: Context API를 사용하면 중간 과정을 건너뛰고 필요한 곳에 데이터를 직송할 수 있습니다.</td>
  </tr>
  <tr>
    <td>🔄 Context 워크플로우 (3단계)</td>
    <td>1. <code>createContext</code>: 방송국(Context) 개설 / 2. <code>Provider</code>: 데이터(Value) 송출 및 제공 / 3. <code>useContext</code>: 필요한 곳에서 데이터 수신 및 사용</td>
  </tr>
  <tr>
    <td>🛠️ Custom Hook 패턴</td>
    <td><code>useAuth</code>, <code>useTheme</code> 처럼 Context 로직을 나만의 훅으로 감싸서 만듭니다. 장점: 컴포넌트 코드가 깔끔해지고, 에러 처리 로직을 한곳에서 관리할 수 있어 안전합니다.</td>
  </tr>
  <tr>
    <td>⚠️ 주의사항 (Caution)</td>
    <td><strong>Props 우선</strong>: 단순한 데이터 전달(2~3단계)에는 여전히 Props가 가장 좋습니다. <strong>최적화 필수</strong>: 객체를 전달할 때는 불필요한 리렌더링을 막기 위해 useMemo 사용이 권장됩니다.</td>
  </tr>
</table>
