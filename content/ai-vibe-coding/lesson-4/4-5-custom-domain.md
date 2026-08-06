---
title: "4-5: 제출 전 문서 정리하기"
category: "ai-vibe-coding"
section: "lesson-4"
date: "2026-06-29"
status: "completed"
description: "README, 프로젝트 설명, 커밋/PR 같은 제출용 문서를 정리하고, 개인정보 제거와 AI가 작성한 소개 문구의 과장 여부를 검토합니다."
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
  • <strong>제출 문서 정리</strong> — README·프로젝트 설명·커밋/PR을 점검합니다<br>
  • <strong>과장 표현 검토</strong> — AI가 작성한 소개 문구가 사실과 다르지 않은지 확인합니다<br>
  • <strong>개인정보 제거</strong> — 공개 문서에 남지 않아야 할 정보를 점검합니다
</div>

---

## 1. 제출 전 정리할 항목

[[4-4-portfolio-final-review|이전 문서]]에서 공개 주소를 정리했다면, 이번에는 submission-ready 상태를 만드는 문서 정리 단계입니다. 화면 자체가 아니라 README, 프로젝트 설명, 커밋과 PR 같은 텍스트 자료를 점검합니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">README</div><div class="wda-fcard-dsc">프로젝트 목적, 주요 기능, 사용 방법이 빠짐없이 정리되어 있는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">project-summary</div><div class="wda-fcard-dsc">프로젝트를 짧게 소개하는 문구가 실제 기능과 일치하는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">커밋 메시지</div><div class="wda-fcard-dsc">커밋 내용이 무엇을 했는지 알아볼 수 있게 작성되어 있는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">PR 설명</div><div class="wda-fcard-dsc">변경 사항과 이유가 정리되어 있는지 확인합니다.</div></div>
</div>

---

## 2. 자동 생성 문서는 그대로 쓰지 않는다

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">자동 생성 README</div>
    AI가 초안을 빠르게 만들어 주지만, 구현하지 않은 기능이 포함되거나 표현이 과장될 수 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">검토한 README</div>
    실제 구현 여부를 확인하고, 과장된 표현을 정리한 뒤 최종적으로 반영한 상태입니다.
  </div>
</div>

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">AI 초안 문구</div>
    "완벽한", "혁신적인" 같은 강한 표현이 실제 결과물보다 과장되어 있을 수 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">검토된 소개 문구</div>
    실제로 구현한 기능과 특징을 담백하고 정확하게 설명하는 문구입니다.
  </div>
</div>

---

## 3. README 정리 흐름

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 초안 작성</div><div class="wda-fnode-dsc">AI에게 README 초안 요청</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 사실 확인</div><div class="wda-fnode-dsc">실제 구현 여부와 일치하는지 확인</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 과장 제거</div><div class="wda-fnode-dsc">과도한 수식어와 단정적 표현 정리</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">4. 링크 확인</div><div class="wda-fnode-dsc">문서 안의 링크가 실제로 연결되는지 확인</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">5. 최종 반영</div><div class="wda-fnode-dsc">정리된 내용으로 문서 확정</div></div>
</div>

---

## 4. 개인정보·보안 정보 제거

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>README나 커밋 이력에 <strong>실제 이메일, 연락처, 연결 키 값</strong>이 남아 있지 않은지 확인합니다. 예시가 필요하다면 실제 값 대신 placeholder를 사용합니다.</p>
</div>

---

## 5. AI에게 README 정리 요청하기

**• README 점검 요청 프롬프트**

```
목표:
- 포트폴리오 프로젝트 README 초안을 점검하고 싶습니다.

현재 상황:
- 프로젝트 목적과 주요 기능은 정리했습니다.
- 사용 기술 목록은 아직 검토가 필요합니다.

제약:
- 실제 배포 URL과 이메일은 placeholder로 유지해주세요.
- 과장된 표현은 줄여주세요.
- 구현하지 않은 기능은 포함하지 마세요.

출력 형식:
1. 누락된 README 항목
2. 과장 가능성이 있는 표현
3. 링크 확인 항목
4. 수정된 문장 예시
```

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>제출 전에는 <strong>README·프로젝트 소개·커밋 메시지·PR 설명</strong>을 함께 점검한다.</li>
    <li>AI가 만든 초안은 <strong>과장된 표현이나 미구현 기능</strong>이 포함될 수 있어 그대로 쓰지 않는다.</li>
    <li>README 정리는 <strong>초안 → 사실 확인 → 과장 제거 → 링크 확인 → 최종 반영</strong> 흐름으로 진행한다.</li>
    <li>공개 전에는 <strong>실제 개인정보·연결 키</strong>가 남아 있지 않은지 반드시 확인한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: AI가 써준 소개 문구는 전문적이니 그대로 써도 된다?</div>
    <div class="wda-mistake-right">정답: <strong>실제 구현 여부와 다르게 과장</strong>되어 있을 수 있어 반드시 검토가 필요하다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: README만 신경 쓰면 되고 커밋 메시지는 상관없다?</div>
    <div class="wda-mistake-right">정답: 커밋 이력도 공개되므로 <strong>메시지 내용과 남아 있는 정보</strong>를 함께 점검해야 한다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 정리 대상</div>
    <div class="wda-formula-block-body"><code>README·소개문구·커밋·PR</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · README 흐름</div>
    <div class="wda-formula-block-body"><code>초안 → 사실확인 → 과장제거 → 링크확인 → 반영</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">제출 전 정리할 네 가지 문서는?</div>
    <div class="wda-flip-back">README, 프로젝트 소개 문구, 커밋 메시지, PR 설명이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">AI가 만든 README 초안을 그대로 쓰면 안 되는 이유는?</div>
    <div class="wda-flip-back">구현하지 않은 기능이 포함되거나 표현이 과장될 수 있기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">README 정리는 어떤 순서로 진행하나?</div>
    <div class="wda-flip-back">초안 작성 → 사실 확인 → 과장 제거 → 링크 확인 → 최종 반영이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">공개 전 마지막으로 확인할 것은?</div>
    <div class="wda-flip-back">README나 커밋 이력에 실제 개인정보·연결 키가 남아 있지 않은지다.</div>
  </div>
</div>
