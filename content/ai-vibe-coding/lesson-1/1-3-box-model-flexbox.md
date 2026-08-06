---
title: "1-3: 박스 모델과 Flexbox 이해"
category: "ai-vibe-coding"
section: "lesson-1"
description: "박스 모델과 Flexbox의 기본 개념을 이해하고, 앞서 기획한 섹션의 첫 화면 초안을 AI에게 요청하는 방법을 정리한다."
tags:
  - ai-vibe-coding
  - lesson-1
  - css
  - box-model
  - flexbox
  - layout
date: "2026-06-10"
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
  • <strong>박스 모델 이해</strong> — 웹의 모든 요소가 박스로 다뤄진다는 개념을 이해합니다<br>
  • <strong>Flexbox 개념 이해</strong> — 정렬과 크기가 유동적으로 조절되는 원리를 이해합니다<br>
  • <strong>화면 초안 요청하기</strong> — 목표·현재 상태·제약·출력 형식을 갖춰 AI에게 요청합니다
</div>

---

## 1. 박스 모델: 모든 요소는 박스다

1-2에서 정리한 섹션 기획을 바탕으로, 이 문서는 첫 화면 초안을 AI에게 요청하는 방법을 다룹니다. 그 과정에서 레이아웃을 이해하는 데 필요한 박스 모델과 Flexbox의 기본 개념도 함께 정리합니다.

AI에게 요청할 때 필요한 맥락 구성의 일반 원칙은 setup 문서에서 다뤘으며, 여기서는 그 원칙을 포트폴리오 화면 요청에 실제로 적용합니다.

웹 페이지의 모든 요소는 사각형 박스로 다뤄집니다. 글자도, 이미지도, 버튼도 각각 하나의 박스입니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">크기</div><div class="wda-fcard-dsc">너비와 높이로 박스의 크기를 정합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">배경과 테두리</div><div class="wda-fcard-dsc">색상과 테두리로 박스를 눈에 보이게 만듭니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">내부 내용</div><div class="wda-fcard-dsc">박스 안에 텍스트나 더 작은 박스를 담을 수 있습니다.</div></div>
</div>

---

## 2. Flexbox: 유동적으로 배치되는 박스

여러 개의 박스를 나란히 배치하고 정렬할 때 자주 쓰이는 방식이 Flexbox입니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">정렬에 유동적</div>
    박스들을 가운데, 양 끝, 균등 간격 등으로 자동 정렬할 수 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">크기에 유동적</div>
    화면 크기가 바뀌면 박스 크기도 자동으로 함께 조정됩니다.
  </div>
</div>

**💡 설명**

<div class="wda-callout wda-ci">
  <p>이런 레이아웃 원리를 알아두면, AI가 만든 결과물이 왜 그렇게 배치됐는지 이해하기 쉬워지고, 원하는 배치를 요청할 때도 더 정확하게 표현할 수 있습니다.</p>
</div>

---

## 3. 첫 화면 초안 요청하기

1-2에서 정리한 섹션과 정보 구조를 바탕으로, 목표·현재 상태·제약·출력 형식을 갖춰 요청합니다.

**• 첫 화면 초안 요청 프롬프트**

```
portfolio-draft의 첫 화면 초안을 만들고 싶습니다.

목표:
- Hero, profile-section, project-section, contact-section
  네 영역이 위에서 아래로 순서대로 배치된 화면을 만들어주세요.

현재 상태:
- 아직 실제 텍스트나 이미지는 없고, 각 섹션이 무슨 역할인지
  알아볼 수 있는 정도의 안내 문구만 있으면 됩니다.

제약:
- 화면이 좁아져도 레이아웃이 깨지지 않게 만들어주세요.
- 색상이나 애니메이션 같은 세부 디자인은 아직 신경 쓰지 마세요.

출력 형식:
1. 만들어진 섹션 목록
2. 각 섹션의 파일 위치
3. 확인해야 할 점
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>이 단계의 목표는 "구조가 보이는 초안"입니다. 디자인이 완성되지 않았어도 정상입니다. 결과가 만족스럽지 않다면 다음 문서에서 다룰 검토·수정 요청 방법을 사용합니다.</p>
</div>

---

## 4. ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>웹의 모든 요소는 <strong>박스</strong>로 다뤄지며, 크기·배경·내용을 가진다.</li>
    <li>Flexbox는 <strong>정렬</strong>과 <strong>크기</strong> 두 가지 측면에서 유동적이다.</li>
    <li>화면 초안을 요청할 때도 <strong>목표·현재 상태·제약·출력 형식</strong>을 갖춘다.</li>
    <li>첫 초안의 목표는 완성된 디자인이 아니라 <strong>구조가 보이는 상태</strong>다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: Flexbox는 크기 조절에만 유동적이다?</div>
    <div class="wda-mistake-right">정답: <strong>정렬</strong>과 <strong>크기</strong> 두 가지 모두에 유동적이다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 첫 초안부터 색상과 애니메이션까지 요청해야 한다?</div>
    <div class="wda-mistake-right">정답: 첫 초안은 <strong>구조 확인</strong>이 목표이며, 세부 디자인은 이후 단계에서 다듬는다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 박스 모델</div>
    <div class="wda-formula-block-body"><code>크기 + 배경/테두리 + 내용</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · flex 유동성</div>
    <div class="wda-formula-block-body"><code>정렬 + 크기</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 요청 구성</div>
    <div class="wda-formula-block-body"><code>목표 + 현재상태 + 제약 + 출력형식</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">웹의 모든 요소는 무엇으로 다뤄지나요?</div>
    <div class="wda-flip-back">사각형 박스로 다뤄집니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Flexbox의 두 가지 유동성은?</div>
    <div class="wda-flip-back">정렬에 유동적인 것과 크기에 유동적인 것입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">첫 화면 초안 요청의 목표는?</div>
    <div class="wda-flip-back">완성된 디자인이 아니라 구조가 잘 보이는 상태입니다.</div>
  </div>
</div>
