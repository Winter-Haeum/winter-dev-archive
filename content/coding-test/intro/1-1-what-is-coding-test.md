---
title: "1-1 코딩테스트가 뭔가요?"
status: "completed"
description: "코딩테스트가 무엇이고 왜 필요한지, 어떤 기업에서 어떻게 활용하는지 이해합니다."
category: "Coding Test"
section: "Coding Test"
tags:
  - coding-test
  - algorithm
  - programmers
  - problem-solving
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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;background:rgba(128,128,128,.025);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-fcard-list{list-style:none;padding:0;margin:.4rem 0 0;font-size:.71rem;line-height:1.6;opacity:.75}
.wda-fcard-list li::before{content:"· "}
.wda-fcard-pro{border-left:3px solid rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
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
• <strong>코딩테스트 이해</strong> — 코딩테스트가 무엇이고 왜 필요한지 이해합니다.<br>
• <strong>활용 분야 파악</strong> — 어떤 기업에서 어떻게 활용하는지 알아봅니다.<br>
• <strong>문제 유형 파악</strong> — 어떤 유형의 문제가 출제되는지 살펴봅니다.<br>
• <strong>준비 방법 이해</strong> — 효과적인 준비 방법과 마인드셋을 배웁니다.
</div>

---

## 1. 코딩테스트란?

프로그래밍 문제를 풀어 실력을 검증하는 시험입니다.

**📌 정의**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">정의</div><div class="wda-fcard-dsc">주어진 문제를 코드로 해결하는 테스트입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">핵심 흐름</div><div class="wda-fcard-dsc">입력 → 알고리즘 (문제 해결) → 출력의 과정을 거칩니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">제약 사항</div><div class="wda-fcard-dsc">반드시 정해진 시간 내에 문제를 풀어야 합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">평가 방식</div><div class="wda-fcard-dsc">사람이 아닌 자동 채점 시스템이 코드를 실행하여 평가합니다.</div></div>
</div>

**📌 목적 (Why?)**

• 지원자의 문제 해결 능력을 검증하기 위함입니다.<br>
• 단순 암기가 아닌 논리적 사고력을 평가합니다.<br>
• 기본적인 프로그래밍 역량(문법 활용 등)을 확인합니다.<br>
• 수많은 지원자를 효율적으로 선발하기 위한 수단입니다.

**💡 비유로 이해하기**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🎓</div>
    <div class="wda-fcard-ttl">수학 시험처럼</div>
    <div class="wda-fcard-dsc">문제를 읽고 → 풀이 방법(공식)을 생각하고 → 답을 도출하는 과정과 같습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🍳</div>
    <div class="wda-fcard-ttl">요리 실기처럼</div>
    <div class="wda-fcard-dsc">재료(입력)를 받아 → 레시피(알고리즘)대로 조리하여 → 맛있는 요리(출력)를 완성하는 것입니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🧩</div>
    <div class="wda-fcard-ttl">퍼즐 게임처럼</div>
    <div class="wda-fcard-dsc">게임의 규칙을 이해하고 → 가장 빠르고 정확한(최적의) 해결책을 찾는 것입니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>자동 채점 시스템</strong> — 내가 짠 코드를 제출하면, 서버가 미리 준비된 수십 개의 '채점용 데이터'를 넣어봅니다.<br>
  단 하나라도 틀리거나, 정답을 맞췄더라도 시간이 너무 오래 걸리면(Time Out) 오답 처리됩니다.<br>
  • <strong>알고리즘(Algorithm)</strong> — 거창한 수학 공식이 아니라, 어떤 문제를 해결하기 위한 <strong>'단계적인 절차나 방법'</strong>을 의미합니다. (예: 라면 끓이는 순서도 일종의 알고리즘입니다.)
</div>

---

## 2. 활용 분야 : 어디서 코딩테스트를 볼까?

IT 기업 채용의 필수 관문이자, 교육 기회를 얻기 위한 수단으로 활용됩니다.

**📌 기업 채용 (Recruitment)**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">🏢 대기업 (IT Big Tech)</div>
    <div class="wda-fcard-dsc"><strong>대표 기업</strong>: 카카오(연 2회), 네이버, 삼성(SW 역량테스트), 라인, 쿠팡 등<br>지원자가 매우 많아 서류 전형 전후 필터링 목적으로 필수 시행합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">🚀 스타트업 (Unicorns)</div>
    <div class="wda-fcard-dsc"><strong>대표 기업</strong>: 토스, 당근, 배달의민족 등<br>규모에 따라 다르며, 알고리즘 외에 실제 기능을 구현하는 <strong>'과제형 테스트'</strong>를 병행하기도 합니다.</div>
  </div>
</div>

**📌 교육 및 성장 (Education)**

• 🎓 교육/장학 프로그램 — 국가나 기업에서 지원하는 무료 고품질 개발 교육에 들어가기 위해서도 코딩테스트를 통과해야 합니다.<br>
&nbsp;&nbsp;대표 프로그램 : SSAFY(삼성 청년 SW 아카데미), SW 마에스트로, 우아한테크코스, 네이버 부스트캠프

**📌 자격 및 인증 (Certification)**

📜 <strong>자격증</strong>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">PCCP</div>
    <div class="wda-fcard-dsc">프로그래머스에서 주관하는 코딩 전문 역량 인증</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">SQLD</div>
    <div class="wda-fcard-dsc">데이터베이스(DB) 분야의 SQL 개발자 자격증</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">정보처리기사</div>
    <div class="wda-fcard-dsc">실기 시험에 코딩 문제(C, Java, Python 등)가 포함됩니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>과제형 테스트란?</strong> — "쇼핑몰 검색 기능을 구현하시오"처럼 제한 시간(보통 3~7일)을 주고 실제 동작하는 작은 애플리케이션을 만들어 제출하는 방식입니다.<br>
  스타트업에서 실무 능력을 보기 위해 선호합니다.<br>
  • <strong>트렌드</strong> — 요즘은 개발자뿐만 아니라 데이터 분석가, 마케터(SQL) 직군에서도 간단한 코딩/쿼리 테스트를 보는 기업이 늘어나고 있습니다.
</div>

---

## 3. 문제 유형 파악: 어떤 문제가 나올까?

코딩테스트 문제는 크게 구현, 자료구조, 알고리즘 세 가지 영역으로 나뉩니다.

| 유형 | 핵심 내용 | 주요 키워드 | 난이도 |
|---|---|---|---|
| 🔢 구현 (Implementation) | 머릿속 로직이나 문제 조건을 그대로 코드로 옮기는 능력 | 문자열: 자르고 붙이기, 검색 / 시뮬레이션: 게임 말 이동 등 / 완전 탐색: 모든 경우의 수 확인 | ⭐ ~ ⭐⭐⭐ (입문자 필수) |
| 🏗️ 자료구조 (Data Structure) | 효율적인 데이터 저장/사용을 위해 적절한 도구(구조)를 선택하는 능력 | 기본: 배열, 스택, 큐 / 심화: 해시맵(Map), 힙, 트리 | ⭐⭐ ~ ⭐⭐⭐⭐ (도구 활용) |
| ⚡ 알고리즘 (Algorithm) | 문제 해결을 위해 유명한 공식이나 방식을 적용하는 능력 | 탐색: 정렬, 이진 탐색 / 그래프: DFS, BFS / 최적화: DP, 그리디 | ⭐⭐⭐ ~ ⭐⭐⭐⭐⭐ (대기업 핵심) |

**입문자를 위한 전략 (Tip)**

<div class="wda-callout wda-cs">
  • <strong>순서가 중요합니다</strong> — 처음부터 어려운 알고리즘(DP, 그래프)을 파면 좌절하기 쉽습니다.<br>
  • <strong>구현부터 시작하세요</strong> — 문제의 조건을 코드로 옮기는 연습이 가장 기본입니다.<br>
  이게 되어야 자료구조도 쓰고 알고리즘도 적용할 수 있습니다.
</div>

---

## 4. 문제는 어떻게 생겼을까? (Structure)

실제 코딩테스트 플랫폼(프로그래머스 등)의 문제 풀이 화면 구성입니다. 크게 문제 설명, 코드 작성, 결과 확인 세 부분으로 나뉩니다.

**📄 문제 예시 (Description)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">문제 설명</div><div class="wda-fcard-dsc">해결해야 할 과제가 텍스트로 주어집니다. (예: 정수 배열 numbers가 주어집니다. 배열의 모든 요소의 합을 반환하세요.)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">입력 & 제약조건</div><div class="wda-fcard-dsc">Input: numbers는 정수 배열이며, 길이는 1 이상 100 이하입니다.<br>Tip: 제약조건(범위)을 잘 봐야 시간 초과를 피하는 효율적인 코드를 짤 수 있습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">예시 (Example)</div><div class="wda-fcard-dsc">[1, 2, 3] 입력 시 6이 나와야 한다는 입출력 예시를 보여줍니다.</div></div>
</div>

**💻 풀이 코드 (Coding Area)**

이미지 속에 작성된 실제 풀이 코드입니다. 보통 solution 함수 내부에 로직을 채워 넣는 방식입니다.

```js
// 입력받은 배열(numbers)의 합을 구하는 함수
function solution(numbers) {
  // 방법 1: for문 (가장 기초적인 방법)
  let sum = 0; // 1. 합계를 담을 변수 초기화

  for (let num of numbers) {
    sum += num; // 2. 배열 요소를 하나씩 꺼내 더하기
  }

  return sum; // 3. 최종 결과 반환

  // --------------------------------------------------

  // 방법 2: reduce (실무/숙련자용 한 줄 코드)
  // 배열을 순회하며 누적값을 계산하는 고차 함수 사용
  // return numbers.reduce((a, b) => a + b, 0);
}
```

**✅ 채점 결과 (Grading)**

• <strong>테스트 통과</strong>: 작성한 코드를 제출하면 시스템이 테스트 케이스를 돌려봅니다.<br>
• <strong>실행 시간</strong>: 0.02ms, 0.01ms 처럼 코드가 실행되는 데 걸린 시간이 표시됩니다.<br>
이 시간이 너무 길면 실패합니다.<br>
• <strong>결과</strong>: 모든 테스트를 통과하면 녹색 체크 표시와 함께 "정답입니다!" 메시지가 뜹니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>함수 이름(solution)</strong> — 코딩테스트 사이트 대부분은 채점 시스템이 solution이라는 이름의 함수를 호출하도록 설계되어 있습니다.<br>
  함수 이름을 마음대로 바꾸면 채점이 되지 않으니 주의하세요.<br>
  • <strong>주석 활용</strong> — 실제 시험장에서도 헷갈리지 않게 위 코드처럼 주석으로 단계를 나누고 코딩하는 것이 좋습니다.
</div>

---

## 5. 코딩테스트 진행 방식 (Procedure)

시간 관리와 채점 기준을 모르면 문제를 다 풀고도 떨어질 수 있습니다.

**⏱️ 시간 구성 (Time Limit)**

기업마다 다르지만, 보통 한 문제당 30분~1시간 정도의 시간이 주어집니다.

| 유형 | 시간 | 문제 수 | 비고 |
|---|---|---|---|
| 일반 | 2~3시간 | 3~5문제 | 가장 보편적인 형태 |
| 카카오 | 5시간 | 7문제 | 긴 시간 동안 집중력 유지 필요 |
| 삼성 | 3시간 | 2문제 | 문제 수는 적지만 난이도가 높음 |

**✅ 채점 방식 (Grading)**

단순히 "답이 맞았다"고 끝이 아닙니다. 다음 3가지 기준을 모두 통과해야 합니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">정확성 (Accuracy)</div><div class="wda-fcard-dsc">주어진 입력에 대해 올바른 답을 내놓는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">효율성 (Efficiency)</div><div class="wda-fcard-dsc">제한된 시간 내에 동작하는지 확인합니다. (너무 느리면 탈락)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">메모리 (Memory)</div><div class="wda-fcard-dsc">불필요하게 너무 많은 RAM을 사용하지 않는지 체크합니다.</div></div>
</div>

**🚀 시간 복잡도 (Time Complexity)**

코딩테스트에서 가장 중요한 개념 중 하나입니다. "내 코드가 얼마나 빠른가?"를 의미합니다.

| 구분 | 상세 내용 |
|---|---|
| 실행 시간 제한 | 문제마다 보통 1~5초의 제한 시간이 있습니다. |
| 시간 초과 (Time Limit Exceeded) | 비효율적인 코드를 짜면 답이 맞아도 오답 처리됩니다. |
| 전략 | 입력 데이터의 크기(N)를 보고, <strong>"아, 이 문제는 이중 반복문(O(N^2))을 쓰면 시간 초과가 나겠구나"</strong>라고 예상할 수 있어야 합니다. |

**⚠️ 주의사항 (Caution)**

| 구분 | 상세 내용 |
|---|---|
| 부분 점수 | 어려운 문제는 100% 통과하지 못해도, 맞춘 만큼 부분 점수를 주는 경우가 있습니다. (포기하지 말고 제출하세요!) |
| 엣지 케이스 (Edge Case) | 입력이 없거나([]), 입력값이 최대값일 때 등 특수한 상황을 꼭 고려해야 합니다. |
| 제출 횟수 제한 | 무제한 제출이 가능한 곳도 있지만, 횟수 제한이 있는 경우 신중해야 합니다. |

---

## 6. 필요한 역량 (Skills Required)

무엇을 준비해야 할까요? 크게 기초 문법, 문제 해결력, 자료구조, 알고리즘 4가지가 필요합니다.

**📌 프로그래밍 기초**

가장 기본이 되는 도구 사용법입니다. JavaScript 기초 과정(Section 1)에서 배운 내용들이 여기에 해당합니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">변수, 조건문, 반복문</div><div class="wda-fcard-dsc">로직을 구성하는 가장 작은 단위입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">함수 정의와 호출</div><div class="wda-fcard-dsc">코드를 모듈화하고 재사용하는 능력입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">배열, 객체 다루기</div><div class="wda-fcard-dsc">데이터를 담고 꺼내는 기본적인 방법입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">문자열 처리</div><div class="wda-fcard-dsc">텍스트 데이터를 가공하는 능력입니다.</div></div>
</div>

**🧠 문제 해결 능력**

단순히 코드를 짜는 것이 아니라, 문제를 어떻게 풀지 생각하는 힘입니다.

| 역량 (Skill) | 핵심 내용 (Description) |
|---|---|
| 문제 분해 | 복잡한 문제를 작은 단위로 쪼개서 하나씩 해결하는 능력입니다. (가장 중요!) |
| 논리적 사고 | 순서에 맞게 인과관계를 따져가며 생각합니다. |
| 패턴 인식 | "아, 이 문제는 예전에 풀었던 그 방식이랑 비슷하네?"라고 파악하는 능력입니다. |
| 디버깅 | 코드가 왜 안 돌아가는지 원인을 찾아 고치는 능력입니다. |

**📚 자료구조 이해**

데이터를 효율적으로 저장하고 관리하는 방법에 대한 이해입니다. 상황에 맞는 '그릇'을 골라야 합니다.

| 구분 (Structure) | 자료구조 종류 (Types) | 비고 |
|---|---|---|
| 기본 | 배열 (Array) | 가장 기초적인 자료구조 |
| 선형 구조 | 스택 (Stack), 큐 (Queue) | 데이터가 줄 지어 있는 형태 |
| 비선형 구조 | 해시맵 (Map, Set) / 트리 (Tree), 그래프 (Graph) | 데이터가 복잡하게 연결된 형태 |

**📌 알고리즘 기초**

문제를 해결하기 위한 <strong>절차나 방법(공식)</strong>입니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">정렬 (Sort)</div><div class="wda-fcard-dsc">데이터를 순서대로 나열하기</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">탐색 (Search)</div><div class="wda-fcard-dsc">원하는 데이터 찾기 (선형, 이진 탐색)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">완전 탐색</div><div class="wda-fcard-dsc">무식하게 모든 경우의 수 다 해보기</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">고급 (Advanced)</div><div class="wda-fcard-dsc">DFS/BFS: 깊이/너비 우선 탐색, DP: 동적 계획법</div></div>
</div>

---

## 7. 어떻게 준비할까? (Preparation Strategy)

**📍 효과적인 3단계 준비법**

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">기본기 다지기</div>
      <div class="wda-sdsc">
        문법 숙지: JavaScript 문법을 완벽하게 익혀야 합니다.<br>
        메서드 암기: 자주 쓰는 <strong>배열(Array)</strong>과 <strong>문자열(String)</strong> 메서드는 구구단처럼 외워두세요.<br>
        자료구조: 스택, 큐 등 데이터를 담는 그릇(자료구조)의 개념을 이해합니다.
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">문제 풀이 연습</div>
      <div class="wda-sdsc">
        Level 0부터: 무조건 쉬운 문제부터 시작해서 성취감을 느껴야 합니다.<br>
        꾸준함: 몰아서 하는 것보다 매일 1~2문제를 꾸준히 푸는 것이 중요합니다.<br>
        오답 노트: 못 푼 문제는 해설을 보고 이해한 뒤, 반드시 내 손으로 다시 짜봐야 합니다.
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">실전 대비</div>
      <div class="wda-sdsc">
        타임 어택: 스톱워치를 켜고 제한 시간 내에 푸는 연습을 합니다.<br>
        기출 정복: 기업들의 과거 기출문제를 풀어보며 경향을 파악합니다.
      </div>
    </div>
  </div>
</div>

**📅 추천 학습 로드맵 (비전공자/입문자 기준)**

딱 <strong>8주(2달)</strong>만 투자해 보세요. 입문자도 충분히 기초를 잡을 수 있습니다.

| 주차 | 단계 | 학습 목표 |
|---|---|---|
| 1-2주차 | 적응기 | 문법 기초 + Level 0 문제 (10~20개). "일단 코드가 돌아가는 것"에 집중하세요. |
| 3-4주차 | 기본기 | 배열/문자열 메서드 집중 공략. Level 0 나머지 문제 + 쉬운 Level 1 도전 |
| 5-6주차 | 자료구조 | 스택, 큐, 해시(Hash) 개념 익히기. 관련 유형의 Level 1 문제 풀이 |
| 7-8주차 | 실전 | Level 1 문제를 능숙하게 풀기. 시간 제한을 두고 긴장감 있게 푸는 연습 |

**핵심 마인드셋**

<div class="wda-callout wda-cs">
  "꾸준함 > 양" — 하루에 10문제를 몰아서 풀고 3일 쉬는 것보다, 매일 1문제씩 푸는 것이 실력 향상에 훨씬 빠릅니다.
</div>

---

## 8. 마인드셋 (Mindset)

코딩테스트에 대한 두려움을 이기는 자세입니다. 잘못된 오해를 버리고 올바른 태도를 갖춰야 합니다.

**❌ 흔한 오해 (Myths)**

**잘못된 생각들**

<div class="wda-callout wda-cw">
  • <strong>"수학을 잘해야 해"</strong> — 🙅‍♂️ 아닙니다. 고등수학은 필요 없어요! 사칙연산과 논리적 사고만 있으면 충분합니다.<br>
  • <strong>"알고리즘을 다 알아야 해"</strong> — 🙅‍♂️ 아닙니다. 입문 단계(Level 1-2)는 기본만 알면 충분합니다. 어려운 알고리즘은 나중 문제입니다.<br>
  • <strong>"천재만 잘할 수 있어"</strong> — 🙅‍♂️ 아닙니다. 재능보다는 연습량이 실력을 만듭니다.
</div>

**✅ 올바른 마인드셋 (Right Attitude)**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">과정을 즐기기</div><div class="wda-fcard-dsc">문제를 풀었을 때의 쾌감, 문제 푸는 재미를 느껴보세요.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">못 푸는 게 당연</div><div class="wda-fcard-dsc">처음엔 모르는 게 정상입니다. 좌절하지 마세요.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">비교하지 않기</div><div class="wda-fcard-dsc">남들과 비교하지 말고, <strong>"어제의 나보다 나아지면 성공"</strong>이라고 생각하세요.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">포기하지 않기</div><div class="wda-fcard-dsc">꾸준히 하면 반드시 늡니다. 이것이 불변의 진리입니다.</div></div>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>코딩테스트는 <strong>주어진 문제를 코드로 해결</strong>하는 시험이며, IT 기업 채용의 필수 관문이다.</li>
    <li>채점은 <strong>정확성 + 효율성 + 메모리</strong> 3가지 기준을 모두 통과해야 한다.</li>
    <li>문제 유형은 크게 <strong>구현 / 자료구조 / 알고리즘</strong> 3가지로 나뉜다.</li>
    <li>준비는 <strong>기본기 → 문제 풀이 연습 → 실전 대비</strong> 순서로 진행한다.</li>
    <li>Level 0부터 시작해 <strong>매일 꾸준히</strong> 푸는 것이 몰아서 푸는 것보다 효과적이다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 코딩테스트는 수학을 잘해야 유리하다?</div>
    <div class="wda-mistake-right">정답: 고등수학은 필요 없으며, <strong>사칙연산과 논리적 사고</strong>만 있으면 충분하다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 알고리즘을 다 알아야 시작할 수 있다?</div>
    <div class="wda-mistake-right">정답: 입문 단계(Lv.1~2)는 <strong>기본 문법과 구현 능력</strong>만으로도 충분하다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 답만 맞으면 무조건 통과다?</div>
    <div class="wda-mistake-right">정답: 정확성뿐 아니라 <strong>효율성(시간 초과 여부)과 메모리 사용량</strong>까지 모두 만족해야 통과된다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 어려운 문제부터 도전해야 실력이 빨리 는다?</div>
    <div class="wda-mistake-right">정답: <strong>구현 → 자료구조 → 알고리즘</strong> 순으로, 쉬운 유형부터 기본기를 다지는 것이 먼저다.</div>
  </div>
</div>

**🧩 풀이 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">풀이 공식 1 · 채점 통과 조건</div>
    <div class="wda-formula-block-body"><code>정확성 + 효율성 + 메모리</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">풀이 공식 2 · 문제 처리 흐름</div>
    <div class="wda-formula-block-body"><code>입력 → 알고리즘 → 출력</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">풀이 공식 3 · 준비 순서</div>
    <div class="wda-formula-block-body"><code>기본기 → 문제풀이 → 실전대비</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">코딩테스트란 무엇인가?</div>
    <div class="wda-flip-back">주어진 문제를 코드로 해결하고 자동 채점 시스템으로 평가하는 시험이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">채점 기준 3가지는?</div>
    <div class="wda-flip-back">정확성, 효율성, 메모리 사용량이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">문제 유형 3가지는?</div>
    <div class="wda-flip-back">구현, 자료구조, 알고리즘이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">solution 함수 이름을 바꾸면 어떻게 되나?</div>
    <div class="wda-flip-back">채점 시스템이 해당 함수를 호출하지 못해 채점이 되지 않는다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">시간 초과(Time Out)란?</div>
    <div class="wda-flip-back">답은 맞아도 제한 시간 내에 실행되지 못해 오답 처리되는 것이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">입문자는 어디서 시작해야 하나?</div>
    <div class="wda-flip-back">프로그래머스 Level 0부터 쉬운 문제로 시작한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">효과적인 학습 습관은?</div>
    <div class="wda-flip-back">몰아서 풀기보다 매일 1~2문제씩 꾸준히 푸는 것이다.</div>
  </div>
</div>
