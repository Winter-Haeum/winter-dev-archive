---
title: "3-1 문자열 메서드"
status: "completed"
description: "indexOf/includes, slice/substring, trim, split/join, replace 등 코딩테스트 필수 문자열 메서드를 익힙니다."
category: "Coding Test"
section: "Coding Test"
tags:
  - coding-test
  - string
  - javascript
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
.wda-cy{background:rgba(234,179,8,.06);border-color:#eab308}
.wda-cy .wda-clabel{color:#ca8a04}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 16px;margin:.8rem 0 1.6rem;font-size:.83rem;line-height:1.75}
.wda-goal-label{font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#22c55e;display:block;margin-bottom:10px}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-fcard-list{list-style:none;padding:0;margin:.4rem 0 0;font-size:.71rem;line-height:1.6;opacity:.75}
.wda-fcard-list li::before{content:"· "}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(245,158,11,.15);color:#f59e0b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-sdsc ul{margin:.3rem 0 0;padding-left:1.1rem}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px}
.wda-compare-ttl{font-size:.84rem;font-weight:700;margin-bottom:8px}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:4px}
.wda-legacy{border-color:rgba(239,68,68,.22);background:rgba(239,68,68,.02)}
.wda-modern{border-color:rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.79rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:200px}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
</style>

## 🎯 학습 목표

<div class="wda-goal">
🔍 <strong>검색 메서드</strong> — indexOf, includes로 문자를 찾습니다.<br>
✂️ <strong>추출 메서드</strong> — slice, substring으로 일부를 잘라냅니다.<br>
🔄 <strong>변환 메서드</strong> — 대소문자, 공백 제거 등 형태를 바꿉니다.<br>
🧩 <strong>분리/치환 메서드</strong> — split, replace로 나누고 바꿉니다.
</div>

---

## 1. 문자열 기본

문자열의 특징과 기본 속성

**1) 문자열의 특징**

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔒</div>
    <div class="wda-fcard-ttl">불변 (Immutable)</div>
    <div class="wda-fcard-dsc">한번 만들면 못 바꿔요</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔢</div>
    <div class="wda-fcard-ttl">인덱스</div>
    <div class="wda-fcard-dsc">0부터 시작 (배열과 동일)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📏</div>
    <div class="wda-fcard-ttl">길이</div>
    <div class="wda-fcard-dsc">.length로 확인</div>
  </div>
</div>

**2) 기본 문법**

```js
const str = "Hello";

str[0];     // 'H'
str[4];     // 'o'
str.length; // 5

// 불변성!
str[0] = 'X'; // 안 됨!
console.log(str); // 여전히 "Hello"
```

**3) 배열과의 차이**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">배열 (Array)</div>
    <strong>변경</strong>: <code>arr[0] = 'X'</code> ✅<br>
    <strong>메서드</strong>: push, pop 등
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">문자열 (String)</div>
    <strong>변경</strong>: <code>str[0] = 'X'</code> ❌<br>
    <strong>메서드</strong>: 대부분 새 문자열 반환
  </div>
</div>

**Tip**

<div class="wda-callout wda-cs">
  문자열을 바꾸려면 새로 만들어야 해요!
</div>

---

## 2. indexOf & includes

문자열에서 특정 텍스트를 찾는 방법들입니다.

**1) indexOf (위치 찾기)**

특정 문자가 **몇 번째 인덱스(Index)**에 있는지 숫자로 반환합니다.

- 반환값 : 찾은 문자의 시작 인덱스 (0부터 시작).
- 못 찾으면 : **-1**을 반환합니다.
- 특징 : 앞에서부터 처음 발견된 위치를 알려줍니다.

```js
const str = "Hello World";

str.indexOf("World"); // 6 (W가 시작되는 위치)
str.indexOf("o");     // 4 (첫 번째 'o'의 위치)
str.indexOf("X");     // -1 (없음)

// 시작 위치 지정 (고급)
str.indexOf("o", 5);  // 7 (인덱스 5 이후부터 검색하여 찾은 'o')
```

**2) lastIndexOf (뒤에서 찾기)**

문자열의 뒤에서부터 검색하여 위치를 찾습니다.

```js
const str = "Hello World";

str.lastIndexOf("o"); // 7 (뒤쪽에 있는 'o')
str.lastIndexOf("l"); // 9 (뒤쪽에 있는 'l')
```

**3) includes (있는지만 확인)**

위치가 어디인지는 중요하지 않고, 포함되어 있는지 여부만 알고 싶을 때 사용합니다.

- 반환값 : true (있음) 또는 false (없음).
- 주의 : 대소문자를 구분합니다! (World ≠ world)

```js
const str = "Hello World";

str.includes("World"); // true
str.includes("world"); // false (대소문자 구분!)
str.includes("X");     // false

// 조건문에서 활용하기 좋음
if (str.includes("Hello")) {
  console.log("인사말 포함!");
}
```

**4) 메서드 비교 및 요약**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">indexOf</div>
    <strong>반환값</strong>: 위치 숫자 / -1<br>
    <strong>용도</strong>: 문자의 정확한 위치가 필요할 때
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">includes</div>
    <strong>반환값</strong>: true / false<br>
    <strong>용도</strong>: 문자의 존재 여부만 확인할 때
  </div>
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  모든 메서드는 <strong>대소문자를 구분(Case Sensitive)</strong>합니다!
</div>

---

## 3. startsWith & endsWith

문자열의 시작 부분과 끝부분을 확인하는 메서드입니다.

**1) startsWith**

문자열이 특정 문자로 시작하는지 확인합니다.

- 반환값 : true 또는 false

```js
const str = "Hello World";

str.startsWith("Hello"); // true (시작함)
str.startsWith("World"); // false (중간에 있음)
str.startsWith("hello"); // false (대소문자 구분!)

// 시작 위치 지정 (고급)
// 인덱스 6번('W')부터 검사 시작
str.startsWith("World", 6); // true
```

**2) endsWith**

문자열이 특정 문자로 끝나는지 확인합니다.

```js
const str = "Hello World";

str.endsWith("World"); // true (끝남)
str.endsWith("Hello"); // false
str.endsWith("d");     // true

// 검사할 길이 지정 (고급)
// 앞에서부터 딱 5글자("Hello")만 남기고 검사
str.endsWith("Hello", 5); // true
```

**3) 코테 활용 (실무 예제)**

파일 확장자나 URL 주소 형식을 검사할 때 매우 유용합니다.

```js
// 1. 파일 확장자 체크
const file = "photo.jpg";

if (file.endsWith(".jpg")) {
  console.log("JPG 파일!");
}

// 2. URL 프로토콜 체크
const url = "https://example.com";

// 'https'로 시작하는지 확인
if (url.startsWith("https://")) {
  console.log("보안 사이트입니다.");
}
```

**4) 메서드 비교**

| 메서드 | 확인 위치 | 반환값 |
|---|---|---|
| startsWith | 시작 부분 | true / false |
| endsWith | 끝 부분 | true / false |
| includes | 전체(아무 데나) | true / false |

**Tip**

<div class="wda-callout wda-cs">
  파일 확장자(.png), URL 프로토콜(http://) 체크에 가장 많이 쓰여요!
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>길이 지정 파라미터</strong> — endsWith의 두 번째 숫자는 '인덱스'가 아니라 <strong>'길이(Length)'</strong>를 의미합니다.<br>
  str.endsWith("Hello", 5)는 "전체 문자열 중 앞에서 5글자만 잘라서 봤을 때, 그 끝이 Hello인가?"를 묻는 것입니다.
</div>

---

## 4. slice & substring

문자열의 일부분을 잘라내서 새로운 문자열로 만드는 방법입니다.

**1) slice (추천 ⭐)**

시작 인덱스부터 끝 인덱스 직전까지 잘라냅니다.  
음수를 사용하면 뒤에서부터 셀 수 있어 매우 편리합니다.

- 문법 : slice(시작, [끝]) (끝은 생략 가능)
- 특징 : 원본 문자열은 변하지 않습니다(불변성).

```js
const str = "Hello World";

// 1. 기본 자르기 (0번부터 5번 전까지)
str.slice(0, 5);   // "Hello"

// 2. 끝까지 자르기 (6번부터 끝까지)
str.slice(6);      // "World"

// 3. 음수 사용 (뒤에서부터)
str.slice(-5);     // "World" (뒤에서 5글자)
str.slice(-5, -1); // "Worl" (뒤에서 5번째부터 뒤에서 1번째 전까지)

// 원본은 그대로!
console.log(str);  // "Hello World"
```

**2) slice vs substring**

두 메서드는 양수 인덱스에서는 거의 똑같이 동작하지만, 음수 처리 방식이 다릅니다.

- slice : 음수를 넣으면 뒤에서부터 계산합니다. (직관적)
- substring : 음수를 넣으면 0으로 취급해버립니다. (비추천)

```js
const str = "Hello";

// 양수일 땐 동일
str.slice(1, 3);     // "el"
str.substring(1, 3); // "el"

// ⚠️ 음수 처리 차이!
str.slice(-3);       // "llo" (뒤에서 3글자 가져옴 ✅)
str.substring(-3);   // "Hello" (-3을 0으로 바꿔서 처음부터 다 가져옴 ❌)
```

**3) 메서드 비교 및 결론**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">slice</div>
    <strong>음수 처리</strong>: 뒤에서부터 계산<br>
    <strong>추천</strong>: ✅ 더 직관적
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">substring</div>
    <strong>음수 처리</strong>: 0으로 처리 (무시됨)<br>
    <strong>추천</strong>: 특수한 상황에만
  </div>
</div>

**결론**

<div class="wda-callout wda-cs">
  고민하지 말고 slice만 쓰세요! 음수 사용도 가능하고 배열(Array) 메서드와 사용법이 같아서 헷갈리지 않아요.
</div>

---

## 5. 대소문자 변환

영문 알파벳을 모두 대문자나 소문자로 바꾸는 메서드입니다 (toUpperCase, toLowerCase).

**1) 기본 사용법**

문자열의 모든 알파벳을 변환합니다.

- toUpperCase(): 모두 대문자로 변환
- toLowerCase(): 모두 소문자로 변환
- 특징: 원본 문자열은 변하지 않습니다.

```js
const str = "Hello World";

str.toUpperCase(); // "HELLO WORLD" (모두 대문자)
str.toLowerCase(); // "hello world" (모두 소문자)

// 원본은 그대로 유지됨!
console.log(str);  // "Hello World"
```

**2) 대소문자 무시 비교**

사용자 입력이 "HELLO"이든 "hello"이든 똑같이 처리해야 할 때 사용합니다.

```js
const input = "HELLO";
const answer = "hello";

// 그냥 비교하면 다름
input === answer; // false

// 둘 다 소문자로 통일해서 비교하면 같음!
// (보통 둘 다 소문자로 만드는 방법을 많이 씁니다)
input.toLowerCase() === answer.toLowerCase(); // true
```

**3) 코테 활용 패턴**

코딩 테스트나 실무에서 자주 쓰이는 패턴들입니다.

(1) 대소문자 무시하고 검색

```js
const str = "Hello World";

// 원본과 검색어 모두 소문자로 바꿔서 검색
str.toLowerCase().includes("hello"); 
// true (대소문자 신경 안 쓰고 찾기 가능)
```

(2) 첫 글자만 대문자로 (Capitalize)

```js
const word = "hello";

// 첫 글자('h')는 대문자로 + 나머지('ello')는 그대로 붙임
word[0].toUpperCase() + word.slice(1);
// "Hello"
```

(3) 대문자/소문자 판별

```js
const ch = 'A';

// 원래 문자와 대문자로 바꾼 문자가 같다면? -> 원래 대문자였다는 뜻
ch === ch.toUpperCase(); // true (대문자임)

// 원래 문자와 소문자로 바꾼 문자가 같다면? -> 원래 소문자였다는 뜻
ch === ch.toLowerCase(); // false (소문자 아님)
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>활용 팁</strong> — 검색 기능을 만들 때 사용자가 대소문자를 섞어 써도 검색되게 하려면, 데이터베이스의 값과 사용자의 입력값을 모두 toLowerCase()로 변환해서 비교하는 것이 정석입니다.
</div>

---

## 6. trim - 공백 제거

문자열의 양쪽 끝에 있는 불필요한 공백을 제거하는 메서드입니다.

**1) 기본 사용법**

공백을 제거하는 위치에 따라 세 가지 메서드가 있습니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">trim()</div>
    <div class="wda-fcard-dsc">양쪽 공백을 모두 제거 (가장 많이 씀!)</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">trimStart()</div>
    <div class="wda-fcard-dsc">앞쪽(왼쪽) 공백만 제거</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">trimEnd()</div>
    <div class="wda-fcard-dsc">뒤쪽(오른쪽) 공백만 제거</div>
  </div>
</div>

```js
const str = "  Hello World  "; // 앞뒤에 공백이 있음

str.trim();      // "Hello World" (양쪽 다 제거)
str.trimStart(); // "Hello World  " (앞만 제거)
str.trimEnd();   // "  Hello World" (뒤만 제거)

// 원본은 변하지 않음 (불변성)
console.log(str); // "  Hello World  "
```

**2) 시각화 (동작 비교)**

공백이 어디서 사라지는지 한눈에 비교해 보세요.

| 메서드 | 동작 방식 | 결과 모양 |
|---|---|---|
| Original | 원본 | `[ Hello World ]` |
| trim() | 양쪽 제거 | `[Hello World]` |
| trimStart() | 앞 공백 제거 | `[Hello World ]` |
| trimEnd() | 뒤 공백 제거 | `[ Hello World]` |

**3) 코테 활용 (실무 예제)**

사용자의 입력 실수를 방지하거나 데이터를 깔끔하게 만들 때 필수입니다.

(1) 입력값 정리 (회원가입 등)

```js
const input = " user@email.com ";
const email = input.trim(); 
// "user@email.com" (깔끔하게 정리됨)
```

(2) 빈 문자열 체크

```js
const input = "   "; // 공백만 있는 상태

// 공백을 다 지웠더니 남는 게 없다면? -> 빈 입력!
if (input.trim() === "") {
  console.log("빈 입력입니다!"); 
}
```

(3) 단어 분리 전 정리

```js
const str = " a b c ";

// 1. trim으로 양쪽 공백 제거 ("a b c")
// 2. 그 다음 공백 기준으로 자르기
str.trim().split(" "); 
// ["a", "b", "c"]
```

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>왜 필요한가요?</strong> — 모바일에서 타이핑하거나 복사/붙여넣기를 할 때 의도치 않게 공백이 들어가는 경우가 정말 많습니다.<br>
  검색창, 로그인, 회원가입 등 사용자 입력을 받는 모든 곳에서 trim()을 습관적으로 써주는 것이 좋습니다.
</div>

---

## 7. split - 문자열 쪼개기

문자열을 특정 구분자(Separator)를 기준으로 잘라서 **배열(Array)**로 만들어주는 메서드입니다.

**1) 기본 사용법**

괄호 안에 무엇을 기준으로 자를지 정해주면 됩니다.

- 반환값 : 잘라진 문자열들이 담긴 배열 ([])

```js
const str = "a,b,c,d";

// 1. 구분자로 자르기 (가장 기본)
str.split(","); // ["a", "b", "c", "d"]

// 2. 한 글자씩 다 자르기 (빈 문자열)
str.split("");  // ["a", ",", "b", ",", "c", ",", "d"]

// 3. 구분자 없음 (통째로 배열에 넣음)
str.split();    // ["a,b,c,d"]

// 4. 개수 제한 (앞에서 N개만 가져오기)
str.split(",", 2); // ["a", "b"]
```

**2) 시각화 (동작 원리)**

어떤 구분자를 쓰느냐에 따라 결과물이 완전히 달라집니다.

| 구분자 | 원본 | 결과 (배열) | 설명 |
|---|---|---|---|
| , (콤마) | "a,b,c,d" | ["a", "b", "c", "d"] | 콤마를 없애고 그 자리에서 자름 |
| "" (빈값) | "Hello" | ["H", "e", "l", "l", "o"] | 글자 하나하나 다 쪼갬 |

**3) 자주 쓰는 패턴**

실무나 코딩 테스트에서 데이터를 가공할 때 정말 많이 쓰이는 패턴들입니다.

(1) 글자 단위로 분리

```js
"Hello".split(""); 
// ["H", "e", "l", "l", "o"]
```

(2) 단어 단위로 분리

```js
"Hello World".split(" "); 
// ["Hello", "World"]
```

(3) 줄 단위로 분리

```js
"line1\nline2".split("\n"); 
// ["line1", "line2"]
```

**코테 필수 Tip**

<div class="wda-callout wda-cs">
  split으로 쪼개서 배열로 만든 뒤, 내용을 수정하고 다시 join으로 합치는 패턴은 코딩 테스트에 거의 매번 나옵니다!
</div>

---

## 8. join - 배열 합치기

배열(Array) 안에 있는 요소들을 특정 구분자로 연결해서 하나의 **문자열(String)**로 만드는 메서드입니다.

**1) 기본 사용법**

괄호 안에 "무엇으로 연결할지"를 넣어주면 됩니다.

- 반환값 : 합쳐진 문자열
- 주의 : 아무것도 안 넣으면 **쉼표(,)**가 자동으로 들어갑니다.

```js
const arr = ["a", "b", "c"];

// 1. 특정 문자로 연결
arr.join("-"); // "a-b-c"

// 2. 그냥 다 붙이기 (가장 많이 씀! ⭐)
arr.join("");  // "abc" (빈 문자열 사용)

// 3. 공백으로 연결
arr.join(" "); // "a b c"

// 4. 생략하면? (기본값은 쉼표)
arr.join();    // "a,b,c"
```

**2) split ↔ join (환상의 짝꿍)**

문자열을 배열로 바꿨다가(split), 다시 문자열로 돌려놓는(join) 패턴은 매우 강력합니다.

```js
const str = "Hello";

str.split("")   // ["H", "e", "l", "l", "o"] (배열로 쪼개고)
   .reverse()   // ["o", "l", "l", "e", "H"] (뒤집고)
   .join("");   // "olleh" (다시 문자열로 합침)
```

**3) 코테 필수 패턴**

코딩 테스트에서 문자열을 조작할 때 '공식'처럼 쓰이는 패턴들입니다.

(1) 문자열 뒤집기

문자열에는 reverse()가 없어서 배열로 변환해서 뒤집어야 합니다.

```js
const str = "Hello";
const reversed = str.split("").reverse().join("");
// "olleh"
```

(2) 특정 문자 제거

split으로 자르고 join으로 그냥 붙이면 해당 문자가 사라지는 효과가 납니다.

```js
// 하이픈(-)을 모두 제거하고 싶을 때
"010-1234-5678".split("-").join("");
// "01012345678"
```

(3) 구분자 변경 (치환)

특정 문자를 다른 문자로 바꿀 때도 씁니다. (replace보다 확실하게 모두 바꿈)

```js
// 쉼표(,)를 하이픈(-)으로 변경
"a,b,c".split(",").join("-");
// "a-b-c"
```

**공식**

<div class="wda-callout wda-cs">
  split(A).join(B) = A를 B로 바꾸기
</div>

---

## 9. replace - 문자 바꾸기

특정 문자를 다른 문자로 교체

**1) 기본 사용법**

```js
const str = "Hello World";

// 첫 번째만 바꿈!
str.replace("o", "0");
// "Hell0 World" (첫 번째 o만)

// 모두 바꾸려면 replaceAll
str.replaceAll("o", "0");
// "Hell0 W0rld"

// 또는 정규식 g 플래그
str.replace(/o/g, "0");
// "Hell0 W0rld"
```

**2) 코테 활용 패턴**

🔹모든 공백 제거

```js
"a b c".replaceAll(" ", "");
// "abc"
```

🔹특정 패턴 제거

```js
"Hello!!!".replaceAll("!", "");
// "Hello"
```

🔹숫자만 추출 (정규식)

```js
"a1b2c3".replace(/[^0-9]/g, "");
// "123"
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  replace()는 첫 번째만! 전체는 replaceAll()
</div>

---

## 10. repeat & padStart/padEnd

반복과 채우기

**1) repeat (반복)**

```js
"ab".repeat(3); // "ababab"
"*".repeat(5); // "*****"
"-".repeat(10); // "----------"

// 코테 활용: 구분선 만들기
console.log("=".repeat(20));
// ====================
```

**2) padStart/padEnd**

```js
// padStart: 앞에 채우기
"5".padStart(3, "0"); // "005"
"42".padStart(5, " "); // "   42"

// padEnd: 뒤에 채우기
"5".padEnd(3, "0"); // "500"
"Hi".padEnd(5, "."); // "Hi..."
```

**3) 코테 활용**

```js
// 별 피라미드
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
// *
// **
// ***
// ****
// *****
```

**4) `<>` 실전 예시**

```js
// 시간 포맷 (09:05:03)
const h = 9, m = 5, s = 3;
`${String(h).padStart(2, "0")}:` +
`${String(m).padStart(2, "0")}:` +
`${String(s).padStart(2, "0")}`;
// "09:05:03"
```

---

## 11. charAt & charCodeAt

문자와 코드 다루기

**1) charAt**

```js
const str = "Hello";

str.charAt(0);  // "H"
str.charAt(4);  // "o"
str.charAt(10); // "" (범위 초과시 빈문자열)

// str[0]과 거의 같음
str[0];  // "H"
str[10]; // undefined (차이점!)
```

**2) charCodeAt & fromCharCode**

```js
// 문자 -> 코드
"A".charCodeAt(0); // 65
"a".charCodeAt(0); // 97

// 코드 -> 문자
String.fromCharCode(65); // "A"
String.fromCharCode(97); // "a"
```

**3) charAt vs [ ]**

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">charAt</div>
    <strong>범위 초과</strong>: "" (빈 문자열)<br>
    <strong>추천</strong>: 안전함
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">[ ]</div>
    <strong>범위 초과</strong>: undefined<br>
    <strong>추천</strong>: 더 짧음
  </div>
</div>

**4) 💡 코테 활용**

```js
// 알파벳 순서 계산
"c".charCodeAt(0) - "a".charCodeAt(0); // 2 (a=0, b=1, c=2)

// 시저 암호 (3칸 이동)
String.fromCharCode(
  "A".charCodeAt(0) + 3
); // "D"
```

---

## ✅ 문자열 메서드 핵심 정리

<table class="wda-summary-table">
  <tr>
    <th>분류</th>
    <th>메서드</th>
    <th>주요 기능</th>
    <th>특징 및 주의사항</th>
  </tr>
  <tr>
    <td>기본</td>
    <td>length</td>
    <td>문자열 길이 확인</td>
    <td>속성(Property)이므로 () 없이 사용</td>
  </tr>
  <tr>
    <td>탐색</td>
    <td>indexOf / includes</td>
    <td>특정 문자 위치 찾기 / 포함 여부 확인</td>
    <td>위치 찾을 때 없으면 -1 반환</td>
  </tr>
  <tr>
    <td>추출</td>
    <td>slice / substring</td>
    <td>원하는 부분만 잘라내기</td>
    <td>slice는 음수 인덱스 사용 가능 (뒤에서부터)</td>
  </tr>
  <tr>
    <td>변환</td>
    <td>toUpperCase / toLowerCase</td>
    <td>대/소문자 바꾸기</td>
    <td>원본은 변하지 않음 (불변성)</td>
  </tr>
  <tr>
    <td>공백</td>
    <td>trim</td>
    <td>양끝 공백 제거</td>
    <td>중간 공백은 제거하지 않음</td>
  </tr>
  <tr>
    <td>분리/결합</td>
    <td>split / join</td>
    <td>문자열 ↔ 배열 변환</td>
    <td>코딩 테스트 빈출 1순위! 짝꿍으로 자주 쓰임</td>
  </tr>
  <tr>
    <td>교체</td>
    <td>replace / replaceAll</td>
    <td>특정 문자 바꾸기</td>
    <td>replace는 첫 번째 하나만 바꿈</td>
  </tr>
  <tr>
    <td>반복/채우기</td>
    <td>repeat / padStart</td>
    <td>문자열 반복 / 길이만큼 채우기</td>
    <td>별 찍기나 시간 포맷팅(09:05)에 유용</td>
  </tr>
  <tr>
    <td>코드값</td>
    <td>charCodeAt</td>
    <td>문자를 아스키 코드로 변환</td>
    <td>알파벳 순서 계산이나 암호 풀이에 사용</td>
  </tr>
</table>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>불변성(Immutability)</strong> — 자바스크립트의 모든 문자열 메서드는 원본을 직접 수정하지 않습니다.<br>
  항상 새로운 문자열을 만들어서 돌려주기 때문에, 바뀐 값을 쓰고 싶다면 반드시 const newStr = str.replace(...) 처럼 변수에 다시 담아주어야 합니다.<br>
  <strong>메서드 체이닝</strong> — str.trim().toLowerCase().split("") 처럼 여러 메서드를 마침표로 이어서 한 번에 처리할 수 있습니다.<br>
  코드가 간결해져서 실무에서 자주 쓰입니다.
</div>
