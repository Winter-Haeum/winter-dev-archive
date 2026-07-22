---
title: "1-2: UI 요소 제작 실습"
category: "ai-vibe-coding"
section: "lesson-1"
date: "2026-06-10"
status: "completed"
description: "16개 현대적 UI 요소를 MUI로 단계별 구현하는 실습 가이드"
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

수업 1-2에서 학습한 16개 현대적 UI 용어들을 MUI로 실제 구현하는 단계별 실습입니다.

---

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>이론에서 실습으로</strong> — 16개 UI 용어를 실제 코드로 구현<br>
  • <strong>MUI 컴포넌트 마스터</strong> — Material-UI 라이브러리 활용법 익히기<br>
  • <strong>단계별 구현</strong> — 체계적인 순서로 UI 요소 제작<br>
  • <strong>컴포넌트 라이브러리 구축</strong> — 재사용 가능한 UI 자료 완성
</div>

---

## 실습 개요

이 실습에서는 `ui_test`라는 새로운 React 프로젝트를 생성하고, 수업 1-2에서 배운 16개 UI 요소들을 하나씩 구현해보겠습니다.

각 UI 요소는 MUI(Material-UI) 컴포넌트를 사용하여 현대적이고 실용적인 형태로 제작됩니다.

---

| 카테고리 | 개수 | UI 요소 |
|----------|------|---------|
| ⌨️ **기본 입력 요소** | 6개 | Button · Input · Dropdown · Checkbox · Radio · Slider |
| 🖱️ **인터랙션 요소** | 5개 | Modal · Card · Drag & Drop · Animation · Menu |
| 📐 **레이아웃 요소** | 3개 | Navigation · Sidebar · Scroll |
| ✨ **터치 효과** | 2개 | Hover · Swipe |

---

## 1. ui_test 프로젝트 생성

먼저 UI 요소들을 실습할 전용 프로젝트를 생성합니다.

---

### 프로젝트 생성

```
ui_test라는 이름으로 React + MUI 프로젝트를 생성해줘.

이 프로젝트는 16개 UI 요소를 순차적으로 섹션 단위로 추가해갈 예정이니
그에 맞는 디렉토리 구조와 기본 설정을 만들어줘:

기본 설정:
- React + Vite 프로젝트
- MUI (Material-UI) 설치 및 설정
- 기본 ThemeProvider 적용

디렉토리 구조:
- src/components/sections/ (UI 섹션별 컴포넌트)
- src/components/ui/ (개별 UI 요소 컴포넌트)
- src/styles/ (CSS 스타일 파일)
- 깔끔한 기본 레이아웃 (네비게이션 없이)
- 섹션을 순차적으로 추가할 수 있는 구조
```

---

**💡 사용 팁**

<div class="wda-callout wda-ci">
  프로젝트가 정상적으로 생성되고 브라우저에서 확인이 되면 다음 단계로 진행하세요.
</div>

---

## 2. 개발 화면 세팅

효율적인 실습을 위해 VSCode 터미널을 3개로 분할하고, 브라우저와 함께 화면을 최적 배치합니다.

---

### 터미널 3분할 설정

VSCode에서 터미널을 3개로 분할하여 각각 다른 용도로 사용합니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🖥️</div><div class="wda-fcard-ttl">터미널 1 — 개발 서버</div><div class="wda-fcard-dsc"><code>cd ui_test</code><br><code>npm run dev</code><br><br>React 개발 서버 실행</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🤖</div><div class="wda-fcard-ttl">터미널 2 — Claude (lecture1)</div><div class="wda-fcard-dsc">lecture1 디렉토리에서 실행<br><code>claude --dangerously-skip-permissions</code><br><br>로키 역할로 AI 작업</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🤖</div><div class="wda-fcard-ttl">터미널 3 — Claude (루트)</div><div class="wda-fcard-dsc"><code>cd ..</code> (my_ai_web 루트로)<br><code>claude --dangerously-skip-permissions</code><br><br>일반 AI 작업, 패키지 설치</div></div>
</div>

### VSCode 터미널 분할 방법

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">터미널 열기</div><div class="wda-sdsc"><code>Ctrl + Shift + `</code> 로 터미널 열기</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">분할 아이콘 클릭</div><div class="wda-sdsc">터미널 우측 상단의 <strong>+ 분할 아이콘</strong> 클릭</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">단축키 활용</div><div class="wda-sdsc"><code>Ctrl + Shift + 5</code> 단축키 사용</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">3개 탭 완성</div><div class="wda-sdsc">총 3개의 터미널 탭이 생성될 때까지 반복</div></div></div>
</div>

---

## 3. UI 요소 구현하기

화면 세팅이 완료되었습니다.

이제 16개 UI 요소를 하나씩 추가해보겠습니다.

각 코드블록의 프롬프트를 두 번째 터미널의 Claude CLI에 입력하세요.

---

### 🔘 Button (버튼)

**💡 사용 팁**

<div class="wda-callout wda-cs">
  버튼은 가장 기본적인 인터랙션 요소입니다. variant와 color 조합으로 다양한 스타일을 만들어보세요!
</div>

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Button 섹션을 추가해줘:
- MUI Button 컴포넌트 사용
- variant: contained, outlined, text 3가지
- color: primary, secondary, error 3가지
- 클릭 시 알림창 표시
```

---

### ✏️ Input (입력 필드)

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Input 섹션을 추가해줘:
- MUI TextField 컴포넌트 사용
- variant: standard, outlined, filled 3가지
- placeholder와 label 설정
- 입력값 실시간 표시
```

---

### 🧭 Navigation (네비게이션)

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  네비게이션은 사용자가 사이트를 탐색하는 핵심 요소입니다. 모바일 반응형도 꼭 확인하세요!
</div>

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Navigation 섹션을 추가해줘:
- MUI AppBar와 Toolbar 사용
- 홈, 소개, 서비스, 연락처 메뉴
- 클릭 시 메뉴명 알림
- 모바일 반응형 햄버거 메뉴
```

---

### 📋 Dropdown (드롭다운)

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Dropdown 섹션을 추가해줘:
- MUI Select 컴포넌트 사용
- 여러 옵션 중 하나를 선택하는 드롭다운
- 선택된 값을 화면에 실시간 표시
- MenuItem으로 5개 이상의 옵션 제공
```

---

### ☑️ Checkbox (체크박스)

**💡 사용 팁**

<div class="wda-callout wda-ci">
  체크박스는 여러 항목을 동시에 선택할 수 있습니다. 전체 선택 기능을 꼭 구현해보세요!
</div>

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Checkbox 섹션을 추가해줘:
- MUI Checkbox 컴포넌트 사용
- 다중 선택 가능한 체크박스 3개 이상
- 전체 선택/해제 기능 포함
- 선택된 항목 개수 실시간 표시
```

---

### 🔵 Radio (라디오 버튼)

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Radio 섹션을 추가해줘:
- MUI Radio와 RadioGroup 사용
- 단일 선택만 가능한 라디오 버튼 3개 이상
- 선택된 옵션을 화면에 표시
- FormControlLabel로 레이블 설정
```

---

### 🎚️ Slider (슬라이더)

**💡 사용 팁**

<div class="wda-callout wda-cs">
  슬라이더로 범위 값을 직관적으로 조절할 수 있어요. marks 속성으로 구간 표시도 해보세요!
</div>

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Slider 섹션을 추가해줘:
- MUI Slider 컴포넌트 사용
- 0부터 100까지 범위의 슬라이더
- 현재 값을 실시간으로 표시
- 구간 표시(marks) 추가
```

---

### 🪟 Modal (모달 창)

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Modal 섹션을 추가해줘:
- MUI Dialog 컴포넌트 사용
- 버튼 클릭 시 모달 열기
- 모달 내부에 제목, 내용, 확인/취소 버튼
- 닫기 버튼 및 배경 클릭으로 닫기
```

---

### 🃏 Card (카드)

**💡 사용 팁**

<div class="wda-callout wda-cw">
  카드는 정보를 시각적으로 묶어서 표현합니다. Grid로 배치하면 더 보기 좋아요!
</div>

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Card 섹션을 추가해줘:
- MUI Card 컴포넌트 사용
- CardMedia, CardContent, CardActions 활용
- 3개 이상의 카드를 Grid로 배치
- 호버 시 elevation 효과
```

---

### 🔄 Drag & Drop (드래그 앤 드롭)

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Drag & Drop 섹션을 추가해줘:
- HTML5 Drag and Drop API 사용
- 드래그 가능한 아이템 3개 이상
- 드롭 영역에 아이템 이동
- 드래그 중 시각적 피드백 제공
```

---

### 📜 Scroll (스크롤)

**💡 사용 팁**

<div class="wda-callout wda-ci">
  스크롤 컨테이너를 만들고 "Top으로 이동" 버튼까지 구현해보면 실무에서 바로 쓸 수 있어요!
</div>

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Scroll 섹션을 추가해줘:
- MUI Paper 또는 Box로 스크롤 컨테이너 생성
- 고정 높이(300px)의 스크롤 가능 영역
- 많은 콘텐츠를 넣어서 스크롤 동작 확인
- 스크롤 위치에 따른 버튼 표시 (Top으로 이동)
```

---

### ✨ Animation (애니메이션)

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Animation 섹션을 추가해줘:
- MUI의 Fade, Grow, Slide 트랜지션 사용
- 버튼 클릭 시 다양한 애니메이션 재생
- 3가지 이상의 애니메이션 효과 구현
- CSS 애니메이션과 MUI 트랜지션 조합
```

---

### 🍔 Menu (메뉴)

**💡 사용 팁**

<div class="wda-callout wda-cs">
  MUI Menu 컴포넌트로 맥락 메뉴를 만들어보세요. 아이콘 포함하면 훨씬 세련돼 보여요!
</div>

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Menu 섹션을 추가해줘:
- MUI Menu 컴포넌트 사용
- 버튼 클릭 시 메뉴 열기
- MenuItem으로 5개 이상의 메뉴 아이템
- 아이콘 포함 메뉴 아이템
- 클릭 시 선택된 메뉴 표시
```

---

### 🗂️ Sidebar (사이드바)

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Sidebar 섹션을 추가해줘:
- MUI Drawer 컴포넌트 사용
- 버튼 클릭으로 토글 가능한 사이드바
- List와 ListItem으로 메뉴 구성
- 왼쪽/오른쪽 위치 선택 옵션
- 사이드바 내부에 네비게이션 링크
```

---

### 🖱️ Hover (호버 효과)

**💡 사용 팁**

<div class="wda-callout wda-ci">
  색상, 크기, 그림자 변화 등 5가지 이상의 호버 효과로 인터랙티브한 카드를 만들어보세요!
</div>

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Hover 섹션을 추가해줘:
- MUI ButtonBase 또는 일반 div 사용
- 마우스 호버 시 다양한 효과 구현
- 색상 변화, 크기 변화, 그림자 효과 등
- 5가지 이상의 호버 효과 카드 배치
```

---

### 👆 Swipe (스와이프)

<div class="wda-prompt-head">📋 Claude 프롬프트 — 아래 코드 블록을 복사하여 Claude CLI에 붙여넣으세요.</div>

```
Swipe 섹션을 추가해줘:
- react-swipeable 라이브러리 사용
- 터치/마우스 스와이프로 이미지 슬라이드
- 좌우 스와이프 제스처 감지
- 현재 슬라이드 인덱스 표시
- 이전/다음 버튼도 함께 제공
```

---

<div class="wda-done">
  <div class="wda-done-ico">🎉</div>
  <div class="wda-done-ttl">16개 UI 요소 구현 완료!</div>
  <div>모든 UI 요소가 정상적으로 동작하는지 브라우저에서 확인해보세요.<br>이제 현대적 웹 개발의 기본기를 모두 익혔습니다!</div>
</div>

---

## 체크포인트

다음 16개 UI 요소가 모두 구현되었는지 확인하세요.

### 구현 확인 체크리스트

- [ ] ui_test 프로젝트 생성 및 MUI 설정 완료
- [ ] VSCode 터미널 3분할 완료
- [ ] npm run dev 서버 실행 및 브라우저 접속 완료
- [ ] Claude CLI (lecture1 디렉토리) 준비 완료
- [ ] Claude CLI (my_ai_web 루트) 준비 완료
- [ ] 화면 배치 최적화 완료
- [ ] Button — 다양한 variant와 color 동작 확인
- [ ] Input — TextField 입력 및 실시간 표시 확인
- [ ] Navigation — AppBar 메뉴 클릭 동작 확인
- [ ] Dropdown — Select 선택 및 값 표시 확인
- [ ] Checkbox — 체크박스 선택 및 전체 선택 확인
- [ ] Radio — 라디오 버튼 단일 선택 확인
- [ ] Slider — 슬라이더 값 조절 및 표시 확인
- [ ] Modal — Dialog 열기/닫기 동작 확인
- [ ] Card — 카드 표시 및 호버 효과 확인
- [ ] Drag & Drop — 아이템 드래그 앤 드롭 확인
- [ ] Scroll — 스크롤 컨테이너 동작 확인
- [ ] Animation — 애니메이션 재생 버튼 확인
- [ ] Menu — 메뉴 열기/닫기 및 아이템 클릭 확인
- [ ] Sidebar — Drawer 토글 및 메뉴 확인
- [ ] Hover — 다양한 호버 효과 확인
- [ ] Swipe — 스와이프 제스처 감지 확인

---

## ✅ 핵심 요약

<div class="wda-memo">
  <span class="wda-memo-label">📌 현대적 UI 개발 능력</span>
  <div class="wda-memo-body">16개 핵심 UI 요소를 실제로 구현하면서 현대적 웹 인터페이스 개발 역량을 확보했습니다.</div>
</div>

---

### MUI 라이브러리 마스터

<div class="wda-memo">
  <span class="wda-memo-label">📌 MUI 라이브러리 마스터</span>
  <div class="wda-memo-body">Material-UI의 주요 컴포넌트들을 활용하여 실무급 UI를 제작할 수 있는 능력을 습득했습니다.</div>
</div>
