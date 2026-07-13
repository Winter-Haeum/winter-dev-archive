---
title: "3-3: SNS DB 분석 및 미니 SNS 구현"
category: "ai-vibe-coding"
section: "lesson-3"
description: "SNS UI를 역방향으로 분석하여 DB 구조를 직접 발견하고, AI 프롬프트 한 방으로 미니 SNS를 구현·배포합니다."
tags:
  - ai-vibe-coding
  - lesson-3
  - sns
  - database
  - supabase
  - deploy
date: "2026-06-11"
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
  🔄 <strong>역방향 학습</strong> — UI 화면을 보고 필요한 DB 테이블 구조를 직접 발견하는 역방향 분석 방법 체험<br>
  🗄️ <strong>DB 구조 이해</strong> — users · posts · comments 테이블의 관계와 연결 방식을 자연스럽게 이해한다<br>
  ✏️ <strong>DB 구조서 작성</strong> — 발견한 내용을 실제 DB 설계 문서 형태로 정리할 수 있다<br>
  🚀 <strong>미니 SNS 구현</strong> — 작성한 DB 구조서를 바탕으로 AI와 협력하여 실제 SNS를 구현·배포한다
</div>

---

## 🔄 역방향 학습법: SNS UI → DB 발견

오늘은 일반적인 순서(DB 설계 → UI 개발)의 반대로 접근합니다. **먼저 완성된 SNS 화면을 보고**, 거기서 필요한 DB 구조를 역으로 추론해냅니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">👁️</div><div class="wda-fcard-ttl">직관적 이해</div><div class="wda-fcard-dsc">"이 화면에 이런 정보가 보이니까 DB에도 이런 필드가 필요하구나!" — 눈에 보이는 것부터 시작</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🎯</div><div class="wda-fcard-ttl">현실적 설계</div><div class="wda-fcard-dsc">실제 화면에서 출발하므로 불필요한 필드 없이 꼭 필요한 것만 설계하게 됨</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">⚡</div><div class="wda-fcard-ttl">즉시 연결</div><div class="wda-fcard-dsc">DB 설계 → 바로 구현으로 이어지는 흐름 · 설계와 개발 사이 단절 없음</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📱</div><div class="wda-fcard-ttl">SNS 특화</div><div class="wda-fcard-dsc">사용자·게시물·댓글 관계는 대부분의 SNS에서 공통 패턴 · 응용 범위 넓음</div></div>
</div>

---

## 📊 먼저 알아두기: 테이블(Table) 개념

DB 테이블은 **엑셀 스프레드시트**처럼 행(row)과 열(column)로 이루어진 데이터 저장소입니다.

| id | email | nickname | created_at |
|---|---|---|---|
| 1 | kim@test.com | 김철수 | 2026-01-15 |
| 2 | lee@test.com | 이영희 | 2026-01-16 |
| 3 | park@test.com | 박민준 | 2026-01-17 |

**🔑 핵심 개념**

<div class="wda-callout wda-cy">
  📌 <strong>행(Row)</strong> = 데이터 한 건 (사용자 1명, 게시물 1개 등)<br>
  📌 <strong>열(Column)</strong> = 데이터 속성 (이름, 이메일, 날짜 등)<br>
  📌 <strong>id</strong> = 각 행을 구분하는 고유 번호 (자동 생성) · 다른 테이블과 연결할 때 사용
</div>

---

## 🔍 1단계: 강사와 함께 SNS UI 분석하기 (15분)

SNS 화면을 하나씩 보면서 "이 정보를 저장하려면 어떤 DB가 필요할까?" 함께 찾아봅니다.

### 로그인 화면 분석 → users 테이블 발견

<div class="wda-callout wda-ci">
  <span class="wda-clabel">강사 질문 — 로그인 화면</span>
  Q1. "로그인할 때 뭐가 필요할까요?" → 이메일, 비밀번호<br>
  Q2. "회원가입할 때는 어떤 정보를 입력하나요?" → 이메일, 비밀번호, 닉네임<br>
  Q3. "프로필 화면에는 어떤 정보가 보이나요?" → 닉네임, 프로필 사진<br>
  Q4. "이 정보들을 모두 저장하는 테이블 이름은 뭐가 좋을까요?" → users 테이블!
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">발견! — users 테이블</span>
  <strong>id</strong> — 사용자 고유 번호 (자동 생성)<br>
  <strong>email</strong> — 이메일 주소 (로그인에 사용)<br>
  <strong>password</strong> — 비밀번호 (암호화하여 저장)<br>
  <strong>nickname</strong> — 닉네임 (화면에 표시)<br>
  <strong>profile_image</strong> — 프로필 사진 URL<br>
  <strong>created_at</strong> — 가입 날짜
</div>

### 메인 피드 화면 분석 → posts 테이블 발견

<div class="wda-callout wda-ci">
  <span class="wda-clabel">강사 질문 — 메인 피드 화면</span>
  Q1. "피드에 보이는 게시물 카드에서 어떤 정보가 보이나요?" → 작성자 이름, 내용, 이미지, 좋아요 수, 날짜<br>
  Q2. "이 중에서 게시물 자체에 저장해야 할 정보는 무엇일까요?" → 내용, 이미지, 좋아요 수, 날짜<br>
  Q3. "누가 작성했는지는 어떻게 알 수 있을까요?" → 작성자 ID (users 테이블과 연결)<br>
  Q4. "이 정보들을 저장하는 테이블 이름은?" → posts 테이블!
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">발견! — posts 테이블</span>
  <strong>id</strong> — 게시물 고유 번호<br>
  <strong>user_id</strong> — 작성자 ID (users 테이블의 id 참조 · "이 게시물을 누가 썼나?")<br>
  <strong>content</strong> — 게시물 내용<br>
  <strong>image_url</strong> — 첨부 이미지 URL<br>
  <strong>likes_count</strong> — 좋아요 수<br>
  <strong>created_at</strong> — 작성 날짜
</div>

### 프로필/상세 화면 분석 → comments 테이블 발견

<div class="wda-callout wda-ci">
  <span class="wda-clabel">강사 질문 — 댓글 영역</span>
  Q1. "게시물 상세 화면의 댓글에는 어떤 정보가 있나요?" → 작성자 이름, 댓글 내용, 날짜<br>
  Q2. "댓글이 어떤 게시물에 달린 건지는 어떻게 알 수 있을까요?" → 게시물 ID (posts 테이블과 연결)<br>
  Q3. "댓글 작성자 정보는 어디서 가져올까요?" → 사용자 ID (users 테이블과 연결)<br>
  Q4. "이 정보들을 저장하는 테이블 이름은?" → comments 테이블!
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">발견! — comments 테이블</span>
  <strong>id</strong> — 댓글 고유 번호<br>
  <strong>post_id</strong> — 댓글이 달린 게시물 ID (posts 테이블의 id 참조)<br>
  <strong>user_id</strong> — 댓글 작성자 ID (users 테이블의 id 참조)<br>
  <strong>content</strong> — 댓글 내용<br>
  <strong>created_at</strong> — 작성 날짜
</div>

---

## 🔗 2단계: SNS 테이블 연결 관계 이해하기 (10분)

3개의 테이블이 서로 어떻게 연결되는지 살펴봅니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">👤</div><div class="wda-fcard-ttl">users 테이블</div><div class="wda-fcard-dsc">사용자 정보 저장<br>id · email · nickname · profile_image<br>1명의 사용자 = 1개의 행</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📝</div><div class="wda-fcard-ttl">posts 테이블</div><div class="wda-fcard-dsc">게시물 정보 저장<br>user_id로 users 연결<br>1개의 게시물 = 1개의 행</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">💬</div><div class="wda-fcard-ttl">comments 테이블</div><div class="wda-fcard-dsc">댓글 정보 저장<br>post_id·user_id로 연결<br>1개의 댓글 = 1개의 행</div></div>
</div>

<div class="wda-memo">
  <span class="wda-memo-label">🔗 테이블 연결 관계 핵심</span>
  <div class="wda-memo-body">
    <strong>users → posts (1:N)</strong> — 한 명의 사용자가 여러 개의 게시물을 작성할 수 있음<br>
    posts 테이블의 <code>user_id</code> = users 테이블의 <code>id</code>를 가리킴<br><br>
    <strong>posts → comments (1:N)</strong> — 하나의 게시물에 여러 개의 댓글이 달릴 수 있음<br>
    comments 테이블의 <code>post_id</code> = posts 테이블의 <code>id</code>를 가리킴<br><br>
    <strong>users → comments (1:N)</strong> — 한 명의 사용자가 여러 게시물에 댓글을 달 수 있음<br>
    comments 테이블의 <code>user_id</code> = users 테이블의 <code>id</code>를 가리킴
  </div>
</div>

---

## 📝 3단계: SNS DB 구조서 작성하기 (15분)

발견한 내용을 정리하여 나만의 DB 구조서를 작성합니다. 이 구조서는 다음 단계에서 AI에게 프로젝트 생성을 요청할 때 핵심 자료가 됩니다.

<div class="wda-callout wda-cs">
  <span class="wda-clabel">진행 방식</span>
  ⏱️ <strong>강사와 함께 토론 (7분)</strong> — "우리 SNS에는 어떤 컬럼이 더 필요할까요?" · 추가 아이디어 논의<br>
  ✏️ <strong>개인 작성 (8분)</strong> — 아래 템플릿을 메모장에 복사하여 자신만의 SNS DB 구조서 완성
</div>

아래 템플릿을 메모장 또는 텍스트 편집기에 복사해서 작성하세요.

```
== SNS DB 구조서 ==

[ users 테이블 — 사용자 정보 ]
- id: 사용자 고유 번호 (자동 생성)
- email: 이메일 주소
- password: 비밀번호 (암호화 저장, Supabase Auth가 처리)
- nickname: 닉네임
- profile_image: 프로필 사진 URL
- created_at: 가입 날짜

[ posts 테이블 — 게시물 ]
- id: 게시물 고유 번호
- user_id: 작성자 ID (users 테이블 참조)
- content: 게시물 내용
- image_url: 첨부 이미지 URL
- likes_count: 좋아요 수
- created_at: 작성 날짜

[ 게시물 작성 방식 ]
- user_id로 users 테이블에서 작성자 정보 가져오기

[ comments 테이블 — 댓글 ]
- id: 댓글 고유 번호
- post_id: 댓글이 달린 게시물 ID (posts 테이블 참조)
- user_id: 댓글 작성자 ID (users 테이블 참조)
- content: 댓글 내용
- created_at: 작성 날짜

[ 테이블 연결 관계 ]
- users → posts: 한 명의 사용자가 여러 개의 게시물 작성 가능
- posts → comments: 하나의 게시물에 여러 개의 댓글 작성 가능
- users → comments: 한 명의 사용자가 여러 게시물에 댓글 작성 가능

== DB 설계 완료 ==
```

---

## 🚀 4단계: 미니 SNS 프로젝트 구현 및 배포

DB 구조서가 완성되었습니다. 이제 AI를 활용하여 실제 미니 SNS 프로젝트를 구현하고 GitHub Pages로 배포합니다.

<div class="wda-callout wda-ci">
  <span class="wda-clabel">기획 → 구현으로 전환</span>
  지금까지 SNS UI 분석 → DB 구조 발견 → 구조서 작성까지 마쳤습니다. 이제 작성한 DB 구조서를 AI에게 전달하고, <strong>프롬프트 한 번</strong>으로 완전한 미니 SNS를 구현해봅니다!
</div>

### lecture1 Claude 실행

PowerShell을 열고 아래 명령어를 차례대로 실행하세요.

```powershell
cd lecture1
```

```powershell
claude --dangerously-skip-permissions
```

그 후 대화를 초기화합니다.

```
/clear
```

### 미니 SNS 생성 프롬프트

<div class="wda-prompt-head">💬 Claude Code에 보낼 프롬프트</div>

```
'mini_sns'라는 프로젝트를 생성해줘.

작업은 Todo 계획을 세워서 순차적으로 진행해줘.

요구사항:
1. React + Vite로 프로젝트 생성
2. Supabase MCP를 사용해서 데이터베이스 테이블 생성 및 연결
3. 백엔드 없이 Supabase를 직접 연결하여 작동하는 구조
4. GitHub Pages로 배포 (GitHub Actions 워크플로우 사용)

SNS 핵심 기능:
1) 회원가입 및 로그인 (Supabase Auth 사용)
2) 게시물 작성/조회/삭제 기능
3) 댓글 작성/조회 기능
4) 사용자 프로필 조회 기능

개발 순서:
1) 프로젝트 초기 설정
2) Supabase 데이터베이스 설계 및 테이블 생성 (users, posts, comments)
3) 프론트엔드 개발
4) Supabase 연동 구현
5) npm run build로 로컬 빌드
6) GitHub Actions 워크플로우 설정 (.github/workflows/deploy.yml 생성)
7) GitHub에 커밋 및 푸시하여 자동 배포
8) Actions 탭에서 배포 완료 확인 후 접속 가능한 URL 안내

---- DB 구조서 내용 -----
[여기에 3단계에서 작성한 DB 구조서 내용을 복사해서 붙여넣으세요]
```

### AI 자동 수행 과정

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">React + Vite 프로젝트 생성</div><div class="wda-sdsc">MUI · React Router · Supabase 클라이언트 등 필수 패키지 자동 설치</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">Supabase MCP로 DB 자동 생성</div><div class="wda-sdsc">users · posts · comments 테이블 생성 · RLS(보안 정책) 설정 · 외래 키 연결</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">UI 컴포넌트 구현</div><div class="wda-sdsc">로그인 · 회원가입 · 피드 · 게시물 상세 · 댓글 · 프로필 화면 개발</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">Supabase Auth + CRUD 기능 완성</div><div class="wda-sdsc">회원가입·로그인 · 게시물 작성/삭제 · 댓글 기능 · 프로필 조회 연동</div></div></div>
<div class="wda-step"><div class="wda-snum">5</div><div class="wda-sbody"><div class="wda-sttl">GitHub Pages 자동 배포</div><div class="wda-sdsc">GitHub Actions 워크플로우 설정 → 커밋 푸시 → 배포 완료 URL 안내</div></div></div>
</div>

<div class="wda-done">
  <div class="wda-done-ico">🎉</div>
  <div class="wda-done-ttl">3-3 완료!</div>
  <div>SNS UI에서 DB 구조를 직접 발견하고, AI 협업으로 실제 미니 SNS까지 구현·배포했습니다. 역방향 학습법으로 DB 개념이 훨씬 자연스럽게 이해됐을 것입니다!</div>
</div>
