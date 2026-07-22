---
title: "3-2: 강사와 함께 모바일 UI 기획하기"
category: "ai-vibe-coding"
section: "lesson-3"
description: "강사의 UI 샘플 시연을 참고하여 나만의 모바일 앱 UI를 기획하고, 기획서를 직접 작성해봅니다."
tags:
  - ai-vibe-coding
  - lesson-3
  - mobile
  - ui
  - planning
date: "2026-06-11"
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
  • <strong>UI 관찰력</strong> — 실제 앱 UI를 보고 디자인 원칙과 사용성 포인트를 찾아낼 수 있다<br>
  • <strong>기획서 작성</strong> — 화면별 레이아웃 · 색상 · 주요 기능을 기획서 형태로 정리할 수 있다<br>
  • <strong>토론과 피드백</strong> — 아이디어를 언어로 설명하고 다른 사람의 의견을 반영할 수 있다<br>
  • <strong>모바일 UX 이해</strong> — 데스크톱과 다른 모바일만의 UI/UX 특성을 이해한다
</div>

---

## 📋 오늘 진행 순서 (총 40분)

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">강사 UI 샘플 시연 (10분)</div><div class="wda-sdsc">실제 앱 UI 샘플들을 보면서 디자인 패턴과 UX 포인트 함께 분석</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">강사와 함께 토론 (15분)</div><div class="wda-sdsc">내가 만들고 싶은 앱의 방향성을 강사·동료와 함께 논의하며 아이디어 구체화</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">개인 기획서 작성 (10분)</div><div class="wda-sdsc">토론 내용을 바탕으로 나만의 모바일 UI 기획서 템플릿 작성</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">발표 및 피드백 (5분)</div><div class="wda-sdsc">자발적 발표 후 강사와 학생들의 피드백 공유</div></div></div>
</div>

---

## 🖥️ 1단계: 강사 UI 샘플 시연 (10분)

강사가 실제 앱 UI 샘플들을 화면에 보여주면서 각각의 디자인 특징과 사용성 포인트를 설명합니다.

<div class="wda-callout wda-cs">
  <span class="wda-clabel">강사 시연 — 3가지 관점으로 분석</span>
  📱 <strong>SNS 디자인 측면</strong> — 컬러 팔레트는 어떻게 구성되어 있나요? 텍스트 크기 계층은 어떻게 되나요?<br>
  👆 <strong>모바일 사용성 측면</strong> — 엄지손가락 하나로 모두 조작 가능한가요? 버튼은 충분히 크게 설계되어 있나요?<br>
  ✨ <strong>SNS 기능 측면</strong> — 피드 · 프로필 · 글쓰기 · 알림 네비게이션이 어떻게 구성되나요?
</div>

시연 중 함께 확인할 포인트:

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🎨</div><div class="wda-fcard-ttl">디자인 스타일</div><div class="wda-fcard-dsc">색상 테마 · 폰트 크기 계층 · 아이콘 스타일 · 여백(패딩/마진) 사용 방식</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📐</div><div class="wda-fcard-ttl">레이아웃 구조</div><div class="wda-fcard-dsc">상단 헤더 · 하단 탭 바 · 콘텐츠 영역 · 플로팅 버튼 위치</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">✅</div><div class="wda-fcard-ttl">사용성 (UX)</div><div class="wda-fcard-dsc">터치 영역 크기 · 스크롤 방식 · 피드백 인터랙션 · 정보 접근 단계</div></div>
</div>

---

## 💬 2단계: 강사와 함께 토론하기 (15분)

시연을 보고 난 후, 내가 만들고 싶은 앱에 대해 강사와 함께 이야기를 나눕니다.

<div class="wda-callout wda-ci">
  <span class="wda-clabel">토론 가이드</span>
  강사와 함께 아이디어를 구체화해보세요. 아직 확실하지 않아도 괜찮습니다.
</div>

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">Q1</div><div class="wda-sbody"><div class="wda-sttl">어떤 주제의 앱을 만들고 싶나요?</div><div class="wda-sdsc">예시: 독서 기록 앱 · 운동 챌린지 앱 · 여행 사진 공유 앱 · 스터디 그룹 앱 · 반려동물 일기 앱</div></div></div>
<div class="wda-step"><div class="wda-snum">Q2</div><div class="wda-sbody"><div class="wda-sttl">주요 사용자는 누구인가요?</div><div class="wda-sdsc">나이대 · 관심사 · 언제 어디서 쓸 것 같은지 · 가장 자주 할 행동이 무엇인지</div></div></div>
<div class="wda-step"><div class="wda-snum">Q3</div><div class="wda-sbody"><div class="wda-sttl">꼭 필요한 핵심 기능 3가지는?</div><div class="wda-sdsc">너무 많은 기능을 욕심내기보다 핵심에 집중 · "이것만 있어도 쓸 것 같다"는 기능 먼저</div></div></div>
<div class="wda-step"><div class="wda-snum">Q4</div><div class="wda-sbody"><div class="wda-sttl">어떤 느낌의 디자인이 어울릴까요?</div><div class="wda-sdsc">밝고 활기찬 · 차분하고 미니멀한 · 다크 모드 · 색상 키워드 하나만 골라도 좋아요</div></div></div>
</div>

<div class="wda-memo">
  <span class="wda-memo-label">✏️ 토론에서 함께 결정할 내용</span>
  <div class="wda-memo-body">
    <strong>서비스 기본 정보:</strong> 앱 이름 · 한 줄 소개 (예: "독서 기록을 SNS처럼 공유하는 앱")<br>
    <strong>디자인 방향성:</strong> 색상 테마 · 분위기 키워드 (예: 따뜻한, 깔끔한, 다이내믹한)<br>
    <strong>핵심 화면 목록:</strong> 최소 필요한 화면 나열 (로그인 · 피드 · 글쓰기 · 프로필 등)
  </div>
</div>

---

## ✍️ 3단계: 개인 기획서 작성하기 (10분)

토론에서 나온 아이디어를 바탕으로 나만의 모바일 UI 기획서를 작성합니다.

<div class="wda-callout wda-cs">
  <span class="wda-clabel">작성 팁</span>
  📝 <strong>완벽하지 않아도 괜찮아요</strong> — 나중에 수정·보완 가능하니 지금 떠오르는 아이디어를 일단 적으세요<br>
  💡 <strong>참고 앱을 떠올려 보세요</strong> — "인스타그램의 피드 구조에 독서 기록을 더한 느낌"처럼 구체적 이미지로 표현<br>
  🎨 <strong>색상은 감각으로</strong> — 정확한 컬러코드가 없어도 "따뜻한 오렌지" 같은 키워드로 충분해요
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  ⚠️ 처음부터 너무 많은 기능을 넣으면 개발이 어려워집니다. 핵심 기능 3가지에 집중하고, 나머지는 "추가 기능 아이디어"에 메모만 해두세요.
</div>

아래 템플릿을 메모장 또는 텍스트 편집기에 복사해서 작성하세요.

```
== 나만의 모바일 UI 기획서 ==

[ 서비스 기본 정보 ]
앱 이름:
한 줄 소개: (예: "독서 기록을 친구들과 공유하는 앱")
주요 사용자: (예: 20대 독서 좋아하는 분들)

[ 디자인 방향성 ]
색상 테마: (예: 따뜻한 베이지 + 딥 그린)
분위기: (예: 감성적이고 아늑한 느낌)
참고 앱: (예: 인스타그램 느낌 + 굿노트 분위기)

[ 핵심 화면 목록 ]
1. 로그인 화면:
2. 메인 피드:
3. 글쓰기 화면:
4. 프로필 화면:
5. (선택) 기타:

[ 화면별 주요 요소 ]

로그인 화면:
- 앱 로고/이름 위치:
- 로그인 방식: (이메일/소셜 로그인 등)
- 분위기:

메인 피드:
- 게시물 카드 레이아웃: (이미지+텍스트 / 텍스트만 / 카드형 등)
- 보여줄 정보: (작성자, 날짜, 좋아요 수 등)
- 내비게이션: (하단 탭 바 구성)

글쓰기 화면:
- 입력 필드: (제목, 내용, 이미지 등)
- 특별한 기능: (해시태그, 위치, 사진 업로드 등)

프로필 화면:
- 표시할 정보: (사진, 닉네임, 소개글, 게시물 수 등)
- 내 게시물 보기 방식: (그리드형 / 리스트형 등)

[ 핵심 기능 TOP 3 ]
1.
2.
3.

[ 추가 기능 아이디어 (나중에 구현) ]
-
-

== 기획 완료 ==
```

---

## 📣 4단계: 발표 및 피드백 (5분)

작성한 기획서를 바탕으로 발표하고 강사·동료의 피드백을 받습니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🙋</div><div class="wda-fcard-ttl">발표 방식</div><div class="wda-fcard-dsc">자발적 발표 1~2명 · 앱 이름 · 주제 · 핵심 기능 3가지를 1분 안에 소개</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">👂</div><div class="wda-fcard-ttl">듣는 방법</div><div class="wda-fcard-dsc">"비슷한 아이디어가 있다면?" · "이 기능은 나도 쓰고 싶다!" 같은 반응 함께 공유</div></div>
</div>

<div class="wda-memo">
  <span class="wda-memo-label">💡 피드백 예시</span>
  <div class="wda-memo-body">
    <strong>긍정적 피드백:</strong> "독서 기록 공유 앱이라니 진짜 써보고 싶다!" · "색상 테마가 주제랑 잘 어울려요"<br>
    <strong>개선 제안:</strong> "글쓰기 화면에 해시태그 기능 추가하면 어떨까요?" · "프로필에 팔로우 기능이 있으면 더 좋을 것 같아요"<br>
    <strong>질문:</strong> "게시물은 공개/비공개 설정도 있나요?" · "사진은 몇 장까지 올릴 수 있나요?"
  </div>
</div>

---

## ✅ 완료 체크리스트

<div class="wda-callout wda-cs">
  <span class="wda-clabel">체크하기 전에</span>
  아래 항목을 하나씩 확인하며 빠진 내용은 지금 바로 채워보세요. 완벽하지 않아도 괜찮습니다!
</div>

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">✓</div><div class="wda-sbody"><div class="wda-sttl">앱 이름과 한 줄 소개 작성 완료</div><div class="wda-sdsc">어떤 앱인지 한 문장으로 설명할 수 있나요?</div></div></div>
<div class="wda-step"><div class="wda-snum">✓</div><div class="wda-sbody"><div class="wda-sttl">색상 테마와 분위기 결정</div><div class="wda-sdsc">디자인 방향성이 명확하게 정해졌나요?</div></div></div>
<div class="wda-step"><div class="wda-snum">✓</div><div class="wda-sbody"><div class="wda-sttl">핵심 화면 목록 (최소 4개)</div><div class="wda-sdsc">로그인 · 피드 · 글쓰기 · 프로필 화면 기획 완료?</div></div></div>
<div class="wda-step"><div class="wda-snum">✓</div><div class="wda-sbody"><div class="wda-sttl">핵심 기능 TOP 3 선정</div><div class="wda-sdsc">집중할 기능 3가지가 명확하게 정해졌나요?</div></div></div>
<div class="wda-step"><div class="wda-snum">✓</div><div class="wda-sbody"><div class="wda-sttl">기획서 파일 저장</div><div class="wda-sdsc">메모장이나 텍스트 파일로 저장해두셨나요?</div></div></div>
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">📁 기획서 저장 방법</span>
  작성한 기획서는 <strong>메모장(.txt) 또는 노션</strong>에 저장해두세요. 이 기획서는 다음 수업인 <strong>3-3 SNS DB 분석</strong>에서 실제 구현할 때 바로 활용됩니다!
</div>

<div class="wda-done">
  <div class="wda-done-ico">📱</div>
  <div class="wda-done-ttl">모바일 UI 기획 완료!</div>
  <div>나만의 모바일 앱 UI를 기획했습니다. 기획서를 잘 저장해두세요 — 다음 수업에서 이 기획을 실제 DB 설계와 연결하고, 이후 AI를 활용하여 실제로 구현하게 됩니다!</div>
</div>
