---
title: "5-4 에러 핸들링하기"
status: "completed"
description: "Error 객체와 내장 에러 타입부터 try-catch-finally, 커스텀 에러 클래스, 비동기 에러 처리, 전역 에러 핸들러, 베스트 프랙티스까지 에러 핸들링의 전 과정을 정리한다."
category: "JavaScript"
section: "Async"
tags:
  - javascript
  - error-handling
  - try-catch
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
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px}
.wda-compare-ttl{font-size:.94rem;font-weight:700;margin-bottom:8px}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:4px}
.wda-legacy{border-color:rgba(239,68,68,.22);background:rgba(239,68,68,.02)}
.wda-modern{border-color:rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
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

<div class="wda-goal" style="position:relative;overflow:visible;">
  • <strong>에러와 예외</strong> — 프로그램 중단을 막기 위해 예상치 못한 상황을 관리합니다.<br>
  • <strong>try-catch-finally</strong> — 에러를 포착하고 리소스를 정리하는 안전한 패턴을 익힙니다.<br>
  • <strong>비동기 에러 처리</strong> — Promise와 async/await에서의 에러 전파와 처리 방법을 배웁니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. 에러(Error) 핵심 요약</h2>
</div>

**📌 인식의 전환 (Mindset Shift)**

| **구분** | **과거의 인식 ( 😱 )** | **올바른 인식 ( 🆘 )** |
| --- | --- | --- |
| **반응** | "망했다! 프로그램이 죽었어." | **"도와주세요! 처리할 수 없는 데이터예요."** |
| **의미** | 실패, 잘못, 공포의 대상 | **구조 요청 (Signal)**이자 대화 시도 |
| **해석** | 프로그램이 멈춘 부정적 상황 | 감당할 수 없는 상황을 알리는 **정상적인 신호** |

**📌 에러의 중요성 (Why Error Matters)**

왜 에러가 발생하는 것이 침묵하는 것보다 나은지 설명하는 비유입니다.

| **개념** | **별명** | **특징 및 교훈** |
| --- | --- | --- |
| **Silent Failure**(에러 없음) | **침묵의 살인자** 🔇<br>(좀비 프로그램) | • 에러를 뱉지 않고 엉뚱한 계산을 수행합니다.<br>• 겉으로는 멀쩡해 보이지만, **나중에 DB를 다 망가뜨리는 최악의 상황**을 만듭니다. |
| **Error**(에러 발생) | **통증(Pain)의 미학** 🏥<br>(건강한 통증) | • 우리 몸의 통증처럼 **"더 크게 다치기 전에"** 알려줍니다.<br>• "여기 문제 있어요!"라고 외치는 **고마운 신호**입니다. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Fail Fast (빨리 실패하기)</strong> — 소프트웨어 설계의 중요한 원칙 중 하나입니다.<br><br>
  문제가 생겼을 때 어설프게 덮고 넘어가는 것(Silent Failure)보다,
  <strong>최대한 빨리 에러를 터뜨려서(Fail Fast)</strong>
  개발자가 즉시 수정할 수 있게 하는 것이 시스템 전체의 안전을 위해 훨씬 좋습니다.
</div>

---

### 에러 처리의 이미지

<img src="/images/content/javascript/5-4/javascript-5-4-error-handling-image.png" alt="Try(곡예 시도) → Catch(안전 그물, 프로그램이 죽지 않게 받아줌) → Finally(공연 종료)로 이어지는 try-catch-finally 흐름 비유" style="display:block;width:100%;max-width:560px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:560px;">[그림] 에러 처리의 이미지</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. 에러 객체 (Error Object)</h2>
</div>

**에러 정보를 담는 객체**입니다.

**📌 주요 프로퍼티 (Key Properties)**

에러 객체를 열어보면 들어있는 3가지 핵심 정보입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">name</div>
    <div class="wda-fcard-dsc">에러의 이름 (예: <code>Error</code>, <code>TypeError</code>, <code>ReferenceError</code>)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">message</div>
    <div class="wda-fcard-dsc">에러가 발생한 이유를 적은 상세 메시지</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">stack</div>
    <div class="wda-fcard-dsc">에러가 발생한 위치를 추적하는 <strong>호출 스택 (Stack Trace)</strong></div>
  </div>
</div>

**📌 Stack (탐정의 단서)**

**"범인(버그)을 잡는 가장 중요한 지도입니다."**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">발자국 추적</div>
    <div class="wda-fcard-dsc">에러가 터진 지점까지 함수가 어떤 순서로 호출되었는지 기록합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">흐름 파악</div>
    <div class="wda-fcard-dsc">"A 함수가 B를 부르고, B가 C를 불렀는데 C에서 터졌네!"라는 흐름을 한눈에 알 수 있습니다.</div>
  </div>
</div>

**📝 예제 코드**

```js
// 1. 에러 객체 직접 생성해보기
const error = new Error('문제가 발생했습니다!');

console.log(error.name);    // "Error" (이름)
console.log(error.message); // "문제가 발생했습니다!" (내용)
// console.log(error.stack); // 호출 경로가 주르륵 출력됨

// 2. 에러 타입 확인하기 (instanceof)
try {
  // 일부러 타입 에러를 발생시킴
  throw new TypeError('타입 에러!');
} catch (e) {
  // 이 에러가 TypeError가 맞는지 검사
  console.log(e instanceof TypeError); // true
  console.log(e.name); // "TypeError"
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>throw가 뭔가요?</strong> — <code>new Error()</code>로 에러 객체를 만드는 건 그냥 '폭탄'을 조립만 한 상태입니다. 실제로 이 폭탄을 터뜨려서 프로그램에 알리는 명령어가 바로 <strong>throw</strong>입니다. (<code>throw error;</code>)<br><br>
  <strong>다양한 에러 종류</strong> — 자바스크립트에는 Error 외에도 상황에 맞는 다양한 에러들이 있습니다.<br>
  • <code>SyntaxError</code> : 오타, 문법 실수<br>
  • <code>ReferenceError</code> : 없는 변수를 쓸 때<br>
  • <code>TypeError</code> : 숫자를 함수처럼 실행하려 할 때 등
</div>

---

<img src="/images/content/javascript/5-4/javascript-5-4-stack-trace-detective-notebook.png" alt="'범인은 발자국을 남긴다...' Error Report Case #1024: TypeError: Cannot read properties of null. at validateUser(user.js:42) → 여기서 user가 null이었음(결정적 단서), at loginProcess(auth.js:15), at onClickButton(main.js:10) → 범죄의 시작점(사용자 클릭). 참고: stack은 비표준이지만 모든 브라우저가 지원합니다." style="display:block;width:100%;max-width:560px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:560px;">[그림] 탐정의 수첩 - Stack Trace</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. 내장 에러 타입 (Built-in Error Types)</h2>
</div>

**🧠 주요 에러 클래스 요약**

| **에러 이름 (Name)** | **설명 (Description)** | **발생 예시 (Code Example)** |
| --- | --- | --- |
| **SyntaxError**(문법 오류) | 코드를 작성하는 문법(규칙)이 틀렸을 때 발생합니다. | `JSON.parse('{잘못된}')`<br>`eval('if if')` |
| **ReferenceError**(참조 오류) | 선언되지 않은(없는) 변수를 사용하려고 할 때 발생합니다. | `console.log(없는변수)` |
| **TypeError**(타입 오류) | 자료형(Type)이 맞지 않는 연산을 시도할 때 발생합니다. | `null.toString()`<br>`const a=1; a();`<br>(숫자를 함수처럼 호출) |
| **RangeError**(범위 오류) | 허용된 숫자 범위를 벗어났을 때 발생합니다. | `new Array(-1)`<br>(배열 길이는 음수 불가)<br>`(1).toFixed(101)` |
| **URIError** | `encodeURI` 등 주소 관련 함수에서 형식이 잘못되었을 때 발생합니다. | `decodeURI('%')` |
| **Error**(기본) | 가장 일반적인 기본 에러 객체입니다. | `throw new Error('뭔가 잘못됨!')` |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>가장 많이 보는 '에러 3대장'</strong> — 실무에서나 공부할 때 90% 이상은 다음 3가지를 보게 됩니다.<br>
  1. <strong>TypeError</strong> : "어? 이거 함수 아니었어?" (가장 흔함)<br>
  2. <strong>ReferenceError</strong> : "어? 오타 났네." (변수명 실수)<br>
  3. <strong>SyntaxError</strong> : "어? 괄호 안 닫았네." (초보 시절 흔함)<br><br>
  <strong>왜 에러 종류를 나눴을까요?</strong> — 그냥 다 <code>Error</code>라고 하면 편할 것 같지만, 종류가 나눠져 있어야 <strong>"원인"을 빠르게 파악</strong>할 수 있기 때문입니다.<br>
  <code>ReferenceError</code>가 뜨면 로직을 볼 필요 없이 <strong>변수 이름(오타)</strong>만 확인하면 되니까요!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🕵️‍♀️ Pop Quiz: 에러 탐정</h2>
</div>

**Q. 다음 코드를 실행했을 때, 각각 어떤 에러(Error Name)가 발생할지 맞춰보세요!**

**❓ 문제편**

**🧪 Case 1** — 값이 비어있는 상태에서 기능을 수행하려고 합니다.

```js
null.toString()
```

**🧪 Case 2** — 선언한 적 없는 변수를 출력하려고 합니다.

```js
console.log(x)
```

**🧪 Case 3** — JSON 문법에 맞지 않는 문자열을 해석하려고 합니다.

```js
JSON.parse('bad')
```

**💡 정답 및 해설편**

**✅ Case 1 정답 : `TypeError`**

- **이유** — `null`이나 `undefined`는 비어있는 값이기 때문에 `toString()` 같은 메서드(기능)를 가지고 있지 않습니다. 타입(Type)이 맞지 않는 기능을 억지로 쓰려고 해서 발생합니다.

**✅ Case 2 정답 : `ReferenceError`**

- **이유** — `x`라는 변수는 어디에도 선언된 적이 없습니다. 메모리에 존재하지 않는(Reference가 없는) 대상을 참조하려고 할 때 발생합니다.

**✅ Case 3 정답 : `SyntaxError`**

- **이유** — `JSON.parse()` 안에는 반드시 `{"key": "value"}` 형태의 올바른 JSON 문자열이 들어와야 합니다. `'bad'`라는 텍스트는 JSON 문법 규칙(Syntax)에 맞지 않기 때문에 해석할 수 없습니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>에러 메시지 읽는 꿀팁</strong> — 브라우저 콘솔창(F12)에 빨간색 에러가 떴을 때, 당황하지 말고 <strong>가장 앞 단어(Error Name)</strong>를 먼저 확인하세요.<br>
  • <code>Uncaught TypeError...</code> ➡ "아, 내가 <code>null</code>이나 <code>undefined</code>를 건드렸구나."<br>
  • <code>Uncaught ReferenceError...</code> ➡ "아, 오타 났거나 변수 선언을 안 했구나."<br>
  이것만 빨리 캐치해도 디버깅 속도가 훨씬 빨라집니다!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. try-catch-finally</h2>
</div>

**에러를 잡아서(Catch) 유연하게 처리하기**

**📝 문법 구조**

| **구문 (Block)** | **의미 (Meaning)** | **역할 및 특징 (Description)** |
| --- | --- | --- |
| **try** | **시도** 🔭 | • 에러가 발생할 수 있는 **위험한 코드**를 감싸는 **감시 구역**입니다.<br>• 여기서 문제가 터지면 하던 일을 멈추고 **즉시 `catch`로 점프**합니다. |
| **catch** | **포착** 🥅 | • 에러가 **발생했을 때만** 실행되는 **안전망**입니다.<br>• `error` 객체를 통해 에러 내용을 확인하거나, 사용자에게 안내 메시지를 띄웁니다. |
| **finally** | **마무리** 🧹 | • 성공하든 실패하든 관계없이 **무조건 마지막에 실행**되는 블록입니다.<br>• 주로 사용한 리소스를 정리할 때 쓰이며, 생략 가능합니다. |

**실행 흐름 요약**

- **성공 시** : `try` 실행 ➡ `finally` 실행 (끝)
- **실패 시** : `try` 실행하다 에러 ➡ `catch` 점프 ➡ `finally` 실행 (끝)

**📝 예제 코드**

에러가 발생해도 프로그램이 멈추지 않고 끝까지 실행되는 흐름을 확인해 보세요.

```js
try {
  // 1. 감시 구역: 에러가 발생할 수 있는 코드 작성
  const data = JSON.parse('엉터리JSON');
  console.log(data); // 위에서 에러나면 실행 안 됨

} catch (error) {
  // 2. 안전망: 에러 발생 시에만 실행
  console.error('에러 발생:', error.message);
  alert('데이터를 불러올 수 없습니다.'); // 사용자에게 친절한 안내

} finally {
  // 3. 마무리: 성공/실패 여부와 상관없이 무조건 실행
  console.log('작업 완료');
  console.log('로딩 화면 종료'); // 로딩화면 끄기 같은 뒷정리에 유용
}

// 4. 생존 확인: try-catch 덕분에 프로그램이 죽지 않고 여기까지 실행됨!
console.log('프로그램 계속 진행');
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 finally가 필요할까요?</strong> — 예를 들어 데이터를 불러올 때 화면에 <strong>'로딩 중... (뺑글뺑글)'</strong> 아이콘을 띄웠다고 가정해 봅시다.<br>
  데이터를 가져오는 데 성공하든(try), 실패해서 에러가 나든(catch), 작업이 끝나면 <strong>로딩 아이콘은 무조건 없애야</strong>겠죠?<br>
  이럴 때 <code>finally</code>에 <code>로딩끄기()</code> 코드를 넣으면 코드를 중복해서 쓸 필요 없이 깔끔하게 관리할 수 있습니다.<br><br>
  <strong>가장 큰 장점</strong> — 위 코드의 맨 마지막 줄(<code>프로그램 계속 진행</code>)이 핵심입니다. 만약 try-catch가 없었다면 <code>JSON.parse</code>에서 에러가 나는 순간 프로그램이 <strong>그 자리에서 강제 종료(Crash)</strong> 되었을 것입니다.
</div>

<div class="wda-callout wda-cw">
  <strong>주의</strong> — <code>finally</code> 안에서 <code>return</code>이나 <code>throw</code>를 사용하면 <code>try</code>/<code>catch</code>의 결과를 덮어쓸 수 있습니다. 초보자 단계에서는 <code>finally</code>에는 로딩 끄기, 연결 해제, 정리 작업만 넣는 것이 안전합니다.
</div>

---

## 🕵️‍♀️ Pop Quiz: 생존자 찾기

**Q. 다음 코드를 실행했을 때, 콘솔에 출력되는 알파벳의 순서는?**

**❓ 문제편**

코드를 눈으로 따라가며 실행 순서를 예측해 보세요.

```js
try {
  console.log("A");      // 1. 일단 실행

  throw new Error();     // 2. 에러 폭탄 던짐! (여기서 흐름이 바뀝니다)

  console.log("B");      // 3. ??? (이 녀석은 어떻게 될까요?)

} catch {
  console.log("C");      // 4. 에러가 나면 실행

} finally {
  console.log("D");      // 5. 무조건 실행
}
```

**💡 정답 및 해설편**

**✅ 정답 : A ➡ C ➡ D**

중간에 있는 **"B"**는 영원히 실행되지 못하는 비운의 주인공입니다.

**[상세 실행 순서 분석]**

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">"A" 출력</div>
      <div class="wda-sdsc"><code>try</code> 블록에 진입하자마자 첫 줄은 정상적으로 실행됩니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">🔴 throw (에러 발생)</div>
      <div class="wda-sdsc">에러를 강제로 던지는 순간, 자바스크립트는 <strong>하던 일을 즉시 멈추고</strong> <code>catch</code> 블록으로 점프합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">💀 "B" 생략 (Dead Code)</div>
      <div class="wda-sdsc">이미 점프해버렸기 때문에 <code>throw</code> 밑에 있는 코드는 <strong>실행될 기회조차 얻지 못합니다.</strong> 이를 <strong>죽은 코드</strong>라고 부릅니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">"C" 출력</div>
      <div class="wda-sdsc"><code>catch</code> 블록이 에러를 받아내며 내부 코드가 실행됩니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">5</div>
    <div class="wda-sbody">
      <div class="wda-sttl">"D" 출력</div>
      <div class="wda-sdsc"><code>try</code>나 <code>catch</code>가 끝나면 <code>finally</code> 블록은 <strong>성공/실패 여부와 상관없이 무조건</strong> 마지막에 실행됩니다.</div>
    </div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Dead Code (죽은 코드)</strong> — 프로그램의 흐름상 <strong>절대 도달할 수 없는 코드</strong>를 말합니다. 위 예제에서 <code>console.log("B")</code>가 바로 데드 코드입니다. VS Code 같은 에디터에서는 이런 코드를 발견하면 "이 코드는 실행되지 않아!"라고 흐리게 표시해주기도 합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. throw 문</h2>
</div>

**의도적으로 에러를 발생시키는 "비상 정지 버튼"입니다.**

**📌 throw 문이란? (Concept)**

**"이상한 상태로 계속 가느니, 빨리 멈추고 보고하는 게 낫습니다."**

- **역할** : 프로그램 실행을 즉시 중단하고, 에러를 `catch` 블록으로 던져버립니다.
- **비유** : 공장의 기계에 문제가 생겼을 때 누르는 🔴 **비상 정지 버튼**과 같습니다.

**📌 방어적 코딩 (Defensive Coding)**

**"이 데이터는 내가 처리할 수 없어!"**

- 억지로 코드를 실행하다가 데이터베이스(DB)를 오염시키거나 더 큰 문제를 만들기 전에, **"처리 불가"**를 선언하는 것입니다.
- 문제가 있는 데이터가 들어오면 즉시 `throw`를 던져서 상위(catch) 단계에 알리는 것이 안전합니다.

**🏆 Best Practice**

**"무엇을 던져야 할까요?"**

<div class="wda-compare">
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-label">권장 (O)</div>
    <div class="wda-compare-ttl"><code>throw new Error('메시지')</code></div>
    반드시 <strong>Error 객체</strong>를 생성해서 던져야 합니다.<br><br>
    <strong>Stack Trace(호출 경로)</strong> 정보가 포함되어 있어, <strong>"어디서 에러가 났는지"</strong> 정확히 추적할 수 있습니다.
  </div>
  <div class="wda-compare-card wda-legacy">
    <div class="wda-compare-label">비추천 (X)</div>
    <div class="wda-compare-ttl"><code>throw '에러'</code> / <code>throw 42</code></div>
    단순한 문자나 숫자만 던지면 <strong>스택 정보가 남지 않습니다.</strong><br><br>
    에러가 발생했다는 사실만 알 수 있고, <strong>위치를 찾을 수 없어 디버깅이 매우 힘들어집니다.</strong>
  </div>
</div>

**🔹 Stack Trace가 왜 중요한가요?**

범죄 현장에 남은 **'발자국'**과 같습니다.

- **Error 객체** — "A함수가 B를 부르고, B가 C를 불렀는데 C의 5번째 줄에서 터짐" ➡ 발자국이 선명해서 범인을 바로 잡을 수 있음.
- **문자열/숫자** — "그냥 터짐" ➡ 발자국이 없어서 코드를 처음부터 다 뒤져야 함.

**📝 예제 코드**

```js
// 유효성 검사 함수
function divide(a, b) {
  if (b === 0) {
    // ✋ 비상 정지! 0으로는 나눌 수 없으므로 에러를 던짐
    throw new Error('0으로 나눌 수 없습니다!');
  }
  return a / b;
}

// 사용하기
try {
  const result = divide(10, 0); // 위험한 시도
  console.log(result);

} catch (error) {
  // throw로 던진 에러를 여기서 받음
  console.error(error.message); // "0으로 나눌 수 없습니다!"
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>`return` vs `throw`</strong><br>
  • <code>return</code>은 "정상적으로 작업을 마쳤어, 결과는 이거야."라고 점잖게 보고하는 것이고,<br>
  • <code>throw</code>는 <strong>"비상! 비상! 더 이상 진행 못 해!"</strong> 라고 소리치며 탈출하는 것입니다.<br><br>
  <strong>커스텀 에러</strong> — 필요하다면 <code>class ValidationError extends Error</code> 처럼 나만의 에러 클래스를 만들어서 <code>throw new ValidationError(...)</code>와 같이 더 구체적인 에러를 던질 수도 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. 커스텀 에러 클래스</h2>
</div>

**"상황에 맞는 에러 타입을 직접 만들어 관리합니다."**

**📌 왜 만드나요? (Why)**

기본 `Error` 객체만 사용하면 모든 에러가 똑같이 생겨서 구분이 어렵습니다.

직접 만들면 다음과 같은 장점이 있습니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">에러 종류별 다른 처리 (Different Handling)</div>
    <div class="wda-fcard-dsc">"로그인 실패"와 "서버 다운"을 명확히 구분합니다. (예: <code>if (error instanceof NetworkError) ...</code>) 에러의 원인에 따라 <strong>서로 다른 대처(재시도 vs 알림창)</strong>가 가능해집니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">추가 정보 포함 (Extra Information)</div>
    <div class="wda-fcard-dsc">에러 메시지 외에 <code>field</code>(필드명), <code>statusCode</code> 등 <strong>구체적인 데이터</strong>를 객체에 담을 수 있습니다. 단순히 "에러남"이 아니라, <strong>"어떤 데이터가 문제인지"</strong> 정확한 정보를 전달합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">코드 의도 명확화 (Clear Intent)</div>
    <div class="wda-fcard-dsc"><code>ValidationError</code>처럼 이름만 봐도 <strong>"유효성 검사 실패구나"</strong>라고 바로 알 수 있습니다. 코드의 <strong>가독성</strong>이 좋아지고, 다른 개발자가 코드를 이해하기 쉬워집니다.</div>
  </div>
</div>

**📝 구현 방법 (Implementation)**

우리가 배운 **상속(`extends`)** 기능을 사용해서 `Error` 클래스를 확장합니다.

```js
// 1. 표준 Error 클래스를 상속받아 나만의 에러를 만듭니다.
class ValidationError extends Error {
  constructor(message, field) {
    super(message); // 부모(Error)에게 메시지 전달 (필수!)
    this.name = 'ValidationError'; // 에러 이름 설정
    this.field = field; // 추가 정보: 어느 필드가 틀렸는지 저장
  }
}

// 2. 네트워크 에러 예시
class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode; // 추가 정보: 404, 500 등
  }
}
```

**📝 타입별 처리 (Type Check)**

`instanceof` 연산자를 사용하면 에러의 종류(클래스)를 감별해낼 수 있습니다.

```js
function validateAge(age) {
  if (age < 0) {
    // 직접 만든 에러를 발생시킴 (어디가 틀렸는지 'age' 필드 정보도 같이 줌)
    throw new ValidationError('유효하지 않은 나이입니다.', 'age');
  }
}

try {
  validateAge(-5);
} catch (error) {
  // 1. 유효성 검사 에러인 경우
  if (error instanceof ValidationError) {
    alert(`입력 오류: ${error.message} (필드: ${error.field})`);

  // 2. 네트워크 에러인 경우
  } else if (error instanceof NetworkError) {
    console.log('재시도합니다...');
    retry();

  // 3. 내가 모르는 에러인 경우 (중요!)
  } else {
    // 여기서 처리하지 말고 다시 던져서 상위에서 처리하게 함
    throw error;
  }
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>`instanceof`가 뭔가요?</strong> — "이 객체가 저 클래스로 만든 거니?"라고 족보를 확인하는 명령어입니다. <code>error instanceof ValidationError</code>가 <code>true</code>라면, 그 에러는 우리가 만든 <code>ValidationError</code> 설계도로 만들어진 것입니다.<br><br>
  <strong>마지막 `else { throw error }`는 왜 필요한가요?</strong> — 내가 아는 에러(유효성, 네트워크)만 처리하고, <strong>예상치 못한 버그(문법 에러 등)</strong>가 발생했을 때는 억지로 처리하지 말고 <strong>그대로 다시 던져야(Rethrow)</strong> 합니다. 그래야 개발자가 진짜 버그를 놓치지 않고 발견할 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. 비동기 에러 처리의 어려움</h2>
</div>

**"왜 try-catch가 비동기 에러를 못 잡을까요?"**

**📌 현상 : 이미 버스는 떠났습니다 (Timing Issue)**

일반적인 `try-catch` 문법은 코드를 감싸고 있다가 에러가 나면 잡습니다.

하지만 비동기 함수(`setTimeout` 등)는

**"나중에 실행해줘"** 하고 예약만 걸어두고,

`try` 블록은 할 일을 다 마친 뒤 종료되어 버립니다.

```js
try {
  setTimeout(() => {
    // 1초 뒤에 실행됨 (이 시점엔 이미 try-catch가 끝난 상태)
    throw new Error('비동기 에러!');
  }, 1000);
} catch (e) {
  // ❌ 절대 여기로 오지 않음
  // try 블록은 타이머 예약만 걸고 이미 퇴근했기 때문입니다.
  console.log('잡았다!', e);
}
```

<div class="wda-callout wda-ci">
  <strong>setTimeout 내부에서 발생한 에러는 바깥쪽 try-catch로는 잡을 수 없습니다.</strong> 다만 콜백 함수 내부에 직접 try-catch를 넣으면 그 안에서 처리할 수 있습니다.
</div>

```js
setTimeout(() => {
  try {
    throw new Error('비동기 에러!');
  } catch (error) {
    console.log('콜백 내부에서 잡음:', error.message);
  }
}, 1000);
```

**📌 원인 : 다른 차원의 실행 (Context)**

**메인 도로 vs 옆길(국도)**

| **구분** | **설명** |
| --- | --- |
| **동기 코드** | 메인 도로를 달립니다. `catch`는 메인 도로에 쳐놓은 안전 그물입니다. |
| **비동기 코드** | `setTimeout`의 콜백이나 `Promise`의 `then`/`catch` 콜백처럼 나중에 실행되는 코드는 메인 도로에서 빠져나와 **옆길(별도 트랙)**로 빠집니다. (`new Promise()`의 실행자(executor) 함수 자체는 즉시 실행되며, 나중에 실행되는 것은 `.then`/`.catch` 콜백입니다.) |
| **결과** | 메인 도로에 설치된 안전 그물(`catch`)은 옆길에서 난 사고를 감지할 수 없습니다. |

<div class="wda-callout wda-ci">
  <code>setTimeout</code>의 콜백이나 <code>Promise</code>의 <code>then</code>/<code>catch</code> 콜백처럼 나중에 실행되는 코드는, 바깥쪽 <code>try-catch</code>가 이미 끝난 뒤 실행될 수 있습니다. 그래서 비동기 결과는 <code>.catch()</code> 또는 <code>async/await</code> + <code>try-catch</code>로 처리해야 합니다.
</div>

**💡 해결책 : Async/Await**

**"옆길로 간 차를 다시 메인 도로로 데려옵니다."**

- `await` 키워드는 비동기 작업이 끝날 때까지 **기다리게 만듭니다.**
- 옆길로 빠지려는 작업을 다시 메인 도로(실행 흐름)로 합류시키기 때문에, 이제 `try-catch` 안전 그물이 정상적으로 작동합니다.

```js
async function processData() {
  try {
    // await: "결과가 나올 때까지 여기서 기다려!" (메인 도로로 합류)
    await someAsyncFunction();
  } catch (e) {
    // ✅ 이제 잡을 수 있음!
    console.log('비동기 에러 검거 성공:', e.message);
  }
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Promise의 경우 (`.catch`)</strong> — `async/await`를 쓰지 않고 `Promise`를 직접 쓸 때는 <code>.then().catch()</code> 체이닝을 이용해야 에러를 잡을 수 있습니다. 하지만 코드가 복잡해지면 가독성이 떨어지므로, 최신 문법인 <code>async/await</code> + <code>try-catch</code> 조합을 가장 많이 사용합니다.<br><br>
  <strong>🆚 비교 정리</strong><br>
  • <code>setTimeout</code> 같은 콜백 방식 ➡ <strong>바깥쪽</strong> <code>try-catch</code>로는 <strong>불가능</strong> (콜백 내부에 직접 넣어야 처리 가능)<br>
  • <code>Promise</code> + <code>Async/Await</code> ➡ <code>try-catch</code> <strong>가능</strong> (동기 코드처럼 편하게 처리)
</div>

---

## 🕵️‍♀️ Pop Quiz: 범인을 찾아라

**Q. 이 탐정(try-catch)은 과연 소매치기(Error)를 잡을 수 있을까요?**

**❓ 문제편**

다음 코드를 실행했을 때, 콘솔에 `"잡았다!"`가 출력될까요?

```js
try {
  setTimeout(() => {
    // 1초 뒤에 소매치기 발생!
    throw new Error("소매치기!");
  }, 1000);

} catch (e) {
  // 탐정이 여기서 기다림
  console.log("잡았다!");
}
```

**💡 정답 및 해설편**

**✅ 정답 : ❌ 못 잡습니다 (No)**

탐정(`try-catch`)은 소매치기가 발생하기 전에 **이미 퇴근했습니다.**

결국 에러는 잡히지 않고 프로그램은 멈추거나 브라우저 콘솔에 빨간 에러(`Uncaught Error`)를 띄우게 됩니다.

**[상세 분석 : 왜 못 잡을까요?]**

| **단계** | **상황 (Phase)** | **상세 설명 (Description)** |
| --- | --- | --- |
| **1** | **예약만 하고 종료**(Scheduling) | `try` 블록이 `setTimeout`을 만나면 **"1초 뒤에 실행해"**라고 **예약(스케줄링)**만 걸어둡니다. 그 결과를 기다리지 않고 **즉시 다음 줄로 넘어갑니다.** |
| **2** | **탐정 퇴근**(Exit) | `try` 블록 안에 더 이상 실행할 코드가 없으므로, **`catch` 블록(안전망)도 임무를 마치고 사라집니다.** (함수 종료) |
| **3** | **사건 발생**(Error Thrown) | 1초 뒤, 예약된 함수가 실행되면서 `throw new Error`가 터집니다. 하지만 이때는 **이미 `try-catch`라는 보호막이 철수한 상태**라서 에러를 막아줄 수 없습니다. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>"이미 버스는 떠났습니다"</strong> — 이전 챕터에서 배운 비유를 기억하세요. <code>try-catch</code>는 <strong>동기적(Synchronous)</strong>인 흐름만 감시할 수 있습니다. <code>setTimeout</code>처럼 나중에 실행되는 <strong>비동기(Asynchronous)</strong> 코드는 <code>try-catch</code>의 감시 범위를 벗어납니다.<br><br>
  <strong>어떻게 해결하나요?</strong> — 이 문제를 해결하려면 <strong>Promise</strong>와 <strong>async/await</strong>를 사용하여 비동기 작업이 끝날 때까지 기다렸다가(<code>await</code>) 에러를 잡아야 합니다.
</div>

---

<img src="/images/content/javascript/5-4/javascript-5-4-async-error-missed-bus.png" alt="Main Thread(동기): 경찰(Try-Catch)이 '여기 지나가는 건 다 감시한다!'라고 지키는 중. Callback Queue(비동기): setTimeout Bus에서 ERROR! 발생. 엇갈린 운명: 경찰(Try-Catch)은 메인 도로만 지키는데, 버스(비동기)는 이미 다른 차선으로 떠나서 사고가 났고 경찰은 사고 사실조차 모름" style="display:block;width:100%;max-width:640px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:640px;">[그림] 비동기 에러의 시각화 (The Missed Bus)</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. Promise 에러 처리 패턴</h2>
</div>

**.catch()를 어디에 붙이느냐에 따라 에러의 운명이 달라집니다.**

**⚙️ 에러 전파 (Error Propagation)**

**"모든 에러를 마지막에 한 번에 잡습니다." (가장 흔한 패턴)**

- **작동 방식** — 체인(`then`) 중간 어디서든 에러가 터지면, 다음 `then`을 모두 건너뛰고 **가장 가까운 `catch`로 점프**합니다.
- **장점** : 에러 처리 로직을 한곳에 모을 수 있어 관리가 편합니다.

```js
fetchUser(1) // 1. 유저 조회 시작
  .then(user => fetchPosts(user.id)) // 2. 성공 시 게시글 조회
  .then(posts => console.log(posts)) // 3. 성공 시 출력
  .catch(error => {
    // 4. 위 과정 중 어디서든 에러 나면 여기로 집합!
    console.error('에러 발생:', error);
  });
```

**⚙️ 에러 복구 (Error Recovery)**

**"넘어진 김에 쉬었다 갑니다. (수습하고 계속 진행)"**

- **작동 방식** — `catch`를 중간에 배치합니다. 여기서 에러를 잡아서 **대체 값(기본값)을 리턴**해주면, 끊어졌던 체인이 다시 이어져서 **다음 `then`이 실행**됩니다.
- **용도** — 데이터 조회에 실패해도 '비회원(Guest)' 모드로라도 서비스를 계속 실행해야 할 때 유용합니다.

```js
fetchUser(1)
  .catch(error => {
    // 1. 에러 발생 시 여기서 가로챔
    console.log('유저 없음, 기본값(Guest) 사용');
    return { id: 0, name: 'Guest' }; // 2. 대체 데이터 리턴 (복구)
  })
  .then(user => fetchPosts(user.id)) // 3. 에러가 났었지만 복구됐으므로 실행됨!
  .then(posts => console.log(posts));
```

**⚠️ 주의사항 (Caution)**

<div class="wda-callout wda-cw">
  <strong>catch가 없으면? (처리되지 않은 Promise rejection)</strong><br>
  • <code>Promise</code> 안에서 에러가 났는데 아무도 잡아주지(<code>catch</code>) 않으면 발생합니다.<br>
  • <strong>결과</strong> — 브라우저에서는 콘솔 경고나 <code>unhandledrejection</code> 이벤트로 나타나고, 환경이나 설정에 따라 앱 안정성에 큰 문제가 될 수 있습니다. 따라서 Promise 체인의 끝에는 <code>catch</code>를 붙이는 습관이 필요합니다.
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>`Promise.all`의 에러 처리</strong><br>
  • 여러 작업을 동시에 시킬 때 쓰는 <code>Promise.all([p1, p2, p3])</code>은 <strong>"하나라도 실패하면 전체 실패"</strong>로 간주합니다.<br>
  • 셋 중 하나만 에러가 나도 즉시 <code>catch</code>로 넘어가 버리므로, 개별적인 성공/실패 여부가 중요하다면 <code>Promise.allSettled</code>를 사용하는 것이 좋습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>9. async/await 에러 처리 패턴</h2>
</div>

**"try-catch가 다시 쓸모있어짐!"**

**📌 장점 (Advantages)**

`await` 키워드 덕분에 비동기 코드가 동기 코드처럼 위에서 아래로 흐르게 됩니다.

| **구분** | **설명 및 효과** |
| --- | --- |
| **자연스러운 흐름**(Natural Flow) | • 콜백이나 `.then()` 체이닝 방식보다 **훨씬 읽기 쉽습니다.**<br>• 코드가 위에서 아래로 순차적으로 실행되는 것처럼 보입니다. |
| **정밀한 제어**(Precise Control) | • 에러 처리를 **전체 한 번에 묶을 수도 있고**,<br>• 중요한 부분만 **특정 `await`를 따로 감싸서** 처리할 수도 있습니다. |

**💡 패턴 선택 (Pattern Selection)**

상황에 따라 두 가지 전략을 사용합니다.

| **패턴** | **방식** | **특징 및 활용** |
| --- | --- | --- |
| **통합 처리**(Unified) | 전체 로직을 **하나의 `try`**로 감쌉니다. | • **"어디서 터지든 한곳에서 처리한다"**는 전략입니다.<br>• 에러 로그를 남기거나 상위로 던질 때 유용합니다. |
| **개별 처리**(Individual) | **특정 `await`만** `try`로 감쌉니다. | • 에러가 나도 죽지 않고 **기본값(Fallback)으로 복구**하여 진행할 때 사용합니다.<br>(예: 유저 정보 조회 실패 ➡ 비회원 모드로 진행) |

**📝 예제 코드**

```js
// 1. 기본 패턴 (통합 처리 + 재전파)
async function fetchData() {
  try {
    const user = await fetchUser(1);         // 여기서 에러나면 바로 catch로
    const posts = await fetchPosts(user.id); // 실행 안 됨
    return posts;

  } catch (error) {
    console.error('에러:', error);
    throw error; // 필요시 상위에서 알 수 있게 다시 던짐
  }
}

// 2. 개별 에러 처리 (복구 패턴)
async function fetchWithFallback() {
  let user;

  try {
    user = await fetchUser(1); // 시도
  } catch (error) {
    console.log('유저 없음, 기본값 사용');
    user = { id: 0, name: 'Guest' }; // 실패해도 Guest로 살려냄(복구)
  }

  // 위에서 에러가 났어도 user가 있으므로 안전하게 실행됨
  console.log(user.name);
}

// 3. 병렬 실행 시 (Promise.all)
async function loadParallelData() {
  try {
    // 두 작업이 모두 끝날 때까지 기다림
    const [a, b] = await Promise.all([fetchA(), fetchB()]);
    return { a, b };

  } catch (error) {
    // 둘 중 하나라도 실패하면 즉시 여기로
    console.error('병렬 작업 실패:', error);
  }
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>`await`가 하는 일</strong> — <code>await</code>는 Promise가 해결(resolve)되거나 거절(reject)될 때까지 함수의 실행을 <strong>일시 정지</strong>시킵니다. 거절(Error)되면 그 자리에서 즉시 에러를 <code>throw</code> 하는 것과 같은 효과를 내기 때문에 <code>try-catch</code>가 이를 잡을 수 있는 것입니다.<br><br>
  <strong>가독성 비교</strong> — <code>.then().catch()</code> 방식은 코드가 옆으로 길어지고 중괄호가 많아지지만, <code>async/await</code> + <code>try-catch</code>는 코드가 아래로 쭉 뻗어 내려가서 로직 파악이 훨씬 빠릅니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>10. 전역 에러 핸들러 (Global Error Handlers)</h2>
</div>

**"모든 안전장치를 뚫고 나온 에러를 마지막으로 잡아냅니다."**

**🆚 주요 핸들러 비교**

자바스크립트 실행 환경(브라우저) 차원에서 제공하는 두 가지 안전망입니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl"><code>window.onerror</code></div>
    <strong>처리되지 않은 동기 에러</strong>를 잡습니다.<br>
    <code>setTimeout</code> 같은 일반 콜백에서 발생한 에러도 포함됩니다.<br>
    전통적인 방식의 마지막 안전망입니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl"><code>window.onunhandledrejection</code></div>
    <strong><code>catch</code>가 없는 Promise 에러</strong>를 잡습니다.<br>
    <code>async</code> 함수에서 발생했으나 <code>try-catch</code>로 감싸지 않은 에러도 여기로 옵니다.<br>
    <strong>Promise 전용 안전망</strong>입니다.
  </div>
</div>

**💡 활용 (Usage)**

이곳에서 잡힌 에러는 이미 프로그램 흐름이 깨진 상태이므로, 복구보다는 **"기록"**에 중점을 둡니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">에러 리포트 전송</div>
    <div class="wda-fcard-dsc">사용자가 겪은 에러 정보를 서버로 보내 개발자가 알 수 있게 합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">모니터링 서비스 연동</div>
    <div class="wda-fcard-dsc">Sentry, LogRocket 같은 외부 도구를 여기에 연결해서 실시간으로 에러 알림을 받습니다.</div>
  </div>
</div>

**📝 예제 코드**

```js
// 1. 일반적인 동기 에러 방어선
window.onerror = function(message, source, line, col, error) {
  console.error('🚨 전역 에러 발생!');
  console.error(`위치: ${source} ${line}:${col}`);
  console.error(`내용: ${message}`);

  // 서버로 에러 리포트 전송 (개발자가 고칠 수 있게)
  sendErrorReport({ message, location: `${line}:${col}`, stack: error?.stack });

  // return true를 하면 브라우저 콘솔에 빨간 에러가 뜨지 않게 막을 수 있지만,
  // 학습/개발 중에는 디버깅이 어려워지므로 보통 생략하거나 false를 반환합니다.
  return false;
};

// 2. Promise(비동기) 에러 방어선
window.onunhandledrejection = function(event) {
  console.error('🚨 처리되지 않은 Promise 에러!');
  console.error(`이유: ${event.reason}`);

  // 모니터링 서비스로 전송
  sendErrorReport({ type: 'promise', reason: event.reason });
};
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  개발자가 모든 곳에 try-catch를 붙일 수는 없습니다. 혹시나 실수로 놓친 에러가 발생했을 때, 최소한 "무슨 에러가 터졌는지" 로그라도 남겨야 나중에 고칠 수 있기 때문입니다.
</div>

<div class="wda-callout wda-cw">
  <code>return true</code>를 하면 브라우저의 기본 에러 표시를 막을 수 있습니다. 하지만 디버깅이 어려워질 수 있으므로, 학습/개발 중에는 보통 생략하거나 <code>false</code>를 반환하는 것이 좋습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. 에러 처리 Best Practices</h2>
</div>

**🆚 DO vs DON'T (핵심 요약)**

좋은 습관과 절대 하지 말아야 할 나쁜 습관을 비교했습니다.

<div class="wda-compare">
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-label">✅ DO (권장 사항)</div>
    <ul>
      <li><strong>구체적인 메시지 작성</strong> — "에러 발생"보다는 "이메일 형식이 아닙니다"처럼 명확해야 원인을 빨리 찾습니다.</li>
      <li><strong>Error 객체 사용</strong> — 문자열(<code>throw "Error"</code>) 대신 <code>new Error()</code>를 써야 <strong>Stack Trace(위치 추적)</strong>가 남습니다.</li>
      <li><strong>메시지 분리</strong>(사용자 vs 개발자) — 사용자에게는 "잠시 후 다시 시도해주세요(친절)", 서버에는 "DB 연결 타임아웃(상세)"을 남겨야 합니다.</li>
      <li><strong>에러 로깅(서버 전송)</strong> — <code>console</code>은 새로고침하면 사라집니다. Sentry 같은 도구로 서버에 기록해야 합니다.</li>
      <li><strong>복구 시도</strong> — 에러가 났다고 멈추지 말고, 기본값(Default)을 넣어서라도 프로그램이 돌아가게 만듭니다.</li>
    </ul>
  </div>
  <div class="wda-compare-card wda-legacy">
    <div class="wda-compare-label">❌ DON'T (금지 사항)</div>
    <ul>
      <li><strong>에러 무시(빈 catch)</strong> — <strong>최악의 습관</strong>입니다. 에러를 잡아서 아무것도 안 하면(<code>{}</code>) 버그가 숨어버립니다.</li>
      <li><strong>모호한 메시지</strong> — "Error!"라고만 하면 아무것도 해결할 수 없습니다.</li>
      <li><strong>민감 정보 노출</strong> — DB 구조나 비밀번호, 서버 경로 등이 사용자 화면에 그대로 노출되면 <strong>해킹의 빌미</strong>가 됩니다.</li>
      <li><strong>console.log만 하고 끝</strong> — 개발 중엔 보이지만, 배포된 환경에서는 개발자가 볼 수 없습니다.</li>
      <li><strong>모든 에러 같은 처리</strong> — 네트워크 에러와 입력값 에러를 똑같이 "에러입니다"로 퉁치지 마세요.</li>
    </ul>
  </div>
</div>

**🆚 코드 비교 (Code Comparison)**

**[좋은 예 : 구체적이고 명확함]**

```js
// ✅ DO
throw new ValidationError(
  '이메일 형식이 올바르지 않습니다', // 구체적인 메시지
  'email'                          // 문제가 된 필드 정보 포함
);
```

**[나쁜 예 : 에러 삼키기 (Swallowing Error)]**

```js
// ❌ DON'T (절대 금지!)
try {
  doSomething();
} catch (e) {
  // 아무것도 안 함 (에러 삼키기)
  // 💣 결과: 프로그램은 계속 돌지만, 데이터가 꼬여서 나중에 원인을 못 찾게 됨
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 "빈 catch"가 위험한가요?</strong> — 마치 <strong>"화재 경보기가 울리는데 건전지를 빼버리는 것"</strong>과 같습니다.<br>
  불(에러)은 계속 타고 있는데 경고음만 끈 것이라, 나중에 건물이 다 타고나서야(서비스가 망가진 뒤에야) 알게 됩니다.<br>
  최소한 <code>console.error</code>라도 찍거나 상위로 다시 던져야(<code>throw e</code>) 합니다.<br><br>
  <strong>사용자용 vs 개발자용 메시지</strong><br>
  • <strong>사용자에게</strong> — "일시적인 오류입니다. 잠시 후 다시 시도해주세요." (안심, 행동 유도)<br>
  • <strong>개발자에게</strong> — <code>ReferenceError: x is not defined at line 10</code> (정확한 디버깅 정보)
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>✅ 핵심 요약</h2>
</div>

**에러 핸들링 마스터를 위한 5가지 핵심 기둥**입니다.

<table class="wda-summary-table">
  <tr>
    <th>카테고리</th>
    <th>핵심 개념</th>
    <th>실전 요약</th>
  </tr>
  <tr>
    <td><strong>Error 객체</strong></td>
    <td>• Props: <code>name</code>(이름), <code>message</code>(내용)<br>• Stack: 에러 발생 위치를 추적하는 <strong>지도</strong></td>
    <td>문자열(<code>"Error"</code>) 대신 반드시 <strong>객체(<code>new Error</code>)</strong>를 사용해야 디버깅할 수 있습니다.</td>
  </tr>
  <tr>
    <td><strong>try-catch</strong></td>
    <td>• Try: 에러가 발생할 수 있는 <strong>감시 구역</strong><br>• Catch: 에러를 잡아내서 복구하는 <strong>안전망</strong></td>
    <td>프로그램이 강제 종료(Crash)되지 않도록 막고, 사용자에게 친절한 안내를 제공합니다.</td>
  </tr>
  <tr>
    <td><strong>비동기 에러</strong>(Async)</td>
    <td>• Promise: 뒤에 <code>.catch()</code>를 붙여야 함<br>• Async/Await: <code>try-catch</code>로 감싸서 처리 가능</td>
    <td>비동기 코드는 시점 문제로 일반 <code>try-catch</code>가 못 잡으므로, <strong><code>await</code>나 <code>.catch()</code>로 반드시 기다려야</strong> 합니다.</td>
  </tr>
  <tr>
    <td><strong>전역 핸들러</strong>(Global)</td>
    <td>• onerror: 동기 에러의 마지막 방어선<br>• unhandled: Promise 에러의 마지막 방어선</td>
    <td><code>try-catch</code>를 뚫고 나온 최후의 에러들을 잡아서 <strong>서버(Sentry 등)에 로그를 남기는 용도</strong>로 씁니다.</td>
  </tr>
  <tr>
    <td><strong>Best Practices</strong></td>
    <td>• 구체적 메시지: "에러남"(X) ➡ "이메일 형식 오류"(O)<br>• 메시지 분리: 사용자용(친절) vs 개발자용(상세)</td>
    <td>보안을 위해 <strong>서버 내부 정보(Stack Trace)를 사용자에게 절대 노출하지 마세요.</strong></td>
  </tr>
</table>

**보충 설명 (마무리 조언)**

<div class="wda-callout wda-cs" style="position:relative;overflow:visible;">
  <strong>"완벽한 코드는 없다, 완벽한 대비만 있을 뿐"</strong><br><br>
  에러가 아예 안 나게 짜는 것은 불가능합니다. 훌륭한 개발자는 에러가 발생했을 때 <strong>"사용자가 당황하지 않게 안내하고"</strong>, <strong>"개발자가 빠르게 원인을 찾아 고칠 수 있도록"</strong> 시스템을 만들어두는 사람입니다.
</div>
