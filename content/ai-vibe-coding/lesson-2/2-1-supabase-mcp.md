---
title: "2-1: 왜 데이터가 필요한가"
category: "ai-vibe-coding"
section: "lesson-2"
date: "2026-06-10"
status: "completed"
description: "정적 화면과 데이터 기반 화면의 차이를 이해하고, 데이터베이스·테이블·행·열 개념을 표와 일상 비유로 익힙니다."
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
  • <strong>정적 vs 데이터 기반</strong> — 고정된 화면과 데이터를 불러와 보여주는 화면의 차이를 구분합니다<br>
  • <strong>데이터베이스 개념</strong> — 표로 정보를 정리하는 방식이 데이터베이스의 기본 개념임을 이해합니다<br>
  • <strong>용어 정리</strong> — 테이블·행·열(레코드·필드) 용어를 예시로 익힙니다
</div>

---

## 1. 이 문서에서 다루는 것

<div class="wda-callout wda-ci">
  <p><strong>lesson-1에서 만든 포트폴리오는 지금까지 모든 내용이 코드에 직접 적혀 있는 정적 화면이었습니다.</strong></p>
  <p>project-section에 프로젝트를 하나 추가하려면 코드를 열어 직접 고쳐야 했습니다. 이 문서군에서는 project-section과 contact-section에 실제 데이터를 연결해서, 코드를 고치지 않고도 내용을 관리할 수 있는 구조를 만듭니다. 이 문서는 그 첫걸음으로 "왜 데이터가 필요한지"부터 정리합니다.</p>
</div>

---

## 2. 정적 화면과 데이터 기반 화면

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">정적 화면 (지금까지)</div>
    프로젝트 이름·설명이 코드 안에 문자열로 직접 적혀 있습니다. 내용을 바꾸려면 코드를 열어 수정하고 다시 배포해야 합니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">데이터 기반 화면 (이제부터)</div>
    프로젝트 정보가 별도 저장소에 보관되고, 화면은 그 저장소에서 값을 불러와 보여줍니다. 내용을 추가·수정해도 코드를 건드릴 필요가 없습니다.
  </div>
</div>

---

## 3. 데이터베이스란 무엇인가

<div class="wda-callout wda-cs">
  <span class="wda-clabel">핵심 개념</span>
  <p>데이터베이스는 정보를 체계적으로 저장하고 관리하는 시스템입니다. 우리가 이미 익숙한 <strong>표로 정보를 정리하는 방식</strong>과 근본적으로 같은 개념입니다.</p>
</div>

예를 들어 포트폴리오에 넣을 프로젝트들을 표로 정리한다면 다음과 같은 모습이 됩니다.

<table class="wda-mtable">
<thead><tr><th>제목</th><th>설명</th><th>기술 스택</th><th>공개 여부</th></tr></thead>
<tbody>
<tr><td>메모 앱</td><td>할 일을 기록하는 웹 앱</td><td>React, MUI</td><td>공개</td></tr>
<tr><td>날씨 위젯</td><td>지역별 날씨를 보여주는 위젯</td><td>JavaScript, API</td><td>공개</td></tr>
<tr><td>내부 연습용 페이지</td><td>레이아웃 연습용 시안</td><td>HTML, CSS</td><td>비공개</td></tr>
</tbody>
</table>

이런 표가 웹사이트 뒤편에 저장되어 있고, 화면은 이 표에서 필요한 값을 꺼내 보여주는 것이 데이터 기반 화면의 기본 원리입니다.

---

## 4. 테이블 · 행 · 열 용어 정리

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">테이블(Table)</div><div class="wda-fcard-dsc">위 예시 같은 표 전체를 가리킵니다. 포트폴리오라면 "프로젝트 테이블"처럼 부릅니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">행(Row) · 레코드</div><div class="wda-fcard-dsc">표의 한 줄, 즉 데이터 하나입니다. 프로젝트 하나가 행 하나에 해당합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">열(Column) · 필드</div><div class="wda-fcard-dsc">정보의 종류입니다. 제목, 설명, 기술 스택처럼 표의 세로 항목입니다.</div></div>
</div>

<div class="wda-callout wda-ci">
  <p>엑셀에서 쓰던 <strong>행/열</strong>이라는 말과 데이터베이스의 <strong>레코드/필드</strong>는 같은 것을 가리키는 다른 이름입니다. 이후 문서에서는 두 표현을 섞어서 사용합니다.</p>
</div>

---

## 5. 화면에서 저장할 수 있는 정보의 종류

포트폴리오처럼 방문자가 보는 화면 뒤에는 보통 아래와 같은 정보들이 데이터로 저장됩니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">보여주기 위한 정보</div><div class="wda-fcard-dsc">project-section에 나열할 프로젝트 목록처럼, 화면에 그대로 표시되는 정보입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">방문자가 남긴 정보</div><div class="wda-fcard-dsc">contact-section을 통해 방문자가 남긴 문의 메시지처럼, 사용자가 직접 입력한 정보입니다.</div></div>
</div>

---

## 6. 외부 데이터 저장소, 개념만 먼저

<div class="wda-callout wda-ci">
  <span class="wda-clabel">한 걸음만 미리 보기</span>
  <p>표 형태의 데이터를 인터넷 어딘가에 보관해 주는 서비스들이 있습니다. 코드가 직접 파일을 관리하는 대신, 이런 서비스에 표를 만들어 두고 필요할 때마다 값을 읽고 쓰는 방식입니다.</p>
  <p>구체적으로 어떤 서비스를 어떻게 연결하는지는 [[2-3-ui-planning|다음 문서]]에서 다룹니다. 여기서는 "데이터를 저장하는 공간이 코드 바깥에도 있을 수 있다"는 개념만 기억해 둡니다.</p>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>정적 화면은 <strong>코드에 값이 직접 적혀 있고</strong>, 데이터 기반 화면은 <strong>별도 저장소에서 값을 불러와</strong> 보여준다.</li>
    <li>데이터베이스는 정보를 <strong>표로 정리하는 방식</strong>과 같은 개념이다.</li>
    <li>표 전체는 <strong>테이블</strong>, 표의 한 줄은 <strong>행(레코드)</strong>, 정보의 종류는 <strong>열(필드)</strong>이라고 부른다.</li>
    <li>화면 뒤에는 <strong>보여주기 위한 정보</strong>와 <strong>방문자가 남긴 정보</strong>가 함께 저장될 수 있다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 데이터베이스는 특별한 프로그래밍 지식이 있어야만 이해할 수 있다?</div>
    <div class="wda-mistake-right">정답: 기본 개념은 <strong>표로 정보를 정리하는 방식</strong>과 같아서, 엑셀 표를 다뤄본 경험만으로도 충분히 이해할 수 있다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 행/열과 레코드/필드는 서로 다른 개념이다?</div>
    <div class="wda-mistake-right">정답: <strong>같은 것을 가리키는 다른 이름</strong>이다. 행=레코드, 열=필드다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 화면 종류</div>
    <div class="wda-formula-block-body"><code>정적 = 코드에 값 · 데이터 기반 = 저장소에서 값</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 용어</div>
    <div class="wda-formula-block-body"><code>테이블 = 표 · 행 = 레코드 · 열 = 필드</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">정적 화면과 데이터 기반 화면의 차이는?</div>
    <div class="wda-flip-back">정적 화면은 코드에 값이 직접 적혀 있고, 데이터 기반 화면은 별도 저장소에서 값을 불러온다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">데이터베이스의 기본 개념은?</div>
    <div class="wda-flip-back">정보를 표로 정리하는 방식과 같은 개념이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">테이블·행·열은 각각 무엇을 가리키나?</div>
    <div class="wda-flip-back">테이블은 표 전체, 행(레코드)은 데이터 한 줄, 열(필드)은 정보의 종류다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">포트폴리오 화면 뒤에는 어떤 정보가 저장될 수 있나?</div>
    <div class="wda-flip-back">보여주기 위한 정보(프로젝트 목록)와 방문자가 남긴 정보(문의 메시지)다.</div>
  </div>
</div>
