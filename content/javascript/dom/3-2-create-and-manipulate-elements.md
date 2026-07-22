---
title: "3-2 요소를 생성하고 조작하기"
status: "completed"
description: "querySelector 등 요소 선택 5종부터 textContent/innerHTML, 속성·클래스·스타일 조작, 요소 생성·삽입·삭제까지 DOM 조작의 실전 기법을 정리한다."
category: "JavaScript"
section: "DOM"
tags:
  - javascript
  - dom
  - dom-manipulation
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
.wda-fcard-list{list-style:none;padding:0;margin:.4rem 0 0;font-size:.71rem;line-height:1.6;opacity:.75}
.wda-fcard-list li::before{content:"· "}
.wda-fcard-pro{border-left:3px solid rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(245,158,11,.15);color:#f59e0b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px}
.wda-compare-ttl{font-size:.94rem;font-weight:700;margin-bottom:8px}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:4px}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:160px}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>요소 선택</strong> — querySelector 등 5가지 메서드를 익힙니다.<br>
  • <strong>내용 변경</strong> — textContent와 innerHTML의 차이를 이해합니다.<br>
  • <strong>속성과 클래스</strong> — getAttribute, classList 활용법을 익힙니다.<br>
  • <strong>스타일 조작</strong> — style 프로퍼티와 클래스 토글을 다룹니다.<br>
  • <strong>요소 생성 및 조작</strong> — createElement, appendChild 등을 활용합니다.
</div>

---

## 1. 요소 선택이란?

**📌 DOM에서 요소 찾기**

웹페이지를 변경하려면 먼저 변경할 요소를 선택해야 합니다.

```jsx
<div id="message">안녕하세요</div>
<button class="btn">클릭</button>
<p>문단입니다</p>
```

JavaScript로 이 요소들을 선택하면 다음과 같습니다.

```jsx
// id로 선택
const msg = document.getElementById('message');

// class로 선택
const btn = document.querySelector('.btn');

// 태그로 선택
const para = document.querySelector('p');
```

**⚙️ 선택 - 조작 흐름**

**핵심 포인트**

<div class="wda-callout wda-cs">
  <ul>
    <li><strong>선택 없이는 조작 없다!</strong> 모든 DOM 조작은 반드시 "먼저 요소를 찾는" 단계에서 시작됩니다.</li>
  </ul>
</div>

<img src="/images/content/javascript/3-2/javascript-3-2-select-manipulate-flow.webp" alt="선택-조작 흐름 다이어그램" style="display:block;width:100%;max-width:560px;height:auto;border-radius:8px;margin:.6rem auto 1rem;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:560px;">[그림] DOM 선택 - 조작 흐름 (요소 선택 → 내용/속성/스타일 변경, 삭제·이동)</div>

---

## 2. 요소 선택 전략 (Strategy)

우리는 이미 1-3-1(개념편)에서 모든 선택자를 배웠습니다. 실무 전략은 심플합니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">1️⃣</div>
    <div class="wda-fcard-ttl">Rule #1</div>
    <div class="wda-fcard-dsc">"대부분의 일반적인 요소 선택에서는 <code>querySelector</code> / <code>querySelectorAll</code>이 편리한 기본 선택지입니다"<br>ID, Class, Tag 고민할 필요 없습니다. CSS 선택자 하나로 모든 것을 찾을 수 있습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">2️⃣</div>
    <div class="wda-fcard-ttl">Rule #2</div>
    <div class="wda-fcard-dsc">"성능 최적화는 나중에"<br><code>getElementById</code>가 빠르지만, 가독성과 개발 속도가 더 중요합니다.<br>일반적인 웹페이지에서는 선택 메서드 간 성능 차이를 체감하기 어렵기 때문에, 처음에는 가독성과 유지보수성을 우선하는 것이 좋습니다.</div>
  </div>
</div>

**🧪 복잡한 요소도 한 방에!**

| **CSS 선택자 예시** | **설명** |
| --- | --- |
| `div.card > h2.title` | 카드 안의 제목 |
| `input[type="password"]` | 비밀번호 입력창 |
| `ul li:last-child` | 목록의 마지막 항목 |
| `.btn:not(.disabled)` | 활성화된 버튼 |

---

## 💻 실습 : 복잡한 선택자 연습

**🧪 HTML 구조**

```jsx
<form id="login-form">
  <div class="input-group">
    <input type="text" name="id">
  </div>
  <div class="input-group error">
    <input type="password" name="pw">
    <span class="msg">경고</span>
  </div>
  <button type="submit">로그인</button>
</form>
```

**🎯 Mission**

1. 에러가 발생한 입력창 찾기
2. 로그인 버튼 찾기

**📝 정답 코드**

```jsx
// 1. 에러가 발생한 입력창 찾기
console.log(document.querySelector('.error input'));

// 2. 로그인 버튼 찾기
console.log(document.querySelector('button[type="submit"]'));
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><code>.error input</code>: 클래스명이 <code>error</code>인 요소 안에 있는 <code>input</code> 태그를 선택합니다.</li>
    <li><code>button[type="submit"]</code>: <code>button</code> 태그 중 <code>type</code> 속성값이 <code>submit</code>인 요소를 정확히 찾아냅니다.</li>
    <li>이 코드를 브라우저 개발자 도구(F12)의 <strong>콘솔(Console)</strong> 탭에 입력하면 선택된 HTML 요소가 출력됩니다.</li>
  </ul>
</div>

---

## 3. 내용 변경 (Content Manipulation)

요소 내부의 내용을 읽거나 바꾸는 두 가지 핵심 방법입니다.

**🆚 textContent vs innerHTML 비교**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl"><code>textContent</code></div>
    <strong>처리 방식</strong> : 순수 텍스트만 다룹니다. HTML 태그를 문자열로 취급합니다.<br>
    <strong>속도/안전성</strong> : <strong>가장 빠르고 안전함</strong><br>
    <strong><code>&lt;strong&gt;</code> 입력 시</strong> : 태그 그대로 출력됩니다.<br>
    <strong>예시</strong> : <code>el.textContent = "반갑습니다!";</code>
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl"><code>innerHTML</code></div>
    <strong>처리 방식</strong> : HTML 구조를 파싱합니다. 실제 DOM 요소로 변환합니다.<br>
    <strong>속도/안전성</strong> : 느리고 <strong>보안 위험 있음</strong> (XSS 공격 취약)<br>
    <strong><code>&lt;strong&gt;</code> 입력 시</strong> : 글자가 <strong>굵게</strong> 표시됩니다.<br>
    <strong>예시</strong> : <code>el.innerHTML = "&lt;strong&gt;반갑습니다!&lt;/strong&gt;";</code>
  </div>
</div>

---

## 4. 주의: XSS(Cross-Site Scripting) 보안 취약점

`innerHTML`에 사용자 입력을 직접 넣는 것은 집 문을 열어두는 것과 같습니다.

**개념 정리**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>XSS란?</strong> 공격자가 웹사이트에 악성 스크립트를 주입하는 보안 취약점입니다.</li>
    <li>사용자의 쿠키(정보)를 탈취하거나, 악성 동작을 수행할 수 있습니다.</li>
  </ul>
</div>

**⚠️ Dangerous Code**

```jsx
const input = "<img src='x' onerror='stealCookie()'>";
// 🚨 악성 코드가 즉시 실행됨!
div.innerHTML = input;
```

**⚠️ 이 코드가 왜 위험한가요?**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl"><code>&lt;script&gt;</code> 차단</div>
    <div class="wda-fcard-dsc">innerHTML로 삽입한 <code>script</code> 태그는 일반적으로 그대로 실행되지 않는 경우가 많습니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl"><code>&lt;img&gt;</code> 우회</div>
    <div class="wda-fcard-dsc">존재하지 않는 주소('x')를 넣어 <code>onerror</code> 같은 이벤트 속성이 실행되게 됩니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl">자동 실행</div>
    <div class="wda-fcard-dsc">화면에 렌더링 즉시 발동하여 에러가 나면서 해커 코드가 실행됩니다.</div>
  </div>
</div>

하지만 img의 onerror 같은 이벤트 속성이나 다른 HTML 삽입 방식으로 악성 코드가 실행될 수 있어 위험합니다.  
그래서 사용자 입력값은 기본적으로 textContent로 처리하는 것이 안전합니다.

**💡 Safe Alternative**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">textContent 사용</div>
    <div class="wda-fcard-dsc">태그가 무력화되어 안전합니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">DOMPurify 사용</div>
    <div class="wda-fcard-dsc">위험한 태그만 제거합니다.</div>
  </div>
</div>

**참고 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>innerText는요?</strong> <code>display: none</code>인 텍스트는 가져오지 않습니다.</li>
    <li>"눈에 보이는 것만" 가져오기 위해 스타일 계산을 하므로, <strong>🚀 성능이 가장 느립니다.</strong></li>
  </ul>
</div>

---

## 5. 속성(Attribute) vs 프로퍼티(Property)

가장 혼동하기 쉬운 개념입니다. **초기값(Blueprint)**과 **현재상태(Live)**의 차이입니다.

**🆚 Attribute vs Property 비교**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">HTML Attribute</div>
    <strong>의미</strong> : <strong>설계도 (Blueprint)</strong> — HTML에 작성된 초기값<br>
    <strong>접근 방법</strong> : <code>getAttribute()</code>로 접근<br>
    <strong>예시 코드</strong> : <code>&lt;input value="initial"&gt;</code>
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">DOM Property</div>
    <strong>의미</strong> : <strong>실제 객체 (Live Object)</strong> — 현재 화면의 실시간 값<br>
    <strong>접근 방법</strong> : <code>element.value</code>로 접근<br>
    <strong>예시 코드</strong> : <code>input.value = "current"</code>
  </div>
</div>

**🧪 예시 코드**

```jsx
// 1. HTML 초기값 확인
input.getAttribute('value'); // -> "initial"

// 2. 사용자 입력 후 확인
input.value; // -> "user input"
```

**💼 실무 팁**

<div class="wda-callout wda-cs">
  <ul>
    <li>대부분 <strong>Property (점 표기법)</strong>를 사용하세요!</li>
  </ul>
</div>

---

## 6. data-* 속성과 dataset

**📌 data- 속성 정의**

`data-`로 시작하는 커스텀 속성을 사용해 HTML 요소에 보조 데이터를 저장할 수 있습니다.  
단, HTML에 그대로 노출되는 값이므로 비밀번호나 토큰 같은 민감한 정보는 저장하면 안 됩니다.

**🧪 HTML 코드**

```jsx
<div id="user"
  data-user-id="123"
  data-role="admin"
  data-is-active="true">
  사용자 정보
</div>

<button data-action="delete" data-target="user-123">
  삭제
</button>
```

**🧪 JavaScript (dataset)**

```jsx
const user = document.getElementById('user');

// 1. 읽기 (kebab-case -> camelCase)
// data-user-id -> dataset.userId
console.log(user.dataset.userId);   // "123"
console.log(user.dataset.role);     // "admin"
console.log(user.dataset.isActive); // "true"

// 2. 쓰기
user.dataset.lastLogin = '2024-01-15';
// -> HTML에 data-last-login="2024-01-15" 속성이 추가됨

// 3. 삭제
delete user.dataset.isActive;
```

dataset으로 읽은 값은 항상 문자열입니다. 예를 들어 `data-user-id="123"`은 숫자 123이 아니라 문자열 `"123"`으로 읽힙니다.

**💡 활용 사례**

상품 ID, 상태값, 설정값 등을 저장할 때 표준으로 사용됩니다.

---

## 7. 클래스(Class) 조작 - className과 classList

**🆚 className vs classList 비교**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">className</div>
    <strong>방식</strong> : 문자열 전체를 통째로 다룹니다.<br>
    <strong>단점</strong> : 오타가 나기 쉽고, 전체 교체 시 기존 클래스가 사라집니다.
  </div>
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-label">✅ 권장</div>
    <div class="wda-compare-ttl">classList</div>
    <strong>방식</strong> : 개별 클래스를 메서드로 관리합니다.<br>
    <strong>장점</strong> : <code>add</code>, <code>remove</code>, <code>toggle</code>, <code>contains</code>로 안전하게 관리합니다.
  </div>
</div>

**🧪 className (문자열 전체)**

```jsx
<div id="box" class="card active">박스</div>

const box = document.getElementById('box');

// 전체 교체 (기존 클래스 사라짐!)
box.className = 'new-class';

// 추가하려면 복잡함
box.className += ' another';
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <ul>
    <li>문자열 조작이 필요해서 오타 나기 쉽고 불편합니다.</li>
  </ul>
</div>

**🧪 classList (권장)**

```jsx
const box = document.getElementById('box');

// 추가 / 제거
box.classList.add('highlight');
box.classList.remove('active');

// 토글 (제일 유용함!)
box.classList.toggle('dark-mode');

// 확인
if (box.classList.contains('card')) { ... }
```

**💼 실무 팁**

<div class="wda-callout wda-cs">
  <ul>
    <li><code>classList</code> 사용하세요! 개별 클래스를 메서드로 안전하게 관리할 수 있습니다.</li>
  </ul>
</div>

---

## 8. 스타일(Style) 조작

**🧪 element.style (인라인)**

```jsx
const box = document.getElementById('box');

// 케밥케이스(-)를 카멜케이스로!
box.style.backgroundColor = 'blue';
box.style.fontSize = '20px';

// 읽기 (인라인 스타일만 가능)
console.log(box.style.color);
// CSS 파일에 있는 스타일은 못 읽음!
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <ul>
    <li>HTML 태그에 <code>style="..."</code> 속성으로 직접 붙습니다.</li>
    <li>점수(Specificity)가 높아서 CSS를 덮어씁니다.</li>
  </ul>
</div>

**🧪 getComputedStyle (최종값)**

```jsx
const box = document.getElementById('box');

// 브라우저가 계산한 '진짜' 스타일
const computed = getComputedStyle(box);

console.log(computed.fontSize); // "16px"
console.log(computed.display);  // "block"
```

**✅ 권장 방식**

<div class="wda-callout wda-cs">
  <ul>
    <li><strong>권장 패턴 : 클래스 토글</strong> — JS로 스타일을 직접 바꾸기보다, CSS 클래스를 만들고 <code>toggle</code> 하세요. 유지보수가 훨씬 쉽습니다.</li>
  </ul>
</div>

---

## 💻 실습 : 스타일과 클래스 제어

다음 요구사항에 맞춰 요소를 조작하는 코드를 작성해보세요.

**🧪 HTML 구조**

```jsx
<div id="alert" class="box hidden">
  알림 대기중...
</div>
```

**🎯 Mission**

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">박스 선택</div>
      <div class="wda-sdsc">아이디가 <code>alert</code>인 박스를 선택합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">숨김 해제</div>
      <div class="wda-sdsc"><code>hidden</code> 클래스를 제거합니다. (보이게 하기)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">에러 스타일 적용</div>
      <div class="wda-sdsc"><code>error</code> 클래스를 추가합니다. (빨간색 스타일)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">텍스트 변경</div>
      <div class="wda-sdsc">텍스트를 "오류 발생!"으로 변경합니다.</div>
    </div>
  </div>
</div>

**📝 정답 코드**

```jsx
// 1. 선택
const box = document.getElementById('alert');

// 2. 클래스 조작 (classList 권장)
box.classList.remove('hidden');
box.classList.add('error');   

// 3. 텍스트 변경 (textContent 권장)
box.textContent = '오류 발생!';
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>선택</strong> — <code>getElementById</code>를 사용하여 특정 ID(<code>alert</code>)를 가진 요소를 가져옵니다.</li>
    <li><strong>클래스 조작</strong> — <code>className</code>보다 안전한 <strong>classList</strong>를 사용하여 클래스를 하나씩 제거(<code>remove</code>)하고 추가(<code>add</code>)합니다.</li>
    <li><strong>내용 변경</strong> — 보안에 취약한 <code>innerHTML</code> 대신 <strong>textContent</strong>를 사용하는 것이 권장되는 방식입니다.</li>
  </ul>
</div>

---

## 9. 요소 생성 (Memory) vs 삽입 (DOM)

`createElement`로 만든 요소는 공중에 떠 있는 풍선과 같습니다.

**🆚 Memory vs DOM 비교**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">Memory (메모리)</div>
    <strong>코드</strong> : <code>document.createElement('div')</code><br>
    <strong>상태</strong> : 아직 화면에 보이지 않습니다. DOM 트리에 연결되지 않은 상태입니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">DOM (화면)</div>
    <strong>코드</strong> : <code>document.body.appendChild(div)</code><br>
    <strong>상태</strong> : 이제 화면에 나타납니다. DOM 트리의 자식으로 연결된 상태입니다.
  </div>
</div>

**⚙️ 계층 구조 조립**

```jsx
// 1. 메모리상에 <ul>과 <li> 요소를 각각 생성 (아직 화면엔 없음)
const ul = document.createElement('ul');
const li = document.createElement('li');

// 2. 계층 구조 조립: <li>를 <ul>의 자식으로 넣음
ul.appendChild(li);

// 3. 최종 반영: 조립된 <ul> 세트를 화면(body)에 붙임
document.body.appendChild(ul);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>조립 후 삽입</strong> — 요소를 하나하나 화면에 바로 붙이는 것이 아니라, 메모리상에서 <code>ul &gt; li</code> 구조를 먼저 <strong>완성(조립)</strong>한 다음에 한 번에 <code>body</code>에 추가하는 것이 효율적입니다.</li>
    <li><strong>풍선 예시</strong> — 이전 단계에서 배운 것처럼, <code>appendChild</code>를 하기 전까지 이 요소들은 공중에 떠 있는 풍선 상태와 같으며, 마지막 줄을 실행해야 비로소 사용자 눈에 보이게 됩니다.</li>
  </ul>
</div>

---

## 💻 실습 : 새로운 카드 만들기

JavaScript로 카드를 만들고 화면에 붙여봅시다.

**🎯 Mission**

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">div 태그 생성하기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">클래스 card 추가하기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">텍스트 New Item 넣기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">body 끝에 붙이기</div>
    </div>
  </div>
</div>

**📝 정답 코드**

```jsx
// 1. 생성 (풍선 만들기)
const card = document.createElement('div');

// 2. 꾸미기 (내용 채우기)
card.className = 'card';
card.textContent = 'New Item';

// 3. 연결 (나무에 묶기)
document.body.appendChild(card);
```

**🧪 미리보기 (HTML 구조)**

코드가 실행되면 최종적으로 다음과 같은 구조가 화면에 추가됩니다.

```jsx
<div class="card">
  New Item
</div>
```

---

## 10. 요소 삽입하기 (2) - 모던 메서드

기존 `appendChild()`는 노드 1개만 가능하고, 항상 맨 뒤에만 추가되는 단점이 있었습니다.

**📝 자식으로 추가 (Parent Methods)**

부모 요소의 안쪽 앞/뒤에 요소를 넣을 때 사용합니다.

| **메서드** | **위치 (부모 기준)** | **특징** |
| --- | --- | --- |
| `append()` | **맨 뒤**에 추가 | 여러 요소나 문자열을 한 번에 넣을 수 있음 |
| `prepend()` | **맨 앞**에 추가 | 기존 자식들보다 앞선 순서로 삽입됨 |

**📝 형제로 추가 (Sibling Methods)**

기준 요소의 바로 앞/뒤(바깥쪽)에 요소를 넣을 때 사용합니다.

| **메서드** | **위치 (기준 요소 기준)** | **특징** |
| --- | --- | --- |
| `before()` | **내 바로 앞**에 추가 | 기준 요소와 같은 층위(형제)의 위쪽에 삽입 |
| `after()` | **내 바로 뒤**에 추가 | 기준 요소와 같은 층위(형제)의 아래쪽에 삽입 |

**정리 포인트**

<div class="wda-callout wda-cs">
  <ul>
    <li>기존의 <code>appendChild()</code>는 노드 <strong>1개만</strong> 가능하고 <strong>맨 뒤</strong>에만 추가할 수 있다는 제약이 있었지만, 위 모던 메서드들은 훨씬 자유롭게 사용 가능합니다.</li>
  </ul>
</div>

---

## 11. 요소 삭제/교체/복제

**📝 삭제와 교체**

요소를 화면에서 지우거나 새로운 요소로 바꿀 때 사용합니다.

| **구분** | **메서드** | **특징** |
| --- | --- | --- |
| **요소 삭제** | `element.remove()` | **자기 자신**을 직접 삭제 (권장 방식) |
| (Remove) | `parent.removeChild(child)` | 부모가 자식을 삭제하는 구식 방식 |
| **요소 교체** | `old.replaceWith(new)` | 기존 요소를 새로운 요소로 교체 |

**📝 요소 복제 (Clone)**

기존 요소를 똑같이 복사합니다. 기본형은 `node.cloneNode(deep)`입니다.

| **옵션** | **방식** | **내용** |
| --- | --- | --- |
| **`false`** | **얕은 복제** | 껍데기만 복제하며, 자식 요소는 제외합니다. |
| **`true`** | **깊은 복제** | 모든 자식을 포함하여 완전히 똑같이 복제합니다. |

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <ul>
    <li><strong>복제된 요소는 화면에 자동으로 붙지 않습니다.</strong></li>
    <li>메모리상에만 존재하므로, 반드시 <code>appendChild</code>나 <code>append</code> 등을 사용해 원하는 위치에 직접 붙여줘야 화면에 나타납니다.</li>
  </ul>
</div>

---

## 💻 실습 : 할 일 목록

**📌 구현 목표**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">입력 &amp; 추가</div>
    <div class="wda-fcard-dsc">입력창에 할 일을 쓰고 '추가' 버튼 클릭</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">목록 반영</div>
    <div class="wda-fcard-dsc">목록(<code>ul</code>)에 새로운 항목(<code>li</code>) 추가</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">삭제 버튼</div>
    <div class="wda-fcard-dsc">각 항목에 '삭제' 버튼도 함께 생성</div>
  </div>
</div>

**🧪 HTML 구조**

```jsx
<div id="todo-app">
    <input type="text" id="todo-input" placeholder="할 일 입력">
    <button id="add-btn">추가</button>
    <ul id="todo-list"></ul>
</div>
```

**🧪 DOM 요소 선택 - 완성 코드**

```jsx
// [1] 필요한 DOM 요소 선택
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');  
const list = document.getElementById('todo-list');  

// [2] 실행을 위한 이벤트 리스너 등록
// 추가 버튼을 클릭하면 addTodo 함수가 실행됩니다.
addBtn.addEventListener('click', addTodo);

// [3] 할 일 추가 함수 (Main Logic)
function addTodo() {
    // 1. 입력값 가져오기 및 공백 제거
    const text = input.value.trim();

    // 2. 예외 처리: 입력값이 없으면 함수 종료
    if (!text) return;

    // 3. 요소 생성 (Memory 단계)
    const li = document.createElement('li');        // 항목(li) 생성
    const span = document.createElement('span');    // 텍스트를 담을 span 생성
    const deleteBtn = document.createElement('button'); // 삭제 버튼 생성

    // 4. 내용 및 속성 설정
    span.textContent = text;            // span에 입력한 텍스트 넣기
    deleteBtn.textContent = '삭제';     // 버튼에 "삭제" 글자 넣기

    // 5. 삭제 버튼에 기능 연결 (이벤트 리스너)
    deleteBtn.addEventListener('click', () => {
        li.remove(); // 클릭 시 해당 li 요소를 화면에서 삭제
    });

    // 6. 요소 조립 및 화면 삽입 (DOM 연결)
    li.appendChild(span);       // li의 자식으로 텍스트(span)를 넣음
    li.appendChild(deleteBtn);  // li의 자식으로 버튼을 넣음
    list.appendChild(li);       // 최종 완성된 li를 ul 목록에 추가

    // 7. 다음 입력을 위해 입력창 비우기
    input.value = '';
}
```

**🧠 사용된 핵심 메서드 요약**

| **메서드** | **역할** | **단계** |
| --- | --- | --- |
| `document.createElement()` | 새로운 HTML 요소 생성 | 메모리 (Memory) |
| `element.textContent` | 안전하게 텍스트 내용 설정 | 내용 설정 |
| `parent.appendChild()` | 요소를 부모의 자식으로 연결 | 화면 (DOM) |
| `element.remove()` | 선택한 요소 삭제 | 요소 삭제 |

**⚙️ 함수 흐름 단계별 정리**

| **단계** | **주요 동작** | **관련 메서드 / 속성** | **상태** |
| --- | --- | --- | --- |
| **1. 생성** | 필요한 HTML 태그를 새롭게 만듭니다. | `document.createElement('태그명')` | **Memory** (화면에 안 보임) |
| **2. 설정** | 글자를 채우고, 클래스나 이벤트를 부여합니다. | `textContent`, `classList`, `addEventListener` | **Memory** (조립 중) |
| **3. 삽입** | 부모 요소와 연결하여 실제 화면에 띄웁니다. | `appendChild()`, `append()` | **DOM** (화면에 나타남) |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>변수 선택</strong> — <code>input</code>, <code>button</code>, <code>ul</code>을 미리 변수에 담아둡니다.</li>
    <li><strong>삭제 원리</strong> — 삭제 버튼을 누르면 부모인 <code>li</code>를 직접 지우도록(<code>li.remove()</code>) 설계되어 있습니다.</li>
  </ul>
</div>

**개념 정리**

<div class="wda-callout wda-ci">
  <ul>
    <li>모든 인터랙티브한 웹 사이트의 기본 연결 고리입니다: <code>addBtn.addEventListener('click', addTodo);</code></li>
    <li><strong>addEventListener</strong> : "이벤트가 발생하는지 계속 듣고 있어라"</li>
    <li><strong>'click' (이벤트)</strong> : "사용자가 클릭을 하면"</li>
    <li><strong>addTodo (Fn)</strong> : "이 함수를 실행해라"</li>
    <li>이 코드가 빠지면 아무리 완벽한 <code>addTodo</code> 함수를 만들어도 버튼을 눌렀을 때 아무 반응이 일어나지 않습니다.</li>
  </ul>
</div>

---

## 💻 실습 : 다크모드 토글

버튼을 누르면 `body` 태그에 `dark-mode` 클래스를 붙였다 떼었다(Toggle) 합니다.

**🧪 CSS (스타일 정의)**

```jsx
/* 기본 상태 (라이트 모드) */
body {
    background-color: white;
    color: black;
    transition: 0.3s; /* 부드러운 전환 효과 */
}

/* 다크 모드 상태 */
body.dark-mode {
    background-color: #1a1a1a;
    color: white;
}
```

**🧪 JavaScript (클래스 토글)**

```jsx
const btn = document.getElementById('toggle-btn');

btn.addEventListener('click', () => {
    // 1. 클래스 토글 (없으면 추가, 있으면 제거)
    document.body.classList.toggle('dark-mode');

    // 2. 현재 상태 확인 (다크모드가 켜져 있는지 체크)
    const isDark = document.body.classList.contains('dark-mode');

    // 3. 상태에 따라 버튼 텍스트(아이콘) 변경 (삼항 연산자)
    btn.textContent = isDark ? '☀️' : '🌙';
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>classList.toggle</strong> — 조건문을 길게 쓰지 않고도 클래스를 넣고 뺄 수 있어 간단하고 자주 사용되는 방법입니다.</li>
    <li><strong>classList.contains</strong> — 현재 특정 클래스가 적용되어 있는지 확인하여 로직을 분기할 때 사용합니다.</li>
    <li><strong>사용자 경험</strong> — CSS에 <code>transition</code>을 넣어야 색상이 갑자기 변하지 않고 부드럽게 바뀌어 눈이 편안합니다.</li>
  </ul>
</div>

---

## ✅ 핵심 요약

**🆚 요소 선택 및 상태 (Selection)**

| **메서드** | **선택 방식** | **반환 타입** | **상태 특성** |
| --- | --- | --- | --- |
| **`getElementById`** | ID 값 (단일) | Element | 단일 요소 반환 / 컬렉션 아님 |
| **`querySelector`** | CSS 선택자 (단일) | Element | - |
| **`querySelectorAll`** | CSS 선택자 (복수) | NodeList | **Static** (정적, 선택 시점 고정) |

**핵심 포인트**

<div class="wda-callout wda-cs">
  <ul>
    <li><strong>Live</strong> : DOM의 변화가 즉시 컬렉션에 반영됩니다. (예: <code>getElementsByClassName</code>, <code>getElementsByTagName</code> 등으로 가져온 HTMLCollection)</li>
    <li><strong>Static</strong> : 요소를 가져온 시점의 상태를 유지하며, 이후 DOM이 변해도 업데이트되지 않습니다. (예: <code>querySelectorAll</code>)</li>
  </ul>
</div>

**📝 내용 및 스타일 조작 (Content & Style)**

| **구분** | **항목** | **특징** | **비고** |
| --- | --- | --- | --- |
| **내용** | **`textContent`** | 오직 텍스트만 취급 | **가장 안전 (보안 권장)** |
|  | **`innerHTML`** | HTML 태그를 해석하여 삽입 | **⚠️ XSS 공격 위험** |
| **스타일** | **`element.style`** | HTML 태그 내에 직접 작성 | **인라인 스타일**만 제어 가능 |
|  | **`getComputedStyle()`** | 브라우저가 최종 계산한 스타일 | CSS 파일에 정의된 값 조회 시 사용 |

**🧠 클래스 및 속성 제어 (Class & Attributes)**

| **메서드** | **역할** | **세부 기능** |
| --- | --- | --- |
| **`classList`** | 클래스 정밀 제어 | `add`, `remove`, `toggle`, `contains` |
| **`setAttribute`** | 속성 쓰기 | `element.setAttribute('속성명', '값')` |
| **`dataset`** | 사용자 정의 속성 접근 | `data-*` 속성을 객체 형태로 관리 |

**핵심 포인트**

<div class="wda-callout wda-cs">
  <ul>
    <li><strong>HTML (케밥 케이스)</strong> : <code>data-user-id</code>와 같이 하이픈(-)으로 연결합니다.</li>
    <li><strong>JS (카멜 케이스)</strong> : <code>dataset.userId</code>와 같이 대문자로 연결하여 접근합니다.</li>
  </ul>
</div>

**📝 생성/삽입/삭제 (Manipulation)**

| **단계** | **메서드** | **특징** |
| --- | --- | --- |
| **생성** | **`createElement()`** | 새로운 노드를 메모리에 생성 |
| **삽입** | **`append()`** | 부모의 **맨 뒤**에 추가 (여러 개/문자열 가능) |
|  | **`prepend()`** | 부모의 **맨 앞**에 추가 (모던 메서드) |
|  | **`appendChild()`** | 부모의 **맨 뒤**에 추가 (노드 1개만 가능) |
| **삭제** | **`remove()`** | 대상 요소 자체를 즉시 제거 |

**최종 정리**

<div class="wda-callout wda-cs">
  <ul>
    <li><strong>"사용자 입력값은 무조건 textContent로 처리할 것"</strong></li>
    <li>스크립트가 실행될 위험이 있는 <code>innerHTML</code> 대신 텍스트 자체로 인식하는 방식을 택하는 것이 프론트엔드 보안의 기본입니다.</li>
  </ul>
</div>
