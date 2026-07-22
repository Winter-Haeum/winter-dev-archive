---
title: "2-2 컴포넌트 만들기"
status: "completed"
description: "컴포넌트 파일 분리, export/import, 컴포넌트 사용법과 네이밍 규칙, 컴포넌트 조합까지 React 컴포넌트의 기초를 정리한다."
category: "React"
section: "Core"
tags:
  - react
  - components
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

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>컴포넌트 이해하기</strong> — 컴포넌트가 무엇이고 왜 필요한지 설명할 수 있습니다.<br>
  • <strong>함수 컴포넌트 만들기</strong> — 함수 컴포넌트를 직접 작성할 수 있습니다.<br>
  • <strong>파일 분리하기</strong> — 컴포넌트를 별도 파일로 분리하고 import할 수 있습니다.<br>
  • <strong>컴포넌트 조합하기</strong> — 여러 컴포넌트를 조합해 페이지를 구성할 수 있습니다.
</div>

---

<h2>1. 컴포넌트 파일 분리하기</h2>

모든 코드를 `App.jsx` 하나에 다 넣으면 관리가 힘듭니다. 컴포넌트는 각각의 파일로 분리해서 정리하는 것이 좋습니다.

**📁 폴더 구조 (Folder Structure)**

보통 `src` 폴더 안에 `components` 폴더를 만들어서 컴포넌트 파일들을 모아둡니다.

```text
src/
├── components/      (폴더 생성)
│   ├── Header.jsx
│   ├── Card.jsx
│   └── Footer.jsx
├── App.jsx
└── main.jsx
```
<p style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:640px;">[그림] 컴포넌트 폴더 구조</p>

**📝 파일 작성법 (Header.jsx)**

컴포넌트 파일명은 컴포넌트 이름과 동일하게 맞추는 것이 **관례**입니다.  
반드시 그래야만 실행되는 것은 아니지만, 유지보수와 자동완성, 파일 찾기를 쉽게 하기 위해 이름을 맞추는 것이 좋습니다.  
그리고 마지막에 `export default`를 해줘야 다른 파일에서 가져다 쓸 수 있습니다.

```jsx
// src/components/Header.jsx

function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>메뉴</nav>
    </header>
  );
}

// 중요: 이 컴포넌트를 밖으로 내보냅니다.
export default Header;
```

**📏 파일명 규칙**

<div class="wda-callout wda-ci">
  <strong>파일명 = 컴포넌트 이름</strong>
  <p>헷갈리지 않도록 이름을 통일해야 합니다.</p>
  <ul>
    <li>컴포넌트 이름: <code>Header</code></li>
    <li>파일 이름: <code>Header.jsx</code></li>
  </ul>
</div>

---

<h2>2. 💻 실습1 : 첫 컴포넌트 만들기</h2>

이전에 만든 `react-study` 프로젝트에서 계속 진행합니다. 코드를 정리하기 위해 폴더를 나누고 첫 번째 컴포넌트 파일을 만들어봅니다.

**🎯 Mission**

`src` 폴더 안에서 다음 단계를 수행하세요.

1. **폴더 생성:** `components` 라는 이름의 새 폴더를 만드세요. (이미 있다면 패스)
2. **파일 생성:** 그 안에 `Button.jsx` 파일을 만드세요. ⚠️ **주의:** 파일명 첫 글자는 반드시 **대문자**여야 합니다. (`button.jsx` (x) → `Button.jsx` (o))
3. **코드 작성:** 아래 예제 코드를 작성하고 저장하세요.

**📝 예제 코드 (Button.jsx)**

새로 만든 `src/components/Button.jsx` 파일에 작성할 내용입니다.

```jsx
function Button() {
  return (
    <button>클릭하세요</button>
  );
}

// 이 컴포넌트를 밖에서 쓸 수 있게 내보냅니다.
export default Button;
```

<div class="wda-callout wda-cw">
  <strong>Button과 button은 다릅니다</strong>
  <p><code>Button</code>은 우리가 만든 React 컴포넌트이고, <code>button</code>은 브라우저가 기본으로 아는 HTML 태그입니다.<br>대문자 <code>Button</code>과 소문자 <code>button</code>은 React에서 완전히 다르게 해석됩니다.</p>
</div>

**✅ 결과 예시**

**아직 화면에는 아무것도 나오지 않습니다.** 이유: 부품(Button)을 만들기만 했고, 메인 화면(App.jsx)에 조립하지 않았기 때문입니다. 에러가 안 나면 성공입니다.

**📝 정답 코드**

위의 예제 코드가 곧 정답입니다. `export default Button;`을 빠뜨리지 않도록 주의하세요.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>파일명 대소문자 규칙 (PascalCase)</strong>
  <p>리액트 컴포넌트 파일은 항상 <strong>대문자로 시작</strong>해야 합니다.</p>
  <ul>
    <li><code>header.jsx</code> (X) → 일반 자바스크립트 파일로 오해할 수 있음</li>
    <li><code>Header.jsx</code> (O) → 사람이 보기에 컴포넌트 파일임을 바로 알 수 있음</li>
  </ul>
  <p>React가 컴포넌트로 인식하는 기준은 파일명이 아니라 JSX에서 사용하는 태그 이름이 대문자로 시작하는지입니다.<br>다만 파일명도 <code>Header.jsx</code>처럼 대문자로 맞추면 사람이 보기 쉽고, 컴포넌트 파일이라는 점을 빠르게 알 수 있습니다.</p>
</div>

---

<h2>3. export와 import (내보내기/가져오기)</h2>

파일을 분리했으면 서로 연결해야 합니다. 이때 사용하는 방식은 크게 '기본(default)'과 **'이름(named)'** 두 가지가 있습니다.

**📝 default export (기본 내보내기)**

**컴포넌트**를 내보낼 때 주로 사용합니다. 파일당 **단 하나**만 내보낼 수 있습니다.

- **특징:** default export는 import할 때 이름을 바꿔 가져올 수 있습니다.  
  하지만 컴포넌트는 파일명과 컴포넌트명을 맞춰 사용하는 것이 관례이므로, 특별한 이유가 없다면 `Header`는 `Header`라는 이름으로 가져오는 것이 좋습니다.
- **코드 예시:**

```jsx
// 1. 내보낼 때 (Header.jsx)
function Header() { ... }
export default Header; // 파일의 '대표'로 내보냄

// 2. 가져올 때 (App.jsx)
// 이름을 Header라고 써도 되고, MyHeader라고 바꿔도 됨 (중괄호 없음!)
import Header from './components/Header';
import MyHeader from './components/Header';
```

**📝 named export (이름 내보내기)**

**유틸리티 함수**나 **상수**처럼 여러 개를 내보낼 때 사용합니다.

- **특징:** named export는 기본적으로 내보낸 이름과 같은 이름으로 가져와야 합니다. 가져올 때(import) 중괄호 `{ }`를 써야 하며, 이름을 바꾸고 싶다면 `as` 키워드를 사용합니다. (예: `import { formatDate as format } from './utils';`)
- **코드 예시:**

```javascript
// 1. 내보낼 때 (utils.js)
// 각각 앞에 export를 붙임
export function formatDate(date) { ... }
export const API_URL = 'https://...';

// 2. 가져올 때 (App.jsx)
// 중괄호 필수! 이름을 바꾸고 싶다면 as 키워드 사용
import { formatDate, API_URL } from './utils';
import { formatDate as format } from './utils';
```

**🧭 선택 가이드**

<div class="wda-callout wda-cs">
  <strong>언제 무엇을 쓰나요?</strong>
  <ul>
    <li><strong>컴포넌트 (<code>Button.jsx</code>):</strong> 주로 <code>export default</code>를 사용합니다. (하나의 파일 = 하나의 부품)</li>
    <li><strong>도구 함수 (<code>utils.js</code>):</strong> 여러 함수가 들어있으므로 <code>named export</code>를 사용합니다.</li>
  </ul>
</div>

---

<h2>4. 💻 실습2 : 컴포넌트 분리하기</h2>

혼잡한 `App.jsx`를 정리하는 시간입니다. 새로운 부품인 `Header`를 만들고, 기존의 `Button`과 함께 조립해 봅니다.

**🎯 Mission**

다음 순서대로 코드를 작성하고 파일을 연결하세요.

1. **Header 만들기:** `src/components` 폴더에 `Header.jsx`를 생성합니다.
2. **App 정리하기:** `App.jsx`에서 `Header`와 `Button`을 모두 불러와(`import`) 화면에 배치합니다.

**✅ 단계별 코드 작성**

**✅ 1단계: Header.jsx 생성**

`src/components/Header.jsx` 파일을 만들고 아래 코드를 작성하세요.

```jsx
// src/components/Header.jsx

function Header() {
  return (
    <header>
      <h1>내 웹사이트</h1>
      <nav>메뉴 1 | 메뉴 2</nav>
    </header>
  );
}

// 만든 부품 내보내기
export default Header;
```

**✅ 2단계: App.jsx에서 사용**

`App.jsx` 파일을 열고, 위에서 만든 `Header`와 이전에 만든 `Button`을 가져와 조립하세요.

```jsx
// src/App.jsx

// 1. 컴포넌트 불러오기 (경로 주의!)
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <>
      {/* 2. 컴포넌트 배치하기 */}
      <Header />

      <hr />
      <p>본문 내용입니다.</p>

      {/* 버튼 컴포넌트 재사용 */}
      <Button />
    </>
  );
}

export default App;
```

**✅ 결과 예시**

브라우저를 확인하면 다음과 같이 구성된 화면이 나와야 합니다.

- **상단:** "내 웹사이트" 제목과 메뉴 (Header 컴포넌트)
- **중간:** 구분선과 "본문 내용입니다." 텍스트
- **하단:** "클릭하세요" 버튼 (Button 컴포넌트)

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>경로(Path) 작성법</strong>
  <p><code>import</code> 할 때 파일의 위치를 정확히 알려줘야 합니다.</p>
  <ul>
    <li><code>./</code> : 현재 파일(<code>App.jsx</code>)이 있는 곳과 <strong>같은 폴더</strong> (<code>src</code>)</li>
    <li><code>components/</code> : 그 안에 있는 <code>components</code> 폴더로 들어감</li>
    <li><code>Header</code> : 그 안의 <code>Header.jsx</code> 파일 (.jsx 생략 가능)</li>
  </ul>
</div>

---

<h2>5. 컴포넌트 사용하기</h2>

만든 컴포넌트는 HTML 태그처럼 꺾쇠 괄호 `< >`를 사용하여 화면에 배치합니다.

**📝 사용 규칙 (Rules)**

컴포넌트를 태그로 쓸 때는 내용물(자식 요소)이 있느냐 없느냐에 따라 두 가지 방식이 있습니다.

1. **Self-closing (닫는 태그 생략):** 내용이나 자식 요소가 없을 때 사용합니다. 끝에 슬래시 `/`를 붙여서 한 번에 닫습니다. 예: `<Header />`
2. **열고 닫기:** 안에 다른 내용이나 컴포넌트를 감쌀 때 사용합니다. 예: `<Card>내용</Card>`

**📝 예제 코드 (App.jsx)**

아래 코드는 컴포넌트 사용 방식을 보여주는 **설명용 예시**입니다.  
실제로 실행하려면 `Card.jsx`와 `Footer.jsx` 파일이 먼저 만들어져 있어야 합니다.  
`Header`, `Card`, `Footer`를 불러와서 조립하는 모습을 확인해 보세요.

```jsx
// src/App.jsx

// 1. 사용할 부품(컴포넌트)을 먼저 불러옵니다.
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* 내용물이 없으므로 Self-closing 태그 사용 */}
      <Header />

      <main>
        {/* 컴포넌트는 여러 번 재사용할 수 있습니다 */}
        <Card />
        <Card />
        <Card />
      </main>

      <Footer />
    </>
  );
}

export default App;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>태그 이름의 색깔</strong>
  <p>VS Code 같은 에디터에서 볼 때:</p>
  <ul>
    <li><strong>파란색/하늘색:</strong> <code>div</code>, <code>span</code> 같은 일반 HTML 태그</li>
    <li><strong>녹색/노란색 (대문자):</strong> <code>Header</code>, <code>Card</code> 같은 리액트 컴포넌트</li>
  </ul>
  <p>대문자로 시작해야 컴포넌트로 인식되어 색깔이 다르게 표시됩니다.</p>
</div>

---

<h2>6. 컴포넌트 네이밍 규칙</h2>

React 컴포넌트 이름은 반드시 **대문자로 시작하는 PascalCase**로 작성해야 합니다.

**🆚 대소문자의 차이**

리액트는 태그의 첫 글자를 보고 이것이 HTML 태그인지, 사용자 정의 컴포넌트인지 구분합니다.

- **소문자 시작 (예: `div`, `header`):** 일반 HTML 태그로 인식합니다.
- **대문자 시작 (예: `Header`, `Card`):** React 컴포넌트로 인식합니다.

**🆚 코드 비교**

소문자로 만들면 컴포넌트가 작동하지 않으므로 주의해야 합니다.

```jsx
// ❌ 잘못된 예 (소문자 시작)
// 리액트가 HTML의 <header> 태그로 착각합니다.
function header() {
  return <div>헤더</div>;
}

// ✅ 올바른 예 (대문자 시작)
// 리액트가 "아, 이건 사용자 컴포넌트구나!"라고 인식합니다.
function Header() {
  return <div>헤더</div>;
}
```

**🧪 좋은 이름 예시**

의미를 명확하게 전달하는 단어들의 조합으로 짓는 것이 좋습니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">UserCard</div><div class="wda-fcard-dsc">사용자 정보를 보여주는 카드</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">LoginForm</div><div class="wda-fcard-dsc">로그인 입력 폼</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">ProductList</div><div class="wda-fcard-dsc">상품 목록</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">NavBar</div><div class="wda-fcard-dsc">상단 네비게이션 바</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>파스칼 케이스(PascalCase)란?</strong>
  <p>모든 단어의 첫 글자를 대문자로 쓰는 표기법입니다.</p>
  <ul>
    <li><code>camelCase</code>: <code>userCard</code> (첫 글자 소문자 → 변수, 함수명)</li>
    <li><code>PascalCase</code>: <code>UserCard</code> (첫 글자 대문자 → <strong>컴포넌트명</strong>, 클래스명)</li>
  </ul>
</div>

---

<h2>7. 컴포넌트 조합하기</h2>

컴포넌트 안에 다른 컴포넌트를 넣어 **부모-자식 관계**를 만듭니다. 작은 부품들을 모아 더 큰 부품을 만드는 과정입니다.

**📌 부모-자식 관계 (Parent-Child)**

HTML에서 `<div>` 안에 `<span>`을 넣듯, 리액트에서도 컴포넌트 안에 다른 컴포넌트를 넣을 수 있습니다.

- **부모(Parent):** 감싸는 쪽 (`Card`)
- **자식(Child):** 담기는 쪽 (`CardHeader`, `CardBody` 등)

**📝 예제 코드**

`Card` 컴포넌트가 하위 컴포넌트 3개를 품고 있고, `App`은 완성된 `Card`를 화면에 보여주는 구조입니다.

```jsx
// 1. 중간 부품 (Card.jsx)
// 작은 부품들을 모아서 하나의 카드 형태로 조립합니다.
function Card() {
  return (
    <div className="card">
      <CardHeader /> {/* 자식 1 */}
      <CardBody />   {/* 자식 2 */}
      <CardFooter /> {/* 자식 3 */}
    </div>
  );
}

// 2. 최종 화면 (App.jsx)
// 조립된 Card만 가져다 놓으면 끝납니다.
function App() {
  return (
    <main>
      <Card /> {/* Card가 내부의 자식들을 모두 포함함 */}
    </main>
  );
}
```

**⚙️ 컴포넌트 트리 (Tree)**

컴포넌트들이 연결된 구조를 족보처럼 나타낸 것을 **트리**라고 합니다. 데이터는 이 트리를 타고 위에서 아래로 흐르게 됩니다.

- **구조:** `App` → `Card` → `CardHeader`, `CardBody`, `CardFooter`

<div style="margin:.8rem 0 1.4rem;text-align:center;">
  <div style="display:inline-block;border:1px solid rgba(139,92,246,.3);background:rgba(139,92,246,.06);border-radius:10px;padding:10px 20px;font-size:.85rem;font-weight:700;">App <span style="font-weight:400;opacity:.65;">(최상위 부모)</span></div>
  <div style="font-size:1.1rem;opacity:.5;line-height:1.4;">↓</div>
  <div style="display:inline-block;border:1px solid rgba(139,92,246,.3);background:rgba(139,92,246,.06);border-radius:10px;padding:10px 20px;font-size:.85rem;font-weight:700;">Card <span style="font-weight:400;opacity:.65;">(App의 자식)</span></div>
  <div style="font-size:1.1rem;opacity:.5;line-height:1.4;">↓</div>
  <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
    <div style="border:1px solid rgba(128,128,128,.25);border-radius:10px;padding:8px 14px;font-size:.8rem;font-weight:700;">CardHeader</div>
    <div style="border:1px solid rgba(128,128,128,.25);border-radius:10px;padding:8px 14px;font-size:.8rem;font-weight:700;">CardBody</div>
    <div style="border:1px solid rgba(128,128,128,.25);border-radius:10px;padding:8px 14px;font-size:.8rem;font-weight:700;">CardFooter</div>
  </div>
  <div style="font-size:.75rem;opacity:.6;margin-top:4px;">Card의 자식 3개</div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>조립의 장점</strong>
  <p><code>App.jsx</code>가 매우 깔끔해집니다. 만약 <code>Card</code> 내부 코드를 <code>App</code>에 다 적었다면 코드가 엄청나게 길어졌을 것입니다. 복잡한 UI를 작은 단위로 쪼개서 관리할 수 있는 것이 리액트의 가장 큰 장점입니다.</p>
</div>

---

<h2>8. 💻 실습3 : 레이아웃 조립하기</h2>

Header, Button에 이어 Footer까지 만들고, 이들을 조합해 전체 페이지의 구조(Layout)를 잡아봅니다.

**🎯 Mission**

다음 2단계에 걸쳐 미션을 수행하세요.

1. **Footer 만들기 (DIY):** `src/components` 폴더에 `Footer.jsx`를 직접 생성하세요. `<footer>Copyright 2024</footer>`를 반환해야 합니다. 마지막에 `export default Footer`로 내보내는 것을 잊지 마세요.
2. **App 완성하기:** 방금 만든 `Footer`와 기존 `Header`, `Button`을 모두 불러오세요(`import`). 제시된 구조대로 `App.jsx`를 작성하여 화면을 완성하세요.

**📝 예제 코드 (App.jsx 구조)**

`App.jsx` 작성 시 아래 구조를 참고하여 빈칸을 채우거나 코드를 완성해 보세요.

아래 코드는 빈칸 채우기용 예시입니다. 그대로 실행하지 말고 `???` 부분을 `Footer`로 바꿔주세요.

```jsx
// 1. 필요한 부품들을 가져오기
import Header from './components/Header';
import ??? from './components/Footer'; // Footer 가져오기
import Button from './components/Button';

function App() {
  return (
    <>
      <Header />

      {/* 2. 본문 영역 (스타일: 패딩 20px) */}
      <main style={{ padding: '20px' }}>
        <h2>환영합니다!</h2>
        {/* 버튼 2개 배치 */}
        <Button />
        <Button />
      </main>

      {/* 3. 하단 영역 */}
      <Footer />
    </>
  );
}

export default App;
```

**✅ 결과 예시**

브라우저 화면이 아래 순서대로 배치되어야 성공입니다.

1. **상단:** 내 웹사이트 (Header)
2. **본문:** "환영합니다!" 제목과 버튼 2개 (Main 영역, 여백 있음)
3. **하단:** Copyright 2024 (Footer)

**📝 정답 코드**

작성한 코드와 비교해 보세요.

**Step 1: src/components/Footer.jsx**

```jsx
function Footer() {
  return (
    <footer>Copyright 2024</footer>
  );
}

export default Footer;
```

**Step 2: src/App.jsx**

```jsx
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <h2>환영합니다!</h2>
        <Button />
        <Button />
      </main>
      <Footer />
    </>
  );
}

export default App;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>시맨틱 태그 사용</strong>
  <p><code>div</code>만 쓰는 것보다 의미 있는 태그를 쓰는 것이 좋습니다.</p>
  <ul>
    <li><code>&lt;header&gt;</code>: 머리말</li>
    <li><code>&lt;main&gt;</code>: 본문 (핵심 콘텐츠)</li>
    <li><code>&lt;footer&gt;</code>: 꼬리말 (저작권, 연락처 등)</li>
  </ul>
  <p>이렇게 작성하면 검색엔진(SEO)이나 스크린 리더가 구조를 더 잘 이해할 수 있습니다.</p>
</div>

---

<h2>9. ⁉️ FAQ</h2>

컴포넌트를 만들고 사용할 때 가장 많이 실수하는 두 가지 포인트입니다.

**🧠 Q1. 컴포넌트 이름 규칙**

**Q. React 컴포넌트 이름은 반드시 어떤 케이스로 시작해야 하나요?**

- **A. 정답: PascalCase (대문자로 시작)**
- **이유:** 소문자로 시작하면 리액트가 이를 일반 **HTML 태그(`div`, `span` 등)로 오해**하여 렌더링되지 않거나 오류가 발생합니다.
- 예: `header`(X) → `Header`(O)

**🧠 Q2. 자식 요소가 있는 경우**

**Q. HTML의 `<div class="card">...</div>`와 같이 내용물을 감싸는 가장 유사한 React 컴포넌트 사용 방식은?**

- **A. 정답: `<Card>...</Card>` (열고 닫기)**
- **설명:** 컴포넌트 사이에 다른 내용(자식 요소, children)을 넣으려면, `<Card />` 같은 Self-closing 태그가 아니라 **여는 태그와 닫는 태그를 따로 작성**해야 합니다.
- **참고:** 컴포넌트 태그 사이에 넣은 내용은 나중에 `children`이라는 이름으로 컴포넌트 내부에서 받을 수 있습니다. `children`은 다음 props 챕터에서 자세히 다룹니다.

---

<h2>10. ✅ 핵심 요약</h2>

오늘 배운 **컴포넌트(Component)** 챕터의 3가지 핵심 내용입니다.

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>컴포넌트란</strong></td>
    <td><strong>재사용 가능한 UI 조각</strong>입니다. 레고 블록처럼 조각들을 조합해서 하나의 완성된 페이지를 구성합니다.</td>
  </tr>
  <tr>
    <td><strong>함수 컴포넌트</strong></td>
    <td>JSX를 반환하는 자바스크립트 <strong>함수</strong>입니다.<br>• 이름: 반드시 <strong>PascalCase</strong>(대문자 시작)로 짓습니다.<br>• 관리: <code>export</code>와 <code>import</code>를 사용해 파일을 나누고 연결합니다.</td>
  </tr>
  <tr>
    <td><strong>조합 (Composition)</strong></td>
    <td>컴포넌트 안에 다른 컴포넌트를 넣어 <strong>부모-자식 관계</strong>의 트리 구조(Tree Structure)를 만듭니다.</td>
  </tr>
</table>
