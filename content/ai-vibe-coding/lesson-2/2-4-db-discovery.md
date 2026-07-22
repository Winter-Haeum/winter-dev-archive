---
title: "2-4: UI 보고 필요한 DB 찾아내기"
category: "ai-vibe-coding"
section: "lesson-2"
description: "3단계에서 만든 UI를 보면서 users · posts · comments 세 테이블을 발견하고, 테이블 간 연결 관계를 자연어로 이해합니다."
tags:
  - ai-vibe-coding
  - lesson-2
  - database
  - table-design
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
.wda-memo{background:rgba(245,158,11,.04);border:1px solid rgba(245,158,11,.2);border-radius:10px;padding:14px 16px;margin:.8rem 0 1.6rem}
.wda-memo-label{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#f59e0b;margin-bottom:8px;display:block}
.wda-memo-body{font-size:.81rem;line-height:1.6}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:13px 18px;margin:.8rem 0 1.6rem;font-size:.79rem;line-height:1.75}
.wda-goal-label{font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#22c55e;display:block;margin-bottom:10px}
.wda-flow{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:.8rem 0 1.6rem}
.wda-fnode{border:1px solid rgba(128,128,128,.2);border-radius:8px;padding:7px 13px;font-size:.8rem;font-weight:600}
.wda-farrow{opacity:.4;font-size:.9rem;font-weight:700}
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
  • <strong>역방향 사고</strong> — UI 화면에서 필요한 DB 구조를 직접 발견하는 방법 습득<br>
  • <strong>3개 테이블 발견</strong> — users · posts · comments 테이블의 구조와 필드 이해<br>
  • <strong>테이블 연결 관계</strong> — ID로 테이블들이 서로 연결되는 원리 파악<br>
  • <strong>DB 구조서 작성</strong> — 자연어로 데이터베이스 구조 정리 실습
</div>

---

## 🔄 역방향 학습법: UI → DB 발견

<div class="wda-callout wda-ci">
  <span class="wda-clabel">이번 시간의 특별한 방식</span>추상적인 테이블 설계부터 시작하지 않고, 실제 UI 화면을 보면서 "어? 이거 어떻게 저장하지?" 하며 자연스럽게 DB 구조를 발견해나갑니다!
</div>

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">💡</div><div class="wda-fcard-ttl">직관적 이해</div><div class="wda-fcard-dsc">"로그인 화면에 이메일이 보이니까 users 테이블에 email 필드가 필요하구나!"</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🎯</div><div class="wda-fcard-ttl">현실적 설계</div><div class="wda-fcard-dsc">실제 사용할 데이터만 테이블에 포함 — 불필요한 필드 없음</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">⚡</div><div class="wda-fcard-ttl">즉시 연결</div><div class="wda-fcard-dsc">UI와 DB가 어떻게 연결되는지 바로 이해 가능</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🧠</div><div class="wda-fcard-ttl">문제 해결형 사고</div><div class="wda-fcard-dsc">"이 기능을 위해서는 어떤 데이터가 필요할까?" 생각하는 습관</div></div>
</div>

---

## 📋 먼저 '테이블'이 뭔지 이해하기

데이터베이스의 "테이블"은 우리가 익숙한 표와 같습니다.

### 학생 명단 표 예시

| 번호 | 이름 | 이메일 | 전화번호 | 가입일 |
|------|------|--------|----------|--------|
| 1 | 홍길동 | hong@email.com | 010-1234-5678 | 2024-08-05 |
| 2 | 김개발 | kim@email.com | 010-2345-6789 | 2024-08-04 |
| 3 | 이질문 | lee@email.com | 010-3456-7890 | 2024-08-03 |

<div class="wda-memo">
  <span class="wda-memo-label">📌 테이블 용어 정리</span>
  <div class="wda-memo-body">
<strong>행(Row)</strong> — 각각의 데이터 (홍길동, 김개발, 이질문…)<br>
<strong>열(Column)</strong> — 정보의 종류 (번호, 이름, 이메일, 전화번호, 가입일)<br>
<strong>테이블(Table)</strong> — 이런 표 전체를 가리키는 말<br>
앞으로 이런 형태로 데이터를 저장하는 것을 <strong>"테이블"</strong>이라고 합니다!
</div></div>

---

## 👤 1단계: 회원가입 화면 분석 → users 테이블 발견

<div class="wda-callout wda-ci">
  <span class="wda-clabel">강사 질문</span>"회원가입 화면을 보고 생각해보세요!<br>가입하려는 사람이 입력하는 정보들을 하나씩 말해보세요."
</div>

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">Q1</div><div class="wda-sbody"><div class="wda-sttl">화면에서 입력받는 정보들</div><div class="wda-sdsc">이름 · 이메일 · 비밀번호 · 전화번호</div></div></div>
<div class="wda-step"><div class="wda-snum">Q2</div><div class="wda-sbody"><div class="wda-sttl">사용자에 대한 정보의 종류</div><div class="wda-sdsc">개인정보 · 연락처 · 로그인 정보 등</div></div></div>
<div class="wda-step"><div class="wda-snum">Q3</div><div class="wda-sbody"><div class="wda-sttl">화면에 안 보이지만 필요한 정보</div><div class="wda-sdsc">언제 가입했는지 (가입일) · 사용자 번호 (자동 증가)</div></div></div>
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">발견!</span>회원가입 화면을 보니 <strong>users 테이블</strong>이 필요하다는 걸 알 수 있네요!
</div>

| id | name | email | phone | created_at |
|----|------|-------|-------|------------|
| 1 | 홍길동 | hong@email.com | 010-1234-5678 | 2024-08-05 |
| 2 | 김개발 | kim@email.com | 010-2345-6789 | 2024-08-04 |
| 3 | 이질문 | lee@email.com | 010-3456-7890 | 2024-08-03 |

---

## 📝 2단계: 게시물 목록 화면 분석 → posts 테이블 발견

<div class="wda-callout wda-ci">
  <span class="wda-clabel">강사 질문</span>"게시물 목록을 보고 생각해보세요!<br>각 게시물에 어떤 정보들이 표시되고 있나요?"
</div>

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">Q1</div><div class="wda-sbody"><div class="wda-sttl">각 게시물에 표시되는 정보들</div><div class="wda-sdsc">제목 · 작성자 이름 · 작성일 · 댓글 개수</div></div></div>
<div class="wda-step"><div class="wda-snum">Q2</div><div class="wda-sbody"><div class="wda-sttl">이 정보들을 저장할 테이블 이름</div><div class="wda-sdsc">게시물 테이블 — posts!</div></div></div>
<div class="wda-step"><div class="wda-snum">Q3</div><div class="wda-sbody"><div class="wda-sttl">작성자 정보는 어떻게 연결?</div><div class="wda-sdsc">users 테이블과 연결 → author_id로 참조</div></div></div>
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">발견!</span>게시물 목록을 보니 <strong>posts 테이블</strong>이 필요하네요!
</div>

| id | title | content | author_id | created_at |
|----|-------|---------|-----------|------------|
| 1 | 안녕하세요 첫 게시물입니다 | 커뮤니티 오픈했어요... | 1 | 2024-08-05 |
| 2 | React 개발 팁 공유합니다 | 꿀팁 알려드려요... | 2 | 2024-08-04 |
| 3 | 질문있습니다 | DB 연결 방법 알려주세요... | 3 | 2024-08-03 |

<div class="wda-memo">
  <span class="wda-memo-label">💡 포인트</span>
  <div class="wda-memo-body">
<code>author_id</code>는 users 테이블의 <code>id</code>와 연결됩니다.<br>번호로 테이블이 연결되는 방식입니다.
</div></div>

---

## 💬 3단계: 댓글 화면 분석 → comments 테이블 발견

<div class="wda-callout wda-ci">
  <span class="wda-clabel">강사 질문</span>"댓글 부분을 보고 생각해보세요!<br>각 댓글에 어떤 정보들이 보이나요?"
</div>

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">Q1</div><div class="wda-sbody"><div class="wda-sttl">각 댓글에 표시되는 정보들</div><div class="wda-sdsc">댓글 내용 · 작성자 이름 · 작성시간</div></div></div>
<div class="wda-step"><div class="wda-snum">Q2</div><div class="wda-sbody"><div class="wda-sttl">댓글이 어떤 게시물에 달린 건지 어떻게 알까?</div><div class="wda-sdsc">게시물 번호를 함께 저장 → post_id로 참조</div></div></div>
<div class="wda-step"><div class="wda-snum">Q3</div><div class="wda-sbody"><div class="wda-sttl">댓글 작성자 정보 연결 방법</div><div class="wda-sdsc">users 테이블과 연결 → author_id로 참조</div></div></div>
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">발견!</span>댓글 화면을 보니 <strong>comments 테이블</strong>이 필요하다는 걸 알 수 있어요!
</div>

| id | content | author_id | post_id | created_at |
|----|---------|-----------|---------|------------|
| 1 | 축하합니다! 좋은 커뮤니티 만들어주세요 | 2 | 1 | 2024-08-05 |
| 2 | 기대되네요! 자주 이용하겠습니다 | 3 | 1 | 2024-08-05 |
| 3 | 꿀팁 감사드립니다! | 1 | 2 | 2024-08-04 |

---

## 🔗 테이블들이 어떻게 연결되는지 이해하기

### 핵심 개념: 번호로 연결

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">👤</div><div class="wda-fcard-ttl">users 테이블</div><div class="wda-fcard-dsc">회원 정보 보관함<br>홍길동 (id: 1) · 김개발 (id: 2) · 이질문 (id: 3)</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📝</div><div class="wda-fcard-ttl">posts 테이블</div><div class="wda-fcard-dsc">게시물 정보 보관함<br>"첫 게시물" (author_id: 1) · "개발 팁" (author_id: 2)</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">💬</div><div class="wda-fcard-ttl">comments 테이블</div><div class="wda-fcard-dsc">댓글 정보 보관함<br>"축하합니다!" (author_id: 2, post_id: 1)</div></div>
</div>

<div class="wda-memo">
  <span class="wda-memo-label">🔗 연결 관계 요약</span>
  <div class="wda-memo-body">
👤 <strong>users → posts</strong> — 한 사용자가 여러 게시물 작성 가능 · posts의 <code>author_id</code>로 연결<br>
👤 <strong>users → comments</strong> — 한 사용자가 여러 댓글 작성 가능 · comments의 <code>author_id</code>로 연결<br>
📝 <strong>posts → comments</strong> — 한 게시물에 여러 댓글 달릴 수 있음 · comments의 <code>post_id</code>로 연결
</div></div>

---

## ✍️ DB 구조 자연어로 정리하기 (10분)

### 함께 진행하는 방식

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">강사와 함께 토론 (5분)</div><div class="wda-sdsc">"users 테이블에는 어떤 정보가 저장되나요?" · "posts 테이블에는 어떤 정보가 필요할까요?" · "comments 테이블은 어떤 구조로 만들까요?"</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">개인 DB 구조서 작성 (5분)</div><div class="wda-sdsc">아래 템플릿을 메모장에 복사해서 채우기 · 막히는 부분은 강사나 옆 사람과 상의하기</div></div></div>
</div>

### DB 구조 정리 템플릿

아래 템플릿을 메모장에 복사해서 UI 화면을 보면서 필요한 정보들을 자연어로 정리해보세요!

```
== 커뮤니티 사이트 DB 구조 정리 ==

사용자 정보 (users 테이블)

- 회원가입 화면에서 필요한 정보들:

  * 사용자 번호:
    (자동으로 1, 2, 3... 증가)

  * 이름:

  * 이메일:
    (로그인할 때 사용)

  * 비밀번호:

  * 전화번호:

  * 가입일:
    (언제 가입했는지)

게시물 정보 (posts 테이블)

- 게시물 목록/상세 화면에서 필요한 정보들:

  * 게시물 번호:
    (자동으로 1, 2, 3... 증가)

  * 제목:

  * 내용:

  * 작성자:
    (어떤 사용자가 썼는지 - users 테이블과 연결)

  * 작성일:
    (언제 썼는지)

  * 수정일:
    (마지막으로 언제 수정했는지)

댓글 정보 (comments 테이블)

- 댓글 화면에서 필요한 정보들:

  * 댓글 번호:
    (자동으로 1, 2, 3... 증가)

  * 댓글 내용:

  * 작성자:
    (어떤 사용자가 썼는지 - users 테이블과 연결)

  * 게시물:
    (어떤 게시물에 달린 댓글인지 - posts 테이블과 연결)

  * 작성일:
    (언제 썼는지)

테이블 연결 관계

- 사용자 → 게시물:
  한 사용자가 여러 게시물 작성 가능

- 사용자 → 댓글:
  한 사용자가 여러 댓글 작성 가능

- 게시물 → 댓글:
  한 게시물에 여러 댓글 작성 가능

== DB 구조 정리 완료 ==
```

<div class="wda-callout wda-ci">
  <span class="wda-clabel">다음 단계 예고</span>5단계에서는 3단계 UI 기획서 + 4단계 DB 구조서를 하나로 합쳐서 Claude Code AI에게 프로젝트 생성을 요청합니다.<br>Supabase MCP를 사용한 실제 데이터베이스 생성과 연결, 그리고 GitHub Pages 배포까지!
</div>

<div class="wda-done">
  <div class="wda-done-ico">🔍</div><div class="wda-done-ttl">UI → DB 발견 완료!</div><div>UI 화면을 보면서 자연스럽게 데이터베이스 구조를 발견했습니다.<br>작성한 DB 구조서를 메모장에 잘 보관해두세요.<br>다음 단계에서 이 데이터베이스를 활용해서 실제 동작하는 커뮤니티 사이트를 만들어보겠습니다!</div>
</div>
