---
title: "2단계: 통합 세팅 및 첫 수업 준비"
category: "ai-vibe-coding"
section: "setup"
description: "하나의 통합 프롬프트로 Claude 권한 최적화, React 개발환경 구축, CLAUDE.md 시스템을 자동 완성한다."
tags:
  - ai-vibe-coding
  - setup
  - claude-code
  - react
  - vite
  - mui
  - claude-md
date: "2026-06-07"
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
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 150px;background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
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
  하나의 강력한 통합 프롬프트로 <strong>Claude 권한 최적화</strong>, <strong>React 개발환경 구축(Vite + MUI)</strong>, <strong>CLAUDE.md 시스템</strong> 구성까지 모든 작업을 자동으로 완료한다.
</div>

---

## 📖 개념 설명

### 1. 통합 세팅 프롬프트 개요

이 단계에서는 하나의 강력한 프롬프트로 다음 모든 작업을 자동 완료합니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🔐</div><div class="wda-fcard-ttl">Claude 권한 최적화</div><div class="wda-fcard-dsc">.claude/settings.local.json 자동 생성 · 빠른 실행</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">⚛️</div><div class="wda-fcard-ttl">React 개발환경</div><div class="wda-fcard-dsc">Vite + MUI 완전 생태계 설치</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📄</div><div class="wda-fcard-ttl">문서 시스템</div><div class="wda-fcard-dsc">외부 문서 다운로드 · @ 연결자 설정</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📝</div><div class="wda-fcard-ttl">CLAUDE.md 구축</div><div class="wda-fcard-dsc">프로젝트별 역할과 규칙 설정</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🚀</div><div class="wda-fcard-ttl">첫 수업 준비</div><div class="wda-fcard-dsc">lecture1 프로젝트 완전 세팅</div></div>
</div>

---

### 2. 사전 준비 확인사항

<div class="wda-callout wda-cw">
  <span class="wda-clabel">사전 조건</span>
  PowerShell에서 Claude를 <strong>최소 1회 실행하고 로그인을 완료</strong>했는지 확인하세요.<br>
  <code>my_ai_web</code> 디렉토리에서 작업을 진행합니다.</div>

---

### 3. Claude 실행 및 통합 프롬프트 사용

VSCode에서 my_ai_web 디렉토리를 열고 PowerShell 터미널에서 권한이 최적화된 Claude를 실행합니다.

#### ① VSCode 환경 준비

<div style="position:relative;padding-right:62px;">

1. VSCode 프로그램 실행
2. **File → Open Folder** → `my_ai_web` 폴더 선택
3. **Terminal → New Terminal** → 드롭다운에서 **PowerShell** 선택
4. 터미널 프롬프트에 `PS>` 가 표시되는지 확인
</div>

---

#### ⚠️ 기존 Claude 세션이 실행 중인 경우

이미 Claude가 실행 중이라면 다음 순서로 종료해주세요.

**PowerShell에서 Claude 실행 중**

```powershell
/exit
```

터미널 프롬프트가 `PS>` 상태로 돌아왔는지 확인하세요.

---

#### ② Claude 실행

my_ai_web 디렉토리의 PowerShell 터미널에서 다음 명령어를 실행합니다.

```powershell
claude --dangerously-skip-permissions
```

<div class="wda-callout wda-ci">
  <span class="wda-clabel">--dangerously-skip-permissions 옵션이란?</span>
  각 작업마다 사용자 승인을 요청하지 않고 Claude가 자동으로 파일을 생성·수정할 수 있도록 허용하는 옵션입니다.<br>
  신뢰할 수 있는 개발 환경에서 한 번에 많은 작업을 처리할 때 사용합니다.</div>

---

## ⚙️ 동작 원리

### 자동화 6단계 흐름

통합 프롬프트를 Claude에 붙여넣으면 다음 6단계가 순서대로 자동 실행됩니다.

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">Claude 권한 설정 최적화</div><div class="wda-sdsc">결과물: <code>.claude/settings.local.json</code></div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">React 개발환경 완전 구축</div><div class="wda-sdsc">결과물: <code>lecture1/my-react-app</code> (Vite + MUI)</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">문서 시스템 다운로드</div><div class="wda-sdsc">결과물: <code>lecture1/docs/</code> 내 3개 문서</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">CLAUDE.md 시스템 구축</div><div class="wda-sdsc">결과물: 루트 + lecture1 이중 구조</div></div></div>
<div class="wda-step"><div class="wda-snum">5</div><div class="wda-sbody"><div class="wda-sttl">MUI 테마프로바이더 적용</div><div class="wda-sdsc">결과물: <code>theme.js</code> + <code>main.jsx</code> 수정</div></div></div>
<div class="wda-step"><div class="wda-snum">6</div><div class="wda-sbody"><div class="wda-sttl">최종 확인 및 템플릿화</div><div class="wda-sdsc">결과물: <code>_template_settings</code> 디렉토리</div></div></div>
</div>

### 실행 순서 가이드

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">Claude 실행</div><div class="wda-sdsc">PowerShell 터미널에서 <code>claude --dangerously-skip-permissions</code> 실행</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">프롬프트 복사</div><div class="wda-sdsc">아래 통합 세팅 프롬프트 전체를 복사</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">붙여넣기</div><div class="wda-sdsc">Claude Code에 프롬프트를 붙여넣고 Enter</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">자동 진행 대기</div><div class="wda-sdsc">Claude가 모든 단계를 자동으로 수행하는 동안 대기</div></div></div>
<div class="wda-step"><div class="wda-snum">5</div><div class="wda-sbody"><div class="wda-sttl">완료 확인</div><div class="wda-sdsc">"개발준비완료" 메시지가 출력되면 성공 🎉</div></div></div>
</div>

---

### 예상 소요 시간

<div class="wda-callout wda-ci">
  <span class="wda-clabel">소요 시간</span>
  전체 과정은 약 <strong>5~10분</strong> 소요됩니다.<br>
  네트워크 상태에 따라 패키지 설치 및 파일 다운로드 시간이 달라질 수 있습니다.<br>
  모든 과정이 자동으로 진행되므로 <strong>중간에 중단하지 마세요.</strong></div>

---

## 💻 예제 코드

### 통합 세팅 프롬프트 전문

아래 프롬프트를 복사하여 Claude Code에 붙여넣으면 모든 환경 설정이 자동으로 완료됩니다.

<div class="wda-prompt-head">📋 통합 세팅 프롬프트 — 아래 코드 블록 전체를 복사하여 Claude Code에 붙여넣으세요.</div>

````
### Claude Code 완전 자동 세팅 (권한설정 + React환경 + CLAUDE.md시스템)

다음 작업을 **정확한 순서대로** 모두 자동으로 진행해주세요. 각 단계가 완료되면 "[단계명] 완료"라고 알려주세요.

---

## 1단계: Claude 권한 설정 최적화

### 현재 디렉토리에 .claude 폴더 확인 및 생성
- `.claude` 디렉토리가 없으면 생성
- 이미 있으면 다음 단계 진행

### 권한 설정 파일 생성
`.claude/settings.local.json` 파일을 다음 내용으로 생성하거나 수정:
```json
{
  "permissions": {
    "allow": [
      "*"
    ],
    "deny": []
  },
  "BASH_DEFAULT_TIMEOUT_MS": "600000",
  "BASH_MAX_TIMEOUT_MS": "600000"
}
```

### 전역 설정 파일에도 타임아웃 설정 적용
`C:\Users\[사용자명]\.claude\settings.json` 파일을 열어서 다음 내용을 추가:
```json
{
  "env": {
    "BASH_DEFAULT_TIMEOUT_MS": "600000",
    "BASH_MAX_TIMEOUT_MS": "600000"
  }
}
```
※ 기존 설정이 있다면 env 섹션에 위 두 줄만 추가
※ [사용자명]은 현재 Windows 사용자 이름으로 변경

### 권한 설정 완료 확인
- 로컬 및 전역 JSON 형식이 올바른지 확인
- 권한 설정 및 CLI 타임아웃 설정(10분) 적용 확인
- 파일 생성 완료 메시지 출력

---

## 2단계: React 개발환경 완전 구축

### 프로젝트 디렉토리 구조 생성
```bash
# 루트 디렉토리에 lecture1 생성
mkdir lecture1
cd lecture1
```

### Vite React 프로젝트 생성
```bash
# my-react-app 프로젝트 생성 (y 자동 응답)
echo 'y' | npm create vite@latest my-react-app -- --template react

# 생성 완료 확인
ls -la | grep my-react-app
```

### 프로젝트 디렉토리 이동 및 기본 의존성 설치
```bash
cd my-react-app
npm install
```

### 필수 패키지 설치 (MUI 완전 생태계)
다음 패키지들을 **정확한 순서로** 설치:
```bash
# React Router 설치
npm install react-router-dom@latest

# Material-UI 핵심 패키지
npm install @mui/material @emotion/react @emotion/styled

# Material-UI 아이콘 패키지
npm install @mui/icons-material

# Roboto 폰트 패키지
npm install @fontsource/roboto

# Vite React 플러그인 업데이트
npm install --save-dev @vitejs/plugin-react@latest
```

### 개발 서버 테스트 및 자동 종료
```bash
# 10초 타임아웃으로 개발 서버 테스트
timeout 10 npm run dev

# 서버 로그에서 "Local: http://localhost:xxxx/" 확인
# 포트 충돌 시 vite.config.js에서 다른 포트 설정

# 개발 서버 프로세스 정리 (중요: Claude Code는 건드리지 않음)
# 개발 서버 확인: netstat -ano | findstr LISTENING | findstr 517
# 개발 서버만 종료: cmd //c "taskkill /PID [개발서버PID] /F"
# 종료 확인: tasklist | findstr node.exe
```

### 설치된 패키지 버전 확인
```bash
npm ls
npm outdated
```

---

## 3단계: 문서 시스템 다운로드 및 구조 생성

### docs 디렉토리 생성
```bash
# lecture1 디렉토리에 docs 폴더 생성
cd ../  # my-react-app에서 lecture1로 이동
mkdir docs
```

### 필수 문서 파일 다운로드
다음 URL에서 문서 파일들을 `lecture1/docs/`에 다운로드:
```bash
# 각 파일을 정확한 경로에 다운로드
curl -o docs/design-system.md https://raw.githubusercontent.com/hw5511/vibe-web/main/docs/design-system.md
curl -o docs/code-convention.md https://raw.githubusercontent.com/hw5511/vibe-web/main/docs/code-convention.md
curl -o docs/new_project.md https://raw.githubusercontent.com/hw5511/vibe-web/main/docs/new_project.md
```

### 다운로드 완료 확인
```bash
# 파일 존재 및 크기 확인
ls -la docs/
wc -l docs/*.md
```

---

## 4단계: CLAUDE.md 시스템 구축

### 루트 디렉토리 CLAUDE.md 생성
**프로젝트 최상위 루트**에 다음 내용으로 CLAUDE.md 생성:
```markdown
# 기본 응답 설정

## 언어 설정
- 모든 답변은 한국어로 작성
- 정중하고 친근한 말투 사용
- 기술적 내용을 쉽게 설명

## 개발 원칙
- 코드 품질과 가독성 우선
- 사용자 요청사항에 정확히 응답
- 단계별 상세한 설명 제공
```

### lecture1 디렉토리 CLAUDE.md 다운로드 및 저장
```bash
# lecture1 디렉토리에서 CLAUDE.md 파일 다운로드
curl -o CLAUDE.md https://raw.githubusercontent.com/hw5511/vibe-web/main/docs/CLAUDE.md
```

### @ 연결자 문서 임포트 확인
- `@docs/design-system.md` 연결 확인
- `@docs/code-convention.md` 연결 확인
- `@docs/new_project.md` 연결 확인
- 각 문서의 내용이 정상적으로 로드되는지 확인

---

## 5단계: MUI 테마프로바이더 적용

### my-react-app 디렉토리로 이동
```bash
cd my-react-app
```

### src/theme.js 파일 생성
다음 내용으로 MUI 테마 설정 파일을 생성:
```javascript
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

export default theme;
```

### src/main.jsx 파일 수정
ThemeProvider와 CssBaseline을 적용하여 다음과 같이 수정:
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import theme from './theme.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```

### 테마 적용 확인을 위한 개발 서버 테스트
```bash
# 10초 타임아웃으로 테마 적용 테스트
timeout 10 npm run dev

# 서버 로그에서 "Local: http://localhost:xxxx/" 확인
# CssBaseline이 적용된 깔끔한 페이지 확인
```

### 템플릿 디렉토리 생성 (향후 빠른 프로젝트 생성용)
```bash
# 완성된 my-react-app을 템플릿 이름으로 변경
cd ../  # lecture1 디렉토리로 이동
mv my-react-app _template_settings

# 템플릿 디렉토리 생성 완료 확인
ls -la | grep _template_settings
```

---

## 6단계: 최종 확인 및 완료

### 프로젝트 구조 확인
최종 디렉토리 구조가 다음과 같은지 확인:
```
프로젝트 루트/
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
        │   ├── theme.js (새로 생성)
        │   ├── main.jsx (ThemeProvider 적용)
        │   └── App.jsx
        └── node_modules/
```

### 설치된 패키지 최종 확인
`_template_settings/package.json`에서 다음 패키지들이 설치되었는지 확인:
- react
- react-dom
- react-router-dom
- @mui/material
- @emotion/react
- @emotion/styled
- @mui/icons-material
- @fontsource/roboto

### CLAUDE.md 연결 테스트 및 테마 적용 확인
lecture1 디렉토리에서 다음을 확인:
- 디자인 시스템 문서 인식 여부
- 코드 컨벤션 문서 인식 여부
- 프로젝트 준비 시스템 문서 인식 여부
- theme.js 파일이 정상적으로 생성되었는지 확인
- main.jsx에 ThemeProvider와 CssBaseline이 적용되었는지 확인

---

## 완료 확인

모든 작업이 완료되면 다음과 같이 응답해주세요:

```
Claude Code 완전 자동 세팅 + 첫 3개 수업 완료!

- 권한 설정: .claude/settings.local.json 생성 완료
- React 환경: my-react-app 프로젝트 + MUI 완전 설치 완료
- 문서 시스템: 3개 문서 다운로드 및 @ 연결자 설정 완료
- CLAUDE.md: 루트 + lecture1 이중 구조 완료
- MUI 테마: theme.js + ThemeProvider + CssBaseline 적용 완료
- 템플릿 디렉토리: my-react-app을 _template_settings로 이름 변경하여 향후 빠른 프로젝트 생성 가능

수업 1-1 (React 환경구축) 완료
수업 1-2 (CLAUDE.md 시스템) 완료
수업 1-3 (MUI 테마프로바이더) 완료

개발준비완료
```

### 중요 주의사항
1. **프로세스 관리**: 개발 서버 종료 시 Claude Code는 절대 건드리지 않기
2. **파일 권한**: Windows 환경에서 권한 문제 발생 시 관리자 권한으로 실행
3. **포트 충돌**: 개발 서버 포트 충돌 시 vite.config.js에서 다른 포트 설정
4. **패키지 버전**: MUI는 최신 버전 사용, 호환성 문제 시 알려주기
5. **경로 확인**: 모든 파일 경로가 정확한지 각 단계마다 확인하기
````

---

## ⚠️ 주의사항

### 문제 해결 가이드

| 오류 유형 | 해결 방법 |
|-----------|-----------|
| **권한 오류** | 관리자 권한으로 터미널 실행 후 재시도 |
| **포트 충돌** | Claude가 자동으로 `vite.config.js`에서 다른 포트 설정 |
| **네트워크 오류** | 파일 다운로드 실패 시 인터넷 연결 확인 |
| **패키지 설치 실패** | `npm cache clean --force` 후 재설치 |
| **경로 오류** | `my_ai_web` 디렉토리에서 작업하는지 확인 |

<div class="wda-callout wda-cw">
  <span class="wda-clabel">프로세스 관리</span>
  개발 서버 종료 시 Claude Code 프로세스는 절대 건드리지 않기.<br>
  <strong>개발 서버 PID만 정확히 종료</strong>할 것.</div>

---

## ✅ 핵심 요약

### 완료 후 확인사항

통합 세팅이 성공적으로 완료되면 다음 사항들을 확인할 수 있습니다.

<div class="wda-memo">
  <span class="wda-memo-label">✅ 완료 후 확인사항</span><div class="wda-memo-body">
📁 <strong>디렉토리 구조</strong> — <code>lecture1/my-react-app</code> 프로젝트 생성<br>
📦 <strong>패키지 설치</strong> — MUI, React Router 등 모든 필수 패키지 설치<br>
📄 <strong>문서 시스템</strong> — <code>docs</code> 폴더에 3개 문서 파일 다운로드<br>
📝 <strong>CLAUDE.md</strong> — 로키 역할 설정 + <code>@</code> 연결자 작동<br>
🖥️ <strong>개발 서버</strong> — 테스트 후 자동 종료 완료
</div></div>

---

### 이 단계에서 완성되는 수업

- **수업 1-1**: React 환경구축 (Vite + MUI 설치)
- **수업 1-2**: CLAUDE.md 시스템 (역할 설정 + 문서 연결)
- **수업 1-3**: MUI 테마프로바이더 (`theme.js` + `ThemeProvider` + `CssBaseline`)

### 설치되는 핵심 패키지 정리

| 패키지 | 역할 |
|--------|------|
| `react` | React 핵심 라이브러리 |
| `react-dom` | 브라우저에 React 컴포넌트를 렌더링 |
| `react-router-dom` | 페이지 간 라우팅(경로 이동) 처리 |
| `@mui/material` | MUI 컴포넌트 모음 |
| `@emotion/react` | MUI 스타일 엔진 (필수 의존성) |
| `@emotion/styled` | MUI 스타일드 컴포넌트 지원 |
| `@mui/icons-material` | MUI 아이콘 패키지 |
| `@fontsource/roboto` | Roboto 폰트 (MUI 권장 폰트) |

### 환경 구축 완료!

<div class="wda-done">
  <div class="wda-done-ico">🎉</div>
  <div class="wda-done-ttl">통합 세팅 완료!</div>
  <div>이 단계를 완료하면 수업 1-1, 1-2, 1-3이 동시에 완성됩니다.<br>이후 <code>_template_settings</code>를 복사해서 새 프로젝트를 빠르게 세팅할 수 있습니다.</div>
</div>

---

## 🔗 참고 자료

- [공식 Vite 문서](https://vitejs.dev/guide/)
- [공식 MUI 시작하기](https://mui.com/material-ui/getting-started/)
- [공식 React Router 문서](https://reactrouter.com/)
- [강사 문서 원본 (GitHub)](https://github.com/hw5511/vibe-web/tree/main/docs)

