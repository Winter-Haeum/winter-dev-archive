---
title: "부록: Date 객체의 모든 것"
status: "completed"
description: "Date 객체 생성부터 조회·포맷팅·계산, 타임존과 ISO 문자열, 실무 포맷팅 함수, 상대 시간 표시, Setter 주의사항까지 정리한다."
category: "JavaScript"
section: "Async"
tags:
  - javascript
  - date
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
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
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
  <strong>생성과 조회</strong> — `new Date()`로 날짜를 만들고 `get...` 메서드로 값을 꺼내는 법을 익힙니다.<br>
  <strong>포맷팅과 계산</strong> — 날짜를 원하는 형태로 표시하고, 두 날짜의 차이를 계산하는 방법을 배웁니다.<br>
  <strong>타임존과 실무 함정</strong> — UTC/KST 차이, Setter의 자동 보정 등 실수하기 쉬운 지점을 짚습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. 날짜 생성하기 (Creation)</h2>
</div>

### 1) new Date() 기본

- **정의** : `Date` 객체는 생성하는 **그 순간의 시간**을 저장합니다.
- **활용** — 괄호 `()` 안에 아무것도 넣지 않거나, 특정 날짜 정보를 넣어서 원하는 시간을 만들 수 있습니다.

```js
// 1. 현재 시간 생성
// 아무것도 넣지 않으면 코드가 실행되는 시점의 시간이 저장됨
const now = new Date();
console.log(now); // 예: Mon Jan 01 2024 ...

// 2. 문자열로 생성 (직관적이지만 포맷에 주의 ⚠️)
// 날짜 포맷(YYYY-MM-DD)을 문자열로 넣어줌
const date1 = new Date('2024-12-25');
const date2 = new Date('2024/12/25 10:30:00');

// 3. 숫자로 생성 (년, 월, 일, 시, 분, 초)
// ⚠️ 주의: 월(Month)은 0부터 시작합니다! (0 = 1월, ... 11 = 12월)
const date3 = new Date(2024, 11, 25);
// 결과: 2024년 12월 25일 (11을 넣었지만 12월이 됨)

// 4. 타임스탬프로 생성
// 밀리초 단위의 숫자를 넣어서 생성
const date4 = new Date(1704067200000);
```

<div class="wda-callout wda-cw">
  문자열로 Date를 만들 수 있지만, 문자열 포맷은 브라우저마다 해석 차이가 생길 수 있습니다. 가장 안전한 방식은 ISO 형식인 <code>YYYY-MM-DDTHH:mm:ss</code>를 사용하거나, 연/월/일 숫자를 직접 넣는 방식입니다.
</div>

### 2) Timestamp란?

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">기준점</div>
    <div class="wda-fcard-dsc"><strong>UTC 기준</strong> 1970년 1월 1일 00:00:00부터 흐른 시간을 의미합니다.<br>한국 시간(KST)으로 보면 1970년 1월 1일 09:00:00에 해당합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">단위</div>
    <div class="wda-fcard-dsc"><strong>밀리초(ms)</strong> 단위의 정수입니다. (1초 = 1000ms)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">용도</div>
    <div class="wda-fcard-dsc">컴퓨터가 내부적으로 시간을 계산하거나 비교할 때 사용하는 <strong>절대적인 기준값</strong>입니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 월(Month)만 0부터 시작하나요?</strong> — 자바스크립트의 오래된 설계 실수 중 하나입니다.<br>
  <code>1월</code>을 만들고 싶으면 <code>0</code>, <code>12월</code>을 만들고 싶으면 <code>11</code>을 넣어야 한다는 점을 꼭 기억해야 합니다. (일, 연도 등은 우리가 아는 숫자 그대로 사용합니다.)<br><br>
  <strong>KST vs UTC</strong> — 위에서 언급된 기준 시간은 한국 표준시(KST) 기준이며, 전 세계 표준시(UTC)로는 1970년 1월 1일 00:00:00이 기준이 됩니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. 날짜 조회하기 (Getters)</h2>
</div>

### 1) 주요 메서드 (get...)

- **기능** — `get`으로 시작하는 메서드들을 사용하여 연, 월, 일, 시, 분 등의 정보를 각각 쪼개서 가져올 수 있습니다.
- **사용법** — 생성된 `Date` 객체 뒤에 점(.)을 찍고 메서드를 호출합니다.

<div class="wda-callout wda-ci">
  <code>2024-05-05T15:30:00</code>처럼 시간대 표시가 없는 문자열은 브라우저의 로컬 시간대로 해석됩니다. 전 세계 기준의 시간을 명확히 표현하려면 <code>Z</code> 또는 <code>+09:00</code> 같은 시간대 정보를 붙이는 것이 안전합니다.
</div>

```js
// 예시 날짜: 2024년 5월 5일 (일요일) 15시 30분 (시간대 표시 없음 -> 로컬 시간대로 해석됨)
const d = new Date('2024-05-05T15:30:00');

// --- [날짜 정보] ---
console.log(d.getFullYear()); // 2024 (연도)
console.log(d.getMonth());    // 4  ⚠️ 주의: 5월이지만 4가 나옴 (0부터 시작)
console.log(d.getDate());     // 5  (일 - 이건 정상적으로 1부터 시작)
console.log(d.getDay());      // 0  (요일 - 일요일은 0, 토요일은 6)

// --- [시간 정보] ---
console.log(d.getHours());    // 15 (시)
console.log(d.getMinutes());  // 30 (분)
console.log(d.getSeconds());  // 0  (초)

// --- [타임스탬프] ---
console.log(d.getTime());     // 1714... (1970년부터 흐른 밀리초)
```

### 2) 개발자를 울리는 함정 (Zero-Index)

| **구분** | **동작 방식 (Return Value)** | **주의사항 (Action Item)** |
| --- | --- | --- |
| **월(Month)** | • `getMonth()`는 **0부터 시작**합니다.<br>• (0 = 1월, ... 11 = 12월) | • 화면에 "5월"로 표시하려면 반드시 **`+1`**을 더해줘야 합니다. |
| **일(Date)** | • `getDate()`는 우리가 아는 대로 **1부터 시작**합니다. | • 월과 다르게 **그대로 사용**하면 됩니다. (반전 주의) |

### 3) 요일(Day) 처리 꿀팁

| **구분** | **핵심 내용** |
| --- | --- |
| **숫자의 의미** | • **0**: 일요일, **1**: 월요일 ... **6**: 토요일을 의미합니다. |
| **활용법** | • 숫자로 반환되므로, **한글 요일 배열**(`['일', '월', ...]`)을 만들어 인덱스로 매핑하여 사용하면 편리합니다. |

```js
// 요일 변환 꿀팁 코드
const days = ['일', '월', '화', '수', '목', '금', '토'];

// d.getDay()가 0이면 days[0]인 '일'이 출력됨
console.log(`오늘은 ${days[d.getDay()]}요일 입니다.`);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 월(Month)만 0부터 시작하나요?</strong> — 자바(Java) 언어의 초기 설계를 따라가다가 생긴 자바스크립트의 오래된 유산입니다.<br>
  이 불편함 때문에 실무에서는 <code>Moment.js</code>나 <code>Day.js</code> 같은 라이브러리를 써서 이 문제를 해결하기도 합니다.<br><br>
  <strong>Getters</strong> — 객체(Object)가 가지고 있는 비공개 데이터를 꺼내오는(Get) 메서드라는 뜻입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. 날짜 예쁘게 보여주기 (Formatting)</h2>
</div>

### 1) Pre-built Methods (기본 제공 함수)

**특징** — 복잡한 코드 없이 브라우저가 알아서 사용자의 **지역(Locale)**에 맞는 형식으로 바꿔줍니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">toLocaleDateString()</div>
    <div class="wda-fcard-dsc"><strong>날짜</strong>만 보여줍니다. (예: 2024. 5. 5.)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">toLocaleTimeString()</div>
    <div class="wda-fcard-dsc"><strong>시간</strong>만 보여줍니다. (예: 오후 3:30:00)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">toLocaleString()</div>
    <div class="wda-fcard-dsc"><strong>날짜와 시간</strong>을 모두 보여줍니다.</div>
  </div>
</div>

항상 한국 시간 기준으로 표시하고 싶다면 `ko-KR`과 `timeZone: 'Asia/Seoul'` 옵션을 명시할 수 있습니다.

```js
const date = new Date();

console.log(date.toLocaleString('ko-KR', {
  timeZone: 'Asia/Seoul'
}));
```

### 2) Custom Formatting (직접 조합하기)

**필요성** — 기본 함수가 제공하지 않는 **특정 형식**(예: `2024-05-05`)이 필요할 때 직접 년/월/일을 꺼내서 조립합니다.

<div class="wda-callout wda-cs">
  <strong>실무 팁</strong> — 실무에서는 날짜 처리가 복잡해서 <code>date-fns</code>나 <code>dayjs</code> 같은 <strong>전문 라이브러리</strong>를 많이 사용합니다.
</div>

```js
const d = new Date();

// 1. 필요한 정보 꺼내기
const year = d.getFullYear();
const month = d.getMonth() + 1; // ⚠️ 중요: 월은 0부터 시작하므로 +1 필수!
const day = d.getDate();

// 2. 포맷팅 (0 채우기)
// padStart(2, '0') -> 2자리가 안 되면 앞에 '0'을 붙여라 (5 -> 05)
// 숫자를 문자열(String)로 변환한 뒤에 사용해야 함
const format = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

console.log(format);
// 결과: "2024-05-05" (깔끔하게 0이 붙어서 나옴)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Locale(로캘)</strong> — 사용자의 언어, 국가, 시간대 설정을 의미합니다.<br>
  같은 <code>toLocaleString()</code>이라도 미국 컴퓨터에서는 <code>5/5/2024</code>로 나오고, 한국 컴퓨터에서는 <code>2024. 5. 5.</code>로 알아서 다르게 표시됩니다.<br><br>
  <strong>padStart(길이, 문자)</strong> — 문자열의 길이가 지정한 길이보다 짧으면, 앞쪽에 특정 문자를 채워주는 함수입니다.<br>
  날짜 포맷을 맞출 때(1월 -&gt; 01월) 가장 많이 쓰이는 필수 테크닉입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. 날짜 계산하기 (Calculation)</h2>
</div>

### 1) 기본 원리 (밀리초의 마법)

- **핵심** — 날짜 객체끼리 **빼기(-) 연산**을 하면, 두 날짜 사이의 차이가 **밀리초(ms)** 단위의 숫자로 반환됩니다.
- **비교** — 크기 비교 연산자(`>`, `<`)를 사용하여 어느 날짜가 더 미래인지, 과거인지 판단할 수 있습니다.

```js
const start = new Date('2024-01-01');
const end = new Date('2024-01-02');

// 1. 차이 구하기 (ms 단위)
// 날짜끼리 빼면 자동으로 숫자로 변환되어 계산됨
const diff = end - start;
console.log(diff); // 86400000 (딱 하루치 밀리초)

// 2. 일(Day) 단위로 변환
// 밀리초를 (1000 * 60 * 60 * 24)로 나누면 '일'이 됨
const diffDay = diff / (1000 * 60 * 60 * 24);
console.log(diffDay); // 1 (1일 차이)

// 3. 시간 비교
if (end > start) {
  console.log('end가 더 미래입니다.');
}
```

### 2) D-Day 계산 공식

**공식**: `(목표일 - 오늘) / 하루ms = 남은 일수`

**원리**: 두 날짜의 차이(ms)를 구한 뒤, 하루에 해당하는 밀리초 값으로 나누어 며칠이 남았는지 계산합니다.

### 3) 자주 쓰는 단위 (ms)

날짜 계산을 위해 꼭 외워두거나 적어두면 좋은 상수값들입니다.

| **단위** | **계산식** | **값 (ms)** |
| --- | --- | --- |
| **1초** | 1000 | **1,000** |
| **1분** | 1000 * 60 | **60,000** |
| **1시간** | 1000 * 60 * 60 | **3,600,000** |
| **1일** | 1000 * 60 * 60 * 24 | **86,400,000** |

<div class="wda-callout wda-cw">
  단순한 날짜 차이는 <code>1000 * 60 * 60 * 24</code>로 계산할 수 있습니다. 다만 해외 시간대나 썸머타임이 포함되면 하루가 항상 정확히 24시간이 아닐 수 있으므로, 실무에서는 <code>dayjs</code>/<code>date-fns</code> 같은 라이브러리를 사용하는 것이 안전합니다.
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>소수점 처리</strong> — 계산 결과가 딱 떨어지지 않고 <code>1.5일</code>(하루 반) 처럼 나올 수 있습니다. D-Day를 구할 때는 상황에 따라 <code>Math.floor()</code>(내림), <code>Math.ceil()</code>(올림), <code>Math.round()</code>(반올림)를 적절히 섞어서 정수로 만들어줘야 깔끔합니다.<br><br>
  <strong>라이브러리 추천</strong> — 실무에서는 이 계산이 귀찮고 복잡(윤년, 썸머타임 등)하기 때문에 <code>dayjs</code> 같은 라이브러리를 쓰면 <code>day1.diff(day2, 'day')</code> 한 줄로 끝낼 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. 타임존과 ISO (Timezone)</h2>
</div>

### 1) UTC vs KST

| **구분** | **설명** |
| --- | --- |
| **UTC (Coordinated Universal Time)** | 국제 표준시입니다. (영국 그리니치 천문대 기준) |
| **KST (Korea Standard Time)** | 한국 표준시입니다. UTC보다 **9시간** 빠릅니다. (UTC + 9) |
| **기본 동작** | 자바스크립트의 `new Date()`는 브라우저의 **로컬 시간대(KST)**를 따르지만, `toISOString()` 메서드는 무조건 **국제 표준시(UTC)** 기준으로 변환됩니다. |

### 2) 서버 전송 시 주의사항 (시간이 바뀐다?)

<div class="wda-callout wda-cw">
  <strong>현상</strong> — 한국에서 "5월 5일 0시"를 ISO 문자열로 변환하면, 9시간이 빠진 "5월 4일 15시"로 바뀝니다.<br>
  <strong>이유</strong> — 전 세계 공통 시간(UTC)으로 맞추기 위해 자동으로 9시간을 빼버리기 때문입니다.
</div>

```js
const d = new Date('2024-05-05T00:00:00'); // 한국 시간(KST) 00:00

// 1. 그냥 출력 (브라우저 로컬)
// 내 컴퓨터 시간대(KST)에 맞춰서 보여줌
console.log(d.toString());
// 결과: "Sun May 05 ... (Korean Standard Time)"

// 2. 서버 전송용 (ISO - UTC)
// 🚨 주의: 9시간이 빠져서 날짜가 하루 전으로 바뀜!
console.log(d.toISOString());
// 결과: "2024-05-04T15:00:00.000Z"
```

### 3) KST 시간 유지하기 (Offset 보정 꿀팁)

서버에 보낼 때도 한국 시간의 숫자("05-05 00:00")를 그대로 유지하고 싶다면, 강제로 시차만큼 시간을 더해주는 편법(Offset 보정)을 사용해야 합니다.

<div class="wda-callout wda-cw">
  이 offset 보정은 <strong>'KST의 날짜/시간 숫자를 ISO 문자열처럼 보이게 만들기 위한 표시용 편법'</strong>에 가깝습니다. 실제 서버에 시간을 저장할 때는 보통 원래 시간을 UTC 기준 ISO 문자열로 저장하고, 화면에 보여줄 때 사용자의 시간대로 변환하는 방식이 더 안전합니다.
</div>

```js
// 💡 꿀팁: KST 숫자를 유지하고 싶다면? (Offset 보정)

// 1. 시차(분)를 밀리초로 변환 (한국은 -540분)
const offset = d.getTimezoneOffset() * 60000;

// 2. 현재 시간에서 시차를 뺌 (실제로는 9시간을 더하는 효과)
const dateOffset = new Date(d.getTime() - offset);

// 3. 변환
console.log(dateOffset.toISOString());
// 결과: "2024-05-05T00:00:00.000Z" (원하던 숫자가 나옴!)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Z의 의미</strong> — <code>toISOString()</code> 결과 맨 뒤에 붙는 <code>Z</code>는 <strong>"Zulu Time"</strong>의 약자로, 이 시간이 UTC(국제 표준시) 기준임을 나타내는 표시입니다.<br><br>
  <strong>왜 이렇게 복잡한가요?</strong> — 서버는 전 세계 사용자가 접속하기 때문에, 특정 국가 시간(KST)이 아니라 절대적인 기준 시간(UTC)으로 저장하는 것이 원칙이기 때문입니다.<br>
  프론트엔드 개발자가 이 차이를 이해하지 못하면 "어? 왜 날짜가 하루 줄었지?" 하며 당황하게 됩니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. 실전 포맷팅 함수 (Custom Formatting)</h2>
</div>

### 1) 표준 포맷 (YYYY-MM-DD HH:mm:ss)

- **용도** : 데이터베이스 저장용이나 로그 기록, 관리자 페이지 등에서 가장 많이 쓰이는 표준 형식입니다.
- **핵심** : `padStart(2, '0')`를 사용하여 한 자리 숫자(예: 5월)를 두 자리(05월)로 맞춰 줄을 세웁니다.

```js
// YYYY-MM-DD HH:mm:ss 형식으로 변환
function formatDate(date) {
  const year = date.getFullYear();
  // 월은 0부터 시작하므로 +1 필수
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}

console.log(formatDate(new Date()));
// 예: "2024-05-05 14:30:05" 형식으로 출력됨
```

### 2) 한글 포맷 (YYYY년 MM월 DD일 오전/오후)

- **용도** : 사용자에게 보여주는 친절한 날짜 형식입니다. (블로그 글 작성일, 댓글 시간 등)
- **핵심** : 24시간제를 **12시간제(오전/오후)**로 변환하는 로직이 들어있습니다.

```js
// YYYY년 MM월 DD일 오전/오후 00시 00분
function formatKorean(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 오전/오후 계산 로직
  const hour = date.getHours();
  const ampm = hour >= 12 ? '오후' : '오전';

  // 12시간제로 변환 (0시는 12시로 표기하기 위해 || 12 사용)
  const hour12 = hour % 12 || 12;
  const min = date.getMinutes();

  return `${year}년 ${month}월 ${day}일 ${ampm} ${hour12}시 ${min}분`;
}

console.log(formatKorean(new Date()));
// 결과: "2024년 5월 5일 오후 2시 30분"
```

### 💡 12시간제 변환 원리 (심화)

**핵심 연산자 (`||`)** — 자바스크립트에서 `OR` 연산자는 앞의 값이 **거짓(0, null, false)**일 때만 뒤의 값을 선택합니다.

| **입력 (시)** | **계산 (`hour % 12`)** | **결과** |
| --- | --- | --- |
| **13시** | `13 % 12` = **1** (참) | 앞에 있는 `1`을 그대로 사용 (오후 1시) |
| **12시** | `12 % 12` = **0** (거짓) | 뒤에 있는 **12**를 선택 (오후 12시) |
| **0시(자정)** | `0 % 12` = **0** (거짓) | 뒤에 있는 **12**를 선택 (오전 12시) |

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. 실무 활용: 몇 분 전? (Relative Time)</h2>
</div>

### 1) 알고리즘 원리 (Logic)

- **핵심** : 현재 시간(`now`)과 작성된 시간(`date`)의 **차이(diff)**를 구하는 것이 시작입니다.
- **단위 변환** : 밀리초(ms) 단위의 차이를 **초 → 분 → 시간 → 일** 순서로 나눕니다.
- **조건문 순서** — **작은 단위부터** 걸러내는 것이 중요합니다. (초가 60보다 작으면 "방금 전", 아니면 분을 체크...)

### 2) 구현 코드

```js
function timeAgo(date) {
  const now = new Date();
  const diff = now - date; // 차이 구하기 (ms)

  // 미래 시간이 들어올 수도 있으므로 음수인 경우를 먼저 처리
  if (diff < 0) return '미래 시간';

  // 각 단위별로 변환 (내림 처리)
  const sec = Math.floor(diff / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const day = Math.floor(hour / 24);

  // 작은 단위부터 차례대로 비교
  if (sec < 60) return '방금 전';
  if (min < 60) return `${min}분 전`;
  if (hour < 24) return `${hour}시간 전`;
  if (day < 7) return `${day}일 전`;

  // 7일 이상 지나면 일반 날짜로 표시
  return date.toLocaleDateString();
}

// 사용 예시
console.log(timeAgo(new Date(Date.now() - 1000 * 60 * 5)));
// 결과: "5분 전" (현재 시간에서 5분을 뺀 값을 넣음)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>`Math.floor()`</strong> — 소수점을 버리고 정수만 남기는 함수입니다. (예: 5.9분 전 → 5분 전)<br><br>
  <strong>순서의 중요성</strong> — 만약 <code>day</code>부터 검사하면, 1시간 전인 게시물도 <code>0일 전</code>으로 처리될 수 있습니다.<br>
  반드시 <strong>"방금 전(초)"</strong>부터 물어봐야 정확한 표현이 나옵니다.<br><br>
  <strong>라이브러리</strong> — 실무에서는 다국어 지원(약 100개 언어)이나 더 정교한 처리를 위해 <code>timeago.js</code> 같은 라이브러리를 쓰기도 하지만, 간단한 기능은 위 코드로 충분합니다.<br><br>
  <strong>미래 시간 처리</strong> — 실무에서는 미래 날짜가 들어올 가능성도 있으므로 <code>diff &lt; 0</code>인 경우를 따로 처리하는 것이 안전합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. 날짜 수정(Setter)과 주의사항</h2>
</div>

### 1) Date 수정하기 (Setters)

**기본 동작**: `setFullYear()`, `setMonth()`, `setDate()` 등 `set`으로 시작하는 메서드를 사용하여 날짜의 특정 부분을 수정할 수 있습니다.

<div class="wda-callout wda-cw">
  🚨 <strong>자동 보정(Auto-correction) 주의</strong> — 날짜를 수정할 때, 해당 월에 존재하지 않는 날짜(예: 2월 31일)가 되면 에러가 나는 것이 아니라 <strong>자동으로 다음 달로 넘어갑니다.</strong>
</div>

```js
const d = new Date(2024, 0, 31); // 2024년 1월 31일

// 2월로 변경 시도 (1 = 2월)
d.setMonth(1);

// 기대값: 2월 31일 (존재하지 않음)
// 실제값: 2월 29일(윤년) + 2일 더감 -> 3월 2일
console.log(d.toLocaleDateString());
// 결과: "2024. 3. 2." (???) -> 개발자가 의도치 않은 날짜가 됨!
```

### 2) 필수 주의사항 Top 3 (단기 속성)

개발자들이 가장 많이 실수하는 3가지 포인트입니다.

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl">1. 월(Month)은 0부터</div>
    <div class="wda-fcard-dsc"><code>setMonth(1)</code>은 2월을 의미합니다. (0=1월, 11=12월)</div>
  </div>
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl">2. 변경 가능 (Mutable)</div>
    <div class="wda-fcard-dsc"><code>Date</code> 객체는 수정하면 <strong>원본 자체가 바뀝니다.</strong><br><code>const newDate = d.setHours(0)</code> 처럼 쓰면 <code>newDate</code>에는 날짜 객체가 아니라 <strong>숫자(타임스탬프)</strong>가 반환되므로 주의해야 합니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl">3. iOS/Safari 호환성</div>
    <div class="wda-fcard-dsc">아이폰(iOS)이나 사파리에서는 <code>'2024-01-01 10:00'</code> 처럼 <strong>하이픈(-)과 공백</strong>이 섞인 문자열을 인식 못 해 <code>Invalid Date</code>가 뜰 수 있습니다.<br><strong>해결책</strong>: 슬래시(<code>/</code>)를 사용하여 <code>'2024/01/01'</code> 형식을 쓰는 것이 가장 안전합니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>안전한 날짜 수정법</strong> — 월을 변경할 때는 <strong>일(Date)</strong>을 먼저 1일로 맞추고 월을 바꾸거나, 마지막 날짜를 계산해서 넘겨주는 방어 코드가 필요합니다.<br><br>
  <strong>크로스 브라우징</strong> — 크롬에서는 잘 되던 날짜 코드가 아이폰에서만 안 된다면, 날짜 문자열 포맷 문제를 먼저 의심해볼 수 있습니다. 특히 <code>2024-01-01 10:00</code>처럼 하이픈과 공백이 섞인 형식은 피하고, 표준 ISO 형식인 <code>2024-01-01T10:00:00</code>처럼 작성하는 것이 안전합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🔑 핵심 정리</h2>
</div>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>생성/조회</strong></td>
    <td>• `new Date()`로 생성, `get...` 메서드로 조회<br>• <strong>월(Month)만 0부터 시작</strong> (getMonth/setMonth 모두 +1 필요)</td>
  </tr>
  <tr>
    <td><strong>포맷팅</strong></td>
    <td>• `toLocaleString()` 계열: 브라우저가 알아서 지역별 형식으로 변환<br>• 직접 조합 시 `padStart(2, '0')`로 0 채우기</td>
  </tr>
  <tr>
    <td><strong>계산/타임존</strong></td>
    <td>• 날짜끼리 빼면 밀리초(ms) 차이 반환<br>• `toISOString()`은 UTC 기준이라 KST와 9시간 차이 발생</td>
  </tr>
  <tr>
    <td><strong>주의사항</strong></td>
    <td>• Setter는 원본을 직접 바꾸는 <strong>Mutable</strong> 객체<br>• 자동 보정으로 존재하지 않는 날짜가 다음 달로 넘어감<br>• iOS/Safari는 하이픈(-) 날짜 문자열에서 `Invalid Date` 발생 가능</td>
  </tr>
</table>
