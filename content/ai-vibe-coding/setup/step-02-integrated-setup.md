---
title: "2단계: 통합 세팅 및 첫 수업 준비"
category: "ai-vibe-coding"
section: "setup"
description: "AI에게 여러 단계로 이어지는 작업을 요청할 때 필요한 맥락 구성, 범위 제한, 결과 검토 기준을 정리한다."
tags:
  - ai-vibe-coding
  - setup
  - claude-code
  - prompt-context
date: "2026-06-07"
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
  • <strong>맥락의 중요성 이해</strong> — 짧은 요청과 맥락이 있는 요청의 결과 차이를 이해합니다<br>
  • <strong>요청 구성 요소 파악</strong> — 목표·현재 상황·제약·출력 형식을 갖춰 요청하는 법을 익힙니다<br>
  • <strong>결과 검토 기준</strong> — AI가 완료했다고 보고한 작업을 어떻게 확인할지 익힙니다
</div>

---

## 1. 이 문서에서 다루는 것

<div class="wda-callout wda-ci">
  <p><strong>1단계에서 개발 환경을 준비했다면, 이 문서는 그 환경에서 AI에게 실제로 작업을 요청하는 방법을 다룹니다.</strong></p>
  <p>특히 프로젝트 초기 세팅처럼 <strong>여러 단계가 한 번에 이어지는 큰 작업</strong>을 요청할 때 어떻게 맥락을 주고 결과를 검토하는지에 집중합니다. GitHub 백업이나 보안 관리는 다음 문서에서 다룹니다.</p>
</div>

---

## 2. 왜 맥락이 중요한가

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">맥락 없는 요청</div>
    "프로젝트 세팅해줘"처럼 짧게 요청하면, AI는 어떤 프레임워크를, 어떤 구조로, 어디까지 만들어야 하는지 추측해야 합니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">맥락이 있는 요청</div>
    무엇을 만들지, 이미 준비된 것은 무엇인지, 결과물이 어떤 형태여야 하는지를 함께 주면 추측할 부분이 줄어듭니다.
  </div>
</div>

---

## 3. 요청 전에 확인할 4가지

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">목표</div><div class="wda-fcard-dsc">최종적으로 무엇이 만들어져야 하는지 한 문장으로 정리합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">현재 상황</div><div class="wda-fcard-dsc">지금 무엇이 준비되어 있고 무엇이 없는지 알려줍니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">제약</div><div class="wda-fcard-dsc">건드리면 안 되는 파일, 지켜야 할 규칙을 명시합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">출력 형식</div><div class="wda-fcard-dsc">결과를 어떤 형태로 보고받고 싶은지 정합니다.</div></div>
</div>

---

## 4. 여러 단계로 이어지는 작업 요청하기

포트폴리오 프로젝트의 초기 환경을 세팅하는 경우처럼, 한 번의 요청이 여러 단계로 이어질 때는 각 단계의 순서와 완료 조건을 함께 제시하는 것이 안전합니다.

```
project-workspace 폴더에 React 프로젝트의 초기 환경을 준비해줘.

목표:
- portfolio-project라는 이름으로 새 React 프로젝트를 생성하고,
  기본적인 폴더 구조를 갖춘 상태로 만들고 싶습니다.

현재 상황:
- 폴더는 비어 있고, Node.js와 npm은 이미 설치되어 있습니다.
- 아직 어떤 프레임워크 설정도 되어 있지 않습니다.

제약:
- 각 단계가 끝날 때마다 무엇을 했는지 알려주세요.
- 패키지 설치가 실패하면 임의로 다른 방법을 시도하지 말고 먼저 알려주세요.

출력 형식:
1. 진행한 단계 목록
2. 생성된 주요 파일과 폴더
3. 다음에 확인해야 할 것
```

<div class="wda-callout wda-ci">
  <p>단계가 많은 작업일수록, "각 단계 완료 후 알려달라"처럼 <strong>중간 보고를 요청</strong>하면 어디서 문제가 생겼는지 훨씬 빨리 알 수 있습니다.</p>
</div>

---

## 5. 작업 범위를 제한하는 이유

일부 AI 도구는 매 변경마다 승인을 묻지 않고 자동으로 진행하는 옵션을 제공합니다. 이런 옵션은 작업 속도를 높여주지만, 검토 없이 여러 파일이 한 번에 바뀔 수 있다는 위험도 함께 따라옵니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">신뢰할 수 있는 환경에서만</div><div class="wda-fcard-dsc">중요한 파일이 없는 새 프로젝트나 실습용 폴더에서 우선 사용해봅니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">변경 범위를 명시</div><div class="wda-fcard-dsc">"다른 파일은 건드리지 마세요"처럼 범위를 제한하는 문장을 함께 씁니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">완료 후 반드시 확인</div><div class="wda-fcard-dsc">자동으로 진행됐더라도 결과물은 사람이 직접 열어 확인합니다.</div></div>
</div>

---

## 6. 결과를 검토하는 기준

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">AI의 보고만 믿기</div>
    "완료했습니다"라는 메시지만 보고 다음 단계로 넘어가면, 실제로는 일부만 처리됐거나 다른 파일이 영향을 받았을 수 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">직접 확인하기</div>
    생성된 파일 목록을 눈으로 보고, 실행해서 정상 동작하는지 확인한 뒤 다음 단계로 넘어갑니다.
  </div>
</div>

<div class="wda-callout wda-cw">
  <p>완료 메시지가 항상 실제 상태와 정확히 일치하는 것은 아닙니다. 특히 여러 단계가 이어지는 작업일수록, 중간중간 결과물을 직접 열어 확인하는 습관이 필요합니다.</p>
</div>

---

## 7. 주의사항

<div class="wda-callout wda-cw">
  <p>요청문 안에 비밀번호, API 키, 액세스 토큰 같은 민감한 값을 그대로 적지 않습니다. 이런 정보를 다루는 방법은 다음 문서에서 별도로 설명합니다.</p>
</div>

<div class="wda-callout wda-ci">
  <p>AI 도구의 화면 구성이나 옵션 이름은 버전에 따라 달라질 수 있습니다. 특정 버튼 위치나 메뉴 이름을 그대로 외우기보다, "무엇을 확인해야 하는지"를 기준으로 접근하는 것이 오래 유지됩니다.</p>
</div>

---

## 8. ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>좋은 요청은 <strong>목표·현재 상황·제약·출력 형식</strong> 네 가지를 갖춘다.</li>
    <li>여러 단계로 이어지는 작업은 <strong>중간 보고</strong>를 요청하면 문제를 더 빨리 발견할 수 있다.</li>
    <li>자동 승인 옵션은 <strong>신뢰할 수 있는 환경</strong>에서, <strong>범위를 제한</strong>하며 사용한다.</li>
    <li>AI의 "완료했습니다"는 <strong>참고용 보고</strong>일 뿐, 최종 확인은 사람이 직접 한다.</li>
    <li>요청문에 <strong>비밀번호나 API 키를 직접 적지 않는다</strong>.</li>
  </ul>
</div>

**🧠 실수 방지 체크**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: "세팅해줘"처럼 짧게만 요청하고 결과를 기다린다.</div>
    <div class="wda-mistake-right">방지: 목표·현재 상황·제약·출력 형식을 갖춰 요청하면 <strong>추측으로 인한 오차</strong>가 줄어든다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: "완료했습니다" 메시지만 보고 바로 다음 작업을 요청한다.</div>
    <div class="wda-mistake-right">방지: 결과물을 <strong>직접 열어 확인</strong>한 뒤 다음 단계로 넘어간다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 자동 승인 옵션을 중요한 프로젝트에서 바로 사용한다.</div>
    <div class="wda-mistake-right">방지: <strong>실습용 환경</strong>에서 먼저 익히고, 범위를 제한하는 문장을 함께 쓴다.</div>
  </div>
</div>

**🎯 요청문 구성 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 4요소</div>
    <div class="wda-formula-block-body"><code>목표 + 현재 상황 + 제약 + 출력 형식</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 다단계 작업</div>
    <div class="wda-formula-block-body"><code>단계별 완료 보고 요청</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 검증</div>
    <div class="wda-formula-block-body"><code>AI 보고 + 사람의 직접 확인</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">좋은 요청문의 4가지 구성 요소는?</div>
    <div class="wda-flip-back">목표, 현재 상황, 제약, 출력 형식입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">여러 단계로 이어지는 작업을 요청할 때 유용한 방법은?</div>
    <div class="wda-flip-back">각 단계가 끝날 때마다 중간 보고를 요청하는 것입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">AI가 "완료했습니다"라고 말하면 바로 믿어도 되나요?</div>
    <div class="wda-flip-back">아니요. 참고용 보고로 삼고, 결과물은 직접 확인해야 합니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">자동 승인 옵션을 쓸 때 지켜야 할 원칙은?</div>
    <div class="wda-flip-back">신뢰할 수 있는 환경에서, 변경 범위를 제한하며 사용하고 결과는 반드시 확인합니다.</div>
  </div>
</div>
