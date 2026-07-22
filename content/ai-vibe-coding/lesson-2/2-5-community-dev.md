---
title: "2-5: 커뮤니티 기능 구현"
category: "ai-vibe-coding"
section: "lesson-2"
description: "3단계 UI 기획서와 4단계 DB 구조서를 바탕으로 AI에게 완전한 커뮤니티 사이트 프로젝트 생성과 GitHub Pages 배포를 요청합니다."
tags:
  - ai-vibe-coding
  - lesson-2
  - community
  - deploy
date: "2026-06-10"
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
.wda-goal,.wda-callout,.wda-done,.wda-memo,.wda-steps,.wda-fgrid{padding-left:16px !important;padding-right:16px !important}
}
@media (max-width:554px){
.wda-char{display:none !important}
}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>AI와 협업</strong> — 기획서를 프롬프트로 변환하여 AI에게 프로젝트 생성 요청<br>
  • <strong>실제 배포 경험</strong> — GitHub Pages로 전 세계에서 접속 가능한 사이트 배포<br>
  • <strong>커뮤니티 체험</strong> — 서로의 사이트에 방문하며 실제 사용자 경험
</div>

---

## 5단계 진행 과정

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">💻</div><div class="wda-fcard-ttl">lecture1 Claude 실행</div><div class="wda-fcard-dsc">개발 전용 AI '로키'에게 접속하여 프로젝트 개발 준비</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🏗️</div><div class="wda-fcard-ttl">프로젝트 생성</div><div class="wda-fcard-dsc">3, 4단계 기획서를 바탕으로 완전한 커뮤니티 사이트 생성 및 배포</div></div>
</div>

---

## 1단계: lecture1 Claude 실행하기 (5분)

<div class="wda-callout wda-ci">
  <span class="wda-clabel">시작하기</span>
  개발 전용 AI인 '로키'에게 접속하여 프로젝트 개발을 시작합니다.<br>PowerShell을 열고 아래 명령어를 차례대로 실행하세요.
</div>

```powershell
cd lecture1
```

```powershell
claude --dangerously-skip-permissions
```

---

## 2단계: 프로젝트 생성하기 (30분)

로키 AI에서 3단계와 4단계에서 작성한 기획서를 바탕으로 실제 커뮤니티 사이트를 생성합니다.

### 대화 초기화

프로젝트 생성을 위해 먼저 대화를 초기화합니다.

```
/clear
```

### 프로젝트 생성 프롬프트

<div class="wda-callout wda-cs">
  <span class="wda-clabel">업로드 방법</span>
  대화 초기화 후, <strong>완성된 기획문서를 드래그해서 업로드</strong>하고 아래 프롬프트를 함께 보내세요.
</div>

<div class="wda-prompt-head">💬 로키에게 보낼 프롬프트</div>

```
'my-community'라는 프로젝트를 생성해줘.

작업은 Todo 계획을 세워서 순차적으로 진행해줘.

요구사항:
1. React + Vite로 프로젝트 생성
2. Supabase MCP를 사용해서 데이터베이스 테이블 생성 및 연결
3. 백엔드 없이 Supabase를 직접 연결하여 작동하는 구조
4. GitHub Pages로 배포 (GitHub Actions 워크플로우 사용)

개발 순서:
1) 프로젝트 초기 설정
2) Supabase 데이터베이스 설계 및 테이블 생성
3) 프론트엔드 개발 (기획안 참고)
4) Supabase 연동 구현
5) npm run build로 로컬 빌드
6) GitHub Actions 워크플로우 설정 (.github/workflows/deploy.yml 생성)
7) GitHub에 커밋 및 푸시하여 자동 배포
8) Actions 탭에서 배포 완료 확인 후 접속 가능한 URL 안내

---- 기획안 내용 (아래에 붙여넣기) -----
[여기에 3단계와 4단계에서 작성한 기획안 전체 내용을 복사해서 붙여넣으세요]
```

### 로키 AI 자동 수행 과정

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">React + Vite 프로젝트 생성</div><div class="wda-sdsc">MUI, React Router 등 필수 패키지 설치</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">Supabase MCP로 DB 생성</div><div class="wda-sdsc">users · posts · comments 테이블 자동 생성 및 연결</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">UI 컴포넌트 구현</div><div class="wda-sdsc">기획서에 따른 로그인 · 게시물 목록 · 상세 · 댓글 화면 개발</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">회원가입 · 로그인 · 게시물 · 댓글 기능 구현</div><div class="wda-sdsc">Supabase Auth 연동 및 CRUD 기능 완성</div></div></div>
  <div class="wda-step"><div class="wda-snum">5</div><div class="wda-sbody"><div class="wda-sttl">GitHub Pages로 자동 배포</div><div class="wda-sdsc">GitHub Actions 워크플로우 설정 · 커밋 푸시 · 배포 URL 안내</div></div></div>
</div>

<div class="wda-callout wda-ci">
  <span class="wda-clabel">예상 소요 시간</span>
  약 20~30분 · 대부분의 문제는 로키 AI가 자동으로 해결해줍니다!
</div>

---

## 배포 완료 후 함께 테스트하기

로키 AI가 프로젝트 생성과 배포를 완료하면, 모든 학생들이 함께 서로의 커뮤니티 사이트를 테스트해봅니다!

### 배포 링크 공유 절차

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">자신의 배포 링크 확인</div><div class="wda-sdsc">로키 AI가 알려준 GitHub Pages URL 확인</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">링크 접속 테스트</div><div class="wda-sdsc">본인 사이트가 정상 작동하는지 확인</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">강사에게 링크 전달</div><div class="wda-sdsc">채팅이나 이메일로 배포 링크 공유</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">다른 학생들과 링크 교환</div><div class="wda-sdsc">서로의 사이트 URL 공유</div></div></div>
</div>

### 서로의 사이트 체험하기

<div class="wda-callout wda-cs">
  <span class="wda-clabel">함께 체험하기</span>
  최소 3명 이상의 다른 학생 사이트에 방문하여 회원가입, 게시물 작성, 댓글을 남겨보세요!
</div>

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">👀</div><div class="wda-fcard-ttl">사이트 탐색</div><div class="wda-fcard-dsc">최소 3명 이상의 다른 학생 사이트 방문 · 디자인과 색상 확인 · 모바일/데스크톱 테스트</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">👤</div><div class="wda-fcard-ttl">회원가입</div><div class="wda-fcard-dsc">다른 학생 사이트에 본인 이름으로 계정 생성</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">✍️</div><div class="wda-fcard-ttl">게시물 작성</div><div class="wda-fcard-dsc">"[본인이름]이 놀러왔어요!" 같은 인사 게시물 작성</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">💬</div><div class="wda-fcard-ttl">댓글 남기기</div><div class="wda-fcard-dsc">다른 사람 게시물에 응원 댓글 2개 이상 작성</div></div>
</div>

---

## 문제 발생 시 해결 방법

<div class="wda-memo">
  <span class="wda-memo-label">트러블슈팅</span>
  <div class="wda-memo-body">
    1. 로키 AI에게 구체적인 에러 메시지를 알려주세요<br>
    2. 강사와 함께 문제를 분석하고 해결합니다<br>
    3. 필요시 기획문서를 수정하여 재시도합니다<br><br>
    💡 대부분의 문제는 로키 AI가 자동으로 해결해줍니다!
  </div>
</div>

<div class="wda-done" style="text-align:center;">
  <div class="wda-done-ico">🎉</div>
  <div class="wda-done-ttl">커뮤니티 사이트 프로젝트 완성!</div>
  <div>UI 기획부터 DB 설계, 실제 개발과 배포까지 완전한 웹 개발 프로세스를 경험했습니다.<br>여러분이 직접 기획한 커뮤니티 사이트가 전 세계에서 접속 가능한 실제 웹사이트가 되었습니다!</div>
</div>
