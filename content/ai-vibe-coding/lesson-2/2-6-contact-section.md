---
title: "2-6: 데이터 연결 마무리 점검"
category: "ai-vibe-coding"
section: "lesson-2"
date: "2026-06-10"
status: "completed"
description: "lesson-2에서 다룬 데이터 구조·연결·문의 기능·목록 화면을 되짚어보고, 보안 체크리스트와 다음 단계를 확인합니다."
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
  • <strong>전체 흐름 정리</strong> — lesson-2에서 다룬 내용을 한눈에 되짚어봅니다<br>
  • <strong>보안 점검</strong> — 연결 정보와 개인정보 처리가 안전한지 확인합니다<br>
  • <strong>다음 단계 확인</strong> — 이후 문서에서 다룰 방향을 가볍게 살펴봅니다
</div>

---

## 1. lesson-2 전체 흐름 되짚기

lesson-2에서는 정적이던 포트폴리오에 실제 데이터를 연결하는 과정을 다뤘습니다. 이 문서는 새로운 내용을 배우기보다, 지금까지 만든 것이 제대로 이어져 있는지 점검하고 정리하는 문서입니다.

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">2-1</div><div class="wda-fnode-dsc">데이터 필요성 이해</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2-2</div><div class="wda-fnode-dsc">project-table 구조 설계</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2-3</div><div class="wda-fnode-dsc">데이터 저장소 연결</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2-4</div><div class="wda-fnode-dsc">문의 기능 구현</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2-5</div><div class="wda-fnode-dsc">목록 화면 상태 처리</div></div>
</div>

---

## 2. 최종 점검 체크리스트

<div class="wda-check-note">
  <ul>
    <li>project-table이 <strong>설계한 필드 그대로</strong> 만들어져 있는지 확인했다.</li>
    <li>데이터 저장소 연결이 <strong>에러 없이 성공</strong>하는지 확인했다.</li>
    <li>contact-section에서 남긴 문의 메시지가 <strong>실제로 저장</strong>되는지 확인했다.</li>
    <li>project-section 목록 화면에 <strong>로딩·빈 상태·에러 상태</strong>가 모두 준비되어 있는지 확인했다.</li>
  </ul>
</div>

---

## 3. 보안 점검

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>코드나 문서 어디에도 <strong>실제 연결 키·비밀번호 값</strong>이 그대로 남아 있지 않은지 확인합니다. 연결 정보를 담은 환경변수 파일이 공개 저장소에 함께 올라가지 않았는지도 다시 확인합니다.</p>
</div>

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">연결 정보 노출</div><div class="wda-fcard-dsc">코드, 커밋 이력, 문서에 실제 키 값이 남아있지 않은지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">개인정보 최소화</div><div class="wda-fcard-dsc">contact-message가 꼭 필요한 정보만 수집하는지 다시 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">공개 범위</div><div class="wda-fcard-dsc">비공개로 설계한 필드가 화면에 실수로 노출되지 않는지 확인합니다.</div></div>
</div>

---

## 4. AI가 만든 결과물, 마지막까지 검토하는 습관

**💡 설명**

<div class="wda-callout wda-ci">
  <p>lesson-1부터 이어온 원칙은 lesson-2에서도 동일합니다. AI가 만들어 준 데이터 구조, 연결 코드, 입력 검증, 목록 화면 모두 <strong>생성 → 검토 → 필요하면 수정 요청</strong>의 흐름을 거칩니다. 결과물을 그대로 신뢰하기보다, 이 문서들에서 정리한 체크리스트로 한 번씩 확인하는 습관을 들입니다.</p>
</div>

---

## 5. 다음 단계 미리보기

**✅ 권장 방식**

<div class="wda-callout wda-cs">
  <p>지금까지 만든 화면은 데스크톱 기준으로 확인한 화면입니다. 이후 문서에서는 지금 만든 화면이 다른 환경에서도 잘 보이는지 넓혀가는 내용을 다룰 예정입니다. 구체적인 내용은 해당 문서에서 자세히 안내합니다.</p>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>lesson-2는 <strong>데이터 필요성 → 구조 설계 → 저장소 연결 → 문의 기능 → 목록 화면</strong> 순서로 진행되었다.</li>
    <li>마무리 전 <strong>연결 정보 노출 여부, 개인정보 최소화, 공개 범위</strong>를 반드시 점검한다.</li>
    <li>AI 결과물은 lesson-1부터 이어온 대로 <strong>생성 → 검토 → 수정 요청</strong> 흐름으로 다룬다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 화면이 정상적으로 보이면 보안 점검은 생략해도 된다?</div>
    <div class="wda-mistake-right">정답: 화면이 정상이어도 <strong>코드나 이력에 연결 키가 남아 있을 수 있어</strong> 별도로 점검해야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 이전 문서에서 이미 확인했으니 마지막 점검은 형식적인 절차다?</div>
    <div class="wda-mistake-right">정답: 여러 문서를 거치며 만든 기능들이 <strong>서로 잘 이어져 있는지</strong>는 전체를 놓고 다시 확인해야 알 수 있다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · lesson-2 흐름</div>
    <div class="wda-formula-block-body"><code>필요성 → 설계 → 연결 → 입력 → 목록</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 검토 습관</div>
    <div class="wda-formula-block-body"><code>생성 → 검토 → 수정 요청</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">lesson-2의 전체 흐름은?</div>
    <div class="wda-flip-back">데이터 필요성 이해 → 구조 설계 → 저장소 연결 → 문의 기능 → 목록 화면 순서다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">배포 전 가장 먼저 확인할 보안 항목은?</div>
    <div class="wda-flip-back">코드나 문서에 실제 연결 키 값이 남아 있지 않은지 확인하는 것이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">AI 결과물을 다루는 기본 원칙은?</div>
    <div class="wda-flip-back">생성 → 검토 → 필요하면 수정 요청의 흐름을 거친다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">다음 문서에서는 어떤 방향을 다루나?</div>
    <div class="wda-flip-back">지금 만든 화면을 다른 환경에서도 잘 보이도록 넓혀가는 내용을 다룬다.</div>
  </div>
</div>
