---
title: "3-1 DOM이란 무엇인가요?"
status: "completed"
description: "DOM의 개념과 노드 트리 구조, document 객체, 브라우저 렌더링 과정, Live/Static 컬렉션까지 DOM 조작의 기초를 정리한다."
category: "JavaScript"
section: "DOM"
tags:
  - javascript
  - dom
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
.wda-legacy{border-color:rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
.wda-modern{border-color:rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-flow{display:flex;flex-wrap:wrap;gap:4px;margin:.8rem 0 1.6rem;align-items:center}
@media(max-width:600px){.wda-flow{flex-direction:column}}
.wda-fnode{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:10px 14px;text-align:center;flex:1 1 120px}
.wda-fnode-ico{font-size:1.1rem;margin-bottom:4px}
.wda-fnode-ttl{font-size:.88rem;font-weight:700;margin-bottom:3px}
.wda-fnode-dsc{font-size:.82rem;line-height:1.55}
.wda-farrow{font-size:1.1rem;opacity:.5;flex-shrink:0}
@media(max-width:600px){.wda-farrow{transform:rotate(90deg)}}
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
  • <strong>DOM의 개념</strong> — Document Object Model이 무엇인지 이해하게 됩니다.<br>
  • <strong>노드와 트리 구조</strong> — 노드 타입과 부모-자식-형제 관계를 파악합니다.<br>
  • <strong>document 객체</strong> — DOM의 진입점인 document 객체를 활용합니다.<br>
  • <strong>렌더링 과정</strong> — 브라우저가 HTML을 화면에 그리는 과정을 이해합니다.
</div>

---

## 1. DOM이란? (1) - 개념

**Document Object Model**은 HTML 문서를 객체로 표현한 것입니다.

### 1) HTML vs DOM 비교

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">HTML (설계도)</div>
    <strong>특징</strong> : 단순한 텍스트 파일<br>
    <strong>상태</strong> : 고정된 코드 상태
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">DOM (실제 건물)</div>
    <strong>특징</strong> : <strong>조작 가능한 객체</strong><br>
    <strong>상태</strong> : 브라우저 메모리에 로드된 상태
  </div>
</div>

### 2) HTML (설계도)

단순히 구조를 정의하는 텍스트 데이터입니다.

```jsx
<!DOCTYPE html>
<html>
  <body>
    <h1>Title</h1>
  </body>
</html>
```

### 3) DOM (실제 건물)

HTML을 토대로 브라우저가 생성한 객체 모델입니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">동적 조작과 트리 구조</span>
  <ul>
    <li><strong>동적 조작의 핵심</strong> : HTML은 텍스트일 뿐이므로 한 번 작성되면 스스로 변할 수 없습니다. 하지만 JavaScript를 통해 <strong>객체화된 DOM</strong>에 접근하면, 화면의 글자를 바꾸거나 새로운 요소를 추가하는 등 실시간으로 웹 페이지를 업데이트할 수 있습니다.</li>
    <li><strong>트리(Tree) 구조</strong> : DOM은 위에서 아래로 뻗어 나가는 계층적 구조를 가집니다. 이를 'DOM 트리'라고 부르며, 각 구성 요소는 <strong>노드(Node)</strong>라고 불립니다.</li>
    <li><strong>API로서의 역할</strong> : DOM은 단순히 구조를 보여주는 것이 아니라, 프로그래밍 언어(JS)가 브라우저에 명령을 내릴 수 있도록 연결해 주는 인터페이스(API) 역할을 수행합니다.</li>
  </ul>
</div>

---

## 2. DOM이란? (2) - 필요성

왜 단순히 텍스트인 HTML을 객체(DOM)로 만들어야 할까요?

### 1) JavaScript의 이해

- **핵심 이유** : JavaScript는 HTML 문자열 자체를 화면 구조처럼 바로 조작하기 어렵습니다. 브라우저가 HTML을 DOM 객체로 바꿔주기 때문에 JavaScript는 프로퍼티와 메서드를 통해 요소를 선택하고 수정할 수 있습니다.
- **해결 방법** : HTML이 **객체(Object)**로 변환되어야만 JavaScript가 **프로퍼티**와 **메서드**로 접근할 수 있습니다.
  - `{ key : value }`: 객체의 기본 형태
  - **메서드**: 객체 안에 프로퍼티로 존재하는 함수

### 2) 동적 조작

- **상호작용** : 사용자의 클릭, 입력 등 이벤트에 반응하여 내용을 실시간으로 변경해야 합니다.
- **메모리 모델** : 실시간 변경을 위해서는 메모리에 구조화된 모델(DOM)이 반드시 필요합니다.

**보충 학습**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">메모리와 Property/Method</span>
  <ul>
    <li><strong>메모리 상의 존재</strong> : HTML 파일은 하드디스크에 저장된 정적 파일이지만, DOM은 브라우저가 실행될 때 <strong>RAM(메모리)</strong> 위에 생성되는 동적인 데이터 구조입니다.</li>
    <li><strong>Property vs Method 차이</strong> : <strong>Property</strong>는 <code>element.textContent</code>와 같이 해당 요소의 <strong>상태(값)</strong>를 나타내고, <strong>Method</strong>는 <code>element.appendChild()</code>와 같이 해당 요소가 수행하는 <strong>동작(함수)</strong>을 나타냅니다.</li>
    <li><strong>렌더 트리와의 관계</strong> : DOM은 브라우저 렌더링 엔진에 의해 생성되며, 이후 CSSOM(CSS Object Model)과 결합하여 화면에 그려지는 '렌더 트리'가 됩니다.</li>
  </ul>
</div>

---

## 3. HTML → DOM 변환 과정

브라우저 엔진이 HTML 파일을 읽어들여 DOM 트리를 만드는 4단계 과정입니다.

### 1) 변환 단계별 상세 내용

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">바이트 (Bytes)</div>
      <div class="wda-sdsc">서버로부터 <code>101010...</code>과 같은 2진수 데이터를 받습니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">문자 (Characters)</div>
      <div class="wda-sdsc">인코딩(UTF-8)을 통해 <code>&lt;html&gt;</code>, <code>&lt;div&gt;</code> 같은 문자로 변환됩니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">토큰 (Tokens)</div>
      <div class="wda-sdsc">문자열을 토큰(Token)으로 분해합니다. (시작태그, 종료태그 등)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">노드/트리 (Nodes/Tree)</div>
      <div class="wda-sdsc">토큰을 객체(Node)로 만들고 위계 관계(Tree)를 형성합니다.</div>
    </div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">토큰화와 노드 객체</span>
  <ul>
    <li><strong>토큰화(Tokenization)의 역할</strong> : 3단계인 토큰화 과정은 단순히 글자를 나누는 것이 아니라, HTML 명세에 따라 이것이 태그인지, 속성인지, 혹은 텍스트인지를 구분하는 사전 분석 단계입니다.</li>
    <li><strong>노드(Node) 객체의 의미</strong> : 마지막 단계에서 생성되는 '노드'는 단순한 데이터 뭉치가 아니라, JavaScript가 접근할 수 있는 다양한 프로퍼티와 메서드를 가진 객체 상태를 의미합니다.</li>
    <li><strong>변환의 목적</strong> : 이 4단계 과정을 거쳐야만 정적인 텍스트 파일이 브라우저 메모리에 상주하는 동적인 구조체(DOM)가 되어 실시간 화면 렌더링에 사용될 수 있습니다.</li>
  </ul>
</div>

---

## 4. HTML → DOM 변환 (2) - 토큰화 예시

브라우저는 HTML 코드를 아래와 같이 조각내어 분석합니다.

### 1) 분석 대상 HTML 코드 (단순한 문자열)

```jsx
<p class="intro">
  안녕
</p>
```

### 2) 분해된 토큰 세부 내용

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">StartTag</div>
      <div class="wda-sdsc"><code>p</code> (속성: <code>class="intro"</code>)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">Text</div>
      <div class="wda-sdsc">"안녕"</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">EndTag</div>
      <div class="wda-sdsc"><code>p</code></div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">결과</div>
      <div class="wda-sdsc">이 토큰들이 모여 하나의 <strong>Node</strong>가 됩니다.</div>
    </div>
  </div>
</div>

**보충 내용**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">토큰화와 노드 형성</span>
  <ul>
    <li><strong>토큰화의 의미</strong> : 토큰화는 단순한 문자열을 의미 있는 최소 단위로 나누는 과정입니다. 브라우저는 이 토큰들을 하나씩 읽으면서 현재 위치가 어디인지, 어떤 객체를 생성해야 하는지 결정합니다.</li>
    <li><strong>노드(Node)의 형성</strong> : 생성된 토큰들은 서로의 관계에 따라 트리 구조의 구성 요소인 '노드'가 되며, 최종적으로 우리가 조작할 수 있는 DOM 구조를 완성하게 됩니다.</li>
  </ul>
</div>

---

## 5. 노드(Node)란? (1) - 종류

DOM을 구성하는 기본 단위를 노드(Node)라고 합니다. 우리는 주로 **요소 노드**를 다루게 됩니다.

### 1) 노드 종류 요약 표

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">요소 노드 (Element)</div><div class="wda-fcard-dsc">HTML 태그(div, p, span 등)를 의미하며 가장 자주 다룹니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">텍스트 노드 (Text)</div><div class="wda-fcard-dsc">태그 안의 내용(공백 포함)이며 요소의 자식으로 존재합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">속성 노드 (Attribute)</div><div class="wda-fcard-dsc">id, class 등 요소의 정보이나 현대엔 별도 노드로 취급하지 않습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">주석 노드 (Comment)</div><div class="wda-fcard-dsc"><code>&lt;!-- --&gt;</code> 형태의 주석이며 이 또한 DOM에 포함됩니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">문서 노드 (Document)</div><div class="wda-fcard-dsc">DOM의 시작점(Root)이 되는 노드입니다.</div></div>
</div>

**핵심 포인트**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">실질적 조작 노드</span>
  실제로 JavaScript로 DOM을 조작할 때는 대부분 <strong>요소(Element)</strong> 노드와 <strong>텍스트(Text)</strong> 노드를 중심으로 다룹니다.
</div>

---

## 🗓️ 노드 타입 상수 (참고용)

전체 12가지 노드 타입이 정의되어 있으나, 실무에서는 굵은 글씨로 표시된 항목들 위주로 사용됩니다.

### 주요 노드 타입 요약 표

| **상수 번호** | **노드 타입 명칭 (상수)** | **설명** | **비고** |
| --- | --- | --- | --- |
| **1** | **ELEMENT_NODE** | 요소 | `<div>` 등 일반 태그 |
| 2 | ATTRIBUTE_NODE | 속성 | 잘 안 씀 |
| **3** | **TEXT_NODE** | 텍스트 | 태그 안의 문자열 |
| 4 | CDATA_SECTION_NODE | XML 전용 | 잘 안 씀 |
| 5 | ENTITY_REFERENCE_NODE | - | 사용 안 함 |
| 6 | ENTITY_NODE | - | 사용 안 함 |
| 7 | PROCESSING_INSTRUCTION_NODE | XML 명 | 잘 안 씀 |
| **8** | **COMMENT_NODE** | 주석 | `<!-- -->` |
| **9** | **DOCUMENT_NODE** | 문서 루트 | DOM 진입점 |
| 10 | DOCUMENT_TYPE_NODE | doctype | 잘 안 씀 |
| **11** | **DOCUMENT_FRAGMENT_NODE** | 임시 래퍼 | 성능 최적화용 |
| 12 | NOTATION_NODE | - | 사용 안 함 |

**핵심 포인트**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">주요 노드 번호</span>
  <ul>
    <li><strong>가장 중요한 노드</strong> : <strong>1번(요소)</strong>과 <strong>3번(텍스트)</strong>이 실무에서 가장 중요하게 다뤄집니다.</li>
    <li><strong>진입점 및 디버깅</strong> : <strong>9번(문서)</strong>은 DOM의 진입점 역할을 하며, <strong>8번(주석)</strong>은 디버깅 시 가끔 마주칩니다.</li>
    <li><strong>성능 최적화</strong> : <strong>11번(Fragment)</strong>은 여러 요소를 한 번에 추가하여 성능을 최적화할 때 유용하게 쓰입니다.</li>
  </ul>
</div>

---

## 6. 노드(Node)란? (2) - 예시

하나의 HTML 요소도 여러 개의 노드로 구성됩니다.

### 1) 대상 HTML 구조

```jsx
<p id="greeting">
  Hello
</p>
```

### 2) 구성 노드 상세 표

| **노드 타입** | **내용** | **설명** |
| --- | --- | --- |
| **Element Node** | `p` | HTML 태그 요소를 의미합니다. |
| **Attribute** | `id="greeting"` | 요소에 설정된 속성 정보입니다. |
| **Text** | `"Hello"` | 태그 내부의 문자열 데이터입니다. |
| **Comment** | `"인사"` | 코드 내 주석 처리된 부분입니다. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">노드의 결합</span>
  브라우저는 위와 같이 작성된 한 줄의 HTML 코드를 파싱하여 각각 성격이 다른 4가지 형태의 노드 객체로 분리하여 관리합니다.
</div>

---

## 7. Mini Practice: 노드 구분하기

다음 HTML 조각의 각 부분이 어떤 Node Type인지 정확히 구분합니다.

### 1) 문제 코드

```jsx
<div class="box">
  Content
</div>
<!-- End -->
```

### 2) 노드 타입 매칭

| **코드 조각** | **매칭 노드 타입 (Node Type)** | **상수 번호** |
| --- | --- | --- |
| **`div`** | **Element Node** (요소 노드) | 1 |
| **`class="box"`** | **Attribute Node** (속성 노드) | 2 |
| **`"Content"`** | **Text Node** (텍스트 노드) | 3 |
| `<!-- End -->` | **Comment Node** (주석 노드) | 8 |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">주석 노드와 공백 텍스트 노드</span>
  <ul>
    <li><strong>주석 노드의 데이터</strong> : 주석 노드는 <code>nodeValue</code> 또는 <code>data</code> 프로퍼티를 통해 그 내부 텍스트인 " End "에 접근할 수 있습니다.</li>
    <li><strong>공백과 텍스트 노드</strong> : 실제 브라우저 환경에서는 <code>div</code> 태그와 <code>Content</code> 문자열 사이의 줄바꿈(Enter) 또한 별도의 <strong>Text Node</strong>로 생성됩니다.</li>
  </ul>
</div>

---

## 8. DOM 트리 탐색 (1) - 부모와 자식

DOM은 트리 구조이므로 부모, 자식 관계로 노드를 탐색할 수 있습니다.

### 1) 트리 구조 시각화 - 계층 구조

- **div (부모)**
  - ┣ **p (첫째 자식)**
  - ┣ **p (둘째 자식)**
  - ┗ **p (막내 자식)**

### 2) 부모 및 자식 찾기 명령어

| **탐색 방향** | **명령어 (Property)** | **특징 및 설명** |
| --- | --- | --- |
| **부모 찾기** | `p.parentElement` | **div (요소만)** 찾기 |
| **부모 찾기** | `p.parentNode` | 텍스트 포함 (잘 안 씀) |
| **자식 찾기** | `div.children` | **요소 리스트** 반환 |
| **자식 찾기** | `div.childNodes` | 텍스트 포함 (**공백 주의**) |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">Element와 Node의 차이</span>
  <ul>
    <li><strong>children</strong>과 <strong>parentElement</strong>는 HTML 태그(요소)만을 대상으로 탐색합니다. 반면, <strong>childNodes</strong>나 <strong>parentNode</strong>는 요소뿐만 아니라 줄바꿈, 공백 등 텍스트 노드까지 포함하여 탐색하므로 실무에서는 주로 요소 중심의 명령어를 선호합니다.</li>
    <li><strong>공백 노드 주의사항</strong> : <strong>div.childNodes</strong>를 사용할 경우, 코드상의 들여쓰기나 줄바꿈이 빈 텍스트 노드로 인식되어 예상치 못한 결과가 나올 수 있으므로 주의가 필요합니다.</li>
  </ul>
</div>

---

## 9. DOM 트리 탐색 (2) - 형제와 디테일

특정 순서의 자식이나 형제 요소를 찾을 때 사용합니다. 'Element'가 붙은 프로퍼티를 사용하는 것이 권장됩니다.

### 1) 첫째/막내 자식 찾기

| **대상** | **명령어 (Property)** | **설명** |
| --- | --- | --- |
| **첫 번째 요소** | `div.firstElementChild` | 자식 중 가장 첫 번째 HTML 태그 선택 |
| **마지막 요소** | `div.lastElementChild` | 자식 중 가장 마지막 HTML 태그 선택 |

### 2) 형제 요소 찾기

| **대상** | **명령어 (Property)** | **설명** |
| --- | --- | --- |
| **이전 형제** | `p.previousElementSibling` | 현재 요소 바로 앞에 위치한 요소 선택 |
| **다음 형제** | `p.nextElementSibling` | 현재 요소 바로 다음에 위치한 요소 선택 |

### 3) 주의사항: 텍스트 노드의 함정

- **HTML 줄바꿈(Enter)의 영향** : HTML 코드 작성 시 가독성을 위해 넣는 **줄바꿈(Enter)**이나 **공백**도 DOM에서는 '텍스트 노드'로 취급됩니다.

### 4) 권장 vs 비권장 명령어 비교

<div class="wda-compare">
  <div class="wda-compare-card wda-legacy">
    <div class="wda-compare-label">⛔ 비권장</div>
    <div class="wda-compare-ttl">Node 기준</div>
    <code>div.firstChild;</code><br>
    높은 확률로 줄바꿈(<code>#text</code>)이 선택됨
  </div>
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-label">✅ 권장</div>
    <div class="wda-compare-ttl">Element 기준</div>
    <code>div.firstElementChild;</code><br>
    확실하게 <code>&lt;p&gt;</code>와 같은 HTML 태그가 선택됨
  </div>
</div>

**보충 내용**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">Element 접미사의 유무</span>
  <ul>
    <li><code>nextSibling</code> (노드 기준) : 요소, 텍스트, 주석을 가리지 않고 바로 다음 것을 찾습니다.</li>
    <li><code>nextElementSibling</code> (요소 기준) : 오직 다음 <strong>'HTML 태그'</strong>만을 찾아 반환합니다.</li>
    <li>실무에서는 공백이나 주석을 건너뛰고 실제 UI 구성 요소를 잡아야 하므로 <strong>Element</strong>가 포함된 프로퍼티를 쓰는 것이 안전합니다.</li>
  </ul>
</div>

---

## 10. document 객체 (1) - 개념

DOM의 진입점(Entry Point)입니다. 문서 전체를 대변하는 가장 상위 객체입니다.

### 1) 진입점 역할

- 건물(DOM)에 들어가려면 반드시 정문(**document**)을 통과해야 합니다.
- 모든 DOM 조작은 document 객체에서 시작됩니다.

### 2) 자주 사용하는 프로퍼티

| **프로퍼티 명칭** | **반환 요소 (Target)** | **설명** |
| --- | --- | --- |
| **`document.documentElement`** | **`<html>`** | 문서의 루트 요소를 반환합니다. |
| **`document.head`** | **`<head>`** | 문서의 머리말 부분을 반환합니다. |
| **`document.body`** | **`<body>`** | 문서의 본문 부분을 반환합니다. |
| **`document.title`** | **문서 제목** | 브라우저 탭에 표시되는 제목 텍스트입니다. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">document의 유일성과 주의점</span>
  <ul>
    <li><strong>유일무이한 객체</strong> : 하나의 브라우저 창(탭)에는 하나의 HTML 문서만 존재하므로, <code>document</code> 객체는 해당 페이지 내에서 유일한 존재입니다.</li>
    <li><strong>노드 타입 번호와의 연관성</strong> : 앞서 배운 노드 타입 중 <strong>9번(DOCUMENT_NODE)</strong>이 바로 이 <code>document</code> 객체를 의미합니다.</li>
    <li><strong>렌더링 시점 주의사항</strong> : HTML 파일의 끝까지 읽기 전(파싱 완료 전)에 <code>document.body</code>에 접근하면 <code>null</code>을 반환할 수 있으므로, 스크립트의 위치나 로드 시점에 주의해야 합니다.</li>
  </ul>
</div>

---

## 11. Mini Practice: 트리 탐색 예측

제시된 HTML 구조를 바탕으로 자바스크립트 트리 탐색 명령의 결과를 예측해 봅니다.

### 1) 대상 HTML 구조

```jsx
<main>
  <h1>Title</h1>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</main>
```

### 2) 트리 탐색 퀴즈 결과

| **번호** | **명령어 (Query)** | **선택되는 요소 (Result)** | **상세 설명** |
| --- | --- | --- | --- |
| **Q1** | **h1.nextElementSibling** | **`<ul>`** | `h1` 태그와 같은 레벨에 있는 바로 다음 형제 요소를 선택합니다. |
| **Q2** | **ul.firstElementChild** | **`<li>Item 1</li>`** | `ul` 태그의 자식 요소 중 가장 첫 번째에 위치한 태그를 선택합니다. |
| **Q3** | **li.parentElement** | **`<ul>`** | `li` 태그를 직접적으로 감싸고 있는 상위 부모 요소를 선택합니다. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">Element 계열의 장점</span>
  <ul>
    <li><strong>Element 계열 프로퍼티의 장점</strong> : <code>nextElementSibling</code>, <code>firstElementChild</code> 등은 텍스트 노드(줄바꿈, 공백)를 자동으로 건너뛰고 오직 <strong>HTML 태그(요소)</strong>만을 찾아내므로 실무 실수를 줄여줍니다.</li>
    <li><strong>계층 구조의 이해</strong> : <code>main</code>은 <code>h1</code>과 <code>ul</code>의 부모이며, <code>ul</code>은 다시 두 개의 <code>li</code>를 자식으로 갖는 다단계 트리 구조를 형성하고 있습니다. 탐색 시 현재 기준 노드가 어디인지 정확히 파악하는 것이 중요합니다.</li>
  </ul>
</div>

---

## 12. 요소 선택의 진화 (Evolution)

JavaScript의 발전처럼, 요소를 선택하는 방식도 더 직관적이고 강력하게 진화했습니다.

### 1) Classic DOM (구 방식)

- **특징** : 메서드마다 이름이 길고 사용법이 제각각이라 다소 불편함이 있었습니다.
- **주요 메서드**

```jsx
getElementById("id")
getElementsByClassName("class")
getElementsByTagName("tag")
```

### 2) Modern DOM (최신 표준)

- **특징** : **CSS 선택자 문법** 하나로 완벽하게 통일되어 매우 직관적입니다.
- **주요 메서드**

```jsx
querySelector(".css")
querySelectorAll("#css")
```

### 3) 요소 선택 메서드 요약 표

| **구분** | **메서드 명칭** | **선택 기준** | **특징** |
| --- | --- | --- | --- |
| **구 방식** | `getElementById` | 오직 ID만 | ID 하나를 정확히 선택할 때 명확하고 빠름. 다만 복잡한 CSS 선택자는 사용할 수 없음 |
| **구 방식** | `getElementsByClassName` | 클래스 이름 | HTMLCollection(유사 배열) 반환 |
| **최신 표준** | **`querySelector`** | **CSS 선택자** | 조건에 맞는 **첫 번째 요소** 하나만 반환 |
| **최신 표준** | **`querySelectorAll`** | **CSS 선택자** | 조건에 맞는 **모든 요소**를 NodeList로 반환 |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">querySelector가 표준이 된 이유</span>
  <ul>
    <li><strong>왜 querySelector인가?</strong> : 과거에는 ID, 클래스, 태그별로 각기 다른 함수를 외워야 했지만, <code>querySelector</code>는 CSS에서 쓰던 <code>.class</code>, <code>#id</code>, <code>div &gt; p</code> 같은 문법을 그대로 쓸 수 있어 학습 곡선이 낮고 코드가 깔끔해집니다.</li>
    <li><strong>반환 타입의 차이</strong> : <code>getElementsBy...</code> 계열은 노드의 변경사항이 실시간으로 반영되는 <strong>Live Collection</strong>을 반환하는 경우가 많아 예상치 못한 버그를 유발할 수 있습니다. 반면 <code>querySelectorAll</code>은 정적인 <strong>Static Collection</strong>을 반환하여 더 안정적인 제어가 가능합니다.</li>
  </ul>
</div>

---

## 13. 주의 : 라이브 컬렉션의 함정

구 방식(`getElements...`)은 실시간으로 변하는 목록(Live)을 반환하여 예측하기 어렵습니다. 안전한 제어를 위해 최신 표준인 `querySelectorAll` 사용이 권장됩니다.

### 1) HTMLCollection (Live) - 주의 필요

- **특징** : 화면(DOM)이 바뀌면 변수 안의 목록도 **몰래 자동으로 바뀝니다.**
- **문제점** : 반복문(for문) 실행 중 요소가 삭제되면 인덱스가 꼬이는 현상이 발생합니다.
- **코드 예시**

```jsx
const list = getElements...
// list.length가 5였다가...
// 요소를 지우면 갑자기 4가 됨!
// 🚨 for문 돌 때 인덱스 꼬임 발생
```

### 2) NodeList (Static) - 안전(Safe)

- **특징** : 선택한 그 순간의 **스냅샷(사진)**을 찍어서 보관합니다.
- **장점** : 화면의 요소가 삭제되어도 리스트의 개수는 유지되어 안전하게 순회할 수 있습니다.
- **코드 예시**

```jsx
const list = querySelectorAll...
// list.length는 영원히 5
// 요소를 지워도 리스트는 유지됨
// ✅ 안전하게 순회 가능
```

`querySelectorAll`이 반환하는 `NodeList`는 정적(Static)입니다.  
단, 모든 `NodeList`가 정적인 것은 아닙니다.  
예를 들어 `childNodes`가 반환하는 `NodeList`는 Live로 동작할 수 있습니다.

### 3) 컬렉션 특징 요약

| **구분** | **반환 타입** | **상태 (State)** | **권장 여부** | **주요 문제점/장점** |
| --- | --- | --- | --- | --- |
| **구 방식** | **HTMLCollection** | **실시간 (Live)** | ⛔ 비권장 | DOM 변경 시 목록이 즉각 변하여 로직이 꼬임 |
| **최신 표준** | **NodeList** | **정적 (Static)** | ✅ 권장 | 선택 시점의 데이터를 유지하여 디버깅이 쉬움 |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">실무 선택과 예외</span>
  <ul>
    <li><strong>실무적 선택</strong> : 현대적인 웹 개발에서는 데이터의 불변성(Immutability)과 예측 가능성이 중요하므로, 거의 모든 상황에서 <code>querySelectorAll</code>을 통해 정적인 <code>NodeList</code>를 받아 처리하는 것이 표준입니다.</li>
    <li><strong>예외 사항</strong> : <code>NodeList</code>라고 해서 무조건 정적인 것은 아닙니다. <code>element.childNodes</code> 프로퍼티가 반환하는 <code>NodeList</code>는 예외적으로 <strong>Live</strong> 상태이므로, 탐색 프로퍼티를 사용할 때는 주의가 필요합니다.</li>
  </ul>
</div>

---

## 14. 실무 권장 가이드 (Best Practice)

대부분의 일반적인 DOM 선택에서는 `querySelector` / `querySelectorAll`을 우선 고려하면 됩니다.  
다만 ID 하나만 정확히 찾는 경우에는 `getElementById`도 여전히 명확하고 유용합니다.  
CSS 선택자의 강력함을 그대로 누릴 수 있습니다.

### 1) 상황별 최적의 메서드 선택 표

| **구분** | **추천 메서드** | **사용 상황 및 장점** | **반환 타입** |
| --- | --- | --- | --- |
| **일반적인 웹 개발** | **querySelector / All** | 생산성과 유지보수성이 압도적이며, 복잡한 계층 구조(`.box > ul li.active`)도 한 줄로 처리 가능합니다. | Element / NodeList(Static) |
| **특수한 성능 최적화** | **getElementById** | 게임이나 수만 개의 데이터를 다루는 등 극한의 성능이 필요한 경우에만 제한적으로 사용합니다. | Element |

### 2) 개수별 선택 가이드

| **선택 목표** | **명령어** | **반환 타입** | **특징** |
| --- | --- | --- | --- |
| **하나만 찾을 때** | `querySelector` | **Element** | 조건에 맞는 요소 중 **가장 첫 번째** 것만 가져옵니다. |
| **여러 개 찾을 때** | `querySelectorAll` | **NodeList** | 조건에 맞는 **모든 요소**를 묶어서 가져옵니다. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">생산성과 성능</span>
  <ul>
    <li><strong>왜 querySelector가 대세인가?</strong> : 과거의 <code>getElementById</code> 등은 이름이 길고 기능이 제한적이었으나, <code>querySelector</code>는 CSS 문법을 그대로 사용하므로 코드의 가독성이 높아지고 별도의 메서드 이름을 외울 필요가 없어 표준으로 자리 잡았습니다.</li>
    <li><strong>생산성과 성능의 트레이드오프</strong> : <code>getElementById</code>가 미세하게 더 빠를 수 있으나, 현대 브라우저 엔진의 성능으로는 일반적인 서비스에서 그 차이를 체감하기 어렵습니다. 따라서 실무에서는 성능보다는 <strong>코드의 명확성과 생산성</strong>을 위해 <code>querySelector</code>를 사용합니다.</li>
  </ul>
</div>

---

## 15. Mini Practice: 요소 선택하기

상황에 가장 적절한 자바스크립트 선택 메서드를 골라보는 연습입니다.

### 1) 요소 선택 실습 결과 표

| **선택 상황** | **권장 명령어 (JavaScript)** | **특징 및 결과** |
| --- | --- | --- |
| **ID가 "login-btn"인 요소** | `document.querySelector("#login-btn")` | `#` 기호를 사용해 특정 ID를 가진 단일 요소를 선택합니다. |
| **모든 `<p>` 태그** | `document.querySelectorAll("p")` | 문서 내의 모든 p 태그를 **정적 컬렉션(NodeList)**으로 안전하게 반환합니다. |
| **class가 "item"인 요소 중 첫 번째** | `document.querySelector(".item")` | `.` 기호를 사용하며, 여러 개 중 가장 위에 있는 **하나만** 선택합니다. |

### 2) 주요 팁

- **querySelector의 유연성** : `getElementById`와 달리 `querySelector`는 CSS와 동일하게 `#`(ID), `.`(Class) 기호를 붙여야 하지만, 하나의 메서드로 모든 상황을 처리할 수 있어 매우 편리합니다.
- **왜 querySelectorAll인가?** : 모든 p 태그를 가져올 때 `querySelectorAll`을 사용하면 **정적 컬렉션(NodeList)**을 반환하므로, 이후에 요소가 추가되거나 삭제되어도 리스트의 인덱스가 꼬이지 않아 안전하게 다룰 수 있습니다.

---

## 16. DOM과 JavaScript의 관계

JavaScript로 DOM을 조작하여 동적인 웹페이지를 만듭니다.

### 1) 관계 이해하기 - 기술 스택별 역할

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">HTML</div><div class="wda-fnode-dsc">문서의 구조와 내용을 정의</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">DOM</div><div class="wda-fnode-dsc">HTML을 객체로 변환한 결과물</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">JavaScript</div><div class="wda-fnode-dsc">DOM API로 요소를 조작</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">브라우저</div><div class="wda-fnode-dsc">조작된 DOM을 화면에 렌더링</div></div>
</div>

### 2) 핵심 포인트

- **DOM 변경 → 화면 자동 업데이트** : DOM을 수정하면 브라우저는 변경 사항을 반영하기 위해 필요한 렌더링 작업을 다시 수행합니다. 변경 내용에 따라 Layout, Paint, Composite 같은 작업이 일부 또는 전체적으로 다시 일어날 수 있습니다.
- **HTML 파일은 변경되지 않음** : 자바스크립트로 하는 모든 조작은 메모리 상의 DOM에서만 일어나며, 원본 소스 파일은 그대로 유지됩니다.
- **새로고침하면 원래대로** : 메모리 기반이므로 페이지를 새로고침하면 모든 조작이 초기화되고 원래의 HTML 구조로 돌아갑니다.

### 3) DOM 조작 실습 예시

```jsx
// 요소 선택
const title = document.querySelector("h1");

// 내용 변경
title.textContent = "새로운 제목";

// 스타일 변경
title.style.color = "blue";

// 클래스 추가
title.classList.add("highlight");

// 새 요소 생성 및 추가
const p = document.createElement("p");
p.textContent = "새 문단";
document.body.appendChild(p);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">DOM API와 동적 웹페이지</span>
  <ul>
    <li><strong>DOM API란?</strong> 자바스크립트가 브라우저에 명령을 내릴 수 있도록 마련된 '통로'입니다. <code>textContent</code>, <code>style</code>, <code>appendChild</code> 등이 모두 이 API에 포함됩니다.</li>
    <li><strong>동적 웹페이지의 원리</strong> 정적인 HTML은 사용자와 상호작용할 수 없으나, 자바스크립트가 DOM을 실시간으로 수정함으로써 우리는 클릭 한 번으로 색이 변하거나 새로운 창이 뜨는 동적인 경험을 할 수 있게 됩니다.</li>
  </ul>
</div>

---

## 17. 브라우저 렌더링 과정 (1) - 단계

HTML이 화면에 그려지는 과정(Critical Rendering Path)을 이해합니다.

### 단계별 프로세스 상세 표

| **순서** | **단계 명칭** | **주요 작업 및 내용** |
| --- | --- | --- |
| **1** | **DOM** | **HTML 파싱 → DOM Tree 생성** |
| **2** | **CSSOM** | **CSS 파싱 → CSSOM Tree 생성** |
| **3** | **Render Tree** | **DOM + CSSOM 결합** (화면에 표시될 요소만 선별) |
| **4** | **Layout & Paint** | **위치 계산(Layout) → 픽셀 그리기(Paint)** 순으로 진행 |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">렌더 트리와 Layout/Paint</span>
  <ul>
    <li><strong>렌더 트리(Render Tree)의 특징</strong> : 렌더 트리는 DOM 트리와 CSSOM 트리가 결합하여 만들어지며, <code>display: none</code>과 같이 화면에서 숨겨지는 요소는 포함되지 않는다는 특징이 있습니다.</li>
    <li><strong>레이아웃(Layout)과 페인트(Paint)의 차이</strong> : <strong>Layout</strong>은 각 노드가 화면의 정확히 어디에, 어떤 크기로 배치될지 기하학적 형태를 계산하는 과정이며, <strong>Paint</strong>는 레이아웃 계산이 완료된 후 실제 픽셀(색상, 테두리 등)을 화면에 그리는 마지막 단계입니다.</li>
  </ul>
</div>

---

## 18. 브라우저 렌더링 과정 (2) - 시각화

렌더 트리는 화면에 실제로 그려질 요소들의 최종 설계도입니다.

### 1) 렌더 트리 생성 공식

> **DOM Tree** + **CSSOM Tree** = **Render Tree**

### 2) 렌더 트리 결합 프로세스 요약

| **구성 요소** | **역할** | **특징** |
| --- | --- | --- |
| **DOM Tree** | HTML 구조 파악 | 문서의 모든 노드를 포함합니다. |
| **CSSOM Tree** | 스타일 정보 파악 | 각 노드에 적용될 CSS 규칙을 담고 있습니다. |
| **Render Tree** | **최종 렌더링 설계도** | **화면에 실제로 표시될 요소만** 선별하여 구성됩니다. |

### 3) 주의사항: 화면 표시 여부에 따른 차이

| **속성 (CSS)** | **렌더 트리 포함 여부** | **공간 차지 여부** | **설명** |
| --- | --- | --- | --- |
| **`display: none`** | **제외됨** | **공간 X** | 요소가 아예 존재하지 않는 것처럼 처리됩니다. |
| **`visibility: hidden`** | **포함됨** | **공간 O** | 모습은 보이지 않지만, 원래 자리는 유지합니다. |

### 4) 성능 영향 요소

**Reflow & Repaint**

- **Reflow** : DOM 변경 시 레이아웃 계산이 다시 발생하는 현상입니다.
- **성능 영향** : 레이아웃이 다시 계산되면 렌더링 엔진에 큰 부담을 주어 전체적인 웹 성능에 영향을 줄 수 있습니다.

---

## 19. Live vs Static Collection (1) - HTMLCollection

DOM 메서드에 따라 반환되는 컬렉션 타입이 다르며, 동작 방식에 큰 차이가 있습니다.

### 1) Live Collection의 특징

**🔹 실시간 반영 원리**

- **Live Collection**은 DOM의 변경 사항이 **실시간으로 반영**되는 리스트입니다.
- 즉, 자바스크립트로 요소를 추가하거나 삭제하면 해당 변수에 담긴 목록의 개수(`length`)가 자동으로 업데이트됩니다.

**🔹 주요 메서드 및 속성 표**

| **구분** | **명칭** | **설명** |
| --- | --- | --- |
| **메서드** | `getElementsByTagName` | 특정 태그를 가진 모든 요소를 실시간으로 관리합니다. |
| **메서드** | `getElementsByClassName` | 특정 클래스를 가진 모든 요소를 실시간으로 관리합니다. |
| **속성** | `children` | 부모 요소의 자식 요소들을 실시간으로 관리합니다. |

**🧪 예시 코드 (동작 방식)**

```jsx
const divs = document.getElementsByTagName("div");
console.log(divs.length); // 3

// 새로운 div 추가
document.body.appendChild(
  document.createElement("div")
);

// 자동으로 업데이트됨!
console.log(divs.length); // 4
```

### 3) 주의사항: 순회 시 발생하는 함정

- **문제점** : `for`문으로 컬렉션을 순회하며 요소를 삭제할 때, 목록의 길이가 실시간으로 줄어들면서 특정 요소를 건너뛰는 현상이 발생할 수 있습니다.
- **해결책** : 가급적 `querySelectorAll`을 사용하여 정적(Static) 리스트를 다루거나, 역방향 반복문을 사용해야 합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">성능과 Static의 차이</span>
  <ul>
    <li><strong>성능적 측면</strong> : <strong>Live Collection</strong>은 DOM 변경 사항을 실시간으로 반영해야 하므로, 큰 목록을 자주 다루는 경우에는 예측성이나 성능 측면에서 주의가 필요합니다.</li>
    <li><strong>Static과의 차이점</strong> : 다음에 배울 <strong>Static Collection(NodeList)</strong>은 선택한 시점의 스냅샷을 유지하므로, DOM이 변해도 목록이 바뀌지 않아 반복문 제어가 훨씬 안전합니다.</li>
  </ul>
</div>

---

## 20. Live vs Static Collection (2) - NodeList

`querySelectorAll`은 정적(Static) 컬렉션을 반환하여 안전합니다.

### &lt;Static Collection의 특징&gt;

### 1) 스냅샷 유지 원리

- **Static Collection**은 호출된 시점의 상태를 그대로 유지하는 **스냅샷(사진)**과 같습니다.
- 즉, 자바스크립트로 DOM 요소를 추가하거나 삭제하더라도 변수에 이미 담긴 목록은 **자동으로 업데이트되지 않습니다.**

### 2) 주요 메서드 요약 표

| **구분** | **명칭** | **설명** | **반환 타입** |
| --- | --- | --- | --- |
| **메서드** | **`querySelectorAll`** | CSS 선택자로 요소를 찾고 그 시점의 목록을 고정하여 반환합니다. | **NodeList (Static)** |

**🧪 예시 코드 (불변성 확인)**

```jsx
const divs = document.querySelectorAll("div");
console.log(divs.length); // 3

// 새로운 div 추가
document.body.appendChild(
  document.createElement("div")
);

// 업데이트 되지 않음 (스냅샷)
console.log(divs.length); // 3 (여전히)
```

### 4) 실무 권장 가이드

**예측 가능성** : 대부분의 상황에서 데이터가 갑자기 변하지 않는 `querySelectorAll`을 사용하는 것이 로직의 오류를 줄이는 데 훨씬 유리합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">NodeList의 예외</span>
  <ul>
    <li><code>querySelectorAll</code>이 반환하는 <code>NodeList</code>는 정적(Static)이지만, <code>element.childNodes</code>가 반환하는 <code>NodeList</code>는 예외적으로 실시간(Live)으로 변하므로 사용 시 주의가 필요합니다.</li>
    <li><strong>컬렉션 선택 기준</strong> : 반복문 내에서 요소를 삭제하거나 추가하는 복잡한 DOM 조작을 할 때는 반드시 정적 컬렉션을 사용하여 인덱스가 꼬이는 현상을 방지해야 합니다.</li>
  </ul>
</div>

---

## 21. Live Collection은 언제 쓸까요?

대부분의 상황에서 정적 컬렉션이 권장되지만, 실시간 감지가 필요한 특정 케이스에는 Live Collection이 유용합니다.

### 1) Live Collection의 주요 활용 사례

| **활용 상황** | **상세 설명** | **특징 및 장점** |
| --- | --- | --- |
| **요소 개수 추적** | 새로운 요소가 추가/삭제되는 것을 별도 코드 없이 즉시 반영받고 싶을 때 사용합니다. | 다시 조회하지 않아도 `length`가 최신화됩니다. |
| **전통적 DOM API** | `document.forms`, `document.images` 등은 대표적인 Live Collection입니다. | 폼 요소나 이미지 리스트 관리에 여전히 쓰입니다. |

**🧪 활용 예시 코드**

```jsx
// 자식 요소들(children)은 Live Collection
const container = document.querySelector("#box");
const liveList = container.children;

console.log(liveList.length); // 3

// 요소를 추가하면...
container.innerHTML += "<div>New</div>";

// 다시 조회하지 않아도 최신 개수 반영!
console.log(liveList.length); // 4
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <span class="wda-clabel">성능과 편의성의 균형</span>
  <ul>
    <li><strong>장점</strong> : 개발자가 수동으로 리스트를 업데이트하는 로직을 짤 필요가 없어 코드가 간결해질 수 있습니다.</li>
    <li><strong>주의점</strong> : 하지만 매번 DOM의 상태를 체크하므로, 리스트가 매우 크거나 빈번하게 접근해야 하는 상황에서는 성능 최적화를 위해 정적 컬렉션 사용을 고려해야 합니다.</li>
    <li><strong>결론</strong> : 일반적인 요소 선택 및 순회는 <strong>Static(NodeList)</strong>을 사용하고, 문서 내 특정 리소스를 상시 모니터링해야 하는 특수 상황에서만 <strong>Live(HTMLCollection)</strong>를 활용하는 것이 베스트 프랙티스입니다.</li>
  </ul>
</div>

---

## 22. 정적 컬렉션(Static) 업데이트 하기

"요소를 추가했는데 왜 `NodeList`에는 없나요?"라는 질문에 대한 명확한 해답을 제시합니다.

### 1) 정적 컬렉션의 한계와 해결책

**🔹 원인 분석: 고정된 스냅샷**

- **`querySelectorAll`**은 호출된 **그 순간의 요소들만** 사진 찍듯이 가져옵니다.
- 나중에 화면에 100개의 요소가 추가되어도, 이미 내 손에 들린 명단(`NodeList`)은 절대 변하지 않습니다.

**🔹 관리 방식 비교 및 해결책 요약 표**

| **구분** | **구식 방법 (Bad)** | **권장 해결책 (Solution)** |
| --- | --- | --- |
| **방법** | Live Collection 사용 | **다시 찾기 (Re-query)** |
| **특징** | 실시간 반영의 부작용 위험을 감수함 | 필요한 순간에 메서드를 다시 호출함 |
| **장점** | 자동 업데이트 | 데이터의 일관성 및 로직의 안정성 확보 |

### 2) 최신 상태 갱신 방법

목록을 업데이트해야 할 시점에 동일한 선택자로 다시 조회를 실행합니다.

```jsx
// 1. 필요한 시점에 querySelectorAll을 다시 호출
const newItems = document.querySelectorAll(".item"); 

// 2. 이제 newItems는 최신 상태로 갱신됨
```

**핵심 포인트**

<div class="wda-callout wda-cs">
  <span class="wda-clabel">예측 가능한 코딩과 재조회 타이밍</span>
  <ul>
    <li><strong>예측 가능한 코딩</strong> : <code>NodeList</code>가 자동으로 변하지 않는 것은 버그가 아니라 <strong>의도된 설계</strong>입니다. 개발자가 통제할 수 없는 시점에 목록이 변하는 것보다, 필요한 시점에 직접 갱신하는 것이 훨씬 안전한 코딩 방식입니다.</li>
    <li><strong>재조회(Re-query) 타이밍</strong> : 주로 새로운 노드를 생성하여 <code>appendChild</code> 등으로 화면에 붙인 직후, 해당 요소들을 포함한 전체 리스트로 작업을 이어가야 할 때 재조회를 수행합니다.</li>
  </ul>
</div>

---

## ✅ 핵심 요약

<table class="wda-summary-table">
  <thead>
    <tr>
      <th>핵심 질문</th>
      <th>정답</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DOM이란?</td>
      <td><strong>HTML 문서를 브라우저가 메모리에서 객체 트리로 만든 것</strong></td>
    </tr>
    <tr>
      <td>HTML과 DOM 차이</td>
      <td>HTML은 <strong>텍스트</strong>, DOM은 <strong>객체</strong></td>
    </tr>
    <tr>
      <td>DOM은 어디에 존재?</td>
      <td><strong>브라우저 메모리(RAM)</strong></td>
    </tr>
    <tr>
      <td>왜 DOM이 필요한가</td>
      <td>JS는 <strong>텍스트 HTML을 조작할 수 없고 객체만 다룬다</strong></td>
    </tr>
    <tr>
      <td>JS는 무엇을 조작?</td>
      <td><strong>HTML이 아니라 DOM 객체</strong></td>
    </tr>
    <tr>
      <td>DOM의 구조</td>
      <td><strong>트리(Tree) 구조, 최소 단위는 Node</strong></td>
    </tr>
    <tr>
      <td>실무 핵심 노드</td>
      <td><strong>Element Node(1), Text Node(3)</strong></td>
    </tr>
    <tr>
      <td>DOM 진입점</td>
      <td><strong>document (9번 DOCUMENT_NODE)</strong></td>
    </tr>
    <tr>
      <td>화면이 바뀌는 이유</td>
      <td><strong>DOM이 변경되면 브라우저가 다시 렌더링</strong></td>
    </tr>
    <tr>
      <td>새로고침 시 변화</td>
      <td><strong>메모리 DOM 초기화 → 원래 HTML로 복구</strong></td>
    </tr>
    <tr>
      <td>요소 탐색 원칙</td>
      <td><strong>Element 기준 탐색 (공백 Text 노드 회피)</strong></td>
    </tr>
    <tr>
      <td>요소 선택 표준</td>
      <td><strong>querySelector / querySelectorAll</strong></td>
    </tr>
    <tr>
      <td>Live vs Static</td>
      <td><strong>Live는 자동 변경, Static은 고정 스냅샷</strong></td>
    </tr>
    <tr>
      <td>실무 권장</td>
      <td><strong>Static(NodeList) 사용 후 필요 시 재조회</strong></td>
    </tr>
    <tr>
      <td>렌더링 공식</td>
      <td><strong>DOM + CSSOM → Render Tree → Layout → Paint</strong></td>
    </tr>
  </tbody>
</table>

이 공식은 입문자를 위한 단순화된 흐름입니다. 실제 브라우저 렌더링 과정은 더 세부 단계가 있지만, 기초 단계에서는 DOM과 CSSOM이 결합되어 화면에 그려진다고 이해하면 됩니다.
