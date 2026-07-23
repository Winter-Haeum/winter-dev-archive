---
title: "2-3: UI 먼저 만들고 함께 기획하기"
category: "ai-vibe-coding"
section: "lesson-2"
description: "강사가 제시하는 기본 커뮤니티 디자인을 보고, 각자 원하는 만큼 수정해서 나만의 커뮤니티 사이트를 기획합니다."
tags:
  - ai-vibe-coding
  - lesson-2
  - ui
  - planning
date: "2026-06-10"
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
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px;text-align:left}
.wda-sdsc{font-size:.89rem;line-height:1.65;text-align:left}
.wda-steps .wda-step{text-align:left}
.wda-steps .wda-sbody{text-align:left}
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
  • <strong>UI → DB 사고</strong> — 화면을 보고 필요한 데이터 구조를 역으로 추론하는 방식 체험<br>
  • <strong>나만의 커뮤니티 기획</strong> — 주제·색상·기능을 직접 선택하여 개성 있는 사이트 기획<br>
  • <strong>토론과 협업</strong> — 강사·동료와 함께 아이디어를 발전시키는 워크숍 경험
</div>

---

## 🔄 새로운 학습 방식: UI → DB 순서

<div class="wda-callout wda-ci">
  <span class="wda-clabel">오늘의 특별한 접근법</span>일반적으로는 DB를 먼저 설계하고 UI를 만들지만, 오늘은 시각적인 UI를 먼저 보고 → 필요한 DB 구조를 찾아내는 훈련을 합니다.<br>화면에 보이는 정보에서 출발하면 DB 개념이 훨씬 직관적으로 이해됩니다!
</div>

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">👁️</div><div class="wda-fcard-ttl">직관적 이해</div><div class="wda-fcard-dsc">"이 화면에 이런 정보가 보이니까 DB에도 이런 필드가 필요하구나!"</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🎯</div><div class="wda-fcard-ttl">현실적 설계</div><div class="wda-fcard-dsc">실제 사용할 화면을 보고 DB를 만들어서 불필요한 필드가 없음</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📐</div><div class="wda-fcard-ttl">웹디자이너 역량</div><div class="wda-fcard-dsc">DB 구조를 생각하며 UI를 설계하는 전문성 향상</div></div>
</div>

---

## 🎬 1단계: 강사 기본 디자인 시연 (10분)

<div class="wda-callout wda-cs">
  <span class="wda-clabel">강사 진행 안내</span>강사가 화면에 간단한 와이어프레임을 그리면서 기본 커뮤니티 사이트 구조를 보여드립니다.<br>"이런 느낌으로 만들어볼 건데, 어떤 부분을 바꾸고 싶나요?"
</div>

기본 로그인 페이지 구성 요소:

<div class="wda-memo">
  <span class="wda-memo-label">📱 기본 로그인 페이지 디자인</span>
  <div class="wda-memo-body">
<strong>My Community</strong><br><br>
[로그인]<br>
이메일 · your@email.com<br>
비밀번호 · ••••••••••<br><br>
<strong>로그인 하기</strong><br>
아직 계정이 없으신가요? → 회원가입 하기
</div></div>

---

## 💬 2단계: 함께 논의하며 나만의 커뮤니티 기획하기 (15분)

### 함께 진행하는 방식

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">강사와 함께 토론 (5분)</div><div class="wda-sdsc">"어떤 주제의 커뮤니티를 만들고 싶나요?" · "색상은 어떤 느낌이 좋을까요?" · "특별히 추가하고 싶은 기능이 있나요?"</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">개인 기획서 작성 (10분)</div><div class="wda-sdsc">아래 템플릿을 메모장에 복사해서 채우기 · 막히는 부분은 강사나 옆 사람과 상의하기</div></div></div>
</div>

### 나만의 커뮤니티 기획서 템플릿

아래 템플릿을 메모장에 복사해서 자신만의 아이디어로 채워보세요!

```
== 나만의 커뮤니티 기획서 ==

커뮤니티 주제
- 어떤 주제의 커뮤니티인가요? (예: 게임, 맛집, 반려동물, 스터디 등)
-

디자인 스타일
- 사이트 이름: (예: "Game Hub", "맛집 리뷰" 등)
- 색상 테마: (예: 파란색, 분홍색, 어두운 테마 등)
- 분위기: (예: 전문적인, 친근한, 재미있는 등)

특별한 기능 아이디어
- 기본 기능 외에 추가하고 싶은 것들: (예: 좋아요, 별점, 사진 업로드 등)
-

페이지별 특징
- 로그인 페이지:
- 게시물 목록:
- 게시물 상세:
- 댓글 기능:

참고 사이트
- 비슷한 느낌의 웹사이트가 있다면: (예: 인스타그램, 유튜브, 네이버 카페 등)

== 기획 완료 ==
```

---

## 🎨 수정 아이디어 예시

어떻게 수정할지 고민된다면 아래 예시를 참고하세요.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🎮</div><div class="wda-fcard-ttl">게임 커뮤니티</div><div class="wda-fcard-dsc">이름: "Game Community"<br>색상: 어둡고 네온 느낌<br>카테고리: 공략, 리뷰, 질문<br>아이콘: 게임패드, 별점</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🍜</div><div class="wda-fcard-ttl">맛집 후기</div><div class="wda-fcard-dsc">이름: "Food Review"<br>색상: 따뜻한 오렌지/빨간색<br>정보: 음식점명, 별점, 가격대<br>아이콘: 음식, 별점, 위치</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📚</div><div class="wda-fcard-ttl">스터디 모임</div><div class="wda-fcard-dsc">이름: "Study Together"<br>색상: 깔끔한 파란색/초록색<br>정보: 스터디명, 모집인원, 일시<br>아이콘: 책, 시계, 그룹</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🐾</div><div class="wda-fcard-ttl">펫 커뮤니티</div><div class="wda-fcard-dsc">이름: "Pet Community"<br>색상: 귀여운 파스텔 톤<br>정보: 펫 종류, 나이, 특징<br>아이콘: 동물, 하트, 발바닥</div></div>
</div>

---

## 🔍 3단계: 강사와 함께 UI 검토 (10분)

각자 만든 UI 디자인을 보면서 **"이거 구현 가능한가요?"** 함께 토론하고, 현실적인 수정사항을 결정합니다.

<div class="wda-steps" style="width:100%;max-width:none;margin-left:0;margin-right:0;text-align:left;box-sizing:border-box;">
<div class="wda-step" style="display:flex;align-items:flex-start;justify-content:flex-start;text-align:left;"><div class="wda-snum">1</div><div class="wda-sbody" style="flex:1;min-width:0;text-align:left;"><div class="wda-sttl" style="text-align:left;">로그인 페이지 분석</div><div class="wda-sdsc" style="text-align:left;">"로그인 페이지에서 필요한 정보가 뭘까요?"</div></div></div>
<div class="wda-step" style="display:flex;align-items:flex-start;justify-content:flex-start;text-align:left;"><div class="wda-snum">2</div><div class="wda-sbody" style="flex:1;min-width:0;text-align:left;"><div class="wda-sttl" style="text-align:left;">게시물 목록 분석</div><div class="wda-sdsc" style="text-align:left;">"게시물 목록에서 보여줄 정보는 어떤 것들이 있나요?"</div></div></div>
<div class="wda-step" style="display:flex;align-items:flex-start;justify-content:flex-start;text-align:left;"><div class="wda-snum">3</div><div class="wda-sbody" style="flex:1;min-width:0;text-align:left;"><div class="wda-sttl" style="text-align:left;">댓글 기능 분석</div><div class="wda-sdsc" style="text-align:left;">"댓글 기능에서는 어떤 데이터가 필요할까요?"</div></div></div>
<div class="wda-step" style="display:flex;align-items:flex-start;justify-content:flex-start;text-align:left;"><div class="wda-snum">4</div><div class="wda-sbody" style="flex:1;min-width:0;text-align:left;"><div class="wda-sttl" style="text-align:left;">구현 가능성 검토</div><div class="wda-sdsc" style="text-align:left;">"이 디자인대로 구현하려면 어떤 준비가 필요할까요?"</div></div></div>
</div>

<div class="wda-callout wda-ci">
  <span class="wda-clabel">다음 단계 예고</span>UI 기획이 완료되면 4단계에서는 이 UI를 보면서 "어떤 데이터베이스가 필요한지" 함께 찾아내는 훈련을 합니다.<br>로그인 화면 → users 테이블 · 게시물 목록 → posts 테이블 · 댓글 → comments 테이블
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>오늘은 DB를 먼저 설계하지 않고, <strong>화면(UI)을 먼저 보고</strong> 필요한 DB 구조를 역으로 추론하는 훈련을 한다.</li>
    <li>커뮤니티 주제·이름·색상 테마·분위기·특별 기능은 <strong>각자 원하는 대로</strong> 자유롭게 정한다.</li>
    <li>기획서는 <strong>커뮤니티 주제 / 디자인 스타일 / 특별한 기능 / 페이지별 특징 / 참고 사이트</strong> 항목으로 구성한다.</li>
    <li>로그인 화면 → <strong>users</strong> 테이블, 게시물 목록 → <strong>posts</strong> 테이블, 댓글 → <strong>comments</strong> 테이블로 연결된다.</li>
    <li>작성한 기획서는 <strong>5단계</strong>에서 데이터베이스 구조서와 통합되어 최종 프로젝트 문서가 된다.</li>
  </ul>
</div>

**✅ 실수 방지 체크**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 남들과 비슷한 커뮤니티 주제·색상을 그대로 따라간다?</div>
    <div class="wda-mistake-right">방지: 자신만의 주제·색상 테마·분위기를 직접 선택해 개성 있는 기획서를 만든다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 기능을 무작정 많이 넣고 구현 가능성은 확인하지 않는다?</div>
    <div class="wda-mistake-right">방지: 3단계에서 강사와 함께 "이거 구현 가능한가요?"를 검토하며 현실적인 수정사항을 결정한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 기획서를 작성하다 막히면 혼자 끙끙댄다?</div>
    <div class="wda-mistake-right">방지: 막히는 부분은 강사나 옆 사람과 상의하며 채워나간다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 작성한 기획서를 저장하지 않고 넘어간다?</div>
    <div class="wda-mistake-right">방지: 완료된 기획서는 메모장에 저장해 5단계에서 DB 구조서와 통합할 수 있도록 보관한다.</div>
  </div>
</div>

**🎯 완성 기준**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">기준 1 · 기획서</div>
    <div class="wda-formula-block-body"><code>커뮤니티 주제 + 디자인 스타일 작성 완료</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">기준 2 · 페이지 특징</div>
    <div class="wda-formula-block-body"><code>로그인·목록·상세·댓글 화면 특징 정리</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">기준 3 · 검토</div>
    <div class="wda-formula-block-body"><code>강사와 구현 가능성 함께 확인</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">오늘 학습 방식의 특별한 점은?</div>
    <div class="wda-flip-back">DB를 먼저 설계하지 않고 UI를 먼저 보고 필요한 DB 구조를 역으로 찾아낸다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">기획서에 들어가는 항목은?</div>
    <div class="wda-flip-back">커뮤니티 주제, 디자인 스타일, 특별한 기능, 페이지별 특징, 참고 사이트다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">로그인 화면은 어떤 테이블과 연결되나?</div>
    <div class="wda-flip-back">users 테이블과 연결된다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">게시물 목록은 어떤 테이블과 연결되나?</div>
    <div class="wda-flip-back">posts 테이블과 연결된다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">오늘 만든 기획서는 다음에 어떻게 쓰이나?</div>
    <div class="wda-flip-back">5단계에서 데이터베이스 구조서와 통합되어 최종 프로젝트 문서가 된다.</div>
  </div>
</div>

<div class="wda-done">
  <div class="wda-done-ico">✏️</div><div class="wda-done-ttl">UI 기획 완료!</div><div>각자만의 커뮤니티 사이트 UI를 기획했습니다.<br>작성한 기획서는 5단계에서 데이터베이스 구조와 함께 통합하여 최종 프로젝트 문서로 만들 예정입니다.<br>지금은 메모장에 저장해두세요!</div>
</div>
