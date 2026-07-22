---
title: "3-4: Projects 탭 UI 설계 및 통합 구현"
category: "ai-vibe-coding"
section: "lesson-3"
description: "포트폴리오 사이트에 Projects 탭을 추가합니다. 카드 그리드 레이아웃 설계, DB 설계, image.thum.io 자동 썸네일, 통합 구현·배포까지 한 번에."
tags:
  - ai-vibe-coding
  - lesson-3
  - portfolio
  - projects
  - supabase
  - deploy
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
  • <strong>UI/UX 설계</strong> — 포트폴리오 Projects 탭의 레이아웃과 인터랙션을 직접 기획할 수 있다<br>
  • <strong>DB 설계</strong> — projects 테이블 구조를 발견하고 컬럼 설계 근거를 설명할 수 있다<br>
  • <strong>자동 썸네일</strong> — image.thum.io API를 활용하여 URL만으로 사이트 스크린샷을 자동 생성한다<br>
  • <strong>통합 구현</strong> — 기획서와 DB 구조서를 바탕으로 AI와 협력하여 포트폴리오 Projects 탭을 완성·배포한다<br>
  • <strong>문제 해결</strong> — 구현 과정에서 발생하는 일반적인 문제를 스스로 진단·해결할 수 있다
</div>

---

## 🗂️ Projects 탭이 왜 필요한가?

포트폴리오 사이트에 Projects 탭을 추가하면 내가 만든 모든 작업물을 한 화면에서 보여줄 수 있습니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🛠️</div><div class="wda-fcard-ttl">Lesson 2 프로젝트</div><div class="wda-fcard-dsc">커뮤니티 사이트 · Contact 섹션 등 Lesson 2에서 만든 결과물 전시</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📱</div><div class="wda-fcard-ttl">Lesson 3 프로젝트</div><div class="wda-fcard-dsc">미니 SNS · Projects 탭 자체 포함 · 이번 수업의 결과물</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🔮</div><div class="wda-fcard-ttl">미래 프로젝트</div><div class="wda-fcard-dsc">앞으로 만들 모든 프로젝트를 Supabase 대시보드에서 직접 추가 관리</div></div>
</div>

---

## 1단계 — UI/UX 디자인 논의

먼저 "어떤 화면을 만들 것인가"를 강사와 함께 고민합니다.

<div class="wda-callout wda-ci">
  <span class="wda-clabel">핵심 질문</span>
  👀 <strong>포트폴리오 방문자에게 무엇을 보여주고 싶나요?</strong><br>
  내 프로젝트를 한눈에 보여주는 것이 목적 → 시각적 임팩트가 중요합니다.<br><br>
  📊 <strong>어떤 정보를 우선적으로 보여줄까요?</strong><br>
  프로젝트 썸네일 · 이름 · 사용 기술 · 배포 링크 · GitHub 링크
</div>

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🖥️</div><div class="wda-fcard-ttl">PC 화면 목표</div><div class="wda-fcard-dsc">넓은 화면 활용 · 한 줄에 3개 카드 배치 · 썸네일 크게 강조 · 호버 시 정보 표시</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📱</div><div class="wda-fcard-ttl">모바일 화면 목표</div><div class="wda-fcard-dsc">세로 스크롤 최적화 · 1열 또는 2열 배치 · 터치 영역 충분히 크게 · 로딩 속도 고려</div></div>
</div>

---

## 2단계 — 레이아웃 옵션 비교

프로젝트를 어떻게 나열할지 두 가지 방식을 비교합니다.

| 비교 항목 | 카드 그리드 (추천) | 리스트형 |
|---|---|---|
| **시각적 임팩트** | 썸네일 이미지가 크게 강조됨 | 이미지 작거나 없음 |
| **정보량** | 핵심 정보만 카드에 표시 | 긴 설명 텍스트 표시 가능 |
| **반응형** | 열 수 조정으로 자연스럽게 대응 | 전환 어색할 수 있음 |
| **포트폴리오 용도** | ✅ 시각적 포트폴리오에 최적 | 기술 상세 설명 위주에 적합 |
| **대표 사례** | Dribbble · GitHub 저장소 · Behance | LinkedIn · 이력서 스타일 |

<div class="wda-callout wda-cs">
  <span class="wda-clabel">결론</span>
  포트폴리오 사이트의 목적은 <strong>"첫눈에 강한 인상"</strong>을 주는 것입니다. 카드 그리드 레이아웃이 썸네일을 크게 보여줄 수 있어 포트폴리오에 훨씬 적합합니다.
</div>

---

## 3단계 — 썸네일 카드 시스템 설계

각 프로젝트 카드에 어떤 정보를 어떻게 담을지 설계합니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🖼️</div><div class="wda-fcard-ttl">썸네일 이미지</div><div class="wda-fcard-dsc">image.thum.io API로 배포 URL에서 자동 생성 · 카드 상단 전체 차지 · 16:9 비율 권장</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📋</div><div class="wda-fcard-ttl">프로젝트 정보</div><div class="wda-fcard-dsc">프로젝트 이름 (Bold) · 한 줄 설명 · 사용 기술 태그 (React · Supabase 등) · 날짜</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🔗</div><div class="wda-fcard-ttl">링크 및 버튼</div><div class="wda-fcard-dsc">사이트 방문 버튼 · GitHub 코드 보기 링크 · 카드 전체 클릭 시 사이트로 이동</div></div>
</div>

---

## 4단계 — 인터랙션 및 마이크로 애니메이션

프로젝트 카드에 생동감을 더하는 인터랙션을 설계합니다.

<div class="wda-callout wda-cs">
  <span class="wda-clabel">호버 · 포커스 효과</span>
  🖱️ <strong>카드 위에 마우스를 올렸을 때</strong><br>
  카드 전체가 살짝 위로 올라오는 효과 (translateY(-4px))<br>
  그림자(shadow)가 더 진하게 강조되어 입체감 표현<br>
  썸네일 이미지가 약간 확대되어 관심을 유도 (scale 1.03)
</div>

<div class="wda-callout wda-ci">
  <span class="wda-clabel">로딩 · 전환 효과</span>
  ⏳ <strong>이미지 로딩 중</strong> — 스켈레톤 UI로 레이아웃 자리 유지 · 깜빡임 없이 부드럽게 전환<br>
  🌟 <strong>페이지 진입 시</strong> — 카드들이 순서대로 fade-in · 첫 방문자에게 동적인 인상<br>
  🔄 <strong>모든 transition은 0.2~0.3s</strong> — 너무 빠르거나 느리지 않게
</div>

---

## 5단계 — UI/UX 기획서 작성

설계한 내용을 기획서 형태로 정리합니다. 이 기획서는 9단계 구현 프롬프트에 직접 활용됩니다.

<div class="wda-callout wda-cs">
  <span class="wda-clabel">작성 팁</span>
  🎯 <strong>AI가 이해할 수 있는 구체적인 설명</strong>으로 작성하세요. "예쁘게 해줘"보다 "카드 그리드 3열, 호버 시 위로 4px 이동"처럼 명확하게!
</div>

아래 템플릿을 메모장 또는 텍스트 편집기에 복사해서 작성하세요.

```
== Projects 탭 UI/UX 기획서 ==

[ 목표 ]
- 포트폴리오 방문자에게 내 프로젝트를 한눈에 보여주는 시각적 갤러리

[ 레이아웃 ]
- PC: 3열 카드 그리드
- 태블릿: 2열 카드 그리드
- 모바일: 1열 세로 스크롤

[ 카드 구성 요소 ]
- 상단: 썸네일 이미지 (image.thum.io 자동 생성)
- 중간: 프로젝트 이름 (굵은 폰트)
- 중간: 한 줄 설명 텍스트
- 하단: 기술 태그 (React, Supabase 등)
- 하단: 사이트 방문 버튼, GitHub 링크

[ 필터 / 정렬 ]
- 최신순 정렬 (기본값)
- (선택) 기술 태그별 필터

[ 인터랙션 ]
- 호버: 카드 위로 4px 이동 + 그림자 강조
- 이미지 로딩: 스켈레톤 UI 표시
- 페이지 진입: 카드 순서대로 fade-in

== 기획 완료 ==
```

---

## 6단계 — 프로젝트 관리 DB 설계 필요성

<div class="wda-callout wda-cw">
  <span class="wda-clabel">현재 문제 상황</span>
  ⚠️ <strong>하드코딩의 한계</strong> — 프로젝트 정보가 코드 파일 안에 직접 작성되어 있으면, 새 프로젝트를 추가할 때마다 코드를 열고 수정한 뒤 재배포해야 합니다.<br><br>
  ✅ <strong>DB로 해결</strong> — Supabase의 projects 테이블에 저장하면, 배포 없이 대시보드에서 바로 추가·수정·삭제 가능!
</div>

---

## 7단계 — projects 테이블 구조 논의

SNS 분석과 같은 방식으로, "어떤 정보를 저장해야 할지" 강사와 함께 찾아봅니다.

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">Q1</div><div class="wda-sbody"><div class="wda-sttl">프로젝트 이름은 저장해야겠죠?</div><div class="wda-sdsc">→ title 컬럼 필요</div></div></div>
<div class="wda-step"><div class="wda-snum">Q2</div><div class="wda-sbody"><div class="wda-sttl">어떤 기술을 사용했는지도 중요하지 않을까요?</div><div class="wda-sdsc">→ skills 컬럼 필요 (배열 형태 — React, Supabase, MUI 등 여러 개)</div></div></div>
<div class="wda-step"><div class="wda-snum">Q3</div><div class="wda-sbody"><div class="wda-sttl">실제 배포된 사이트 링크는?</div><div class="wda-sdsc">→ live_url 컬럼 필요 (GitHub Pages 주소)</div></div></div>
<div class="wda-step"><div class="wda-snum">Q4</div><div class="wda-sbody"><div class="wda-sttl">코드를 볼 수 있는 GitHub 주소는?</div><div class="wda-sdsc">→ github_url 컬럼 필요</div></div></div>
<div class="wda-step"><div class="wda-snum">Q5</div><div class="wda-sbody"><div class="wda-sttl">썸네일 이미지는 어떻게 저장할까요?</div><div class="wda-sdsc">→ thumbnail_url 컬럼 필요 (image.thum.io URL 또는 직접 업로드 주소)</div></div></div>
<div class="wda-step"><div class="wda-snum">Q6</div><div class="wda-sbody"><div class="wda-sttl">프로젝트에 대한 설명도 있으면 좋겠죠?</div><div class="wda-sdsc">→ description 컬럼 필요</div></div></div>
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">발견! — projects 테이블 구조</span>
  <strong>id</strong> — 프로젝트 고유 번호 (자동 생성)<br>
  <strong>title</strong> — 프로젝트 이름<br>
  <strong>description</strong> — 프로젝트 한 줄 설명<br>
  <strong>skills</strong> — 사용 기술 목록 (배열: ["React", "Supabase", "MUI"])<br>
  <strong>github_url</strong> — GitHub 저장소 주소<br>
  <strong>live_url</strong> — 실제 배포된 사이트 주소<br>
  <strong>thumbnail_url</strong> — 썸네일 이미지 URL (image.thum.io 자동 생성 or 직접 업로드)<br>
  <strong>created_at</strong> — 프로젝트 등록 날짜
</div>

아래 템플릿을 메모장에 복사해서 나만의 DB 구조서를 완성하세요.

```
== Projects DB 구조서 ==

[ projects 테이블 ]
- id: 프로젝트 고유 번호 (자동 생성)
- title: 프로젝트 이름
- description: 프로젝트 한 줄 설명
- skills: 사용 기술 목록 (배열)
- github_url: GitHub 저장소 주소
- live_url: 실제 배포 사이트 주소
- thumbnail_url: 썸네일 이미지 URL
- created_at: 등록 날짜

[ 초기 데이터 예시 ]
프로젝트 1:
  - title: "My Community"
  - description: "React + Supabase로 만든 커뮤니티 사이트"
  - skills: ["React", "Vite", "Supabase", "MUI"]
  - github_url: https://github.com/사용자명/my-community
  - live_url: https://사용자명.github.io/my-community
  - thumbnail_url: (image.thum.io로 자동 생성)

== DB 설계 완료 ==
```

---

## 8단계 — image.thum.io API 자동 썸네일 생성

별도의 스크린샷 작업 없이 URL 하나로 사이트 썸네일을 자동 생성하는 서비스입니다.

<div class="wda-memo">
  <span class="wda-memo-label">🖼️ image.thum.io 사용법</span>
  <div class="wda-memo-body">
    <strong>URL 패턴:</strong><br>
    <code>https://image.thum.io/get/width/400/https://내사이트주소.com</code><br><br>
    <strong>예시 (포트폴리오 사이트):</strong><br>
    <code>https://image.thum.io/get/width/400/https://winter-haeum.github.io/my-community</code><br><br>
    위 URL을 img 태그의 src에 넣으면 → 해당 사이트의 스크린샷이 자동으로 표시됩니다.
  </div>
</div>

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">✅</div><div class="wda-fcard-ttl">무료 사용</div><div class="wda-fcard-dsc">별도 API 키 불필요 · 계정 가입 없이 즉시 사용 가능 · 개인 프로젝트 무료</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">⚡</div><div class="wda-fcard-ttl">자동 업데이트</div><div class="wda-fcard-dsc">사이트가 변경되면 일정 시간 후 썸네일도 자동으로 업데이트됨</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">⚠️</div><div class="wda-fcard-ttl">속도 주의</div><div class="wda-fcard-dsc">첫 로딩 시 약간 느릴 수 있음 · 스켈레톤 UI로 사용자 경험 보완 필요</div></div>
</div>

---

## 9단계 — Supabase MCP + GitHub Pages 통합 구현 프롬프트

<div class="wda-callout wda-ci">
  <span class="wda-clabel">사전 준비사항</span>
  📋 <strong>3-3에서 완성한 미니 SNS</strong> (mini_sns) 배포 URL 확인<br>
  📋 <strong>이번 단계에서 작성한 기획서 + DB 구조서</strong> 준비<br>
  📋 <strong>GitHub 사용자명</strong> 확인 (GitHub Pages URL에 필요)
</div>

PowerShell에서 lecture1 Claude를 실행하고 `/clear`로 초기화한 뒤, 아래 프롬프트를 보내세요.

<div class="wda-prompt-head">💬 Claude Code에 보낼 프롬프트</div>

```
포트폴리오 사이트에 Projects 탭을 추가해줘.

작업은 Todo 계획을 세워서 순차적으로 진행해줘.

요구사항:
1. 기존 포트폴리오 사이트에 Projects 탭/섹션 추가
2. Supabase MCP를 사용해서 projects 테이블 생성 및 연결
3. image.thum.io API를 사용하여 프로젝트 사이트 썸네일 자동 생성
4. 반응형 카드 그리드 레이아웃으로 구현
5. GitHub Pages로 재배포 (기존 워크플로우 업데이트)

Projects 기능:
1) Supabase projects 테이블에서 프로젝트 데이터 불러오기
2) 카드 그리드 형태로 프로젝트 목록 표시
3) 각 카드에 자동 썸네일 + 프로젝트 정보 + 링크 표시
4) 반응형 디자인 (PC: 3열, 태블릿: 2열, 모바일: 1열)

테이블 구조 (기획서 참고):
- projects: id, title, description, skills(배열), github_url, live_url, thumbnail_url, created_at

개발 순서:
1) Supabase에 projects 테이블 생성
2) 테스트 프로젝트 데이터 3개 삽입
3) Projects 컴포넌트 개발
4) image.thum.io 썸네일 연동
5) 기존 포트폴리오에 Projects 탭 추가
6) 반응형 레이아웃 구현
7) npm run build 및 GitHub Actions 재배포

---- 기획서 내용 (아래에 붙여넣기) -----
[여기에 5단계와 7단계에서 작성한 기획서 + DB 구조서 내용을 복사해서 붙여넣으세요]
```

### AI 자동 수행 과정

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">Supabase에 projects 테이블 생성</div><div class="wda-sdsc">MCP로 테이블 자동 생성 · RLS 보안 정책 설정 · 테스트 데이터 3개 삽입</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">ProjectCard 컴포넌트 개발</div><div class="wda-sdsc">썸네일 · 이름 · 설명 · 기술 태그 · 링크 버튼 · 호버 애니메이션 구현</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">image.thum.io 썸네일 연동</div><div class="wda-sdsc">live_url → image.thum.io URL 자동 변환 · 로딩 중 스켈레톤 UI</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">포트폴리오에 Projects 탭 추가</div><div class="wda-sdsc">기존 네비게이션에 Projects 메뉴 추가 · 카드 그리드 반응형 레이아웃</div></div></div>
<div class="wda-step"><div class="wda-snum">5</div><div class="wda-sbody"><div class="wda-sttl">GitHub Actions 재배포</div><div class="wda-sdsc">기존 워크플로우 업데이트 · 빌드 + 배포 → 완료 URL 안내</div></div></div>
</div>

---

## 10단계 — 구현 완료 후 체크리스트

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">✓</div><div class="wda-sbody"><div class="wda-sttl">Projects 탭이 포트폴리오 네비게이션에 추가되었나요?</div><div class="wda-sdsc">PC와 모바일 모두에서 메뉴가 정상 표시되는지 확인</div></div></div>
<div class="wda-step"><div class="wda-snum">✓</div><div class="wda-sbody"><div class="wda-sttl">Supabase에 projects 테이블이 생성되었나요?</div><div class="wda-sdsc">Supabase 대시보드 → Table Editor에서 확인 · 테스트 데이터 3개 있는지 확인</div></div></div>
<div class="wda-step"><div class="wda-snum">✓</div><div class="wda-sbody"><div class="wda-sttl">자동 썸네일이 정상적으로 표시되나요?</div><div class="wda-sdsc">배포된 사이트에서 프로젝트 카드 이미지가 로드되는지 확인 · 처음엔 느릴 수 있음</div></div></div>
<div class="wda-step"><div class="wda-snum">✓</div><div class="wda-sbody"><div class="wda-sttl">반응형 디자인이 모바일에서도 잘 작동하나요?</div><div class="wda-sdsc">Chrome DevTools의 모바일 시뮬레이터로 확인 · 1열 레이아웃으로 전환되는지</div></div></div>
<div class="wda-step"><div class="wda-snum">✓</div><div class="wda-sbody"><div class="wda-sttl">GitHub Pages 배포가 완료되었나요?</div><div class="wda-sdsc">GitHub → Actions 탭에서 초록색 체크 확인 · 배포 URL 접속 테스트</div></div></div>
</div>

<div class="wda-callout wda-cw">
  <span class="wda-clabel">자주 발생하는 문제 해결</span>
  🖼️ <strong>썸네일이 안 보일 때</strong> — 배포 URL이 정확한지 확인 · image.thum.io 서비스 상태 확인 · HTTPS인지 확인<br>
  🔌 <strong>Supabase 연결 오류</strong> — 환경변수(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) 설정 확인 · RLS 정책이 읽기 허용인지 확인<br>
  🚫 <strong>GitHub Pages 배포 실패</strong> — Actions 탭 로그에서 에러 확인 · npm build 에러인 경우 로컬에서 먼저 빌드 테스트
</div>

---

## 🌟 선택적 고급 기능 아이디어

기본 구현이 완료된 후 도전해볼 수 있는 추가 기능들입니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🔍</div><div class="wda-fcard-ttl">검색 및 필터</div><div class="wda-fcard-dsc">기술 스택별 필터링 (React만 보기, Supabase 포함 등) · 프로젝트 이름 키워드 검색</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📊</div><div class="wda-fcard-ttl">분석 및 통계</div><div class="wda-fcard-dsc">프로젝트 카드 클릭 수 추적 · 방문자가 어떤 프로젝트에 관심 있는지 Supabase에 기록</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">❤️</div><div class="wda-fcard-ttl">소셜 기능</div><div class="wda-fcard-dsc">방문자 좋아요 · 방명록 · 프로젝트별 댓글 · 공유 기능 (SNS 링크 공유)</div></div>
</div>

<div class="wda-done">
  <div class="wda-done-ico">🏆</div>
  <div class="wda-done-ttl">Lesson 3 마스터!</div>
  <div>웹/앱 차이 이해 → 모바일 UI 기획 → SNS DB 분석 → 미니 SNS 구현 → Projects 탭 완성까지! AI와 협력하여 실제 동작하는 서비스를 설계하고 배포하는 전체 개발 프로세스를 완전히 경험했습니다. 이제 여러분의 포트폴리오가 살아있는 작업물로 가득 찼습니다!</div>
</div>
