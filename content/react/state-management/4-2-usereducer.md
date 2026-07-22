---
title: "4-2 useReducer로 복잡한 상태 로직 관리하기"
status: "completed"
description: "useState의 한계를 넘어, State·Action·Reducer 패턴으로 복잡한 상태 로직을 컴포넌트 밖으로 분리하는 useReducer를 은행 창구 비유와 Todo·Form 실전 예제로 정리한다."
category: "React"
section: "State Management"
tags:
  - react
  - hooks
  - usereducer
  - state-management
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
.wda-fcard-pro{border-left:3px solid rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
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
  • <strong>useState의 한계</strong> — 복잡한 상태 로직에서 발생하는 관리의 어려움을 이해합니다<br>
  • <strong>Reducer 패턴</strong> — Action, Dispatch, Reducer의 데이터 흐름을 파악합니다<br>
  • <strong>실전 구현</strong> — useReducer를 활용하여 복잡한 상태 로직을 제어합니다<br>
  • <strong>선택 기준</strong> — 언제 useState 대신 useReducer를 사용해야 하는지 판단합니다
</div>

---

<h2>1. useState의 한계</h2>

### 1) 😵‍💫 문제 상황 (Code Pattern)

**"로직이 컴포넌트 안에 갇혀서 뒤섞여 있습니다."**
단순한 카운터가 아니라 '할 일 목록(Todo List)'처럼 데이터 구조가 객체 배열이고,  
수정/삭제/추가 등 동작이 많아지면 코드가 지저분해집니다.

```jsx
const [todos, setTodos] = useState([]);

// 1. 추가 로직이 컴포넌트 내부에 섞여 있음
const add = (text) => {
  setTodos([...todos, { id: Date.now(), text, done: false }]);
};

// 2. 여러 핸들러가 여기저기서 state를 조작함
const toggle = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  );
};
```

### 2) ⚠️ 무엇이 문제인가요? (Problems)

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">테스트가 어렵습니다 (Testability) ❌</div><div class="wda-fcard-dsc">상태 변경 로직(함수)이 컴포넌트 안에 묶여 있어서, UI 없이 로직만 따로 테스트하기가 힘듭니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">추적이 어렵습니다 (Traceability) ❌</div><div class="wda-fcard-dsc">add, toggle, remove 등 여러 함수가 제각각 setTodos를 호출합니다.<br>버그가 터졌을 때 "도대체 누가 상태를 이상하게 바꾼 거야?" 찾기가 어렵습니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">재사용이 힘듭니다 (Reusability) ❌</div><div class="wda-fcard-dsc">이 로직을 다른 컴포넌트에서도 쓰고 싶은데, 컴포넌트 내부에 박혀있어서 복사-붙여넣기 말고는 방법이 없습니다.</div></div>
</div>

### 3) 💡 해결책의 방향 (State Logic Separation)

**"로직만 쏙 빼서 밖으로 보내고 싶다!"**
컴포넌트는 "보여주는 것(UI)"만 담당하고,  
상태를 바꾸는 복잡한 "생각(Logic)"은 컴포넌트 밖으로 분리해 내는 것이 목표입니다.

---

<h2>2. useReducer의 핵심 3요소 (The Pattern)</h2>

### 1) 📦 State (현재 상태)

**"창고에 있는 재료"**
현재 컴포넌트가 가지고 있는 데이터 값입니다.

- 예시: `{ count: 0 }`

### 2) ⚡️ Action (주문서 - 무엇을 할지)

**"사장님(컴포넌트)의 요구사항"**
상태를 '어떻게' 바꿀지가 아니라, 단순히 "이거 해줘!" 라는 의도만 적힌 주문서 객체입니다.

- 예시: `{ type: 'UP' }` (숫자 올려줘!), `{ type: 'RESET' }` (초기화해줘!)

### 3) ƒ Reducer (변환기 - 어떻게 바꿀지)

**"똑똑한 알바생 (요리사)"**
현재 상태(재료)와 주문서(Action)를 받아서, 정해진 매뉴얼대로 새로운 상태를 만들어주는 함수입니다. 로직은 오직 여기에만 들어있습니다.

- 공식: `(state, action) => new State`

### 4) 🔄 데이터 흐름 (Workflow)

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">Dispatch</div><div class="wda-sdsc">컴포넌트(사장님)가 <code>dispatch(action)</code>으로 주문서를 창구에 넣습니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">Reducer</div><div class="wda-sdsc">알바생(Reducer)이 주문서를 확인하고, 현재 상태를 가져와서 작업을 수행합니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">New State</div><div class="wda-sdsc">작업이 끝나면 새로운 상태가 업데이트되고 화면이 바뀝니다.</div></div></div>
</div>

**🔎 한 줄 정리**

<div class="wda-callout wda-ci">
  <p>컴포넌트는 더 이상 "어떻게(How)" 바꿀지 고민하지 않습니다.</p>
  <p>단지 "무엇을(What)" 원하는지 주문(dispatch)만 하면 됩니다.</p>
</div>

---

<h2>3. 비유로 이해하기: 은행 창구</h2>

### 1) 등장인물 (Roles)

| 구분 | 비유 (Role) | 특징 (Characteristics) | 역할 (Responsibilities) |
| --- | --- | --- | --- |
| Component | 👤 손님 | 권한 없음. 은행 금고(State)를 직접 열 수 없습니다. | 요청만 가능. 창구에 가서 "입금해 주세요"라고 적힌 **요청서(Action)**만 제출합니다. |
| Reducer | 👩‍💼 은행원 | 유일한 권한자. 금고를 다룰 수 있는 권한을 가진 유일한 사람입니다. | 실제 처리. 손님이 낸 요청서를 확인하고, 금고(State)의 돈을 대신 갱신해 줍니다. |

### 2) 왜 이렇게 번거롭게 할까요? (Why?)

그냥 손님이 금고를 열면 빠를 텐데, 굳이 은행원을 거치는 데는 3가지 중요한 이유가 있습니다.

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">1. 안전성 (Safety)</div><div class="wda-fcard-dsc">아무나(아무 함수나) 금고(State)를 함부로 수정하지 못하게 막아 데이터 무결성을 지킵니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">2. 기록 (History)</div><div class="wda-fcard-dsc">"누가 언제 얼마나 입금했는지" 요청서(Action)가 남기 때문에, 돈이 비거나 문제가 생겼을 때 추적이 쉽습니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">3. 분업 (Separation)</div><div class="wda-fcard-dsc">손님(UI)은 "요청"만 하고, 복잡한 계산과 처리는 은행원(Logic)이 전담하여 코드가 깔끔하게 분리됩니다.</div></div>
</div>

---

<h2>4. useReducer 기본 문법</h2>

### 1) Reducer 함수 정의 (알바생 업무 매뉴얼)

컴포넌트 외부에 작성합니다. (굳이 내부에 있을 필요가 없습니다.) "주문서(Action)의 종류에 따라 상태를 어떻게 바꿀지" 정의해 둔 로직입니다.

```jsx
// (state: 현재 상태, action: 주문서) => 새로운 상태 반환
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': // 증가 주문이 오면?
      return { count: state.count + 1 };
    case 'DECREMENT': // 감소 주문이 오면?
      return { count: state.count - 1 };
    default: // 모르는 주문이면?
      return state; // 현상 유지
  }
}
```

### 2) 컴포넌트에서 연결 (창구 개설)

컴포넌트 내부에서 훅을 호출하여 연결합니다.

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  // const [현재상태, 주문창구] = useReducer(알바생, 초기값);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>카운트: {state.count}</p>
      {/* 3. Action 발생 (주문 넣기) */}
      <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
}

export default Counter;
```

### 3) 🧩 문법 상세 분해 (Syntax Breakdown)

이 4가지만 기억하시면 됩니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">state</div><div class="wda-fcard-dsc">현재 컴포넌트에서 사용할 데이터 (읽기 전용).</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">dispatch</div><div class="wda-fcard-dsc">액션을 발생시키는 함수. (state를 직접 수정하지 않고, 이 함수에 주문서를 넣어 보냅니다.)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">reducer</div><div class="wda-fcard-dsc">실제 로직을 가진 함수. <code>(state, action) => newState</code></div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">initialState</div><div class="wda-fcard-dsc">state의 초기값. (객체, 배열 등 무엇이든 가능)</div></div>
</div>

---

<h2>5. Action 객체 구조와 패턴</h2>

### 1) Action이란? (Concept)

**"상태 업데이트를 위한 정보를 담은 객체입니다."**
쉽게 말해 주문서입니다. 이 주문서에는 반드시 "무슨 일을 할 것인지(Type)"가 적혀있어야 하고,  
필요하다면 "재료(Payload)"도 함께 실어 보냅니다.

### 2) 작성 규칙 (Convention)

개발자들끼리의 약속(국룰)입니다. 지키지 않아도 에러는 안 나지만, 지키면 모두가 편합니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">type (필수)</div><div class="wda-fcard-dsc">어떤 작업을 할지 나타내는 ID입니다. 보통 대문자와 언더스코어(_)를 사용합니다. (예: ADD_TODO, DELETE_USER)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">payload (선택)</div><div class="wda-fcard-dsc">작업에 필요한 실제 데이터입니다. 이름은 마음대로 지어도 되지만, 보통 payload(화물, 적재량)라는 이름을 가장 많이 씁니다.</div></div>
</div>

**📝 예제 코드 (Patterns)**

상황에 따라 주문서의 모양이 조금씩 다릅니다.

```jsx
// 1. 단순한 주문 (데이터 불필요)
// "그냥 숫자 1 올려주세요"
const incrementAction = {
  type: 'INCREMENT'
};

// 2. 데이터가 필요한 주문
// "할 일 목록에 'React 공부하기'를 추가(ADD)해주세요"
const addAction = {
  type: 'ADD_TODO',
  payload: 'React 공부하기'
};

// 3. 복잡한 데이터 전달
// "사용자 정보를 이렇게 업데이트해주세요"
const updateAction = {
  type: 'UPDATE_USER',
  payload: {
    name: '김철수',
    age: 25,
    role: 'admin'
  }
};
```

---

<h2>6. Dispatch 함수 사용법</h2>

### 1) 개념 (Definition)

**"주문서 발송 버튼입니다."**
작성한 Action 객체를 Reducer 함수로 전달(발송)하는 함수입니다.  
`dispatch(action)` 형태로 호출하면, 아까 정의해 둔 Reducer(알바생)가 깨어나서 일을 시작합니다.

### 2) 특징 (Features)

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">어디서 쓰나요?</div><div class="wda-fcard-dsc">주로 onClick 같은 이벤트 핸들러 내부에서 호출합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">결과는요?</div><div class="wda-fcard-dsc">Reducer가 실행되어 상태가 바뀌면, 컴포넌트는 자동으로 리렌더링됩니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">성능은요?</div><div class="wda-fcard-dsc">dispatch 함수 자체는 참조값이 변하지 않음(Stable)이 보장됩니다. 따라서 useEffect나 useCallback 의존성 배열에 굳이 넣지 않아도 됩니다. (넣어도 상관없지만, 안 넣어도 안전합니다.)</div></div>
</div>

**📝 사용 코드**

두 가지 방식이 있습니다. "그냥 해줘(Type만)" vs "이 데이터로 해줘(Payload 포함)"

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET_COUNT':
      return { count: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // 1. 핸들러 함수 안에서 사용 (Action 객체 직접 전달)
  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      {/* 2. 인라인으로 직접 작성 가능 (단순 주문) */}
      <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>
        증가
      </button>

      {/* 3. 데이터(payload)와 함께 전달 (복잡한 주문) */}
      <button type="button" onClick={() => dispatch({ type: 'SET_COUNT', payload: 100 })}>
        100으로 설정
      </button>

      <button type="button" onClick={handleReset}>초기화</button>
    </div>
  );
}

export default Counter;
```

---

<h2>7. reducer 함수 작성법</h2>

### 1) Todo Reducer 예시

```jsx
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD': // 1. 추가 (ADD)
      return [
        ...state, // 기존의 할 일 목록을 복사 (불변성 유지)
        { id: Date.now(), text: action.payload, done: false } // 새로운 할 일 추가
      ];

    case 'TOGGLE': // 2. 토글 (TOGGLE)
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done } // id가 같으면 done 상태를 반전시킴
          : todo // id가 다르면 그대로 유지
      );

    case 'DELETE': // 3. 삭제 (DELETE)
      // id가 일치하지 않는 것만 남김 (삭제 효과)
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state; // 알 수 없는 액션은 기존 상태 그대로 반환
  }
}
```

### 2) 📝 작성 패턴 (Writing Patterns)

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">Switch 문 사용</div><div class="wda-fcard-dsc">action.type에 따라 로직을 분기하여 처리합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">불변성 유지</div><div class="wda-fcard-dsc">데이터를 직접 수정하는 push, splice 대신, 새로운 배열을 반환하는 spread(...), map, filter를 사용해야 합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">Default 처리</div><div class="wda-fcard-dsc">알 수 없는 액션이 들어오면 state를 그대로 반환하거나 에러를 던져서 앱이 멈추지 않게 합니다.</div></div>
</div>

**💡 보충설명 1 : 주의사항**

<div class="wda-callout wda-cw">
  <p>Reducer는 반드시 순수 함수(Pure Function)여야 합니다.</p>
  <ul>
    <li><strong>API 호출 금지</strong>: 서버 통신 등 사이드 이펙트(Side Effect)가 발생하면 안 됩니다.</li>
    <li><strong>비순수 로직 최소화</strong>: <code>Date.now()</code>, <code>Math.random()</code> 처럼 호출할 때마다 값이 바뀌는 로직은 가급적 Reducer 내부가 아닌 외부(Action 생성 시점 등)에서 처리하는 것이 좋습니다.</li>
  </ul>
</div>

**💡 보충설명 2**

1) filter로 삭제하는 패턴

```jsx
const newTodos = todos.filter(todo => todo.id !== 2);
```

- filter는 조건이 true인 것만 남긴다
- 삭제할 때는 `!==`를 사용한다
- 원본 배열은 수정되지 않고 새 배열이 반환된다 (불변성 유지)

2) reducer에서 삭제할 때

```jsx
case 'DELETE':
  return state.filter(todo => todo.id !== action.payload);
```

- `action.payload` → 삭제할 id
- React에서는 splice 대신 filter 사용

### 3) &lt;보충&gt; Counter.jsx (type + payload 구조 반영)

```jsx
import { useReducer } from "react"; // React의 useReducer 훅 import

/* 1️⃣ action type 상수 정의 */
const INCREMENT_KEY = "INCREMENT"; // 증가용 type 상수
const SET_COUNT_KEY = "SET_COUNT"; // 특정 값 설정용 type 상수

/* 2️⃣ reducer 함수 정의 (컴포넌트 외부 작성) */
// (state: 현재 상태, action: 주문서) => 새로운 상태 반환
function reducer(state, action) {
    switch (action.type) { // action 객체의 type을 기준으로 분기

        case INCREMENT_KEY: // type이 "INCREMENT"이면
            return { count: state.count + 1 }; // count 1 증가한 새로운 객체 반환

        case SET_COUNT_KEY: // type이 "SET_COUNT"이면
            return { count: action.payload }; // payload 값을 count에 저장

        default:
            return state; // 알 수 없는 type이면 기존 상태 그대로 반환
    }
}

function Counter() {

    /* 3️⃣ useReducer 연결 */
    const [state, dispatch] = useReducer(
        reducer,          // 상태 변경 로직 함수
        { count: 0 }      // 초기 상태 객체
    );

    /* 4️⃣ dispatch를 감싼 함수 */
    const handleDispatch = (type, payload) => {
        dispatch({ type, payload });
        // { type: type, payload: payload } 축약 문법
    };

    return (
        <div>
            <p>{state.count}</p>

            {/* 5️⃣ type만 전달하는 경우 */}
            <button type="button" onClick={() => handleDispatch(INCREMENT_KEY)}>
                +1
            </button>

            {/* 6️⃣ payload와 함께 전달하는 경우 */}
            <button type="button" onClick={() => handleDispatch(SET_COUNT_KEY, 100)}>
                100으로 설정
            </button>
        </div>
    );
}

export default Counter;
```

### 4) 손필기 요약 메모

1) `{ type: type }` → `{ type }`

```jsx
dispatch({ type });
```

2) `{ type, payload }` 도 가능

```jsx
dispatch({ type, payload });
```

3) reducer에서는 `action.type`, `action.payload`로 꺼내 쓴다.

### 5) 연결 흐름

```text
handleDispatch(INCREMENT_KEY)
↓
dispatch({ type: "INCREMENT" })
↓
reducer에서
case "INCREMENT":
```

### 6) payload 있는 경우

```text
handleDispatch(SET_COUNT_KEY, 100)
↓
dispatch({ type: "SET_COUNT", payload: 100 })
↓
return { count: action.payload }
```

### 7) 손필기 전체 의미 한 줄 요약

<div class="wda-callout wda-cs">
  <ul>
    <li>action은 객체다</li>
    <li>객체 안에는 type (필수)</li>
    <li>필요하면 payload 포함</li>
    <li>dispatch는 그 객체를 reducer로 전달</li>
    <li>reducer는 action.type으로 분기</li>
  </ul>
</div>

---

<h2>8. 초간단 예제 (전등 스위치)</h2>

### 1) Reducer 함수 (로직)

```jsx
function switchReducer(state, action) {
  switch (action.type) {
    case 'TURN_ON':
      return { isOn: true }; // 켜짐 상태 반환
    case 'TURN_OFF':
      return { isOn: false }; // 꺼짐 상태 반환
    case 'TOGGLE': // 💡 도전 과제 추가!
      return { isOn: !state.isOn }; // 현재 상태 반전
    default:
      return state;
  }
}
```

### 2) Component 사용

```jsx
import { useReducer } from 'react';

function switchReducer(state, action) {
  switch (action.type) {
    case 'TURN_ON':
      return { isOn: true };
    case 'TURN_OFF':
      return { isOn: false };
    case 'TOGGLE':
      return { isOn: !state.isOn };
    default:
      return state;
  }
}

function LightSwitch() {
  // 초기값: 꺼짐(false)
  const [state, dispatch] = useReducer(switchReducer, { isOn: false });

  return (
    <div>
      {/* 현재 상태 출력 */}
      <p>전등: {state.isOn ? '켜짐' : '꺼짐'}</p>

      {/* 켜기 버튼 */}
      <button type="button" onClick={() => dispatch({ type: 'TURN_ON' })}>
        켜기
      </button>

      {/* 끄기 버튼 */}
      <button type="button" onClick={() => dispatch({ type: 'TURN_OFF' })}>
        끄기
      </button>

      {/* 💡 도전: 토글 버튼 */}
      <button type="button" onClick={() => dispatch({ type: 'TOGGLE' })}>
        토글(스위치)
      </button>
    </div>
  );
}

export default LightSwitch;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>state</strong>: 현재 전등이 켜져 있는지 꺼져 있는지(데이터)를 나타냅니다.</li>
    <li><strong>action</strong>: 사용자가 버튼을 눌렀을 때 내리는 '켜기', '끄기' 같은 명령서입니다.</li>
    <li><strong>dispatch</strong>: 이 명령서를 Reducer에게 전달하는 우체부 역할을 합니다.</li>
  </ul>
</div>

---

<h2>9. 카운터 예제 (전체 코드)</h2>

### 1) Logic Definition (로직 정의)

컴포넌트 밖에 있어도 상관없는 순수 함수 영역입니다.

```jsx
// 1. Reducer 함수 정의
// (순수 함수: 컴포넌트 밖 가능)
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload }; // payload 사용 예시
    default:
      // 알 수 없는 액션 방어 (디버깅 용이)
      throw new Error(`Unknown: ${action.type}`);
  }
}
```

### 2) Component Usage (컴포넌트 사용)

실제 화면을 그리고 사용자와 상호작용하는 영역입니다.

```jsx
import { useReducer } from 'react';

// 2. 컴포넌트 내부 사용
function Counter() {
  const [state, dispatch] = useReducer(
    counterReducer,
    { count: 0 } // 초기 상태
  );

  return (
    <div>
      <h2>카운트: {state.count}</h2>

      {/* 3. Dispatch로 액션 전달 */}
      <button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>

      {/* Payload와 함께 전달 */}
      <button type="button" onClick={() => dispatch({ type: 'SET', payload: 100 })}>
        100으로 설정
      </button>
    </div>
  );
}

export default Counter;
```

### 3) ✅ 핵심 포인트 체크

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">1. 순수 함수 분리</div><div class="wda-fcard-dsc">counterReducer는 리액트 상태에 의존하지 않으므로 컴포넌트 밖으로 뺄 수 있습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">2. 안전장치 (Default)</div><div class="wda-fcard-dsc">switch문의 default에서 에러를 던져주면, 오타가 났을 때 바로 알 수 있습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">3. 다양한 액션</div><div class="wda-fcard-dsc">단순 증가(INCREMENT)뿐만 아니라, 특정 값으로 설정(SET)하는 등 다양한 요구사항을 하나의 함수에서 처리합니다.</div></div>
</div>

---

<h2>10. Todo 리스트 예제 (Refactoring)</h2>

### 1) reducer (로직 담당)

모든 상태 변경 로직이 이곳에 모여 있습니다. 컴포넌트는 더 이상 "어떻게" 수정하는지 몰라도 됩니다.

```jsx
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state, // 기존 배열 복사
        {
          id: action.payload.id,
          text: action.payload.text, // 입력받은 텍스트
          done: false,
        },
      ];

    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      );

    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}
```

<div class="wda-callout wda-cw">
  <p><code>Date.now()</code>처럼 실행할 때마다 값이 달라지는 로직은 reducer 내부보다 action을 만드는 시점에서 처리하는 것이 reducer의 순수성을 유지하는 데 더 좋습니다.</p>
</div>

### 2) 컴포넌트 (UI 담당)

컴포넌트는 이제 "무엇을 할지(Dispatch)" 만 고민하면 됩니다.

```jsx
import { useReducer, useState } from 'react';

function TodoList() {
  // 메인 데이터는 useReducer로 관리
  const [todos, dispatch] = useReducer(todoReducer, []);

  // 입력창의 단순 상태는 useState로 관리 (혼용 가능!)
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return;

    // "추가해줘!"라고 주문서(Action) 제출
    // Date.now()는 reducer 밖인 이 시점에서 생성해 액션에 담아 보냅니다.
    dispatch({
      type: 'ADD',
      payload: {
        id: Date.now(),
        text: input,
      },
    });
    setInput('');
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>추가</button>
      {/* 목록 렌더링... */}
    </div>
  );
}

export default TodoList;
```

**💡 핵심 포인트**

<div class="wda-callout wda-cs">
  <p><strong>하이브리드 패턴</strong>: 복잡한 todos 배열은 useReducer로 관리하고, 단순한 input 입력값은 useState로 관리합니다. 둘을 적절히 섞어 쓰는 것이 베스트입니다.</p>
  <p><strong>로직 재사용</strong>: 이제 todoReducer 함수만 따로 파일로 저장해 두면, 다른 컴포넌트에서도 똑같은 Todo 로직을 가져다 쓸 수 있습니다.</p>
</div>

---

<h2>11. 복잡한 폼 상태 관리 (Complex Form State)</h2>

### 1) ƒ Reducer (로직의 중앙화)

단순한 입력값 변경뿐만 아니라, 검증(Validation) 로직까지 Reducer가 담당합니다.

```jsx
const initialState = { name: "", email: "", age: "", errors: {} };

function formReducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      // [action.field]를 사용해 여러 입력창을 하나의 로직으로 처리
      return { ...state, [action.field]: action.value };

    case 'VALIDATE': {
      const errors = {};
      // 검증 로직이 컴포넌트 밖으로 빠져나옴!
      if (!state.name) errors.name = '이름을 입력하세요';
      if (!state.email.includes('@')) errors.email = '올바른 이메일을 입력하세요';
      return { ...state, errors };
    }

    case 'RESET':
      return initialState; // 초기화도 한 방에

    default:
      return state;
  }
}
```

### 2) ⚛️ Component (사용)

입력창이 10개가 되어도 핸들러 함수를 10개 만들 필요가 없습니다. dispatch 하나면 충분합니다.

```jsx
// 사용 예시
<input
  value={state.name}
  onChange={e => dispatch({
    type: 'CHANGE',
    field: 'name',
    value: e.target.value
  })}
/>
```

**💡 핵심 포인트**

<div class="wda-callout wda-ci">
  <p><strong>유효성 검사 분리</strong>: 기존에는 컴포넌트 안에서 if문으로 가득했던 검증 로직(VALIDATE)을 Reducer 안으로 숨겼습니다. 컴포넌트는 UI에만 집중할 수 있습니다.</p>
  <p><strong>확장성</strong>: 입력 필드가 늘어나도 <code>case 'CHANGE'</code> 로직 하나로 모두 커버 가능합니다.</p>
</div>

---

<h2>12. useState vs useReducer 비교</h2>

### 1) 특징 비교

두 훅의 특징을 한눈에 비교한 표입니다.

| 구분 | useState | useReducer |
| --- | --- | --- |
| 적합한 상태 | 원시값 (숫자, 문자열), 단순 객체 | 복잡한 객체, 배열, 계층 구조가 깊은 데이터 |
| 로직 위치 | 컴포넌트 내부 | 컴포넌트 외부 (분리 가능) |
| 테스트 용이성 | 어려움 (컴포넌트에 의존적) | 쉬움 (순수 함수라서 독립 테스트 가능) |
| 코드량 | 적음 (간결함) | 많음 (Boilerplate 코드가 필요함) |

### 2) 추천 가이드 (Recommendation)

| 구분 | 🔵 useState를 쓰세요 | 🟣 useReducer를 쓰세요 |
| --- | --- | --- |
| 데이터 형태 | 폼 입력 필드 하나하나 (단순 input), 카운터 같은 단순 숫자 | 여러 하위 값이 얽혀 있는 복잡한 객체 (예: 폼 데이터 전체) |
| 로직 복잡도 | 단순한 토글 (Open/Close) | 이전 상태에 의존적인 복잡한 로직 (예: 배열 수정, 삭제, 추가) |
| 코드 구조 | 컴포넌트 내부에서 간단히 처리할 때 | 상태 로직을 컴포넌트에서 싹둑 잘라내어 분리하고 싶을 때 |

**💡 한 줄 요약 (Golden Rule)**

<div class="wda-callout wda-ci">
  <p>"다음 상태가 이전 상태에 의존하고, 로직이 복잡하면 ➡️ useReducer"</p>
</div>

---

<h2>13. Context + useReducer 조합</h2>

### 1) 전역 상태 관리 코드 (TodoContext.js)

이 코드는 props를 계속 넘겨주지 않아도(Props Drilling 해결), 어디서든 dispatch를 꺼내 쓸 수 있게 해줍니다.

```jsx
// contexts/TodoContext.js
import { createContext, useReducer, useContext } from 'react';

// 1. Context 생성 (빈 껍데기)
const TodoContext = createContext(null);

// 2. Reducer 함수 (로직 담당)
function todoReducer(state, action) {
  // ... reducer 로직 (switch문 등)
  return state;
}

// 3. Provider 컴포넌트 (우산 역할)
export function TodoProvider({ children }) {
  // useReducer를 사용하여 state와 dispatch를 만듦
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    // 만든 state와 dispatch를 하위 모든 컴포넌트에 공급
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

// 4. Custom Hook (사용 편의성)
export function useTodos() {
  const context = useContext(TodoContext);
  // 안전장치: Provider 밖에서 쓰면 에러 발생
  if (!context) throw new Error('TodoProvider가 필요합니다.');
  return context;
}

// 5. 사용하는 컴포넌트
function TodoItem({ todo }) {
  // 1. Custom Hook 사용: Props 없이 dispatch만 쏙 꺼내옴
  const { dispatch } = useTodos();

  return (
    <li>
      {todo.text}

      {/* 2. Action 발송: 삭제 버튼 클릭 시 DELETE 주문서 제출 */}
      <button type="button" onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
```

**💡 보충설명 : 이 패턴을 쓰는 이유**

이 조합은 리액트에서 가장 강력한 기본 상태 관리 패턴입니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">1. Context</div><div class="wda-fcard-dsc">데이터를 전역으로 뿌려주는 '방송국' 역할을 합니다. (Props Drilling 해결)</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">2. useReducer</div><div class="wda-fcard-dsc">복잡한 상태 변경 로직을 담당하는 '전문가' 역할을 합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">3. useTodos Hook</div><div class="wda-fcard-dsc">컴포넌트들이 useContext(TodoContext)를 매번 치지 않고, useTodos() 한 방으로 편하게 데이터를 가져오게 합니다. 또한, Provider 없이 사용하는 실수를 막아줍니다(throw new Error).</div></div>
</div>

### 2) 📌 보충설명 — Context 상태 조회와 변경 구조 정리

**1️⃣ 필기 코드**

```jsx
function Todos() {
  // 1. Context 사용: 전역 상태(todos)를 훅으로 가져옴
  const { todos } = useTodos();

  return (
    <ul>
      {/* 2. 리스트 렌더링: map 함수로 배열을 순회 */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // 🔑 리스트 렌더링 시 필수 (고유 ID)
          todo={todo}   // 개별 데이터(객체)를 자식에게 전달
        />
      ))}
    </ul>
  );
}
```

**2️⃣ 같은 구조에서 상태 변경 코드**

```jsx
const { dispatch } = useTodos();

dispatch({ type: "ADD", payload: newTodo });
```

**3️⃣ 핵심 연결 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><code>useTodos()</code>는 <code>{ todos, dispatch }</code>를 반환한다.</li>
    <li>todos → 화면에 출력(render)할 때 사용한다.</li>
    <li>dispatch → 상태를 변경(update)할 때 사용한다.</li>
  </ul>
</div>

**4️⃣ 전체 흐름 구조**

```text
useReducer
   ↓
Context
   ↓ useTodos()
   ↓
① todos → 화면 렌더링
② dispatch → 상태 변경
```

**🔎 한 줄 정리**

<div class="wda-callout wda-ci">
  <p>같은 useTodos()를 사용하지만 todos는 화면 출력용, dispatch는 상태 변경용이다.</p>
</div>

---

<h2>14. 주의사항</h2>

### 1) 불변성 유지 (Immutability)

리액트는 상태가 '교체'되었을 때만 변경을 감지합니다. 원본을 직접 수정하면 화면이 갱신되지 않습니다.

```jsx
// ❌ 직접 수정 (Bad)
case 'ADD':
  state.push(newItem); // 원본 배열을 직접 변경 (금지!)
  return state;        // 리액트가 변경 사실을 모름

// ✅ 새 배열 생성 (Good)
case 'ADD':
  return [...state, newItem]; // 기존 내용을 복사하고 새 항목 추가
```

### 2) Action 타입 상수화 (Constants)

문자열을 직접 쓰다 보면 오타가 나기 쉽습니다. 상수로 만들어두면 자동완성도 되고 안전합니다.

```jsx
// 1. 오타 방지를 위해 상수로 정의
const ACTIONS = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  TOGGLE: 'TOGGLE'
};

// 2. 사용 시 (문자열 대신 변수 사용)
dispatch({ type: ACTIONS.ADD });
```

### 3) ƒ Reducer는 순수 함수 (Pure Function)

Reducer는 입력이 같으면 결과도 무조건 같아야 하는 '순수 함수'여야 합니다. 예측 가능해야 하기 때문입니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">같은 입력 → 항상 같은 출력</div><div class="wda-fcard-dsc">언제 실행해도 똑같은 결과가 나와야 합니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">외부 변수 수정 금지</div><div class="wda-fcard-dsc">함수 밖의 변수를 몰래 바꾸면 안 됩니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">API 호출 금지 (Side Effect)</div><div class="wda-fcard-dsc">서버 통신이나 비동기 작업은 Reducer 안에서 하면 안 됩니다. (이건 useEffect나 다른 곳에서!)</div></div>
</div>

---

<h2>15. ⁉️ FAQ</h2>

### 1) Q1.

**"useReducer에서 상태 변경 로직을 담고 있는, (state, action) => newState 형태의 순수 함수를 무엇이라 하나요?"**

**정답: Reducer (리듀서)**

- 설명: "이전 상태"와 "액션"을 받아서 "새로운 상태"를 반환하는 함수입니다.

### 2) Q2.

**"컴포넌트에서 리듀서에게 상태 변경을 요청(action 전달)하기 위해 사용하는 함수는?"**

**정답: dispatch (디스패치)**

- 설명: `dispatch(action)` 형태로 호출하여 리듀서를 실행시킵니다.

---

<h2>16. ✅ 핵심 요약</h2>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td>useReducer 구조</td>
    <td><strong>역할 분담</strong>: reducer(state, action) 함수가 상태 변경 로직을 전담하며, 컴포넌트는 dispatch로 이를 호출하기만 합니다.<br><strong>이점</strong>: 로직과 UI가 분리되어 코드가 깔끔해집니다.</td>
  </tr>
  <tr>
    <td>Action 패턴</td>
    <td><strong>객체 구조</strong>: type 속성으로 "무슨 짓을 할지" 행위를 식별하고, payload로 "필요한 재료" 데이터를 전달하는 객체 구조를 사용합니다. 예시: <code>{ type: 'ADD', payload: '공부하기' }</code></td>
  </tr>
  <tr>
    <td>선택 기준</td>
    <td><strong>useState</strong>: 숫자, 문자열, 불린 값 등 단순한 값을 다룰 때 적합합니다.<br><strong>useReducer</strong>: 로직이 복잡하거나, 여러 하위 값이 얽혀 있는 복잡한 객체를 다룰 때 적합합니다.</td>
  </tr>
  <tr>
    <td>주의사항</td>
    <td><strong>순수 함수</strong>: Reducer는 반드시 순수 함수여야 합니다. (입력이 같으면 출력도 같아야 함) <strong>불변성 유지</strong>: 기존 state를 직접 수정(push 등)하지 말고, 반드시 새로운 객체를 반환해야 합니다.</td>
  </tr>
</table>
