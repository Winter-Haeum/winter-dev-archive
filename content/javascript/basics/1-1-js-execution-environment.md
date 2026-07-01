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
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.83rem;line-height:1.75}
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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.84rem;font-weight:700;margin-bottom:3px}
.wda-fcard-dsc{font-size:.78rem;opacity:.72;line-height:1.5}
.wda-fcard-list{list-style:none;padding:0;margin:.4rem 0 0;font-size:.71rem;line-height:1.6;opacity:.75}
.wda-fcard-list li::before{content:"· "}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(245,158,11,.15);color:#f59e0b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.81rem;font-weight:700;margin-bottom:2px}
.wda-sdsc{font-size:.78rem;opacity:.75;line-height:1.55}
.wda-sdsc ul{margin:.3rem 0 0;padding-left:1.1rem}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px}
.wda-compare-ttl{font-size:.84rem;font-weight:700;margin-bottom:8px}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:4px}
.wda-legacy{border-color:rgba(239,68,68,.22);background:rgba(239,68,68,.02)}
.wda-modern{border-color:rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.79rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:200px}
p:has(> strong:only-child){margin-top:1.6rem;margin-bottom:.2rem}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem}
.wda-callout p{margin:0 0 .45rem;font-size:.83rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
</style>

## 🎯 학습 목표

<div class="wda-goal" style="position:relative;padding-right:196px;padding-top:14px;overflow:visible;">
  <img src="/images/decoration/마스킹 테이프 (2).webp" alt="" style="position:absolute;width:110px;top:-14px;right:50px;z-index:2;pointer-events:none;opacity:.82;">
  <img src="/images/character/js 기초.webp" alt="" style="position:absolute;width:172px;bottom:-60px;right:6px;z-index:3;pointer-events:none;opacity:.92;transform:rotate(5deg);">
  🟡 <strong>JavaScript 정의</strong> — JavaScript가 무엇이고 웹에서 어떤 역할을 하는지 이해한다.<br>
  🔄 <strong>Modern vs Legacy</strong> — alert, script 태그의 올바른 사용법과 변화를 이해한다.<br>
  ⚙️ <strong>실행 환경</strong> — 브라우저 Console과 Node.js 환경의 차이를 이해한다.<br>
  🔒 <strong>엄격 모드</strong> — use strict가 왜 필요한지 실수 예시를 통해 체감한다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. JavaScript란 무엇인가?</h2>
  <img src="/images/decoration/별 아이콘 (1).webp" alt="" style="position:absolute;width:90px;top:-22px;right:8px;z-index:2;pointer-events:none;opacity:.68;transform:rotate(12deg);">
</div>

JavaScript는 브라우저가 이해할 수 있는 유일한 프로그래밍 언어다.

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

<div class="wda-callout wda-cw">
  <span class="wda-clabel">브라우저에서 실행 불가</span>
  • Python → 브라우저에 엔진 없음 ✗<br>
  • Java → 브라우저에 엔진 없음 ✗<br>
  • C++ → 브라우저에 엔진 없음 ✗
</div>

<div class="wda-callout wda-cs">
  💡 웹사이트에서 버튼 클릭, 폼 검증, 애니메이션 등 모든 동적 기능은 JavaScript로 구현된다.
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

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;padding-left:58px;">
  <img src="/images/decoration/잎사귀 아이콘 (6).webp" alt="" style="position:absolute;width:48px;top:-10px;left:2px;z-index:2;pointer-events:none;opacity:.76;transform:rotate(-14deg);">
  <h2>3. ECMAScript vs JavaScript</h2>
</div>

ECMAScript는 레시피(명세)이고, JavaScript는 요리(실제 언어)다.

**📊 ECMAScript와 JavaScript 비교**

| 구분 | ECMAScript (ES) | JavaScript |
|---|---|---|
| 한 줄 개념 | 레시피(명세)다 | 요리(실제 언어)다 |
| 역할 | 언어의 규칙과 문법을 정의한다 | ECMAScript 표준을 실제로 구현한다 |
| 내용 | 언어의 규칙과 문법 정의(Spec) | 브라우저가 실제로 만든 언어다 |
| 선언 규칙 | "변수는 이렇게 선언해야 한다" | 규칙에 맞게 실제로 사용한다 |
| 함수 규칙 | "함수는 이러한 규칙을 따른다" | 함수를 실제로 실행한다 |
| 포함 기능 | 순수 언어 규칙만 정의한다 | Web API를 포함한다 |
| Web API 예시 | 해당 없음 | DOM, fetch, localStorage 등 |

**📅 주요 버전**

| 버전 | 설명 |
|---|---|
| ES5 (2009) | 오래된 표준이다 |
| ES6 (2015) | 대격변이다 (let, const, 화살표 함수) |
| ESNext | 매년 새로운 기능이 추가된다 |

**📌 핵심 구분**

<div class="wda-callout wda-cy">
  • ECMAScript는 <strong>실행되는 언어가 아니라 규칙 문서</strong>다.<br>
  • 브라우저에서 실제로 사용하는 것은 <strong>항상 JavaScript</strong>다.<br>
  • <strong>"ECMAScript = 표준 / JavaScript = 구현"</strong>으로 구분한다.
</div>

---

<div aria-hidden="true" style="position:relative;height:0;overflow:visible;z-index:2;"><img src="/images/decoration/잎사귀 아이콘 (3).webp" alt="" style="position:absolute;top:-22px;right:10px;width:52px;pointer-events:none;opacity:.76;transform:rotate(-10deg);"></div>

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
<scriptsrc="main.js"></script>
</body>
```

• script 태그 위치에 따라 실행 시점이 달라진다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. script 태그의 위치</h2>
</div>

• HTML 파일은 **위에서 아래로 순서대로 해석**된다.<br>
• 따라서 script 태그의 위치에 따라 **JavaScript 실행 결과가 달라진다**.

**⚠️ head 배치 (문제 발생 가능)**

<div style="position:relative;overflow:visible;padding-right:68px;">
  HTML 요소가 아직 만들어지기 전에 JavaScript가 먼저 실행된다.
  <img src="/images/decoration/꽃 아이콘 (4).webp" alt="" style="position:absolute;width:52px;top:50%;right:8px;transform:translateY(-50%) rotate(10deg);z-index:2;pointer-events:none;opacity:.76;">
</div>

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

<div class="wda-callout wda-cw">
  <span class="wda-clabel">⚠️ 주의사항</span>
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

<div class="wda-callout wda-cs">
  <span class="wda-clabel">💡 권장 방식</span>
  • HTML 파싱이 완료된 후 JS가 실행된다.<br>
  • DOM 요소를 안전하게 사용할 수 있다.<br>
  • 초보자가 가장 이해하기 쉬운 방식이다.
</div>

**💬 배치 원칙**

<div class="wda-callout wda-cs">
  • script는 <strong>HTML 파싱 순서의 영향을 받는다</strong>.<br>
  • head에 두면 <strong>요소가 아직 없어 실패할 수 있다</strong>.<br>
  • body 끝에 두면 <strong>HTML 생성 후 실행되어 안전하다</strong>.<br>
  • defer를 사용하면 <strong>head에 두어도 HTML 완료 후 실행된다</strong>.<br>
  • <code>document.querySelector()</code>는 <strong>이미 생성된 HTML 요소만 찾을 수 있다</strong>.<br><br>
  → 그래서 해결 방법은 <strong>body 끝 배치</strong> 또는 <strong>defer 사용</strong>이다.
</div>

---

## 6. 가장 권장하는 방식: defer (비교 표)

<div aria-hidden="true" style="position:relative;height:0;overflow:visible;z-index:2;"><img src="/images/decoration/스탬프 아이콘 (4).webp" alt="" style="position:absolute;top:-30px;right:14px;width:66px;pointer-events:none;opacity:.76;transform:rotate(-8deg);"></div>

| 구분 | 기본적으로 | 연기하다 (defer) | 비동기 (async) |
|---|---|---|---|
| script 형태 | `<script src="..."></script>` | `<script defer src="..."></script>` | `<script async src="..."></script>` |
| HTML 해석 | 해석 일시중지 | 해석과 동시에 다운로드 | 해석과 동시에 다운로드 |
| 실행 시점 | 다운로드/실행 후 해석 재개 | HTML을 다 읽은 후 실행 | 다운로드되자마자 즉시 실행 |
| 특징 | HTML 해석이 멈춘다 | DOMContentLoaded 이벤트 직전 실행 | 실행 순서 보장 안 됨 |

<div class="wda-callout wda-cs" style="position:relative;padding-right:56px;overflow:visible;">
  <img src="/images/decoration/반짝이 아이콘 (1).webp" alt="" style="position:absolute;width:42px;top:-12px;right:8px;z-index:2;pointer-events:none;opacity:.76;transform:rotate(12deg);">
  <span class="wda-clabel">💡 사용 팁</span>
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

**예시 코드 비교**

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

<div class="wda-callout wda-cs">
  <span class="wda-clabel">💡 실무 팁</span>
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

<div class="wda-callout wda-cy" style="position:relative;padding-right:156px;padding-top:14px;overflow:visible;">
  <img src="/images/character/디버깅.webp" alt="" style="position:absolute;width:136px;bottom:-52px;right:8px;z-index:3;pointer-events:none;opacity:.92;transform:rotate(5deg);">
  <span class="wda-clabel">개념</span>
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

| 구분 | 설명 |
|---|---|
| 오류 찾기 (디버깅) | "여기까지 코드가 실행됐는가?", "이 변수에 어떤 값이 들어있는가?"를 확인할 때 사용한다. |
| 데이터 확인 | 서버에서 가져온 데이터가 올바른지 **눈으로 직접 확인**할 때 사용한다. |

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

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. 개발자가 자주 이용하는 관계</h2>
  <img src="/images/decoration/구름 아이콘 (5).webp" alt="" style="position:absolute;width:108px;top:-28px;right:10px;z-index:2;pointer-events:none;opacity:.74;transform:rotate(-6deg);">
</div>

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
constPI =3.14;

// 에러가 안 나고 그냥 무시됨 (일반 모드)
PI =5;

console.log(PI);// 여전히 3.14
// 왜 안 바뀌지? 하고 방황
```

• const로 선언한 변수는 값을 변경할 수 없다.<br>
• 일반 모드에서는 에러가 바로 보이지 않는다.

→ 오류를 알려주지 않아 문제를 찾기 어렵다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>12. "엄격한 사용" 수정 모드 (use strict)</h2>
  <img src="/images/decoration/느낌표 아이콘 (5).webp" alt="" style="position:absolute;width:46px;top:-12px;right:12px;z-index:2;pointer-events:none;opacity:.76;">
</div>

• "이제부터 법대로 합시다."<br>
• JavaScript 엔진에게 **엄격한 규칙 적용을 요청한다**.

**📌 기본 개념**

파일 **최상단**에 `"use strict";` 한 줄만 추가하면 된다.

```javascript
"use strict";
```

이 한 줄로 JavaScript 엔진이 **실수를 조용히 넘기지 않고 에러로 처리**한다.

**🛡️ use strict로 막아주는 대표 실수**

**🔹 변수 선언 필수**

```javascript
"use strict";

x =10;
// ❌ ReferenceError: x is not defined
```

• let, const 없이 변수를 사용하면 에러가 발생한다.<br>
• 의도치 않은 전역 변수 생성을 막는다.

---

**🔹 예약어 사용 금지**

```javascript
"use strict";

let public =10;
// ❌ SyntaxError: Unexpected strict mode reserved word
```

• JavaScript에서 예약된 단어는 변수명으로 사용할 수 없다.<br>
• 문법 단계에서 바로 에러를 발생시킨다.

---

**🔹 조용히 실패하던 에러를 밖으로 드러낸다**

```javascript
"use strict";

constPI =3.14;
PI =5;
// ❌ TypeError: Assignment to constant variable
```

<div class="wda-callout wda-ci" style="position:relative;padding-left:62px;overflow:visible;">
  <img src="/images/decoration/말풍선 아이콘 (3).webp" alt="" style="position:absolute;width:46px;top:50%;left:8px;z-index:2;pointer-events:none;opacity:.76;transform:translateY(-50%) rotate(-6deg);">
  <span class="wda-clabel">🔹 설명</span>
  • const 변수는 값 변경이 불가능하다.<br>
  • 일반 모드에서는 조용히 무시되던 코드가 strict 모드에서는 즉시 에러로 표시된다.
</div>

---

## Q. 모든 파일에 다 써야 하나?

• 옛날 방식(Script)에서는 **매 파일마다 직접 작성해야 했다.**<br>
• 하지만 **현대 방식(Module)**에서는 **자동으로 strict 모드가 적용된다.**

```html
<scripttype="module">
// "use strict"를 쓰지 않아도 자동 적용된다
  a =10;// ❌ 에러 발생
</script>
```

• `type="module"`을 사용하면 strict 모드가 기본값이다.<br>
• 따로 `"use strict";`를 작성하지 않아도 된다.

---

## 13. 모듈(Module)이란?

<div style="position:relative;display:inline-block;overflow:visible;">
  <span>거대한 코드 기능을 나눠 놓은 작은 파일 조각이다.</span>
  <img src="/images/decoration/책갈피 아이콘 (2).webp" alt="" aria-hidden="true" style="position:absolute;left:calc(100% + 10px);top:50%;width:46px;transform:translateY(-50%) rotate(6deg);z-index:2;pointer-events:none;opacity:.76;">
</div>

**✨ 특징**

• **활동성** — 서로의 변수를 침범하지 않는다.<br>
• **자동 플러그인** — `"use strict"`를 따로 작성하지 않아도 자동으로 strict 모드가 적용된다.<br>
• **지연 실행** — `defer` 속성처럼 HTML 해석이 끝난 뒤 실행된다.

**🔧 응용**

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
<scripttype="module">
let x =10;// 이 파일 안에서만 유효
</script>
```

• 해당 파일 내부에서만 변수가 유효하다.<br>
• 전역 변수 오염을 방지한다.<br>
• strict 모드가 자동 적용된다.

**📌 요약 정리**

• 최신 프론트엔드 개발은 **모듈 방식**을 사용한다.<br>
• 모듈은 코드의 **안전성**과 **관리성**을 높인다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>14. 실습 과제</h2>
  <img src="/images/decoration/소품 아이콘 (7).webp" alt="" style="position:absolute;width:50px;top:-10px;right:10px;z-index:2;pointer-events:none;opacity:.76;transform:rotate(8deg);">
</div>

```html
<!DOCTYPE html>
<html>
<body>
<h1>나의 첫 JS</h1>
<script>
    "use strict";
console.log("Hello, World!");
const name ="JavaScript";
// const는 값 변경 불가
</script>
</body>
</html>
```

**🔹 힌트 & 트러블슈팅**

**🖥️ Console 안 보일 때**

• F12<br>
• 우클릭 → 검사<br>
• Console 탭

**⚠️ 에러 발생 시**

• SyntaxError → 오타 확인<br>
• Assignment to constant variable → let 사용

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>✅ 핵심 요약</h2>
  <img src="/images/decoration/핀 아이콘 (1).webp" alt="" style="position:absolute;width:50px;top:-14px;right:12px;z-index:2;pointer-events:none;opacity:.76;transform:rotate(8deg);">
</div>

<div style="position:relative;overflow:visible;">

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>JavaScript 기본</strong></td>
    <td>• JavaScript는 <strong>브라우저가 이해하는 유일한 언어</strong>다.<br>• 웹의 <strong>동작(행동)</strong>을 담당한다.</td>
  </tr>
  <tr>
    <td><strong>브라우저 구조</strong></td>
    <td>• HTML 파서 + CSS 파서 + <strong>JavaScript 엔진</strong>으로 구성된다.<br>• JS 엔진 예: <strong>V8, SpiderMonkey</strong></td>
  </tr>
  <tr>
    <td><strong>다른 언어와 차이</strong></td>
    <td>• Python / Java / C++은 <strong>브라우저에서 실행 불가</strong>다.<br>• 이유: 브라우저에 해당 언어 엔진이 없다.</td>
  </tr>
  <tr>
    <td><strong>ECMAScript vs JavaScript</strong></td>
    <td>• <strong>ECMAScript = 규칙(표준 문서)</strong>다.<br>• <strong>JavaScript = 그 규칙을 구현한 실제 언어</strong>다.</td>
  </tr>
  <tr>
    <td><strong>script 작성 방식</strong></td>
    <td>• 내부 스크립트: HTML 안에 직접 작성한다.<br>• 외부 스크립트: JS 파일을 분리해 불러온다.</td>
  </tr>
  <tr>
    <td><strong>script 위치 핵심</strong></td>
    <td>• HTML은 <strong>위 → 아래 순서로 해석</strong>된다.<br>• script 위치에 따라 실행 시점이 달라진다.</td>
  </tr>
  <tr>
    <td><strong>head 배치 문제</strong></td>
    <td>• HTML 요소 생성 전에 JS가 실행될 수 있다.<br>• DOM을 못 찾아 <strong>오류 발생 가능</strong>하다.</td>
  </tr>
  <tr>
    <td><strong>body 끝 배치</strong></td>
    <td>• HTML 생성 후 JS 실행된다.<br>• DOM 접근이 <strong>가장 안전</strong>하다.</td>
  </tr>
  <tr>
    <td><strong>defer (중요)</strong></td>
    <td>• HTML 파싱과 동시에 다운로드한다.<br>• <strong>HTML 완료 후 실행</strong>된다.<br>• head에 둬도 안전하다.</td>
  </tr>
  <tr>
    <td><strong>async 특징</strong></td>
    <td>• 다운로드 완료 즉시 실행된다.<br>• 실행 순서가 <strong>보장되지 않는다</strong>.</td>
  </tr>
  <tr>
    <td><strong>Legacy vs Modern</strong></td>
    <td>• Legacy: HTML·CSS·JS가 섞여 있다.<br>• Modern: <strong>구조·표현·동작 분리</strong>한다.</td>
  </tr>
  <tr>
    <td><strong>console.log</strong></td>
    <td>• 개발자용 출력 도구다.<br>• 디버깅·값 확인에 사용한다.<br>• 사용자 화면에는 보이지 않는다.</td>
  </tr>
  <tr>
    <td><strong>Node.js 개념</strong></td>
    <td>• 브라우저 밖에서 JS 실행한다.<br>• 파일 접근, 서버, DB 연결 가능하다.</td>
  </tr>
  <tr>
    <td><strong>use strict</strong></td>
    <td>• JavaScript를 <strong>엄격 모드</strong>로 실행한다.<br>• 실수를 즉시 에러로 만든다.</td>
  </tr>
  <tr>
    <td><strong>module 핵심</strong></td>
    <td>• 모듈은 <strong>독립된 파일 단위</strong>다.<br>• 전역 오염 방지 + strict 자동 적용</td>
  </tr>
  <tr>
    <td><strong>최종 암기 포인트</strong></td>
    <td>• <strong>script → defer</strong><br>• <strong>Modern 방식 사용</strong><br>• <strong>module = 자동 strict</strong></td>
  </tr>
</table>
  <img src="/images/character/중요.webp" alt="" style="position:absolute;bottom:-20px;right:6px;width:172px;z-index:3;pointer-events:none;opacity:.88;transform:rotate(5deg);">
</div>
