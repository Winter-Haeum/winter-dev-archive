---
title: "4-1 프로그래머스 Level 0-1 도전"
status: "completed"
description: "프로그래머스 화면 구성과 자주 하는 실수를 익히고, Level 0~1 추천 문제로 실전 감각을 키웁니다."
category: "Coding Test"
section: "Coding Test"
tags:
  - coding-test
  - programmers
  - practice
  - level0
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

## 1. 프로그래머스 화면 구성

문제 풀이 화면의 구조를 파악하면 더 효율적으로 코딩 테스트를 준비할 수 있습니다.

**1) 화면 구조**

프로그래머스의 문제 풀이 페이지는 크게 두 부분으로 나뉩니다.

• 좌측 영역: 문제 설명, 제한 사항, 입출력 예시 및 설명이 포함되어 있습니다.<br>
• 우측 영역: 실제 코드를 작성하는 에디터 공간입니다.

**2) ✅ 꼭 확인할 것**

문제 풀이 전, 다음 네 가지 항목을 반드시 체크해야 합니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">(1) 문제 설명</div>
    <div class="wda-fcard-dsc">무엇을 구하라는 건지 정확히 파악해야 합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">(2) 제한 사항</div>
    <div class="wda-fcard-dsc">입력값의 범위와 조건을 확인하세요. 이걸 놓치면 오답이 될 확률이 높습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">(3) 입출력 예시</div>
    <div class="wda-fcard-dsc">예제를 통해 내가 문제를 제대로 이해했는지 다시 한번 확인합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">(4) 실행 vs 제출</div>
    <div class="wda-fcard-dsc">실행: 기본 테스트 케이스만 확인하며 채점에는 반영되지 않습니다. / 제출: 모든 케이스에 대해 채점을 진행하며, 최종 결과로 기록됩니다.</div>
  </div>
</div>

**3) 💻 실습 : 화면 적응하기**

```js
/**
 * 프로그래머스 기본 함수 형태
 * num1과 num2가 주어질 때 차를 구하는 예시입니다.
 */
function solution(num1, num2) {
    // 1. 문제 설명 파악: 두 수의 차 구하기
    // 2. 제한사항 확인: 입력 범위 체크
    var answer = num1 - num2; // 핵심 동작: 뺄셈 수행
    return answer;
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>테스트 케이스 추가</strong> — 화면 하단의 '테스트 케이스 추가하기' 버튼을 눌러 본인이 생각한 엣지 케이스(Edge Case)를 직접 넣어볼 수 있습니다.<br>
  • <strong>언어 설정</strong> — 우측 상단에서 JavaScript 등 본인이 풀고자 하는 언어가 제대로 선택되어 있는지 확인하세요.
</div>

---

## 2. 자주 하는 실수

코딩 테스트 초보자가 가장 많이 겪는 실수들을 미리 파악하여 시행착오를 줄이세요.

**1) 흔한 실수들**

1. **return 빼먹기**: 결과를 계산만 하고 반환하지 않으면 오답 처리됩니다.
   - ❌ 틀림: `const result = n + 1;` // 결과값만 변수에 저장하고 끝남
   - ✅ 정답: `return n + 1;` // 결과를 외부로 내보내줌
2. **변수명 오타**: 선언한 이름과 다르게 사용하면 에러가 발생합니다.
   - ❌ 틀림: 매개변수는 `numbers`인데 `number.length`로 접근 (s가 빠짐)
   - ✅ 정답: `return numbers.length;` // 정확한 변수명 사용

**2) 더 흔한 실수들**

1. **제한사항 무시**: 특정 조건(예: n=0인 경우)을 고려하지 않으면 런타임 에러나 오답이 발생할 수 있습니다.
   - 보충설명: n=0일 때 반복문을 돌리면 로직이 꼬일 수 있으므로 `if (n === 0) return 0;` 처럼 예외 처리를 먼저 고려하세요.
2. **예제만 맞추기**: 문제에 주어진 예제는 통과하지만, '히든 케이스'에서 실패하는 경우입니다.
   - 해결책: 경계값 테스트(최솟값, 최댓값, 0, 1, 빈 배열, 음수 등)를 반드시 직접 수행해야 합니다.

---

## 3. 도전 과제

학습한 내용을 바탕으로 직접 풀어볼 문제들을 추천해 드립니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">Level 0 (입문)</div>
      <div class="wda-sdsc">
        추천 문제: 두 수의 차, 몫 구하기, 나머지 구하기, 배열 두 배 만들기, 나이 출력<br>
        목표: 10문제 이상 해결하기
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">Level 0 (기초)</div>
      <div class="wda-sdsc">
        추천 문제: 배열 원소의 길이, 중복된 숫자 개수, 머쓱이보다 키 큰 사람, 배열 자르기, 짝수 홀수 개수<br>
        목표: 20문제 이상 해결하기
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">Level 1 (도전)</div>
      <div class="wda-sdsc">
        추천 문제: 약수의 개수와 덧셈, 문자열 내림차순 정렬, 정수 내림차순 정렬, 자릿수 더하기, 자연수 뒤집어 배열로 만들기<br>
        목표: 5문제 이상 해결하기
      </div>
    </div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>학습 경로 가이드</strong> — 프로그래머스 사이트 접속 후 [코딩테스트 연습] → [난이도별 정렬]을 통해 Level 0부터 차근차근 시작하는 것을 권장합니다.<br>
  • <strong>팁</strong> — 제출 전에는 반드시 극단적인 값(최소/최대)으로 직접 테스트해보는 습관을 들이세요!
</div>
