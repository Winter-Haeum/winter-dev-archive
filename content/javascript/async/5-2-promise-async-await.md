---
title: "5-2 Promise와 async/await"
status: "completed"
description: "콜백 지옥을 해결하는 Promise의 상태·체이닝·정적 메서드부터 async/await 문법, 병렬 처리 패턴까지 비동기 처리의 핵심을 정리한다."
category: "JavaScript"
section: "Async"
tags:
  - javascript
  - promise
  - async-await
---

<style>
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.83rem;line-height:1.75}
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
.wda-fcard-ttl{font-size:.84rem;font-weight:700;margin-bottom:3px}
.wda-fcard-dsc{font-size:.78rem;opacity:.72;line-height:1.5}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(245,158,11,.15);color:#f59e0b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.81rem;font-weight:700;margin-bottom:2px}
.wda-sdsc{font-size:.78rem;opacity:.75;line-height:1.55}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:160px}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
.wda-callout p{margin:0 0 .45rem;font-size:.83rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-deco{position:absolute;z-index:2;pointer-events:none}
@media (max-width:640px){
.wda-deco{width:34px !important}
}
</style>

## 🎯 학습 목표

<div class="wda-goal" style="position:relative;overflow:visible;padding-right:150px;padding-top:14px;">
  <img class="wda-deco" src="/images/character/멘붕.webp" alt="" style="width:118px;right:0;top:-14px;opacity:.9;transform:rotate(-3deg);">
  <strong>Promise 기초</strong> — 비동기 작업의 상태(State)를 이해하고 결과를 다룹니다.<br>
  <strong>체이닝과 에러 처리</strong> — then으로 작업을 연결하고 catch로 에러를 통합 관리합니다.<br>
  <strong>비동기 함수</strong> — async/await로 비동기 코드를 동기 코드처럼 작성합니다.<br>
  <strong>병렬 처리</strong> — Promise.all로 여러 작업을 동시에 실행하여 성능을 높입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. 콜백 지옥에서 탈출!</h2>
  <img class="wda-deco" src="/images/decoration/별 아이콘 (10).webp" alt="" style="width:64px;top:-16px;right:6%;opacity:.8;transform:rotate(8deg);">
</div>

### 1) Before (콜백 지옥) vs After (Promise)

두 코드의 구조 차이를 눈으로 직접 비교해 보세요.

**☹️ 콜백 지옥**

```jsx
login(user, (err, token) => {
  if (err) return handleError(err);
  getProfile(token, (err, profile) => {
    if (err) return handleError(err);
    getFriends(profile.id, (err, friends) => {
      if (err) return handleError(err);
      console.log(friends);
    });
  });
});
```

**😌 Promise 체이닝**

```jsx
login(user)
  .then(token => getProfile(token))
  .then(profile => getFriends(profile.id))
  .then(friends => console.log(friends))
  .catch(err => handleError(err));
```

### 2) ✅ 핵심 변화

<div class="wda-callout wda-cy">
  중첩 없이 평탄하게! 에러 처리도 한 곳에서!
</div>

**보충 설명**

이 비교가 Promise를 사용하는 이유의 전부입니다.

| **특징** | **콜백 패턴 (Before)** | **Promise (After)** |
| --- | --- | --- |
| **평탄화**(Flat) | **우측으로 파고드는 피라미드**<br>코드가 깊어지고 복잡해짐<br>(가독성 📉) | **아래로 뻗은 직선 고속도로**<br><code>chaining</code>으로 순차적 나열<br>(가독성 📈) |
| **에러 처리**(Error Handling) | **매 단계마다 <code>if (err)</code> 작성**<br>중복 코드가 발생하고 지저분함<br>(개별 처리) | **마지막에 <code>.catch()</code> 하나로 통합**<br>앞에서 발생한 모든 에러를 한 곳에서 포집<br>(일괄 처리) |

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. Promise란?</h2>
  <img class="wda-deco" src="/images/decoration/잎사귀 아이콘 (7).webp" alt="" style="width:48px;top:-10px;left:34%;opacity:.76;transform:rotate(-7deg);">
</div>

### 1) 미래에 완료될 작업의 결과를 나타내는 객체

Promise는 비동기 작업이 맞이할 미래의 완료(또는 실패)와 그 결과 값을 나타냅니다.

```jsx
// Promise = 약속
// "나중에 결과 줄게!"

// new Promise 생성자 함수를 통해 객체 생성
// (resolve, reject) 두 개의 파라미터를 받습니다.
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  setTimeout(() => {
    const success = true;

    if (success) {
      // 성공 시 resolve 호출 (약속 이행)
      resolve('성공 데이터'); 
    } else {
      // 실패 시 reject 호출 (약속 거부)
      reject('실패 이유'); 
    }
  }, 1000);
});
```

### 2) Promise = 약속

<div class="wda-callout wda-cy">
  "지금은 결과가 없지만, 작업이 끝나면 알려줄게!"
</div>

### 3) 핵심 특징

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">상태(State)를 가진 객체 (대기, 성공, 실패)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">생산자(Producer)와 소비자(Consumer) 연결</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">비동기 로직의 표준화된 처리</div>
  </div>
</div>

### 4) ℹ️ 주의사항 : Executor의 실행 시점

<div class="wda-callout wda-cw">
  Executor(실행자 함수)는 new Promise 선언과 동시에 "즉시 실행"됩니다. 결과만 나중에 비동기로 알려주는 것입니다.
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <strong>"Executor가 즉시 실행된다"</strong>는 말은 초보자가 가장 많이 헷갈리는 부분입니다.
</div>

```jsx
// 이 코드는 선언하자마자 콘솔에 찍힙니다!
const myPromise = new Promise((resolve) => {
  console.log("나 실행된다!"); // <--- 즉시 실행됨
  // ...
});
```

<div class="wda-callout wda-ci">
  <code>Promise</code>를 만든다는 것은 "지금 당장 작업을 시작해!"라고 명령하는 것과 같습니다. (나중에 실행하고 싶다면 함수 안에 넣어야 합니다.)<br><br>
  또한 <code>Promise</code>는 3가지 상태 중 하나를 가집니다.<br>
  1. <strong>Pending (대기)</strong> : 아직 결과가 안 나옴 (진동벨 받는 순간)<br>
  2. <strong>Fulfilled (이행)</strong> : 성공! (<code>resolve</code> 호출됨)<br>
  3. <strong>Rejected (거부)</strong> : 실패... (<code>reject</code> 호출됨)
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. 🚦 Promise 상태 3가지</h2>
  <img class="wda-deco" src="/images/decoration/핀 아이콘 (11).webp" alt="" style="width:52px;top:-11px;right:32%;opacity:.76;transform:rotate(6deg);">
</div>

### 1) 한 번 결정되면 변경 불가!

Promise는 생명 주기 동안 다음 3가지 중 하나의 상태를 가집니다.

| **상태 (State)** | **의미** | **설명** | **호출 함수** |
| --- | --- | --- | --- |
| **pending**(대기 중) | **⏳ 진행 중** | 아직 결과가 결정되지 않음 | - |
| **fulfilled**(이행됨) | **✅ 성공** | 작업이 성공적으로 완료됨<br>(결과값 있음) | `resolve()` |
| **rejected**(거부됨) | **❌ 실패** | 작업 중 에러 발생<br>(에러 이유 있음) | `reject()` |

### 2) 상태 변화 흐름 (Flow)

<div class="wda-callout wda-cy">
  1. pending ➔ fulfilled (성공)<br>
  2. pending ➔ rejected (실패)
</div>

### 3) 🔒 불변성 (Immutability)

<div class="wda-callout wda-cw">
  불변성: fulfilled나 rejected가 되면 다시 바뀌지 않습니다! (성공했다가 실패로 바뀌거나, 실패했다가 성공으로 바뀔 수 없음)
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  이 3가지 상태는 Promise를 이해하는 <strong>가장 중요한 기초</strong>입니다.<br>
  1. <strong>Pending (대기)</strong>: 식당에서 진동벨을 들고 기다리는 상태입니다. 아직 요리가 나올지, 재료가 떨어질지 모릅니다.<br>
  2. <strong>Fulfilled (이행)</strong>: 진동벨이 울리고 요리를 받은 상태입니다. 기분이 좋죠! (<code>.then</code>으로 갑니다)<br>
  3. <strong>Rejected (거부)</strong>: 직원이 와서 "재료 소진입니다"라고 통보한 상태입니다. 슬프지만 다른 식당을 찾아야 합니다. (<code>.catch</code>로 갑니다)
</div>

**가장 중요한 점**

<div class="wda-callout wda-ci">
  요리를 이미 다 먹었는데(fulfilled), 갑자기 직원이 와서 "재료 소진(rejected)"이라고 할 수 없듯이, <strong>한 번 결과가 나오면(Settled) 그 약속은 끝난 것입니다.</strong> 번복할 수 없습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. Promise 생성</h2>
  <img class="wda-deco" src="/images/decoration/하트 아이콘 (7).webp" alt="" style="width:56px;top:-12px;left:8%;opacity:.76;transform:rotate(-8deg);">
</div>

### 1) new Promise로 직접 만들기

직접 비동기 작업을 수행하는 Promise 객체를 생성하는 기본 문법입니다.

```jsx
// 기본 패턴
const myPromise = new Promise((resolve, reject) => {
  // 비동기 작업...

  if (/* 성공 조건 */) {
    resolve(결과값);
  } else {
    reject(에러);
  }
});

// 실제 예시: 타이머
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// 사용
delay(2000).then(() => {
  console.log('2초 지남!');
});
```

### 2) ⚙️ executor 함수

<div class="wda-callout wda-cy">
  <code>new Promise(executor)</code><br>
  <code>executor = (resolve, reject) => { }</code>
</div>

### 3) ✅ resolve(value)

<div class="wda-callout wda-cy">
  JS 엔진이 주입하는 함수. 작업을 성공으로 처리하고 결과(value)를 전달
</div>

### 4) ❌ reject(reason)

<div class="wda-callout wda-cy">
  JS 엔진이 주입하는 함수. 작업을 실패로 처리하고 에러(reason)를 전달
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  사실 실무에서 <code>new Promise</code>를 직접 작성할 일은 생각보다 많지 않습니다. (<code>fetch</code>나 <code>axios</code> 같은 라이브러리가 이미 Promise를 만들어주기 때문이죠.)<br><br>
  하지만 <strong>"옛날 방식의 콜백 함수(setTimeout 등)를 최신 Promise로 감싸서(Wrapping) 쓸 때"</strong> 이 패턴이 필수적으로 사용됩니다. 이를 <strong>'Promisify(프로미스화)'</strong>라고 부릅니다.<br><br>
  · <strong>핵심 포인트</strong> — <code>resolve</code>와 <code>reject</code>는 우리가 만드는 함수가 아닙니다. 자바스크립트 엔진이 <strong>"성공하면 이 버튼 누르고, 실패하면 저 버튼 누르세요"</strong>라고 우리 손에 쥐여주는 <strong>기폭장치(Trigger)</strong> 같은 것입니다. 우리는 상황에 맞춰 누르기만 하면 됩니다.
</div>

<img src="/images/content/5-2/Promise 상태 흐름.png" alt="new Promise() → Pending → resolve(val)이면 Fulfilled(.then()), reject(err)이면 Rejected(.catch())" style="display:block;width:100%;max-width:640px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<p style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:640px;">[그림] Promise 상태 흐름</p>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. 📲 Promise 소비 - then, catch, finally</h2>
  <img class="wda-deco" src="/images/decoration/꽃 아이콘 (4).webp" alt="" style="width:50px;top:-11px;right:8px;opacity:.76;transform:rotate(6deg);">
</div>

### 1) Promise 결과 받아서 처리하기

생성된 Promise가 주는 결과를 받아내려면 소비자 메서드(`then`, `catch`, `finally`)를 사용해야 합니다.

```jsx
// fetchUser는 Promise를 반환한다고 가정
const promise = fetchUser(1);

// 1. then: 성공(Resolve) 시 실행
promise.then(user => {
  console.log('사용자:', user);
});

// 2. catch: 실패(Reject) 시 실행
promise.catch(error => {
  console.error('에러:', error);
});

// 3. finally: 성공/실패 상관없이 무조건 실행
promise.finally(() => {
  console.log('작업 완료!');
});
```

### 2) ✅ then(onFulfilled)

<div class="wda-callout wda-cy">
  성공 시 콜백 실행. resolve된 값을 인자로 받음
</div>

### 3) ❗ catch(onRejected)

<div class="wda-callout wda-cy">
  실패 시 콜백 실행. reject된 에러를 인자로 받음
</div>

### 4) 🏁 finally(onFinally)

<div class="wda-callout wda-cy">
  성공/실패 무관하게 실행. 인자 없음 (ES2018 도입)
</div>

**보충 설명**

이 세 가지 메서드는 Promise를 사용하는 **가장 기본적인 패턴**입니다.

| **메서드** | **의미 (비유)** | **역할** | **인자** |
| --- | --- | --- | --- |
| **then** | "약속 지켰어? 그러면 이거 해줘" | **✅ 성공 (Resolve)** 시 실행 | 결과값 (value) |
| **catch** | "약속 어겼어? 에러 잡아" | **❌ 실패 (Reject)** 시 실행 | 에러객체 (error) |
| **finally** | "성공이든 실패든 난 이제 갈게" | **🏁 무조건** 실행 (정리) | 없음 |

이 3가지는 Promise를 사용하는 **표준 문법(Standard)**입니다.

<div class="wda-callout wda-ci">
  · <strong><code>then</code>의 특징</strong>: <code>then</code>은 또 다른 Promise를 반환할 수 있어서, <code>then().then().then()</code> 처럼 <strong>체인(Chain)</strong>으로 계속 연결할 수 있습니다. 이것이 콜백 지옥을 해결하는 열쇠입니다.<br>
  · <strong><code>finally</code>의 활용</strong>: 주로 <strong>'로딩 화면(Spinner) 끄기'</strong>에 사용됩니다. 성공하든 실패하든 로딩 바는 사라져야 하니까요. ES2018(ES9)에 추가된 비교적 최신 기능입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. 🪄 체이닝으로 콜백 지옥 해결</h2>
  <img class="wda-deco" src="/images/decoration/말풍선 아이콘 (8).webp" alt="" style="width:54px;top:-12px;left:36%;opacity:.76;transform:rotate(-7deg);">
</div>

### 1) 평탄하고 읽기 쉬운 코드로!

Promise 체이닝을 사용하면 코드가 깊어지지 않고 순차적으로 연결됩니다.

### 2) ☹️ Before (콜백)

```jsx
login(user, (err, token) => {
  if (err) { handleError(err); return; }

  getProfile(token, (err, profile) => {
    if (err) { handleError(err); return; }

    getFriends(profile.id, (err, friends) => {
      if (err) { handleError(err); return; }

      getPhotos(friends[0].id, (err, photos) => {
        if (err) { handleError(err); return; }

        displayPhotos(photos);
      });
    });
  });
});
```

### 3) 😌 After (Promise)

```jsx
login(user)
  .then(token => getProfile(token))
  .then(profile => getFriends(profile.id))
  .then(friends => getPhotos(friends[0].id))
  .then(photos => displayPhotos(photos))
  .catch(handleError);

// 더 명확하게 (함수 자체를 전달)
// login(user)
//   .then(getProfile)
//   .then(profile => getFriends(profile.id))
//   .then(friends => getPhotos(friends[0].id))
//   .then(displayPhotos)
//   .catch(handleError);
```

### 4) ✅ 핵심 변화

<div class="wda-callout wda-cy">
  ✓ 들여쓰기 한 단계 (Depth 1)<br>
  ✓ 에러 처리 통합 (catch 하나로 끝)<br>
  ✓ 위에서 아래로 읽기 (사람의 사고 방식)
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  이것이 가능한 이유는 <strong><code>.then</code> 안에서 <code>return</code>한 값</strong>이 자동으로 <strong>다음 <code>.then</code>의 인자</strong>로 전달되기 때문입니다.<br><br>
  · <strong>Promise 반환 시</strong> — 다음 <code>.then</code>은 그 Promise가 완료(resolve)될 때까지 기다렸다가 결과를 받습니다.<br>
  · <strong>값 반환 시</strong> — 다음 <code>.then</code>은 그 값을 즉시 받아서 실행합니다.
</div>

---

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/반짝이 아이콘 (8).webp" alt="" style="width:44px;top:6px;left:30%;opacity:.72;transform:rotate(9deg);">
</div>

## 💻 실습 : Mini Mission - 체이닝 연습

### 1) Mission

다음 코드를 3초 안에 해석해보세요! (콘솔에 어떤 숫자가 찍힐까요?)

### 2) 예제 코드

`then`을 통해 값이 어떻게 전달되고 변하는지 추적하는 문제입니다.

```jsx
Promise.resolve(10)
  .then(num => {
    console.log(num);
    return num * 2;
  })
  .then(num => {
    console.log(num);
    return Promise.resolve(num - 5);
  })
  .then(num => {
    console.log(num);
  });
```

### 3) 결과 예시

순서대로 다음 숫자들이 출력됩니다.

```jsx
10
20
15
```

### 4) 정답 코드

```jsx
// 1. 시작값 10으로 출발
Promise.resolve(10)
  .then(num => {
    console.log(num); // 출력: 10
    return num * 2;   // 20을 다음 .then으로 넘김 (일반 값 반환)
  })
  .then(num => {
    console.log(num); // 출력: 20 (위에서 받은 값)
    
    // Promise를 반환해도, JS가 알아서 그 결과값(15)만 꺼내서 다음으로 넘겨줌
    return Promise.resolve(num - 5); 
  })
  .then(num => {
    console.log(num); // 출력: 15 (20 - 5)
  });
```

**보충 설명**

이 실습의 핵심은 **"return한 값이 다음 `then`의 파라미터(`num`)로 들어간다"**는 규칙을 이해하는 것입니다.

| **반환 타입** | **코드 예시** | **동작 방식 (Process)** | **다음 then이 받는 것** |
| --- | --- | --- | --- |
| **일반 값**(Value) | `return num * 2` | **🚀 즉시 전달**<br>계산된 값을 바로 넘김 | **값 그 자체**<br>(예: `20`) |
| **Promise**(Object) | `return Promise.resolve(...)` | **⏳ 대기 후 전달**<br>"어? Promise네?" 하고 끝날 때까지 기다림. 완료되면 껍질을 까고 **알맹이**만 꺼냄 | **알맹이 값**<br>(예: `15`) |

<div class="wda-callout wda-ci">
  즉, 그냥 값을 주든 Promise를 주든, 다음 <code>then</code>은 항상 <strong>"완료된 결과값"</strong>만 깔끔하게 받아먹게 됩니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. ❗ Promise 에러 처리</h2>
  <img class="wda-deco" src="/images/decoration/꽃 아이콘 (6).webp" alt="" style="width:58px;top:-13px;right:34%;opacity:.76;transform:rotate(-8deg);">
</div>

### 1) catch()로 한 곳에서 처리

`catch` 블록 하나만 있으면, 앞선 체인(`then`) 어디에서 발생한 에러든 모두 잡아낼 수 있습니다.

```jsx
// 에러는 catch로 전파됨 (마치 미끄럼틀처럼)
fetchUser(1)
  .then(user => {
    if (!user.active) {
      // 강제로 에러 발생시키기
      throw new Error('비활성 사용자');
    }
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log('게시물:', posts);
  })
  .catch(error => {
    // 1. fetchUser 에러
    // 2. throw new Error
    // 3. fetchPosts 에러
    // 위 3가지 중 어디서 터져도 모두 여기서 잡힘!
    console.error('에러:', error.message);
  })
  .finally(() => {
    console.log('완료');
  });
```

### 2) ⛓️ 에러 전파

<div class="wda-callout wda-cy">
  체인 어디서든 에러 발생 ➔ 가장 가까운 catch로 점프. 중간 단계를 건너뛰고 즉시 에러 핸들러로 이동합니다.
</div>

### 3) 🔄 에러 복구

`catch`에서 에러를 처리하고 **값(기본값)을 리턴**하면, 멈췄던 체인을 다시 살릴 수 있습니다.

```jsx
.catch(err => {
  console.log('에러 복구');
  return '기본 게시물'; // 기본값 반환
})
.then(data => {
  // 에러가 났었지만 복구되어 실행됨
  console.log(data); 
})
```

### 4) ⚠️ 주의

<div class="wda-callout wda-cw">
  catch가 없으면 rejected 상태를 처리하지 못해 Uncaught Promise Rejection 또는 Unhandled Promise Rejection이 발생할 수 있습니다. 항상 체인의 끝에는 catch를 붙이는 습관을 들이세요.
</div>

**보충 설명**

Promise의 에러 처리는 **"안전 그물(Safety Net)"**과 같습니다.

| **구분** | **에러 전파 (Propagation)** | **에러 복구 (Recovery)** |
| --- | --- | --- |
| **📉 동작 방식** | 에러 발생 시 하던 일을 **즉시 멈추고** 가장 가까운 `catch`로 직행 | `catch`에서 **대체 값(기본값)**을 리턴하여 끊어진 흐름을 다시 연결 |
| **🚧 특징** | 중간에 있는 `.then()`들은 **모두 무시하고 통과**함 | 다음 `.then()`이 실행되도록 **체인을 부활**시킴 |
| **💡 비유** | "으악! (툭) ➔ **안전 그물**로 떨어짐" | "이게 안 돼? **괜찮아, 대신 이걸 써!**" |
| **🎯 목적** | 에러를 한 곳에서 통합 관리 | 서비스 중단 방지 (방어 코드) |

이 두 가지 개념을 잘 구분해서 사용하면 훨씬 견고한 프로그램을 만들 수 있습니다.

<div class="wda-callout wda-ci">
  · <strong>전파만 할 때</strong> — "로그인이 실패했어? 그럼 뒤에 프로필 조회고 뭐고 다 필요 없으니 <strong>에러 창 띄우고 끝내.</strong>" (일반적인 경우)<br>
  · <strong>복구를 할 때</strong> — "프로필 이미지를 못 불러왔어? 그렇다고 앱을 끄면 안 되지. <strong>'기본 사람 아이콘'으로 대체해서 계속 보여줘.</strong>" (사용자 경험을 지킬 때)
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. 🛠️ Promise 정적 메서드 - 기본</h2>
  <img class="wda-deco" src="/images/decoration/핀 아이콘 (11).webp" alt="" style="width:44px;top:-9px;left:8%;opacity:.74;transform:rotate(6deg);">
</div>

### 1) 자주 쓰는 유틸리티 메서드

`new Promise`를 쓰지 않고도 즉시 성공하거나 실패하는 Promise를 만들 수 있습니다.

```jsx
// Promise.resolve - 즉시 성공
const p1 = Promise.resolve('성공!');
p1.then(v => console.log(v)); // '성공!'

// Promise.reject - 즉시 실패
const p2 = Promise.reject(new Error('실패!'));
p2.catch(e => console.log(e.message)); // '실패!'

// 활용: 조건부 Promise
function getData(useCache) {
  if (useCache && cache.has(key)) {
    return Promise.resolve(cache.get(key));
  }
  return fetchFromServer(key);
}

// 항상 Promise 반환 -> 일관된 API
getData(true).then(data => console.log(data));
getData(false).then(data => console.log(data));
```

### 2) ✅ Promise.resolve(value)

<div class="wda-callout wda-cy">
  주어진 값으로 즉시 fulfilled. 동기 값을 Promise로 감쌀 때
</div>

### 3) ❌ Promise.reject(reason)

<div class="wda-callout wda-cy">
  주어진 이유로 즉시 rejected. 테스트나 에러 전파에 유용
</div>

### 4) 💡 활용

<div class="wda-callout wda-cy">
  캐시 히트 시 바로 반환. 함수가 항상 Promise 반환하도록
</div>

**보충 설명**

이 메서드들이 필요한 가장 큰 이유는 **"함수의 리턴 타입 통일(Consistency)"** 때문입니다.

`Promise.resolve(value)`는 즉시 fulfilled 상태의 Promise를 만들지만, `.then`에 등록한 콜백은 현재 동기 코드가 끝난 뒤 마이크로태스크로 실행됩니다. 또한 `Promise.reject`를 쓸 때는 `reject('실패')`처럼 문자열만 넘기기보다 `reject(new Error('실패'))`처럼 Error 객체를 넘기는 것이 디버깅에 더 좋습니다.

| **구분** | **내용** | **상세 설명** |
| --- | --- | --- |
| **상황**(Situation) | **무조건 `.then()` 사용 희망** | 함수를 호출하는 쪽(Caller)에서는 데이터가 캐시에 있든 서버에 있든 신경 쓰지 않고, **항상 `getData().then()`** 형태로 코드를 짜고 싶어 합니다. |
| **문제**(Problem) | **`.then()` 없음 에러** | 캐시에 있는 데이터를 그냥 반환(`return data`)하면, 문자열이나 객체에는 `.then` 메서드가 없으므로 **"TypeError: ... is not a function"** 에러가 터집니다. |
| **해결**(Solution) | **`Promise`인 척 연기** | `Promise.resolve(데이터)`로 값을 싹 감싸서 주면, 데이터가 이미 준비되어 있음에도 **마치 비동기인 척 행세**를 하여 `.then()` 흐름을 유지할 수 있습니다. |

이 패턴은 **API 설계의 일관성(Consistency)**을 지키기 위해 필수적입니다.

<div class="wda-callout wda-ci">
  · <strong>나쁜 설계</strong> — "캐시에 있으면 그냥 값 줄게, 없으면 Promise 줄게." 호출하는 사람이 매번 타입을 확인해야 함 (<code>if (isPromise) ... else ...</code>).<br>
  · <strong>좋은 설계</strong> — "언제나 Promise 줄게. (어떤 건 0.001초 만에 끝나겠지만!)" 호출하는 사람은 고민 없이 무조건 <code>.then()</code>만 쓰면 됩니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>9. ☑️ Promise.all - 모두 성공해야</h2>
  <img class="wda-deco" src="/images/decoration/꽃 아이콘 (7).webp" alt="" style="width:56px;top:-12px;right:8px;opacity:.76;transform:rotate(-6deg);">
</div>

### 1) 여러 Promise를 병렬로 실행

순차적으로 하나씩 기다리는 것이 아니라, 여러 작업을 동시에 시작하고 모두 끝날 때까지 기다립니다. 여기서 "동시에"는 JavaScript 코드가 실제로 여러 줄을 병렬 실행한다는 뜻이 아니라, 네트워크 요청처럼 기다리는 작업을 한꺼번에 시작해 대기 시간을 겹치게 만든다는 의미입니다.

```jsx
// 3개의 API를 동시에 호출 (병렬 시작)
const userPromise = fetchUser(1);
const postsPromise = fetchPosts(1);
const commentsPromise = fetchComments(1);

// Promise.all: 배열 안에 있는 모든 작업이 끝날 때까지 대기
Promise.all([userPromise, postsPromise, commentsPromise])
  // 결과값도 배열 형태로 들어옴 (순서는 요청 순서와 동일)
  .then(([user, posts, comments]) => {
    console.log('사용자:', user);
    console.log('게시물:', posts.length);
    console.log('댓글:', comments.length);
  })
  .catch(error => {
    // 하나라도 실패하면 바로 여기로! (전체 실패 처리)
    console.error('에러:', error);
  });

// 순차 실행보다 훨씬 빠름
// 순차: 1초 + 1초 + 1초 = 3초 걸릴 것을
// 병렬: max(1초, 1초, 1초) = 1초 만에 끝냄
```

### 2) ☑️ Promise.all 특징

<div class="wda-callout wda-cy">
  배열의 모든 Promise 병렬 실행. 결과도 배열로 반환 (순서 유지). (먼저 끝난 순서가 아니라, 배열에 넣은 순서대로 결과를 줍니다.)
</div>

### 3) ✅ 성공 조건

<div class="wda-callout wda-cy">
  모든 Promise가 성공해야 전체가 성공으로 처리
</div>

### 4) ⚠️ 실패 시 (Fast-Fail)

<div class="wda-callout wda-cw">
  하나라도 실패하면 즉시 rejected (fast-fail). (다른 작업이 성공했더라도 무시하고 바로 에러로 넘어갑니다.)
</div>

**보충 설명**

`Promise.all`은 **성능 최적화(Performance)**의 핵심입니다.

- **비유 (요리)**:

| **방식** | **진행 과정 (Process)** | **계산 방식** | **총 소요 시간** | **결과** |
| --- | --- | --- | --- | --- |
| **순차 처리**(Sequential) | 밥(30분) ➔ (완료 후) ➔ 찌개(20분) ➔ (완료 후) ➔ 계란(5분) | **더하기 (+)**<br>30 + 20 + 5 | **55분** | 배고파서 쓰러짐<br>(비효율 📉) |
| **병렬 처리**(Promise.all) | 밥(30분), 찌개(20분), 계란(5분) **동시에 시작** | **최댓값 (Max)**<br>max(30, 20, 5) | **30분** | 식사 준비 끝<br>(고효율 🚀) |

<div class="wda-callout wda-cw">
  <strong>주의할 점 (Fail-Fast)</strong>: <code>Promise.all</code>은 "모두 다 성공해야 의미가 있는 작업"에 씁니다. 만약 찌개를 태워먹어서(에러) 밥상을 엎어야 한다면 <code>Promise.all</code>이 맞습니다. 하지만 찌개가 망해도 밥과 계란은 먹어야 한다면(부분 성공 허용), <code>Promise.allSettled</code>(ES2020)를 써야 합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>10. 🏆 Promise.race - 가장 먼저 완료된 것</h2>
  <img class="wda-deco" src="/images/decoration/화살표 아이콘 (10).webp" alt="" style="width:42px;top:-9px;left:36%;opacity:.74;transform:rotate(9deg);">
</div>

### 1) 가장 빠른 결과 하나만

여러 개의 Promise를 경주(Race)시켜서, 가장 먼저 끝나는(성공이든 실패든) 작업의 결과만 가져옵니다.

```jsx
// 타임아웃 구현
function fetchWithTimeout(url, timeout) {
  const fetchPromise = fetch(url);

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('요청 시간 초과!'));
    }, timeout);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
}

// 사용: 3초 안에 응답 없으면 에러
fetchWithTimeout('/api/data', 3000)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err.message));
```

### 2) 🏆 Promise.race 특징

<div class="wda-callout wda-cy">
  가장 먼저 settled된 Promise의 결과 사용. (성공(fulfilled)이든 실패(rejected)든, 1등으로 들어온 결과만 취합니다.)
</div>

### 3) ⏱️ 활용 사례

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">타임아웃 구현</div>
    <div class="wda-fcard-dsc">(위 코드 예시) 서버 응답 vs 타이머. 타이머가 이기면 "시간 초과" 에러 처리.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">여러 서버 중 가장 빠른 응답</div>
    <div class="wda-fcard-dsc">똑같은 데이터를 주는 서버 A, B, C에 동시에 요청하고 가장 빨리 온 것만 씀.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">로딩 스피너 최소 표시 시간</div>
    <div class="wda-fcard-dsc">로딩이 너무 빨리 끝나서 화면이 번쩍거리는 것을 방지할 때 사용.</div>
  </div>
</div>

### 4) ℹ️ 참고

<div class="wda-callout wda-ci">
  나머지 Promise는 계속 실행됨 (취소되지 않음). 결과를 무시할 뿐, 네트워크 요청 자체가 끊기는 것은 아닙니다.
</div>

**보충 설명**

`Promise.race`는 말 그대로 **"달리기 시합"**입니다.

| **구분** | **경기 내용 (Process)** | **승자 (Winner)** | **심판 판정 (Result)** |
| --- | --- | --- | --- |
| **상황 A**(정상) | 데이터가 **1초** 만에 도착, 타이머(3초)는 아직 뛰고 있음 | **데이터 요청**(`fetch`) | **✅ 성공! (Resolve)**<br>"데이터 요청 승!" 선언 및 종료 |
| **상황 B**(타임아웃) | 3초가 지나도 데이터가 안 옴, **3초 땡** 하자마자 타이머 도착 | **타이머**(`setTimeout`) | **❌ 실패! (Reject)**<br>"타이머 승!(에러 발생)" 선언 |

이 경주에서 가장 중요한 규칙은 **"1등만 기억한다"**입니다.

<div class="wda-callout wda-ci">
  · <strong>상황 A에서</strong> — 데이터가 먼저 들어와서 성공 처리가 된 후, 나중에 3초가 되어 타이머가 울리더라도 <strong>아무 일도 일어나지 않습니다.</strong> (이미 경기가 끝났으니까요.)<br>
  · <strong>상황 B에서</strong> — 타이머가 이겨서 에러 처리가 된 후, 나중에(예: 5초 뒤) 데이터가 뒤늦게 도착하더라도 <strong>그 데이터는 무시됩니다.</strong> (사용자는 이미 에러 화면을 보고 있으니까요.)
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. Promise.allSettled / any</h2>
  <img class="wda-deco" src="/images/decoration/메모지 아이콘 (5).webp" alt="" style="width:50px;top:-11px;right:32%;opacity:.76;transform:rotate(7deg);">
</div>

### 1) 더 유연한 병렬 처리

`all`이나 `race`보다 더 섬세하게 여러 비동기 작업을 제어할 수 있는 최신 메서드들입니다.

```jsx
const promises = [
  Promise.resolve('성공1'), Promise.reject('실패'), Promise.resolve('성공2')
];

// allSettled: 실패해도 상관없이 모든 결과를 다 받기
Promise.allSettled(promises)
  .then(results => {
    results.forEach(r => {
      if (r.status === 'fulfilled') {
        console.log('성공:', r.value);
      } else {
        console.log('실패:', r.reason);
      }
    });
  });
// 결과: 성공: 성공1, 실패: 실패, 성공: 성공2 (모두 출력됨)

// any: 하나라도 성공하면 OK (가장 먼저 성공한 것)
Promise.any(promises)
  .then(first => console.log('첫 성공:', first))
  .catch(err => console.log('모두 실패'));
// 결과: 첫 성공: 성공1
```

### 2) 🏁 allSettled (ES2020)

<div class="wda-callout wda-cy">
  모든 Promise 완료 후 결과 배열 반환. <code>{ status, value/reason }</code> 형태의 객체로 상태와 결과를 알려줍니다. (중간에 에러가 터져도 멈추지 않고 끝까지 다 실행합니다.)
</div>

### 3) 🎯 any (ES2021)

<div class="wda-callout wda-cy">
  하나라도 성공하면 그 값 반환. race와 달리 실패한 것은 무시하고, 첫 번째 성공을 기다립니다. (모두 실패해야만 rejected 됩니다.)
</div>

### 4) 田 비교 요약

4가지 병렬 처리 메서드의 성공/완료 조건 차이를 비교했습니다.

| **메서드** | **성공 조건 (Resolve)** | **특징** |
| --- | --- | --- |
| **all** | **모두 성공** | 하나라도 실패하면 즉시 에러 |
| **race** | **먼저 완료** | 성공/실패 상관없이 1등 결과 |
| **allSettled** | **모두 완료** | 성공/실패 상관없이 전체 결과 보고서 |
| **any** | **하나 성공** | 실패는 무시, 첫 성공만 취함 |

**보충 설명**

이 메서드들은 `Promise.all`의 단점(하나만 망해도 전체가 망함)을 보완하기 위해 나왔습니다.

| **메서드** | **시나리오 (Scenario)** | **동작 방식 (Process)** | **활용 목적** |
| --- | --- | --- | --- |
| **allSettled**(전체 보고) | **📝 오늘의 할 일 목록**(Dashboard) | 3개 중 1개가 실패해도 목록 전체를 **감추지 않음**. 성공한 건 보여주고, 실패한 건 "실패함" 표시. | **부분 성공 허용**<br>전체 작업의 성공/실패 현황 파악 |
| **any**(택 1) | **📡 백업 서버 찾기**(Resilience) | 서버 A가 다운(실패)돼도 **상관없음(무시함)**. B나 C 중 **하나라도 응답하면** 즉시 서비스를 계속함. | **최우선 성공 확보**<br>여러 경로 중 유효한 하나만 필요 |

---

<div style="position:relative;overflow:visible;height:0;">
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (9).webp" alt="" style="width:56px;top:-8px;right:10%;opacity:.76;transform:rotate(6deg);">
</div>

## 💻 실습 : Promise 생성하기

### 1) Mission

1. `sendEmail` 함수를 완성하세요.
2. 1초(`setTimeout`) 뒤에 성공 메시지를 반환해야 합니다.
3. `resolve` 함수를 사용하세요.

> 힌트: new Promise((resolve, reject) => { ... })

### 2) 예제 코드

빈칸을 채워 비동기 함수를 완성하는 문제입니다.

```jsx
function sendEmail() {
  return new Promise((resolve, reject) => {
    // 여기에 코드를 작성하세요
    setTimeout(() => {

    }, 1000);
  });
}

sendEmail().then(console.log);
```

### 3) 결과 예시

1초 뒤에 콘솔에 메시지가 출력되어야 합니다.

```jsx
이메일 전송 성공!
```

### 4) 정답 코드

```jsx
function sendEmail() {
  // Promise 객체 생성 (비동기 작업의 단위)
  return new Promise((resolve, reject) => {
    
    // 1초 후에 실행되는 코드
    setTimeout(() => {
      // Mission: 성공 메시지를 담아 resolve 호출
      resolve('이메일 전송 성공!');
    }, 1000);
  });
}

// 함수 실행 -> .then으로 결과 확인
sendEmail().then(console.log);
```

**보충 설명**

<div class="wda-callout wda-ci">
  정답인 <code>resolve('이메일 전송 성공!')</code>는 Promise가 수행해야 할 가장 중요한 임무입니다.<br>
  1. <strong>약속 이행 (Resolve)</strong> — 작업이 문제없이 끝났으니 약속을 지키겠다는 신호입니다.<br>
  2. <strong>데이터 전달 ('이메일 전송 성공!')</strong> — 약속을 기다리던 사람(<code>.then</code>)에게 전달해 줄 결과물입니다.<br><br>
  이 한 줄 덕분에 바깥세상(<code>then</code>)에서는 1초가 걸리든 10초가 걸리든 신경 쓰지 않고, 작업이 끝나면 정확하게 "이메일 전송 성공!"이라는 메시지를 받을 수 있게 됩니다.
</div>

---

## 💻 실습 : Promise 에러 처리

### 1) Mission

1. 실패 조건(`!success`)일 때 에러를 발생시키세요.
2. `reject` 와 `Error` 객체를 사용하세요.
3. 실행부에서 에러를 잡는 메서드(`.catch`)를 작성하세요.

> 힌트: reject는 Promise를 거부(Rejected) 상태로 만듭니다.

### 2) 예제 코드

에러를 발생시키고 잡아내는 로직을 완성하는 문제입니다.

```jsx
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = false;
    if (success) resolve("성공");
    else /* 1. 에러 발생 */
  });
}

// 2. 에러 핸들링
fetchData()
  .then(console.log)
```

### 3) 결과 예시

콘솔에 에러 내용이 빨간색(또는 에러 형식)으로 출력되어야 합니다.

```jsx
Error: 데이터 가져오기 실패
```

### 4) 정답 코드

```jsx
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = false;
    
    if (success) {
      resolve("성공");
    } else {
      // Mission 1 & 2: Error 객체를 담아 reject 호출 (실패 처리)
      reject(new Error("데이터 가져오기 실패")); 
    }
  });
}

// Mission 3: 에러 핸들링 (.catch 추가)
fetchData()
  .then(console.log)
  .catch(console.error); // 에러 출력
```

**보충 설명**

이번 실습의 핵심은 **"에러를 던지는 법(`reject`)과 받는 법(`catch`)"**의 짝을 맞추는 것입니다.

| **구분** | **코드 형태** | **동작 원리 (Mechanism)** | **실무 활용 팁 (Key Point)** |
| --- | --- | --- | --- |
| **에러 발생**(Throw) | `reject(new Error(...))` | 약속 거부 신호 전송 | 문자열 대신 **Error 객체** 필수. **에러 위치(줄 번호)**까지 추적 가능해 **디버깅**에 훨씬 유리함. |
| **에러 포착**(Catch) | `.catch(...)` | `reject` 호출 시 즉시 이곳으로 점프 | `.then`을 모두 건너뛰고 도착하는 **에러 안전지대**. 서비스가 멈추지 않게 방어함. |

**"왜 굳이 `new Error()`를 써야 하나요?"**

<div class="wda-callout wda-ci">
  · <strong>문자열만 보낼 때 (<code>reject("망함")</code>)</strong>: 콘솔: <code>"망함"</code>. 개발자: "대체 몇 번째 줄에서 망했다는 거야?" (찾을 수 없음)<br>
  · <strong>Error 객체 사용 시 (<code>reject(new Error("망함"))</code>)</strong>: 콘솔: <code>Error: 망함 at fetchData (index.js:15:3)</code>. 개발자: "아하, 15번째 줄이 문제구나!" (즉시 해결)<br><br>
  이처럼 <strong>스택 트레이스(Stack Trace)</strong>라고 부르는 '에러 추적 정보'를 남기기 위해 실무에서는 반드시 <code>Error</code> 객체를 사용해야 합니다.
</div>

---

## 💻 실습 : Promise 체이닝

### 1) Mission

1. 숫자 10을 받습니다.
2. 첫 번째 `then` : 2배로 곱합니다.
3. 두 번째 `then` : 5를 뺍니다.
4. 최종 결과를 출력하세요.

> 힌트: then 에서 값을 반환(return)하면 다음 then 으로 넘어갑니다.

### 2) 예제 코드

빈칸을 채워 값이 체인을 타고 이동하도록 만드세요.

```jsx
Promise.resolve(10)
  .then(num => {
    // 1. 곱하기 2
    
  })
  .then(num => {
    // 2. 빼기 5
    
  })
  .then(console.log);
```

### 3) 결과 예시

계산된 최종 결과값이 출력됩니다.

```jsx
15
```

### 4) 정답 코드

```jsx
Promise.resolve(10) // 시작값 10
  .then(num => {
    // 1. 곱하기 2
    return num * 2; // 20을 리턴 -> 다음 then으로 전달
  })
  .then(num => {
    // 2. 빼기 5
    return num - 5; // 20 - 5 = 15를 리턴 -> 다음 then으로 전달
  })
  .then(console.log); // 전달받은 15를 즉시 출력 (Point-free)
```

**보충 설명**

| **개념** | **핵심 역할** | **상세 흐름 / 예시** |
| --- | --- | --- |
| **return의 역할** | **값의 전파** (Propagation)<br>`then`의 반환값 ➔ 다음 `then`의 입력값 | `return`한 값이 바통 터치하듯 다음 주자(파라미터)에게 전달됨 |
| **연결 고리** | **파이프라인** (Pipeline)<br>데이터가 순차적으로 가공되는 과정 | `10` (출발) ➔ `x2` (변환) ➔ **20** ➔ `-5` (변환) ➔ **15** (도착) |
| **Point-free** | **함수 자체 전달**<br>불필요한 인자 명시를 생략함 | `.then(console.log)` 방금 배운 '함수 토스' 기법 적용 |

이 흐름을 이해하면 Promise를 **'데이터 공장 컨베이어 벨트'**처럼 다룰 수 있습니다.

<div class="wda-callout wda-ci">
  · <strong>원료 투입 (<code>Promise.resolve(10)</code>)</strong> — 처음에 재료(숫자 10)를 올립니다.<br>
  · <strong>가공 단계 (<code>then</code>)</strong> — 각 단계(<code>then</code>)를 거칠 때마다 재료가 2배가 되기도 하고, 5가 빠지기도 합니다.<br>
  · <strong>최종 포장 (<code>point-free</code>)</strong> — 마지막에는 완성된 제품을 <code>console.log</code>라는 포장 기계에 툭 던져주면 끝납니다.<br><br>
  중간에 <code>return</code>을 빼먹으면 컨베이어 벨트가 끊겨서 다음 단계로 물건(데이터)이 넘어가지 않으니 주의하세요!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>12. async 함수</h2>
  <img class="wda-deco" src="/images/decoration/꽃 아이콘 (11).webp" alt="" style="width:60px;top:-14px;left:34%;opacity:.78;transform:rotate(-9deg);">
</div>

### 1) Promise를 반환하는 함수 선언

`async` 키워드를 붙이면 그 함수는 무조건 Promise를 반환하는 비동기 함수가 됩니다.

```jsx
// 1. async 키워드로 선언
async function fetchUserData(id) {
  // return한 값은 자동으로 resolve된 Promise가 됨
  return { id, name: '홍길동' };
}

// 사용: .then을 쓸 수 있음
fetchUserData(1)
  .then(user => console.log(user));
// 출력: { id: 1, name: '홍길동' }

// 2. 화살표 함수
const fetchPosts = async (userId) => {
  return ['게시물1', '게시물2'];
};

// 3. 클래스 메서드
class UserService {
  async getUser(id) {
    return { id };
  }
}
```

### 2) ƒ async 키워드

<div class="wda-callout wda-cy">
  함수를 비동기로 만드는 선언자. 이 함수는 무조건 Promise를 반환하도록 변환됩니다. (숫자나 문자를 리턴해도 Promise로 감싸집니다.)
</div>

### 3) ✅ return 값

<div class="wda-callout wda-cy">
  return 값 ➔ resolve(값)<br>
  throw 에러 ➔ reject(에러)<br>
  (new Promise를 직접 쓰지 않아도 내부적으로 변환해 줍니다.)
</div>

### 4) 다양한 형태

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-dsc"><code>async function</code> 선언</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc"><code>const fn = async () =&gt; {}</code> (화살표 함수)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-dsc">async 메서드 (클래스 내부)</div>
  </div>
</div>

**보충 설명**

`async`는 복잡한 `new Promise` 문법을 **획기적으로 줄여주는 문법적 설탕(Syntactic Sugar)**입니다.

| **구분** | **기존 방식 (Raw Promise)** | **Async 방식 (Syntactic Sugar)** |
| --- | --- | --- |
| **코드** | `function hello() { return new Promise(resolve => { resolve("Hello"); }); }` | `async function hello() { return "Hello"; }` |
| **성공 처리**(Success) | **수동**으로 `resolve("값")` 호출 | **자동**으로 `return "값"` 하면 알아서 resolve 됨 |
| **에러 처리**(Error) | **수동**으로 `reject(new Error())` 호출 | 일반 함수처럼 `throw new Error()` 하면 알아서 reject 됨 |
| **특징** | 복잡한 `new Promise` 껍데기를 직접 만들어야 함 | `async` 키워드 하나로 껍데기 생성을 자동화함 |

`async` 함수는 **문법적 설탕(Syntactic Sugar)**의 대표적인 예시입니다.

<div class="wda-callout wda-ci">
  · <strong>겉모습</strong> — 마치 평범한 동기 함수(<code>function</code>)처럼 생겼습니다.<br>
  · <strong>속마음</strong> — 자바스크립트 엔진이 내부적으로 기존 방식(<code>new Promise</code>)으로 변환해서 실행합니다.<br><br>
  즉, 개발자가 귀찮게 <code>new Promise</code>, <code>resolve</code>, <code>reject</code>를 매번 타이핑하지 않도록, 자바스크립트가 <strong>"네가 리턴만 해, 포장은 내가 해서 보낼게!"</strong>라고 도와주는 것입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>13. ⏸️ await 키워드</h2>
  <img class="wda-deco" src="/images/decoration/말풍선 아이콘 (11).webp" alt="" style="width:52px;top:-11px;right:8px;opacity:.76;transform:rotate(7deg);">
</div>

### 1) Promise가 resolve될 때까지 대기

`await`를 사용하면 비동기 코드를 마치 동기 코드(순서대로 실행되는 코드)처럼 작성할 수 있어 가독성이 압도적으로 좋아집니다.

```jsx
async function fetchAndDisplay(userId) {
  // await: Promise가 완료될 때까지 "일시 정지"
  // 완료되면 결과값(value)만 쏙 꺼내서 user 변수에 담음
  const user = await fetchUser(userId);
  console.log('사용자:', user.name);

  // 윗줄이 끝날 때까지 절대 실행되지 않음 (순서 보장)
  const posts = await fetchPosts(user.id);
  console.log('게시물:', posts.length);

  return posts;
}

// 동기 코드처럼 읽히지만
// 실제로는 비동기로 동작!

// 호출
fetchAndDisplay(1)
  .then(posts => console.log('완료!'))
  .catch(err => console.error(err));
```

### 2) ⏸️ await 동작

<div class="wda-callout wda-cy">
  Promise를 기다리는 연산자. Promise가 처리(settled)될 때까지 함수의 실행을 <strong>"일시 정지"</strong>합니다. (성공하면 결과값을 반환하고, 실패하면 에러를 던집니다.)
</div>

### 3) ⚠️ 사용 조건

<div class="wda-callout wda-cw">
  async 함수 내부에서만 사용 가능! (또는 모듈 최상위 Top-level await) 일반 함수(function) 안에서는 await를 쓸 수 없습니다.
</div>

### 4) ✔️ 장점

<div class="wda-callout wda-cs">
  동기 코드처럼 위에서 아래로 읽힘. then 체이닝보다 훨씬 직관적. (콜백이나 .then 괄호 지옥에서 완전히 해방됩니다.)
</div>

**보충 설명**

`await`는 **Promise의 껍질을 까주는 도구**라고 생각하면 이해하기 쉽습니다.

| **코드 형태** | **의미 (비유)** | **반환 타입 (Result)** | **데이터를 쓰려면?** |
| --- | --- | --- | --- |
| **const promise =** `fetchUser(1)` | **📜 약속 증서**(아직 교환 안 됨) | **Promise 객체**(껍데기) | `.then()`을 사용해서 껍데기를 까야 함 |
| **const user =** `await fetchUser(1)` | **📦 실제 데이터**(교환 완료) | **값 그 자체**(알맹이 Object) | 바로 사용 가능(`user.name`) |

이 차이를 **'택배 상자'**로 생각하면 쉽습니다.

<div class="wda-callout wda-ci">
  · <strong>Without await</strong> — 택배 상자(<code>Promise</code>)를 받은 상태입니다. 내용물을 보려면 칼로 테이프를 뜯는 과정(<code>then</code>)이 필요합니다.<br>
  · <strong>With await</strong> — 자바스크립트가 배송 오자마자 상자를 뜯어서 내용물(<code>Value</code>)만 내 손에 쥐여준 상태입니다. 우리는 바로 물건을 쓰기만 하면 됩니다.
</div>

<img src="/images/content/5-2/AsyncAwait 흐름 설명.png" alt="Main Thread가 Async Fn을 호출하면 동기 실행 후 await로 Promise를 기다리는 동안 Main에 제어권을 반환(일시정지)하고, Promise가 settled되면 Async Fn이 재개됨" style="display:block;width:100%;max-width:640px;height:auto;border-radius:8px;margin:.6rem auto 0;object-fit:contain;">
<p style="text-align:center;font-size:.85rem;font-weight:700;opacity:.8;margin:.5rem auto 1.4rem;max-width:640px;">[그림] Async/Await 흐름</p>

---

## 💻 실습 : Mini Mission - 변환 연습 (수정)

### 1) Mission

1. Promise 코드를 `async/await` 로 변환하세요.
2. `.then()` 대신 `await` 를 사용해 가독성을 높이세요.

> 힌트: fetch 도 Promise를 반환하므로 await 가 필요합니다.

### 2) 예제 코드

기존의 Promise 체이닝 방식을 사용하는 코드입니다.

```jsx
/* 변환 전 */
function getUser() {
  return fetch('/user')
    .then(res => res.json())
    .then(user => console.log(user));
}
```

### 3) 결과 예시

**출력 없음** (문법 변환에 집중하는 문제입니다)

### 4) 정답 코드

```jsx
/* 변환 후 */
async function getUser() {
  const res = await fetch('/user');
  const user = await res.json();
  console.log(user);
}
```

**보충 설명**

<div class="wda-callout wda-ci">
  이 문제의 출제 의도는 <strong>"Promise 체인을 끊고, 동기 코드처럼 평평하게 만들 수 있는가?"</strong> 입니다.<br>
  · <code>async</code> 추가 : 함수 내부에서 <code>await</code>를 쓰겠다고 선언합니다.<br>
  · <code>await</code> 두 번 사용 :<br>
  &nbsp;&nbsp;1. 서버 연결 대기 (<code>await fetch</code>)<br>
  &nbsp;&nbsp;2. 데이터 변환 대기 (<code>await res.json()</code>)<br><br>
  이렇게 바꾸면 <code>.then</code> 속에 <code>.then</code>이 꼬리에 꼬리를 무는 복잡한 구조가 사라지고, 코드가 위에서 아래로 깔끔하게 정렬됩니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>14. async/await로 리팩토링</h2>
  <img class="wda-deco" src="/images/decoration/화살표 아이콘 (11).webp" alt="" style="width:44px;top:-9px;right:34%;opacity:.76;transform:rotate(-7deg);">
</div>

### 1) Promise 체이닝 (기존 방식)

```jsx
function processUser(id) {
  // 1. 유저 정보 조회 (Promise 반환)
  return fetchUser(id)
    .then(user => {
      console.log('사용자:', user.name);
      // 2. 유저 ID로 게시물 조회 후 리턴
      return fetchPosts(user.id);
    })
    .then(posts => {
      console.log('게시물:', posts.length);
      // 3. 첫 번째 게시물의 댓글 조회 후 리턴
      return fetchComments(posts[0].id);
    })
    .then(comments => {
      console.log('댓글:', comments.length);
      // 4. 최종 댓글 목록 반환
      return comments;
    });
}
```

### 2) async/await (리팩토링 후)

```jsx
// 함수 앞에 async 키워드 추가
async function processUser(id) {
  // 1. 유저 정보 조회 (await로 결과가 올 때까지 기다림)
  const user = await fetchUser(id);
  console.log('사용자:', user.name);

  // 2. 게시물 조회 (위 코드가 끝나면 실행)
  const posts = await fetchPosts(user.id);
  console.log('게시물:', posts.length);

  // 3. 댓글 조회 (순차적으로 실행)
  const comments = await fetchComments(posts[0].id);
  console.log('댓글:', comments.length);

  // 4. 최종 결과 반환
  return comments;
}
```

### 3) 리팩토링 레시피

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">함수 선언 변경</div>
      <div class="wda-sdsc"><code>function</code> 앞에 <code>async</code> 키워드 붙이기.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">await로 풀기</div>
      <div class="wda-sdsc"><code>.then(res => ...)</code> 대신 <code>const res = await ...</code> 형태로 변경.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">결과 사용</div>
      <div class="wda-sdsc">콜백 안에서 쓰던 변수를 다음 줄에서 바로 사용.</div>
    </div>
  </div>
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  <code>async/await</code>를 사용할 때 가장 큰 장점 중 하나는 <strong>에러 처리</strong>가 쉬워진다는 점입니다.<br>
  기존 <code>Promise</code> 방식에서는 <code>.catch()</code>를 사용하여 에러를 잡아야 했지만, <code>async/await</code>에서는 일반적인 동기 코드처럼 <code>try/catch</code> 문을 사용할 수 있습니다.
</div>

```jsx
async function processUser(id) {
  try {
    // 비동기 작업 시도
    const user = await fetchUser(id);
    console.log('성공:', user.name);
  } catch (error) {
    // 에러 발생 시 이곳으로 이동
    console.log('에러 발생:', error);
  }
}
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>15. async/await 에러 처리</h2>
  <img class="wda-deco" src="/images/decoration/꽃 아이콘 (12).webp" alt="" style="width:50px;top:-11px;left:8%;opacity:.76;transform:rotate(6deg);">
</div>

### try-catch로 깔끔하게

```jsx
async function fetchData(userId) {
  try {
    // 1. await로 비동기 작업 시도 (에러 감지 범위)
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    console.log('성공:', posts);
    return posts;

  } catch (error) { 
    // 2. 에러 포착 (fetchUser, fetchPosts 에러 모두 처리)
    console.error('에러 발생:', error.message);
    
    // 3. 에러 재전파 (호출한 곳으로 에러 넘김)
    throw error; 

  } finally { 
    // 4. 마무리 작업 (성공/실패 무관하게 실행)
    console.log('작업 완료');
    // 예: 로딩 스피너 끄기 등 리소스 정리
  }
}

// 5. 함수 호출 및 결과 처리
fetchData(1)
  .then(posts => console.log('받음!'))
  .catch(err => console.log('실패!'));
```

### 핵심 구성 요소

| **구획** | **설명** | **핵심 특징** |
| --- | --- | --- |
| **(1) try 블록** | `await` 키워드를 포함하여 실행할 핵심 로직을 감싸는 영역 | 내부에서 에러가 발생하면 즉시 실행을 멈추고 `catch` 블록으로 이동함 |
| **(2) catch 블록** | 발생한 에러를 전달받아 예외 처리를 수행하는 영역 | 동기적인 에러(문법 오류)와 비동기 에러(네트워크 실패)를 모두 이곳에서 한 번에 처리 가능 |
| **(3) finally 블록** | `try`나 `catch`의 실행 결과와 상관없이 무조건 마지막에 실행되는 영역 | 성공하든 실패하든 수행해야 하는 마무리 작업(로딩 화면 끄기, 파일 닫기 등)에 유용 |

**보충 설명**

<div class="wda-callout wda-ci">
  코드 중간에 있는 <code>throw error;</code>는 매우 중요한 역할을 합니다.<br><br>
  <code>catch</code> 블록에서 에러를 잡으면 기본적으로 에러가 '해결된' 것으로 간주되어, 함수를 호출한 곳(<code>fetchData(1).then...</code>)에서는 에러가 났는지 모를 수 있습니다.<br><br>
  이때 <code>throw error</code>를 사용하면 에러를 다시 던져주어, 함수를 호출한 쪽의 <code>.catch(err => ...)</code>가 실행되게 만듭니다. 즉, <strong>"내부에서 로그는 찍었지만, 밖에도 에러가 났음을 알려줘야 해"</strong> 라고 할 때 사용합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>16. 병렬 실행 패턴</h2>
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (11).webp" alt="" style="width:58px;top:-13px;right:34%;opacity:.76;transform:rotate(-8deg);">
</div>

### 1) 순차 실행 (Sequential) - 느림

```jsx
async function sequential() {
  // 하나씩 차례대로 실행 (앞의 작업이 끝나야 다음 줄 실행)
  const user = await fetchUser(1);       // 1초 소요
  const posts = await fetchPosts(1);     // 1초 소요
  const comments = await fetchComments(1); // 1초 소요

  // 총 소요 시간: 1 + 1 + 1 = 3초
  return { user, posts, comments };
}
```

### 2) 병렬 실행 (Parallel) - 빠름

```jsx
async function parallel() {
  // 모든 요청을 동시에 시작 (Promise.all 사용)
  const [user, posts, comments] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
    fetchComments(1)
  ]);

  // 총 소요 시간: 가장 오래 걸리는 작업 시간 (1초)
  return { user, posts, comments };
}
```

### 3) 실행 방식 비교 및 사용 기준

| **구분** | **(1) 특징** | **(2) 예시** | **(3) 성능 차이 (예시)** |
| --- | --- | --- | --- |
| **순차 실행**(Sequential) | 앞의 결과가 뒤의 요청에 **반드시 필요한 경우**(데이터 의존성 O) | `user.id`를 먼저 받아와야, 그 ID로 `posts`를 조회할 수 있을 때 | 1초 + 1초 + 1초 = **3초**(단순 덧셈) |
| **병렬 실행**(Parallel) | 서로 의존성이 없는 **독립적인 요청**들인 경우(데이터 의존성 X) | 대시보드 진입 시 유저 정보, 알림 목록, 차트 데이터를 한꺼번에 불러올 때 | max(1초, 1초, 1초) = **1초**(가장 오래 걸리는 작업 기준) |

<div class="wda-callout wda-ci">
  · <strong>순차 실행</strong> — 코드는 직관적이지만, 비동기 작업이 많아질수록 전체 대기 시간이 길어지는 단점이 있습니다.<br>
  · <strong>병렬 실행</strong> — <code>Promise.all()</code>을 사용하여 성능을 최적화할 수 있습니다. 단, <strong>하나라도 실패하면 전체가 에러</strong>로 처리되므로, 부분 성공이 필요한 경우에는 <code>Promise.allSettled()</code> 사용을 고려해야 합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>17. await in loop 주의!</h2>
  <img class="wda-deco" src="/images/decoration/소품 아이콘 (13).webp" alt="" style="width:60px;top:-14px;left:36%;opacity:.78;transform:rotate(9deg);">
</div>

### 1) 잘못된 패턴 (느림)

`for`문 안에서 `await`를 쓰면, 앞의 요청이 끝날 때까지 다음 반복이 실행되지 않고 멈춥니다.

```jsx
async function fetchAllUsers(ids) {
  const users = [];

  // 하나씩 순차 실행 (비효율적)
  for (const id of ids) {
    const user = await fetchUser(id); // 여기서 멈추고 기다림
    users.push(user);
  }
  
  // 데이터가 10개면 10초 걸림 (1초 * 10)
  return users;
}
```

### 2) 올바른 패턴 (빠름)

`map`을 이용해 Promise 배열을 먼저 만들고, `Promise.all`로 한 번에 기다립니다.

```jsx
async function fetchAllUsers(ids) {
  // 1. 모든 요청 동시 시작 (기다리지 않고 Promise 배열 생성)
  const promises = ids.map(id => fetchUser(id));

  // 2. 병렬 처리된 결과 한 번에 받기
  const users = await Promise.all(promises);
  
  // 데이터가 10개여도 1초 걸림 (가장 긴 작업 시간)
  return users;
}
```

### 3) 핵심 요약

| **구분** | **설명** | **핵심 특징/예시** |
| --- | --- | --- |
| **(1) 왜 문제인가?**(Wrong Pattern) | `for`문 안의 `await`는 **루프를 돌 때마다 실행을 일시 정지**시킵니다. | **성능 저하**<br>10개의 데이터를 가져올 때(각 1초) 총 **10초** 소요 (직렬) |
| **(2) 해결법**(Best Practice) | `map`으로 **Promise 배열**을 만든 뒤, **`Promise.all`**로 한 번에 처리합니다. | **성능 향상**<br>배열 생성 시점에 요청은 이미 서버로 전송됨. 총 **1초** 소요 (병렬) |
| **(3) 예외**(Sequential Needed) | 병렬 처리가 아닌 **순차 처리가 반드시 필요한 경우**에는 `for`문을 사용합니다. | **특수 상황**<br>• **Rate Limit**: 서버 부하 조절 필요<br>• **순서 의존성**: 앞의 데이터 처리가 끝나야 함 |

초보자가 자주 하는 실수 중 하나는 배열 메서드인 **`forEach`** 안에서 `async/await`를 사용하는 것입니다.

`forEach`는 비동기 작업을 기다려주지 않고 바로 다음 코드로 넘어가 버립니다. 따라서 반복문에서 비동기 처리를 해야 한다면:

1. **병렬 처리 :** `map` + `Promise.all` (가장 권장)
2. **순차 처리 :** `for...of` 루프 (순서가 중요할 때)

이 두 가지만 기억하시면 됩니다.

**보충 설명**

`forEach` 메서드 안에서는 `async/await`가 예상대로 작동하지 않습니다.

```jsx
// ❌ 작동하지 않음
ids.forEach(async (id) => {
  await fetchUser(id); 
});
```

<div class="wda-callout wda-ci">
  <code>forEach</code>는 콜백 함수가 <code>Promise</code>를 반환해도 기다려주지 않고 그냥 넘어가 버립니다. 따라서 반복문에서 비동기 처리를 해야 한다면 <strong><code>map</code> + <code>Promise.all</code></strong> 조합을 쓰거나, 순차 처리가 꼭 필요하다면 <strong><code>for...of</code></strong> 문을 사용해야 합니다.
</div>

---

## 💻 실습 : Async/Await 변환

### 1) Mission

1. `Promise` 체이닝 코드를 `async/await`로 바꾸세요.
2. `await` 키워드를 적절히 사용하여 순차적으로 실행되게 만드세요.
3. 결과를 변수에 담아 출력하세요.

> 힌트: 함수 앞에 async를 붙여야 합니다.

### 2) 예제 코드

```jsx
/* 기존 코드 (Promise 체이닝) */
function getInfo() {
  return getUser()
    .then(user => getDetail(user.id))
    .then(console.log);
}

/* ▼ 변환하기 */
function getInfo() {
  // 여기에 작성해 보세요.
}
```

### 3) 결과 예시

```jsx
{ id: 1, detail: "상세 정보입니다..." }
```

### 4) 정답 코드

```jsx
// 함수 선언에 async 추가
async function getInfo() {
  // 1. 유저 정보 가져오기 (완료될 때까지 대기)
  const user = await getUser();
  
  // 2. 받아온 user.id로 상세 정보 조회 (순차 실행)
  const detail = await getDetail(user.id);
  
  // 3. 결과 출력
  console.log(detail);
}
```

### 5) 💡 보충 설명

이 실습의 핵심은 `.then()`으로 이어지던 흐름을 **동기 코드(위에서 아래로)**처럼 바꾸는 것입니다.

| **구분** | **기존 방식 (Promise 체이닝)** | **개선된 방식 (async/await)** |
| --- | --- | --- |
| **가독성** | 코드의 구조상 흐름을 한눈에 파악하기 어려움 | `user` 조회 → `detail` 조회라는 **실행 순서가 한눈에 보임** |
| **변수 사용** | 앞선 결과(`user`)를 다음 `.then`으로 넘겨주기 위해 **번거로운 작업 필요** | 함수 스코프(`{}`) 내 어디서든 `user` 변수를 **자유롭게 재사용 가능** |

**🔹 변수 사용의 차이**

<div class="wda-callout wda-ci">
  · <strong>기존</strong> — <code>user</code>를 세 번째 <code>.then</code>에서 쓰고 싶다면, 계속해서 <code>return</code>으로 넘겨주거나 상위 변수를 따로 만들어야 했습니다.<br>
  · <strong>개선</strong> — <code>const user = await ...</code>로 선언하면, 그 아래 줄 어디서든 <code>console.log(user)</code>처럼 편하게 쓸 수 있습니다.
</div>

**🔹 응용 (에러 처리)**

방금 배운 try-catch를 적용한다면 전체 코드를 try { ... }로 감싸고, catch (error) { ... } 블록을 추가하여 안전하게 만들 수 있습니다.

---

## 💻 실습 : Async/Await 에러 핸들링

### 1) Mission

1. **`try-catch`** 블록을 추가하세요.
2. API 호출이 실패하면 **"에러 발생!"**을 출력하고 **`null`**을 반환하세요.

> 힌트: 동기 코드의 에러 처리와 문법이 같습니다.

### 2) 예제 코드

```jsx
async function safeGetData() {
  // 여기에 try-catch를 적용해 보세요.
  
  const data = await riskyApiCall();
  return data;

  // 실패 시 처리할 로직
  // console.log("에러 발생!");
  // return null;
}
```

### 3) 결과 예시

**성공 시:**

```jsx
{ id: 1, data: "비밀 정보" }
```

**실패 시:**

```jsx
에러 발생!
null
```

### 4) 정답 코드

```jsx
async function safeGetData() {
  try {
    // 1. 에러가 발생할 수 있는 비동기 작업을 시도
    const data = await riskyApiCall();
    return data;

  } catch (error) {
    // 2. 에러 발생 시 이곳으로 점프하여 처리
    console.log("에러 발생!"); // 또는 console.error(error);
    return null;
  }
}
```

### 5) 💡 보충 설명

`async/await` 문법을 사용하면 비동기 에러 처리도 일반적인 동기 코드(`try-catch`)와 똑같이 할 수 있어 매우 직관적입니다.

| **구획** | **동작 방식** | **핵심 역할** |
| --- | --- | --- |
| **Try 블록** | `await` 키워드가 붙은 비동기 함수가 실패(Reject)하면, **즉시 실행을 멈추고 `catch` 블록으로 이동**합니다. | 에러 감지 및 흐름 제어 |
| **Catch 블록** | 에러 로그를 찍거나, `null` 같은 기본값을 반환하여 **프로그램이 멈추지 않고 계속 동작(Graceful Shutdown)**하게 만듭니다. | 에러 처리 및 앱 안정성 확보 |

**Graceful Shutdown(우아한 종료/대처)이란?**

<div class="wda-callout wda-ci">
  에러가 발생했을 때 프로그램이 '퍽' 하고 꺼지거나 하얀 화면(White Screen)이 되는 것을 막는 것을 말합니다. <code>catch</code> 블록에서 적절한 안내 문구를 띄우거나 기본 데이터(<code>null</code>, 빈 배열 <code>[]</code>)를 반환해주면, 사용자는 에러가 났더라도 앱을 계속 사용할 수 있습니다.
</div>

---

## 💻 실습 : 병렬 처리 최적화

### 1) Mission

1. 두 API(`getA`, `getB`)가 서로 의존성이 없습니다.
2. 순차 실행(`await` 두 번)을 **병렬 실행**으로 고치세요.
3. 구조 분해 할당을 사용하여 결과를 한 번에 받으세요.

> 힌트: Promise.all([ ... ])을 사용하세요.

### 2) 예제 코드

```jsx
async function loadAll() {
  // Bad: 3초 소요 (1.5s + 1.5s)
  // const a = await getA();
  // const b = await getB();

  // Good: 1.5초 소요 (여기를 채워보세요)
  const [a, b] = 

  return { a, b };
}
```

### 3) 결과 예시

```jsx
// 1.5초 후에 출력됨
{ a: "Data A", b: "Data B" }
```

### 4) 정답 코드

```jsx
async function loadAll() {
  // 1. 두 비동기 작업을 동시에 시작하고, 모두 끝날 때까지 대기
  const [a, b] = await Promise.all([
    getA(),
    getB()
  ]);

  // 2. 결과 반환
  return { a, b };
}
```

### 5) 💡 보충 설명

순차 실행은 앞사람이 일을 다 마쳐야 뒷사람이 일을 시작하는 '이어달리기'라면, 병렬 실행은 두 사람이 동시에 출발하는 '100m 달리기'와 같습니다.

| **구분** | **설명** | **핵심 효과/계산** |
| --- | --- | --- |
| **(1) 독립적인 작업** | `getA`의 결과가 `getB`를 호출하는 데 **필요 없는 경우** (상호 의존성 X) | 무조건 **병렬로 묶어서 처리**하는 것이 성능상 이득 |
| **(2) 시간 단축** | 순차적으로 실행하던 작업을 **동시에 실행**하도록 변경 | • **순차:** 1.5초 + 1.5초 = 3초<br>• **병렬:** Max(1.5초, 1.5초) = **1.5초** (50% 단축) |

<div class="wda-callout wda-ci">
  이러한 병렬 처리는 <strong><code>Promise.all([ ... ])</code></strong> 문법을 사용하여 구현합니다. 여러 개의 비동기 요청을 배열에 담아 넘기면, 자바스크립트는 이를 동시에 실행시키고 <strong>가장 늦게 끝나는 작업</strong>이 완료될 때까지 기다렸다가 결과를 한 번에 반환해 줍니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>18. Promise vs Async/Await 총정리</h2>
  <img class="wda-deco" src="/images/decoration/꽃 아이콘 (14).webp" alt="" style="width:56px;top:-12px;right:8px;opacity:.76;transform:rotate(-6deg);">
</div>

### 1) 왜 이렇게 발전했을까? (비동기 진화의 역사)

자바스크립트의 비동기 처리는 개발자들의 **"더 읽기 좋은 코드"**를 향한 열망에 따라 발전해 왔습니다.

| **단계** | **시기** | **특징** | **별명/문제점** |
| --- | --- | --- | --- |
| **1. Callback** | ES5 (~2015 이전) | 비동기 함수 안에 콜백 함수를 계속 중첩해서 사용 | **"콜백 지옥"** 🤮<br>들여쓰기가 계속 깊어짐 |
| **2. Promise** | ES6 (2015년) | `.then()`을 사용하여 콜백 깊이를 해결하고 옆으로 나열 | **"체이닝 지옥"** 😐<br>가로로는 평탄해졌지만 여전히 장황함 |
| **3. Async/Await** | ES8 (2017년) | Promise를 기반으로 하되, 문법을 동기 코드처럼 변경 | **"완벽한 가독성"** 😍<br>위에서 아래로 자연스럽게 읽힘 |

### 2) 왜 Async/Await가 나왔나요?

<div class="wda-callout wda-ci">
  Promise도 결국 로직이 복잡해지면 <code>.then()</code>이 꼬리를 물고 계속 연결되어 코드가 복잡해집니다. 개발자들은 <strong>"비동기를 그냥 동기 코드(위에서 아래로)처럼 짜고 싶다!"</strong>는 열망이 있었고, 그 결과 탄생했습니다.
</div>

### 3) 언제 무엇을 써야 할까요?

| **상황** | **추천 문법** | **이유** |
| --- | --- | --- |
| **기본적으로** | **async/await** | 가독성이 가장 좋고 로직 파악이 쉬움 (최우선 권장) |
| **병렬 처리** | **Promise.all()** | 여러 작업을 동시에 시작해서 시간을 단축해야 할 때 |
| **간단한 처리** | **Promise** | 함수가 단순히 Promise 객체를 리턴만 하거나, 로직이 매우 짧을 때 |

**보충 설명**

<div class="wda-callout wda-ci">
  <code>async/await</code>는 완전히 새로운 기술이 아닙니다. 내부적으로는 여전히 <strong>Promise</strong>를 사용하고 있습니다.<br><br>
  이를 <strong>"Syntactic Sugar(문법적 설탕)"</strong>라고 부르는데, 기존의 Promise를 사람이 먹기 좋게(쓰기 편하게) 문법으로 감싸 놓은 것이라 생각하면 됩니다.<br><br>
  따라서 <code>async/await</code>를 잘 쓰려면 Promise의 개념(pending, fulfilled, rejected)을 알고 있어야 합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🔑 핵심 정리</h2>
  <img class="wda-deco" src="/images/character/성공했어요.webp" alt="" style="width:118px;right:0;top:-100px;opacity:.9;transform:rotate(-3deg);">
</div>

### 1) 주요 개념 비교

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
    <th>상세 특징</th>
  </tr>
  <tr>
    <td><strong>Promise</strong></td>
    <td>State &amp; Chain</td>
    <td>• 상태: pending, fulfilled, rejected<br>• 연결: <code>.then()</code>으로 체이닝</td>
  </tr>
  <tr>
    <td><strong>Async/Await</strong></td>
    <td>Sync Style</td>
    <td>• <strong>Async</strong>: 동기 코드처럼 작성<br>• <strong>Await</strong>: Promise 완료 대기</td>
  </tr>
  <tr>
    <td><strong>병렬 처리</strong></td>
    <td>All &amp; Race</td>
    <td>• <strong>All</strong>: 서로 독립적인 작업을 동시에 시작하고, 모두 성공해야 다음 단계로 갈 때 적합<br>• <strong>Race</strong>: 가장 빠른 하나만 취함</td>
  </tr>
</table>

### 2) 에러 처리 방식의 변화

<table class="wda-summary-table">
  <tr>
    <th>방식</th>
    <th>처리 형태</th>
    <th>특징</th>
  </tr>
  <tr>
    <td><strong>콜백 (Callback)</strong></td>
    <td><code>if (err)</code> 반복</td>
    <td>에러 처리가 분산되어 누락 위험 높음</td>
  </tr>
  <tr>
    <td><strong>Promise</strong></td>
    <td><code>.catch()</code> 통합</td>
    <td>체인 끝에서 한 번에 에러를 잡음</td>
  </tr>
  <tr>
    <td><strong>Async</strong></td>
    <td><code>try-catch</code> 블록</td>
    <td>동기 코드와 동일한 직관적인 에러 처리</td>
  </tr>
</table>

### 3) 실무 팁 (Best Practices)

<div class="wda-callout wda-cs">
  · <strong>독립적 요청은 병렬로</strong> — 서로 의존성이 없는 데이터 호출은 <code>Promise.all</code>로 병렬 처리하면 시간을 줄일 수 있습니다. 다만 요청 수가 너무 많거나 서버 부하를 고려해야 하는 경우에는 제한적으로 병렬 처리해야 합니다.<br>
  · <strong>안전장치 필수</strong> — <code>async</code> 함수에서 직접 에러를 처리해야 한다면 <code>try-catch</code>를 사용하세요. 다만 상위 호출자가 에러를 처리하도록 넘기는 구조라면 <code>try-catch</code>를 생략할 수도 있습니다.
</div>

**보충 설명**

<div class="wda-callout wda-ci">
  이미지에 언급된 <code>Promise.race</code>는 실무에서 <strong>'타임아웃'</strong> 기능을 구현할 때 주로 사용합니다. 예를 들어, "API 요청"과 "3초 타이머"를 경주(Race)시켜서, 3초가 먼저 지나면 시간 초과 에러를 반환할 수 있습니다. 다만 <code>Promise.race</code> 자체가 API 요청을 자동으로 취소하는 것은 아니며, 실제 요청 취소가 필요하다면 <code>AbortController</code> 같은 별도의 취소 로직이 필요합니다.
</div>
