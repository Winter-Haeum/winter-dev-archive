# 01. Information Architecture

## 프로젝트 개요

**Winter Dev Archive**는 프론트엔드와 AI 바이브 코딩 학습 내용을 두고두고 참고하는 사이트다.
기술 블로그(날짜 기반)가 아닌 참고서(주제 기반)로 설계한다.

- **목적**: 학습한 내용을 주제별로 정리하고 빠르게 다시 찾아볼 수 있도록 한다
- **대상**: 본인(Winter) 및 같은 학습 과정을 밟는 사람
- **핵심 가치**: 검색 가능성, 일관된 구조, 빠른 탐색

---

## IA 전체 구조

```
🏠 Home

📚 Frontend Fundamentals
 ├ HTML
 ├ CSS
 ├ Layout
 └ DevTools

💛 JavaScript
 ├ Basics
 ├ Functions
 ├ Arrays & Objects
 ├ DOM
 ├ ES6+
 ├ Async
 ├ Browser APIs
 ├ jQuery
 └ Regular Expression

🔷 TypeScript
 ├ Basics
 └ React + TypeScript

⚛ React
 ├ Basics
 ├ Core
 ├ Hooks
 ├ State Management
 └ Routing

🛠 Development Tools
 ├ Git
 ├ GitHub
 ├ Webpack
 └ Vite

🌐 Web & Network
 ├ HTTP
 ├ Fetch
 ├ CORS
 ├ API
 └ SaaS

🔥 Firebase
 ├ Firebase 기본
 ├ Firebase 주요 서비스
 ├ Firebase 배포
 └ 부록

🎨 CSS Framework
 ├ Bootstrap
 └ Tailwind

🧪 Testing
 └ TDD

🏆 Coding Test

🤖 AI & Vibe Coding
 ├ Setup
 ├ Lesson 1
 ├ Lesson 2
 ├ Lesson 3
 └ Lesson 4

🔍 Search
```

---

## 섹션별 정의

### 🏠 Home
전체 목차를 카드 형태로 보여주는 대시보드 페이지.
각 섹션으로 진입하는 출발점이다.

---

### 📚 Frontend Fundamentals
웹 페이지를 만드는 데 필요한 기초 기술. JavaScript 이전 단계.

| 섹션 | 포함 내용 |
|---|---|
| HTML | 문서 구조, 시맨틱 마크업, 태그 속성 |
| CSS | 선택자, 박스모델, Flexbox, Grid, Animation, 반응형 |
| Layout | 실전 레이아웃 분석, 블록 구조 사고법 |
| DevTools | 브라우저 개발자 도구 활용, 반응형 미리보기 |

---

### 💛 JavaScript
브라우저와 Node.js 환경에서 동작하는 프로그래밍 언어. 가장 많은 문서가 있는 섹션.

| 섹션 | 포함 내용 |
|---|---|
| Basics | 실행환경, 변수/스코프, 데이터 타입, 조건문/반복문 |
| Functions | 함수 선언, 화살표 함수, 스코프 체인, 클로저, this |
| Arrays & Objects | 배열 메서드, 객체 구조, call/apply/bind |
| DOM | DOM 개념, 요소 생성/조작, 이벤트 처리 |
| ES6+ | 구조분해, 스프레드, 모듈, 최신 문법 |
| Async | 비동기 개념, Promise, async/await |
| Browser APIs | localStorage, Date, JSON |
| jQuery | jQuery 역할, 핵심 기능 및 기본 효과 |
| Regular Expression | 정규표현식 문법과 활용 |

---

### 🔷 TypeScript
JavaScript에 정적 타입을 추가한 언어. JavaScript 섹션과 React 섹션 사이의 연결 고리.

| 섹션 | 포함 내용 |
|---|---|
| Basics | 타입 기초, 타입 별칭, 인터페이스, 타입 단언 |
| React + TypeScript | Props/State 타입, 이벤트 핸들러 타입, 제네릭, 커스텀 훅 타입 |

---

### ⚛ React
UI를 만드는 JavaScript 라이브러리.

| 섹션 | 포함 내용 |
|---|---|
| Basics | Node.js/npm, 가상 DOM, JSX, 컴포넌트, props, state |
| Core | 이벤트 처리, 폼 입력, 조건부 렌더링, 리스트 렌더링 |
| Hooks | useState, useEffect, useRef, useContext, useReducer |
| State Management | Context API, 전역 상태 라이브러리 (Zustand 등) |
| Routing | SPA 개념, React Router |

---

### 🛠 Development Tools
개발 환경을 구성하고 협업하는 데 필요한 도구들.

| 섹션 | 포함 내용 |
|---|---|
| Git | Git 개념, CLI 명령어, gitignore, branch |
| GitHub | 계정 연결, commit/push/pull, 브랜치 전략, 협업 |
| Webpack | 번들러 개념, 설정 방법 |
| Vite | 빌드 도구, 프로젝트 세팅, 배포 |

---

### 🌐 Web & Network
웹이 동작하는 방식과 서버-클라이언트 통신 개념.

| 섹션 | 포함 내용 |
|---|---|
| HTTP | HTTP 통신 기초, 요청/응답 구조 |
| Fetch | Fetch API, JSON 다루기 |
| CORS | CORS 개념과 해결 방법 |
| API | API 개념과 활용 방식 |
| SaaS | 웹 서비스 종류, 프론트엔드와 백엔드 구분, API의 세계 |

---

### 🔥 Firebase
Google이 제공하는 BaaS 플랫폼. 독립 카테고리로 운영한다(2026-08 개편 — 실제 문서 없는 Database & Backend > Supabase 빈 목차 항목을 제거하면서, Firebase를 상위 카테고리에서 분리해 독립 카테고리로 승격했다).

| 섹션 | 포함 내용 |
|---|---|
| Firebase 기본 | 서버리스 아키텍처, 서비스 둘러보기 |
| Firebase 주요 서비스 | Firestore, Authentication, Storage, Hosting |
| Firebase 배포 | 배포 개념, Firebase Hosting 배포, 다양한 배포 서비스 비교 |
| 부록 | React Portal, Zustand, API 연동(fetch & axios) |

> Supabase는 현재 콘텐츠가 없어 카테고리로 노출하지 않는다. 향후 실제 문서가 작성되면 별도 카테고리로 추가한다.

---

### 🎨 CSS Framework
CSS를 빠르게 작성할 수 있도록 도와주는 프레임워크.

| 섹션 | 포함 내용 |
|---|---|
| Bootstrap | Bootstrap 개요, 컴포넌트 기반 스타일링 |
| Tailwind | Tailwind CSS, Utility-first 방식 |

---

### 🧪 Testing
코드의 동작을 검증하는 방법.

| 섹션 | 포함 내용 |
|---|---|
| TDD | TDD 개념, Jest 사용법, 컴포넌트 테스트 |

---

### 🏆 Coding Test
알고리즘 문제 풀이 방법과 연습.

| 섹션 | 포함 내용 |
|---|---|
| (최상위) | 코딩테스트 개요, 플랫폼 소개, 문제 풀이 전략 |
| | 배열 메서드, 문자열 메서드, Math 객체 |
| | 프로그래머스 Level 0–1 풀이 기록 |

---

### 🤖 AI & Vibe Coding
Claude Code와 AI를 활용한 실전 프로젝트 제작 커리큘럼.

| 섹션 | 포함 내용 |
|---|---|
| Setup | 개발환경 구축, 통합 세팅, GitHub 백업, Claude Code 사용량 관리 |
| Lesson 1 | 웹/UI-UX 기본, UI 요소 실습, Flexbox, 컬러 팔레트, 포트폴리오 기초 |
| Lesson 2 | Supabase MCP, DB 개념, 회원가입/게시글/상세 페이지, DB 연동 |
| Lesson 3 | 웹/앱 차이, 모바일 UI 기획, SNS DB 설계, 미니 SNS 구현 |
| Lesson 4 | 포트폴리오 레퍼런스, About Me, Hero 섹션, 완성 및 배포, 도메인 연결 |

---

## IA 설계 원칙

1. **주제 기반** — 날짜나 작성 순서가 아닌 내용으로 분류한다
2. **2단계 깊이 유지** — 카테고리 > 섹션으로 탐색이 단순해야 한다
3. **섹션 간 중복 최소화** — TypeScript는 Dev Tools가 아닌 독립 섹션, SaaS는 Web & Network에 위치
4. **AI & Vibe Coding은 독립 커리큘럼** — 단순 목록이 아닌 레슨 단위 구조를 유지한다
