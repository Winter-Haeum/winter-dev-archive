---
title: "2-7 조건부 렌더링"
status: "completed"
description: "if문/삼항 연산자/&&/|| 를 활용한 조건부 렌더링 패턴, 로딩·에러·성공 상태 처리, 컴포넌트 조건부 렌더링, null 반환과 Falsy 값 주의사항까지 React 조건부 렌더링의 기초를 정리한다."
category: "React"
section: "Core"
tags:
  - react
  - conditional-rendering
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

## 🎯 학습 목표

<div class="wda-goal">
  <strong>1) 조건부 렌더링 개념</strong> — 조건에 따라 다른 컴포넌트나 요소를 렌더링하는 방법을 이해합니다.<br>
  <strong>2) 다양한 조건부 렌더링 패턴</strong> — if문, 삼항 연산자, && 연산자 등 상황별 패턴을 배웁니다.<br>
  <strong>3) 실전 활용</strong> — 로딩/에러/성공 상태 처리, 권한별 UI 등을 구현합니다.<br>
  <strong>4) 주의사항</strong> — Falsy 값(0) 렌더링 등 흔한 실수를 방지하는 법을 익힙니다.
</div>

---

<h2>1. 조건부 렌더링이란?</h2>

조건에 따라 다른 것을 렌더링

### 1) 개념

- 조건이 **true**면 **A**를 렌더링
- 조건이 **false**면 **B**를 렌더링
- 또는 아무것도 렌더링하지 않음

### 2) 사용 예시

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">로그인 여부에 따른 메뉴</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">데이터 로딩 중 스피너</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">에러 발생 시 에러 메시지</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">관리자 전용 버튼</div>
  </div>
</div>

### 3) 핵심

**React는 JavaScript 표현식을 JSX 안에서 사용할 수 있어서 다양한 조건부 렌더링이 가능합니다.**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>리액트의 조건부 렌더링은 마법 같은 새로운 문법이 아니라, 자바스크립트의 기본 조건문(<code>if</code>, <code>? :</code>, <code>&amp;&amp;</code>)을 그대로 활용한다는 점이 가장 큰 특징입니다.</p>
</div>

---

<h2>2. JSX 밖에서 if문으로 분기하기</h2>

if문은 JSX 중괄호 안에서 직접 사용할 수 없습니다. 대신 컴포넌트 함수 안, return 전에 조건을 검사하고 필요한 JSX를 return합니다.

### 1) JSX 밖에서 조건 처리

```jsx
function Greeting({ isLoggedIn }) {
  // JSX 밖에서 if문 사용 (로그인 여부 확인)
  if (isLoggedIn) {
    return <h1>환영합니다!</h1>; // 참일 경우 이 컴포넌트 반환
  }

  return <h1>로그인해주세요.</h1>; // 거짓일 경우 이 컴포넌트 반환
}

// 사용 예시
<Greeting isLoggedIn={true} />  // "환영합니다!" 출력
<Greeting isLoggedIn={false} /> // "로그인해주세요." 출력
```

### 2) Early Return (조기 리턴)

- 조건을 먼저 체크하고 **빨리 반환**하는 패턴.
- 코드 가독성이 좋아집니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><code>else</code>를 굳이 쓰지 않고, 조건이 맞으면 바로 <code>return</code>을 해버려서 함수를 종료시키는 방식입니다. 불필요한 들여쓰기를 줄여주어 코드가 깔끔해집니다.</p>
</div>

---

<h2>3. ? 삼항 연산자 (? :)</h2>

### 1) JSX 안에서 조건부 렌더링

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {/* isLoggedIn이 참이면 첫 번째, 거짓이면 두 번째 요소 렌더링 */}
      {isLoggedIn ? (
        <h1>환영합니다!</h1>
      ) : (
        <h1>로그인해주세요.</h1>
      )}
    </div>
  );
}
```

### 2) 문법

- `조건` ? `참일때` : `거짓일때`

### 3) 장점

- **JSX 안에서 인라인으로 사용 가능**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>HTML 구조(JSX) 안에서 흐름을 끊지 않고 바로 조건을 걸고 싶을 때 가장 많이 사용되는 패턴입니다.</p>
</div>

---

<h2>4. && 연산자로 조건부 표시</h2>

### 1) 조건이 참일 때만 렌더링

```jsx
function Mailbox({ unreadCount }) {
  return (
    <div>
      <h1>메일함</h1>
      {/* unreadCount가 0보다 클 때만 뒤의 <p>태그가 화면에 나옴 */}
      {unreadCount > 0 && (
        <p>읽지 않은 메일: {unreadCount}개</p>
      )}
    </div>
  );
}

// unreadCount가 0이면 <p>가 렌더링되지 않음
```

### 2) 원리

- `true && X` 는 **X**를 반환
- `false && X` 는 **false**를 반환 (렌더링 안 됨)

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <p>"만약 ~라면 보여줘"라는 상황에 딱 맞습니다. 반대로 "아니라면 보여주지 마(null)"를 굳이 작성할 필요가 없어서 코드가 간결해집니다.<br>단, 숫자 <code>0</code>은 화면에 출력될 수 있으니 조건식 작성 시 주의가 필요합니다.</p>
</div>

---

<h2>5. || 연산자로 기본값 표시</h2>

<div class="wda-callout wda-cy">
  <p><strong>값이 없을 때 대체 내용 표시</strong></p>
</div>

```jsx
function Profile({ user }) {
  return (
    <div>
      {/* user 자체가 undefined일 수 있으므로 ?.로 안전하게 접근 */}
      <h1>{user?.name || '익명 사용자'}</h1>
      <img
        src={user?.avatar || '/default-avatar.png'}
        alt={user?.name || '기본 프로필'}
      />
    </div>
  );
}

// user.name이 빈 문자열이면 '익명 사용자' 표시
```

<div class="wda-callout wda-cy">
  <p><strong>원리:</strong> <code>값</code> || <code>기본값</code> - 값이 falsy면 기본값 사용</p>
</div>

<div class="wda-callout wda-cw">
  <p><code>||</code>는 값이 falsy이면 기본값을 사용합니다. 따라서 <code>''</code>, <code>0</code>, <code>false</code>, <code>null</code>, <code>undefined</code>가 모두 기본값으로 대체될 수 있습니다.<br><code>0</code>이나 <code>false</code>도 의미 있는 값이라면 <code>??</code> 연산자를 사용하는 것이 더 안전합니다.</p>
</div>

```jsx
<p>{count || '없음'}</p>  {/* count가 0이면 '없음' 표시 */}
<p>{count ?? '없음'}</p>  {/* count가 0이면 0 표시 */}
```

**🔎 참고**

<div class="wda-callout wda-ci">
  <p>Nullish Coalescing(<code>??</code>)도 비슷하지만 null/undefined만 체크합니다.</p>
</div>

---

<h2>6. 로딩/에러/성공 상태 처리</h2>

<div class="wda-callout wda-cy">
  <p><strong>실전 패턴: 3가지 상태 분기</strong></p>
</div>

```jsx
function DataDisplay({ isLoading, error, data }) {
  // 로딩 중
  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  // 에러 발생
  if (error) {
    return <p>에러: {error.message}</p>;
  }

  // 데이터가 아직 없음 (isLoading도 false, error도 없는 초기 상태 등)
  if (!data) {
    return <p>데이터가 없습니다.</p>;
  }

  // 성공
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}
```

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">로딩 중</div><div class="wda-sdsc"><code>isLoading</code>이 참이면 로딩 문구를 반환하고 종료</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">에러 발생</div><div class="wda-sdsc"><code>error</code>가 있으면 에러 메시지를 반환하고 종료</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">데이터 없음</div><div class="wda-sdsc"><code>data</code>가 없으면 안내 문구를 반환하고 종료</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody"><div class="wda-sdsc">위 조건에 모두 해당하지 않으면 성공 화면을 렌더링</div></div>
  </div>
</div>

<div class="wda-callout wda-cy">
  <p><strong>Early Return 패턴으로 각 상태를 순차적으로 처리합니다.</strong></p>
</div>

---

<h2>7. 컴포넌트 조건부 렌더링</h2>

<div class="wda-callout wda-cy">
  <p><strong>다른 컴포넌트를 조건에 따라 선택</strong></p>
</div>

아래 예제의 <code>Header</code>, <code>Footer</code>, <code>AdminDashboard</code>, <code>UserDashboard</code>는 이미 만들어져 있다고 가정한 컴포넌트입니다. 실제로 실행하려면 해당 컴포넌트를 먼저 만들거나 import해야 합니다.

### 1) 컴포넌트 변수 할당 방식

```jsx
function Page({ isAdmin }) {
  // 컴포넌트를 변수에 저장
  // isAdmin이 true면 AdminDashboard를, false면 UserDashboard를 Content 변수에 담음
  const Content = isAdmin ? AdminDashboard : UserDashboard;

  return (
    <div>
      <Header />
      {/* 위에서 선택된 컴포넌트를 여기서 렌더링 (대문자로 시작해야 컴포넌트로 인식됨) */}
      <Content /> {/* 조건에 따라 다른 컴포넌트 */}
      <Footer />
    </div>
  );
}
```

<div class="wda-callout wda-cy">
  <p><strong>핵심 원리:</strong> 컴포넌트도 JavaScript 값이므로 변수에 저장하고 조건부로 사용 가능합니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>리액트 컴포넌트는 결국 자바스크립트 함수나 클래스이기 때문에, 변수에 할당해서 사용할 수 있습니다.<br>단, JSX에서 컴포넌트로 사용하려면 <strong>변수 이름이 반드시 대문자</strong>로 시작해야 합니다 (예: <code>content</code> (x) -&gt; <code>Content</code> (o)).</p>
</div>

### 2) 인라인 삼항 연산자 방식

변수에 담지 않고, 삼항 연산자를 JSX 안에 바로 쓸 수도 있습니다.

```jsx
function PageInline({ isAdmin }) {
  return (
    <div>
      {isAdmin ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
}
```

---

<h2>8. null로 아무것도 렌더링하지 않기</h2>

<div class="wda-callout wda-cy">
  <p><strong>조건이 맞지 않으면 숨기기</strong></p>
</div>

### 1) 컴포넌트 숨기기 패턴

```jsx
function WarningBanner({ show, message }) {
  // show가 false면 아무것도 렌더링하지 않음
  if (!show) {
    return null; // 리액트에서 null을 반환하면 화면에 아무것도 그리지 않습니다.
  }

  return (
    <div className="warning">
      {message}
    </div>
  );
}

// 사용 예시
// hasError가 true일 때만 경고창이 보이고, false면 아예 안 보임
<WarningBanner show={hasError} message="에러가 발생했습니다!" />
```

<div class="wda-callout wda-cy">
  <p><strong>핵심 원리:</strong> <code>return null</code>: 컴포넌트가 아무것도 렌더링하지 않음을 명시적으로 표현합니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><code>return null</code>은 해당 컴포넌트의 DOM을 생성하지 않는 방식이고, CSS <code>display: none</code>은 DOM은 유지한 채 화면에서만 숨기는 방식입니다.<br>단순히 조건에 따라 아예 보여줄 필요가 없는 UI라면 <code>return null</code>이 적합하고, DOM 상태를 유지한 채 잠시 숨기고 싶다면 <code>display: none</code>을 사용할 수 있습니다.</p>
</div>

---

<h2>9. ⁉️ FAQ</h2>

### 1) Q1. JSX 내부에서 if-else 구문 대신 조건부 렌더링을 위해 주로 사용하는 자바스크립트 문법은?

**정답**

- **삼항 연산자 (`? :`)**
- **논리 AND 연산자 (`&&`)**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>JSX 내부의 중괄호 <code>{}</code> 안에는 값을 반환하는 <strong>표현식(Expression)</strong>만 들어갈 수 있습니다.<br><code>if-else</code>문은 <strong>문(Statement)</strong>이기 때문에 사용할 수 없으며, 이를 대신해 결과가 값으로 떨어지는 삼항 연산자나 논리 연산자를 사용해야 합니다.</p>
</div>

### 2) Q2. 컴포넌트가 아무것도 렌더링하지 않게 하려면 무엇을 반환해야 하나요?

**정답**

- **`null`**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>JSX 안에서 <code>false</code>, <code>null</code>, <code>undefined</code>는 화면에 표시되지 않습니다.<br>다만 컴포넌트가 아무것도 렌더링하지 않음을 명확히 표현할 때는 <code>return null</code>을 사용하는 것이 가장 안전하고 관례적입니다.</p>
</div>

---

<h2>10. 🔑 핵심 정리</h2>

### 1) Patterns

"언제 무엇을 쓰는가"를 기준으로 정리하면 다음과 같습니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">if문</div>
    <div class="wda-fcard-dsc">로직이 길거나 조건에 따라 완전히 다른 컴포넌트를 반환해야 할 때 주로 사용합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">삼항 연산자</div>
    <div class="wda-fcard-dsc">"로그인 vs 비로그인"처럼 A 아니면 B 중 하나를 반드시 선택해야 할 때 유용합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">&& 연산자</div>
    <div class="wda-fcard-dsc">"읽지 않은 메시지 뱃지"처럼 조건이 맞을 때만 보여주고, 아니면 숨길 때 가장 깔끔합니다.</div>
  </div>
</div>

<div class="wda-callout wda-cy">
  <p><strong>if문은 복잡한 분기에, 삼항 연산자는 둘 중 하나 선택에, &&는 단순 표시 여부에 사용합니다.</strong></p>
</div>

### 2) Early Return

<div class="wda-callout wda-cy">
  <p><strong>복잡한 중첩을 피하기 위해, 예외 케이스나 로딩 상태 등을 함수 상단에서 먼저 반환하여 코드를 깔끔하게 유지합니다.</strong></p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><code>if</code> 안에 <code>else</code>를 쓰고 그 안에 또 <code>if</code>를 쓰는 식의 '깊은 중첩(Nesting)'을 방지합니다. 마치 문지기처럼 로딩이나 에러 상태를 함수 입구에서 미리 처리하고 내보내는 방식이라 코드를 읽기가 훨씬 편해집니다.</p>
</div>

### 3) Caveats

<div class="wda-callout wda-cy">
  <p><strong>숫자 0은 Falsy지만 화면에 "0"으로 출력되므로, <code>count &gt; 0 &amp;&amp; ...</code> 처럼 명시적인 boolean 비교가 필요합니다.</strong></p>
</div>

```jsx
{/* 문제 예시: count가 0이면 화면에 "0"이 그대로 표시됨 */}
{count && <p>{count}개 있습니다.</p>}

{/* 안전한 방식: boolean 비교로 명시 */}
{count > 0 && <p>{count}개 있습니다.</p>}
```

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <p>리액트는 <code>false</code>, <code>null</code>, <code>undefined</code>는 화면에 아무것도 그리지 않지만, 숫자 <code>0</code>은 유효한 텍스트로 인식해 화면에 그대로 보여줍니다. 따라서 숫자를 조건으로 쓸 때는 반드시 <code>0보다 큰가?</code>와 같이 참/거짓이 명확한 비교식을 써야 합니다.</p>
</div>
