---
title: "4-5: 가비아 커스텀 도메인 연결하기"
category: "ai-vibe-coding"
section: "lesson-4"
description: "강사가 준비한 가비아 500원 특가 도메인을 활용하여 포트폴리오에 전문적인 커스텀 도메인을 연결합니다."
tags:
  - ai-vibe-coding
  - lesson-4
  - domain
  - github-pages
  - dns
  - gabia
date: "2026-06-29"
status: "completed"
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
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 150px;background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-done{border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:16px 20px;margin:.8rem 0 1.4rem;background:rgba(34,197,94,.04);text-align:center;font-size:.82rem;line-height:1.6}
.wda-done-ico{font-size:1.8rem;margin-bottom:6px}
.wda-done-ttl{font-size:1rem;font-weight:700;color:#22c55e;margin-bottom:4px}
.wda-steps{background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(139,92,246,.12);color:#8b5cf6;font-size:.8rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-sdsc ul{margin:.4rem 0 0;padding-left:1.1rem}
.wda-prompt-head{background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.22);border-bottom:none;border-radius:10px 10px 0 0;padding:8px 14px;font-size:.78rem;font-weight:700;color:#8b5cf6;letter-spacing:.03em}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:13px 18px;margin:.8rem 0 1.6rem;font-size:.79rem;line-height:1.75}
.wda-goal-label{font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#22c55e;display:block;margin-bottom:10px}
.wda-compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:.8rem 0 1.6rem}
@media(max-width:600px){.wda-compare{grid-template-columns:1fr}}
.wda-compare-card{background:rgba(128,128,128,.03);border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:14px 16px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.wda-compare-ttl{font-size:.84rem;font-weight:700;margin-bottom:8px}
.wda-compare-ex{font-size:.76rem;font-family:monospace;background:rgba(128,128,128,.07);padding:4px 8px;border-radius:6px;margin-bottom:8px;word-break:break-all;line-height:1.5}
.wda-compare-label{font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin-bottom:2px}
.wda-compare-pro{font-size:.78rem;color:#22c55e;margin-bottom:4px;line-height:1.5}
.wda-compare-con{font-size:.78rem;color:#ef4444;line-height:1.5}
.wda-trouble-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin:.8rem 0 1.4rem}
.wda-trouble-card{border:1px solid rgba(245,158,11,.22);border-radius:10px;padding:13px 15px;background:rgba(245,158,11,.025)}
.wda-trouble-ttl{font-size:.82rem;font-weight:700;margin-bottom:8px;color:#f59e0b}
.wda-trouble-row{display:flex;gap:8px;font-size:.78rem;line-height:1.5;margin-bottom:4px}
.wda-trouble-key{font-size:.69rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#8b5cf6;min-width:28px;flex-shrink:0;padding-top:1px}
.wda-confirm{background:rgba(34,197,94,.04);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 15px;margin:.8rem 0 1.4rem;font-size:.81rem;line-height:1.7}
.wda-confirm code{background:rgba(128,128,128,.1);padding:1px 5px;border-radius:4px;font-size:.85em}
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
.wda-goal,.wda-callout,.wda-done,.wda-memo,.wda-steps,.wda-fgrid{padding-left:16px !important;padding-right:16px !important}
}
@media (max-width:554px){
.wda-char{display:none !important}
}
</style>

강사가 준비한 가비아 500원 특가 도메인을 활용하여 포트폴리오에 전문적인 커스텀 도메인을 연결합니다. GitHub Pages 기본 도메인에서 여러분만의 고유한 도메인으로 업그레이드해보세요!

## 🎯 학습 목표

<div class="wda-goal">
  <span class="wda-goal-label">이번 챕터 목표</span>
  • <strong>전문적인 포트폴리오</strong> — 개인 도메인으로 브랜드 이미지 향상<br>
  • <strong>실무 DNS 설정</strong> — A레코드, CNAME 등 실제 도메인 관리 경험<br>
  • <strong>SSL 인증서 적용</strong> — HTTPS 보안 연결 자동 설정<br>
  • <strong>문제 해결 능력</strong> — 도메인 연결 시 발생하는 이슈 대응법
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;padding-left:58px;">
  <h2>🌐 커스텀 도메인의 중요성</h2>
</div>

포트폴리오에서 커스텀 도메인은 전문성과 신뢰도를 보여주는 핵심 요소입니다. 취업 지원 시 훨씬 더 인상적인 첫인상을 만들 수 있어요!

<div class="wda-callout wda-ci">
  <span class="wda-clabel">수업 진행 방식</span>
  강사가 미리 구매해둔 가비아 500원 특가 도메인을 활용하여 실시간으로 커스텀 도메인 연결 과정을 시연합니다. 실무에서 가장 많이 사용하는 방법이에요!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 .5rem;">
  <h2>📊 도메인 연결 전후 비교</h2>
</div>

<div class="wda-compare">
  <div class="wda-compare-card">
    <div class="wda-compare-ttl">기본 GitHub Pages 도메인</div>
    <div class="wda-compare-label">예시</div>
    <div class="wda-compare-ex">username.github.io/my-portfolio</div>
    <div class="wda-compare-label">장점</div>
    <div class="wda-compare-pro">✓ 무료, 즉시 사용 가능</div>
    <div class="wda-compare-label">단점</div>
    <div class="wda-compare-con">✗ 길고 복잡, 기억하기 어려움</div>
  </div>
  <div class="wda-compare-card" style="border-color:rgba(34,197,94,.25);background:rgba(34,197,94,.025);">
    <div class="wda-compare-ttl">커스텀 도메인</div>
    <div class="wda-compare-label">예시</div>
    <div class="wda-compare-ex">www.myportfolio.co.kr</div>
    <div class="wda-compare-label">장점</div>
    <div class="wda-compare-pro">✓ 전문적, 기억하기 쉬움, 브랜딩</div>
    <div class="wda-compare-label">단점</div>
    <div class="wda-compare-con">✗ 연간 약 1만원 비용</div>
  </div>
</div>

---

## 🛠️ 단계별 설정 가이드

가비아 도메인을 GitHub Pages와 연결하는 전체 과정을 4단계로 나누어 진행합니다:

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody">
      <div class="wda-sttl">GitHub Pages 도메인 설정</div>
      <div class="wda-sdsc">GitHub 저장소 Settings에서 도메인을 추가합니다:
        <ul>
          <li>저장소 Settings → Pages</li>
          <li>Custom domain에 도메인 입력</li>
          <li>구매한 도메인 입력 (예: myportfolio.co.kr)</li>
          <li>Save 버튼 클릭</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody">
      <div class="wda-sttl">가비아 A레코드 설정</div>
      <div class="wda-sdsc">가비아 DNS 관리툴에서 A레코드를 설정합니다:
        <ul>
          <li>가비아 로그인 → My 가비아 → 도메인</li>
          <li>DNS 관리툴 → "설정" 클릭</li>
          <li>A 레코드: 185.199.108~111.153 (4개)</li>
          <li>CNAME 레코드: www → username.github.io. (끝에 점 필수!)</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody">
      <div class="wda-sttl">DNS 전파 대기</div>
      <div class="wda-sdsc">DNS 전파까지 잠시 기다립니다:
        <ul>
          <li>일반적으로 10분~2시간 소요</li>
          <li>nslookup 명령어로 확인 가능</li>
          <li>GitHub Pages에서 도메인 상태 체크</li>
          <li>인내심을 가지고 기다리기!</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody">
      <div class="wda-sttl">HTTPS 자동 활성화</div>
      <div class="wda-sdsc">SSL 인증서가 자동으로 발급됩니다:
        <ul>
          <li>Let's Encrypt 무료 SSL 자동 발급</li>
          <li>최대 24시간 후 https:// 접속 가능</li>
          <li>"Enforce HTTPS" 체크박스 활성화</li>
          <li>저장소에 CNAME 파일 자동 생성</li>
        </ul>
      </div>
    </div>
  </div>
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;padding-left:58px;">
  <h2>💻 상세 설정 코드</h2>
</div>

실제 설정에서 사용할 정확한 값들을 정리해드렸습니다:

<div class="wda-prompt-head">가비아 DNS 관리툴 설정값</div>

```
가비아 DNS 관리툴 설정값:

1. A 레코드 (루트 도메인용 - 4개 모두 추가):
   Type: A (IPv4 address)
   Host: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   TTL: 3600

2. CNAME 레코드 (www 서브도메인용):
   Type: CNAME
   Host: www
   Value: username.github.io.  (끝에 반드시 점(.) 붙이기!)
   TTL: 3600

* 가비아에서는 CNAME 값 끝에 점(.)을 붙여야 정상 동작합니다!
* username 부분은 실제 GitHub 사용자명으로 변경하세요!
```

**GitHub Pages 설정**

<div class="wda-prompt-head">GitHub Pages 도메인 설정 순서</div>

```
GitHub Pages 도메인 설정 순서:

1. 저장소 - Settings - Pages
2. Custom domain에 도메인 입력 (예: www.myportfolio.co.kr)
3. Save 클릭 - DNS 검증 시작
4. DNS 전파 대기 (10분~24시간)
5. "Enforce HTTPS" 체크박스 활성화
6. 저장소 루트에 CNAME 파일 자동 생성 확인

완료 후 https://www.여러분도메인.co.kr 접속 확인!
```

---

<div class="wda-callout wda-cs">
  <span class="wda-clabel">강사 실시간 시연</span>
  지금부터 실제 가비아 도메인을 사용해서 전체 과정을 라이브로 시연하겠습니다!<br>
  각 단계별로 화면을 보면서 따라해보세요.
</div>

---

<div style="overflow:visible;margin:1.5rem 0 0.5rem;">
  <h2 style="overflow:visible;"><span style="position:relative;display:inline-block;white-space:nowrap;">📋 Claude에게 복사해서 붙여넣기</span></h2>
</div>

아래 프롬프트를 통째로 복사해서 Claude에게 붙여넣으면, 커스텀 도메인 설정을 도와줍니다. 우측 상단 Copy 버튼을 클릭하세요!

<div class="wda-prompt-head">💬 Claude 프롬프트</div>

```
아래의 방법을 사용해서 현재 my-portfolio가 배포된 git pages링크에 도메인을 설정해줘

연결할 도메인 : [ 내가 발급한 도메인 ]

우선 너가 진행할수 있는 작업을 먼저 모두 진행한 후에

최종적으로 내가 도메인을 발급한 가비아에서 설정해서 와야하는 것을 깔끔하게
```

<div class="wda-callout wda-ci" style="margin-top:0;border-radius:0 0 10px 10px;border-top:none;">
  원본 UI에서 이 프롬프트 전체 내용은 "Show full content (58 lines)" 버튼으로 펼쳐볼 수 있습니다.
</div>

**사용 방법**

위 프롬프트를 복사한 뒤, `your-username`, `your-domain.com`, `{owner}`, `{repo}` 부분을 본인의 정보로 바꿔서 Claude에게 보내주세요!

---

가비아에서 DNS 레코드 설정까지 완료한 후, 아래 프롬프트를 Claude에게 붙여넣어 상태를 확인하세요:

<div class="wda-prompt-head">💬 Claude 프롬프트 — 설정 후 확인용</div>

```
가비아에서 DNS 설정 완료했어. 아래 명령어로 도메인 연결 상태를 확인해줘.

# 1. GitHub Pages 설정 확인
gh api repos/{owner}/{repo}/pages

# 2. DNS 전파 확인 (A 레코드)
nslookup 내도메인.co.kr

# 3. HTTPS 접속 테스트
curl -I https://내도메인.co.kr

결과를 보고 정상인지, 문제가 있으면 어떻게 해결하면 되는지 알려줘.
```

**확인 포인트**

<div class="wda-confirm">
  <code>gh api</code>에서 <code>cname</code> 값 표시, <code>nslookup</code>에서 <code>185.199.108~111.153</code> IP 표시, <code>curl</code>에서 <code>HTTP/2 200</code> 응답이 나오면 정상입니다!
</div>

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;padding-left:58px;">
  <h2>🆘 문제 해결 가이드</h2>
</div>

커스텀 도메인 연결 시 자주 발생하는 문제와 해결 방법:

<div class="wda-trouble-grid">
  <div class="wda-trouble-card">
    <div class="wda-trouble-ttl">도메인 접속 불가</div>
    <div class="wda-trouble-row"><span class="wda-trouble-key">원인</span><span>DNS 전파 미완료</span></div>
    <div class="wda-trouble-row"><span class="wda-trouble-key">해결</span><span>2-24시간 추가 대기, nslookup으로 DNS 확인</span></div>
  </div>
  <div class="wda-trouble-card">
    <div class="wda-trouble-ttl">SSL 인증서 오류</div>
    <div class="wda-trouble-row"><span class="wda-trouble-key">원인</span><span>DNS 설정 오류 또는 전파 미완료</span></div>
    <div class="wda-trouble-row"><span class="wda-trouble-key">해결</span><span>A 레코드 4개 모두 확인, GitHub에서 재검증</span></div>
  </div>
  <div class="wda-trouble-card">
    <div class="wda-trouble-ttl">404 Not Found</div>
    <div class="wda-trouble-row"><span class="wda-trouble-key">원인</span><span>CNAME 파일 누락 또는 빌드 오류</span></div>
    <div class="wda-trouble-row"><span class="wda-trouble-key">해결</span><span>저장소 루트에 CNAME 파일 확인, 재배포</span></div>
  </div>
  <div class="wda-trouble-card">
    <div class="wda-trouble-ttl">가비아 DNS 오류</div>
    <div class="wda-trouble-row"><span class="wda-trouble-key">원인</span><span>잘못된 IP 주소나 형식 오류</span></div>
    <div class="wda-trouble-row"><span class="wda-trouble-key">해결</span><span>185.199.108~111.153 정확히 입력, TTL 3600 설정</span></div>
  </div>
</div>

<div class="wda-callout wda-cw">
  <span class="wda-clabel">CNAME 주의</span>
  가비아에서 CNAME 값 끝에 점(.)을 반드시 붙여야 합니다! (예: <code style="font-size:.9em;background:rgba(128,128,128,.12);padding:1px 5px;border-radius:4px;">username.github.io.</code>)
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">도메인 설정 팁</span>
  www 서브도메인을 사용하면 쿠키 문제를 방지하고 SEO에도 유리합니다!<br>
  저장소에 자동 생성된 CNAME 파일은 삭제하지 마세요.
</div>

---

## ✅ 핵심 요약

**📌 먼저 외울 것**

<div class="wda-check-note">
  <ul>
    <li>GitHub Pages Custom domain 설정 → 가비아 A레코드/CNAME 설정 → DNS 전파 대기 → HTTPS 자동 활성화, <strong>4단계</strong>로 진행한다</li>
    <li>A 레코드는 <strong>185.199.108~111.153 네 개를 모두</strong> 등록해야 한다</li>
    <li>가비아 CNAME 값 끝에는 반드시 <strong>점(.)</strong>을 붙여야 한다 (예: username.github.io.)</li>
  </ul>
</div>

**🧠 실수 방지 체크**

<div class="wda-mistake-notes">
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: 가비아 CNAME 값 끝에 점을 빼먹으면?</div>
    <div class="wda-mistake-right">방지: username.github.io. 처럼 끝에 점(.)을 반드시 붙여야 정상 동작한다.</div>
  </div>
  <div class="wda-mistake-note">
    <div class="wda-mistake-wrong">실수: DNS 설정 직후 바로 접속이 안 된다고 실패로 판단하면?</div>
    <div class="wda-mistake-right">방지: DNS 전파에는 10분~24시간이 걸릴 수 있으니 nslookup으로 확인하며 기다린다.</div>
  </div>
</div>

**🎯 완성 기준**

<div class="wda-formula-board">
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">완성 기준 1 · GitHub 설정</div>
    <div class="wda-formula-block-body">Settings → Pages에 Custom domain 입력 및 저장</div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">완성 기준 2 · 가비아 DNS</div>
    <div class="wda-formula-block-body">A 레코드 4개 + CNAME(www) 등록 완료</div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">완성 기준 3 · 전파 확인</div>
    <div class="wda-formula-block-body">nslookup으로 185.199.108~111.153 확인</div>
  </div>
  <div class="wda-formula-block">
    <div class="wda-formula-block-ttl">완성 기준 4 · HTTPS</div>
    <div class="wda-formula-block-body">Enforce HTTPS 체크 + curl로 HTTP/2 200 확인</div>
  </div>
</div>

**🎴 클릭 복습 카드**

<div class="wda-flip-deck">
  <div class="wda-flip-card">
    <div class="wda-flip-front">가비아 CNAME 값 끝에 반드시 붙여야 하는 문자는?</div>
    <div class="wda-flip-back">점(.) — 예: username.github.io.</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">GitHub Pages A 레코드로 등록해야 하는 IP는 몇 개?</div>
    <div class="wda-flip-back">4개 (185.199.108~111.153)</div>
  </div>
  <div class="wda-flip-card">
    <div class="wda-flip-front">DNS 전파 확인에 쓰는 명령어는?</div>
    <div class="wda-flip-back">nslookup</div>
  </div>
</div>

---

<div class="wda-done">
  <div class="wda-done-ico">🎉</div>
  <div class="wda-done-ttl">커스텀 도메인 연결 완료!</div>
  축하합니다!<br>
  이제 여러분만의 전문적인 도메인으로 포트폴리오에 접속할 수 있습니다.<br>
  <strong>https://www.여러분도메인.co.kr</strong> 에서 확인해보세요!<br>
  취업 지원 시 훨씬 더 전문적인 인상을 줄 수 있어요.
</div>

