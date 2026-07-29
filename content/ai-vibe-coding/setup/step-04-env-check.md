---
title: "4단계: 환경 세팅 상태 확인"
category: "ai-vibe-coding"
section: "setup"
description: "지금까지 준비한 개발 환경과 프로젝트 구조가 올바른지 AI에게 점검을 요청하고, 결과를 읽는 법과 자주 발견되는 문제의 조치법을 정리한다."
tags:
  - ai-vibe-coding
  - setup
  - verification
  - checklist
date: "2026-06-08"
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
  • <strong>점검 대상 파악</strong> — 무엇이 정상적으로 준비됐는지 확인할 항목을 정리합니다<br>
  • <strong>AI에게 점검 요청하기</strong> — 여러 항목을 한 번에 확인받는 요청문을 작성합니다<br>
  • <strong>결과 읽고 조치하기</strong> — 점검 결과에서 문제를 발견했을 때 대응하는 법을 익힙니다
</div>

---

## 1. 이 문서에서 다루는 것

<div class="wda-callout wda-ci">
  <p><strong>1~3단계에서 도구 설치, AI 요청 방법, GitHub 백업 준비를 마쳤다면, 이 문서는 그 결과가 실제로 올바르게 갖춰졌는지 확인하는 단계입니다.</strong></p>
  <p>새로운 설정을 추가하지 않고, 지금까지의 준비 상태를 점검하고 다음 학습으로 넘어갈 준비가 됐는지 판단하는 데 집중합니다.</p>
</div>

---

## 2. 무엇을 점검하나

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">디렉토리 구조</div><div class="wda-fcard-dsc">프로젝트 폴더와 하위 구조가 예상대로 만들어졌는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">문서/설정 연결</div><div class="wda-fcard-dsc">AI가 프로젝트 규칙 문서를 정상적으로 읽어 들이는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">도구 인증 상태</div><div class="wda-fcard-dsc">GitHub CLI 같은 도구의 로그인 상태가 유지되고 있는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">실행 환경</div><div class="wda-fcard-dsc">프로젝트를 실제로 실행했을 때 정상 동작하는지 확인합니다.</div></div>
</div>

---

## 3. AI에게 점검을 요청하는 법

여러 항목을 하나씩 따로 묻기보다, 점검할 목록을 한 번에 제시하고 결과를 정해진 형식으로 받는 것이 효율적입니다.

```
지금까지 준비한 setup-checklist 항목들이 정상인지 점검해줘.

확인할 항목:
1. 프로젝트 디렉토리 구조가 예상대로 만들어졌는지
2. 프로젝트 규칙 문서(설정 파일)가 정상적으로 인식되는지
3. GitHub CLI 인증 상태가 유지되고 있는지
4. 개발 서버가 정상적으로 실행되는지

출력 형식:
각 항목을 "정상" 또는 "확인 필요"로 표시하고,
"확인 필요"인 항목은 원인 추정과 확인 방법을 함께 알려주세요.
```

---

## 4. 점검 결과를 읽는 법

<table class="wda-mtable">
<thead><tr><th>표시</th><th>의미</th><th>다음 행동</th></tr></thead>
<tbody>
<tr><td>정상</td><td>해당 항목은 준비가 끝났다</td><td>다음 항목 확인으로 넘어감</td></tr>
<tr><td>확인 필요</td><td>예상과 다르거나 확인되지 않았다</td><td>원인 추정을 보고 해당 단계를 다시 점검</td></tr>
</tbody>
</table>

<div class="wda-callout wda-cw">
  <p>"확인 필요" 항목이 있어도 처음부터 전체를 다시 할 필요는 없습니다. 대부분 해당 항목과 관련된 이전 단계만 다시 확인하면 해결됩니다.</p>
</div>

---

## 5. 자주 발견되는 문제

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">문서/설정 미인식</div><div class="wda-fcard-dsc">설정 파일 경로가 틀렸거나 파일이 없는 경우입니다. 파일 위치와 이름을 다시 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">인증 만료</div><div class="wda-fcard-dsc">일정 시간이 지나면 로그인이 풀릴 수 있습니다. 인증 명령을 다시 실행합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">패키지 누락</div><div class="wda-fcard-dsc">설치가 중간에 끊긴 경우입니다. 설치 명령을 다시 실행하고 결과를 확인합니다.</div></div>
</div>

---

## 6. 다음 단계로 넘어가기 전 체크리스트

<div class="wda-check-note">
  <ul>
    <li>도구 설치 확인 명령이 모두 정상 버전을 출력하는가</li>
    <li>AI가 프로젝트 규칙 문서를 정상적으로 인식하는가</li>
    <li>GitHub 인증 상태가 유지되고 있는가</li>
    <li>프로젝트를 실행했을 때 오류 없이 화면이 뜨는가</li>
  </ul>
</div>

모든 항목이 정상이면 다음 학습으로 넘어갈 준비가 된 것입니다.

---

## 7. ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>점검은 <strong>디렉토리 구조·문서 연결·인증 상태·실행 환경</strong> 네 가지를 중심으로 한다.</li>
    <li>여러 항목은 <strong>한 번에 목록으로</strong> 요청하고, <strong>정해진 형식</strong>으로 결과를 받는다.</li>
    <li>"확인 필요" 항목이 나와도 <strong>해당 부분만</strong> 다시 점검하면 된다.</li>
    <li>모든 항목이 정상이어야 <strong>다음 학습으로 넘어갈 준비</strong>가 된 것이다.</li>
  </ul>
</div>

**🧠 실수 방지 체크**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 점검 결과에 문제가 하나라도 있으면 처음부터 전부 다시 한다.</div>
    <div class="wda-mistake-right">방지: 원인 추정을 보고 <strong>해당 단계만</strong> 다시 확인한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 항목을 하나씩 따로따로 물어본다.</div>
    <div class="wda-mistake-right">방지: 확인할 항목을 <strong>목록으로 한 번에</strong> 요청하면 더 빠르고 일관되게 확인할 수 있다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 인증 관련 오류를 계정 문제로 단정한다.</div>
    <div class="wda-mistake-right">방지: 대부분 <strong>인증 시간이 만료</strong>된 것이므로 인증 명령을 다시 실행해본다.</div>
  </div>
</div>

**🎯 점검 진행 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 점검 대상</div>
    <div class="wda-formula-block-body"><code>구조 · 문서연결 · 인증 · 실행</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 결과 표기</div>
    <div class="wda-formula-block-body"><code>정상 / 확인 필요 + 원인</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 조치</div>
    <div class="wda-formula-block-body"><code>해당 단계만 재확인</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">환경 점검에서 확인할 4가지 대상은?</div>
    <div class="wda-flip-back">디렉토리 구조, 문서/설정 연결, 도구 인증 상태, 실행 환경입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">"확인 필요" 항목이 나오면 어떻게 하나요?</div>
    <div class="wda-flip-back">전체를 다시 하지 않고, 해당 항목과 관련된 이전 단계만 다시 확인합니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">여러 점검 항목을 요청할 때 좋은 방법은?</div>
    <div class="wda-flip-back">항목을 목록으로 정리해 한 번에 요청하고, 결과 형식을 지정합니다.</div>
  </div>
</div>
