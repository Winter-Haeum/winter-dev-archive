---
title: "3-1 useState로 상태 관리하기"
status: "completed"
description: "객체와 배열 state를 불변성을 지키며 업데이트하는 방법, 상태 끌어올리기 패턴, state 설계 원칙까지 useState 심화 활용법을 정리한다."
category: "React"
section: "Hooks"
tags:
  - react
  - hooks
  - usestate
  - immutability
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
.wda-fcard-pro{border-left:3px solid rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
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
  • <strong>객체와 배열 state</strong> — 복잡한 데이터 구조를 불변성을 지키며 업데이트하는 방법을 배웁니다<br>
  • <strong>상태 끌어올리기</strong> — 여러 컴포넌트가 같은 데이터를 공유하는 패턴을 익힙니다<br>
  • <strong>state 설계 원칙</strong> — 효율적이고 유지보수하기 좋은 state 구조를 설계합니다<br>
  • <strong>성능과 최적화</strong> — React가 state 변경을 감지하는 방식과 불변성이 렌더링에 미치는 영향을 이해합니다
</div>

---

<h2>1. 복습: useState 기본</h2>

**📝 기본 타입 state 복습**

```jsx
// 숫자형 state
const [count, setCount] = useState(0);
setCount(count + 1);
setCount(prev => prev + 1); // 함수형 업데이트

// 문자열 state
const [name, setName] = useState("");
setName('홍길동');

// boolean형 state
const [isOpen, setIsOpen] = useState(false);
setIsOpen(prev => !prev); // 토글(반전)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>setter 함수로만 업데이트해야 하며, 절대 state 변수를 직접 수정해서는 안 됩니다. 이 원칙은 원시 타입뿐만 아니라 객체나 배열에도 동일하게 적용되는 React의 핵심 규칙입니다.</p>
</div>

---

<h2>2. 불변성(Immutability)이란?</h2>

**📌 React 상태 관리의 핵심 원칙**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con">
    <div class="wda-fcard-ttl">변경 가능 (Mutable) ❌</div>
    <div class="wda-fcard-dsc">메모리 주소의 값을 직접 변경하는 방식입니다.<br>참조(Reference)가 유지되므로 React가 값의 변화를 감지하지 못합니다.</div>
  </div>
  <div class="wda-fcard wda-fcard-pro">
    <div class="wda-fcard-ttl">불변성 (Immutable) ✅</div>
    <div class="wda-fcard-dsc">값을 바꿀 때 기존 값을 건드리지 않고 새로운 복사본을 생성하는 방식입니다.<br>참조가 달라지므로 React가 변경 사실을 정확히 감지합니다.</div>
  </div>
</div>

```jsx
const obj = { a: 1 };
obj.a = 2; // 기존 객체를 직접 수정
// React: "주소가 그대로네? 안 바뀐 걸로 칠게."
```

```jsx
const obj = { a: 1 };
const newObj = { ...obj, a: 2 }; // 새로운 객체 생성 (Spread 연산자)
// React: "주소가 달라졌네? 업데이트 해야겠다!"
```

**왜 중요한가요?**

<div class="wda-callout wda-ci">
  <p>React는 효율적인 렌더링을 위해 객체의 내용 전체를 비교하지 않고, <strong>"이전 객체와 새 객체의 주소값(Reference)"만 빠르게 비교</strong>합니다.<br>따라서 기존 객체를 직접 수정해버리면 주소값이 변하지 않아 렌더링이 일어나지 않는 버그가 발생합니다.</p>
  <p>즉, <code>setUser(user)</code>처럼 <strong>같은 참조(주소값)를 그대로 다시 넘기면</strong> React는 "이전과 동일한 객체"라고 판단해 변경이 없다고 여기고 리렌더링을 건너뜁니다.<br>그래서 값을 바꿀 때는 항상 <code>{ ...user, age: 26 }</code>처럼 <strong>새로운 참조를 가진 객체/배열로 교체</strong>해서 setter에 전달해야 합니다.</p>
</div>

---

<h2>3. {...} 객체 state 다루기</h2>

**📌 객체도 불변성을 지켜야 합니다**

```jsx
const [user, setUser] = useState({
  name: '홍길동',
  age: 25
});

// ❌ 잘못된 방법
// 객체의 속성을 직접 수정하면 참조값(메모리 주소)이 변하지 않습니다.
// React는 데이터가 변하지 않았다고 판단하여 화면을 갱신하지 않습니다.
user.age = 26; 
setUser(user);

// ✅ 올바른 방법
// Spread 연산자(...)를 사용하여 기존 내용을 복사한 새 객체를 만듭니다.
// 참조값이 변경되므로 React가 변화를 감지하고 리렌더링합니다.
setUser({
  ...user, 
  age: 26 
});
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>React는 성능 최적화를 위해 객체 내부의 모든 값을 일일이 비교하지 않고, 객체의 참조값(Reference)만 비교합니다.<br>따라서 내용을 수정하더라도 참조값이 그대로라면 React는 변경 사항을 무시합니다.<br>반드시 새로운 객체를 만들어 갈아끼워야 합니다.</p>
</div>

---

<h2>4. 객체 state 업데이트 패턴</h2>

**📝 spread 연산자로 복사 후 수정**

```jsx
const [form, setForm] = useState({
  name: "",
  email: "",
  age: 0
});

// 하나의 필드만 업데이트
const updateName = (newName) => {
  setForm({
    ...form,      // 1. 기존 값 복사 (순서 중요!)
    name: newName // 2. 원하는 필드만 덮어쓰기
  });
};

// 함수형 업데이트 (권장)
// 이전 상태(prev)를 기반으로 안전하게 업데이트
const updateEmail = (newEmail) => {
  setForm(prev => ({
    ...prev,
    email: newEmail
  }));
};
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>Spread 연산자의 순서가 핵심입니다.</strong></p>
  <p><code>...form</code>을 먼저 작성하여 기존 데이터를 바닥에 깔아두고, 그 위에 <code>name: newName</code>을 덮어써야 수정된 내용이 반영됩니다.<br>순서를 바꾸면(<code>name</code>을 먼저 쓰고 <code>...form</code>을 나중에 쓰면) 기존 데이터가 수정한 내용을 덮어버려 아무 변화도 일어나지 않게 됩니다.</p>
</div>

---

<h2>5. 배열 state 다루기</h2>

**⚠️ 배열도 새로 만들어야 합니다**

```javascript
// ❌ 사용하면 안 되는 메서드
// (원본 배열을 직접 수정하기 때문에 React가 변경을 감지하지 못함)
push()    // 끝에 추가
pop()     // 끝 요소 삭제
splice()  // 중간 요소 삭제/추가
sort()    // 정렬
reverse() // 순서 뒤집기

// ✅ 사용해야 하는 메서드
// (기존 배열은 건드리지 않고, 변경된 '새로운 배열'을 반환함)
concat()  // 배열 합쳐서 새 배열 반환 (추가)
filter()  // 조건에 맞는 요소만 남김 (삭제)
map()     // 요소를 변환하여 새 배열 생성 (수정)
slice()   // 배열의 일부분을 잘라내어 복사
[...arr]  // Spread 연산자로 전체 복사
```

**🧠 기억법**

<div class="wda-callout wda-ci">
  <p><strong>원본을 변경하는 메서드는 금지, 새 배열을 반환하는 메서드는 OK.</strong></p>
</div>

**💡 sort() / reverse() 보충 설명**

<div class="wda-callout wda-cw">
  <p><code>sort()</code>와 <code>reverse()</code>는 원본 배열을 직접 바꾸는 메서드입니다. state 배열에 바로 사용하면 안 되고, 정렬/반전이 필요하다면 <strong>먼저 복사한 뒤</strong> 사용해야 합니다.</p>
</div>

```javascript
const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
const reversedItems = [...items].reverse();
```

**🧪 자주 쓰는 패턴 모음**

```jsx
// 추가 (끝에)
setItems((prevItems) => [...prevItems, newItem]);

// 삭제 (특정 id)
setItems((prevItems) =>
  prevItems.filter((item) => item.id !== targetId)
);

// 수정 (특정 id의 속성)
setItems((prevItems) =>
  prevItems.map((item) =>
    item.id === targetId ? { ...item, name: newName } : item
  )
);
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>React의 상태 업데이트 원칙은 '불변성(Immutability)'입니다.<br><code>push</code>나 <code>pop</code> 같은 메서드는 메모리 주소(참조값)를 유지한 채 내용물만 바꾸기 때문에, React가 "데이터가 안 변했네?"라고 착각하여 화면을 갱신하지 않습니다.<br>반면 <code>map</code>, <code>filter</code>, <code>concat</code> 등은 아예 새로운 주소지를 가진 배열을 만들어내므로 React가 확실하게 변화를 감지할 수 있습니다.</p>
  <p><strong>push(), pop(), splice()는 기존 배열 자체를 직접 수정합니다.</strong><br>React state에서는 기존 배열을 직접 바꾸기보다, <code>spread</code>, <code>concat</code>, <code>filter</code>, <code>map</code> 등을 사용해 새로운 배열을 만들어 setter에 전달해야 합니다.<br>위 예제처럼 <code>items</code>를 직접 참조하는 대신 <code>(prevItems) =&gt; ...</code> 형태의 <strong>함수형 업데이트</strong>를 사용하면, 항상 최신 상태를 기준으로 안전하게 다음 배열을 계산할 수 있습니다.</p>
</div>

---

<h2>6. 🛠️ 미니 실습: 배열 조작하기</h2>

**🎯 Mission**

<div class="wda-callout wda-cs">
  <p><strong>배열 상태 만들기</strong>: <code>useState</code>를 사용하여 빈 배열로 초기화하세요.<br>
  <strong>추가 함수 구현</strong>: 배열에 새로운 아이템을 추가하는 함수를 작성하세요. (<code>push</code> 사용 금지!)<br>
  <strong>삭제 함수 구현</strong>: <code>filter</code>를 사용하여 특정 인덱스의 아이템을 삭제하는 함수를 작성하세요.</p>
</div>

**📝 예제 코드**

```jsx
import { useState } from 'react';

function MiniTodo() {
  // 1. 배열 상태 만들기
  const [todos, setTodos] = useState([]);

  // 2. 추가 함수 구현
  const addTodo = (text) => {
    // 여기에 작성하세요 (push 금지!, spread 연산자 활용)
  };

  // 3. 삭제 함수 구현
  const deleteTodo = (index) => {
    // filter를 사용해 보세요
  };

  return <div>{/* 테스트용 UI 코드 생략 */}</div>;
}

export default MiniTodo;
```

**✅ 결과 예시**

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">초기 상태</div><div class="wda-fcard-dsc"><code>[]</code></div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">"리액트 공부" 추가</div><div class="wda-fcard-dsc"><code>["리액트 공부"]</code></div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">"운동하기" 추가</div><div class="wda-fcard-dsc"><code>["리액트 공부", "운동하기"]</code></div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">첫 번째 항목(0번 인덱스) 삭제</div><div class="wda-fcard-dsc"><code>["운동하기"]</code></div></div>
</div>

**📝 정답 코드**

```jsx
import { useState } from 'react';

function MiniTodo() {
  const [todos, setTodos] = useState([]);

  // 추가 기능 (Spread 연산자 사용)
  const addTodo = (text) => {
    // 1. 기존 todos를 펼치고
    // 2. 새 text를 추가한 '새 배열' 생성
    setTodos((prevTodos) => [...prevTodos, text]);
  };

  // 삭제 기능 (filter 사용)
  const deleteTodo = (index) => {
    // index가 일치하지 않는 요소만 남김 (삭제 효과)
    // 첫 번째 인자(_)는 요소의 값인데 사용하지 않으므로 언더바 처리
    setTodos((prevTodos) =>
      prevTodos.filter((_, i) => i !== index)
    );
  };

  return <div>{/* UI 코드 */}</div>;
}

export default MiniTodo;
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>Underscore <code>_</code> 변수의 의미</strong></p>
  <p><code>filter</code> 메서드의 콜백 함수는 <code>(element, index) =&gt; ...</code> 형태의 인자를 받습니다.<br>여기서 로직상 <code>element</code>(배열의 값)는 필요 없고 <code>index</code>(순서)만 필요할 때, 첫 번째 인자 자리를 비워둘 수 없으므로 "이 변수는 사용하지 않는다"는 관례적인 표시로 <code>_</code> (언더바)를 사용합니다.</p>
  <p><strong>함수형 업데이트</strong>: 현재 <code>todos</code> 값을 기준으로 다음 <code>todos</code>를 만들 때는 <code>setTodos(prevTodos =&gt; ...)</code>처럼 함수형 업데이트를 사용하면 더 안전합니다.<br>이전 상태(<code>prevTodos</code>)를 인자로 직접 받기 때문에, 같은 이벤트 안에서 상태를 여러 번 업데이트하거나 클로저가 오래된 값을 참조하는 상황에서도 항상 최신 상태를 기준으로 계산합니다.</p>
</div>

---

<h2>7. 중첩 객체의 문제점: Spread Hell</h2>

**⚠️ 깊은 복사의 복잡성**

객체 안에 객체가 중첩된 경우, 가장 안쪽의 값을 하나 바꾸기 위해 모든 상위 객체를 일일이 복사(Spread)해야 합니다.

```jsx
const [user, setUser] = useState({
  name: '홍길동',
  address: {
    city: '서울',
    details: { zip: '12345' }
  }
});

// zip 코드 하나 바꾸는데 작성해야 하는 코드
setUser({
  ...user,
  address: {
    ...user.address,
    details: {
      ...user.address.details,
      zip: '54321' // 겨우 이거 하나 수정하기 위해...
    }
  }
});
```

**⚠️ 왜 문제인가?**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">가독성 저하</div><div class="wda-fcard-dsc">코드가 불필요하게 길어지고 구조를 한눈에 파악하기 어렵습니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">실수 위험</div><div class="wda-fcard-dsc">Spread 연산자(<code>...</code>)를 하나라도 빠뜨리면 해당 레벨의 기존 데이터가 유실되는 심각한 버그가 발생합니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">유지보수 어려움</div><div class="wda-fcard-dsc">데이터 구조가 깊어질수록 코드를 작성하고 수정하는 비용이 커집니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>이러한 현상을 'Spread Hell'이라고 부릅니다.<br>React는 겉껍데기(참조값)가 바뀌어야 변경을 감지하는데, 중첩된 객체는 가장 바깥 객체만 복사해서는 안쪽 깊은 곳의 변화를 알릴 수 없기 때문입니다.<br>그래서 양파 껍질 벗기듯 모든 단계를 다 복사해줘야 합니다.</p>
</div>

---

<h2>8. 해결책: Immer 라이브러리</h2>

**📌 직접 수정하는 것처럼 작성하지만, 결과는 불변성을 지킵니다**

Immer(이머) 라이브러리를 사용하면 일반 자바스크립트 객체를 수정하듯이 편하게 코드를 짤 수 있습니다.

**설치**

```bash
npm install immer use-immer
```

**🧪 사용 예시 (useImmer)**

```jsx
import { useImmer } from 'use-immer';

const [user, updateUser] = useImmer({
  name: '홍길동',
  address: {
    city: '서울',
    details: { zip: '12345' }
  }
});

// 정말 간단하죠?
updateUser(draft => {
  // 알아서 불변성 처리를 해주므로 직접 대입 가능
  draft.address.details.zip = '54321';
});
```

**💡 Immer의 장점**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">직접 수정하는 문법 사용 가능</div><div class="wda-fcard-dsc"><code>obj.a = 1</code> 처럼 직관적으로 작성합니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">Immer가 알아서 불변성 처리</div><div class="wda-fcard-dsc">내부적으로 새로운 복사본을 자동으로 생성해줍니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">코드가 훨씬 직관적</div><div class="wda-fcard-dsc">Spread 연산자(<code>...</code>)를 남발할 필요가 없어 코드가 깔끔해집니다.</div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>Immer는 <code>draft</code>(초안)라는 가상의 객체를 제공합니다.<br>개발자가 이 초안을 마음대로 수정하면, Immer가 수정된 내용을 감지해서 불변성이 지켜진 '새로운 객체'로 최종 변환해줍니다.<br>덕분에 우리는 불변성 신경 안 쓰고 편하게 코딩하면서도 React의 규칙을 지킬 수 있게 됩니다.</p>
  <p>정확히 말하면, Immer를 사용하면 개발자는 <code>draft</code>를 <strong>직접 수정하는 문법으로 작성</strong>할 수 있고, Immer가 내부적으로 <strong>불변성이 지켜진 새 객체를 만들어 줍니다</strong>.<br>즉, 불변성을 없애는 것이 아니라 <strong>불변성 처리를 자동화하는 도구</strong>입니다.</p>
</div>

---

<h2>9. 상태 끌어올리기 (Lifting State Up)</h2>

**📌 개념**

<div class="wda-callout wda-ci">
  <p><strong>여러 컴포넌트가 같은 데이터를 공유</strong></p>
</div>

**⚠️ 문제 상황**

형제 컴포넌트 A와 B가 같은 데이터를 사용해야 할 때, 각자 state를 가지면 동기화가 안 됩니다.

**💡 해결책: 상태 끌어올리기**

공통 부모 컴포넌트에 state를 두고, props로 내려주기.

**📝 예제 코드 : 온도 변환기**

```jsx
import { useState } from 'react';

function TemperatureCalculator() {
  // 1. 상태를 부모가 관리 (진실의 유일한 원천)
  const [celsius, setCelsius] = useState(0);

  // 2. 화씨는 섭씨 상태를 기반으로 실시간 계산 (파생 데이터)
  const fahrenheit = (celsius * 9/5) + 32;

  return (
    <div>
      {/* 3. 변경 함수는 입력 컴포넌트로 전달 */}
      <CelsiusInput value={celsius} onChange={setCelsius} />
      
      {/* 4. 계산된 값은 출력 컴포넌트로 전달 */}
      <FahrenheitDisplay value={fahrenheit} />
    </div>
  );
}

// 자식 1: 입력 담당
function CelsiusInput({ value, onChange }) {
  return (
    <input
      type="number"
      value={value}
      // 입력값이 바뀌면 부모에게 알림
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}

// 자식 2: 출력 담당
function FahrenheitDisplay({ value }) {
  return <p>화씨: {value.toFixed(1)}°F</p>;
}

export default TemperatureCalculator;
```

**⚙️ 핵심 동작 원리**

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">상태 공유 불가</div><div class="wda-sdsc"><code>CelsiusInput</code>과 <code>FahrenheitDisplay</code>는 형제 관계이므로 직접 데이터를 주고받을 수 없습니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">부모로 이동</div><div class="wda-sdsc">따라서 공통 부모인 <code>TemperatureCalculator</code>가 <code>celsius</code>라는 상태를 가집니다.</div></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">Top-Down 데이터 흐름</div><div class="wda-sdsc">부모는 <code>CelsiusInput</code>에게는 값을 변경할 수 있는 함수(<code>setCelsius</code>)를, <code>FahrenheitDisplay</code>에게는 계산된 결과값(<code>fahrenheit</code>)을 Props로 내려줍니다.</div></div></div>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>파생 상태 (Derived State)</strong></p>
  <p>위 코드에서 <code>fahrenheit</code>는 별도의 <code>useState</code>로 만들지 않았습니다.<br>섭씨(<code>celsius</code>)만 알면 수학 공식으로 바로 구할 수 있기 때문입니다.<br>이처럼 기존 State로 계산할 수 있는 값은 별도 State로 저장하지 않고 변수로 계산해서 쓰는 것이 동기화 버그를 막는 가장 좋은 방법입니다.</p>
  <p><strong>number input 값 처리</strong>: <code>type="number"</code> 입력값도 <code>e.target.value</code>로 가져오면 문자열입니다.<br><code>Number(e.target.value)</code>를 사용해 숫자로 변환할 수 있지만, 빈 문자열은 <code>Number('')</code> 결과가 <code>0</code>이 되므로 실제 서비스에서는 입력창을 지웠을 때(빈 값)를 어떻게 처리할지도 함께 고려해야 합니다.</p>
</div>

---

<h2>10. state 설계 원칙</h2>

**📝 관련 데이터는 그룹화**

여러 state가 항상 함께 변하면 하나의 객체로 묶기

**📝 중복 피하기**

같은 데이터를 여러 state에 두지 않기

**📝 계산 가능한 값은 state로 만들지 않기**

<code>fullName = firstName + lastName</code> 이면 <code>fullName</code>은 state 불필요

**📝 깊은 중첩 피하기**

업데이트가 복잡해지므로 평탄한 구조 권장

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><strong>State를 최소화하는 것이 버그를 줄이는 지름길입니다.</strong></p>
  <p>필요 이상으로 State를 많이 만들면, 데이터를 수정할 때마다 여러 군데를 동시에 고쳐야 하는 번거로움이 생기고, 실수가 발생할 확률이 높아집니다.<br>기존 State로 계산해서 알 수 있는 값(예: 장바구니 총합, 합격 여부 등)은 절대 State로 만들지 말고, <code>const</code> 변수에 담아 렌더링 시점에 계산하는 것이 좋습니다.</p>
</div>

---

<h2>11. ⁉️ FAQ</h2>

**🧠 Q1. 객체나 배열 형태의 state를 업데이트할 때 가장 중요한 원칙은?**

**정답: 불변성 (Immutability)**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p>기존 데이터를 직접 수정하지 않고, <strong>새로운 복사본을 만들어서 교체</strong>해야 합니다.<br>React는 객체의 내부 값이 아닌 메모리 주소(참조값)의 변화를 감지하여 화면을 다시 그리기 때문입니다.</p>
</div>

**🧠 Q2. 배열에 새로운 항목을 추가할 때 사용하면 안 되는 메서드는?**

**정답: push()**

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <p><code>push()</code>, <code>pop()</code>, <code>splice()</code> 등은 원본 배열을 직접 변경(Mutable)하는 메서드입니다.<br>이를 사용하면 React가 데이터 변화를 감지하지 못합니다.<br>대신 <code>concat()</code>이나 Spread 연산자(<code>...</code>)처럼 새로운 배열을 반환하는 방식을 사용해야 합니다.</p>
</div>

---

<h2>12. ✅ 핵심 요약</h2>

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>객체·배열 state는 <strong>절대 직접 수정하지 않고</strong>, 항상 새 복사본을 만들어 setter에 전달한다 (불변성).</li>
    <li>React는 값의 내용이 아니라 <strong>참조(메모리 주소)</strong>를 비교해서 리렌더링 여부를 판단한다.</li>
    <li>배열은 <strong>push·pop·splice·sort·reverse 금지</strong>, <strong>map·filter·concat·slice·스프레드(...)</strong>로 새 배열을 만든다.</li>
    <li>형제 컴포넌트가 같은 데이터를 공유해야 하면 <strong>공통 부모로 state를 끌어올린다</strong> (Lifting State Up).</li>
    <li>기존 state·props로 계산 가능한 값은 별도 state로 만들지 않고 <strong>파생 변수</strong>로 처리한다.</li>
    <li>중첩 객체를 깊이 수정할 때는 <strong>Immer(useImmer)</strong>로 spread 지옥을 피할 수 있다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: user.age = 26 후 setUser(user)처럼 객체를 직접 수정해도 된다?</div>
    <div class="wda-mistake-right">정답: 참조값이 그대로라 React가 변경을 감지하지 못한다. <code>{ ...user, age: 26 }</code>처럼 <strong>새 객체</strong>를 만들어 전달해야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: push()로 배열에 추가해도 화면이 갱신된다?</div>
    <div class="wda-mistake-right">정답: push는 원본 배열을 직접 수정하는 메서드라 참조가 안 바뀐다. <code>[...prev, newItem]</code>이나 concat처럼 <strong>새 배열을 반환</strong>하는 방식을 써야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: spread는 순서 상관없이 써도 된다?</div>
    <div class="wda-mistake-right">정답: <code>name: newName</code> 뒤에 <code>...form</code>을 쓰면 기존 데이터가 수정 내용을 덮어써 버린다. <strong>...form을 먼저</strong> 깔고 그 위에 덮어써야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: Immer를 쓰면 불변성 규칙이 사라진다?</div>
    <div class="wda-mistake-right">정답: Immer는 불변성을 없애는 게 아니라, draft를 직접 수정하듯 작성해도 <strong>내부적으로 새 객체를 만들어주는 자동화 도구</strong>다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: fullName처럼 계산 가능한 값도 useState로 관리해야 안전하다?</div>
    <div class="wda-mistake-right">정답: 계산 가능한 값을 state로 만들면 동기화 버그가 생기기 쉽다. <strong>파생 변수(const)</strong>로 렌더링 시점에 계산하는 것이 안전하다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 불변성 원칙</div>
    <div class="wda-formula-block-body"><code>직접 수정 ❌ → 새 복사본 생성 ✅</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 배열 갱신</div>
    <div class="wda-formula-block-body"><code>map / filter / concat / [...arr]</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · state 설계</div>
    <div class="wda-formula-block-body"><code>계산 가능한 값은 state 금지</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">객체·배열 state를 업데이트할 때 가장 중요한 원칙은?</div>
    <div class="wda-flip-back">불변성(Immutability). 기존 데이터를 직접 수정하지 않고 새 복사본을 만들어 교체해야 한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">배열에 새 항목을 추가할 때 사용하면 안 되는 메서드는?</div>
    <div class="wda-flip-back">push(). pop, splice와 함께 원본을 직접 바꾸는 메서드라 React가 변화를 감지하지 못한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">형제 컴포넌트가 같은 데이터를 공유해야 할 때 쓰는 패턴은?</div>
    <div class="wda-flip-back">상태 끌어올리기(Lifting State Up) — 공통 부모에 state를 두고 props로 내려준다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">중첩 객체를 깊이 수정할 때 spread 지옥을 피하는 방법은?</div>
    <div class="wda-flip-back">Immer(useImmer) 라이브러리로 draft를 직접 수정하듯 작성하면 내부적으로 불변성을 지켜준다.</div>
  </div>
</div>
