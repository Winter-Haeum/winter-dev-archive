---
title: "2-3: 데이터 저장소 연결하기"
category: "ai-vibe-coding"
section: "lesson-2"
date: "2026-06-10"
status: "completed"
description: "외부 데이터 서비스에 연결하는 흐름과 연결 정보 관리 원칙을 정리하고, 연결이 성공했는지 확인하는 기준을 익힙니다."
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
  • <strong>연결 흐름 이해</strong> — 외부 데이터 서비스에 연결하는 전체 절차를 파악합니다<br>
  • <strong>연결 정보 관리</strong> — 실제 키·주소 값을 안전하게 다루는 원칙을 익힙니다<br>
  • <strong>연결 확인</strong> — 연결이 성공했는지 판단하는 기준을 정리합니다
</div>

---

## 1. 연결을 위해 준비할 것

[[2-2-db-schema|이전 문서]]에서 설계한 project-table을 실제로 저장할 공간이 필요합니다. 이 문서는 Supabase 같은 외부 데이터 서비스에 연결하는 흐름을 다룹니다. 특정 서비스의 화면 구성은 계속 바뀔 수 있으므로, 이 문서에서는 어떤 도구를 쓰든 공통적으로 거치는 절차와 원칙을 중심으로 정리합니다.

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">데이터 서비스 계정</div><div class="wda-fcard-dsc">표 형태의 데이터를 저장해 주는 외부 서비스의 계정입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">프로젝트(저장 공간)</div><div class="wda-fcard-dsc">테이블들을 담아둘 하나의 저장 공간입니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">연결 정보</div><div class="wda-fcard-dsc">주소와 인증 키처럼, 코드가 저장 공간에 접근할 때 필요한 값입니다.</div></div>
</div>

---

## 2. 연결 흐름

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">1. 계정·저장공간 준비</div><div class="wda-fnode-dsc">서비스 가입 후 저장 공간 하나 생성</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">2. 연결 정보 확인</div><div class="wda-fnode-dsc">서비스 화면에서 주소·키 값 확인</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">3. 코드에 연결</div><div class="wda-fnode-dsc">환경변수 등을 통해 프로젝트와 연결</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">4. 연결 확인</div><div class="wda-fnode-dsc">테이블 목록 조회 등으로 연결 검증</div></div>
</div>

---

## 3. 연결 정보는 어떻게 관리해야 할까

<div class="wda-callout wda-cw">
  <span class="wda-clabel">가장 중요한 원칙</span>
  <p>연결 주소나 인증 키 같은 값은 <strong>코드나 문서에 직접 적지 않습니다.</strong> 별도의 환경변수 파일에 보관하고, 이 파일이 저장소에 함께 올라가지 않도록 제외 목록에 등록합니다.</p>
</div>

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">안전하지 않은 방식</div>
    코드 안에 실제 키 값을 문자열로 그대로 적어 넣거나, 예제 코드에 진짜 값을 붙여넣는 방식입니다.
  </div>
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">안전한 방식</div>
    환경변수 파일에 값을 보관하고, 코드는 "환경변수에서 값을 읽어온다"고만 작성하는 방식입니다.
  </div>
</div>

AI에게 연결 작업을 요청할 때도 마찬가지입니다. 실제 키 값을 대화창에 붙여넣지 말고, "발급받은 연결 정보를 환경변수에서 읽어와 연결해줘" 처럼 값을 직접 노출하지 않는 방식으로 요청합니다.

---

## 4. 연결이 성공했는지 확인하는 기준

<div class="wda-fgrid">
  <div class="wda-fcard"><div class="wda-fcard-ttl">목록 조회 성공</div><div class="wda-fcard-dsc">만들어 둔 테이블 목록을 코드나 도구에서 정상적으로 불러올 수 있습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">에러 메시지 없음</div><div class="wda-fcard-dsc">연결 시도 시 인증 실패나 주소 오류 같은 메시지가 나타나지 않습니다.</div></div>
  <div class="wda-fcard"><div class="wda-fcard-ttl">테이블 이름 확인</div><div class="wda-fcard-dsc">2-2 문서에서 설계한 이름 그대로 테이블이 보입니다.</div></div>
</div>

---

## 5. 연결이 안 될 때 점검 순서

<div class="wda-check-note">
  <ul>
    <li>환경변수 파일에 값이 <strong>정확히 저장</strong>되어 있는지 확인합니다.</li>
    <li>연결 정보를 발급받은 서비스 화면에서 값이 <strong>바뀌지 않았는지</strong> 다시 확인합니다.</li>
    <li>도구나 코드를 재시작해 <strong>환경변수를 새로 읽어오게</strong> 합니다.</li>
    <li>그래도 안 되면 에러 메시지를 그대로 AI에게 전달해 원인을 함께 확인합니다.</li>
  </ul>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>연결은 <strong>계정·저장공간 준비 → 연결 정보 확인 → 코드에 연결 → 연결 확인</strong> 순서로 진행된다.</li>
    <li>연결 정보(주소·키)는 <strong>코드나 문서에 직접 적지 않고</strong> 환경변수로 관리한다.</li>
    <li>환경변수 파일은 <strong>저장소 제외 목록에 등록</strong>해 공개 저장소에 올라가지 않도록 한다.</li>
    <li>연결 성공 여부는 <strong>목록 조회 성공 · 에러 없음 · 테이블 이름 일치</strong>로 확인한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 예제 코드에는 실제 키 값을 넣어야 이해하기 쉽다?</div>
    <div class="wda-mistake-right">정답: 실제 값 대신 <strong>환경변수에서 읽어온다는 표현</strong>만으로도 충분하며, 실제 값을 남기면 보안 위험이 생긴다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 도구의 특정 화면 위치나 버튼 이름을 외워야 한다?</div>
    <div class="wda-mistake-right">정답: 화면 구성은 서비스마다, 시기마다 바뀔 수 있으므로 <strong>연결 절차의 흐름과 원칙</strong>을 이해하는 것이 더 중요하다.</div>
  </div>
</div>

**🎯 최종 암기 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 1 · 연결 순서</div>
    <div class="wda-formula-block-body"><code>계정 준비 → 정보 확인 → 코드 연결 → 연결 확인</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">공식 2 · 보안 원칙</div>
    <div class="wda-formula-block-body"><code>실제 키는 코드 아닌 환경변수에</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">데이터 서비스 연결의 4단계는?</div>
    <div class="wda-flip-back">계정·저장공간 준비 → 연결 정보 확인 → 코드에 연결 → 연결 확인이다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">연결 정보는 어디에 보관해야 하나?</div>
    <div class="wda-flip-back">코드나 문서가 아니라 별도의 환경변수 파일에 보관한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">연결 성공 여부는 어떻게 확인하나?</div>
    <div class="wda-flip-back">테이블 목록 조회가 되고, 에러가 없으며, 설계한 테이블 이름이 그대로 보이는지 확인한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">연결이 안 될 때 가장 먼저 확인할 것은?</div>
    <div class="wda-flip-back">환경변수 파일에 값이 정확히 저장되어 있는지 확인한다.</div>
  </div>
</div>
