---
title: "2-2: DB와 스키마 개념 소개"
category: "ai-vibe-coding"
section: "lesson-2"
description: "데이터베이스의 역할과 구조를 표와 일상 예시로 이해하고, 웹디자이너가 DB 지식을 가졌을 때의 실무 강점을 살펴봅니다."
tags:
  - ai-vibe-coding
  - lesson-2
  - database
  - schema
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
.wda-flow{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:.8rem 0 1.6rem}
.wda-fnode{border:1px solid rgba(128,128,128,.2);border-radius:8px;padding:7px 13px;font-size:.8rem;font-weight:600}
.wda-farrow{opacity:.4;font-size:.9rem;font-weight:700}
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

<div class="wda-goal" style="position:relative;padding-right:204px;padding-top:16px;padding-bottom:20px;">
  <img src="/images/character/집중탐구.webp" alt="" style="position:absolute;width:184px;top:-30px;right:4px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(5deg);">
  <img src="/images/character/데이터베이스.webp" alt="" style="position:absolute;width:160px;bottom:-18px;right:8px;z-index:2;pointer-events:none;opacity:.88;transform:rotate(-6deg);">
  📋 <strong>DB 개념 이해</strong> — 데이터베이스가 표의 디지털 버전임을 일상 예시로 파악<br>
  🔑 <strong>키-벨류 구조</strong> — 데이터 검색의 핵심 원리 이해<br>
  🌐 <strong>웹사이트 연결</strong> — 모든 웹페이지가 DB와 연결된다는 개념 파악<br>
  💼 <strong>디자이너 역량</strong> — DB 지식이 웹디자이너에게 주는 실무 강점 인식
</div>

---

## 데이터베이스(DB)란 무엇인가?

<div class="wda-callout wda-cy" style="position:relative;padding-right:198px;padding-top:16px;">
  <img src="/images/character/오!그렇구나.webp" alt="" style="position:absolute;width:180px;top:-30px;right:4px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(-7deg);">
  <span class="wda-clabel">핵심 개념</span>
  데이터베이스는 웹사이트에서 정보를 체계적으로 저장하고 관리하는 시스템입니다. 쉽게 말해 <strong>디지털 서랍장</strong>과 같은 역할을 합니다. 일상생활에서 우리가 이미 표로 정리하는 방식이 바로 데이터베이스의 기본 개념입니다.
</div>

### 1. 사람에 대한 '정보'를 어떻게 정리할 수 있는가?

친구들의 정보를 조사해서 표로 만든다면 다음과 같이 정리할 수 있습니다.

| 이름 | 나이 | 성별 | 별명 | 취미 | 성격 |
|------|------|------|------|------|------|
| 김민수 | 25 | 남 | 민수형 | 게임, 영화 | 활발함 |
| 이지은 | 23 | 여 | 지은이 | 독서, 요리 | 차분함 |
| 박철호 | 27 | 남 | 철호 | 운동, 음악 | 외향적 |

### 2. '음료수'의 경우에는 성분에 따른 표로 정리

편의점 음료수들의 정보를 성분별로 정리하면 다음과 같습니다.

| 상품명 | 브랜드 | 칼로리 | 당분 | 카페인 | 가격 |
|--------|--------|--------|------|--------|------|
| 코카콜라 | 코카콜라 | 139kcal | 35g | 있음 | 1,500원 |
| 제로콜라 | 코카콜라 | 0kcal | 0g | 있음 | 1,500원 |
| 오렌지주스 | 미닛메이드 | 180kcal | 42g | 없음 | 2,000원 |

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/꽃 아이콘 (5).webp" alt="" style="position:absolute;width:52px;top:-8px;right:28px;z-index:2;pointer-events:none;opacity:.62;transform:rotate(12deg);">
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">핵심 비유</span>
  위처럼 일상에서 정보를 표로 정리하는 방식이 바로 데이터베이스의 기본 개념입니다. 사람 정보 표 → 웹사이트의 "회원 테이블", 음료수 정보 표 → 쇼핑몰의 "상품 테이블"이 됩니다.
</div>

---

<div style="display:flex;align-items:center;gap:26px;margin-top:1.5rem;margin-bottom:0.75rem;">
  <h2 style="margin:0;">엑셀 vs 데이터베이스</h2>
  <img src="/images/decoration/꽃 아이콘 (10).webp" alt="" style="width:64px;opacity:.65;transform:rotate(-8deg);pointer-events:none;flex-shrink:0;">
</div>

<div class="wda-compare">
<div class="wda-cbox"><span class="wda-cbox-label">엑셀 (우리가 아는 방식)</span><div class="wda-cbox-ttl">📋 스프레드시트</div><div class="wda-cbox-body"><strong>행(Row)</strong> — 각각의 데이터<br><strong>열(Column)</strong> — 데이터의 종류<br><em>예시: 이름, 나이, 전화번호</em></div></div>
<div class="wda-cbox"><span class="wda-cbox-label">데이터베이스 (웹에서 사용)</span><div class="wda-cbox-ttl">🗄️ 디지털 저장소</div><div class="wda-cbox-body"><strong>레코드(Record)</strong> — 각각의 데이터<br><strong>필드(Field)</strong> — 데이터의 종류<br><em>예시: 회원정보, 게시물, 댓글</em></div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/별 아이콘 (3).webp" alt="" style="position:absolute;width:52px;top:6px;right:24px;z-index:2;pointer-events:none;opacity:.62;transform:rotate(12deg);">
</div>

---

## 키(Key)와 벨류(Value) 개념

데이터베이스의 핵심은 **키-벨류** 구조입니다. 엑셀의 열 제목과 셀 내용의 관계와 동일합니다.

### 전화번호부 테이블 예시

| ID | name (키) | address (키) | email (키) | phone (키) |
|----|-----------|--------------|------------|------------|
| 1 | 김철수 | 부산시 해운대구 | kim@email.com | 010-5678-5678 |
| 2 | 이영희 | 대구시 중구 | lee@email.com | 010-9999-8888 |
| 3 | 홍길동 | 서울시 강남구 | hong@email.com | 010-1234-1234 |
| 4 | 박민수 | 인천시 남동구 | park@email.com | 010-1111-2222 |

### "홍길동의 전화번호를 찾아달라"는 요청이 들어왔다면?

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">질문 수신</div><div class="wda-sdsc">"홍길동의 전화번호는?" 질문</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">키로 행 찾기</div><div class="wda-sdsc"><strong>name(키)</strong>이 <strong>"홍길동"(벨류)</strong>인 행을 찾기</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">벨류 가져오기</div><div class="wda-sdsc">해당 행의 <strong>phone(키)</strong>에서 <strong>"010-1234-1234"(벨류)</strong> 가져오기</div></div></div>
</div>

<div class="wda-memo" style="position:relative;padding-right:198px;padding-top:6px;">
  <img src="/images/character/잠깐생각해보기.webp" alt="" style="position:absolute;width:180px;top:-30px;right:4px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(-6deg);">
  <img src="/images/decoration/핀 아이콘 (3).webp" alt="" style="position:absolute;width:50px;top:-30px;left:165px;z-index:2;pointer-events:none;opacity:.62;transform:rotate(-6deg);">
  <span class="wda-memo-label">키-벨류 핵심 원리</span>
  <div class="wda-memo-body">
  키(Key) → 정보의 이름·분류 (name, phone, email …)<br>
  벨류(Value) → 키에 해당하는 실제 값 ("홍길동", "010-1234-1234" …)<br>
  <strong>이것이 데이터베이스에서 정보를 검색하는 기본 원리입니다!</strong>
  </div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/마스킹 테이프 (5).webp" alt="" style="position:absolute;width:108px;top:-6px;left:30%;z-index:1;pointer-events:none;opacity:.80;transform:rotate(-3deg);">
</div>

---

## 실제 웹사이트에서 DB는 어떻게 작동하는가

### '마이페이지' 접속 시 동작 흐름

페이스북, 인스타그램, 네이버 등에서 내 정보 페이지를 클릭했을 때의 과정입니다.

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">클릭 — 사용자 행동</div><div class="wda-sdsc">"마이페이지" 버튼 클릭 → 로그인 상태에서 내 ID 확인 → 웹사이트가 누구의 정보를 보여줄지 파악</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">DB 검색 — 데이터베이스 조회</div><div class="wda-sdsc">회원 테이블에서 내 정보 검색 (이름, 이메일, 프로필 사진) · 게시물 테이블에서 내가 쓴 글 · 친구 테이블에서 팔로워 수</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">완성 — 페이지 렌더링</div><div class="wda-sdsc">내 프로필 정보 표시 · 내가 작성한 글 목록 · 친구/팔로워 수 · "홍길동님 환영합니다" 메시지</div></div></div>
</div>

<div class="wda-callout wda-cs" style="position:relative;padding-left:100px;padding-top:16px;">
  <img src="/images/character/번뜩.webp" alt="" style="position:absolute;width:76px;top:4px;left:10px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(-5deg);">
  <span class="wda-clabel">핵심 포인트</span>
  우리가 보는 모든 웹페이지는 실시간으로 데이터베이스에서 정보를 가져와서 만들어집니다. 이것이 바로 <strong>동적 웹사이트</strong>의 핵심 원리입니다.
</div>

### 웹페이지별 DB 연결 구조

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">👤</div><div class="wda-fcard-ttl">마이페이지</div><div class="wda-fcard-dsc">회원 테이블 + 게시물 테이블 + 활동 테이블</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📰</div><div class="wda-fcard-ttl">뉴스기사</div><div class="wda-fcard-dsc">기사 테이블 + 기자 테이블 + 언론사 테이블</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🛒</div><div class="wda-fcard-ttl">상품목록</div><div class="wda-fcard-dsc">상품 테이블 + 이미지 테이블 + 재고 테이블</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📦</div><div class="wda-fcard-ttl">상품상세</div><div class="wda-fcard-dsc">상품 테이블 + 리뷰 테이블 + 주문 테이블</div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/책갈피 아이콘 (2).webp" alt="" style="position:absolute;width:46px;top:6px;right:26px;z-index:2;pointer-events:none;opacity:.66;transform:rotate(-12deg);">
</div>

---

## 웹디자이너가 DB 지식을 가지면?

단순한 '디자인만 하는 사람'에서 '디자인+개발을 아는 전문가'로 레벨업할 수 있습니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🎨</div><div class="wda-fcard-ttl">UI/UX 설계 능력</div><div class="wda-fcard-dsc">DB에 없는 필드를 디자인에 넣는 실수 방지. 현실적인 화면 설계 가능</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📝</div><div class="wda-fcard-ttl">입력 폼 전문성</div><div class="wda-fcard-dsc">어떤 데이터를 수집해야 하는지 파악하고 DB 구조에 맞는 폼 설계</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🤝</div><div class="wda-fcard-ttl">개발팀 소통</div><div class="wda-fcard-dsc">"이 기능 구현 가능한가요?" 질문 없이도 현실적인 디자인 제안</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🔄</div><div class="wda-fcard-ttl">데이터 흐름 이해</div><div class="wda-fcard-dsc">입력 → DB 저장 → 화면 출력 전체 과정을 고려한 설계</div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/종이 클립 아이콘 (3).webp" alt="" style="position:absolute;width:50px;top:6px;right:22px;z-index:2;pointer-events:none;opacity:.60;transform:rotate(15deg);">
</div>

<div class="wda-callout wda-ci" style="position:relative;padding-right:202px;padding-top:16px;">
  <img src="/images/character/꼭기억.webp" alt="" style="position:absolute;width:184px;top:-30px;right:4px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(7deg);">
  <span class="wda-clabel">디자이너 레벨업</span>
  DB 지식을 가진 디자이너는 개발자가 "이건 데이터가 없어서 안 돼요"라는 말을 하기 전에 미리 현실적인 디자인을 설계할 수 있습니다. 협업 효율이 크게 올라갑니다.
</div>

<div class="wda-compare">
<div class="wda-cbox"><span class="wda-cbox-label">디자인 업무에서 강점</span><div class="wda-cbox-ttl">🎯 실제 작동하는 디자인</div><div class="wda-cbox-body">실제 작동하는 디자인 제안 가능<br>"이 데이터는 어디서 가져오나요?" 질문에 정확한 답변<br>개발자와 소통 시 전문성 인정</div></div>
<div class="wda-cbox"><span class="wda-cbox-label">클라이언트 미팅에서 강점</span><div class="wda-cbox-ttl">💬 정확한 제안</div><div class="wda-cbox-body">"이 기능 구현 가능한가요?" 질문에 정확한 답변<br>디자인 단계에서 기술적 한계 미리 파악<br>현실적인 제안서 작성 가능</div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/체크 아이콘 (2).webp" alt="" style="position:absolute;width:54px;top:6px;left:26%;z-index:2;pointer-events:none;opacity:.64;transform:rotate(-8deg);">
</div>

---

## 오늘 배울 DB 활용

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">💬</div><div class="wda-fcard-ttl">커뮤니티 사이트</div><div class="wda-fcard-dsc">회원가입/로그인 · 게시물 작성/조회 · 댓글 시스템 · 실시간 업데이트</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📖</div><div class="wda-fcard-ttl">포트폴리오 방명록</div><div class="wda-fcard-dsc">방문자 방명록 · 실시간 표시 · 작성 시간 자동 기록 · 반응형 디자인</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🚀</div><div class="wda-fcard-ttl">고급 기능 맛보기</div><div class="wda-fcard-dsc">별점 시스템 · 실시간 채팅 · 설문조사 사이트 · 자동 배포</div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/반짝이 아이콘 (2).webp" alt="" style="position:absolute;width:58px;top:6px;left:20px;z-index:2;pointer-events:none;opacity:.64;transform:rotate(8deg);">
</div>

<div class="wda-done" style="position:relative;padding-right:198px;padding-bottom:26px;padding-top:20px;">
  <img src="/images/character/화이팅.webp" alt="" style="position:absolute;width:184px;top:-30px;right:4px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(-8deg);">
  <div class="wda-done-ico">🗄️</div>
  <div class="wda-done-ttl">DB 개념 학습 완료!</div>
  <div>이제 웹 개발에서 데이터베이스의 역할과 중요성을 완전히 이해했습니다. 다음 단계에서는 이 지식을 바탕으로 실제 프로젝트를 만들어보겠습니다!</div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/하트 아이콘 (4).webp" alt="" style="position:absolute;width:54px;top:6px;right:24px;z-index:2;pointer-events:none;opacity:.60;transform:rotate(-14deg);">
</div>
