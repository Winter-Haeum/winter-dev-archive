---
title: "1-3 npm으로 패키지 관리하기"
status: "completed"
description: "시맨틱 버저닝, package.json의 scripts와 node_modules, package-lock.json, npm/npx 명령어와 실무 활용법까지 정리한다."
category: "React"
section: "Basics"
tags:
  - react
  - npm
  - package-management
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
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
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
  • <strong>package.json 이해하기</strong> — 프로젝트 설정 파일의 구조와 역할을 파악합니다.<br>
  • <strong>의존성 관리하기</strong> — `dependencies`와 `devDependencies`의 차이를 이해합니다.<br>
  • <strong>버전 관리 규칙</strong> — 시맨틱 버저닝과 버전 범위 표기법을 익힙니다.<br>
  • <strong>npm 명령어 활용</strong> — `npm install`, `run`, `npx` 등 실무 명령어를 마스터합니다.
</div>

---

<h2>1. 시맨틱 버저닝 (Semantic Versioning)</h2>

Node.js 생태계에서 사용하는 **"버전 번호를 매기는 표준 규칙"**입니다.

**📌 버전 숫자의 의미 (x.y.z)**

버전 번호는 점(`.`)으로 구분된 세 개의 숫자로 구성되며, 각각 변경의 크기를 나타냅니다.

| **위치** | **명칭** | **설명** | **예시** |
| --- | --- | --- | --- |
| **Major**(첫 번째) | **주 버전** | **"하위 호환 불가"**<br>기존 코드가 작동하지 않을 정도로 큰 변화가 있을 때 올립니다. | `1.0.0` → `2.0.0` |
| **Minor**(두 번째) | **부 버전** | **"기능 추가"**<br>기존 기능은 유지하되, 새로운 기능이 추가되었을 때 올립니다. | `1.2.0` → `1.3.0` |
| **Patch**(세 번째) | **수 버전** | **"버그 수정"**<br>기능 변화 없이 간단한 버그만 고쳤을 때 올립니다. | `1.2.1` → `1.2.2` |

**📝 버전 기호 (Range)**

`package.json`에서 버전 숫자 앞에 붙는 기호는 "어디까지 업데이트를 허용할지"를 정합니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">^ (Caret, 캐럿) - 기본값</div>
    <div class="wda-fcard-dsc"><strong>의미:</strong> "Major(주 버전)만 안 바뀌면 다 업데이트해!"<br><strong>동작:</strong> <code>^1.2.3</code>은 <code>1.9.9</code>까지는 업데이트하지만, <code>2.0.0</code>은 막습니다. (가장 많이 사용)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">~ (Tilde, 틸드)</div>
    <div class="wda-fcard-dsc"><strong>의미:</strong> "Patch(수 버전)만 업데이트해!"<br><strong>동작:</strong> <code>~1.2.3</code>은 <code>1.2.9</code>까지만 허용하고, <code>1.3.0</code>도 막습니다. (더 보수적)</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Major(맨 앞자리)</strong>가 바뀌면 사고가 날 수 있습니다! <code>^</code> 기호를 쓰는 이유는 <strong>"새 기능(Minor)이나 버그 수정(Patch)은 받아들이되, 코드가 깨질 수 있는 큰 변화(Major)는 막겠다"</strong>는 안전장치입니다.
</div>

---

<h2>2. 의존성 트리와 "지옥" (Deep Dive)</h2>

의존성(Dependency)은 단순히 하나로 끝나는 게 아니라, **A가 B를 부르고, B가 C를 부르는 식**으로 꼬리에 꼬리를 뭅니다.

**📌 node_modules 구조 (중첩의 비밀)**

npm이 수많은 라이브러리 간의 **버전 충돌을 해결하는 독특한 방식** 때문에 `node_modules` 폴더가 블랙홀처럼 깊어지는 것입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">상황 (충돌 발생) — "서로 다른 버전을 원해요!"</div>
    <div class="wda-fcard-dsc">React는 <strong>History v5</strong>가, Router는 <strong>History v4</strong>가 필요합니다.<br>원칙적으로는 이름이 같아서 한 폴더에 같이 있을 수 없습니다. (충돌!)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">해결 (중첩 설치) — "그럼 둘 다 깔아줄게!"</div>
    <div class="wda-fcard-dsc">필요한 곳 안쪽에 <strong>중첩(Nested)</strong>시켜서 각각 따로 쓰게 만듭니다.<br>📂 <code>node_modules/History (v5)</code><br>📂 <code>node_modules/Router/node_modules/History (v4)</code></div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">결과 (Trade-off) — "충돌은 피했지만..."</div>
    <div class="wda-fcard-dsc">프로젝트는 안전하게 돌아가지만, 똑같은 라이브러리가 버전별로 여러 개 설치되므로 <strong>폴더 용량이 어마어마하게 커집니다.</strong></div>
  </div>
</div>

**⚠️ Dependency Hell (의존성 지옥)**

`package.json`에서 `^`나 `~`를 쓸 때 발생할 수 있는 끔찍한 상황입니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">시나리오</div>
      <div class="wda-sdsc">오픈소스 개발자가 실수로 <strong>"하위 호환성"을 깨는 코드</strong>를 Minor 버전 업데이트에 포함해서 배포했다면?</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">문제 발생</div>
      <div class="wda-sdsc">나는 가만히 있었는데, <code>^</code> 설정 때문에 자동으로 업데이트가 되면서 <strong>멀쩡하던 내 프로젝트가 갑자기 안 돌아가는 사태</strong>가 벌어집니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">해결책</div>
      <div class="wda-sdsc">이래서 <code>package-lock.json</code>이 필수입니다. 현재 설치된 정확한 버전 트리를 기록해두면, 다음에 <code>npm install</code>을 실행할 때 <code>package.json</code>의 넓은 범위만 보는 것이 아니라 lockfile에 기록된 버전을 기준으로 최대한 같은 환경을 복원할 수 있습니다.</div>
    </div>
  </div>
</div>

---

<h2>3. 버전 범위 표기법 (Version Range Notation)</h2>

`package.json`에서 버전 번호 앞에 붙는 **특수 기호(`^`, `~`)**는 npm이 **"어디까지 업데이트를 허용할지"**를 결정하는 중요한 규칙입니다.

| **기호** | **이름** | **의미 (업데이트 규칙)** | **예시 (1.2.3 기준)** |
| --- | --- | --- | --- |
| **`^`** | **캐럿**(Caret) ⭐**기본값** | **"Major(맨 앞)만 안 바뀌면 OK"**<br>새 기능(`Minor`)이나 버그 수정(`Patch`)은 받아들이지만, 판을 엎는 변화는 거부합니다. | ✅ `1.2.4` (Patch)<br>✅ `1.3.0` (Minor)<br>❌ `2.0.0` (Major 변경) |
| **`~`** | **틸드**(Tilde) | **"Patch(맨 뒤)만 OK"**<br>기능 추가도 혹시 에러가 날까 봐 무서우니, 오직 **버그 수정**만 받겠다는 보수적인 설정입니다. | ✅ `1.2.9` (Patch)<br>❌ `1.3.0` (Minor 변경)<br>❌ `2.0.0` (Major 변경) |
| **없음** | **고정**(Fixed) | **"딱 이 버전만 써!"**<br>업데이트를 아예 차단하고, 적혀 있는 버전과 **정확히 일치**하는 것만 설치합니다. | ✅ `1.2.3` (정확 일치)<br>❌ `1.2.4` (설치 안 됨) |

**💡 보충 설명 (Semantic Versioning)**

<div class="wda-callout wda-ci">
  버전 숫자는 <code>Major.Minor.Patch</code> (예: <code>1.2.3</code>) 순서로 되어 있습니다.<br><br>
  • <strong>Major (1)</strong>: 하위 호환성이 깨지는 <strong>대격변</strong> (기존 코드 안 돌아감)<br>
  • <strong>Minor (2)</strong>: 하위 호환성은 지키면서 <strong>기능 추가</strong><br>
  • <strong>Patch (3)</strong>: 간단한 <strong>버그 수정</strong>
</div>

---

<h2>4. scripts 필드</h2>

`scripts`는 복잡한 명령어를 짧은 별명(Alias)으로 등록해서, `npm run` 명령어로 간편하게 실행할 수 있게 해주는 필드입니다.

**🧪 scripts 정의 (예시)**

`package.json` 안에 아래와 같이 작성합니다.

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no...\"",
    "build": "echo \"Building...\""
  }
}
```

`start`는 개발 서버 실행, `dev`는 자동으로 재실행되는 개발 모드, `test`는 테스트 코드 실행, `build`는 배포용 파일 생성을 의미합니다.

**📌 주요 스크립트 역할**

실무에서 관습적으로 사용하는 스크립트 이름과 역할입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">start — 개발 서버 실행</div>
    <div class="wda-fcard-dsc">개발 중 실시간으로 확인할 때 사용합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">build — 배포용 파일 생성</div>
    <div class="wda-fcard-dsc">서버에 올리기 전, 코드를 최적화하여 압축할 때 사용합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">test — 테스트 코드 실행</div>
    <div class="wda-fcard-dsc">기능이 정상 작동하는지 점검하고 버그를 확인할 때 사용합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">lint — 코드 스타일 검사</div>
    <div class="wda-fcard-dsc">코드가 규칙에 맞게 작성되었는지 품질을 관리할 때 사용합니다.</div>
  </div>
</div>

**💡 실행 규칙 (꿀팁)**

명령어를 실행할 때 `run`을 생략할 수 있는 예외가 있습니다.

- **`npm start`, `npm test`:** 너무 자주 써서 **`run` 생략 가능**합니다.
- **그 외 (`dev`, `build`, `lint` 등):** 반드시 **`npm run [이름]`** 형태로 적어야 합니다.

---

<h2>5. 로컬 서버와 주소 (Deep Dive)</h2>

터미널에서 `npm run start`를 실행하면, 마법처럼 **내 컴퓨터가 "임시 웹 서버"**가 됩니다.

이때 사용하는 주소들의 의미를 쉽게 풀어서 설명해 드립니다.

| **용어 (Term)** | **정의 (Definition)** | **비유 (Analogy)** | **특징 (Note)** |
| --- | --- | --- | --- |
| **1) Localhost** | "내 컴퓨터"를 가리키는 **도메인 이름(문자)** | **"우리 집"** (별명) | 남의 집 주소를 외우긴 힘들어도, "우리 집"이라고 하면 바로 알아듣는 것과 같습니다. |
| **2) 127.0.0.1** | "내 컴퓨터"를 가리키는 **IP 주소(숫자)** | **"내선 번호"** (내부 전용) | 회사 내선 전화처럼 외부에서는 걸 수 없고, 오직 **내 컴퓨터 안에서만** 통하는 번호입니다. |
| **3) Port (3000)** | 프로그램이 실행되고 있는 **문(Door)** | **"101호"** (상세 주소) | 아파트(IP)까지는 왔는데, 정확히 **몇 호(Port)**로 들어가야 내가 만든 프로그램(React)이 있는지 알려줍니다. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Loopback Address</strong>라고도 부릅니다. 데이터가 외부 인터넷망으로 나가지 않고, 내 컴퓨터 안에서만 빙글빙글 돈다고 해서 붙여진 이름입니다. 외부 해킹 위협으로부터 <strong>안전</strong>하게 개발할 수 있는 이유입니다.
</div>

---

<h2>6. node_modules 폴더</h2>

`package.json`이 주문서라면, `node_modules`는 실제로 배달 온 **물건들이 쌓여 있는 거대한 창고**입니다.

**📁 구조 (Structure)**

프로젝트 폴더를 열어보면 아래와 같이 구성되어 있습니다.

```text
my-project/
├── 📁 node_modules/      # 👈 모든 패키지들의 실제 저장소 (자동 생성)
│   ├── react/            # 내가 설치한 패키지
│   ├── react-dom/        # 내가 설치한 패키지
│   ├── lodash/           # (예시) 또 다른 패키지
│   └── ...               # (수백~수천 개가 더 있음) 😱
├── 📄 package.json       # 설정 파일
└── 📄 package-lock.json  # 버전 잠금 파일
```

**📌 특징 (Features)**

이 폴더는 개발자가 직접 건드리는 곳이 아니라, **npm이 알아서 관리하는 영역**입니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">npm 자동 관리</div>
    <div class="wda-fcard-dsc">개발자가 직접 건드리지 않습니다. npm 명령어를 통해 라이브러리가 자동으로 추가되거나 삭제됩니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">거대한 용량 (수백 MB)</div>
    <div class="wda-fcard-dsc">내가 설치한 라이브러리뿐만 아니라, <strong>그 라이브러리가 필요로 하는 친구들(의존성)</strong>까지 모두 포함하기 때문에 매우 무겁습니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl">Git 업로드 금지 ❌ (No Commit)</div>
    <div class="wda-fcard-dsc">용량이 너무 크고 파일이 많아서 깃허브(GitHub)에 올리면 안 됩니다. (보통 <code>.gitignore</code> 파일에 등록해서 무시합니다.)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">재설치 가능 (Disposable)</div>
    <div class="wda-fcard-dsc"><code>node_modules</code>는 삭제해도 <strong><code>package.json</code>과 <code>package-lock.json</code></strong>이 있으면 <code>npm install</code>로 다시 복구할 수 있습니다. 특히 <code>package-lock.json</code>이 있으면 팀원 간 설치 버전을 더 일관되게 맞출 수 있습니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>.gitignore 설정이 필수입니다!</strong> 프로젝트를 시작할 때 <code>.gitignore</code>라는 파일을 만들고 그 안에 <code>node_modules/</code>라고 적어주세요. 그래야 Git이 "아, 이 무거운 폴더는 무시하고 저장하지 말아야겠다"라고 인식합니다.
</div>

---

<h2>7. package-lock.json</h2>

package-lock.json은 실제 설치된 의존성 트리와 정확한 버전을 기록하여, 팀원들이 최대한 동일한 설치 결과를 얻도록 도와주는 파일입니다.  
다만 OS, Node/npm 버전, optional dependency 차이에 따라 일부 설치 결과가 달라질 수 있습니다.

**🆚 역할 비교 (vs package.json)**

두 파일은 비슷해 보이지만, **"범위"냐 "고정"이냐**의 결정적인 차이가 있습니다.

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">package.json</div>
    <strong>코드:</strong> <code>"react": "^18.2.0"</code><br><br>
    <strong>의미:</strong> "18.2.0 이상, 19.0.0 미만" (범위)<br><code>^18.2.0</code>은 Major 버전이 바뀌는 <code>19.0.0</code>은 허용하지 않는다는 뜻입니다.<br><br>
    <strong>비유:</strong> "김치찌개" (메뉴판/레시피) — 어떤 김치찌개인지는 셰프(설치 시점) 맘입니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">package-lock.json</div>
    <strong>코드:</strong> <code>"version": "18.2.0", "resolved": "..."</code><br><br>
    <strong>의미:</strong> "정확히 18.2.0 버전" (고정)<br>실제로 설치된 구체적인 정보를 박제합니다.<br><br>
    <strong>비유:</strong> "종가집 김치 500g" (영수증/상세명세서) — 어떤 재료를 썼는지 정확히 기록된 영수증입니다.
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Git에 반드시 커밋(Commit)해야 합니다!</strong> 이 파일을 팀원들과 공유해야만 서로 다른 버전이 설치되는 불상사를 막을 수 있습니다. <code>.gitignore</code>에 넣지 않도록 주의하세요!
</div>

---

<h2>8. 잠깐! ESLint가 뭔가요?</h2>

자바스크립트 문법 검사 도구(Linter)로, 오타나 스타일 오류를 감지하여 버그를 미리 막아주는 역할을 합니다.

**🆚 두 가지 사용법의 차이 (VS Code vs npm)**

많은 분들이 VS Code 확장 프로그램만 깔면 끝인 줄 알지만, **두 가지는 역할이 다릅니다.**

| **구분** | **VS Code 확장 프로그램** | **npm 패키지 (eslint)** |
| --- | --- | --- |
| **역할** | **"안경" (시각적 도구)** | **"법전" (실제 규칙)** |
| **기능** | 에디터에서 빨간 줄을 그어 **실시간으로 보여줍니다.** | 실제 검사를 수행하고, **프로젝트만의 구체적인 규칙**을 담고 있습니다. |
| **한계** | 내 컴퓨터 화면에서만 보입니다. (팀원 강제 불가) | **CI/CD(자동 배포) 과정에서도 검사**할 수 있어 엄격한 관리가 가능합니다. |

**💡 왜 둘 다 써야 하나요?**

<div class="wda-callout wda-ci">
  확장 프로그램은 보기 편하게 해주고, npm 패키지는 실제 검사관 역할을 합니다.
</div>

1. **npm 패키지 설치 (`npm install -D eslint`):** 우리 프로젝트가 따를 공통의 규칙(법)을 정하고 팀원 모두가 똑같은 기준을 갖게 합니다.
2. **VS Code 확장 프로그램 설치:** 그 규칙을 위반했을 때, 코딩하는 도중 바로바로 알 수 있도록 **시각적인 피드백**을 받습니다.

**결론:** 완벽한 개발 환경을 위해서는 **둘 다 사용해야 합니다!**

---

<h2>9. npm 주요 명령어 총정리</h2>

| **명령어** | **설명** | **예시 (단축키)** |
| --- | --- | --- |
| **npm init** | **새 프로젝트 초기화**<br>`package.json` 파일을 생성합니다. | `npm init -y`(모든 질문에 Yes) |
| **npm install** | **전체 설치**<br>`package.json`에 적힌 모든 패키지를 설치합니다. (협업 시 필수) | `npm install`(또는 `npm i`) |
| **npm install [패키지]** | **특정 패키지 설치**<br>필요한 라이브러리를 하나씩 추가할 때 씁니다. | `npm i react` |
| **npm install -D [패키지]** | **개발용 의존성 설치**<br>배포엔 필요 없는 개발 도구(예: nodemon, eslint)를 설치합니다. | `npm i -D eslint` |
| **npm uninstall [패키지]** | **패키지 삭제**<br>더 이상 필요 없는 패키지를 제거합니다. | `npm uninstall lodash` |
| **npm update** | **패키지 업데이트**<br>설치된 패키지를 허용된 범위 내에서 최신 버전으로 올립니다. | `npm update react` |
| **npm run [스크립트]** | **스크립트 실행**<br>`package.json`의 `scripts`에 등록된 명령어를 실행합니다. | `npm run build` |
| **npm list** | **설치 목록 확인**<br>현재 프로젝트에 설치된 패키지들을 보여줍니다. | `npm list --depth=0`(최상위만 깔끔하게 보기) |

---

<h2>10. 보안 취약점 경고 (npm audit)</h2>

패키지를 설치하다 보면 **"found 3 vulnerabilities (2 moderate, 1 high)"** 같은 무서운 메시지가 뜰 때가 있습니다.

이는 내가 설치한 패키지(또는 그 패키지가 쓰는 패키지)에 보안상 약점이 발견되었다는 뜻입니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">진단하기 — <code>npm audit</code></div>
      <div class="wda-sdsc"><strong>상세 리포트 확인:</strong> 어떤 패키지가 문제인지, 얼마나 위험한지 알려줍니다.<br><strong>심각도 단계:</strong> Low &lt; Moderate &lt; High &lt; Critical (오른쪽으로 갈수록 위험 🚨)</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">해결하기 — <code>npm audit fix</code></div>
      <div class="wda-sdsc"><strong>자동 치료 시도:</strong> npm이 알아서 호환 가능한 안전한 버전으로 업데이트합니다.<br><strong>⚠️ 주의:</strong> 초보자 단계에서는 <code>npm audit fix --force</code> 사용을 피하는 것이 안전합니다. 이 옵션은 호환성이 깨질 수 있는 major 업데이트까지 강제로 적용할 수 있으므로, 사용 전 변경 내용을 확인하고 충분히 테스트해야 합니다.</div>
    </div>
  </div>
</div>

**멘탈 관리 (꿀팁)**

<div class="wda-callout wda-cs">
  너무 걱정하지 마세요! 대부분의 경고는 실제 서비스 배포 시 제거되는 <strong>개발용 도구(devDependencies)</strong>에서 발생하거나, 당장 서비스에 치명적이지 않은 경우가 많습니다. <strong>High 이상</strong>일 때만 주의 깊게 살펴보고 수정하면 됩니다.
</div>

---

<h2>11. npx란? (패키지 실행 도구)</h2>

`npm`이 패키지를 "설치"하는 도구라면, `npx`는 패키지를 **"설치하지 않고 실행만"** 시켜주는 도구입니다.

(npm 5.2 버전부터 기본 포함됨)

**🆚 과거 vs 현재 (방식 비교)**

`create-react-app` 같은 도구를 사용할 때의 차이점입니다.  
`create-react-app`은 예전 React 프로젝트 생성 예시로 볼 수 있으며, 요즘 React 학습과 실무에서는 Vite를 사용하는 경우가 많으므로 아래처럼 `npm create vite@latest`도 함께 참고하면 좋습니다.

```bash
npm create vite@latest
```

<div class="wda-compare">
  <div class="wda-compare-card wda-legacy">
    <div class="wda-compare-ttl">npm (구방식)</div>
    <strong>과정:</strong> 1. <code>npm install -g ...</code> (전역 설치) → 2. 실행<br><br>
    <strong>단점:</strong> 내 컴퓨터에 계속 남아있음 (용량 차지). 나중에 다시 쓸 때 <strong>버전이 구형</strong>임 (업데이트 귀찮음)<br><br>
    <strong>장점:</strong> (없음)
  </div>
  <div class="wda-compare-card wda-modern">
    <div class="wda-compare-ttl">npx (모던 방식)</div>
    <strong>과정:</strong> 1. <code>npx ...</code> (바로 실행)<br><br>
    <strong>단점:</strong> 없음<br><br>
    <strong>장점:</strong> 패키지를 프로젝트에 <strong>영구 설치하지 않고</strong> 실행할 수 있음 (깔끔함 ✨)
  </div>
</div>

<div class="wda-callout wda-ci">
  <code>npx</code>는 패키지를 프로젝트에 영구 설치하지 않고 실행할 수 있게 해주는 도구입니다.<br>
  필요한 경우 패키지를 임시로 받아 실행하거나, 캐시에 있는 패키지를 사용할 수 있습니다.<br>
  항상 완전히 새로 다운로드하고 즉시 삭제한다고 이해하면 부정확할 수 있습니다.
</div>

**💡 왜 써야 하나요? (장점)**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">전역 설치 오염 방지</div>
    <div class="wda-fcard-dsc">컴퓨터 이곳저곳에 불필요한 파일이 쌓이는 것을 막아줍니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">항상 최신 버전 사용</div>
    <div class="wda-fcard-dsc">실행할 때마다 가장 새로운 버전을 가져오므로, "버전이 낮아서 에러가 나는" 상황을 원천 차단합니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <code>npm create vite@latest</code>는 <code>create-vite</code> 패키지를 실행해 프로젝트를 만드는 명령어입니다. <code>npx</code>처럼 패키지를 직접 설치하지 않고 실행하는 흐름으로 이해하면 쉽지만, 엄밀히 말해 단순히 <code>npx</code>의 별칭이라고만 보기는 어렵습니다.
</div>

---

<h2>12. 실무 시나리오 (Workflow)</h2>

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">1) 새 프로젝트 (Solo) — "맨땅에 헤딩"</div>
    처음부터 내가 폴더 만들고 세팅하는 경우입니다.<br><br>
    1. 폴더 생성 : <code>mkdir my-project</code> ➔ <code>cd</code><br>
    2. <strong>초기화 (필수)</strong> : <code>npm init -y</code> (장부 생성)<br>
    3. 패키지 설치 : <code>npm install react</code>
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">2) 협업 프로젝트 (Collaboration) — "이어 달리기"</div>
    팀원의 코드를 받아 내 컴퓨터에서 실행하는 경우입니다.<br><br>
    1. 가져오기 : <code>git clone &lt;주소&gt;</code><br>
    2. <strong>의존성 복구 (⭐중요)</strong> : <strong><code>npm install</code></strong><br>
    3. 서버 실행 : <code>npm start</code>
  </div>
</div>

**핵심 포인트**

<div class="wda-callout wda-cs">
  <strong>클론 후 npm install은 국룰입니다.</strong> 남의 코드를 받아오면 습관적으로 <code>npm install</code>부터 입력하세요. 그렇지 않으면 "module not found" 에러를 마주하게 됩니다.
</div>

---

<h2>⁉️ 자주 묻는 질문 (FAQ) - 심화편</h2>

### Q1. 시맨틱 버저닝에서 '기능 추가'를 의미하며 하위 호환성을 유지해야 하는 버전은?

버전 번호(`Major.Minor.Patch`) 중 어디를 올려야 할지 묻는 질문입니다.

- **정답: MINOR 버전 (중간 번호)**
- **설명:**
  - **Major(앞):** 기존 코드가 깨질 수 있는 큰 변경
  - **Minor(중간):** 기능은 추가되지만 기존 코드는 그대로 작동함 (하위 호환 O)
  - **Patch(뒤):** 버그만 수정

### Q2. npm install 실행 시 정확한 버전 트리를 기록하여 협업 시 일관성을 보장하는 파일은?

"내 컴퓨터에선 되는데 넌 왜 안 돼?"를 막아주는 파일입니다.

- **정답: package-lock.json**
- **설명:** `package.json`은 대략적인 범위(`^18.2.0`)만 적혀 있지만, 이 파일은 실제로 설치된 **정확한 버전**을 기록하므로, **Git에 반드시 커밋**해야 팀원들과 최대한 동일한 환경을 공유할 수 있습니다. (다만 OS, Node/npm 버전 차이에 따라 일부 설치 결과가 달라질 수 있습니다.)

---

<h2>✅ 핵심 요약</h2>

Node.js 프로젝트 관리의 심장인 파일(`package.json`)과 실행 도구(`npx`)의 차이입니다.

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 정의</th>
    <th>역할 및 특징</th>
  </tr>
  <tr>
    <td><strong>1. package.json</strong></td>
    <td>프로젝트의 신분증이자 주문서</td>
    <td>이 파일 하나만 있으면 프로젝트를 언제든 원상 복구하고 실행할 수 있습니다. (가장 중요 ⭐)</td>
  </tr>
  <tr>
    <td><strong>2. 의존성 구분</strong></td>
    <td><code>dependencies</code>(실서비스용)</td>
    <td>배포 후 실제 서비스가 돌아갈 때 꼭 필요한 라이브러리입니다. (예: React, Vue)</td>
  </tr>
  <tr>
    <td>(위와 비교)</td>
    <td><code>devDependencies</code>(개발 전용)</td>
    <td>개발할 때만 쓰고, 배포할 때는 쏙 빼고 나가는 도구들입니다. (예: Nodemon, ESLint, Prettier)</td>
  </tr>
  <tr>
    <td><strong>3. npx</strong></td>
    <td>설치 없는 실행 도구(Executor)</td>
    <td>패키지를 내 컴퓨터에 영구적으로 설치하지 않고, 필요할 때만 최신 버전을 빌려와서 실행하고 버립니다. (예: <code>create-react-app</code> 같은 1회성 도구)</td>
  </tr>
</table>
