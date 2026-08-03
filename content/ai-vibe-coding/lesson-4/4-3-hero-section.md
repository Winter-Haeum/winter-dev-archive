---
title: "4-3: 배포 후 화면 점검하기"
category: "ai-vibe-coding"
section: "lesson-4"
date: "2026-06-26"
status: "completed"
description: "공개된 URL에서 깨진 링크·이미지·라우팅·새로고침·모바일 화면을 점검하고, 문제 발생 시 AI에게 재현 정보와 함께 요청하는 방법을 익힙니다."
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
  • <strong>공개 화면 점검</strong> — 실제 공개 주소에서 화면이 의도대로 보이는지 확인합니다<br>
  • <strong>흔한 문제 유형</strong> — 깨진 링크·이미지, 라우팅, 새로고침 문제를 구분합니다<br>
  • <strong>재현 정보 정리</strong> — 문제 발생 시 AI에게 정확히 전달하는 법을 익힙니다
</div>

---

## 1. 로컬 화면과 공개 URL은 다를 수 있다

[[4-2-about-me-tab|이전 문서]]에서 배포 준비를 마쳤다면, 이제 실제 공개된 public-url-check 단계입니다. 로컬 화면과 실제 공개 화면은 다를 수 있습니다. 이 문서는 배포 직후 반드시 확인해야 할 항목과, 문제를 발견했을 때 AI에게 전달하는 방법을 다룹니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">로컬 화면</div>
    개발 중인 환경에서만 확인한 화면입니다. 경로나 환경변수 설정에 따라 실제 배포 결과와 다를 수 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">공개 URL</div>
    실제 방문자가 접속하는 주소입니다. 배포 과정에서 달라진 경로나 설정 문제가 이곳에서 드러납니다.
  </div>
</div>

---

## 2. 배포 후 확인 항목

<table class="wda-mtable">
<thead><tr><th>항목</th><th>확인 방법</th></tr></thead>
<tbody>
<tr><td>깨진 링크</td><td>메뉴·버튼의 이동 경로가 실제로 연결되는지 하나씩 클릭해 확인합니다.</td></tr>
<tr><td>이미지 로드</td><td>이미지가 빠짐없이 표시되는지, 경로 오류로 깨져 보이지 않는지 확인합니다.</td></tr>
<tr><td>라우팅</td><td>여러 화면(탭·페이지) 사이를 이동할 때 올바른 화면이 나오는지 확인합니다.</td></tr>
<tr><td>새로고침</td><td>특정 화면에서 새로고침했을 때 오류 없이 그대로 유지되는지 확인합니다.</td></tr>
<tr><td>모바일 화면</td><td>lesson-3에서 다룬 기준대로 모바일에서도 정상적으로 보이는지 확인합니다.</td></tr>
</tbody>
</table>

<div class="wda-callout wda-ci">
  <p>새로고침 시 화면이 제대로 뜨지 않는 문제는 배포 환경의 경로 설정과 관련된 경우가 많습니다. 정확한 원인과 해결 방법은 서비스와 프로젝트 구조에 따라 달라지므로, 이 문서에서는 <strong>증상을 알아채는 것까지</strong>를 목표로 하고 구체적인 해결은 AI와 함께 상황에 맞게 확인합니다.</p>
</div>

---

## 3. 문제 발견 → 수정 흐름

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 문제 발견</div><div class="wda-fnode-dsc">공개 URL에서 이상 증상 확인</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 재현 정보 정리</div><div class="wda-fnode-dsc">어떤 화면·상황에서 발생했는지 기록</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 원인 후보 요청</div><div class="wda-fnode-dsc">AI에게 가능한 원인 문의</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">4. 수정</div><div class="wda-fnode-dsc">제안받은 방향으로 수정</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">5. 재검증</div><div class="wda-fnode-dsc">같은 상황을 다시 재현해 확인</div></div>
</div>

---

## 4. AI에게 재현 정보와 함께 요청하기

```
목표:
- 배포된 화면에서 발견한 문제를 해결하고 싶습니다.

현재 상황:
- 어떤 화면에서 문제가 발생했는지: [예: 프로젝트 상세 화면]
- 어떤 상황에서 발생했는지: [예: 새로고침했을 때]
- 로컬에서는 문제없이 보였는지: [예: 로컬에서는 정상]

제약:
- 실제 배포 주소나 계정 정보는 공유하지 마세요.
- 확실하지 않은 원인은 단정하지 말고 후보로 제시해주세요.

출력 형식:
1. 가능한 원인 후보
2. 우선 확인할 설정
3. 수정 방향
4. 재검증 시 확인할 것
```

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>배포 후에는 <strong>깨진 링크·이미지·라우팅·새로고침·모바일 화면</strong> 다섯 가지를 반드시 확인한다.</li>
    <li>로컬 화면과 공개 URL은 <strong>다를 수 있으므로</strong> 별도로 점검해야 한다.</li>
    <li>문제 발견 시 <strong>재현 정보를 구체적으로 정리</strong>해야 AI가 원인을 더 정확히 찾을 수 있다.</li>
    <li>문제 수정 후에는 <strong>같은 상황을 다시 재현</strong>해 재검증한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 로컬에서 정상이었으니 배포 후 확인은 생략해도 된다?</div>
    <div class="wda-mistake-right">정답: 경로·환경변수 설정 차이로 <strong>배포 후에만 나타나는 문제</strong>가 있을 수 있다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: "안 된다"는 말만 전달해도 AI가 바로 해결해준다?</div>
    <div class="wda-mistake-right">정답: <strong>어떤 화면, 어떤 상황</strong>에서 발생했는지 재현 정보를 구체적으로 전달해야 정확한 도움을 받을 수 있다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 배포 후 확인</div>
    <div class="wda-formula-block-body"><code>링크·이미지·라우팅·새로고침·모바일</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 문제 해결 흐름</div>
    <div class="wda-formula-block-body"><code>발견 → 재현정보 → 원인후보 → 수정 → 재검증</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">배포 후 확인할 다섯 가지 항목은?</div>
    <div class="wda-flip-back">깨진 링크, 이미지 로드, 라우팅, 새로고침, 모바일 화면이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">로컬 화면과 공개 URL을 따로 확인해야 하는 이유는?</div>
    <div class="wda-flip-back">경로나 환경변수 설정 차이로 배포 후에만 드러나는 문제가 있을 수 있기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">문제를 AI에게 전달할 때 꼭 포함할 것은?</div>
    <div class="wda-flip-back">어떤 화면에서, 어떤 상황에서 발생했는지에 대한 재현 정보다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">수정 후 마지막으로 해야 할 일은?</div>
    <div class="wda-flip-back">같은 상황을 다시 재현해 문제가 해결됐는지 재검증하는 것이다.</div>
  </div>
</div>
