---
title: "1-2 Node.js 설치하기"
status: "completed"
description: "Node.js LTS 버전 설치와 설치 확인, PATH 환경 변수의 원리, package.json 구조와 npm scripts, nodemon 활용법까지 정리한다."
category: "React"
section: "Basics"
tags:
  - react
  - nodejs
  - npm
---

<style>
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-cy{background:rgba(250,204,21,.07);border-color:#ca8a04}
.wda-cb{background:rgba(59,130,246,.035);border-color:rgba(59,130,246,.25)}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-cy .wda-clabel{color:#92400e}
.wda-cb .wda-clabel{color:#2563eb}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 16px;margin:.8rem 0 1.6rem;font-size:.83rem;line-height:1.75}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 140px;background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
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
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-compare-ttl{font-size:.84rem;font-weight:700;margin-bottom:8px}
.wda-legacy{border-color:rgba(239,68,68,.22);background:rgba(239,68,68,.02)}
.wda-modern{border-color:rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
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
  • <strong>Node.js 설치하기</strong> — 공식 사이트에서 Node.js를 다운로드 및 설치합니다.<br>
  • <strong>설치 확인하기</strong> — 터미널 명령어로 설치 상태를 확인합니다.<br>
  • <strong>첫 프로젝트 생성</strong> — `npm init`으로 프로젝트를 초기화합니다.
</div>

---

<h2>1. Node.js 버전 선택 (LTS vs Current)</h2>

Node.js 공식 사이트(nodejs.org)에 접속하면 당황스럽게도 두 가지 다운로드 버튼이 보입니다.

이 둘의 차이를 명확히 알고 설치해야 합니다.

| **구분** | **LTS (Long Term Support) - 추천 👍** | **Current (최신 버전)** |
| --- | --- | --- |
| **의미** | **"장기 지원 버전"**이라는 뜻으로, 기업이나 실무 환경에서 사용하는 **표준 버전**입니다. | **"최신 기능 버전"**으로, 가장 새로운 기능을 먼저 써볼 수 있는 버전입니다. |
| **안정성/최신성** | 이미 검증이 완료되어 버그가 적고 안정적입니다. | 가장 최신의 기능이 포함되어 있습니다. |
| **지원/불안정성** | 보안 업데이트를 오랫동안 지원해 줍니다. | 실험적인 기능이 있어 에러가 발생하거나, 업데이트가 너무 자주 일어날 수 있습니다. |
| **버전 규칙** | 버전 숫자가 **짝수**입니다. (예: v18, v20, v22...) | 버전 숫자가 **홀수**입니다. (예: v19, v21, v23...) |

<div class="wda-callout wda-ci">
  Node.js는 보통 짝수 major 버전이 안정화 과정을 거쳐 LTS가 됩니다. 홀수 major 버전은 장기 지원 대상이 아니고 비교적 짧게 유지됩니다. 초보자와 실무 학습자는 공식 사이트에서 <strong>LTS</strong>라고 표시된 버전을 선택하면 됩니다.
</div>

**💡 보충 설명**

<div class="wda-callout wda-cs">
  "강의에서는 안정적인 LTS 버전을 설치하여 진행합니다!"<br><br>
  개발 공부를 할 때는 '내 코드가 틀린 건지, Node.js 버그인지' 헷갈리는 상황을 피하는 게 상책입니다. 무조건 <strong>LTS(짝수 버전)</strong>를 선택하는 것이 정신 건강에 좋습니다.
</div>

---

<h2>2. 설치 확인하기 (Verify Installation)</h2>

Node.js를 설치하면 `npm`도 자동으로 같이 설치되므로, 두 가지 모두 확인해야 합니다.

### 1) Node.js 버전 확인

터미널에 아래 명령어를 입력하여 Node.js가 정상적으로 인식되는지 확인합니다.

```bash
node -v
# 또는
node --version
```

- **성공 시:** `v20.10.0` 처럼 버전 번호가 나타납니다.

### 2) npm 버전 확인

패키지 관리자도 잘 설치되었는지 확인합니다.

```bash
npm -v
# 또는
npm --version
```

- **성공 시:** `10.2.3` 처럼 버전 번호가 나타납니다.

### ✅ 체크 포인트

<div class="wda-callout wda-cb">
  "버전 번호가 숫자로 출력되면 설치 성공입니다!"<br><br>
  만약 "명령어를 찾을 수 없음(command not found)"이라는 메시지가 뜬다면, 설치가 제대로 안 된 것이니 재설치하거나 터미널을 껏다 켜보세요.
</div>

---

<h2>3. 환경 변수 PATH (Deep Dive)</h2>

### 1) PATH의 정체: "지도(Map)"

`PATH`는 운영체제(윈도우/맥)가 **"실행 파일이 어디 있는지 적어둔 경로들의 목록"**입니다.

우리가 터미널에 `node`라고 치면, 컴퓨터는 다음 과정을 순식간에 처리합니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">검색</div>
      <div class="wda-sdsc">PATH 목록에 등록된 폴더들을 순서대로 뒤집니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">발견</div>
      <div class="wda-sdsc"><code>node.exe</code> (또는 <code>node</code> 실행 파일)를 찾으면 즉시 실행합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">실패</div>
      <div class="wda-sdsc">끝까지 찾아도 없으면 그제야 <strong>"Command not found"</strong> 에러를 띄웁니다.</div>
    </div>
  </div>
</div>

### 2) 전역 설치(Global Install)의 원리

npm 명령어를 쓸 때 자주 보이는 `-g` 옵션의 비밀도 여기에 있습니다.

```bash
npm install -g 패키지명
```

- **의미:** "이 패키지를 현재 폴더가 아니라, PATH에 등록된 공용 폴더(시스템 폴더)에 설치해라!"
- **결과:** PATH에 등록된 곳에 설치했으므로, 컴퓨터 어느 폴더에서든 해당 명령어를 실행할 수 있게 됩니다.

<div class="wda-callout wda-ci">
  전역 설치의 원리를 설명하기 위한 예시입니다. 다만 최신 React 프로젝트 생성은 <code>create-react-app</code>보다 <strong>Vite</strong>를 사용하는 경우가 많습니다.
</div>

### 💡 고급 TIP: NVM의 원리

<div class="wda-callout wda-cs">
  "버전을 어떻게 맘대로 바꿀까?"<br><br>
  많이 사용하는 버전 관리 도구인 <strong>nvm</strong>은 바로 이 <strong>PATH 경로를 동적으로 바꿔치기</strong>하는 원리를 사용합니다. PATH가 가리키는 곳을 v18 폴더에서 v20 폴더로 살짝 바꾸는 것이죠.
</div>

---

<h2>4. 설치 문제 해결 (Troubleshooting)</h2>

### 1) 'node'를 찾을 수 없음 (Command not found)

터미널에 `node -v`를 쳤는데, 버전을 보여주는 대신 알 수 없는 명령어라는 에러가 뜨는 경우입니다.

**원인:** 환경 변수(PATH) 설정이 제대로 갱신되지 않았거나 꼬인 문제입니다.

**해결 방법:**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">컴퓨터 재시작</div>
    <div class="wda-fcard-dsc">가장 확실한 방법입니다. 환경 변수를 새로 불러옵니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">새 터미널 열기</div>
    <div class="wda-fcard-dsc">기존 터미널 창을 끄고 새로 엽니다. (설치 전에 열어둔 창은 인식을 못 합니다.)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">재설치 시도</div>
    <div class="wda-fcard-dsc">위 방법으로도 안 되면 Node.js를 지우고 다시 설치해 보세요.</div>
  </div>
</div>

### 2) 권한 오류 (Permission Denied) - macOS/Linux

주로 맥(Mac) 사용자에게 발생하는 **"EACCES"** 관련 에러입니다.

무언가 설치하려 할 때 "너는 관리자가 아니라서 안 돼"라며 막는 현상입니다.

- **원인:** 시스템 폴더에 쓰기 권한이 없어서 발생합니다.
- **해결 방법:**
  - **sudo 사용:** 명령어 앞에 `sudo`를 붙여 관리자 권한으로 실행합니다. (비밀번호 입력 필요)

```bash
sudo npm install -g 패키지명
```

  - **nvm 사용 (권장 👍):** Node 버전 관리자(nvm)를 사용하면 권한 문제없이 깔끔하게 설치할 수 있습니다.

<div class="wda-callout wda-cw">
  <code>sudo</code>는 급할 때 임시로 사용할 수 있지만, 전역 npm 설치에 계속 사용하는 방식은 권장하지 않습니다. 권한 문제를 근본적으로 줄이려면 <strong>nvm</strong>으로 Node.js를 설치하고 관리하는 방식이 더 안전합니다.
</div>

---

<h2>5. 첫 프로젝트 만들기 (Create First Project)</h2>

터미널에서 아래 3단계를 순서대로 입력해 보세요.

### 1단계: 프로젝트 폴더 생성

먼저 프로젝트를 담을 폴더를 만들고, 그 안으로 들어갑니다.

```bash
mkdir my-first-project  # 폴더 만들기 (Make Directory)
cd my-first-project     # 폴더로 이동 (Change Directory)
```

### 2단계: npm 초기화

이제 이 폴더를 npm이 관리하는 프로젝트로 선언합니다.

```bash
npm init -y
```

- **`y` 옵션:** "Yes"의 약자입니다.  
  프로젝트 이름, 버전 등을 일일이 물어보지 말고 "기본값으로 빠르게 생성해!"라는 뜻입니다.

### 3단계: 결과 확인

명령어가 잘 실행되었다면, 폴더 안에 **`package.json`**이라는 파일이 뿅 하고 생깁니다.

- **의미:** 이제 이 폴더는 Node.js 생태계의 일원이 되었습니다!  
  여기에 React도 깔고, 라이브러리도 설치할 수 있게 된 것이죠.

---

<h2>6. package.json 살펴보기 (Exploring package.json)</h2>

이 파일만 있으면 전 세계 어느 컴퓨터에서든 **똑같은 개발 환경**을 복구할 수 있습니다.

### 1) 프로젝트 정보 (Project Info)

프로젝트의 기본적인 신상 정보가 담겨 있습니다.

| **항목** | **설명** | **비고** |
| --- | --- | --- |
| **name** | **프로젝트 이름** | URL에 들어갈 수 있는 소문자 위주여야 합니다. (공백 불가) |
| **version** | **버전** | `1.0.0` 처럼 3자리 숫자로 관리합니다. (Semantic Versioning) |
| **description** | **설명** | 프로젝트에 대한 간단한 소개글입니다. |
| **license** | **라이선스** | 코드 사용 권한을 명시합니다. (예: MIT, ISC) |

### 2) 실행 및 관리 (Execution & Management)

프로젝트를 돌리기 위한 설정과 재료 목록입니다.

| **항목** | **설명** | **중요도** |
| --- | --- | --- |
| **scripts** | **명령어 단축키** | `npm run start` 처럼 자주 쓰는 긴 명령어를 짧게 등록해 둡니다. ⭐ |
| **dependencies** | **필수 재료** | 프로그램 실행에 **꼭 필요한 패키지** 목록입니다. (예: React) ⭐ |
| **devDependencies** | **개발용 재료** | **개발할 때만 필요한 패키지** 목록입니다. (예: Prettier, ESLint) |
| **main** | **시작점** | 프로그램이 처음 시작되는 파일입니다. (보통 `index.js`) |

### 💼 실무 포인트

<div class="wda-callout wda-cs">
  "이 파일이 명세서(Spec Sheet)입니다!"<br><br>
  협업할 때 동료에게 거대한 <code>node_modules</code> 폴더를 통째로 압축해서 주는 게 아니라, 가벼운 <strong>`package.json` 파일 하나만 공유</strong>하면 됩니다. 동료는 <code>npm install</code> 명령어 한 방으로 똑같은 환경을 만들 수 있기 때문입니다.
</div>

---

<h2>7. 첫 파일 실행 설정 (package.json)</h2>

이 파일은 Node.js에게 "이 프로젝트를 실행하려면 어디서부터 시작해야 해?"를 알려주는 **네비게이션** 역할을 합니다.

### 1) 실행 및 관리 (Execution)

프로젝트가 어떻게 돌아가는지 결정하는 가장 중요한 부분입니다.

| **항목** | **역할** | **상세 설명** |
| --- | --- | --- |
| **main** | **시작점 파일** | • **"제일 먼저 실행할 파일이 뭐야?"**에 대한 대답입니다.<br>• 보통 `index.js`로 설정하며, 프로젝트의 대문 역할을 합니다. |
| **scripts** | **실행 단축키** | • **"긴 명령어 치기 귀찮아!"** 할 때 사용합니다.<br>• 예: `npm run start`를 입력하면 복잡한 실행 명령어를 대신 수행해 줍니다. |
| **dependencies** | **필수 재료** | • 실행에 꼭 필요한 라이브러리(React 등) 목록입니다. |

### 2) 프로젝트 정보 (Info)

프로젝트의 이름표와 같습니다.

- **name:** 프로젝트 이름 (URL 친화적이어야 함)
- **version:** 버전 (예: 1.0.0)
- **description:** 프로젝트 설명

**💡 보충 설명**

<div class="wda-callout wda-ci">
  "main(index.js)이 없으면 실행되지 않습니다!"<br><br>
  <code>package.json</code>의 <code>main</code> 부분에 적혀 있는 파일(<code>index.js</code>)이 실제로 존재해야 <code>npm start</code> 등의 명령어가 정상적으로 작동합니다. 즉, 이 파일은 <strong>실행의 기준점</strong>을 잡아주는 문서입니다.<br><br>
  다만 정확히는 <code>main</code>은 이 패키지를 다른 파일에서 불러올 때(import/require) 기본 진입점 역할을 합니다.<br>
  <code>npm start</code>는 보통 <code>scripts.start</code>에 적힌 명령어를 실행합니다.<br>
  따라서 실제 실행 기준은 <code>main</code>보다 <code>scripts</code>를 먼저 확인하는 것이 좋습니다.
</div>

---

<h2>8. npm scripts 활용하기</h2>

자주 사용하는 긴 명령어를 짧은 단어로 줄여서 `package.json`에 등록해두는 기능입니다.

### 1) Scripts 등록 (수정)

`package.json` 파일을 열어 `scripts` 부분을 아래와 같이 수정합니다.

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "node index.js",
    "hello": "echo Hello World"
  }
}
```

`start`는 핵심 실행 명령어, `dev`는 개발용 명령어, `hello`는 테스트용 단순 출력 명령어입니다.

- **의미:** "이제부터 내가 `start`라고 외치면, 너는 `node index.js`를 실행해!"라고 약속하는 것입니다.

### 2) 실행 방법 (중요 규칙)

실행할 때는 **`run`을 붙이느냐 마느냐**의 차이가 있습니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">공식 명령어 (start, test) → <code>npm start</code></div>
    너무 유명하고 자주 쓰는 명령어라 <code>run</code>을 <strong>생략해도 됩니다.</strong>
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">커스텀 명령어 (dev, build, hello...) → <code>npm run dev</code></div>
    우리가 임의로 만든 이름은 반드시 중간에 <strong><code>run</code>을 붙여야</strong> 알아듣습니다.
  </div>
</div>

---

<h2>9. 자동 재실행 도구 (Nodemon)</h2>

### 1) 왜 필요한가요? (비교)

<div class="wda-compare">
  <div class="wda-compare-card wda-legacy">
    <div class="wda-compare-ttl">기존 방식</div>
    <strong>과정:</strong> 1. 코드 수정 (Ctrl+S) → 2. 터미널 클릭 → 3. <code>Ctrl+C</code>로 서버 종료 → 4. 화살표 위(<code>↑</code>) 키 + Enter로 재실행 (무한 반복...)<br><br>
    <strong>장점:</strong> 없음 (단순 반복 작업)
  </div>
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-ttl">Nodemon 사용</div>
    <strong>과정:</strong> 1. 코드 수정 (Ctrl+S) → 2. 자동 재시작! 🎉 (알아서 감지하고 다시 실행해 줍니다.)<br><br>
    <strong>장점:</strong> 개발 속도가 훨씬 빨라집니다.
  </div>
</div>

### 2) 설치 및 사용법

이 도구는 실제 서비스 배포 시에는 필요 없고, **오직 개발할 때만 필요**하므로 `-D` 옵션을 붙여서 설치합니다.

```bash
# 설치 (개발용 의존성으로 설치)
npm install -D nodemon
```

### 3) 똑똑하게 적용하기 (꿀팁)

매번 `npx nodemon index.js`라고 치는 것도 귀찮으므로, 방금 배운 `scripts`에 등록해서 사용하세요.

- **package.json 수정**

```json
{
  "scripts": {
    "dev": "nodemon index.js"
  }
}
```

- **실행:** 이제 터미널에 **`npm run dev`**만 치면, 코드를 고칠 때마다 서버가 알아서 갱신됩니다!

### 4) npm script에 연결 (강추)

`package.json`의 `scripts`에서 **dev만 교체**:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "hello": "echo Hello World"
  }
}
```

실행:

```bash
npm run dev
```

---

<h2>10. 프로젝트 구조 파헤치기 (Project Structure)</h2>

`npm install`을 하고 나면 아래와 같은 파일들이 생겨납니다. 각각의 역할이 무엇인지 정확히 아는 것이 중요합니다.

### 1) 전체 구조 (File Tree)

```text
my-first-project/
├── 📁 node_modules/      # (자동 생성) 설치된 패키지들의 실제 저장소
├── 📄 package.json       # 프로젝트 설정 파일 (명세서)
├── 📄 package-lock.json  # (자동 생성) 정확한 버전 기록 파일
└── 📄 index.js           # 우리가 직접 짠 코드
```

### 2) 핵심 파일 상세 설명

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">node_modules — "거대한 창고"</div>
    실제 라이브러리 파일들이 저장되는 곳입니다. 설치된 패키지가 많을수록 용량이 어마어마하게 커집니다.<br><br>
    <strong>⚠️ 주의사항:</strong> <strong>Git에 올리지 마세요!</strong> ❌ 용량이 너무 크기 때문에, 보통 <code>.gitignore</code> 파일에 등록해서 공유 목록에서 뺍니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">package-lock.json — "상세 영수증"</div>
    <code>package.json</code>이 대략적인 주문서라면, 이 파일은 실제로 설치된 정확한 버전 정보를 기록한 영수증입니다.<br><br>
    <strong>⚠️ 주의사항:</strong> <strong>지우지 마세요!</strong> 팀원들과 협업할 때 <strong>"내 컴퓨터에선 되는데 넌 왜 안 돼?"</strong> 문제를 막아주는 1등 공신입니다.
  </div>
</div>

### 💼 실무 포인트

<div class="wda-callout wda-cs">
  "동료에게 줄 때는 node_modules만 빼고 줍니다!"<br><br>
  동료는 <code>package.json</code>과 <code>package-lock.json</code>만 있으면, <code>npm install</code> 명령어 한 번으로 <code>node_modules</code>를 다시 복원할 수 있기 때문입니다. 복원 시간은 프로젝트 크기와 네트워크 상태에 따라 달라질 수 있습니다.
</div>

---

<h2>⁉️ 자주 묻는 질문 (FAQ)</h2>

### Q1. 윈도우(Windows)에서 환경 변수(PATH)를 따로 설정해야 하나요?

옛날 블로그 글을 보면 설정하라는 말이 많아서 헷갈리시죠?

- **정답: 아니요, 설치 시 자동으로 됩니다!**
- **설명:** 대부분의 경우 설치 과정에서 **"Add to PATH"** 옵션이 기본으로 켜져 있어 자동 설정됩니다. 그냥 '다음(Next)'만 잘 누르면 알아서 설정되니 안심하세요.  
  다만 설치 후 `node -v`가 동작하지 않으면 터미널을 새로 열거나, "Add to PATH" 옵션이 체크되어 있었는지 확인해야 합니다.

### Q2. 맥(macOS)/리눅스에서 npm 설치 시 '권한 오류'가 나면 어떡하나요?

설치할 때 "Permission denied" 같은 빨간 에러가 뜨는 경우입니다.

- **정답: `sudo` 사용 또는 `nvm` 사용**
- **설명:**
  1. **급할 때:** 명령어 앞에 `sudo`를 붙여 관리자 권한으로 실행합니다. (예: `sudo npm install ...`) 다만 전역 설치에 계속 사용하는 습관은 권장하지 않습니다.
  2. **권장:** **nvm(Node Version Manager)**을 설치해서 Node.js를 관리하면 권한 문제없이 깔끔하게 해결됩니다.

### Q3. `npm init` 없이 직접 `package.json` 파일을 만들어도 되나요?

터미널이 무섭거나 귀찮아서 메모장으로 만들고 싶을 때가 있죠.

- **정답: 네, 100% 동일합니다!**
- **설명:** `npm init`의 핵심 결과물은 `package.json` 파일 생성입니다.  
  직접 `package.json`을 만들어도 되지만, JSON 문법과 필수 필드를 정확히 작성해야 합니다.  
  초보자 단계에서는 `npm init -y`를 사용하는 것이 안전합니다.

---

<h2>✅ 핵심 요약</h2>

<table class="wda-summary-table">
  <tr>
    <th>단계</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>1. Node.js 설치</strong></td>
    <td><strong>"LTS &amp; 버전 확인"</strong><br>공식 사이트(nodejs.org)에서 <strong>안정적인 LTS 버전</strong>을 설치하고, 터미널에서 <code>node -v</code>로 설치를 확인했습니다.</td>
  </tr>
  <tr>
    <td><strong>2. 프로젝트 시작</strong></td>
    <td><strong>"npm init -y"</strong><br>프로젝트 폴더를 만들고 초기화하여, 프로젝트의 신분증인 <strong>`package.json`</strong>을 생성했습니다.</td>
  </tr>
  <tr>
    <td><strong>3. 스크립트 실행</strong></td>
    <td><strong>"npm run"</strong><br><code>node index.js</code>로 직접 실행하거나, <strong>`scripts`</strong>에 단축 명령어를 등록하여 편하게 실행하는 법을 익혔습니다.</td>
  </tr>
</table>
