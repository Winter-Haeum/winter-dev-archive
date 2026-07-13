---
title: "실습: Performance 탭 분석하기"
status: "completed"
description: "Chrome DevTools의 Performance 탭과 Paint Flashing 기능으로 React 렌더링 성능을 직접 측정하고 눈으로 확인하는 실습을 정리한다."
category: "React"
section: "Basics"
tags:
  - react
  - devtools
  - performance
---

<style>
.wda-callout{border-radius:10px;padding:12px 14px;margin:.8rem 0 1.1rem;border-left:3px solid;font-size:.9rem;line-height:1.75}
.wda-ci{background:rgba(139,92,246,.06);border-color:#8b5cf6}
.wda-cw{background:rgba(245,158,11,.07);border-color:#f59e0b}
.wda-cs{background:rgba(34,197,94,.05);border-color:#22c55e}
.wda-cy{background:rgba(250,204,21,.07);border-color:#ca8a04}
.wda-clabel{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:block}
.wda-ci .wda-clabel{color:#8b5cf6}
.wda-cw .wda-clabel{color:#f59e0b}
.wda-cs .wda-clabel{color:#22c55e}
.wda-cy .wda-clabel{color:#92400e}
.wda-goal{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px 16px;margin:.8rem 0 1.6rem;font-size:.83rem;line-height:1.75}
.wda-fgrid{display:flex;flex-wrap:wrap;gap:10px;margin:.8rem 0 1.6rem}
.wda-fcard{flex:1 1 140px;border:1px solid rgba(128,128,128,.18);border-radius:10px;padding:13px 15px}
.wda-fcard-ico{font-size:1.3rem;margin-bottom:6px}
.wda-fcard-ttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-fcard-dsc{font-size:.89rem;line-height:1.65}
.wda-steps{border:1px solid rgba(128,128,128,.15);border-radius:10px;overflow:hidden;margin:.8rem 0 1.6rem}
.wda-step{display:flex;align-items:flex-start;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(128,128,128,.1)}
.wda-step:last-child{border-bottom:none}
.wda-snum{min-width:26px;height:26px;border-radius:50%;background:rgba(245,158,11,.15);color:#f59e0b;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.wda-sbody{flex:1;min-width:0}
.wda-sttl{font-size:.94rem;font-weight:700;margin-bottom:4px}
.wda-sdsc{font-size:.89rem;line-height:1.65}
.wda-summary-table{width:100%;border-collapse:collapse;font-size:.83rem;margin:.8rem 0 1.4rem}
.wda-summary-table th,.wda-summary-table td{border:1px solid rgba(128,128,128,.2);padding:8px 12px;vertical-align:top;line-height:1.65}
.wda-summary-table th{background:rgba(139,92,246,.08);font-weight:700;text-align:left;white-space:nowrap}
.wda-summary-table td:first-child{font-weight:700;white-space:nowrap;width:150px}
tr:nth-child(even) td{background:rgba(128,128,128,.025)}
.wda-callout p{margin:0 0 .45rem;font-size:.9rem;line-height:1.75}
.wda-callout p:last-child{margin-bottom:0}
.wda-callout ul{margin:.35rem 0 0;padding-left:1.1rem}
.wda-callout li{margin:.24rem 0;line-height:1.75;font-size:.83rem}
.wda-deco{position:absolute;z-index:2;pointer-events:none}
@media (max-width:640px){
.wda-deco{width:34px !important}
}
p:has(> strong:only-child){margin-top:2.2rem !important;margin-bottom:.2rem !important}
p:has(> strong:only-child)+p,p:has(> strong:only-child)+ul,p:has(> strong:only-child)+ol,p:has(> strong:only-child)+div,p:has(> strong:only-child)+pre{margin-top:.15rem !important}
</style>

<h2>1. 실습: Performance 탭으로 렌더링 성능 측정하기</h2>

브라우저 개발자 도구를 통해 내 코드의 실제 렌더링 성능을 눈으로 확인하는 과정입니다.

### 1) 단축키로 개발자 도구 · 명령어 메뉴 열기

Performance 탭과 잠시 뒤에 나올 Rendering 탭 모두 아래 단축키로 빠르게 접근할 수 있습니다.

| **동작** | **Windows** | **Mac** |
| --- | --- | --- |
| **DevTools 열기** | `F12` 또는 `Ctrl + Shift + I` | `Cmd + Option + I` |
| **명령어 메뉴 열기** | `Ctrl + Shift + P` | `Cmd + Shift + P` |

### 2) Performance 탭 여는 두 가지 방법

<div style="position:relative;overflow:visible;">

| **단계** | **방법 및 내용** |
| --- | --- |
| **탭 찾기** | **방법 A. 명령어로 찾기 (추천 ⭐)**<br>1. 위 단축키로 개발자 도구 실행 (`F12` 등)<br>2. 명령어 메뉴 열기 (`Cmd/Ctrl + Shift + P`)<br>3. `Performance` 입력 후 **Show Performance** 엔터!<br><br>**방법 B. 탭 메뉴로 찾기**<br>1. 개발자 도구 상단 탭 목록 확인<br>2. `Elements`, `Console` 옆에 있는 **Performance** 클릭 (안 보이면 `>>` 클릭) |
| **Screenshots 켜기** | Performance 탭 상단 또는 설정 영역에서 **Screenshots** 옵션을 켭니다. (화면 변화 과정을 필름처럼 보기 위함)<br>Chrome DevTools 버전에 따라 위치가 조금 다를 수 있으므로, 보이지 않으면 Performance 탭 안의 설정/옵션 영역을 확인하세요. |

</div>

### 3) 측정하기: Record → 동작 수행 → Stop

<div class="wda-steps">
  <div class="wda-step">
    <div class="wda-snum">1</div>
    <div class="wda-sbody"><div class="wda-sdsc"><strong>Record (⚫)</strong> 버튼을 눌러 녹화를 시작합니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">2</div>
    <div class="wda-sbody"><div class="wda-sdsc">버튼 클릭, 스크롤 등 <strong>테스트할 동작</strong>을 수행합니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">3</div>
    <div class="wda-sbody"><div class="wda-sdsc"><strong>Stop</strong>을 눌러 녹화를 종료합니다.</div></div>
  </div>
  <div class="wda-step">
    <div class="wda-snum">4</div>
    <div class="wda-sbody"><div class="wda-sdsc">생성된 그래프에서 <strong>Main</strong> 섹션의 막대그래프를 확인합니다.</div></div>
  </div>
</div>

### 💡 그래프 보는 법 (핵심)

그래프에 알록달록한 막대들이 뜰 텐데, 색상별로 어떤 작업인지 확인하세요.

<div class="wda-callout wda-ci">
  <strong>Main 섹션 색상 의미</strong>
  <p>Chrome DevTools에서는 보통 <strong>노란색 계열</strong>은 JavaScript 실행, <strong>보라색 계열</strong>은 Rendering/Layout 관련 작업, <strong>초록색 계열</strong>은 Paint/Composite 관련 작업으로 표시됩니다.<br><br>브라우저 버전에 따라 세부 색상과 라벨은 조금 달라질 수 있으므로, 색상과 함께 막대의 라벨도 같이 확인하세요.</p>
</div>

| **색상 (Color)** | **의미 (Meaning)** | **성능 판단 기준 (Criteria)** |
| --- | --- | --- |
| **노란색 계열** | JavaScript 실행 시간 | 버튼 클릭 등으로 실행된 JS 함수가 오래 걸릴수록 막대가 길어집니다. |
| **보라색 계열**(Rendering/Layout) | 위치/크기 계산 | 이 막대들이 **적고 짧을수록** 성능이 좋은 것입니다. (길면 최적화 필요) |
| **초록색 계열**(Paint/Composite) | 색상 칠하기·레이어 합성 | 위와 동일합니다. |

결론적으로 Layout(보라색 계열)과 Paint(초록색 계열) 막대가 적고 짧을수록 성능이 좋은 것입니다.

만약 이 막대들이 길게 늘어져 있다면, 브라우저가 화면을 그리느라 고생하고 있다는 뜻이니 최적화가 필요합니다.

---

<h2>2. 실습: Paint Flashing으로 Paint 영역 확인하기</h2>

<div class="wda-callout wda-cy">
  <strong>Paint Flashing이 보여주는 것</strong>
  <p>Paint Flashing은 React 컴포넌트가 리렌더링되었는지를 직접 보여주는 도구가 아닙니다. 브라우저가 실제로 다시 Paint한 영역을 녹색으로 보여주는 기능입니다. 따라서 "React 리렌더링 확인"보다는 "브라우저 Paint 영역 확인"이라고 설명하는 것이 정확합니다.</p>
  <p>Paint Flashing은 React의 가상 DOM 비교(Diffing) 과정을 직접 보여주는 도구도 아닙니다. 대신 React 상태 변경 이후 브라우저가 실제로 다시 칠한(Paint) 영역이 어디인지 확인하는 데 사용합니다.</p>
</div>

### 1) Rendering 탭 여는 두 가지 방법

<div style="position:relative;overflow:visible;">

| **단계** | **주요 활동** | **세부 내용 및 방법** |
| --- | --- | --- |
| **탭 찾기** | **방법 A. 명령어로 찾기 (추천 ⭐)** | 1. 명령어 메뉴 열기 (`Cmd/Ctrl + Shift + P`)<br>2. 입력창에 `Rendering`이라고 입력<br>3. `Show Rendering`을 선택하고 **Enter** |
| **탭 찾기** | **방법 B. 메뉴로 찾기** | 1. 개발자 도구(`F12`) 열기<br>2. **ESC** 키를 눌러 하단 Drawer(서랍) 패널 열기<br>3. **점 3개(⋮)** 메뉴 클릭 → **Rendering** 선택 |

</div>

### 2) Paint Flashing 켜고 확인하기

<div style="position:relative;overflow:visible;">

1. `Rendering` 탭에서 **Paint flashing** 체크박스를 선택합니다. (체크하면 화면이 다시 그려질 때마다 해당 부분이 녹색으로 번쩍입니다.)
2. 우리가 만든 React 앱에서 **버튼을 클릭**해 봅니다.
3. 녹색으로 반짝이는 영역이 화면 전체인지, 일부인지 확인합니다.

</div>

<h3>💡 결과 해석</h3>

<div class="wda-callout wda-cy">
  <strong>화면이 어떻게 반짝이나요?</strong>
  <ul>
    <li>🟢 <strong>좁은 영역만 반짝임:</strong> 변경된 텍스트 주변의 작은 영역만 반짝이면, 브라우저가 비교적 좁은 영역만 다시 Paint한 것으로 볼 수 있습니다.</li>
    <li>🔴 <strong>화면 전체가 자주 반짝임:</strong> 반대로 화면 전체가 자주 반짝이면 불필요한 Paint가 넓게 발생하는지 점검해볼 필요가 있습니다.<br>화면 전체가 녹색으로 번쩍이면 전체 또는 넓은 영역이 다시 Paint되고 있다는 뜻입니다.<br>이것이 곧바로 React 전체 리렌더를 의미하는 것은 아니지만, 불필요하게 넓은 Paint가 발생하는지 확인해볼 필요가 있습니다.</li>
  </ul>
</div>

**💡 보충 설명**

<div class="wda-callout wda-ci">
  <strong>Paint Flashing이란?</strong>
  <p>브라우저가 화면을 새로 그리는 작업(Paint)을 할 때, 어느 부분을 그렸는지 <strong>녹색 하이라이트</strong>로 보여주는 기능입니다. React 상태가 바뀌어도 화면 전체를 다 새로 그리는 것이 아니라, 실제로 픽셀이 바뀐 부분만 브라우저가 Paint하는 경우가 많다는 것을 눈으로 확인할 수 있습니다.</p>
</div>

---

<h2>🔑 핵심 정리</h2>

Performance 탭과 Paint Flashing, 두 가지 도구로 React 렌더링 성능을 직접 확인하는 방법을 정리합니다.

<table class="wda-summary-table">
  <tr>
    <th>구분</th>
    <th>핵심 내용</th>
  </tr>
  <tr>
    <td><strong>Performance 탭 여는 법</strong></td>
    <td>• 방법 A: `Cmd/Ctrl + Shift + P` → `Performance` 입력 (추천)<br>• 방법 B: 개발자 도구 상단 탭에서 직접 클릭</td>
  </tr>
  <tr>
    <td><strong>그래프 색상 의미</strong></td>
    <td>• 노란색 계열: JS 실행 시간<br>• 보라색 계열: Rendering/Layout<br>• 초록색 계열: Paint/Composite<br>• 버전에 따라 세부 색상·라벨은 다를 수 있음</td>
  </tr>
  <tr>
    <td><strong>Paint Flashing 사용법</strong></td>
    <td>• Rendering 탭 열기(`Cmd/Ctrl + Shift + P` → `Rendering`, 또는 점 3개 메뉴)<br>• Paint flashing 체크 후 버튼 클릭해서 반짝이는 영역 확인</td>
  </tr>
  <tr>
    <td><strong>주의사항</strong></td>
    <td>• Layout/Paint 막대가 길면 최적화가 필요하다는 신호<br>• 화면 전체가 녹색으로 번쩍이면 넓은 영역이 다시 Paint되고 있다는 신호입니다.<br>React 전체 리렌더와 동일한 의미는 아니므로, Paint 영역과 React DevTools Profiler 결과를 함께 확인하는 것이 좋습니다.</td>
  </tr>
  <tr>
    <td><strong>최종 암기 포인트</strong></td>
    <td>• 막대그래프는 짧을수록, Paint Flashing은 반짝이는 영역이 좁을수록 브라우저 작업이 적다는 뜻이다.</td>
  </tr>
</table>
