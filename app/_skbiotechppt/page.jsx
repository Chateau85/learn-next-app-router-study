import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowRight, Briefcase, Settings2, BarChart3 as BarIcon, CheckCircle2 } from "lucide-react";

// 공통 레이아웃 래퍼 (JS 버전)
const SlideLayout = ({ children, title, subtitle }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center px-16 py-10 text-gray-800">
      {title && (
        <div className="w-full max-w-6xl mb-6">
          <h1 className="text-3xl font-bold text-sky-900 mb-1">{title}</h1>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}
      <div className="w-full max-w-6xl flex-1 flex flex-col justify-center">{children}</div>
    </div>
  );
};

// Slide 1: 표지
const Slide1 = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-sky-900 mb-4">전사 IT 표준화와 운영 내재화를 통한 품질·비용 혁신</h1>
        <p className="text-lg text-gray-700 mb-10">SK바이오텍 IT기획·전략 직무 발표자료</p>
        <Card className="shadow-md border border-gray-200 max-w-xl w-full">
          <CardContent className="py-6 text-sm leading-6">
            <p className="font-semibold text-gray-900 mb-1">남철우 (Cheolwoo Nam)</p>
            <p className="text-gray-700 mb-2">前 CJ대한통운 Application개발팀 / 前 교보정보통신 / 前 삼성SDS</p>
            <p className="text-gray-500 text-xs">
              📧 545i@naver.com │ 📞 010-XXXX-XXXX │ 📅 2025.11.13
            </p>
          </CardContent>
        </Card>
      </div>
    </SlideLayout>
  );
};

// Slide 2: 경력 요약 및 IT기획·운영 역량
const Slide2 = () => {
  return (
    <SlideLayout title="경력 요약 및 IT기획·운영 역량">
      <div className="grid grid-rows-[auto,1fr] gap-6">
        {/* 타임라인 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-sky-800 mb-2">경력 타임라인</p>
            <div className="text-xs md:text-sm space-y-1">
              <p>2012–2019: 삼성SDS – 그룹웨어·보안·테스트 자동화</p>
              <p>2020–2021: 교보정보통신 – 금융 마이데이터·ITSM</p>
              <p>2022–2025: CJ대한통운 – 전사 FE 표준화·내재화·거버넌스</p>
            </div>
          </div>
        </div>

        {/* 핵심역량 카드 */}
        <div className="grid md:grid-cols-3 gap-4 mt-2">
          <Card className="shadow-sm border border-sky-50">
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center">
                <Settings2 className="w-5 h-5 text-sky-700" />
              </div>
              <p className="text-sm font-semibold text-sky-900">IT 전략·거버넌스</p>
            </CardHeader>
            <CardContent className="text-xs text-gray-700">
              EA 기반 표준화, 품질·보안 정책 수립, KPI 기반 운영체계 설계 및 내재화 경험
            </CardContent>
          </Card>

          <Card className="shadow-sm border border-sky-50">
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-sky-700" />
              </div>
              <p className="text-sm font-semibold text-sky-900">프로젝트 리딩·내재화</p>
            </CardHeader>
            <CardContent className="text-xs text-gray-700">
              PM/PMO로 SR 리드타임 2주→3일 단축, ITO 비용 23억 절감 등 전사 프로젝트 리딩
            </CardContent>
          </Card>

          <Card className="shadow-sm border border-sky-50">
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center">
                <BarIcon className="w-5 h-5 text-sky-700" />
              </div>
              <p className="text-sm font-semibold text-sky-900">품질·자동화 운영 안정화</p>
            </CardHeader>
            <CardContent className="text-xs text-gray-700">
              CI/CD, SonarQube, FossID, UI 테스트 자동화 기반 품질·운영 안정화 체계 구축
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideLayout>
  );
};

// Slide 3: SK바이오텍 IT환경 및 직무이해
const Slide3 = () => {
  return (
    <SlideLayout title="SK바이오텍의 성장 환경과 IT 기획의 역할">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="pb-2">
            <p className="text-sm font-semibold text-sky-900">사업·환경 변화</p>
          </CardHeader>
          <CardContent className="text-xs text-gray-700 space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>세종 신공장(펩타이드·GLP-1) 증설 및 글로벌 생산 확장</li>
              <li>GMP·CSV 기반 품질·감사 체계 강화</li>
              <li>한국–미국 멀티사이트 기반 CDMO 경쟁 심화</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="pb-2">
            <p className="text-sm font-semibold text-sky-900">IT기획원의 핵심 역할</p>
          </CardHeader>
          <CardContent className="text-xs text-gray-700 space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>SAP·MES·WMS·설비관리 등 제조 IT 전반의 기획·전략 수립</li>
              <li>IT 프로젝트 리딩 및 CSV·감사 대응 체계 고도화</li>
              <li>시스템 모니터링 및 KPI 기반 운영·개선 방안 제시</li>
            </ul>
            <p className="mt-3 text-[11px] text-gray-500">
              세종 신공장 가동과 CSV 확대에 따라, 표준화·거버넌스 기반 IT기획이 핵심이라고 이해하고 있습니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </SlideLayout>
  );
};

// Slide 4: 대표 프로젝트1 (전사 FE 아키텍처 표준화 및 내재화)
const slide4Data = [
  { label: "Before", LeadTime: 14 },
  { label: "After", LeadTime: 3 },
];

const Slide4 = () => {
  return (
    <SlideLayout title="전사 IT 표준화 및 내재화를 통한 운영혁신 (CJ대한통운)">
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        {/* Before Section */}
        <Card className="shadow-md border border-gray-200">
          <CardHeader className="text-sm font-semibold bg-red-50 text-red-800 p-4">Before</CardHeader>
          <CardContent className="text-xs space-y-2 p-4">
            <ul className="list-disc list-inside space-y-1">
              <li>외주 중심, 비표준 구조 및 산출물 관리 한계</li>
              <li>SR 리드타임 평균 2주 이상</li>
              <li>서비스별 품질 편차 및 유지보수 비용 증가</li>
              <li>표준 아키텍처 부재로 운영 효율·일관성 저하</li>
            </ul>
          </CardContent>
        </Card>

        {/* After Section */}
        <Card className="shadow-md border border-gray-200">
          <CardHeader className="text-sm font-semibold bg-blue-50 text-blue-800 p-4">After</CardHeader>
          <CardContent className="text-xs space-y-2 p-4">
            <ul className="list-disc list-inside space-y-1">
              <li>React·Spring 기반 전사 FE 표준 아키텍처 구축</li>
              <li>공통 컴포넌트 재사용률 50% 향상</li>
              <li>CI/CD·SonarQube·FossID 기반 품질·보안 게 gate 적용</li>
              <li>SR 리드타임 3일, VOC 대응 효율 80% 이상 향상</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="w-full max-w-md h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={slide4Data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis label={{ value: "리드타임(일)", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Bar dataKey="LeadTime" fill="#0ea5e9" barSize={40} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[11px] text-gray-600 text-center">
          성과: 리드타임 14일 → 3일(-79%), ITO 비용 23억 절감, VOC 대응 효율 +80%<br />
          전사 수준의 품질·운영 구조 혁신을 통해 자체 역량 기반 IT 거버넌스 체계를 확립했습니다.
        </p>
      </div>
    </SlideLayout>
  );
};

// Slide 5: 품질·운영·감사 관점의 구조적 개선
const Slide5 = () => {
  return (
    <SlideLayout title="품질·운영·감사 관점에서의 IT 거버넌스 구축">
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="pb-2">
            <p className="text-sm font-semibold text-sky-900">1. 구조 표준화</p>
          </CardHeader>
          <CardContent className="text-xs text-gray-700 space-y-1">
            <ul className="list-disc list-inside space-y-1">
              <li>FE/BE 구조·코딩 규칙 및 모듈 표준 정의</li>
              <li>API 설계 정책 및 명세 관리 체계 수립</li>
              <li>공통 라이브러리·UI 컴포넌트 정책 수립</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="pb-2">
            <p className="text-sm font-semibold text-sky-900">2. 품질 검증</p>
          </CardHeader>
          <CardContent className="text-xs text-gray-700 space-y-1">
            <ul className="list-disc list-inside space-y-1">
              <li>SonarQube/FossID 기반 코드 품질·보안 게이트 운영</li>
              <li>Python·Selenium 기반 UI 테스트 자동화 도입</li>
              <li>테스트 커버리지 85% 목표 설정 및 모니터링</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="pb-2">
            <p className="text-sm font-semibold text-sky-900">3. 운영·감사 체계</p>
          </CardHeader>
          <CardContent className="text-xs text-gray-700 space-y-1">
            <ul className="list-disc list-inside space-y-1">
              <li>Jira·Confluence 기반 변경·이슈·릴리즈 이력 관리</li>
              <li>앱 인증서·프로파일·라이선스 관리 절차 수립</li>
              <li>감사 대응 및 재발방지 프로세스 체계화</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <p className="text-[11px] text-gray-600 mt-2">
        GMP/CSV 환경과 동일한 본질인 표준·검증·이력관리 체계를 IT 거버넌스로 구현한 경험입니다.
      </p>
    </SlideLayout>
  );
};

// Slide 6: 대표 프로젝트② — 테스트 자동화 플랫폼 구축
const Slide6 = () => {
  const steps = [
    "요구사항: 단순 실행포털 수준의 요구 정의",
    "상향 목표: 결함분석·대시보드·권한관리 포함 품질경영 포털",
    "한계: 일정 지연 및 초기 품질 리스크 발생",
    "극복: MVP 단계화, 우선순위 재정의, 완료 기준(DoD) 명문화",
    "결과: QA 리드타임 40% 단축, 타 조직으로 플랫폼 확산",
  ];

  return (
    <SlideLayout title="테스트 자동화 플랫폼 구축 및 상향 목표 도전 (삼성SDS)">
      <div className="grid md:grid-cols-[2fr,3fr] gap-6 items-center">
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="pb-2">
            <p className="text-sm font-semibold text-sky-900">프로젝트 개요</p>
          </CardHeader>
          <CardContent className="text-xs text-gray-700 space-y-1">
            <ul className="list-disc list-inside space-y-1">
              <li>목표: 테스트 자동화 플랫폼을 통한 펌웨어 품질 향상</li>
              <li>역할: 관리자 포털 개발 및 일부 기획·요구 정의</li>
              <li>범위: 사용자 권한, 테스트 시나리오 관리, 대시보드, 로그 분석</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {steps.map((s, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="mt-0.5">
                <ArrowRight className="w-4 h-4 text-sky-700" />
              </div>
              <p className="text-xs text-gray-700">{s}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[11px] text-gray-600 mt-4">
        상향 목표 설정 이후 한계를 인정하고, 구조적 통제체계(MVP·DoD·품질게이트)를 설계하여 리스크를 관리한 경험입니다.
      </p>
    </SlideLayout>
  );
};

// Slide 7: 기술·기획 융합 역량과 제조 CSV 적용 가능성
const Slide7 = () => {
  return (
    <SlideLayout title="기술·기획 융합 역량과 제조 IT환경 적용">
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="pb-2">
            <p className="text-sm font-semibold text-sky-900">기술 기반</p>
          </CardHeader>
          <CardContent className="text-xs text-gray-700 space-y-1">
            <ul className="list-disc list-inside space-y-1">
              <li>Spring·React·하이브리드 앱, WMS·EHS·부동산 시스템 경험</li>
              <li>MPA→SPA 전환, 응답속도 3초→0.8초 개선</li>
              <li>테스트 자동화·로그 분석·데이터 시각화(Chart.js 등)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="pb-2">
            <p className="text-sm font-semibold text-sky-900">기획·운영 기반</p>
          </CardHeader>
          <CardContent className="text-xs text-gray-700 space-y-1">
            <ul className="list-disc list-inside space-y-1">
              <li>IT 전략·EA, 품질·보안 정책 및 KPI 설계</li>
              <li>PM/PMO, 리드타임·비용·품질 지표 관리</li>
              <li>감사 대응·ITSM·운영 프로세스 표준화</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardHeader className="pb-2">
            <p className="text-sm font-semibold text-sky-900">제조 IT 적용</p>
          </CardHeader>
          <CardContent className="text-xs text-gray-700 space-y-1">
            <ul className="list-disc list-inside space-y-1">
              <li>MES·WMS·ERP·설비관리 통합 아키텍처 기획 관점</li>
              <li>Audit Trail·Change Control·데이터 무결성 관리</li>
              <li>CSV·GMP 요구사항과 IT 거버넌스의 연결 설계</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <p className="text-[11px] text-gray-600 mt-4">
        기술과 거버넌스를 모두 이해하는 CSV 대응형 IT기획자로서, 제조 IT 환경에서도 빠르게 적응하고 기여할 수 있다고 판단합니다.
      </p>
    </SlideLayout>
  );
};

// Slide 8: 입사 후 기여 방안 및 마무리
const Slide8 = () => {
  const phases = [
    {
      title: "단기 (1년)",
      items: ["SAP·MES·WMS·설비 시스템 및 운영 프로세스 현황 진단", "CSV·감사 대응 관점의 리스크·개선 과제 도출 및 로드맵 수립"],
    },
    {
      title: "중기 (2~3년)",
      items: ["세종 신공장 중심 IT·CSV 표준 아키텍처 설계", "변경·릴리즈·데이터 무결성 관리 체계 고도화 및 지표화"],
    },
    {
      title: "장기 (3년+)",
      items: ["한국–미국 멀티사이트 통합 IT 거버넌스 정착", "KPI 기반 IT 투자·운영 최적화 및 경영 보고체계 구축"],
    },
  ];

  return (
    <SlideLayout title="입사 후 기여 계획 및 결론">
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {phases.map((p, idx) => (
          <Card key={idx} className="shadow-sm border border-gray-200">
            <CardHeader className="pb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-700" />
              <p className="text-sm font-semibold text-sky-900">{p.title}</p>
            </CardHeader>
            <CardContent className="text-xs text-gray-700 space-y-1">
              <ul className="list-disc list-inside space-y-1">
                {p.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-[11px] text-gray-700 mt-2 text-center">
        규제산업 IT를 검증 가능한 체계로 만들어온 경험을 바탕으로,<br />
        SK바이오텍의 GMP/CSV·생산 IT 환경을 안정적이면서도 효율적으로 발전시키는 데 기여하겠습니다.
      </p>
    </SlideLayout>
  );
};

// 전체 PT 컴포넌트 (default export)
const SKBiotechPT = () => {
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];

  return (
    <div className="w-full h-full bg-white">
      {slides.map((Comp, idx) => (
        <section key={idx} className="page-break">
          <Comp />
        </section>
      ))}
    </div>
  );
};

export default SKBiotechPT;
export { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8 };
