---
title: "4-2 문제 푸는 순서 알아보기"
status: "completed"
description: "문제 읽기부터 계획 수립, 코드 작성, 검증까지 5단계 문제 풀이 프로세스와 시간 배분 전략을 익힙니다."
category: "Coding Test"
section: "Coding Test"
tags:
  - coding-test
  - problem-solving
  - pseudocode
  - debugging
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
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
</style>

## 1. 문제 풀이 5단계 전체 흐름

체계적인 순서를 따르면 문제가 쉬워집니다.

**📍 문제 해결 프로세스**

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">문제 읽기</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">예시 분석</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">계획 수립</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody"><div class="wda-sttl">코드 작성</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">5</div>
    <div class="wda-sbody"><div class="wda-sttl">검증</div></div>
  </div>
</div>

**💡 실전 적용 팁**

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  바로 코드부터 치면 안 돼요! 1~3단계를 충분히 거친 후에 코드를 작성하세요.
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>계획 수립의 중요성</strong> — 3단계에서 로직을 한글이나 의사코드(Pseudo-code)로 먼저 정리하면, 4단계에서 문법 오류에만 집중할 수 있어 전체적인 구현 속도가 빨라집니다.<br>
  • <strong>예시 분석</strong> — 주어진 입출력 예시 외에 본인이 직접 예외적인 케이스(빈 문자열, 아주 긴 문자열 등)를 생각해보는 과정이 5단계 검증 시간을 줄여줍니다.
</div>

---

## 2. 1단계: 문제 읽기

최소 3번은 읽어야 제대로 이해됩니다.

**1) 첫 번째 읽기 - 전체 파악**

• 문제가 무엇을 요구하는지 확인합니다.<br>
• 전체적인 흐름을 이해합니다.<br>
• 모르는 용어를 체크합니다.

**2) 두 번째 읽기 - 조건 확인**

• 입력 범위를 확인합니다. (숫자 크기, 배열 길이)<br>
• 제한 사항을 확인합니다. (특수 케이스)<br>
• 시간 제한 및 메모리 제한을 확인합니다.

**3) 세 번째 읽기 - 함정 찾기**

• 빈 배열이 들어올 수 있나요? → 빈 배열 처리<br>
• 음수가 있을 수 있나요? → 음수 처리<br>
• 중복 값이 있을 수 있나요? → 중복 처리

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>입력 범위의 중요성</strong> — 입력 데이터가 매우 크다면 일반적인 반복문 대신 더 효율적인 알고리즘이 필요할 수 있음을 암시합니다.<br>
  • <strong>함정 찾기</strong> — 문제에서 명시적으로 언급하지 않더라도 0, 음수, 빈 값 같은 '경계값(Edge Case)'을 스스로 생각해보는 훈련이 필요합니다.
</div>

---

## 3. 문제 읽기 체크리스트

이것만 확인해도 실수가 줄어듭니다.

**📌 입력 확인**

• 입력 타입은? (숫자, 문자열, 배열)<br>
• 값의 범위는? (최소, 최대)<br>
• 배열 길이는? (빈 배열 가능?)<br>
• 특수문자, 공백 포함?

**📌 출력 확인**

• 반환 타입은? (숫자, 문자열, 배열)<br>
• 정렬이 필요한가?<br>
• 소수점 처리는?<br>
• 없는 경우 반환값은?

**📌 예외 케이스**

• 빈 입력 / 값이 하나뿐 / 모두 같은 값<br>
• 음수 포함 / 0 포함 / 매우 큰 수

---

## 4. 2단계 : 예시 분석

입출력 예시를 손으로 직접 따라가며 로직을 이해하는 과정입니다.

**🧪 손으로 따라가기 (Dry Run)**

단순히 눈으로 보는 것이 아니라, 변수의 변화 과정을 하나씩 기록해 봅니다.

예시 문제: 배열의 합

• 입력: `[1, 2, 3, 4, 5]`<br>
• 출력: `15`<br>
• 설명: 1 + 2 + 3 + 4 + 5 = 15

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">0</div><div class="wda-sbody"><div class="wda-sttl">시작 — 초기화</div><div class="wda-sdsc">sum = 0</div></div></div>
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">1번째 — 0 + 1</div><div class="wda-sdsc">sum = 1</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">2번째 — 1 + 2</div><div class="wda-sdsc">sum = 3</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">3번째 — 3 + 3</div><div class="wda-sdsc">sum = 6</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">4번째 — 6 + 4</div><div class="wda-sdsc">sum = 10</div></div></div>
  <div class="wda-step"><div class="wda-snum">5</div><div class="wda-sbody"><div class="wda-sttl">5번째 — 10 + 5</div><div class="wda-sdsc">sum = 15 ✅</div></div></div>
</div>

**💡 왜 손으로 따라가야 하나요?**

• <strong>과정의 시각화</strong>: 내가 어떤 과정을 거쳤는지 정확히 알아야 코드로 옮길 수 있습니다.<br>
• <strong>로직 오류 발견</strong>: 코드를 짜기 전, 머릿속 설계의 허점을 미리 찾아낼 수 있습니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>패턴 찾기</strong> — 예시를 분석하다 보면 반복되는 규칙(예: 누적합, 특정 조건에서의 건너뛰기 등)을 발견하게 되며, 이것이 곧 코딩 테스트의 알고리즘이 됩니다.<br>
  • <strong>복잡한 문제일수록 필수</strong> — 조건이 까다로운 구현 문제나 다이나믹 프로그래밍(DP)의 경우, 손으로 써보는 과정 없이 바로 코드를 짜면 디버깅에 훨씬 많은 시간을 뺏기게 됩니다.
</div>

---

## 5. 예시가 여러 개일 때

모든 예시에서 공통된 패턴을 찾아보세요.

**🧭 패턴 발견하기**

여러 개의 입출력 예시를 비교하면 문제의 숨은 로직(평균, 합계 등)을 명확히 알 수 있습니다.

| 예시 | 입력 | 출력 | 패턴 분석 과정 |
|---|---|---|---|
| 예시 1 | `[1, 2, 3]` | 2 | (1+2+3) / 3 = 2 → 평균! |
| 예시 2 | `[1, 2]` | 1.5 | (1+2) / 2 = 1.5 → 맞음 |
| 예시 3 | `[5]` | 5 | 5 / 1 = 5 → 맞음 |

**💡 예시 분석의 결론**

• <strong>중간값인가? 평균인가?</strong>: 예시 1만 봤을 때는 중간값(2)인지 평균(2)인지 헷갈릴 수 있지만, 예시 2를 통해 평균을 구하는 문제임을 확신할 수 있습니다.<br>
• <strong>예외 확인</strong>: 요소가 하나인 경우(예시 3)에도 로직이 그대로 적용되는지 확인합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>검증용 데이터 확보</strong> — 분석한 패턴이 모든 예시에서 일관되게 적용되는지 확인하는 과정이 필수입니다.<br>
  • <strong>로직의 일반화</strong> — "모든 숫자를 더한 뒤 배열의 길이로 나눈다"는 일반적인 규칙을 도출해내면 3단계 계획 수립으로 넘어갈 준비가 된 것입니다.
</div>

---

## 6. 3단계 : 계획 수립 (상세)

코드를 작성하기 전, 논리 흐름을 일상 언어로 정리하여 시행착오를 줄이는 단계입니다.

**📌 의사코드(Pseudo-code) 작성의 중요성**

의사코드는 프로그래밍 언어가 아닌 일상 언어로 적는 논리 흐름입니다.

<div class="wda-compare">
  <div class="wda-compare-card wda-legacy">
    <div class="wda-compare-label">❌ 나쁜 예</div>
    <div class="wda-compare-ttl">계획 없는 구현</div>
    "그냥 코드 작성 시작..." → "for문 써볼까?" → "아 안되네..." → "reduce 써볼까?"<br><br>
    결과: 시행착오만 반복하며 아까운 시간을 낭비하게 됩니다.
  </div>
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-label">✅ 좋은 예</div>
    <div class="wda-compare-ttl">명확한 단계 설정</div>
    1. 합계 변수 만들기<br>
    2. 배열 순회하면서 더하기<br>
    3. 합계를 배열 길이로 나누기<br>
    4. 결과 반환하기<br><br>
    결과: 명확한 계획이 서면 구현 속도가 압도적으로 빨라집니다.
  </div>
</div>

**📝 의사코드 작성 예시**

문제: 배열에서 짝수만 골라 합 구하기

의사코드와 실제 코드는 다음과 같이 1:1로 대응됩니다.

| 단계 | 의사코드 (Logic) | JavaScript 코드 |
|---|---|---|
| 함수 정의 | 함수: 짝수합 구하기(배열) | `function solution(arr) {` |
| 초기화 | 1. 합계 = 0으로 시작 | `let sum = 0;` |
| 반복 | 2. 배열의 각 숫자에 대해: | `for (let num of arr) {` |
| 조건 | - 만약 숫자가 짝수면: | `if (num % 2 === 0) {` |
| 누적 | - 합계에 더하기 | `sum += num;` |
| 종료 |  | `}` |
| 반환 | 3. 합계 반환 | `}` `return sum;` `}` |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>사고의 분리</strong> — 의사코드를 먼저 쓰면 '무엇을 할 것인가(Logic)'와 '어떻게 코드로 짤 것인가(Syntax)'를 분리해서 생각할 수 있습니다.<br>
  • <strong>주석으로 활용</strong> — 작성한 의사코드를 복사하여 코드 에디터에 주석으로 붙여넣고, 그 아래에 한 줄씩 코드를 채워나가는 방식을 강력히 추천합니다.
</div>

---

## 7. 4단계 : 코드 작성

계획한 논리를 바탕으로 한 단계씩 차근차근 구현하는 과정입니다.

**📝 구현 가이드라인**

무작정 전체 코드를 한꺼번에 완성하려 하지 말고, 작은 단위로 나누어 작성하세요.

<div class="wda-compare">
  <div class="wda-compare-card wda-legacy">
    <div class="wda-compare-label">❌ 하지 마세요</div>
    처음부터 완벽하게 쓰려고 하기<br>
    한 번에 전체 코드 작성<br>
    의사코드 무시하고 감으로 작성<br>
    변수명 대충 짓기 (a, b, x)
  </div>
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-label">✅ 이렇게 하세요</div>
    의사코드 한 줄씩 변환<br>
    중간중간 console.log로 확인<br>
    의미 있는 변수명 사용<br>
    작은 단위로 테스트
  </div>
</div>

**🐞 디버깅 팁**

코드가 예상대로 동작하는지 확인하기 위해 중간 결과를 출력해 보는 습관이 중요합니다.

```js
// 중간 결과 확인하기 예시
console.log("현재 sum:", sum);
console.log("현재 num:", num);

// ⚠️ 제출 전에는 반드시 console.log를 지우거나 주석 처리하세요!
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>작은 성공의 중요성</strong> — 한 번에 100줄을 짜고 에러를 찾는 것보다, 10줄마다 console.log로 확인하며 넘어가는 것이 최종적으로는 훨씬 빠릅니다.<br>
  • <strong>가독성 확보</strong> — 의미 있는 변수명은 본인이 나중에 코드를 다시 볼 때뿐만 아니라, 면접관이나 동료가 코드를 읽을 때 의도를 명확히 전달해 줍니다.
</div>

---

## 8. 5단계 : 검증

제출 전 반드시 테스트를 거쳐 정답을 확신하는 과정입니다.

**🧪 기본 테스트**

가장 먼저 문제에서 제공한 예시 케이스를 넣어 결과가 맞는지 확인합니다.

```js
// 예시 케이스로 확인
console.log(solution([1, 2, 3, 4, 5])); // 15
console.log(solution([10, 20, 30]));    // 60
```

**🧪 엣지 케이스 (Edge Case)**

프로그램이 고장 나기 쉬운 예외 상황을 직접 만들어 테스트합니다.

```js
// 예외 상황 확인
console.log(solution([]));      // 0? 에러? (빈 입력 처리)
console.log(solution([5]));     // 5 (단일 요소 처리)
console.log(solution([-1, 2])); // 음수 처리
```

**📌 검증 체크리스트**

제출 버튼을 누르기 전, 다음 항목들을 마지막으로 점검하세요.

• [ ] 문제의 예시 케이스 통과<br>
• [ ] 단일 요소 처리 (요소가 하나만 있을 때)<br>
• [ ] 빈 입력 처리 (배열이 비어있거나 빈 문자열일 때)<br>
• [ ] 큰 숫자 / 긴 배열 처리 (성능 및 범위 확인)

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>엣지 케이스의 힘</strong> — 실제 코딩 테스트 오답의 대부분은 일반적인 로직이 틀려서가 아니라, 이러한 예외 상황을 고려하지 않아 발생합니다.<br>
  • <strong>불필요한 코드 제거</strong> — 검증을 위해 작성했던 console.log는 제출 시 성능에 영향을 주거나 오답의 원인이 될 수 있으므로 반드시 지워야 합니다.
</div>

---

## 9. 시간 배분 팁

60분 기준 시간을 어떻게 효율적으로 쓸까요?

**📍 단계별 권장 시간**

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">문제 읽기 📖</div><div class="wda-sdsc">5분</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">예시 분석 🔍</div><div class="wda-sdsc">5분</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">계획 수립 ✏️</div><div class="wda-sdsc">10분</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">코드 작성 {}</div><div class="wda-sdsc">30분</div></div></div>
  <div class="wda-step"><div class="wda-snum">5</div><div class="wda-sbody"><div class="wda-sttl">검증 ✅</div><div class="wda-sdsc">10분</div></div></div>
</div>

**⚠️ 중요 포인트**

<div class="wda-callout wda-cw">
  • 계획(3단계)에 10분을 투자하면 코드 작성이 훨씬 빨라집니다.<br>
  • 계획 없이 바로 코딩하면 오히려 더 오래 걸립니다!
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>계획의 힘</strong> — 초보자일수록 '코드 작성' 시간을 늘리려 하지만, 실제로는 '계획 수립'에 시간을 충분히 쏟아야 논리 오류로 인해 전체 코드를 갈아엎는 사태를 방지할 수 있습니다.<br>
  • <strong>검증 시간 확보</strong> — 마지막 10분은 단순히 오답을 찾는 시간이 아니라, 앞서 배운 '엣지 케이스'들을 하나씩 대입해보며 정답에 대한 확신을 갖는 시간입니다.
</div>
