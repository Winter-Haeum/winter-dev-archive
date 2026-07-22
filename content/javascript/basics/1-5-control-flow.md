---
title: "1-5 조건문과 반복문으로 흐름 제어하기"
status: "completed"
description: "if/switch/삼항 조건문과 for/while 반복문, break/continue로 코드 흐름을 제어하는 방법을 정리한다."
category: "JavaScript"
section: "Basics"
tags:
  - javascript
  - basics
  - control-flow
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
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 16px;margin:.8rem 0 1.6rem;font-size:.83rem;line-height:1.75}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-fcard-list{list-style:none;padding:0;margin:.4rem 0 0;font-size:.89rem;line-height:1.65}
.wda-fcard-list li::before{content:"· "}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(245,158,11,.15);color:#f59e0b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
/* 핵심 요약 전용 복습 UI — JavaScript 1-2 기준과 동일. 색은 background/border/accent에만
   쓰고, 본문 텍스트는 카드 색과 무관하게 진회색(#2C2840)·strong은 #1F1B2E로 고정한다. */
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
  • <strong>조건문</strong> — if, switch, 삼항 연산자로 분기 처리를 구현합니다.<br>
  • <strong>반복문</strong> — for, while, do-while로 반복 작업을 수행합니다.<br>
  • <strong>반복문 심화</strong> — for...in, for...of의 차이를 구분하고 활용합니다.<br>
  • <strong>흐름 제어</strong> — break, continue로 반복을 제어합니다.
</div>

---

## 1. 제어문이란? (Control Flow)

**정의**: 코드의 실행 흐름(순서)을 개발자가 의도한 대로 제어하는 문장입니다.

**📌 개념 정리**

<div class="wda-callout wda-ci">
  프로그래밍의 모든 코드는 기본적으로 <strong>위에서 아래로</strong> 실행됩니다. 제어문은 이 흐름을 <strong>분기</strong>하거나 <strong>반복</strong>시키는 역할을 합니다.
</div>

### 📜 프로그래밍의 3대 핵심 흐름

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">➡️</div>
    <div class="wda-fcard-ttl">1) 순차 (Sequence)</div>
    <div class="wda-fcard-dsc">위에서 아래로 한 줄씩 실행 — 기본값</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔀</div>
    <div class="wda-fcard-ttl">2) 분기 (Branch)</div>
    <div class="wda-fcard-dsc">조건에 따라 다른 경로로 이동</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔄</div>
    <div class="wda-fcard-ttl">3) 반복 (Loop)</div>
    <div class="wda-fcard-dsc">같은 코드를 여러 번 실행</div>
  </div>
</div>

**📌 순차 (Sequence)**

위에서 아래로 한 줄씩 실행 (기본값)

```jsx
let a = 1;
let b = 2;
let c = a + b; 
// 막힘없이 순서대로 쭉 실행됨
```

**📌 분기 (Branch)**

조건에 따라 다른 경로로 이동

```jsx
if (score >= 60) {
  console.log("합격"); // 조건이 맞으면 여기
} else {
  console.log("불합격"); // 아니면 저기
}
```

**📌 반복 (Loop)**

같은 코드를 여러 번 실행

```jsx
for (let i = 0; i < 5; i++) {
  console.log(i); 
}
// 같은 작업을 5번 반복 수행 (0, 1, 2, 3, 4)
```

---

## 2. if 문 구조 (Structure)

조건이 **참(True)**일 때만 특정 코드를 실행하도록 흐름을 제어하는 가장 기본적인 조건문입니다.

**📌 구조 이해하기 (수도코드)**

조건문은 위에서부터 아래로 순서대로 검사하며 내려옵니다.

```jsx
// 논리 흐름 예시
만약 ( 조건이 참이라면 ) {
  // 이 코드를 실행해라
  실행();
} 
아니고 만약 ( 다른조건이 참이라면 ) {
  // 저 코드를 실행해라
  실행2();
} 
그것도 아니면 {
  // 위의 조건들이 다 거짓일 때 실행되는 마지막 보루
  탈출();
}
```

**📝 기본 문법 (Syntax)**

조건에 따라 서로 다른 등급을 매기는 예제입니다.

```jsx
let score = 85;

if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  // 85는 90보다 작고 80보다 크므로 여기서 걸림!
  console.log("B등급"); 
} else if (score >= 70) {
  console.log("C등급");
} else {
  console.log("D등급");
}

// 결과: "B등급"
```

**⚠️ 조건식 작성 요령 (Best Practices)**

깔끔하고 명확한 코드를 위해 지켜야 할 관례입니다.

| **구분** | **코드 예시** | **설명** |
| --- | --- | --- |
| **권장 (Good)** | `if (isLoggedIn)` | 변수 이름 자체로 참/거짓 의미가 명확할 때 |
|  | `if (items.length > 0)` | 배열의 길이 등은 명시적으로 비교 |
|  | `if (user !== null)` | 빈 값 체크는 확실하게 |
| **비권장 (Bad)** | `if (isLoggedIn == true)` | 불필요한 중복 (`== true` 생략 가능) |
| **참고 (Note)** | `if (items.length)` | 실무에서도 자주 사용되지만, 초보자 단계에서는 `if (items.length > 0)`처럼 명시적으로 쓰면 더 이해하기 쉽습니다 |
| **부정 조건** | `if (!isActive)` | `!` 연산자로 "아니라면"을 표현 (`false`일 때 실행) |

**핵심 동작 원리**

<div class="wda-callout wda-cs">
  • "선착순 1명만 실행됩니다."<br>
  • 조건은 위에서부터 순서대로 검사합니다. 첫 번째로 <code>true</code>인 블록 하나만 실행되고, 나머지 <code>else if</code>나 <code>else</code>는 건너뜁니다.
</div>

---

## 💻 실습 : 성적 판별기

**🎯 미션 목표 (Mission)**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">① score 변수 설정</div>
    <div class="wda-fcard-dsc"><code>score</code> 변수에 0~100 사이의 점수를 할당합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">② 90점 이상 → "A"</div>
    <div class="wda-fcard-dsc">90점 이상이면 "A"를 출력합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">③ 80점 이상 → "B"</div>
    <div class="wda-fcard-dsc">80점 이상이면 "B"를 출력합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">④ 나머지 → "재수강"</div>
    <div class="wda-fcard-dsc">나머지 모든 점수는 "재수강"을 출력합니다.</div>
  </div>
</div>

**📝 작성 코드 (Solution)**

`score`가 65점일 때의 실행 예시입니다.

```jsx
let score = 65; // 테스트할 점수

if (score >= 90) {
   // 1차 관문: 90점 이상인가?
   console.log("A");
} else if (score >= 80) {
   // 2차 관문: (90점 미만이면서) 80점 이상인가?
   console.log("B");
} else {
   // 마지막 관문: 위 조건에 다 해당하지 않는가?
   console.log("재수강");
}
```

**✅ 실행 결과 및 해석**

<div class="wda-callout wda-ci">
  • <strong>결과</strong>: <code>"재수강"</code> 출력<br>
  • 첫 번째 조건 <code>65 >= 90</code>은 <strong>거짓(False)</strong>이므로 통과합니다.<br>
  • 두 번째 조건 <code>65 >= 80</code>도 <strong>거짓(False)</strong>이므로 통과합니다.<br>
  • 결국 모든 조건에 걸리지 않아 <code>else</code> 블록이 실행되어 "재수강"이 출력됩니다.
</div>

---

## 3. switch-case 문

하나의 변수(값)를 여러 개의 케이스(case)와 비교하여, 딱 맞는 경우를 찾아 실행하는 분기문입니다.

**📌 구조 이해하기 (수도코드)**

특정 **값(Value)**에 딱 맞는 라벨(case)로 점프하는 방식입니다.

```jsx
스위치 ( 이_값을_봐주세요 ) {
  케이스 "값1":
    // 값1과 일치하면 실행
    실행1();
    멈춰(break); // 여기서 탈출! (중요)

  케이스 "값2":
    // 값2와 일치하면 실행
    실행2();
    멈춰(break);

  기본(default):
    // 일치하는 게 없을 때 실행 (else와 비슷)
    기본실행();
}
```

**📝 기본 문법 (Syntax)**

요일 번호에 따라 요일명을 출력하는 예제입니다.

```jsx
let day = 3;

switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break; // 여기서 탈출!
  default:
    console.log("기타");
}

// 결과: "수요일"
```

**⚠️ 핵심 주의사항: break와 Fall-through**

`break`가 없으면 멈추지 않고 다음 케이스까지 뚫고 지나가는 현상(**Fall-through**)이 발생합니다.

```jsx
let grade = "A";

// break가 없으면 아래로 계속 흘러내림
switch (grade) {
  case "A":
  case "B":
    // A나 B일 경우 모두 여기서 처리됨
    console.log("합격"); 
    break; // 여기서 멈춤
  case "C":
    console.log("재시험");
    break;
  default:
    console.log("불합격");
}
```

Fall-through 활용: 위 예시처럼 A와 B를 묶어서 처리하고 싶을 때는 의도적으로 break를 생략하기도 합니다.

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  • <strong>일치 비교(<code>===</code>)</strong>: switch 문은 내부적으로 <strong>엄격한 비교(<code>===</code>)</strong>를 사용합니다. 값뿐만 아니라 <strong>데이터 타입</strong>까지 같아야 매칭됩니다. (예: 문자열 <code>"1"</code>과 숫자 <code>1</code>은 서로 다름)<br>
  • <strong>점프(Jump)</strong>: <code>if</code> 문이 위에서부터 순서대로 검사한다면, <code>switch</code> 문은 해당 케이스로 바로 점프하여 실행합니다.<br>
  • 더 정확히 말하면, <code>switch</code> 문은 주어진 값과 일치하는 <code>case</code>를 찾고, 일치한 <code>case</code>부터 실행을 시작합니다.
</div>

---

## 💻 실습 : 요일별 코디

**🎯 미션: 오늘의 옷차림 (Mission)**

날씨에 맞춰 준비물을 챙기는 로직을 작성하세요.

1. `weather` 변수에 날씨 정보("맑음", "비", "눈")를 할당합니다.
2. `"맑음"`이면 `"선글라스"`를 출력합니다.
3. `"비"`면 `"우산"`을 출력합니다.
4. 그 외(**기타**)의 경우에는 `"그냥 나가"`를 출력합니다.

**📝 작성 코드 (Solution)**

`weather`가 "비"일 때의 작성 예시입니다.

```jsx
let weather = "비";

switch (weather) {
  case "맑음":
    console.log("선글라스");
    break; // 필수! 없으면 아래까지 실행됨
  case "비":
    console.log("우산");
    break; // 여기서 멈춤
  default:
    console.log("그냥 나가");
    // default는 맨 마지막이라 break 생략 가능
}
```

**✅ 실행 결과 및 해석**

<div class="wda-callout wda-ci">
  • <strong>결과</strong>: <code>"우산"</code> 출력<br>
  • 변수 <code>weather</code>의 값인 <code>"비"</code>와 일치하는 <code>case "비":</code>를 찾아 이동한 후, <code>console.log("우산")</code>을 실행하고 <code>break</code>를 만나 switch 문을 빠져나옵니다.
</div>

**✅ 실습 포인트**

<div class="wda-callout wda-cw">
  • <strong>Default의 역할</strong>: <code>if</code> 문의 <code>else</code>처럼, 어떤 케이스에도 해당하지 않을 때 실행되는 기본 경로입니다.<br>
  • <strong>Break 누락 주의</strong>: 만약 <code>case "비"</code>에 <code>break</code>를 안 쓰면, <code>"그냥 나가"</code>까지 같이 출력되는 참사가 일어납니다.
</div>

---

## 4. 삼항 연산자 (Ternary Operator)

간단한 양자택일(true/false) 상황을 한 줄로 깔끔하게 처리하는 연산자입니다.

**📌 구조 이해하기 (수도코드)**

조건에 따라 왼쪽(참) 혹은 오른쪽(거짓) 값 중 하나를 선택합니다.

```jsx
// 공식
조건이 참이면 ? 이 값 : 아니면 저 값;

// 예시: 성인 판별
const ageStatus = (age >= 18) ? "성인" : "미성년자";
```

**🆚 if 문과 비교 (Why Use It?)**

코드를 획기적으로 줄여주어 가독성을 높입니다.

```jsx
let age = 20;

// [Before] if-else 사용 (5줄)
let status1;
if (age >= 18) {
  status1 = "성인";
} else {
  status1 = "미성년자";
}

// [After] 삼항 연산자 사용 (1줄)
let status2 = age >= 18 ? "성인" : "미성년자";
```

**💼 실무 활용 패턴 (Best Practices)**

프론트엔드 개발(React, Vue 등)에서 조건부 렌더링을 할 때 필수적으로 사용됩니다.

```jsx
// 1. 템플릿/JSX에서 메시지 보여줄 때
let message = isLoggedIn ? "환영합니다!" : "로그인해주세요";

// 2. 기본값 설정 (간단한 경우)
let name = inputName ? inputName : "익명";
```

**⚠️ 주의사항: 중첩 금지**

삼항 연산자를 여러 번 겹쳐 쓰면(중첩) 코드를 읽기가 매우 어려워집니다.

```jsx
// ❌ 나쁜 예 (중첩 사용)
// 가독성을 해치므로 복잡한 조건은 if-else를 쓰세요.
let grade = score >= 90 ? "A" 
          : score >= 80 ? "B" 
          : score >= 70 ? "C" : "D";
```

**📝 요약 메모**

<div class="wda-callout wda-cs">
  • "단순한 조건은 한 줄로!" — <code>조건 ? 참 : 거짓</code> 형태를 기억하세요.<br>
  • 단, 조건이 복잡해지거나 <code>else if</code>가 필요한 상황이라면 과감하게 일반 <code>if</code> 문을 사용하는 것이 좋습니다.
</div>

---

## 💻 실습 : 짝수 홀수 판별

**🎯 미션: 홀짝 게임 (Mission)**

숫자를 판별하여 결과를 출력하는 로직을 작성하세요.

1. `number` 변수에 임의의 숫자를 할당합니다.
2. 숫자가 **짝수**면 `"짝수"`를 저장합니다.
3. 숫자가 **홀수**면 `"홀수"`를 저장합니다.
4. **힌트**: 짝수는 2로 나눴을 때 나머지가 0입니다. (`number % 2 === 0`)

**📝 작성 코드 (Solution)**

`number`가 7일 때의 작성 예시입니다.

```jsx
let number = 7;

// [공식] 조건 ? 참(짝수) : 거짓(홀수)
let result = number % 2 === 0 ? "짝수" : "홀수";

console.log(result);
```

**✅ 실행 결과 및 해석**

<div class="wda-callout wda-ci">
  • <strong>결과</strong>: <code>"홀수"</code> 출력<br>
  • <code>7 % 2</code>를 계산하면 나머지 <strong>1</strong>이 나옵니다.<br>
  • <code>1 === 0</code>은 <strong>거짓(False)</strong>이므로, 콜론(<code>:</code>) 뒤에 있는 <code>"홀수"</code>가 선택됩니다.
</div>

**✅ 실습 포인트**

<div class="wda-callout wda-cs">
  • <strong>나머지 연산자(%) 활용</strong>: 프로그래밍에서 홀짝 판별, 배수 찾기 등을 할 때 가장 많이 쓰이는 연산자입니다.<br>
  • <strong>코드 단축</strong>: 이 로직을 <code>if-else</code>로 짰다면 5줄이 필요했겠지만, 삼항 연산자를 사용해 <strong>단 1줄</strong>로 끝냈습니다.
</div>

---

## 5. for 문 구조 (for Loop)

가장 많이 쓰이는 반복문으로, 반복 횟수가 정해져 있을 때 주로 사용합니다.

**📌 구조 이해하기 (수도코드)**

**시작점, 조건, 증감**이 한 줄에 모두 모여 있어 흐름을 파악하기 좋습니다.

```jsx
// 공식
반복해라 ( 1.시작점; 2.언제까지?; 4.증감 ) {
  // 3. 실행할 코드
  (빙글빙글 돕니다)
}
```

**📝 기본 문법 (Basic Count)**

가장 기초적인 카운트 예제입니다.

```jsx
// 0부터 4까지 5번 반복
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 출력: 0, 1, 2, 3, 4
```

**📍 실행 순서 (매우 중요)**

위 코드의 작동 순서입니다. **1번은 처음에 딱 한 번만 실행된다**는 점을 꼭 기억하세요.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">초기화 (<code>let i = 0</code>)</div>
      <div class="wda-sdsc">변수 설정 — 최초 1회만 실행됩니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">조건 확인 (<code>i &lt; 5</code>)</div>
      <div class="wda-sdsc">조건이 참(<code>true</code>)이면 실행하고, 거짓(<code>false</code>)이면 반복을 종료합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">코드 실행 (<code>console.log</code>)</div>
      <div class="wda-sdsc">조건이 참일 경우 중괄호 안의 내용을 실행합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">증감 (<code>i++</code>)</div>
      <div class="wda-sdsc">변수 값을 변경합니다. (여기선 1 증가)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">5</div>
    <div class="wda-sbody">
      <div class="wda-sttl">반복</div>
      <div class="wda-sdsc">다시 <strong>2번(조건 확인)</strong>으로 돌아가서 루프를 돕니다.</div>
    </div>
  </div>
</div>

**🧪 다양한 활용 예시**

**🧪 배열 순회 (인덱스 필요할 때)**

```jsx
let fruits = ["사과", "바나나", "포도"];

// 배열의 길이(length)만큼 반복
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // i는 0, 1, 2로 변함
}
```

**🧪 누적 합 구하기**

```jsx
// 1부터 100까지 더하기
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum); // 5050
```

**📝 요약 메모**

<div class="wda-callout wda-cs">
  • <strong>한 줄 요약</strong>: <code>초기화</code> → <code>조건</code> → <code>실행</code> → <code>증감</code> 순으로 뱅글뱅글 돕니다.<br>
  • <strong>팁</strong>: 단순 배열 순회에는 <code>for...of</code>가 더 간결하지만, <strong>몇 번째인지(인덱스)가 필요할 때</strong>는 이 기본 <code>for</code> 문을 사용해야 합니다.
</div>

---

## 💻 실습 : 구구단 2단 만들기

**🎯 미션: 2단 출력 (Mission)**

1. **반복 구간 설정**: 1부터 9까지 숫자가 변하도록 `for` 문을 작성하세요.
2. **출력 포맷**: `console.log`와 템플릿 리터럴을 사용하여 **"2 x 숫자 = 결과"** 형식으로 출력하세요.
3. **힌트**: 계산식은 `2 * i` 입니다.

**📝 작성 코드 (Solution)**

`i`가 1부터 9까지 1씩 증가하는 것이 핵심입니다.

```jsx
// i는 1부터 시작, 9이하까지, 1씩 증가
for (let i = 1; i <= 9; i++) {
  // 템플릿 리터럴을 사용해 계산 결과까지 한 번에 출력
  console.log(`2 x ${i} = ${2 * i}`);
}
```

**✅ 실행 결과**

```jsx
2 x 1 = 2
2 x 2 = 4
... (중략) ...
2 x 9 = 18
```

**✅ 실습 포인트**

<div class="wda-callout wda-cs">
  • <strong>초기값 설정</strong>: 배열 순회와 달리 구구단은 보통 1부터 곱하기 때문에 <code>let i = 1</code>로 시작해야 합니다.<br>
  • <strong>조건식 설정</strong>: 9까지 곱해야 하므로 <code>i &lt; 9</code>가 아니라 <strong><code>i &lt;= 9</code></strong> (9 포함)여야 합니다.<br>
  • <strong>템플릿 리터럴</strong>: <code>${2 * i}</code>처럼 중괄호 안에서 바로 수학 계산을 할 수 있어 코드가 매우 간결해집니다.
</div>

---

## 6. for...in 반복문 (객체 열거)

객체가 가진 **열쇠(Key)**를 하나씩 꺼내서 순회할 때 사용하는, **객체 전용** 반복문입니다.

**📌 구조 이해하기 (수도코드)**

객체 꾸러미 안에서 속성 이름(Key)을 하나씩 뽑아내는 방식입니다.

```jsx
// 공식
꺼내라 ( 열쇠 하나 in 객체꾸러미 ) {
  // 모든 열쇠를 다 꺼낼 때까지 반복
  실행(열쇠);
}
```

**📝 기본 문법 (Syntax)**

`key` 변수에는 속성 이름("name", "age" 등)이 들어오며, 값은 `객체[key]`로 접근합니다.

```jsx
let user = {
  name: "철수",
  age: 25,
  city: "서울"
};

// 객체의 key를 순회
for (let key in user) {
  // key: "name", "age", "city"
  // user[key]: "철수", 25, "서울"
  console.log(key, user[key]);
}
```

**⚠️ 배열에는 사용 금지 (비권장)**

배열도 객체의 일종이라 `for...in`이 동작은 하지만, 치명적인 단점이 있어 실무에서는 절대 사용하지 않습니다.

```jsx
let arr = ["a", "b", "c"];

// ❌ 나쁜 예: 배열에 for...in 사용
for (let index in arr) {
  console.log(index, arr[index]);
}

// 문제점:
// 1. index가 숫자가 아닌 "문자열"로 나옵니다. ("0", "1", "2")
// 2. 순서가 보장되지 않습니다. (뒤죽박죽 나올 수 있음)
// 3. 내가 만들지 않은 숨겨진 속성까지 다 튀어나옵니다.
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <code>for...in</code>은 원래 <strong>객체의 key를 순회하는 용도</strong>입니다.<br>
  배열에 사용하면 인덱스 key를 순회하고, 추가된 enumerable 속성까지 나올 수 있어 배열 값 순회용으로 부적합합니다.<br>
  배열에는 <strong><code>for...of</code></strong>나 일반 <code>for</code> 문을 사용하세요.
</div>

**📝 요약 메모**

<div class="wda-callout wda-cs">
  <strong>"객체에는 in, 배열에는 of"</strong><br>
  • <strong><code>for...in</code></strong>: 객체의 <strong>Key(속성명)</strong>를 뽑을 때 사용합니다.<br>
  • <strong>배열</strong>: 배열을 순회할 때는 <strong><code>for...of</code></strong>나 일반 <code>for</code> 문을 사용하세요.
</div>

---

## 💻 실습 : 내 정보 출력 (Object Loop)

**🎯 미션: 자기소개 (Mission)**

1. **객체 생성**: `me`라는 변수에 본인의 정보(이름, 나이, 거주지 등)를 담은 객체를 만드세요.
2. **순회**: `for...in` 문을 사용하여 객체 안의 모든 속성을 훑으세요.
3. **출력**: 템플릿 리터럴을 활용하여 `"Key: Value"` 형태(예: `name: 철수`)로 출력하세요.

**📝 작성 코드 (Solution)**

핵심은 `me[key]`로 값에 접근하는 것입니다.

```jsx
let me = {
  name: "철수", // Key: "name", Value: "철수"
  age: 20,      // Key: "age", Value: 20
  city: "서울"  // Key: "city", Value: "서울"
};

// key 변수에는 "name", "age", "city"가 차례대로 들어옵니다.
for (let key in me) {
  // 대괄호 표기법을 써야 변수에 담긴 문자열로 값을 찾을 수 있습니다.
  console.log(`${key}: ${me[key]}`);
}
```

**✅ 실행 결과**

```jsx
name: 철수
age: 20
city: 서울
```

**✅ 실습 포인트**

<div class="wda-callout wda-ci">
  • <strong>대괄호 표기법 필수</strong>: <code>me.key</code>라고 쓰면 컴퓨터는 진짜로 <code>key</code>라는 이름의 속성을 찾으려다 <code>undefined</code>를 반환합니다.<br>
  • 변수 안에 들어있는 문자열("name" 등)로 값을 찾으려면 반드시 <strong><code>me[key]</code></strong> 형태를 써야 합니다.
</div>

---

## 7. for...of 반복문 (배열 순회)

**배열, 문자열, Map, Set처럼 순회 가능한 값(iterable)**에 들어있는 **실제 값(내용물)**을 하나씩 꺼내 쓸 때 사용하는 반복문입니다.

**📌 구조 이해하기 (수도코드)**

복잡한 인덱스(`i`, `i++`) 신경 쓸 필요 없이, 그냥 보따리 안의 내용물을 순서대로 하나씩 꺼냅니다.

```jsx
// 공식
꺼내라 ( 내용물 하나 of 보따리 ) {
  // 보따리가 빌 때까지 반복
  실행(내용물);
}
```

**📝 기본 문법 (Syntax)**

배열 안의 값을 직접 변수에 담아줍니다.

```jsx
let fruits = ["사과", "바나나", "포도"];

// item 변수에 "사과", "바나나", "포도"가 차례대로 들어옵니다.
for (let item of fruits) {
  console.log(item);
}

// 결과:
// 사과
// 바나나
// 포도
```

**🆚 반복문 3대장**

| **구분** | **for...of (추천 👍)** | **for...in** | **기본 for 문** |
| --- | --- | --- | --- |
| **사용 대상** | **배열 (Array)** | **객체 (Object)** | 배열 (Array) |
| **꺼내는 값** | **알맹이 (Value)** | **열쇠 (Key)** | 인덱스 (i) |
| **비유** | "사물함 속 물건 꺼내기" | "사물함 번호 확인하기" | "0번부터 순서대로 세기" |
| **언제 쓰나요?** | **그냥 데이터가 필요할 때** | **객체 속성을 볼 때** | **몇 번째인지(순서) 필요할 때** |

**💼 실무 팁**

<div class="wda-callout wda-cs">
  • <strong>배열</strong>인데 내용물만 필요하다? 👉 <strong><code>for...of</code></strong> (가장 많이 씀)<br>
  • <strong>객체</strong>의 속성을 꺼내야 한다? 👉 <strong><code>for...in</code></strong><br>
  • <strong>배열</strong>인데 '몇 번째'인지 알아야 한다? 👉 <strong>기본 <code>for</code></strong>
</div>

---

## 💻 실습 : 장바구니 목록

**🎯 미션: 쇼핑 리스트 (Mission)**

1. **배열 생성**: `cart`라는 변수에 사고 싶은 물건 3개(문자열)를 담으세요.
2. **순회**: `for...of` 문을 사용하여 장바구니 안의 모든 물건을 훑으세요.
3. **출력**: 템플릿 리터럴을 활용하여 `"장바구니: 물건이름"` 형식으로 출력하세요.

**📝 작성 코드 (Solution)**

`item` 변수에 배열 안의 내용물이 하나씩 순서대로 들어옵니다.

```jsx
// 1. 장바구니 배열 만들기
let cart = ["사과", "우유", "계란"];

// 2. 배열 순회 (내용물 바로 꺼내기)
for (let item of cart) {
  // item 변수에는 "사과", "우유", "계란"이 차례대로 들어옴
  console.log(`장바구니: ${item}`);
}
```

**✅ 실행 결과**

```jsx
장바구니: 사과
장바구니: 우유
장바구니: 계란
```

**✅ 실습 포인트**

<div class="wda-callout wda-ci">
  • <strong>간결함</strong>: 만약 기본 <code>for</code> 문을 썼다면 <code>cart[i]</code>처럼 인덱스로 접근해야 했겠지만, <code>for...of</code>를 쓰면 <code>item</code>으로 바로 값을 쓸 수 있어 훨씬 직관적입니다.<br>
  • <strong>iterable 대상</strong>: 이 문법은 배열(Array)이나 문자열(String)처럼 순서가 있는 데이터(Iterable)에만 사용할 수 있습니다.
</div>

---

## 🏟️ for...in vs for...of (완벽 비교)

**🆚 한눈에 보는 차이점 (Comparison)**

| **구분** | **for...in** | **for...of** |
| --- | --- | --- |
| **대상** | **객체 (Object)** | **배열 (Array)** (이터러블) |
| **반환값** | **Key (속성 이름)** | **Value (실제 값)** |
| **비유** | "명단에서 이름(Key) 부르기" | "상자에서 물건(Value) 꺼내기" |

**🧪 코드 예시로 확인하기**

**📌 for...in (객체 → Key 순회)**

```jsx
let obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key); // "a", "b", "c" (속성 이름이 나옴)
}

// ⚠️ 배열에 쓰면? (비권장)
let arr = [10, 20, 30];
for (let index in arr) {
  console.log(index); // "0", "1", "2" (인덱스가 문자열로 나옴!)
}
```

**📌 for...of (배열 → Value 순회)**

```jsx
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value); // 10, 20, 30 (실제 값이 나옴)
}

// ⚠️ 객체에 쓰면? (에러)
let obj = { a: 1, b: 2, c: 3 };
for (let value of obj) {
  // TypeError! 객체는 순회 가능한(Iterable) 녀석이 아닙니다.
}
```

**🧠 초압축 암기법**

<div class="wda-callout wda-ci">
  헷갈릴 땐 단어의 스펠링을 보세요.<br>
  • <strong>for...in</strong> = key <strong>in</strong> object (객체 안의 key를 꺼낸다)<br>
  • <strong>for...of</strong> = <strong>"Of the Array" (배열의)</strong>라고 기억하면 쉽습니다.
</div>

---

## 8. while / do-while 구조

조건을 **언제** 검사하느냐에 따라 실행 흐름이 달라지는 두 반복문을 비교합니다.

**🆚 구조 비교**

가장 큰 차이점은 **"검문소가 어디에 있는가"**입니다.

| **구분** | **while (선검사)** | **do-while (후검사)** |
| --- | --- | --- |
| **방식** | 검사 먼저 하고 → 통과하면 실행 | 일단 한 번 실행하고 → 나중에 검사 |
| **특징** | 조건이 처음부터 거짓이면 **아예 실행 안 됨** | 조건이 거짓이어도 **무조건 1번은 실행됨** |
| **코드** | `while (조건) { 실행 }` | `do { 실행 } while (조건);` |

**📌 while 반복문 (기본)**

조건식만 두고 반복하며, 반복 횟수가 명확하지 않을 때 주로 사용합니다.

```jsx
let count = 0;

// 조건이 true일 때만 진입 (처음부터 false면 실행 X)
while (count < 3) {
  console.log(count);
  count++; // ⚠️ 필수! 없으면 무한 루프
}
// 결과: 0, 1, 2
```

**📌 do-while 반복문 (무조건 1회)**

코드 블록을 **최소 한 번은 무조건 실행**시켜야 할 때 사용합니다.

```jsx
let i = 10;

do {
  console.log(i); // 무조건 1회 실행
  i++;
} while (i < 5); // 검사 결과 거짓(False)이어도 이미 1번은 실행됨

// 결과: 10
// (만약 while문이었다면 조건이 안 맞아서 아무것도 출력되지 않음)
```

**🧭 반복문 선택 기준표**

반복문을 사용할 때, 상황에 맞춰 골라 쓰세요.

| **구분** | **선택 기준 (When)** | **실무 예시 (Example)** |
| --- | --- | --- |
| **for 문** | 반복 **횟수**가 명확할 때 | "배열의 길이만큼 돌려라"<br>"딱 10번만 반복해라" |
| **while 문** | 반복 횟수가 **불명확**할 때 (조건이 중요할 때) | "사용자가 '종료' 버튼을 누를 때까지"<br>"파일의 끝이 나올 때까지" |
| **do-while 문** | **선 실행, 후 검사**가 필요할 때 (무조건 1번은 실행) | "입력을 먼저 받고(do) → 올바른 값인지 검사(while)"<br>"게임 일단 시작하고 → 죽었는지 확인" |

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <strong>⚠️ 무한 루프 (Infinite Loop)</strong><br>
  <code>while</code> 문과 <code>do-while</code> 문 모두 탈출 조건(<code>count++</code> 등)을 갱신하지 않으면, 브라우저가 멈춰버리는 무한 루프에 빠지게 되므로 각별히 주의해야 합니다.
</div>

---

## 💻 실습 : 카운트다운

**🎯 미션: 발사! (Mission)**

1. **초기화**: `count` 변수를 만들고 숫자 **5**를 넣으세요.
2. **조건**: `count`가 **0보다 큰 동안** 반복하세요.
3. **실행**: 숫자를 출력하고, **1씩 감소**(`count--`)시키세요.
4. **종료**: 반복이 끝나면 **"발사!"**를 출력하세요.

**📝 작성 코드 (Solution)**

`while` 문은 시작점과 증감식이 분리되어 있어, **감소시키는 코드**를 빼먹지 않도록 주의해야 합니다.

```jsx
let count = 5; // 1. 시작점

// 2. 조건 (0보다 클 때만 반복)
while (count > 0) {
  console.log(count);
  count--; // 3. 증감 (⚠️ 중요: 이거 없으면 무한루프!)
}

// 4. 종료 후 실행
console.log("발사!");
```

**✅ 실행 결과**

```jsx
5
4
3
2
1
발사!
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  만약 <code>count--</code>를 작성하지 않으면, <code>count</code>는 계속 5로 남아 조건(<code>5 > 0</code>)이 영원히 참이 됩니다.<br>
  이 경우 프로그램이 멈추지 않고 계속 돌아가는 <strong>무한 루프(Infinite Loop)</strong>에 빠지게 됩니다.
</div>

---

## 9. break / continue 구조 (흐름 제어)

반복문의 흐름을 개발자가 원하는 대로 **중단**하거나 **건너뛸 때** 사용합니다.

**📌 구조 이해하기 (수도코드)**

화살표의 흐름을 잘 보세요. **어디로 점프하는지**가 다릅니다.

**📌 break (탈출)**

반복문 밖으로 완전히 나갑니다.

```jsx
반복해라 ( ... ) {
  // ...
  break;  // ──────> 밖으로 탈출!
  // (여기 아래는 절대 실행 안 됨)
}
// ──────> 여기서부터 다시 계속
```

**📌 continue (건너뛰기)**

이번만 건너뛰고, 다시 위(반복문 시작)로 올라갑니다.

```jsx
반복해라 ( ... ) {
  // ...
  continue; // ──┐ 이번 회차만 패스! (위로 점프)
  // (실행 X)    │ 
               │
} // <─────────┘
```

**🆚 차이점 비교 (Comparison)**

| **구분** | **break (탈출)** | **continue (건너뛰기)** |
| --- | --- | --- |
| **동작** | 반복문을 **완전히 박살내고** 밖으로 나갑니다. | **이번 회차만 패스**하고 다시 반복하러 올라갑니다. |
| **비유** | "퇴근해!" (집으로 감) | "잠깐 쉬고 다음 일 해!" (다시 일하러 감) |

**📝 기본 문법 및 예시**

**📌 break (중단)**

원하는 조건을 만나면 즉시 종료합니다.

```jsx
// 0부터 9까지 반복하려고 했으나...
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // 5가 되는 순간 반복문 종료!
  }
  console.log(i);
}
// 출력: 0, 1, 2, 3, 4 (5부터는 안 나옴)
```

**📌 continue (건너뛰기)**

특정 조건만 쏙 빼고 실행하고 싶을 때 사용합니다.

```jsx
// 0부터 4까지 반복
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // 2일 때는 밑에 코드를 무시하고 위(증감)로 점프!
  }
  console.log(i);
}
// 출력: 0, 1, 3, 4 (2만 빠짐)
```

**💼 실무 활용: 짝수만 출력하기**

`continue`를 활용하면 불필요한 연산을 줄일 수 있습니다.

```jsx
for (let i = 1; i <= 10; i++) {
  // 홀수면(나머지가 0이 아니면) 건너뛰어라
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i); // 짝수만 여기까지 도달함
}
// 출력: 2, 4, 6, 8, 10
```

**📝 요약 메모**

<div class="wda-callout wda-cs">
  • <strong>break</strong>: 반복문 <strong>완전 종료</strong> (The End)<br>
  • <strong>continue</strong>: <strong>현재 반복만 건너뛰고</strong> 계속 진행 (Next)
</div>

---

## 💻 실습 : 숫자 찾기 (break &amp; continue)

**🎯 미션: 보물 찾기 (Mission)**

1. **반복**: 1부터 10까지 숫자를 하나씩 확인합니다.
2. **종료 조건**: 숫자가 **7**이면 **"찾았다!"**를 출력하고 반복을 완전히 **종료(break)**합니다.
3. **건너뛰기**: 숫자가 **짝수**면 아무것도 하지 말고 다음 숫자로 **넘어갑니다(continue)**.
4. **출력**: 위 조건에 걸리지 않는 숫자(홀수)만 출력합니다.

**📝 작성 코드 (Solution)**

`break`는 반복문을 **파괴**하고, `continue`는 이번 턴만 **스킵**합니다.

```jsx
// 1부터 10까지 반복
for (let i = 1; i <= 10; i++) {
  
  // 1. 종료 조건 (7을 만나면 멈춤)
  if (i === 7) {
    console.log("찾았다!");
    break; // 루프 완전 탈출! (8, 9, 10은 실행 안 됨)
  }

  // 2. 건너뛰기 (짝수면 스킵)
  if (i % 2 === 0) {
    continue; // 밑에 있는 console.log 무시하고 다음 숫자로 점프!
  }

  // 3. 출력 (홀수일 때만 여기까지 내려옴)
  console.log(i);
}
```

**✅ 실행 결과 및 해석**

```jsx
1
3
5
찾았다!
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>짝수(2, 4, 6)</strong>: <code>continue</code>를 만나서 출력이 생략되었습니다.<br>
  • <strong>7</strong>: "찾았다!" 출력 후 <code>break</code>를 만나서 <strong>8, 9, 10</strong>은 아예 검사하지도 않고 프로그램이 끝났습니다.
</div>

**✅ 실습 포인트**

<div class="wda-callout wda-cs">
  • <strong>break</strong>: "여기까지만 하고 끝내!" (반복문 파괴)<br>
  • <strong>continue</strong>: "이번만 패스하고 다음 거 진행해!" (해당 회차만 스킵)
</div>

---

## 🧭 제어문 선택 가이드

제어문(조건문+반복문)의 방대한 내용을 실무 관점에서 압축했습니다. 시험 직전이나 코딩할 때 이 페이지를 참고하세요.

**1. 조건문 결정 공식 (Decision Making)**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🌿</div>
    <div class="wda-fcard-ttl">복잡한 범위/논리 (&&, ||)</div>
    <div class="wda-fcard-dsc">👉 <strong>if 문</strong> — 가장 기본, 범용성 1등</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🎯</div>
    <div class="wda-fcard-ttl">딱 떨어지는 값 (===)</div>
    <div class="wda-fcard-dsc">👉 <strong>switch 문</strong> — 가독성 좋음, 값 매칭</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⚡</div>
    <div class="wda-fcard-ttl">단순 양자택일 (값 대입)</div>
    <div class="wda-fcard-dsc">👉 <strong>삼항 연산자</strong> — <code>조건 ? 참 : 거짓</code></div>
  </div>
</div>

**2. 반복문 선택 가이드 (Looping)**

| 구분 | **for...of 👍** | **for...in** | **기본 for 문** | **while** |
| --- | --- | --- | --- | --- |
| **대상** | **배열 (Array)** | **객체 (Object)** | 배열 (Array) | 조건 (Condition) |
| **추출** | **알맹이 (Value)** | **열쇠 (Key)** | 인덱스 (i) | — |
| **비유** | 사물함 물건 꺼내기 | 사물함 번호 확인 | 순서대로 세기 | 될 때까지 하기 |
| **용도** | 데이터 전체 순회 | 속성 확인할 때 | 순서(i) 중요할 때 | 횟수 모를 때 |

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  • <strong>배열</strong>에는 <code>for...in</code>보다 <code>for...of</code>나 기본 <code>for</code>문을 사용하세요. <code>for...in</code>은 객체의 key 순회용이라, 배열에 쓰면 인덱스 key와 추가된 enumerable 속성까지 나올 수 있습니다.<br>
  • <strong>while</strong> 문은 내부에 <code>count--</code> 같은 <strong>탈출 코드</strong>가 없으면 브라우저가 멈추는 <strong>무한 루프</strong>에 빠집니다.
</div>

**3. 흐름 제어 (Control Flow)**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🚪</div>
    <div class="wda-fcard-ttl">break (완전 탈출)</div>
    <div class="wda-fcard-dsc">"여기까지! <strong>퇴근</strong>!" — 반복문을 완전히 <strong>종료</strong>하고 밖으로 나갑니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⏭️</div>
    <div class="wda-fcard-ttl">continue (건너뛰기)</div>
    <div class="wda-fcard-dsc">"이번만 쉬고 <strong>다음</strong> 거!" — 현재 회차만 <strong>스킵</strong>하고, 다음 반복을 계속 진행합니다.</div>
  </div>
</div>

**4. 실무 코드 작성 팁**

<div class="wda-callout wda-cs">
  • <strong>명확한 조건</strong>: <code>if (items.length)</code> 대신 <code>if (items.length > 0)</code>처럼 명시적으로 작성하세요.<br>
  • <strong>객체 접근</strong>: <code>for...in</code> 사용 시 <code>obj.key</code>가 아니라 <strong><code>obj[key]</code></strong> (대괄호)를 써야 값을 꺼낼 수 있습니다.<br>
  • <strong>Switch 탈출</strong>: <code>case</code>마다 <strong><code>break</code></strong>를 넣었는지 꼭 확인하세요. (없으면 밑으로 다 실행됨)
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li><strong>if 문</strong>: 조건이 참(True)일 때 코드 블록을 실행하며, 위에서 아래로 검사해 첫 true 하나만 실행한다 — <code>==</code> 대신 <code>===</code>를 쓰고, <code>if (items.length > 0)</code>처럼 명시적으로 작성한다.</li>
    <li><strong>switch 문</strong>: 딱 떨어지는 값(<code>===</code>)과 비교할 때 사용하며 해당 case로 바로 점프해 실행한다 — 각 case마다 <strong>break가 필수</strong>이며, 없으면 Fall-through가 발생한다.</li>
    <li><strong>삼항 연산자</strong>: <code>조건 ? 참 : 거짓</code> 형태로 한 줄 처리하는 단순 양자택일용이다 — 중첩 삼항은 금지하고, 복잡하면 if 문으로 바꾼다.</li>
    <li><strong>for 문</strong>: 반복 횟수가 명확할 때 초기화 → 조건 → 실행 → 증감 순으로 동작한다 — 인덱스가 필요할 때 사용하며 형태는 <code>let i = 0; i &lt; arr.length; i++</code>다.</li>
    <li><strong>for...in</strong>: 객체의 Key(속성명)를 순회하는 <strong>객체 전용</strong> 반복문이다(배열에 사용하면 안 됨) — <code>obj[key]</code> 대괄호 표기법이 필수다.</li>
    <li><strong>for...of</strong>: 배열의 Value(실제 값)를 인덱스 없이 순회하며, <strong>배열 같은 iterable 순회에 가장 많이 쓴다</strong> — 일반 객체는 iterable이 아니므로 바로 사용하면 TypeError가 발생한다.</li>
    <li><strong>while / do-while</strong>: while은 선검사(처음부터 false면 실행 안 됨), do-while은 후검사(무조건 1회 실행)다 — 탈출 조건 갱신이 필수이며, 없으면 <strong>무한 루프</strong>에 빠진다.</li>
    <li><strong>break / continue</strong>: break는 반복문을 완전 종료(퇴근)하고, continue는 현재 회차만 건너뛰고(이번만 패스) 계속 진행한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: switch에서 break가 없어도 알아서 멈춘다?</div>
    <div class="wda-mistake-right">정답: break가 없으면 <strong>Fall-through</strong>가 발생해 아래 case까지 전부 실행된다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: for...in을 배열에 써도 상관없다?</div>
    <div class="wda-mistake-right">정답: for...in은 <strong>객체 Key 순회 전용</strong>이다 — 배열에는 for...of나 기본 for 문을 써야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: for...of는 일반 객체에도 그냥 쓸 수 있다?</div>
    <div class="wda-mistake-right">정답: 일반 객체는 iterable이 아니므로 for...of에 바로 사용하면 <strong>TypeError</strong>가 발생한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: while과 do-while은 완전히 같다?</div>
    <div class="wda-mistake-right">정답: while은 <strong>선검사</strong>(처음부터 false면 실행 안 됨), do-while은 <strong>후검사</strong>(무조건 1회 실행)다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 조건문 선택</div>
    <div class="wda-formula-block-body">
      <code>if = 범용</code><br>
      <code>switch = 값 매칭(===)</code><br>
      <code>삼항 = 단순 대입</code>
    </div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 반복문 대상</div>
    <div class="wda-formula-block-body">
      <code>for...in = 객체 Key</code><br>
      <code>for...of = 배열 Value</code>
    </div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 흐름 제어</div>
    <div class="wda-formula-block-body">
      <code>break = 완전 종료</code><br>
      <code>continue = 이번만 건너뛰기</code>
    </div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">if 문은 언제, 어떻게 실행되나?</div>
    <div class="wda-flip-back">조건이 참(True)일 때 실행되며, 위에서 아래로 검사해 첫 true 하나만 실행한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">switch에서 break를 빼먹으면?</div>
    <div class="wda-flip-back">Fall-through가 발생해 아래 case까지 전부 실행된다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">삼항 연산자를 중첩해도 되나?</div>
    <div class="wda-flip-back">안 된다 — 복잡해지면 if 문으로 바꾼다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">기본 for 문은 언제 쓰나?</div>
    <div class="wda-flip-back">인덱스가 필요하고 반복 횟수가 명확할 때, 초기화→조건→실행→증감 순으로 쓴다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">for...in과 for...of의 차이는?</div>
    <div class="wda-flip-back">for...in은 객체의 Key를, for...of는 배열의 Value를 순회한다 — for...of를 일반 객체에 쓰면 TypeError가 난다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">while과 do-while의 차이는?</div>
    <div class="wda-flip-back">while은 선검사(처음부터 false면 미실행), do-while은 후검사(무조건 1회 실행)다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">break와 continue의 차이는?</div>
    <div class="wda-flip-back">break는 반복문을 완전 종료하고, continue는 현재 회차만 건너뛰고 계속 진행한다.</div>
  </div>
</div>
