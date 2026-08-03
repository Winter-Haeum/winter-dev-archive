---
title: "3-4: 반응형 화면 점검하기"
category: "ai-vibe-coding"
section: "lesson-3"
date: "2026-06-11"
status: "completed"
description: "lesson-3에서 다룬 반응형·모바일·목록 화면을 되짚어 최종 점검하고, lesson-4에서 다룰 최종 완성 단계를 짧게 예고합니다."
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
  • <strong>전체 흐름 정리</strong> — lesson-3에서 다룬 내용을 한눈에 되짚어봅니다<br>
  • <strong>최종 점검</strong> — 반응형·모바일·목록 화면이 잘 갖춰졌는지 확인합니다<br>
  • <strong>다음 단계 확인</strong> — lesson-4에서 다룰 방향을 가볍게 살펴봅니다
</div>

---

## 1. lesson-3 전체 흐름 되짚기

lesson-3에서는 데스크톱 기준으로 만들어진 포트폴리오를 모바일 화면까지 고려하도록 확장하는 과정을 다뤘습니다. 이 문서는 새로운 내용을 배우기보다, 지금까지 만든 반응형 화면이 잘 갖춰졌는지 점검하고 정리하는 문서입니다.

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">3-1</div><div class="wda-fnode-dsc">화면 크기 차이 이해</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3-2</div><div class="wda-fnode-dsc">모바일 레이아웃 요청</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3-3</div><div class="wda-fnode-dsc">피드·목록 화면 검토</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3-4</div><div class="wda-fnode-dsc">반응형 최종 점검</div></div>
</div>

---

## 2. 최종 점검 체크리스트

<div class="wda-check-note">
  <ul>
    <li>포트폴리오 화면을 <strong>여러 화면 크기</strong>(데스크톱·모바일 등)에서 확인했다.</li>
    <li>버튼과 링크가 <strong>충분한 터치 영역</strong>을 갖추고 있는지 확인했다.</li>
    <li>피드·목록형 화면에 <strong>빈 상태·로딩·에러 상태</strong>가 모바일에서도 잘 보이는지 확인했다.</li>
    <li>정보 우선순위가 <strong>화면 크기에 맞게 재배치</strong>되어 있는지 확인했다.</li>
  </ul>
</div>

---

## 3. 자주 나오는 반응형 문제와 수정 요청

<table class="wda-mtable">
<thead><tr><th>문제</th><th>확인 방법</th><th>요청 예시 방향</th></tr></thead>
<tbody>
<tr><td>텍스트 겹침</td><td>좁은 화면에서 줄바꿈이 깨지는지 확인</td><td>"본문 영역의 줄바꿈이 겹치지 않도록 조정해주세요"</td></tr>
<tr><td>버튼 잘림</td><td>버튼이 화면 밖으로 밀려나는지 확인</td><td>"버튼이 화면 안에 완전히 들어오도록 배치해주세요"</td></tr>
<tr><td>가로 스크롤</td><td>의도치 않은 가로 스크롤이 생기는지 확인</td><td>"가로 스크롤이 생기지 않도록 폭을 확인해주세요"</td></tr>
<tr><td>빈 상태 안내 없음</td><td>목록이 비었을 때 문구가 있는지 확인</td><td>"데이터가 없을 때 안내 문구를 추가해주세요"</td></tr>
</tbody>
</table>

---

## 4. AI가 만든 결과물, 끝까지 검토하는 습관

<div class="wda-callout wda-ci">
  <p>lesson-1~2부터 이어온 원칙은 lesson-3에서도 동일합니다. AI가 수정해 준 레이아웃과 카드 화면 모두 <strong>생성 → 검토 → 필요하면 수정 요청</strong>의 흐름을 거칩니다. 결과물을 화면 크기만 줄여 확인하지 말고, 이 문서들에서 정리한 체크리스트로 한 번씩 점검하는 습관을 들입니다.</p>
</div>

---

## 5. 다음 단계 미리보기

<div class="wda-callout wda-cs">
  <p>지금까지 화면의 구조와 반응형 동작을 다듬었다면, 이후 문서에서는 포트폴리오를 최종적으로 완성하고 외부에 공개하는 단계를 다룰 예정입니다. 구체적인 내용은 해당 문서에서 자세히 안내합니다.</p>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>lesson-3는 <strong>화면 크기 차이 이해 → 모바일 레이아웃 요청 → 피드·목록 화면 검토 → 반응형 최종 점검</strong> 순서로 진행되었다.</li>
    <li>최종 점검에서는 <strong>화면 크기별 확인, 터치 영역, 빈/로딩/에러 상태, 정보 우선순위</strong>를 다시 살펴본다.</li>
    <li>AI 결과물은 lesson-1~2부터 이어온 대로 <strong>생성 → 검토 → 수정 요청</strong> 흐름으로 다룬다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 문서별로 이미 확인했으니 마지막 점검은 형식적인 절차다?</div>
    <div class="wda-mistake-right">정답: 문서별로 만든 레이아웃과 카드 화면이 <strong>전체적으로 잘 이어지는지</strong>는 한 번에 놓고 다시 확인해야 알 수 있다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 반응형 점검이 끝났으니 바로 배포와 도메인 연결로 넘어가면 된다?</div>
    <div class="wda-mistake-right">정답: 배포와 도메인 연결은 <strong>다음 문서군에서 별도로 다루는 내용</strong>이며, 이 문서에서는 점검까지만 다룬다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · lesson-3 흐름</div>
    <div class="wda-formula-block-body"><code>차이 이해 → 레이아웃 요청 → 카드 검토 → 최종 점검</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 검토 습관</div>
    <div class="wda-formula-block-body"><code>생성 → 검토 → 수정 요청</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">lesson-3의 전체 흐름은?</div>
    <div class="wda-flip-back">화면 크기 차이 이해 → 모바일 레이아웃 요청 → 피드·목록 화면 검토 → 반응형 최종 점검 순서다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">최종 점검에서 다시 확인할 항목은?</div>
    <div class="wda-flip-back">여러 화면 크기, 터치 영역, 빈/로딩/에러 상태, 정보 우선순위다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">AI 결과물을 다루는 기본 원칙은?</div>
    <div class="wda-flip-back">생성 → 검토 → 필요하면 수정 요청의 흐름을 거친다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">다음 문서군에서는 어떤 방향을 다루나?</div>
    <div class="wda-flip-back">포트폴리오를 최종적으로 완성하고 외부에 공개하는 단계를 다룬다.</div>
  </div>
</div>
