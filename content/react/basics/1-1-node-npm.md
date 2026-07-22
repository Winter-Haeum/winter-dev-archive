---
title: "1-1 Node.js와 npm 이해하기"
status: "completed"
description: "Node.js 런타임과 npm 패키지 매니저의 역할, React 개발 환경에서 이 둘이 필요한 이유를 정리한다."
category: "React"
section: "Basics"
tags:
  - react
  - nodejs
  - npm
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
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-compare-ttl{font-size:.84rem;font-weight:700;margin-bottom:8px}
.wda-flow{display:flex;flex-wrap:wrap;gap:4px;margin:.8rem 0 1.6rem;align-items:center}
.wda-fnode{flex:1 1 90px;border:1px solid rgba(128,128,128,.18);border-radius:8px;padding:10px 12px;text-align:center;min-width:80px}
.wda-fnode-ico{font-size:1.1rem;margin-bottom:4px}
.wda-fnode-ttl{font-size:.88rem;font-weight:700;margin-bottom:3px}
.wda-fnode-dsc{font-size:.82rem;line-height:1.55}
.wda-farrow{color:rgba(139,92,246,.45);font-size:1.1rem;flex-shrink:0;padding:0 2px;align-self:center}
@media(max-width:600px){.wda-flow{flex-direction:column}.wda-farrow{transform:rotate(90deg)}}
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
  • <strong>Node.js 이해하기</strong> — JavaScript 런타임의 개념과 역할을 알아봅니다.<br>
  • <strong>npm 이해하기</strong> — 패키지 매니저의 역할과 필요성을 파악합니다.<br>
  • <strong>프론트엔드와의 관계</strong> — React 개발에서 Node.js가 필요한 이유를 이해합니다.<br>
  • <strong>개발 환경 구성</strong> — 모던 개발 환경의 기본 구조를 파악합니다.
</div>

---

<h2>1. Node.js란?</h2>

**📌 정의: JavaScript 런타임 (Runtime)**

Node.js는 **"브라우저 밖에서도 자바스크립트를 실행할 수 있게 도와주는 실행 환경"**입니다.

원래 자바스크립트는 크롬이나 사파리 같은 **웹 브라우저 안에서만** 동작하는 언어였지만, Node.js 덕분에 컴퓨터(서버) 어디서든 실행이 가능해졌습니다.

**💡 쉬운 비유: 게임기와 게임팩**

이 개념이 어렵다면 **게임기**를 떠올려보세요.

- **게임팩 (JavaScript):** 혼자서는 아무것도 할 수 없는 **코드 뭉치**입니다.
- **게임기 (런타임/Node.js):** 게임팩을 꽂으면 화면에 게임을 실행시켜 주는 **기계(환경)**입니다.

즉, **JavaScript(코드)**를 실행시켜 주는 **기계**가 바로 **Node.js**입니다.

**📌 역할의 확장**

- **과거:** 브라우저 내부(프론트엔드)에서만 사용.
- **현재:** Node.js 덕분에 **서버, 데스크톱 프로그램** 등 컴퓨터 어디서든 사용 가능.

---

<h2>2. require vs import (Deep Dive)</h2>

**📝 CommonJS (전통)**

Node.js가 처음 생겼을 때부터 사용해온 고유 방식입니다.

- **코드 예시**

```javascript
// 가져오기
const fs = require('fs');
// 내보내기
module.exports = app;
```

- **특징:**
  - 설정 파일(`webpack.config.js` 등)에서 여전히 많이 보게 됩니다.
  - 별도의 설정 없이 바로 사용할 수 있습니다.

**📝 ES Modules (표준)**

최신 자바스크립트 공식 표준 방식입니다.

- **코드 예시**

```javascript
// 가져오기
import React from 'react';
// 내보내기
export default App;
```

- **특징:**
  - React, Vite 등 최신 프론트엔드 프로젝트의 기본 방식입니다.
  - Node.js에서 ES Modules를 사용하려면 보통 `package.json`에 `"type": "module"`을 설정하거나, 파일 확장자를 `.mjs`로 사용합니다.  
React/Vite 같은 프론트엔드 개발 환경에서는 도구(번들러)가 `import`/`export` 문법을 처리해주는 경우가 많습니다.

### 💡 주의사항 (Error 발생 1순위)

<div class="wda-callout wda-cw">
  <strong>섞어 쓰기 주의</strong> : 초보자 단계에서는 한 파일 안에서 <code>require</code>와 <code>import</code>를 섞어 쓰지 않는 것이 안전합니다.<br>
  <strong>통일 필요</strong> : 프로젝트가 CommonJS 방식인지 ES Modules 방식인지에 맞춰 한 가지 방식으로 통일하세요.
</div>

---

<h2>3. npm과 패키지: 밀키트 비유</h2>

**📌 npm이란? (Node Package Manager)**

Node.js를 설치하면 자동으로 깔리는 **"기본 패키지 관리자"**입니다.

**역할:** 개발이라는 요리를 할 때, 필요한 재료(패키지)와 도구(의존성)를 자동으로 장바구니에 담아주고 관리해 주는 "주방 보조"입니다.

**📌 핵심 용어 3대장 (비유)**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">패키지 (Package) — 밀키트 재료</div>
    <div class="wda-fcard-dsc">직접 농사짓지(코딩하지) 않고 마트에서 사 오는 <strong>"재사용 가능한 코드 묶음"</strong>입니다.<br>(예: React, Axios, Lodash 등)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">의존성 (Dependency) — 필수 준비물</div>
    <div class="wda-fcard-dsc">라면을 끓이려면 '물'과 '냄비'가 꼭 필요하듯, 어떤 패키지가 돌아가기 위해 <strong>반드시 필요한 다른 패키지</strong>들을 말합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">빌드 (Build) — 요리 완성</div>
    <div class="wda-fcard-dsc">재료들을 볶고 끓여서(압축/변환) 손님(브라우저)에게 나가는 <strong>최종 완성품</strong>을 만드는 과정입니다.</div>
  </div>
</div>

**⚙️ npm이 하는 일 (구체적)**

주방 보조인 npm은 다음과 같은 일들을 처리합니다.

| **역할 (Role)** | **구체적인 하는 일 (Task)** |
| --- | --- |
| **패키지 설치 및 삭제** | 필요한 라이브러리(재료)를 인터넷에서 **다운로드**하거나, 필요 없어진 것을 **삭제**합니다. |
| **버전 관리** | 각 라이브러리의 **버전(유통기한)**을 확인하고, 너무 오래되거나 호환되지 않는 것을 관리합니다. |
| **의존성 자동 해결** | A라는 도구를 설치할 때 B가 필수라면, 시키지 않아도 **B까지 알아서 같이 설치**해 줍니다. |
| **스크립트 실행** | 프로젝트를 **실행(`start`)**하거나 배포용으로 **빌드(`build`)**하는 등 복잡한 명령어를 관리합니다. |

---

<h2>4. npm 저장소 (npm Registry)</h2>

**📌 개념: 전 세계 개발자들의 공용 창고**

**npmjs.com**은 전 세계 개발자들이 자신이 만든 코드를 올리고 공유하는 거대한 온라인 저장소입니다. 우리는 여기서 필요한 '밀키트(패키지)'를 검색하고 다운로드할 수 있습니다.

**💡 엄청난 규모 (Ecosystem)**

이곳은 세계에서 가장 큰 오픈소스 생태계 중 하나입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">등록된 패키지</div>
    <div class="wda-fcard-dsc"><strong>200만 개</strong> 이상 (작성 시점 기준 대략치, 없는 게 없음)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">주간 다운로드</div>
    <div class="wda-fcard-dsc"><strong>300억 회</strong> 이상 (작성 시점 기준 대략치, 전 세계 표준)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">비용</div>
    <div class="wda-fcard-dsc">대부분 <strong>무료</strong>로 사용 가능</div>
  </div>
</div>

<div class="wda-callout wda-ci">
  등록된 패키지 수와 주간 다운로드 수는 계속 변하므로, 정확한 숫자보다 <strong>'매우 큰 규모의 오픈소스 패키지 저장소'</strong>로 이해하면 됩니다. 위 수치는 작성 시점 기준의 예시이며 변동 가능합니다.
</div>

**🧪 인기 패키지 예시 (Best Sellers)**

마트에서 가장 잘 팔리는 상품들처럼, 개발자들이 필수적으로 사용하는 패키지들입니다. (아래 수치는 작성 시점 기준 대략치이며 변동 가능합니다.)

| **패키지 이름** | **용도** | **주간 다운로드 (대략, 변동 가능)** |
| --- | --- | --- |
| **react** | 사용자 화면(UI)을 만드는 라이브러리 | 2,500만+ |
| **lodash** | 편리한 유틸리티 함수 모음 | 5,000만+ |
| **axios** | 서버와 통신(HTTP 요청)하는 도구 | 4,500만+ |

---

<h2>⁉️ FAQ (자주 묻는 질문)</h2>

### Q1. Node.js 정의 확인

**질문:** Node.js는 브라우저 밖에서 JavaScript를 실행할 수 있게 해주는 런타임이다. (O / X)

- **정답:** **O (맞습니다)**
- **해설:** Node.js 덕분에 웹 브라우저뿐만 아니라 서버나 내 컴퓨터(로컬)에서도 자바스크립트를 실행할 수 있게 되었습니다.

### Q2. React와 Node.js의 관계

**질문:** React는 프론트엔드인데, 왜 개발 환경에 Node.js를 설치해야 하나요?

- **정답:** **npm을 통해 라이브러리를 설치하고, 빌드 도구를 실행하기 위해서**입니다.
- **해설:** 우리가 짠 코드를 브라우저가 이해할 수 있게 변환해 주는 **'개발 도구(Webpack, Vite 등)'가 Node.js 위에서 돌아가기 때문**입니다. (즉, 브라우저 실행용이 아니라 **개발 도구 실행용**입니다.)

---

<h2>5. 실전 npm 명령어 (Basic Commands)</h2>

**✅ 프로젝트 초기화 (Start)**

프로젝트를 처음 시작할 때, "이 폴더를 npm으로 관리하겠다"라고 선언하는 과정입니다.

```bash
# 1. 새 프로젝트 시작 (이름, 버전 등을 일일이 물어봄)
npm init

# 2. 기본값으로 빠르게 시작 (질문 없이 모든 설정 Yes!) -> 추천 👍
npm init -y
```

**✅ 패키지 설치 (Install)**

필요한 라이브러리(밀키트 재료)를 가져오는 명령어입니다.  
`install`은 너무 자주 써서 **`i`** 한 글자로 줄여 쓸 수 있습니다.

```bash
# 1. 기본 설치 (사용자 배포용)
npm install react
npm i react   # (줄임말)

# 2. 개발 전용 설치 (개발할 때만 필요한 도구들, 예: eslint)
npm i -D eslint
```

**`D` 옵션:** "이건 실제 서비스엔 필요 없고, 개발할 때만 쓸 거야"라는 뜻입니다.

**✅ 관리 및 실행 (Management)**

설치된 패키지를 지우거나, 프로젝트를 실행할 때 사용합니다.

| **명령어** | **설명** | **비고** |
| --- | --- | --- |
| **`npm install`** | **전체 복구:** `package.json`에 적힌 모든 패키지를 한 번에 설치합니다. | 협업 시 동료의 코드를 받아왔을 때 필수! |
| **`npm uninstall`** | **삭제:** 필요 없는 패키지를 제거합니다. | 예: `npm uninstall jquery` |
| **`npm update`** | **업데이트:** 설치된 패키지들을 최신 버전으로 올려줍니다. | `package.json` 규칙에 따라 안전하게 업데이트합니다. |
| **`npm run [이름]`** | **실행:** 미리 정의해 둔 스크립트(명령어)를 실행합니다. | 예: `npm run start` (서버 켜기) |

---

<h2>6. 프론트엔드에서 왜 Node.js가 필요할까?</h2>

React나 Vue 같은 프론트엔드 라이브러리는 브라우저에서 실행되지만, 코드를 작성하고 완성품을 만드는 과정(공장)에서는 Node.js가 필수적으로 사용됩니다.

**🆚 단계별 역할 비교**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">개발 단계 (Development) — "작업 환경 제공"</div>
    • <strong>개발 서버 실행:</strong> 코드를 수정하면 즉시 화면에 반영해 줍니다.<br>
    • <strong>코드 변환 (JSX → JS):</strong> 브라우저가 이해 못 하는 리액트 문법을 변환합니다.<br>
    • <strong>도구 실행:</strong> 코드 검사(ESLint), 테스트(Jest) 등을 돌립니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">빌드 단계 (Build) — "최종 포장"</div>
    • <strong>최적화된 번들 생성:</strong> 여러 개의 파일을 하나로 뭉치고 용량을 줄입니다.<br>
    • <strong>코드 압축 (Minify):</strong> 공백이나 긴 변수명을 줄여 로딩 속도를 높입니다.<br>
    • <strong>정적 파일 생성:</strong> 서버에 올릴 수 있는 최종 HTML/CSS/JS 파일을 만듭니다.
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  "개발과 빌드에 필요하지, 실제 서비스는 브라우저에서 실행됨!"<br><br>
  우리가 Node.js를 설치하는 이유는 <strong>브라우저가 이해할 수 있는 형태(HTML, CSS, JS)로 변환해 주는 '도구'들을 실행하기 위함</strong>입니다.
</div>

---

<h2>7. 개발 흐름 이해하기</h2>

프론트엔드 개발이 실제 사용자가 보는 화면이 되기까지의 전체적인 흐름입니다.

**⚙️ 전체 흐름 (3단계)**

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ico">1️⃣</div><div class="wda-fnode-ttl">개발 환경 (Node.js)</div><div class="wda-fnode-dsc">코드를 작성하고 변환(요리)하는 곳</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">2️⃣</div><div class="wda-fnode-ttl">배포 (서버/CDN)</div><div class="wda-fnode-dsc">완성 파일(HTML/CSS/JS)을 진열해 두는 곳</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">3️⃣</div><div class="wda-fnode-ttl">실행 환경 (브라우저)</div><div class="wda-fnode-dsc">파일을 받아 화면에 보여주는 곳</div></div>
</div>

**⚙️ 개발 환경 상세 (Node.js 내부 과정)**

Node.js 안에서는 소스 코드가 다음과 같은 과정을 거쳐 완성품이 됩니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">소스 코드 (Source)</div><div class="wda-sdsc">개발자가 작성한 원본 코드입니다. (예: JSX, TS)</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">변환/번들 (Bundle)</div><div class="wda-sdsc">여러 개의 파일을 하나로 뭉치고, 브라우저가 이해할 수 있게 바꿉니다. (도구: Webpack)</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">최적화 (Optimize)</div><div class="wda-sdsc">불필요한 공백을 지우거나 용량을 줄입니다. (기법: Minify)</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody"><div class="wda-sttl">결과물 (Build)</div><div class="wda-sdsc">최종적으로 완성된 파일입니다. (결과: JS, CSS)</div></div>
  </div>
</div>

---

<h2>8. Node.js vs 브라우저 (환경 차이)</h2>

**🆚 환경별 기능 비교**

| **구분** | **Node.js 환경 (서버/로컬)** | **브라우저 환경 (크롬/사파리)** |
| --- | --- | --- |
| **파일 시스템**(File System) | **접근 가능 (O)**<br>`fs.readFile` 등을 통해 내 컴퓨터의 파일을 읽고 쓸 수 있습니다. | **접근 불가 (X)**<br>보안상 사용자의 컴퓨터 파일에 함부로 접근할 수 없습니다. |
| **화면 제어**(DOM) | **접근 불가 (X)**<br>화면이 없으므로 `document`나 `window` 객체를 사용할 수 없습니다. | **접근 가능 (O)**<br>`document.getElementById` 등으로 HTML 요소를 조작합니다. |
| **전역 객체**(Global Object) | **`global`**<br>`console.log(global)` | **`window`**<br>`console.log(window)` |
| **주요 API** | `require('fs')`<br>`process.env` (환경 변수) | `window.location.href`<br>`localStorage` (저장소) |

**🆚 비교 정리**

<div class="wda-callout wda-ci">
  "같은 JavaScript지만 사용 가능한 API가 다르다!"<br><br>
  문법(<code>if</code>, <code>for</code>, <code>function</code> 등)은 똑같지만, Node.js는 <strong>파일/서버 관리</strong>에 특화되어 있고, 브라우저는 <strong>화면(UI) 제어</strong>에 특화되어 있습니다.<br>
  따라서 Node.js에서 <code>alert()</code>를 쓰거나 브라우저에서 <code>fs.readFile()</code>을 쓰면 에러가 발생합니다.
</div>

---

<h2>9. 개발 환경 구성 요약</h2>

React 개발을 시작하려면 다음 4가지가 준비되어 있어야 합니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">1. Node.js — 자바스크립트 실행 환경 (Runtime)</div>
    <div class="wda-fcard-dsc">개발 도구들을 실행하기 위한 <strong>필수 기반</strong>입니다. (이게 없으면 시작조차 못 합니다.)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">2. npm — 패키지 관리자 (Manager)</div>
    <div class="wda-fcard-dsc">Node.js를 설치하면 <strong>자동으로 함께 설치</strong>됩니다. (따로 설치할 필요가 없습니다.)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">3. 코드 에디터 — 코드 작성 도구 (Editor)</div>
    <div class="wda-fcard-dsc"><strong>VS Code</strong>가 가장 대중적이고 강력한 기능을 제공하여 권장합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">4. 터미널 — 명령어 실행 창구 (Terminal)</div>
    <div class="wda-fcard-dsc"><code>npm install</code>처럼 컴퓨터에게 일을 시키는 <strong>명령어를 입력하는 곳</strong>입니다.</div>
  </div>
</div>

---

<h2>10. 함께 알면 좋은 친구들 (참고)</h2>

Node.js와 npm이 가장 표준이지만, 더 빠르거나 효율적인 대안들이 존재합니다.

**📌 런타임 (Node.js의 대안)**

Node.js처럼 자바스크립트를 실행해 주는 다른 기계들입니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">Deno (디노)</div>
    • <strong>Node.js 창시자</strong>가 기존의 아쉬웠던 점(보안 등)을 개선해서 새로 만든 런타임입니다.<br>
    • 보안이 기본적으로 강력하게 설정되어 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">Bun (번)</div>
    • 최근에 등장한 <strong>엄청나게 빠른</strong> 런타임입니다.<br>
    • 이름처럼 <strong>"토끼처럼 빠르다"</strong>는 의미를 담고 있습니다.
  </div>
</div>

**📌 패키지 매니저 (npm의 대안)**

npm처럼 라이브러리를 설치하고 관리해 주는 다른 도구들입니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">Yarn (얀)</div>
    • <strong>Facebook(Meta)</strong>에서 만들었습니다.<br>
    • 과거에 npm이 느렸을 때, 훨씬 빠른 속도로 인기를 끌었습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">pnpm</div>
    • <strong>"Performant npm"</strong>의 약자입니다.<br>
    • 같은 패키지를 중복해서 저장하지 않아 <strong>디스크 용량을 효율적으로 절약</strong>합니다.
  </div>
</div>

---

<h2>✅ 핵심 요약</h2>

<table class="wda-summary-table">
  <tr>
    <th>핵심 키워드</th>
    <th>정의 및 역할</th>
  </tr>
  <tr>
    <td><strong>Node.js</strong></td>
    <td><strong>"JS 실행 환경"</strong><br>브라우저 밖(내 컴퓨터, 서버)에서도 JavaScript를 실행할 수 있게 해주는 런타임 환경입니다.</td>
  </tr>
  <tr>
    <td><strong>npm</strong></td>
    <td><strong>"패키지 관리자"</strong><br>Node.js의 짝꿍으로, 필요한 라이브러리(재료)를 설치하고 프로젝트 관리를 담당하는 도구입니다.</td>
  </tr>
  <tr>
    <td><strong>프론트엔드 개발</strong></td>
    <td><strong>"도구 실행용"</strong><br>React 같은 프론트엔드 개발 시, <strong>개발 도구 실행과 빌드</strong>를 위해 Node.js가 필요합니다. (단, 실제 앱 실행은 브라우저에서!)</td>
  </tr>
</table>
