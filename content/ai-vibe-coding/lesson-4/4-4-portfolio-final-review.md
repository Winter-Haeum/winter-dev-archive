---
title: "4-4: 공개 주소와 도메인 정리하기"
category: "ai-vibe-coding"
section: "lesson-4"
date: "2026-06-29"
status: "completed"
description: "기본 제공 주소와 커스텀 도메인의 차이를 이해하고, DNS·CNAME·HTTPS 개념을 맛보기 수준으로 정리합니다."
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
  • <strong>주소 비교</strong> — 기본 제공 주소와 커스텀 도메인의 차이를 이해합니다<br>
  • <strong>연결 개념 맛보기</strong> — DNS·CNAME·HTTPS의 역할을 개념 수준에서 파악합니다<br>
  • <strong>변화 대응</strong> — 업체별 화면 절차는 계속 바뀔 수 있음을 인지합니다
</div>

---

## 1. 기본 주소 vs 커스텀 도메인

[이전 문서](/ai-vibe-coding/lesson-4/4-3-hero-section)에서 배포된 화면을 점검했다면, 이번에는 domain-checklist, 즉 방문자에게 보여줄 주소를 정리하는 단계입니다.

특정 도메인 판매 업체의 화면 절차는 이 문서에서 다루지 않습니다. 업체 화면은 계속 바뀔 수 있으므로, 연결 개념과 확인 기준을 중심으로 정리합니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">기본 제공 주소</div>
    배포 서비스가 자동으로 부여하는 주소입니다. 별도 비용 없이 즉시 사용할 수 있지만 길고 기억하기 어려울 수 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">커스텀 도메인</div>
    별도로 구매한 도메인을 연결한 주소입니다. 기억하기 쉽고 더 전문적으로 보이지만, 구매 비용과 연결 절차가 필요합니다.
  </div>
</div>

---

## 2. 도메인 연결 관련 용어 맛보기

**▶ 도메인 연결 관련 용어**

<table class="wda-mtable">
<thead><tr><th>용어</th><th>개념</th></tr></thead>
<tbody>
<tr><td>DNS</td><td>도메인 이름과 실제 서버 주소를 연결해 주는 인터넷 주소록 같은 시스템입니다.</td></tr>
<tr><td>CNAME</td><td>한 도메인 이름을 다른 도메인 이름으로 연결해 주는 설정 방식입니다.</td></tr>
<tr><td>HTTPS/SSL</td><td>방문자와 사이트 사이의 통신을 암호화해 안전하게 만들어 주는 보안 방식입니다.</td></tr>
</tbody>
</table>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>위 용어들은 <strong>개념만 소개</strong>합니다. 실제 설정값이나 정확한 절차는 사용하는 도메인 서비스와 배포 서비스의 공식 안내에 따라 다르며, 이 문서에서 특정 수치나 절차를 고정해 알려드리지 않습니다.</p>
</div>

---

## 3. 연결 절차 개념 흐름

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 도메인 준비</div><div class="wda-fnode-dsc">원하는 도메인 구매</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 배포 서비스 등록</div><div class="wda-fnode-dsc">배포 서비스에 도메인 정보 입력</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 도메인 서비스 등록</div><div class="wda-fnode-dsc">도메인 서비스에서 연결 정보 등록</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">4. 전파 대기</div><div class="wda-fnode-dsc">설정이 인터넷 전체에 반영될 때까지 대기</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">5. 접속 확인</div><div class="wda-fnode-dsc">새 주소로 실제 접속 확인</div></div>
</div>

**💡 설명**

<div class="wda-callout wda-ci">
  <p>설정 반영에는 시간이 걸릴 수 있습니다. 바로 접속되지 않는다고 해서 실패로 단정하지 말고, 잠시 후 다시 확인해 봅니다.</p>
</div>

---

## 4. 확인해야 할 것

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">HTTPS 적용 여부</div><div class="wda-fcard-dsc">새 주소로 접속했을 때 안전한 연결(HTTPS)로 표시되는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">기존 주소 리디렉션</div><div class="wda-fcard-dsc">기본 제공 주소로 접속해도 문제없이 연결되는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">공식 안내 재확인</div><div class="wda-fcard-dsc">연결 도중 막히는 부분이 있다면 해당 서비스의 최신 공식 안내를 확인합니다.</div></div>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>커스텀 도메인은 <strong>기억하기 쉽고 전문적</strong>이지만, 구매 비용과 연결 절차가 필요하다.</li>
    <li>DNS·CNAME·HTTPS는 <strong>도메인과 서버를 연결하고 통신을 안전하게 만드는</strong> 개념이다.</li>
    <li>연결은 <strong>도메인 준비 → 배포 서비스 등록 → 도메인 서비스 등록 → 전파 대기 → 접속 확인</strong> 흐름으로 진행된다.</li>
    <li>업체별 화면 절차는 계속 바뀔 수 있으므로 <strong>최신 공식 안내</strong>를 함께 확인한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 도메인을 연결하면 바로 새 주소로 접속된다?</div>
    <div class="wda-mistake-right">정답: 설정이 <strong>인터넷 전체에 반영되기까지 시간이 걸릴 수 있어</strong>, 바로 안 된다고 실패로 단정하지 않는다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 이 문서의 절차를 그대로 따라 하면 모든 도메인 서비스에서 동일하게 작동한다?</div>
    <div class="wda-mistake-right">정답: 이 문서는 <strong>개념만 다루며</strong>, 실제 설정값과 화면은 사용하는 서비스의 공식 안내를 따라야 한다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 주소 종류</div>
    <div class="wda-formula-block-body"><code>기본 주소 vs 커스텀 도메인</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 연결 흐름</div>
    <div class="wda-formula-block-body"><code>준비 → 등록 → 등록 → 대기 → 확인</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">기본 제공 주소와 커스텀 도메인의 차이는?</div>
    <div class="wda-flip-back">기본 주소는 무료로 즉시 쓸 수 있지만, 커스텀 도메인은 비용을 들여 더 기억하기 쉬운 주소를 만드는 것이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">DNS의 역할은?</div>
    <div class="wda-flip-back">도메인 이름과 실제 서버 주소를 연결해 주는 것이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">HTTPS는 무엇을 위한 것인가?</div>
    <div class="wda-flip-back">방문자와 사이트 사이의 통신을 안전하게 암호화하는 것이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">도메인 연결 직후 바로 접속이 안 되면?</div>
    <div class="wda-flip-back">전파에 시간이 걸릴 수 있으므로 잠시 후 다시 확인한다.</div>
  </div>
</div>
