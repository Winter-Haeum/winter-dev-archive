---
title: "3-2 Math 객체"
status: "completed"
description: "Math.max/min, round/ceil/floor, abs, pow/sqrt, random 등 코딩테스트에서 자주 쓰는 Math 객체 메서드와 활용 패턴을 익힙니다."
category: "Coding Test"
section: "Coding Test"
tags:
  - coding-test
  - math
  - javascript
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
.wda-flow{display:flex;flex-wrap:wrap;gap:4px;margin:.8rem 0 1.6rem;align-items:center}
.wda-fnode{flex:1 1 90px;border:1px solid rgba(128,128,128,.18);border-radius:8px;padding:10px 12px;text-align:center;min-width:80px}
.wda-fnode-ico{font-size:1.1rem;margin-bottom:4px}
.wda-fnode-ttl{font-size:.88rem;font-weight:700;margin-bottom:3px}
.wda-fnode-dsc{font-size:.82rem;line-height:1.55}
.wda-farrow{color:rgba(139,92,246,.45);font-size:1.1rem;flex-shrink:0;padding:0 2px;align-self:center}
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
• <strong>최대/최소</strong> — Math.max, Math.min으로 값을 비교합니다.<br>
• <strong>반올림/올림/내림</strong> — round, ceil, floor로 소수점을 처리합니다.<br>
• <strong>거듭제곱/제곱근</strong> — pow, sqrt, abs로 수학 연산을 합니다.<br>
• <strong>랜덤</strong> — Math.random으로 무작위 값을 만듭니다.
</div>

---

## 1. Math 객체란?

수학 연산을 돕는 정적(Static) 객체입니다.

**🧳 수학 도구 상자**

Math는 생성자가 없는 도구 모음이에요. 인스턴스를 만들지 않고, 도구를 바로 꺼내 씁니다!

- 인스턴스 생성 불가: `new Math()` (X)
- 바로 사용 가능: `Math.max()` (O)

**⚡ 핵심 특징 3가지**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📌</div>
    <div class="wda-fcard-ttl">정적 속성/메서드</div>
    <div class="wda-fcard-dsc">모든 기능이 static입니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📦</div>
    <div class="wda-fcard-ttl">내장 객체 (Built-in)</div>
    <div class="wda-fcard-dsc">별도 import 없이 어디서나 사용 가능!</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔢</div>
    <div class="wda-fcard-ttl">Number 자료형 처리</div>
    <div class="wda-fcard-dsc">입력은 Number로 자동 변환됩니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>정적(Static)의 의미</strong> — 클래스를 통해 붕어빵(인스턴스)을 찍어낼 필요 없이, Math라는 이름 자체에 마침표를 찍고 바로 기능을 사용하는 방식을 말합니다.<br>
  <strong>자동 형변환</strong> — 만약 Math.max("10", 20)과 같이 문자열을 넣어도, Math 객체가 내부적으로 숫자로 바꿔서 계산해 줍니다.
</div>

---

## 2. 주요 메서드 미리보기

코딩 테스트에 자주 나오는 핵심 메서드들을 한눈에 확인해 보세요.

**🗂️ 메서드 분류표**

| 분류 | 메서드 |
|---|---|
| 최대/최소 | max, min |
| 반올림 | round, ceil, floor, trunc |
| 절대값 | abs |
| 거듭제곱 | pow, sqrt |
| 랜덤 | random |
| 상수 | PI |

**⚖️ Math vs Number**

두 객체는 숫자를 다루지만 용도가 다릅니다.

- Math (수학 연산/계산) — Math.floor(), Math.random() 등 계산 도구
- Number (숫자 타입 변환/검사) — Number.isInteger(), Number.parseInt() 등 형식 관리

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>trunc</strong> — 분류표에 추가된 trunc는 소수점 아래를 단순히 버리고 정수 부분만 남기는 메서드입니다.<br>
  <strong>PI</strong> — 원주율($\pi$) 값을 나타내는 상수로, 약 3.14159...의 값을 가집니다.
</div>

---

## 3. Math.max & Math.min

최대값과 최소값 찾기

**⬆️ Math.max**

여러 인자 중 가장 큰 값을 반환합니다.

```js
// 여러 값 중 최대값
Math.max(1, 5, 3);    // 5
Math.max(-10, -5, -1); // -1
Math.max(10);         // 10

// 값이 없으면
Math.max();           // -Infinity
```

**⬇️ Math.min**

여러 인자 중 가장 작은 값을 반환합니다.

```js
// 여러 값 중 최소값
Math.min(1, 5, 3);    // 1
Math.min(-10, -5, -1); // -10
Math.min(10);         // 10

// 값이 없으면
Math.min();           // Infinity
```

**⚠️ 배열에서 사용하기**

Math.max와 Math.min은 배열을 인자로 받지 못하므로 **스프레드 연산자(...)**를 사용해야 합니다.

```js
const arr = [1, 5, 3, 9, 2];

// 이건 안 됨!
Math.max(arr);    // NaN

// 스프레드 연산자 사용!
Math.max(...arr); // 9
Math.min(...arr); // 1
```

**💡 코테 활용**

범위를 제한하거나 배열의 값을 비교할 때 자주 쓰이는 패턴입니다.

```js
// 배열의 최대값
const max = Math.max(...arr);

// 배열의 최소값
const min = Math.min(...arr);

// 범위 제한 (클램핑)
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Infinity / -Infinity</strong> — 인자 없이 호출했을 때 max가 가장 작은 값(-Infinity)을, min이 가장 큰 값(Infinity)을 반환하는 이유는<br>
  어떤 숫자와 비교해도 자기 자신이 바뀌기 위한 수학적 초기값 설정입니다.<br>
  <strong>클램핑(Clamping)</strong> — 특정 값이 지정된 최소값과 최대값 사이를 벗어나지 않도록 가두는 기법입니다.<br>
  예를 들어 캐릭터의 체력이 0 미만으로 내려가거나 100을 초과하지 않게 할 때 유용합니다.
</div>

---

## 4. 반올림 메서드들

소수점 처리하기: round, ceil, floor, trunc

**🆚 각 메서드 비교**

```js
const num = 3.7;

Math.round(num); // 4 (반올림)
Math.ceil(num);  // 4 (올림)
Math.floor(num); // 3 (내림)
Math.trunc(num); // 3 (버림)
```

**⚠️ 음수일 때 차이**

음수에서는 floor와 trunc의 동작이 달라지므로 주의해야 합니다.

```js
const num = -3.7;

Math.round(num); // -4 (반올림)
Math.ceil(num);  // -3 (올림=작은쪽)
Math.floor(num); // -4 (내림=큰쪽)
Math.trunc(num); // -3 (그냥 버림)
```

**🗂️ 비교표**

| 값 | round | ceil | floor | trunc |
|---|---|---|---|---|
| 3.2 | 3 | 4 | 3 | 3 |
| 3.7 | 4 | 4 | 3 | 3 |
| -3.2 | -3 | -3 | -4 | -3 |
| -3.7 | -4 | -3 | -4 | -3 |

**🧠 기억법**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔄</div>
    <div class="wda-fcard-ttl">round</div>
    <div class="wda-fcard-dsc">반올림 (0.5 기준)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⬆️</div>
    <div class="wda-fcard-ttl">ceil</div>
    <div class="wda-fcard-dsc">천장 (위로)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⬇️</div>
    <div class="wda-fcard-ttl">floor</div>
    <div class="wda-fcard-dsc">바닥 (아래로)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">✂️</div>
    <div class="wda-fcard-ttl">trunc</div>
    <div class="wda-fcard-dsc">소수점 잘라버리기</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>양수 vs 음수 바닥 처리</strong> — Math.floor는 항상 인수보다 작거나 같은 가장 큰 정수를 반환합니다.<br>
  따라서 3.7은 3이 되지만, -3.7보다 작은 정수 중 가장 큰 값은 -4가 됩니다.<br>
  <strong>trunc의 유용성</strong> — 소수점 아래를 완전히 무시하고 정수 부분만 필요할 때는 음수와 양수 모두에서 일관되게 동작하는 Math.trunc가 편리할 수 있습니다.
</div>

---

## 5. 소수점 N자리 처리

특정 자릿수에서 반올림하기

**💡 핵심 공식**

수동으로 특정 자릿수에서 반올림하려면 다음 과정을 거칩니다.

1. $10^N$ 곱하기
2. round / floor / ceil 적용
3. $10^N$ 나누기

```js
const num = 3.14159;

// 소수점 2자리에서 반올림 예시
// 1. 100을 곱함: 314.159
// 2. 반올림: 314
// 3. 100으로 나눔: 3.14
```

**📏 toFixed (문자열 반환)**

가장 간편하게 자릿수를 제어하는 메서드입니다.

```js
const num = 3.14159;

num.toFixed(2); // "3.14" (문자열!)
num.toFixed(4); // "3.1416"

// ⚠️ 숫자로 다시 바꾸려면
Number(num.toFixed(2)); // 3.14
+num.toFixed(2);         // 3.14
```

**📝 함수로 만들기**

범용적으로 사용할 수 있는 반올림 함수 예시입니다.

```js
const roundTo = (num, digits) => {
  const factor = 10 ** digits;
  return Math.round(num * factor) / factor;
};

roundTo(3.14159, 2); // 3.14
roundTo(3.14159, 3); // 3.142
```

**📊 방법 비교**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">Math.round(n*100)/100</div>
    <strong>반환 타입</strong>: 숫자<br>
    <strong>정밀도</strong>: 정확
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">num.toFixed(2)</div>
    <strong>반환 타입</strong>: 문자열<br>
    <strong>정밀도</strong>: 정확
  </div>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  toFixed는 문자열을 반환하므로 계산이 더 필요하다면 반드시 숫자로 변환하세요!
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>지수 연산자(**)</strong> — 10 ** digits는 10의 digits 제곱을 의미합니다.<br>
  <strong>반올림의 방향</strong> — toFixed 역시 표준 반올림 규칙을 따르므로, 지정된 자릿수 다음 숫자가 5 이상이면 올림 처리됩니다.<br>
  (예: 3.14159.toFixed(3) → "3.142")
</div>

---

## 6. Math.abs - 절대값

숫자를 양수로 만들기

**📝 기본 사용법**

어떤 숫자가 들어와도 0에서의 거리인 양수 값을 반환합니다.

```js
Math.abs(5);     // 5
Math.abs(-5);    // 5
Math.abs(0);     // 0

Math.abs(-3.14); // 3.14
Math.abs(3.14);  // 3.14
```

**🖼️ 시각화**

0을 기준으로 왼쪽(-5)에 있든 오른쪽(5)에 있든, 거리는 항상 양수입니다.

- $|-5| = 5$
- $|5| = 5$

0에서의 거리는 항상 양수예요!

**💡 코테 활용**

순서에 상관없이 두 수의 차이나 거리를 구할 때 필수적입니다.

🔹두 점 사이 거리

```js
const distance = (x1, x2) => Math.abs(x2 - x1);

distance(3, 10); // 7
distance(10, 3); // 7 (순서 무관!)
```

🔹차이 계산

```js
const diff = Math.abs(a - b);

// 예: 온도 차이
Math.abs(30 - 25); // 5
Math.abs(25 - 30); // 5
```

🔹양수 보장

```js
const positiveOnly = num => Math.abs(num);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>입력 타입</strong> — Math.abs()는 숫자가 아닌 값이 들어오면 숫자로 강제 변환을 시도합니다.<br>
  변환할 수 없는 값(예: 문자열 "abc")은 NaN을 반환합니다.<br>
  <strong>실제 활용</strong> — 코딩 테스트에서 "두 값의 차이가 $k$ 이하인 경우"를 찾을 때 Math.abs(a - b) <= k와 같은 형태로 가장 많이 사용됩니다.
</div>

---

## 7. Math.pow & Math.sqrt

거듭제곱과 제곱근 구하기

**⚡ Math.pow (거듭제곱)**

특정 숫자의 지수승을 구합니다.

```js
// Math.pow(밑, 지수)
Math.pow(2, 3);  // 8 (2³)
Math.pow(3, 2);  // 9 (3²)
Math.pow(10, 2); // 100

// 💡 ES6 지수 연산자(**)로도 가능!
2 ** 3;          // 8
3 ** 2;          // 9
10 ** 2;         // 100
```

**📐 Math.sqrt (제곱근)**

숫자의 제곱근($\sqrt{값}$)을 구합니다.

```js
Math.sqrt(4);    // 2
Math.sqrt(9);    // 3
Math.sqrt(2);    // 1.414...

// ⚠️ 음수는 NaN(Not a Number) 반환
Math.sqrt(-1);   // NaN
```

**💡 코테 활용**

N자리 숫자의 최대값 구하기

```js
10 ** 3 - 1;     // 999 (3자리 최대)
10 ** 4 - 1;     // 9999 (4자리 최대)
```

📐 피타고라스 정리 (두 점 사이 거리)

2D 평면에서 두 점 $(x1, y1)$과 $(x2, y2)$ 사이의 거리를 구할 때 필수입니다.

```js
const distance = (x1, y1, x2, y2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx**2 + dy**2);
};

distance(0, 0, 3, 4); // 5
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>최신 문법 권장</strong> — Math.pow(a, b)보다는 가독성이 좋은 a ** b 연산자를 사용하는 추세입니다.<br>
  <strong>정밀도 주의</strong> — 제곱근 계산 시 소수점이 길게 나올 수 있으므로, 앞서 배운 toFixed()나 Math.round()와 함께 사용하는 경우가 많습니다.
</div>

---

## 8. Math.random - 랜덤

무작위 숫자 만들기

**📝 기본 사용법**

- 0 이상 1 미만의 부동 소수점 실수를 반환합니다.
- 범위: $0 \le x < 1$ (1은 절대 나오지 않습니다!)

```js
Math.random(); // 0.7234... (매번 다름)
Math.random(); // 0.1456...
```

**💡 범위 지정 공식**

원하는 범위의 정수를 얻으려면 Math.floor와 함께 사용합니다.

- $0 \sim N-1$ 정수: `Math.floor(Math.random() * N)`
- $min \sim max$ 정수 ($max$ 포함): `Math.floor(Math.random() * (max - min + 1)) + min`

**🎲 자주 쓰는 패턴**

| 상황 | 코드 예시 | 결과 범위 |
|---|---|---|
| 주사위 | `Math.floor(Math.random() * 6) + 1` | $1, 2, 3, 4, 5, 6$ 중 하나 |
| 한 자리 정수 | `Math.floor(Math.random() * 10)` | $0, 1, 2, ..., 9$ 중 하나 |
| 배열 랜덤 선택 | `arr[Math.floor(Math.random() * arr.length)]` | 배열의 무작위 요소 |

배열에서 랜덤 선택 상세 예시

```js
const arr = ['a', 'b', 'c'];
const idx = Math.floor(Math.random() * arr.length);
console.log(arr[idx]); // 'a', 'b', 'c' 중 하나
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 Math.floor를 쓰나요?</strong> — Math.random() * 10은 0.0에서 9.999... 사이의 값을 만듭니다.<br>
  여기서 소수점을 버려야(floor) 우리가 원하는 $0$부터 $9$까지의 정수를 정확히 얻을 수 있습니다.<br>
  <strong>보안 주의</strong> — Math.random()은 암호학적으로 안전한 무작위 수를 생성하지 않습니다.<br>
  보안이 중요한 비밀번호 생성 등에는 crypto.getRandomValues()를 사용해야 합니다.
</div>

---

## 9. Math.PI & 기타 메서드

상수와 기타 유용한 수학 메서드입니다.

**🥧 Math.PI**

원의 넓이나 둘레를 계산할 때 사용하는 원주율($\pi$) 상수입니다.

- 값 : 3.141592653589793
- 원의 넓이 : $r^2 \times \pi$
- 원의 둘레 : $2 \times \pi \times r$

```js
const circleArea = r => Math.PI * r ** 2;
const circlePerimeter = r => 2 * Math.PI * r;

circleArea(5);      // 78.5398...
circlePerimeter(5); // 31.4159...
```

**➕ Math.sign (부호 확인)**

숫자가 양수인지, 음수인지, 혹은 0인지 부호를 반환합니다.

- 양수: 1 반환
- 음수: -1 반환
- 0: 0 반환

```js
Math.sign(10);  // 1
Math.sign(-10); // -1
Math.sign(0);   // 0
```

**📂 기타 유용한 도구**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📈</div>
    <div class="wda-fcard-ttl">로그 (log, log10, log2)</div>
    <div class="wda-fcard-dsc">자연로그, 상용로그, 이진로그 계산</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📐</div>
    <div class="wda-fcard-ttl">삼각함수 (sin, cos, tan)</div>
    <div class="wda-fcard-dsc">사인, 코사인, 탄젠트 값 계산</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔢</div>
    <div class="wda-fcard-ttl">기타 상수 (E, LN2, SQRT2)</div>
    <div class="wda-fcard-dsc">자연상수($e$), $\ln 2$, $\sqrt{2}$ 등</div>
  </div>
</div>

**Tip**

<div class="wda-callout wda-cs">
  Math.log2는 알고리즘 문제에서 비트 수 계산이나 이진 탐색의 깊이를 가늠할 때 매우 유용합니다!
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>로그 함수의 활용</strong> — 코딩 테스트에서 숫자를 계속 2로 나누어 1이 될 때까지의 횟수를 구할 때 Math.log2(n)을 활용하면 반복문 없이 바로 계산할 수 있습니다.<br>
  <strong>정밀도</strong> — Math.PI와 같은 상수들은 매우 정밀한 소수점 자릿수를 제공하므로, 물리 엔진 구현이나 정교한 그래픽 계산 시 필수적입니다.
</div>

---

## 10. 코테 패턴 1: 정수 나눗셈

몫과 나머지 구하기

**📌 JS의 나눗셈 특징**

자바스크립트는 모든 숫자가 **실수(Float)**로 취급됩니다.  
따라서 나눗셈을 하면 자동으로 소수점이 생길 수 있습니다.

- 실수 연산: 7 / 3을 하면 2가 아니라 2.3333...이 나옵니다.
- 다른 언어(C/Java)와의 차이: 다른 언어는 int / int = int이지만, JS는 number / number = number(float)입니다.

**📝 정수 몫 구하기**

나눗셈 결과에서 정수 부분(몫)만 필요하다면 Math.floor를 사용하여 소수점을 버려야 합니다.

```js
// 몫 구하기 (추천)
const quotient = Math.floor(7 / 3); // 2

// 나머지 구하기
const remainder = 7 % 3;            // 1
```

**💡 시각화**

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">7 ÷ 3</div><div class="wda-fnode-dsc">연산</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2.333...</div><div class="wda-fnode-dsc">결과</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">Math.floor 적용</div><div class="wda-fnode-dsc">처리 방법</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2</div><div class="wda-fnode-dsc">최종 값</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>나머지 연산자(%)</strong> — 나누어떨어지지 않고 남은 값을 구할 때 사용하며, 짝수/홀수 판별(num % 2)이나 배수 확인에 매우 자주 쓰입니다.<br>
  <strong>다른 버림 메서드</strong> — 양수일 때는 Math.trunc()나 parseInt()를 사용해도 같은 결과를 얻을 수 있지만, 코딩 테스트에서는 가장 보편적인 Math.floor()가 자주 활용됩니다.
</div>

---

## 11. 코테 패턴 2: 2D 좌표 변환

2차원 행렬과 1차원 배열 인덱스 사이를 자유롭게 오가는 핵심 공식입니다.

**📝 2D → 1D 변환**

$(r, c)$ 좌표를 1차원 배열의 인덱스로 변환할 때 사용합니다.

- 공식: `row * width + col`
- 예시: 가로 길이(width)가 5일 때, 1행 2열 좌표의 인덱스는? → 1 * 5 + 2 = 7 (인덱스 7)

**📝 1D → 2D 복구**

1차원 인덱스를 다시 $(r, c)$ 좌표로 되돌릴 때 사용합니다.

- 행(row) 공식: `Math.floor(index / width)` (나눈 몫)
- 열(col) 공식: `index % width` (나머지)
- 예시: 인덱스 7을 width 5로 나누면? → 7 ÷ 5 = 몫: 1, 나머지: 2 → [1, 2] 좌표 복구!

---

## 12. 코테 패턴 3: 소수 판별

Math.sqrt를 활용하여 소수(Prime Number)를 효율적으로 판별하는 방법입니다.

**🆚 비효율적 방법 ($O(N)$)**

- 1부터 $N$까지 모두 나누어 보는 방식입니다.
- 문제점: $N$이 10억이면 10억 번 반복해야 하므로 너무 느립니다.

**🆚 효율적 방법 ($O(\sqrt{N})$)**

- **제곱근($\sqrt{N}$)**까지만 확인하면 충분합니다!
- 이유: 약수는 항상 짝을 이루기 때문입니다.
- 효과: $N$이 10억이어도 약 3만 번($\sqrt{1,000,000,000} \approx 31,622$)만 반복하면 됩니다.

```js
const isPrime = (n) => {
  if (n < 2) return false;
  
  // ✅ 제곱근까지만 확인!
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>2D 좌표 변환</strong> — 격자형 지도(Map) 문제에서 2차원 배열을 1차원으로 펼쳐 저장하거나 관리할 때 필수적인 스킬입니다.<br>
  <strong>소수 판별 성능</strong> — i <= Math.sqrt(n) 대신 i * i <= n으로 작성해도 동일하게 동작하며, 함수 호출 비용을 줄일 수 있어 실전에서 자주 쓰입니다.
</div>

---

## 13. 코테 패턴 4: 자릿수 계산

숫자를 쪼개는 두 가지 방법입니다.

**📝 문자열 변환 (간편)**

가장 직관적이고 쉬운 방법으로, 숫자를 문자열로 바꾸어 처리합니다.

- 길이 재기 : `String(n).length`
- 각 자릿수 합 구하기

```js
const sum = String(n)
  .split("")
  .reduce((acc, cur) => acc + +cur, 0);
```

- 특징 : 속도는 조금 느리지만 코딩 테스트용으로는 충분합니다.

**📝 로그 사용 (수학)**

문자열 변환 없이 순수 수학 계산으로 처리해야 할 때 사용합니다.

- 자릿수 구하기 공식 : `Math.floor(Math.log10(n)) + 1`
- 원리 : $\log_{10}(100) = 2$, $\log_{10}(999) = 2.xxx$ 임을 이용합니다.
- 주의사항 : n이 0일 때는 Infinity가 나오므로 예외 처리가 필요합니다. `const safeDigits = n === 0 ? 1 : ...`

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>문자열 방식의 장점</strong> — 코드가 간결하며 split, reduce 등 다양한 배열 메서드를 함께 활용할 수 있어 응용력이 높습니다.<br>
  <strong>로그 방식의 장점</strong> — 메모리 사용량이 적고 대량의 숫자 데이터를 처리할 때 성능상 유리합니다.
</div>
