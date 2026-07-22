---
title: "1-1 JavaScript 실행환경 이해하기"
status: "completed"
description: "JavaScript가 실행되는 환경과 브라우저/Node.js의 차이를 이해합니다."
category: "JavaScript"
section: "Basics"
tags:
  - javascript
  - basics
  - execution-environment
---

<style>
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-cy{background:rgba(234,179,8,.06);border-color:#eab308}
.wda-cy .wda-clabel{color:#ca8a04}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 16px;margin:.8rem 0 1.6rem;font-size:.83rem;line-height:1.75}
.wda-goal-label{font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#22c55e;display:block;margin-bottom:10px}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-fcard-list{list-style:none;padding:0;margin:.4rem 0 0;font-size:.89rem;line-height:1.65}
.wda-fcard-list li::before{content:"· "}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(252,206,150,.32);color:#8a6d3b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-sdsc ul{margin:.3rem 0 0;padding-left:1.1rem}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px;font-size:.89rem;line-height:1.65;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-compare-ttl{font-size:.92rem;font-weight:700;line-height:1.5;margin-bottom:8px}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:4px}
.wda-legacy{border-color:rgba(245,158,11,.28);background:rgba(245,158,11,.035)}
.wda-modern{border-color:rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-hint{border-color:rgba(59,130,246,.25);background:rgba(59,130,246,.035)}
.wda-caution{border-color:rgba(245,158,11,.28);background:rgba(245,158,11,.035)}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
/* 같은 세트 내부 하위 항목(미니 소제목)의 위쪽 여백을 좁혀 형제 항목처럼 붙어 보이게
   한다 — 상위 소제목이 "새 세트 시작"의 넓은 여백을 그대로 유지하도록, 이 클래스는
   하위 항목들만 감싼 wrapper 안에서만 적용한다. 셀렉터 특이도(0,3,1)가 기본 padding-top
   규칙(단일 클래스, 0,1,0)보다 높아 !important 없이도 항상 이긴다. */
.wda-substep-set p.wda-minihead.wda-minihead{padding-top:.5rem}
/* 핵심 요약 전용 복습 UI — JavaScript 1-2 기준과 동일(2026-07 40차 개편 — 1-1에도 적용).
   색은 background/border/accent에만 쓰고, 본문 텍스트는 카드 색과 무관하게 진회색
   (#2C2840)·strong은 #1F1B2E로 고정한다. 먼저 외울 것과 공식 보드 바깥은 neutral,
   헷갈리기 쉬운 것(피치)·공식 카드 안쪽(핑크)·클릭 복습 카드(라벤더/그린)에만 색 포인트. */
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
  • <strong>JavaScript 정의</strong> — JavaScript가 무엇이고 웹에서 어떤 역할을 하는지 이해한다.<br>
  • <strong>Modern vs Legacy</strong> — alert, script 태그의 올바른 사용법과 변화를 이해한다.<br>
  • <strong>실행 환경</strong> — 브라우저 Console과 Node.js 환경의 차이를 이해한다.<br>
  • <strong>엄격 모드</strong> — use strict가 왜 필요한지 실수 예시를 통해 체감한다.
</div>

---

## 1. JavaScript란 무엇인가?

JavaScript는 브라우저에서 웹 페이지의 동작을 제어하는 표준 스크립트 언어다.

**🏗️ 브라우저의 구조**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔤</div>
    <div class="wda-fcard-ttl">HTML 해석기(파서) 내장</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🎨</div>
    <div class="wda-fcard-ttl">CSS 해석기 내장</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⚡</div>
    <div class="wda-fcard-ttl">JavaScript 엔진 내장</div>
    <ul class="wda-fcard-list">
      <li>V8</li>
      <li>SpiderMonkey</li>
    </ul>
  </div>
</div>

**🚫 다른 언어는?**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">브라우저에서 직접 실행되지 않음</span>
  • Python / Java / C++ 코드는 일반적인 브라우저에서 그대로 직접 실행되지 않는다.<br>
  • 브라우저는 기본적으로 JavaScript 엔진을 내장하고 있기 때문에 JavaScript를 바로 실행할 수 있다.
</div>

<div class="wda-callout wda-ci">
  💡 웹사이트에서 버튼 클릭 처리, 폼 검증, 동적인 화면 변경 같은 대표적인 기능은 JavaScript로 구현된다.
</div>

---

## 2. JavaScript의 탄생 비화

지금 우리가 부르는 이름이 되기까지 많은 우여곡절이 있었다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">탄생 (1995.05)</div>
      <div class="wda-sdsc">
        Netscape의 Brendan Eich(브랜든 아이크)가 10일 만에 개발했다.<br>
        초기 이름은 <strong>Mocha</strong>였고 이후 <strong>LiveScript</strong>로 변경되었다.
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">개명 (1995.12)</div>
      <div class="wda-sdsc">
        당시 Java가 큰 인기를 끌고 있었다.<br>
        마케팅 전략으로 이름을 <strong>JavaScript</strong>로 변경했다.
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">전쟁과 혼란 (1996)</div>
      <div class="wda-sdsc">
        MS가 IE에 JS 기반 언어를 탑재했다.<br>
        상표권 문제로 <strong>JScript</strong>라는 이름을 사용했다.<br>
        브라우저마다 코드가 다르게 동작하는 문제가 발생했다.
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">평화 (1997)</div>
      <div class="wda-sdsc">
        국제 표준 기구 ECMA에 언어를 기증했다.<br>
        공식 명칭은 <strong>ECMAScript</strong>다.
      </div>
    </div>
  </div>
</div>

---

## 3. ECMAScript vs JavaScript

ECMAScript는 레시피(명세)이고, JavaScript는 요리(실제 언어)다.

**📊 ECMAScript와 JavaScript 비교**

| 구분 | ECMAScript (ES) | JavaScript |
|---|---|---|
| 한 줄 개념 | 레시피(명세)다 | 요리(실제 언어)다 |
| 역할 | 언어의 규칙과 문법을 정의한다 | ECMAScript 표준을 실제로 구현한다 |
| 내용 | 언어의 규칙과 문법 정의(Spec) | ECMAScript 표준을 기반으로 브라우저와 런타임에서 실제로 실행되는 언어다 |
| 선언 규칙 | "변수는 이렇게 선언해야 한다" | 규칙에 맞게 실제로 사용한다 |
| 함수 규칙 | "함수는 이러한 규칙을 따른다" | 함수를 실제로 실행한다 |
| 실행 환경 | 순수 언어 규칙만 정의한다 | 브라우저 환경에서는 Web API와 함께 사용된다 |
| Web API 예시 | 해당 없음 | (브라우저가 제공) DOM, fetch, localStorage 등 |

**📅 주요 버전**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">ES5 (2009)</div>
    <div class="wda-fcard-dsc">오래된 표준이다</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">ES6 (2015)</div>
    <div class="wda-fcard-dsc">대격변이다 (let, const, 화살표 함수)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">ESNext</div>
    <div class="wda-fcard-dsc">매년 새로운 기능이 추가된다</div>
  </div>
</div>

**📌 핵심 구분**

<div class="wda-callout wda-ci">
  • ECMAScript는 <strong>실행되는 언어가 아니라 규칙 문서</strong>다.<br>
  • 브라우저에서 실제로 사용하는 것은 <strong>항상 JavaScript</strong>다.<br>
  • <strong>"ECMAScript = 표준 / JavaScript = 구현"</strong>으로 구분한다.
</div>

---

## 4. JavaScript를 사용하는 방법

JavaScript 코드를 브라우저에게 알려주는 방법은 두 가지다.

**📝 내부 스크립트 (Internal)**

HTML 파일 안에 직접 작성한다.

```html
<body>
<script>
alert("Hello!");
// 경고창을 띄운다
</script>
</body>
```

**📁 외부 스크립트 (External)**

JS 파일을 분리해 불러온다.

```html
<body>
<script src="main.js"></script>
</body>
```

• script 태그 위치에 따라 실행 시점이 달라진다.

---

## 5. script 태그의 위치

• HTML 파일은 **위에서 아래로 순서대로 해석**된다.<br>
• 따라서 script 태그의 위치에 따라 **JavaScript 실행 결과가 달라진다**.

**⚠️ head 배치 (문제 발생 가능)**

HTML 요소가 아직 만들어지기 전에 JavaScript가 먼저 실행된다.

```html
<head>
<script>
// 버튼이 아직 생성되지 않은 상태
document.querySelector('button');
// ❌ button 요소를 찾지 못해 null이 반환될 수 있다
</script>
</head>

<body>
<button>클릭</button>
</body>
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  • HTML 파싱이 끝나기 전에 JS가 실행된다.<br>
  • button 요소가 아직 없어서 찾지 못한다.<br>
  • 이후 코드에서 오류가 발생할 수 있다.
</div>

**✅ body 끝 배치 (안전)**

HTML 요소가 모두 만들어진 뒤 JavaScript가 실행된다.

```html
<body>
<button>클릭</button>

<script>
// HTML이 모두 생성된 뒤 실행된다
document.querySelector('button');
// ✅ 정상적으로 button 요소를 찾을 수 있다
</script>
</body>
```

**✅ 권장 방식**

<div class="wda-callout wda-cs">
  • HTML 파싱이 완료된 후 JS가 실행된다.<br>
  • DOM 요소를 안전하게 사용할 수 있다.<br>
  • 초보자가 가장 이해하기 쉬운 방식이다.
</div>

**💬 배치 원칙**

<div class="wda-callout wda-ci">
  • script는 <strong>HTML 파싱 순서의 영향을 받는다</strong>.<br>
  • head에 두면 <strong>요소가 아직 없어 실패할 수 있다</strong>.<br>
  • body 끝에 두면 <strong>HTML 생성 후 실행되어 안전하다</strong>.<br>
  • defer를 사용하면 <strong>head에 두어도 HTML 완료 후 실행된다</strong>.<br>
  • <code>document.querySelector()</code>는 <strong>이미 생성된 HTML 요소만 찾을 수 있다</strong>.<br><br>
  → 그래서 해결 방법은 <strong>body 끝 배치</strong> 또는 <strong>defer 사용</strong>이다.
</div>

---

## 6. 가장 권장하는 방식: defer (비교 표)

| 구분 | 기본 (Normal) | 지연 (defer) | 비동기 (async) |
|---|---|---|---|
| script 형태 | `<script src="..."></script>` | `<script defer src="..."></script>` | `<script async src="..."></script>` |
| HTML 해석 | 해석 일시중지 | 해석과 동시에 다운로드 | 해석과 동시에 다운로드 |
| 실행 시점 | 다운로드/실행 후 해석 재개 | HTML을 다 읽은 후 실행 | 다운로드되자마자 즉시 실행 |
| 특징 | HTML 해석이 멈춘다 | DOMContentLoaded 이벤트 직전 실행 | 실행 순서 보장 안 됨 |

**💡 사용 팁**

<div class="wda-callout wda-cs">
  일반적인 웹 페이지에서는 <strong>defer</strong>를 사용한다.
</div>

**🔹 암기용 한 줄 정리**

• **기본** : 멈춘다 → 실행<br>
• **defer** : 같이 읽고 → 나중에 실행<br>
• **async** : 먼저 끝난 게 먼저 실행된다

---

## 7. 레거시 vs 현대: 웹의 발전

| 구분 | Legacy (초창기 웹) | Modern (오늘날) |
|---|---|---|
| 기본 개념 | 문서에 일상적인 효과를 준다 | 구조, 표현, 동작을 분리한다 |
| 코드 구조 | HTML, CSS, JS가 한 파일에 섞여 있다 | HTML, CSS, JS를 분리한다 |
| 스타일 처리 | 인라인 스타일을 사용한다 | CSS 파일로 분리한다 |
| 이벤트 처리 | HTML 속성(onclick)에 직접 작성한다 | JavaScript에서 이벤트를 등록한다 |
| 유지 관리 | 어렵다 | 쉽다 |
| 특징 요약 | 간단한 테스트용이다 | 확장성과 지속성이 높다 |

**🆚 예시 코드 비교**

<div class="wda-compare">
  <div class="wda-compare-card wda-legacy">
    <div class="wda-compare-ttl">❌ Legacy (초창기 웹)</div>
  </div>
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-ttl">✅ Modern (오늘날)</div>
  </div>
</div>

```html
<button
style="color: red"
onclick="alert('클릭!')"
>
버튼
</button>

<script>
// 사용자 흐름을 강제로 막음
alert('환영합니다!');
</script>
```

```javascript
// CSS와 JS를 별도 파일로 분리

const btn = document.querySelector('button');

// 이벤트 리스너로 깔끔하게 처리
btn.addEventListener('click', () => {
showCustomModal('환영합니다!');
});
```

**💼 실무 팁**

<div class="wda-callout wda-cs">
  • 옛날 방식은 <strong>빠르게 테스트할 때만</strong> 사용한다.<br>
  • 실제 프로젝트에서는 <strong>관심사를 분리하는 Modern 방식을 따른다</strong>.
</div>

---

## 8. 실습: 개발자 도구 Console

**🖥️ Console 열기**

• F12 또는 우클릭 → 검사<br>
• Console 탭 클릭

**⌨️ 따라 해보기**

```javascript
alert("안녕하세요!");
10 +20;
console.log("기록이 남습니다");
```

---

## 9. 개발자의 일기장: console.log

**📌 개념**

<div class="wda-callout wda-ci">
  프로그램이 지금 무슨 생각을 하고 있는지 확인할 수 있다.
</div>

**📋 기본 사용법**

```javascript
console.log("안녕하세요");
console.log(10 +20);
```

• 괄호 안의 내용을 **Console 탭에 출력**한다.<br>
• **사용자 화면(웹페이지)에는 보이지 않는다.**<br>
• **오직 개발자 확인용**이다.

**🤔 언제 쓰나?**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">오류 찾기 (디버깅)</div>
    "여기까지 코드가 실행됐는가?", "이 변수에 어떤 값이 들어있는가?"를 확인할 때 사용한다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">데이터 확인</div>
    서버에서 가져온 데이터가 올바른지 <strong>눈으로 직접 확인</strong>할 때 사용한다.
  </div>
</div>

---

## 10. 브라우저를 탈출한 JS: Node.js

| 구분 | 브라우저 자바스크립트 | Node.js |
|---|---|---|
| 실행 위치 | 브라우저 안에서 실행된다 | 브라우저 밖에서 실행된다 |
| 엔진 | JS 엔진(V8) 내장 | V8 엔진을 분리해 컴퓨터에 직접 설치한다 |
| 화면 조작 | 화면 조작(DOM)을 한다 | 해당 없음 |
| 사용자 이벤트 | 사용자 클릭 이벤트를 처리한다 | 해당 없음 |
| 파일 접근 | 내 파일 접근 불가다 (보안) | 내 컴퓨터 파일 읽기/쓰기 가능하다 |
| 서버 | 해당 없음 | 서버 만들기(웹사이트 만들기) |
| 데이터베이스 | 해당 없음 | 데이터베이스 연결 |

---

## 11. 개발자가 자주 하는 실수

JavaScript는 너무 자유로워서 탈이다. (경찰관이 없다)

**❌ 실수 1: 변수 키워드 생략**

```javascript
// let, const 없이 막 씀
username ="admin";

// 나도 모르게 '전역 변수'가 되어버림
// window.username과 같다
```

• 의도하지 않게 전역 변수가 된다.<br>
• 다른 코드나 라이브러리와 충돌할 수 있다.

→ 나중에 다른 클래스의 사용자 이름과 충돌해 망가질 수 있다.

**❌ 실수 2: 읽기 전용 변수에 쓰기**

```javascript
const PI = 3.14;

// const로 선언한 변수는 재할당할 수 없다
PI = 5;
// ❌ TypeError: Assignment to constant variable
```

• const로 선언한 변수는 값을 변경할 수 없다.<br>
• 재할당을 시도하면 strict 모드 여부와 상관없이 즉시 에러가 발생한다.

→ 에러 메시지를 보면 원인(const 재할당)을 바로 알 수 있다.

---

## 12. 엄격 모드 (use strict)

• "이제부터 법대로 합시다."<br>
• JavaScript 엔진에게 **엄격한 규칙 적용을 요청한다**.

**📌 기본 개념**

파일 **최상단**에 `"use strict";` 한 줄만 추가하면 된다.

```javascript
"use strict";
```

이 한 줄로 JavaScript 엔진이 **실수를 조용히 넘기지 않고 에러로 처리**한다.

**🛡️ use strict로 막아주는 대표 실수**

<div class="wda-substep-set">

**🔹 변수 선언 필수**

```javascript
"use strict";

x =10;
// ❌ ReferenceError: x is not defined
```

• let, const 없이 변수를 사용하면 에러가 발생한다.<br>
• 의도치 않은 전역 변수 생성을 막는다.

**🔹 예약어 사용 금지**

```javascript
"use strict";

let public =10;
// ❌ SyntaxError: Unexpected strict mode reserved word
```

• JavaScript에서 예약된 단어는 변수명으로 사용할 수 없다.<br>
• 문법 단계에서 바로 에러를 발생시킨다.

**🔹 조용히 실패하던 에러를 밖으로 드러낸다**

```javascript
"use strict";

const obj = Object.freeze({ name: "JS" });
obj.name = "Java";
// ❌ TypeError: Cannot assign to read only property 'name' of object
```

**💡 설명**

<div class="wda-callout wda-ci">
  • Object.freeze로 고정한 객체는 속성을 변경할 수 없다.<br>
  • 일반 모드에서는 조용히 무시되던 변경 시도가 strict 모드에서는 즉시 에러로 표시된다.
</div>

</div>

---

## Q. 모든 파일에 다 써야 하나?

• 옛날 방식(Script)에서는 **매 파일마다 직접 작성해야 했다.**<br>
• 하지만 **현대 방식(Module)**에서는 **자동으로 strict 모드가 적용된다.**

```html
<script type="module">
// "use strict"를 쓰지 않아도 자동 적용된다
  a =10;// ❌ 에러 발생
</script>
```

• `type="module"`을 사용하면 strict 모드가 기본값이다.<br>
• 따로 `"use strict";`를 작성하지 않아도 된다.

---

## 13. 모듈(Module)이란?

<span>거대한 코드 기능을 나눠 놓은 작은 파일 조각이다.</span>

**✨ 특징**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">독립성</div>
    <div class="wda-fcard-dsc">서로의 변수를 침범하지 않는다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">strict 자동 적용</div>
    <div class="wda-fcard-dsc"><code>"use strict"</code>를 따로 작성하지 않아도 자동으로 엄격 모드가 적용된다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">지연 실행</div>
    <div class="wda-fcard-dsc"><code>defer</code>처럼 HTML 해석 이후 실행된다.</div>
  </div>
</div>

**🔧 응용**

<div class="wda-substep-set">

**🔹 일반 script 방식**

```html
<script>
let x =10;
</script>
```

• 전역 범위에 영향을 줄 수 있다.<br>
• 다른 script와 변수 충돌이 발생할 수 있다.

**🔹 module 방식**

```html
<script type="module">
let x =10;// 이 파일 안에서만 유효
</script>
```

• 해당 파일 내부에서만 변수가 유효하다.<br>
• 전역 변수 오염을 방지한다.<br>
• strict 모드가 자동 적용된다.

</div>

**📌 요약 정리**

• 최신 프론트엔드 개발은 **모듈 방식**을 사용한다.<br>
• 모듈은 코드의 **안전성**과 **관리성**을 높인다.

---

## 14. 실습 과제

```html
<!DOCTYPE html>
<html>
<body>
<h1>나의 첫 JS</h1>
<script>
    "use strict";
console.log("Hello, World!");
const languageName ="JavaScript";
// const는 값 변경 불가
</script>
</body>
</html>
```

**🔹 힌트 & 트러블슈팅**

<div class="wda-compare">
  <div class="wda-compare-card wda-hint">
    <div class="wda-compare-ttl">🖥️ Console 안 보일 때</div>
    • F12<br>
    • 우클릭 → 검사<br>
    • Console 탭
  </div>
  <div class="wda-compare-card wda-caution">
    <div class="wda-compare-ttl">⚠️ 에러 발생 시</div>
    • SyntaxError → 오타 확인<br>
    • Assignment to constant variable → let 사용
  </div>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>JavaScript는 <strong>브라우저가 이해하는 유일한 언어</strong>이며, 웹의 <strong>동작(행동)</strong>을 담당한다.</li>
    <li>브라우저는 HTML 파서 + CSS 파서 + <strong>JavaScript 엔진</strong>(예: V8, SpiderMonkey)으로 구성된다.</li>
    <li>내부 스크립트는 HTML 안에 직접 작성하고, 외부 스크립트는 JS 파일을 분리해 불러온다.</li>
    <li>HTML은 <strong>위 → 아래 순서로 해석</strong>되며, script 위치에 따라 실행 시점이 달라진다.</li>
    <li>console.log는 디버깅·값 확인용 개발자 도구이며, 사용자 화면에는 보이지 않는다.</li>
    <li>Node.js는 브라우저 밖에서 JS를 실행하며, 파일 접근·서버·DB 연결이 가능하다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: Python/Java/C++ 코드도 브라우저에서 그대로 실행된다?</div>
    <div class="wda-mistake-right">정답: 브라우저는 기본적으로 <strong>JavaScript 엔진만 내장</strong>하고 있어, 다른 언어 코드는 그대로 실행되지 않는다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: ECMAScript와 JavaScript는 같은 것이다?</div>
    <div class="wda-mistake-right">정답: <strong>ECMAScript = 규칙(표준 문서)</strong>이고, <strong>JavaScript = 그 규칙을 구현한 실제 언어</strong>다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: script는 head에 둬도 항상 안전하다?</div>
    <div class="wda-mistake-right">정답: head에 두면 HTML 요소 생성 전에 JS가 실행돼 DOM을 못 찾아 <strong>오류가 날 수 있다</strong>. body 끝에 두면 HTML 생성 후 실행돼 DOM 접근이 <strong>가장 안전</strong>하다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: defer와 async는 같은 방식이다?</div>
    <div class="wda-mistake-right">정답: defer는 HTML 파싱과 동시에 다운로드하고 <strong>HTML 완료 후 실행</strong>되어 head에 둬도 안전하지만, async는 다운로드 완료 즉시 실행되어 <strong>순서가 보장되지 않는다</strong>.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: Legacy와 Modern 방식은 코드 작성법만 다르다?</div>
    <div class="wda-mistake-right">정답: Legacy는 HTML·CSS·JS가 섞여 있고, Modern은 <strong>구조·표현·동작을 분리</strong>한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: use strict와 module은 서로 관련이 없다?</div>
    <div class="wda-mistake-right">정답: use strict는 JS를 <strong>엄격 모드</strong>로 실행해 실수를 즉시 에러로 만들고, module은 <strong>독립된 파일 단위</strong>로 전역 오염을 방지하며 strict가 자동 적용된다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 스크립트 로딩</div>
    <div class="wda-formula-block-body"><code>script → defer</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 코드 스타일</div>
    <div class="wda-formula-block-body"><code>Modern 방식 사용</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 모듈</div>
    <div class="wda-formula-block-body"><code>module = 자동 strict</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">JavaScript란?</div>
    <div class="wda-flip-back">브라우저가 이해하는 유일한 언어이며, 웹의 동작(행동)을 담당한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">브라우저의 3대 구성요소는?</div>
    <div class="wda-flip-back">HTML 파서 + CSS 파서 + JavaScript 엔진(V8, SpiderMonkey 등)이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">ECMAScript와 JavaScript의 차이는?</div>
    <div class="wda-flip-back">ECMAScript는 규칙(표준 문서)이고, JavaScript는 그 규칙을 구현한 실제 언어다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">script를 head에 두면 왜 위험한가?</div>
    <div class="wda-flip-back">HTML 요소 생성 전에 JS가 실행돼 DOM을 찾지 못해 오류가 날 수 있다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">defer와 async의 차이는?</div>
    <div class="wda-flip-back">defer는 HTML 완료 후 실행되어 순서가 보장되지만, async는 다운로드 즉시 실행되어 순서가 보장되지 않는다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">console.log는 왜 쓰나?</div>
    <div class="wda-flip-back">디버깅과 값 확인용 개발자 도구이며, 사용자 화면에는 보이지 않는다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">use strict는 무엇을 하나?</div>
    <div class="wda-flip-back">JavaScript를 엄격 모드로 실행해 실수를 즉시 에러로 만든다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">module의 핵심 특징은?</div>
    <div class="wda-flip-back">독립된 파일 단위로 전역 오염을 방지하고, strict 모드가 자동 적용된다.</div>
  </div>
</div>
