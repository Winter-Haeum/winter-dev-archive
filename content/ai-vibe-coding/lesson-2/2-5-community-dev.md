---
title: "2-5: 목록 화면 상태 다루기"
category: "ai-vibe-coding"
section: "lesson-2"
date: "2026-06-10"
status: "completed"
description: "여러 데이터를 나열하는 목록 화면에서 로딩·빈 상태·에러 상태를 어떻게 처리할지 정리하고, 커뮤니티형 화면에도 같은 원리가 적용됨을 확인합니다."
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
  • <strong>목록 화면 상태</strong> — 정상·빈 상태·로딩·에러 네 가지 상태를 구분합니다<br>
  • <strong>상태별 처리 기준</strong> — 각 상태에서 화면에 무엇을 보여줘야 하는지 정리합니다<br>
  • <strong>패턴의 재사용</strong> — project-section 외의 목록형 화면에도 같은 원리가 적용됨을 확인합니다
</div>

---

## 1. 목록 화면에서 고려할 네 가지 상태

[[2-4-db-discovery|이전 문서]]에서 문의 메시지를 저장하는 흐름을 다뤘다면, 이번에는 여러 데이터를 한 번에 나열하는 목록 화면을 다룹니다.

project-section처럼 project-table의 여러 행을 화면에 나열할 때, 데이터가 없거나 불러오기에 실패하는 경우까지 고려해서 화면을 준비하는 방법을 정리합니다. 세부 쿼리 문법은 다루지 않고 화면 상태에 집중합니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">정상 상태</div><div class="wda-fcard-dsc">데이터를 정상적으로 불러와 목록으로 보여주는 상태입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">로딩 상태</div><div class="wda-fcard-dsc">데이터를 불러오는 중이라 아직 화면에 표시할 내용이 없는 상태입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">빈 상태</div><div class="wda-fcard-dsc">불러오기는 성공했지만 표시할 데이터가 하나도 없는 상태입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">에러 상태</div><div class="wda-fcard-dsc">데이터를 불러오는 과정에서 문제가 생긴 상태입니다.</div></div>
</div>

---

## 2. 요청부터 화면 표시까지 흐름

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 요청</div><div class="wda-fnode-dsc">목록 화면 진입 시 데이터 요청</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 로딩 표시</div><div class="wda-fnode-dsc">응답을 기다리는 동안 로딩 표시</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 분기</div><div class="wda-fnode-dsc">성공 시 정상/빈 상태, 실패 시 에러 상태</div></div>
</div>

---

## 3. 상태별 화면 처리 기준

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">빈 상태가 있을 때</div>
    "아직 등록된 프로젝트가 없습니다" 같은 안내 문구를 보여줘, 화면이 비어 보이는 것과 오류가 난 것을 구분할 수 있게 합니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">빈 상태가 없을 때</div>
    아무 문구 없이 텅 빈 화면만 남아, 방문자가 오류인지 데이터가 없는 것인지 알 수 없습니다.
  </div>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>에러 상태에서는 "불러오기에 실패했습니다"처럼 무슨 일이 있었는지 간단히 안내하고, 가능하다면 <strong>다시 시도할 수 있는 방법</strong>을 함께 제공합니다.</p>
</div>

---

## 4. 정렬과 필터, 가볍게 살펴보기

목록이 많아지면 최신순으로 정렬하거나, 공개된 항목만 걸러서 보여주는 처리가 필요합니다. 이 문서군에서는 "정렬·필터 기준이 있다"는 개념만 소개하며, 구체적인 조회 문법은 다루지 않습니다.

---

## 5. 커뮤니티형 목록에도 같은 원리가 적용된다

**📌 개념**

<div class="wda-callout wda-ci">
  <p>포트폴리오에 방문자 게시글 같은 community-post 목록을 추가하더라도, 정상·로딩·빈 상태·에러 상태를 처리하는 원리는 project-table 목록과 동일합니다. 데이터의 종류가 달라져도 <strong>상태를 빠짐없이 준비한다는 원칙</strong>은 그대로 적용됩니다.</p>
</div>

---

## 6. AI에게 목록 화면을 요청하는 예시

**• 목록 화면 요청 프롬프트**

```
project-section에 project-table 목록을 보여주는 화면을 만들고 싶습니다.

요청:
- 데이터를 불러오는 동안 로딩 상태를 표시해주세요.
- 데이터가 없을 때는 "아직 등록된 프로젝트가 없습니다" 같은 안내를 보여주세요.
- 불러오기에 실패하면 에러 안내와 다시 시도 버튼을 보여주세요.
- 최신 등록순으로 정렬해주세요.
```

---

## 7. 검토 체크리스트

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">로딩 표시 유무</div><div class="wda-fcard-dsc">데이터를 불러오는 동안 화면이 비어 있지 않은지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">빈 상태 문구</div><div class="wda-fcard-dsc">데이터가 없을 때 안내 문구가 나타나는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">에러 재시도</div><div class="wda-fcard-dsc">실패했을 때 다시 시도할 방법이 있는지 확인합니다.</div></div>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>목록 화면은 <strong>정상 · 로딩 · 빈 상태 · 에러</strong> 네 가지 상태를 모두 고려해서 만든다.</li>
    <li>빈 상태에는 <strong>안내 문구</strong>를 넣어 오류와 구분되도록 한다.</li>
    <li>에러 상태에는 <strong>무슨 일이 있었는지와 다시 시도할 방법</strong>을 함께 안내한다.</li>
    <li>project-table 목록이든 <strong>community-post 같은 다른 목록</strong>이든 같은 상태 처리 원칙이 적용된다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 데이터가 없으면 화면을 그냥 비워두면 된다?</div>
    <div class="wda-mistake-right">정답: 안내 문구 없이 비워두면 방문자가 <strong>오류인지 데이터가 없는 것인지 구분할 수 없다.</strong></div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 로딩 상태는 순간적이라 신경 쓰지 않아도 된다?</div>
    <div class="wda-mistake-right">정답: 네트워크 상황에 따라 로딩이 길어질 수 있어, <strong>로딩 표시가 없으면 화면이 멈춘 것처럼 보일 수 있다.</strong></div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 네 가지 상태</div>
    <div class="wda-formula-block-body"><code>정상 · 로딩 · 빈 상태 · 에러</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 흐름</div>
    <div class="wda-formula-block-body"><code>요청 → 로딩 표시 → 성공/실패 분기</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">목록 화면에서 고려할 네 가지 상태는?</div>
    <div class="wda-flip-back">정상, 로딩, 빈 상태, 에러 상태다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">빈 상태에는 무엇을 보여줘야 하나?</div>
    <div class="wda-flip-back">데이터가 없다는 안내 문구를 보여줘 오류와 구분되게 한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">에러 상태에서 함께 제공하면 좋은 것은?</div>
    <div class="wda-flip-back">무슨 일이 있었는지 안내와 다시 시도할 수 있는 방법이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">community-post 같은 다른 목록에도 같은 원리가 적용되나?</div>
    <div class="wda-flip-back">그렇다. 데이터 종류가 달라도 네 가지 상태를 처리하는 원칙은 동일하다.</div>
  </div>
</div>
