---
title: "1-4: 이미지 분석으로 컬러 팔레트 추출"
category: "ai-vibe-coding"
section: "lesson-1"
description: "AI가 만든 화면 초안을 그대로 쓰지 않고 검토한 뒤, 발견한 문제를 구체적으로 설명해 수정을 요청하는 방법을 정리한다."
tags:
  - ai-vibe-coding
  - lesson-1
  - review
  - revision-request
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
  • <strong>검토 기준 세우기</strong> — 생성된 화면에서 무엇을 확인해야 하는지 정리합니다<br>
  • <strong>문제 유형 파악</strong> — 내용 누락, 과한 디자인, 깨진 레이아웃, 불필요한 코드를 구분합니다<br>
  • <strong>수정 요청하기</strong> — 발견한 문제를 구체적으로 설명해 다시 요청하는 법을 익힙니다
</div>

---

## 1. 그대로 사용 vs 검토 후 수정

1-3에서 첫 화면 초안을 요청했다면, 이 문서는 그 결과물을 그대로 쓰지 않고 검토하는 단계입니다. AI가 만든 결과는 항상 완벽하지 않습니다. 이 문서는 무엇을 확인해야 하는지, 문제를 발견했을 때 어떻게 수정을 요청하는지를 다룹니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">그대로 사용</div>
    결과물을 열어보지 않고 바로 다음 단계로 넘어가면, 문제를 발견하는 시점이 점점 늦어집니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">검토 후 수정</div>
    화면을 직접 확인하고, 발견한 문제를 구체적으로 설명해 수정을 요청하면 원하는 결과에 더 빨리 도달합니다.
  </div>
</div>

---

## 2. 검토 체크리스트

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">내용 누락</div><div class="wda-fcard-dsc">요청했던 섹션이나 정보가 실제로 빠짐없이 들어갔는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">과한 디자인</div><div class="wda-fcard-dsc">요청하지 않은 색상, 애니메이션, 장식이 과하게 추가되지 않았는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">깨진 레이아웃</div><div class="wda-fcard-dsc">화면 크기를 줄여봤을 때도 배치가 무너지지 않는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">불필요한 코드</div><div class="wda-fcard-dsc">사용하지 않는 파일이나 중복된 코드가 남아있지 않은지 확인합니다.</div></div>
</div>

---

## 3. 수정을 요청하는 법

문제를 발견했다면, "이상해요"처럼 막연하게 말하기보다 **어디가, 어떻게** 문제인지 구체적으로 설명합니다.

```
방금 만든 portfolio-draft를 확인했는데 layout-feedback을 드리고 싶습니다.

발견한 문제:
1. project-section에 프로젝트 항목이 하나만 보입니다.
   여러 개가 나란히 배치되어야 하는데 누락된 것 같습니다.
2. 화면을 좁게 줄이면 contact-section의 내용이 화면 밖으로 넘칩니다.

요청:
- 위 두 가지만 수정해주세요.
- 다른 섹션은 지금 상태를 유지해주세요.

출력 형식:
1. 무엇을 어떻게 고쳤는지
2. 남아있는 확인 필요 사항
```

<div class="wda-callout wda-cw">
  <p>"다른 섹션은 유지해주세요"처럼 <strong>수정 범위를 제한</strong>하면, 문제없던 부분까지 함께 바뀌는 것을 막을 수 있습니다.</p>
</div>

---

## 4. ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>AI가 만든 화면은 <strong>바로 사용하지 않고 먼저 검토</strong>한다.</li>
    <li>검토는 <strong>내용 누락·과한 디자인·깨진 레이아웃·불필요한 코드</strong> 네 가지를 확인한다.</li>
    <li>수정 요청은 <strong>무엇이, 어떻게</strong> 문제인지 구체적으로 설명한다.</li>
    <li>수정 범위를 제한하면 <strong>다른 부분이 함께 바뀌는 것</strong>을 막을 수 있다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: "이상해요"처럼 짧게 말해도 AI가 알아서 고쳐준다?</div>
    <div class="wda-mistake-right">정답: <strong>어디가 어떻게</strong> 문제인지 구체적으로 설명해야 정확한 수정을 받을 수 있다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 수정 요청 시 범위를 굳이 제한하지 않아도 된다?</div>
    <div class="wda-mistake-right">정답: 범위를 제한하지 않으면 <strong>문제없던 부분</strong>까지 함께 바뀔 수 있다.</div>
  </div>
</div>

**🎯 검토·수정 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 검토 4가지</div>
    <div class="wda-formula-block-body"><code>누락 · 과한 디자인 · 깨짐 · 불필요 코드</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 수정 요청</div>
    <div class="wda-formula-block-body"><code>구체적 문제 + 범위 제한</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">화면 검토에서 확인할 4가지는?</div>
    <div class="wda-flip-back">내용 누락, 과한 디자인, 깨진 레이아웃, 불필요한 코드입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">좋은 수정 요청의 특징은?</div>
    <div class="wda-flip-back">무엇이 어떻게 문제인지 구체적으로 설명하고, 수정 범위를 제한합니다.</div>
  </div>
</div>
