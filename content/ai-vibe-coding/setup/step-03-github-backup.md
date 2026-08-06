---
title: "3단계: GitHub 백업 환경 설정"
category: "ai-vibe-coding"
section: "setup"
description: "Git과 GitHub의 역할 차이, AI에게 백업을 요청하는 법, .env와 액세스 토큰 같은 민감 정보를 안전하게 관리하는 방법을 정리한다."
tags:
  - ai-vibe-coding
  - setup
  - github
  - github-cli
  - git
  - security
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
  • <strong>Git과 GitHub 구분</strong> — 로컬 버전 관리와 클라우드 저장의 역할 차이를 이해합니다<br>
  • <strong>AI에게 백업 요청하기</strong> — GitHub CLI 인증을 준비하고 백업을 요청하는 법을 익힙니다<br>
  • <strong>민감 정보 보호</strong> — .env, 액세스 토큰 같은 값을 안전하게 관리하는 원칙을 익힙니다
</div>

---

## 1. Git과 GitHub의 역할 차이

이 문서는 프로젝트를 GitHub에 백업하는 준비와, 그 과정에서 반드시 알아야 할 보안 원칙을 함께 다룹니다. Git 명령어 자체를 깊이 다루지는 않으며, AI에게 백업을 요청할 때 필요한 기본 흐름과 <code>.env</code>·토큰 같은 민감 정보를 지키는 방법에 집중합니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">Git</div>
    내 컴퓨터에서 코드의 변경 이력을 기록하고 관리하는 도구입니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">GitHub</div>
    Git으로 관리한 코드를 인터넷(클라우드)에 저장하고 공유하는 서비스입니다.
  </div>
</div>

컴퓨터가 고장 나거나 파일을 실수로 지워도, GitHub에 올려둔 코드는 그대로 남아 있습니다.

---

## 2. GitHub CLI로 인증 준비하기

터미널에서 GitHub 작업을 하려면 `gh`라는 GitHub CLI가 필요합니다.

**• 터미널: GitHub CLI 버전 확인**

```bash
gh --version
```

설치되어 있지 않다면 Windows는 `winget install GitHub.cli`로 설치할 수 있습니다. 설치 후에는 터미널을 완전히 재시작해야 인식됩니다.

인증은 브라우저 로그인 한 번으로 끝납니다.

**• 터미널: GitHub CLI 인증**

```bash
gh auth login
```

**💡 설명**

<div class="wda-callout wda-ci">
  <p>이 방식을 <strong>OAuth</strong>라고 합니다. 비밀번호를 직접 전달하지 않고, 신뢰하는 앱(GitHub CLI)에 필요한 권한만 허용하는 인증 방식입니다. 구글 계정으로 다른 서비스에 로그인하는 것과 비슷한 원리입니다.</p>
</div>

인증이 끝났는지는 아래로 확인합니다.

**• 터미널: 인증 상태 확인**

```bash
gh auth status
```

---

## 3. AI에게 백업을 요청할 때

인증이 준비되면, AI에게 자연어로 백업을 요청할 수 있습니다.

**• 백업 요청 프롬프트**

```
현재 project-workspace 폴더의 내용을 git-repository로 백업하고 싶습니다.

목표:
- 아직 원격 저장소가 없다면 새로 만들고, 현재 코드를 처음으로 올려주세요.

제약:
- .env 파일이나 개인 설정 파일은 저장소에 포함하지 마세요.
- 저장소를 공개(public)로 만들지, 비공개(private)로 만들지 먼저 물어봐 주세요.

출력 형식:
1. 생성된 저장소 주소
2. 이번에 올라간 파일 목록 요약
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>백업 요청 후에는 실제로 저장소 페이지에 접속해 파일이 의도한 대로 올라갔는지 <strong>직접 확인</strong>합니다. 특히 민감한 파일이 실수로 포함되지 않았는지 살펴봅니다.</p>
</div>

---

## 4. 민감 정보 보호하기

API 키, 비밀번호, 액세스 토큰 같은 값은 코드와 함께 저장소에 올라가면 외부에 노출될 수 있습니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">.gitignore로 제외하기</div><div class="wda-fcard-dsc"><code>.env</code>, <code>node_modules/</code>처럼 올리면 안 되는 파일과 폴더를 등록합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">placeholder 사용하기</div><div class="wda-fcard-dsc">실제 값 대신 예시 값만 담은 <code>.env.example</code> 파일을 대신 공유합니다.</div></div>
</div>

`.env.example` 파일은 실제 키 없이 어떤 값이 필요한지만 보여줍니다.

**• 설정: .env.example 예시**

```bash
VITE_PUBLIC_PROJECT_URL=your_project_url_here
VITE_PUBLIC_ANON_KEY=your_anon_key_here
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>실제 <code>.env</code> 파일의 값은 절대 코드에 직접 적거나 AI와의 대화창에 그대로 붙여넣지 않습니다. api-key와 access-token은 한 번 노출되면 즉시 재발급하는 것이 안전합니다.</p>
</div>

---

## 5. 배포 방식 개념

프로젝트를 웹에 공개할 때는 GitHub Pages를 함께 쓰는 경우가 많습니다. 배포 방식은 크게 두 갈래로 나뉩니다.

**▶ 배포 방식 비교**

<table class="wda-mtable">
<thead><tr><th>방식</th><th>특징</th></tr></thead>
<tbody>
<tr><td>서버 직접 빌드 (Legacy)</td><td>진행 상태를 확인하기 어렵고, 멈추거나 실패해도 원인을 파악하기 힘들다</td></tr>
<tr><td>워크플로우 빌드 (Actions)</td><td>빌드 과정을 파일로 정의해, 로그를 보며 원인을 추적할 수 있다</td></tr>
</tbody>
</table>

세부 설정 파일 작성법은 배포를 실제로 진행하는 단계에서 필요할 때 다룹니다.

---

## 6. ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>Git은 <strong>로컬 버전 관리</strong>, GitHub는 그것을 <strong>클라우드에 저장</strong>하는 서비스다.</li>
    <li>GitHub CLI 인증은 <code>gh auth login</code> 한 번의 <strong>OAuth 브라우저 로그인</strong>으로 끝난다.</li>
    <li>AI에게 백업을 요청할 때도 <strong>어떤 파일은 제외할지</strong>, <strong>공개 범위</strong>를 명확히 알려준다.</li>
    <li><code>.env</code>, API 키, 토큰은 <strong>.gitignore로 제외</strong>하고, 공유가 필요하면 placeholder만 있는 <code>.env.example</code>을 사용한다.</li>
    <li>배포는 진행 상태를 확인할 수 있는 <strong>워크플로우(Actions) 방식</strong>이 안정적이다.</li>
  </ul>
</div>

**🧠 실수 방지 체크**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: gh 명령어가 바로 인식될 거라 생각한다.</div>
    <div class="wda-mistake-right">방지: 설치 후 <strong>터미널을 재시작</strong>해야 인식된다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: .env 파일도 그냥 GitHub에 올려도 된다고 생각한다.</div>
    <div class="wda-mistake-right">방지: API 키·비밀번호가 노출될 수 있으므로 반드시 <strong>.gitignore에 등록</strong>한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 백업 요청 후 결과를 확인하지 않고 다음 작업으로 넘어간다.</div>
    <div class="wda-mistake-right">방지: 저장소 페이지에서 <strong>실제로 올라간 파일</strong>을 직접 확인한다.</div>
  </div>
</div>

**🎯 최종 확인 기준**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">확인 1 · 인증</div>
    <div class="wda-formula-block-body"><code>gh auth status → 로그인 확인</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">확인 2 · 민감 정보</div>
    <div class="wda-formula-block-body"><code>.env는 .gitignore로 제외</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">확인 3 · 배포</div>
    <div class="wda-formula-block-body"><code>워크플로우(Actions) 방식 우선</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">Git과 GitHub의 차이는?</div>
    <div class="wda-flip-back">Git은 내 컴퓨터의 버전 관리 도구이고, GitHub는 그것을 클라우드에 저장하는 서비스입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">OAuth란?</div>
    <div class="wda-flip-back">비밀번호를 직접 전달하지 않고, 신뢰하는 앱에 필요한 권한만 허용하는 인증 방식입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">.env 파일을 안전하게 관리하는 방법은?</div>
    <div class="wda-flip-back">.gitignore로 제외하고, 공유가 필요하면 실제 값 없는 .env.example을 대신 공유합니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">GitHub Pages 배포 시 권장되는 방식은?</div>
    <div class="wda-flip-back">로그를 확인할 수 있는 워크플로우(GitHub Actions) 방식입니다.</div>
  </div>
</div>
