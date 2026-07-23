---
title: "4-3 전역 상태 관리 라이브러리"
status: "completed"
description: "Context API의 한계에서 출발해 Redux Toolkit·Zustand·Recoil·Jotai 같은 전역 상태 관리 라이브러리와 React Query 등 서버 상태 도구까지 비교하고 선택 기준을 정리한다."
category: "React"
section: "State Management"
tags:
  - react
  - state-management
  - redux
  - zustand
  - recoil
  - jotai
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

<div class="wda-goal">
  • <strong>전역 상태의 필요성</strong> — Context API의 한계와 라이브러리 도입 시점을 이해합니다<br>
  • <strong>Redux Ecosystem</strong> — Redux Toolkit(RTK) 표준과 Thunk/Saga 미들웨어를 이해합니다<br>
  • <strong>Modern Patterns</strong> — Zustand, Atom 패턴 등 최신 상태 관리 트렌드를 학습합니다<br>
  • <strong>Server State</strong> — React Query를 통한 서버 상태 분리의 중요성을 파악합니다
</div>

---

<h2>1. 왜 상태 관리 라이브러리가 필요할까?</h2>

**📌 Context API의 한계**

Context API 사용 시 여러 Context를 중첩하면 코드가 복잡해집니다.

```jsx
// 여러 Context를 중첩하면 복잡해짐
<AuthContext.Provider>
  <ThemeContext.Provider>
    <LanguageContext.Provider>
      <CartContext.Provider>
        <App />
      </CartContext.Provider>
    </LanguageContext.Provider>
  </ThemeContext.Provider>
</AuthContext.Provider>
```

**⚠️ 발생하는 문제들**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Provider 지옥</div><div class="wda-fcard-dsc">여러 Context 중첩</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">리렌더링</div><div class="wda-fcard-dsc">Context 값 변경 시 모든 소비자 리렌더링</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">코드 분산</div><div class="wda-fcard-dsc">관련 로직이 여러 파일에 흩어짐</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">디버깅 어려움</div><div class="wda-fcard-dsc">상태 변화 추적 힘듦</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">비동기 처리</div><div class="wda-fcard-dsc">별도 구현 필요</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>React에 내장된 Context API는 전역 상태를 관리할 수 있는 좋은 도구지만,<br>
  상태 종류(테마, 다국어, 장바구니, 유저 정보 등)가 많아질수록 위 코드처럼 &lt;Provider&gt;가 끊임없이 중첩되는 Provider 지옥(Provider Hell)에 빠지기 쉽습니다.</p>
  <p>또한 특정 Context의 상태가 하나라도 변하면 해당 Context를 구독(useContext)하고 있는 모든 하위 컴포넌트가 다시 렌더링(Re-rendering)되어<br>
  성능 저하의 원인이 되기도 합니다.</p>
  <p>이러한 한계를 극복하고 더 효율적인 렌더링 최적화, 비동기 통신, 상태 디버깅을 위해 Redux, Zustand 등의 전역 상태 관리 라이브러리를 도입하게 됩니다.</p>
</div>

---

<h2>2. 주요 상태 관리 라이브러리</h2>

| 라이브러리 | 핵심 설명 | 설치 명령어 | 주요 특징 |
| --- | --- | --- | --- |
| Redux | 가장 오래되고 많이 사용됨. 단방향 데이터 흐름 (Action → Reducer → Store → View) | `npm install @reduxjs/toolkit react-redux` | 예측 가능, 강력한 DevTools |
| Zustand | 간단하고 가벼움. 보일러플레이트 최소화 | `npm install zustand` | 러닝커브 낮음, 번들 크기 작음 |
| Recoil | Facebook이 만든 React 전용. Atom 기반 상태 관리 | `npm install recoil` | React와 자연스러운 통합 |
| Jotai | Recoil과 비슷하지만 더 간단. 원자적 상태 관리 | `npm install jotai` | 최소한의 API, TypeScript 친화적 |

**💡 보충 설명 (Tip)**

<div class="wda-callout wda-ci">
  <p><strong>Redux</strong>: 오랫동안 생태계의 표준처럼 쓰였으나 초기 설정 코드가 많아 무거운 편이었습니다.<br>
  하지만 최근에는 Redux Toolkit(RTK)을 기본으로 사용하여 이러한 단점을 많이 개선했습니다.</p>
  <p><strong>Zustand</strong>: 독일어로 '상태'라는 뜻을 가진 라이브러리로, 최근 가장 인기 있는 가벼운 상태 관리 도구입니다.<br>
  설정이 매우 직관적이고 React의 Hooks와 비슷한 사용법 덕분에 많은 신규 프로젝트에서 채택하고 있습니다.</p>
  <p><strong>Recoil &amp; Jotai</strong>: 둘 다 컴포넌트 트리와 독립적으로 'Atom(원자)'이라는 작은 상태 단위를 만들어 관리하는 상향식(Bottom-up) 접근법을 사용합니다.<br>
  특히 Jotai(일본어로 '상태')는 Recoil의 복잡함을 덜어내어 훨씬 단순하고 가벼운 API를 제공합니다.</p>
</div>

---

<h2>3. Redux: 데이터 흐름과 원칙</h2>

**📝 3가지 원칙**

Redux는 Flux 아키텍처를 기반으로 한 상태 관리 라이브러리입니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Single Source of Truth</div><div class="wda-fcard-dsc">애플리케이션의 모든 상태는 하나의 Store에 저장</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">State is Read-Only</div><div class="wda-fcard-dsc">상태는 읽기 전용이며, Action을 통해서만 변경 가능</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Changes with Pure Functions</div><div class="wda-fcard-dsc">Reducer는 이전 상태와 액션을 받아 다음 상태를 반환하는 순수 함수</div></div>
</div>

**⚙️ 단방향 데이터 흐름 (One-way Data Flow)**

<div class="wda-callout wda-ci">
  <p>View → (Dispatch) → Action → (Middleware) → Reducer → (New State) → Store → (Subscribe) → View</p>
</div>

**💡 보충 설명 (Tip)**

<div class="wda-callout wda-ci">
  <p><strong>단방향 데이터 흐름의 장점</strong>: 데이터가 항상 한쪽 방향으로만 흐르기 때문에,<br>
  앱의 규모가 커져도 "어디서 데이터가 바뀌었는지" 상태 변화를 예측하고 추적하기(디버깅) 매우 유리합니다.</p>
  <p><strong>순수 함수(Pure Function)란?</strong>: 외부의 상태를 변경하지 않으며, 같은 입력값(이전 상태와 액션)이 들어오면 항상 똑같은 결과값(새로운 상태)을 반환하는 함수를 말합니다.<br>
  Redux에서 상태의 일관성을 유지하기 위해 가장 중요한 원칙 중 하나입니다.</p>
</div>

---

<h2>4. Redux 생태계: 미들웨어 (Middleware)</h2>

**🧪 Redux Thunk**

가장 기본적이고 직관적인 비동기 미들웨어

```js
const fetchUser = () => (dispatch) => {
  fetch('/api').then(res => res.json()).then(data => {
    dispatch({ type: 'SET_USER', payload: data });
  });
};
```

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">함수 형태의 액션</div><div class="wda-fcard-dsc">간단한 비동기 로직에 적합</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">RTK에 기본 내장 👍</div><div class="wda-fcard-dsc">별도 설치 없이 바로 사용 가능</div></div>
</div>

**🧪 Redux Saga**

Generator 문법을 사용하는 강력한 도구

```js
function* fetchUser() {
  yield call(api.fetch);
  yield put({ type: 'SET_USER' });
}
```

<div class="wda-callout wda-ci">
  <p><strong>비동기 흐름 제어</strong>: 강력함<br>
  <strong>러닝커브</strong>: 높음 (Generator)<br>
  <strong>적합한 상황</strong>: 복잡한 시나리오에 적합</p>
</div>

**🧪 Redux Toolkit (RTK)**

현대 Redux의 표준 (공식 권장)

```bash
npm install @reduxjs/toolkit react-redux
```

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Thunk 내장</div><div class="wda-fcard-dsc">별도 설치 불필요</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Immer 내장</div><div class="wda-fcard-dsc">불변성 관리 자동화</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">DevTools 자동 설정</div><div class="wda-fcard-dsc">이걸로 시작하세요!</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>미들웨어(Middleware)란?</strong>: Redux에서 액션(Action)이 발생(Dispatch)하여 리듀서(Reducer)에 도달하기 전, 그 중간에 개입하여 특정 작업(예: 서버 API 호출 같은 비동기 통신, 로깅 등)을 가로채서 수행할 수 있게 해주는 도구입니다.<br>
  Redux의 기본 동작은 '동기적'이기 때문에 비동기 처리를 위해서는 미들웨어가 필수적입니다.</p>
  <p><strong>Redux Toolkit(RTK)의 편리함</strong>: 과거에는 Redux를 세팅할 때 Thunk 설정, 불변성 관리를 위한 Immer 패키지 추가, Redux DevTools 연동 등을 개발자가 일일이 수동으로 해줘야 했습니다.<br>
  하지만 RTK는 이 모든 필수 도구들을 하나로 묶어 제공하므로, 현재 Redux를 시작할 때는 고민 없이 RTK를 사용하시면 됩니다!</p>
</div>

---

<h2>5. Redux Toolkit (RTK) 코드 구조</h2>

**🧪 Slice 생성 (state + reducer)**

Slice는 상태(State)와 리듀서(Reducer)를 하나로 묶은 단위입니다.

```jsx
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    // Immer가 내장되어 있어 직접 수정 가능!
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Action Payload 사용 예시
    increaseBy: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, increaseBy } = counterSlice.actions;
export default counterSlice.reducer;
```

**🧪 Store 설정**

```jsx
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // 다른 리듀서들도 여기에 추가...
  }
});
```

**🆚 Legacy Redux와 차이점**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Action Type 상수 정의 불필요</div><div class="wda-fcard-dsc">createSlice가 자동으로 생성</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Action Creator 함수 작성 불필요</div><div class="wda-fcard-dsc">reducers 객체의 키가 곧 액션</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">switch-case 문 불필요</div><div class="wda-fcard-dsc">각 reducer 함수가 개별 처리</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">불변성 유지 코드(...state) 불필요</div><div class="wda-fcard-dsc">Immer가 대신 처리</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>Slice의 마법</strong>: 과거 Redux(Legacy Redux)에서는 액션 타입(Action Type), 액션 생성 함수(Action Creator), 그리고 이를 처리하는 리듀서(Reducer)를 각각 따로 작성해야 해서 코드가 매우 길어졌습니다.<br>
  하지만 RTK의 createSlice를 사용하면 이 모든 것을 하나의 객체 안에서 한 번에 정의할 수 있어 생산성이 크게 향상됩니다.</p>
  <p><strong>Immer 내장 (불변성 관리)</strong>: React와 Redux에서는 상태를 업데이트할 때 기존 객체를 직접 수정하지 않고 복사본을 만드는 '불변성(Immutability)' 유지가 필수입니다.<br>
  기존에는 <code>...state</code> 같은 스프레드 문법을 복잡하게 써야 했지만, RTK는 Immer라는 라이브러리를 내장하고 있어서 <code>state.value += 1</code>처럼 변수를 직접 수정하는 것처럼 코드를 짜도 내부적으로 알아서 불변성을 지켜주며 새로운 상태를 만들어냅니다.</p>
</div>

---

<h2>6. React 컴포넌트에서 Redux 사용</h2>

**🧪 Hooks 기반 사용**

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, increaseBy } from './store';

function Counter() {
  // 1. 상태 읽기 (Selector) - state.counter.value의 변화만 감지하여 리렌더링
  const count = useSelector((state) => state.counter.value);

  // 2. 액션 보내기 (Dispatch)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>

      <button type="button" onClick={() => dispatch(increment())}>
        +1 증가
      </button>
      <button type="button" onClick={() => dispatch(increaseBy(5))}>
        +5 점프
      </button>
    </div>
  );
}

export default Counter;
```

**💡 useSelector 최적화**

- useSelector는 선택한 상태가 이전과 다를 때만 컴포넌트를 리렌더링합니다. (참조 동등성 비교)

**💡 useDispatch**

- dispatch 함수 자체는 절대 변하지 않으므로, useEffect나 useCallback 의존성 배열에 넣어도 안전합니다.

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>useSelector의 역할</strong>: Redux 스토어(Store)에 저장된 전체 전역 상태 중에서, 현재 이 컴포넌트에서 필요한 특정 상태만 쏙 골라서(Select) 가져옵니다.<br>
  내가 선택한 값(state.counter.value)이 변경될 때만 컴포넌트가 다시 렌더링되므로, 불필요한 렌더링을 막아주는 아주 중요한 최적화 훅(Hook)입니다.</p>
  <p><strong>useDispatch의 역할</strong>: 상태를 변경해달라고 스토어에 편지를 보내는 우체부(dispatch 함수)를 데려옵니다.<br>
  사용자가 버튼을 클릭했을 때, dispatch(액션함수())를 호출하여 Store 내부의 Reducer가 상태를 업데이트하도록 트리거합니다.</p>
</div>

---

<h2>7. Zustand: 심플함의 미학</h2>

**📌 핵심 철학**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Minimalistic</div><div class="wda-fcard-dsc">정말 필요한 것만 남기자</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Unopinionated</div><div class="wda-fcard-dsc">특정 패턴을 강요하지 않음</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Hook-based</div><div class="wda-fcard-dsc">React Hooks와 완벽한 조화</div></div>
</div>

**💡 왜 인기 있는가?**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Provider 불필요</div><div class="wda-fcard-dsc">앱 최상단을 감쌀 필요 없음</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Boilerplate Zero</div><div class="wda-fcard-dsc">리듀서, 액션 정의 불필요</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Non-React 지원</div><div class="wda-fcard-dsc">바닐라 JS에서도 사용 가능</div></div>
</div>

**⚙️ 동작 구조**

중앙 집중형이지만 Hook처럼 사용합니다.

<div class="wda-callout wda-ci">
  <p>Component A, Component B → Selector를 통해 필요한 상태만 선택해서 사용</p>
  <p>Store (Hook): 내부에 상태(state)와 액션(actions)을 함께 보관</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>Provider 불필요의 장점</strong>: Redux나 Context API는 반드시 App.jsx 같은 최상단 파일에서 &lt;Provider&gt; 컴포넌트로 전체 앱을 감싸주어야 했습니다.<br>
  반면 Zustand는 생성한 Store를 단순히 커스텀 Hook(useStore) 형태로 필요한 곳에서 불러오기만 하면 되므로 코드가 훨씬 직관적이고 렌더링 최적화에도 유리합니다.</p>
  <p><strong>Boilerplate Zero</strong>: Redux에서 겪었던 Action Type 상수, Action Creator 함수, Switch문으로 구성된 Reducer 등을 일일이 나누어 작성하는 복잡한 과정(보일러플레이트) 없이,<br>
  객체 하나에 상태와 업데이트 로직을 한 번에 정의할 수 있어 개발 속도가 매우 빠릅니다.</p>
</div>

---

<h2>8. Zustand 코드 예시</h2>

**🧪 Store 생성 (stores/countStore.js)**

Redux Toolkit과 달리 Provider로 감쌀 필요가 없습니다.

```jsx
import { create } from 'zustand';

// set 함수를 통해 바로 상태 업데이트
const useCounterStore = create((set) => ({
  count: 0,

  // 액션도 스토어 안에 같이 정의
  increment: () => set((state) => ({
    count: state.count + 1
  })),

  decrement: () => set((state) => ({
    count: state.count - 1
  })),

  // 비동기 액션도 그냥 async 함수로!
  fetchCount: async () => {
    const response = await fetch('/api/count');
    const data = await response.json();
    set({ count: data.value });
  }
}));

export default useCounterStore;
```

**🧪 컴포넌트 사용 (Counter.jsx)**

```jsx
import useCounterStore from './stores/countStore';

function Counter() {
  // 필요한 상태만 쏙쏙 골라쓰기 (Selector)
  // count가 변할 때만 리렌더링 됨
  const count = useCounterStore((state) => state.count);

  // 액션 가져오기
  const increment = useCounterStore((state) => state.increment);

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={increment}>+1</button>
    </div>
  );
}

export default Counter;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>상태 자동 병합</strong>: set 함수는 상태를 병합(Merge)합니다. 기존 Redux처럼 <code>...state</code>를 사용하여 불변성을 유지할 필요가 없습니다!<br>
  단, 1 level 깊이에서만 자동 병합이 이루어진다는 점을 기억해 두시면 좋습니다.</p>
  <p><strong>비동기 처리의 간편함</strong>: Redux Thunk나 Saga 같은 별도의 미들웨어 없이, 스토어 내부에서 일반적인 async/await 함수를 사용하여 비동기 액션을 직관적으로 작성할 수 있습니다.</p>
</div>

---

<h2>9. Atomic State Pattern (Recoil / Jotai)</h2>

**📌 Atom: 상태의 최소 단위**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Bottom-up</div><div class="wda-fcard-dsc">작은 원자(Atom)들을 조립해서 큰 상태를 구성합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Dependency Graph</div><div class="wda-fcard-dsc">Atom 간의 의존성을 그래프로 관리합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Concurrent Mode</div><div class="wda-fcard-dsc">React의 동시성 모드와 호환성이 높습니다.</div></div>
</div>

**💡 React와 가장 닮음**

- `useState`와 거의 똑같은 API(`useRecoilState`, `useAtom`)를 제공하여 러닝커브가 거의 없습니다.

**⚙️ 상향식(Bottom-up) 데이터 흐름 (동작 구조)**

<div class="wda-callout wda-ci">
  <p>스토어에서 데이터를 내려받는 방식이 아니라, 하단의 작은 Atom(Atom1, Atom2)들을 상단의 컴포넌트(Comp A, Comp B, Comp C)에서 구독하여 사용하는 상향식(Bottom-up) 데이터 흐름을 가집니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>Top-down vs Bottom-up</strong>: Redux나 Zustand 같은 상태 관리 도구들은 거대한 하나의 저장소(Store)를 만들고 그 안에서 필요한 상태를 쪼개서 내려주는 하향식(Top-down) 방식을 주로 사용합니다.<br>
  반면, Recoil과 Jotai는 'Atom'이라는 아주 작은 상태 조각들을 개별적으로 선언하고, 필요한 컴포넌트에서 레고 블록처럼 조립해서 쓰는 상향식(Bottom-up) 접근법을 취합니다.</p>
  <p><strong>러닝커브가 낮은 이유</strong>: React에서 가장 기본이 되는 <code>const [state, setState] = useState(initialValue);</code> 문법을 그대로 차용했습니다.<br>
  훅 이름만 useAtom 또는 useRecoilState로 바꾸면 바로 전역 상태처럼 쓸 수 있어서 React 개발자들에게 매우 친숙하고 도입하기 쉽습니다.</p>
</div>

---

<h2>10. Recoil vs Jotai 코드 비교</h2>

**🧪 Recoil (Facebook)**

```jsx
import { atom, selector, useRecoilState } from 'recoil';

// Key가 반드시 필요함! (전역 고유)
const countState = atom({
  key: 'countState',
  default: 0,
});

// 파생 상태 (Derived State)
const doubleCountState = selector({
  key: 'doubleCountState',
  get: ({ get }) => get(countState) * 2,
});

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <button type="button" onClick={() => setCount(c => c + 1)}>
      {count}
    </button>
  );
}

export default Counter;
```

- 주의사항: 앱 최상단을 `RecoilRoot`로 감싸야 합니다.

**🧪 Jotai (Poimandres)**

```jsx
import { atom, useAtom } from 'jotai';

// Key 불필요! (JS 객체 참조 활용)
const countAtom = atom(0);

// 파생 상태가 훨씬 간단
const doubleCountAtom = atom((get) => get(countAtom) * 2);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <button type="button" onClick={() => setCount(c => c + 1)}>
      {count}
    </button>
  );
}

export default Counter;
```

- 특징: Provider는 선택 사항입니다 (없어도 동작합니다).

**🧠 최신 트렌드 요약**

- 최근에는 더 가볍고 유연한 Jotai가 Recoil(업데이트 정체)의 대안으로 떠오르고 있습니다.

<div class="wda-callout wda-cw">
  <p>Recoil은 Atom 기반 상태 관리 개념을 이해하는 데 좋은 예시입니다. 다만 최근 프로젝트에서는 Zustand, Jotai, TanStack Query 등 다른 선택지도 함께 검토됩니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>문법의 간결함</strong>: Recoil은 Atom을 생성할 때마다 전역적으로 고유한 문자열 key를 필수로 지정해야 하고, 파생 상태를 만들 때 selector라는 별도의 API를 써야 합니다.<br>
  반면 Jotai는 자바스크립트 객체 자체의 참조를 활용하기 때문에 귀찮은 key 지정이 필요 없고, 파생 상태도 그냥 atom() 안에서 콜백 함수로 간단하게 처리할 수 있어 코드가 훨씬 짧고 직관적입니다.</p>
  <p><strong>업데이트 정체 이슈</strong>: Recoil은 Facebook(Meta)에서 만들었지만, 오랫동안 정식 버전(v1)이 출시되지 않고 업데이트가 느려지면서 커뮤니티의 우려가 있었습니다.<br>
  그로 인해 최근에는 Recoil의 철학을 이어받으면서도 API를 훨씬 단순화하고 가벼운 Jotai로 넘어가는 추세입니다.</p>
</div>

---

<h2>11. 더 나아가기: 서버 상태 관리</h2>

**🆚 클라이언트 상태 vs 서버 상태**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">클라이언트 상태 (Client State)</div><div class="wda-fcard-dsc">UI의 상태 (모달 열림/닫힘, 테마, 입력값 등). 우리가 지금까지 배운 Redux, Zustand가 적합!</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">서버 상태 (Server State)</div><div class="wda-fcard-dsc">DB 데이터 (게시글 목록, 사용자 정보 등). TanStack Query(구 React Query), SWR 같은 전용 도구 권장!</div></div>
</div>

**💡 왜 전용 도구를 쓸까요?**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">캐싱 (Caching)</div><div class="wda-fcard-dsc">동일한 데이터 요청 중복 방지</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">자동 갱신</div><div class="wda-fcard-dsc">창을 다시 켰을 때 최신 데이터 불러오기</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">로딩/에러 처리</div><div class="wda-fcard-dsc">isLoading, isError 자동 제공</div></div>
</div>

**💡 추천 라이브러리**

- TanStack Query(구 React Query)
- SWR

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>상태 분리의 최신 트렌드</strong>: 과거에는 Redux 하나에 UI 상태(클라이언트)와 API 응답 데이터(서버)를 모두 우겨넣어 관리했습니다. 이로 인해 코드가 비대해지고 비동기 처리가 복잡해지는 문제가 있었습니다.<br>
  최근에는 UI/UX와 관련된 '클라이언트 상태'는 Zustand나 Jotai처럼 가벼운 도구로 관리하고, 서버에서 가져오는 '서버 상태'는 TanStack Query 같은 데이터 패칭(Data Fetching) 전용 라이브러리에게 온전히 맡겨 역할을 분리하는 것이 프론트엔드 생태계의 대세입니다.</p>
  <p><strong>로딩과 에러 처리의 마법</strong>: 기존에는 데이터를 불러올 때 useState로 loading, error, data 상태를 일일이 만들고 useEffect 안에서 관리해야 했습니다.<br>
  전용 도구를 사용하면 API 호출 시점에 알아서 isLoading, isError 상태를 반환해주어 코드가 기적처럼 짧아지고 깔끔해집니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <p>React Query는 현재 TanStack Query라는 이름으로도 많이 불립니다. 서버 상태 관리, 캐싱, 로딩/에러 상태 처리에 특화된 도구입니다.</p>
</div>

---

<h2>12. 라이브러리 비교표</h2>

**🆚 상태 관리 도구 특징 비교**

| 특징 | Redux Toolkit | Zustand | Recoil | Jotai |
| --- | --- | --- | --- | --- |
| 러닝커브 | 높음 | 낮음 | 중간 | 낮음 |
| 보일러플레이트 | 중간 | 적음 | 중간 | 적음 |
| 번들 크기 | ~40KB | ~2KB | ~20KB | ~8KB |
| DevTools | 강력함 | 있음 | 있음 | 있음 |
| Provider 필요 | Yes | No | Yes | Yes |
| TypeScript | 좋음 | 매우 좋음 | 좋음 | 매우 좋음 |
| 비동기 지원 | RTK Query | 미들웨어 | 내장 | 내장 |
| 커뮤니티 | 매우 큼 | 성장 중 | 중간 | 성장 중 |

**🔎 참고**

<div class="wda-callout wda-cw">
  <p>번들 크기는 버전과 빌드 환경에 따라 달라질 수 있습니다. 아래 표는 대략적인 비교 감각을 잡기 위한 참고용입니다.</p>
</div>

**💡 선택 가이드**

- 대규모 + 팀 협업 → Redux Toolkit
- 중소규모 + 빠른 개발 → Zustand
- React 친화적 + 세밀한 제어 → Recoil / Jotai

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>Zustand의 압도적인 가벼움</strong>: 표에서 보이듯 번들 크기가 ~2KB로 매우 작고 Provider로 앱을 감쌀 필요가 없다는 점이 최근 프론트엔드 생태계에서 Zustand가 폭발적으로 성장하는 가장 큰 이유입니다.<br>
  가벼운 토이 프로젝트나 빠른 기능 구현이 필요한 스타트업에서 특히 선호됩니다.</p>
  <p><strong>Redux Toolkit의 안정성</strong>: 러닝커브가 높고 번들 크기가 비교적 크지만, 커뮤니티가 매우 큼이라는 것은 실무에서 발생할 수 있는 거의 모든 에러와 엣지 케이스에 대한 레퍼런스(해결책)가 구글링으로 쉽게 나온다는 것을 의미합니다.<br>
  때문에 여전히 유지보수가 중요한 대규모 엔터프라이즈 환경에서는 Redux가 1순위로 고려됩니다.</p>
</div>

---

<h2>13. 실제 선택 시 고려사항</h2>

**💡 프로젝트 규모에 따른 추천**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">작은 프로젝트 (1-3명)</div><div class="wda-fcard-dsc">Context + useReducer / Zustand</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">중간 프로젝트 (3-10명)</div><div class="wda-fcard-dsc">Zustand / Redux Toolkit</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">대규모 프로젝트 (10명+)</div><div class="wda-fcard-dsc">Redux Toolkit + RTK Query</div></div>
</div>

**💡 추가 고려 요소**

- **팀 경험**: Redux 경험자가 많다면 Redux를 선택하는 것이 좋습니다.
- **기존 코드베이스**: 새로운 라이브러리로 교체할 때 발생하는 마이그레이션 비용을 고려해야 합니다.
- **비동기 복잡도**: 서버 상태(API 데이터) 관리가 많다면 RTK Query (또는 React Query) 도입이 필수적입니다.
- **성능 요구사항**: 잦은 상태 변경으로 인한 리렌더링 최적화가 얼마나 중요한지 따져봐야 합니다.
- **채용 시장**: 현실적으로 구인/구직 시장에서 Redux 경험자를 찾기가 가장 쉽습니다.

**🧠 결론**

<div class="wda-callout wda-cs">
  <p><strong>"처음엔 Context + useReducer로 시작하고, 필요할 때 라이브러리 도입"</strong></p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>오버엔지니어링(Over-engineering) 주의</strong>: 앱을 처음 만들 때 전역 상태가 유저의 로그인 정보나 테마(다크모드) 정도밖에 없다면 무거운 외부 라이브러리를 설치할 필요가 없습니다.<br>
  결론에 나온 것처럼 React 내장 기능인 Context API와 상태 관리 훅인 useReducer를 조합하는 것만으로도 아주 훌륭한 소규모 전역 상태 저장소를 만들 수 있습니다. 데이터가 복잡하게 얽히기 시작하는 시점에 라이브러리 도입을 고민해도 늦지 않습니다.</p>
  <p><strong>Redux를 꼭 배워야 하는 이유 (채용 시장)</strong>: Zustand나 다른 최신 도구들이 아무리 편리해도, 이미 수년 전부터 서비스 중인 수많은 기업들의 레거시(기존) 프로젝트들은 대부분 Redux로 짜여 있습니다.<br>
  따라서 실무에 빠르게 적응하거나 구직을 준비할 때 Redux(특히 Redux Toolkit)에 대한 이해도는 여전히 프론트엔드 개발자의 가장 강력한 무기 중 하나입니다.</p>
</div>

---

<h2>14. ✅ 핵심 요약</h2>

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>Context API는 <strong>Provider 지옥</strong>과 <strong>잦은 리렌더링</strong> 문제가 있어, 상태가 복잡해지면 전역 상태 관리 라이브러리 도입을 고려한다.</li>
    <li>Redux는 <strong>단방향 데이터 흐름</strong>(Action → Reducer → Store → View)과 예측 가능성이 강점이며, <strong>Redux Toolkit(RTK)</strong>이 현재 표준이다.</li>
    <li><strong>Zustand</strong>는 Provider 없이 Hook 형태로 쓰는, 보일러플레이트가 거의 없는 가벼운 라이브러리다.</li>
    <li><strong>Recoil/Jotai</strong>는 Atom 단위로 상태를 쪼개 관리하는 상향식(Bottom-up) 패턴이다.</li>
    <li><strong>클라이언트 상태</strong>(UI)와 <strong>서버 상태</strong>(API 데이터)는 분리해서 관리하며, 서버 상태는 TanStack Query 같은 전용 도구를 쓴다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: Redux의 보일러플레이트를 줄여주는 공식 도구 이름이 헷갈린다?</div>
    <div class="wda-mistake-right">정답: <strong>Redux Toolkit(RTK)</strong>이다. createSlice 등을 제공하며 현재 Redux 사용의 표준으로 권장된다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: Provider 없이 쓸 수 있고 가벼운 상태 관리 라이브러리가 뭔지 헷갈린다?</div>
    <div class="wda-mistake-right">정답: <strong>Zustand</strong>다. 간단한 문법과 작은 번들 크기로 인기를 얻고 있다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: Recoil과 Jotai는 사실상 같은 방식이다?</div>
    <div class="wda-mistake-right">정답: Recoil은 Atom마다 <strong>고유 key</strong>와 selector가 필요하지만, Jotai는 key 없이 <strong>atom() 콜백만으로</strong> 더 간단하게 처리한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 서버에서 가져온 데이터도 Redux·Zustand 같은 클라이언트 상태 도구로 관리하는 게 정석이다?</div>
    <div class="wda-mistake-right">정답: 서버 상태는 캐싱·자동 갱신·로딩/에러 처리가 필요해 <strong>TanStack Query 같은 전용 도구</strong>로 분리하는 것이 최신 트렌드다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 상태 관리 라이브러리는 프로젝트 시작부터 무조건 도입해야 한다?</div>
    <div class="wda-mistake-right">정답: 처음엔 <strong>Context + useReducer</strong>로 시작하고, 필요해질 때 점진적으로 라이브러리를 도입하는 것이 좋다 (오버엔지니어링 주의).</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · Redux 흐름</div>
    <div class="wda-formula-block-body"><code>View → dispatch → Action → Reducer → Store → View</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 상태 분리</div>
    <div class="wda-formula-block-body"><code>클라이언트 상태 = Zustand/Redux</code><br><code>서버 상태 = TanStack Query</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · 도입 순서</div>
    <div class="wda-formula-block-body"><code>Context+useReducer 먼저 → 필요시 라이브러리</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">Redux의 보일러플레이트를 줄여주는 공식 도구는?</div>
    <div class="wda-flip-back">Redux Toolkit(RTK)이며 createSlice 등을 제공하는 현재 표준 도구다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Provider 없이 쓸 수 있는 가볍고 직관적인 상태 관리 라이브러리는?</div>
    <div class="wda-flip-back">Zustand다. 보일러플레이트가 거의 없고 번들 크기도 작다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Redux의 단방향 데이터 흐름은?</div>
    <div class="wda-flip-back">View → dispatch → Action → Reducer → Store → View 순서로 흐른다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Recoil과 Jotai의 가장 큰 차이는?</div>
    <div class="wda-flip-back">Recoil은 Atom마다 고유 key와 selector가 필요하지만, Jotai는 key 없이 atom() 콜백만으로 더 간단하다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">클라이언트 상태와 서버 상태를 나누는 이유는?</div>
    <div class="wda-flip-back">서버 상태는 캐싱·자동 갱신·로딩/에러 처리가 필요해 TanStack Query 같은 전용 도구로 분리하는 것이 효율적이기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">상태 관리 라이브러리는 언제 도입하는 게 좋을까?</div>
    <div class="wda-flip-back">처음엔 Context + useReducer로 시작하고, 상태가 복잡해질 때 점진적으로 라이브러리를 도입한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Zustand가 인기 있는 핵심 이유는?</div>
    <div class="wda-flip-back">Provider가 필요 없고 보일러플레이트가 거의 없어 번들 크기가 작고 러닝커브가 낮다.</div>
  </div>
</div>
