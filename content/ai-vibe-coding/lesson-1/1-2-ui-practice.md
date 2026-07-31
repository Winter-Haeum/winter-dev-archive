---
title: "1-2: UI 요소 제작 실습"
category: "ai-vibe-coding"
section: "lesson-1"
date: "2026-06-10"
status: "completed"
description: "포트폴리오 첫 화면에 어떤 섹션이 필요한지 정리하고, 각 섹션에 담을 정보를 구조화하는 기획 단계를 다룬다."
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
  • <strong>필요한 섹션 정리</strong> — 첫 포트폴리오 화면에 무엇이 들어가야 하는지 정리합니다<br>
  • <strong>정보 구조 잡기</strong> — 각 섹션에 어떤 내용이 담겨야 하는지 구체화합니다<br>
  • <strong>기획 문서화</strong> — 다음 문서에서 AI에게 요청할 내용을 미리 정리해 둡니다
</div>

---

## 1. 이 문서에서 다루는 것

<div class="wda-callout wda-ci">
  <p><strong>이 문서는 코드를 작성하기 전, 포트폴리오 첫 화면에 무엇이 필요한지 기획하는 단계입니다.</strong></p>
  <p>실제로 AI에게 화면을 요청하고 만드는 방법은 [[1-3-box-model-flexbox|1-3 문서]]에서 다룹니다. 디자인 시스템이나 색상 체계 같은 세부 디자인은 이 문서에서 깊게 다루지 않습니다.</p>
</div>

---

## 2. 포트폴리오에 자주 쓰이는 섹션

랜딩페이지 형태의 포트폴리오는 보통 아래와 같은 섹션들의 조합으로 구성됩니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">portfolio-landing 상단 — Hero</div><div class="wda-fcard-dsc">이름과 한 줄 소개처럼, 방문자가 가장 먼저 보는 영역입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">profile-section</div><div class="wda-fcard-dsc">자기소개, 보유 기술 같은 정보를 담습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">project-section</div><div class="wda-fcard-dsc">진행한 프로젝트 목록을 보여줍니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">contact-section</div><div class="wda-fcard-dsc">연락 방법이나 SNS 링크를 안내합니다.</div></div>
</div>

모든 섹션을 다 넣을 필요는 없습니다. 첫 버전에서는 꼭 필요한 몇 개만 고르는 것으로 충분합니다.

---

## 3. 섹션마다 정보 구조 정하기

각 섹션을 만들기 전에, "이 섹션에 어떤 정보가 들어가는가"를 먼저 표로 정리해두면 이후 AI에게 요청할 때 훨씬 명확해집니다.

<table class="wda-mtable">
<thead><tr><th>섹션</th><th>담을 정보</th></tr></thead>
<tbody>
<tr><td>Hero</td><td>이름, 직무나 관심 분야, 한 줄 소개</td></tr>
<tr><td>profile-section</td><td>간단한 자기소개 문단, 기술 목록</td></tr>
<tr><td>project-section</td><td>프로젝트 이름, 한 줄 설명, 대표 이미지 자리</td></tr>
<tr><td>contact-section</td><td>이메일이나 SNS 링크 자리(실제 개인정보 대신 자리만 표시)</td></tr>
</tbody>
</table>

<div class="wda-callout wda-cw">
  <p>이 단계에서는 실제 이름, 연락처 같은 개인정보를 넣지 않습니다. "이름 자리", "이메일 자리"처럼 어떤 정보가 들어갈지 자리만 표시해 둡니다.</p>
</div>

---

## 4. 첫 버전과 나중 버전 구분하기

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">첫 버전 (portfolio-draft)</div>
    각 섹션이 어디에 있고 어떤 역할인지 알아볼 수 있는 정도면 충분합니다. 색상이나 애니메이션은 나중 단계입니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">완성 버전</div>
    디자인, 실제 콘텐츠, 배포까지 포함됩니다. 이 과정은 뒤 이어지는 학습에서 단계적으로 진행합니다.
  </div>
</div>

<div class="wda-callout wda-ci">
  <p>처음부터 완벽한 디자인을 목표로 하면 시작이 늦어집니다. 구조가 잘 잡힌 초안을 먼저 만들고, 이후 단계에서 다듬어가는 순서가 더 효율적입니다.</p>
</div>

---

## 5. ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>화면을 만들기 전에 <strong>어떤 섹션이 필요한지</strong>부터 정리한다.</li>
    <li>섹션마다 <strong>담을 정보</strong>를 표로 미리 구조화해두면 이후 요청이 명확해진다.</li>
    <li>이 단계에서는 <strong>실제 개인정보 대신 자리(placeholder)</strong>만 표시한다.</li>
    <li>첫 버전은 <strong>구조 확인용</strong>이며, 디자인과 콘텐츠는 이후 단계에서 다듬는다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 포트폴리오에는 가능한 많은 섹션을 넣어야 한다?</div>
    <div class="wda-mistake-right">정답: 꼭 필요한 몇 개 섹션만으로 <strong>첫 버전</strong>을 구성하는 것으로 충분하다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 기획 단계에서 실제 개인정보를 미리 넣어둬야 한다?</div>
    <div class="wda-mistake-right">정답: 이 단계는 <strong>자리(placeholder)</strong>만 표시하고, 실제 정보는 이후 콘텐츠 작업에서 채운다.</div>
  </div>
</div>

**🎯 기획 정리 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 기본 섹션</div>
    <div class="wda-formula-block-body"><code>Hero + profile + project + contact</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 정리 방식</div>
    <div class="wda-formula-block-body"><code>섹션 → 담을 정보 표로 정리</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 첫 버전 기준</div>
    <div class="wda-formula-block-body"><code>구조 확인 우선, 디자인은 나중</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">포트폴리오 첫 화면에 자주 쓰이는 4가지 섹션은?</div>
    <div class="wda-flip-back">Hero, profile-section, project-section, contact-section입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">섹션을 만들기 전에 먼저 할 일은?</div>
    <div class="wda-flip-back">각 섹션에 어떤 정보가 들어갈지 표로 정리하는 것입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">기획 단계에서 개인정보는 어떻게 다루나요?</div>
    <div class="wda-flip-back">실제 정보 대신 어떤 정보가 들어갈지 자리만 표시합니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">첫 버전에서 목표로 삼아야 할 것은?</div>
    <div class="wda-flip-back">완벽한 디자인이 아니라, 구조가 잘 보이는 초안입니다.</div>
  </div>
</div>
