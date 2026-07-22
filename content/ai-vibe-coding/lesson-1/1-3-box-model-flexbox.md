---
title: "1-3: 박스 모델과 Flexbox 이해"
category: "ai-vibe-coding"
section: "lesson-1"
description: "웹 레이아웃의 핵심인 박스모델 개념과 Flexbox의 유동적 특성을 자연어로 이해하고, AI를 활용해 실제 네비게이션을 제작한다."
tags:
  - ai-vibe-coding
  - lesson-1
  - css
  - box-model
  - flexbox
  - layout
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
.wda-compare{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-cbox{flex:1 1 180px;border-radius:10px;padding:14px 16px}
.wda-cbox-label{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:8px;display:block}
.wda-cbox-ttl{font-size:1rem;font-weight:800;margin-bottom:6px}
.wda-cbox-body{font-size:.82rem;opacity:.78;line-height:1.6}
.wda-cbox-plain{background:rgba(128,128,128,.07);border:1px solid rgba(128,128,128,.18)}
.wda-cbox-plain .wda-cbox-label{color:rgba(128,128,128,.9)}
.wda-cbox-flex{background:rgba(139,92,246,.06);border:1px solid rgba(139,92,246,.25)}
.wda-cbox-flex .wda-cbox-label{color:#8b5cf6}
.wda-cbox-flex .wda-cbox-ttl{color:#8b5cf6}
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
.wda-goal,.wda-callout,.wda-done,.wda-memo,.wda-steps,.wda-fgrid,.wda-cbox{padding-left:16px !important;padding-right:16px !important}
}
@media (max-width:554px){
.wda-char{display:none !important}
}
</style>

웹 레이아웃의 핵심인 박스모델 개념과 Flexbox의 유동적 특성을 자연어로 이해하고 실제 네비게이션을 제작해봅니다.

---

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>박스모델 개념 이해</strong> — 투명한 박스에 이름, 크기, 색상을 설정하는 원리<br>
  • <strong>Flexbox 유동성 파악</strong> — 정렬과 크기에 유동적인 flex의 특성<br>
  • <strong>실제 예시 체험</strong> — 반응형 그리드와 크기 변화 데모 확인<br>
  • <strong>네비게이션 제작</strong> — AI를 활용한 실제 flexbox 네비게이션 구현
</div>

---

## 📖 개념 설명

### 📦 박스모델(Box Model)이란?

웹에서 모든 요소는 투명한 박스로 시작됩니다. 이 박스에 다양한 속성을 설정하여 우리가 보는 웹 페이지가 만들어집니다.

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">박스에 이름 선언</div><div class="wda-sdsc">처음에는 완전히 투명한 박스가 있습니다.<br>이 박스에 "navigation", "header", "content" 같은 이름을 부여합니다.<br>마치 빈 상자에 "옷장", "책상" 라벨을 붙이는 것과 같아요!</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">박스 크기 설정</div><div class="wda-sdsc">박스의 너비(width)와 높이(height)를 설정합니다.<br>예를 들어 "너비 300px, 높이 200px"처럼요.<br>상자의 크기를 미리 정해두는 것과 같습니다!</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">색상과 테두리 설정</div><div class="wda-sdsc">배경색(background-color)을 파란색으로, 테두리(border)를 2px 검은색으로 설정할 수 있습니다.<br>투명했던 박스가 이제 눈에 보이기 시작해요!</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">박스 안에 내용 추가</div><div class="wda-sdsc">박스 안에 텍스트를 입력하거나 다른 작은 박스들을 넣을 수 있습니다.<br>상자 안에 물건을 넣거나 더 작은 상자를 넣는 것과 같아요!</div></div></div>
</div>

### 🌐 모든 웹 요소는 박스다

웹 페이지의 모든 요소는 **박스**입니다!

**🔑 핵심 개념**

<div class="wda-callout wda-ci">
  글자도 박스 안에 들어가요 &nbsp;·&nbsp; 이미지도 박스예요 &nbsp;·&nbsp; 버튼도 박스예요 &nbsp;·&nbsp; 심지어 페이지 전체도 하나의 큰 박스입니다!
</div>

---

### 🔄 Flexbox란? — 유동적인 박스

박스모델을 이해했다면, 이제 특별한 박스인 **Flexbox**를 알아볼 차례입니다.

**🔑 핵심 개념**

<div class="wda-callout wda-cw">
  <strong>"flex하다 = 유동적이다"</strong>
</div>

### ✨ Flex의 두 가지 유동성

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🎯</div><div class="wda-fcard-ttl">정렬에 유동적이다</div><div class="wda-fcard-dsc">박스들을 자동으로 가운데 정렬할 수 있어요<br>양 끝으로 밀어서 정렬할 수도 있어요<br>균등하게 간격을 두고 정렬할 수도 있어요</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📐</div><div class="wda-fcard-ttl">크기에 유동적이다</div><div class="wda-fcard-dsc">화면이 커지면 박스도 자동으로 커져요<br>화면이 작아지면 박스도 자동으로 작아져요<br>남은 공간을 똑똑하게 나누어 차지해요</div></div>
</div>

---

## ⚙️ 동작 원리

### 실제로 보고 체험해보기

이론만으로는 이해하기 어려우니, 실제 Flexbox가 어떻게 동작하는지 직접 확인해보세요!

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🔲</div><div class="wda-fcard-ttl">반응형 그리드 예시</div><div class="wda-fcard-dsc">정렬에 유동적인 특성을 확인해보세요. 카드들이 화면 크기에 따라 자동으로 정렬됩니다.</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">↔️</div><div class="wda-fcard-ttl">크기 변화 박스</div><div class="wda-fcard-dsc">크기에 유동적인 특성을 확인해보세요. <code>flex: 1</code> 방식으로 박스가 화면을 채우는 모습을 보세요.</div></div>
</div>

---

## 💻 예제 코드

### 🔍 핵심 개념 정리 — 일반 박스 vs Flex Box

**📌 개념**

<div class="wda-callout wda-ci">
  투명한 박스는 <strong>Flex Box</strong>라고 부르며, 그 안의 속성은 <strong>flex</strong>이다.
</div>

<div class="wda-compare">
<div class="wda-cbox wda-cbox-plain"><span class="wda-cbox-label">일반 박스</span><div class="wda-cbox-ttl">🔒 고정적</div><div class="wda-cbox-body">크기와 위치가 고정적</div></div>
<div class="wda-cbox wda-cbox-flex"><span class="wda-cbox-label">Flex Box</span><div class="wda-cbox-ttl">✨ 유동적</div><div class="wda-cbox-body">크기와 정렬이 유동적<br><code>flex</code> 속성으로 똑똑한 레이아웃 구현 가능</div></div>
</div>

---

### 🧭 Flexbox로 네비게이션 만들기

이제 배운 개념을 활용해서 실제로 네비게이션을 만들어보겠습니다!  
큰 네비게이션 박스 안에 두 개의 작은 박스를 넣는 구조입니다.

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">큰 네비게이션 박스</div><div class="wda-sdsc">전체를 감싸는 메인 컨테이너 &nbsp;·&nbsp; Flexbox 설정: 양 끝 정렬</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">로고 박스</div><div class="wda-sdsc">왼쪽에 위치할 로고 영역 &nbsp;·&nbsp; 내용: 사이트 로고나 제목</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">메뉴들 박스</div><div class="wda-sdsc">오른쪽에 위치할 메뉴 영역 &nbsp;·&nbsp; 항목: 홈 · 소개 · 상품 · 연락처 · 설정</div></div></div>
</div>

### 🤖 AI 네비게이션 제작 프롬프트

<div class="wda-callout wda-cs">
  <span class="wda-clabel">AI 활용 팁</span>다음 프롬프트를 복사해서 AI에게 요청하면 Flexbox 네비게이션을 만들어줍니다.
</div>

<div class="wda-prompt-head">📋 AI 네비게이션 제작 프롬프트 — 아래 코드 블록 전체를 복사하여 Claude Code에 붙여넣으세요.</div>

```
flexbox를 사용해서 네비게이션을 만들어줘.

구조:
- 큰 네비게이션 박스 (가로 전체, 높이 60px, 배경색 #2d3748)
- 안에 두 개 박스를 양 끝 정렬:
  1. 로고 박스: "MyWebsite" 텍스트 (왼쪽)
  2. 메뉴들 박스: 5개 메뉴 항목들 (오른쪽)

메뉴들 박스 안의 5개 항목:
- 홈, 소개, 상품, 연락처, 설정

스타일링:
- 로고는 흰색, 굵게, 20px
- 메뉴 항목들은 연한 회색, 16px, 각각 15px 간격
- 호버시 흰색으로 변경
- 전체적으로 깔끔한 모던 스타일로

ui_test 프로젝트의 새로운 섹션으로 추가해서 "Flex Navigation" 섹션을 만들고 거기에 구현해줘.
```

---

## ✅ 핵심 요약

### ✅ 체크포인트

다음 내용을 이해했는지 확인해보세요.

<div class="wda-callout wda-cw">
  <span class="wda-clabel">오늘 배운 것</span>박스모델 4단계 · Flexbox 두 가지 유동성 · 반응형 그리드 · 네비게이션 제작
</div>

- [ ] 박스모델 4단계 과정 이해 (이름 → 크기 → 색상 → 내용)
- [ ] 모든 웹 요소가 박스라는 개념 파악
- [ ] Flexbox의 두 가지 유동성 이해 (정렬 + 크기)
- [ ] 반응형 그리드 데모 확인 완료
- [ ] 크기 변화 데모 확인 완료
- [ ] 네비게이션 박스 구조 분석 이해
- [ ] AI 프롬프트로 실제 네비게이션 제작 성공

<div class="wda-done">
  <div class="wda-done-ico">🎉</div>
  <div class="wda-done-ttl">박스모델과 Flexbox 학습 완료!</div>
  <div>웹 레이아웃의 핵심 개념을 자연어로 이해하고 실제 네비게이션까지 제작해봤습니다.<br>이제 어떤 복잡한 레이아웃도 박스의 관점에서 분석할 수 있어요!</div>
</div>
