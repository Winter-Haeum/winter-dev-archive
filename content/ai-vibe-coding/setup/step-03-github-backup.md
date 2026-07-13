---
title: "3단계: GitHub 백업 환경 설정"
category: "ai-vibe-coding"
section: "setup"
description: "GitHub CLI를 설치하고 Claude Code에 gh CLI 스킬을 등록하여 AI에게 '백업해줘' 한 마디로 GitHub에 프로젝트를 자동으로 저장할 수 있는 환경을 구축한다."
tags:
  - ai-vibe-coding
  - setup
  - github
  - github-cli
  - git
  - github-pages
  - claude-code
date: "2026-06-08"
status: "completed"
---

<style>
.wda-callout{border-radius:10px;padding:12px 15px;margin:.8rem 0 1.4rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 150px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-done{border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:16px 20px;margin:.8rem 0 1.4rem;background:rgba(34,197,94,.04);text-align:center;font-size:.82rem;line-height:1.6}
.wda-done-ico{font-size:1.8rem;margin-bottom:6px}
.wda-done-ttl{font-size:1rem;font-weight:700;color:#22c55e;margin-bottom:4px}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
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
.wda-compare{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-cbox{flex:1 1 180px;border-radius:10px;padding:14px 16px}
.wda-cbox-label{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:8px;display:block}
.wda-cbox-ttl{font-size:1rem;font-weight:800;margin-bottom:6px}
.wda-cbox-body{font-size:.82rem;opacity:.78;line-height:1.6}
.wda-cbox-plain{background:rgba(128,128,128,.07);border:1px solid rgba(128,128,128,.18)}
.wda-cbox-plain .wda-cbox-label{color:rgba(128,128,128,.9)}
.wda-cbox-flex{background:rgba(139,92,246,.06);border:1px solid rgba(139,92,246,.25)}
.wda-cbox-flex .wda-cbox-label{color:#8b5cf6}
.wda-cbox-flex .wda-cbox-ttl{color:#8b5cf6}
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
.wda-goal,.wda-callout,.wda-done,.wda-memo,.wda-steps,.wda-fgrid{padding-left:16px !important;padding-right:16px !important}
}
@media (max-width:554px){
.wda-char{display:none !important}
}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  Git MCP와 GitHub CLI를 설치하여, AI에게 <strong>"백업해줘"</strong> 한 마디로 GitHub에 프로젝트를 저장할 수 있는 환경을 구축한다.<br>📦 <strong>GitHub CLI 설치</strong> — gh CLI 설치 및 OAuth 인증으로 GitHub 연결<br>🤖 <strong>스킬 파일 등록</strong> — Claude가 GitHub 작업을 자동 수행하도록 설정<br>🚀 <strong>AI 백업 자동화</strong> — "백업해줘" 한 마디로 GitHub에 자동 저장
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">이 단계를 완료하면</span>"이 프로젝트를 GitHub에 백업해줘" 라고 말하면 — Claude가 자동으로 저장소를 생성하고 코드를 업로드합니다!
</div>

---

## 📖 개념 설명

### 1. 왜 GitHub 백업이 필요한가요?

여러분이 만든 웹사이트 코드는 현재 컴퓨터에만 저장되어 있습니다. 컴퓨터가 고장나거나 실수로 파일을 삭제하면 모든 작업이 사라질 수 있어요.

GitHub는 전 세계 개발자들이 사용하는 가장 인기 있는 **클라우드 코드 저장소**입니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🛡️</div><div class="wda-fcard-ttl">안전한 백업</div><div class="wda-fcard-dsc">컴퓨터가 고장나도 코드는 GitHub에 안전하게 저장됩니다.</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🕒</div><div class="wda-fcard-ttl">버전 관리</div><div class="wda-fcard-dsc">언제든 이전 버전으로 돌아갈 수 있어요.</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">💼</div><div class="wda-fcard-ttl">포트폴리오</div><div class="wda-fcard-dsc">취업할 때 GitHub 주소로 실력을 보여줄 수 있어요.</div></div>
</div>

<div class="wda-compare">
<div class="wda-cbox wda-cbox-plain"><span class="wda-cbox-label">Git</span><div class="wda-cbox-ttl">💾 저장 버튼</div><div class="wda-cbox-body">내 컴퓨터에서 코드 변경 이력을 관리하는 도구</div></div>
<div class="wda-cbox wda-cbox-flex"><span class="wda-cbox-label">GitHub</span><div class="wda-cbox-ttl">☁️ 클라우드 드라이브</div><div class="wda-cbox-body">Git으로 관리한 코드를 인터넷(클라우드)에 저장하는 서비스</div></div>
</div>

---

### 2. 단계별 진행 순서

이 단계에서는 다음 작업을 순서대로 진행합니다.

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">GitHub 계정 생성</div><div class="wda-sdsc">이미 있다면 건너뛰기</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">내 GitHub 정보 수집</div><div class="wda-sdsc">사용자명, 이메일 확인</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">GitHub CLI 설치 및 OAuth 인증</div><div class="wda-sdsc">레포 생성/삭제, Pages 배포 권한 포함</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">Claude Code 자동 설정 프롬프트 실행</div><div class="wda-sdsc">gh CLI 스킬 등록</div></div></div>
<div class="wda-step"><div class="wda-snum">5</div><div class="wda-sbody"><div class="wda-sttl">스킬 등록 완료 확인 및 기능 테스트</div></div></div>
</div>

---

### 3. 강사와 함께 준비할 사전 작업

다음 단계들은 강사의 안내에 따라 수강생과 함께 진행됩니다.

#### 🔐 GitHub 계정 생성

[https://github.com](https://github.com) 접속 → **Sign up** 클릭하여 회원가입 → 이메일 인증 필수!

#### 👤 사용자명 선택

**💡 사용 팁**

<div class="wda-callout wda-ci">
  사용자명 = 포트폴리오 주소! <code>username.github.io</code> 형태로 사용됩니다.<br><strong>규칙:</strong> 영문 소문자 + 숫자, 간결하게<br><strong>좋은 예:</strong> john-dev, minsoo123, sunny-code<br><strong>피해야 할 예:</strong> asdf1234, test-user (포트폴리오로 사용하기 어려움)
</div>

---

### 4. 내 GitHub 정보 수집

계정 생성 후 다음 정보를 확인합니다.

#### 👤 GitHub 사용자명

GitHub 우상단 프로필 클릭 → 표시되는 이름 (예: `john-dev`)

#### 📧 GitHub 이메일

GitHub 가입 시 사용한 이메일 (예: `john@example.com`)

**정보 정리** — 강사가 제시하는 양식에 따라 수집한 정보를 정리합니다.

<div class="wda-memo">
  <span class="wda-memo-label">✏️ 내 GitHub 정보 메모</span>
  <div class="wda-memo-body">

```
【내 GitHub 정보】

GitHub 사용자명: ___________________

GitHub 이메일: ____________________
```

  </div>
</div>

---

## ⚙️ 동작 원리

### GitHub CLI OAuth 인증 방식

예전에는 Personal Access Token을 직접 발급해야 했습니다.

이제는

```bash
gh auth login
```

명령어 하나로 브라우저 로그인만 하면 자동으로 인증이 완료됩니다. 브라우저 창이 열리면 GitHub 로그인 후 **Authorize** 클릭!

<div class="wda-callout wda-cy">
  <span class="wda-clabel">OAuth란?</span>
  "Open Authorization"의 약자입니다.<br>
  비밀번호를 직접 전달하지 않고, 신뢰하는 앱(GitHub CLI)에 특정 권한만 허용하는 인증 방식입니다.<br>
  구글 로그인으로 다른 앱에 가입하는 것과 같은 원리입니다.
</div>

---

### gh CLI 스킬 파일 방식

이 단계에서는 MCP 서버 없이 gh CLI 명령어를 Claude가 직접 실행하는 방식을 사용합니다.

<div class="wda-callout wda-ci">
  <span class="wda-clabel">동작 방식</span>
  MCP 서버 설치 없이 gh CLI 명령어를 Claude가 직접 실행합니다.<br>
  <code>.claude/skills/gh_cli/skill.md</code> 파일에 명령어 가이드를 등록해두면, 이후 GitHub 작업 시 Claude가 자동으로 참조하여 처리합니다.
</div>

<div class="wda-callout wda-cy">
  <span class="wda-clabel">스킬 파일이란?</span>
  Claude가 특정 작업을 수행할 때 참고하는 가이드 문서입니다.<br>
  <code>.claude/skills/</code> 폴더에 저장해두면, Claude가 GitHub 작업 요청을 받을 때 이 파일을 참조하여 정확한 gh CLI 명령어를 실행합니다.
</div>

---

### GitHub Pages 배포 방식 비교

<div class="wda-compare">
<div class="wda-cbox wda-cbox-plain"><span class="wda-cbox-label">Legacy 방식 — 비추천</span><div class="wda-cbox-ttl">🔴 서버 직접 빌드</div><div class="wda-cbox-body">"building" 상태에서 멈추거나 에러 발생 가능. 디버깅이 어렵습니다.</div></div>
<div class="wda-cbox wda-cbox-flex"><span class="wda-cbox-label">GitHub Actions — 추천</span><div class="wda-cbox-ttl">✅ 워크플로우 빌드</div><div class="wda-cbox-body">빌드 과정을 직접 정의. 로그 확인 가능, 안정적이고 예측 가능합니다.</div></div>
</div>

---

## 💻 예제 코드

### 5. GitHub CLI 설치 및 OAuth 인증

#### ① GitHub CLI 설치 확인

터미널에서 아래 명령어로 설치 여부를 확인합니다.

```bash
gh --version
```

**미설치 시**

```powershell
winget install GitHub.cli
```

설치 후 터미널을 완전히 종료한 뒤 다시 실행합니다.

---

#### ② OAuth 인증 (권한 포함)

아래 명령어를 실행합니다.

```bash
gh auth login --scopes repo,delete_repo,workflow,gist,read:org,admin:public_key,write:packages
```

**포함된 권한 목록**

| 권한 | 설명 |
|------|------|
| `repo` | 저장소 생성, 읽기, 쓰기 |
| `delete_repo` | 저장소 삭제 |
| `workflow` | GitHub Actions / Pages 배포 |
| `gist` | Gist 관리 |
| `read:org` | 조직 정보 읽기 |
| `admin:public_key` | SSH 키 관리 |
| `write:packages` | 패키지 배포 |

**인증 완료 확인**

```bash
gh auth status
```

아래와 같이 표시되면 성공입니다.

```
github.com

Logged in to github.com account [사용자명]

Active token scopes: ...
```

---

### 6. Claude Code 자동 설정 프롬프트

아래 프롬프트를 그대로 복사하여 Claude Code에게 전달하세요.

Claude가 gh CLI를 인식하고 GitHub 작업용 스킬 파일을 자동으로 등록합니다.

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록 전체를 복사하여 붙여넣으세요.</div>

````
GitHub 백업을 위한 gh CLI 스킬을 등록해줘. 다음 순서로 진행해줘:

1. gh CLI 인식 확인
   - gh --version 명령어로 gh CLI가 인식되는지 확인
   - 미설치 시: winget install GitHub.cli 실행 후 터미널 재시작 안내
   - gh auth status로 로그인 상태 확인

2. .claude/skills/gh_cli/ 폴더에 skill.md 스킬 파일 생성
   - 폴더가 없으면 먼저 생성
   - 파일 경로: .claude/skills/gh_cli/skill.md
   - 아래 내용을 그대로 작성:

---
# GitHub 백업 스킬 (gh CLI)

이 스킬은 gh CLI를 사용하여 GitHub 저장소 관리 및 배포를 수행한다.
모든 명령어는 Bash 도구로 직접 실행한다.

## 저장소 생성
gh repo create [저장소명] --public --description "[설명]"

## 로컬 초기화 및 첫 push
git init
git add .
git commit -m "[메시지]"
git branch -M main
git remote add origin https://github.com/[사용자명]/[저장소명].git
git push -u origin main

## 변경사항 백업 (커밋 + 푸시)
git add .
git commit -m "[메시지]"
git push

## GitHub Pages 배포 (GitHub Actions 방식)
1. .github/workflows/deploy.yml 워크플로우 파일 생성
2. 커밋 후 푸시
3. gh api repos/[사용자명]/[저장소명]/pages -X PUT -f build_type=workflow

## 저장소 목록 확인
gh repo list

## 인증 상태 확인
gh auth status
---

3. 스킬 등록 완료 후 확인
   - .claude/skills/gh_cli/skill.md 파일이 생성되었는지 확인
   - gh --version 재확인
   - gh auth status로 인증 상태 확인
   - gh repo list로 기존 저장소 목록 출력

중요사항:
- gh CLI가 인식되지 않으면 먼저 터미널을 완전히 재시작해야 함
- 앞으로 GitHub 작업 시 .claude/skills/gh_cli/skill.md 내용을 참조하여 gh CLI 명령어로 직접 실행
````

---

### 7. 설정 완료 확인 프롬프트

아래 프롬프트를 복사하여 Claude Code에 붙여넣기하면 설정이 제대로 되었는지 확인할 수 있습니다.

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록 전체를 복사하여 붙여넣으세요.</div>

```
GitHub 스킬이 제대로 등록되었는지 확인해줘.

1. gh CLI 상태 확인
   - gh --version 으로 설치 확인
   - gh auth status 로 로그인 상태 확인

2. 스킬 파일 확인
   - .claude/skills/gh_cli/skill.md 파일이 존재하는지 확인
   - 파일 내용을 출력해줘

3. 기본 동작 테스트
   - gh repo list 로 저장소 목록 확인

모든 항목을 순서대로 확인하고 결과를 알려줘.
```

위 프롬프트를 복사하여 Claude Code에 붙여넣기하세요. Claude가 스킬 파일 존재 여부와 인증 상태를 확인하고 결과를 알려줍니다.

| 확인 항목 | 성공 시 출력 |
|-----------|-------------|
| GitHub CLI 확인 | `gh version X.X.X` · `Logged in to github.com` |
| Skill 파일 확인 | `.claude/skills/gh_cli/skill.md` 파일 내용 출력 |
| 기능 테스트 | 저장소 목록 출력 또는 `No repositories found` |

---

### 8. 첫 번째 백업 실습 (6단계)

이제 GitHub 백업의 핵심 기능들을 직접 체험해봅시다!

아래 6개의 프롬프트를 순서대로 Claude Code에 입력하세요.

<div class="wda-callout wda-cw">
  <span class="wda-clabel">실습 전 주의사항</span>
  반드시 순서대로 진행하세요!<br>
  각 단계가 완료된 후 다음 프롬프트를 입력해야 합니다.
</div>

---

#### 실습 1: GitHub 저장소 생성

먼저 GitHub에 새로운 저장소를 만듭니다.

```
이 프로젝트를 GitHub에 백업해줘

- 저장소 이름: my-first-website
- 공개 설정: public
- 설명: 나의 첫 번째 웹사이트 프로젝트
```

**완료 확인** — `https://github.com/사용자명/my-first-website` 주소로 접속해서 저장소가 생성되었는지 확인하세요.

---

#### 실습 2: 파일 생성 후 백업 (커밋/푸시)

새 파일을 만들고 GitHub에 저장해봅니다.

```
현재 폴더에 test.txt 파일을 생성하고

"Hello GitHub!"

내용을 넣어줘.

그 다음 이 변경사항을 GitHub에 백업해줘.

커밋 메시지:

"테스트 파일 추가"
```

**완료 확인** — GitHub 저장소 페이지를 새로고침하면 `test.txt` 파일이 보여야 합니다.

---

#### 실습 3: 파일 삭제 후 백업

파일을 삭제하고 그 변경사항도 GitHub에 반영합니다.

```
현재 폴더에서 test.txt 파일을 삭제해줘.

그 다음 이 변경사항을 GitHub에 백업해줘.

커밋 메시지:

"테스트 파일 삭제"
```

**완료 확인** — GitHub 저장소 페이지를 새로고침하면 `test.txt` 파일이 사라져야 합니다.

---

#### 실습 4: 백업 복구 (이전 버전 되돌리기)

삭제했던 파일을 이전 커밋에서 복구합니다.

```
방금 삭제한 test.txt 파일을 복구해줘.

이전 커밋에서 해당 파일을 가져와서 복원하고,

복원된 파일을 다시 GitHub에 백업해줘.

커밋 메시지:

"테스트 파일 복구"
```

**완료 확인** — GitHub 저장소 페이지를 새로고침하면 `test.txt` 파일이 다시 나타나야 합니다.

---

#### 실습 5: .gitignore 생성 (불필요한 파일 제외)

백업에서 제외할 파일들을 설정합니다.

이 설정은 매우 중요합니다!

```
.gitignore 파일을 생성해서 다음 파일/폴더들을 Git 추적에서 제외해줘:

1. MCP 설정 파일: .mcp.json

2. Claude 로컬 설정: .claude/

3. Node.js 관련:
node_modules/
package-lock.json

4. 캐시 파일:
.cache/
.vite/
dist/

5. 환경 변수:
.env
.env.local
.env.*.local

6. OS/IDE 파일:
.DS_Store
Thumbs.db
.vscode/
.idea/

7. 로그 파일:
*.log
npm-debug.log*

생성 후 이 변경사항을 GitHub에 백업해줘.

커밋 메시지:

"gitignore 설정 추가"
```

---

#### 실습 6: 간단한 랜딩페이지 제작 및 GitHub Pages 배포

이제 배운 내용을 활용해서 실제로 웹페이지를 만들고 인터넷에 공개해봅시다.

```
아주 간단한 50줄 이하의 HTML로 된 랜딩페이지를 제작하고,

GitHub Pages를 이용해서 배포한 뒤

접속 가능한 링크를 안내해줘.

랜딩페이지 요구사항:

- 파일명: index.html

- 내용:
간단한 자기소개 또는 환영 메시지

- 스타일:
인라인 CSS로 기본적인 디자인 적용

- 반응형:
모바일에서도 보기 좋게

배포 방식:
GitHub Actions 사용 (안정적)

배포 순서:

1. index.html 파일 생성

2. GitHub에 커밋 및 푸시

3. .github/workflows/deploy.yml 워크플로우 파일 생성

4. GitHub Pages 설정을 workflow 방식으로 변경

5. 배포 완료 후 URL 안내
```

**워크플로우 파일 (`.github/workflows/deploy.yml`)**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**GitHub Pages 설정 변경 (gh CLI)**

```bash
gh api repos/[사용자명]/[저장소명]/pages -X PUT -f build_type=workflow
```

**배포 확인** — GitHub 저장소 → Actions 탭에서 워크플로우 실행을 확인하세요. 초록색 체크 표시가 나타나면 배포 완료입니다. 이후 `https://[사용자명].github.io/[저장소명]` 주소로 접속합니다.

**실습 6 완료 확인** — Claude가 안내하는 URL (예: `https://사용자명.github.io/my-first-website`)로 접속해서 내가 만든 웹페이지가 실제로 인터넷에 공개되었는지 확인하세요. 안내된 주소를 모바일에서도 접속해보세요. PC와 스마트폰 모두에서 잘 보이면 반응형 웹페이지 완성입니다.

<div class="wda-done">
  <div class="wda-done-ico">🎉</div>
  <div class="wda-done-ttl">GitHub 백업 & 배포 실습 완료</div>
  <div>코드 작성 → GitHub 백업 → 웹사이트 배포까지, 전체 개발 사이클을 AI와 함께 완료할 수 있게 되었습니다!</div>
</div>

---

## ⚠️ 주의사항

### .gitignore가 중요한 이유

| 항목 | 이유 |
|------|------|
| `.mcp.json` | 개인 설정 파일이므로 공유하면 안됨 |
| `node_modules/` | 용량이 크고 `npm install`로 복구 가능 |
| `.env` | 비밀번호나 API 키가 포함될 수 있음 |

<div class="wda-callout wda-cw">
  <span class="wda-clabel">특히 .env 파일 주의</span>
  API 키나 비밀번호가 GitHub에 올라가면 외부에서 무단 사용될 수 있습니다.<br>
  처음부터 <code>.gitignore</code>에 등록해두는 습관을 들이세요.
</div>

---

### 문제 해결 가이드

| 증상 | 원인 | 해결 방법 |
|------|------|-----------|
| **gh 명령어를 찾을 수 없음** | GitHub CLI가 설치되지 않음 | `winget install GitHub.cli` 실행 후 터미널 재시작 |
| **인증 실패 / 권한 오류** | GitHub 로그인 문제 | `gh auth login` 다시 실행, 브라우저에서 "Authorize" 클릭 |
| **Skill 파일 미인식** | `.claude/skills/` 폴더 또는 파일 없음 | 자동 설정 프롬프트 재실행, 폴더/파일 직접 확인 |
| **push 실패** | 저장소 이미 존재하거나 권한 문제 | 다른 저장소 이름 사용 또는 `gh auth status`로 상태 확인 |

<div class="wda-callout wda-ci"><span class="wda-clabel">Claude Code 재시작이 필요한 경우</span><code>/exit</code>로 종료 후 터미널에서 <code>claude</code>로 재실행하고, 자동 설정 프롬프트를 다시 붙여넣기하세요.</div>

---

## 📝 핵심 정리

### 핵심 기능 4가지

| 명령 | 프롬프트 예시 | 설명 |
|------|--------------|------|
| **백업 (Push)** | `"변경사항 GitHub에 백업해줘"` | 로컬 변경사항을 GitHub에 저장 |
| **복구 (Restore)** | `"이전 버전에서 파일 복구해줘"` | 삭제하거나 변경한 파일을 되돌림 |
| **동기화 (Pull)** | `"GitHub에서 최신 버전 가져와줘"` | 다른 컴퓨터에서 작업할 때 사용 |
| **제외 (Ignore)** | `".gitignore 수정해줘"` | 불필요한 파일을 백업에서 제외 |

---

### 최종 완료 체크리스트

**GitHub 환경 구축**

- [ ] GitHub 계정 생성 완료
- [ ] GitHub CLI 설치 완료
- [ ] `gh auth login --scopes` 인증 완료
- [ ] `gh auth status`로 로그인 확인

**Skill 등록 확인**

- [ ] `.claude/skills/` 폴더 생성 완료
- [ ] `gh_cli/skill.md` 스킬 파일 생성 완료
- [ ] `gh repo list` 정상 동작 확인
- [ ] 첫 번째 백업 테스트 완료

**학습 포인트**

<div class="wda-memo">
  <span class="wda-memo-label">📌 핵심 개념 정리</span>
  <div class="wda-memo-body">
📁 <strong>Git</strong> — 코드 버전 관리 시스템의 기본 개념 이해<br>
☁️ <strong>GitHub</strong> — 클라우드 코드 저장소의 역할 이해<br>
📄 <strong>Skill 파일</strong> — Claude에게 명령어 가이드를 등록하는 방식 이해<br>
🤖 <strong>자동화</strong> — 복잡한 작업을 자연어로 처리하는 경험
  </div>
</div>

---

## 🔗 참고 자료

- [GitHub 공식 사이트](https://github.com)
- [GitHub CLI 공식 문서](https://cli.github.com/)
- [GitHub Pages 공식 문서](https://pages.github.com/)
- [GitHub Actions 공식 문서](https://docs.github.com/en/actions)
