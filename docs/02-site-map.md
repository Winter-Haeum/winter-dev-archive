# 02. Site Map

## URL 구조 개요

```
/                             ← Home (대시보드)
/search                       ← 전체 검색

/frontend/                    ← Frontend Fundamentals 목차
/frontend/html
/frontend/css
/frontend/layout
/frontend/devtools

/javascript/                  ← JavaScript 목차
/javascript/basics
/javascript/functions
/javascript/arrays-objects
/javascript/dom
/javascript/es6
/javascript/async
/javascript/browser-apis
/javascript/jquery
/javascript/regular-expression

/typescript/                  ← TypeScript 목차
/typescript/basics
/typescript/react-typescript

/react/                       ← React 목차
/react/basics
/react/core
/react/hooks
/react/state-management
/react/routing

/dev-tools/                   ← Development Tools 목차
/dev-tools/git
/dev-tools/github
/dev-tools/webpack
/dev-tools/vite

/web-network/                 ← Web & Network 목차
/web-network/http
/web-network/fetch
/web-network/cors
/web-network/api
/web-network/saas

/firebase/                    ← Firebase 목차 (독립 카테고리, 2026-08 개편 — Database & Backend > Supabase 빈 목차 제거하며 분리)

/css-framework/               ← CSS Framework 목차
/css-framework/bootstrap
/css-framework/tailwind

/testing/                     ← Testing 목차
/testing/tdd

/coding-test/                 ← Coding Test 목차

/ai-vibe-coding/              ← AI & Vibe Coding 목차
/ai-vibe-coding/setup
/ai-vibe-coding/lesson-1
/ai-vibe-coding/lesson-2
/ai-vibe-coding/lesson-3
/ai-vibe-coding/lesson-4
```

---

## 페이지 유형

### 1. Home `/`
전체 섹션을 카드 그리드로 보여주는 대시보드.
각 카드는 섹션 이름, 이모지, 하위 목차 수를 표시한다.

### 2. 섹션 목차 `/섹션/`
해당 섹션의 하위 문서 목록을 보여주는 인덱스 페이지.
`content/섹션/index.md`를 렌더링한다.

### 3. 문서 페이지 `/섹션/토픽`
MD 파일 한 개를 렌더링하는 콘텐츠 페이지.
좌측 사이드바에 섹션 내 문서 목록을 표시한다.

### 4. 검색 `/search`
프론트매터의 `title`, `tags`, `category` 기준으로 전체 문서를 검색한다.

---

## 파일-URL 대응 규칙

| 파일 경로 | URL |
|---|---|
| `content/frontend/html/index.md` | `/frontend/html` |
| `content/frontend/css/css-basics.md` | `/frontend/css/css-basics` |
| `content/javascript/basics/variables.md` | `/javascript/basics/variables` |
| `content/ai-vibe-coding/lesson-1/index.md` | `/ai-vibe-coding/lesson-1` |

- `index.md` → 섹션 목차 페이지 (`/섹션/토픽`)
- 일반 `.md` 파일 → 개별 문서 페이지 (`/섹션/토픽/파일명`)

---

## 네비게이션 구조

### 글로벌 네비게이션 (상단)
- 로고 (Home 링크)
- 검색 아이콘

### 사이드 네비게이션 (문서 페이지 좌측)
현재 섹션의 하위 문서 목록을 트리 형태로 표시.
현재 문서는 활성화(active) 표시.

```
📚 Frontend Fundamentals
  ├ HTML           ← 현재 위치 표시
  ├ CSS
  ├ Layout
  └ DevTools
```

### 이전 / 다음 (문서 페이지 하단)
같은 섹션 내에서 이전 문서, 다음 문서로 이동하는 링크.

---

## 라우팅 구현 방식

React Router v6 기준.

```
/                         → <HomePage />
/search                   → <SearchPage />
/:category                → <CategoryPage />       ← 섹션 목차
/:category/:section       → <SectionPage />        ← 하위 섹션 목차
/:category/:section/:doc  → <DocPage />            ← 개별 문서
```

MD 파일은 빌드 타임 또는 런타임에 `import.meta.glob`으로 불러와 파싱한다.

```js
// 예시: content 하위 모든 md 파일 수집
const modules = import.meta.glob('/content/**/*.md', { as: 'raw' });
```
