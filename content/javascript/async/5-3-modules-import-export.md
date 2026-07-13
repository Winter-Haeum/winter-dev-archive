---
title: "5-3 모듈로 코드 나누기"
status: "completed"
description: "하나의 파일에 모든 코드를 몰아넣었을 때의 문제부터 import/export 문법, Named·Default Export, 동적 import, 트리 쉐이킹까지 모듈 시스템을 정리한다."
category: "JavaScript"
section: "Async"
tags:
  - javascript
  - modules
  - import-export
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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
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

<div class="wda-goal" style="position:relative;overflow:visible;">
  <strong>고통의 시나리오</strong> — 코드를 나누지 않았을 때 발생하는 끔찍한 문제들을 체험합니다.<br>
  <strong>모듈 문법 (Import &amp; Export)</strong> — 공구함(Named)과 주인공(Default) 비유로 문법을 익힙니다.<br>
  <strong>실전 나누기</strong> — 실제로 <code>main.js</code>를 쪼개서 정리하는 연습을 합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. 시나리오: 개발팀의 비극</h2>
</div>

### 1) 현실 상황 (Before)

"모든 짐을 봇짐 하나에 넣고 여행을 간다면?"이라는 비유처럼,

하나의 파일(`main.js`)에 모든 코드를 때려 넣었을 때 벌어지는 상황입니다.

```js
// main.js (코드가 2000줄이 넘어감...)
var user = '홍길동';

// ... (스크롤 100번 내려야 함) ...

function calculateTax() { ... }

// ... (스크롤 50번 더 내림) ...

// 같은 스코프에서 var로 이름이 겹치는 변수를 다시 선언하면 위에서 넣어둔 값이 조용히 사라짐
var user = '김철수';

console.log(user); // '김철수' (위에서 선언한 '홍길동'은 덮어써져 사라짐)
```

**⚠️ 문제점**

<div class="wda-callout wda-cw">
  1. <strong>변수 이름 충돌</strong> : 같은 스코프에서 <code>var</code>로 <code>user</code>를 다시 선언하면, 나중 선언이 앞의 값을 조용히 덮어씁니다. (<code>let</code>/<code>const</code>였다면 같은 스코프 재선언 시 즉시 <code>SyntaxError</code>가 발생해 바로 알아챌 수 있지만, <code>var</code>는 에러 없이 넘어가서 버그의 원인을 찾기 어렵습니다.)<br>
  2. <strong>유지보수 지옥</strong> : 함수 하나를 찾으려 해도 마우스 휠을 10번 이상 굴려야 합니다.<br>
  3. <strong>협업 충돌</strong> : 철수와 영희가 같은 <code>main.js</code> 파일을 동시에 고치다가 코드가 꼬여서 싸움이 납니다.
</div>

### 2) 짐 나누기 (After)

여행 가방을 쌀 때 파우치별로 나누는 것처럼 코드를 정리합니다.

- 📁 **여행_가방/**
  - 📄 `세면도구.js` (칫솔, 치약 기능)
  - 📄 `옷.js` (속옷, 티셔츠 기능)
  - 📄 `비상약.js` (밴드, 해열제 기능)

### 3) 해결책 (모듈)

필요한 기능끼리 별도의 파일로 나눕니다. 그리고 **"세면도구에서 칫솔 꺼내줘!"(import)**라고 말하듯 필요한 것만 가져와서 사용합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  모듈 시스템의 가장 큰 장점은 <strong>'파일 스코프(File Scope)'</strong>가 생긴다는 점입니다.<br><br>
  옛날 방식(<code>HTML</code>에 <code>&lt;script&gt;</code> 여러 개 넣기)에서는 A 파일의 <code>user</code> 변수와 B 파일의 <code>user</code> 변수가 서로 충돌했습니다.<br>
  하지만 모듈 시스템에서는 <strong>서로 다른 파일에 있으면 변수 이름이 같아도 전혀 상관없습니다.</strong><br>
  (철수의 방에 있는 '안경'과 영희의 방에 있는 '안경'이 다른 것과 같습니다.)
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. 모듈의 핵심: 각자의 방(Scope)</h2>
</div>

### 1) "변수가 섞이지 않아요!"

모듈 시스템의 가장 큰 특징은 파일마다 **독립적인 공간(Scope)**을 가진다는 점입니다.

이를 통해 다른 파일에서 같은 변수 이름을 써도 서로 영향을 주지 않습니다.

| **구분** | **비유 (공간)** | **상황 및 문제점** | **코드 결과** |
| --- | --- | --- | --- |
| **Before: 일반 스크립트**(Global Scope) | **거실 (공용 공간)**<br>가족 모두가 한곳에 짐을 풀어놓음 | **충돌 발생 (덮어씌워짐)**<br>누가 탁자에 '지갑'을 뒀는데, 다른 사람이 그 위에 자기 것을 둬서 섞여버림 | `var user = "B"`<br>기존 "A"는 사라지고 나중에 선언된 "B"로 조용히 덮어써짐<br>(`let`/`const`라면 같은 스코프 재선언 시 `SyntaxError` 발생) |
| **After: 모듈**(Module Scope) | **각자의 방 (독립 공간)**<br>각자 방에 들어가 문을 닫고 짐을 품 | **안전함 (독립적)**<br>철수 방 '지갑'과 영희 방 '지갑'은 서로 다른 물건이라 이름이 같아도 상관없음 | **각각 유지됨**<br>`a.js`의 `user`는 "A", `b.js`의 `user`는 "B"로 서로 영향을 주지 않음 |

일반 스크립트에서 `var`로 같은 이름의 전역 변수를 다시 선언하면 기존 값이 덮어써질 수 있습니다. 반면 `let`/`const`는 같은 스코프에서 같은 이름으로 다시 선언하면 `SyntaxError`가 발생합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  HTML에서 자바스크립트 파일을 불러올 때 <code>&lt;script type="module" src="..."&gt;</code>처럼<br>
  <strong><code>type="module"</code></strong>을 붙여주면, 브라우저는 해당 파일을 '모듈'로 인식하여<br>
  <strong>자동으로 독립적인 방(스코프)</strong>을 만들어 줍니다.<br><br>
  또한 모듈 모드에서는 더욱 안전한 문법을 강제하는<br>
  <strong>'엄격 모드(use strict)'</strong>가 기본으로 적용되어, 실수를 미리 방지해 줍니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. Step 1. 문법 익히기 (설정)</h2>
</div>

### 1) 브라우저에게 알려주기

HTML 파일에서 스크립트를 불러올 때,

반드시 **`type="module"`** 속성을 추가해야 합니다.

이 속성이 없으면 브라우저는 `import`와 `export` 문법을 이해하지 못하고 에러를 냅니다.

```html
<!DOCTYPE html>
<html>
<body>
  <script type="module" src="main.js"></script>
</body>
</html>
```

### 2) 핵심 규칙 3가지

모듈 시스템이 정상적으로 동작하려면 다음 3가지를 꼭 지켜야 합니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">(1) type="module" 필수</div>
    <div class="wda-fcard-dsc">이게 있어야 자바스크립트 파일 내에서 import / export 문법을 사용할 수 있습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">(2) 서버에서 실행 필수 (Live Server)</div>
    <div class="wda-fcard-dsc">HTML 파일을 폴더에서 더블클릭해서 열면(file:// 주소) 작동하지 않습니다. 보안 정책(CORS) 때문에 반드시 VS Code의 'Live Server' 같은 로컬 서버(http:// 주소)를 통해 열어야 합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">(3) 확장자(.js) 필수</div>
    <div class="wda-fcard-dsc">순수 브라우저 환경에서 type="module"로 직접 실행할 때는 import 경로에 .js 확장자를 붙여야 합니다. (Vite, Webpack 같은 번들러 환경에서는 도구가 처리해주므로 생략할 수 있습니다.)</div>
  </div>
</div>

### 3) 가장 많이 하는 실수

<div class="wda-callout wda-cw">
  <strong>증상</strong> — 콘솔창에 <code>Uncaught SyntaxError: Cannot use import statement outside a module</code> 에러가 뜸.<br><br>
  <strong>원인</strong> — <code>&lt;script&gt;</code> 태그에 <code>type="module"</code>을 깜빡하고 안 적었을 때 발생합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. Step 2. 공구함 (Named Export) - 내보내기</h2>
</div>

### 1) 개념: "이 아이템들을 공개 공구함에 넣을게!"

자신이 가진 변수나 함수 앞에 `export`를 붙여서,

마치 **공구함(Toolbox)**에 공구를 넣어두는 것처럼 외부에서 가져갈 수 있게 만드는 과정입니다.

### 2) 예제 코드

```js
// tools.js 파일

// 1. 변수 내보내기 (망치를 공구함에 넣음)
export const hammer = '🔨';

// 2. 함수 내보내기 (드라이버 기능을 공개)
export function driver() {
  console.log('윙~');
}

// 3. 한꺼번에 내보내기 (따로 선언하고 나중에 묶어서 내보냄)
const saw = '🪚';
const drill = '🔩';

export { saw, drill };
```

### 3) 문법 규칙

- **키워드:** `const`, `function`, `class` 앞에 **`export`**만 붙이면 됩니다.
  - 예: `export const 변수명 = 값;`
  - 예: `export function 함수명() { ... }`
- **다중 내보내기 :** 파일 하나에서 여러 개를 내보낼 수 있습니다. (망치, 톱, 드릴 등등 무제한)

### 4) 💡 주의할 점

<div class="wda-callout wda-cw">
  <strong>이름 일치</strong> : 'Named(이름이 있는)' Export이기 때문에, 내보낸 이름 그대로 가져와야 합니다.<br>
  <code>hammer</code>라고 이름 붙여 내보냈으면, 가져갈 때도 반드시 <code>hammer</code>라고 찾아야 합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. Step 2. 공구함 (Named Export) - 가져오기</h2>
</div>

### 1) 개념: "이름표 보고 필요한 것만 꺼내기"

공구함(`tools.js`)에 들어있는 수많은 도구 중에서, 내가 지금 **필요한 것만 콕 집어서** 가져오는 과정입니다.

### 2) 예제 코드

```js
// main.js

// 1. 하나만 가져오기 (중괄호 필수!)
import { hammer } from './tools.js';

// 2. 여러 개 가져오기 (콤마로 구분)
import { driver, saw } from './tools.js';

// 가져온 후에는 변수처럼 바로 사용 가능
console.log(hammer); // '🔨'
driver(); // '윙~'
```

### 3) 🔑 문법 규칙 (절대 준수)

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">1. 중괄호 { } 필수</div>
    <div class="wda-fcard-dsc">Named Export로 내보낸 것은 가져올 때도 반드시 짝({})을 맞춰야 합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">2. 확장자 .js 필수</div>
    <div class="wda-fcard-dsc">순수 브라우저(type="module") 환경에서는 from './tools'라고만 쓰면 에러가 납니다. 반드시 './tools.js'처럼 확장자까지 적어야 합니다. (번들러 환경에서는 생략 가능합니다.)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">3. 이름 일치</div>
    <div class="wda-fcard-dsc">내보낼 때 쓴 이름(hammer)과 가져올 때 쓰는 이름(hammer)이 글자 하나 안 틀리고 똑같아야 합니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  만약 가져온 변수의 이름이 마음에 안 들거나, 현재 파일의 변수명과 겹친다면 <strong><code>as</code></strong> 키워드를 써서 별명을 붙일 수 있습니다.
</div>

```js
import { hammer as myHammer } from './tools.js';
console.log(myHammer); // 이제부터는 myHammer라고 부르면 됨
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. Step 2. 공구함 - 별명 붙이기 (as)</h2>
</div>

### 1) 개념: "이름이 겹치거나 너무 길다면?"

외부에서 가져온 공구의 이름이 내 공구함에 이미 있는 것과 겹치거나,

이름이 너무 길어서 부르기 힘들 때 **`as`** 키워드를 사용하여 **새로운 별명**을 붙여줄 수 있습니다.

### 2) 예제 코드

```js
// main.js

// 1. hammer를 가져오는데, 내 맘대로 'myHammer'라고 부를래
import { hammer as myHammer } from './tools.js';

// 2. driver를 가져오는데, 'fixTool'이라고 부를래
import { driver as fixTool } from './tools.js';

// [사용 예시]
// 이제 원래 이름(hammer)은 사용할 수 없습니다!
console.log(myHammer); // '🔨'

fixTool(); // '윙~' (driver 함수 실행)
```

### 3) 문법 규칙

<div class="wda-callout wda-cy">
  <strong>형식</strong> : <code>import { 원래이름 as 새이름 } from '경로';</code><br>
  <strong>제약</strong> : 별명을 짓고 나면 <strong>원래 이름</strong>은 해당 파일에서 더 이상 사용할 수 없습니다. (개명 신청과 비슷합니다.)
</div>

### 4) 💡 보충 설명

이 기능은 다음과 같은 상황에서 필수적으로 사용됩니다.

<div class="wda-callout wda-ci">
  <strong>이름 충돌</strong> : 다른 두 파일에서 <code>User</code>라는 똑같은 이름을 가져와야 할 때 (<code>User as KakaoUser</code>, <code>User as NaverUser</code> 처럼 구분).<br>
  <strong>긴 이름 단축</strong> : <code>calculateVeryComplexTaxAndFee</code> 처럼 너무 긴 함수명을 <code>calcTax</code> 처럼 줄여서 쓰고 싶을 때.
</div>

---

## 💻 퀴즈 : Named Export 문법

### Q1. 내보내기

함수를 외부에서 사용할 수 있도록 알맞은 키워드를 붙이세요.

```js
/* math.js */
// 함수 앞에 무엇을 붙여야 할까요?
_______ function add(a, b) {
  return a + b;
}
```

**정답:** `export`

**해설:** 함수, 변수, 클래스 앞에 `export`를 붙여야만 다른 파일에서 접근할 수 있습니다. (안 붙이면 해당 파일 안에서만 쓰는 비공개 상태가 됩니다.)

### Q2. 가져오기

`math.js`에 있는 `add` 함수를 가져오는 코드를 완성하세요. (힌트: 중괄호)

```js
/* main.js */
// add 함수를 가져오려면?
import _______ from './math.js';
```

**정답:** `{ add }`

**해설:** 이름이 있는(Named) 아이템을 가져올 때는 반드시 **중괄호 `{ }`** 안에 내보낸 이름과 **똑같이** 적어야 합니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. Step 3. 주인공 (Default Export) - 내보내기</h2>
</div>

### 1) 개념: "파일당 딱 하나, 특별한 주인공!"

여러 개를 담는 공구함과 달리, 이 파일에서 **가장 중요한 단 하나의 기능(주인공)**을 지정하여 내보내는 방식입니다.

### 2) 예제 코드

```js
// User.js

class User {
  constructor(name) {
    this.name = name;
  }
}

// "이 파일의 대표(주인공)는 바로 나야!"
export default User;
```

### 3) 문법 규칙

<div class="wda-callout wda-cy">
  <strong>키워드</strong> : <code>export default</code>를 사용하여 값을 내보냅니다.<br>
  <strong>횟수 제한</strong> : 한 파일당 <strong>딱 1번만</strong> 사용할 수 있습니다. (주인공이 두 명일 수는 없으니까요!)<br>
  <strong>익명 가능</strong> : 변수명 없이 값(함수, 클래스 등)만 바로 내보낼 수도 있습니다.<br>
  예: <code>export default function() { ... }</code>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. Step 3. 주인공 (Default Export) - 가져오기</h2>
</div>

### 1) 개념: "주인공은 이름표(중괄호)가 필요 없어!"

파일에서 유일한 주인공을 모셔오는 것이기 때문에,

굳이 "누구누구 나와라"라고 콕 집어 말할 필요가 없습니다.

그냥 가져오면 그게 바로 주인공입니다.

### 2) 예제 코드

```js
// main.js

// 1. 중괄호 없이 가져옴 (가장 일반적)
import User from './User.js';

// 2. 내 맘대로 이름을 지어서 가져와도 됨!
// (User.js에서 내보낸 건 똑같은데, 여기서는 'MySuperUser'라고 부르기로 함)
import MySuperUser from './User.js';

const u = new MySuperUser('Dami');
```

### 3) 🔑 문법 규칙 (매우 중요)

<div class="wda-callout wda-cw">
  1. <strong>중괄호 { } 금지</strong> : Default Export만 있는 파일에서 <code>import { User } from './User.js'</code>처럼 중괄호를 사용하면, 해당 이름의 Named Export가 없기 때문에 보통 모듈 로딩 단계에서 에러가 발생합니다. 주인공은 <strong>그냥</strong> 데려옵니다.<br>
  2. <strong>작명 자유</strong> : 내보낸 쪽에서 이름을 <code>User</code>라고 했어도, 받는 쪽에서 <code>SuperHero</code>라고 지어서 써도 상관없습니다. (어차피 그 파일의 대표는 하나니까요!)
</div>

### 4) 한눈에 보는 비교 (Named vs Default)

| **구분** | **공구함 (Named Import)** | **주인공 (Default Import)** |
| --- | --- | --- |
| **문법** | `import { 이름 } from ...` | `import 이름 from ...` |
| **중괄호** | **필수 (`{}`)** | **없음 (쓰면 안 됨)** |
| **이름** | 내보낸 이름과 **똑같이** | 내가 원하는 대로 **아무거나** |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  작명이 자유롭긴 하지만, 실무에서는 헷갈리지 않도록 파일 이름과 똑같이 짓는 것이 관례입니다.<br>
  (예: User.js 파일이면 import User로 받기)
</div>

---

## 💻 퀴즈 : Mini Quiz: Default Export 문법

### Q1. 주인공 내보내기

빈칸에 들어갈 핵심 키워드는 무엇일까요?

```js
const User = { name: "철수", age: 20 };

// 파일의 주인공으로 내보내기
export ______ User;
```

**정답:** `default`

**해설:** 파일에서 단 하나뿐인 주인공을 내보낼 때는 `export default`를 사용합니다.

### Q2. 주인공 가져오기

주인공을 **'Profile'**이라는 이름으로 부르고 싶다면 빈칸에 무엇을 적어야 할까요?

```js
// 이름을 내 맘대로(Profile) 지어서 가져오기
import ______ from './User.js';
```

**정답:** `Profile`

**해설:** Default Export로 내보낸 값은 가져올 때 **중괄호 `{ }` 없이** 내가 원하는 이름(여기서는 `Profile`)을 마음대로 붙여서 가져올 수 있습니다.

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🌈 중간 정리: Named vs Default</h2>
</div>

### 1) 한눈에 보는 비교

| **구분** | **Named Export (공구함) 🛠️** | **Default Export (주인공) ⭐️** |
| --- | --- | --- |
| **개념** | **공구함** (여러 개 담을 수 있음) | **주인공** (파일당 단 하나) |
| **내보낼 때** | `export const a = 1;` | `export default a;` |
| **가져올 때** | `import { a }` | `import a` |
| **핵심 규칙** | **반드시 중괄호 `{ }` 사용** | **중괄호 없음** |

### 2) 💡 초보자를 위한 팁

<div class="wda-callout wda-cs">
  "헷갈리면 일단 Named({})만 쓰세요. 실수가 가장 적습니다!"<br><br>
  <strong>이유</strong> — <code>Default Export</code>는 이름을 마음대로 바꿔도 되기 때문에, 나중에 코드를 찾거나 리팩토링할 때 헷갈릴 수 있습니다.<br>
  반면 <strong>`Named Export`</strong>는 이름이 틀리면 바로 에러를 알려주므로 더 안전하게 코딩할 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>9. 동적 import (심화)</h2>
</div>

### 1) 개념: "필요할 때만 모듈 로드하기"

파일의 맨 위에서 무조건 가져오는(`static import`) 방식과 달리,

**코드 실행 도중에 필요한 순간**에 모듈을 불러오는 방식입니다.

### 2) 예제 코드

```js
// 버튼 클릭 시 로드 (이벤트 핸들러 앞에도 async 필수)
button.addEventListener('click', async () => {

  // 1. 함수처럼 import()를 사용 (Promise 반환)
  // 2. 구조 분해 할당으로 필요한 함수만 꺼냄
  const { openModal } = await import('./modal.js');

  // 3. 가져온 함수 실행
  openModal();
});

// 조건부 로딩 (관리자일 때만 로드) — await import()는 async 함수 내부에서 사용
async function loadAdminModule(user) {
  if (user.isAdmin) {
    // 관리자 기능을 담은 모듈을 통째로 가져옴
    const admin = await import('./admin.js');
    admin.init();
  }
}
```

### 3) 특징

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">함수처럼 사용</div>
    <div class="wda-fcard-dsc"><code>import('경로')</code> 형태로 함수를 호출하듯 사용합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">비동기 동작</div>
    <div class="wda-fcard-dsc">네트워크를 통해 파일을 가져오므로 <strong>Promise</strong>를 반환합니다. 따라서 반드시 <strong><code>await</code></strong>와 함께 써야 합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">성능 향상</div>
    <div class="wda-fcard-dsc">초기 로딩 시 불필요한 파일을 받지 않아 웹사이트가 더 빨리 뜹니다.</div>
  </div>
</div>

### 4) 활용 사례

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">무거운 라이브러리</div>
    <div class="wda-fcard-dsc">차트, 3D 렌더링 등 용량이 큰 기능을 <strong>사용자가 버튼을 눌렀을 때만</strong> 불러옵니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">특정 조건</div>
    <div class="wda-fcard-dsc">관리자 페이지, 결제 모듈처럼 <strong>모든 사용자에게 필요하지 않은</strong> 기능.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">다국어/테마</div>
    <div class="wda-fcard-dsc">한국어 사용자에게는 <strong>한국어 파일만</strong> 로드.</div>
  </div>
</div>

### 5) 💡 보충 설명

<div class="wda-callout wda-ci">
  일반적인 <code>import ... from ...</code>은 문서의 <strong>맨 꼭대기(최상단)</strong>에만 적어야 해서 조건문(<code>if</code>) 안에 넣을 수 없습니다.<br>
  하지만 <strong>동적 import</strong>는 <code>if</code>문 안이든, 함수 안이든 <strong>어디서나</strong> 쓸 수 있다는 엄청난 유연성을 가집니다.<br><br>
  이를 프론트엔드 용어로는 <strong>'코드 스플리팅(Code Splitting)'</strong>이라고도 부릅니다.<br>
  거대한 코드 덩어리를 잘게 쪼개서 필요할 때만 다운로드 받는 기술입니다.<br><br>
  <code>await import()</code>는 <strong>async 함수 내부</strong>에서 사용하는 것이 가장 안전합니다. 최신 모듈 환경에서는 top-level await도 가능하지만, 초보자 단계에서는 async 함수 안에서 사용하는 방식으로 익히는 것이 좋습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>10. 모듈 경로 규칙</h2>
</div>

### 1) 상대 경로 (Relative Path)

현재 내가 작업 중인 파일을 기준으로 다른 파일을 찾는 방법입니다. 점(`.`)의 개수가 핵심입니다.

- **`./` (점 하나) :** **현재 위치** (같은 폴더). 생략하면 안 됩니다!
- **`../` (점 둘) :** **상위 폴더** (한 단계 위로).

```js
// 1. 같은 폴더에 있는 utils.js 가져오기
import { a } from './utils.js';

// 2. 상위 폴더(부모)에 있는 api.js 가져오기
import { b } from '../api.js';
```

### 2) 절대/패키지 경로 (Package Path)

`npm`으로 설치한 라이브러리(node_modules)를 가져올 때는

점(`.`)이나 슬래시(`/`) 없이 **이름만** 씁니다.

```js
// 'react'라는 라이브러리를 통째로 가져옴 (설치된 폴더에서 찾음)
import React from 'react';

// 'lodash' 라이브러리 가져옴
import lodash from 'lodash';
```

### 3) 확장자 규칙 (.js)

어떤 환경에서 개발하느냐에 따라 `.js`를 붙이는 규칙이 다릅니다.

- **순수 브라우저 (Vanilla JS):** 반드시 **`.js`를 붙여야** 합니다. (안 붙이면 404 에러 발생)
- **번들러 사용 (Vite, CRA 등):** 도구가 알아서 찾아주므로 **생략 가능**합니다.

```js
/* 상황 1: HTML에서 바로 돌리는 순수 자바스크립트 */
import App from './App.js'; // ✅ .js 필수! 안 쓰면 에러 남

/* 상황 2: 리액트(Vite, Webpack) 등으로 개발할 때 */
import App from './App';    // ✅ .js 생략 가능 (도구가 처리해줌)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  초보자들이 가장 많이 겪는 에러 중 하나가 바로 <strong>`./` 생략</strong>입니다.<br>
  <code>import App from 'App.js'</code>라고 쓰면 브라우저는 내 폴더가 아니라<br>
  <code>node_modules</code> 설치 폴더에서 <code>App.js</code>라는 라이브러리를 찾으려고 시도하다가 에러를 냅니다.<br>
  내 파일을 가져올 때는 무조건 <strong>`./`</strong>로 시작해야 한다는 점을 꼭 기억하세요!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. CommonJS vs ES Modules</h2>
</div>

### 1) 개념 비교: 과거와 현재

자바스크립트 모듈 시스템은 크게

**Node.js의 옛날 방식(CommonJS)**과

**현재의 공식 표준(ES Modules)**으로 나뉩니다.

| **구분** | **CommonJS (Legacy) 🦕** | **ES Modules (Standard) 🚀** |
| --- | --- | --- |
| **주 사용처** | 예전 Node.js 환경 | 브라우저 & 최신 Node.js |
| **가져오기** | **`require()`** | **`import`** |
| **내보내기** | `module.exports` | `export` |
| **로딩 방식** | **주로 런타임에 `require()`로 동기 로딩**<br>(파일을 다 읽을 때까지 멈춤) | **정적 `import` 구조 기반**<br>(브라우저/번들러가 의존성을 미리 분석하고 로드) |
| **특징** | Node.js의 옛날 방식 | 자바스크립트 **공식 표준** |

<div class="wda-callout wda-cy">
  CommonJS는 주로 런타임에 <code>require()</code>로 동기 로딩하는 방식입니다.<br>
  ES Modules는 정적 <code>import</code> 구조를 기반으로 브라우저/번들러가 모듈 의존성을 미리 분석하고 로드할 수 있습니다.<br>
  단순히 "기다리지 않고 다음 일을 처리한다"는 의미의 비동기와는 구분해서 이해해야 합니다.
</div>

### 2) 코드 비교

코드를 보면 모양이 확연히 다릅니다.

**(1) CommonJS (구식)**

```js
// 내보내기
module.exports = { add };

// 가져오기 (require 사용)
const { add } = require('./math');
```

**(2) ES Modules (표준)**

```js
// 내보내기
export const add = ...;

// 가져오기 (import 사용)
import { add } from './math.js';
```

### 3) 💡 결론 (핵심)

<div class="wda-callout wda-cs">
  "여러분은 ES Modules (import/export)만 확실히 알면 됩니다!"<br><br>
  지금 배우고 있는 <code>import/export</code>가 브라우저와 모던 웹 개발(React, Vue 등)의 표준이므로<br>
  이것을 메인으로 익히시고,<br>
  <strong>`require`</strong>는 "아, 이건 옛날 Node.js 코드구나"라고 알아볼 수만 있으면 충분합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>12. 실무 패턴: Mixed Export (같이 쓰기)</h2>
</div>

### 1) 개념: "메인 요리와 반찬을 한 번에!"

하나의 파일에서 **주인공(Default)**과 **공구함(Named)** 방식을 동시에 사용하는 패턴입니다.
보통 파일의 핵심 기능은 `Default`로, 부가적인 유틸리티나 설정값은 `Named`로 내보냅니다.

### 2) 내보내기 (Export) 예시

리액트 라이브러리가 대표적인 예시입니다.

- **React (메인) :** `export default`로 내보냄
- **Hooks (부가 기능) :** `useState`, `useEffect` 등은 `export`로 내보냄

```js
// React 라이브러리 내부 (가상 코드)

// 1. Default Export (메인 주인공)
export default React;

// 2. Named Export (유틸리티 도구들)
export const useState = ...;
export const useEffect = ...;
```

### 3) 가져오기 (Import) 방법

가장 중요한 문법입니다. **콤마(`,`)**를 사용하여 두 가지를 한 줄에 가져옵니다.

```js
// 사용자가 가져다 쓸 때

// 형식: import 주인공, { 공구1, 공구2 } from '경로';
import React, { useState, useEffect } from 'react';
```

- **Default:** 중괄호 **밖**에 씁니다 (`React`).
- **Named:** 중괄호 **안**에 씁니다 (`{ useState }`).

### 💡 보충 설명

<div class="wda-callout wda-ci">
  이 패턴을 익혀두면 <code>import React, { useState } from 'react'</code> 코드를 볼 때,<br>
  <strong>"아, React는 주인공(Default)이고 useState는 공구함(Named)에서 꺼낸 거구나!"</strong>라고 정확하게 구조를 파악할 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>13. 심화: Tree Shaking (트리 쉐이킹)</h2>
</div>

### 1) 개념: "죽은 낙엽 털어내기"

나무를 흔들어서 죽은 낙엽을 떨어뜨리듯,

최종 결과물(Bundle)을 만들 때 **실제로 쓰지 않는 코드를 자동으로 제거**하는 기술입니다.

- **목적:** 파일 용량을 줄여서 웹사이트 로딩 속도를 빠르게 만듭니다.

### 2) 번들러(Webpack/Vite)의 마음

번들러는 코드를 포장할 때 다음과 같이 생각하며 불필요한 부품을 뺍니다.

<div class="wda-callout wda-cy">
  "사용자가 tools.js에서 <strong>hammer(망치)</strong>만 가져갔네?<br>
  그럼 안 쓰는 <strong>saw(톱)</strong>는 최종 파일에서 빼버려야지! 용량을 줄여야 하니까."
</div>

### 3) 왜 Named Export가 유리할까?

트리 쉐이킹이 잘 작동하려면 **"무엇을 쓰고 무엇을 안 쓰는지"**가 명확해야 합니다.

| **구분** | **트리 쉐이킹 효율** | **상세 특징** |
| --- | --- | --- |
| **Named Export**<br>`{ }` (공구함) | **유리함 (Good)** 🟢 | 각각 **독립적**으로 수출됨<br>안 쓰는 것은 **쉽게 발라낼 수 있음** (제거 용이) |
| **Default Export**<br>(주인공) | **경우에 따라 불리할 수 있음** 🟡 | 여러 기능을 **하나의 객체로 묶어서** default export하는 경우가 많음<br>이럴 때는 **안 쓰는 기능만 골라 제거하기가 어려울 수 있음** |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Named Export</strong>는 각 항목이 독립적으로 드러나기 때문에 Tree Shaking에 유리한 경우가 많습니다.<br>
  다만 <strong>Default Export 자체가 항상 나쁜 것은 아닙니다.</strong><br>
  특히 여러 기능을 하나의 객체로 묶어서 default export하는 경우에는 안 쓰는 기능 제거가 어려워질 수 있습니다.<br><br>
  <code>lodash</code> 같은 거대 유틸리티 라이브러리를 쓸 때는 ESM을 지원하는 <code>lodash-es</code>에서 <code>import { map } from 'lodash-es'</code>처럼 가져오거나, <code>import map from 'lodash/map'</code>처럼 필요한 함수 파일만 직접 가져오는 방식이 Tree Shaking에 더 유리할 수 있습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>자주 하는 실수 (함정 카드)</h2>
</div>

| **실수 유형** | **잘못된 예시 (Error) ❌** | **올바른 해결 (Fixed) ✅** | **원인 및 설명** |
| --- | --- | --- | --- |
| **1. 괄호 실수**(Named인데 뺌) | `import hammer from ...` | `import { hammer } from ...` | **Named Export**는 공구함에서 꺼내오므로 반드시 **중괄호 `{ }`**가 필요합니다. |
| **2. 괄호 과잉**(Default인데 넣음) | `import { User } from ...` | `import User from ...` | **Default Export**는 주인공이므로 **중괄호 없이** 바로 데려와야 합니다. |
| **3. 확장자 생략**(브라우저 환경) | `from './App'` | `from './App.js'` | 순수 자바스크립트(Vanilla JS)에서는 파일명 뒤에 **`.js`**를 안 붙이면 파일을 못 찾습니다 (404 에러). |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>확장자(`.js`) 규칙은 환경마다 다릅니다.</strong><br><br>
  <strong>순수 브라우저</strong> — 필수입니다. (확장자가 없으면 서버가 파일을 찾지 못함)<br>
  <strong>Vite, Webpack, CRA (리액트 등)</strong> — 번들러가 알아서 찾아주므로 <strong>생략 가능</strong>합니다. 실무 프로젝트에서는 보통 생략하고 씁니다.
</div>

---

## 💻 퀴즈 : Pop Quiz! (개념 확인)

### Q1. 공구함?

여러 개의 함수나 변수를 공구함처럼 내보낼 때 적절한 방식은 무엇일까요?

**정답:** **Named Export** (이름으로 내보내기)

### Q2. 주인공?

파일당 **단 하나**만 내보낼 수 있는 특별한 방식은 무엇일까요?

**정답:** **Default Export** (기본 내보내기)

### Q3. 괄호?

`import { a }` 처럼 **중괄호 `{ }`**를 반드시 사용해야 하는 경우는 언제일까요?

**정답:** **Named Import** (Named Export로 내보낸 것을 가져올 때)

**💡 보충 설명**

<div class="wda-callout wda-ci">
  이 3가지만 기억하면 모듈 문법 때문에 에러가 나는 일은 거의 없을 것입니다.<br><br>
  <strong>여러 개</strong> → `Named` (`{}`)<br>
  <strong>하나만</strong> → `Default` (괄호 없음)<br>
  <strong>괄호 여부</strong> → `Named`는 필수, `Default`는 금지
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🔑 핵심 정리 (Summary)</h2>
</div>

### 1) 모듈 시스템 총정리

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
    <th>상세 설명</th>
  </tr>
  <tr>
    <td rowspan="2"><strong>모듈 기초</strong></td>
    <td>Concept</td>
    <td>파일 하나가 곧 하나의 모듈입니다. (File = Module)</td>
  </tr>
  <tr>
    <td>Scope</td>
    <td>파일마다 방이 나뉘어 있어 <strong>전역 변수 오염을 방지</strong>합니다.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Export</strong>(내보내기)</td>
    <td>Named</td>
    <td><code>export { a, b }</code> 형태로 <strong>여러 개</strong>를 내보냅니다.</td>
  </tr>
  <tr>
    <td>Default</td>
    <td><code>export default</code> 형태로 파일당 <strong>하나(Main)</strong>만 내보냅니다.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Import</strong>(가져오기)</td>
    <td>Static</td>
    <td>파일 <strong>상단</strong>에서 미리 선언하여 가져옵니다.</td>
  </tr>
  <tr>
    <td>Dynamic</td>
    <td><code>await import()</code>를 사용해 <strong>필요한 순간</strong>에 가져옵니다. (성능 최적화)</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>경로 작성</strong></td>
    <td>로컬 파일</td>
    <td>내 파일은 반드시 <code>./</code> 또는 <code>../</code>로 시작해야 합니다.</td>
  </tr>
  <tr>
    <td>브라우저</td>
    <td>순수 브라우저 환경에서는 <strong>`.js` 확장자</strong>가 필수입니다.</td>
  </tr>
</table>

### 2) Named vs Default 비교

<table class="wda-summary-table">
  <tr>
    <th>특징</th>
    <th>Named Export (공구함)</th>
    <th>Default Export (주인공)</th>
  </tr>
  <tr>
    <td><strong>개수</strong></td>
    <td><strong>N개 가능</strong> (여러 개)</td>
    <td><strong>1개만</strong> 가능 (파일당 하나)</td>
  </tr>
  <tr>
    <td><strong>이름</strong></td>
    <td><strong>고정</strong> (내보낸 이름 그대로)</td>
    <td><strong>자유</strong> (원하는 이름으로 변경 가능)</td>
  </tr>
</table>

**💡 보충 설명**

<div class="wda-callout wda-cs" style="position:relative;overflow:visible;">
  실무에서는 <strong>Named Export</strong>로 유틸리티 함수들을 묶어서 관리하고,<br>
  <strong>Default Export</strong>로 리액트 컴포넌트 같은 메인 기능을 관리하며,<br>
  성능이 필요할 때 <strong>Dynamic Import</strong>를 섞어서 사용하는 것이 정석입니다.
</div>
