---
title: "Step 1 — 개발 환경 설치"
category: "ai-vibe-coding"
section: "setup"
tags: ["setup", "node", "vscode", "git"]
date: "2025-11-24"
status: "completed"
description: "Node.js, VS Code, Git 설치와 기본 설정을 다룬다."
---

## 개요

AI 바이브 코딩을 시작하기 위해 세 가지 도구를 준비한다.

> 💡 **Concept**: Node.js는 브라우저 밖에서 JavaScript를 실행하는 런타임이다. `npm`은 Node.js와 함께 자동으로 설치되며 패키지 관리에 사용한다.

## 설치 목록

| 도구 | 권장 버전 | 역할 |
|---|---|---|
| Node.js | 20 LTS 이상 | JavaScript 런타임 + npm |
| VS Code | 최신 버전 | 코드 에디터 |
| Git | 2.40 이상 | 버전 관리 |

## Node.js 설치

[Node.js 공식 사이트](https://nodejs.org)에서 **LTS 버전**을 다운로드한다.

> ⚠️ **Caution**: Current 버전이 아닌 **LTS 버전**을 선택해야 한다. LTS는 장기 지원 버전으로 안정성이 보장된다.

설치 후 터미널에서 버전을 확인한다.

```bash
node -v
npm -v
```

출력 예시:

```
v20.11.0
10.2.4
```

## VS Code 설치

[VS Code 공식 사이트](https://code.visualstudio.com)에서 다운로드한다.

### 필수 확장 프로그램

설치 후 아래 확장 프로그램을 추가한다.

1. **ESLint** — 코드 문법 오류 실시간 감지
2. **Prettier** — 코드 자동 포맷
3. **vscode-icons** — 파일 아이콘 가독성 향상

> ✅ **Best Practice**: 확장 프로그램은 처음에 최소한으로만 설치한다. 너무 많은 확장은 에디터를 느리게 하고, 어떤 확장이 문제를 일으키는지 파악하기 어렵게 만든다.

### VS Code 기본 설정

`Ctrl + Shift + P` → **Open User Settings (JSON)** 을 선택한 뒤 아래 내용을 붙여 넣는다.

```json
{
  "editor.fontSize": 14,
  "editor.fontFamily": "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.minimap.enabled": false,
  "editor.wordWrap": "on",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.stickyScroll.enabled": false,
  "editor.renderWhitespace": "boundary",
  "editor.lineNumbers": "on",
  "editor.scrollBeyondLastLine": false,
  "editor.smoothScrolling": true,
  "terminal.integrated.fontSize": 13,
  "terminal.integrated.fontFamily": "'JetBrains Mono', monospace",
  "explorer.confirmDelete": false,
  "explorer.compactFolders": false,
  "files.autoSave": "onFocusChange",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "workbench.colorTheme": "Default Dark Modern",
  "workbench.startupEditor": "none",
  "eslint.validate": ["javascript", "javascriptreact"],
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "prettier.trailingComma": "es5"
}
```

## Git 설치

[Git 공식 사이트](https://git-scm.com)에서 다운로드한다.

설치 후 기본 설정을 진행한다.

```bash
git config --global user.name "본인 이름"
git config --global user.email "이메일@example.com"
git config --global core.autocrlf input
```

> 🧪 **Practice**: 터미널에서 `git --version`을 입력해보자. `git version 2.x.x`가 출력되면 설치가 완료된 것이다.

## 설치 검증

세 가지 도구가 모두 설치되었는지 확인한다.

```bash
node -v && npm -v && git --version
```

> 📌 **Remember**: Node.js를 설치하면 `npm`이 자동으로 함께 설치된다. 별도로 설치할 필요 없다.

## 다음 단계

[Step 2 — VS Code 설정](./step-2-settings)에서 Prettier와 ESLint 설정 파일을 구성한다.

> 🔗 **Official Docs**: [Node.js 공식 문서](https://nodejs.org/ko/docs) · [VS Code 공식 문서](https://code.visualstudio.com/docs) · [Git 공식 문서](https://git-scm.com/doc)
