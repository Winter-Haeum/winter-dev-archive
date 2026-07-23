---
title: "4-6: 실무 배포 전략 (GitHub Pages + Supabase)"
category: "ai-vibe-coding"
section: "lesson-4"
description: "포트폴리오를 실제로 배포하고 운영할 때 알아두어야 할 GitHub Pages와 Supabase의 무료 플랜 제한사항과 실무 대응 전략을 안내합니다."
tags:
  - ai-vibe-coding
  - lesson-4
  - deployment
  - github-pages
  - supabase
  - free-plan
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
.wda-fcard-list{list-style:none;padding:0;margin:.4rem 0 0;font-size:.78rem;line-height:1.7;opacity:.78}
.wda-fcard-list li::before{content:"· "}
.wda-done{border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:16px 20px;margin:.8rem 0 1.4rem;background:rgba(34,197,94,.04);text-align:center;font-size:.82rem;line-height:1.6}
.wda-done-ico{font-size:1.8rem;margin-bottom:6px}
.wda-done-ttl{font-size:1rem;font-weight:700;color:#22c55e;margin-bottom:4px}
.wda-prompt-head{background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.22);border-bottom:none;border-radius:10px 10px 0 0;padding:8px 14px;font-size:.78rem;font-weight:700;color:#8b5cf6;letter-spacing:.03em}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:13px 18px;margin:.8rem 0 1.6rem;font-size:.79rem;line-height:1.75}
.wda-goal-label{font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#22c55e;display:block;margin-bottom:10px}
.wda-emerg-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;margin:.8rem 0 1.4rem}
.wda-emerg-card{border:1px solid rgba(139,92,246,.2);border-radius:10px;padding:13px 15px;background:rgba(139,92,246,.025)}
.wda-emerg-ttl{font-size:.82rem;font-weight:700;margin-bottom:8px;color:#8b5cf6}
.wda-emerg-row{display:flex;gap:8px;font-size:.78rem;line-height:1.5;margin-bottom:4px}
.wda-emerg-key{font-size:.69rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#f59e0b;min-width:28px;flex-shrink:0;padding-top:1px}
.wda-resource-list{list-style:none;padding:0;margin:.8rem 0 1.4rem}
.wda-resource-list li{padding:8px 12px;border:1px solid rgba(128,128,128,.14);border-radius:8px;font-size:.81rem;line-height:1.55;margin-bottom:6px;display:flex;gap:10px;align-items:flex-start}
.wda-resource-list li::before{content:"📖";flex-shrink:0}
.wda-resource-name{font-weight:700;margin-right:6px}
.wda-resource-dsc{opacity:.72}
.wda-cy{background:rgba(250,204,21,.07);border-color:#ca8a04}
.wda-cy .wda-clabel{color:#92400e}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
.wda-deco{position:absolute;z-index:2;pointer-events:none}
.wda-char{position:absolute;z-index:3;pointer-events:none}
@media (max-width:640px){
.wda-deco{max-width:55px !important}
.wda-char{max-width:110px !important}
.wda-goal,.wda-callout,.wda-done,.wda-memo,.wda-steps,.wda-fgrid{padding-left:16px !important;padding-right:16px !important}
}
@media (max-width:554px){
.wda-char{display:none !important}
}
</style>

포트폴리오를 실제로 배포하고 운영할 때 알아두어야 할 GitHub Pages와 Supabase의 무료 플랜 제한사항과 실무 대응 전략을 안내합니다.

## 🎯 학습 목표

<div class="wda-goal">
  <span class="wda-goal-label">이번 챕터 목표</span>
  • <strong>무료 플랜 한계 이해</strong> — 제한사항을 미리 알고 대비<br>
  • <strong>비용 효율적 운영</strong> — 필요한 시점에 유료 전환<br>
  • <strong>성능 최적화</strong> — 제한된 자원으로 최대 효과<br>
  • <strong>응급 상황 대응</strong> — 한계 초과 시 즉시 대처
</div>

---

## 🗺️ 현실적인 배포 전략

무료 플랜으로 시작하면서도 전문적인 웹사이트를 운영하기 위한 실무 가이드입니다:

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⚠️</div>
    <div class="wda-fcard-ttl">무료 플랜 한계 이해</div>
    <div class="wda-fcard-dsc">제한사항을 미리 알고 대비</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">💰</div>
    <div class="wda-fcard-ttl">비용 효율적 운영</div>
    <div class="wda-fcard-dsc">필요한 시점에 유료 전환</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📈</div>
    <div class="wda-fcard-ttl">확장성 고려</div>
    <div class="wda-fcard-dsc">성장에 따른 업그레이드 계획</div>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔄</div>
    <div class="wda-fcard-ttl">대안 플랫폼 비교</div>
    <div class="wda-fcard-dsc">상황에 맞는 최적의 선택</div>
  </div>
</div>

<div class="wda-callout wda-cw">
  <span class="wda-clabel">실무자 주의사항</span>
  무료 플랜은 개인 프로젝트나 프로토타입에 적합합니다.<br>
  상업적 용도나 트래픽이 많은 사이트는 유료 플랜을 고려하세요!
</div>

---

## 🐙 GitHub Pages 무료 플랜 완전 분석 (2025년 기준)

포트폴리오 호스팅을 위한 GitHub Pages의 모든 제한사항과 활용법:

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📡</div>
    <div class="wda-fcard-ttl">트래픽 제한사항</div>
    <ul class="wda-fcard-list">
      <li>대역폭: 월 100GB (Soft limit)</li>
      <li>사이트 크기: 최대 1GB</li>
      <li>파일 크기: 개별 100MB 제한</li>
    </ul>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⚙️</div>
    <div class="wda-fcard-ttl">빌드 제한사항</div>
    <ul class="wda-fcard-list">
      <li>빌드 횟수: 시간당 10회</li>
      <li>Actions 사용 시: 제한 없음!</li>
      <li>배포 타임아웃: 10분</li>
    </ul>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">✨</div>
    <div class="wda-fcard-ttl">기능 특징</div>
    <ul class="wda-fcard-list">
      <li>비활성 제한: 없음!</li>
      <li>커스텀 도메인: 무료 지원</li>
      <li>HTTPS: 자동 발급</li>
    </ul>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">💰</div>
    <div class="wda-fcard-ttl">비용 구조</div>
    <ul class="wda-fcard-list">
      <li>Public 저장소: 완전 무료</li>
      <li>Private 저장소: Pro 플랜 필요</li>
      <li>Actions 시간: 월 2,000분 무료</li>
    </ul>
  </div>
</div>

<div class="wda-callout wda-cs">
  <span class="wda-clabel">GitHub Pages의 장점</span>
  GitHub Pages는 <strong>비활성 제한이 없습니다!</strong><br>
  7일 동안 배포하지 않아도 사이트가 계속 유지됩니다.<br>
  GitHub Actions를 사용하면 빌드 횟수 제한도 사실상 없어요.
</div>

### GitHub Pages 최적화 전략

<div class="wda-prompt-head">최적화 팁</div>

```
// 1. 이미지 최적화로 대역폭 절약
- WebP 포맷 사용 (JPEG 대비 25-35% 절약)
- 적절한 이미지 크기 설정
- Lazy Loading 적용

// 2. 빌드 최적화
- GitHub Actions 워크플로우 사용 (빌드 제한 우회)
- 캐시 활용 (node_modules 캐싱)
- 조건부 배포 설정 (특정 브랜치만)

// 3. 캐시 설정 (GitHub Pages 기본 10분)
- CDN 서비스 추가 고려 (Cloudflare)
- 정적 리소스 최적화
```

---

## 🗄️ Supabase 무료 플랜 완전 분석 (2025년 기준)

백엔드 기능이 필요한 프로젝트를 위한 Supabase 활용법:

<div class="wda-fgrid">
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🗄️</div>
    <div class="wda-fcard-ttl">저장소 제한</div>
    <ul class="wda-fcard-list">
      <li>데이터베이스: 500MB</li>
      <li>파일 스토리지: 1GB</li>
      <li>CPU/RAM: 2Core/1GB 공유</li>
    </ul>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">📊</div>
    <div class="wda-fcard-ttl">트래픽 제한</div>
    <ul class="wda-fcard-list">
      <li>대역폭: 월 5GB</li>
      <li>MAU: 50,000명</li>
      <li>API 요청: 무제한</li>
    </ul>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">🔧</div>
    <div class="wda-fcard-ttl">고급 기능</div>
    <ul class="wda-fcard-list">
      <li>Edge Functions: 월 50만 요청</li>
      <li>함수 개수: 10개</li>
      <li>실시간 동기화: 무료</li>
    </ul>
  </div>
  <div class="wda-fcard">
    <div class="wda-fcard-ico">⚠️</div>
    <div class="wda-fcard-ttl">주의사항</div>
    <ul class="wda-fcard-list">
      <li>비활성 제한: 7일 (중요!)</li>
      <li>백업: 수동만 가능</li>
      <li>지원: 커뮤니티만</li>
    </ul>
  </div>
</div>

<div class="wda-callout wda-cw">
  <span class="wda-clabel">Supabase 7일 비활성 제한</span>
  Supabase 무료 플랜은 <strong>7일 동안 활동이 없으면 프로젝트가 자동으로 일시정지</strong>됩니다.<br>
  아래 GitHub Actions 해결법을 꼭 적용하세요!
</div>

---

## 🔄 Supabase 비활성 방지: GitHub Actions 해결법

GitHub Actions의 Scheduled Workflow를 사용하여 주기적으로 Supabase에 ping을 보내면 비활성 제한을 우회할 수 있습니다:

<div class="wda-prompt-head">GitHub Actions 워크플로우</div>

```
# .github/workflows/supabase-keep-alive.yml

name: Supabase Keep Alive

on:
  schedule:
    # 주 3회 실행 (월, 수, 금 오전 9시 UTC = 오후 6시 KST)
    - cron: '0 9 * * 1,3,5'
  workflow_dispatch:  # 수동 실행 가능

jobs:
  ping-supabase:
    runs-on: ubuntu-latest
    steps:
      - name: Ping Supabase Health Check
        run: |
          curl -s "${{ secrets.SUPABASE_URL }}/rest/v1/health_check?select=id&limit=1" \
            -H "apikey: ${{ secrets.SUPABASE_ANON_KEY }}" \
            -H "Authorization: Bearer ${{ secrets.SUPABASE_ANON_KEY }}"
          echo "Supabase ping successful!"
```

<div class="wda-callout wda-cs">
  <span class="wda-clabel">GitHub Secrets 설정 방법</span>
  GitHub 저장소에서 Supabase 인증 정보를 안전하게 저장합니다:
</div>

<div class="wda-prompt-head">설정 순서</div>

```
1. GitHub 저장소 - Settings - Secrets and variables - Actions
2. "New repository secret" 클릭
3. 두 개의 Secret 추가:

   Name: SUPABASE_URL
   Value: https://your-project-id.supabase.co

   Name: SUPABASE_ANON_KEY
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

4. Supabase Dashboard에서 값 확인:
   Project Settings - API - Project URL, anon public key
```

<div class="wda-callout wda-cs">
  <span class="wda-clabel">비용 걱정 없어요!</span>
  이 워크플로우는 월 12회 실행 (주 3회 × 4주)으로, GitHub Actions 무료 할당량(월 2,000분)의 0.01%도 사용하지 않습니다.<br>
  Public 저장소는 무제한 무료!
</div>

---

## 🐙 GitHub Pages 완전 가이드

개인 포트폴리오를 위한 최적의 무료 호스팅:

<div class="wda-prompt-head">GitHub Pages 특징</div>

```
장점:
- 완전 무료 (Public 저장소)
- 비활성 제한 없음 (언제나 온라인 유지)
- Git 연동 완벽 (자동 배포)
- GitHub Actions로 빌드 제한 우회
- 안정적인 uptime (99.9%)
- 커스텀 도메인 지원 (무료)
- HTTPS 자동 적용

제한사항:
- 정적 사이트만 지원 (HTML, CSS, JS)
- 서버리스 함수 없음 (API 엔드포인트 불가)
- 저장소 크기 1GB 권장
- 월 대역폭 100GB soft limit
- 캐시 10분 고정

권장 사용 사례:
✅ 개인 포트폴리오
✅ 프로젝트 문서/데모
✅ React/Vue 등 SPA 앱
✅ 블로그 (Jekyll, Hugo)
❌ 서버 API가 필요한 앱
❌ 폼 처리/파일 업로드
❌ 실시간 서버 통신
```

---

<div style="position:relative;overflow:visible;margin:1.5rem 0 0.5rem;padding-left:58px;">
  <h2>🆘 응급 상황 대응 가이드</h2>
</div>

무료 플랜 한계 초과 시 대응 방법:

<div class="wda-emerg-grid">
  <div class="wda-emerg-card">
    <div class="wda-emerg-ttl">GitHub Pages 대역폭 초과시</div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">즉시</span><span>이미지/비디오 CDN으로 이전 (Cloudinary 등)</span></div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">단기</span><span>Cloudflare 무료 CDN 추가</span></div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">장기</span><span>다른 호스팅 서비스로 마이그레이션 고려</span></div>
  </div>
  <div class="wda-emerg-card">
    <div class="wda-emerg-ttl">Supabase DB 용량 초과시</div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">즉시</span><span>불필요한 데이터 삭제, 테이블 정리</span></div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">단기</span><span>파일 스토리지를 외부 서비스로 이전</span></div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">장기</span><span>Pro 플랜 업그레이드 ($25/월)</span></div>
  </div>
  <div class="wda-emerg-card">
    <div class="wda-emerg-ttl">Supabase 일시정지됐을 때</div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">즉시</span><span>Supabase Dashboard에서 수동 재시작</span></div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">단기</span><span>GitHub Actions 워크플로우 추가</span></div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">장기</span><span>Pro 플랜 업그레이드 (비활성 제한 없음)</span></div>
  </div>
  <div class="wda-emerg-card">
    <div class="wda-emerg-ttl">서비스 중단시</div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">즉시</span><span>GitHub Issues에서 상태 확인</span></div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">단기</span><span>백업 브랜치에서 다른 서비스로 배포</span></div>
    <div class="wda-emerg-row"><span class="wda-emerg-key">장기</span><span>멀티 클라우드 전략 수립</span></div>
  </div>
</div>

---

## 💡 비용 최적화 실무 팁

<div class="wda-prompt-head">절약 전략</div>

```
GitHub Pages 절약 팁:
1. 이미지 최적화: WebP 사용, 크기 조절
2. 외부 CDN 활용: Cloudinary, imgix
3. 캐싱 극대화: Cloudflare 프록시 사용
4. 불필요한 리소스 제거: 사용하지 않는 라이브러리 삭제

Supabase 절약 팁:
1. DB 최적화: 불필요한 컬럼/인덱스 제거
2. 이미지 압축: 업로드 전 클라이언트에서 압축
3. 쿼리 최적화: RLS 정책으로 불필요한 데이터 필터링
4. 캐싱: React Query로 API 호출 최소화

비활성 방지 (필수!):
- GitHub Actions 워크플로우로 주 3회 자동 ping
- 수동 실행 테스트로 작동 확인
- Actions 로그에서 성공 여부 모니터링
```

<div class="wda-callout wda-ci">
  <span class="wda-clabel">실무자 경험담</span>
  대부분의 개인 포트폴리오는 무료 플랜으로도 충분합니다!<br>
  월 1000 방문자 이하라면 제한사항에 걸릴 일이 거의 없어요.<br>
  중요한 건 Supabase 비활성 방지를 위한 GitHub Actions 설정입니다.
</div>

---

<div class="wda-done">
  <div class="wda-done-ico">🎓</div>
  <div class="wda-done-ttl">Lesson 4 완료 축하합니다!</div>
  이제 전문적인 포트폴리오 완성부터 실제 배포까지<br>
  모든 과정을 마스터했습니다!<br>
  <strong>여러분의 포트폴리오가 많은 기회를 만들어주길 바랍니다.</strong> 🚀
</div>

---

## 📚 추가 학습 리소스

<ul class="wda-resource-list">
  <li><span class="wda-resource-name">GitHub Pages 공식 문서</span> — <span class="wda-resource-dsc">최신 업데이트와 베스트 프랙티스</span></li>
  <li><span class="wda-resource-name">Supabase 공식 문서</span> — <span class="wda-resource-dsc">고급 기능 활용법</span></li>
  <li><span class="wda-resource-name">GitHub Actions 문서</span> — <span class="wda-resource-dsc">워크플로우 작성 가이드</span></li>
  <li><span class="wda-resource-name">Web.dev</span> — <span class="wda-resource-dsc">웹 성능 최적화 가이드</span></li>
  <li><span class="wda-resource-name">Dev.to, Hashnode</span> — <span class="wda-resource-dsc">개발자 커뮤니티 블로그</span></li>
</ul>

