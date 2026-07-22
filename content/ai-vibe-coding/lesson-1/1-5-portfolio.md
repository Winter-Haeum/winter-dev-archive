---
title: "1-5: 포트폴리오 사이트 제작"
category: "ai-vibe-coding"
section: "lesson-1"
description: "지금까지 학습한 모든 내용과 추출한 컬러 팔레트를 활용하여 완성도 높은 포트폴리오 사이트를 제작하는 최종 프로젝트입니다."
tags:
  - ai-vibe-coding
  - lesson-1
  - portfolio
  - react-router
  - github-pages
  - final-project
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
.wda-compare{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-cbox{flex:1 1 180px;border-radius:10px;padding:14px 16px}
.wda-cbox-label{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:8px;display:block}
.wda-cbox-ttl{font-size:1rem;font-weight:800;margin-bottom:6px}
.wda-cbox-body{font-size:.82rem;opacity:.78;line-height:1.7}
.wda-cbox-plain{background:rgba(128,128,128,.07);border:1px solid rgba(128,128,128,.18)}
.wda-cbox-plain .wda-cbox-label{color:rgba(128,128,128,.9)}
.wda-cbox-flex{background:rgba(139,92,246,.06);border:1px solid rgba(139,92,246,.25)}
.wda-cbox-flex .wda-cbox-label{color:#8b5cf6}
.wda-cbox-flex .wda-cbox-ttl{color:#8b5cf6}
.wda-prompt-head{background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.22);border-bottom:none;border-radius:10px 10px 0 0;padding:8px 14px;font-size:.78rem;font-weight:700;color:#8b5cf6;letter-spacing:.03em}
.wda-memo{background:rgba(245,158,11,.04);border:1px solid rgba(245,158,11,.2);border-radius:10px;padding:14px 16px;margin:.8rem 0 1.6rem}
.wda-memo-label{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#f59e0b;margin-bottom:8px;display:block}
.wda-memo-body{font-size:.81rem;line-height:1.6}
.wda-flow{display:flex;flex-wrap:wrap;gap:4px;margin:.8rem 0 1.6rem;align-items:center}
.wda-fnode{flex:1 1 90px;border:1px solid rgba(128,128,128,.18);border-radius:8px;padding:10px 12px;text-align:center;min-width:80px}
.wda-fnode-ico{font-size:1.1rem;margin-bottom:4px}
.wda-fnode-ttl{font-size:.88rem;font-weight:700;margin-bottom:3px}
.wda-fnode-dsc{font-size:.82rem;line-height:1.55}
.wda-farrow{color:rgba(139,92,246,.45);font-size:1.1rem;flex-shrink:0;padding:0 2px;align-self:center}
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
.wda-goal,.wda-callout,.wda-done,.wda-memo,.wda-steps,.wda-fgrid,.wda-cbox{padding-left:16px !important;padding-right:16px !important}
}
@media (max-width:554px){
.wda-char{display:none !important}
}
</style>

지금까지 학습한 모든 내용과 step5에서 추출한 컬러 팔레트를 활용하여 완성도 높은 포트폴리오 사이트를 제작하는 최종 프로젝트입니다.

---

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>종합 활용</strong> — 수업 1-1~1-5에서 학습한 모든 기술 종합 적용<br>
  • <strong>커스텀 컬러 시스템</strong> — step5에서 추출한 컬러 팔레트를 실제 프로젝트에 적용<br>
  • <strong>포트폴리오 구조 설계</strong> — 3페이지 구조의 포트폴리오 사이트 기획<br>
  • <strong>완성형 프로젝트</strong> — 실제 배포 가능한 수준의 포트폴리오 완성
</div>

---

## 📖 수업 개요

<div class="wda-callout wda-ci">
  <span class="wda-clabel">이 수업은</span>
  지금까지의 모든 학습 내용을 종합하는 <strong>최종 프로젝트</strong>입니다.<br>
  React 개발환경, UI 요소 제작, 박스모델 &amp; Flexbox, 그리고 step5에서 추출한 커스텀 컬러 팔레트까지 모든 것을 활용하여 완성도 높은 포트폴리오 사이트를 제작합니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">🧱</div><div class="wda-fcard-ttl">수업 1-1~1-3</div><div class="wda-fcard-dsc">React 개발환경, 웹 기본 개념, UI 요소 제작까지 모든 기초 기술</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">📐</div><div class="wda-fcard-ttl">수업 1-4</div><div class="wda-fcard-dsc">웹 레이아웃의 핵심인 박스모델과 Flexbox 유동적 레이아웃</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🎨</div><div class="wda-fcard-ttl">수업 1-5</div><div class="wda-fcard-dsc">이미지 분석으로 추출한 전용 컬러 시스템과 디자인 문서</div></div>
</div>

---

## 1. 포트폴리오 사이트 구조 설계

완성할 포트폴리오 사이트의 전체 구조를 미리 살펴보겠습니다.

<div class="wda-compare">
  <div class="wda-cbox wda-cbox-plain">
    <span class="wda-cbox-label">🗂️ 네비게이션 · 3개 탭</span>
    <div class="wda-cbox-ttl">3페이지 구조</div>
    <div class="wda-cbox-body">🏠 <strong>Home</strong> — 메인 페이지 (5개 섹션)<br>👤 <strong>About Me</strong> — 상세 자기소개<br>🗄️ <strong>Projects</strong> — 포트폴리오 작품 목록</div>
  </div>
  <div class="wda-cbox wda-cbox-flex">
    <span class="wda-cbox-label">🏠 Home 페이지 · 5개 섹션</span>
    <div class="wda-cbox-ttl">섹션 구성</div>
    <div class="wda-cbox-body">🦸 <strong>Hero</strong> — 메인 비주얼, 이름, 간단 소개<br>👤 <strong>About Me</strong> — 간단한 자기소개<br>🌲 <strong>Skill Tree</strong> — 기술 스택 시각화<br>🗂️ <strong>Projects</strong> — 대표작 썸네일<br>📬 <strong>Contact</strong> — 연락처, SNS, 메시지 폼</div>
  </div>
</div>

---

## 2. 포트폴리오 템플릿 생성

수업 1-1~1-3에서 학습한 내용을 종합하여 진행합니다.

**🔑 핵심 개념**

<div class="wda-callout wda-cs">
  지금까지 배운 모든 기술을 활용해 완성도 높은 포트폴리오 템플릿을 만들어봅시다!
</div>

<div class="wda-prompt-head">💬 Claude 프롬프트 — 포트폴리오 템플릿 생성</div>

```
my-portfolio라는 새로운 프로젝트를 생성해줘. 이건 포트폴리오 템플릿 사이트야.

**중요: step5에서 생성한 "컬러 팔레트 디자인 시스템.md" 파일의 CSS 변수들을 읽어서 적용해줘.**

React Router를 사용해서 다음 구조로 만들어줘:

1. 네비게이션: Home, About Me, Projects 3개 탭

2. Home 페이지 구성 (5개 섹션으로 나누어서):
   - Hero 섹션: "여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다."
   - About Me 섹션: "여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다."
   - Skill Tree 섹션: "여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다."
   - Projects 섹션: "여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다."
   - Contact 섹션: "여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다."

3. About Me 페이지: "About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다."

4. Projects 페이지: "Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다."

**디자인 요구사항:**
- 컬러 팔레트 디자인 시스템.md의 CSS 변수를 theme.js나 CSS 파일에 적용
- 각 섹션은 MUI Card나 Box로 구분하되 추출한 컬러 사용
- 기본적인 디자인이지만 선택한 컬러 테마가 잘 드러나도록 구성
- 반응형 중앙정렬 반드시 적용
- 텍스트 위주 구성으로 각 섹션 역할이 명확히 보이도록

완성 후에는 npm build를 실행하고 빌드된 정적 파일을 GitHub Pages로 배포해줘.
GitHub Actions 워크플로우를 사용해서 자동 배포되도록 설정하고, 배포 완료 후 접속 가능한 URL을 안내해줘.
my-portfolio 프로젝트는 별도의 repo를 생성해서 거기에 배포해줘.
```

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">📱</div><div class="wda-fcard-ttl">반응형 중앙정렬</div><div class="wda-fcard-dsc">모든 섹션이 화면 크기에 따라 적절히 조정되고 중앙에 정렬</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🎨</div><div class="wda-fcard-ttl">커스텀 컬러 팔레트</div><div class="wda-fcard-dsc">step5에서 추출한 개인 맞춤형 컬러 시스템을 실제 프로젝트에 적용</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">📝</div><div class="wda-fcard-ttl">텍스트 위주 구성</div><div class="wda-fcard-dsc">각 섹션의 역할과 들어갈 내용을 명확히 이해할 수 있도록</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🧱</div><div class="wda-fcard-ttl">MUI 컴포넌트 활용</div><div class="wda-fcard-dsc">Card, Box 등을 활용한 깔끔한 섹션 구분</div></div>
</div>

---

## 3. 기대 결과물

완성될 포트폴리오 템플릿의 구조와 특징을 미리 확인해보세요.

<div class="wda-callout wda-ci">
  <span class="wda-clabel">프로젝트 구조</span>
  아래 디렉토리 구조로 생성됩니다. 각 파일의 역할을 미리 파악해두세요!
</div>

```
my-portfolio/
├── src/
│   ├── App.jsx (라우터 설정)
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── sections/
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── SkillSection.jsx
│   │       ├── ProjectsSection.jsx
│   │       └── ContactSection.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ProjectsPage.jsx
│   └── theme.js (MUI 테마)
```

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">🎯</div><div class="wda-fcard-ttl">개인 브랜딩</div><div class="wda-fcard-dsc">자신만의 특색과 강점을 명확히 드러내는 Hero 섹션</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🌲</div><div class="wda-fcard-ttl">기술 스택 시각화</div><div class="wda-fcard-dsc">보유 기술을 직관적으로 보여주는 Skill Tree 섹션</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🗂️</div><div class="wda-fcard-ttl">프로젝트 쇼케이스</div><div class="wda-fcard-dsc">대표작을 효과적으로 전시하는 Projects 섹션</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">📬</div><div class="wda-fcard-ttl">연락 방법 제공</div><div class="wda-fcard-dsc">쉽게 연락할 수 있는 Contact 섹션</div></div>
</div>

---

## 4. 실습 진행 가이드

포트폴리오 템플릿 생성 후 다음 단계를 순서대로 확인해보세요.

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">프로젝트 생성 확인</div><div class="wda-sdsc">my-portfolio 디렉토리가 생성되고 기본 파일들이 설정되었는지 확인</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">네비게이션 동작 테스트</div><div class="wda-sdsc">Home, About Me, Projects 탭을 클릭해보며 페이지 전환이 잘 되는지 확인</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">섹션 구조 확인</div><div class="wda-sdsc">Home 페이지의 5개 섹션이 순서대로 잘 배치되어 있는지 확인</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">반응형 테스트</div><div class="wda-sdsc">브라우저 창 크기를 조절해보며 중앙정렬이 잘 유지되는지 확인</div></div></div>
</div>

---

## 5. 차후 수업에서 완성할 기본 틀 마련

이번 수업에서 만든 기본 틀을 바탕으로 다음 회차에 걸쳐 완성해 나갑니다.

<div class="wda-callout wda-cs">
  <span class="wda-clabel" style="margin-bottom:8px;">앞으로의 여정</span>
  <span style="display:block;">지금 만드는 틀이 2~4회차에 걸쳐 점점 멋진 포트폴리오로 완성됩니다.<br>기초를 탄탄하게 다져두세요!</span>
</div>

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ico">2️⃣</div><div class="wda-fnode-ttl">2회차</div><div class="wda-fnode-dsc">색상 디자인 · 이미지 추가 · 애니메이션 효과</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">3️⃣</div><div class="wda-fnode-ttl">3회차</div><div class="wda-fnode-dsc">콘텐츠 채우기 · 실제 프로젝트 정보 입력</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">4️⃣</div><div class="wda-fnode-ttl">4회차</div><div class="wda-fnode-dsc">고급 기능 추가 · 배포 및 최적화</div></div>
</div>

---

## 체크포인트

다음 항목들이 모두 완료되었는지 확인하세요.

<div class="wda-memo">
  <span class="wda-memo-label">완성 확인 체크리스트</span>
  <div class="wda-memo-body">
    □ my-portfolio 프로젝트 생성 완료<br>
    □ React Router를 통한 3페이지 네비게이션 동작 확인<br>
    □ Home 페이지 5개 섹션 구분 완료<br>
    □ About Me 페이지 기본 틀 생성<br>
    □ Projects 페이지 기본 틀 생성<br>
    □ MUI Card/Box를 활용한 섹션 구분 적용<br>
    □ 반응형 중앙정렬 동작 확인<br>
    □ 블랙&화이트 무채색 디자인 적용<br>
    □ GitHub Pages 배포 완료
  </div>
</div>

---

<div class="wda-done" style="text-align:left;">
  <div class="wda-done-ico">🎉</div>
  <div class="wda-done-ttl">1회차 모든 수업을 완료하셨습니다!</div>
  <div>React 개발환경 구축부터 포트폴리오 사이트 기획까지, 현대적 웹 개발의 전체 과정을 경험하셨습니다.</div>
</div>

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">⚛️</div><div class="wda-fcard-ttl">React + Vite</div><div class="wda-fcard-dsc">현대적 React 개발환경 구축 및 프로젝트 세팅</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🧱</div><div class="wda-fcard-ttl">MUI 컴포넌트</div><div class="wda-fcard-dsc">Material-UI를 활용한 UI 컴포넌트 제작</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🗂️</div><div class="wda-fcard-ttl">포트폴리오 설계</div><div class="wda-fcard-dsc">종합적인 웹 프로젝트 구조 설계 및 구현</div></div>
</div>
