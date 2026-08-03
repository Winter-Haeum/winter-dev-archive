---
title: "3-2: 모바일 친화 레이아웃 요청하기"
category: "ai-vibe-coding"
section: "lesson-3"
date: "2026-06-11"
status: "completed"
description: "포트폴리오 화면을 모바일에서도 읽기 좋게 만들기 위한 점검 기준을 정리하고, AI에게 레이아웃 수정을 요청하는 방법을 익힙니다."
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
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px;font-size:.89rem;line-height:1.65;background:rgba(128,128,128,.03);box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-compare-ttl{font-size:.92rem;font-weight:700;line-height:1.5;margin-bottom:8px}
.wda-flow{display:flex;flex-wrap:wrap;gap:4px;margin:.8rem 0 1.6rem;align-items:flex-start}
.wda-fnode{flex:1 1 90px;border:1px solid rgba(128,128,128,.18);border-radius:8px;padding:10px 12px;text-align:center;min-width:80px}
.wda-fnode-ttl{font-size:.88rem;font-weight:700;margin-bottom:3px}
.wda-fnode-dsc{font-size:.82rem;line-height:1.55}
.wda-farrow{color:rgba(139,92,246,.45);font-size:1.1rem;flex-shrink:0;padding:0 2px;align-self:center}
@media(max-width:600px){.wda-flow{flex-direction:column;align-items:center}.wda-farrow{transform:rotate(90deg)}}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
table.wda-mtable{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
table.wda-mtable th,table.wda-mtable td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
table.wda-mtable th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
table.wda-mtable tr:nth-child(even) td{background:rgba(128,128,128,.025)}
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
  • <strong>모바일 점검 기준</strong> — 섹션 순서·카드 크기·버튼 위치·읽기 흐름을 점검하는 기준을 익힙니다<br>
  • <strong>수정 요청 흐름</strong> — 검토부터 재검토까지 이어지는 흐름을 이해합니다<br>
  • <strong>AI 요청문 작성</strong> — 모바일 레이아웃 수정을 구체적으로 요청하는 법을 익힙니다
</div>

---

## 1. 모바일에서 자주 확인하는 항목

[[3-1-web-vs-app|이전 문서]]에서 반응형 사고방식을 이해했다면, 이번에는 responsive-portfolio, 즉 lesson-1에서 만든 포트폴리오 화면을 모바일 기준으로 실제 점검하고 수정을 요청할 차례입니다. 새로운 화면을 기획하는 것이 아니라, 이미 있는 화면을 모바일에서도 읽기 좋게 다듬는 것이 이 문서의 목표입니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">섹션 순서</div><div class="wda-fcard-dsc">가장 먼저 봐야 할 정보가 화면 위쪽에 오는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">카드 크기</div><div class="wda-fcard-dsc">좁은 화면에서 카드가 너무 작아지거나 글자가 잘리지 않는지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">버튼 위치(터치 영역)</div><div class="wda-fcard-dsc">손가락으로 누르기 충분한 크기와 간격인지 확인합니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">읽기 흐름</div><div class="wda-fcard-dsc">위에서 아래로 훑어볼 때 내용이 자연스럽게 이어지는지 확인합니다.</div></div>
</div>

---

## 2. 터치 영역 체크리스트

<table class="wda-mtable">
<thead><tr><th>확인 항목</th><th>기준</th></tr></thead>
<tbody>
<tr><td>버튼 크기</td><td>손가락으로 정확히 누를 수 있을 만큼 충분히 큰지</td></tr>
<tr><td>버튼 간 간격</td><td>인접한 버튼을 잘못 누르지 않을 만큼 떨어져 있는지</td></tr>
<tr><td>링크 영역</td><td>텍스트 링크가 너무 좁게 잡혀 있지 않은지</td></tr>
<tr><td>스크롤 흐름</td><td>세로 스크롤 한 방향으로 자연스럽게 이어지는지</td></tr>
</tbody>
</table>

---

## 3. 검토 → 요청 흐름

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 기존 화면 확인</div><div class="wda-fnode-dsc">데스크톱 기준으로 만든 화면 확인</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 작은 화면 검토</div><div class="wda-fnode-dsc">모바일 크기에서 문제점 찾기</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 우선순위 조정</div><div class="wda-fnode-dsc">먼저 보여줄 정보 정리</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">4. 수정 요청</div><div class="wda-fnode-dsc">AI에게 구체적으로 요청</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">5. 재검토</div><div class="wda-fnode-dsc">수정된 화면 다시 확인</div></div>
</div>

---

## 4. AI에게 모바일 레이아웃 수정 요청하기

```
목표:
- 기존 포트폴리오 화면을 모바일에서도 보기 좋게 정리하고 싶습니다.

현재 상황:
- 데스크톱 화면에서는 섹션 구성이 잘 보입니다.
- 작은 화면에서는 카드 간격과 버튼 위치를 다시 확인해야 합니다.

제약:
- 새로운 기능을 추가하지 말고 레이아웃 검토부터 해주세요.
- 배포나 도메인 설정은 아직 다루지 않습니다.

출력 형식:
1. 모바일에서 확인된 문제
2. 우선 수정할 레이아웃
3. 수정 요청문
4. 다시 확인할 체크리스트
```

**⚠️ 주의사항**

<div class="wda-callout wda-cw">
  <p>위 예시는 방향을 보여주는 참고용입니다. 실제로 요청할 때는 <strong>지금 화면에서 실제로 확인된 문제</strong>를 구체적으로 채워 넣습니다.</p>
</div>

---

## 5. 결과는 반드시 실제 크기에서 검토

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">생성 결과 그대로 사용</div>
    AI가 수정한 화면을 코드만 보고 "됐다"고 넘어가면, 실제 작은 화면에서 깨지는 부분을 놓칠 수 있습니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">실제 크기에서 검토</div>
    실제 기기나 화면 크기 검사 도구로 직접 확인한 뒤, 문제가 남아 있으면 다시 구체적으로 요청합니다.
  </div>
</div>

---

## 6. 반응형 실수 카드

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">텍스트 겹침</div><div class="wda-fcard-dsc">글자 크기는 그대로인데 영역만 좁아져 줄바꿈이 깨지는 경우입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">버튼 잘림</div><div class="wda-fcard-dsc">버튼이 화면 밖으로 밀려나거나 일부가 가려지는 경우입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">가로 스크롤 발생</div><div class="wda-fcard-dsc">의도하지 않은 요소가 화면 폭을 넘어 가로 스크롤이 생기는 경우입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">이미지 비율 깨짐</div><div class="wda-fcard-dsc">이미지가 눌리거나 늘어나 비율이 어색해지는 경우입니다.</div></div>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>모바일 점검은 <strong>섹션 순서·카드 크기·버튼 위치·읽기 흐름</strong> 네 가지를 기본으로 확인한다.</li>
    <li>수정은 <strong>기존 화면 확인 → 작은 화면 검토 → 우선순위 조정 → 수정 요청 → 재검토</strong> 순서로 진행한다.</li>
    <li>AI 요청에는 <strong>목표·현재 상황·제약·출력 형식</strong>을 구체적으로 담는다.</li>
    <li>수정 결과는 <strong>실제 기기나 검사 도구</strong>로 재검토해야 한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: "예쁘게 모바일에 맞게 고쳐줘"라고만 요청해도 충분하다?</div>
    <div class="wda-mistake-right">정답: 지금 화면에서 실제로 확인된 <strong>구체적인 문제와 제약</strong>을 함께 전달해야 원하는 결과를 얻을 수 있다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: AI가 수정해주면 그걸로 끝이다?</div>
    <div class="wda-mistake-right">정답: 수정 후에도 <strong>실제 크기에서 재검토</strong>해야 텍스트 겹침이나 버튼 잘림 같은 문제를 놓치지 않는다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 점검 항목</div>
    <div class="wda-formula-block-body"><code>섹션 순서·카드 크기·버튼 위치·읽기 흐름</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 요청 흐름</div>
    <div class="wda-formula-block-body"><code>확인 → 검토 → 조정 → 요청 → 재검토</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">모바일에서 기본으로 확인할 네 가지는?</div>
    <div class="wda-flip-back">섹션 순서, 카드 크기, 버튼 위치(터치 영역), 읽기 흐름이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">모바일 레이아웃 요청문에는 무엇을 담아야 하나?</div>
    <div class="wda-flip-back">목표, 현재 상황, 제약, 출력 형식을 구체적으로 담는다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">수정 결과를 어떻게 확인해야 하나?</div>
    <div class="wda-flip-back">실제 기기나 화면 크기 검사 도구로 직접 재검토해야 한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">자주 발생하는 반응형 실수는?</div>
    <div class="wda-flip-back">텍스트 겹침, 버튼 잘림, 가로 스크롤 발생, 이미지 비율 깨짐이다.</div>
  </div>
</div>
