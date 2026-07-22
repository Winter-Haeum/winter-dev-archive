---
title: "4단계: 환경 세팅 상태 확인"
category: "ai-vibe-coding"
section: "setup"
description: "setup 단계에서 구축한 개발 환경과 프로젝트 구조가 올바르게 설정되었는지 Claude에게 종합 점검을 요청하여 확인한다."
tags:
  - ai-vibe-coding
  - setup
  - claude-code
  - claude-md
  - verification
date: "2026-06-08"
status: "completed"
---

<style>
.wda-callout{border-radius:10px;padding:12px 15px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-done{border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:16px 20px;margin:.8rem 0 1.4rem;background:rgba(34,197,94,.04);text-align:center;font-size:.82rem;line-height:1.6}
.wda-done-ico{font-size:1.8rem;margin-bottom:6px}
.wda-done-ttl{font-size:1rem;font-weight:700;color:#22c55e;margin-bottom:4px}
.wda-steps{background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(139,92,246,.12);color:#8b5cf6;font-size:.8rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 150px;background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-prompt-head{background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.22);border-bottom:none;border-radius:10px 10px 0 0;padding:8px 14px;font-size:.78rem;font-weight:700;color:#8b5cf6;letter-spacing:.03em}
.wda-memo{background:rgba(245,158,11,.04);border:1px solid rgba(245,158,11,.2);border-radius:10px;padding:14px 16px;margin:.8rem 0 1.6rem}
.wda-memo-label{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#f59e0b;margin-bottom:8px;display:block}
.wda-memo-body{font-size:.81rem;line-height:1.6}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:13px 18px;margin:.8rem 0 1.6rem;font-size:.79rem;line-height:1.75}
.wda-goal-label{font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#22c55e;display:block;margin-bottom:10px}
table{width:100%;border-collapse:collapse;font-size:.78rem;margin:.8rem 0 1.6rem}
th{font-weight:600;padding:6px 10px;background:rgba(128,128,128,.07);border:1px solid rgba(128,128,128,.18);font-size:.72rem;letter-spacing:.02em;text-align:left}
td{padding:5px 10px;border:1px solid rgba(128,128,128,.14);vertical-align:top;line-height:1.5;font-size:.78rem}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
.wda-cy{background:rgba(250,204,21,.07);border-color:#ca8a04}
.wda-cy .wda-clabel{color:#92400e}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-deco{position:absolute;z-index:2;pointer-events:none}
.wda-char{position:absolute;z-index:3;pointer-events:none}
@media (max-width:640px){
.wda-deco{max-width:55px !important}
.wda-char{max-width:110px !important}
.wda-goal,.wda-callout,.wda-done,.wda-memo,.wda-steps{padding-left:16px !important;padding-right:16px !important}
}
@media (max-width:554px){
.wda-char{display:none !important}
}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  setup 단계에서 구축한 개발 환경과 프로젝트 구조가 올바르게 설정되었는지 확인한다.<br>
  • <strong>디렉토리 구조 확인</strong> — VSCode에서 파일 구조를 시각적으로 확인<br>
  • <strong>Claude 환경 점검</strong> — 자동 상태 점검 프롬프트 실행으로 시스템 확인
</div>

---

## 📖 개념 설명

**📁 프로젝트 디렉토리 구조 확인**

VSCode를 실행하여 setup 단계에서 생성된 프로젝트 구조를 눈으로 확인합니다.

1. VSCode 프로그램을 실행합니다.
2. **File → Open Folder → `my_ai_web` 폴더 선택하여 열기**

---

### 확인해야 할 디렉토리 구조

VSCode 왼쪽 패널에서 다음과 같은 구조가 보여야 합니다.

<div class="wda-memo">
  <span class="wda-memo-label">📂 예상 디렉토리 구조</span>
  <div class="wda-memo-body">

```
my_ai_web/
├── .claude/
│   ├── settings.local.json
│   └── skills/
│       └── gh_cli/
│           └── skill.md
├── CLAUDE.md (기본 한국어 설정)
└── lecture1/
    ├── CLAUDE.md (로키 역할, @ 연결자)
    ├── docs/
    │   ├── design-system.md
    │   ├── code-convention.md
    │   └── new_project.md
    └── _template_settings/ (완성된 템플릿)
        ├── package.json (MUI 포함)
        ├── vite.config.js
        ├── src/
        │   ├── theme.js
        │   ├── main.jsx (ThemeProvider 적용)
        │   └── App.jsx
        └── node_modules/
```

  </div>
</div>

**구조 확인 체크리스트**

- [ ] `.claude` 폴더와 `settings.local.json` 파일 존재
- [ ] `.claude/skills/gh_cli/skill.md` 파일 존재
- [ ] `lecture1` 폴더와 하위 구조 완성
- [ ] `_template_settings` 템플릿 폴더 존재
- [ ] `docs` 폴더에 3개 md 파일 존재

---

## ⚙️ 동작 원리

### 상태 점검 5단계 흐름

상태 점검 프롬프트를 실행하면 Claude가 다음 순서로 자동 확인합니다.

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">로키 역할 및 문서 시스템 확인</div><div class="wda-sdsc"><code>CLAUDE.md</code>, <code>@docs/*.md</code> 3개 파일</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">GitHub 스킬 및 MCP 연결 확인</div><div class="wda-sdsc"><code>.claude/skills/gh_cli/skill.md</code>, <code>/mcp</code> 상태</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">프로젝트 구조 확인</div><div class="wda-sdsc"><code>_template_settings/</code> 존재 여부</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">React 템플릿 상태 확인</div><div class="wda-sdsc"><code>theme.js</code>, <code>main.jsx</code> ThemeProvider</div></div></div>
<div class="wda-step"><div class="wda-snum">5</div><div class="wda-sbody"><div class="wda-sttl">종합 결과 보고</div><div class="wda-sdsc">✅ / ❌ 형식으로 최종 출력</div></div></div>
</div>

> 💡 **`@docs/` 연결이란?**  
> `CLAUDE.md` 안에 `@docs/design-system.md`처럼 작성하면, Claude가 해당 파일을 자동으로 읽어 들입니다. 이 연결이 깨지면 디자인 규칙이나 코드 컨벤션을 Claude가 인식하지 못합니다.

---

### Claude MCP 모드 실행 방법

점검은 `lecture1` 디렉토리에서 Claude를 실행하는 것이 중요합니다.  
실행 위치에 따라 CLAUDE.md를 읽는 범위가 달라지기 때문입니다.

<div class="wda-callout wda-ci">
  <span class="wda-clabel">실행 위치 중요</span><code>lecture1/</code>에서 실행 → 로키 역할 + @docs 연결 + 루트 CLAUDE.md 동시 인식
</div>

---

## 💻 예제 코드

**📝 Claude 환경 및 문서 시스템 확인**

**✅ PowerShell 터미널 열기**

VSCode에서 **Terminal → New Terminal** 을 선택하여 PowerShell 터미널을 엽니다.

**✅ lecture1 디렉토리로 이동**

프로젝트 작업을 위해 lecture1 디렉토리로 이동합니다.

```powershell
cd lecture1
```

**✅ Claude MCP 모드로 실행**

MCP 설정을 인식하는 모드로 Claude Code를 실행합니다.

```powershell
claude --dangerously-skip-permissions
```

---

**🧪 상태 점검 프롬프트**

Claude가 실행되면 다음 프롬프트를 복사하여 붙여넣어 종합 상태를 확인합니다.

<div class="wda-callout wda-cs">
  <span class="wda-clabel">점검 준비 완료</span>아래 프롬프트를 복사해서 Claude에게 붙여넣으면 5단계 자동 점검이 시작됩니다!
</div>

<div class="wda-prompt-head">📋 상태 점검 프롬프트 — 아래 코드 블록 전체를 복사하여 붙여넣으세요.</div>

```
환경 세팅 상태를 종합 점검해줘. 다음 순서로 확인해줘:

**1단계: 로키 역할 및 문서 시스템 확인**
- 현재 너의 역할이 "로키"인지 확인
- @docs/design-system.md 문서 내용 간단히 요약
- @docs/code-convention.md 문서 내용 간단히 요약
- @docs/new_project.md 문서 내용 간단히 요약
- 3개 문서가 모두 정상적으로 로드되는지 확인

**2단계: GitHub 스킬 및 MCP 연결 상태 확인**
- .claude/skills/gh_cli/skill.md 파일이 존재하는지 확인
- /mcp 명령어로 현재 MCP 서버 연결 상태 확인 (Supabase MCP 등)

**3단계: 프로젝트 구조 점검**
- 현재 디렉토리 구조를 ls 명령어로 확인
- _template_settings 템플릿 디렉토리가 존재하는지 확인
- _template_settings/package.json에 MUI 관련 패키지들이 설치되어 있는지 확인

**4단계: React 템플릿 상태 확인**
- _template_settings/src/theme.js 파일이 존재하는지 확인
- _template_settings/src/main.jsx에 ThemeProvider가 적용되어 있는지 확인

**5단계: 종합 결과 보고**
다음 형식으로 최종 결과 제시:

환경 세팅 상태 점검 결과
├── 로키 역할: ✅ 정상 / ❌ 오류
├── 문서 시스템: ✅ 정상 / ❌ 오류
├── GitHub 스킬: ✅ 정상 / ❌ 오류
├── 프로젝트 구조: ✅ 정상 / ❌ 오류
├── 템플릿 디렉토리: ✅ 정상 / ❌ 오류
└── React 템플릿: ✅ 정상 / ❌ 오류

1차 수업 준비 상태: ✅ 준비완료 / ❌ 추가설정필요

**문제 발생 시:**
- 각 오류의 구체적인 원인 분석
- 해결 방법 제시
- 추가 설정이 필요한 부분 명시
```

---

## ⚠️ 주의사항

### 문제 발생 시 해결 방법

점검 중 문제가 발견되면 다음과 같이 해결하세요.

| 증상 | 원인 | 해결 방법 |
|------|------|-----------|
| 문서 시스템 오류 | `docs` 폴더 .md 파일 누락 또는 CLAUDE.md의 @ 연결 오류 | setup 2단계 통합 세팅 프롬프트 재실행 |
| GitHub 스킬 파일 누락 | `.claude/skills/gh_cli/skill.md` 없음 | setup 3단계 자동 설정 프롬프트 재실행 |
| 프로젝트 구조 누락 | `_template_settings` 폴더 또는 하위 파일 누락 | setup 2단계 통합 세팅 프롬프트 재실행 |
| React 환경 미설정 | MUI 또는 `theme.js` 누락 | setup 2단계 통합 세팅 프롬프트 재실행 |

<div class="wda-callout wda-cw">
  <span class="wda-clabel">재실행 전 확인</span>
  어느 단계 프롬프트를 재실행해야 하는지 Claude가 명시해줍니다.<br>
  점검 결과의 ❌ 항목을 기준으로 해당 단계 프롬프트만 다시 실행하면 됩니다.
</div>

---

## ✅ 핵심 요약

**💡 예상 결과**

모든 환경이 정상적으로 설정되었다면 다음과 같은 결과를 확인할 수 있습니다.

| 항목 | 정상 출력 |
|------|-----------|
| **로키 역할 확인** | `"안녕하세요! 저는 로키입니다"` 형태의 인사와 함께 역할 확인 |
| **문서 시스템 동작** | `design-system`, `code-convention`, `new_project` 문서 내용 정상 출력 |
| **GitHub 스킬** | `.claude/skills/gh_cli/skill.md` 파일 정상 존재 확인 |
| **React 환경** | `MUI`, `theme.js`, `ThemeProvider` 모두 정상 설정 확인 |

---

### 최종 점검 체크리스트

- [ ] 로키 역할 인식 완료
- [ ] `@docs` 문서 3개 정상 로드
- [ ] GitHub 스킬 파일 존재 확인
- [ ] `_template_settings` 구조 완성
- [ ] `theme.js` + ThemeProvider 적용 확인
- [ ] 1차 수업 준비 상태: ✅ 준비완료

<div class="wda-done">
  <div class="wda-done-ico">✅</div>
  <div class="wda-done-ttl">환경 세팅 완료</div>
  <div>모든 항목이 정상 확인되었다면 1차 수업의 본격적인 React 개발을 시작할 준비가 완료되었습니다!</div>
</div>

---

## 🔗 참고 자료

- [2단계 — 통합 세팅 및 첫 수업 준비](./step-02-integrated-setup)
- [3단계 — GitHub 백업 환경 설정](./step-03-github-backup)
