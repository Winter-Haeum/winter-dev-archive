---
title: "1-5: 포트폴리오 사이트 제작"
category: "ai-vibe-coding"
section: "lesson-1"
description: "지금까지 만든 포트폴리오 첫 버전을 점검하고, 다음 단계에서 다룰 내용을 짧게 예고하며 lesson-1을 마무리한다."
tags:
  - ai-vibe-coding
  - lesson-1
  - portfolio
  - checklist
date: "2026-06-11"
status: "completed"
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
  • <strong>첫 버전 점검</strong> — lesson-1에서 만든 결과물이 계획대로 준비됐는지 확인합니다<br>
  • <strong>점검 습관 정리</strong> — 다음 단계로 넘어가기 전 확인할 항목을 정리합니다<br>
  • <strong>다음 단계 예고</strong> — 이후 학습에서 무엇을 다루는지 짧게 확인합니다
</div>

---

## 1. 이 문서에서 다루는 것

<div class="wda-callout wda-ci">
  <p><strong>이 문서는 lesson-1을 마무리하며, 지금까지 만든 포트폴리오 첫 버전을 점검하는 단계입니다.</strong></p>
  <p>데이터베이스 연동, 실제 콘텐츠 채우기, 배포처럼 이후 단계에서 다룰 내용은 여기서 진행하지 않고 방향만 짧게 안내합니다.</p>
</div>

---

## 2. first-version-check 체크리스트

<div class="wda-check-note">
  <ul>
    <li>1-2에서 정리한 섹션들이 화면에 모두 존재하는가</li>
    <li>각 섹션이 어떤 역할인지 알아볼 수 있는가</li>
    <li>화면 크기를 줄여도 레이아웃이 크게 무너지지 않는가</li>
    <li>1-4에서 발견한 수정 사항이 실제로 반영됐는가</li>
  </ul>
</div>

<div class="wda-callout wda-cw">
  <p>이 시점에서 화면이 완벽할 필요는 없습니다. 구조가 잡혀 있고, 각 섹션의 역할을 알아볼 수 있으면 lesson-1의 목표는 달성된 것입니다.</p>
</div>

---

## 3. 지금까지의 흐름 되돌아보기

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1-1</div><div class="wda-fnode-dsc">웹 기초 개념</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">1-2</div><div class="wda-fnode-dsc">섹션 기획</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">1-3</div><div class="wda-fnode-dsc">초안 요청</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">1-4</div><div class="wda-fnode-dsc">검토·수정</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">1-5</div><div class="wda-fnode-dsc">점검</div></div>
</div>

이 다섯 단계는 앞으로도 반복해서 쓰이는 흐름입니다. 새로운 화면이나 기능을 추가할 때마다 같은 순서(기획 → 요청 → 검토 → 수정 → 점검)를 따르면 됩니다.

---

## 4. 다음 단계 미리 보기

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">데이터 저장</div><div class="wda-fcard-dsc">입력한 정보를 어딘가에 저장하고 불러오는 방법을 다룹니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">실제 콘텐츠</div><div class="wda-fcard-dsc">자리만 표시했던 부분을 실제 내용으로 채워갑니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">배포</div><div class="wda-fcard-dsc">완성된 사이트를 인터넷에 공개하는 방법은 뒤쪽 단계에서 별도로 다룹니다.</div></div>
</div>

---

## 5. ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>lesson-1의 목표는 <strong>완성된 사이트</strong>가 아니라 <strong>구조가 잡힌 첫 버전</strong>이다.</li>
    <li>다음 단계로 넘어가기 전 <strong>섹션 존재 여부, 역할 구분, 레이아웃 안정성</strong>을 점검한다.</li>
    <li>기획 → 요청 → 검토 → 수정 → 점검의 흐름은 <strong>앞으로도 반복</strong>해서 사용한다.</li>
    <li>데이터 저장, 실제 콘텐츠, 배포는 <strong>이후 단계</strong>에서 다룬다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: lesson-1이 끝나면 포트폴리오가 완성돼야 한다?</div>
    <div class="wda-mistake-right">정답: lesson-1의 목표는 <strong>구조가 잡힌 첫 버전</strong>이며, 완성은 이후 단계에서 이루어진다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 기획→요청→검토→수정→점검 흐름은 lesson-1에서만 쓰인다?</div>
    <div class="wda-mistake-right">정답: 이 흐름은 새로운 화면이나 기능을 추가할 때마다 <strong>반복해서 사용</strong>하는 기본 패턴이다.</div>
  </div>
</div>

**🎯 최종 확인 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · lesson-1 목표</div>
    <div class="wda-formula-block-body"><code>구조가 잡힌 첫 버전</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 반복 흐름</div>
    <div class="wda-formula-block-body"><code>기획→요청→검토→수정→점검</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">lesson-1이 끝날 때 목표로 삼아야 할 상태는?</div>
    <div class="wda-flip-back">완성된 사이트가 아니라, 구조가 잡히고 역할이 구분되는 첫 버전입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">lesson-1에서 익힌 5단계 흐름은?</div>
    <div class="wda-flip-back">기획 → 요청 → 검토 → 수정 → 점검이며, 앞으로도 반복해서 사용합니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">데이터 저장과 배포는 언제 다루나요?</div>
    <div class="wda-flip-back">lesson-1 이후 단계에서 별도로 다룹니다.</div>
  </div>
</div>
