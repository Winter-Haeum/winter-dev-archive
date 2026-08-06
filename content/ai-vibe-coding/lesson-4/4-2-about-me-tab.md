---
title: "4-2: 배포 방식과 준비 항목 비교하기"
category: "ai-vibe-coding"
section: "lesson-4"
date: "2026-06-25"
status: "completed"
description: "GitHub Pages, Vercel, Netlify 같은 배포 방식을 개념 수준에서 비교하고, 배포 전 확인해야 할 빌드·경로·환경변수·공개 범위를 정리합니다."
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
  • <strong>배포 방식 비교</strong> — 여러 배포 서비스의 공통점과 차이를 개념 수준에서 이해합니다<br>
  • <strong>배포 전 준비 항목</strong> — 빌드·경로·환경변수·공개 범위를 점검합니다<br>
  • <strong>안전한 공개</strong> — 실제 키 값이 공개 저장소에 남지 않도록 확인합니다
</div>

---

## 1. 배포 방식 개념 비교

[[4-1-portfolio-reference-exploration|이전 문서]]에서 화면을 점검했다면, 이제 그 화면을 외부에 공개하는 deployment-plan을 세울 차례입니다.

특정 서비스의 최신 화면이나 요금은 계속 바뀔 수 있으므로, 이 문서에서는 배포 방식의 공통 개념과 준비 항목을 중심으로 다룹니다.

**▶ 배포 방식별 공통 개념**

<table class="wda-mtable">
<thead><tr><th>방식</th><th>공통 개념</th><th>참고</th></tr></thead>
<tbody>
<tr><td>GitHub Pages</td><td>코드 저장소와 연결해 정적 화면을 공개하는 방식</td><td>저장소 설정과 함께 관리하기 편함</td></tr>
<tr><td>Vercel / Netlify류 서비스</td><td>저장소를 연결하면 자동으로 빌드·배포해 주는 방식</td><td>서비스별 세부 화면과 정책은 계속 바뀔 수 있음</td></tr>
</tbody>
</table>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>어떤 서비스를 선택하든 <strong>공통 원리는 같습니다</strong>: 저장소의 코드를 빌드하고, 결과물을 공개 주소로 서비스합니다. 서비스별 정확한 버튼 위치나 요금은 이 문서에서 단정하지 않으며, 실제 사용 시점의 공식 안내를 확인해야 합니다.</p>
</div>

---

## 2. 배포 전 확인할 항목

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">빌드 성공 여부</div><div class="wda-fcard-dsc">배포 전 로컬에서 빌드가 오류 없이 완료되는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">경로 설정</div><div class="wda-fcard-dsc">공개 주소의 기본 경로가 화면의 링크·이미지 경로와 맞는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">환경변수</div><div class="wda-fcard-dsc">연결 정보 같은 값이 코드에 직접 노출되지 않고 별도로 관리되는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">공개 범위</div><div class="wda-fcard-dsc">공개 저장소에 올라가면 안 되는 파일이 포함되어 있지 않은지 확인합니다.</div></div>
</div>

---

## 3. 배포 전 체크 vs 배포 후 체크

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">배포 전 체크</div>
    빌드 성공 여부, 경로 설정, 환경변수 노출 여부처럼 <strong>공개하기 전에</strong> 확인해야 하는 항목입니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">배포 후 체크</div>
    실제 공개 주소에서 화면이 어떻게 보이는지는 <strong>배포가 끝난 뒤</strong> 별도로 확인해야 합니다. 자세한 내용은 [[4-3-hero-section|다음 문서]]에서 다룹니다.
  </div>
</div>

---

## 4. AI에게 배포 준비 점검 요청하기

**• 배포 준비 점검 요청 프롬프트**

```
목표:
- 포트폴리오를 배포하기 전 준비 상태를 점검하고 싶습니다.

현재 상황:
- 로컬에서는 화면이 정상적으로 보입니다.
- 아직 실제로 배포해본 적은 없습니다.

제약:
- 특정 배포 서비스의 최신 UI나 요금을 단정하지 말고, 확인 기준 중심으로 설명해주세요.
- 실제 연결 정보나 키 값은 요청하지 마세요.

출력 형식:
1. 배포 전 확인할 항목
2. 위험할 수 있는 공개 정보
3. 배포 방식 선택 시 고려할 점
4. 배포 후 다시 확인할 항목
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>배포가 <strong>"반드시 성공한다"거나 "완벽히 해결된다"</strong>고 단정할 수 없습니다. 환경과 서비스 정책에 따라 결과가 달라질 수 있으므로, 준비 항목을 점검한 뒤에도 실제 배포 결과를 다시 확인해야 합니다.</p>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>배포 서비스마다 화면은 다르지만, <strong>저장소 코드를 빌드해 공개 주소로 서비스한다</strong>는 공통 원리는 같다.</li>
    <li>배포 전에는 <strong>빌드 성공, 경로 설정, 환경변수, 공개 범위</strong> 네 가지를 확인한다.</li>
    <li>배포 전 체크와 배포 후 체크는 <strong>확인 시점이 다르므로</strong> 둘 다 필요하다.</li>
    <li>배포 성공은 <strong>환경에 따라 달라질 수 있어</strong> 단정할 수 없다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 배포 서비스마다 사용법이 완전히 달라서 따로 외워야 한다?</div>
    <div class="wda-mistake-right">정답: 세부 화면은 다르지만 <strong>빌드→공개라는 공통 원리</strong>를 이해하면 어떤 서비스든 준비 항목은 비슷하다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 로컬에서 화면이 잘 보이면 배포 준비가 끝난 것이다?</div>
    <div class="wda-mistake-right">정답: 경로 설정이나 환경변수처럼 <strong>로컬에서는 드러나지 않는 문제</strong>가 배포 후에 나타날 수 있다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 배포 공통 원리</div>
    <div class="wda-formula-block-body"><code>저장소 코드 → 빌드 → 공개 주소</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 배포 전 점검</div>
    <div class="wda-formula-block-body"><code>빌드·경로·환경변수·공개범위</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">여러 배포 서비스의 공통 원리는?</div>
    <div class="wda-flip-back">저장소의 코드를 빌드해 결과물을 공개 주소로 서비스하는 것이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">배포 전 확인할 네 가지는?</div>
    <div class="wda-flip-back">빌드 성공 여부, 경로 설정, 환경변수, 공개 범위다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">배포 전 체크와 배포 후 체크는 왜 둘 다 필요한가?</div>
    <div class="wda-flip-back">확인할 수 있는 시점과 내용이 서로 다르기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">배포 성공을 단정할 수 없는 이유는?</div>
    <div class="wda-flip-back">환경과 서비스 정책에 따라 결과가 달라질 수 있기 때문이다.</div>
  </div>
</div>
