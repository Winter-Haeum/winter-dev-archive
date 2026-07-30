---
title: "1-1: 웹 기본 개념 및 UI/UX 이론"
category: "ai-vibe-coding"
section: "lesson-1"
date: "2026-06-10"
status: "completed"
description: "웹 페이지가 사용자에게 보이는 방식과 HTML·CSS·JavaScript의 역할, UI와 UX의 차이를 정리하며 포트폴리오 프로젝트의 큰 그림을 잡는다."
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
  • <strong>웹 페이지 구조 이해</strong> — HTML·CSS·JavaScript가 각각 어떤 역할을 하는지 파악합니다<br>
  • <strong>통신 흐름 파악</strong> — 주소를 입력한 뒤 화면이 뜨기까지 무슨 일이 일어나는지 이해합니다<br>
  • <strong>UI와 UX 구분</strong> — 보이는 것과 느끼는 것의 차이를 이해합니다
</div>

---

## 1. 이 문서에서 다루는 것

<div class="wda-callout wda-ci">
  <p><strong>이 문서는 본격적인 작업에 앞서, 웹 페이지가 어떻게 만들어지고 사용자에게 보이는지 큰 그림을 잡는 문서입니다.</strong></p>
  <p>HTML/CSS/JavaScript의 세부 문법은 다루지 않으며, 각 언어가 어떤 역할을 맡는지 정도만 정리합니다. 실제로 AI에게 화면을 요청하고 만드는 과정은 이후 문서에서 다룹니다.</p>
</div>

---

## 2. 웹 페이지를 이루는 세 가지 역할

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">HTML — 구조</div><div class="wda-fcard-dsc">제목, 문단, 버튼처럼 페이지에 어떤 내용이 있는지를 정의합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">CSS — 디자인</div><div class="wda-fcard-dsc">색상, 폰트, 배치처럼 그 내용이 어떻게 보일지를 정합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">JavaScript — 동작</div><div class="wda-fcard-dsc">버튼 클릭에 반응하는 것처럼 페이지가 움직이게 만듭니다.</div></div>
</div>

세 가지가 함께 있어야 완전한 페이지가 만들어지며, 이후 문서에서 AI에게 화면을 요청할 때도 이 세 역할을 기준으로 결과물을 이해하게 됩니다.

---

## 3. 주소를 입력하면 일어나는 일

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 요청</div><div class="wda-fnode-dsc">브라우저가 서버에 페이지를 요청</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 응답</div><div class="wda-fnode-dsc">서버가 HTML·CSS·JS를 전송</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 렌더링</div><div class="wda-fnode-dsc">브라우저가 받은 코드를 해석해 화면에 그림</div></div>
</div>

이 흐름을 이해해 두면, 이후 "화면이 안 뜬다"거나 "일부만 보인다" 같은 문제를 마주쳤을 때 어느 단계에서 문제가 생겼는지 짐작하는 데 도움이 됩니다.

---

## 4. 현대적인 웹사이트의 유형

목적에 따라 웹사이트는 여러 형태로 나뉩니다. 앞으로 만들 포트폴리오는 이 중 **랜딩페이지**에 가깝습니다.

<table class="wda-mtable">
<thead><tr><th>유형</th><th>목적</th></tr></thead>
<tbody>
<tr><td>랜딩페이지</td><td>한 페이지에 핵심 정보를 모아 소개</td></tr>
<tr><td>홈페이지</td><td>여러 페이지로 구성된 정보 제공</td></tr>
<tr><td>쇼핑몰</td><td>상품 진열과 결제 처리</td></tr>
<tr><td>블로그 · 위키</td><td>콘텐츠 축적과 검색</td></tr>
</tbody>
</table>

---

## 5. UI와 UX의 차이

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">UI (User Interface)</div>
    화면에서 눈에 보이는 요소입니다. 버튼, 색상, 폰트, 배치가 여기에 속합니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">UX (User Experience)</div>
    사용자가 그 화면을 쓰면서 느끼는 전체적인 경험입니다. 사용 편의성, 반응 속도가 여기에 속합니다.
  </div>
</div>

<div class="wda-callout wda-cw">
  <p>디자인이 화려하다고 해서(좋은 UI) 사용하기 편한 것(좋은 UX)은 아닙니다. 원하는 정보를 찾기 어렵거나 사용 흐름이 복잡하면, UI가 예뻐도 UX는 낮을 수 있습니다.</p>
</div>

---

## 6. 자주 쓰이는 화면 구성 요소

포트폴리오를 만들 때 자주 등장하는 요소들을 미리 익혀둡니다. 세부 구현은 다음 문서에서 다룹니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">버튼 · 입력창</div><div class="wda-fcard-dsc">클릭하거나 값을 입력받는 기본 요소입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">내비게이션</div><div class="wda-fcard-dsc">페이지 사이를 이동하는 메뉴입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">카드</div><div class="wda-fcard-dsc">관련 정보를 하나로 묶어 보여주는 컨테이너입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">모달</div><div class="wda-fcard-dsc">화면 위에 겹쳐서 뜨는 팝업창입니다.</div></div>
</div>

---

## 7. ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>웹 페이지는 <strong>HTML(구조) + CSS(디자인) + JS(동작)</strong>로 이루어진다.</li>
    <li>주소 입력부터 화면 표시까지 <strong>요청 → 응답 → 렌더링</strong> 3단계로 진행된다.</li>
    <li>UI는 <strong>보이는 요소</strong>, UX는 <strong>느끼는 전체 경험</strong>이다.</li>
    <li>UI가 좋다고 UX가 항상 좋은 것은 아니며, <strong>둘은 함께 고려</strong>해야 한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: UI가 예쁘면 UX도 자동으로 좋아진다?</div>
    <div class="wda-mistake-right">정답: 사용 흐름이 복잡하거나 원하는 기능을 찾기 어려우면 <strong>UX는 낮을 수 있다</strong>.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: JavaScript도 화면 디자인을 담당한다?</div>
    <div class="wda-mistake-right">정답: 디자인은 <strong>CSS</strong>의 역할이고, JavaScript는 <strong>동작(상호작용)</strong>을 담당한다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 웹 구성</div>
    <div class="wda-formula-block-body"><code>HTML + CSS + JS</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 통신 흐름</div>
    <div class="wda-formula-block-body"><code>요청 → 응답 → 렌더링</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · UI/UX</div>
    <div class="wda-formula-block-body"><code>UI = 보임 · UX = 느낌</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">웹 페이지의 3가지 구성 역할은?</div>
    <div class="wda-flip-back">HTML(구조), CSS(디자인), JavaScript(동작)입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">주소 입력 후 화면이 뜨는 3단계는?</div>
    <div class="wda-flip-back">요청 → 응답 → 렌더링 순서로 진행됩니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">UI와 UX의 차이는?</div>
    <div class="wda-flip-back">UI는 눈에 보이는 요소, UX는 사용하며 느끼는 전체 경험입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">앞으로 만들 포트폴리오는 어떤 유형에 가깝나요?</div>
    <div class="wda-flip-back">한 페이지에 핵심 정보를 모아 소개하는 랜딩페이지입니다.</div>
  </div>
</div>
