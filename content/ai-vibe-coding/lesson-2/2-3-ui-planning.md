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
.wda-sttl{font-size:.81rem;font-weight:700;margin-bottom:2px;text-align:left}
.wda-sdsc{font-size:.78rem;opacity:.7;line-height:1.5;text-align:left}
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
p:has(> strong:only-child){margin-top:1.6rem;margin-bottom:.2rem}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem}
</style>

## 🎯 학습 목표

<div class="wda-goal" style="position:relative;padding-right:192px;">
  <img src="/images/character/공부 시작.webp" alt="" style="position:absolute;width:130px;bottom:-16px;right:28px;z-index:3;pointer-events:none;opacity:.91;transform:rotate(10deg);">
  👁️ <strong>UI → DB 사고</strong> — 화면을 보고 필요한 데이터 구조를 역으로 추론하는 방식 체험<br>✏️ <strong>나만의 커뮤니티 기획</strong> — 주제·색상·기능을 직접 선택하여 개성 있는 사이트 기획<br>💬 <strong>토론과 협업</strong> — 강사·동료와 함께 아이디어를 발전시키는 워크숍 경험
</div>

---

## 🔄 새로운 학습 방식: UI → DB 순서

<div class="wda-callout wda-ci" style="position:relative;padding-left:158px;">
  <img src="/images/character/번뜩.webp" alt="" style="position:absolute;width:105px;top:-22px;left:22px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(-12deg);">
  <span class="wda-clabel">오늘의 특별한 접근법</span>일반적으로는 DB를 먼저 설계하고 UI를 만들지만, 오늘은 시각적인 UI를 먼저 보고 → 필요한 DB 구조를 찾아내는 훈련을 합니다. 화면에 보이는 정보에서 출발하면 DB 개념이 훨씬 직관적으로 이해됩니다!
</div>

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">👁️</div><div class="wda-fcard-ttl">직관적 이해</div><div class="wda-fcard-dsc">"이 화면에 이런 정보가 보이니까 DB에도 이런 필드가 필요하구나!"</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🎯</div><div class="wda-fcard-ttl">현실적 설계</div><div class="wda-fcard-dsc">실제 사용할 화면을 보고 DB를 만들어서 불필요한 필드가 없음</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📐</div><div class="wda-fcard-ttl">웹디자이너 역량</div><div class="wda-fcard-dsc">DB 구조를 생각하며 UI를 설계하는 전문성 향상</div></div>
</div>

---

## 🎬 1단계: 강사 기본 디자인 시연 (10분)

<div class="wda-callout wda-cs" style="position:relative;padding-right:56px;">
  <img src="/images/decoration/전구 아이콘.webp" alt="" style="position:absolute;width:36px;top:50%;right:12px;margin-top:-18px;z-index:2;pointer-events:none;opacity:.68;transform:rotate(8deg);">
  <span class="wda-clabel">강사 진행 안내</span>강사가 화면에 간단한 와이어프레임을 그리면서 기본 커뮤니티 사이트 구조를 보여드립니다. "이런 느낌으로 만들어볼 건데, 어떤 부분을 바꾸고 싶나요?"
</div>

기본 로그인 페이지 구성 요소:

<div class="wda-memo" style="position:relative;padding-top:18px;">
  <img src="/images/decoration/마스킹 테이프 (7).webp" alt="" style="position:absolute;width:110px;top:-22px;right:22px;z-index:1;pointer-events:none;opacity:.85;transform:rotate(6deg);">
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

<div class="wda-steps" style="position:relative;overflow:visible;">
  <img src="/images/decoration/종이 클립 아이콘 (3).webp" alt="" style="position:absolute;width:62px;top:-24px;right:28px;z-index:2;pointer-events:none;opacity:.80;transform:rotate(8deg);">
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

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/별 아이콘 (7).webp" alt="" style="position:absolute;width:48px;top:-20px;left:12%;z-index:2;pointer-events:none;opacity:.62;transform:rotate(-14deg);">
</div>

---

## 🎨 수정 아이디어 예시

어떻게 수정할지 고민된다면 아래 예시를 참고하세요.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🎮</div><div class="wda-fcard-ttl">게임 커뮤니티</div><div class="wda-fcard-dsc">이름: "Game Community"<br>색상: 어둡고 네온 느낌<br>카테고리: 공략, 리뷰, 질문<br>아이콘: 게임패드, 별점</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🍜</div><div class="wda-fcard-ttl">맛집 후기</div><div class="wda-fcard-dsc">이름: "Food Review"<br>색상: 따뜻한 오렌지/빨간색<br>정보: 음식점명, 별점, 가격대<br>아이콘: 음식, 별점, 위치</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📚</div><div class="wda-fcard-ttl">스터디 모임</div><div class="wda-fcard-dsc">이름: "Study Together"<br>색상: 깔끔한 파란색/초록색<br>정보: 스터디명, 모집인원, 일시<br>아이콘: 책, 시계, 그룹</div></div>
<div class="wda-fcard" style="position:relative;overflow:visible;"><img src="/images/decoration/반짝이 아이콘 (2).webp" alt="" style="position:absolute;width:52px;top:-22px;right:-12px;z-index:2;pointer-events:none;opacity:.66;transform:rotate(12deg);"><div class="wda-fcard-ico">🐾</div><div class="wda-fcard-ttl">펫 커뮤니티</div><div class="wda-fcard-dsc">이름: "Pet Community"<br>색상: 귀여운 파스텔 톤<br>정보: 펫 종류, 나이, 특징<br>아이콘: 동물, 하트, 발바닥</div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/반짝이 아이콘 (5).webp" alt="" style="position:absolute;width:46px;top:-16px;right:16%;z-index:2;pointer-events:none;opacity:.58;transform:rotate(20deg);">
</div>

---

## 🔍 3단계: 강사와 함께 UI 검토 (10분)

각자 만든 UI 디자인을 보면서 **"이거 구현 가능한가요?"** 함께 토론하고, 현실적인 수정사항을 결정합니다.

<div class="wda-steps" style="width:100%;max-width:none;margin-left:0;margin-right:0;position:relative;overflow:visible;padding-right:44px;text-align:left;box-sizing:border-box;">
  <img src="/images/decoration/꽃 아이콘 (2).webp" alt="" style="position:absolute;width:62px;top:16px;right:8px;z-index:2;pointer-events:none;opacity:.64;transform:rotate(10deg);">
<div class="wda-step" style="display:flex;align-items:flex-start;justify-content:flex-start;text-align:left;"><div class="wda-snum">1</div><div class="wda-sbody" style="flex:1;min-width:0;text-align:left;"><div class="wda-sttl" style="text-align:left;">로그인 페이지 분석</div><div class="wda-sdsc" style="text-align:left;">"로그인 페이지에서 필요한 정보가 뭘까요?"</div></div></div>
<div class="wda-step" style="display:flex;align-items:flex-start;justify-content:flex-start;text-align:left;"><div class="wda-snum">2</div><div class="wda-sbody" style="flex:1;min-width:0;text-align:left;"><div class="wda-sttl" style="text-align:left;">게시물 목록 분석</div><div class="wda-sdsc" style="text-align:left;">"게시물 목록에서 보여줄 정보는 어떤 것들이 있나요?"</div></div></div>
<div class="wda-step" style="display:flex;align-items:flex-start;justify-content:flex-start;text-align:left;"><div class="wda-snum">3</div><div class="wda-sbody" style="flex:1;min-width:0;text-align:left;"><div class="wda-sttl" style="text-align:left;">댓글 기능 분석</div><div class="wda-sdsc" style="text-align:left;">"댓글 기능에서는 어떤 데이터가 필요할까요?"</div></div></div>
<div class="wda-step" style="display:flex;align-items:flex-start;justify-content:flex-start;text-align:left;"><div class="wda-snum">4</div><div class="wda-sbody" style="flex:1;min-width:0;text-align:left;"><div class="wda-sttl" style="text-align:left;">구현 가능성 검토</div><div class="wda-sdsc" style="text-align:left;">"이 디자인대로 구현하려면 어떤 준비가 필요할까요?"</div></div></div>
</div>

<div class="wda-callout wda-ci" style="position:relative;padding-right:64px;">
  <img src="/images/decoration/책갈피 아이콘 (2).webp" alt="" style="position:absolute;width:48px;top:50%;right:10px;margin-top:-24px;z-index:2;pointer-events:none;opacity:.68;transform:rotate(-8deg);">
  <span class="wda-clabel">다음 단계 예고</span>UI 기획이 완료되면 4단계에서는 이 UI를 보면서 "어떤 데이터베이스가 필요한지" 함께 찾아내는 훈련을 합니다. 로그인 화면 → users 테이블 · 게시물 목록 → posts 테이블 · 댓글 → comments 테이블
</div>

<div class="wda-done" style="position:relative;padding-right:238px;">
  <img src="/images/character/화이팅.webp" alt="" style="position:absolute;width:188px;top:-24px;right:6px;z-index:3;pointer-events:none;opacity:.91;transform:rotate(-12deg);">
  <img src="/images/decoration/하트 아이콘 (6).webp" alt="" style="position:absolute;width:80px;top:6px;left:16px;z-index:2;pointer-events:none;opacity:.58;transform:rotate(13deg);">
  <div class="wda-done-ico">✏️</div><div class="wda-done-ttl">UI 기획 완료!</div><div>각자만의 커뮤니티 사이트 UI를 기획했습니다. 작성한 기획서는 5단계에서 데이터베이스 구조와 함께 통합하여 최종 프로젝트 문서로 만들 예정입니다. 지금은 메모장에 저장해두세요!</div>
</div>
