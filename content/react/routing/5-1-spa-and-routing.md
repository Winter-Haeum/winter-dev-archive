---
title: "5-1 SPA와 라우팅"
status: "completed"
description: "MPA와 SPA의 차이에서 출발해 react-router-dom 설치, Link·NavLink·useNavigate·useParams·useLocation, Protected Route 패턴까지 React Router의 핵심을 정리한다."
category: "React"
section: "Routing"
tags:
  - react
  - router
  - spa
  - routing
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
  • <strong>SPA 개념 이해</strong> — MPA와 SPA의 차이를 이해하고, 부드러운 화면 전환의 원리를 학습합니다<br>
  • <strong>Router 설정</strong> — react-router-dom을 설치하고 초기 설정을 완료합니다<br>
  • <strong>페이지 이동</strong> — Link 태그와 useNavigate 훅을 사용하여 페이지를 이동합니다<br>
  • <strong>동적 라우팅</strong> — URL 파라미터를 통해 상세 페이지를 구현합니다
</div>

---

<h2>1. SPA란 무엇인가?</h2>

### 1) 기존 MPA 방식 (Multi Page Application)

옛날 웹사이트 방식입니다.

- **작동 방식**: 페이지를 이동할 때마다 서버에서 새로운 HTML을 통째로 받아옵니다.
- **단점**:
  - 화면이 하얗게 깜빡거립니다(새로고침).
  - 매번 모든 데이터를 다시 받으므로 네트워크 낭비가 심합니다.

### 2) React SPA 방식 (Single Page Application)

요즘 웹사이트 방식입니다.

- **작동 방식**: 처음에 접속할 때 딱 한 번만 HTML(껍데기)을 받고, 이후엔 필요한 데이터(JSON)만 주고받습니다.
- **장점**:
  - 화면 전체를 다시 그리지 않고 부분만 갱신합니다.
  - ✨ 앱처럼 부드러운 사용자 경험을 제공합니다.

**💡 핵심 도구 : React Router**

<div class="wda-callout wda-ci">
  <p>"React Router는 이 SPA 라우팅을 표준적으로 구현해주는 라이브러리입니다."</p>
  <p>쉽게 말해, 사용자가 주소창에 URL을 입력하거나 링크를 클릭했을 때,<br>
  서버에 새로 요청하지 않고 리액트가 알아서 화면만 샥- 바꿔주는 기능을 담당합니다.</p>
  <p>앱 내부 이동에서는 새 HTML 문서를 다시 받아오지 않고, 브라우저 주소와 React 화면을 클라이언트에서 변경합니다.<br>
  다만 데이터가 필요한 페이지라면 API 요청은 별도로 발생할 수 있고, 직접 URL로 접근했을 때는 서버가 SPA fallback 설정을 지원해야 합니다.</p>
</div>

---

<h2>2. 설치 및 기본 설정</h2>

### 1) ① 패키지 설치 (Install)

터미널(Terminal)을 열고 아래 명령어를 입력하여 라이브러리를 설치합니다.

```bash
npm install react-router-dom
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>이 문서는 React Router v6 이상에서 사용하는 기본 라우팅 문법을 기준으로 설명합니다.<br>
  프로젝트에 설치된 react-router-dom 버전에 따라 세부 API가 달라질 수 있으므로 공식 문서 기준으로 확인하세요.</p>
</div>

### 2) ② Provider 설정 (Setup)

설치가 끝났으면, 리액트 앱 전체가 라우터의 기능을 사용할 수 있도록 최상위 파일(main.jsx)에서 감싸줘야 합니다.

```jsx
// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. 불러오기
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. 앱 전체를 <BrowserRouter>로 감싸기 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>GitHub Pages처럼 정적 호스팅 환경에서는 BrowserRouter를 사용할 때 하위 경로에서 새로고침하면 404가 날 수 있습니다.<br>
  이 경우 HashRouter를 사용하거나, 404.html fallback 설정을 추가해야 합니다.</p>
</div>

---

<h2>3. 라우트 정의하기 (기본 구조)</h2>

### 1) 코드 작성 (App.jsx)

`<Routes>`라는 큰 울타리 안에 `<Route>` 규칙들을 하나씩 나열하는 방식입니다.

```jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    // 1. 라우트 컨테이너 (규칙들을 감싸는 울타리)
    <Routes>
      {/* 2. 메인 페이지 (주소가 '/' 일 때 Home 컴포넌트 보여줌) */}
      <Route path="/" element={<Home />} />

      {/* 3. 소개 페이지 (주소가 '/about' 일 때 About 컴포넌트 보여줌) */}
      <Route path="/about" element={<About />} />

      {/* 4. 404 페이지 (위의 규칙에 없는 모든 경로는 여기로) */}
      <Route path="*" element={<div>페이지 없음</div>} />
    </Routes>
  );
}

export default App;
```

### 2) 핵심 속성

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">&lt;Routes&gt;</div><div class="wda-fcard-dsc">여러 규칙 중 현재 URL과 일치하는 단 하나만 렌더링하도록 도와주는 컨테이너입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">&lt;Route&gt;</div><div class="wda-fcard-dsc">실제 규칙입니다. path: 브라우저 주소창의 경로입니다. (/, /about 등) / element: 해당 경로일 때 보여줄 컴포넌트(화면)입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">path="*" (와일드카드)</div><div class="wda-fcard-dsc">"그 외 모든 경로"를 의미합니다. 사용자가 없는 페이지로 접근했을 때 404 에러 페이지를 보여주기 위해 사용합니다.</div></div>
</div>

---

<h2>4. 페이지 이동 (Link vs a)</h2>

### 1) ❌ &lt;a href="..."&gt; (쓰지 마세요)

일반적인 HTML 방식입니다. 리액트 앱 내부 이동 시에는 절대 사용하면 안 됩니다.

- **치명적 단점**: 브라우저가 새로고침(Refresh) 됩니다. 즉, 앱이 꺼졌다가 다시 켜지는 것과 같습니다.
- **데이터 증발**: 메모리에 있던 React 상태(State)가 모두 초기화되어 사라집니다.
- **용도**: 우리 앱이 아닌 외부 사이트 (예: 구글, 네이버)로 이동할 때만 사용하세요.

**✅ 권장 방식**

<div class="wda-callout wda-cw">
  <p>React 앱 내부의 라우트 이동에는 보통 Link를 사용합니다.<br>
  외부 사이트 이동, 파일 다운로드, 새 탭 열기처럼 브라우저 기본 동작이 필요한 경우에는 a 태그를 사용합니다.</p>
</div>

### 2) ✅ &lt;Link to="..."&gt; (이걸 쓰세요)

리액트 라우터가 제공하는 전용 컴포넌트입니다.

- **작동 원리**: 브라우저의 History API를 사용하여 주소만 살짝 바꿉니다.
- **장점**: 새로고침 없이 필요한 부분만 부드럽게 렌더링됩니다. (깜빡임 없음!)
- **용도**: 앱 내부에서 페이지를 이동할 때는 무조건 이것을 사용해야 합니다.

**📝 사용법 (Code)**

`href` 대신 `to` 속성을 사용한다는 점만 기억하세요!

```jsx
import { Link } from 'react-router-dom';

// ❌ 나쁜 예 (새로고침 발생)
// <a href="/about">소개 페이지</a>

// ✅ 좋은 예 (부드러운 이동)
<Link to="/about">소개 페이지로 이동</Link>
```

---

<h2>5. Hooks: 이동과 파라미터</h2>

### 1) useNavigate (강제 이동)

사용자가 Link를 클릭하지 않아도, 함수 안에서 코드로 페이지를 이동시킬 때 사용합니다.

- **언제 쓰나요?**: 로그인 성공 후 메인으로 보낼 때, 결제 완료 후 결과 페이지로 보낼 때 등.
- **사용법**

```jsx
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 성공 후 메인 페이지로 이동
    navigate('/');
  };

  return (
    <button type="button" onClick={handleLogin}>
      로그인
    </button>
  );
}

export default LoginButton;
```

### 2) 🆔 useParams (정보 꺼내기)

URL 주소에 포함된 변수(Parameter) 값을 가져올 때 사용합니다.

- **상황**: 상품 상세 페이지처럼 주소가 `/products/123` 형태로 바뀔 때, 저 숫자 123이 무엇인지 알아내야 할 때 씁니다.
- **전제 조건**: Route 설정에서 `path="/products/:id"` 처럼 콜론(:)을 써서 정의해 둬야 합니다.
- **사용법**:

```jsx
import { useParams } from 'react-router-dom';

function ProductDetail() {
  // URL이 '/products/123' 이라면 -> id는 '123'이 됨
  const { id } = useParams();

  return <div>상품 번호: {id}</div>;
}

export default ProductDetail;
```

---

<h2>6. 특수 링크 (NavLink)</h2>

### 1) NavLink란?

Link와 똑같지만, "현재 내가 이 경로에 있는지"를 알고 있습니다. 주로 네비게이션 바(GNB) 메뉴를 만들 때 사용합니다.

- **isActive**: 현재 경로와 일치하면 true를 반환합니다.
- **isPending**: 라우팅 이동 중이면 true를 반환합니다.

**✅ 권장 방식**

<div class="wda-callout wda-cw">
  <p>NavLink에서 가장 자주 사용하는 값은 isActive입니다.<br>
  isPending은 Data Router 기반 라우팅에서 이동이 진행 중일 때 활용할 수 있는 값입니다. 입문 단계에서는 현재 경로를 강조하는 isActive 사용법을 먼저 익히면 됩니다.</p>
</div>

**📝 사용법 (Style 적용)**

조건부 스타일링을 통해 현재 사용자가 머물고 있는 페이지의 메뉴를 강조(Highlight)할 때 유용하게 사용할 수 있습니다.

```jsx
// react-router-dom에서 NavLink를 불러옵니다.
import { NavLink } from 'react-router-dom';

<NavLink
  to="/about"
  // className에 함수를 전달하여 isActive 상태에 따라 스타일을 다르게 적용합니다.
  className={({ isActive }) =>
    isActive ? 'text-blue-500 font-bold' : 'text-gray-500'
  }
>
  소개
</NavLink>
```

### 3) 실행 예시 (GNB 동작 화면)

위의 코드를 적용하여 현재 사용자가 '소개(/about)' 페이지에 위치해 있을 때의 UI 예시입니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-dsc">홈 (isActive: false)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-dsc">👉 소개 (isActive: true) — 현재 위치한 메뉴로, 텍스트가 파란색으로 굵게 강조됨</div></div>
  <div class="wda-fcard"><div class="wda-fcard-dsc">로그인 (isActive: false)</div></div>
</div>

**💡 보충 설명 (Tip)**

<div class="wda-callout wda-ci">
  <p><strong>일반 Link와의 차이점</strong>: Link 컴포넌트는 단순히 페이지를 이동시키는 역할만 하지만,<br>
  NavLink는 자체적으로 현재 URL과 자신의 to 속성 경로가 일치하는지(isActive) 확인하는 기능을 내장하고 있어 네비게이션 메뉴 구현에 최적화되어 있습니다.</p>
  <p><strong>스타일링 방식</strong>: Tailwind CSS나 styled-components 등 사용하는 스타일링 도구에 맞춰 isActive 상태를 넘겨주어 자유롭게 디자인할 수 있습니다.<br>
  위 예시 코드는 Tailwind CSS 클래스명을 사용한 조건부 렌더링 방식입니다.</p>
</div>

---

<h2>7. Hooks: 이동과 정보</h2>

### 1) useNavigate (Action)

페이지를 이동시키는 함수를 반환합니다.

```jsx
// react-router-dom에서 useNavigate를 불러와 사용합니다.
import { useNavigate } from 'react-router-dom';

function NavigationExample() {
  const navigate = useNavigate();

  const goHome = () => {
    // 이동 (특정 경로로 이동)
    navigate('/home');
  };

  const goBack = () => {
    // 뒤로가기 (이전 페이지로 이동)
    navigate(-1);
  };

  const replaceToHome = () => {
    // 덮어쓰기 (History X: 브라우저 방문 기록에 남기지 않고 이동)
    navigate('/', { replace: true });
  };

  return (
    <div>
      <button type="button" onClick={goHome}>홈으로 이동</button>
      <button type="button" onClick={goBack}>뒤로가기</button>
      <button type="button" onClick={replaceToHome}>홈으로 교체 이동</button>
    </div>
  );
}

export default NavigationExample;
```

### 2) useLocation (State)

현재 페이지의 정보 객체를 반환합니다.

```jsx
// react-router-dom에서 useLocation을 불러와 사용합니다.
import { useLocation } from 'react-router-dom';

function LocationInfo() {
  const location = useLocation();

  // 현재 주소 예시: /search?q=abc#top
  console.log(location.pathname); // "/search"
  console.log(location.search); // "?q=abc"
  console.log(location.hash); // "#top"
  console.log(location.state); // { data: ... }

  return <p>현재 경로: {location.pathname}</p>;
}

export default LocationInfo;
```

### 3) Location 객체 상세 (console.log 결과)

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">pathname</div><div class="wda-fcard-dsc">"/todo" (경로)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">search</div><div class="wda-fcard-dsc">"?sort=asc" (쿼리스트링)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">hash</div><div class="wda-fcard-dsc">"#bottom" (해시)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">state</div><div class="wda-fcard-dsc">null (임시 데이터)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">key</div><div class="wda-fcard-dsc">"default" (고유 ID)</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>useNavigate 활용</strong>: 단순히 링크를 클릭해서 이동하는 &lt;Link&gt;와 달리,<br>
  폼 제출 후 이동하거나 로그인 성공 시 특정 페이지로 리다이렉트 하는 등 '특정 이벤트나 조건'이 발생했을 때 프로그래밍 방식으로 페이지를 이동시킬 때 매우 유용합니다.</p>
  <p><strong>useLocation 활용</strong>: 현재 URL의 상태 정보를 담고 있습니다.<br>
  특히 search를 통해 쿼리스트링 파라미터를 읽어오거나, 이전 페이지에서 navigate를 통해 넘겨준 state 임시 데이터를 받아와 화면에 띄워줄 때 자주 사용합니다.</p>
</div>

---

<h2>8. URL 파라미터 (useParams)</h2>

### 1) 동적 라우팅이란?

- URL의 특정 부분을 변수처럼 사용하는 기능입니다.
- 주로 ID값이나 식별자를 전달할 때 사용합니다.

**Route 정의**

```jsx
<Route path="/product/:id" element={<ProductDetail />} />
```

**실제 URL**: `/product/12345`

**📝 useParams 사용법**

```jsx
import { useParams } from 'react-router-dom';

function ProductDetail() {
  // URL의 :id 부분이 여기로 들어옵니다
  const { id } = useParams();

  return (
    <div>
      <h2>상품 상세 페이지</h2>
      <p>상품 번호: {id}</p>
    </div>
  );
}

export default ProductDetail;
```

**💡 보충 설명 (Tip)**

<div class="wda-callout wda-ci">
  <p><strong>동적 라우팅의 필요성</strong>: 쇼핑몰에 1만 개의 상품이 있다고 가정했을 때, 1만 개의 상세 페이지 라우트(Route)를 일일이 만드는 것은 불가능합니다.<br>
  이때 <code>path="/product/:id"</code> 처럼 경로에 콜론(:)을 붙여주면, <code>/product/1</code>, <code>/product/2</code> 등 어떤 숫자가 들어와도 하나의 컴포넌트(ProductDetail)로 연결해 줄 수 있습니다.</p>
  <p><strong>데이터 패칭(Data Fetching)</strong>: useParams를 통해 추출한 식별자(id)를 활용하여, 서버에 "이 ID에 해당하는 상품 데이터를 줘!"라고 요청(API Call)할 때 주로 사용합니다.</p>
</div>

---

<h2>9. History API와 리다이렉트</h2>

### 1) 이동 기록 제어 (History Stack)

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">PUSH (기본값)</div><div class="wda-fcard-dsc">새로운 페이지를 스택에 쌓습니다. 뒤로가기가 가능합니다.<br><code>navigate('/home')</code></div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">REPLACE</div><div class="wda-fcard-dsc">현재 페이지를 덮어씁니다. 뒤로가기가 불가능합니다.<br><code>navigate('/home', { replace: true })</code></div></div>
</div>

### 2) 리다이렉트 (Redirect)

특정 조건(로그인 안 함, 권한 없음)일 때 강제로 페이지를 보냅니다.

```jsx
import { Navigate } from 'react-router-dom';

function MyPage() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    // 렌더링 도중에 리다이렉트
    // replace를 붙여 이전 페이지(MyPage) 기록을 지우고 login 페이지로 덮어씌웁니다.
    return <Navigate to="/login" replace />;
  }

  return <h1>환영합니다!</h1>;
}

export default MyPage;
```

**💡 보충 설명 (Tip)**

<div class="wda-callout wda-ci">
  <p><strong>useNavigate vs &lt;Navigate /&gt;</strong>: useNavigate 훅은 주로 버튼 클릭이나 폼 전송 같은 이벤트가 발생했을 때 특정 동작을 수행하고 이동시킬 때 사용합니다.<br>
  &lt;Navigate /&gt; 컴포넌트는 위 코드처럼 화면을 그리는(렌더링) 시점에 "어? 로그인 안 했네? 바로 돌아가!" 하고 조건부로 튕겨내야 할 때(보호된 라우트 등) 아주 유용합니다.</p>
  <p><strong>replace 속성이 중요한 이유</strong>: 만약 비로그인 사용자가 마이페이지에 접근해서 강제로 로그인 페이지로 이동되었을 때, replace를 쓰지 않고 기본값(push)으로 두면 사용자가 '뒤로 가기' 버튼을 눌렀을 때 다시 마이페이지로 갔다가 또 튕겨 나오는 불편한 상황을 겪게 됩니다.<br>
  replace는 이럴 때 방문 기록을 덮어써서 사용성을 매끄럽게 만들어 줍니다.</p>
</div>

---

<h2>10. Protected Route 패턴</h2>

### 1) Protected Route란?

- 로그인한 사용자만 접근할 수 있는 페이지를 만드는 일반적인 패턴입니다.

### 2) ProtectedRoute.jsx 파일

```jsx
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ user }) => {
  if (!user) {
    // 1. 로그인이 안 되어 있으면
    // 로그인 페이지로 튕겨냄 (기록 X)
    return <Navigate to="/login" replace />;
  }

  // 2. 로그인이 되어 있으면
  // 자식 라우트(Outlet)를 보여줌
  return <Outlet />;
};

export default ProtectedRoute;
```

### 3) App.jsx (적용)

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />

  {/* 보호된 라우트 그룹 */}
  <Route element={<ProtectedRoute user={user} />}>
    <Route path="/mypage" element={<MyPage />} />
    <Route path="/settings" element={<Settings />} />
  </Route>
</Routes>
```

**💡 보충 설명 (Tip)**

<div class="wda-callout wda-ci">
  <p><strong>Outlet의 역할</strong>: React Router에서 중첩 라우팅을 할 때 자식 컴포넌트가 그려질 자리를 마련해 주는 컴포넌트입니다.<br>
  위 코드에서는 인증에 성공하면 &lt;Outlet /&gt;을 반환하여 내부에 있는 MyPage나 Settings 컴포넌트가 화면에 정상적으로 렌더링 되도록 돕습니다.</p>
  <p><strong>라우트 그룹화의 장점</strong>: 보호해야 할 페이지가 많아져도 각 컴포넌트마다 권한 체크 로직을 넣을 필요가 없습니다.<br>
  <code>&lt;Route element={&lt;ProtectedRoute /&gt;}&gt;</code> 내부에 자식 라우트로 감싸주기만 하면, 한 번에 묶어서 안전하게 접근 권한을 제어할 수 있어 코드가 훨씬 깔끔해집니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <p>여기서 user는 로그인 상태를 나타내는 값입니다. 실제 프로젝트에서는 useState, Context API, Redux/Zustand 같은 전역 상태에서 가져올 수 있습니다.</p>
</div>

---

<h2>11. 유용한 내비게이션 패턴: 뒤로가기</h2>

사용자 편의를 위해 브라우저 뒤로가기 대신 버튼을 제공할 수 있습니다.

### 1) 이전 페이지로 이동 (-1)

- useNavigate 훅으로 받은 navigate 함수에 -1을 전달하면 히스토리 스택의 바로 이전 페이지로 이동합니다. navigate(1)은 앞으로가기, navigate(-1)은 뒤로가기입니다.

### 2) BackButton.jsx (코드 적용)

```jsx
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1); // 👈 뒤로가기 핵심!

  return (
    <button type="button" onClick={handleGoBack}>
      뒤로가기
    </button>
  );
};

export default BackButton;
```

### 3) 활용 예시 및 알아두면 좋은 Tip

- **활용 예시**: 상세 페이지 하단에 '&lt;- 뒤로가기' 버튼을 배치하여, 클릭 시 이전 목록 페이지로 복귀하도록 구현할 수 있습니다.
- **Tip**: 왜 함수 이름이 navigate인가요?
  - `navigate(-2)`, `navigate(-3)`을 넣으면 그만큼 전 단계로 이동합니다.
  - v5의 `history.push()`, `history.goBack()` 등이 v6에서 모두 `navigate()` 하나로 통합되었습니다.

**💡 보충 설명 (Tip)**

<div class="wda-callout wda-ci">
  <p><strong>커스텀 뒤로가기 버튼의 장점</strong>: 모바일 웹이나 앱 같은 환경에서는 사용자가 브라우저의 기본 뒤로가기 버튼을 찾기 어려울 수 있습니다.<br>
  화면 내에 직관적인 UI로 뒤로가기 버튼을 제공하면 사용자 경험(UX)이 훨씬 매끄러워집니다.</p>
  <p><strong>-2, -3 활용법</strong>: 결제 과정이나 다단계 폼(Multi-step form)을 작성하다가 "취소하고 처음으로 돌아가기" 같은 버튼을 만들 때 유용하게 쓰일 수 있습니다.</p>
</div>

---

<h2>12. 💻 실습 : 라우팅 체험</h2>

**🎯 Mission**

- 상단 메뉴바(Link 역할)를 만듭니다.
- 클릭 시 Route 영역의 내용이 바뀌는지 확인합니다.
- 새로고침 없이 내용만 교체되는 SPA 경험하기

<div class="wda-callout wda-cb">
  <p><strong>[체크 포인트]</strong></p>
  <ul>
    <li>브라우저 주소창의 URL이 바뀌나요? ( / ↔ /about )</li>
    <li>화면이 깜빡임 없이 부드럽게 전환되나요? (네트워크 탭 확인)</li>
    <li>&lt;a&gt; 태그 대신 &lt;Link&gt; 컴포넌트를 사용했나요?</li>
  </ul>
</div>

**✅ 결과 예시**

- 현재 경로: `/`
- 메뉴바 형태: Home, About
- 화면 출력: 메인 페이지 (환영합니다!)

**📝 정답 코드**

**1. Provider 설정 (main.jsx)**

앱의 최상위(Root)를 `BrowserRouter`로 감싸야 합니다.

```jsx
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  // 최상위 앱 전체에 라우팅 기능 부여
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

**2. 라우터 정의 (App.jsx)**

`Routes` 안에 `Route`를 배치하고, 이동은 `Link`를 씁니다.

```jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
      <nav>
        {/* a 태그 대신 Link 사용 (페이지 새로고침 방지) */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      {/* 현재 주소에 맞는 컴포넌트를 끼워 넣는 영역 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>React Router를 활용하는 가장 큰 목적은 사용자에게 화면의 깜빡임이 없는 쾌적한 SPA(Single Page Application) 경험을 제공하기 위함입니다.<br>
  전통적인 방식인 &lt;a&gt; 태그는 클릭할 때마다 HTML과 리소스를 서버에서 통째로 다시 받아오기 때문에 화면이 하얗게 깜빡이게 됩니다.</p>
  <p>하지만, 위 실습처럼 &lt;Link&gt; 컴포넌트를 사용하면 브라우저 주소창의 텍스트(URL)만 업데이트하고,<br>
  해당 경로에 매칭되는 &lt;Route&gt;의 컴포넌트만 즉각적으로 부분 교체하여 매우 부드러운 화면 전환을 만들어냅니다.</p>
</div>

---

<h2>13. ✅ 핵심 요약</h2>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td>SPA Experience</td>
    <td>Router를 통해 새로고침 없는 부드러운 전환을 구현합니다. UX를 극대화하는 핵심 기술입니다.</td>
  </tr>
  <tr>
    <td>Routes &amp; Route</td>
    <td>URL 경로(path)와 컴포넌트(element)를 매핑합니다. 최상위엔 BrowserRouter가 필수입니다.</td>
  </tr>
  <tr>
    <td>Link &amp; Hooks</td>
    <td>이동은 Link, 로직 이동은 useNavigate, 파라미터는 useParams를 사용합니다.</td>
  </tr>
</table>

**💡 보충 설명 (Tip)**

<div class="wda-callout wda-ci">
  <p><strong>SPA (Single Page Application)</strong>: React Router를 사용하는 근본적인 이유입니다.<br>
  뼈대가 되는 하나의 HTML 페이지 위에서 자바스크립트가 필요한 컴포넌트만 동적으로 갈아 끼워, 사용자에게 마치 앱을 사용하는 듯한 빠르고 쾌적한 경험(UX)을 제공합니다.</p>
  <p><strong>구조적 설계</strong>: &lt;BrowserRouter&gt;로 앱 전체의 라우팅 환경을 열어주고,<br>
  그 안에서 &lt;Routes&gt;와 &lt;Route&gt;를 통해 "어떤 주소일 때 어떤 화면(컴포넌트)을 보여줄지" 짝을 지어주는(매핑) 규칙을 세우는 것이 라우팅의 기본입니다.</p>
  <p><strong>상황에 맞는 도구 선택</strong>: 단순한 네비게이션(클릭 시 이동) ➡️ &lt;Link&gt; (또는 &lt;NavLink&gt;) / 폼 제출 후, 로그인 성공 후 등 특정 로직 실행 후 이동 ➡️ useNavigate() / URL에 포함된 동적인 데이터(id 등)를 읽어올 때 ➡️ useParams()</p>
</div>
