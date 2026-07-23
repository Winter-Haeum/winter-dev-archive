---
title: "1-2 코딩테스트 플랫폼 소개"
status: "completed"
description: "프로그래머스, 백준, LeetCode 등 주요 코딩테스트 플랫폼의 특징을 비교하고 나에게 맞는 플랫폼을 선택합니다."
category: "Coding Test"
section: "Coding Test"
tags:
  - coding-test
  - programmers
  - leetcode
  - platform
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
.wda-fcard-pro{border-left:3px solid rgba(34,197,94,.22);background:rgba(34,197,94,.02)}
.wda-fcard-con{border-left:3px solid rgba(244,129,110,.28);background:rgba(244,129,110,.025)}
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
.wda-group2{display:flex;flex-wrap:wrap;gap:14px;margin:.8rem 0 1.6rem}
.wda-group{flex:1 1 260px;border:1px solid rgba(128,128,128,.18);border-radius:12px;padding:14px 16px}
.wda-group-ttl{font-size:.92rem;font-weight:700;margin-bottom:10px}
.wda-group .wda-fgrid{margin:0}
.wda-group .wda-fcard{flex:1 1 100%}
.wda-group-domestic{border-left:3px solid rgba(59,130,246,.35);background:rgba(59,130,246,.02)}
.wda-group-overseas{border-left:3px solid rgba(245,158,11,.35);background:rgba(245,158,11,.02)}
.wda-flow{display:flex;flex-wrap:wrap;gap:4px;margin:.8rem 0 1.6rem;align-items:center}
.wda-fnode{flex:1 1 90px;border:1px solid rgba(128,128,128,.18);border-radius:8px;padding:10px 12px;text-align:center;min-width:80px}
.wda-fnode-ico{font-size:1.1rem;margin-bottom:4px}
.wda-fnode-ttl{font-size:.88rem;font-weight:700;margin-bottom:3px}
.wda-fnode-dsc{font-size:.82rem;line-height:1.55}
.wda-farrow{color:rgba(139,92,246,.45);font-size:1.1rem;flex-shrink:0;padding:0 2px;align-self:center}
@media(max-width:600px){.wda-flow{flex-direction:column}.wda-farrow{transform:rotate(90deg)}}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-callout .wda-clabel{font-size:.7rem;line-height:1.3}
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

## 🎯 학습 목표 (Learning Objectives)

<div class="wda-goal">
• <strong>주요 플랫폼 파악</strong> — 프로그래머스, 백준, LeetCode 등 개발자들이 가장 많이 사용하는 주요 플랫폼을 알아봅니다.<br>
• <strong>특징 비교</strong> — 각 플랫폼이 가진 장단점과 고유한 특징을 비교하여 분석합니다.<br>
• <strong>플랫폼 선택</strong> — 나의 현재 실력과 목표 기업에 맞춰 나에게 맞는 플랫폼을 선택할 수 있습니다.<br>
• <strong>시작 준비</strong> — 회원가입부터 첫 문제 풀기까지, 학습을 시작하기 위한 모든 준비를 마칩니다.
</div>

---

## 1. 주요 플랫폼 한눈에 보기 (Platforms Overview)

국내 기업 취업을 목표로 한다면 국내 플랫폼, 글로벌 기업이나 대회를 준비한다면 해외 플랫폼을 주목하세요.

<div class="wda-group2">
  <div class="wda-group wda-group-domestic">
    <div class="wda-group-ttl">📍 국내</div>
    <div class="wda-fgrid">
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">프로그래머스 (Programmers)</div>
        <div class="wda-fcard-dsc">국내 채용 필수: 카카오, 라인 등 대다수 기업이 이용합니다.</div>
      </div>
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">백준 (BOJ)</div>
        <div class="wda-fcard-dsc">알고리즘 특화: 문제 수가 방대하고 국내에서 가장 유명합니다.</div>
      </div>
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">SW Expert Academy</div>
        <div class="wda-fcard-dsc">삼성: 삼성전자 상시 역량테스트 준비에 특화되어 있습니다.</div>
      </div>
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">코드업 (CodeUp)</div>
        <div class="wda-fcard-dsc">입문용: 기초 100제 등 초보자가 연습하기 좋습니다.</div>
      </div>
    </div>
  </div>
  <div class="wda-group wda-group-overseas">
    <div class="wda-group-ttl">🌏 해외</div>
    <div class="wda-fgrid">
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">LeetCode (리트코드)</div>
        <div class="wda-fcard-dsc">글로벌 1위: 해외 취업(구글, 아마존 등) 인터뷰 준비의 표준입니다.</div>
      </div>
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">HackerRank</div>
        <div class="wda-fcard-dsc">기업 채용 연계: 실제 기업의 코딩 인터뷰 환경과 유사합니다.</div>
      </div>
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">CodeForces</div>
        <div class="wda-fcard-dsc">대회 중심: 전 세계 고수들이 경쟁하는 컨테스트 위주입니다.</div>
      </div>
      <div class="wda-fcard">
        <div class="wda-fcard-ttl">AtCoder</div>
        <div class="wda-fcard-dsc">일본: 고난이도 수학적 사고를 요하는 문제가 많습니다.</div>
      </div>
    </div>
  </div>
</div>

---

## 2. 장단점 상세 비교 ① 프로그래머스 (Programmers)

국내 기업 채용 필수 코딩테스트 플랫폼입니다.

**✅ 장점 (Pros)**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">한국어 완벽 지원</div><div class="wda-fcard-dsc">문제 설명부터 해설까지 모두 한국어로 되어 있어 언어 장벽이 없습니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">깔끔한 UI/UX</div><div class="wda-fcard-dsc">별도의 설치 없이 웹에서 바로 코드를 작성하고 실행해볼 수 있는 환경이 매우 쾌적합니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">기업 기출문제 제공</div><div class="wda-fcard-dsc">카카오(Kakao) 등 주요 IT 기업의 실제 기출문제를 풀어볼 수 있습니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">스킬 체크</div><div class="wda-fcard-dsc">내 실력이 어느 정도인지 레벨을 측정해 볼 수 있는 기능이 있습니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">채용 연계</div><div class="wda-fcard-dsc">문제를 풀고 포트폴리오를 등록하면 기업 제안을 받을 수도 있습니다.</div></div>
</div>

**❗ 단점 (Cons)**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">문제 수</div><div class="wda-fcard-dsc"><strong>백준(BOJ)</strong>에 비하면 전체적인 문제 수가 적은 편입니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">난이도 분류</div><div class="wda-fcard-dsc">난이도 분류 기준이 다소 주관적일 때가 있어, 같은 레벨이라도 체감 난이도가 다를 수 있습니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">고급 문제 부족</div><div class="wda-fcard-dsc">대회 준비 등을 위한 아주 어려운 고급 알고리즘 문제는 상대적으로 부족합니다.</div></div>
</div>

**📊 난이도 체계 (Level System)**

입문자는 Lv.0부터 시작하면 됩니다.

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ttl">Lv.0</div><div class="wda-fnode-dsc">기초 문법<br>입문자 (여기서 시작!)</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">Lv.1</div><div class="wda-fnode-dsc">기본 구현<br>입문 ~ 초급</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">Lv.2</div><div class="wda-fnode-dsc">자료구조 활용<br>초급 ~ 중급</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">Lv.3</div><div class="wda-fnode-dsc">알고리즘 응용<br>중급</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ttl">Lv.4-5</div><div class="wda-fnode-dsc">고급 알고리즘<br>상급</div></div>
</div>

---

## 3. 장단점 상세 비교 ② 백준 (BOJ)

국내에서 가장 역사가 깊고 방대한 데이터를 보유한 알고리즘 특화 플랫폼입니다.

**✅ 장점 (Pros)**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">방대한 문제 수</div><div class="wda-fcard-dsc">20,000개가 넘는 압도적인 문제 데이터베이스를 보유하고 있습니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">solved.ac 연동</div><div class="wda-fcard-dsc">커뮤니티가 만든 solved.ac에서 티어(등급), 태그별 문제 분류를 확인할 수 있습니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">다양한 난이도</div><div class="wda-fcard-dsc">완전 입문부터 대회 수준까지 난이도 스펙트럼이 매우 넓습니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">커뮤니티 활성화</div><div class="wda-fcard-dsc">질문 게시판과 다양한 풀이 공유 문화가 잘 형성되어 있습니다.</div></div>
</div>

**❗ 단점 (Cons)**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">불친절한 UI</div><div class="wda-fcard-dsc">사용자 인터페이스가 다소 <strong>올드(Old)</strong>하여 처음 접하면 당황할 수 있습니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">입출력 직접 처리</div><div class="wda-fcard-dsc">프로그래머스와 달리, 입력을 받고 출력을 찍는 코드를 직접 작성해야 합니다. (Node.js/JS 사용자에게는 큰 진입장벽입니다.)</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">언어 장벽</div><div class="wda-fcard-dsc">한글 문제도 많지만, 번역되지 않은 영어 문제도 꽤 섞여 있습니다.</div></div>
</div>

**🏆 solved.ac 티어 (Tier System)**

백준 자체 난이도보다 solved.ac의 티어 구분을 주로 참고합니다.

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ico">🟤</div><div class="wda-fnode-ttl">Bronze</div><div class="wda-fnode-dsc">입문<br>문법 기초 연습</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">⚪</div><div class="wda-fnode-ttl">Silver</div><div class="wda-fnode-dsc">초급<br>기본 자료구조/알고리즘</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">🟡</div><div class="wda-fnode-ttl">Gold</div><div class="wda-fnode-dsc">중급<br>기업 코딩테스트 합격권</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">🟢</div><div class="wda-fnode-ttl">Platinum</div><div class="wda-fnode-dsc">고급<br>고난이도 심화</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">🔵</div><div class="wda-fnode-ttl">Diamond</div><div class="wda-fnode-dsc">최상급<br>알고리즘 대회 입상권</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">🔴</div><div class="wda-fnode-ttl">Ruby</div><div class="wda-fnode-dsc">전문가<br>세계적 수준</div></div>
</div>

---

## 4. 장단점 상세 비교 ③ 리트코드 (LeetCode)

전 세계 개발자들이 가장 많이 사용하는 글로벌 1위 코딩테스트 플랫폼입니다.

**✅ 장점 (Pros)**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">FAANG 면접 필수</div><div class="wda-fcard-dsc">해외 빅테크 기업의 인터뷰 프로세스는 대부분 리트코드를 기반으로 합니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">Discussion (토론)</div><div class="wda-fcard-dsc">전 세계 고수들이 자신의 풀이를 공유하는 공간입니다.<br>단순히 정답을 맞추는 것을 넘어, 가장 효율적인 코드를 배울 수 있는 최고의 학습터입니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">토픽별 분류</div><div class="wda-fcard-dsc">배열, 링크드 리스트, 트리 등 주제별로 문제가 아주 체계적으로 정리되어 있습니다.</div></div>
  <div class="wda-fcard wda-fcard-pro"><div class="wda-fcard-ttl">기업별 통계</div><div class="wda-fcard-dsc">특정 기업(Google, Meta 등)에서 최근 자주 출제된 문제 리스트를 볼 수 있습니다. (일부 유료)</div></div>
</div>

**❗ 단점 (Cons)**

<div class="wda-fgrid">
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">영어 기반</div><div class="wda-fcard-dsc">모든 문제와 해설이 영어로 되어 있습니다. (하지만 개발 용어 위주라 적응하면 어렵지 않습니다.)</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">유료 기능 (Premium)</div><div class="wda-fcard-dsc">기업별 기출 문제나 디버거 등 고급 기능은 유료 결제가 필요합니다.</div></div>
  <div class="wda-fcard wda-fcard-con"><div class="wda-fcard-ttl">국내 기출 부재</div><div class="wda-fcard-dsc">한국 기업 특유의 문제 스타일과는 다소 차이가 있을 수 있습니다.</div></div>
</div>

**📊 난이도 및 활용 팁 (Levels & Tips)**

난이도는 직관적인 3단계 색상으로 구분됩니다.

<div class="wda-flow">
  <div class="wda-fnode"><div class="wda-fnode-ico">🟢</div><div class="wda-fnode-ttl">Easy</div><div class="wda-fnode-dsc">입문~초급<br>여기서 시작하세요!</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">🟡</div><div class="wda-fnode-ttl">Medium</div><div class="wda-fnode-dsc">중급<br>실제 면접에서 가장 많이 나옵니다</div></div>
  <div class="wda-farrow">→</div>
  <div class="wda-fnode"><div class="wda-fnode-ico">🔴</div><div class="wda-fnode-ttl">Hard</div><div class="wda-fnode-dsc">고급<br>변별력을 위한 고난이도</div></div>
</div>

**추천 학습 리스트 (무엇부터 풀까요?)**

<div class="wda-callout wda-ci">
  • <strong>Top 100 Liked</strong>: 유저들에게 가장 좋은 평가를 받은 인기 문제 모음<br>
  • <strong>Blind 75</strong>: 개발자 커뮤니티에서 선정한 '면접 필수 75제'<br>
  • <strong>NeetCode 150</strong>: 체계적인 학습 로드맵을 제공하는 유명한 리스트
</div>

---

## 5. 목적에 맞는 기타 플랫폼 (Other Options)

목표가 뚜렷하거나(삼성, 완전 기초 등) 실력이 뛰어난 분들을 위한 선택지입니다.

| 플랫폼 | 대상 (Target) | 특징 및 장점 (Features) | 비고 |
|---|---|---|---|
| 코드업 (CodeUp) | 완전 입문자 | 기초 문법 연습용으로 아주 좋습니다. "Hello World 출력부터 시작해요!" | codeup.kr |
| SW Expert Academy | 삼성 취준생 | 삼성 SW 역량테스트 대비에 특화되어 있습니다. 실제 기출 스타일 문제를 제공합니다. | swexpertacademy.com |
| HackerRank | 해외 취업 / 기업 채용 | 기업이 직접 테스트를 출제하는 경우가 많습니다. 실제 채용 프로세스를 연습하기 좋습니다. | hackerrank.com |
| CodeForces / AtCoder | 대회 준비 / 실력자 | 정기 대회 중심이며 경쟁적인 환경입니다. 레이팅 시스템이 있으며 난이도가 높습니다. | 고수용 |

---

## 6. 3대 플랫폼 한눈에 비교하기 (Comparison)

프로그래머스, 백준, 리트코드를 항목별로 상세 비교한 표입니다.

| 항목 | 프로그래머스 (국내) | 백준 (알고리즘) | LeetCode (해외) |
|---|---|---|---|
| 언어 | 한국어 | 한국어 | 영어 |
| 문제 수 | 1,000+ | 20,000+ (압도적) | 3,000+ |
| UI 편의성 | ⭐⭐⭐ (쾌적) | ⭐⭐ (다소 올드) | ⭐⭐⭐ (깔끔) |
| 입출력 방식 | 함수 작성 (편함) | 직접 처리 (까다로움) | 함수 작성 (편함) |
| 기업 연계 | 카카오, 네이버 | 대회 위주 | FAANG (빅테크) |
| 난이도 체계 | Lv.0 ~ 5 | solved.ac (티어) | Easy / Medium / Hard |
| 입문자 추천 | ⭐⭐⭐ (강추) | ⭐⭐ | ⭐⭐ |
| 알고리즘 학습 | ⭐⭐ | ⭐⭐⭐ (최고) | ⭐⭐⭐ |

**최종 추천 가이드**

<div class="wda-callout wda-cs">
  • <strong>한국 취업</strong> — 프로그래머스 + 백준 조합이 정석입니다.<br>
  • <strong>해외 취업</strong> — LeetCode 풀이는 필수입니다.<br>
  • <strong>완전 입문자</strong> — 고민하지 말고 프로그래머스 Lv.0부터 시작하세요.
</div>

---

## 7. 나에게 맞는 플랫폼 선택하기 (Recommendation)

나의 현재 실력과 <strong>목표(취업, 해외, 대회 등)</strong>에 따라 주력으로 사용해야 할 플랫폼이 다릅니다.

**👶 완전 입문자라면 (Absolute Beginner)**

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">시작하기</div>
      <div class="wda-sdsc">프로그래머스 Lv.0부터 시작하세요.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">감 익히기</div>
      <div class="wda-sdsc">아주 쉬운 문제로 30문제 정도를 풀며 문제 풀이 감각을 익힙니다.</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">레벨업</div>
      <div class="wda-sdsc">자신감이 붙으면 Lv.1로 넘어가서 본격적인 문제에 도전하세요.</div>
    </div>
  </div>
</div>

**🔎 참고**

<div class="wda-callout wda-ci">
  정말 기초 문법부터 연습이 필요하다면 코드업(CodeUp) 사이트도 좋습니다.
</div>

**💼 취준생이라면 (Job Seeker)**

국내 기업 취업을 본격적으로 준비하는 분들을 위한 로드맵입니다.

• <strong>한국 기업 목표</strong>: 프로그래머스 기출문제(카카오, 202x 공채 등)를 반드시 풀어보세요. 백준에서는 실버~골드 난이도를 목표로 연습하세요.<br>
• <strong>삼성 목표</strong>: SW Expert Academy 사이트 이용이 필수입니다.

**✈️ 해외 취업이라면 (Global Career)**

구글, 아마존 등 해외 빅테크 기업을 목표로 한다면 전략이 다릅니다.

1. 프로그래머스로 기초를 먼저 다집니다.
2. LeetCode Easy 난이도 100문제를 풉니다.
3. LeetCode Medium에 도전하고, Blind 75(필수 75제)를 완주하세요.

**🏆 대회/경쟁이 좋다면 (Competition)**

자신의 한계를 시험하고 랭킹 올리는 재미를 원하신다면 이곳이 맞습니다.

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">백준 + solved.ac</div>
    <div class="wda-fcard-dsc">티어를 올리는 재미가 쏠쏠합니다.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">CodeForces</div>
    <div class="wda-fcard-dsc">정기적으로 열리는 대회에 참가해 보세요.</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ttl">프로그래머스 챌린지</div>
    <div class="wda-fcard-dsc">시즌별로 열리는 챌린지도 좋습니다.</div>
  </div>
</div>

---

## 8. 🚀 프로그래머스 시작 가이드 (Start Guide)

가장 먼저 추천드린 '프로그래머스'를 어떻게 이용하는지 단계별로 정리했습니다.

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">회원가입 (계정 생성)</div>
      <div class="wda-sdsc">
        programmers.co.kr 접속<br>
        소셜 로그인(카카오, 깃허브 등)으로 간편 가입<br>
        프로필 설정 완료하기
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">문제 찾기 (필터 설정)</div>
      <div class="wda-sdsc">
        상단 메뉴에서 "코딩테스트 연습" 클릭<br>
        왼쪽 필터에서 "난이도: Lv.0" 체크<br>
        문제 목록 확인
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">첫 도전 (추천 문제)</div>
      <div class="wda-sdsc">"두 수의 합" · "몫 구하기" · "나이 출력"</div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">기능 활용 (실행 및 제출)</div>
      <div class="wda-sdsc">
        실행: 채점 없이 테스트만 해보기<br>
        제출: 실제 채점 시작<br>
        풀이 보기: 못 풀겠으면 "다른 사람의 풀이" 참고
      </div>
    </div>
  </div>
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>국내 취업은 <strong>프로그래머스(필수) + 백준</strong>, 해외 취업은 <strong>LeetCode</strong>가 핵심 플랫폼이다.</li>
    <li>완전 입문자는 <strong>프로그래머스 Lv.0</strong>부터 시작하는 것이 정석이다.</li>
    <li>백준은 문제 수가 <strong>20,000개 이상</strong>으로 압도적이며, <strong>solved.ac 티어</strong>로 난이도를 참고한다.</li>
    <li>LeetCode는 <strong>영어 기반</strong>이며 FAANG 인터뷰의 표준으로 쓰인다.</li>
    <li>문제 풀이는 <strong>이해 → 계획 → 구현 → 검증</strong>의 4단계를 따른다.</li>
    <li>계획 단계에서는 <strong>의사코드</strong>를 한글로 먼저 작성한다.</li>
  </ul>
</div>

**🧠 헷갈리기 쉬운 것**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 프로그래머스와 백준 중 아무거나 먼저 시작해도 상관없다?</div>
    <div class="wda-mistake-right">정답: 완전 입문자는 UI가 쾌적하고 한국어를 지원하는 <strong>프로그래머스 Lv.0</strong>부터 시작하는 것이 정석이다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 백준도 프로그래머스처럼 함수만 작성하면 된다?</div>
    <div class="wda-mistake-right">정답: 백준은 <strong>입력과 출력을 직접 처리</strong>하는 코드까지 작성해야 해서 진입장벽이 있다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 해외 취업도 국내 플랫폼 연습만으로 충분하다?</div>
    <div class="wda-mistake-right">정답: 해외 빅테크는 <strong>LeetCode 기반 인터뷰</strong>가 표준이라 Easy → Medium 순으로 별도 연습이 필요하다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">오해: 시험 시간에는 문제 순서대로만 풀면 된다?</div>
    <div class="wda-mistake-right">정답: <strong>쉬운 문제로 점수를 먼저 확보</strong>하고, 막히면 넘어갔다가 마지막에 검토하는 전략이 필요하다.</div>
  </div>
</div>

**🧩 풀이 공식**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">풀이 공식 1 · 국내 취업 조합</div>
    <div class="wda-formula-block-body"><code>프로그래머스 + 백준</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">풀이 공식 2 · 해외 취업 루트</div>
    <div class="wda-formula-block-body"><code>프로그래머스 → LeetCode Easy → Medium</code></div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">풀이 공식 3 · 4단계 풀이 순서</div>
    <div class="wda-formula-block-body"><code>이해 → 계획 → 구현 → 검증</code></div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">국내 취업을 준비한다면?</div>
    <div class="wda-flip-back">프로그래머스(필수)와 백준을 함께 준비한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">해외 취업을 준비한다면?</div>
    <div class="wda-flip-back">LeetCode 풀이가 필수이며 Blind 75 같은 리스트를 활용한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">완전 입문자의 시작점은?</div>
    <div class="wda-flip-back">프로그래머스 Lv.0부터 시작한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">백준의 난이도는 무엇으로 참고하나?</div>
    <div class="wda-flip-back">solved.ac의 티어(브론즈~루비) 시스템을 참고한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">삼성 취준생이 꼭 써야 하는 사이트는?</div>
    <div class="wda-flip-back">SW Expert Academy다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">문제 풀이 4단계는?</div>
    <div class="wda-flip-back">이해 → 계획 → 구현 → 검증 순으로 진행한다.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">의사코드는 왜 작성하나?</div>
    <div class="wda-flip-back">로직을 한글로 먼저 정리하면 코드 작성 속도가 빨라진다.</div>
  </div>
</div>
