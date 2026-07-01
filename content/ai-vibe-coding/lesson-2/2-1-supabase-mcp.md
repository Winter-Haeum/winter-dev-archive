---
title: "2-1: Supabase MCP 설치 및 설정"
category: "ai-vibe-coding"
section: "lesson-2"
description: "Supabase 계정 생성부터 MCP 설치, OAuth 인증, 연결 확인까지 AI가 데이터베이스를 직접 관리할 수 있는 환경을 구축합니다."
tags:
  - ai-vibe-coding
  - lesson-2
  - supabase
  - mcp
date: "2026-06-10"
status: "completed"
---

<style>
.wda-callout{border-radius:10px;padding:12px 15px;margin:.8rem 0 1.4rem;border-left:3px solid;font-size:.81rem;line-height:1.6}
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
.wda-fcard-ttl{font-size:.81rem;font-weight:700;margin-bottom:3px}
.wda-fcard-dsc{font-size:.78rem;opacity:.72;line-height:1.5}
.wda-done{border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:16px 20px;margin:.8rem 0 1.4rem;background:rgba(34,197,94,.04);text-align:center;font-size:.82rem;line-height:1.6}
.wda-done-ico{font-size:1.8rem;margin-bottom:6px}
.wda-done-ttl{font-size:1rem;font-weight:700;color:#22c55e;margin-bottom:4px}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(139,92,246,.12);color:#8b5cf6;font-size:.8rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.81rem;font-weight:700;margin-bottom:2px}
.wda-sdsc{font-size:.78rem;opacity:.7;line-height:1.5}
.wda-memo{background:rgba(245,158,11,.04);border:1px solid rgba(245,158,11,.2);border-radius:10px;padding:14px 16px;margin:.8rem 0 1.6rem}
.wda-memo-label{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#f59e0b;margin-bottom:8px;display:block}
.wda-memo-body{font-size:.81rem;line-height:1.6}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:13px 18px;margin:.8rem 0 1.6rem;font-size:.79rem;line-height:1.75}
.wda-goal-label{font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#22c55e;display:block;margin-bottom:10px}
.wda-compare{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-cbox{flex:1 1 180px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 15px}
.wda-cbox-label{font-size:.68rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;opacity:.55;display:block;margin-bottom:6px}
.wda-cbox-ttl{font-size:.9rem;font-weight:700;margin-bottom:6px}
.wda-cbox-body{font-size:.8rem;opacity:.75;line-height:1.55}
table{width:100%;border-collapse:collapse;font-size:.78rem;margin:.8rem 0 1.6rem}
th{font-weight:600;padding:6px 10px;background:rgba(128,128,128,.07);border:1px solid rgba(128,128,128,.18);font-size:.72rem;letter-spacing:.02em;text-align:left}
td{padding:5px 10px;border:1px solid rgba(128,128,128,.14);vertical-align:top;line-height:1.5;font-size:.78rem}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
.wda-cy{background:rgba(250,204,21,.07);border-color:#ca8a04}
.wda-cy .wda-clabel{color:#92400e}
p:has(> strong:only-child){margin-top:1.6rem;margin-bottom:.2rem}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem}
</style>

## 학습 목표

<div class="wda-goal" style="position:relative;padding-right:210px;padding-top:16px;padding-bottom:16px;">
  <img src="/images/character/공부 시작.webp" alt="" style="position:absolute;width:188px;top:-26px;right:6px;z-index:3;pointer-events:none;opacity:.91;transform:rotate(4deg);">
  🗄️ <strong>Supabase 계정 구축</strong> — 클라우드 데이터베이스 프로젝트 생성<br>
  ⚙️ <strong>MCP 설치</strong> — Claude에 Supabase MCP Server 등록<br>
  🔐 <strong>OAuth 인증</strong> — 브라우저 인증으로 안전하게 연결<br>
  ✅ <strong>연결 확인</strong> — /mcp로 연결 상태와 기능 테스트
</div>

---

## 진행 순서

<div class="wda-callout wda-ci" style="position:relative;padding-right:242px;padding-top:16px;">
  <img src="/images/character/전체흐름.webp" alt="" style="position:absolute;width:158px;top:120px;right:6px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(-5deg);">
  <img src="/images/decoration/구름 아이콘 (4).webp" alt="" style="position:absolute;width:64px;top:-14px;right:170px;z-index:2;pointer-events:none;opacity:.62;transform:rotate(6deg);">
  <span class="wda-clabel">전체 진행 순서</span>
  Supabase 계정 생성 → MCP 설치 → OAuth 인증 → 연결 확인 순서로 진행합니다.
</div>

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">Supabase 계정 생성 및 프로젝트 설정</div><div class="wda-sdsc">강사와 함께 계정 생성 및 새 프로젝트 준비</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">MCP 설치 명령어 실행</div><div class="wda-sdsc">Claude 종료 상태에서 터미널에 설치 명령어 입력</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">OAuth 인증 연결</div><div class="wda-sdsc">Claude 재실행 후 /mcp에서 브라우저 인증</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">MCP 연결 상태 확인 및 기능 테스트</div><div class="wda-sdsc">테이블 목록 조회, 프로젝트 URL 확인으로 동작 검증</div></div></div>
</div>

---

<div style="display:flex;align-items:center;gap:18px;margin-top:1.5rem;margin-bottom:0.75rem;">
  <h2 style="margin:0;">사전 준비: Supabase 계정 생성</h2>
  <img src="/images/decoration/구름 아이콘 (2).webp" alt="" style="width:62px;opacity:.60;transform:rotate(-8deg);pointer-events:none;flex-shrink:0;">
</div>

강사의 안내에 따라 수강생과 함께 진행합니다.

### Supabase 계정 생성

<div class="wda-callout wda-ci">
  <span class="wda-clabel">계정 생성 방법</span>
  GitHub 계정으로 가입하면 가장 간편합니다. 이메일 인증 없이 바로 연동됩니다.
</div>

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">Supabase 접속</div><div class="wda-sdsc"><code>https://supabase.com</code> 접속 → "Start your project" 클릭</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">회원가입</div><div class="wda-sdsc">GitHub 또는 이메일로 가입</div></div></div>
</div>

### 새 프로젝트 생성

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">새 프로젝트 시작</div><div class="wda-sdsc">"New project" 클릭</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">Organization 선택</div><div class="wda-sdsc">Organization: Personal 선택</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">프로젝트 정보 입력</div><div class="wda-sdsc">프로젝트명: <strong>바이브코딩-방명록</strong> · Region: <strong>Northeast Asia (Seoul)</strong> 선택</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">데이터베이스 비밀번호 설정</div><div class="wda-sdsc">안전한 비밀번호 설정 후 반드시 메모장에 기록 — 나중에 확인 불가</div></div></div>
</div>

<div class="wda-callout wda-cw" style="position:relative;padding-right:202px;padding-top:16px;">
  <img src="/images/character/실수 주의.webp" alt="" style="position:absolute;width:184px;top:-28px;right:4px;z-index:3;pointer-events:none;opacity:.91;transform:rotate(6deg);">
  <span class="wda-clabel">⚠ 비밀번호 필수 보관</span>
  프로젝트 생성 시 설정하는 데이터베이스 비밀번호는 이후 절대 확인할 수 없습니다. 반드시 메모장이나 비밀번호 관리 앱에 저장해두세요.
</div>

---

## Supabase MCP 설치

<div class="wda-callout wda-cw" style="position:relative;padding-left:108px;padding-top:16px;">
  <img src="/images/decoration/꽃 아이콘 (3).webp" alt="" style="position:absolute;width:88px;top:50%;left:8px;transform:translateY(-50%) rotate(-8deg);z-index:2;pointer-events:none;opacity:.82;">
  <span class="wda-clabel">⚠ Claude 완전 종료 필수</span>
  Claude Code가 실행 중이면 먼저 <code>/exit</code>로 종료하세요. 설치 명령어는 반드시 Claude 밖 터미널에서 실행해야 합니다.
</div>

Claude를 완전히 종료한 상태에서 터미널에 아래 명령어를 실행합니다.

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/반짝이 아이콘 (4).webp" alt="" style="position:absolute;width:44px;top:-56px;right:18px;z-index:2;pointer-events:none;opacity:.68;transform:rotate(10deg);">
</div>

```bash
claude mcp add --transport http supabase https://mcp.supabase.com/mcp
```

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/별 아이콘 (7).webp" alt="" style="position:absolute;width:40px;top:-10px;right:76px;z-index:2;pointer-events:none;opacity:.62;transform:rotate(-15deg);">
</div>

<div class="wda-callout wda-ci" style="position:relative;padding-right:198px;padding-top:16px;">
  <img src="/images/character/번뜩.webp" alt="" style="position:absolute;width:180px;top:-30px;right:4px;z-index:3;pointer-events:none;opacity:.91;transform:rotate(-6deg);">
  <span class="wda-clabel">이 명령어가 하는 일</span>
  Supabase 공식 HTTP MCP 서버를 Claude에 등록합니다. 토큰이나 프로젝트 ID를 직접 입력할 필요 없이, 이후 Claude에서 브라우저 OAuth로 인증만 하면 됩니다.
</div>

---

## OAuth 인증 연결

설치 후 Claude를 실행하고 아래 순서로 인증합니다.

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">Claude 실행 후 /mcp 입력</div><div class="wda-sdsc">터미널에서 <code>claude</code> 실행 → <code>/mcp</code> 명령어 입력 → MCP 서버 목록에서 supabase 확인</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">auth 선택</div><div class="wda-sdsc">supabase 항목에서 <code>auth</code> 선택 후 엔터 → 브라우저 자동으로 열림</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">브라우저에서 로그인</div><div class="wda-sdsc">Supabase 로그인 화면에서 GitHub 계정으로 로그인 → Authorize 클릭 → 인증 완료</div></div></div>
</div>

<div class="wda-callout wda-cs" style="position:relative;padding-left:110px;padding-top:16px;">
  <img src="/images/character/빌드 성공.webp" alt="" style="position:absolute;width:92px;top:6px;left:6px;z-index:3;pointer-events:none;opacity:.91;transform:rotate(7deg);">
  <span class="wda-clabel">연결 성공 확인</span>
  <code>/mcp</code> 명령어에서 <strong>supabase ✔ connected</strong> 상태가 표시되면 완료입니다!
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/하트 아이콘 (6).webp" alt="" style="position:absolute;width:48px;top:-12px;right:22px;z-index:2;pointer-events:none;opacity:.58;transform:rotate(14deg);">
</div>

---

## 설정 완료 확인

<div class="wda-memo" style="position:relative;padding-right:198px;padding-top:16px;">
  <img src="/images/character/기억해두기.webp" alt="" style="position:absolute;width:178px;top:-58px;right:4px;z-index:3;pointer-events:none;opacity:.91;transform:rotate(-5deg);">
  <span class="wda-memo-label">확인 방법 3가지</span>
  <div class="wda-memo-body">
  📡 <strong>/mcp 연결 확인</strong> — <code>Supabase MCP Server ✔ connected</code> · 사용 가능한 도구 19개 표시<br>
  📋 <strong>테이블 목록 확인</strong> — <code>mcp__supabase__list_tables</code> 도구 사용<br>
  🌐 <strong>프로젝트 URL 확인</strong> — <code>mcp__supabase__get_project_url</code> 도구 사용
  </div>
</div>

```
# 테이블 목록 조회 테스트
mcp__supabase__list_tables를 사용해서 현재 데이터베이스의 테이블 목록을 보여줘

# 프로젝트 URL 확인
mcp__supabase__get_project_url로 프로젝트 URL을 확인해줘
```

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/꽃 아이콘 (9).webp" alt="" style="position:absolute;width:58px;top:-18px;left:22%;z-index:2;pointer-events:none;opacity:.68;transform:rotate(-12deg);">
  <img src="/images/decoration/반짝이 아이콘 (1).webp" alt="" style="position:absolute;width:38px;top:16px;right:26%;z-index:2;pointer-events:none;opacity:.64;transform:rotate(18deg);">
</div>

---

## 문제 해결

<div class="wda-compare">
<div class="wda-cbox"><span class="wda-cbox-label">✘ failed 또는 연결 안됨</span><div class="wda-cbox-ttl">원인: OAuth 인증 미완료</div><div class="wda-cbox-body"><code>/mcp</code>에서 supabase → <code>auth</code> 다시 실행<br>브라우저에서 Authorize 버튼 클릭 확인<br>Claude Code 재시작 후 재시도</div></div>
<div class="wda-cbox"><span class="wda-cbox-label">MCP 목록에 없음</span><div class="wda-cbox-ttl">원인: Claude 실행 중 설치</div><div class="wda-cbox-body">Claude 완전 종료 후 설치 명령어 재실행<br><code>claude mcp add --transport http supabase https://mcp.supabase.com/mcp</code></div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/하트 (3).webp" alt="" style="position:absolute;width:54px;top:-10px;left:36%;z-index:2;pointer-events:none;opacity:.62;transform:rotate(-10deg);">
</div>

<div class="wda-callout wda-cw" style="position:relative;padding-right:198px;padding-top:16px;padding-bottom:14px;">
  <img src="/images/character/어려움.webp" alt="" style="position:absolute;width:180px;top:-28px;right:4px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(8deg);">
  <span class="wda-clabel">강사 지원이 필요한 경우</span>
  브라우저 OAuth 창이 열리지 않거나 · 인증 후에도 계속 연결 실패하거나 · 네트워크 연결 문제가 발생한 경우 강사에게 도움을 요청하세요.
</div>

### Claude Code 재시작 방법

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">Claude Code 종료</div><div class="wda-sdsc"><code>/exit</code> 로 종료</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">재실행</div><div class="wda-sdsc">터미널에서 <code>claude</code> 로 재실행</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">연결 상태 확인</div><div class="wda-sdsc"><code>/mcp</code> 로 연결 상태 확인</div></div></div>
</div>

---

## 최종 체크리스트

<div class="wda-memo" style="position:relative;padding-top:28px;">
  <img src="/images/decoration/마스킹 테이프 (7).webp" alt="" style="position:absolute;width:116px;top:-12px;right:16px;z-index:1;pointer-events:none;opacity:.84;transform:rotate(-8deg);">
  <span class="wda-memo-label">✅ 최종 완료 확인</span>
  <div class="wda-memo-body">
  ☐ Supabase 계정 생성 완료 (GitHub 로그인)<br>
  ☐ 프로젝트 "바이브코딩-방명록" 생성 완료<br>
  ☐ 데이터베이스 비밀번호 메모장에 저장 완료<br>
  ☐ <code>claude mcp add</code> 명령어 실행 완료<br>
  ☐ <code>/mcp</code>에서 OAuth 인증 완료<br>
  ☐ <code>/mcp</code>에서 connected 상태 확인<br>
  ☐ 테이블 목록 조회 성공<br>
  ☐ 프로젝트 URL 확인 완료
  </div>
</div>

---

## 학습 포인트

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🔗</div><div class="wda-fcard-ttl">MCP 원리</div><div class="wda-fcard-dsc">AI-Database 연동의 Model Context Protocol 개념 이해</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🔐</div><div class="wda-fcard-ttl">OAuth 인증</div><div class="wda-fcard-dsc">브라우저 인증 방식의 편의성과 보안 장점</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">⚡</div><div class="wda-fcard-ttl">자동화 도구</div><div class="wda-fcard-dsc">개발 환경 구축 자동화 경험</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">☁️</div><div class="wda-fcard-ttl">클라우드 DB</div><div class="wda-fcard-dsc">AI의 Supabase 데이터베이스 실시간 연동 실습</div></div>
</div>

<div class="wda-done" style="position:relative;padding-right:202px;padding-bottom:28px;padding-top:20px;">
  <img src="/images/character/화이팅.webp" alt="" style="position:absolute;width:186px;top:-30px;right:4px;z-index:3;pointer-events:none;opacity:.91;transform:rotate(-6deg);">
  <img src="/images/decoration/반짝이 (5).webp" alt="" style="position:absolute;width:52px;top:-16px;left:16px;z-index:2;pointer-events:none;opacity:.66;transform:rotate(-14deg);">
  <div class="wda-done-ico">🎉</div>
  <div class="wda-done-ttl">Supabase MCP 환경 구축 완료!</div>
  <div>데이터베이스 관리 자동화를 위한 Supabase MCP 환경이 성공적으로 구축되었습니다. 이제 Claude가 Supabase 데이터베이스를 직접 관리할 수 있습니다!</div>
</div>
