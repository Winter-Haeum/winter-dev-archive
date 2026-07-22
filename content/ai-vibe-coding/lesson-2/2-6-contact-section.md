---
title: "2-6: 포트폴리오 Contact 섹션 개발"
category: "ai-vibe-coding"
section: "lesson-2"
description: "포트폴리오의 Contact 섹션에 연락처 정보와 방명록 기능을 추가하여 방문자와 소통할 수 있는 완전한 연락 시스템을 구축합니다."
tags:
  - ai-vibe-coding
  - lesson-2
  - contact
  - guestbook
  - supabase
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
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-deco{position:absolute;z-index:2;pointer-events:none}
.wda-char{position:absolute;z-index:3;pointer-events:none}
@media (max-width:640px){
.wda-deco{max-width:55px !important}
.wda-char{max-width:110px !important}
.wda-goal,.wda-callout,.wda-done,.wda-memo,.wda-steps,.wda-fgrid,.wda-cbox{padding-left:16px !important;padding-right:16px !important}
}
@media (max-width:554px){
.wda-char{display:none !important}
}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>Contact 섹션 완성</strong> — 포트폴리오의 마지막 퍼즐인 연락 기능 구현<br>
  • <strong>개인정보 표시 시스템</strong> — 연락처·이메일·SNS 링크를 효과적으로 표시<br>
  • <strong>방명록 기능 개발</strong> — 방문자가 메시지를 남길 수 있는 인터랙티브 기능<br>
  • <strong>UI/DB 통합 설계</strong> — 사용자 인터페이스와 데이터베이스를 함께 고려한 설계
</div>

---

## Contact 섹션 개요

<div class="wda-callout wda-ci">
  <span class="wda-clabel">Contact 섹션이란?</span>
  포트폴리오의 Contact 섹션은 방문자가 당신에게 연락할 수 있는 중요한 창구입니다.<br>단순히 연락처만 표시하는 것이 아니라, 방문자와의 소통을 활성화하는 공간으로 발전시켜보겠습니다!
</div>

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">📧</div><div class="wda-fcard-ttl">기본 연락처 정보</div><div class="wda-fcard-dsc">이메일 주소 · 전화번호(선택) · SNS 링크 · 지역 정보(선택)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">📖</div><div class="wda-fcard-ttl">방명록 시스템</div><div class="wda-fcard-dsc">방문자 메시지 작성 · 실시간 목록 표시 · Supabase DB 연동 · 친화적 UI</div></div>
</div>

---

## 2단계: 연락처 섹션 UI 설계 및 기획 (10분)

<div class="wda-callout wda-cs">
  <span class="wda-clabel">함께 설계해요</span>
  강사와 함께 Contact 섹션의 사용자 인터페이스를 어떻게 구성할지 논의합니다.
</div>

### Contact 섹션 UI 구성 요소

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">📧</div><div class="wda-fcard-ttl">이메일 연락처</div><div class="wda-fcard-dsc">클릭 가능한 이메일 링크 · 아이콘 + 텍스트 조합 · 복사 버튼 추가 고려</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🔗</div><div class="wda-fcard-ttl">SNS 링크</div><div class="wda-fcard-dsc">GitHub, LinkedIn 등 · 아이콘 버튼 스타일 · 새 창에서 열기</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">📍</div><div class="wda-fcard-ttl">위치 정보</div><div class="wda-fcard-dsc">거주 지역 표시 · 지도 아이콘 활용 · 간단명료하게</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">💬</div><div class="wda-fcard-ttl">소개 메시지</div><div class="wda-fcard-dsc">개인 브랜딩 문구 · 친근하고 전문적 · 강조 텍스트 활용</div></div>
</div>

### UI 설계 논의 질문들

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">레이아웃 구조</div><div class="wda-sdsc">세로 나열 vs 가로 2열 구성? · 연락처 정보와 방명록의 배치 순서?</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">시각적 디자인</div><div class="wda-sdsc">MUI Card로 정보별 분리 vs 하나의 큰 카드? · 아이콘 + 텍스트 vs 버튼 스타일? · 어떤 색상 테마?</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">사용자 경험(UX)</div><div class="wda-sdsc">클릭 한 번에 이메일 열기 vs 복사 기능? · SNS 링크들을 어떻게 그룹화? · 모바일에서는 어떻게 표시?</div></div></div>
</div>

### Contact 섹션 UI 컨셉 기획 템플릿

아래 템플릿을 메모장에 복사해서 논의 결과를 기록하세요.

```
== Contact 섹션 UI 컨셉 및 느낌 ==

전체적인 느낌 (하나 선택)
[ ] 깔끔하고 심플한 느낌
[ ] 친근하고 따뜻한 느낌
[ ] 모던하고 세련된 느낌
[ ] 재미있고 개성 있는 느낌

이메일/연락처 표시 방법
[ ] 아이콘 + 텍스트로 정렬해서 보여주기
[ ] 큰 버튼 형태로 눈에 띄게
[ ] 카드 안에 정리해서 깔끔하게
[ ] 기타: _______________

SNS 링크 스타일
[ ] 동그란 아이콘 버튼들 나란히
[ ] 사각형 버튼으로 이름과 함께
[ ] 작은 아이콘들 한 줄로 정렬
[ ] 기타: _______________

색상 분위기
[ ] 검정/흰색/회색 (심플한 무채색)
[ ] 파란색 계열 (신뢰감 있는)
[ ] 따뜻한 색상 (주황, 노랑)
[ ] 기타: _______________

배치 방법
[ ] 세로로 차례대로 나열
[ ] 좌우 2개씩 나눠서 배치
[ ] 연락처 위, 방명록 아래
[ ] 기타: _______________

특별히 원하는 스타일
- 참고하고 싶은 사이트나 앱: _______________
- 꼭 포함하고 싶은 요소: _______________
- 피하고 싶은 스타일: _______________

== 컨셉 논의 완료 ==
```

---

## 3단계: 방명록 기능 UI 설계

<div class="wda-callout wda-ci">
  <span class="wda-clabel">방명록 UI 설계</span>
  방문자들이 쉽게 메시지를 남기고 다른 사람들의 메시지도 볼 수 있도록 구성합니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">✍️</div><div class="wda-fcard-ttl">방명록 작성 폼</div><div class="wda-fcard-dsc">작성자 이름 · 메시지 내용 · 소속/직업(선택) · 이메일(비공개, 선택)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">📋</div><div class="wda-fcard-ttl">방명록 목록 표시</div><div class="wda-fcard-dsc">작성자 이름 · 메시지 내용 · 작성 날짜 · 소속 정보(있는 경우)</div></div>
</div>

### 방명록 UI 설계 논의 질문들

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">방명록 레이아웃</div><div class="wda-sdsc">작성 폼이 위에? 아래에? · 목록은 몇 개씩?</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">디자인 스타일</div><div class="wda-sdsc">카드 형태? 리스트 형태? · 색상과 아이콘은?</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">사용자 경험</div><div class="wda-sdsc">작성 완료 후 피드백 방식? · 최신순 vs 오래된 순?</div></div></div>
</div>

---

## 4단계: 방명록 데이터 구조 논의

방명록에서 어떤 정보들을 받고 저장할지 함께 결정합니다.

### 방명록 정보 구성 논의 템플릿

```
== 방명록에서 받을 정보 논의 ==

기본 필수 정보 (꼭 필요한 것들)
[ ] 방명록 ID (자동으로 생성되는 번호)
[ ] 작성자 이름
[ ] 방명록 내용/메시지
[ ] 작성한 날짜/시간

연락처 관련 (선택사항)
[ ] 이메일 주소 (비공개로 저장)
[ ] 전화번호 (받을까? 안 받을까?)
[ ] SNS 계정 (인스타, 트위터 등)

추가 정보 (있으면 좋은 것들)
[ ] 소속/직업 (회사, 학교 등)
[ ] 거주 지역 (시/도 정도만)
[ ] 나이대 (20대, 30대 등)
[ ] 어떻게 알게 되었는지

재미있는 정보 (개성 있게)
[ ] 좋아하는 색깔
[ ] 한마디 키워드
[ ] 이모지 선택
[ ] 별점 평가

최종 결정된 정보 목록
1. _______________
2. _______________
3. _______________
4. _______________
5. _______________

== 논의 완료 ==
```

<div class="wda-compare">
  <div class="wda-cbox"><span class="wda-cbox-label">보안 및 개인정보</span><div class="wda-cbox-ttl">🔒 안전한 데이터 관리</div><div class="wda-cbox-body">이메일은 비공개로 저장<br>IP 주소 로깅 (스팸 방지)<br>악성 콘텐츠 필터링<br>적절한 글자 수 제한</div></div>
  <div class="wda-cbox"><span class="wda-cbox-label">성능 최적화</span><div class="wda-cbox-ttl">⚡ 빠른 로딩</div><div class="wda-cbox-body">페이지네이션 적용<br>최신 20개만 표시<br>인덱스를 통한 빠른 조회<br>자동 정렬 (최신순)</div></div>
</div>

---

## 5단계: AI에게 Contact 섹션 구현 요청

지금까지 논의한 내용을 바탕으로 AI에게 포트폴리오 Contact 섹션 구현을 요청합니다.

**⭐ 중요**

<div class="wda-callout wda-cw">
  Contact 섹션은 <strong>Home 탭의 Contact 섹션</strong>을 개발하는 것입니다. 새로운 탭을 개발하면 안 됩니다.
</div>

아래 템플릿에 앞서 논의한 내용들을 채워 넣은 후 AI에게 전달하세요.

<div class="wda-prompt-head">💬 AI에게 보낼 프롬프트</div>

```
포트폴리오 Contact 섹션 개발을 프로젝트 생성 규칙에 따라 진행해줘.

Supabase MCP를 사용해서 방명록 데이터베이스를 구축하고,
모든 개발이 완료되면 GitHub Pages로 최종 배포까지 진행해줘.
GitHub Actions 워크플로우를 사용해서 자동 배포되도록 설정하고, 배포 완료 후 접속 가능한 URL을 안내해줘.

⚠️ 중요: Contact 섹션은 Home 탭의 Contact 섹션을 개발하는 것입니다.
새로운 탭을 개발하면 안됩니다.

---- 기획안 내용 (아래에 붙여넣기) -----
[앞서 논의하고 작성한 Contact 섹션 기획안 전체 내용을 여기에 붙여넣으세요]
```

### 기획안 완성 체크리스트

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">내 연락처 정보 입력</div><div class="wda-sdsc">실제 이메일, GitHub, 지역 등 입력</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">UI 스타일 결정</div><div class="wda-sdsc">앞서 논의한 컨셉과 느낌 정리</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">방명록 정보 구성 결정</div><div class="wda-sdsc">논의한 정보 구성 결과 정리</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">빈칸 모두 채우기</div><div class="wda-sdsc">템플릿의 _____ 부분을 모두 채운 후 메모장에 저장</div></div></div>
</div>

<div class="wda-done" style="text-align:left;">
  <div class="wda-done-ico">📬</div>
  <div class="wda-done-ttl">Contact 섹션 완성 준비 완료!</div>
  <div>연락처 정보와 방명록 기능을 갖춘 완전한 Contact 섹션으로 포트폴리오를 완성합니다.<br>방문자들이 직접 메시지를 남길 수 있는 살아있는 포트폴리오가 완성됩니다!</div>
</div>
