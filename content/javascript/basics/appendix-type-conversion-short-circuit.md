---
title: "부록: 타입 변환과 단축 평가"
status: "completed"
description: "암묵적·명시적 타입 변환, Truthy/Falsy, 단축 평가와 옵셔널 체이닝(?.)·null 병합(??) 연산자를 정리하는 1장 보충 부록이다."
category: "JavaScript"
section: "Basics"
tags:
  - javascript
  - basics
  - type-conversion
---

<style>
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 16px;margin:.8rem 0 1.6rem;font-size:.83rem;line-height:1.75}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:160px}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
/* 핵심 요약 전용 복습 UI — JavaScript 1-2 기준과 동일. 색은 background/border/accent에만
   쓰고, 본문 텍스트는 카드 색과 무관하게 진회색(#2C2840)·strong은 #1F1B2E로 고정한다. */
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
.wda-deco{position:absolute;z-index:2;pointer-events:none}
@media (max-width:640px){
.wda-deco{width:34px !important}
}
</style>

<div class="wda-callout wda-ci">
  📎 <strong>부록(Appendix)</strong> — 이 문서는 정규 진도 번호(1-1~1-5)가 아니라, <strong>"1장 JavaScript 기본 문법"</strong>을 다시 복습할 수 있도록 보충하는 부록 문서입니다.
</div>

## 🎯 학습 목적

<div class="wda-goal">
  • 타입 변환이 왜 필요한지 이해한다.<br>
  • 암묵적 타입 변환과 명시적 타입 변환의 차이를 이해한다.<br>
  • 문자열, 숫자, 불리언 타입 변환 방식을 정리한다.<br>
  • Truthy / Falsy 개념을 이해한다.<br>
  • 논리 연산자를 사용한 단축 평가를 이해한다.<br>
  • 옵셔널 체이닝 연산자 <code>?.</code>를 이해한다.<br>
  • null 병합 연산자 <code>??</code>를 이해한다.<br>
  • <code>||</code>와 <code>??</code>의 차이를 구분한다.
</div>

---

## 📖 개념 설명

### 1. 타입 변환이란?

타입 변환은 **값의 타입이 바뀌는 것**입니다.

여기서 중요한 포인트가 하나 있습니다. 원시값 자체가 직접 바뀌는 게 아니라, **기존 값을 바탕으로 새로운 타입의 값이 새로 만들어지는 것**입니다. 원본은 그대로 두고 "번역본"을 하나 더 만드는 것과 비슷하다고 생각하면 쉽습니다.

```jsx
var x = 10;
var str = x.toString();
```

- `str`은 `"10"`이라는 **문자열**이 됩니다.
- 하지만 `x` 자체는 여전히 **number** 타입 그대로 유지됩니다.
- 즉, `x.toString()`은 `x`를 바꾼 게 아니라, `x`의 값을 바탕으로 새로운 문자열 값을 만들어서 돌려준 것입니다.

**📌 개념**

<div class="wda-callout wda-ci">
  타입 변환에는 두 가지 방식이 있습니다.<br>
  • <strong>암묵적 타입 변환</strong> — 개발자가 시키지 않아도 자바스크립트가 알아서 바꿔주는 것<br>
  • <strong>명시적 타입 변환</strong> — 개발자가 <code>String()</code>, <code>Number()</code>, <code>Boolean()</code> 같은 함수로 직접 바꾸는 것
</div>

### 2. 암묵적 타입 변환

암묵적 타입 변환은 개발자가 직접 변환 명령을 하지 않아도, 자바스크립트 엔진이 **문맥(context)에 맞게** 타입을 자동으로 변환해주는 것을 말합니다.  
문자열 연결 연산자, 산술 연산자, 비교 연산자, 조건식이라는 4가지 문맥에서 각각 다르게 동작합니다.

#### 2-1. 문자열 타입으로 변환

`+` 연산자는 피연산자 중 한쪽이라도 문자열이면 **문자열 연결 연산자**로 동작할 수 있습니다.

```jsx
1 + '2'; // "12"
```

`+` 뒤에 빈 문자열(`''`)을 붙이는 것도 자바스크립트에서 아주 흔하게 쓰이는 문자열 변환 트릭입니다.

```jsx
var x = 10;
var str = x + '';
console.log(typeof str, str); // string "10"
```

템플릿 리터럴 안에 표현식을 넣으면, 그 결과도 자동으로 문자열로 변환됩니다.

```jsx
`1 + 1 = ${1 + 1}`; // "1 + 1 = 2"
```

숫자, 불리언, `null`, `undefined`, 객체가 문자열로 암묵적 변환되는 예시는 다음과 같습니다.

```jsx
// 숫자 타입
0 + '';         // "0"
-0 + '';        // "0"
1 + '';         // "1"
-1 + '';        // "-1"
NaN + '';       // "NaN"
Infinity + '';  // "Infinity"
-Infinity + ''; // "-Infinity"

// 불리언 타입
true + '';  // "true"
false + ''; // "false"

// null / undefined
null + '';      // "null"
undefined + ''; // "undefined"

// 객체
({}) + '';          // "[object Object]"
[10, 20] + '';      // "10,20"
(function(){}) + ''; // "function(){}"
Array + '';         // "function Array() { [native code] }"
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  Symbol 타입은 문자열로 암묵적 변환하려고 하면 <strong>TypeError</strong>가 발생합니다.<br>
  Symbol은 의도적으로 문자열 변환을 막아두었기 때문에, 문자열로 쓰고 싶다면 <code>String(symbol)</code>처럼 명시적으로 변환해야 합니다.
</div>

#### 2-2. 숫자 타입으로 변환

`-`, `*`, `/` 연산자는 **숫자 계산 문맥**이기 때문에, 피연산자가 문자열이어도 숫자로 변환해서 계산을 시도합니다.

```jsx
1 - '1';   // 0
1 * '10';  // 10
1 / 'one'; // NaN
```

숫자로 바꿀 수 없는 문자열(`'one'`)은 계산이 불가능하므로 **NaN**이 됩니다.

비교 연산자도 마찬가지로 숫자 문맥에서 비교가 이루어집니다.

```jsx
'1' > 0; // true
```

단항 `+` 연산자를 값 앞에 붙이면 숫자로 변환을 시도합니다.

```jsx
+'';       // 0
+'0';      // 0
+'1';      // 1
+'string'; // NaN
+true;     // 1
+false;    // 0
+null;     // 0
+undefined; // NaN
+{};       // NaN
+[];       // 0
+[10, 20]; // NaN
```

#### 2-3. 불리언 타입으로 변환

`if`문 같은 **조건식**에서는 조건식의 결과가 boolean 타입이 아니어도, 자바스크립트 엔진이 값을 true 또는 false로 평가합니다.  
이때 기준이 되는 것이 **Truthy(참으로 취급되는 값)**와 **Falsy(거짓으로 취급되는 값)**입니다.

**📌 개념**

<div class="wda-callout wda-ci">
  <strong>Falsy 값 (반드시 암기!)</strong><br>
  • <code>false</code><br>
  • <code>undefined</code><br>
  • <code>null</code><br>
  • <code>0</code>, <code>-0</code><br>
  • <code>NaN</code><br>
  • 빈 문자열 <code>''</code><br><br>
  이 7가지를 제외한 <strong>그 외 대부분의 값은 Truthy</strong>로 평가됩니다. (빈 객체 <code>{}</code>, 빈 배열 <code>[]</code>도 Truthy입니다!)
</div>

```jsx
if ('') console.log('실행 안 됨');   // 빈 문자열은 Falsy → 실행되지 않음
if ('str') console.log('실행 됨');   // 비어있지 않은 문자열은 Truthy → 실행됨
if (0) console.log('실행 안 됨');    // 0은 Falsy → 실행되지 않음
if (null) console.log('실행 안 됨'); // null은 Falsy → 실행되지 않음
```

Truthy/Falsy를 직접 판별하는 함수를 만들어보면 다음과 같습니다.

```jsx
// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다
function isFalsy(v) {
  return !v;
}

// 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다
function isTruthy(v) {
  return !!v;
}

isFalsy('');    // true
isTruthy('str'); // true
```

### 3. 명시적 타입 변환

명시적 타입 변환은 개발자가 **의도적으로** 타입을 바꾸는 것입니다. `String()`, `Number()`, `Boolean()`을 중심으로 정리합니다.

#### 3-1. 문자열 타입으로 변환

```jsx
// 1. String 생성자 함수를 new 없이 호출
String(1);    // "1"
String(true); // "true"

// 2. Object.prototype.toString 메서드 사용
(1).toString();    // "1"
(true).toString();  // "true"

// 3. 문자열 연결 연산자를 이용하는 방법 (암묵적 변환을 이용)
1 + '';    // "1"
true + ''; // "true"
```

#### 3-2. 숫자 타입으로 변환

```jsx
// 1. Number 생성자 함수를 new 없이 호출
Number('0');  // 0
Number(true); // 1

// 2. parseInt, parseFloat 함수 사용 (문자열만 변환 가능)
parseInt('0');      // 0
parseFloat('10.53'); // 10.53

// 3. 단항 산술 연산자를 이용하는 방법
+'0'; // 0

// 4. 산술 연산자를 이용하는 방법
'0' * 1; // 0
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <code>parseInt</code>, <code>parseFloat</code>는 <strong>문자열만</strong> 숫자로 변환할 수 있습니다. 숫자나 다른 타입에는 사용할 이유가 없습니다.
</div>

#### 3-3. 불리언 타입으로 변환

```jsx
// 1. Boolean 생성자 함수를 new 없이 호출
Boolean('x');      // true
Boolean('');       // false
Boolean('false');  // true
Boolean(0);        // false
Boolean(1);        // true
Boolean(null);     // false
Boolean(undefined); // false
Boolean({});       // true
Boolean([]);       // true

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
!!'x'; // true
!!'';  // false
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <code>Boolean('false')</code>가 <code>true</code>가 되는 게 처음에는 이상하게 느껴질 수 있습니다.<br>
  하지만 `'false'`는 <strong>"false"라는 글자가 들어있는 문자열</strong>일 뿐, 빈 문자열이 아닙니다.<br>
  Falsy 값 목록에는 "빈 문자열(<code>''</code>)"만 있고 "false라는 글자가 들어있는 문자열"은 없기 때문에, 내용과 상관없이 <strong>비어있지 않은 문자열은 전부 Truthy</strong>입니다.<br>
  같은 이유로 <code>Boolean({})</code>, <code>Boolean([])</code>도 내용이 비어있어 보이지만 "객체"라는 존재 자체가 있으므로 Truthy가 됩니다.
</div>

### 4. 단축 평가

단축 평가는 논리 연산자(`&&`, `||`)가 **결과를 이미 확신할 수 있는 순간, 나머지 평가를 멈추는 방식**입니다.

**📌 개념**

<div class="wda-callout wda-ci">
  겨울 이불 속에서 이미 답을 찾았으면 굳이 이불 밖으로 나가서 더 찾아보지 않는 것과 같습니다.<br>
  논리 연산자는 <strong>항상 true/false만 반환하는 게 아니라, 판단에 사용된 값(피연산자) 자체를 그대로 반환</strong>할 수 있습니다.
</div>

```jsx
'Cat' && 'Dog'; // "Dog"
'Cat' || 'Dog'; // "Cat"
```

- `'Cat' && 'Dog'`는 앞의 `'Cat'`이 이미 Truthy이므로, `&&`는 뒤의 값까지 마저 확인한 뒤 **마지막 값인 `'Dog'`**를 반환합니다.
- `'Cat' || 'Dog'`는 앞의 `'Cat'`이 이미 Truthy이므로, 그 순간 결과가 확정되어 뒤는 보지도 않고 **`'Cat'`**을 그대로 반환합니다.

### 5. 논리 연산자를 사용한 단축 평가

**📌 개념**

<div class="wda-callout wda-ci">
  • <code>&&</code> — 앞 값이 <strong>Truthy</strong>이면 뒤 값을 반환하고, 앞 값이 <strong>Falsy</strong>이면 앞 값을 반환합니다.<br>
  • <code>||</code> — 앞 값이 <strong>Truthy</strong>이면 앞 값을 반환하고, 앞 값이 <strong>Falsy</strong>이면 뒤 값을 반환합니다.
</div>

```jsx
// || (OR)
'Cat' || 'Dog';  // "Cat"
false || 'Dog';  // "Dog"
'Cat' || false;  // "Cat"

// && (AND)
'Cat' && 'Dog';  // "Dog"
false && 'Dog';  // false
'Cat' && false;  // false
```

#### 5-1. if문 대체

간단한 조건 처리라면 단축 평가로도 `if`문을 대신할 수 있습니다.

```jsx
var done = true;

// 조건문 대체 (단축 평가)
done && console.log('완료'); // "완료"
done || console.log('미완료'); // 아무것도 출력 안 됨 (done이 Truthy이므로)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  단축 평가로 조건 처리를 아주 짧게 줄일 수 있지만, 코드가 익숙하지 않은 초보자에게는 오히려 <strong>일반 <code>if</code>문이 더 읽기 쉬울 수 있습니다.</strong><br>
  팀 컨벤션이나 코드의 복잡도에 따라 편한 방식을 선택하면 됩니다.
</div>

#### 5-2. 기본값 설정

함수 매개변수의 기본값을 처리할 때도 단축 평가가 자주 쓰입니다.

```jsx
function getStringLength(str) {
  str = str || '';
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2
```

ES6에서는 아래처럼 **기본 매개변수(Default Parameter)** 문법으로 같은 동작을 더 간결하게 표현할 수 있습니다.

```jsx
function getStringLength(str = '') {
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2
```

### 6. 옵셔널 체이닝 연산자 ?.

옵셔널 체이닝 연산자 `?.`는 객체가 `null` 또는 `undefined`일 수도 있는 상황에서, **에러 없이 안전하게** 프로퍼티에 접근할 수 있게 해주는 문법입니다.

**📌 개념**

<div class="wda-callout wda-ci">
  문을 두드려보고, 안에 아무도 없으면 화내지 않고 그냥 조용히 돌아오는 것과 같습니다.<br>
  <code>elem</code>이 있으면 <code>value</code>를 꺼내오고, <code>elem</code>이 없으면 에러 대신 그냥 <code>undefined</code>를 돌려줍니다.
</div>

```jsx
var elem = null;

// elem.value -> elem이 null이면 TypeError: Cannot read properties of null
// elem?.value -> elem이 null 또는 undefined이면 에러 대신 undefined 반환
elem?.value; // undefined
```

기존에는 `&&` 연산자로 방어 코드를 짰습니다. 하지만 `&&`는 **Falsy 값**까지도 걸러버린다는 차이가 있습니다.

```jsx
var str = '';

// && 방식: str이 빈 문자열(Falsy)이라서 length까지 가지 못하고 ''를 반환
str && str.length; // ''

// ?. 방식: str이 null/undefined가 아니라면 그대로 length에 접근 -> 0
str?.length; // 0
```

`''`는 `null`도 `undefined`도 아니지만 **Falsy 값**이기 때문에, `&&`를 쓰면 `str.length`까지 도달하지 못하고 `''`가 그대로 반환됩니다.  
반면 `?.`는 오직 `null`/`undefined`인지만 확인하므로, 빈 문자열이어도 정상적으로 `str.length`인 `0`을 반환합니다.

### 7. null 병합 연산자 ??

null 병합 연산자 `??`는 왼쪽 값이 **`null` 또는 `undefined`일 때만** 오른쪽의 기본값을 반환하는 연산자입니다.

**📌 개념**

<div class="wda-callout wda-ci">
  "진짜 비어있을 때만" 켜지는 자동 조명이라고 생각하면 됩니다. 0이나 빈 문자열처럼 "값은 있지만 약한 값"이 들어와도 조명은 켜지지 않고, 오직 <code>null</code>·<code>undefined</code>일 때만 기본값이 켜집니다.
</div>

```jsx
var foo = null ?? 'default string';
console.log(foo); // "default string"
```

`||`와 `??`는 얼핏 비슷해 보이지만, **어떤 값을 "비어있다"고 판단하는 기준**이 다릅니다.

```jsx
// || : 빈 문자열도 Falsy이므로 기본값으로 대체됨
'' || 'default string'; // "default string"

// ?? : 빈 문자열은 null도 undefined도 아니므로 그대로 유지됨
'' ?? 'default string'; // ""
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <code>0</code>이나 <code>''</code>처럼 "값은 있지만 Falsy인 값"도 **유효한 값으로 인정**해야 하는 상황이라면 `||`보다 `??`가 훨씬 더 적합합니다.<br>
  예를 들어 사용자가 수량을 `0`으로 입력했는데 `||`를 쓰면 기본값으로 덮어써버리는 버그가 생길 수 있지만, `??`를 쓰면 `0`이라는 값을 그대로 존중해줍니다.
</div>

---

## ⚙️ 동작 원리

자바스크립트는 연산자나 조건식의 **문맥(context)**에 따라 값을 자동으로 변환할 수 있습니다.

- 문자열 연결 문맥에서는 **문자열 변환**이 일어납니다.
- 산술 계산 문맥에서는 **숫자 변환**이 일어납니다.
- 조건식 문맥에서는 **불리언 변환**이 일어납니다.

논리 연산자와 두 신규 연산자(`?.`, `??`)는 각각 다음과 같은 흐름으로 동작합니다.

- 논리 연산자는 **왼쪽에서 오른쪽으로** 평가합니다.
- `&&`는 **Falsy**를 만나면 그 자리에서 멈추고 그 값을 반환합니다.
- `||`는 **Truthy**를 만나면 그 자리에서 멈추고 그 값을 반환합니다.
- `?.`는 `null` 또는 `undefined`를 만나면 에러 대신 `undefined`를 반환합니다.
- `??`는 `null` 또는 `undefined`일 때만 기본값을 사용합니다.

---

## 💻 예제 코드

앞에서 다룬 예제들을 주제별로 다시 모아 정리했습니다. 콘솔에 직접 입력해보면서 복습해보세요.

**타입 변환의 기본 원리**

```jsx
var x = 10;
var str = x.toString();
console.log(typeof x, x);     // number 10 (원본은 그대로!)
console.log(typeof str, str); // string "10"
```

**암묵적 변환 — 문자열 문맥**

```jsx
var str = x + '';
'10' + 2;                    // "102"
1 + '2';                     // "12"
`1 + 1 = ${1 + 1}`;           // "1 + 1 = 2"
```

**암묵적 변환 — 숫자 문맥**

```jsx
5 * '10';   // 50
1 - '1';    // 0
1 * '10';   // 10
1 / 'one';  // NaN
'1' > 0;    // true
+'';        // 0
+'0';       // 0
+'1';       // 1
+'string';  // NaN
```

**암묵적 변환 — 불리언 문맥 (Truthy / Falsy)**

```jsx
if ('') console.log('실행 안 됨');
if ('str') console.log('실행 됨');
if (0) console.log('실행 안 됨');
if (null) console.log('실행 안 됨');

!0; // true (0은 Falsy이므로 부정하면 true)

function isFalsy(v) { return !v; }
function isTruthy(v) { return !!v; }
```

**명시적 변환**

```jsx
// 문자열로
String(1);
(1).toString();
1 + '';

// 숫자로
Number('0');
parseInt('0');
parseFloat('10.53');
+'0';
'0' * 1;

// 불리언으로
Boolean('false'); // true
Boolean({});       // true
Boolean([]);       // true
!!'x';
```

**단축 평가**

```jsx
'Cat' && 'Dog'; // "Dog"
'Cat' || 'Dog'; // "Cat"

var done = true;
done && '완료';   // "완료"
done || '미완료'; // true (done 자체 반환)
```

**옵셔널 체이닝 / null 병합**

```jsx
var elem = null;
elem && elem.value; // null
elem?.value;         // undefined

var str = '';
str && str.length; // ""
str?.length;         // 0

null ?? 'default string';      // "default string"
'' || 'default string';        // "default string"
'' ?? 'default string';        // ""
```

---

## ⚠️ 주의사항

<div class="wda-callout wda-cw">
  • 암묵적 타입 변환은 코드를 짧게 만들 수 있지만, 초보자에게는 결과를 예측하기 어렵게 만들 수 있습니다.<br>
  • <code>==</code>는 암묵적 타입 변환을 일으킬 수 있으므로, 실무에서는 <code>===</code> 사용을 권장합니다.<br>
  • 문자열 <code>"false"</code>는 <code>false</code>가 아니라 <strong>Truthy</strong> 값입니다.<br>
  • 빈 문자열 <code>''</code>, <code>0</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>은 <strong>Falsy</strong> 값입니다.<br>
  • 객체 <code>{}</code>와 배열 <code>[]</code>은 <strong>Truthy</strong> 값입니다.<br>
  • <code>||</code>는 Falsy 값을 모두 기본값으로 바꿔버릴 수 있습니다.<br>
  • 0이나 빈 문자열도 유효한 값이라면 <code>||</code>보다 <code>??</code>를 사용하는 것이 적절합니다.<br>
  • <code>?.</code>는 <code>null</code> 또는 <code>undefined</code>에만 안전하게 동작합니다.<br>
  • 단축 평가는 편리하지만, 조건이 복잡하면 <code>if</code>문으로 쓰는 것이 더 읽기 좋습니다.
</div>

---

## 🔗 참고 자료

- 모던 자바스크립트 Deep Dive 9장 타입 변환과 단축 평가
- JavaScript MDN: Type conversion
- JavaScript MDN: Optional chaining
- JavaScript MDN: Nullish coalescing operator

---

## ✅ 핵심 정리

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>타입 변환은 <strong>값의 타입이 바뀌는 것</strong>이다 — 암묵적 타입 변환은 자바스크립트가 자동으로, 명시적 타입 변환은 개발자가 직접 타입을 바꾸는 것이다.</li>
    <li>문자열 연결에서는 <strong>문자열 변환</strong>, 산술 연산에서는 <strong>숫자 변환</strong>, 조건식에서는 <strong>불리언 변환</strong>이 문맥에 따라 일어난다.</li>
    <li>Falsy 값은 <strong>false, undefined, null, 0, -0, NaN, ''</strong> 7가지이고, 그 외 대부분의 값은 Truthy이다.</li>
    <li>&&와 ||는 <strong>단축 평가</strong>를 수행하며, boolean이 아닌 <strong>피연산자 값 자체</strong>를 반환할 수 있다.</li>
    <li>?.는 null 또는 undefined일 때 에러 대신 undefined를 반환하고, ??는 null 또는 undefined일 때만 기본값을 사용한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: ||와 ??는 기본값 처리 기준이 같다?</div>
    <div class="wda-mistake-right">정답: <strong>||와 ??는 기본값 처리 기준이 다르다</strong> — ||는 모든 Falsy 값을 기본값으로 바꾸지만, ??는 null 또는 undefined일 때만 기본값을 사용한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 논리 연산자는 항상 true/false만 반환한다?</div>
    <div class="wda-mistake-right">정답: <strong>논리 연산자는 boolean이 아닌 피연산자 값 자체</strong>를 반환할 수 있다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 변환 문맥</div>
    <div class="wda-formula-block-body">
      <code>문자열 연결 → 문자열 변환</code><br>
      <code>산술 연산 → 숫자 변환</code><br>
      <code>조건식 → 불리언 변환</code>
    </div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · Truthy / Falsy</div>
    <div class="wda-formula-block-body">
      <code>Falsy = false, undefined, null, 0, -0, NaN, ''</code><br>
      <code>그 외 전부 Truthy</code>
    </div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · ?. / ??</div>
    <div class="wda-formula-block-body">
      <code>?. → null/undefined면 undefined 반환</code><br>
      <code>?? → null/undefined일 때만 기본값 사용</code>
    </div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">타입 변환의 두 종류는?</div>
    <div class="wda-flip-back">암묵적 타입 변환(자바스크립트가 자동으로)과 명시적 타입 변환(개발자가 직접)이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">Falsy 값 7가지는?</div>
    <div class="wda-flip-back">false, undefined, null, 0, -0, NaN, '' — 그 외 대부분은 Truthy다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">&&/||의 단축 평가가 반환하는 것은?</div>
    <div class="wda-flip-back">true/false가 아니라 판단에 사용된 피연산자 값 자체를 반환한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">?.는 언제 undefined를 반환하나?</div>
    <div class="wda-flip-back">접근 대상이 null 또는 undefined일 때 에러 대신 undefined를 반환한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">??가 ||와 다른 점은?</div>
    <div class="wda-flip-back">??는 null/undefined일 때만 기본값을 사용해 0이나 빈 문자열 같은 값을 그대로 보존한다.</div>
  </div>
</div>
