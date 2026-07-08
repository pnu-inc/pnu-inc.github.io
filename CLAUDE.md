# PNU INC Lab Website

## 프로젝트 개요
부산대 INC Lab(김종덕 교수) 연구실 웹사이트. **pnu-inc.github.io** 로 배포.
(이전: yunseob.github.io/pnuinc/ → 현재: pnu-inc 조직 계정으로 이전 완료)

## 연구실 소개
- 연구실명: PNU INC Lab (지능통신연구실)
- 지도교수: 김종덕 (Jong-Deok Kim, J.D. Kim)
- 핵심 연구 분야: **Physical AI** (물리 세계 감지·인식) + **Wireless AI** (무선통신 × AI/ML)
- 출발점: 무선통신(Wi-Fi, LoRa, LPWAN) 연구실에서 시작, 최근 Physical AI로 방향 전환

## 기술 스택
- Vite + React + TypeScript
- base path: `/` (조직 페이지이므로 서브패스 없음)
- 배포: GitHub Pages (`pnu-inc.github.io`) — GitHub Actions 자동 배포
- 다국어: 상태 기반 언어 전환 (URL 변경 없음, ko.json / en.json)
- 단일 파일 구조: `src/App.tsx` (별도 컴포넌트 파일 없음)

## 색상 & 디자인 시스템
```
--color-primary:       #b53922  (빨강)
--color-accent:        #ff9d53  (주황)
--color-surface:       #ffffff  (흰색 배경)
--color-surface-soft:  #f8f8f8
--color-surface-muted: #f2f2f2
--color-text:          #111111
--color-text-muted:    #555555
--color-text-soft:     #777777
--color-border:        rgba(0,0,0,0.1)
--color-conference:    #1d64c8  (학회 논문 파란색)
```
- 배경: 순수 흰색 (이전 크림/베이지 거부함)
- 포인트: 빨강-주황 그라데이션 (로고 색상 유지)
- 폰트: Noto Sans KR + Inter

## 사용자 디자인 선호도

### 좋아하는 것
- **미니멀 타이포그래피** 스타일 (화려한 장식보다 텍스트 중심)
- 깔끔한 흰색 배경 (다크모드·슬레이트·베이지 거부)
- 기하학적 도형 조합 일러스트 (라인아트·픽토그램보다 선호)
- 짧고 트렌디한 문구 (긴 설명 문장 지양)
- 설명 텍스트는 **한 줄**에 끝나는 간결함 선호
- 연구 키워드를 그라데이션 색상 + 큰 폰트로 강조하는 dynamic headline
- 언어 토글: `한국어 / EN` pill 형태, 활성 언어에 빨간 배경
- 논문 저자 하이라이트: 자동 감지 대신 `"highlights"` 배열 수동 지정 방식 선호
- 아이콘: SVG 인라인, 컬러 구분 (저널=빨강, 학회=파랑)

### 싫어하는 것 / 제거된 것
- 크림/베이지 warm-tone 배경색
- Hero 섹션 우측 정보 카드 (2열 그리드 hero)
- Hero 내 버튼 (primaryAction, secondaryAction)
- "핵심 역량" 섹션 → "연구 분야"와 중복이라 삭제
- 어색한 한국어 표현: "년도별 주요 출판 연구", "실제 현장을 바꾸는 연구 주제"
- 너무 큰 헤드라인 폰트 (7.5rem → 4rem으로 축소)
- "산업" 키워드를 강조하는 헤드라인
- 논문 제목에 큰따옴표 (제거됨)
- 역할(센터장/본부장 등)에 배경색 있는 pill 배지 → "촌스럽다"고 거부
- 경력 목록 항목 사이 구분선(border-bottom) → 텍스트만으로 표현 선호
- Footer 바로가기를 단일 컬럼으로 나열 → 높이가 너무 길어짐

## 현재 페이지 구조 (activePage state)

### 홈 (home)
- Hero: dynamic headline + 설명 + 연구 키워드 태그
  - 헤드라인: `"Physical AI로 감지하고\nWireless AI로 연결합니다"`
  - emphasis 키워드: `["Physical AI", "Wireless AI"]` → 그라데이션 + 1.22em
  - 설명: 한 줄, 모바일에서만 white-space: normal (줄바꿈 허용)
- 연구 분야: Physical AI / Wireless AI 카드 (이미지 + 설명)
  - 이미지: `assets/physicalAI.png`, `assets/wirelessAI.png`
- 최신 논문: `publicationsPage.years`에서 자동 파생 (상위 5개)

### 논문 페이지 (publications)
- 연도별 카드 박스 (2026 → 2025 → 2024 ...)
- 각 논문: 문서 아이콘(저널=빨강/학회=파랑) + 제목 + 저자 + 저널 + 외부링크 아이콘
- 저자 하이라이트: 각 논문의 `"highlights": ["이름"]` 배열로 수동 지정
- `"type": "journal"` / `"type": "conference"` 필드로 색상 구분
- 논문 추가 시 `ko.json`의 `publicationsPage.years` 배열 편집

### 지도교수 페이지 (professor)
- 레이아웃: `professor-layout` (grid: 340px | 1fr, 2행)
  - 1행: 사진 | professor-info(이름/직위 + professor-contact)
  - 2행: professor-history (`grid-column: 1/-1`, 전체 너비)
- **professor-contact**: 2컬럼 그리드 (`1fr 1.8fr`)
  - 왼쪽(`prof-contact-left`): 학과 / 전화 / 이메일
  - 오른쪽(`prof-careers`): 주요 경력 목록 (3×2 그리드)
- **주요 경력 스타일**: 텍스트만 사용, 선/배지 없음
  - 기관명(bold) 위 + `역할(#2d7dd2 단색) · 기간` 아래
  - JSON: `professorPage.careers[]` → `{ org, role, period }`
- **학력·경력 타임라인**: 가로 수평, 3행 독립 구조 (기간 행 / 점+선 행 / 설명 행)
  - 각 항목: `period`, `badge`, `institution`(위), `role`(아래)
  - 선: `#b53922` → `#ff9d53` 그라데이션, 점: 14px 원
  - professor-history는 professor-info 밖에 있음 (그리드 2행에 위치)
- **주요 수행 과제**: 카드 형태 (번호 그라데이션 + 제목 + 요약 + 기간)
- **대표 성과**: 1컬럼, 논문(DocIcon 빨강) / 특허(PatentIcon 주황) 아이콘 구분

### 연구실 사람들 페이지 (team)
- 현재 멤버 목록 + 졸업생 섹션

### Footer
- 3컬럼 구조: 브랜드+태그라인 | 바로가기(3×2 그리드) | 연락처
- 바로가기: 홈/연구분야/논문/지도교수/연구실사람들/문의 — 3열 2행
- 연락처: MapPinIcon + 주소, PhoneIcon + 전화, MailIcon + 이메일
- 하단: `footer-bottom` 구분선 + 저작권 텍스트
- `margin-top: 48px`으로 콘텐츠와 간격 확보
- JSON: `footer.brand`, `footer.tagline`, `footer.navLinks[]`, `footer.contactHeading`, `footer.address`, `footer.phone`, `footer.email`, `footer.copyright`
- footer는 추후 추가 개선 예정

### 문의 페이지 (contact)
- Google Maps iframe embed (API 키 불필요)
- 연구실 정보 카드: 연구실명, 위치, 주소, 전화, 이메일, 홈페이지
- `contactPage.items[].type`: building / location / address / phone / email / web

## 주요 컴포넌트 & 함수 (App.tsx)

```
renderDynamicHeadline(headline, emphasisWords)
  → headline을 emphasisWords 기준으로 파싱, .hero-kw 스팬 적용

highlightAuthors(authors, highlights)
  → authors를 쉼표 분리 후 highlights 배열과 매칭, .pub-author-highlight 적용
  → 수동 지정 방식 (자동 감지 아님)

scrollToSection(sectionId, event)
  → event 인자 필수. footer에서는 직접 scrollIntoView 사용

SVG 아이콘 목록:
  MapPinIcon / PhoneIcon / MailIcon / GlobeIcon / BuildingIcon  → 문의 페이지 + footer
  HamburgerIcon / CloseIcon                                     → 모바일 메뉴
  JournalIcon / ConferenceIcon                                  → 논문 타입 범례
  DocIcon / ExternalLinkIcon                                    → 논문 목록
  PatentIcon                                                    → 특허 목록

researchImages = [physicalAIPhoto, wirelessAIPhoto]
  → 연구 분야 카드 이미지 배열 (순서 = JSON areas 순서)

incLogo = assets/inc_logo2.png
  → 헤더 brand 로고 이미지 + footer 로고 (32px)
```

## 페이지 상태 관리
- `activePage`: `'home' | 'publications' | 'professor' | 'team' | 'contact'`
- **sessionStorage**로 persist → 새로고침 시 현재 페이지 유지
- 언어 전환 시 홈으로 리셋 안 함 (현재 페이지 유지)
- `scrollToSection()`: home 이동 + 스크롤 (연구/최신논문 섹션용)

## 반응형 브레이크포인트
- `≤ 980px`: 교수/팀 레이아웃 1열 전환, project-card 2열→1열
- `≤ 768px`: 데스크톱 nav 숨김, 햄버거 메뉴 표시, cursor-glow 숨김
- `≤ 720px`: 연구 그리드 1열, 모바일 패딩, hero-description 줄바꿈 허용
- `≤ 600px`: project-card period 위치 조정

## 애니메이션
- `[data-animate]` 요소: opacity 0 → 1, translateY 24px → 0 (0.8s ease-out)
- IntersectionObserver threshold: `0.05`
- cursor-glow: 480px 원, lerp 0.12, 데스크톱 전용

## Favicon & 브랜드
- Favicon: `assets/inc_logo2.png` (index.html `<link rel="icon">`)
- Header brand: 로고 이미지(36px) + "INC"(bold) + "Intelligence & Networking Labs"(sub)

## 콘텐츠 관리 가이드

### 논문 추가 방법 (`ko.json` → `publicationsPage.years`)
```json
{
  "title": "논문 영어 제목",
  "authors": "Y. Kim, S. Lee, J.D. Kim",
  "venue": "IEEE Transactions on ...",
  "url": "https://...",
  "highlights": ["Y. Kim", "J.D. Kim"],
  "type": "journal"
}
```
- 최신 연도를 `years` 배열 **맨 앞**에 추가해야 홈 최신 5개에 반영됨
- `type`: `"journal"` (빨강) / `"conference"` (파랑)
- en.json도 동일하게 업데이트 필요

### 교수 페이지 주요 경력 수정 (`ko.json` → `professorPage.careers`)
```json
{ "org": "기관명", "role": "직책", "period": "2023 ~ 현재" }
```
- 6개 항목, 권위 높은 순서로 정렬 (순서가 시각적 중요도를 의미)
- 화면에서 3열 2행 그리드로 표시됨

### 교수 페이지 학력·경력 수정 (`ko.json` → `professorPage.history`)
```json
{
  "period": "1994 ~ 1996",
  "badge": "석사",
  "institution": "서울대학교",
  "role": "전상과학 이학석사"
}
```

### 문의 페이지 정보 수정 (`ko.json` → `contactPage.items`)
- `type` 종류: building / location / address / phone / email / web

### 이미지 교체
- 연구 분야 이미지: `assets/physicalAI.png`, `assets/wirelessAI.png` 파일 교체
- 교수 사진: `assets/professor.png` 파일 교체
- 헤더/파비콘 로고: `assets/inc_logo2.png` 교체

## TypeScript 주의사항
- `import { type MouseEvent } from 'react'`가 전역 DOM `MouseEvent`를 가림
- `window.addEventListener` 콜백에서 DOM 이벤트 쓸 때는 `globalThis.MouseEvent` 명시

## 디자인 방향 (참고)
- 참고 사이트: pnucolab.com
- 로고(`assets/inc_logo2.png`)의 빨강-주황 그라데이션 유지
- 웹사이트는 로고보다 부드럽고 세련된 느낌
- 반응형 필수 (모바일/태블릿/데스크톱)
