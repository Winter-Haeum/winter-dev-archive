---
title: "3-3: 피드·목록형 화면 검토하기"
category: "ai-vibe-coding"
section: "lesson-3"
date: "2026-06-11"
status: "completed"
description: "카드가 반복되는 피드·목록 화면의 구성 요소를 정리하고, 빈 상태·로딩·에러 상태까지 포함해 화면을 검토하는 기준을 익힙니다."
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
  • <strong>피드 카드 구조</strong> — 카드가 반복되는 화면의 기본 구성 요소를 정리합니다<br>
  • <strong>화면 상태 재확인</strong> — 빈 상태·로딩·에러 상태를 모바일 화면 관점에서 검토합니다<br>
  • <strong>검토 중심 접근</strong> — 새로운 데이터 저장 방식을 배우지 않고, 이미 있는 화면을 검토하는 데 집중합니다
</div>

---

## 1. 피드·목록형 화면의 기본 구성 요소

lesson-2에서 project-table이나 community-post 같은 데이터를 다루는 방법을 배웠다면, 이 문서는 그 데이터가 화면에 <code>feed-card</code>처럼 반복해서 나타날 때 무엇을 검토해야 하는지를 다룹니다.

데이터를 어떻게 저장하고 조회하는지는 [[2-2-db-schema|lesson-2 문서]]로 위임하고, 여기서는 화면에 카드가 여러 개 반복될 때의 구성과 상태에 집중합니다.

<table class="wda-mtable">
<thead><tr><th>구성 요소</th><th>역할</th></tr></thead>
<tbody>
<tr><td>작성자 표시</td><td>이 카드가 누구의 내용인지 보여줍니다.</td></tr>
<tr><td>내용 요약</td><td>전체 내용 중 화면에 보여줄 핵심만 간추립니다.</td></tr>
<tr><td>작성 시간</td><td>언제 등록된 항목인지 알려줍니다.</td></tr>
<tr><td>상태 표시</td><td>공개 여부, 처리 중 여부 같은 부가 정보를 보여줍니다.</td></tr>
</tbody>
</table>

---

## 2. 카드 반복 구조

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 데이터 목록</div><div class="wda-fnode-dsc">post-list 형태로 준비된 여러 항목</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 카드 반복</div><div class="wda-fnode-dsc">항목 하나당 feed-card 하나로 표시</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 상태 처리</div><div class="wda-fnode-dsc">로딩·빈 상태·에러 상태 분기</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">4. 사용자 흐름 확인</div><div class="wda-fnode-dsc">스크롤·터치로 자연스럽게 탐색되는지 확인</div></div>
</div>

---

## 3. 화면 상태를 모바일 관점에서 다시 보기

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">피드 데이터 있음</div>
    카드가 세로로 쌓여 나열됩니다. 카드 간 간격이 좁으면 다음 카드와 헷갈릴 수 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">빈 상태</div>
    항목이 하나도 없을 때는 좁은 화면에서도 "아직 등록된 내용이 없습니다" 같은 안내가 눈에 잘 띄어야 합니다.
  </div>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>로딩·에러 상태는 [[2-5-community-dev|lesson-2 문서]]에서 다룬 것과 같은 원칙(로딩 표시·빈 상태 안내·에러 시 재시도)을 따르되, 좁은 화면에서는 안내 문구와 버튼이 <strong>충분한 터치 영역</strong>을 갖는지 함께 확인합니다.</p>
</div>

---

## 4. 카드가 여러 장 쌓일 때 주의점

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">카드 간 간격</div><div class="wda-fcard-dsc">카드 사이 여백이 부족하면 어디까지가 한 카드인지 구분하기 어렵습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">내용 길이</div><div class="wda-fcard-dsc">긴 내용은 요약해서 보여주고, 전체 내용은 별도 화면에서 확인하게 합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">더 불러오기</div><div class="wda-fcard-dsc">한 번에 몇 개까지 보여줄지, 더 볼 방법을 어떻게 안내할지는 개념만 소개하고 세부 구현은 다루지 않습니다.</div></div>
</div>

---

## 5. AI에게 피드 화면 검토를 요청하는 예시

```
목표:
- 목록 화면(feed-card 반복)이 모바일에서도 잘 보이는지 점검하고 싶습니다.

현재 상황:
- 카드가 세로로 나열되고 있습니다.
- 데이터가 없을 때, 불러오는 중일 때 화면이 어떻게 보이는지 확실하지 않습니다.

제약:
- 새로운 데이터 저장 방식을 추가하지 말고 화면 상태 처리만 점검해주세요.
- 실제 개인정보는 넣지 말고 placeholder로 유지해주세요.

출력 형식:
1. 확인된 카드 구성 문제
2. 빈 상태·로딩·에러 상태 처리 여부
3. 수정 요청문
4. 다시 확인할 체크리스트
```

---

## 6. 검토 체크리스트

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">카드 구성</div><div class="wda-fcard-dsc">작성자·내용 요약·시간·상태가 빠짐없이 표시되는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">간격과 여백</div><div class="wda-fcard-dsc">카드 사이 간격이 좁은 화면에서도 충분한지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">상태 처리</div><div class="wda-fcard-dsc">빈 상태·로딩·에러 상태가 모바일에서도 잘 보이는지 확인합니다.</div></div>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>피드·목록형 화면의 카드는 <strong>작성자·내용 요약·작성 시간·상태 표시</strong>로 구성된다.</li>
    <li>카드 반복 구조는 <strong>데이터 목록 → 카드 반복 → 상태 처리 → 사용자 흐름 확인</strong> 순서로 검토한다.</li>
    <li>데이터 저장·조회 방식은 lesson-2에서 다뤘으므로, 이 문서에서는 <strong>화면 검토</strong>에만 집중한다.</li>
    <li>카드가 여러 장 쌓일 때는 <strong>카드 간 간격과 내용 길이</strong>를 특히 신경 쓴다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 피드 화면을 다루려면 DB 조회 문법부터 다시 배워야 한다?</div>
    <div class="wda-mistake-right">정답: 데이터 조회 방식은 <strong>lesson-2에서 이미 다뤘고</strong>, 이 문서는 화면에 카드가 반복될 때의 구성과 상태 검토에 집중한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 카드 간격은 데스크톱과 모바일에서 똑같이 두면 된다?</div>
    <div class="wda-mistake-right">정답: 좁은 화면에서는 간격이 부족하면 <strong>카드 경계가 헷갈릴 수 있어</strong> 별도로 점검해야 한다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 카드 구성</div>
    <div class="wda-formula-block-body"><code>작성자 · 내용 요약 · 시간 · 상태</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 검토 흐름</div>
    <div class="wda-formula-block-body"><code>목록 → 카드 반복 → 상태 처리 → 흐름 확인</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">피드 카드의 기본 구성 요소는?</div>
    <div class="wda-flip-back">작성자 표시, 내용 요약, 작성 시간, 상태 표시다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">이 문서에서 데이터 저장·조회 방식을 다시 다루지 않는 이유는?</div>
    <div class="wda-flip-back">해당 내용은 lesson-2에서 이미 다뤘고, 이 문서는 화면 검토에 집중하기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">카드가 여러 장 쌓일 때 특히 신경 써야 할 것은?</div>
    <div class="wda-flip-back">카드 간 간격과 내용 길이(요약 처리)다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">빈 상태·에러 상태 처리 원칙은 어디서 이어지나?</div>
    <div class="wda-flip-back">lesson-2에서 다룬 로딩 표시·빈 상태 안내·에러 재시도 원칙을 그대로 이어받는다.</div>
  </div>
</div>
