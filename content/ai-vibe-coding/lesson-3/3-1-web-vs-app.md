---
title: "3-1: 웹과 앱의 차이점"
category: "ai-vibe-coding"
section: "lesson-3"
description: "웹과 앱의 기본 개념부터 기술적 차이점, 실무 선택 기준, PWA, 미래 전망까지 체계적으로 학습합니다."
tags:
  - ai-vibe-coding
  - lesson-3
  - web
  - app
  - pwa
date: "2026-06-11"
status: "completed"
---

<style>
.wda-callout{border-radius:10px;padding:12px 15px;margin:.8rem 0 1.4rem;border-left:3px solid;font-size:.81rem;line-height:1.6}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 150px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.81rem;font-weight:700;margin-bottom:3px}
.wda-fcard-dsc{font-size:.78rem;opacity:.72;line-height:1.5}
.wda-done{border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:16px 20px;margin:.8rem 0 1.4rem;background:rgba(34,197,94,.04);text-align:center;font-size:.82rem;line-height:1.6}
.wda-done-ico{font-size:1.8rem;margin-bottom:6px}
.wda-done-ttl{font-size:1rem;font-weight:700;color:#22c55e;margin-bottom:4px}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(139,92,246,.12);color:#8b5cf6;font-size:.8rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.81rem;font-weight:700;margin-bottom:2px}
.wda-sdsc{font-size:.78rem;opacity:.7;line-height:1.5}
.wda-memo{background:rgba(245,158,11,.04);border:1px solid rgba(245,158,11,.2);border-radius:10px;padding:14px 16px;margin:.8rem 0 1.6rem}
.wda-memo-label{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#f59e0b;margin-bottom:8px;display:block}
.wda-memo-body{font-size:.81rem;line-height:1.6}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:13px 18px;margin:.8rem 0 1.6rem;font-size:.79rem;line-height:1.75}
.wda-goal-label{font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#22c55e;display:block;margin-bottom:10px}
table{width:100%;border-collapse:collapse;font-size:.78rem;margin:.8rem 0 1.6rem}
th{font-weight:600;padding:6px 10px;background:rgba(128,128,128,.07);border:1px solid rgba(128,128,128,.18);font-size:.72rem;letter-spacing:.02em;text-align:left}
td{padding:5px 10px;border:1px solid rgba(128,128,128,.14);vertical-align:top;line-height:1.5;font-size:.78rem}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
</style>

## 🎯 학습 목표

<div class="wda-goal" style="position:relative;padding-top:14px;padding-bottom:18px;padding-left:20px;padding-right:20px;">
  <img src="/images/decoration/마스킹 테이프 (3).webp" alt="" style="position:absolute;width:108px;top:-22px;right:28px;z-index:1;pointer-events:none;opacity:.84;transform:rotate(-8deg);">
  <span class="wda-goal-label">학습 목표</span>
  🧩 <strong>기본 개념 정립</strong> — 웹과 앱의 정확한 정의와 동작 원리의 차이를 이해한다<br>
  ⚖️ <strong>비교 분석</strong> — 설치 방식·성능·기기 기능 활용 등 핵심 차이점을 설명할 수 있다<br>
  💼 <strong>실무 판단력</strong> — 새로운 프로젝트를 시작할 때 웹/앱 중 어떤 것을 선택할지 근거를 들어 결정할 수 있다<br>
  🔭 <strong>미래 전망</strong> — PWA와 기술 발전 방향을 이해하여 변화하는 개발 환경에 대비한다
</div>

---

## 🌐 웹(Web)이란?

웹은 인터넷 브라우저를 통해 접근하는 서비스로, URL(주소)만 알면 설치 없이 바로 이용할 수 있습니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🔗</div><div class="wda-fcard-ttl">접근 방식</div><div class="wda-fcard-dsc">Chrome · Safari · Firefox 등 브라우저에서 URL 입력 즉시 이용 · 설치 불필요</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">💻</div><div class="wda-fcard-ttl">기술 스택</div><div class="wda-fcard-dsc">HTML · CSS · JavaScript<br>프레임워크: React · Vue · Angular<br>서버: Node.js · Python · Java</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🖥️</div><div class="wda-fcard-ttl">플랫폼 독립성</div><div class="wda-fcard-dsc">Windows · macOS · iOS · Android 모든 기기에서 동일 동작 · 반응형 디자인 적용</div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/별 아이콘 (8).webp" alt="" style="position:absolute;width:46px;top:-18px;left:10%;z-index:2;pointer-events:none;opacity:.64;transform:rotate(-12deg);">
  <img src="/images/decoration/하트 아이콘 (6).webp" alt="" style="position:absolute;width:26px;top:-10px;right:18%;z-index:2;pointer-events:none;opacity:.68;transform:rotate(14deg);">
</div>

---

## 📦 앱(App)이란?

<div class="wda-callout wda-ci" style="position:relative;padding-left:192px;padding-right:18px;padding-top:14px;padding-bottom:14px;">
  <img src="/images/character/오!그렇구나.webp" alt="" style="position:absolute;width:144px;top:-20px;left:8px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(8deg);">
  <span class="wda-clabel">앱이란?</span>
  앱은 모바일 기기나 데스크톱에 설치하여 사용하는 응용 프로그램으로, 해당 플랫폼에 최적화된 성능과 기능을 제공합니다.
</div>

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🍎</div><div class="wda-fcard-ttl">네이티브 앱</div><div class="wda-fcard-dsc">iOS: Swift/Objective-C<br>Android: Kotlin/Java<br>최고 성능 · 기기 기능 100% 활용 · 플랫폼별 개발 필요</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🔄</div><div class="wda-fcard-ttl">하이브리드 앱</div><div class="wda-fcard-dsc">React Native · Flutter<br>한 번 개발로 멀티 플랫폼 지원<br>개발 비용 절약 · 성능은 네이티브 대비 낮음</div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/꽃 아이콘 (3).webp" alt="" style="position:absolute;width:32px;top:-12px;right:26%;z-index:2;pointer-events:none;opacity:.66;transform:rotate(-8deg);">
  <img src="/images/decoration/반짝이 아이콘 (3).webp" alt="" style="position:absolute;width:24px;top:-8px;left:20%;z-index:2;pointer-events:none;opacity:.64;transform:rotate(10deg);">
</div>

---

## ⚖️ 웹 vs 앱 — 핵심 차이점 3가지

### 1. 설치와 접근성

| 구분 | 웹 | 앱 |
|---|---|---|
| **접근** | URL 입력 → 즉시 사용 | 앱스토어 → 다운로드 → 설치 → 사용 |
| **업데이트** | 배포 즉시 모든 사용자 반영 | 앱스토어 심사 + 사용자 업데이트 승인 필요 |
| **사례** | 네이버, 유튜브 웹 버전 | 카카오톡, 배달의민족 앱 |

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/꽃 아이콘 (5).webp" alt="" style="position:absolute;width:30px;top:-12px;left:30%;z-index:2;pointer-events:none;opacity:.68;transform:rotate(-15deg);">
  <img src="/images/decoration/하트 아이콘 (3).webp" alt="" style="position:absolute;width:24px;top:-8px;right:25%;z-index:2;pointer-events:none;opacity:.62;transform:rotate(10deg);">
</div>

### 2. 성능과 속도

<div class="wda-callout wda-cs" style="position:relative;padding-right:196px;padding-left:18px;padding-top:14px;padding-bottom:14px;">
  <img src="/images/character/집중탐구.webp" alt="" style="position:absolute;width:150px;top:-24px;right:6px;z-index:3;pointer-events:none;opacity:.89;transform:rotate(12deg);">
  <span class="wda-clabel">성능 비교</span>
  📦 <strong>데이터 로딩:</strong> 웹은 매번 서버에서 다운로드 / 앱은 기본 파일이 기기에 저장되어 필요 데이터만 로드<br>
  ⚡ <strong>처리 속도:</strong> 웹은 브라우저 렌더링 레이어 존재 / 앱은 기기 하드웨어에 직접 접근하여 빠름<br>
  🎮 <strong>사례:</strong> 웹게임은 끊길 수 있음 / 모바일 게임은 부드러운 경험 제공
</div>

### 3. 기기 기능 활용

| 구분 | 웹 | 앱 |
|---|---|---|
| **카메라** | 브라우저 API로 제한적 접근 | 직접 완전 제어 |
| **GPS/위치** | 허용 필요, 정밀도 낮음 | 높은 정밀도로 항상 접근 |
| **푸시 알림** | 일부 브라우저만 지원 | 완전 지원 |
| **오프라인** | 인터넷 연결 필수 | 기본 기능 오프라인 사용 가능 |

---

## 🔍 실제 서비스 사례로 보는 웹 vs 앱

| 서비스 | 웹 버전의 특징 | 앱 버전의 특징 |
|---|---|---|
| **YouTube** | 큰 화면 시청 · 여러 탭 열기 가능 · 백그라운드 재생 제한 | 오프라인 다운로드 · 백그라운드 재생 · 알림 수신 |
| **Instagram** | 기본 피드 보기 · 사진 업로드 제한 · DM 기능 일부 제한 | 카메라 직접 연동 · 스토리 · 릴스 · 실시간 알림 완전 지원 |
| **쿠팡** | 넓은 화면에서 상품 비교 · 여러 탭으로 쇼핑 | 위치 기반 배송 정보 · 바코드 스캔 · 푸시 할인 알림 |
| **은행 서비스** | 인터넷뱅킹 · 복잡한 업무 처리 용이 | 지문·얼굴 인식 로그인 · 간편 송금 · 위치 기반 ATM 찾기 |

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/별 아이콘 (7).webp" alt="" style="position:absolute;width:26px;top:-10px;left:18%;z-index:2;pointer-events:none;opacity:.64;transform:rotate(20deg);">
  <img src="/images/decoration/반짝이 아이콘 (1).webp" alt="" style="position:absolute;width:24px;top:-8px;right:30%;z-index:2;pointer-events:none;opacity:.58;transform:rotate(-8deg);">
</div>

---

## 🛠️ 개발자 관점 — 웹과 앱의 장단점

<div class="wda-callout wda-cw" style="position:relative;padding-left:190px;padding-right:18px;padding-top:14px;padding-bottom:14px;">
  <img src="/images/character/번뜩.webp" alt="" style="position:absolute;width:140px;top:-20px;left:8px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(-6deg);">
  <span class="wda-clabel">개발자 시각</span>
  각각의 방식은 분명한 장단점이 있습니다. 프로젝트 목표와 팀 상황에 따라 최적의 선택이 달라집니다.
</div>

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">✅</div><div class="wda-fcard-ttl">웹 개발 장점</div><div class="wda-fcard-dsc">배포 즉시 모든 사용자 업데이트 · 한 번 개발로 모든 플랫폼 지원 · SEO 가능 · 상대적으로 저렴한 개발 비용</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">⚠️</div><div class="wda-fcard-ttl">웹 개발 단점</div><div class="wda-fcard-dsc">브라우저 호환성 문제 발생 가능 · 인터넷 연결 필수 · 기기 고급 기능 활용 제한</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">✅</div><div class="wda-fcard-ttl">앱 개발 장점</div><div class="wda-fcard-dsc">최적화된 성능과 UX · 오프라인 기본 기능 사용 · 기기 모든 기능 자유롭게 활용 · 높은 보안성</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">⚠️</div><div class="wda-fcard-ttl">앱 개발 단점</div><div class="wda-fcard-dsc">iOS · Android 플랫폼별 개발 필요 · 앱스토어 심사 프로세스 · 업데이트 시 사용자 동의 필요 · 높은 개발 비용</div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/별 아이콘 (2).webp" alt="" style="position:absolute;width:40px;top:-16px;right:28%;z-index:2;pointer-events:none;opacity:.62;transform:rotate(6deg);">
  <img src="/images/decoration/꽃 아이콘 (7).webp" alt="" style="position:absolute;width:28px;top:-10px;left:14%;z-index:2;pointer-events:none;opacity:.68;transform:rotate(-12deg);">
</div>

---

## 🤔 언제 웹을, 언제 앱을 선택할까?

<div class="wda-callout wda-cs" style="position:relative;padding-right:196px;padding-left:20px;padding-top:14px;padding-bottom:14px;">
  <img src="/images/character/전체흐름.webp" alt="" style="position:absolute;width:150px;top:-24px;right:6px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(-10deg);">
  <span class="wda-clabel">웹을 선택하는 경우</span>
  📄 <strong>정보 제공이 주목적</strong> — 회사 홈페이지 · 블로그 · 뉴스 사이트<br>
  💰 <strong>예산과 시간이 제한적</strong> — 스타트업 · 개인 프로젝트 · 빠른 MVP 출시<br>
  🔍 <strong>검색 노출이 중요</strong> — SEO가 핵심인 마케팅·브랜딩 사이트<br>
  🖥️ <strong>데스크톱 사용자 비중이 높음</strong> — B2B 서비스 · 관리 도구<br>
  🌍 <strong>글로벌 접근성 필요</strong> — 다양한 기기와 OS를 모두 지원해야 할 때<br><br>
  대표 사례: 네이버 블로그 · 티스토리 · 회사 홈페이지 · 쇼핑몰
</div>

<div class="wda-callout wda-ci" style="position:relative;padding-left:190px;padding-right:18px;padding-top:14px;padding-bottom:14px;">
  <img src="/images/character/잠깐생각해보기.webp" alt="" style="position:absolute;width:140px;top:-22px;left:8px;z-index:3;pointer-events:none;opacity:.90;transform:rotate(8deg);">
  <span class="wda-clabel">앱을 선택하는 경우</span>
  🔄 <strong>자주 사용하는 서비스</strong> — 소셜미디어 · 게임 · 음악 스트리밍<br>
  📷 <strong>기기 기능 활용이 필수</strong> — 카메라 · GPS · 알림이 핵심 기능<br>
  🔒 <strong>보안이 중요</strong> — 금융 · 결제 · 민감한 개인정보 처리<br>
  ⚡ <strong>빠른 반응성이 필요</strong> — 실시간 채팅 · 게임 · 라이브 스트리밍<br><br>
  대표 사례: 카카오톡 · 인스타그램 · 배달의민족 · 토스
</div>

---

## 🚀 PWA: 웹과 앱의 장점을 합친 기술

PWA(Progressive Web App)는 웹 기술로 만들지만 앱처럼 동작하는 새로운 형태의 서비스입니다. 앱스토어 없이도 홈 화면에 설치할 수 있고, 오프라인에서도 동작합니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">📲</div><div class="wda-fcard-ttl">앱처럼 설치</div><div class="wda-fcard-dsc">웹사이트를 홈 화면에 추가하여 앱처럼 사용 · 앱스토어 심사 없이 즉시 배포</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📶</div><div class="wda-fcard-ttl">오프라인 동작</div><div class="wda-fcard-dsc">Service Worker로 캐시 관리 · 인터넷 연결 없이도 기본 기능 사용 가능</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">🔔</div><div class="wda-fcard-ttl">푸시 알림</div><div class="wda-fcard-dsc">네이티브 앱처럼 푸시 알림 발송 가능 · 브라우저를 닫아도 알림 수신</div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/별 아이콘 (4).webp" alt="" style="position:absolute;width:28px;top:-10px;left:12px;z-index:2;pointer-events:none;opacity:.66;transform:rotate(-12deg);">
  <img src="/images/decoration/반짝이 아이콘 (5).webp" alt="" style="position:absolute;width:26px;top:-8px;right:18%;z-index:2;pointer-events:none;opacity:.60;transform:rotate(15deg);">
</div>

| 서비스 | PWA 활용 사례 |
|---|---|
| **트위터** | 앱 대신 PWA 버전을 주력으로 운영 · 데이터 사용량 70% 감소 |
| **스타벅스** | PWA로 주문과 결제 시스템 구현 · 느린 인터넷에서도 정상 작동 |
| **핀터레스트** | PWA 도입 후 사용자 참여도 60%, 핵심 지표 44% 향상 |
| **인스타그램** | 인터넷이 느린 지역을 위한 Lite PWA 버전 별도 제공 |

---

## 🔭 웹과 앱의 미래 전망

기술 발전과 함께 웹과 앱의 경계가 점점 모호해지고 있습니다. 두 영역 모두 빠르게 진화 중입니다.

<div class="wda-fgrid">
<div class="wda-fcard"><div class="wda-fcard-ico">🌐</div><div class="wda-fcard-ttl">웹의 진화</div><div class="wda-fcard-dsc">WebAssembly로 네이티브 수준 성능 · Web APIs로 기기 기능 범위 확대 · PWA 보편화 · 5G 확산으로 속도 한계 해결</div></div>
<div class="wda-fcard"><div class="wda-fcard-ico">📱</div><div class="wda-fcard-ttl">앱의 진화</div><div class="wda-fcard-dsc">크로스 플랫폼(Flutter · React Native)으로 멀티 플랫폼 개발 · AI 통합 개인화 경험 · AR/VR 새로운 인터페이스 · IoT 스마트 기기 연동</div></div>
</div>

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/하트 아이콘 (5).webp" alt="" style="position:absolute;width:34px;top:-12px;left:22%;z-index:2;pointer-events:none;opacity:.66;transform:rotate(-10deg);">
  <img src="/images/decoration/반짝이 아이콘 (4).webp" alt="" style="position:absolute;width:26px;top:-8px;right:20%;z-index:2;pointer-events:none;opacity:.62;transform:rotate(16deg);">
</div>

<div class="wda-callout wda-ci" style="position:relative;padding-right:196px;padding-left:18px;padding-top:14px;padding-bottom:14px;">
  <img src="/images/character/기억해두기.webp" alt="" style="position:absolute;width:150px;top:-24px;right:6px;z-index:3;pointer-events:none;opacity:.89;transform:rotate(-9deg);">
  <span class="wda-clabel">핵심 트렌드</span>
  현재 개발 트렌드는 <strong>"웹처럼 배포하고, 앱처럼 동작하는"</strong> 방향으로 수렴하고 있습니다. PWA, 크로스 플랫폼 프레임워크, WebAssembly 등이 경계를 허물고 있으며, 앞으로는 "웹인지 앱인지"보다 "사용자 경험이 좋은가"가 더 중요해질 것입니다.
</div>

---

## 📋 핵심 내용 정리

| 비교 항목 | 웹(Web) | 앱(App) |
|---|---|---|
| **접근** | URL 입력 · 즉시 사용 | 앱스토어 다운로드 · 설치 필요 |
| **속도** | 매번 서버에서 다운로드 | 기기에 저장되어 빠름 |
| **플랫폼** | 모든 기기 동일 동작 | OS별 최적화 |
| **기기 기능** | 브라우저 제한 있음 | 카메라·GPS·알림 완전 활용 |
| **개발 비용** | 저렴 · 빠른 출시 | 플랫폼별 개발로 높음 |
| **업데이트** | 배포 즉시 반영 | 사용자 승인 필요 |
| **SEO** | 가능 | 불가 |
| **오프라인** | 기본 불가 (PWA로 일부 가능) | 기본 기능 오프라인 사용 가능 |

<div style="position:relative;height:0;overflow:visible;margin:0;">
  <img src="/images/decoration/핀 아이콘 (3).webp" alt="" style="position:absolute;width:28px;top:-12px;right:34%;z-index:2;pointer-events:none;opacity:.70;transform:rotate(-8deg);">
  <img src="/images/decoration/별 아이콘 (11).webp" alt="" style="position:absolute;width:30px;top:-10px;left:26%;z-index:2;pointer-events:none;opacity:.66;transform:rotate(10deg);">
</div>

<div class="wda-memo" style="position:relative;padding-left:20px;padding-right:18px;padding-top:26px;padding-bottom:14px;">
  <img src="/images/decoration/마스킹 테이프 (11).webp" alt="" style="position:absolute;width:100px;top:-11px;right:24px;z-index:1;pointer-events:none;opacity:.80;transform:rotate(7deg);">
  <span class="wda-memo-label">✏️ 선택 기준 요약</span>
  <div class="wda-memo-body">
    <strong>웹 선택:</strong> 정보 제공 · SEO 중요 · 예산 제한 · 빠른 배포 · 모든 기기 지원 필요<br>
    <strong>앱 선택:</strong> 자주 쓰는 서비스 · 카메라·GPS 필수 · 고보안 · 최고 UX 목표<br>
    <strong>PWA 선택:</strong> 웹의 편의성 + 앱의 UX를 동시에 원할 때
  </div>
</div>

---

## ✍️ 실습 과제 — 내가 자주 쓰는 서비스 3가지 분석

자주 사용하는 서비스 3개를 선택해서 아래 질문에 답해보세요.

<div class="wda-steps">
<div class="wda-step"><div class="wda-snum">1</div><div class="wda-sbody"><div class="wda-sttl">웹·앱 모두 사용 경험</div><div class="wda-sdsc">웹 버전과 앱 버전을 모두 사용해봤나요? 어떤 차이를 느꼈나요?</div></div></div>
<div class="wda-step"><div class="wda-snum">2</div><div class="wda-sbody"><div class="wda-sttl">상황별 사용 패턴</div><div class="wda-sdsc">어떤 상황에서 웹을, 어떤 상황에서 앱을 사용하나요? 이유도 생각해보세요.</div></div></div>
<div class="wda-step"><div class="wda-snum">3</div><div class="wda-sbody"><div class="wda-sttl">개발 방향 선택</div><div class="wda-sdsc">만약 이 서비스를 직접 개발한다면 웹과 앱 중 어떤 것부터 시작하겠나요?</div></div></div>
<div class="wda-step"><div class="wda-snum">4</div><div class="wda-sbody"><div class="wda-sttl">이유 설명</div><div class="wda-sdsc">그 이유는 무엇인가요? 오늘 학습한 차이점을 근거로 설명해보세요.</div></div></div>
</div>

<div class="wda-done" style="position:relative;padding-right:196px;padding-left:20px;padding-bottom:20px;padding-top:16px;">
  <img src="/images/character/화이팅.webp" alt="" style="position:absolute;width:148px;top:-26px;right:4px;z-index:3;pointer-events:none;opacity:.91;transform:rotate(-8deg);">
  <div class="wda-done-ico">🎉</div>
  <div class="wda-done-ttl">3-1 완료!</div>
  <div>웹과 앱의 차이점을 체계적으로 학습했습니다. 이제 새 프로젝트를 시작할 때 어떤 방향으로 개발할지 판단할 수 있는 기초 지식을 갖추었습니다!</div>
</div>
