---
title: "Step 2 — VS Code 설정"
category: "ai-vibe-coding"
section: "setup"
tags: ["vscode", "prettier", "eslint", "설정"]
date: "2025-11-24"
status: "in-progress"
description: "Prettier와 ESLint 설정 파일을 구성하고 저장 시 자동 포맷을 적용한다."
---

## 개요

VS Code에서 코드 스타일을 자동으로 관리하기 위해 두 가지 도구를 설정한다.

| 도구 | 역할 |
|---|---|
| **Prettier** | 코드 포맷팅 (들여쓰기, 따옴표, 세미콜론) |
| **ESLint** | 코드 품질 검사 (문법 오류, 사용하지 않는 변수) |

> 💡 **Concept**: Prettier는 **어떻게 보이는지** (스타일)를 담당하고, ESLint는 **올바르게 쓰였는지** (품질)를 담당한다. 두 도구는 역할이 다르므로 함께 사용한다.

## Prettier 설정

프로젝트 루트에 `.prettierrc` 파일을 생성한다.

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 100
}
```

> 📌 **Remember**: `.prettierrc`는 프로젝트마다 다를 수 있다. 팀 협업 시에는 팀 전체가 동일한 `.prettierrc`를 공유해야 포맷이 일치한다.

## ESLint 설정

프로젝트 루트에 `eslint.config.js` 파일을 생성한다.

```js
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  js.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
```

> ⚠️ **Caution**: ESLint 설정 파일명이 `.eslintrc.js`가 아닌 `eslint.config.js`인 것에 주의하자. ESLint v9부터 새로운 Flat Config 형식을 사용한다.

## 저장 시 자동 포맷 확인

VS Code Settings에서 아래 설정이 적용되어 있는지 확인한다.

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

> ✅ **Best Practice**: `formatOnSave`를 활성화하면 파일 저장 시 자동으로 포맷이 정리된다. 커밋 전 포맷을 정리하는 번거로움을 없앨 수 있다.

> 🔗 **Official Docs**: [Prettier 공식 문서](https://prettier.io/docs/en/) · [ESLint 공식 문서](https://eslint.org/docs/latest/)
