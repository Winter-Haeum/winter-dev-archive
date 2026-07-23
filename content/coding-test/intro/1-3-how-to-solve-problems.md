---
title: "1-3 문제 푸는 방법 알아보기"
status: "completed"
description: "문제 풀이 4단계와 의사코드 작성법, 막혔을 때 대처법과 시간 관리 전략을 익힙니다."
category: "Coding Test"
section: "Coding Test"
tags:
  - coding-test
  - problem-solving
  - pseudocode
  - time-management
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
@media(max-width:600px){.wda-flow{flex-direction:column}.wda-farrow{transform:rotate(90deg)}}
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

## 1. 🧩 문제 풀이 4단계 (Standard Process)

코딩테스트 문제를 풀 때 지켜야 할 정석적인 순서입니다. "바로 코딩하지 말고" 앞 단계를 충분히 거치는 것이 핵심입니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">이해 (Understand)</div>
      <div class="wda-sdsc">문제를 읽고 무엇을 요구하는지 정확히 파악하기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">계획 (Plan)</div>
      <div class="wda-sdsc">어떻게 풀지 <strong>방법(알고리즘, 자료구조)</strong>을 미리 생각하기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">구현 (Implement)</div>
      <div class="wda-sdsc">생각한 방법을 실제 코드로 작성하기</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">검증 (Verify)</div>
      <div class="wda-sdsc">테스트하고 제출해서 확인하기</div>
    </div>
  </div>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  바로 코딩하지 말고, 1-2단계를 충분히 거쳐야 3-4단계가 수월해요!
</div>

---

## 2. 📋 1단계: 문제 이해하기 (Checklist)

문제를 처음 읽을 때 반드시 확인해야 할 4가지 체크리스트입니다.

| 체크 항목 | 질문 내용 | 예시 적용 (두 수의 합 문제) |
|---|---|---|
| 입력 | 뭐가 주어지나요? | 두 정수 a, b |
| 출력 | 뭘 구해야 하나요? | a + b 값 |
| 조건 | 제한사항이 뭔가요? | 둘 다 -100 ~ 100 사이 |
| 예시 | 예제로 이해가 되나요? | a=3, b=5 → return 8 (OK) |

---

## 3. 2단계: 계획 세우기 (의사코드 작성)

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">생각하는 방법 (How to think)</div>
    1. 손으로 풀어보기: 예제를 직접 손으로 써가며 풀어봅니다.<br>
    2. 단계 나누기: 큰 문제를 작은 단계들로 쪼갭니다.<br>
    3. 패턴 찾기: 비슷한 유형의 문제를 풀어본 적 있는지 떠올려 봅니다.<br>
    4. 의사코드 작성: 한글로 논리의 흐름을 적어봅니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">의사코드 예시 (Pseudocode)</div>
    [문제: 배열에서 가장 큰 수 찾기]<br>
    1. 첫 번째 값을 '최댓값'으로 설정한다.<br>
    2. 배열을 처음부터 끝까지 돌면서 확인한다. 만약 현재 값이 최댓값보다 크면, 최댓값을 현재 값으로 변경한다.<br>
    3. 최종적으로 최댓값을 반환한다.
  </div>
</div>

**Tip**

<div class="wda-callout wda-cs">
  • 의사코드는 한글로 써도 됩니다!<br>
  • 문법에 얽매이지 말고 <strong>"어떤 순서로 무엇을 할지"</strong>만 명확하면 OK입니다.
</div>

---

## 4. 3단계: 코드 작성하기 (구현)

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">핵심 활동</div><div class="wda-fcard-dsc">앞서 작성한 <strong>의사코드(한글 흐름)</strong>를 실제 <strong>프로그래밍 언어(JS 등)</strong>로 바꿉니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">변환 예시</div><div class="wda-fcard-dsc">(의사코드) 첫 번째 값을 최댓값으로 설정 → (코드) <code>let max = arr[0];</code></div></div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">작성 팁 (Tips)</div>
    <div class="wda-fcard-dsc">
      1. 한 단계씩: 의사코드 한 줄이 코드 몇 줄이 됩니다. 천천히 옮기세요.<br>
      2. 변수명은 의미 있게: a, b 보다는 max, count, result 처럼 명확하게 짓습니다.<br>
      3. 완벽하지 않아도 OK: 처음부터 완벽하고 짧은 코드를 짜려 하지 말고, 일단 동작하게 만드세요.<br>
      4. 모르면 검색: 연습할 때는 "JS 배열 최댓값" 처럼 구글링해도 됩니다. (단, 시험 중엔 안 돼요!)
    </div>
  </div>
</div>

---

## 5. ✅ 4단계: 테스트 및 제출 (검증)

코드가 올바르게 동작하는지 확인하고, 실수를 잡아내는 단계입니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">테스트 방법 (How to Test)</div>
    1. 예제 테스트: 문제에 주어진 예제 입력값으로 먼저 확인합니다.<br>
    2. 경계값 테스트: 최솟값, 최댓값, 0, 빈 배열([]) 등을 넣어봅니다. (가장 중요!)<br>
    3. 특수 케이스: 음수, 중복된 값, 이미 정렬된 경우 등 특이한 상황을 가정해 봅니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">자주 하는 실수 (Common Mistakes)</div>
    • 예제만 맞고 제출: "예제는 다 맞는데 왜 틀리죠?" → <strong>히든 테스트(숨겨진 케이스)</strong>에서 틀린 것입니다.<br>
    • 경계값 무시: 배열 길이가 0일 때 에러가 나는 경우가 많습니다.<br>
    • 시간 초과: 코드가 비효율적이면 답이 맞아도 효율성 테스트에서 실패합니다.
  </div>
</div>

**Tip**

<div class="wda-callout wda-cs">
  "왜 틀렸지?" 싶을 때는 경계값부터 의심해 보세요!
</div>

---

## 💻 실습 : 의사 코드 작성해보기

**🎯 Mission**

배열에서 가장 큰 수를 찾는 과정을 <strong>한글(의사 코드)</strong>로 논리정연하게 적어봅니다.

문제 설명: 정수 배열 numbers가 주어집니다. 배열의 원소 중 가장 큰 값을 return 하세요.

**🧪 예시 (Example)**

아래 입력이 들어왔을 때, 정답을 어떻게 찾아낼지 머릿속으로 그려보세요.

• 입력: [3, 1, 4, 1, 5, 9, 2, 6]<br>
• 출력: 9

**📝 정답 의사 코드 (Solution)**

가장 큰 값을 담을 변수 max를 만들고, 배열의 첫 번째 값으로 설정한다.
배열의 값을 처음부터 끝까지 하나씩 꺼내어 반복한다.(반복문)
만약(if) 현재 꺼낸 값이 max보다 크다면, max의 값을 현재 값으로 변경한다.
반복이 끝나면 max를 반환한다.

**📝 실제 코드 (Implementation)**

```js
function solution(numbers) {
  let max = numbers[0]; // 1. 첫 번째 값으로 초기화

  // 2. 배열 전체 반복
  for (let i = 0; i < numbers.length; i++) {
    // 3. 현재 값이 max보다 크면 업데이트
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max; // 4. 결과 반환
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>초기화의 중요성</strong> — max를 무조건 0으로 시작하면 안 됩니다.<br>
  만약 배열이 [-1, -5, -3]처럼 음수만 있다면 0이 가장 큰 수가 되어버려 오답이 됩니다.<br>
  그래서 배열의 첫 번째 원소를 기준점으로 잡는 것이 안전합니다.<br>
  • <strong>알고리즘</strong> — 이것이 바로 <strong>'선형 탐색(Linear Search)'</strong>을 이용한 최댓값 찾기 알고리즘의 기초입니다.
</div>

---

## 6. 실전 전략 : 막혔을 때 & 시간 관리

**🛑 막혔을 때 대처법 (Troubleshooting)**

문제가 안 풀릴 때 당황해서 멍하니 있거나 포기하면 안 됩니다. 다음 행동 지침을 따르세요.

<div class="wda-compare">
  <div class="wda-compare-card wda-legacy">
    <div class="wda-compare-ttl">⛔ 멈추지 말고 (Don't)</div>
    • 멍하니 화면만 보고 있지 마세요.<br>
    • "난 못해"라며 포기하지 마세요.<br>
    • 이유 없이 무작정 코드를 수정하지 마세요.
  </div>
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-ttl">✅ 대신 이렇게 하세요 (Do)</div>
    • 문제 다시 읽기: 놓친 조건이 있을 수 있으니 꼼꼼히 다시 읽어보세요.<br>
    • 예제 손으로 풀기: 어디서 논리가 막히는지 손으로 써가며 찾아보세요.<br>
    • 작은 예시로 시작: [1, 2] 같이 아주 간단한 입력부터 넣어보세요.<br>
    • 부분만 풀기: 완벽하지 않아도, 일부라도 맞추면 부분 점수를 받을 수 있습니다.
  </div>
</div>

**골든 타임 룰**

<div class="wda-callout wda-cs">
  10분 동안 고민해도 도저히 모르겠다면? 과감히 다음 문제로 넘어가고, 나중에 다시 돌아오세요!
</div>

**⏰ 시간 관리 전략 (Time Management)**

시험 시간은 한정되어 있습니다. 점수를 극대화하기 위한 시간 배분 전략입니다.

**📍 기본 전략 (Basic Strategy)**

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">전체 훑어보기 (5분)</div><div class="wda-sdsc">모든 문제를 확인하고, 쉬운 문제가 무엇인지 먼저 파악합니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">쉬운 문제 먼저 (확보)</div><div class="wda-sdsc">풀 수 있는 문제는 최대한 빨리 풀어서 점수를 확보합니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">어려운 문제 (도전)</div><div class="wda-sdsc">확보한 점수를 바탕으로, 남은 시간을 어려운 문제에 집중 투자합니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">검토 (마지막 10분)</div><div class="wda-sdsc">제출 전 코드를 확인하고 실수한 게 없는지 점검합니다.</div></div></div>
</div>

**🧪 2시간 시험 예시 (3문제 기준)**

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">훑어보기</div><div class="wda-fnode-dsc">5분<br>문제 파악</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">쉬운 1번</div><div class="wda-fnode-dsc">30분<br>확실히 풀기 (점수 확보)</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">중간 2번</div><div class="wda-fnode-dsc">40분<br>집중해서 풀기</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">어려운 3번</div><div class="wda-fnode-dsc">35분<br>최대한 시도 (부분 점수 목표)</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">검토</div><div class="wda-fnode-dsc">10분<br>최종 재확인</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  • <strong>쉬운 문제 = 확실한 점수</strong> — 어려운 문제 하나에 올인하다가 시간이 부족해 쉬운 문제조차 못 풀면 가장 큰 손해입니다.<br>
  • <strong>부분 점수 챙기기</strong> — 코딩테스트는 0점 아니면 100점인 경우도 있지만, 테스트 케이스를 몇 개 통과했느냐에 따라 점수를 주는 경우도 많습니다.<br>
  완벽하지 않아도 제출해보는 것이 좋습니다.
</div>

---

## 7. 입문자를 위한 팁 & 핵심 정리

**🐣 입문자를 위한 팁 (Tips for Beginners)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Lv.0부터 시작</div><div class="wda-fcard-dsc">어려운 문제에 바로 도전하지 말고, 쉬운 것부터 풀며 자신감을 쌓으세요.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">매일 1문제</div><div class="wda-fcard-dsc">하루 30분이라도 꾸준함이 실력을 만듭니다. 매일 푸는 습관을 들이세요.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">모르면 답 봐도 OK</div><div class="wda-fcard-dsc">30분 고민해도 모르면 답을 보세요. 단, 이해하고 반드시 다시 풀어봐야 내 것이 됩니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">손으로 먼저</div><div class="wda-fcard-dsc">바로 키보드를 두드리지 말고, 종이에 논리를 먼저 풀어보는 습관을 들이세요.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">다른 풀이 보기</div><div class="wda-fcard-dsc">내 코드가 정답이어도 끝이 아닙니다. 다른 사람의 효율적인 코드를 보며 배우세요.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">복습하기</div><div class="wda-fcard-dsc">틀린 문제는 오답 노트처럼 다시 풀어보며 같은 실수를 반복하지 않도록 합니다.</div></div>
</div>

---

## ✅ 핵심 요약

오늘 배운 문제 풀이의 정석과 실전 전략을 정리합니다. 이 몇 가지만 기억해도 실전에서 크게 당황하지 않습니다.

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>문제 풀이는 <strong>이해 → 계획 → 구현 → 검증</strong>의 4단계로 진행한다.</li>
    <li>문제를 읽을 때 <strong>입력 / 출력 / 조건 / 예시</strong> 4가지를 반드시 확인한다.</li>
    <li>계획 단계에서는 <strong>의사코드(한글 논리 흐름)</strong>를 먼저 적는다.</li>
    <li>검증은 <strong>예제 테스트 → 경계값 테스트</strong>(최솟값, 최댓값, 빈 배열) 순으로 확인한다.</li>
    <li><strong>10분 이상</strong> 막히면 과감히 다음 문제로 넘어간다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 문제를 읽자마자 바로 코드부터 짜는 게 빠르다?</div>
    <div class="wda-mistake-right">정답: <strong>1~2단계(이해·계획)</strong>를 충분히 거쳐야 3~4단계가 오히려 더 빨라진다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 예제 입력만 통과하면 정답이다?</div>
    <div class="wda-mistake-right">정답: 별도의 <strong>히든 테스트 케이스</strong>가 있어 경계값까지 확인해야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 막히면 계속 붙잡고 있어야 한다?</div>
    <div class="wda-mistake-right">정답: <strong>10분 이상</strong> 고민해도 안 풀리면 다음 문제로 넘어갔다가 나중에 다시 돌아오는 것이 낫다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 어려운 문제부터 풀어야 점수가 높다?</div>
    <div class="wda-mistake-right">정답: <strong>쉬운 문제로 점수를 먼저 확보</strong>한 뒤 남은 시간을 어려운 문제에 투자하는 것이 유리하다.</div>
  </div>
</div>

**🧩 풀이 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">풀이 공식 1 · 4단계 순서</div>
    <div class="wda-formula-block-body"><code>이해 → 계획 → 구현 → 검증</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">풀이 공식 2 · 이해 체크리스트</div>
    <div class="wda-formula-block-body"><code>입력·출력·조건·예시</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">풀이 공식 3 · 검증 순서</div>
    <div class="wda-formula-block-body"><code>예제 테스트 → 경계값 테스트</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">문제 풀이 4단계는?</div>
    <div class="wda-flip-back">이해 → 계획 → 구현 → 검증 순으로 진행한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">문제 이해 단계에서 확인할 4가지는?</div>
    <div class="wda-flip-back">입력, 출력, 조건, 예시를 확인한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">의사코드란?</div>
    <div class="wda-flip-back">프로그래밍 문법 없이 한글로 논리 흐름을 적는 것이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">검증에서 가장 먼저 확인할 것은?</div>
    <div class="wda-flip-back">문제에 주어진 예제 입력값이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">막혔을 때 골든타임 룰은?</div>
    <div class="wda-flip-back">10분 동안 고민해도 안 풀리면 다음 문제로 넘어간다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">시간 관리 기본 전략은?</div>
    <div class="wda-flip-back">쉬운 문제부터 풀어 점수를 확보하고, 어려운 문제에 남은 시간을 투자한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">max 초기값을 0으로 잡으면 안 되는 이유는?</div>
    <div class="wda-flip-back">배열이 음수만 있을 경우 0이 최댓값이 되어버려 오답이 된다.</div>
  </div>
</div>
