---
title: "2-2: 데이터 구조 설계하기"
category: "ai-vibe-coding"
section: "lesson-2"
date: "2026-06-10"
status: "completed"
description: "화면에 필요한 정보를 먼저 살펴보고, project-table이 어떤 필드로 이루어져야 하는지 설계하는 방법을 익힙니다."
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
  • <strong>역방향 설계</strong> — 화면을 먼저 보고 필요한 데이터 항목을 찾아내는 방법을 익힙니다<br>
  • <strong>필드 설계</strong> — project-table의 필드 이름·타입·필수 여부·공개 범위를 정합니다<br>
  • <strong>AI 협업</strong> — 데이터 구조 초안을 AI에게 요청하고 검토하는 방법을 익힙니다
</div>

---

## 1. 화면 → 데이터 항목 순서로 생각하기

[[2-1-supabase-mcp|이전 문서]]에서 데이터가 왜 필요한지 이해했다면, 이제는 project-section에 필요한 데이터를 구체적으로 설계할 차례입니다.

추상적으로 테이블부터 그리지 않고, 실제 화면을 보면서 "이 화면에 무엇이 보이는가"를 거꾸로 따라가며 필드를 찾아내는 방법을 다룹니다. 저장소에 실제로 연결하는 방법은 [[2-3-ui-planning|다음 문서]]에서 다룹니다.

**✅ 권장 방식**

<div class="wda-callout wda-cs">
  <p>테이블을 먼저 그리는 대신, 화면에 어떤 정보가 보여야 하는지부터 나열하면 필요한 필드가 자연스럽게 드러납니다. "이 화면에 이 정보가 보이니까 이 필드가 필요하구나"라는 흐름입니다.</p>
</div>

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 화면 확인</div><div class="wda-fnode-dsc">project-section에 무엇이 보이는지 확인</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 정보 나열</div><div class="wda-fnode-dsc">제목, 설명, 링크 등 필요한 정보 나열</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 필드 이름 정하기</div><div class="wda-fnode-dsc">title, description처럼 영문 필드명 부여</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">4. 세부 속성 정하기</div><div class="wda-fnode-dsc">타입 · 필수 여부 · 공개 범위 결정</div></div>
</div>

---

## 2. project-table 설계 예시

project-section에는 프로젝트 제목, 설명, 기술 스택, 바로가기 링크가 보여야 한다고 가정하면 아래와 같은 구조가 나옵니다.

**▶ project-table 필드 설계**

<table class="wda-mtable">
<thead><tr><th>필드명</th><th>타입</th><th>필수</th><th>공개</th><th>설명</th></tr></thead>
<tbody>
<tr><td>id</td><td>숫자</td><td>자동</td><td>-</td><td>항목을 구분하는 고유 번호</td></tr>
<tr><td>title</td><td>문자</td><td>필수</td><td>공개</td><td>프로젝트 제목</td></tr>
<tr><td>description</td><td>문자</td><td>필수</td><td>공개</td><td>프로젝트 한 줄 설명</td></tr>
<tr><td>tech_stack</td><td>문자</td><td>선택</td><td>공개</td><td>사용한 기술 목록</td></tr>
<tr><td>link</td><td>문자</td><td>선택</td><td>공개</td><td>배포 주소나 저장소 링크</td></tr>
<tr><td>is_public</td><td>불리언</td><td>필수</td><td>-</td><td>화면에 노출할지 여부</td></tr>
<tr><td>created_at</td><td>날짜</td><td>자동</td><td>공개</td><td>등록된 시각</td></tr>
</tbody>
</table>

**💡 설명**

<div class="wda-callout wda-ci">
  <p><code>is_public</code>처럼 화면에는 보이지 않지만 <strong>필요한 관리용 필드</strong>도 있습니다. 화면에 직접 등장하지 않는다고 필드 설계에서 빠뜨리지 않도록 주의합니다.</p>
</div>

---

## 3. contact-message는 어떤 정보가 필요할까

문의 메시지 저장에 필요한 정보는 성격이 다릅니다. project-table은 "보여주기 위한 데이터"였다면, contact-message는 "방문자가 남기는 데이터"입니다.

자세한 필드 설계와 개인정보 처리 기준은 [[2-4-db-discovery|문의 기능 문서]]에서 이어서 다룹니다.

---

## 4. 공개 필드와 비공개 필드 구분하기

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">공개 필드</div>
    화면에 그대로 노출되어도 문제없는 정보입니다. 프로젝트 제목, 설명, 기술 스택이 여기 속합니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">비공개 필드</div>
    운영 목적으로만 쓰이고 화면에 노출하지 않는 정보입니다. 관리용 메모, 노출 여부 값이 여기 속합니다.
  </div>
</div>

---

## 5. AI에게 데이터 구조 초안 요청하기

설계 방향이 어느 정도 잡히면, 아래처럼 화면 요구사항을 기준으로 초안을 요청할 수 있습니다.

**• 데이터 구조 초안 요청 프롬프트**

```
project-table 구조를 설계하고 싶습니다.

project-section 화면에서 보여줘야 하는 정보:
- 프로젝트 제목
- 한 줄 설명
- 사용한 기술 스택
- 바로가기 링크

요청:
- 위 정보를 저장할 필드 이름(영문), 타입, 필수 여부를 표로 정리해주세요.
- 화면에는 보이지 않지만 필요할 수 있는 관리용 필드가 있다면 함께 제안해주세요.
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>AI가 제안한 필드 이름이나 타입을 그대로 쓰기 전에, 실제로 화면에서 쓰지 않는 필드가 섞여 있지는 않은지 <strong>한 번 더 검토</strong>합니다.</p>
</div>

---

## 6. 검토 체크리스트

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">불필요한 필드</div><div class="wda-fcard-dsc">화면 어디에서도 쓰지 않는 필드가 섞여 있지 않은지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">필수값 누락</div><div class="wda-fcard-dsc">반드시 있어야 화면이 정상적으로 보이는 값이 빠지지 않았는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">공개 범위</div><div class="wda-fcard-dsc">공개해도 되는 정보와 그렇지 않은 정보가 뒤섞이지 않았는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">이름의 명확성</div><div class="wda-fcard-dsc">필드 이름만 보고도 어떤 값인지 짐작할 수 있는지 확인합니다.</div></div>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>테이블 설계는 <strong>화면 확인 → 정보 나열 → 필드 이름 → 세부 속성</strong> 순서로 진행하면 수월하다.</li>
    <li>project-table에는 <strong>id, title, description, tech_stack, link, is_public, created_at</strong> 같은 필드가 필요하다.</li>
    <li>화면에 보이지 않아도 <strong>관리용 필드(예: is_public)</strong>가 필요할 수 있다.</li>
    <li>필드는 <strong>공개 필드</strong>와 <strong>비공개 필드</strong>로 구분해서 관리한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 화면에 보이는 정보만 필드로 만들면 된다?</div>
    <div class="wda-mistake-right">정답: <strong>is_public처럼 화면에 직접 보이지 않는 관리용 필드</strong>도 설계에 포함해야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: AI가 제안한 데이터 구조는 그대로 사용해도 된다?</div>
    <div class="wda-mistake-right">정답: 불필요한 필드나 공개 범위 오류가 없는지 <strong>사람이 한 번 더 검토</strong>해야 한다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 설계 순서</div>
    <div class="wda-formula-block-body"><code>화면 확인 → 정보 나열 → 필드 이름 → 세부 속성</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 필드 구분</div>
    <div class="wda-formula-block-body"><code>공개 필드 vs 비공개 필드</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">테이블 설계는 어떤 순서로 진행하나?</div>
    <div class="wda-flip-back">화면 확인 → 정보 나열 → 필드 이름 정하기 → 세부 속성 정하기 순서다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">project-table의 주요 필드는?</div>
    <div class="wda-flip-back">id, title, description, tech_stack, link, is_public, created_at이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">is_public 같은 필드가 필요한 이유는?</div>
    <div class="wda-flip-back">화면에 직접 보이지 않아도 노출 여부를 관리하는 데 필요하기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">AI가 제안한 데이터 구조는 어떻게 다뤄야 하나?</div>
    <div class="wda-flip-back">그대로 쓰지 않고 불필요한 필드나 공개 범위 오류가 없는지 검토한다.</div>
  </div>
</div>
