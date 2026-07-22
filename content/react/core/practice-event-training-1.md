---
title: "실습: 이벤트 처리 훈련 1~4"
status: "completed"
description: "Mouse Tracker, Keyboard & Focus, Scroll Spy, Tag Manager 4가지 실습으로 마우스/키보드/스크롤 이벤트와 이벤트 전파(stopPropagation) 활용 패턴을 훈련한다."
category: "React"
section: "Core"
tags:
  - react
  - event
  - practice
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

<h2>1. 💻 실습 : 실습용 프로젝트 만들기</h2>

이벤트 처리를 연습할 새로운 놀이터를 만들어봅시다.

**🎯 Mission**

터미널을 열고 Vite를 사용하여 새 리액트 프로젝트를 생성하세요.

**📝 예제 코드**

터미널에 다음 명령어를 입력하세요.

**Terminal**

```bash
# Workspace로 이동
cd ~/Workspace

# 새 프로젝트 생성 (Vite 최신 버전 사용)
npm create vite@latest
```

**✅ 결과 예시**

명령어를 입력하면 프로젝트 설정을 묻는 선택지(옵션)가 나타납니다.

**📝 정답 코드**

<div style="position:relative;overflow:visible;margin:0.5rem 0;">
방향키와 엔터키를 사용하여 아래와 같이 선택하세요.
</div>

**Terminal Interaction**

```text
# 1. 프로젝트 이름 입력 (이벤트 처리 마스터용)
Project name: react-event-practice

# 2. 프레임워크 선택
Select a framework: React

# 3. 언어(변형) 선택
Select a variant: JavaScript
```

### 5) 프로젝트 실행

프로젝트를 만든 뒤에는 생성된 폴더로 이동하고 `npm install`을 실행한 다음 `npm run dev`로 개발 서버를 켜야 합니다.

```bash
cd react-event-practice
npm install
npm run dev
```

---

<h2>2. 💻 실습 1 : 마우스 트래커 (MouseMove)</h2>

단순히 마우스 위치를 찍는 것이 아니라, **특정 영역(컨테이너) 내부에서의 정확한 좌표**를 계산하는 고급 실습입니다.

**🎯 Mission**

`src/components/MouseTracker.jsx`를 만들고 다음 목표를 달성하세요.

1. **내부 좌표 추적:** 전체 화면 기준이 아닌, 검은색 박스 왼쪽 위를 (0,0)으로 하는 좌표를 구하세요.
2. **스케일 대응:** CSS로 화면이 확대/축소되더라도 좌표가 틀어지지 않게 만드세요.
3. **핵심 함수:** `getBoundingClientRect()`를 사용하여 요소의 위치와 크기 정보를 활용하세요.

### 2) 핵심 로직 (힌트)

아래는 좌표 변환 공식입니다. 이를 활용해 코드를 작성해보세요.

```jsx
// 뷰포트 좌표 -> 내부 좌표 변환 공식
// 1. 현재 화면상의 실제 크기(rect.width)와 원래 크기(offsetWidth)의 비율 계산
const scale = rect.width / el.offsetWidth;

// 2. 전체 마우스 좌표(e.clientX)에서 박스의 시작점(rect.left)을 빼고, 비율(scale)로 나눔
const x = (e.clientX - rect.left) / scale;
const y = (e.clientY - rect.top) / scale;
```

**✅ 결과 예시**

- 어두운 박스 위로 마우스를 올리면, 마우스 커서를 따라다니는 원(또는 십자선)이 생깁니다.
- 박스 왼쪽 상단 끝에 가면 `x: 0, y: 0`에 가까워져야 합니다.

**📝 정답 코드**

로직과 JSX 구조를 합친 완성된 코드입니다.

**src/components/MouseTracker.jsx**

```jsx
import { useState, useRef } from 'react';

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;

    // 1. 컨테이너의 위치/크기 정보 가져오기
    const rect = el.getBoundingClientRect();

    // 요소 크기가 0인 경우 방어 (0으로 나누기 방지)
    if (el.offsetWidth === 0 || el.offsetHeight === 0) return;

    // 2. 스케일 계산 (CSS transform 등으로 크기 변형 시 대응)
    const scaleX = rect.width / el.offsetWidth;
    const scaleY = rect.height / el.offsetHeight;

    // 3. 좌표 계산 (뷰포트 좌표 -> 로컬 좌표 변환)
    const x = (e.clientX - rect.left) / scaleX;
    const y = (e.clientY - rect.top) / scaleY;

    setPosition({ x, y });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Mouse Tracker</h2>

      {/* 1. 컨테이너: 기준점(relative) 설정 및 이벤트 연결 */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="container"
        style={{
          width: "300px", height: "200px",
          backgroundColor: "#333",
          position: "relative", // 자식 요소의 기준점
          overflow: "hidden",   // 밖으로 나가는 점 숨김
          cursor: "none"        // 기본 커서 숨김
        }}
      >
        {/* 2. Follower: 마우스를 따라다니는 점 */}
        <div
          className="follower"
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            width: "20px", height: "20px",
            backgroundColor: "#00ff88",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)", // 중앙 정렬

            // 핵심: 마우스 이벤트 무시 (이게 없으면 점이 마우스를 가려서 이벤트가 끊김)
            pointerEvents: 'none',
          }}
        />

        {/* 좌표 텍스트 표시 */}
        <span style={{ position: "absolute", bottom: 10, right: 10, color: "white" }}>
          x: {Math.round(position.x)}, y: {Math.round(position.y)}
        </span>
      </div>
    </div>
  );
}

export default MouseTracker;
```

**💡 보충 설명 : 핵심 로직 & 트러블 슈팅**

<div class="wda-callout wda-ci">
  <strong>1. 정확한 좌표 계산 (getBoundingClientRect)</strong>
  <p><code>offsetX</code>를 사용하면 마우스가 자식 요소(점) 위로 올라갔을 때 기준점이 바뀌어 좌표가 튀는 버그가 발생합니다.<br>반면 <code>getBoundingClientRect()</code>는 화면 기준의 절대적인 위치와 크기를 가져오므로, 어떤 상황에서도 <strong>안정적인 좌표 계산</strong>이 가능합니다.</p>
  <strong>2. 마우스 이벤트 끊김 방지 (pointer-events: none) ⭐ 핵심</strong>
  <ul>
    <li><strong>문제 상황:</strong> 따라다니는 점(Follower)이 마우스 커서 바로 밑에 위치하면, 브라우저는 "마우스가 컨테이너가 아니라 '점' 위에 있다"고 판단합니다.<br>이로 인해 컨테이너의 <code>onMouseMove</code> 이벤트가 끊기거나 깜빡이는 현상이 발생합니다.</li>
    <li><strong>해결책:</strong> 점의 스타일에 <code>pointer-events: none</code>을 주면, 마우스 클릭이나 감지를 <strong>유령처럼 통과</strong>시키게 됩니다.<br>덕분에 마우스가 항상 아래에 있는 컨테이너를 정상적으로 감지할 수 있습니다.</li>
  </ul>
</div>

<div class="wda-callout wda-cs">
  <p><code>onMouseMove</code>는 마우스를 움직이는 동안 매우 자주 실행됩니다.<br>실제 서비스에서는 필요한 경우 <code>requestAnimationFrame</code>이나 throttle을 사용해 업데이트 빈도를 줄일 수 있습니다.<br>이번 실습에서는 이벤트 좌표 계산을 이해하는 것이 목적이므로 그대로 사용합니다.</p>
</div>

---

<h2>3. 💻 실습 2 : 키보드 & 포커스</h2>

입력창의 상태(포커스)를 감지하여 스타일을 바꾸고, 키보드 엔터(Enter) 키로 메시지를 전송하는 기능을 구현합니다.

**🎯 Mission**

`src/components/KeyboardInput.jsx`를 만들고 다음 목표를 달성하세요.

1. **상태 감지:** `onFocus`, `onBlur` 이벤트를 사용하여 사용자가 입력창을 클릭했는지 감지하세요. (입력 중이면 테두리 색상 변경 등)
2. **키보드 처리:** `onKeyDown`을 사용하여 **Enter 키**를 눌렀을 때만 메시지가 전송되게 하세요.
3. **마무리:** 전송 후에는 입력창을 비우고, 화면에 결과 메시지를 띄우세요(alert 또는 텍스트 표시).

**📝 예제 코드**

빈칸(`???`)을 채워 코드를 완성해 보세요.

**src/components/KeyboardInput.jsx**

```jsx
import { useState } from 'react';

function KeyboardInput() {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e) => {
    // 1. Enter 키인지 확인
    if (e.key === '???') {
      alert(`전송됨: ${text}`);
      setText(""); // 2. 입력창 비우기
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}

        // 3. 포커스 상태 감지
        onFocus={() => setIsFocused(???)}
        onBlur={() => setIsFocused(???)}
        onKeyDown={handleKeyDown}

        placeholder="메시지 입력..."
        style={{
          padding: "10px",
          width: "300px",
          // 포커스 여부에 따라 테두리 색 변경
          border: isFocused ? "2px solid skyblue" : "1px solid #ccc",
          outline: "none"
        }}
      />
    </div>
  );
}

export default KeyboardInput;
```

**✅ 결과 예시**

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">입력 전</div><div class="wda-sdsc">회색 테두리의 평범한 입력창입니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">클릭 시 (Focus)</div><div class="wda-sdsc">테두리가 하늘색으로 진하게 변합니다. (<code>onFocus</code>)</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">Enter 입력</div><div class="wda-sdsc">알림창이 뜨고 입력했던 글자가 사라집니다. (<code>onKeyDown</code>)</div></div>
  </div>
</div>

**📝 정답 코드**

<div style="position:relative;overflow:visible;margin:0.5rem 0;">
한글 입력 시 발생하는 중복 전송 버그(IME 이슈) 해결 로직이 포함된 정답입니다.
</div>

**src/components/KeyboardInput.jsx**

```jsx
import { useState } from 'react';

function KeyboardInput() {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태

  const handleKeyDown = (e) => {
    // [중요] 한글 입력 문제 해결 (IME Composition)
    // 글자 조합 중(isComposing)이라면 전송하지 않고 함수 종료
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Enter') {
      // 빈 문자열이나 공백만 입력한 상태라면 전송하지 않음
      if (!text.trim()) return;

      alert(`전송 완료: ${text}`);
      setText(""); // 입력창 초기화
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Keyboard & Focus</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}

        // 포커스 상태 변경
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}

        placeholder="메시지 입력..."
        style={{
          padding: "15px",
          width: "100%",
          fontSize: "16px",
          borderRadius: "8px",
          // 상태에 따른 스타일 조건부 적용
          border: isFocused ? "2px solid #00f0ff" : "1px solid #555",
          backgroundColor: "#333",
          color: "white",
          outline: "none",
          transition: "border 0.2s"
        }}
      />

      <p style={{ marginTop: "10px", color: isFocused ? "#00f0ff" : "#888" }}>
        {isFocused ? "입력 중입니다..." : "대기 중"}
      </p>
    </div>
  );
}

export default KeyboardInput;
```

**💡 보충 설명 (Logic Check)**

<div class="wda-callout wda-ci">
  <strong>1. isComposing이 뭔가요? (한글 두 번 전송 버그)</strong>
  <p>한글처럼 조합형 문자를 입력할 때는 IME 조합 과정 때문에 Enter 처리 로직이 의도치 않게 중복 실행될 수 있습니다.<br>이때 <code>e.nativeEvent.isComposing</code>이 <code>true</code>라면 아직 글자를 조합 중인 상태이므로 전송 로직을 실행하지 않도록 막을 수 있습니다.</p>
</div>

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">e.key</div>
    <div class="wda-fcard-dsc">실제 입력된 문자 값 (예: 'a', 'Enter'). 한/영 상태에 따라 값이 달라집니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">e.code</div>
    <div class="wda-fcard-dsc">키보드의 물리적 위치 (예: 'KeyA'). 언어 설정과 상관없이 항상 고정된 값을 가집니다. (게임 조작키 구현 시 유용)</div>
  </div>
</div>

---

<h2>4. 💻 실습 3 : 스크롤 스파이</h2>

**🎯 Mission**

**목표**

- 스크롤이 바닥에 닿았을 때 감지
- `scrollHeight`, `scrollTop`, `clientHeight` 이해
- 버튼 `disabled` 속성 제어

**공식 (Hint)**

```jsx
target.scrollHeight - target.scrollTop <= target.clientHeight
((스크롤 전체 길이) - (스크롤 내린 만큼) <= (눈에 보이는 화면 높이))
```

**✅ 결과 예시**

- **초기 상태**: 약관 동의 버튼 비활성화 (스크롤을 끝까지 내리세요)
- **완료 상태**: 스크롤을 끝까지 내리면 "약관 동의 완료!" 버튼 활성화 (보라색 변경)

**📝 정답 코드**

```jsx
import { useState } from "react";

export default function ScrollSpy() {
  // 1. 읽음 상태 관리 (기본값: false)
  const [isRead, setIsRead] = useState(false);

  const handleScroll = (e) => {
    // 구조 분해 할당으로 스크롤 관련 속성 추출
    const { scrollHeight, scrollTop, clientHeight } = e.target;

    // 2. 바닥 감지 공식 (오차범위 10px 여유)
    // (전체 내용 높이) - (내려온 높이) <= (눈에 보이는 창 높이) + 10
    if (scrollHeight - scrollTop <= clientHeight + 10) {
      setIsRead(true); // 끝까지 내렸으면 읽음 처리
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>이용 약관 (Scroll Me!)</h2>

      {/* 3. 스크롤 박스 영역 */}
      <div
        className="terms-box"
        onScroll={handleScroll} // 스크롤 이벤트 연결
        style={{
          height: "200px",        // 높이 고정
          overflowY: "scroll",    // 세로 스크롤 활성화
          border: "1px solid #333",
          padding: "10px",
          marginBottom: "20px",
          backgroundColor: "#1e1e1e",
          color: "#fff"
        }}
      >
        <p>제 1조: 열심히 공부한다.</p>
        <p>제 2조: 포기하지 않는다.</p>
        <p>제 3조: 코드를 직접 짠다.</p>
        <p>제 4조: 에러를 두려워하지 않는다.</p>
        <p>제 5조: 질문을 부끄러워하지 않는다.</p>
        <p>제 6조: 매일 조금씩 성장한다.</p>
        <p>제 7조: 건강을 챙긴다.</p>
        <p>제 8조: 즐겁게 코딩한다.</p>
        <p>제 9조: 복습을 철저히 한다.</p>
        <p>제 10조: 동료를 존중한다.</p>
        <p>제 11조: 새로운 기술에 열린 마음을 가진다.</p>
        <p>제 12조: 기록하는 습관을 들인다.</p>
        <p>제 99조: React 마스터가 된다!</p>
        <p>(마지막 줄입니다)</p>
      </div>

      {/* 4. 버튼 활성화 제어 */}
      <button
        disabled={!isRead} // isRead가 false면 버튼 비활성화
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: isRead ? "#9747FF" : "#555",
          color: "white",
          border: "none",
          cursor: isRead ? "pointer" : "not-allowed"
        }}
      >
        {isRead ? "✔ 약관 동의 완료!" : "약관 동의 (스크롤을 끝까지 내리세요)"}
      </button>
    </div>
  );
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>overflowY: 'scroll':</strong> onScroll을 테스트하려면 해당 요소가 실제로 스크롤 가능한 상태여야 합니다. 이를 위해 높이를 고정하고, 내용이 그 높이보다 길어야 하며, <code>overflowY: 'scroll'</code> 또는 <code>'auto'</code>를 설정합니다.</li>
    <li><strong>dummy text:</strong> 스크롤 이벤트를 테스트하기 위해 <code>height: 200px</code>보다 내용이 길어야 합니다.</li>
    <li><strong>disabled={!isRead}:</strong> <code>isRead</code> 상태가 <code>false</code>일 때(아직 안 읽었을 때) 버튼을 클릭할 수 없게 만듭니다.</li>
    <li><strong>+10px 여유:</strong> 브라우저 확대/축소나 디바이스 픽셀 비율 때문에 <code>scrollTop</code> 값에 소수점 오차가 생길 수 있어, +10px 정도의 여유를 둡니다.</li>
  </ul>
</div>

---

<h2>5. 💻 실습 4 : 이벤트 전파 (태그 관리자)</h2>

**🎯 Mission**

**목표**

- **부모 클릭**: 태그 선택 (배경색 변경)
- **자식 클릭(X)**: 태그 삭제
- **핵심**: 삭제 버튼 클릭 시 부모의 선택 이벤트가 발생하지 않도록 `stopPropagation` 필수 적용

**📝 정답 코드**

```jsx
import { useState } from "react";

export default function TagManager() {
  // 초기 태그 데이터 설정
  const [tags, setTags] = useState([
    { id: 1, text: "# React", active: false },
    { id: 2, text: "# Vue", active: false },
    { id: 3, text: "# Angular", active: false },
  ]);

  // 1. 태그 선택 (부모 동작)
  const toggleTag = (id) => {
    // map으로 불변성 지키며 active 상태 토글 (함수형 업데이트로 안전하게)
    setTags((prevTags) =>
      prevTags.map((tag) =>
        tag.id === id ? { ...tag, active: !tag.active } : tag
      )
    );
  };

  // 2. 태그 삭제 (자식 동작)
  const deleteTag = (id, e) => {
    e.stopPropagation(); // 핵심: 여기서 멈춰! (부모에게 클릭 이벤트 전달 X)
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      {tags.map((tag) => (
        // 부모 요소: 클릭 시 선택/해제 (toggleTag)
        <div
          key={tag.id}
          onClick={() => toggleTag(tag.id)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            // 선택 여부에 따른 스타일 변경
            backgroundColor: tag.active ? "#282c34" : "#f0f0f0",
            color: tag.active ? "white" : "black",
            border: tag.active ? "2px solid #61dafb" : "1px solid #ccc"
          }}
        >
          <span style={{ fontWeight: "bold" }}>{tag.text}</span>

          {/* 자식 요소: 클릭 시 삭제 (deleteTag) */}
          <button
            type="button"
            onClick={(e) => deleteTag(tag.id, e)}
            style={{
              background: "transparent",
              border: "none",
              color: tag.active ? "white" : "black",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>Event Bubbling (물방울 현상):</strong> 물 속에서 공기 방울이 위로 올라가듯, 자식 요소(삭제 버튼)에서 발생한 클릭 이벤트가 부모 요소(태그 박스)로 전파되는 현상을 말합니다.</li>
    <li><strong>e.stopPropagation():</strong> "여기서 멈춰!"라고 외치는 것과 같습니다. 이 코드가 없으면 삭제 버튼을 눌렀을 때 '삭제'도 되고 동시에 부모의 '선택(색상 변경)'도 실행되는 버그가 발생합니다.</li>
    <li><strong>불변성 유지:</strong> <code>map</code>과 <code>filter</code>를 사용하여 원본 배열을 수정하지 않고 새로운 배열을 만들어 상태를 업데이트해야 합니다.</li>
    <li><strong>함수형 업데이트:</strong> 현재 <code>tags</code> 값을 기준으로 다음 <code>tags</code>를 만들 때는 <code>setTags((prevTags) =&gt; ...)</code> 형태의 함수형 업데이트를 사용하면 더 안전합니다.</li>
  </ul>
</div>

<div class="wda-callout wda-cw">
  <p>실습에서는 <code>div</code>에 <code>onClick</code>을 사용했지만, 실제 서비스에서는 클릭 가능한 요소는 <code>button</code>을 사용하는 것이 접근성에 더 좋습니다.<br><code>div</code>를 클릭 요소로 사용할 경우 <code>role</code>, <code>tabIndex</code>, 키보드 이벤트 처리를 함께 고려해야 합니다.</p>
</div>

---

<h2>6. App.jsx에 모두 연결하기</h2>

각 컴포넌트 파일을 만든 뒤에는 `App.jsx`에서 import하고 JSX로 배치해야 브라우저 화면에 보입니다.

```jsx
import MouseTracker from './components/MouseTracker';
import KeyboardInput from './components/KeyboardInput';
import ScrollSpy from './components/ScrollSpy';
import TagManager from './components/TagManager';

function App() {
  return (
    <>
      <h1>이벤트 처리 훈련 1~4</h1>
      <MouseTracker />
      <KeyboardInput />
      <ScrollSpy />
      <TagManager />
    </>
  );
}

export default App;
```
