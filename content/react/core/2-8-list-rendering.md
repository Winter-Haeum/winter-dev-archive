---
title: "2-8 리스트 렌더링"
status: "completed"
description: "map()을 활용한 배열 렌더링, key 속성의 역할과 선택 기준, 객체 배열 렌더링, 리스트 아이템 추가/삭제/필터링까지 React 리스트 렌더링의 기초를 정리한다."
category: "React"
section: "Core"
tags:
  - react
  - list-rendering
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
.wda-fcard-pro{border-left:3px solid rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  <strong>1) map()으로 리스트 렌더링</strong> — 배열 데이터를 JSX 요소 목록으로 변환하는 방법을 배웁니다.<br>
  <strong>2) key 속성 이해</strong> — React가 리스트를 효율적으로 업데이트하는 원리를 이해합니다.<br>
  <strong>3) 리스트 조작</strong> — 아이템 추가, 삭제, 필터링 등 실전 패턴을 익힙니다.<br>
  <strong>4) 주의사항</strong> — Index를 Key로 사용할 때의 문제점과 해결책을 배웁니다.
</div>

---

<h2>1. 리스트 렌더링이란?</h2>

**📌 개념**

<div class="wda-callout wda-cy">
  <p><strong>배열 데이터를 반복해서 화면에 표시</strong></p>
</div>

### 1) 데이터 (배열)

```javascript
// 화면에 표시할 데이터가 담긴 자바스크립트 배열
const fruits = ['사과', '바나나', '오렌지'];
```

<h3>2) 화면 (리스트)</h3>

```jsx
<ul>
  <li>사과</li>
  <li>바나나</li>
  <li>오렌지</li>
</ul>
```

<div class="wda-callout wda-cy">
  <p><strong>핵심:</strong> 배열의 각 요소를 <strong>map()</strong>으로 순회하며 JSX 요소로 변환합니다.</p>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>웹 애플리케이션(게시판, 쇼핑몰 상품 목록, 댓글 등)의 대부분은 반복되는 UI 구조를 가지고 있습니다.<br>개발자가 일일이 태그를 작성하는 것이 아니라, 데이터 배열만 있으면 리액트가 알아서 그 개수만큼 UI를 찍어내도록 만드는 것이 리스트 렌더링입니다.</p>
</div>

---

<h2>2. map()으로 배열 렌더링</h2>

**📌 개념**

<div class="wda-callout wda-cy">
  <p><strong>배열을 JSX 배열로 변환</strong></p>
</div>

### 1) 예제 코드

```jsx
function FruitList() {
  const fruits = ['사과', '바나나', '오렌지'];

  return (
    <ul>
      {/* fruits 배열을 순회하며 <li> 태그로 변환 */}
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>이 예제에서는 과일 이름이 모두 중복되지 않기 때문에 <code>fruit</code> 자체를 key로 사용했습니다. 실제 데이터에서는 중복되지 않는 id를 key로 사용하는 것이 가장 안전합니다.</p>
</div>

### 2) 핵심 요소 (Key Concepts)

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">map()</div>
    <div class="wda-fcard-dsc">배열 순회</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">콜백 함수</div>
    <div class="wda-fcard-dsc">각 요소를 JSX로 변환</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">key</div>
    <div class="wda-fcard-dsc">고유 식별자</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>리액트에서 리스트를 출력할 때는 <code>for</code> 문보다 <strong>map()</strong> 함수를 훨씬 더 많이 사용합니다.<br><code>map()</code>은 배열의 모든 요소를 돌면서, 우리가 원하는 형태(여기서는 <code>&lt;li&gt;</code> 태그)로 바꾼 <strong>새로운 배열</strong>을 뱉어주기 때문입니다.<br>JSX는 이 배열을 받아서 화면에 렌더링해 줍니다.</p>
</div>

---

<h2>3. key 속성의 역할</h2>

**📌 개념**

<div class="wda-callout wda-cy">
  <p><strong>React가 어떤 항목이 변경되었는지 식별</strong></p>
</div>

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl">1) key 없음 (경고 발생)</div>
    <div class="wda-fcard-dsc"><code>{fruits.map((fruit) =&gt; (&lt;li&gt;{fruit}&lt;/li&gt;))}</code><br>⚠️ 콘솔에 경고 메시지</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">2) key 있음 (정상)</div>
    <div class="wda-fcard-dsc"><code>{fruits.map((fruit) =&gt; (&lt;li key={fruit}&gt;{fruit}&lt;/li&gt;))}</code><br>✔️ React가 효율적으로 업데이트</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>key의 역할:</strong> 리스트가 변경될 때 React가 <strong>어떤 항목을 추가/삭제/수정할지 빠르게 파악</strong>할 수 있게 합니다.</p>
</div>

---

<h2>4. key 선택 가이드</h2>

### 1) 어떤 값을 key로 사용할까? (우선순위)

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sttl">1순위 (Best)</div><div class="wda-sdsc">고유 ID (DB에서 온 ID)</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sttl">2순위</div><div class="wda-sdsc">고유 값 (이메일 등 중복 없는 값)</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sttl">3순위</div><div class="wda-sdsc">조합 (이름+날짜 등으로 고유하게 만들기)</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">❌</div>
    <div class="wda-sbody"><div class="wda-sttl">비추천</div><div class="wda-sdsc">index (최후의 수단)</div></div>
  </div>
</div>

### 2) 예제 코드

```jsx
// 1순위: 가장 안전하고 권장하는 방법 (데이터베이스 ID)
<li key={item.id}>...</li>

// 2순위: ID가 없다면 중복되지 않는 고유 값 사용 (예: 이메일)
<li key={item.email}>...</li>

// 3순위: 정 없다면 여러 필드를 합쳐서라도 고유하게 만듦
// (문자열 템플릿을 사용해 이름과 날짜를 조합)
<li key={`${item.name}-${item.date}`}>...</li>

// ❌ 비추천: 배열의 인덱스(순서 번호) 사용
// (데이터의 순서가 바뀌면 심각한 버그를 유발할 수 있음)
<li key={index}>...</li>
```

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <p><strong>index를 피해야 하는 이유</strong></p>
  <p>리스트의 순서가 바뀌면 해당 항목의 <code>index</code> 값도 0, 1, 2... 순서에 따라 덩달아 바뀌게 됩니다.<br>이로 인해 React는 데이터가 바뀌지 않았는데도 바뀌었다고 착각하거나, 엉뚱한 요소를 업데이트하는 등 의도치 않은 동작을 할 수 있습니다.</p>
</div>

---

<h2>5. 객체 배열 렌더링</h2>

**📌 개념**

<div class="wda-callout wda-cy">
  <p><strong>데이터가 담긴 객체 배열을 화면에 표시하기</strong></p>
</div>

### 1) 데이터 준비 (State)

```javascript
import { useState } from 'react';

const [users, setUsers] = useState([
  { id: 1, name: '김철수', email: 'kim@test.com' },
  { id: 2, name: '이영희', email: 'lee@test.com' },
  { id: 3, name: '박민수', email: 'park@test.com' }
]);
```

### 2) 렌더링 구현 (Map)

```jsx
return (
  <ul>
    {/* users 배열을 순회하며 각 객체(user)를 <li>로 변환 */}
    {users.map((user) => (
      // 고유한 id를 key로 사용
      <li key={user.id}>
        <b>{user.name}</b>: {user.email}
      </li>
    ))}
  </ul>
);
```

### 3) 결과 화면

- **김철수**: kim@test.com
- **이영희**: lee@test.com
- **박민수**: park@test.com

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>Dot Notation (.) 사용:</strong> 객체 내부의 값에 접근할 때는 <code>user.name</code>, <code>user.email</code> 처럼 점(.)을 찍어서 가져옵니다.</li>
    <li><strong>Key의 위치:</strong> <code>map()</code> 함수 바로 안에 있는 <strong>최상위 태그</strong>(<code>&lt;li&gt;</code>)에 <code>key</code> 속성을 줘야 합니다. 내부의 <code>&lt;b&gt;</code>나 <code>&lt;span&gt;</code>에 주면 안 됩니다.</li>
  </ul>
</div>

---

<h2>6. 리스트에서 이벤트 처리</h2>

**각 아이템에 이벤트 연결하기**

```jsx
function UserList() {
  const users = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '김철수' }
  ];

  const handleClick = (userId) => {
    // 핵심 동작: 선택된 사용자의 ID를 콘솔에 기록
    console.log(`선택된 사용자 ID: ${userId}`);
  };

  return (
    <ul>
      {users.map((user) => (
        // 핵심 동작: 화살표 함수로 감싸서 해당 아이템의 ID를 전달
        <li key={user.id} onClick={() => handleClick(user.id)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>이벤트 연결:</strong> <code>onClick</code> 내에서 화살표 함수 <code>() =&gt; ...</code>를 사용하면 클릭하는 시점에 해당 아이템의 고유한 ID를 함수로 넘겨줄 수 있습니다.</li>
    <li><strong>식별자 활용:</strong> 이 패턴은 나중에 특정 유저의 상세 정보를 보거나 삭제할 때 필수적으로 사용됩니다.</li>
  </ul>
</div>

---

<h2>7. 리스트 아이템 삭제하기</h2>

**filter()로 특정 아이템 제거**

```jsx
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '공부하기' },
    { id: 2, text: '운동하기' }
  ]);

  const handleDelete = (id) => {
    // 핵심 동작: 현재 todos 값을 기준으로 다음 todos를 만들 때는 함수형 업데이트가 더 안전함
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {/* 핵심 동작: 클릭 시 해당 아이템의 id를 함수로 전달 */}
          <button type="button" onClick={() => handleDelete(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>filter() 활용:</strong> <code>todo.id !== id</code> 조건은 "내가 클릭한 것만 빼고 나머지는 다 남겨라"라는 뜻입니다.<br>filter()는 React에서 배열 state의 항목을 삭제할 때 가장 자주 사용하는 안전한 패턴입니다.<br>원본 배열을 직접 수정하지 않고, 조건에 맞는 항목만 남긴 새 배열을 만들 수 있습니다.</li>
    <li><strong>상태 업데이트:</strong> <code>setTodos</code>를 통해 필터링된 새 배열이 들어오면, 리액트가 변경 사항을 감지하여 삭제된 결과를 화면에 즉시 반영합니다.</li>
  </ul>
</div>

---

<h2>8. 리스트 아이템 추가하기</h2>

### 1) spread 연산자로 새 아이템 추가

```jsx
import { useState } from 'react';

function TodoList() {
  // 할 일 목록과 입력창의 상태를 각각 관리
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    // 빈 입력값 방지 (공백 제거 후 확인)
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(), // 간단한 실습용 임시 id 생성
      text: input
    };

    // 기존 배열(...)을 복사하고 끝에 새 아이템 추가 (함수형 업데이트로 안전하게)
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    // 입력창 초기화
    setInput("");
  };

  return (
    <div>
      {/* 입력값을 상태와 동기화 (Controlled Component) */}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>추가</button>
      {/* 리스트 렌더링 */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

### 2) 핵심 동작 원리

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">Spread 연산자 (...)</div>
    <div class="wda-fcard-dsc"><code>setTodos([...todos, newTodo])</code>는 기존 <code>todos</code> 배열의 모든 요소를 풀어서 복사한 뒤, 마지막에 <code>newTodo</code>를 붙여 <strong>새로운 배열</strong>을 만듭니다.<br>이는 React의 <strong>불변성(Immutability)</strong> 원칙을 지키기 위함입니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">입력 제어 (Controlled Component)</div>
    <div class="wda-fcard-dsc">Controlled Component에서는 React state가 입력값의 기준(source of truth)이 됩니다.<br>입력값이 바뀌면 <code>onChange</code>로 state를 업데이트하고, 그 state가 다시 input의 <code>value</code>로 표시됩니다.<br>이렇게 하면 추가 버튼 클릭 후 <code>setInput("")</code>을 통해 입력창을 쉽게 비울 수 있습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">유효성 검사</div>
    <div class="wda-fcard-dsc"><code>!input.trim()</code>을 사용하여 사용자가 빈 칸이나 공백만 입력했을 때 함수를 <code>return</code> 시켜 리스트에 빈 항목이 추가되는 것을 방지합니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <ul>
    <li><strong>Date.now() 사용 이유:</strong> 리스트의 각 항목은 고유한 <code>key</code> (id)가 필요합니다.<br><code>Date.now()</code>는 간단한 실습에서 임시 id를 만들 때 사용할 수 있습니다.<br>다만 실제 서비스에서는 데이터베이스 id나 UUID처럼 더 안정적인 고유 id를 사용하는 것이 좋습니다.</li>
    <li><strong>배열 메서드 push를 쓰지 않는 이유:</strong> <code>push</code>는 기존 배열 자체를 직접 수정합니다.<br>React state에서는 기존 배열을 직접 바꾸기보다, <code>spread</code>, <code>concat</code>, <code>filter</code>, <code>map</code> 등을 사용해 새로운 배열을 만들어 setter로 교체해야 합니다.</li>
  </ul>
</div>

---

<h2>9. filter()로 조건부 필터링 ⭐</h2>

### 1) 특정 조건의 아이템만 표시

```jsx
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '공부하기', done: true },
    { id: 2, text: '운동하기', done: false },
    { id: 3, text: '청소하기', done: false }
  ]);

  // 완료된 항목 포함 여부 상태 (기본값: true)
  const [showDone, setShowDone] = useState(true);

  // 렌더링 시점에 조건에 따라 표시할 배열을 결정 (파생 상태)
  const filteredTodos = showDone
    ? todos // showDone이 true면 전체 목록 표시
    : todos.filter(todo => !todo.done); // false면 미완료(!done) 항목만 필터링

  return (
    <div>
      <label>
        {/* 체크박스 클릭 시 showDone 상태 반전 (토글) */}
        <input
          type="checkbox"
          checked={showDone}
          onChange={() => setShowDone((prev) => !prev)}
        />
        완료 항목 표시
      </label>
      <ul>
        {/* 필터링된 목록(filteredTodos)을 기준으로 화면 그리기 */}
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

### 2) 핵심 동작 원리

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">파생 상태 (Derived State)</div>
    <div class="wda-fcard-dsc"><code>filteredTodos</code>는 별도의 State로 만들지 않고, 렌더링될 때마다 <code>showDone</code> 값에 따라 즉시 계산되는 변수입니다. 이렇게 하면 원본 데이터(<code>todos</code>)와 화면 데이터가 불일치하는 버그를 막을 수 있습니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">삼항 연산자 활용</div>
    <div class="wda-fcard-dsc"><code>조건 ? 참일_때 : 거짓일_때</code> 문법을 사용해 코드를 간결하게 작성했습니다. 체크박스가 체크되어 있으면(true) 원본을, 해제되어 있으면(false) 필터링된 배열을 보여줍니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">토글(Toggle) 로직</div>
    <div class="wda-fcard-dsc"><code>!showDone</code>을 사용하여 현재 상태의 반대값(true ↔ false)으로 업데이트합니다. 스위치를 켰다 껐다 하는 것과 같은 원리입니다.</div>
  </div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-cw">
  <p>원본 데이터 보존이 핵심입니다.<br>만약 <code>setTodos(todos.filter(...))</code>처럼 원본 상태 자체를 수정해버리면, 필터링된(숨겨진) 데이터는 영구적으로 삭제되어 다시 체크박스를 켜도 돌아오지 않습니다.<br>보여주는 뷰(View)만 다르게 하고 원본(Model)은 지키는 것이 중요합니다.</p>
</div>

---

<h2>10. ⁉️ FAQ</h2>

### 1) Q1. 배열을 렌더링할 때 React가 변경된 항목을 효율적으로 식별하기 위해 필수적인 속성은?

**정답: key**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>React는 DOM을 직접 조작하지 않고, 변경 전후의 가상 DOM을 비교(Diffing)하여 바뀐 부분만 업데이트합니다.<br>이때 같은 컴포넌트나 요소가 리스트 형태로 나열되어 있으면, 순서가 바뀌거나 중간에 삽입/삭제될 때 어떤 항목이 동일한 항목인지 알아내기 어렵습니다.<br><code>key</code> 속성은 각 항목에 고유한 주민등록번호를 달아주는 것과 같아서, React가 "아, 이 항목은 아까 걔구나!"라고 정확히 식별하게 도와줍니다.</p>
</div>

### 2) Q2. 리스트 렌더링 시 최후의 수단으로만 사용해야 하는 key 값은?

**정답: 배열의 인덱스 (index)**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><code>map((item, index) => ...)</code>에서 나오는 <code>index</code>를 key로 쓰면 안 되는 이유는, 배열의 순서가 바뀌면 인덱스도 바뀌기 때문입니다.<br>예를 들어 맨 앞의 항목(0번)을 삭제하면, 원래 1번이었던 항목이 0번이 되어버립니다.<br>React는 "어? key가 0번으로 똑같네? 내용이 안 변했나 보다"라고 착각하거나, 엉뚱한 컴포넌트 상태(state)를 그대로 물려받는 심각한 버그를 일으킬 수 있습니다.<br>데이터 자체에 포함된 고유 ID(DB id 등)가 없을 때만 '최후의 수단'으로 사용해야 합니다.</p>
</div>

---

<h2>11. 🔑 핵심 정리</h2>

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>Map Rendering</strong></td>
    <td>배열의 <code>map()</code> 메서드를 사용하여 데이터를 JSX 요소로 변환합니다. UI 반복의 가장 기본적인 패턴입니다.</td>
  </tr>
  <tr>
    <td><strong>Unique Key</strong></td>
    <td>React가 변경된 항목을 추적하기 위해 <strong>고유한 Key</strong>가 필수입니다. 인덱스(Index) 사용은 순서 변경 시 버그 위험이 있어 피해야 합니다.</td>
  </tr>
  <tr>
    <td><strong>Immutability (불변성)</strong></td>
    <td>리스트를 수정할 때는 <code>push</code>/<code>splice</code> 대신 <code>spread(...)</code>, <code>filter()</code> 등을 사용하여 <strong>불변성</strong>을 지켜야 합니다.</td>
  </tr>
</table>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>React에서 '불변성'이란 쉽게 말해 "원본을 건드리지 않고 새것을 만드는 규칙"입니다. 원본을 보존하고 교체해야 React가 "어? 이전 상태랑 달라졌네?"라고 변화를 감지하고 화면을 업데이트할 수 있기 때문입니다.</p>
</div>
