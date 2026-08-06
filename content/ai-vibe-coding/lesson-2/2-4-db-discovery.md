---
title: "2-4: 문의 기능 만들기"
category: "ai-vibe-coding"
section: "lesson-2"
date: "2026-06-10"
status: "completed"
description: "contact-section에 문의 메시지를 저장하는 흐름을 설계하고, 입력값 검증과 최소한의 개인정보 수집 기준을 정리합니다."
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
  • <strong>contact-message 설계</strong> — 문의 메시지를 저장할 필드를 정합니다<br>
  • <strong>입력 → 저장 흐름</strong> — 입력값이 검증을 거쳐 저장되는 과정을 이해합니다<br>
  • <strong>최소 수집 원칙</strong> — 꼭 필요한 정보만 받는 기준을 익힙니다
</div>

---

## 1. contact-message 구조

[[2-3-ui-planning|이전 문서]]에서 데이터 저장소 연결을 마쳤다면, 이번에는 contact-section에 실제 입력 기능을 연결할 차례입니다.

방문자가 남기는 문의 메시지를 저장하는 contact-message의 구조와, 입력값을 검증하고 저장하는 흐름을 다룹니다. 화면에서 여러 문의 목록을 나열하는 방법은 [[2-5-community-dev|다음 문서]]에서 다룹니다.

**▶ contact-message 필드 설계**

<table class="wda-mtable">
<thead><tr><th>필드명</th><th>타입</th><th>필수</th><th>공개</th><th>설명</th></tr></thead>
<tbody>
<tr><td>id</td><td>숫자</td><td>자동</td><td>-</td><td>메시지를 구분하는 고유 번호</td></tr>
<tr><td>name</td><td>문자</td><td>필수</td><td>비공개</td><td>작성자 이름</td></tr>
<tr><td>message</td><td>문자</td><td>필수</td><td>비공개</td><td>문의 내용</td></tr>
<tr><td>email</td><td>문자</td><td>선택</td><td>비공개</td><td>답장을 원할 때만 입력받는 연락처</td></tr>
<tr><td>created_at</td><td>날짜</td><td>자동</td><td>비공개</td><td>작성된 시각</td></tr>
</tbody>
</table>

**💡 설명**

<div class="wda-callout wda-ci">
  <p>project-table과 달리 contact-message는 방문자가 직접 입력하는 데이터이므로, 필드 대부분을 <strong>비공개</strong>로 설계합니다. 문의자 본인 확인 용도 외에 다른 목적으로 공개하지 않습니다.</p>
</div>

---

## 2. 입력 → 검증 → 저장 흐름

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 입력</div><div class="wda-fnode-dsc">방문자가 이름과 메시지를 입력</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 검증</div><div class="wda-fnode-dsc">빈 값·형식 오류 확인</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 저장</div><div class="wda-fnode-dsc">contact-message에 기록</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">4. 결과 표시</div><div class="wda-fnode-dsc">성공 또는 실패 안내</div></div>
</div>

---

## 3. 검증해야 할 항목

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">빈 값 방지</div><div class="wda-fcard-dsc">이름이나 메시지가 비어 있으면 저장을 막습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">글자 수 제한</div><div class="wda-fcard-dsc">지나치게 긴 메시지가 저장되지 않도록 제한을 둡니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">형식 확인</div><div class="wda-fcard-dsc">이메일을 입력받는다면 형식이 올바른지 확인합니다.</div></div>
</div>

---

## 4. 최소한의 개인정보만 수집하기

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>문의 기능에 필요한 만큼만 정보를 받습니다. 이름과 메시지만으로 충분하다면 그 외의 정보(전화번호, 주소 등)는 요청하지 않습니다. 이메일처럼 답장에만 필요한 정보는 선택 입력으로 두고, 예제나 문서에는 <strong>실제 개인정보를 넣지 않습니다.</strong></p>
</div>

---

## 5. 저장 전 확인 절차

**✅ 권장 방식**

<div class="wda-callout wda-cs">
  <p>전송 버튼을 누르기 전에 입력한 내용을 다시 보여주거나, 전송 직후 "메시지가 접수되었습니다" 같은 결과 안내를 보여주면 방문자가 정상적으로 처리되었는지 알 수 있습니다.</p>
</div>

---

## 6. AI에게 요청하는 예시

**• 문의 기능 요청 프롬프트**

```
contact-section에 문의 메시지 입력 기능을 추가하고 싶습니다.

저장할 정보:
- name (필수)
- message (필수)
- email (선택)

요청:
- 빈 값과 지나치게 긴 입력을 막는 검증을 포함해주세요.
- 저장 성공/실패를 화면에 안내하는 처리를 포함해주세요.
- email 외의 개인정보는 추가로 요청하지 마세요.
```

---

## 7. 생성된 코드 검토 기준

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">검증 로직 존재</div><div class="wda-fcard-dsc">빈 값이나 형식 오류를 실제로 막고 있는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">결과 안내</div><div class="wda-fcard-dsc">저장 성공/실패가 화면에 표시되는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">불필요한 수집 여부</div><div class="wda-fcard-dsc">요청하지 않은 개인정보 필드가 추가되지 않았는지 확인합니다.</div></div>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>contact-message는 <strong>id, name, message, email, created_at</strong>으로 구성하고, 대부분을 비공개로 설계한다.</li>
    <li>입력 기능은 <strong>입력 → 검증 → 저장 → 결과 표시</strong> 흐름으로 만든다.</li>
    <li>검증은 <strong>빈 값 방지·글자 수 제한·형식 확인</strong>을 기본으로 한다.</li>
    <li>문의 기능에는 <strong>꼭 필요한 정보만</strong> 요청하고, 이메일 같은 선택 정보는 선택 입력으로 둔다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 문의 기능을 만들 때 이름·이메일·전화번호를 모두 받아야 한다?</div>
    <div class="wda-mistake-right">정답: 기능에 <strong>꼭 필요한 정보만</strong> 받는다. 전화번호처럼 쓰지 않을 정보는 요청하지 않는다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 저장만 되면 검증은 생략해도 된다?</div>
    <div class="wda-mistake-right">정답: 빈 값이나 지나치게 긴 입력을 막는 <strong>검증 없이는 데이터 품질을 보장할 수 없다.</strong></div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 입력 흐름</div>
    <div class="wda-formula-block-body"><code>입력 → 검증 → 저장 → 결과 표시</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 수집 원칙</div>
    <div class="wda-formula-block-body"><code>필요한 정보만, 최소한으로</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">contact-message의 기본 필드는?</div>
    <div class="wda-flip-back">id, name, message, email, created_at이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">입력 기능의 처리 흐름은?</div>
    <div class="wda-flip-back">입력 → 검증 → 저장 → 결과 표시 순서다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">개인정보는 어떤 기준으로 수집하나?</div>
    <div class="wda-flip-back">기능에 꼭 필요한 만큼만 최소한으로 수집한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">생성된 코드를 검토할 때 무엇을 확인하나?</div>
    <div class="wda-flip-back">검증 로직 존재 여부, 결과 안내 여부, 불필요한 정보 수집 여부다.</div>
  </div>
</div>
