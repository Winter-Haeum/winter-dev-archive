---
title: "(부록) React Hooks 돌아보기"
status: "completed"
description: "지금까지 배운 useState·useEffect·useContext·useRef·useMemo·useCallback을 한눈에 정리하고, useTransition·useId 같은 React 18+ 신규 Hook과 Custom Hook 철학, Hooks 사용 원칙까지 복습한다."
category: "React"
section: "Hooks"
tags:
  - react
  - hooks
  - recap
  - usetransition
  - useid
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
  • <strong>전체 지도 그리기</strong> — 지금까지 배운 Hook들을 5가지 카테고리로 분류해 한눈에 복습합니다<br>
  • <strong>핵심 Hook 재복습</strong> — useState·useEffect·useContext·useRef의 역할과 특징을 다시 정리합니다<br>
  • <strong>최적화 Hook 구분</strong> — useMemo와 useCallback의 차이를 명확히 이해합니다<br>
  • <strong>신규 Hook 맛보기</strong> — useTransition, useId 같은 React 18+ Hook의 쓰임새를 살펴봅니다
</div>

---

<h2>1. Hooks Map (분류)</h2>

리액트 훅은 그 역할에 따라 크게 5가지 카테고리로 나눌 수 있습니다.

| 분류 | Hook 이름 | 태그 (Type) | 핵심 역할 및 특징 |
| --- | --- | --- | --- |
| 1) State Hooks (상태 관리) | `useState` | Basic | 가장 기본적인 상태 관리. 단일 값(Value) 하나를 관리할 때 사용 |
| 1) State Hooks (상태 관리) | `useReducer` | Complex | 상태 업데이트 로직이 복잡하거나 여러 상태가 얽혀있을 때 사용. Redux와 비슷한 방식(Action, Dispatch, Reducer) |
| 2) Effect Hooks (부수 효과) | `useEffect` | Async | 비동기적으로 실행 (가장 많이 사용). 화면이 모두 그려진(Paint) 후에 작동 |
| 2) Effect Hooks (부수 효과) | `useLayoutEffect` | Sync | 동기적으로 실행. 화면이 그려지기 전에 작동 (깜빡임 방지, 레이아웃 계산) |
| 3) Context & Ref (데이터 접근) | `useContext` | Global | 전역 상태(Context)에 접근하여 데이터를 받아옴. Props Drilling 해결 |
| 3) Context & Ref (데이터 접근) | `useRef` | DOM | HTML 요소(DOM)를 직접 선택할 때 사용. 리렌더링 없이 값을 저장하는 저장소 역할 |
| 4) Optimization (성능 최적화) | `useMemo` | Value | 복잡한 계산의 결과값(Value)을 기억(캐싱). 불필요한 재계산 방지 |
| 4) Optimization (성능 최적화) | `useCallback` | Function | 생성된 함수(Function) 자체를 기억. 함수의 불필요한 재생성 방지 |
| 5) Modern / Advanced (React 18+) | `useTransition` | Concurrency | 렌더링 우선순위를 조절 (긴급 vs 비긴급). 무거운 작업 시 화면 멈춤(Blocking) 방지 |
| 5) Modern / Advanced (React 18+) | `useDeferredValue` | Debounce | 값의 업데이트를 지연시킴. 입력 등에서 Debounce 효과를 내어 성능 확보 |
| 5) Modern / Advanced (React 18+) | `useId` | A11y | 접근성(Accessibility) 표준을 위한 고유 ID 생성. SSR 시 클라이언트와 서버 ID 불일치 방지 |
| 5) Modern / Advanced (React 18+) | `useSyncExternalStore` | External | 외부 스토어(Redux, Zustand 등)와 리액트 상태를 동기화 |

**💡 팁**

<div class="wda-callout wda-cs">
  <p>초보자라면 <code>useState</code>, <code>useEffect</code> 두 가지만 확실히 익혀도 대부분의 기능을 구현할 수 있습니다.<br>성능 최적화 훅(<code>useMemo</code>, <code>useCallback</code>)은 앱이 느려졌다고 느껴질 때 도입해도 늦지 않습니다.</p>
</div>

<div class="wda-callout wda-cw">
  <p><strong>useDeferredValue는 debounce와 똑같지 않습니다</strong></p>
  <p>useDeferredValue는 값의 업데이트 우선순위를 낮춰 UI 반응성을 유지하는 Hook입니다.<br>디바운스처럼 보일 수 있지만, 정해진 시간만큼 지연시키는 setTimeout 기반 debounce와는 다릅니다.</p>
</div>

---

<h2>2. Learned Hooks Recap (핵심 복습)</h2>

| Hook 이름 | 별명 (Metaphor) | 역할 (Role) | 특징 (Characteristics) | 코드 예시 (Code) |
| --- | --- | --- | --- | --- |
| `useState` | 기억 (Memory) | 컴포넌트가 무언가를 기억하게 만듭니다. | 값이 바뀌면 새로운 내용을 보여주기 위해 리렌더링(다시 그리기) 됩니다. | `const [count, setCount] = useState(0)` |
| `useEffect` | 동기화 (Sync) | 리액트 외의 외부 시스템(서버 API, DOM 등)과 컴포넌트를 동기화시킵니다. | 렌더링이 끝난 직후에 실행됩니다. (Side Effect 처리) | `useEffect(() => { subscribe() }, [id])` |
| `useContext` | 전송 (Teleport) | 복잡한 단계를 거치지 않고, 트리 깊숙한 곳으로 데이터를 바로 전송합니다. | Props Drilling 문제를 해결하는 전역 상태 관리 도구입니다. | `const theme = useContext(ThemeContext)` |
| `useRef` | 주머니 (Pocket) | 렌더링과 상관없는 값들을 넣어두는 주머니 (또는 DOM 직접 접근)입니다. | 값이 바뀌어도 리렌더링이 일어나지 않습니다. (조용히 간직함) | `const inputRef = useRef(null)` |

---

<h2>3. Optimization Hooks: memo vs callback</h2>

**🧠 useMemo (값 캐싱)**

**"계산된 결과값(Value)을 기억합니다."**
복잡하고 무거운 계산(예: 1억 번 반복문 돌리기)을 매번 렌더링할 때마다 다시 하지 않도록, 결과만 메모장에 적어두는 것과 같습니다.

- **언제 쓰나요?**: `difficultCalculation(a, b)` 처럼 오래 걸리는 함수의 리턴값을 재사용하고 싶을 때.

```jsx
const heavyValue = useMemo(() => {
  return difficultCalculation(a, b); // a, b가 안 바뀌면 이 계산 안 함
}, [a, b]);
```

**📦 useCallback (함수 캐싱)**

**"함수(Function) 그 자체를 기억합니다."**
리액트 컴포넌트는 렌더링 될 때마다 내부의 함수를 새로 만듭니다.  
`useCallback`은 이 함수를 새로 만들지 않고 재사용하도록 도와줍니다.

- **언제 쓰나요?**: 자식 컴포넌트에게 props로 함수를 넘겨줄 때 (함수가 바뀌면 자식도 불필요하게 리렌더링 되므로).

```jsx
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**⚠️ 주의사항 (Caution)**

**"모든 곳에 쓰지 마세요!"**

<div class="wda-callout wda-cw">
  <p>최적화도 공짜가 아닙니다.<br>메모리에 저장하고, 값이 바뀌었는지 비교하는 연산 비용이 듭니다.<br>정말 성능 문제가 느껴질 때만 사용하는 것이 정석입니다.</p>
</div>

---

<h2>4. Advanced Hooks Intro</h2>

| Hook 이름 | 별명 (Nickname) | 핵심 설명 및 특징 | 코드 예시 (Code) |
| --- | --- | --- | --- |
| `useReducer` | State Logic Manager (useState의 강력한 형님) | 복잡한 상태 로직이나 여러 상태가 얽혀있을 때 사용. 로직을 컴포넌트 밖(reducer)으로 분리하여 코드 관리 용이 | `const [state, dispatch] = useReducer(reducer, init)` |
| `useLayoutEffect` | Synchronous Effect (화면 그려지기 전) | useEffect와 같지만, 화면이 그려지기(Paint) 전에 동기적으로 실행. DOM 위치 측정이나 깜빡임 방지에 사용 | `useLayoutEffect(() => { /* DOM Measure */ }, [deps])` |
| `useTransition` | Non-blocking UI (뒷순위 처리) | React 18의 핵심 기능. 무거운 업데이트를 "뒷순위"로 미뤄서 타이핑/클릭 등 중요한 반응이 멈추지 않게 함 | `const [isPending, start] = useTransition()` |
| `useId` | Unique ID Generator (고유 ID 생성기) | 접근성(ARIA) 속성 연결을 위한 고유 ID 생성. SSR 환경에서 서버/클라이언트 ID 불일치 문제 해결 | `const id = useId()` |

**useLayoutEffect 보충**

<div class="wda-callout wda-cw">
  <p>useLayoutEffect는 DOM 변경 후 브라우저가 화면을 그리기 전에 동기적으로 실행됩니다.<br>레이아웃 측정이나 깜빡임 방지에는 유용하지만, 오래 걸리는 작업을 넣으면 화면 표시가 늦어질 수 있습니다.</p>
</div>

---

<h2>5. useTransition: 멈추지 않는 UI</h2>

**📌 개념 (Concept)**

<div class="wda-callout wda-ci">
  <p>useTransition은 긴급한 업데이트와 덜 긴급한 업데이트를 구분해, 사용자 입력 같은 중요한 반응을 먼저 처리하도록 돕습니다.</p>
</div>

**"급한 일과 덜 급한 일을 구분합니다."**
사용자의 타이핑이나 클릭 같은 긴급한 작업(High Priority)은 즉시 처리하고,  
데이터 필터링이나 차트 그리기 같은 무거운 작업(Low Priority)은 백그라운드에서 천천히 처리하여 화면이 버벅거리지 않게(Non-blocking) 만듭니다.

**💡 언제 사용할까요? (Use Cases)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">대량의 데이터 필터링/정렬</div><div class="wda-fcard-dsc">검색어 입력 시 수천 개의 리스트를 다시 계산해야 할 때.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">복잡한 차트 렌더링</div><div class="wda-fcard-dsc">데이터가 바뀔 때마다 무거운 그래프를 다시 그려야 할 때.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">탭 전환</div><div class="wda-fcard-dsc">느린 컴포넌트를 로딩할 때 탭 클릭 반응성을 유지하고 싶을 때.</div></div>
</div>

**핵심**

<div class="wda-callout wda-ci">
  <p>"입력은 즉시 반응하고, 결과는 천천히 보여줘도 될 때" 사용합니다.</p>
</div>

**🧪 예시 코드**

```jsx
import { useState, useTransition } from 'react';

function SearchList({ data }) {
  const [query, setQuery] = useState("");
  const [list, setList] = useState(data);

  // 1. 훅 호출: isPending(처리중 상태), startTransition(뒷순위 함수)
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;

    // 2. 긴급 업데이트: 검색창 입력은 즉시 반영 (타이핑 안 끊김)
    setQuery(value);

    // 3. 뒷순위 업데이트: 리스트 필터링 같은 무거운 작업은 감싸기
    startTransition(() => {
      const filtered = data.filter(item => item.includes(value));
      setList(filtered); // 이 업데이트는 조금 늦게 실행됨
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {/* 4. 처리 중일 때 로딩 표시도 가능 */}
      {isPending ? <p>로딩 중...</p> : <ul>{/* 리스트 렌더링 */}</ul>}
    </div>
  );
}

export default SearchList;
```

**⚠️ 주의사항 (Caution)**

<div class="wda-callout wda-cw">
  <p><strong>입력 상태는 감싸지 마세요</strong>: <code>setQuery(value)</code> 같은 입력창 상태를 <code>startTransition</code>으로 감싸면, 타자를 칠 때마다 딜레이가 생겨서 더 답답해집니다.</p>
  <p><strong>결과 상태만 감싸세요</strong>: <code>setList</code>처럼 결과를 보여주는 최종 상태 업데이트만 감싸야 합니다.</p>
</div>

---

<h2>6. useId: 고유 ID 생성기</h2>

**📌 개념 (Concept)**

**"폼 요소와 라벨을 연결하는 주민등록번호를 발급합니다."**
컴포넌트 내에서 유일한 ID 값을 생성해 줍니다.  
특히 접근성(Accessibility) 속성을 연결할 때 필수적입니다.

**💡 왜 사용할까요? (Why Use It?)**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">🔗 접근성 연결 (A11y)</div><div class="wda-fcard-dsc">시각 장애인을 위한 스크린 리더는 label과 input이 연결되어 있어야 내용을 읽어줄 수 있습니다.<br>이때 htmlFor와 id를 서로 연결해야 하는데, useId가 이 고유한 ID를 만들어줍니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">🖥️ SSR 불일치 방지</div><div class="wda-fcard-dsc">만약 Math.random()으로 ID를 만들면, 서버에서 만든 ID와 브라우저에서 만든 ID가 달라져서 에러(Hydration Mismatch)가 발생합니다.<br>useId는 서버와 클라이언트가 똑같은 ID를 갖도록 보장합니다.</div></div>
</div>

**🧪 예시 코드**

```jsx
import { useId } from 'react';

function PasswordField() {
  // 1. 고유 ID 생성 (예: :r1:, :r2:)
  const passwordId = useId();
  const hintId = useId();

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        {/* 2. 라벨과 인풋 연결 */}
        <label htmlFor={passwordId}>
          비밀번호:
        </label>
        <input
          id={passwordId}
          type="password"
          aria-describedby={hintId} // 3. 설명 텍스트 연결
        />
      </div>
      <p id={hintId}>비밀번호는 8자리 이상이어야 합니다.</p>
    </div>
  );
}

export default PasswordField;
```

**⚠️ 주의사항 (Caution)**

<div class="wda-callout wda-cw">
  <p><strong>"리스트의 key로 사용하지 마세요!"</strong></p>
  <p><code>useId</code>는 DOM 요소의 ID를 위한 것이지, 데이터의 ID가 아닙니다.<br><code>map()</code> 함수를 돌릴 때 사용하는 key 값은 반드시 데이터 자체(DB ID)에서 가져와야 합니다.</p>
</div>

---

<h2>7. Custom Hooks: 나만의 레고 블록 만들기</h2>

**📌 철학 (Philosophy)**

**"Hook은 레고 블록입니다."**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">기본 블록</div><div class="wda-fcard-dsc"><code>useState</code>, <code>useEffect</code> 같은 기본 훅들은 가장 작은 단위의 1x1 브릭입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">나만의 블록</div><div class="wda-fcard-dsc">이 작은 브릭들을 조립해서 '자동차 바퀴', '성문' 같은 더 크고 편리한 부품(Custom Hook)을 만들 수 있습니다.<br>한 번 만들어두면 어디서든 갖다 끼우기만 하면 됩니다.</div></div>
</div>

**💡 언제 만드나요? (Build Your Own)**

반복되는 로직이 보일 때가 바로 Custom Hook을 만들 타이밍입니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">📝 폼 관리가 귀찮다? → useInput</div><div class="wda-fcard-dsc">input 태그에 value, onChange를 매번 치기 귀찮을 때 하나로 묶습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">📡 API 호출이 반복된다? → useFetch</div><div class="wda-fcard-dsc">데이터 로딩, 에러 처리, 결과 저장을 매번 작성하지 않고 한 줄로 끝냅니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">🌗 다크모드가 필요하다? → useDarkMode</div><div class="wda-fcard-dsc">테마를 감지하고 전환하는 복잡한 로직을 캡슐화합니다.</div></div>
</div>

---

<h2>8. Hooks 사용 원칙 & 팁 (Cheat Sheet)</h2>

**⚖️ 절대 규칙 (Rules of Hooks)**

리액트가 Hooks의 순서를 헷갈리지 않게 하기 위해 꼭 지켜야 합니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">최상위(Top Level)에서만 호출하세요</div><div class="wda-fcard-dsc">반복문(for), 조건문(if), 중첩 함수 안에서 호출하면 절대 안 됩니다!<br>Hooks는 호출되는 순서가 보장되어야 올바르게 작동합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">React 함수 내에서만 호출하세요</div><div class="wda-fcard-dsc">React 함수형 컴포넌트나 Custom Hook 안에서만 써야 합니다. 일반 JS 함수나 Class 컴포넌트에서는 동작하지 않습니다.</div></div>
</div>

**🔗 의존성 배열 (Dependency Array)**

`useEffect`가 언제 실행될지를 결정하는 트리거(Trigger)입니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">[] (빈 배열)</div><div class="wda-fcard-dsc">Mount 시 1회만 실행됩니다. (초기화 작업)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">[a, b] (변수 포함)</div><div class="wda-fcard-dsc">a 또는 b가 변경될 때마다 실행됩니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">(생략) 배열 없음</div><div class="wda-fcard-dsc">매 렌더링마다 실행됩니다. (⚠️ 무한 루프나 성능 저하 주의!)</div></div>
</div>

**🧹 뒷정리 함수 (Cleanup Function)**

컴포넌트가 사라지거나(Unmount) 업데이트되기 직전에, 지저분한 것들을 치우는 작업입니다.

```jsx
useEffect(() => {
  // 1. 셋팅: 타이머 시작
  const timer = setInterval(() => {
    console.log('째깍째깍');
  }, 1000);

  // 2. 🧹 뒷정리 함수 (Unmount or Re-run 전 실행)
  return () => {
    clearInterval(timer); // 타이머 끄기
    console.log('청소 끝!');
  };
}, []);
```

**💡 꿀팁 (Tip)**

<div class="wda-callout wda-cs">
  <p><code>eslint-plugin-react-hooks</code> 플러그인을 사용하세요!<br>의존성 배열에 넣어야 할 변수를 빠뜨리면 에디터에서 자동으로 빨간 줄을 그어 알려줍니다.<br>실수를 방지하는 최고의 방법입니다.</p>
</div>
