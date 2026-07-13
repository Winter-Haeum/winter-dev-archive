---
title: "4-2: About Me 탭 페이지 완성"
category: "ai-vibe-coding"
section: "lesson-4"
description: "포트폴리오의 About Me 탭을 상세하게 구성하고, 홈 탭과 자동 연동되는 데이터 구조를 만드는 방법입니다."
tags:
  - ai-vibe-coding
  - lesson-4
  - about-me
  - portfolio
  - react
  - context-api
date: "2026-06-25"
status: "completed"
---

<style>
.wda-callout{border-radius:10px;padding:12px 15px;margin:.8rem 0 1.4rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
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
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-done{border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:16px 20px;margin:.8rem 0 1.4rem;background:rgba(34,197,94,.04);text-align:center;font-size:.82rem;line-height:1.6}
.wda-done-ico{font-size:1.8rem;margin-bottom:6px}
.wda-done-ttl{font-size:1rem;font-weight:700;color:#22c55e;margin-bottom:4px}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
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

포트폴리오의 About Me 탭을 상세하게 구성하고, 홈 탭과 자동 연동되는 데이터 구조를 만듭니다.

## 🎯 학습 목표

<div class="wda-goal">
  <span class="wda-goal-label">이번 챕터 목표</span>
  🙋 <strong>About Me 탭 설계</strong> — 자기소개, 기술 스택, 경력/학력을 담은 상세 소개 페이지를 구성한다<br>
  🔗 <strong>데이터 구조 설계</strong> — 홈 탭과 About Me 탭이 같은 데이터를 공유하도록 구조를 설계한다<br>
  ⚡ <strong>Context API 활용</strong> — 전역 상태 관리를 통해 탭 간 데이터를 자동으로 연동한다<br>
  ✅ <strong>완성도 점검</strong> — 실제 취업/프리랜서 포트폴리오 기준으로 완성도를 체크한다
</div>

---

## 📐 포트폴리오 구조 이해하기

우리가 만들 포트폴리오는 3개의 탭 페이지로 구성되며, 데이터가 자동으로 연동됩니다.

**포트폴리오 구조:**

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🏠</div><div class="wda-fcard-ttl">홈 탭</div><div class="wda-fcard-dsc">About Me 요약 + 주요 스킬 표시</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🙋</div><div class="wda-fcard-ttl">About Me 탭</div><div class="wda-fcard-dsc">상세 정보 + 전체 스킬 관리</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📁</div><div class="wda-fcard-ttl">Projects 탭</div><div class="wda-fcard-dsc">프로젝트 목록 및 상세</div></div>
</div>

**About Me 탭 구성 요소**

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">👤</div><div class="wda-fcard-ttl">기본 정보</div><div class="wda-fcard-dsc">이름, 학력, 전공, 경력, 프로필 사진 등 기본 프로필 정보</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">✍️</div><div class="wda-fcard-ttl">콘텐츠 섹션</div><div class="wda-fcard-dsc">"나의 개발 스토리", "개발 철학" 등 개인적인 이야기</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🛠️</div><div class="wda-fcard-ttl">스킬 섹션</div><div class="wda-fcard-dsc">기술 스택을 아이콘 + 이름 + 숙련도%로 시각화</div></div>
</div>

---

## 🙋 About Me 탭 기본 구조 만들기

주된 효과: About Me 탭의 전체 구조를 만들고 홈 탭과 연동할 수 있는 데이터 구조를 설계합니다.

<div class="wda-callout wda-cs">
  <span class="wda-clabel">바이브 코딩 포인트</span>
  자기소개 정보는 <strong>데이터 객체로 관리</strong>하는 것이 핵심입니다.<br>
  하드코딩된 텍스트 대신 JavaScript 객체에 데이터를 모아두면, 홈 탭과 About Me 탭이 <strong>자동으로 같은 정보를 공유</strong>할 수 있습니다.
</div>

<div class="wda-memo">
  <span class="wda-memo-label">🔍 웹 레퍼런스 탐색 키워드</span>
  <div class="wda-memo-body">
    about me page design, portfolio about section, react context api, personal profile layout, developer about page
  </div>
</div>

<div class="wda-prompt-head">💬 프롬프트</div>

```
내 포트폴리오의 About Me 탭 페이지를 만들어줘:

기본 정보 섹션:
- 이름: [여기에 본인 이름 입력]
- 학력: [예: OO대학교 컴퓨터공학과]
- 전공: [예: 웹 개발]
- 경력: [예: 1년차 / 신입]
- 프로필 사진: 이미지 업로드 영역

콘텐츠 섹션들:
1. "나의 개발 스토리" (홈 탭 표시: O)
   - 내용: [개발을 시작하게 된 계기나 경험을 작성해주세요]
2. "개발 철학" (홈 탭 표시: O)
   - 내용: [개발할 때 중요하게 생각하는 가치나 원칙을 작성해주세요]
3. "개인적인 이야기" (홈 탭 표시: X)
   - 내용: [취미, 관심사 등 개인적인 내용을 작성해주세요]

기술 요구사항:
- React 함수형 컴포넌트 사용
- useState로 데이터 관리
- 각 콘텐츠 섹션에 showInHome 속성 포함
- MUI 컴포넌트 활용
- 반응형 디자인 적용

데이터 구조: (아래 코드 참고)

레이아웃:
- 기본 정보는 상단에 카드 형태로 배치
- 콘텐츠 섹션들은 탭 또는 아코디언 형태로 구성
- 깔끔하고 읽기 쉬운 디자인
```

```javascript
const aboutMeData = {
  basicInfo: { name: "", education: "", major: "", experience: "", photo: "" },
  sections: [
    { id: "dev-story", title: "나의 개발 스토리", content: "", showInHome: true },
    { id: "philosophy", title: "개발 철학", content: "", showInHome: true },
    { id: "personal", title: "개인적인 이야기", content: "", showInHome: false }
  ]
}
```

---

## 🛠️ 스킬 섹션 구현하기

주된 효과: 기술 스택을 시각적으로 표현하고 숙련도를 한눈에 파악할 수 있는 스킬 섹션을 만듭니다.

<div class="wda-callout wda-cs">
  <span class="wda-clabel">기술 스택 작성 팁</span>
  기술 스택은 <strong>자신 있는 것만</strong> 포함하세요.<br>
  조금 써봤다고 다 나열하면 오히려 역효과입니다.<br>
  각 기술에 대해 면접에서 질문받았을 때 답변할 수 있는 수준인지 먼저 확인해보세요.
</div>

<div class="wda-memo">
  <span class="wda-memo-label">🔍 웹 레퍼런스 탐색 키워드</span>
  <div class="wda-memo-body">
    skill progress bar, tech stack visualization, portfolio skills section, react skill component, programming skills ui
  </div>
</div>

<div class="wda-prompt-head">💬 프롬프트</div>

```
About Me 탭에 스킬 섹션을 추가해줘:

기본 스킬 템플릿 (5종):
- HTML: 80% (Frontend)
- CSS: 75% (Frontend)
- JavaScript: 70% (Frontend)
- React: 60% (Framework)
- Figma: 65% (Design)

스킬 표시 구조:
- 아이콘 + 기술명 + 숙련도 퍼센트 바
- 카테고리별 그룹핑 (Frontend, Framework, Design 등)
- 호버 시 간단한 설명 툴팁

추가 가능한 기술들:
Vue.js, Angular, TypeScript (Frontend 확장)
Node.js, Python, Java (Backend)
Git, React Native, MongoDB (도구 & 기타)

구현 요구사항: (아래 코드 참고)

UI 요구사항:
- 프로그래스 바는 애니메이션 효과 포함
- 반응형 그리드 레이아웃 (모바일: 1열, 태블릿: 2열, 데스크탑: 3열)
- 카테고리별 색상 구분
- "스킬 추가" 버튼으로 확장 가능

홈 탭 연동 준비:
- 숙련도 높은 순으로 정렬 기능
- 상위 N개 선택 기능
- 메인 스킬 표시 여부 속성
```

```javascript
const skillsData = [
  { id: 1, icon: "orange-diamond", name: "HTML", level: 80, category: "Frontend" },
  { id: 2, icon: "palette", name: "CSS", level: 75, category: "Frontend" },
  { id: 3, icon: "zap", name: "JavaScript", level: 70, category: "Frontend" },
  { id: 4, icon: "atom", name: "React", level: 60, category: "Framework" },
  { id: 5, icon: "target", name: "Figma", level: 65, category: "Design" }
]
```

---

## 🔗 홈 탭 연동 시스템 구현

주된 효과: About Me 탭의 데이터가 홈 탭에 자동으로 요약되어 표시되는 실시간 연동 시스템을 구축합니다.

<div class="wda-callout wda-cy">
  <span class="wda-clabel">핵심 개념 — Context API</span>
  Context API를 사용하면 <strong>컴포넌트 트리 어디서든 같은 데이터에 접근</strong>할 수 있습니다.<br>
  About Me 탭에서 내용을 수정하면 홈 탭에도 즉시 반영됩니다.<br>
  데이터를 한 곳에서만 관리하면 됩니다.
</div>

<div class="wda-prompt-head">💬 프롬프트</div>

```
About Me 탭과 홈 탭을 연동하는 시스템을 만들어줘:

Context API 구조: (아래 코드 참고)

홈 탭 About Me 섹션 업데이트:
- 메인 콘텐츠: "나의 개발 스토리" 요약 (2-3줄)
- 사이드: 프로필 사진 + 기본 정보 카드
- 하단: 주요 스킬 4개 아이콘으로 표시
- "더 알아보기" 버튼 → About Me 탭 이동

홈 탭 스킬 섹션 업데이트:
- 상위 4개 스킬을 간단한 아이콘 + 이름으로 표시
- "전체 스킬 보기" 버튼 → About Me 탭 이동

실시간 연동:
- About Me 탭에서 내용 수정 시 홈 탭 즉시 반영
- useContext 훅으로 데이터 접근
- 컴포넌트 리렌더링 최적화

결과 확인:
1. About Me 탭에서 "나의 개발 스토리" 수정
2. 홈 탭으로 이동해서 변경사항 확인
3. 스킬 레벨 변경 후 홈 탭 반영 확인
```

```javascript
// PortfolioContext.js
const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [aboutMeData, setAboutMeData] = useState({
    basicInfo: { name: "", education: "", major: "", experience: "", photo: "" },
    sections: [
      { id: "dev-story", title: "나의 개발 스토리", content: "", showInHome: true },
      { id: "philosophy", title: "개발 철학", content: "", showInHome: true },
      { id: "personal", title: "개인적인 이야기", content: "", showInHome: false }
    ],
    skills: [
      { id: 1, icon: "orange-diamond", name: "HTML", level: 80, category: "Frontend" },
      // ... 나머지 스킬들
    ]
  });

  // 홈 탭용 데이터 자동 생성
  const getHomeData = () => {
    const homeContent = aboutMeData.sections
      .filter(section => section.showInHome)
      .map(section => ({
        title: section.title,
        summary: section.content.substring(0, 100) + "..."
      }));

    const topSkills = aboutMeData.skills
      .sort((a, b) => b.level - a.level)
      .slice(0, 4); // 상위 4개만

    return { content: homeContent, skills: topSkills, basicInfo: aboutMeData.basicInfo };
  };

  return (
    <PortfolioContext.Provider value={{ aboutMeData, setAboutMeData, getHomeData }}>
      {children}
    </PortfolioContext.Provider>
  );
};
```

---

## ✅ 완성도 점검 및 최적화

주된 효과: About Me 탭이 올바르게 구현되었는지 확인하고 홈 탭과의 연동이 정상 작동하는지 테스트합니다.

<div class="wda-callout wda-cw">
  <span class="wda-clabel">완성도 기준</span>
  단순히 화면이 뜨는 것에 만족하지 말고, 실제 <strong>취업·프리랜서 포트폴리오 기준</strong>으로 점검해보세요.<br>
  아래 체크리스트를 모두 통과해야 실전에서 사용할 수 있는 수준입니다.
</div>

**완성도 체크리스트:**

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">기본 정보 섹션 완성</div>
      <div class="wda-sdsc">About Me 탭에 기본 정보 섹션이 완성되었나요?</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">콘텐츠 섹션 구성</div>
      <div class="wda-sdsc">콘텐츠 섹션들이 올바르게 구성되었나요?</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">스킬 섹션 시각화</div>
      <div class="wda-sdsc">스킬 섹션이 시각적으로 잘 표현되었나요?</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">홈 탭 About Me 요약</div>
      <div class="wda-sdsc">홈 탭에 About Me 요약이 자동으로 표시되나요?</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">5</div>
    <div class="wda-sbody">
      <div class="wda-sttl">홈 탭 주요 스킬 표시</div>
      <div class="wda-sdsc">홈 탭에 주요 스킬들이 올바르게 표시되나요?</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">6</div>
    <div class="wda-sbody">
      <div class="wda-sttl">실시간 연동 확인</div>
      <div class="wda-sdsc">About Me 탭 수정 시 홈 탭이 실시간으로 업데이트되나요?</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">7</div>
    <div class="wda-sbody">
      <div class="wda-sttl">모바일 작동 확인</div>
      <div class="wda-sdsc">모바일에서도 모든 기능이 정상 작동하나요?</div>
    </div>
  </div>
</div>

<div class="wda-prompt-head">💬 프롬프트</div>

```
About Me 탭과 홈 탭 연동을 최종 점검하고 개선해줘:

기능 테스트:
1. About Me 탭에서 "나의 개발 스토리" 내용 수정
2. 홈 탭으로 이동해서 변경사항이 반영되었는지 확인
3. 스킬 레벨을 변경하고 홈 탭의 주요 스킬 표시 확인
4. 모바일 화면에서 모든 레이아웃이 올바른지 확인

UI/UX 개선:
- 로딩 상태 표시 (데이터 변경 시)
- 부드러운 전환 애니메이션
- 에러 상태 처리
- 접근성 개선 (키보드 네비게이션, 스크린 리더)

성능 최적화:
- React.memo로 불필요한 리렌더링 방지
- useMemo로 계산 결과 캐싱
- useCallback으로 함수 최적화
- 이미지 lazy loading

최종 확인 사항:
- 모든 기능이 정상 작동하는가?
- 홈 탭과 About Me 탭의 데이터 일관성
- 반응형 디자인 완성도
- 사용자 경험의 자연스러움
```

---

<div class="wda-done">
  <div class="wda-done-ico">🎉</div>
  <div class="wda-done-ttl">About Me 탭 완성!</div>
  PortfolioContext 하나로 데이터를 관리하면<br>
  홈 탭과 About Me 탭이 자동으로 연동되는<br>
  <strong>실시간 포트폴리오</strong>가 완성되었습니다. ✨
</div>

