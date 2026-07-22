---
title: "1-6 React 프로젝트 제대로 이해하기"
status: "completed"
description: "Vite 프로젝트 생성과 Boilerplate 정리부터 React DevTools, StrictMode, Prettier·ESLint, Vite 설정까지 실전 개발 환경 구성을 정리한다."
category: "React"
section: "Basics"
tags:
  - react
  - devtools
  - vite
---

<style>
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-cy{background:rgba(250,204,21,.07);border-color:#ca8a04}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-cy .wda-clabel{color:#92400e}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 16px;margin:.8rem 0 1.6rem;font-size:.83rem;line-height:1.75}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 140px;background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-steps{background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(245,158,11,.15);color:#f59e0b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:150px}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-deco{position:absolute;z-index:2;pointer-events:none}
@media (max-width:640px){
.wda-deco{width:34px !important}
}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>프로젝트 정리하기</strong> — Boilerplate 제거와 초기화 방법을 익힙니다.<br>
  • <strong>개발 도구 활용</strong> — React DevTools 설치 및 사용법을 배웁니다.<br>
  • <strong>StrictMode 이해</strong> — 개발 시 두 번 실행되는 이유와 대처법을 배웁니다.<br>
  • <strong>실수 방지 가이드</strong> — 초보자가 자주 하는 실수를 미리 방지합니다.
</div>

---

<h2>1. 💻 실습 : 프로젝트 생성하기</h2>

터미널(Terminal)을 열고 직접 명령어를 입력해서 나만의 리액트 프로젝트를 만들어봅시다.

**✅ 명령어 입력 (Terminal)**

터미널을 열고 아래 명령어를 한 줄씩 순서대로 입력하세요.

**macOS / Linux 예시:**

```bash
# 1. 작업 공간(폴더)을 만듭니다. (p 옵션은 상위 폴더가 없으면 같이 만든다는 뜻)
mkdir -p ~/Workspace

# 2. 방금 만든 폴더 안으로 들어갑니다.
cd ~/Workspace

# 3. Vite라는 도구를 사용해 최신 리액트 프로젝트를 설치합니다.
npm create vite@latest
```

**Windows PowerShell 예시:**

```bash
# 1. 작업 공간(폴더)을 만듭니다.
mkdir ~/Workspace

# 2. 방금 만든 폴더 안으로 들어갑니다.
cd ~/Workspace

# 3. Vite라는 도구를 사용해 최신 리액트 프로젝트를 설치합니다.
npm create vite@latest
```

`npm create vite@latest` 뒤에 프로젝트 이름과 템플릿을 함께 지정하는 한 줄 명령어도 있습니다.

```bash
npm create vite@latest react-study -- --template react
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>위 명령어는 프로젝트 이름과 React(JavaScript) 템플릿을 한 번에 지정하는 방식입니다. 수업에서는 선택 과정을 익히기 위해 <code>npm create vite@latest</code> 방식으로 진행해도 됩니다.</p>
</div>

**✅ 옵션 선택 (Interactive)**

명령어를 입력하면 질문이 나옵니다. 방향키로 이동하고 엔터(Enter)를 눌러서 아래와 같이 선택해주세요.

1. **Project name:** `react-study` (타이핑해서 입력하세요. 앞으로 계속 이 이름으로 실습합니다.)
2. **Select a framework:** `React` (방향키로 React를 찾아 선택하세요.)
3. **Select a variant:** `JavaScript` (TypeScript가 아닌 JavaScript를 선택하세요.)

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>성공 확인 메시지</strong>
  <p>모든 선택을 마치고 화면에 <code>Done. Now run:</code> 이라는 메시지가 나왔다면 프로젝트 뼈대가 성공적으로 만들어진 것입니다.</p>
</div>

---

<h2>2. 💻 실습 : 프로젝트 실행하기</h2>

방금 만든 프로젝트 폴더로 들어가서 필요한 도구들을 설치하고, 실제로 화면을 띄워보는 과정입니다.

**✅ 폴더 이동 및 설치**

터미널에서 아래 명령어를 순서대로 입력하세요.

```bash
# 1. 방금 만든 폴더로 들어갑니다.
cd react-study

# 2. 필요한 패키지(공구)들을 다운로드합니다.
npm install
```

참고: `npm install`을 입력하면 프로젝트 폴더 안에 `node_modules`라는 폴더가 새로 생깁니다. 여기에 React를 포함한 모든 라이브러리가 저장됩니다.

**✅ 개발 서버 실행**

설치가 끝났으면 이제 서버를 켜봅시다.

```bash
# 3. 개발 서버를 켭니다.
npm run dev
```

**✅ 결과 확인**

명령어를 입력하면 터미널에 다음과 같은 주소가 나옵니다.

`Local: http://localhost:5173/`

- 키보드의 **Ctrl (Mac은 Cmd)** 키를 누른 상태에서 저 주소를 클릭하세요.
- 브라우저가 열리고 **Vite + React** 로고가 빙글빙글 도는 화면이 보인다면 **성공**입니다!

---

<h2>3. 💻 실습 : Boilerplate 대청소 (Clean Up)</h2>

`npm create vite` 명령어로 프로젝트를 만들면 친절하게 예제 파일들을 많이 넣어줍니다. 하지만 우리는 처음부터 직접 코드를 짜야 하므로, 이 예제 파일들을 모두 지워서 백지 상태(Clean State)로 만들어야 합니다.

### 1단계: 파일 삭제 및 정리

VS Code의 탐색기(왼쪽 파일 목록)에서 `src` 폴더 안의 파일들을 아래와 같이 정리해주세요. 과감하게 지우셔도 됩니다.

- `src/assets/react.svg` : 삭제 (휴지통으로 보내세요)
- `src/App.css` : 삭제
- `src/index.css` : 파일은 지우지 말고, 파일 안의 모든 코드를 지워서 빈 파일로 만드세요.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>참고: <code>index.css</code>는 나중에 전체 폰트나 배경색 같은 전역 스타일(Global Style)을 넣을 때 사용합니다.</p>
</div>

### 2단계: 코드 정리 (App.jsx)

이제 `src/App.jsx` 파일을 열어보세요. 복잡한 예제 코드들이 들어있습니다. 다 지우고 아래처럼 뼈대만 남기겠습니다.

```jsx
// src/App.jsx
// 맨 위에 있던 import './App.css' 등은 지워주세요.

function App() {
  // 함수 안에 있던 useState나 logo 관련 코드도 모두 삭제합니다.

  return (
    <div>
      <h1>초기화 완료</h1>
    </div>
  );
}

export default App;
```

### 3단계: 결과 확인

코드를 저장(`Ctrl+S`)하고 브라우저를 확인해보세요. 빙글빙글 돌던 로고와 복잡한 화면이 사라지고, 하얀 배경에 "초기화 완료"라는 글자만 깔끔하게 보이면 성공입니다.

---

<h2>4. React DevTools 설치 (필수!)</h2>

브라우저의 기본 개발자 도구만으로는 리액트의 속사정을 알기 어렵습니다. 리액트 전용 엑스레이(X-ray) 도구를 설치해 봅시다.

**💡 왜 필요한가요?**

브라우저는 최종 결과물인 HTML만 보여주기 때문에 다음과 같은 한계가 있습니다.

- React 컴포넌트가 어떤 구조로 겹쳐 있는지 안 보임
- 컴포넌트가 가진 데이터(Props와 State)를 실시간으로 확인 불가

**✅ 설치 방법**

크롬 브라우저를 기준으로 설명합니다.

1. 구글에 Chrome Web Store를 검색해서 접속합니다.
2. 검색창에 `React Developer Tools`를 입력합니다.
3. `Chrome에 추가` 버튼을 클릭하여 설치합니다.
4. 설치가 완료되면 브라우저를 껐다가 다시 켭니다(재시작).

바로가기 주소: [https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)

**📌 주요 기능**

설치 후 개발자 도구(`F12`)를 열면 탭 2개가 새로 생긴 것을 볼 수 있습니다.

- **Components 탭:** 내가 만든 컴포넌트들의 트리 구조와 데이터(Props)를 확인할 수 있습니다.
- **Profiler 탭:** 렌더링 성능을 측정하여 느린 곳을 찾을 수 있습니다.

---

<h2>5. Components 탭 활용법</h2>

이 탭은 React 앱의 X-Ray와 같습니다. 눈에 보이지 않는 컴포넌트 계층 구조와 데이터를 훤히 들여다볼 수 있게 해줍니다.

| **기능** | **설명** | **핵심 특징 & 활용** |
| --- | --- | --- |
| **1) 컴포넌트 트리 확인** | 전체적인 트리 구조(Tree Structure)를 시각적으로 보여줍니다. | HTML 태그가 아닌 **내가 작성한 컴포넌트 이름**(예: `Header`, `Button`)으로 표시되어 구조 파악이 훨씬 쉽습니다. |
| **2) Props & State 검사** | 특정 컴포넌트를 클릭하면 오른쪽 패널에서 **상세 정보**를 볼 수 있습니다. | • **Props 수정:** 코드를 고치지 않고 값을 직접 바꿔서 화면 변화 테스트 가능<br>• **State 확인:** 평소엔 숨겨져 있는 내부 상태값 즉시 조회<br>• **Suspense:** 로딩 화면(Spinner)을 강제로 켜서 테스트 가능 |

**💡 꿀팁: Select 모드 활용**

<div class="wda-callout wda-cs">
  <p>화면의 요소를 클릭해서 바로 해당 컴포넌트를 찾고 싶다면 왼쪽 상단의 조준경 아이콘(Select 모드)을 누르세요. 그 상태로 화면의 버튼이나 텍스트를 클릭하면, DevTools가 해당 컴포넌트를 자동으로 찾아줍니다.</p>
</div>

---

<h2>6. Profiler 탭 활용법</h2>

Profiler는 내 앱이 왜 느린지, 왜 쓸데없이 다시 그려지는지 범인을 찾아내는 탐정 역할을 합니다.

**⚙️ 사용 방법 (3단계)**

매우 간단한 3단계로 성능을 측정할 수 있습니다.

1. **녹화 시작 (Record):** 좌측 상단의 파란색 동그라미 버튼을 누릅니다.
2. **앱 사용 (Action):** 버튼을 클릭하거나 타이핑을 하는 등, 성능을 측정하고 싶은 동작을 수행합니다.
3. **녹화 중지 (Stop):** 정지 버튼을 누르면 자동으로 분석 리포트가 생성됩니다.

**📌 Flamegraph (불꽃 차트) 분석**

생성된 차트의 색깔을 보면 성능을 가늠하는 데 도움이 됩니다.

| **색상 (Color)** | **의미 (Meaning)** | **상태** |
| --- | --- | --- |
| **노란색**(Yellow) | 렌더링이 오래 걸림 | 느림 (주의 필요) |
| **청록색**(Teal) | 빠르게 렌더링됨 | 빠름 (정상) |
| **회색**(Grey) | 렌더링 되지 않음 | 최적화 성공 (Best) |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>Profiler의 색상은 렌더링 시간이 상대적으로 긴지 짧은지 파악하는 데 도움을 줍니다. 다만 색상만으로 판단하지 말고, 실제 렌더링 시간과 커밋 횟수도 함께 확인해야 합니다.</p>
</div>

**📌 재렌더링 원인 파악**

React DevTools 버전과 설정에 따라 특정 컴포넌트를 선택했을 때 `Why did this render?`처럼 렌더링 이유를 확인할 수 있습니다.  
부모가 그려져서, Props가 변경되어서 등 구체적인 이유를 알려주므로 불필요한 렌더링을 막는 단서가 됩니다.  
표시 방식은 버전에 따라 달라질 수 있으므로, Profiler의 컴포넌트 상세 패널도 함께 확인하세요.

**🔑 핵심 원칙**

<div class="wda-callout wda-cw">
  <strong>추측 금지!</strong>
  <p>성능 최적화는 짐작으로 하는 것이 아닙니다. 반드시 Profiler로 먼저 측정하고, 느린 곳만 고치는 것이 정석입니다.</p>
</div>

---

<h2>7. StrictMode: "왜 콘솔이 두 번 찍히죠?"</h2>

React를 처음 배우는 분들이 가장 많이 하는 질문 1위입니다. "분명 `console.log`를 한 번만 썼는데 왜 개발자 도구에는 두 번씩 나올까요?"

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">원인 (Cause)</div>
      <div class="wda-sdsc"><code>src/main.jsx</code> 파일의 <strong>&lt;StrictMode&gt;</strong> 태그가 <code>App</code> 컴포넌트를 감싸고 있기 때문입니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">동작 원리</div>
      <div class="wda-sdsc">오직 <strong>개발 모드(Development)</strong>에서만 작동합니다.<br>StrictMode는 일부 렌더링 과정이나 Effect를 의도적으로 한 번 더 실행해, 부작용이 있는 코드를 발견하도록 도와줍니다.<br>그래서 <code>console.log</code>가 <strong>두 번 찍히는 것처럼</strong> 보일 수 있습니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">이유 (Why)</div>
      <div class="wda-sdsc">잠재적인 <strong>버그(Side Effect)</strong>를 찾기 위함입니다.<br>(순수한 코드는 1번 실행하든 100번 실행하든 결과가 같아야 합니다.)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">해결책</div>
      <div class="wda-sdsc"><strong>정상</strong>입니다. 그냥 무시하시면 됩니다.<br>• <strong>배포 환경(Production):</strong> 자동으로 꺼져서 <strong>한 번만 실행</strong>됩니다.<br>• <strong>제거 방법:</strong> 정 거슬리면 <code>main.jsx</code>에서 태그를 지우면 되지만, 안전을 위해 <strong>권장하지 않습니다.</strong></div>
    </div>
  </div>
</div>

---

<h2>8. 실수 방지 가이드: VS Code 필수 확장 프로그램</h2>

사람은 누구나 실수를 합니다. 따라서 실력을 믿지 말고, 실수를 막아주는 도구(Extension)를 설치해서 개발 환경을 튼튼하게 만드는 것이 중요합니다.

| **확장 프로그램** | **기능 및 사용법** | **효과 (Benefit)** |
| --- | --- | --- |
| **1. ES7+ React/Redux Snippets** | • **기능:** 리액트 코드 단축키 모음<br>• **사용:** `rafce` 입력 후 `Tab` 키 | • 복잡한 기본 뼈대 코드를 **1초 만에 완성**<br>• 반복 입력을 줄여 **오타 가능성을 크게 낮춤** |
| **2. Prettier** | • **기능:** 못생긴 코드를 예쁘게 정렬(Code Formatter)<br>• **설정:** `Format On Save` 켜기 권장 | • 저장할 때마다 줄 맞춤, 띄어쓰기 **자동 정리**<br>• 가독성을 높이고 **협업 시 스타일 통일** |

**💡 꿀팁: 자동 Import (Auto Import)**

<div class="wda-callout wda-cs">
  <p>초보자가 가장 많이 겪는 에러 중 하나인 "ReferenceError(정의되지 않음)"를 방지하는 기술입니다.</p>
  <ul>
    <li><strong>방법:</strong> 다른 컴포넌트를 가져다 쓸 때, 이름을 끝까지 치지 말고 중간에 <code>Tab</code> 키를 누르세요.</li>
    <li><strong>예시:</strong> <code>&lt;MyComp</code>까지 입력하고 <code>Tab</code> 키를 누릅니다.</li>
    <li><strong>결과:</strong> 파일 맨 윗줄에 <code>import MyComp from ...</code> 코드가 마법처럼 자동으로 추가됩니다.</li>
  </ul>
</div>

---

<h2>9. 실습 : Prettier 설정 (.prettierrc)</h2>

확장 프로그램만 설치하면 내 컴퓨터의 기본 설정으로만 동작합니다. 팀원들과 완벽하게 똑같은 코드 스타일을 공유하려면 프로젝트 안에 설정 파일을 만들어야 합니다.

**✅ 파일 생성**

프로젝트의 최상위 폴더(`package.json`이 있는 곳)에 `.prettierrc`라는 이름의 파일을 새로 만듭니다.

**🧪 설정 코드 입력**

새로 만든 파일에 아래 코드를 복사해서 붙여넣고 저장하세요.

```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "always"
}
```

**📝 옵션 상세 설명**

각 옵션이 어떤 역할을 하는지 알아둡시다.

- **singleQuote:** 큰따옴표(`"`) 대신 작은따옴표(`'`)를 사용합니다.
- **semi:** 문장 끝에 세미콜론(`;`)을 자동으로 붙여줍니다.
- **tabWidth:** 들여쓰기 간격을 2칸으로 설정합니다.
- **trailingComma:** 객체나 배열의 마지막 항목 뒤에도 콤마를 붙입니다. (나중에 수정할 때 에러를 줄여주는 Git 친화적 옵션입니다.)
- **printWidth:** 한 줄의 최대 길이를 80자로 제한하여 가독성을 높입니다.
- **arrowParens:** 화살표 함수의 매개변수가 하나뿐이어도 괄호를 붙입니다. 예: `x => x` 대신 `(x) => x` 형태로 정리합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>적용이 안 된다면?</strong>
  <p>설정 파일을 만들었는데도 적용이 안 된다면, VS Code를 껐다 켜거나 단축키 <code>Command(Ctrl) + Shift + P</code>를 누른 뒤 <code>Reload Window</code>를 입력해서 창을 새로고침 해주세요.</p>
</div>

---

<h2>10. ESLint & Code Quality (문법 검사)</h2>

Prettier가 코드를 예쁘게 꾸며주는 '화장(Style)' 담당이라면, ESLint는 코드에 논리적인 오류나 버그가 없는지 확인해주는 '건강검진(Logic)' 담당입니다.

**📌 자동 설정**

Vite React 템플릿에는 ESLint 설정이 포함되어 있는 경우가 많습니다. 다만 템플릿 버전이나 선택한 옵션에 따라 구성이 달라질 수 있으므로, `package.json`에 `lint` 스크립트가 있는지 확인한 뒤 `npm run lint`를 실행하세요.

**📝 주요 규칙 (Rules)**

ESLint는 개발자가 실수하기 쉬운 부분들을 감시하고 알려줍니다.

- **no-unused-vars:** 변수를 만들어 놓고 쓰지 않으면 경고(빨간 밑줄)를 띄웁니다.
- **react/prop-types:** Props 타입 검사를 위한 ESLint 규칙입니다.  
  다만 최신 Vite React 기본 설정에 항상 포함되는 것은 아니며, 프로젝트 ESLint 설정에 따라 사용할 수도 있고 사용하지 않을 수도 있습니다.  
  TypeScript를 사용하는 프로젝트에서는 보통 별도로 prop-types를 쓰지 않는 경우가 많습니다.
- **react-hooks/rules-of-hooks:** 리액트 훅(Hooks)을 사용할 때 반드시 지켜야 할 규칙을 어기면 에러를 표시합니다.

**✅ 전체 검사 방법**

파일 하나하나 확인할 필요 없이, 터미널에서 아래 명령어를 입력하면 프로젝트 전체의 문법 오류를 한 번에 검사할 수 있습니다.

```bash
npm run lint
```

---

<h2>11. Vite 설정 (vite.config.js)</h2>

이 파일은 프로젝트의 본부와 같습니다. 개발 서버의 포트 번호를 바꾸거나, 복잡한 파일 경로를 별명으로 줄여서 부르는 등 빌드와 관련된 모든 설정을 담당합니다.

**🧪 포트 변경 및 자동 실행**

기본 포트(5173) 대신 내가 원하는 포트(예: 3000)를 쓰거나, 서버를 켤 때 브라우저가 자동으로 열리게 설정할 수 있습니다.

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 3000번 포트로 변경
    open: true, // 서버 시작 시 브라우저 자동 열기
  },
});
```

**🧪 경로 별칭 (Alias)**

파일을 불러올 때 `../../../components/Button`처럼 지저분한 경로 대신, `@` 기호를 사용하여 깔끔하게 불러올 수 있습니다. 아래 코드는 `vite.config.js`의 `defineConfig({ ... })` 안에 들어가는 설정입니다.

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // @는 src 폴더를 의미함
      '@components': '/src/components',
    },
  },
});
```

이렇게 설정하면 아래와 같이 코드가 훨씬 간결해집니다.

- 변경 전: `import Button from '../../components/Button'`
- 변경 후: `import Button from '@/components/Button'`

---

<h2>12. JSX 문법: 자주 하는 실수 TOP 3</h2>

리액트 코드를 작성할 때 초보자들이 가장 많이 겪는 에러 3가지입니다. 이 규칙들만 지켜도 빨간색 에러 화면의 90%는 예방할 수 있습니다.

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ico">🔡</div>
    <div class="wda-fcard-ttl">소문자 이름 시작</div>
    <div class="wda-fcard-dsc"><strong>이유:</strong> 리액트가 <code>&lt;div&gt;</code> 같은 일반 HTML 태그로 오해합니다.<br><strong>해결:</strong> 컴포넌트 이름은 무조건 대문자로 시작해야 합니다. (예: <code>MyApp</code>)</div>
  </div>
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ico">🏷️</div>
    <div class="wda-fcard-ttl">닫는 태그 누락</div>
    <div class="wda-fcard-dsc"><strong>이유:</strong> JSX는 자바스크립트라서 문법 검사가 매우 엄격합니다.<br><strong>해결:</strong> 짝이 없는 태그라도 끝에 슬래시를 넣어 닫아줍니다. (예: <code>&lt;br /&gt;</code>, <code>&lt;img /&gt;</code>)</div>
  </div>
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ico">📦</div>
    <div class="wda-fcard-ttl">부모 태그 누락</div>
    <div class="wda-fcard-dsc"><strong>이유:</strong> 함수는 한 번에 하나의 값(태그 덩어리)만 반환할 수 있습니다.<br><strong>해결:</strong> 의미 없는 <code>&lt;div&gt;</code> 대신 <code>&lt;&gt;...&lt;/&gt;</code> (Fragment)로 전체를 감싸줍니다.</div>
  </div>
</div>

---

<h2>13. 💻 실습: 나만의 프로필 페이지 만들기</h2>

이론과 설정을 모두 마쳤습니다. 이제 깨끗하게 초기화된 프로젝트에서 배운 JSX 문법을 활용해 자기소개 페이지를 만들어봅시다.

### 1단계: 프로젝트 준비 (초기화)

기존에 있던 예제 파일들을 정리하여 깨끗한 상태로 만듭니다.

- **파일 삭제:** `src/App.css` 파일과 `src/assets` 폴더 안의 내용물을 삭제합니다.
- **코드 정리:** `App.jsx` 파일 상단에 있던 `import './App.css'` 코드를 지웁니다.

### 2단계: 골격 만들기 (Snippet)

확장 프로그램의 힘을 빌려 기본 코드를 작성합니다.

- **파일:** `src/App.jsx`
- **동작:** 파일 내용을 다 지운 상태에서 `rafce`라고 입력하고 `Tab` 키를 누릅니다.
- **결과:** 기본적인 함수형 컴포넌트 뼈대가 자동으로 생성됩니다.

### 3단계: 내용 채우기 (JSX 작성)

아래 요구사항에 맞춰 코드를 작성해보세요.

- **필수 포함 내용:** 이름(자기소개), 취미, MBTI
- **문법 적용:**
  - 반드시 최상위 태그(Fragment) `<>...</>`로 감싸세요.
  - 줄 바꿈을 위해 `<br />` 또는 구분선 `<hr />` 태그를 사용해보세요. (닫는 태그 필수!)

```jsx
// src/App.jsx 예시 답안

function App() {
  console.log("렌더링 확인!"); // 콘솔창에서 2번 찍히는지 확인 (StrictMode)

  return (
    <>
      <h2>홍길동</h2>
      <p>취미: 코딩하기</p>
      <p>MBTI: INFJ</p>
      <hr />
    </>
  );
}

export default App;
```

### 4단계: 결과 확인 (DevTools)

작성을 마쳤다면 브라우저와 개발자 도구를 확인합니다.

1. **화면:** 브라우저에 이름과 취미가 잘 나오는지 확인하세요.
2. **Components 탭:** 개발자 도구(`F12`)의 Components 탭에서 `App` 컴포넌트가 보이는지 확인하세요.
3. **Console 탭:** "렌더링 확인!" 로그가 2번 찍혔는지 확인하세요. (2번 찍혔다면 설정이 정상입니다.)

---

<h2>✅ 핵심 요약</h2>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>Cleanup</strong></td>
    <td>create vite 명령어로 생성한 직후에는 불필요한 예제 파일들을 제거하여 프로젝트를 깔끔한 상태로 유지해야 합니다.</td>
  </tr>
  <tr>
    <td><strong>DevTools</strong></td>
    <td>리액트 개발의 필수 도구입니다. Components 탭에서 계층 구조를 확인하고, Profiler 탭에서 렌더링 성능을 측정할 수 있습니다.</td>
  </tr>
  <tr>
    <td><strong>StrictMode</strong></td>
    <td>개발 모드에서 콘솔이 두 번 찍히는 것은 지극히 정상입니다. 잠재적인 버그를 잡기 위한 리액트의 안전장치라는 점을 기억하세요.</td>
  </tr>
  <tr>
    <td><strong>주의사항</strong></td>
    <td>StrictMode의 두 번 렌더링은 임의로 제거하지 말고 그대로 두는 것이 안전합니다. 성능 최적화는 추측이 아니라 Profiler로 먼저 측정한 뒤 진행합니다.</td>
  </tr>
  <tr>
    <td><strong>최종 암기 포인트</strong></td>
    <td>새 프로젝트는 Cleanup → DevTools 설치 → Prettier/ESLint 설정 순서로 세팅하면 실수를 줄일 수 있습니다.</td>
  </tr>
</table>
