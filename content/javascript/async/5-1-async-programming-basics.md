---
title: "5-1 비동기 프로그래밍 시작하기"
status: "completed"
description: "동기·비동기의 차이, 이벤트 루프, 마이크로/매크로 태스크, 콜백 패턴과 콜백 지옥까지 비동기 프로그래밍의 기초를 정리한다."
category: "JavaScript"
section: "Async"
tags:
  - javascript
  - async
  - event-loop
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

<div class="wda-goal" style="position:relative;overflow:visible;">
  • <strong>동기와 비동기</strong> — 시간을 다루는 두 가지 방식의 결정적 차이를 이해합니다.<br>
  • <strong>이벤트 루프</strong> — 싱글 스레드 JavaScript가 멀티태스킹을 하는 비밀을 파헤칩니다.<br>
  • <strong>마이크로/매크로 태스크</strong> — 비동기 작업의 우선순위와 실행 순서를 완벽하게 예측합니다.<br>
  • <strong>콜백과 타이머</strong> — setTimeout과 콜백 패턴으로 비동기 코드를 직접 작성해봅니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. 동기(Synchronous)란?</h2>
</div>

**📌 순차적으로 한 줄씩 실행**

코드가 작성된 순서대로, 앞의 작업이 끝나야 뒤의 작업이 실행됩니다.

```jsx
console.log('1. 커피 주문');
console.log('2. 커피 제조 (3분 대기...)');
console.log('3. 커피 받기');
console.log('4. 자리에 앉기');

// 실행 순서: 반드시 1 -> 2 -> 3 -> 4
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  ☕ 커피를 받기 전까지 아무것도 못함!
</div>

**📌 특징**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">순차 실행</div>
    <div class="wda-fcard-dsc">코드가 위에서 아래로 순서대로</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">블로킹(Blocking)</div>
    <div class="wda-fcard-dsc">현재 작업 완료까지 대기</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">예측 가능</div>
    <div class="wda-fcard-dsc">실행 순서가 명확함</div>
  </div>
</div>

**⚠️ 문제점**

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  ⚠️ 오래 걸리는 작업이 있으면 전체 프로그램이 멈춤! ⏸️
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>"동기(Synchronous)"</strong>라는 말은 <strong>"시간을 맞춘다"</strong>는 뜻입니다. 내 작업의 끝나는 시간과 다음 작업의 시작 시간을 딱 맞물리게 한다는 거죠.<br><br>
  가장 쉬운 비유는 <strong>"맛집 줄 서기"</strong>입니다.<br>
  · 내 앞사람이 식당에 들어가서 밥을 다 먹고 나올 때까지(Blocking), 나는 밖에서 꼼짝없이 기다려야 합니다.<br>
  · 장점은 순서가 절대 뒤바뀌지 않는다는 점(예측 가능)이지만,<br>
  · 치명적인 단점은 앞사람이 밥을 1시간 동안 먹으면 뒷사람들도 전부 1시간을 멍하니 날려야 한다는 점(비효율)입니다.<br><br>
  자바스크립트는 기본적으로 이 <strong>동기 방식</strong>으로 작동합니다. 그래서 무거운 작업을 만나면 화면이 멈추는(Freezing) 현상이 발생하는 것입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. 비동기(Asynchronous)란?</h2>
</div>

**📌 기다리지 않고 다음 작업 진행**

오래 걸리는 작업을 기다리지 않고, 바로 다음 줄을 실행합니다.

```jsx
console.log('1. 커피 주문');

setTimeout(() => {
  console.log('3. 커피 받기');
}, 3000);

console.log('2. 자리 가서 노트북 켜기');

// 실행 결과: 1 -> 2 -> (3초 후) 3
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  ☕ 진동벨 주고 다른 일 하기!
</div>

**🚀 특징**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">논블로킹(Non-blocking)</div>
    <div class="wda-fcard-dsc">대기 없이 진행</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">동시 진행처럼 보임</div>
    <div class="wda-fcard-dsc">JavaScript 코드 자체가 동시에 여러 줄 실행되는 것은 아니지만, 타이머나 네트워크 요청 같은 작업을 브라우저가 따로 처리해주기 때문에 여러 작업이 함께 진행되는 것처럼 보임</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">효율적</div>
    <div class="wda-fcard-dsc">대기 시간 활용 가능</div>
  </div>
</div>

**❓ 실행 순서**

**🔑 핵심 개념**

<div class="wda-callout wda-ci">
  1 -&gt; 2 -&gt; (3초 후) 3. 숫자 순서가 아니라 완료 순서!
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>"비동기(Asynchronous)"</strong>의 핵심은 <strong>"진동벨"</strong>입니다.<br>
  카페에서 커피를 주문하고 진동벨을 받으면, 커피가 나올 때까지 카운터 앞에서 멍하니 서 있지 않죠?<br>
  자리에 가서 가방을 풀고(다른 작업), 노트북을 켜고(다른 작업), 진동벨이 울리면 그제야 커피를 받으러 갑니다.<br><br>
  이것이 자바스크립트가 웹 브라우저에서 살아남은 비결입니다.<br>
  만약 유튜브 영상을 로딩하는 동안 브라우저가 멈춰버린다면(동기 방식), 우리는 영상이 다 받아질 때까지 댓글도 못 보고 스크롤도 못 내릴 겁니다.<br>
  자바스크립트는 비동기 방식을 통해 <strong>"무거운 일은 뒤로 미루고, 가벼운 일부터 처리"</strong>하여 쾌적한 사용자 경험을 제공합니다.<br><br>
  여기서 등장한 <code>setTimeout</code>이 바로 "몇 초 뒤에 진동벨을 울려줘!"라고 예약하는 함수입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. 왜 비동기가 필요한가?</h2>
</div>

**📌 웹에서 시간이 오래 걸리는 작업들**

자바스크립트가 비동기 처리를 해야 하는 대표적인 3가지 상황입니다.

<img src="/images/content/javascript/5-1/javascript-5-1-async-processing.png" alt="네트워크 요청(100ms~수 초), 타이머(ms~분 단위), 사용자 입력(언제 발생할지 모름) 비교" style="display:block;width:100%;max-width:640px;height:auto;border-radius:8px;margin:.6rem auto 1rem;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:640px;">[그림] 비동기 처리가 필요한 3가지 상황 (네트워크 요청·타이머·사용자 입력)</div>

**⚠️ 핵심 문제**

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  ⚠️ 만약 동기라면? 이미지 다운로드 중에 스크롤도, 클릭도 안 되는 끔찍한 UX!
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>"UX(사용자 경험)를 지켜라!"</strong> 이것이 비동기가 존재하는 가장 큰 이유입니다.<br><br>
  우리가 웹사이트에 들어갔는데, 고화질 이미지를 불러오느라 마우스 커서가 멈추고 버튼이 안 눌린다고 상상해보세요. 사용자는 1초도 못 참고 "이 사이트 고장 났네" 하며 나가버릴 겁니다.<br><br>
  자바스크립트는 <strong>싱글 스레드(Single Thread)</strong>, 즉 '일꾼이 한 명'입니다. 이 한 명의 일꾼이 이미지 다운로드 같은 무거운 짐을 들고 낑낑거리는 동안(동기), 사용자의 클릭 이벤트(가벼운 짐)를 처리해주지 못하면 화면이 멈추게 됩니다.<br><br>
  그래서 <strong>"무거운 짐은 점원(브라우저)한테 맡겨두고, 나는 손님(사용자) 응대부터 할게!"</strong> 라고 하는 것이 바로 <strong>비동기 프로그래밍</strong>의 핵심 전략입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. JavaScript는 싱글 스레드</h2>
</div>

**📌 한 번에 하나의 작업만 처리 가능**

JavaScript 엔진은 단 하나의 실행 컨텍스트(Call Stack)를 가집니다.

```jsx
// JavaScript 엔진의 콜 스택
// 동시에 하나만 실행!

function first() {
  console.log("첫 번째");
}

function second() {
  console.log("두 번째");
}

first(); // 스택에 push -> 실행 -> pop
second(); // 스택에 push -> 실행 -> pop
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>"싱글 스레드(Single Thread)"</strong>라는 말은 <strong>"입이 하나"</strong>라는 뜻입니다.<br>
  사람이 밥을 먹으면서 동시에 말을 할 수 없듯이, 자바스크립트 엔진도 한 번에 딱 하나의 코드만 실행할 수 있습니다.<br>
  멀티태스킹처럼 보이는 것은 사실 엄청나게 빠른 속도로 이 작업, 저 작업을 번갈아 가며 처리하기 때문입니다.<br><br>
  여기서 등장하는 <strong>'콜 스택(Call Stack)'</strong>은 접시 쌓기와 같습니다.<br>
  1. <code>first()</code> 함수가 호출되면 접시 쌓듯 스택에 올라갑니다(Push).<br>
  2. <code>console.log("첫 번째")</code>를 실행하고 함수가 끝나면 접시를 치웁니다(Pop).<br>
  3. 그제야 비로소 <code>second()</code> 함수가 스택에 올라갈 수 있습니다.<br><br>
  "어? 그러면 아까 <code>setTimeout</code> 같은 비동기 작업은 어떻게 동시에 되는 거죠? 입이 하나라면서요?" 이 모순을 해결해주는 친구가 바로 다음에 배울 <strong>'이벤트 루프(Event Loop)'</strong>입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. 대표적인 비동기 함수: setTimeout</h2>
</div>

**📌 개념: "N초 뒤에 실행해줘"**

가장 많이 쓰이는 타이머 함수입니다. 지정한 시간이 지나면 콜백 함수를 **단 한 번** 실행합니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">⏰ 알람 설정</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">⌛ 로딩 지연 효과</div>
  </div>
</div>

**📝 예제 코드**

순서대로 실행되지 않는 비동기의 특징을 확인해보세요.

```jsx
// 사용법: setTimeout(콜백함수, 시간ms)

console.log('1. 시작');

setTimeout(() => {
  console.log('2. 3초 지남! ⏰');
}, 3000); // 3000ms = 3초

console.log('3. 끝');
```

**✅ 실행 결과**

**🔑 핵심 개념**

<div class="wda-callout wda-ci">
  1. 시작 → 3. 끝 → 2. 3초 지남! ⏰ (3초 후 등장)
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  여기서 가장 중요한 포인트는 <strong>"3. 끝"이 "2. 3초 지남!"보다 먼저 출력된다는 점</strong>입니다.<br><br>
  많은 입문자분들이 코드를 보고 "시작 -&gt; (3초 멍때림) -&gt; 3초 지남 -&gt; 끝" 순서로 실행될 거라고 예상합니다(동기적 사고). 하지만 자바스크립트는 <code>setTimeout</code>을 만나면 <strong>"오케이, 3초 뒤에 알람 맞춰놨어!"</strong> 하고 바로 다음 줄인 <code>'3. 끝'</code>을 실행하러 달려갑니다(비동기적 사고).
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. ☪️ 대표적인 비동기 함수: setInterval</h2>
</div>

**📌 개념: "N초마다 계속 실행해줘"**

일정 간격으로 콜백 함수를 반복해서 실행합니다. 멈추려면 `clearInterval` 이 꼭 필요합니다!

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">🕒 디지털 시계</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">🖼️ 오토 슬라이드</div>
  </div>
</div>

**📝 예제 코드**

1초마다 카운트가 올라가고, 3초가 되면 멈추는 코드입니다.

```jsx
// 사용법: setInterval(콜백함수, 시간ms)

let count = 0;

const timerId = setInterval(() => {
  count++;
  console.log(count + '초 지남...');

  if (count >= 3) {
    clearInterval(timerId); // 🛑 타이머 정지!
    console.log('타이머 종료');
  }
}, 1000); // 1초마다 실행
```

**✅ 실행 결과**

**🔑 핵심 개념**

<div class="wda-callout wda-ci">
  1초 지남... → 2초 지남... → 3초 지남... → 타이머 종료
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <code>setTimeout</code>과 <code>setInterval</code>의 결정적 차이는 <strong>"반복"</strong>입니다.<br>
  · <strong><code>setTimeout</code></strong>: "3초 뒤에 <strong>한 번만</strong> 실행해." (오븐 타이머 ⏲️)<br>
  · <strong><code>setInterval</code></strong>: "1초 <strong>마다 계속</strong> 실행해." (메트로놈 🎼)<br><br>
  여기서 가장 중요한 핵심은 <strong><code>clearInterval</code> (멈춤 버튼)</strong>입니다.<br>
  <code>setTimeout</code>은 실행이 끝나면 알아서 사라지지만, <code>setInterval</code>은 개발자가 <code>clearInterval(ID)</code>로 끄지 않으면 브라우저 탭을 닫기 전까지 <strong>영원히</strong> 돌아갑니다.<br><br>
  이것을 깜빡하면 일명 <strong>'메모리 누수(Memory Leak)'</strong>가 발생합니다.<br>
  특히 리액트(React) 같은 SPA 환경에서 페이지를 이동해도 타이머가 백그라운드에서 계속 돌아가며 에러를 뿜어내는 주범이 되니, <strong>"켜면 반드시 끄는 코드도 같이 짠다"</strong>는 원칙을 꼭 기억하세요!
</div>

<img src="/images/content/javascript/5-1/javascript-5-1-key-principle.png" alt="시간(setTimeout, setInterval)은 지금 배우고, 약속하다(Promise)와 비동기/await는 다음 시간에 배웁니다" style="display:block;width:100%;max-width:560px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:560px;">[그림] 더 불안해요!</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. 그래도 싱글 스레드인데?</h2>
</div>

**❓ 그런데...**

**🔑 핵심 개념**

<div class="wda-callout wda-ci">
  싱글 스레드인데 어떻게 비동기가 가능한 거죠? 💭
</div>

**💡 비밀은...**

<div class="wda-callout wda-ci">
  JS 엔진 (코드 실행) + 브라우저 (비동기 처리) + 이벤트 루프 (조율)
</div>

**ℹ️ 핵심 비유**

<div class="wda-callout wda-ci">
  "요리사(JS)는 요리만 하고, 재료 손질과 서빙은 보조(브라우저)와 웨이터(이벤트 루프)가 담당하여 전체 식당이 돌아갑니다."
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  많은 분이 오해하는 것이 <strong>"자바스크립트가 멀티태스킹을 한다"</strong>는 것입니다. 정확히 말하면 자바스크립트는 여전히 혼자서(싱글 스레드) 일합니다. 하지만 <strong>든든한 지원군(브라우저)</strong>이 있습니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">JS 엔진 (요리사 👨‍🍳)</div>
    <div class="wda-fcard-dsc">"난 복잡한 생각만 할 거야. 단순 대기나 힘쓰는 일은 안 해." (싱글 스레드)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">브라우저 Web APIs (보조 요리사들 🔪)</div>
    <div class="wda-fcard-dsc"><code>setTimeout</code>, <code>fetch</code> 같은 요청을 받으면, 별도의 공간에서 시간을 재거나 데이터를 받아옵니다. (멀티 스레드)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">이벤트 루프 (지배인 🤵)</div>
    <div class="wda-fcard-dsc">보조들이 일을 마치면, 요리사가 손이 비었을 때 슬쩍 결과물을 밀어 넣어줍니다.</div>
  </div>
</div>

<div class="wda-callout wda-ci">
  즉, <strong>"자바스크립트 언어 자체는 싱글 스레드이지만, 자바스크립트가 실행되는 환경(브라우저)은 멀티 스레드"</strong>이기 때문에 비동기 처리가 가능한 것입니다.
</div>

<img src="/images/content/javascript/5-1/javascript-5-1-event-loop-concept.png" alt="JavaScript 엔진(콜 스택) → Web APIs(setTimeout/fetch/DOM Events) → Task Queue → 이벤트 루프가 콜 스택으로 콜백을 옮기는 과정" style="display:block;width:100%;max-width:640px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<div style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:640px;">[그림] 이벤트 루프 개념</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. 이벤트 루프 동작</h2>
</div>

**🧪 실제 코드로 보는 실행 순서**

```jsx
console.log('1. 시작');   // 즉시 실행

setTimeout(() => {
  console.log('2. 타이머');  // 큐로 이동
}, 0);

console.log('3. 끝');     // 즉시 실행

// 출력 순서: 1 -> 3 -> 2
```

**⚙️ 단계별 동작 과정**

| **단계** | **콜 스택** | **Web API** | **태스크 큐** |
| --- | --- | --- | --- |
| **1** | `log('1')` | - | - |
| **2** | `setTimeout` | 타이머 등록 | - |
| **3** | `log('3')` | 타이머 완료 | 콜백 |
| **4** | `(비어있음)` | - | 콜백 |
| **5** | `log('2')` | - | - |

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  ⚠️ 핵심! setTimeout(0)도 스택이 비어야 실행됩니다. 0ms는 "최소한 0ms 후"라는 의미!
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 장표는 자바스크립트 면접에서 가장 많이 나오는 함정 문제인 <strong><code>setTimeout(..., 0)</code></strong>의 비밀을 풀고 있습니다.<br><br>
  "0초면 즉시 실행되어야 하는 거 아닌가요?" 아닙니다. setTimeout은 시간을 0으로 설정해도, 무조건 <strong>'태스크 큐(대기실)'</strong>를 거쳐서 나중에 실행됩니다.<br><br>
  이벤트 루프의 절대 규칙은 다음과 같습니다.<br>
  1. <strong>콜 스택(메인 작업 공간)</strong>에 할 일이 남아있으면, 태스크 큐(대기실)는 쳐다도 보지 않는다.<br>
  2. <strong>콜 스택이 완전히 텅 비어야만</strong>, 태스크 큐에 있는 녀석을 데려온다.<br><br>
  그래서 <code>console.log('3. 끝')</code>이 실행되어 스택이 비워지기 전까지는, 0ms 타이머라도 절대 실행될 수 없는 것입니다. 이를 통해 <strong>"비동기 코드는 동기 코드가 다 끝나야 실행된다"</strong>는 대원칙을 확인할 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>9. 마이크로태스크 vs 매크로태스크</h2>
</div>

**📌 두 종류의 태스크 큐**

비동기 작업이라고 다 같은 대기열에 서는 게 아닙니다. (Promise와 async/await의 자세한 문법은 다음 단계에서 배우고, 여기서는 실행 순서만 먼저 확인합니다.)

### 🔹 마이크로태스크 (VIP)

"새치기 가능한 슈퍼 패스!"

- `Promise: then/catch/finally`
- `queueMicrotask(): 직접 만든 VIP 작업`
- `MutationObserver: DOM 감지`

<div class="wda-callout wda-ci">
  ⭐ 우선순위: VIP (매우 높음). 일반 대기열(매크로)보다 무조건 먼저 실행!
</div>

### 🔹 매크로태스크

- `setTimeout / setInterval`
- `이벤트 핸들러 (click 등)`
- `I/O 작업`

<div class="wda-callout wda-ci">
  우선순위: 낮음. 마이크로 다 끝난 후 처리
</div>

**⚙️ 실행 순서**

<div class="wda-callout wda-ci">
  ➜ 실행 순서: 콜 스택 ➜ 마이크로태스크 전부 ➜ 매크로태스크 1개 ➜ 반복
</div>

마이크로태스크는 현재 동기 코드가 끝난 직후 처리됩니다. 이벤트 루프는 매크로태스크 하나를 실행한 뒤 다시 마이크로태스크 큐를 확인하기 때문에, 매크로태스크 사이사이에도 마이크로태스크가 먼저 처리될 수 있습니다.

**💡 보충 설명**

이벤트 루프에는 **"계급"**이 존재합니다.

| **구분** | **비유 (계급)** | **특징** | **대표 예시 (Code)** |
| --- | --- | --- | --- |
| **마이크로태스크** | **VIP**(퍼스트 클래스) | **최우선 탑승**<br>이들이 다 탈 때까지 일반 승객 대기 | `Promise (.then/catch)`<br>`async/await`<br>`MutationObserver` |
| **매크로태스크** | **일반**(이코노미 클래스) | **일반 탑승**<br>VIP가 한 명이라도 있으면 대기 | `setTimeout`<br>`setInterval`<br>`DOM Event (Click 등)` |

<div class="wda-callout wda-ci">
  면접에서 "0초 타이머(<code>setTimeout</code>)와 즉시 해결되는 프로미스(<code>Promise.resolve</code>) 중 누가 먼저 실행되나요?"라고 묻는다면, <strong>"프로미스가 먼저입니다. 마이크로태스크(VIP)니까요!"</strong><br><br>
  이 우선순위를 모르면, 코드가 내가 예상한 순서대로 실행되지 않는 <strong>'타이밍 버그'</strong>를 만나 고생할 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>❓ 연습문제</h2>
</div>

**📝 풀어보세요! (Quiz)**

다음 코드를 실행했을 때, 콘솔에 출력되는 순서를 맞춰보세요.

```jsx
console.log('1');

// 매크로태스크 (2순위)
setTimeout(() => {
  console.log('2');
}, 0);

// 마이크로태스크 (1순위)
Promise.resolve()
  .then(() => console.log('3'));

console.log('4');
```

**✅ 정답 : 1, 4, 3, 2**

| **순서** | **출력** | **이유** |
| --- | --- | --- |
| **1** | **1** | **동기 코드** (Call Stack에서 즉시 실행) |
| **2** | **4** | **동기 코드** (Call Stack에서 즉시 실행) |
| **3** | **3** | **마이크로태스크** (Promise는 setTimeout보다 우선!) |
| **4** | **2** | **매크로태스크** (모든 작업이 끝나고 마지막 실행) |

<div class="wda-callout wda-ci">
  💡 "약속해(Promise) 주세요, Timeout보다 먼저! 이게 잘 작동합니다."
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 문제는 자바스크립트 비동기 면접의 <strong>'족보'</strong> 같은 문제입니다.<br>
  1. <strong>동기 코드 (<code>1</code>, <code>4</code>)</strong>: 자바스크립트는 성격이 급해서 눈에 보이는 코드부터 바로 실행합니다.<br>
  2. <strong>마이크로태스크 (<code>3</code>)</strong>: <code>Promise</code>는 <strong>VIP</strong>입니다. 동기 코드가 끝나자마자 <code>setTimeout</code>보다 먼저 새치기해서 실행됩니다.<br>
  3. <strong>매크로태스크 (<code>2</code>)</strong>: <code>setTimeout</code>은 0초로 설정해도 <strong>일반석</strong>입니다. VIP들이 다 지나간 뒤에야 실행 기회를 얻습니다.<br><br>
  이 순서(<code>동기</code> -&gt; <code>Promise</code> -&gt; <code>setTimeout</code>)만 기억하면 어떤 비동기 코드도 해석할 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>10. 타이머 함수</h2>
</div>

**📌 일정 시간 후 또는 주기적으로 실행**

두 함수의 차이점을 명확히 구분해서 사용하는 것이 중요합니다.

**setTimeout**

```jsx
// delay ms 후 한 번 실행
// 3000ms = 3초 뒤에 콜백 함수 실행
const timerId = setTimeout(() => {
  console.log('3초 후 실행!');
}, 3000);

// 취소하기 (타이머가 울리기 전에 취소하고 싶다면)
clearTimeout(timerId);
```

<div class="wda-callout wda-ci">
  🕒 한 번만 실행
</div>

**setInterval**

```jsx
// interval ms마다 반복 실행
let count = 0;

// 1000ms = 1초마다 계속 실행
const intervalId = setInterval(() => {
  // ++count: 카운트를 먼저 1 올리고 출력 (1, 2, 3...)
  console.log(++count, '번째');
  
  // 5번 실행되면 멈춤
  if (count >= 5) {
    // 타이머 아이디를 이용해 반복을 중단
    clearInterval(intervalId);
  }
}, 1000);
```

<div class="wda-callout wda-ci">
  🔁 주기적 반복 실행
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  ⚠️ clearInterval을 하지 않으면 불필요한 타이머가 계속 실행되어 리소스 낭비나 메모리 누수로 이어질 수 있음. React 같은 SPA에서는 컴포넌트가 사라질 때 타이머를 정리하는 습관이 필요합니다.
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 두 함수는 자바스크립트 비동기 처리의 <strong>기초 중의 기초</strong>입니다.
</div>

| **함수** | **비유** | **동작 방식** | **주요 사용처** |
| --- | --- | --- | --- |
| **setTimeout** | **알람 시계 ⏰**<br>"30분 뒤에 깨워줘" | **한 번 울리면 끝**<br>(단발성 실행) | **'지연 실행'**<br>(예: 팝업창 3초 뒤 사라짐) |
| **setInterval** | **메트로놈 🎼**<br>"딱, 딱, 딱" | **영원히 멈추지 않음**<br>(끄지 않으면 무한 반복) | **'주기적 갱신'**<br>(예: 주식 가격, 카운트다운) |

<div class="wda-callout wda-ci">
  가장 중요한 건 이미지 하단에 있는 <strong>경고 문구</strong>입니다.<br>
  <code>setInterval</code>을 켜두고 페이지를 이동하면, 눈에는 안 보이지만 백그라운드에서 계속 타이머가 돌아가며 컴퓨터 자원을 갉아먹습니다(메모리 누수).<br>
  그래서 <strong>"타이머를 시작했으면, 끝내는 코드(<code>clearInterval</code>)도 반드시 세트로 만든다"</strong>는 습관을 들이세요!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. ⏱️ setTimeout 0의 진짜 의미</h2>
</div>

**📌 "0ms 후"가 아닌 "현재 작업 다 끝난 후"**

시간을 0으로 설정해도 즉시 실행되지 않습니다.

```jsx
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

// 무거운 작업 (동기)
for (let i = 0; i < 1000000000; i++) {
  // 약 1초 걸리는 반복문
}

console.log('C');

// 출력: A -> C -> B
// B는 반복문이 끝난 후에야 실행!
```

**❓ 왜 0ms인데 늦게?**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">콜 스택이 비어야 실행</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">브라우저·상황에 따라 최소 지연 시간 발생 가능(중첩 타이머·백그라운드 탭 등)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">현재 동기 코드가 끝날 때까지 대기</div>
  </div>
</div>

**💡 활용처**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">DOM 업데이트 후 작업 실행</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">무거운 작업을 나중에 처리</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">UI 블로킹 방지</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <code>setTimeout(fn, 0)</code>은 자바스크립트 개발자들이 자주 쓰는 일종의 <strong>'새치기 양보 기술'</strong>입니다.<br><br>
  "0초 뒤에 실행해"라는 말은 물리적인 시간 0초를 의미하는 게 아닙니다. <strong>"지금 당장 급한 일(화면 그리기, 클릭 처리 등) 먼저 다 처리하고, 나는 맨 나중에 실행해줘!"</strong> 라는 뜻입니다.<br><br>
  <code>setTimeout(fn, 0)</code>은 무거운 작업을 즉시 실행하지 않고 다음 태스크로 미루는 데 사용할 수 있습니다. 다만 미뤄진 작업 자체가 오래 걸리면, 그 작업이 실행되는 동안에는 여전히 화면이 멈출 수 있습니다. 정말 무거운 작업이라면 여러 조각으로 나누어 처리하거나 <strong>Web Worker</strong> 같은 별도의 방법을 고려해야 합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>12. 📞 콜백 패턴</h2>
</div>

**📌 비동기 작업 완료 후 실행할 함수 전달**

비동기 처리가 끝난 뒤에 실행하고 싶은 코드를 함수 형태로 넘겨줍니다.

```jsx
// 기본 콜백 패턴
function loadData(callback) {
  setTimeout(() => {
    const data = { name: '홍길동', age: 20 };
    callback(data); // 완료 시 호출
  }, 1000);
}

loadData((result) => {
  console.log('받은 데이터:', result);
});

console.log('데이터 요청 완료!');

// 출력: 데이터 요청 완료! -> (1초 후) 받은 데이터: ...
```

**ƒ 콜백이란?**

<div class="wda-callout wda-ci">
  "나중에 불러줘" = Call Back. 작업 완료 시 호출되는 함수
</div>

**🏁 특징**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">함수를 인자로 전달</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">비동기 작업 완료 후 실행</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">JavaScript 비동기의 기본 패턴</div>
  </div>
</div>

<div class="wda-callout wda-ci">
  ℹ️ 콜백 = 고차 함수에서 배운 "함수를 인자로 받는" 패턴의 비동기 버전!
</div>

**💡 보충 설명 - 콜백 패턴의 탄생 배경과 원리**

**📌 탄생 이유와 해결책**

왜 `return`을 못 쓰고 콜백을 써야 하는지, 그 필연적인 이유입니다.

| **구분** | **동작 방식** | **결과 (문제점/해결)** |
| --- | --- | --- |
| **일반 함수**(동기) | `const data = getData();` | **성공**<br>작업이 끝날 때까지 기다렸다가 값을 반환(`return`)함. |
| **비동기 함수**(문제점) | `const data = loadData();` | **실패 (`undefined`)**<br>작업 지시만 하고 **즉시** 다음 줄로 넘어가서, 빈손으로 돌아옴. |
| **콜백 패턴**(해결책) | `loadData((data) => { ... })` | **성공 (나중에 받기)**<br>"다 되면 이 쪽지(함수)대로 처리해줘"라고 맡겨둠. |

**💡 생활 밀착형 비유 (심부름)**

요청하신 **'물건 사오기'** 비유를 정리했습니다.

| **방식** | **명령 (Code)** | **행동 (Process)** | **내 상태 (Main Thread)** |
| --- | --- | --- | --- |
| **동기**(Sync) | **"가서 사와!"**<br>`const item = buy();` | 물건을 사올 때까지 현관 앞에서 꼼짝 않고 기다림. | **블로킹 (대기)**<br>아무것도 못 함. |
| **비동기**(Async) | **"사오면 전화해!"**<br>`buy((item) => { ... });` | 심부름을 보낸 뒤, 나는 방에 들어가서 게임을 함. | **논블로킹 (자유)**<br>다른 일(`console.log`) 처리 가능. |

**🔹 "변수에는 왜 `undefined`가 들어갈까요?"**

<div class="wda-callout wda-ci">
  자바스크립트 엔진은 성격이 정말 급합니다. <code>loadData()</code>를 실행하자마자 서버에 "데이터 줘"라고 요청만 휙 던지고, 응답이 오기도 전에 바로 다음 줄로 넘어가서 변수에 값을 넣으려 시도합니다.<br><br>
  당연히 아직 도착한 데이터가 없으니, 자바스크립트는 "어? 없네? 그럼 <code>undefined</code>!"라고 결론 내리고 넘어가 버리는 것입니다.<br>
  이런 성격 급한 녀석에게 <strong>"기다리지 말고, 나중에 이 함수나 실행시켜!"</strong>라고 달래는 것이 바로 <strong>콜백(Callback)</strong>의 핵심입니다.<br><br>
  단, 이 <code>undefined</code> 현상은 <strong>콜백 기반</strong> 비동기 함수에서 별도의 <code>return</code>이 없을 때 생기는 결과입니다.<br>
  다음 단계에서 배울 <code>async function</code>은 항상 <strong>Promise</strong>를 반환하므로, 이 예시는 콜백 기반 함수에 해당하는 이야기입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>13. 에러 우선 콜백</h2>
</div>

**📝 Node.js 스타일의 콜백 패턴**

전통적인 콜백 패턴에서는 에러 처리가 모호할 수 있어, 에러를 첫 번째 인자로 받는 규칙을 정했습니다.

```jsx
// Error-First Callback 패턴
function fetchUser(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('잘못된 ID'), null);
      return;
    }
    callback(null, { id, name: '홍길동' });
  }, 1000);
}

// 사용
fetchUser(1, (error, user) => {
  if (error) {
    console.error('에러:', error.message);
    return;
  }
  console.log('사용자:', user);
});
```

**❗️ 왜 에러가 첫 번째 매개변수?**

<div class="wda-callout wda-ci">
  에러 처리를 강제하기 위해. 첫 번째 인자를 무시하기 어려움
</div>

**📋 규칙**

1. 첫 번째 인자: 에러 (없으면 null)
2. 두 번째 인자: 결과 데이터
3. 에러 있으면 데이터는 null

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 패턴은 <strong>Node.js</strong> 환경의 표준이나 다름없습니다. (일명 '국룰'입니다.)<br><br>
  개발자들이 코드를 짜다 보면 성공했을 때의 로직만 신경 쓰고, 실패(에러) 처리는 깜빡하기 쉽습니다. 그래서 <strong>"데이터를 꺼내보기 전에 에러부터 확인해!"</strong> 라고 강제하기 위해, 콜백 함수의 <strong>맨 앞자리(VIP석)</strong>를 에러에게 내어준 것입니다.<br><br>
  <strong><code>if (error) return;</code></strong> 이 코드를 습관적으로 제일 먼저 작성하게 만드는 것이 이 패턴의 핵심 목적입니다. 안전한 코드를 위한 사회적 합의라고 보시면 됩니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>14. 콜백 지옥</h2>
</div>

**📌 형상화된 콜백의 결정체**

로그인부터 알림까지 순차적으로 처리하려다 보니, 코드가 오른쪽으로 깊게 파고듭니다.

```jsx
// 로그인 -> 프로필 -> 친구목록 -> 알림 순차 처리
login(user, (err1, token) => {
  if (err1) {
    console.error('로그인 실패');
    return;
  }
  getProfile(token, (err2, profile) => {
    if (err2) {
      console.error('프로필 실패');
      return;
    }
    getFriends(profile.id, (err3, friends) => {
      if (err3) {
        console.error('친구목록 실패');
        return;
      }
      getNotifications(friends, (err4, notis) => {
        // ...
      });
    });
  });
});
```

**🔺 피라미드 코드 모양**

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  X 가독성 / X 끔찍한 유지 보수 / X 에러 처리
</div>

**💡 해결책은?**

<div class="wda-callout wda-cs">
  다음 시간에 학습. Promise 와 async/await !
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이미지의 코드는 <strong>"로그인 성공하면 ➔ 프로필 가져오고 ➔ 친구 목록 가져오고 ➔ 알림 가져와라"</strong> 라는 로직입니다.<br><br>
  보시는 것처럼 단계가 깊어질수록 <code>err1</code>, <code>err2</code>, <code>err3</code>... 에러 처리를 위한 <code>if</code>문이 계속 중복되고, 닫는 괄호 <code>});</code>들이 쌓여서 코드의 구조를 파악하기가 매우 어렵습니다.<br><br>
  이런 <strong>'가독성 파괴'</strong>와 <strong>'유지보수의 어려움'</strong>을 해결하기 위해 Promise와 async/await 같은 방식이 등장했습니다. 이 내용은 다음 단계에서 이어서 학습합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>15. 🐞 비동기 에러 처리의 어려움</h2>
</div>

**⚠️ try-catch로 잡히지 않는 에러**

비동기 함수 내부에서 발생한 에러는 외부의 `try-catch` 블록으로 잡을 수 없습니다.

```jsx
// try-catch가 작동하지 않음!
try {
  setTimeout(() => {
    throw new Error('비동기 에러!');
  }, 1000);
  console.log('에러 안 났어요');
} catch (error) {
  // 여기로 안 옴!
  console.log('잡았다!', error);
}

// 결과: "에러 안 났어요" 출력 후
// 1초 뒤 Uncaught Error 발생
```

**🔑 핵심 개념**

<div class="wda-callout wda-ci">
  🕒 시간의 흐름 (Timeline)<br>
  <strong>Now</strong> : try 블록 실행 ➔ setTimeout 예약 ➔ try 종료 (감시 끝!) 👋<br>
  ⬇️ (이후 1초 경과)<br>
  <strong>Future</strong> : 콜백 실행 ➔ 🔥 에러 발생! (잡아줄 사람 없음)
</div>

**❓ 왜 안 잡히나요? (비유)**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">🔴 상황</div>
    <div class="wda-fcard-dsc">셰프(JS)가 "이거 나중에 요리해!"라고 보조에게 던지고 퇴근했습니다(try 종료).</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">🔥 결과</div>
    <div class="wda-fcard-dsc">나중에 보조가 요리하다 불이 났는데(Error), 셰프는 이미 집에 가서 모릅니다(catch 불가).</div>
  </div>
</div>

**✅ 해결 방법**

**✅ 콜백 내부에서 잡기** — 실행되는 그 시점에 잡아야 함!

```jsx
setTimeout(() => {
  try { throw new Error() }
  catch (e) { /* 처리 */ }
}, 1000);
```

**💡 Promise 사용 (추천)** — reject로 에러를 전달하고 .catch로 받음

<div class="wda-callout wda-cw">
  ⚠️ 비동기 에러 처리는 Promise 이전에는 정말 까다로웠습니다!
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이것이 바로 자바스크립트 초보자들이 겪는 가장 당혹스러운 순간, <strong>"유령 에러"</strong>입니다.<br><br>
  분명히 <code>try-catch</code>로 감싸놨는데, 빨간 에러 메시지가 콘솔에 뜨면서 프로그램이 멈춰버리죠. 이유는 간단합니다. <strong>"함수를 호출한 녀석(Caller)이 이미 퇴근(Return)했기 때문"</strong>입니다.<br>
  1. <code>try</code> 블록은 <code>setTimeout</code>에게 "예약"만 시키고 즉시 종료됩니다.<br>
  2. 감시자(<code>catch</code>)도 할 일이 없으니 같이 퇴근합니다.<br>
  3. 1초 뒤에 에러가 펑! 터지지만, 현장에는 아무도 없습니다.<br><br>
  이 문제를 해결하기 위해, 에러가 발생하면 "나중에라도 꼭 연락해줘!"라고 약속하는 방식인 <strong>Promise</strong>가 등장하게 된 것입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>📊 비동기 흐름 총정리</h2>
</div>

**🧠 핵심 요소별 상세 비교표**

<table class="wda-summary-table">
  <tr>
    <th>주제</th>
    <th>핵심 내용</th>
    <th>상세 설명 / 특징</th>
  </tr>
  <tr>
    <td><strong>1. 동기 vs 비동기</strong></td>
    <td>순차 대기 vs 대기 위임</td>
    <td>• <strong>동기</strong>: 앞 작업이 끝날 때까지 기다림. (순차, 블로킹)<br>• <strong>비동기</strong>: 오래 걸리는 작업을 맡겨두고 다음 작업을 먼저 진행. (대기 위임, 논블로킹)</td>
  </tr>
  <tr>
    <td><strong>2. 이벤트 루프</strong></td>
    <td>교통 정리관</td>
    <td>• <strong>역할</strong>: 콜 스택(할 일)이 비었는지 계속 확인(Loop)하고, 비었으면 대기실(큐)에서 작업을 가져옴.<br>• <strong>규칙</strong>: "스택이 텅 비어야만 큐를 쳐다본다."</td>
  </tr>
  <tr>
    <td><strong>3. 우선순위</strong></td>
    <td>계급 존재</td>
    <td><strong>1순위</strong>: 동기 코드 (즉시 실행)<br><strong>2순위</strong>: 마이크로태스크 (Promise 등)<br><strong>3순위</strong>: 매크로태스크 (setTimeout 등)</td>
  </tr>
  <tr>
    <td><strong>4. 태스크 큐 비교</strong></td>
    <td>VIP vs 일반</td>
    <td>• <strong>마이크로(VIP)</strong>: 큐에 있는 걸 <strong>전부 다</strong> 처리할 때까지 안 비켜줌.<br>• <strong>매크로(일반)</strong>: 하나 처리하고 다시 뒤로 가서 줄 섬 (양보).</td>
  </tr>
  <tr>
    <td><strong>5. 콜백의 한계</strong></td>
    <td>구시대 유물</td>
    <td>• <strong>콜백 지옥</strong>: <code>func(func(func(...)))</code> 가독성 파괴.<br>• <strong>에러 처리</strong>: 비동기 에러가 <code>try-catch</code>로 안 잡힘 (호출자가 이미 퇴근함).</td>
  </tr>
</table>

**⚙️ 실행 흐름 시뮬레이션**

위 5가지 요소가 합쳐져서 코드는 다음과 같이 실행됩니다.

| **순서** | **코드 종류** | **실행 위치** | **설명** |
| --- | --- | --- | --- |
| **1** | **`console.log`** | **Call Stack** | **(동기)** 가장 먼저 실행되고 사라짐. |
| **2** | **`Promise.then`** | **Micro Queue** | **(비동기 VIP)** 동기가 다 끝나면 우르르 실행됨. |
| **3** | **`setTimeout`** | **Macro Queue** | **(비동기 일반)** VIP까지 다 끝나고 스택이 비면 하나씩 실행됨. |

**💡 보충 설명**

<div class="wda-callout wda-ci" style="position:relative;overflow:visible;">
  이 표는 자바스크립트 비동기 메커니즘의 <strong>'지도'</strong>와 같습니다.<br><br>
  특히 <strong>'4. 태스크 큐 비교'</strong>와 <strong>'5. 콜백의 한계'</strong>는 실무에서 버그를 잡거나 코드를 리팩토링할 때 가장 중요한 기준이 됩니다.<br>
  · "왜 화면이 멈추지?" 👉 <strong>동기</strong> 작업이 너무 길거나, <strong>마이크로태스크</strong> 루프에 빠진 것.<br>
  · "왜 에러가 안 잡히지?" 👉 <strong>콜백</strong> 안에서 에러 처리를 안 했거나, <strong>Promise</strong> 체인이 끊긴 것.
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li><strong>동기</strong>는 앞 작업이 끝날 때까지 기다리는 순차·블로킹 방식이고, <strong>비동기</strong>는 오래 걸리는 작업을 맡겨두고 다음 코드를 먼저 실행하는 논블로킹 방식이다.</li>
    <li>자바스크립트는 <strong>싱글 스레드</strong>지만, 브라우저의 Web API와 <strong>이벤트 루프</strong> 덕분에 비동기 처리가 가능하다.</li>
    <li>이벤트 루프는 <strong>콜 스택이 완전히 비어야만</strong> 태스크 큐의 작업을 가져와 실행한다.</li>
    <li>실행 우선순위는 <strong>동기 코드 → 마이크로태스크(Promise 등) → 매크로태스크(setTimeout 등)</strong> 순이다.</li>
    <li><strong>setTimeout</strong>은 지정 시간 뒤 한 번만 실행되고, <strong>setInterval</strong>은 <code>clearInterval</code>로 멈추기 전까지 계속 반복된다.</li>
    <li><strong>콜백 지옥</strong>은 콜백이 중첩되며 가독성이 파괴되는 현상이며, 다음 단계에서 배우는 Promise/async-await로 해결한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: setTimeout(fn, 0)은 0ms 뒤 즉시 실행된다?</div>
    <div class="wda-mistake-right">정답: <strong>콜 스택이 완전히 비워진 뒤</strong>에야 실행되며, 0ms는 "최소 0ms 후"라는 뜻일 뿐이다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 코드에 먼저 등장한 setTimeout이 Promise.then보다 먼저 실행된다?</div>
    <div class="wda-mistake-right">정답: <strong>마이크로태스크(Promise)</strong>는 항상 <strong>매크로태스크(setTimeout)</strong>보다 먼저 실행되는 VIP다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 비동기 콜백 내부 에러도 바깥의 try-catch로 잡을 수 있다?</div>
    <div class="wda-mistake-right">정답: try 블록은 콜백 실행 전에 이미 종료되므로, 에러는 반드시 <strong>콜백 내부</strong>에서 직접 잡아야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: setInterval은 알아서 멈춘다?</div>
    <div class="wda-mistake-right">정답: <code>clearInterval</code>을 호출하지 않으면 <strong>영원히 반복</strong>되어 메모리 누수를 일으킬 수 있다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 실행 순서</div>
    <div class="wda-formula-block-body"><code>동기 → 마이크로태스크 → 매크로태스크</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · setTimeout(fn, 0)</div>
    <div class="wda-formula-block-body"><code>즉시 실행 X, 콜 스택 빈 후 실행</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 타이머 습관</div>
    <div class="wda-formula-block-body"><code>켜면 반드시 clearInterval로 끈다</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 4 · 콜백 지옥 해결</div>
    <div class="wda-formula-block-body"><code>콜백 지옥 → Promise / async-await</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">동기와 비동기의 결정적 차이는?</div>
    <div class="wda-flip-back">동기는 앞 작업이 끝날 때까지 기다리는 블로킹 방식, 비동기는 기다리지 않고 다음 작업을 먼저 진행하는 논블로킹 방식이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">자바스크립트는 싱글 스레드인데 어떻게 비동기가 가능한가?</div>
    <div class="wda-flip-back">JS 엔진은 혼자 일하지만, 브라우저의 Web API가 무거운 작업을 대신 처리하고 이벤트 루프가 결과를 콜 스택으로 옮겨준다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">이벤트 루프의 절대 규칙은?</div>
    <div class="wda-flip-back">콜 스택이 완전히 비어야만 태스크 큐(마이크로/매크로)에서 작업을 가져와 실행한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">다음 코드의 출력 순서는? console.log('1'); setTimeout(()=>console.log('2'),0); Promise.resolve().then(()=>console.log('3')); console.log('4');</div>
    <div class="wda-flip-back">1, 4, 3, 2 — 동기 코드(1, 4) 먼저, 그다음 마이크로태스크(3), 마지막으로 매크로태스크(2).</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">setTimeout과 setInterval의 차이는?</div>
    <div class="wda-flip-back">setTimeout은 지정 시간 뒤 한 번만 실행되고, setInterval은 clearInterval로 멈추기 전까지 계속 반복 실행된다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">비동기 콜백 안에서 발생한 에러를 왜 바깥 try-catch로 못 잡나?</div>
    <div class="wda-flip-back">try 블록이 콜백을 등록만 하고 즉시 종료되어, 실제 콜백이 실행되는 미래 시점에는 이미 감시(catch)가 끝나있기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">콜백 지옥이란?</div>
    <div class="wda-flip-back">비동기 작업을 순차 처리하려고 콜백을 계속 중첩하면서 코드가 피라미드 모양으로 깊어져 가독성과 유지보수성이 떨어지는 현상이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">에러 우선 콜백(Error-First Callback)의 규칙은?</div>
    <div class="wda-flip-back">콜백의 첫 번째 인자는 에러(없으면 null), 두 번째 인자는 결과 데이터로 받아 에러 확인을 강제한다.</div>
  </div>
</div>
