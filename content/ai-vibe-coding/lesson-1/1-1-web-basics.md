---
title: "1-1: 웹 기본 개념 및 UI/UX 이론"
category: "ai-vibe-coding"
section: "lesson-1"
date: "2026-06-10"
status: "completed"
description: "웹의 기본 원리, 인터넷 통신 방식, 현대적 웹사이트 유형, UI/UX 기본 개념 및 16가지 현대적 UI 용어를 학습합니다."
---

<style>
.wda-concept-grid{display:flex;flex-wrap:wrap;gap:12px;margin:.8rem 0 1.8rem}
.wda-concept-card{flex:1 1 220px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:16px 18px}
.wda-ctag{display:inline-block;font-size:.7rem;font-weight:700;color:#8b5cf6;font-family:'JetBrains Mono',monospace;letter-spacing:.08em;background:rgba(139,92,246,.1);border-radius:4px;padding:2px 8px;margin-bottom:8px}
.wda-ctitle{display:block;font-weight:700;font-size:.88rem;margin-bottom:6px}
.wda-cbody{font-size:.82rem;line-height:1.6;opacity:.7;margin:0 0 3px}
.wda-steps{background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.8rem;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-step{display:flex;align-items:flex-start;gap:12px;padding:3px 14px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{width:26px;height:26px;border-radius:50%;background:rgba(139,92,246,.12);color:#8b5cf6;font-weight:700;font-size:.88rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-stitle{font-weight:700;font-size:.875rem;line-height:1.2;margin:0}
.wda-sdesc{font-size:.82rem;opacity:.65;line-height:1.2;margin:0}
.wda-compare-grid{display:flex;flex-wrap:wrap;gap:12px;margin:.8rem 0 1.8rem}
.wda-compare-card{flex:1 1 220px;background:rgba(128,128,128,.03);border-radius:10px;padding:18px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-uicard{background:rgba(139,92,246,.06);border:1px solid rgba(139,92,246,.2)}
.wda-uxcard{background:rgba(99,102,241,.06);border:1px solid rgba(99,102,241,.2)}
.wda-ctype{font-size:.7rem;font-weight:600;letter-spacing:.08em;opacity:.55;margin:0 0 2px}
.wda-clabel{font-size:1.25rem;font-weight:800;color:#8b5cf6;margin:0 0 4px}
.wda-cdef{font-size:.82rem;opacity:.7;line-height:1.5;margin:8px 0 10px;padding-top:10px;border-top:1px solid rgba(128,128,128,.15)}
.wda-clist{list-style:none;padding:0;margin:0}
.wda-clist li{font-size:.8rem;padding:3px 0;opacity:.75;display:flex;align-items:center;gap:7px}
.wda-clist li::before{content:'';display:block;width:5px;height:5px;border-radius:50%;background:#8b5cf6;opacity:.45;flex-shrink:0}
.wda-analogy-grid{display:flex;flex-wrap:wrap;gap:12px;margin:.8rem 0 1.8rem}
.wda-analogy-card{flex:1 1 200px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:16px 18px}
.wda-atype{font-size:.72rem;font-weight:700;color:#8b5cf6;font-family:'JetBrains Mono',monospace;letter-spacing:.05em;margin:0 0 4px}
.wda-atitle{font-weight:700;font-size:.88rem;margin:0 0 8px}
.wda-aitems{font-size:.82rem;opacity:.7;line-height:1.9;margin:0}
.wda-done{border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:16px 20px;margin:.8rem 0 1.4rem;background:rgba(34,197,94,.04);text-align:center;font-size:.82rem;line-height:1.6}
.wda-done-ico{font-size:1.8rem;margin-bottom:6px}
.wda-done-ttl{font-size:1rem;font-weight:700;color:#22c55e;margin-bottom:4px}
.wda-note{border-radius:10px;padding:13px 16px;margin:.8rem 0 1.2rem;border-left:3px solid rgba(245,158,11,.7);background:rgba(245,158,11,.06)}
.wda-note-ttl{font-size:.75rem;font-weight:700;color:#f59e0b;letter-spacing:.05em;text-transform:uppercase;margin-bottom:5px}
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-callout .wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 150px;background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-prompt-head{background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.22);border-bottom:none;border-radius:10px 10px 0 0;padding:8px 14px;font-size:.78rem;font-weight:700;color:#8b5cf6;letter-spacing:.03em}
.wda-memo{background:rgba(245,158,11,.04);border:1px solid rgba(245,158,11,.2);border-radius:10px;padding:14px 16px;margin:.8rem 0 1.6rem}
.wda-memo-label{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#f59e0b;margin-bottom:8px;display:block}
.wda-memo-body{font-size:.81rem;line-height:1.6}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:13px 18px;margin:.8rem 0 1.6rem;font-size:.79rem;line-height:1.75}
.wda-goal-label{font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#22c55e;display:block;margin-bottom:10px}
table{width:100%;border-collapse:collapse;font-size:.78rem;margin:.8rem 0 1.6rem}
th{font-weight:600;padding:6px 10px;background:rgba(128,128,128,.07);border:1px solid rgba(128,128,128,.18);font-size:.72rem;letter-spacing:.02em;text-align:left}
td{padding:5px 10px;border:1px solid rgba(128,128,128,.14);vertical-align:top;line-height:1.5;font-size:.78rem}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
.wda-cy{background:rgba(250,204,21,.07);border-color:#ca8a04}
.wda-cy .wda-clabel{color:#92400e}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-deco{position:absolute;z-index:2;pointer-events:none}
.wda-char{position:absolute;z-index:3;pointer-events:none}
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
@media (max-width:640px){
.wda-deco{max-width:55px !important}
.wda-char{max-width:110px !important}
.wda-goal,.wda-callout,.wda-done,.wda-memo,.wda-steps,.wda-concept-card,.wda-compare-card{padding-left:16px !important;padding-right:16px !important}
}
@media (max-width:554px){
.wda-char{display:none !important}
}
</style>

웹의 기본 원리와 인터넷 통신 방식을 이해하고, 현대적 웹사이트 구조와 UI/UX 기본 개념을 학습합니다.

---

## 🎯 학습 목표

<div class="wda-goal">
  • <strong>웹의 기본 원리</strong> — 인터넷 통신 방식 이해<br>
  • <strong>현대적 웹사이트</strong> — 구조 분류 학습<br>
  • <strong>UI/UX 기본 개념</strong> — 현대적 UI 용어 숙지<br>
  • <strong>웹 개발 흐름</strong> — 전체적인 방향성 파악
</div>

---

## 수업 개요

<div class="wda-callout wda-ci" style="border-left:none;">
  <span style="font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block;color:#8b5cf6;">이 수업은</span>본격적인 웹 개발에 앞서 웹의 기본 원리와 개념을 이해하는 이론 수업입니다. 웹이 무엇인지, 어떻게 동작하는지, 현대적인 웹사이트는 어떤 종류가 있는지를 배우고, UI/UX의 기본 개념과 용어를 익힙니다.
</div>

---

## 1. 웹(WEB)이란 무엇인가?

웹의 기본 구성 요소와 동작 원리를 이해해보겠습니다.

<div class="wda-concept-grid">
  <div class="wda-concept-card">
    <span class="wda-ctag">HTML</span>
    <strong class="wda-ctitle">웹페이지의 구조와 내용</strong>
    <p class="wda-cbody">건물의 뼈대와 같은 역할을 합니다.</p>
    <p class="wda-cbody">제목, 문단, 링크, 이미지 등의 내용을 정의합니다.</p>
  </div>
  <div class="wda-concept-card">
    <span class="wda-ctag">CSS</span>
    <strong class="wda-ctitle">웹페이지의 스타일과 디자인</strong>
    <p class="wda-cbody">건물의 인테리어와 같은 역할을 합니다.</p>
    <p class="wda-cbody">색상, 폰트, 레이아웃 등을 꾸며줍니다.</p>
  </div>
</div>

---

## 2. 인터넷 통신 방식

웹사이트에 접속할 때 일어나는 과정을 단계별로 알아보겠습니다.

<div class="wda-steps">
  <div class="wda-step">
    <span class="wda-snum">①</span>
    <div>
      <p class="wda-stitle">도메인 접속</p>
      <p class="wda-sdesc">naver.com과 같은 주소를 입력</p>
    </div>
  </div>
  <div class="wda-step">
    <span class="wda-snum">②</span>
    <div>
      <p class="wda-stitle">서버에 요청</p>
      <p class="wda-sdesc">브라우저가 해당 서버에 페이지를 요청</p>
    </div>
  </div>
  <div class="wda-step">
    <span class="wda-snum">③</span>
    <div>
      <p class="wda-stitle">코드 수신</p>
      <p class="wda-sdesc">HTML, CSS, JavaScript 파일을 받음</p>
    </div>
  </div>
  <div class="wda-step">
    <span class="wda-snum">④</span>
    <div>
      <p class="wda-stitle">브라우저 렌더링</p>
      <p class="wda-sdesc">받은 코드를 해석해서 화면에 표시</p>
    </div>
  </div>
</div>

---

## 3. 현대적 웹사이트 구조

현재 우리가 사용하는 웹사이트들은 목적에 따라 6가지 유형으로 분류됩니다.

| 유형 | 목적 | 예시 | 특징 |
|------|------|------|------|
| 랜딩페이지 | 제품/서비스 소개 | Apple, Tesla, 스타트업 소개 페이지 | 한 페이지에 모든 핵심 정보 집약 |
| 홈페이지 | 기업/개인 정보 제공 | 대학교, 병원, 개인 블로그 | 다양한 페이지와 정보 구조 |
| 쇼핑몰 | 온라인 상거래 | 쿠팡, 11번가, 개인 쇼핑몰 | 결제 시스템, 상품 관리 |
| 블로그 & 위키 | 정보 공유 | 네이버 블로그, 위키피디아 | 콘텐츠 중심, 검색 기능 |
| SaaS | 클라우드 기반 서비스 | Gmail, Notion, Figma | 웹에서 앱처럼 동작 |
| 웹앱 | 앱과 같은 기능 | 카카오톡 웹, 유튜브 | 실시간 상호작용 |

---

## 4. UI/UX란 무엇인가?

웹 개발에서 가장 중요한 개념인 UI와 UX를 쉽게 이해해보겠습니다.

<div class="wda-compare-grid">
  <div class="wda-compare-card wda-uicard">
    <p class="wda-ctype">User Interface</p>
    <p class="wda-clabel">UI</p>
    <p class="wda-cdef">브라우저에서 보이는 모든 시각적 요소</p>
    <ul class="wda-clist">
      <li>버튼</li>
      <li>메뉴</li>
      <li>아이콘</li>
      <li>색상</li>
      <li>폰트</li>
      <li>레이아웃</li>
      <li>이미지</li>
      <li>애니메이션</li>
    </ul>
  </div>
  <div class="wda-compare-card wda-uxcard">
    <p class="wda-ctype">User Experience</p>
    <p class="wda-clabel">UX</p>
    <p class="wda-cdef">사용자가 느끼는 전체적인 경험</p>
    <ul class="wda-clist">
      <li>사용 편의성</li>
      <li>접근성</li>
      <li>로딩 속도</li>
      <li>반응성</li>
      <li>전체적인 만족도</li>
    </ul>
  </div>
</div>

### 쉬운 비유

<div class="wda-callout wda-ci">
  <span style="font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block;color:#8b5cf6;">카페로 이해하는 UI vs UX</span>
  <div class="wda-analogy-grid" style="margin:.4rem 0 0;">
    <div class="wda-analogy-card">
      <p class="wda-atype">UI</p>
      <p class="wda-atitle">카페에서 보이는 것들</p>
      <p class="wda-aitems">인테리어<br>메뉴판<br>의자</p>
    </div>
    <div class="wda-analogy-card">
      <p class="wda-atype">UX</p>
      <p class="wda-atitle">카페에서 느끼는 것들</p>
      <p class="wda-aitems">커피 맛<br>서비스 속도<br>전체적인 기분</p>
    </div>
  </div>
</div>

---

## 5. 현대적 UI 용어

아래 16가지 UI 요소 데모를 직접 클릭하고 조작해보세요.

<style>
.uidemo-grid{display:flex;flex-direction:column;border:1px solid rgba(128,128,128,.18);border-radius:12px;overflow:hidden;margin:1.2rem 0 2rem;color-scheme:light dark}
.uidemo-item{display:flex;flex-wrap:wrap;gap:12px;padding:14px 16px;border-bottom:1px solid rgba(128,128,128,.1);align-items:center}
.uidemo-item:last-child{border-bottom:none}
.uidemo-info{flex:1 1 155px;min-width:0}
.uidemo-tag{font-size:.72rem;color:#8b5cf6;font-family:'JetBrains Mono',monospace;font-weight:600;letter-spacing:.02em}
.uidemo-name{font-weight:700;font-size:.88rem;margin:2px 0;font-family:inherit}
.uidemo-desc{font-size:.79rem;opacity:.58;line-height:1.45;font-family:inherit}
.uidemo-preview{flex:1 1 155px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;padding:10px 12px;background:rgba(128,128,128,.04);border-radius:8px;min-height:50px}
.ud-btn{padding:6px 14px;border-radius:6px;border:1px solid rgba(139,92,246,.45);background:rgba(139,92,246,.1);color:#8b5cf6;font-size:.79rem;cursor:pointer;font-family:inherit;transition:background .15s,border-color .15s}
.ud-btn:hover{background:rgba(139,92,246,.22);border-color:#8b5cf6}
.ud-btn:disabled{opacity:.32;cursor:not-allowed}
.ud-btn.ud-btn-ghost{background:transparent;border-color:rgba(139,92,246,.65)}
.ud-btn.ud-btn-ghost:hover{background:rgba(139,92,246,.07);border-color:#8b5cf6}
.ud-input{padding:6px 11px;border-radius:6px;border:1px solid rgba(128,128,128,.3);font-size:.79rem;font-family:inherit;width:140px;background:Canvas;color:CanvasText;transition:border-color .15s,box-shadow .15s}
.ud-input:focus{outline:none;border-color:#8b5cf6;box-shadow:0 0 0 3px rgba(139,92,246,.18)}
.ud-select{padding:6px 10px;border-radius:6px;border:1px solid rgba(128,128,128,.3);font-size:.79rem;font-family:inherit;background:Canvas;color:CanvasText;cursor:pointer;max-width:150px}
.ud-range{width:130px;accent-color:#8b5cf6;cursor:pointer}
.ud-label{font-size:.79rem;display:flex;align-items:center;gap:6px;cursor:pointer;font-family:inherit;white-space:nowrap;user-select:none}
.ud-check,.ud-radio{accent-color:#8b5cf6;width:15px;height:15px;cursor:pointer}
.ud-card{border:1px solid rgba(128,128,128,.2);border-radius:8px;padding:10px 12px;background:Canvas;min-width:110px;max-width:150px}
.ud-card-img{width:100%;height:32px;background:linear-gradient(135deg,rgba(139,92,246,.28),rgba(99,102,241,.18));border-radius:5px;margin-bottom:7px}
.ud-card-title{font-size:.79rem;font-weight:600;margin-bottom:2px;font-family:inherit}
.ud-card-body{font-size:.72rem;opacity:.55;line-height:1.4;font-family:inherit}
.ud-hover-box{padding:9px 16px;border-radius:8px;border:1px solid rgba(128,128,128,.2);font-size:.79rem;cursor:pointer;transition:all .2s ease;text-align:center;font-family:inherit;background:Canvas;user-select:none}
.ud-hover-box:hover{background:rgba(139,92,246,.12);border-color:#8b5cf6;color:#8b5cf6;transform:translateY(-2px);box-shadow:0 4px 10px rgba(139,92,246,.18)}
.ud-scroll{width:140px;height:74px;overflow-y:auto;border:1px solid rgba(128,128,128,.2);border-radius:6px;padding:7px 9px;font-size:.76rem;font-family:inherit;background:Canvas;color:CanvasText;line-height:1.65}
.ud-draggable{padding:7px 14px;background:rgba(139,92,246,.1);border:1.5px dashed rgba(139,92,246,.45);border-radius:6px;font-size:.77rem;cursor:grab;font-family:inherit;color:#8b5cf6;user-select:none}
.ud-draggable:active{cursor:grabbing;opacity:.6}
.ud-nav{display:flex;gap:3px;background:rgba(128,128,128,.06);border-radius:7px;padding:3px}
.ud-nav-item{padding:5px 10px;border-radius:4px;font-size:.76rem;cursor:pointer;font-family:inherit;transition:background .15s;text-decoration:none;color:CanvasText;opacity:.6}
.ud-nav-item:hover{background:Canvas;opacity:1;font-weight:600}
.nd-r{display:none}
.nd-r:checked+.ud-nav-item{background:Canvas;opacity:1;font-weight:600}
.ud-menu{list-style:none;margin:0;padding:4px;border:1px solid rgba(128,128,128,.15);border-radius:8px;min-width:120px;background:Canvas}
.ud-menu-item{padding:6px 12px;font-size:.78rem;border-radius:4px;cursor:pointer;font-family:inherit;transition:background .1s}
.ud-menu-item:hover{background:rgba(139,92,246,.12);color:#8b5cf6}
.ud-sidebar{display:flex;flex-direction:column;gap:2px;width:100px;padding:5px;border:1px solid rgba(128,128,128,.15);border-radius:8px;background:Canvas}
.ud-sidebar-item{padding:5px 10px;font-size:.76rem;border-radius:4px;cursor:pointer;font-family:inherit;transition:background .1s;white-space:nowrap}
.ud-sidebar-item:hover{background:rgba(139,92,246,.1)}
.ud-sidebar-active{background:rgba(139,92,246,.15);font-weight:700;color:#8b5cf6}
@keyframes udPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.1);opacity:.72}}
@keyframes udSpin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
.ud-anim-pulse{width:36px;height:36px;background:rgba(139,92,246,.35);border-radius:50%;animation:udPulse 1.5s ease-in-out infinite;flex-shrink:0}
.ud-anim-spin{width:28px;height:28px;border:3px solid rgba(139,92,246,.2);border-top-color:#8b5cf6;border-radius:50%;animation:udSpin 1s linear infinite;flex-shrink:0}
.ud-swipe-wrap{width:150px;height:48px;border:1px solid rgba(128,128,128,.2);border-radius:30px;padding:0 6px;background:rgba(128,128,128,.04);display:flex;align-items:center}
.ud-swipe-range{-webkit-appearance:none;appearance:none;width:100%;height:36px;background:transparent;outline:none;margin:0;padding:0;cursor:grab}
.ud-swipe-range:active{cursor:grabbing}
.ud-swipe-range::-webkit-slider-thumb{-webkit-appearance:none;width:36px;height:36px;border-radius:50%;background:#8b5cf6;cursor:grab;box-shadow:0 2px 8px rgba(139,92,246,.35);margin-top:-17px}
.ud-swipe-range::-webkit-slider-runnable-track{height:2px;background:rgba(139,92,246,.18);border-radius:1px}
.ud-swipe-range::-moz-range-thumb{width:36px;height:36px;border-radius:50%;background:#8b5cf6;cursor:grab;border:none;box-shadow:0 2px 8px rgba(139,92,246,.35)}
.ud-swipe-range::-moz-range-track{height:2px;background:rgba(139,92,246,.18);border-radius:1px}
details.ud-modal summary{cursor:pointer;list-style:none;padding:6px 14px;border-radius:6px;border:1px solid rgba(139,92,246,.4);background:rgba(139,92,246,.1);color:#8b5cf6;font-size:.79rem;font-family:inherit;text-align:center;user-select:none;transition:background .15s;display:block}
details.ud-modal summary:hover{background:rgba(139,92,246,.2)}
details.ud-modal summary::-webkit-details-marker{display:none}
.ud-modal-body{margin-top:8px;padding:14px;border:1px solid rgba(128,128,128,.2);border-radius:8px;background:Canvas;font-size:.79rem;font-family:inherit;text-align:center;line-height:1.6}
</style>

<div class="uidemo-grid">

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Button</div>
      <div class="uidemo-name">버튼</div>
      <div class="uidemo-desc">클릭할 수 있는 버튼입니다. 가장 기본적인 상호작용 요소로, 다양한 스타일로 표현됩니다.</div>
    </div>
    <div class="uidemo-preview">
      <button class="ud-btn">기본 버튼</button>
      <button class="ud-btn ud-btn-ghost">외곽선</button>
      <button class="ud-btn" disabled>비활성화</button>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Input</div>
      <div class="uidemo-name">입력창</div>
      <div class="uidemo-desc">텍스트 입력 필드입니다. 사용자로부터 데이터를 받는 요소입니다.</div>
    </div>
    <div class="uidemo-preview">
      <input class="ud-input" type="text" placeholder="이름을 입력하세요" />
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Navigation</div>
      <div class="uidemo-name">내비게이션</div>
      <div class="uidemo-desc">메뉴 및 네비게이션입니다. 페이지간 이동을 도와주는 요소입니다.</div>
    </div>
    <div class="uidemo-preview">
      <div class="ud-nav">
        <input type="radio" name="nd" id="nd-1" class="nd-r" /><label for="nd-1" class="ud-nav-item">홈</label>
        <input type="radio" name="nd" id="nd-2" class="nd-r" /><label for="nd-2" class="ud-nav-item">소개</label>
        <input type="radio" name="nd" id="nd-3" class="nd-r" /><label for="nd-3" class="ud-nav-item">블로그</label>
      </div>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Dropdown</div>
      <div class="uidemo-name">드롭다운</div>
      <div class="uidemo-desc">선택 목록 드롭다운입니다. 여러 옵션 중 하나를 선택하는 요소입니다.</div>
    </div>
    <div class="uidemo-preview">
      <select class="ud-select">
        <option>프론트엔드</option>
        <option>백엔드</option>
        <option>풀스택</option>
        <option>디자인</option>
      </select>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Checkbox</div>
      <div class="uidemo-name">체크박스</div>
      <div class="uidemo-desc">체크박스 선택입니다. 다중 선택이 가능한 요소입니다.</div>
    </div>
    <div class="uidemo-preview">
      <label class="ud-label"><input type="checkbox" class="ud-check" /> React</label>
      <label class="ud-label"><input type="checkbox" class="ud-check" /> Vue</label>
      <label class="ud-label"><input type="checkbox" class="ud-check" /> TypeScript</label>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Radio</div>
      <div class="uidemo-name">라디오 버튼</div>
      <div class="uidemo-desc">라디오 버튼입니다. 여러 옵션 중 하나만 선택 가능한 요소입니다.</div>
    </div>
    <div class="uidemo-preview">
      <label class="ud-label"><input type="radio" class="ud-radio" name="ud-plan" /> 무료</label>
      <label class="ud-label"><input type="radio" class="ud-radio" name="ud-plan" /> 유료</label>
      <label class="ud-label"><input type="radio" class="ud-radio" name="ud-plan" /> 기업</label>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Slider</div>
      <div class="uidemo-name">슬라이더</div>
      <div class="uidemo-desc">슬라이더 조절입니다. 범위 내에서 값을 선택하는 요소입니다.</div>
    </div>
    <div class="uidemo-preview">
      <input type="range" class="ud-range" min="0" max="100" defaultValue="60" />
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Modal</div>
      <div class="uidemo-name">모달</div>
      <div class="uidemo-desc">팝업 모달 창입니다. 중요한 정보나 작업을 위한 오버레이입니다.</div>
    </div>
    <div class="uidemo-preview" style="width:100%">
      <details class="ud-modal" style="width:100%;text-align:center">
        <summary>모달 열기 ▾</summary>
        <div class="ud-modal-body">
          🎉 모달 창 내용입니다<br/>
          <small style="opacity:.6">항목을 확인하거나 작업을 선택하세요</small>
        </div>
      </details>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Card</div>
      <div class="uidemo-name">카드</div>
      <div class="uidemo-desc">정보를 담는 카드입니다. 관련 정보들을 그룹화하는 컨테이너입니다.</div>
    </div>
    <div class="uidemo-preview">
      <div class="ud-card">
        <div class="ud-card-img"></div>
        <div class="ud-card-title">카드 제목</div>
        <div class="ud-card-body">카드 내용이 들어가는 곳입니다.</div>
      </div>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Drag &amp; Drop</div>
      <div class="uidemo-name">드래그앤드롭</div>
      <div class="uidemo-desc">끌어서 놓기입니다. 요소를 마우스로 끌어서 이동시키는 인터랙션입니다.</div>
    </div>
    <div class="uidemo-preview">
      <div class="ud-draggable" draggable="true">☰ 드래그해보세요</div>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Scroll</div>
      <div class="uidemo-name">스크롤</div>
      <div class="uidemo-desc">스크롤 이벤트입니다. 콘텐츠가 넘칠 때 스크롤로 탐색하는 요소입니다.</div>
    </div>
    <div class="uidemo-preview">
      <div class="ud-scroll">
        첫 번째 항목<br/>두 번째 항목<br/>세 번째 항목<br/>네 번째 항목<br/>다섯 번째 항목<br/>여섯 번째 항목
      </div>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Animation</div>
      <div class="uidemo-name">애니메이션</div>
      <div class="uidemo-desc">화면 애니메이션입니다. 요소에 움직임과 변화를 주는 시각 효과입니다.</div>
    </div>
    <div class="uidemo-preview">
      <div class="ud-anim-pulse"></div>
      <div class="ud-anim-spin"></div>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Menu</div>
      <div class="uidemo-name">메뉴</div>
      <div class="uidemo-desc">메뉴 시스템입니다. 기능들을 체계적으로 분류한 목록입니다.</div>
    </div>
    <div class="uidemo-preview">
      <ul class="ud-menu">
        <li class="ud-menu-item">✏️ 편집</li>
        <li class="ud-menu-item">📋 복사</li>
        <li class="ud-menu-item">🗑️ 삭제</li>
      </ul>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Sidebar</div>
      <div class="uidemo-name">사이드바</div>
      <div class="uidemo-desc">사이드바입니다. 화면 옆쪽에 위치한 보조 네비게이션 영역입니다.</div>
    </div>
    <div class="uidemo-preview">
      <div class="ud-sidebar">
        <div class="ud-sidebar-item ud-sidebar-active">📁 프로젝트</div>
        <div class="ud-sidebar-item">📄 문서</div>
        <div class="ud-sidebar-item">⚙️ 설정</div>
      </div>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Hover</div>
      <div class="uidemo-name">호버</div>
      <div class="uidemo-desc">호버 효과입니다. 마우스를 올렸을 때 나타나는 시각적 반응입니다.</div>
    </div>
    <div class="uidemo-preview">
      <div class="ud-hover-box">마우스를 올려보세요 ↑</div>
    </div>
  </div>

  <div class="uidemo-item">
    <div class="uidemo-info">
      <div class="uidemo-tag">Swipe</div>
      <div class="uidemo-name">스와이프</div>
      <div class="uidemo-desc">스와이프 제스처입니다. 터치스크린에서 손가락으로 밀어서 조작합니다.</div>
    </div>
    <div class="uidemo-preview">
      <div class="ud-swipe-wrap">
        <input type="range" class="ud-swipe-range" min="0" max="100" />
      </div>
    </div>
  </div>

</div>

---

<div class="wda-done">
  <div class="wda-done-ico">🎓</div>
  <div class="wda-done-ttl">이론 학습 완료</div>
  <div>웹의 기본 개념과 UI/UX 이론을 모두 학습했습니다.<br>이제 실제로 React 프로젝트를 만들어보면서 이 개념들을 직접 구현해보겠습니다.</div>
</div>

---

## 체크포인트

다음 내용을 이해했는지 확인해보세요.

### 학습 확인

- [ ] HTML과 CSS의 역할 차이점 이해
- [ ] 인터넷 통신 4단계 과정 숙지
- [ ] 6가지 웹사이트 유형 분류 이해
- [ ] UI와 UX의 개념 차이점 파악
- [ ] 16가지 현대적 UI 용어 숙지
- [ ] 다음 단계 실습 준비 완료

---

## ⚙️ 동작 원리

### URL 입력부터 화면 표시까지 4단계

브라우저에 `https://www.google.com`을 입력하면 내부에서 이런 과정이 일어납니다.

<div class="wda-callout wda-ci">
  <span style="font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block;color:#8b5cf6;">전체 흐름</span>요청 → DNS 조회 → 서버 응답 → 브라우저 렌더링의 4단계로 진행됩니다.
</div>

<div class="wda-steps">
  <div class="wda-step"><div class="wda-snum">1</div><div><p class="wda-stitle">요청 (Request)</p><p class="wda-sdesc">브라우저는 HTTP(S) 프로토콜로 서버에 페이지를 요청합니다. 요청에는 URL, 브라우저 종류, 언어 설정 등의 Header 정보가 포함됩니다.</p></div></div>
  <div class="wda-step"><div class="wda-snum">2</div><div><p class="wda-stitle">DNS 조회 (Domain Name System)</p><p class="wda-sdesc"><code>www.google.com</code>은 사람이 읽기 쉬운 주소입니다.<br>실제 서버를 찾으려면 <code>142.250.190.46</code>과 같은 IP 주소가 필요하고, DNS 서버가 도메인 → IP 변환을 담당합니다.</p></div></div>
  <div class="wda-step"><div class="wda-snum">3</div><div><p class="wda-stitle">서버 응답 (Response)</p><p class="wda-sdesc">서버는 요청을 받아 HTML, CSS, JavaScript 파일과 이미지 등을 브라우저로 전송합니다.<br>응답 코드 <code>200 OK</code>는 성공, <code>404 Not Found</code>는 페이지 없음, <code>500 Internal Server Error</code>는 서버 오류를 의미합니다.</p></div></div>
  <div class="wda-step"><div class="wda-snum">4</div><div><p class="wda-stitle">렌더링 (Rendering)</p><p class="wda-sdesc">브라우저 렌더링 엔진이 HTML을 파싱해 DOM 트리를 만들고, CSS를 적용해 레이아웃을 계산한 후 화면에 픽셀로 그립니다.<br>JavaScript 엔진이 스크립트를 실행해 동적 기능을 추가합니다.</p></div></div>
</div>

---

## 💻 예제 코드

### 기본 HTML 구조

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>내 첫 웹페이지</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <nav>
        <a href="/">홈</a>
        <a href="/about">소개</a>
      </nav>
    </header>

    <main>
      <h1>안녕하세요</h1>
      <p>웹 개발을 시작합니다.</p>
      <button>클릭해보세요</button>
    </main>

    <footer>
      <p>© 2026 My Website</p>
    </footer>
  </body>
</html>
```

### CSS로 스타일 적용

```css
/* 전체 초기화 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Pretendard', sans-serif;
  color: #333;
}

/* 버튼 스타일 */
button {
  padding: 10px 20px;
  background-color: #8b5cf6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #7c3aed;
}
```

---

## ⚠️ 주의사항

<div class="wda-callout wda-cw">
  <span style="font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block;color:#f59e0b;">UI가 좋다고 UX가 좋은 것은 아닙니다</span>예쁜 디자인(좋은 UI)이 갖춰져 있어도 사용 흐름이 복잡하거나 원하는 기능을 찾기 어려우면 UX는 낮습니다.<br>두 가지는 항상 함께 고려해야 합니다.
</div>

<div class="wda-callout wda-cw">
  <span style="font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block;color:#f59e0b;">HTML 구조와 CSS 스타일은 분리하세요</span>HTML 태그에 <code>style="color:red"</code>처럼 직접 스타일을 넣는 방식은 유지보수가 어렵습니다.<br>스타일은 별도 CSS 파일에 작성하는 것이 웹 표준 방식입니다.
</div>

<div class="wda-callout wda-cw">
  <span style="font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block;color:#f59e0b;">모든 브라우저에서 동작하는지 확인하세요</span>Chrome, Firefox, Safari, Edge 등 다양한 브라우저에서 동일하게 동작하는지 확인해야 합니다.<br>특정 브라우저에서만 지원하는 최신 CSS/JS 기능은 사용 전 호환성을 확인하세요.
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>웹은 <strong>HTML(구조) + CSS(디자인) + JS(동작)</strong>로 구성된다.</li>
    <li>인터넷 통신은 <strong>요청 → DNS 조회 → 응답 → 렌더링</strong> 4단계로 진행된다.</li>
    <li>현대적 웹사이트는 <strong>랜딩페이지·홈페이지·쇼핑몰·블로그&위키·SaaS·웹앱</strong> 6가지로 분류된다.</li>
    <li>UI는 <strong>보이는 요소</strong>, UX는 <strong>느끼는 전체 경험</strong>이다.</li>
    <li>16가지 현대적 UI 요소(버튼·입력창·내비게이션 등)를 직접 조작하며 익혔다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: UI가 예쁘면 UX도 자동으로 좋아진다?</div>
    <div class="wda-mistake-right">정답: UI가 좋아도 사용 흐름이 복잡하거나 원하는 기능을 찾기 어려우면 <strong>UX는 낮을 수 있다</strong>. 두 가지는 항상 함께 고려해야 한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: style="color:red"처럼 HTML에 직접 스타일을 넣어도 된다?</div>
    <div class="wda-mistake-right">정답: 이런 방식은 유지보수가 어려워 <strong>스타일은 별도 CSS 파일로 분리</strong>하는 것이 웹 표준 방식이다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 최신 CSS/JS 기능은 모든 브라우저에서 동일하게 동작한다?</div>
    <div class="wda-mistake-right">정답: 브라우저마다 지원 여부가 달라, 특정 브라우저 전용 최신 기능은 <strong>사용 전 호환성을 확인</strong>해야 한다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 웹 구성</div>
    <div class="wda-formula-block-body"><code>HTML + CSS + JS</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 통신 흐름</div>
    <div class="wda-formula-block-body"><code>요청 → DNS → 응답 → 렌더링</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 3 · UI/UX</div>
    <div class="wda-formula-block-body"><code>UI = 보임 · UX = 느낌</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">웹의 3대 구성요소는?</div>
    <div class="wda-flip-back">HTML(구조) + CSS(디자인) + JS(동작)로 구성된다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">인터넷 통신 4단계는?</div>
    <div class="wda-flip-back">요청 → DNS 조회 → 서버 응답 → 브라우저 렌더링 순서로 진행된다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">UI와 UX의 차이는?</div>
    <div class="wda-flip-back">UI는 눈에 보이는 인터페이스 요소, UX는 서비스를 이용하며 느끼는 전체 경험이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">현대적 웹사이트의 6가지 유형은?</div>
    <div class="wda-flip-back">랜딩페이지·홈페이지·쇼핑몰·블로그&위키·SaaS·웹앱이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">HTML과 CSS를 분리해야 하는 이유는?</div>
    <div class="wda-flip-back">유지보수가 쉬워지고, 웹 표준 방식이기 때문이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">브라우저 렌더링 과정은?</div>
    <div class="wda-flip-back">HTML을 파싱해 DOM 트리를 만들고, CSS를 적용해 레이아웃을 계산한 뒤 화면에 그린다.</div>
  </div>
</div>

---

## 🔗 참고 자료

- [MDN Web Docs — HTML 시작하기](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [MDN Web Docs — CSS 첫 번째 단계](https://developer.mozilla.org/ko/docs/Learn/CSS/First_steps)
- [Google Material Design — UX 가이드라인](https://m3.material.io/)
