---
title: "1-4: 이미지 분석으로 컬러 팔레트 추출"
category: "ai-vibe-coding"
section: "lesson-1"
description: "원하는 웹사이트 스크린샷을 Claude에게 투입하여 컬러 분석 후 디자인 시스템 문서로 정리하는 실습입니다."
tags:
  - ai-vibe-coding
  - lesson-1
  - color-palette
  - design-system
  - image-analysis
date: "2026-06-11"
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

원하는 웹사이트 스크린샷을 Claude에게 투입하여 컬러 분석 후 디자인 시스템 문서로 정리하는 실습입니다.

---

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>이미지 분석 활용</strong> — Claude CLI에 이미지를 투입하여 시각적 분석을 수행합니다.<br>
  • <strong>컬러 추출 기법</strong> — 웹사이트의 색상 체계를 분석하여 체계적인 컬러 팔레트를 도출합니다.<br>
  • <strong>디자인 시스템 구축</strong> — 추출한 컬러를 구조화된 문서로 체계화합니다.<br>
  • <strong>실무 워크플로우</strong> — 디자이너-개발자 협업에서 실제로 사용하는 방법론을 익힙니다.
</div>

---

## 📖 개념 설명

실습에 앞서 핵심 개념들을 명확히 이해해봅시다.

<div class="wda-memo">
  <span class="wda-memo-label">📖 핵심 용어 정의</span>
  <div class="wda-memo-body">
    🎨 <strong>컬러팔레트</strong> — 일관된 시각적 경험을 위해 선별된 색상들의 체계적 조합<br>
    📐 <strong>디자인 시스템</strong> — 색상·타이포그래피·컴포넌트를 표준화한 규칙과 가이드라인<br>
    🔑 <strong>디자인토큰</strong> — 디자인 결정사항을 CSS 변수·JSON·SCSS로 코드화한 최소 단위
  </div>
</div>

### 🎨 컬러팔레트(Color Palette)란?

**📌 개념**

<div class="wda-callout wda-ci">
  웹사이트나 앱에서 일관된 시각적 경험을 위해 선별된 색상들의 조합입니다.<br>
  브랜드 정체성을 표현하고 사용자에게 특정한 감정이나 인상을 전달합니다.
</div>

컬러팔레트는 역할에 따라 4가지로 구성됩니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">🔵</div><div class="wda-fcard-ttl">Primary</div><div class="wda-fcard-dsc">브랜드 메인 색상</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🟢</div><div class="wda-fcard-ttl">Secondary</div><div class="wda-fcard-dsc">보조 색상</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">⭐</div><div class="wda-fcard-ttl">Accent</div><div class="wda-fcard-dsc">강조점 색상</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">⬜</div><div class="wda-fcard-ttl">Neutral</div><div class="wda-fcard-dsc">배경, 텍스트 색상</div></div>
</div>

### 📐 디자인 시스템(Design System)이란?

**📌 개념**

<div class="wda-callout wda-ci">
  디자인 일관성을 유지하기 위한 규칙과 가이드라인의 체계입니다.<br>
  색상, 타이포그래피, 간격, 컴포넌트 등을 표준화한 문서로 팀 전체가 동일한 기준으로 개발합니다.
</div>

<div class="wda-memo">
  <span class="wda-memo-label">📌 디자인 시스템의 핵심 가치</span>
  <div class="wda-memo-body">
    ♻️ <strong>효율성</strong> — 재사용 가능한 컴포넌트 &nbsp;·&nbsp; 🧩 <strong>일관성</strong> — 통일된 브랜드 경험<br>
    🤝 <strong>협업</strong> — 디자이너-개발자 소통 개선 &nbsp;·&nbsp; 🔧 <strong>확장성</strong> — 유지보수 용이성
  </div>
</div>

### 🔑 디자인토큰(Design Token)이란?

**📌 개념**

<div class="wda-callout wda-ci">
  디자인 결정사항을 코드로 표현한 최소 단위입니다.<br>
  색상, 크기, 간격 등을 변수로 관리하여 일관성을 보장하고, CSS 변수 / JSON / SCSS 등으로 관리합니다.
</div>

```css
--color-primary: #2563eb;

--spacing-lg: 24px;

--font-size-heading: 2rem;
```

---

## ⚡ Claude를 활용한 컬러팔레트 추출의 혁신성

<div class="wda-callout wda-cw">
  <span class="wda-clabel">기존 방식 vs 혁신</span>
  기존에는 디자이너가 수동으로 컬러를 선별하거나 전문 도구를 사용해야 했습니다.<br>
  Claude의 이미지 분석 기능을 활용하면 이 과정이 획기적으로 달라집니다.
</div>

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">⚡</div><div class="wda-fcard-ttl">빠른 분석</div><div class="wda-fcard-dsc">이미지 한 장으로 수초 내에 완전한 컬러 팔레트 추출</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🎯</div><div class="wda-fcard-ttl">정확한 분석</div><div class="wda-fcard-dsc">AI가 시각적 위계와 색상 관계를 정확히 파악하여 체계적 분류</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">✅</div><div class="wda-fcard-ttl">바로 사용 가능</div><div class="wda-fcard-dsc">Hex 코드와 CSS 변수로 즉시 개발에 적용 가능한 형태 제공</div></div>
</div>

---

## 💡 실습 개요

마음에 드는 웹사이트를 캡쳐하고, Claude에게 분석을 맡겨서 체계적인 컬러 팔레트와 디자인 시스템 문서를 완성합니다.

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">웹사이트 캡쳐</div><div class="wda-sdsc">마음에 드는 웹사이트를 스크린샷으로 캡쳐하고 VSCode에 붙여넣기</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">컬러 분석</div><div class="wda-sdsc">Claude CLI에 이미지를 드래그하여 체계적인 컬러 분석 요청</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">디자인 시스템 문서화</div><div class="wda-sdsc">추출한 컬러를 포트폴리오에 적용할 수 있는 문서로 정리</div></div></div>
</div>

---

## 💻 실습 진행

**✅ 원하는 웹사이트 캡쳐하기**

마음에 드는 웹사이트의 디자인을 스크린샷으로 캡쳐하여 VSCode에 저장합니다.

#### Windows 캡쳐 단축키

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">전체 화면</div><div class="wda-fcard-dsc"><code>Print Screen</code></div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">영역 선택</div><div class="wda-fcard-dsc"><code>Windows + Shift + S</code></div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">창 캡쳐</div><div class="wda-fcard-dsc"><code>Alt + Print Screen</code></div></div>
</div>

캡쳐 후 클립보드에 자동 저장됩니다.

#### VSCode에 붙여넣기

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">저장 위치 선택</div><div class="wda-sdsc">VSCode 파일 탐색기에서 원하는 위치 클릭</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">이미지 붙여넣기</div><div class="wda-sdsc">Ctrl + V 로 붙여넣기</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">파일명 입력</div><div class="wda-sdsc">파일명 입력 (예: <code>website-capture.png</code>) — 이미지가 프로젝트 폴더에 자동 저장됩니다.</div></div></div>
</div>

**✅ Claude CLI로 컬러 분석하기**

저장된 이미지를 Claude CLI (루트 디렉토리 터미널)에 드래그하여 체계적인 컬러 분석을 요청합니다.

#### 이미지 드래그 방법

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">이미지 파일 찾기</div><div class="wda-sdsc">VSCode 파일 탐색기에서 저장된 이미지 파일 찾기</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">드래그 시작</div><div class="wda-sdsc">이미지 파일을 마우스로 클릭한 채 드래그</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">터미널에 드롭</div><div class="wda-sdsc">세 번째 터미널 (Claude CLI 루트)에 드롭</div></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">인식 확인</div><div class="wda-sdsc">Claude가 이미지를 인식했는지 확인</div></div></div>
</div>

**💡 사용 팁**

<div class="wda-callout wda-cw">
  이미지를 Claude CLI 터미널에 드래그하면 AI가 이미지를 직접 읽고 색상을 분석합니다.<br>
  이미지 파일 경로가 자동으로 입력됩니다.
</div>

<div class="wda-prompt-head">📋 컬러 분석 프롬프트 — 아래 코드 블록 전체를 복사하여 붙여넣으세요.</div>

```
이 웹사이트 이미지를 분석해서 컬러 팔레트를 추출해줘.

다음 형식으로 정리해줘:

## 메인 컬러 분석
- **Primary Color**: 가장 눈에 띄는 주요 색상 (Hex 코드)
- **Secondary Color**: 보조 색상 (Hex 코드)
- **Accent Color**: 강조점에 사용된 색상 (Hex 코드)

## 전체 컬러 팔레트
- **Background**: 배경색들 (2-3개)
- **Text Colors**: 텍스트 색상들 (2-3개)
- **Border/Outline**: 테두리 색상들
- **Interactive**: 버튼, 링크 등 상호작용 요소 색상들

## 컬러 사용 비율
각 색상이 차지하는 대략적인 비율과 사용 목적

## 디자인 특징
이 색상 조합이 만드는 전체적인 분위기와 브랜드 느낌

실제 웹 개발에 바로 사용할 수 있도록 정확한 Hex 코드로 제공해줘.
```

**✅ 디자인 시스템 문서 만들기**

분석 결과를 바탕으로 포트폴리오 프로젝트에 적용할 수 있는 체계적인 디자인 시스템 문서를 생성합니다.

<div class="wda-prompt-head">📋 디자인 시스템 문서화 프롬프트 — 아래 코드 블록 전체를 복사하여 붙여넣으세요.</div>

```
위에서 분석한 컬러 팔레트를 기반으로 "컬러 팔레트 디자인 시스템.md" 파일을 생성해줘.

다음 구조로 만들어줘:

# 컬러 팔레트 디자인 시스템

## 프로젝트 정보
- **출처 웹사이트**: [웹사이트명]
- **분석 날짜**: [현재 날짜]
- **적용 프로젝트**: 포트폴리오 웹사이트

## CSS 변수 정의

:root {
  /* Primary Colors */
  --color-primary: #[hex코드];
  --color-primary-light: #[hex코드];
  --color-primary-dark: #[hex코드];

  /* Secondary Colors */
  --color-secondary: #[hex코드];
  --color-accent: #[hex코드];

  /* Background Colors */
  --color-bg-primary: #[hex코드];
  --color-bg-secondary: #[hex코드];

  /* Text Colors */
  --color-text-primary: #[hex코드];
  --color-text-secondary: #[hex코드];
  --color-text-muted: #[hex코드];

  /* Interactive Colors */
  --color-button-primary: #[hex코드];
  --color-button-hover: #[hex코드];
  --color-link: #[hex코드];
  --color-link-hover: #[hex코드];
}

## 컬러 사용 가이드
각 색상을 언제, 어떻게 사용할지에 대한 구체적인 가이드라인

## 반응형 고려사항
다크모드나 다양한 화면에서의 색상 적용 방법

파일을 직접 생성해서 저장해줘.
```

<div class="wda-callout wda-cs">
  <span class="wda-clabel">완료 확인</span>
  생성된 <strong>"컬러 팔레트 디자인 시스템.md"</strong> 파일이 프로젝트 폴더에 저장되었는지 확인하세요.<br>
  이 문서는 다음 단계에서 포트폴리오 프로젝트에 직접 적용됩니다!
</div>

---

## 📝 체크포인트

다음 항목들이 모두 완료되었는지 확인하세요.

- [ ] 마음에 드는 웹사이트 선택 및 캡쳐 완료
- [ ] VSCode에 이미지 파일 저장 완료
- [ ] Claude CLI (루트)에 이미지 드래그 성공
- [ ] 컬러 분석 프롬프트 실행 완료
- [ ] 체계적인 컬러 팔레트 추출 완료
- [ ] 디자인 시스템 문서 생성 완료
- [ ] "컬러 팔레트 디자인 시스템.md" 파일 저장 확인
- [ ] CSS 변수 형태의 컬러 코드 확보

<div class="wda-done" style="margin-top:2.2rem;">
  <div class="wda-done-ico">🎨</div>
  <div class="wda-done-ttl">컬러 팔레트 추출 완료!</div>
  <div>원하는 웹사이트의 컬러를 분석하고 디자인 시스템 문서까지 구축했습니다.<br>이제 디자이너처럼 색상을 분석하고 개발자처럼 코드로 관리할 수 있습니다!</div>
</div>

