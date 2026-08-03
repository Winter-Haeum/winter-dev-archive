---
title: "4-1: 공개 전 전체 점검하기"
category: "ai-vibe-coding"
section: "lesson-4"
date: "2026-06-25"
status: "completed"
description: "포트폴리오를 공개하기 전 섹션·내용·반응형·데이터 상태·링크 상태를 종합적으로 점검하고, AI에게 전체 QA를 요청하는 방법을 익힙니다."
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
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px;font-size:.89rem;line-height:1.65;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-compare-ttl{font-size:.92rem;font-weight:700;line-height:1.5;margin-bottom:8px}
.wda-flow{display:flex;flex-wrap:wrap;gap:4px;margin:.8rem 0 1.6rem;align-items:flex-start}
.wda-fnode{flex:1 1 90px;border:1px solid rgba(128,128,128,.18);border-radius:8px;padding:10px 12px;text-align:center;min-width:80px}
.wda-fnode-ttl{font-size:.88rem;font-weight:700;margin-bottom:3px}
.wda-fnode-dsc{font-size:.82rem;line-height:1.55}
.wda-farrow{color:rgba(139,92,246,.45);font-size:1.1rem;flex-shrink:0;padding:0 2px;align-self:center}
@media(max-width:600px){.wda-flow{flex-direction:column;align-items:center}.wda-farrow{transform:rotate(90deg)}}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
table.wda-mtable{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
table.wda-mtable th,table.wda-mtable td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
table.wda-mtable th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
table.wda-mtable tr:nth-child(even) td{background:rgba(128,128,128,.025)}
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
  • <strong>점검 영역 파악</strong> — 공개 전 확인해야 할 네 가지 영역을 정리합니다<br>
  • <strong>제거 중심 사고</strong> — 기능 추가보다 누락·오류·과한 요소 제거에 집중합니다<br>
  • <strong>AI 전체 QA 요청</strong> — 포트폴리오 전체를 점검받는 요청문을 작성합니다
</div>

---

## 1. 공개 전 점검 영역 네 가지

lesson-1~3을 거치며 portfolio-final-check 대상이 될 화면과 데이터 흐름이 모두 준비되었습니다. lesson-4는 이 결과물을 공개 가능한 형태로 정리하는 마지막 단계입니다. 이 문서는 그 시작으로, 새 기능을 추가하기보다 지금까지 만든 것을 점검하고 다듬는 것에 집중합니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">구조·네비게이션</div><div class="wda-fcard-dsc">섹션 순서가 논리적이고 메뉴 이동이 직관적인지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">내용 품질</div><div class="wda-fcard-dsc">각 섹션의 설명이 비어 있거나 어색한 부분은 없는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">반응형·데이터 상태</div><div class="wda-fcard-dsc">모바일 화면과 빈 상태·로딩·에러 상태가 lesson-3의 기준대로 준비되었는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">링크 상태</div><div class="wda-fcard-dsc">버튼과 링크가 실제로 올바른 곳으로 연결되는지 확인합니다.</div></div>
</div>

---

## 2. 지금은 기능 추가 단계가 아닙니다

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">기능 추가</div>
    새로운 섹션이나 효과를 계속 더하면 점검이 끝없이 미뤄지고, 오히려 새로운 오류가 생길 수 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">최종 점검</div>
    지금 있는 것부터 빠짐없이 확인하고, 불필요하거나 과한 요소는 정리하는 데 집중합니다.
  </div>
</div>

<div class="wda-callout wda-cs">
  <p>final-qa 단계의 목표는 <strong>더 많이 만드는 것이 아니라, 있는 것을 확실하게 다듬는 것</strong>입니다.</p>
</div>

---

## 3. 점검 흐름

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 점검 요청</div><div class="wda-fnode-dsc">AI에게 전체 화면 점검 요청</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 결과 확인</div><div class="wda-fnode-dsc">영역별 점검 결과 확인</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 우선순위 정리</div><div class="wda-fnode-dsc">먼저 고칠 것부터 순서 정하기</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">4. 수정 요청</div><div class="wda-fnode-dsc">구체적인 수정 요청 전달</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">5. 재확인</div><div class="wda-fnode-dsc">수정 결과 다시 점검</div></div>
</div>

---

## 4. AI에게 전체 점검 요청하기

```
목표:
- 포트폴리오를 공개하기 전 최종 점검을 하고 싶습니다.

현재 상황:
- 주요 섹션과 데이터 화면은 준비했습니다.
- 모바일 화면도 한 번 점검했습니다.
- 아직 공개 주소를 공유하지 않았습니다.

제약:
- 새 기능을 추가하지 말고 누락, 오류, 과한 표현만 점검해주세요.
- 실제 개인정보나 키 값은 요청하지 마세요.

출력 형식:
1. 공개 전 점검 항목
2. 위험한 공개 정보
3. 수정 우선순위
4. 배포 후 다시 확인할 항목
```

<div class="wda-callout wda-cw">
  <p>위 예시는 방향을 보여주는 참고용입니다. 실제 요청에는 <strong>지금 화면에서 확인된 내용</strong>을 구체적으로 채워 넣습니다. 점검 결과가 "완벽하다"는 뜻은 아니며, 사람이 최종적으로 다시 확인해야 합니다.</p>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>공개 전 점검은 <strong>구조·네비게이션 / 내용 품질 / 반응형·데이터 상태 / 링크 상태</strong> 네 영역으로 진행한다.</li>
    <li>지금 단계의 목표는 <strong>기능 추가가 아니라 누락·오류·과한 요소 제거</strong>다.</li>
    <li>점검은 <strong>요청 → 결과 확인 → 우선순위 → 수정 요청 → 재확인</strong> 흐름으로 진행한다.</li>
    <li>AI의 점검 결과는 참고 자료이며, <strong>최종 판단은 사람이 한다.</strong></li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 공개 전 점검 중에도 새 기능을 계속 추가하는 것이 좋다?</div>
    <div class="wda-mistake-right">정답: 기능을 계속 추가하면 <strong>점검이 끝없이 미뤄지고 새 오류가 생길 수 있다.</strong> 지금은 있는 것을 다듬는 단계다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: AI 점검 결과가 "이상 없음"이면 그대로 공개해도 된다?</div>
    <div class="wda-mistake-right">정답: AI 점검은 참고 자료이며, <strong>사람이 직접 화면을 확인하는 과정</strong>이 반드시 필요하다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 점검 영역</div>
    <div class="wda-formula-block-body"><code>구조·내용·반응형·링크</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 이 단계의 목표</div>
    <div class="wda-formula-block-body"><code>추가 X · 제거·정리 O</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">공개 전 점검의 네 가지 영역은?</div>
    <div class="wda-flip-back">구조·네비게이션, 내용 품질, 반응형·데이터 상태, 링크 상태다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">이 단계의 핵심 목표는?</div>
    <div class="wda-flip-back">기능 추가가 아니라 누락·오류·과한 요소를 제거하는 것이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">전체 점검은 어떤 흐름으로 진행하나?</div>
    <div class="wda-flip-back">점검 요청 → 결과 확인 → 우선순위 정리 → 수정 요청 → 재확인 순서다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">AI의 점검 결과를 어떻게 다뤄야 하나?</div>
    <div class="wda-flip-back">참고 자료로 삼되, 최종 판단은 사람이 직접 확인하며 내린다.</div>
  </div>
</div>
