---
title: "1단계: 개발환경 구축"
category: "ai-vibe-coding"
section: "setup"
description: "Git, Node.js, VS Code, Claude Code를 설치하고 정상 동작을 확인하며, AI 도움을 받아 프로젝트를 시작하기 전 준비를 마친다."
tags:
  - ai-vibe-coding
  - setup
  - development-environment
  - nodejs
  - vscode
  - git
  - claude-code
date: "2025-11-24"
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
  • <strong>필요한 도구 파악</strong> — 프로젝트를 시작하기 전 무엇을 준비해야 하는지 확인합니다<br>
  • <strong>핵심 도구 설치</strong> — Git, Node.js, VS Code, Claude Code를 설치합니다<br>
  • <strong>설치 확인</strong> — 각 도구가 정상적으로 동작하는지 검증합니다
</div>

---

## 1. 이 문서에서 다루는 것

<div class="wda-callout wda-ci">
  <p><strong>이 setup 카테고리는 5개 문서로 이루어져 있으며, 각 문서는 준비 과정의 서로 다른 단계를 다룹니다.</strong></p>
  <p>이 문서(1단계)는 그 중 가장 처음, <strong>포트폴리오 프로젝트를 만들기 전 작업 환경을 준비하는 단계</strong>입니다. 필요한 도구를 설치하고 정상 동작을 확인하는 데 집중하며, AI에게 작업을 요청하는 방법이나 GitHub 백업, 보안 관리는 이후 문서에서 다룹니다.</p>
</div>

---

## 2. 준비물 한눈에 보기

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Git</div><div class="wda-fcard-dsc">코드 변경 이력을 관리하는 버전 관리 도구입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Node.js</div><div class="wda-fcard-dsc">JavaScript를 실행하는 환경이며, 패키지 관리자인 npm이 함께 설치됩니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">VS Code</div><div class="wda-fcard-dsc">코드를 작성하고 터미널을 실행하는 편집기입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Claude Code</div><div class="wda-fcard-dsc">터미널에서 AI에게 코드 작업을 요청할 수 있게 해주는 도구입니다.</div></div>
</div>

이 문서는 운영체제별 설치 명령과 확인 방법을 다루며, 각 도구의 세부 사용법은 뒤 문서에서 필요할 때마다 설명합니다.

---

## 3. Windows에 설치하기

Windows 10/11에는 `winget`이라는 패키지 관리자가 기본 내장되어 있어, 명령어 한 줄로 프로그램을 설치할 수 있습니다.

Windows 키를 누르고 "PowerShell"을 검색해 **관리자 권한으로 실행**한 뒤 아래 명령을 차례로 입력합니다.

```powershell
winget install Git.Git
winget install OpenJS.NodeJS
```

<div class="wda-callout wda-cw">
  <p>설치가 끝나면 <strong>PowerShell을 완전히 닫고 새로 열어야</strong> 명령어가 인식됩니다. 이번에는 관리자 권한이 아닌 일반 권한으로 실행합니다.</p>
</div>

새 PowerShell에서 Claude Code를 설치합니다.

```powershell
npm install -g @anthropic-ai/claude-code
```

---

## 4. Mac에 설치하기

macOS는 Git이 기본 포함되어 있지만, Node.js 설치를 위해 Homebrew라는 패키지 관리자를 먼저 설치해야 합니다.

Finder에서 "터미널"을 검색해 실행한 뒤 아래 명령을 차례로 입력합니다.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
sudo npm install -g @anthropic-ai/claude-code
```

<div class="wda-callout wda-ci">
  <p><code>sudo</code> 명령을 실행하면 <code>Password:</code>가 표시됩니다. Mac 로그인 비밀번호를 입력하면 되는데, 보안을 위해 입력해도 화면에 아무 표시가 나타나지 않습니다. 정상 동작이므로 그대로 입력 후 Enter를 누릅니다.</p>
</div>

---

## 5. 설치 확인하기

아래 네 명령어로 모든 도구가 정상적으로 설치되었는지 확인합니다.

```bash
git --version
node --version
npm --version
claude --version
```

각 명령어가 버전 번호를 출력하면 정상입니다. 하나라도 "찾을 수 없음" 같은 오류가 나오면, 터미널을 완전히 닫고 새로 연 뒤 다시 시도합니다.

<div class="wda-callout wda-ci">
  <p>명령어가 계속 인식되지 않는다면, 설치 경로가 시스템의 실행 경로(PATH)에 등록되지 않았을 가능성이 큽니다. 대부분 터미널이나 VS Code를 완전히 재시작하면 해결됩니다. 재시작으로도 해결되지 않으면 각 도구의 공식 설치 문서에서 운영체제·버전에 맞는 최신 해결 방법을 확인하는 것이 안전합니다.</p>
</div>

---

## 6. VS Code에서 작업 폴더 준비하기

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">작업 폴더 생성</div><div class="wda-fcard-dsc">프로젝트를 담을 폴더를 하나 만듭니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">폴더 열기</div><div class="wda-fcard-dsc">VS Code에서 File → Open Folder로 방금 만든 폴더를 엽니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">터미널 열기</div><div class="wda-fcard-dsc">Terminal → New Terminal로 내장 터미널을 엽니다.</div></div>
</div>

터미널에서 Claude Code가 정상 인식되는지 다시 확인합니다.

```bash
claude --version
```

---

## 7. Claude Code 인증하기

터미널에서 `claude`를 처음 실행하면 로그인 절차를 안내합니다.

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 로그인 방식 선택</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 인증 링크 열기</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 브라우저 로그인</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">4. 코드 입력</div></div>
</div>

<div class="wda-callout wda-cw">
  <p>인증 코드는 유효 시간이 정해져 있습니다. 시간을 넘기면 <code>claude</code> 명령을 다시 실행해 처음부터 진행합니다.</p>
</div>

인증이 끝나면 준비가 완료됩니다. 정확한 화면 구성이나 버튼 위치는 버전에 따라 달라질 수 있으므로, 화면에 표시되는 안내 문구를 기준으로 진행합니다.

---

## 8. 코드 스타일 도구 소개

VS Code에 ESLint와 Prettier 확장을 추가하면 코드 품질과 스타일을 자동으로 관리할 수 있습니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">Prettier — 스타일 담당</div>
    들여쓰기, 따옴표, 세미콜론처럼 "어떻게 보이는지"를 자동으로 정리합니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">ESLint — 품질 담당</div>
    사용하지 않는 변수, 문법 오류처럼 "올바르게 쓰였는지"를 검사합니다.
  </div>
</div>

두 도구는 역할이 다르므로 함께 사용하는 것이 일반적입니다. 세부 설정 방법은 프로젝트를 실제로 만드는 뒤 단계에서 필요할 때 다룹니다.

---

## 9. 다음 단계로

<div class="wda-check-note">
  <ul>
    <li>Git, Node.js, VS Code, Claude Code 설치와 인증까지 마쳤다면 이 단계는 끝입니다.</li>
    <li>다음 문서에서는 이렇게 준비된 환경에서 <strong>AI에게 작업을 요청할 때 필요한 맥락 구성법</strong>을 다룹니다.</li>
  </ul>
</div>

---

## 10. ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>Windows는 <strong>winget</strong>, Mac은 <strong>Homebrew</strong>로 Git·Node.js를 준비한다 (Mac은 Git이 기본 포함).</li>
    <li>Node.js를 설치하면 <strong>npm이 함께 설치</strong>된다.</li>
    <li>설치 확인은 <code>git --version</code> · <code>node --version</code> · <code>npm --version</code> · <code>claude --version</code> 네 가지로 한다.</li>
    <li>도구 설치 직후에는 <strong>터미널을 닫고 새로 열어야</strong> 명령어가 인식되는 경우가 많다.</li>
    <li>Prettier는 <strong>스타일</strong>을, ESLint는 <strong>품질</strong>을 담당하며 함께 사용한다.</li>
  </ul>
</div>

**🧠 실수 방지 체크**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 설치 후 같은 터미널에서 바로 명령어를 입력한다.</div>
    <div class="wda-mistake-right">방지: 설치 후 <strong>터미널을 닫고 새로 열어야</strong> 명령어가 인식된다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: Mac에서 sudo 명령 실행 중 비밀번호 입력 화면에 아무것도 안 보여서 오류로 착각한다.</div>
    <div class="wda-mistake-right">방지: 정상 동작이다. <strong>입력이 화면에 표시되지 않을 뿐</strong>이므로 입력 후 Enter를 누른다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 인증 코드 입력이 늦어져 시간이 초과됐는데 같은 코드를 계속 시도한다.</div>
    <div class="wda-mistake-right">방지: <code>claude</code> 명령을 <strong>다시 실행</strong>해 처음부터 인증을 진행한다.</div>
  </div>
</div>

**🎯 최종 확인 기준**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">확인 1 · 도구 버전</div>
    <div class="wda-formula-block-body"><code>git · node · npm · claude --version</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">확인 2 · 인증</div>
    <div class="wda-formula-block-body"><code>claude 실행 후 로그인 완료</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">확인 3 · 코드 스타일</div>
    <div class="wda-formula-block-body"><code>Prettier(스타일) + ESLint(품질)</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">Windows에서 Git과 Node.js를 설치하는 도구는?</div>
    <div class="wda-flip-back">winget입니다. Windows 10/11에 기본 내장된 패키지 관리자입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Mac에서 Node.js를 설치하려면?</div>
    <div class="wda-flip-back">Homebrew를 먼저 설치한 뒤 brew install node를 실행합니다. Git은 macOS에 기본 포함되어 있습니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">설치 직후 명령어가 인식되지 않을 때 가장 먼저 할 일은?</div>
    <div class="wda-flip-back">터미널을 완전히 닫고 새로 여는 것입니다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">ESLint와 Prettier의 역할 차이는?</div>
    <div class="wda-flip-back">Prettier는 스타일(포맷)을, ESLint는 코드 품질(문법 오류)을 담당합니다.</div>
  </div>
</div>
