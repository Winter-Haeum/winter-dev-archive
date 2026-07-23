---
title: "4-3 스코프 체인과 클로저 이해하기"
status: "completed"
description: "렉시컬 스코프와 스코프 체인, 실행 컨텍스트의 원리를 바탕으로 클로저의 동작 원리와 정보 은닉·함수 팩토리·커링 같은 실전 활용법을 정리한다."
category: "JavaScript"
section: "ES6+ 심화 문법"
tags:
  - javascript
  - closure
  - scope
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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-group2{display:flex;flex-wrap:wrap;gap:14px;margin:.8rem 0 1.6rem}
.wda-group{flex:1 1 260px;border:1px solid rgba(128,128,128,.18);border-radius:12px;padding:14px 16px}
.wda-group-ttl{font-size:.92rem;font-weight:700;margin-bottom:10px}
.wda-group .wda-fgrid{margin:0}
.wda-group .wda-fcard{flex:1 1 100%}
.wda-group-good{border-left:3px solid rgba(34,197,94,.35);background:rgba(34,197,94,.02)}
.wda-group-bad{border-left:3px solid rgba(244,129,110,.35);background:rgba(244,129,110,.025)}
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
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:160px}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
.wda-deco{position:absolute;z-index:2;pointer-events:none}
@media (max-width:640px){
.wda-deco{width:34px !important}
}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>렉시컬 스코프</strong> — 함수가 <strong>선언된 위치</strong>에 따라 스코프가 결정됨을 이해합니다.<br>
  • <strong>스코프 체인</strong> — 변수를 찾기 위해 <strong>상위 스코프로 이동</strong>하는 과정을 배웁니다.<br>
  • <strong>클로저 (Closure)</strong> — 함수가 종료되어도 변수를 <strong>기억하는 원리</strong>를 익힙니다.<br>
  • <strong>클로저 활용</strong> — 정보 은닉, 커링 등 <strong>실전 패턴</strong>을 구현하고 응용합니다.
</div>

---

## 1. 렉시컬(Lexical)이란?

**📌 기본 정의**

**"Lexical" = 어휘적 / 사전적** — 코드가 **작성된 그 형태 그대로**를 의미합니다.

**🆚 시점의 차이**

코드가 만들어지는 순간과 돌아가는 순간을 구분해야 합니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">✏️</div>
    <div class="wda-fcard-ttl">작성 시점 (Coding)</div>
    <div class="wda-fcard-dsc">개발자가 코드를 타이핑해서 파일에 저장하는 순간</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">▶️</div>
    <div class="wda-fcard-ttl">실행 시점 (Running)</div>
    <div class="wda-fcard-dsc">브라우저가 코드를 읽고 작동시키는 순간</div>
  </div>
</div>

**📌 렉시컬 스코프 정의**

렉시컬 스코프란, 코드를 실행하기도 전에, **이미 작성된 구조만 보고 스코프가 결정된다**는 뜻입니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이 개념이 중요한 이유는 <strong>"누가 불렀느냐"</strong>가 아니라 <strong>"어디에 태어났느냐"</strong>가 중요하다는 뜻이기 때문입니다.</li>
    <li>코드를 짤 때 <code>function A</code> 안에서 <code>variable B</code>를 선언했다면, <code>variable B</code>는 <code>function A</code>의 렉시컬 환경에 기록됩니다.<br>이후 함수가 어디서 호출되더라도 변수를 찾는 기준 경로는 선언 위치를 따릅니다.</li>
    <li>단, 변수의 실제 값은 실행 중에 바뀔 수 있습니다. 렉시컬 스코프가 고정된다는 말은 <strong>"변수를 어디서 찾을지의 경로"</strong>가 고정된다는 뜻입니다.</li>
    <li>즉, <strong>족보는 코드를 치는 순간 이미 정해져서 절대 바뀌지 않는다</strong>는 것이 자바스크립트의 대원칙입니다.</li>
  </ul>
</div>

---

## 2. 렉시컬 vs 동적 스코프

**🆚 개념 비교**

자바스크립트가 채택한 **렉시컬 스코프**와 다른 언어들의 **동적 스코프**를 "고향"과 "현재 위치"로 비유하여 비교하면 이해하기 쉽습니다.

| **비교 항목** | **🔵 렉시컬 스코프 (JavaScript)** | **🟠 동적 스코프 (Other)** |
| --- | --- | --- |
| **핵심 비유** | **"출생지(고향)가 중요하다"** | **"지금 어디(호출)인지가 중요하다"** |
| **결정 기준** | 함수가 **어디서 태어났는지(선언)** | 함수가 **어디서 불렸는지(호출)** |
| **상위 스코프** | 선언된 위치에 따라 **이미 정해짐** | 호출하는 순간마다 **계속 바뀜** |
| **특징** | 어디서 호출되든 고향은 **바뀌지 않음** | **호출한 사람의 주머니**를 뒤짐 |

**🧪 예시 코드**

`foo` 함수가 어디서 선언되었고, 어디서 호출되었는지를 주목해 보세요.

```jsx
const myHome = '전주 (Global)';

function foo() {
  // foo의 고향은 Global입니다.
  console.log(myHome);
}

function bar() {
  const myHome = '서울 (Local)';
  foo(); // 서울에서 foo를 호출!
}

// 실행
bar();
```

**📌 결과 분석**

자바스크립트는 렉시컬 스코프를 따르므로, `foo`를 어디서 호출하든 상관없이 **처음 만들어진 곳(Global)**의 변수를 기억합니다.

| **비교 항목** | **🔵 렉시컬 스코프 (JavaScript)** | **🟠 동적 스코프 (Others)** |
| --- | --- | --- |
| **결과값** | **'전주'** 출력 | **'서울'** 출력 |
| **결정 시점** | 코드 **작성(선언)** 할 때 | 코드 **실행(호출)** 할 때 |
| **판단 기준** | 함수가 **태어난 곳** (고향) | 함수를 **부른 곳** (현재 위치) |
| **상위 스코프** | `Global` (전역) | `bar` 함수 (지역) |
| **특징** | 족보가 고정됨 (정적) | 상황에 따라 계속 변함 |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이 비유는 <strong>스코프 체인</strong>을 이해하는 가장 중요한 열쇠입니다.</li>
    <li>면접관이 "자바스크립트의 스코프는 어떤 방식인가요?"라고 묻는다면, <strong>"함수가 호출된 위치가 아니라 선언된 위치에 따라 상위 스코프가 결정되는 정적(Lexical) 스코프입니다"</strong>라고 답변하시면 완벽합니다.</li>
    <li>즉, 코드를 짜는 순간(타이핑) 족보는 이미 정해져서 절대 변하지 않는다는 뜻입니다.</li>
  </ul>
</div>

---

## 3. 자바스크립트의 렉시컬 스코프

**🧪 예시 코드**

```jsx
const x = 'global';

function outer() {
  const x = 'outer';

  function inner() {
    // x를 출력하려는데, 내 안에 없으니 태어난 곳(outer)을 봅니다.
    console.log(x);
  }

  inner();
}

outer();
```

**⚙️ inner 함수의 스코프 결정**

코드를 실행하기 전, 작성된 구조만 보고 스코프 족보가 정해지는 과정입니다.

1. **inner** 함수가 **작성된 위치**를 봅니다.
2. **outer** 함수 내부에 작성되어 있습니다.
3. 따라서 **inner** 의 상위 스코프는 **outer** 입니다.

**🧪 실행 결과**

**'outer'** — 만약 inner 안에 x가 없다면, 태어난 곳(outer)의 x를 봅니다.  
전역(global)까지 나가지 않습니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이것이 바로 <strong>"스코프 체인(Scope Chain)"</strong>의 시작입니다.</li>
    <li><code>inner</code> 함수 입장에서 변수 <code>x</code>를 찾을 때, 자기 자신의 주머니(지역 스코프)를 뒤져보고 (없음),<br>자기가 태어난 곳인 엄마(outer)의 주머니를 뒤져봅니다 (있음! → <code>'outer'</code>).</li>
    <li>거기서 찾았으니 만족하고 더 위의 할머니(global)까지는 가지 않는 것입니다. 이것을 <strong>"변수 섀도잉(Shadowing)"</strong>이라고도 부릅니다. (가까운 변수가 먼 변수를 가림)</li>
  </ul>
</div>

---

## 💻 실습 : 렉시컬 스코프

**🎯 Mission**

코드를 보고 출력될 값을 예측해 보는 퀴즈입니다. (Global vs Local)

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">아래 코드를 확인하세요.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl"><code>check()</code> 함수 실행 시 출력될 값을 예측해보세요.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">Global인지 Local인지 확인하세요.</div>
    </div>
  </div>
</div>

> 힌트: 함수가 어디서 태어났는지 보세요.

**📝 예제 코드**

`print` 함수가 어디에 정의되어 있는지가 핵심입니다.

```jsx
const x = "Global";

function print() {
  // print 함수는 전역(Global)에서 태어났습니다.
  // 따라서 자기 안에 x가 없으면 바로 전역 x를 찾아갑니다.
  console.log(x); // 어디서 태어났죠?
}

function check() {
  const x = "Local";
  // 여기서 print를 호출한다고 해서 print의 고향이 바뀌지 않습니다.
  print(); // 여기서 호출!
}

check(); // 결과는?
```

**📝 정답**

**"Global"** — `check` 함수 안에서 `print`를 불렀지만, 자바스크립트는 **렉시컬 스코프(태어난 곳 기준)**를 따르기 때문에 `print` 함수가 만들어진 바깥 세상의 `x = "Global"`을 출력합니다.  
`check` 안의 `"Local"`은 `print` 함수와는 아무런 상관이 없는 남남입니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>"호출된 위치(<code>check</code> 안)"</strong>에 현혹되지 마세요!</li>
    <li>함수가 <strong>"선언된 위치(맨 바깥)"</strong>가 바로 그 함수의 고향이며, 변수를 찾을 때는 무조건 고향 쪽으로 고개를 돌립니다.</li>
    <li>이것이 자바스크립트의 흔들리지 않는 대원칙입니다.</li>
  </ul>
</div>

---

## 4. 스코프 체인 (Scope Chain)

**⚙️ 변수 탐색 과정 (Scope Chaining)**

변수를 사용할 때, 현재 스코프에 없으면 상위 스코프로 올라가며 찾는 과정입니다.

```jsx
const a = 'global a';
const b = 'global b';

function outer() {
  const b = 'outer b';
  const c = 'outer c';

  function inner() {
    const c = 'inner c';

    // 1. 내 주머니(inner)에 c가 있으므로 바로 사용합니다.
    console.log(c); // 'inner c' (찾음!)

    // 2. 내 주머니에 b가 없으므로 상위(outer)로 가서 찾습니다.
    // outer에 b가 있으므로 그것을 사용합니다. (전역 b는 가려짐)
    console.log(b); // 'outer b' (위로 가서 찾음)

    // 3. 내 주머니에 a가 없고, 상위(outer)에도 없으므로
    // 최상위(global)까지 올라가서 찾습니다.
    console.log(a); // 'global a' (더 위로!)
  }
  inner();
}
outer();
```

**📌 스코프 체인 시각화 (Bubble Up)**

물방울이 아래에서 위로 올라가듯(Bubble Up), 변수 찾기는 **안쪽에서 바깥쪽으로**만 진행됩니다.

- **inner 함수** : `c` (shadowed) → 못 찾으면 위로 ⬆️
- **outer 함수** : `b` (shadowed), `c` → 못 찾으면 위로 ⬆️
- **전역 (Global)** : `a`, `b` (최상위)

<img src="/images/content/javascript/4-3/javascript-4-3-scope-diagram.png" alt="스코프 체인 시각화 다이어그램" style="display:block;width:100%;max-width:480px;height:auto;border-radius:8px;margin:.6rem auto 1rem;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:480px;">[그림] 스코프 체인 구조 (전역 → outer 함수 → inner 함수 중첩 범위)</div>

**📌 단방향 탐색**

식별자를 찾을 때까지 상위 스코프로 올라갑니다. **(하위 스코프로 내려가서 찾을 수는 없습니다!)**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>여기서 가장 중요한 개념은 <strong>"섀도잉(Shadowing)"</strong>입니다.</li>
    <li>코드에서 변수 <code>b</code>는 전역(<code>global b</code>)에도 있고 <code>outer</code>(<code>outer b</code>)에도 있습니다.</li>
    <li><code>inner</code> 입장에서 위를 쳐다봤을 때, <strong>가장 먼저 발견되는 가까운 변수</strong>(<code>outer b</code>)가 더 멀리 있는 변수(<code>global b</code>)를 가려버리는 현상을 말합니다.</li>
  </ul>
</div>

---

## 5. 실행 컨텍스트(Execution Context)란?

**📌 기본 정의**

**코드가 실행되는 환경(Environment)** — 자바스크립트 엔진이 코드를 실행하기 위해 내부적으로 관리하는 실행 정보 묶음입니다.  
일반 객체처럼 개발자가 직접 꺼내서 조작하는 대상은 아닙니다.

**📌 무엇을 기록하나요?**

실행 컨텍스트 내부에는 코드 실행에 필요한 핵심 정보들이 저장됩니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">렉시컬 환경 (Lexical Environment)</div>
    <div class="wda-fcard-dsc"><strong>환경 레코드</strong>: 식별자(변수, 함수) 저장소<br><strong>외부 환경 참조</strong>: 상위 스코프 연결 (Chain)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">This Binding</div>
    <div class="wda-fcard-dsc">현재 문맥의 this</div>
  </div>
</div>

**⚙️ 동작 원리**

코드는 혼자 실행되지 않습니다. 항상 **컨텍스트라는 무대 위**에서 동작합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>쉽게 말해 <strong>"자바스크립트 코드가 돌아가는 무대(Stage)"</strong>라고 생각하면 됩니다.</li>
    <li>우리가 함수를 호출하는 순간, 자바스크립트 엔진은 보이지 않는 곳에서<br>"자, 이 함수 실행할 때 필요한 변수들은 이거고(<code>환경 레코드</code>), 얘 부모는 누구고(<code>외부 환경 참조</code>), 주인(<code>this</code>)은 얘야!"라고 적혀 있는 <strong>비밀 장부(객체)</strong>를 하나 만듭니다.</li>
    <li>그 장부가 바로 <strong>실행 컨텍스트</strong>입니다.</li>
    <li>코드가 그냥 실행되는 게 아니라, 이 장부의 지원을 받으며 실행된다는 점을 기억하세요.</li>
  </ul>
</div>

---

## 6. 실행 컨텍스트 기초

**📌 콜 스택 (Call Stack)**

함수가 호출되면 스택(Stack)이라는 통에 차곡차곡 쌓이고, 실행이 끝나면 위에서부터 하나씩 제거됩니다.

```jsx
function first() {
  console.log('first 시작');
  second(); // first 실행 중에 second를 호출 (first는 잠시 대기)
  console.log('first 끝'); // second가 완전히 끝나야 실행됨
}

function second() {
  console.log('second 시작');
  third(); // second 실행 중에 third를 호출 (second는 잠시 대기)
  console.log('second 끝'); // third가 완전히 끝나야 실행됨
}

function third() {
  console.log('third'); // 더 이상 호출할 게 없음 (실행 후 즉시 종료)
}

first(); // 가장 먼저 first 함수를 호출
```

**⚙️ 스택 동작 시각화**

자바스크립트 엔진은 **LIFO (Last In, First Out)**, 즉 **"나중에 들어온 녀석이 먼저 나가는"** 구조로 동작합니다.

<img src="/images/content/javascript/4-3/javascript-4-3-function-call-return-order.png" alt="콜 스택 동작 시각화" style="display:block;width:100%;max-width:480px;height:auto;border-radius:8px;margin:.6rem auto 1rem;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:480px;">[그림] 콜 스택 쌓임과 제거 순서 (first → second → third 호출, third 종료 후 제거)</div>

- **1. first() 호출**: `[first, global]` (first가 스택에 쌓임)
- **2. second() 호출**: `[second, first, global]` (first 위에 second가 쌓임)
- **3. third() 호출**: `[third, second, first, global]` (가장 위에 third가 쌓임)
- **4. third() 종료 후**: `[second, first, global]` (할 일을 마친 third가 스택에서 빠져나감. 다시 second 차례)

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>콜 스택</strong>은 설거지 그릇 쌓기나 프링글스 통을 상상하면 이해하기 쉽습니다.</li>
    <li>맨 밑에 있는 그릇(<code>first</code>)을 꺼내려면 그 위에 쌓인 그릇들(<code>second</code>, <code>third</code>)을 위에서부터 차례대로 치워야 합니다.</li>
    <li>프로그래밍에서 "에러가 났다"며 보여주는 빨간 글씨들(<strong>Stack Trace</strong>)이 바로 이 콜 스택의 기록("third 하다가... second 하다가... first에서 터졌어!")을 보여주는 것입니다.</li>
  </ul>
</div>

---

## 7. 클로저란 무엇인가?

**🧪 클로저의 탄생 (코드 예시)**

함수가 종료되어 사라졌음에도 불구하고, 그 함수 안에 있던 변수를 계속 기억하고 있는 현상을 보여주는 코드입니다.

```jsx
function createCounter() {
  let count = 0; // 외부 함수의 변수 (지역 변수)

  return function() { // 내부 함수 (클로저가 될 녀석)
    count++; // 실행이 끝난 createCounter의 렉시컬 환경에 있는 count를 참조함
    return count;
  };
}

const counter = createCounter();
// createCounter 함수의 실행 컨텍스트는 콜 스택에서 제거됩니다.
// 하지만 반환된 내부 함수가 count를 참조하고 있으므로, 해당 렉시컬 환경은 메모리에 유지됩니다.

console.log(counter()); // 1 (0에서 1 증가)
console.log(counter()); // 2 (1에서 1 증가 - 이전 값을 기억함!)
console.log(counter()); // 3
// count 변수가 살아있다! (마치 전역 변수처럼 계속 유지됨)
```

**📌 클로저의 정의**

**"함수와 그 함수가 선언된 렉시컬 환경(Lexical Environment)의 조합"** (MDN 정의)

- **현상인가요, 함수인가요?** 엄밀히 말하면 스코프가 연결되는 **메커니즘(결합)** 자체를 의미합니다.  
  실무에서는 보통 "생명 주기가 끝난 외부함수의 변수를 참조하는 **내부함수 자체**"를 클로저라고 부릅니다.

**📌 기억 포인트**

클로저가 되기 위한 조건입니다.

- 내부 함수가 **외부 변수**를 참조해야 합니다.
- 외부 함수의 실행은 끝났지만, **내부 함수가 참조 중인 외부 변수의 렉시컬 환경은 유지될 수 있습니다.**
- **"기억하는 함수"** (자기가 태어난 환경을 기억함)

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>클로저를 가장 쉽게 이해하는 비유는 <strong>"배낭(Backpack)"</strong>입니다.</li>
    <li><code>createCounter</code> 함수가 실행을 마치고 퇴근할 때, 내부에 있던 익명 함수(<code>return function...</code>)에게<br><strong>"이 <code>count</code> 변수는 네가 나중에 쓸 거니까 챙겨가"</strong>라며 배낭에 넣어주는 것과 같습니다.</li>
    <li>그래서 우리는 밖에서 <code>counter()</code>를 호출할 때마다 배낭 속에 들어있는 <code>count</code>를 꺼내서 숫자를 셀 수 있는 것입니다.</li>
    <li>이 기능 덕분에 <strong>"데이터 은닉(Private Variable)"</strong>이 가능해집니다.</li>
  </ul>
</div>

**내가 정의한 클로저**

<div class="wda-callout wda-ci">
  <ul>
    <li>외부 함수의 실행은 끝났지만, 내부 함수가 외부 함수의 변수를 계속 참조하고 있기 때문에 그 변수 환경은 바로 사라지지 않는다.</li>
    <li>외부에서는 직접 접근할 수 없고, 해당 변수를 참조하고 있는 내부 함수를 통해서만 사용할 수 있다.</li>
  </ul>
</div>

---

## 8. 클로저 동작 원리

**📌 왜 count가 살아있을까?**

함수가 종료되었는데도 변수가 사라지지 않는 이유를 코드로 확인해 봅니다.

```jsx
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
// createCounter 함수가 실행되고 나서 변수(counter)에 내부 함수가 담김
// 이때, createCounter는 종료되었지만 내부에 있던 count는 살아남음
```

**⚙️ 단계별 실행 과정**

자바스크립트 엔진 내부에서 일어나는 일을 순서대로 정리했습니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">createCounter 실행 → count = 0 생성</div><div class="wda-sdsc">함수가 호출되면서 지역 변수가 메모리에 만들어집니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">내부 함수가 count를 참조</div><div class="wda-sdsc">리턴되는 함수가 "나 저 count 변수 쓸 거야!"라고 찜해놓습니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">내부 함수를 반환 → createCounter 종료</div><div class="wda-sdsc">부모 함수는 할 일을 다 하고 퇴근(종료)합니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody"><div class="wda-sttl">내부 함수가 count를 참조하므로 GC 대상 아님</div><div class="wda-sdsc">청소부(GC)가 왔다가 "어? 이 변수는 아직 쓰는 놈이 있네?" 하고 청소하지 않고 남겨둡니다.</div></div>
  </div>
</div>

**📌 렉시컬 환경 유지**

<img src="/images/content/javascript/4-3/javascript-4-3-function-lifetime-diagram.png" alt="함수와 렉시컬 환경 생명 연결 다이어그램" style="display:block;width:100%;max-width:340px;height:auto;border-radius:8px;margin:.6rem auto 1rem;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:340px;">[그림] 내부 함수의 참조로 살아있는 렉시컬 환경 (count: 0)</div>

- <strong>"참조가 있으면 죽지 않는다"</strong>는 것이 핵심 원리입니다.
- **내부 함수(`func counter`)** --- 참조 중 ---&gt; **Lexical Env (`count: 0`)**
- **상태**: **ALIVE! (생명 연장됨)**

**핵심 포인트**

<div class="wda-callout wda-ci">
  <ul>
    <li>내부 함수가 외부 변수를 참조하면, 그 변수의 렉시컬 환경이 메모리에 유지됩니다.</li>
    <li><strong>GC(가비지 컬렉터)</strong>는 도달 가능한 값, 즉 아직 참조 경로가 남아 있는 값을 수거하지 않습니다.</li>
  </ul>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>자바스크립트에는 <strong>"가비지 컬렉터(Garbage Collector, GC)"</strong>라는 메모리 청소부가 살고 있습니다.</li>
    <li>이 청소부는 주기적으로 메모리를 돌아다니며 <strong>"아무도 안 쓰는 데이터"</strong>를 찾아서 갖다 버립니다.</li>
    <li>보통 함수가 끝나면 그 안의 변수들은 아무도 안 쓰게 되니 버려지는 게 정상입니다.</li>
    <li>하지만 클로저는 <strong>"외부로 나간 내부 함수(생존자)"</strong>가 <strong>"옛날 변수(count)"</strong>의 멱살을 잡고 놓아주지 않는 상황입니다.</li>
    <li>GC는 참조 경로가 남아 있는 값은 수거하지 않습니다.<br>그래서 <code>count</code> 변수는 내부 함수의 참조가 유지되는 동안 메모리에 남아 있습니다.<br>이후 참조가 끊기면 GC 대상이 될 수 있습니다.</li>
  </ul>
</div>

---

## 💻 실습 : 클로저 기초

**🎯 Mission**

직접 코드를 작성하여 클로저가 어떻게 데이터를 보존하는지 확인해보세요.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl"><code>createCounter</code> 함수를 작성하세요.</div>
      <div class="wda-sdsc">내부 변수 <code>count = 0</code></div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">숫자를 1씩 증가시키고 반환하는 내부 함수를 리턴하세요.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">함수를 생성하고 실행하여 <code>1</code>, <code>2</code>가 나오는지 확인하세요.</div>
    </div>
  </div>
</div>

**📝 정답**

외부에서 `count` 변수에 직접 접근할 수는 없지만, `counter` 함수를 통해서만 값을 올릴 수 있습니다.

```jsx
// 1. createCounter 함수 작성
function createCounter() {
  let count = 0; // 내부 변수 (은닉됨: 밖에서 직접 못 건드림)

  // 2. 내부 함수 리턴 (클로저)
  return function() {
    count++;      // 부모의 count 변수를 가져와서 1 증가시킴
    return count; // 증가된 값을 반환
  };
}

// 3. 함수 생성 및 실행
const counter = createCounter();
// 이제 counter 변수에는 '숫자를 세는 기능'이 담겨있음

console.log(counter()); // 1 (0 -> 1)
console.log(counter()); // 2 (1 -> 2 : 아까 그 값을 기억함!)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>만약 <code>let count = 0</code>을 함수 바깥(전역)에 뒀다면, 다른 누군가가 실수로 <code>count = 100</code>으로 바꿔버릴 위험이 있습니다.</li>
    <li>하지만 위 코드처럼 <strong>함수 안에 가둬두고(Closure)</strong> 오직 <code>counter()</code>라는 문지기를 통해서만 접근하게 만들면, 데이터가 안전하게 보호되면서도 상태를 계속 기억할 수 있습니다.</li>
    <li>이것이 바로 리액트의 <code>useState</code>가 만들어진 원리입니다.</li>
  </ul>
</div>

---

## 10. 잠시, 가비지 컬렉터(GC)란?

**📌 메모리 청소부 (Garbage Collector)**

프로그램이 더 이상 사용하지 않는 메모리를 자동으로 찾아서 해제하는 시스템입니다.

**📌 삭제 규칙 (Mark-and-Sweep)**

어떤 데이터를 살리고 어떤 데이터를 지울지 결정하는 규칙입니다.

- 도달 가능성(Reachability)이 핵심!
- "루트(Root)에서 연결되어 있는가?"
- 연결 끊긴 데이터 = **쓰레기(Garbage)** → 삭제

**⚙️ 데이터 생존 여부 시각화**

<img src="/images/content/javascript/4-3/javascript-4-3-surviving-vs-deleted-data.png" alt="가비지 컬렉터의 데이터 생존 여부 시각화" style="display:block;width:100%;max-width:480px;height:auto;border-radius:8px;margin:.6rem auto 1rem;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:480px;">[그림] Root 연결 여부에 따른 데이터 생존/삭제 비교 (도달 가능성)</div>

**📌 클로저의 역할**

외부 함수는 끝났지만, **내부 함수가 변수를 잡고 있어서** GC가 지우지 못하게 막는 것!

**🧪 클로저 활용 - 정보 은닉**

**🔹 Private 변수 패턴**

변수를 함수 안에 숨겨두고, 오직 정해진 방법(메서드)으로만 조작할 수 있게 만드는 패턴입니다.

```jsx
function createBankAccount(initialBalance) {
  let balance = initialBalance; // 잔액 (private!)

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        return '잔액 부족';
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}
```

**🔹 사용 예시**

외부에서는 `balance` 변수를 볼 수도, 건드릴 수도 없습니다.

```jsx
const account = createBankAccount(1000);

console.log(account.getBalance()); // 1000
console.log(account.deposit(500)); // 1500
console.log(account.withdraw(200)); // 1300

// balance에 직접 접근 불가!
console.log(account.balance); // undefined (내 주머니에 없으니까 못 찾음)
account.balance = 999999;     // 객체에 새 balance 속성이 추가될 뿐, 클로저 안의 진짜 balance 값은 바뀌지 않음
console.log(account.getBalance()); // 여전히 1300 (안전함!)
```

**📝 요약 메모**

- **보호** — `balance`는 클로저 안에 숨겨져 있어서 외부에서 **직접 접근/수정 불가**합니다.
- **캡슐화** — `deposit`, `withdraw`, `getBalance`만이 balance에 접근 가능합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이것이 바로 <strong>"캡슐화(Encapsulation)"</strong>입니다.</li>
    <li>은행 계좌의 잔액(<code>balance</code>)을 누구나 마음대로 <code>account.balance = 100억</code> 처럼 바꿀 수 있다면 큰일 나겠죠?</li>
    <li>클로저를 사용하면 이 변수를 <strong>'접근 금지 구역'</strong>에 안전하게 숨겨두고, 은행원(메서드)을 통해서만 입출금을 하도록 강제할 수 있습니다.</li>
    <li>즉, <code>account.balance</code>라는 새 속성은 생길 수 있지만, <code>deposit</code>/<code>getBalance</code>가 사용하는 private <code>balance</code> 변수와는 별개입니다.</li>
    <li>자바스크립트의 최신 문법에는 <code>#private</code> 필드가 있지만, 클로저를 사용하면 전통적인 방식으로 private 변수처럼 데이터를 감출 수 있습니다.</li>
  </ul>
</div>

---

## 💻 실습 : 정보 은닉

**🎯 Mission**

직접 코드를 작성하여 중요한 데이터를 외부로부터 숨기는 패턴을 연습합니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl"><code>createSafe</code> 함수를 작성하세요.</div>
      <div class="wda-sdsc">내부 변수 <code>_secret = "Gold"</code></div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">외부에서 <code>_secret</code>에 접근을 시도해보세요.</div>
      <div class="wda-sdsc">(실패 확인)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl"><code>getSecret()</code> 메서드를 통해 값을 조회하세요.</div>
    </div>
  </div>
</div>

**📝 정답**

금고(`createSafe`) 안에 있는 금(`Gold`)은 오직 열쇠(`getSecret`)를 통해서만 꺼낼 수 있습니다.

```jsx
// 1. createSafe 함수 작성
function createSafe() {
  const _secret = "Gold"; // 금고 안의 내용물 (은닉됨)

  return {
    // 3. getSecret 메서드 제공 (공개된 열쇠)
    getSecret() {
      return _secret; // 렉시컬 스코프를 통해 _secret에 접근 가능
    }
  };
}

const mySafe = createSafe();

// 2. 외부에서 접근 시도
console.log(mySafe._secret); // undefined
// (결과: 실패! 금고 밖에서는 안의 내용물이 보이지 않습니다.)

// 3. 메서드를 통해 조회
console.log(mySafe.getSecret()); // "Gold"
// (결과: 성공! 정해진 방법을 통해서만 값을 꺼낼 수 있습니다.)
```

---

## 11. IIFE vs 클로저 (정보 은닉 비교)

**📌 즉시 실행 함수 (IIFE)**

정의되자마자 즉시 실행되며, **단 하나만 존재하는** 저장소를 만들 때 사용합니다.

```jsx
const Singleton = (function() {
  let count = 0; // 한 번만 만들어지고 계속 공유됨
  return {
    inc: () => ++count // count를 1 증가시키고 반환
  };
})(); // 정의와 동시에 실행됨! ()

Singleton.inc(); // 1
Singleton.inc(); // 2
```

- **단 하나만 존재 (Singleton)** — 한 번 실행되고 끝. 전역에서 공유되는 유일한 저장소를 만들 때 사용

**📌 클로저 (함수 팩토리)**

함수를 호출할 때마다 새로운 환경을 만들어, **여러 개의 독립적인** 저장소를 만들 때 사용합니다.

```jsx
function createCounter() {
  let count = 0; // 호출될 때마다 새로 만들어짐
  return {
    inc: () => ++count
  };
}

const A = createCounter(); // A만을 위한 count 생성
const B = createCounter(); // B만을 위한 count 생성 (별개)

// A를 쓴다고 B가 바뀌지 않음
```

- **여러 개 생성 가능 (Instance)** — 호출할 때마다 새로운 환경 생성. 독립적인 저장소가 필요할 때 사용

**🆚 비교 정리**

두 방식의 차이를 기억하는 것이 중요합니다.

<div class="wda-callout wda-ci">
  <ul>
    <li>IIFE는 전역 오염을 줄이고 하나의 공유 저장소를 만들 때 자주 사용되며, 클로저 팩토리는 호출할 때마다 독립된 상태를 만드는 패턴에 자주 사용됩니다.</li>
  </ul>
</div>

| **비교 항목** | **🏠 IIFE (즉시 실행 함수)** | **🔐 클로저 (함수 팩토리)** |
| --- | --- | --- |
| **핵심 질문** | **"공유할 것인가?"** | **"각자 가질 것인가?"** |
| **비유 대상** | **우리 집 냉장고** (공용) | **각자의 개인 금고** (개별) |
| **작동 방식** | 가족 누구나 문을 열면 **똑같은 내용물**을 보게 됨 | 내 금고에 돈을 넣어도 **형의 금고 돈은 늘어나지 않음** |
| **데이터 수** | **Only One** (단 하나) | **Many** (생성하는 만큼) |
| **실무 활용** | 전역 설정, 공통 데이터 관리 | 게임 캐릭터 체력, UI 컴포넌트 상태 |

---

## 12. 클로저 활용 - 함수 팩토리

**🧪 곱셈기 생성기 (Multiplier)**

특정 숫자를 곱하는 기능을 가진 함수를 **공장처럼 찍어내는** 예제입니다.

```jsx
function createMultiplier(multiplier) {
  // multiplier라는 변수는 외부 함수가 끝나도 내부 함수가 기억합니다.
  return function(number) {
    return number * multiplier; // 기억해둔 multiplier와 입력받은 number를 곱함
  };
}

// 1. 공장을 가동해서 각기 다른 '기능'을 가진 함수들을 만듭니다.
const double = createMultiplier(2);   // 2를 곱하는 함수 생성 (multiplier = 2)
const triple = createMultiplier(3);   // 3을 곱하는 함수 생성 (multiplier = 3)
const times10 = createMultiplier(10); // 10을 곱하는 함수 생성 (multiplier = 10)

// 2. 생성된 함수들을 사용해봅니다.
console.log(double(5));  // 10 (5 * 2)
console.log(triple(5));  // 15 (5 * 3)
console.log(times10(5)); // 50 (5 * 10)
```

- **핵심**: 각 함수가 **다른 multiplier 값을 "기억"** 하고 있습니다. (서로 간섭하지 않음)

**🧪 인사 생성기 (Greeter)**

인사말(Hello, Hi 등)을 미리 설정해두고 이름만 바꿔서 인사하는 함수를 만듭니다.

```jsx
function createGreeter(greeting) {
  // greeting(인사말)을 기억하는 클로저를 반환합니다.
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

// 1. 상황별 인사 함수를 찍어냅니다.
const sayHello = createGreeter('Hello');   // 'Hello' 저장
const sayHi = createGreeter('Hi');         // 'Hi' 저장
const sayAnnyeong = createGreeter('안녕'); // '안녕' 저장

// 2. 이름만 넣으면 저장된 인사말과 결합됩니다.
console.log(sayHello('Kim'));       // 'Hello, Kim!'
console.log(sayHi('Lee'));          // 'Hi, Lee!'
console.log(sayAnnyeong('Park'));   // '안녕, Park!'
```

- **핵심**: 함수를 찍어내는 **"공장" 패턴**입니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이 패턴이 왜 좋을까요? 바로 <strong>"중복 제거(DRY)"</strong> 때문입니다.</li>
    <li>만약 이 패턴을 쓰지 않는다면 <code>function double()...</code>, <code>function triple()...</code> 처럼<br>비슷한 코드를 계속 복사해서 만들어야 했을 겁니다.</li>
    <li><strong>함수 팩토리(Function Factory)</strong>를 사용하면, 틀(Template)은 하나만 만들어두고 설정값(매개변수)만 바꿔서 <strong>무한히 많은 변형 함수</strong>를 아주 쉽게 찍어낼 수 있습니다.</li>
    <li>이것이 바로 프로그래머들이 말하는 "우아한 코드"입니다.</li>
  </ul>
</div>

---

## 13. 클로저 활용 - 커링 기초

**📌 커링(Currying)이란?**

여러 인자를 받는 함수를 **인자 하나씩 받는 함수 체인**으로 변환하는 기법입니다.

```jsx
// 일반 함수: 한 번에 모든 재료(인자)를 다 넣어야 함
function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3); // 6

// 커링된 함수: 재료를 하나씩 순서대로 넣을 수 있음 (함수를 계속 리턴)
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c; // 마지막에 다 모이면 계산
    };
  };
}

curriedAdd(1)(2)(3); // 6
```

**🧪 부분 적용 (Partial Application)**

인자를 미리 **고정(Fix)**해서 재사용성을 높이는 방식입니다.

```jsx
// 커링으로 부분 적용하기
const add1 = curriedAdd(1);     // a=1 고정 (1을 더하는 함수 생성)
const add1and2 = add1(2);       // b=2 고정 (1과 2를 더해둔 상태)
const result = add1and2(3);     // c=3 입력 (드디어 완성!)

console.log(result); // 6
```

**🧪 실전 예시: API 요청 함수**

변하지 않는 공통 주소(BaseURL)를 고정해두고 사용하면 매우 효율적입니다.

```jsx
// 화살표 함수로 간단하게 표현한 커링
const fetchFrom = baseUrl => endpoint => fetch(`${baseUrl}${endpoint}`);

// 1. 공통 URL을 미리 고정 (API 설정)
const api = fetchFrom('https://api.example.com');

// 2. 이제 뒷부분(endpoint)만 바꿔서 재사용
api('/users'); // https://api.example.com/users 로 fetch 요청을 생성함
api('/posts'); // https://api.example.com/posts 로 fetch 요청을 생성함
```

> 주의: 이 코드는 URL 문자열을 출력하는 예제가 아니라, 실제 fetch 요청을 만드는 예제입니다.

- **장점**: 인자를 미리 고정해서 **재사용성 향상**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>커링(Currying)</strong>은 쉽게 말해 <strong>"함수용 키핑(Keeping) 서비스"</strong>입니다.</li>
    <li>술집에서 양주를 키핑해두고 갈 때마다 조금씩 마시는 것처럼, 함수에 필요한 데이터(인자)를 한 번에 다 넣지 않고,<br><strong>"일단 이거 먼저 기억해둬(클로저)"</strong> 하고 나중에 나머지 데이터를 넣어서 완성하는 것입니다.</li>
    <li>특히 실무에서는 예시처럼 <code>base URL</code>이나 <code>Header 설정</code> 등 <strong>변하지 않는 설정값</strong>을 미리 고정해두고, 실제 데이터만 바꿔가며 호출하는 방식으로 코드를 깔끔하게 만들 때 자주 사용합니다.</li>
  </ul>
</div>

---

## 14. 클로저와 메모리

**⚠️ 메모리 누수 가능성**

클로저가 필요 이상으로 큰 데이터를 계속 붙잡고 있으면 메모리가 낭비되는 현상입니다.

```jsx
function heavyClosure() {
  const hugeData = new Array(1000000).fill('data');

  return function() {
    // hugeData를 참조 -> 메모리 유지
    return hugeData.length;
  };
}

const closure = heavyClosure();
// hugeData가 메모리에 계속 남아있음!
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <ul>
    <li>큰 데이터를 참조하는 클로저는 메모리를 계속 점유합니다.</li>
  </ul>
</div>

**💡 해결 방법 (Best Practice)**

메모리를 효율적으로 관리하기 위한 두 가지 방법입니다.

**💡 필요한 값만 캡처하기**

```jsx
function betterClosure() {
  const hugeData = new Array(1000000).fill('data');
  const length = hugeData.length; // 필요한 것만 추출

  // hugeData는 더 이상 참조하지 않음
  return function() {
    return length; // 숫자만 참조
  };
}
```

**💡 사용 후 명시적 해제**

```jsx
// 또는 사용 후 명시적 해제
let closure = heavyClosure();
// ... 사용 ...
closure = null; // 참조 해제 -> GC 대상
```

**📌 기억 포인트**

안전한 클로저 사용을 위한 수칙입니다.

- **필요한 값만 클로저에 캡처** — 통째로 참조하지 말고 필요한 데이터만 변수에 담아 쓰세요.
- **사용 끝나면 null로 참조 해제** — 참조를 끊으면 해당 데이터가 GC 대상이 될 수 있습니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>클로저는 <strong>"강력한 기억력"</strong>을 가졌지만, 때로는 그 기억력이 독이 될 수 있습니다.</li>
    <li>비유하자면, 도서관에서 책 한 페이지(<code>length</code>)만 필요한데<br>책장 전체(<code>hugeData</code>)를 대출해서 집에 계속 쌓아두는 것과 같습니다.</li>
    <li>책장에서 필요한 내용만 쪽지에 적어오거나(<code>betterClosure</code>), 다 읽은 책은 바로 반납함에 넣는 습관(<code>closure = null</code>) 이 두 가지만 기억하면 메모리 걱정 없이 클로저의 장점만 누릴 수 있습니다.</li>
  </ul>
</div>

---

## 15. 반복문에서의 클로저 문제

**⚠️ 클래식 문제: var 사용**

`var`와 비동기 함수(`setTimeout`)를 함께 썼을 때 발생하는 가장 유명한 실수입니다.

```jsx
// var를 사용한 반복문
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// 기대: 0, 1, 2
// 실제: 3, 3, 3 (?!)
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <ul>
    <li>3개의 모든 콜백이 <strong>클로저로 같은 i를 참조</strong>! 1초 후에는 이미 i = 3. 각자 다른 값을 기억하는 게 아닙니다!</li>
  </ul>
</div>

**⚙️ 왜 이런 일이? (원인 분석)**

자바스크립트의 실행 타이밍과 스코프 특성이 결합되어 발생한 현상입니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">시간차 공격 (Time Diff)</div><div class="wda-sdsc">반복문은 순식간에(0.0001초) 완료됨. 이때 <code>i</code>는 이미 <strong>3</strong>이 되어버림. 1초 뒤, 타이머가 깨어나서 <code>i</code>를 찾음. "어? <code>i</code>가 3이네?" → <strong>3 출력</strong></div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">var의 특성</div><div class="wda-sdsc">var는 <strong>함수 스코프</strong>입니다. 반복문 블록({})마다 새로운 스코프를 만들지 않고, 함수 전체에서 <strong>하나의 <code>i</code>만 공유</strong>합니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">핵심 오해 풀기 (Snapshot vs Reference)</div><div class="wda-sdsc">타이머 등록 때 <code>i</code> 값이 <strong>복사(대입)</strong>되는 게 아닙니다! 함수는 <code>i</code>가 있는 <strong>방의 위치(참조)</strong>만 기억합니다. 1초 뒤에 그 방을 열어보니, 값이 <strong>3으로 바뀌어 있는 것</strong>입니다.</div></div>
  </div>
</div>

**🆚 만약 setTimeout이 없다면?**

비동기가 아닐 때는 어떻게 동작하는지 비교해 봅니다.

> Q: 만약 setTimeout이 없다면?
> A: 바로 실행되므로 0, 1, 2가 정상 출력됨. (즉, 비동기 + var 스코프의 합작품!)

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li>이 문제는 면접 단골 질문이자, 과거 자바스크립트 개발자들을 괴롭혔던 주범입니다.</li>
    <li>범인은 바로 <strong><code>var</code></strong>입니다.</li>
    <li><code>var</code>는 스코프를 크게 잡기 때문에(함수 스코프), 반복문이 돌 때마다 새로운 <code>i</code>를 만드는 게 아니라 <strong>하나의 <code>i</code>를 계속 덮어씁니다.</strong></li>
    <li>결국 1초 뒤에 심부름꾼(setTimeout) 3명이 도착했을 때는 이미 반복문이 끝나서 <code>i</code>가 3이 된 상태인 거죠.</li>
  </ul>
</div>

**해결책**

<div class="wda-callout wda-cs">
  <ul>
    <li>요즘은 <strong><code>let</code></strong>을 쓰면 아주 깔끔하게 해결됩니다. (<code>let</code>은 블록 스코프라서 반복할 때마다 새로운 <code>i</code>를 만들어줍니다!)</li>
  </ul>
</div>

---

## 16. 반복문 클로저 해결 방법

**📝 방법 1: let 사용 (Best)**

가장 권장되는 모던 자바스크립트 방식입니다.

```jsx
// let은 블록 스코프!
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// 출력: 0, 1, 2 (정상!)
```

- **let의 마법 (Per-Iteration Scope)** — 반복문이 돌 때마다 **새로운 스코프 방**을 만들고, 그 안에 **새로운 `i`**를 입주시킵니다. `{ let i=0 }` → `{ let i=1 }` → `{ let i=2 }`

**📝 방법 2: IIFE 사용 (Legacy)**

`let`이 없던 옛날(ES6 이전)에 사용하던 방식입니다.

```jsx
// 즉시 실행 함수로 값 캡처
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 1000);
  })(i); // 현재 i 값을 j로 전달
}

// 출력: 0, 1, 2 (정상!)
```

- **원리** — IIFE가 현재 `i` 값을 **복사하여 `j`에 저장**해두기 때문에, 나중에 `i`가 변해도 `j`는 변하지 않습니다.
- **참고** : ES6 이전의 해결책입니다.

**💡 권장 사항**

<div class="wda-callout wda-cs">
  <ul>
    <li><code>let</code>을 사용하세요! 간단하고 직관적입니다. IIFE는 ES6 이전 레거시 코드에서 볼 수 있습니다.</li>
  </ul>
</div>

**💡 보충 설명**

이 두 가지 방법의 차이는 **"방을 새로 만드느냐(let)"** vs **"사진을 찍어두느냐(IIFE)"**의 차이입니다.

| **비교 항목** | **✨ let (Block Scope)** | **🕰️ IIFE (함수 스코프)** |
| --- | --- | --- |
| **핵심 비유** | **"매번 새로운 방 만들기"** | **"사진 찍어 쥐여주기"** |
| **작동 원리** | 반복할 때마다 아예 **새로운 방(Scope)**을 만들어서 숫자(0, 1, 2)를 각각 가둬둡니다. | `var` 때문에 방이 하나밖에 없으니, 숫자가 바뀔 때마다 **즉시 사진을 찍어서(복사)** 심부름꾼에게 쥐여주는 방식입니다. |
| **코드 특징** | 가장 **깔끔**하고 직관적 | 코드가 복잡하고 **옛날 방식(Legacy)** |
| **비고** | 모던 자바스크립트 권장 | "옛날엔 이렇게 고생했구나" 이해용 |

---

## ✅ 핵심 요약

**🧠 렉시컬 스코프 (Lexical Scope)**

코드를 작성한 위치가 곧 운명(스코프)을 결정한다는 핵심 원칙입니다.

| **핵심 원칙** | **설명** | **비유** |
| --- | --- | --- |
| **선언 위치 기준** | 함수를 어디서 호출했는지는 중요하지 않음.<br>**어디에 작성(선언)했느냐**가 유일한 기준. | 미국에서 태어난 아이가 한국에 놀러 와도 국적은 안 바뀜 |
| **정적 스코프** | 코드가 작성되는 순간 스코프가 확정됨.<br>(실행 중에 바뀌지 않음) | 건물을 지을 때 설계도대로 방이 나뉨.<br>사람이 들어간다고 방 구조가 바뀌지 않음 |
| **스코프 체인** | **내 주머니 → 부모 주머니 → 전역 주머니**<br>순서로 변수를 탐색함. (안에서 밖으로만 가능) | 틴팅된 유리창과 같음.<br>안에서는 밖이 보이지만, 밖에서는 안이 안 보임 |

**🧠 클로저 (Closure)의 마법**

함수가 종료되어도 변수가 살아남는 메커니즘을 정리했습니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">탄생 조건</div>
    <div class="wda-fcard-dsc"><strong>외부 함수</strong>가 종료되었는데, <strong>내부 함수</strong>가 외부 변수를 <strong>참조</strong>하고 있을 때 발생</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">생존 이유</div>
    <div class="wda-fcard-dsc"><strong>참조(Reference)</strong>가 남아있으면 <strong>가비지 컬렉터(GC)</strong>가 청소하지 않음</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">핵심 기능</div>
    <div class="wda-fcard-dsc">상태(데이터)를 안전하게 <strong>기억</strong>하고 <strong>유지</strong>함</div>
  </div>
</div>

**🧠 실전 활용 & 주의사항 (Do's & Don'ts)**

클로저를 언제 써야 하고, 언제 조심해야 하는지 비교했습니다.

<div class="wda-group2">
  <div class="wda-group wda-group-good">
    <div class="wda-group-ttl">✅ 활용 (Good)</div>
    <div class="wda-fgrid">
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">정보 은닉 (Encapsulation)</div>
        <div class="wda-fcard-dsc">변수를 함수 안에 숨겨서 외부 직접 접근을 차단하는 효과</div>
      </div>
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">함수 팩토리 (Factory)</div>
        <div class="wda-fcard-dsc">설정값이 적용된 함수를 공장처럼 찍어냄(커링, 부분 적용 등)</div>
      </div>
    </div>
  </div>
  <div class="wda-group wda-group-bad">
    <div class="wda-group-ttl">⚠️ 주의 (Bad)</div>
    <div class="wda-fgrid">
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">메모리 누수 (Memory Leak)</div>
        <div class="wda-fcard-dsc">불필요하게 큰 데이터를 계속 잡고 있으면 안 됨 → 다 썼으면 <code>null</code>로 해제</div>
      </div>
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">반복문 실수 (Loop)</div>
        <div class="wda-fcard-dsc"><code>var</code>와 비동기를 함께 쓸 때 주의 → <strong><code>let</code>을 사용</strong>하면 해결!</div>
      </div>
    </div>
  </div>
</div>

**🆚 헷갈리는 개념 비교**

스코프와 실행 컨텍스트의 차이를 명확히 구분했습니다.

<table class="wda-summary-table">
  <tr>
    <th>비교 항목</th>
    <th>🌐 스코프 (Scope)</th>
    <th>🎬 실행 컨텍스트 (Execution Context)</th>
  </tr>
  <tr>
    <td><strong>핵심 질문</strong></td>
    <td>"이 변수, 어디까지 쓸 수 있어?"</td>
    <td>"지금 코드가 어떤 환경에서 돌아가?"</td>
  </tr>
  <tr>
    <td><strong>성격</strong></td>
    <td>정적 (Static)</td>
    <td>동적 (Dynamic)</td>
  </tr>
  <tr>
    <td><strong>결정 시점</strong></td>
    <td>코드 작성(선언) 할 때</td>
    <td>코드 실행(호출) 할 때</td>
  </tr>
  <tr>
    <td><strong>비유</strong></td>
    <td>땅따먹기 구역 (변수의 영토)</td>
    <td>연극 무대 (코드가 실행되는 환경)</td>
  </tr>
</table>
