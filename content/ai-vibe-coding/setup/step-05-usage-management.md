---
title: "5단계: Claude Code 사용량 관리 및 무제한 활용 가이드"
category: "ai-vibe-coding"
section: "setup"
description: "실시간 사용량 확인, Wallet 자동 충전 설정까지 수업을 끊김 없이 진행하는 Claude Code 사용량 관리 방법을 익힌다."
tags:
  - ai-vibe-coding
  - setup
  - claude-code
  - usage
  - wallet
date: "2026-06-08"
status: "completed"
---

<style>
.wda-callout{border-radius:10px;padding:12px 15px;margin:.8rem 0 1.4rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
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
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-done{border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:16px 20px;margin:.8rem 0 1.4rem;background:rgba(34,197,94,.04);text-align:center;font-size:.82rem;line-height:1.6}
.wda-done-ico{font-size:1.8rem;margin-bottom:6px}
.wda-done-ttl{font-size:1rem;font-weight:700;color:#22c55e;margin-bottom:4px}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(139,92,246,.12);color:#8b5cf6;font-size:.8rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
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
@media (max-width:640px){
.wda-deco{max-width:55px !important}
.wda-char{max-width:110px !important}
.wda-goal,.wda-callout,.wda-done,.wda-memo,.wda-steps{padding-left:16px !important;padding-right:16px !important}
}
@media (max-width:554px){
.wda-char{display:none !important}
}
</style>

## 🎯 학습 목표

<div class="wda-goal">
  ⏱️ <strong>사용량 이해</strong> — Pro Plan 제한 구조와 현황 파악<br>
  📊 <strong>실시간 확인</strong> — 사용량 모니터링 방법 습득<br>
  💳 <strong>Wallet 설정</strong> — 자동 충전으로 수업 중단 없이 활용
</div>

---

## 📖 개념 설명

### 1. Pro Plan 사용량 제한이란?

Claude Code Pro Plan($20/월)은 다음과 같은 사용량 제한이 있습니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ico">⏱️</div><div class="wda-fcard-ttl">5시간당 제한</div><div class="wda-fcard-dsc">약 10~40개 프롬프트</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">📅</div><div class="wda-fcard-ttl">주간 제한</div><div class="wda-fcard-dsc">40~80시간 Sonnet 4 사용</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ico">🔗</div><div class="wda-fcard-ttl">공유 사용량</div><div class="wda-fcard-dsc">웹 Claude와 사용량 공유</div></div>
</div>

<div class="wda-callout wda-cy">
  <span class="wda-clabel">사용량이 공유된다는 것은?</span>
  <code>claude.ai</code> 웹사이트에서 대화를 나누는 것과 Claude Code CLI에서 사용하는 것이 동일한 월간 사용량 풀을 나눠 씁니다.<br>
  웹에서 많이 사용했다면 Claude Code에서 사용할 수 있는 양이 줄어들 수 있습니다.
</div>

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  수업 중 제한에 도달하면 일시적으로 Claude Code 사용이 중단될 수 있습니다.
</div>

---

### 2. 실시간 사용량 확인하기

수업 중 현재 사용량을 `claude.ai/settings/usage`에서 실시간으로 확인할 수 있습니다.

확인 가능한 정보: **현재 사용량** (n% 사용 중) · **초기화 시간** (n시간 n분 후 리셋) · **주간 사용량** (주간 한도 대비 현황)

**✅ 권장 방식**

<div class="wda-callout wda-cs">
  수업 시작 전에 사용량 페이지를 확인하여 충분한 여유가 있는지 체크하는 것을 권장합니다.
</div>

---

## ⚙️ 동작 원리

### 사용량 초과 → Wallet 자동 충전 흐름

Pro Plan 구독 한도 초과 시, Wallet에 잔액이 있으면 자동으로 차감하여 계속 사용할 수 있습니다.

<div class="wda-callout wda-ci">
  <span class="wda-clabel">흐름</span>Pro Plan 한도 도달 → Wallet 잔액 자동 차감 (설정 시) → 수업 중단 없이 계속 사용 가능
</div>

<div class="wda-callout wda-cy">
  <span class="wda-clabel">Wallet이란?</span>
  Claude 계정에 충전해두는 선불 크레딧입니다.<br>
  Pro Plan 구독 한도를 초과해도 Wallet 잔액이 있으면 API 사용량처럼 과금되면서 계속 사용할 수 있습니다.<br>
  자동 충전 설정을 켜두면 잔액 부족 시 자동으로 재충전됩니다.
</div>

### 5시간 제한 초기화 방식

사용량 제한은 **롤링 방식(rolling window)**으로 초기화됩니다. 즉, 고정된 시각에 리셋되는 것이 아니라 처음 사용 시점부터 5시간이 지나면 해당 사용량이 해제됩니다. 사용량 페이지의 "초기화 시간"을 통해 언제 여유가 생기는지 확인할 수 있습니다.

---

## 💻 예제 코드

### 3. Wallet 자동 충전 설정하기 (권장)

구독 한도 초과 시 자동으로 Wallet에서 충전하여 수업을 중단 없이 계속 진행할 수 있습니다.

<div class="wda-callout wda-cs">
  <span class="wda-clabel">설정 순서</span>
  1. <strong>설정 페이지 이동</strong> — <code>claude.ai/settings/usage</code> 접속<br>
  2. <strong>추가 사용량 옵션 활성화</strong> — "추가 사용량 한도에 도달했을 때 Claude를 계속 사용하려면 추가 사용량을 켜세요." 활성화<br>
  3. <strong>추가 사용량 구매</strong> — '추가사용량 구매' 버튼 클릭
</div>

---

## ⚠️ 주의사항

### 사용량 관련 주의사항

| 상황 | 주의 사항 |
|------|-----------|
| **웹 Claude 병행 사용** | 웹과 CLI가 사용량을 공유하므로, 수업 전 웹에서의 과도한 사용을 줄이는 것이 좋습니다. |
| **Wallet 자동 충전** | 자동 충전을 활성화하면 한도 초과 시 추가 비용이 발생합니다. 월 예산을 고려하여 설정하세요. |
| **수업 직전 확인** | 사용량이 80% 이상이면 수업 중 중단될 수 있으므로, 초기화 시간을 확인하거나 Wallet을 준비해두세요. |

---

## 📝 핵심 정리

<div class="wda-memo">
  <span class="wda-memo-label">📋 Pro Plan 사용량 요약</span>
  <div class="wda-memo-body">
    ⏱️ <strong>5시간당 제한</strong> — 약 10~40개 프롬프트<br>
    📅 <strong>주간 제한</strong> — 40~80시간 Sonnet 4 사용<br>
    🔗 <strong>사용량 공유</strong> — 웹 Claude와 동일 풀 공유<br>
    📊 <strong>사용량 확인</strong> — <code>claude.ai/settings/usage</code><br>
    💳 <strong>초과 대응</strong> — Wallet 자동 충전 설정
  </div>
</div>

### 수업 전 체크리스트

- [ ] `claude.ai/settings/usage` 에서 사용량 확인
- [ ] 초기화 시간 확인 (한도 가까우면 대기 또는 Wallet 준비)
- [ ] Wallet 자동 충전 활성화 여부 확인

<div class="wda-done">
  <div class="wda-done-ico">🚀</div>
  <div class="wda-done-ttl">사용량 관리 준비 완료!</div>
  <div>이제 수업 중 어떤 상황에서도 중단 없이 Claude Code를 활용할 수 있습니다.<br>준비된 개발 환경으로 React 개발의 세계를 탐험해보세요!</div>
</div>

---

## 🔗 참고 자료

- [Claude 사용량 설정 페이지](https://claude.ai/settings/usage)
- [Anthropic 요금제 안내](https://www.anthropic.com/pricing)
