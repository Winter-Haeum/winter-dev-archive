---
title: "3-1: 웹 화면과 모바일 화면의 차이"
category: "ai-vibe-coding"
section: "lesson-3"
date: "2026-06-11"
status: "completed"
description: "같은 화면이라도 화면 크기에 따라 다르게 보여야 하는 이유를 이해하고, 반응형 사고방식의 기본 개념을 익힙니다."
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
  • <strong>화면 차이 이해</strong> — 같은 정보라도 화면 크기에 따라 다르게 보여야 하는 이유를 이해합니다<br>
  • <strong>반응형 사고방식</strong> — "줄이기"가 아니라 "재배치"라는 관점을 익힙니다<br>
  • <strong>확인 기준</strong> — 실제 기기·브라우저 크기에서 확인해야 하는 이유를 이해합니다
</div>

---

## 1. 같은 정보, 다른 화면

lesson-1~2에서 만든 포트폴리오는 지금까지 데스크톱 화면 기준으로만 확인해 왔습니다. 이 문서군에서는 같은 포트폴리오를 모바일 등 더 작은 화면에서도 보기 좋게 확장하는 방법을 다룹니다. 이 문서는 그 첫걸음으로, 화면 크기가 달라지면 왜 화면 구성도 달라져야 하는지부터 정리합니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">넓은 화면 (데스크톱)</div>
    여러 섹션과 정보를 한 화면에 나란히 배치할 수 있습니다. 마우스로 세밀한 위치를 클릭할 수 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">좁은 화면 (모바일)</div>
    한 번에 보여줄 수 있는 공간이 적어, 정보에 순서를 매겨 위에서 아래로 쌓아야 합니다. 손가락으로 터치하므로 클릭 영역이 더 커야 합니다.
  </div>
</div>

---

## 2. 화면 구성이 달라지는 이유

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">화면 크기</div><div class="wda-fcard-dsc">보여줄 수 있는 공간 자체가 좁아지므로 정보를 나열하는 방식이 달라집니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">입력 방식</div><div class="wda-fcard-dsc">마우스 클릭과 손가락 터치는 요구하는 버튼 크기와 간격이 다릅니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">이용 상황</div><div class="wda-fcard-dsc">이동 중이거나 한 손으로 조작하는 상황을 함께 고려해야 합니다.</div></div>
</div>

---

## 3. 반응형 사고방식: 줄이기가 아니라 재배치

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">화면만 줄이기</div>
    데스크톱 레이아웃을 그대로 축소하면 글자와 버튼이 너무 작아지고, 정보가 한눈에 들어오지 않습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">정보 우선순위 재배치</div>
    좁은 화면에서 가장 먼저 봐야 할 정보를 위로 올리고, 나머지는 아래로 쌓거나 접어서 보여줍니다.
  </div>
</div>

**✅ 권장 방식**

<div class="wda-callout wda-cs">
  <p>반응형 화면을 만든다는 것은 <strong>같은 내용을 작게 그리는 일이 아니라, 화면 크기에 맞게 정보의 순서와 비중을 다시 정하는 일</strong>입니다.</p>
</div>

---

## 4. 접근 방식 맛보기: 모바일 퍼스트 vs 데스크톱 우선

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">모바일 퍼스트</div><div class="wda-fcard-dsc">좁은 화면 기준으로 먼저 설계하고, 넓은 화면에서는 정보를 추가로 채워 넣는 접근입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">데스크톱 우선</div><div class="wda-fcard-dsc">넓은 화면 기준으로 먼저 설계하고, 좁은 화면에서는 정보를 줄이거나 재배치하는 접근입니다.</div></div>
</div>

두 접근 모두 널리 쓰이며, 이 문서군에서는 어느 한쪽을 강요하지 않고 "화면 크기별로 다르게 설계한다"는 개념만 기억해 둡니다.

---

## 5. 확인은 반드시 실제 화면에서

<div class="wda-callout wda-cw">
  <span class="wda-clabel">확인 기준</span>
  <p>브라우저 창 크기를 손으로 줄여보는 것만으로는 실제 모바일 기기에서 어떻게 보이는지 정확히 알기 어렵습니다. 가능하면 <strong>실제 기기나 브라우저의 화면 크기 검사 도구</strong>로 확인합니다. 도구의 구체적인 이름이나 화면 구성은 계속 바뀔 수 있으므로, 여기서는 "실제 크기에서 확인한다"는 원칙만 기억해 둡니다.</p>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>화면이 좁아지면 <strong>정보를 나열하는 공간 자체가 줄어들어</strong> 구성 방식도 달라져야 한다.</li>
    <li>반응형은 <strong>화면을 줄이는 것이 아니라 정보 우선순위를 재배치하는 것</strong>이다.</li>
    <li>모바일 퍼스트와 데스크톱 우선 접근은 <strong>시작점만 다를 뿐</strong> 둘 다 화면 크기별 설계를 목표로 한다.</li>
    <li>반응형 화면은 <strong>실제 기기나 화면 크기 검사 도구</strong>로 확인해야 정확하다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 모바일 화면은 데스크톱 화면을 그대로 축소하면 된다?</div>
    <div class="wda-mistake-right">정답: 그대로 축소하면 글자·버튼이 너무 작아진다. <strong>정보 우선순위를 다시 배치</strong>해야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 브라우저 창 크기만 줄여보면 모바일 화면 확인이 끝난다?</div>
    <div class="wda-mistake-right">정답: 터치 조작감이나 실제 기기의 화면 비율은 <strong>실제 기기나 검사 도구</strong>로 확인해야 정확히 알 수 있다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 반응형의 본질</div>
    <div class="wda-formula-block-body"><code>줄이기 X · 재배치 O</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 확인 방법</div>
    <div class="wda-formula-block-body"><code>실제 기기·검사 도구로 확인</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">화면 크기가 달라지면 왜 구성도 달라져야 하나?</div>
    <div class="wda-flip-back">보여줄 수 있는 공간, 입력 방식, 이용 상황이 모두 달라지기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">반응형 화면 만들기의 핵심은?</div>
    <div class="wda-flip-back">화면을 줄이는 것이 아니라 정보의 순서와 비중을 재배치하는 것이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">모바일 퍼스트와 데스크톱 우선의 차이는?</div>
    <div class="wda-flip-back">어느 화면 크기를 기준으로 먼저 설계하느냐의 시작점 차이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">반응형 화면은 어떻게 확인해야 정확한가?</div>
    <div class="wda-flip-back">브라우저 창 크기 조절만으로는 부족하며, 실제 기기나 화면 크기 검사 도구로 확인해야 한다.</div>
  </div>
</div>
