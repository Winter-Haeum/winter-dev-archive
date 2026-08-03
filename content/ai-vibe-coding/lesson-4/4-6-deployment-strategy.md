---
title: "4-6: 학습 흐름 마무리하기"
category: "ai-vibe-coding"
section: "lesson-4"
date: "2026-06-29"
status: "completed"
description: "setup부터 lesson-4까지의 전체 학습 흐름을 되짚고, 앞으로 혼자 작업할 때의 체크리스트와 AI 사용 시 사람의 검토 책임을 정리합니다."
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
  • <strong>전체 흐름 복습</strong> — setup부터 lesson-4까지의 학습 여정을 되짚어봅니다<br>
  • <strong>유지보수 체크리스트</strong> — 혼자 작업할 때 참고할 기준을 정리합니다<br>
  • <strong>AI 활용 원칙</strong> — AI의 한계와 사람의 검토 책임을 다시 확인합니다
</div>

---

## 1. 전체 학습 흐름 되짚기

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">setup</div><div class="wda-fnode-dsc">개발 환경 준비</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">lesson-1</div><div class="wda-fnode-dsc">포트폴리오 첫 화면 기획</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">lesson-2</div><div class="wda-fnode-dsc">데이터 연결</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">lesson-3</div><div class="wda-fnode-dsc">반응형 확장</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">lesson-4</div><div class="wda-fnode-dsc">최종 점검·공개</div></div>
</div>

---

## 2. 단계별로 배운 것

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">setup</div><div class="wda-fcard-dsc">AI와 함께 개발할 수 있는 기본 환경을 준비했습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">lesson-1</div><div class="wda-fcard-dsc">화면 요구사항을 정리하고 첫 화면을 만드는 흐름을 익혔습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">lesson-2</div><div class="wda-fcard-dsc">데이터 구조 설계부터 저장·조회 화면 상태까지 다뤘습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">lesson-3</div><div class="wda-fcard-dsc">화면 크기에 따른 재배치와 목록 화면 검토를 익혔습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">lesson-4</div><div class="wda-fcard-dsc">전체 점검부터 공개 정리까지 마무리 과정을 다뤘습니다.</div></div>
</div>

---

## 3. 혼자 작업할 때의 체크리스트

<div class="wda-check-note">
  <ul>
    <li>새 화면을 만들 때는 <strong>요구사항 정리 → AI 요청 → 결과 검토</strong> 흐름을 유지한다.</li>
    <li>데이터를 다룰 때는 <strong>최소 수집 원칙</strong>과 <strong>연결 정보 보호</strong>를 항상 확인한다.</li>
    <li>화면을 고칠 때는 <strong>여러 화면 크기</strong>에서 결과를 재검토한다.</li>
    <li>공개하기 전에는 <strong>release-checklist</strong>대로 링크·개인정보·과장 표현을 마지막으로 점검한다.</li>
  </ul>
</div>

---

## 4. AI 사용의 한계와 사람의 책임

<div class="wda-callout wda-cw">
  <span class="wda-clabel">기억해 둘 것</span>
  <p>AI는 코드와 문서 초안을 빠르게 만들어 주지만, <strong>실제로 안전한지, 법적으로 문제없는지, 사실과 다르지 않은지</strong>는 사람이 최종적으로 확인해야 합니다. "법적으로 100% 안전하다"거나 "완벽하게 해결된다"는 표현은 이 문서군 전체에서 사용하지 않았습니다 — AI가 만든 결과물도 마찬가지입니다.</p>
</div>

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">AI에게 맡길 수 있는 것</div>
    코드 초안 작성, 반복적인 점검 항목 나열, 문서 초안 정리처럼 <strong>속도가 중요한 반복 작업</strong>입니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">사람이 검토해야 하는 것</div>
    실제 화면 확인, 개인정보·보안 점검, 사실 관계 확인처럼 <strong>결과에 대한 최종 책임이 필요한 판단</strong>입니다.
  </div>
</div>

---

## 5. 다음 학습 방향

**✅ 권장 방식**

<div class="wda-callout wda-cs">
  <p>지금까지의 흐름은 하나의 포트폴리오를 처음부터 끝까지 완성하는 과정이었습니다. 이후에는 오늘 익힌 점검·검토 습관을 유지하면서, 자신의 관심 분야에 맞는 다음 프로젝트나 학습 주제로 이어가면 됩니다.</p>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>학습 흐름은 <strong>환경 준비 → 첫 화면 기획 → 데이터 연결 → 반응형 확장 → 최종 점검·공개</strong> 순서였다.</li>
    <li>혼자 작업할 때도 <strong>요구사항 정리 → AI 요청 → 결과 검토</strong> 흐름을 유지한다.</li>
    <li>AI에게는 <strong>반복적인 초안 작업</strong>을, 사람은 <strong>최종 검토와 책임</strong>을 맡는다.</li>
    <li>배포·보안·법적 문제는 <strong>어떤 경우에도 100% 안전하다고 단정하지 않는다.</strong></li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: AI가 만든 결과물을 검토 없이 그대로 공개해도 괜찮다?</div>
    <div class="wda-mistake-right">정답: 개인정보·보안·사실 관계는 <strong>사람이 최종적으로 검토</strong>해야 하는 영역이다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 이 문서군을 마치면 더 이상 점검할 것이 없다?</div>
    <div class="wda-mistake-right">정답: 새로운 기능을 추가하거나 내용을 바꿀 때마다 <strong>같은 점검·검토 습관</strong>을 계속 적용해야 한다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 전체 흐름</div>
    <div class="wda-formula-block-body"><code>환경 → 기획 → 데이터 → 반응형 → 점검·공개</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 역할 분담</div>
    <div class="wda-formula-block-body"><code>AI = 초안 · 사람 = 최종 검토</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">setup부터 lesson-4까지의 전체 흐름은?</div>
    <div class="wda-flip-back">환경 준비 → 첫 화면 기획 → 데이터 연결 → 반응형 확장 → 최종 점검·공개다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">혼자 작업할 때도 유지해야 할 흐름은?</div>
    <div class="wda-flip-back">요구사항 정리 → AI 요청 → 결과 검토다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">AI와 사람의 역할 분담은?</div>
    <div class="wda-flip-back">AI는 반복적인 초안 작업, 사람은 최종 검토와 책임을 맡는다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">이 문서군에서 절대 사용하지 않은 단정적 표현은?</div>
    <div class="wda-flip-back">"법적으로 100% 안전하다", "완벽하게 해결된다" 같은 표현이다.</div>
  </div>
</div>
