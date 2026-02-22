import svgPaths from "./svg-8lwu11z4xv";
import imgMale01 from "@/assets/a72455879433bac68d798446ed0c6b18a5115ab7.png";
import imgMale03 from "@/assets/7ef4bb19cd391465215ac0745e1d383fc7fcb0a5.png";
import imgMale04 from "@/assets/1c3bb7e8ea358f8837dfe2bd41230f4b3be6a4c8.png";
import imgMale05 from "@/assets/fcd447a9090298210e8d7ba7a2a51e5065937da3.png";
import imgMale02 from "@/assets/a5e90b6114662fb078b2e59ebff6a95b10d0a1c9.png";

function LeftSide() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(16.67%-10.5px)] top-[14px]" data-name="Left Side">
      <div className="-translate-x-1/2 absolute h-[21px] left-[calc(16.67%-10.5px)] rounded-[24px] top-[14px] w-[54px]" data-name="_StatusBar-time">
        <p className="-translate-x-1/2 absolute font-['TT_Commons:DemiBold',sans-serif] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-black text-center top-px tracking-[-0.408px] w-[54px] whitespace-pre-wrap">9:41</p>
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(83.33%+25.2px)] top-[19px]" data-name="Battery">
      <div className="-translate-x-1/2 absolute h-[13px] left-[calc(83.33%+24px)] top-[19px] w-[25px]" data-name="Outline">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
          <path d={svgPaths.p2a8e2e00} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="1.05509" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[4.22px] left-[calc(83.33%+38.2px)] top-[24px] w-[1.401px]" data-name="Battery End">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.40119 4.22034">
          <path d={svgPaths.p237cb000} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[9px] left-[calc(83.33%+24px)] top-[21px] w-[21px]" data-name="Fill">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
          <path d={svgPaths.pa544c00} fill="var(--fill-0, black)" id="Fill" />
        </svg>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(83.33%+0.2px)] top-[19px]" data-name="Right Side">
      <Battery />
      <div className="-translate-x-1/2 absolute h-[12px] left-[calc(83.33%-4px)] top-[20px] w-[16.999px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.999 12">
          <path d={svgPaths.p1b71200} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[12px] left-[calc(83.33%-29.5px)] top-[20px] w-[18px]" data-name="Icon / Mobile Signal">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.01)] h-[47px] overflow-clip relative shrink-0 w-full" data-name="Status Bar">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function Top() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[393px]" data-name="Top">
      <StatusBar />
    </div>
  );
}

function Left2() {
  return (
    <div className="absolute inset-[26.04%_38.54%]" data-name="Left 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.88889 10.2222">
        <g id="Left 2">
          <path d={svgPaths.p8c97f80} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Ico24SearchBig() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ico-24-search-big">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ico-24-search-big">
          <path d={svgPaths.pa7dd2c0} fill="var(--fill-0, #333333)" id="Ico" />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <Ico24SearchBig />
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#333] text-[16px]">Search</p>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-col h-[44px] items-start justify-center px-[15px] py-[12px] relative rounded-[32px] shrink-0 w-[267px]" data-name="Search bar">
      <Label />
    </div>
  );
}

function ButtonSearchBar() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Button + Search bar">
      <div className="bg-[#f8f8f8] content-stretch flex items-center justify-center p-[8px] relative rounded-[21.333px] shrink-0 size-[36px]" data-name="Button 1">
        <div className="overflow-clip relative shrink-0 size-[21.333px]" data-name="Duseat-icons-24PT-Left 2">
          <Left2 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
      </div>
      <SearchBar />
    </div>
  );
}

function MenuMeatballs() {
  return (
    <div className="absolute inset-[38.54%_5.21%]" data-name="Menu Meatballs">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1111 4.88889">
        <g id="Menu Meatballs">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3aeec380} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1a3ef780} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p199e1980} fill="var(--fill-0, #333333)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[361px]" data-name="Filters">
      <div className="bg-[#01cbd2] content-stretch flex h-[34px] items-center overflow-clip px-[14px] relative rounded-[19px] shrink-0" data-name="Cta filter">
        <p className="font-['TT_Commons:Medium',sans-serif] leading-[19px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.14px]">All</p>
      </div>
      <div className="bg-[#f4f4f4] content-stretch flex h-[34px] items-center overflow-clip px-[14px] relative rounded-[19px] shrink-0" data-name="Cta filter">
        <p className="font-['TT_Commons:Medium',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#767779] text-[14px] tracking-[-0.14px]">Deals Completed</p>
      </div>
      <div className="bg-[#f4f4f4] content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[34px]" data-name="Cta filter">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ico-24-plus">
          <div className="absolute left-[5.85px] size-[12.301px] top-[5.85px]" data-name="Ico">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3008 12.3008">
              <path d={svgPaths.p3538bb00} fill="var(--fill-0, #CCCCCC)" id="Ico" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[241px]" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px]">Anwar hosny</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Business badge">
        <div className="absolute h-[16.94px] left-[0.41px] top-[0.3px] w-[17.171px]" data-name="Badge">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1709 16.9405">
            <path d={svgPaths.p19d56530} fill="var(--fill-0, #01CBD2)" id="Badge" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Plan() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Plan">
      <div className="content-stretch flex h-[11px] items-center relative shrink-0" data-name="Rera verfied">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#01cbd2] text-[14px] tracking-[-0.14px]" dir="auto">
          Rera verfied | Pro agent
        </p>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Main content">
      <Title />
      <Plan />
    </div>
  );
}

function MentionBadge() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Mention + Badge">
      <div className="bg-[#01cbd2] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[24px] shrink-0 size-[16px]" data-name="Counter">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white">1</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[260px] pt-px top-[-1px] w-[32px]" data-name="Left">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#767779] text-[14px] text-right tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
      <p className="absolute font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic right-0 text-[#01cbd2] text-[14px] text-right top-px tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
      <MentionBadge />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[8px] relative shrink-0 w-[292px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <MainContent />
      <div className="content-stretch flex items-center relative shrink-0 w-[254px]" data-name="Messages\' preview">
        <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic overflow-hidden relative text-[#333] text-[14px] text-ellipsis tracking-[-0.14px] whitespace-pre-wrap">Preview</p>
      </div>
      <Left />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[241px]" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px]">Ahmed shahab</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Business badge">
        <div className="absolute h-[16.94px] left-[0.41px] top-[0.3px] w-[17.171px]" data-name="Badge">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1709 16.9405">
            <path d={svgPaths.p19d56530} fill="var(--fill-0, #01CBD2)" id="Badge" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Plan1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Plan">
      <div className="content-stretch flex h-[11px] items-center relative shrink-0" data-name="Rera verfied">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#01cbd2] text-[14px] tracking-[-0.14px]" dir="auto">
          Rera verfied | Pro agent
        </p>
      </div>
    </div>
  );
}

function MainContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Main content">
      <Title1 />
      <Plan1 />
    </div>
  );
}

function MentionBadge1() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Mention + Badge">
      <div className="bg-[#01cbd2] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[24px] shrink-0 size-[16px]" data-name="Counter">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white">1</p>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[260px] pt-px top-[-1px] w-[32px]" data-name="Left">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#767779] text-[14px] text-right tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
      <p className="absolute font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic right-0 text-[#01cbd2] text-[14px] text-right top-px tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
      <MentionBadge1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[8px] relative shrink-0 w-[292px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <MainContent1 />
      <div className="content-stretch flex items-center relative shrink-0 w-[254px]" data-name="Messages\' preview">
        <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic overflow-hidden relative text-[#333] text-[14px] text-ellipsis tracking-[-0.14px] whitespace-pre-wrap">Preview</p>
      </div>
      <Left1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[241px]" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px]">Ahmed Khalied</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Business badge">
        <div className="absolute h-[16.94px] left-[0.41px] top-[0.3px] w-[17.171px]" data-name="Badge">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1709 16.9405">
            <path d={svgPaths.p19d56530} fill="var(--fill-0, #01CBD2)" id="Badge" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Plan2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Plan">
      <div className="content-stretch flex h-[11px] items-center relative shrink-0" data-name="Rera verfied">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#01cbd2] text-[14px] tracking-[-0.14px]" dir="auto">
          Rera verfied | Pro agent
        </p>
      </div>
    </div>
  );
}

function MainContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Main content">
      <Title2 />
      <Plan2 />
    </div>
  );
}

function MentionBadge2() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Mention + Badge">
      <div className="bg-[#01cbd2] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[24px] shrink-0 size-[16px]" data-name="Counter">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white">1</p>
      </div>
    </div>
  );
}

function Left3() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[260px] pt-px top-[-1px] w-[32px]" data-name="Left">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#767779] text-[14px] text-right tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
      <p className="absolute font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic right-0 text-[#01cbd2] text-[14px] text-right top-px tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
      <MentionBadge2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[8px] relative shrink-0 w-[292px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <MainContent2 />
      <div className="content-stretch flex items-center relative shrink-0 w-[254px]" data-name="Messages\' preview">
        <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic overflow-hidden relative text-[#333] text-[14px] text-ellipsis tracking-[-0.14px] whitespace-pre-wrap">Preview</p>
      </div>
      <Left3 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[241px]" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px]">Mohamed Alalfy</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Business badge">
        <div className="absolute h-[16.94px] left-[0.41px] top-[0.3px] w-[17.171px]" data-name="Badge">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1709 16.9405">
            <path d={svgPaths.p19d56530} fill="var(--fill-0, #01CBD2)" id="Badge" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Plan3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Plan">
      <div className="content-stretch flex h-[11px] items-center relative shrink-0" data-name="Rera verfied">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#01cbd2] text-[14px] tracking-[-0.14px]" dir="auto">
          Rera verfied | Pro agent
        </p>
      </div>
    </div>
  );
}

function MainContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Main content">
      <Title3 />
      <Plan3 />
    </div>
  );
}

function MentionBadge3() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Mention + Badge">
      <div className="bg-[#01cbd2] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[24px] shrink-0 size-[16px]" data-name="Counter">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white">1</p>
      </div>
    </div>
  );
}

function Left4() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[260px] pt-px top-[-1px] w-[32px]" data-name="Left">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#767779] text-[14px] text-right tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
      <p className="absolute font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic right-0 text-[#01cbd2] text-[14px] text-right top-px tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
      <MentionBadge3 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[8px] relative shrink-0 w-[292px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <MainContent3 />
      <div className="content-stretch flex items-center relative shrink-0 w-[254px]" data-name="Messages\' preview">
        <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic overflow-hidden relative text-[#333] text-[14px] text-ellipsis tracking-[-0.14px] whitespace-pre-wrap">Preview</p>
      </div>
      <Left4 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[241px]" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px]">Ahmed Yasser</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Business badge">
        <div className="absolute h-[16.94px] left-[0.41px] top-[0.3px] w-[17.171px]" data-name="Badge">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1709 16.9405">
            <path d={svgPaths.p19d56530} fill="var(--fill-0, #01CBD2)" id="Badge" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Plan4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Plan">
      <div className="content-stretch flex h-[11px] items-center relative shrink-0" data-name="Rera verfied">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#01cbd2] text-[14px] tracking-[-0.14px]" dir="auto">
          Rera verfied | Pro agent
        </p>
      </div>
    </div>
  );
}

function MainContent4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Main content">
      <Title4 />
      <Plan4 />
    </div>
  );
}

function MentionBadge4() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Mention + Badge">
      <div className="bg-[#01cbd2] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[24px] shrink-0 size-[16px]" data-name="Counter">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white">1</p>
      </div>
    </div>
  );
}

function Left5() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[260px] pt-px top-[-1px] w-[32px]" data-name="Left">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#767779] text-[14px] text-right tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
      <p className="absolute font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic right-0 text-[#01cbd2] text-[14px] text-right top-px tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
      <MentionBadge4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[8px] relative shrink-0 w-[292px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <MainContent4 />
      <div className="content-stretch flex items-center relative shrink-0 w-[254px]" data-name="Messages\' preview">
        <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic overflow-hidden relative text-[#333] text-[14px] text-ellipsis tracking-[-0.14px] whitespace-pre-wrap">Preview</p>
      </div>
      <Left5 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] h-[627px] items-center overflow-x-clip overflow-y-auto relative shrink-0 w-[369px]" data-name="Content">
      <div className="bg-[rgba(255,255,255,0.19)] content-stretch flex gap-[8px] items-center relative shrink-0 w-[361px]" data-name="Investor User card">
        <div className="relative shrink-0 size-[56px]" data-name="Investor Avatar Card">
          <div className="absolute inset-0 rounded-[48px]" data-name="Male01">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[48px]">
              <img alt="" className="absolute h-[133.33%] left-[-0.81%] max-w-none top-[-4.16%] w-full" src={imgMale01} />
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start left-[calc(50%+22px)] top-[calc(50%+22px)]" data-name="online">
            <div className="relative shrink-0 size-[12px]" data-name="online">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <circle cx="6" cy="6" fill="var(--fill-0, #0ED221)" id="online" r="5.5" stroke="var(--stroke-0, white)" />
              </svg>
            </div>
          </div>
        </div>
        <Text />
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[361px]" data-name="User card">
        <div className="relative shrink-0 size-[56px]" data-name="Investor Avatar Card">
          <div className="absolute inset-0 rounded-[48px]" data-name="Male03">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[48px]">
              <img alt="" className="absolute left-[-35.88%] max-w-none size-[214.65%] top-[-23.51%]" src={imgMale03} />
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start left-[calc(50%+22px)] top-[calc(50%+22px)]" data-name="online">
            <div className="relative shrink-0 size-[12px]" data-name="online">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <circle cx="6" cy="6" fill="var(--fill-0, #0ED221)" id="online" r="5.5" stroke="var(--stroke-0, white)" />
              </svg>
            </div>
          </div>
        </div>
        <Text1 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[361px]" data-name="User card">
        <div className="relative shrink-0 size-[56px]" data-name="Investor Avatar Card">
          <div className="absolute inset-0 rounded-[48px]" data-name="Male04">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[48px] size-full" src={imgMale04} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start left-[calc(50%+22px)] top-[calc(50%+22px)]" data-name="online">
            <div className="relative shrink-0 size-[12px]" data-name="online">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <circle cx="6" cy="6" fill="var(--fill-0, #0ED221)" id="online" r="5.5" stroke="var(--stroke-0, white)" />
              </svg>
            </div>
          </div>
        </div>
        <Text2 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[361px]" data-name="User card">
        <div className="relative shrink-0 size-[56px]" data-name="Investor Avatar Card">
          <div className="absolute inset-0 rounded-[48px]" data-name="Male05">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[48px] size-full" src={imgMale05} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start left-[calc(50%+22px)] top-[calc(50%+22px)]" data-name="online">
            <div className="relative shrink-0 size-[12px]" data-name="online">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <circle cx="6" cy="6" fill="var(--fill-0, #0ED221)" id="online" r="5.5" stroke="var(--stroke-0, white)" />
              </svg>
            </div>
          </div>
        </div>
        <Text3 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[361px]" data-name="User card">
        <div className="relative shrink-0 size-[56px]" data-name="Investor Avatar Card">
          <div className="absolute inset-0 rounded-[48px]" data-name="Male02">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[48px]">
              <img alt="" className="absolute h-[265.72%] left-[-93.35%] max-w-none top-[-19.64%] w-[265.31%]" src={imgMale02} />
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start left-[calc(50%+22px)] top-[calc(50%+22px)]" data-name="online">
            <div className="relative shrink-0 size-[12px]" data-name="online">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <circle cx="6" cy="6" fill="var(--fill-0, #0ED221)" id="online" r="5.5" stroke="var(--stroke-0, white)" />
              </svg>
            </div>
          </div>
        </div>
        <Text4 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[19px] items-center min-h-px min-w-px relative w-[393px]" data-name="Main">
      <div className="bg-white content-stretch flex gap-[12px] h-[60px] items-center px-[16px] py-[10px] relative shrink-0 w-[393px]" data-name="Page bar">
        <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
        <ButtonSearchBar />
        <div className="bg-[#f8f8f8] content-stretch flex items-center justify-center p-[8px] relative rounded-[21.333px] shrink-0 size-[36px]" data-name="Button 2">
          <div className="overflow-clip relative shrink-0 size-[21.333px]" data-name="Duseat-icons-24PT-Menu Meatballs">
            <MenuMeatballs />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
        </div>
      </div>
      <Filters />
      <Content />
    </div>
  );
}

function ChatListMain() {
  return (
    <div className="bg-[#01cbd2] content-stretch flex flex-col h-[852px] items-start overflow-clip relative rounded-[16px] shrink-0 w-[393px]" data-name="Chat-list [main]">
      <Top />
      <Main />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-full" data-name="Title">
      <div aria-hidden="true" className="absolute border-[#f8f8f8] border-b border-solid inset-0 pointer-events-none" />
      <div className="h-0 relative shrink-0 w-[46px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 3">
            <line id="Line 1" stroke="var(--stroke-0, #050B2E)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="44.5" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#050b2e] text-[21px] text-center w-[min-content] whitespace-pre-wrap">Add new filter</p>
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#050b2e] text-[0px] w-full whitespace-pre-wrap">
        <span className="leading-none text-[21px]">{`Filter name `}</span>
        <span className="leading-none text-[#ccc] text-[12px]">(Min 2 characters)</span>
      </p>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-white h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-px items-center p-[10px] relative size-full">
          <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[17px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                    <line id="Line 2" stroke="var(--stroke-0, #333333)" x2="17" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#ccc] text-[21px] text-center">e.g. Area, Agents, Closed deals</p>
        </div>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input field">
      <Label1 />
    </div>
  );
}

function FilterName() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Filter name">
      <Title6 />
      <InputField />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] w-full whitespace-pre-wrap">Included agents</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-white h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <p className="font-['TT_Commons:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#ccc] text-[21px] text-center">
            <span className="leading-none text-[#050b2e]">+</span>
            <span className="leading-none">{` Add agents`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input field">
      <Label2 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px]" dir="auto">
          Ahmed Khaled
        </p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <Title8 />
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px]" dir="auto">
          Ahmed Khaled
        </p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <Title9 />
    </div>
  );
}

function Title10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px]" dir="auto">
          Ahmed Khaled
        </p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <Title10 />
    </div>
  );
}

function Title11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px]" dir="auto">
          Ahmed Khaled
        </p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <Title11 />
    </div>
  );
}

function Title12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px]" dir="auto">
          Ahmed Khaled
        </p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <Title12 />
    </div>
  );
}

function SmallCard() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full" data-name="Small card">
      <div className="bg-white content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)] shrink-0" data-name="Small card">
        <div className="relative shrink-0 size-[24px]" data-name="Main chat Avatar">
          <div className="absolute inset-0 rounded-[41.984px]" data-name="Male04">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[41.984px] size-full" src={imgMale04} />
          </div>
        </div>
        <Text5 />
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)] shrink-0" data-name="Small card">
        <div className="relative shrink-0 size-[24px]" data-name="Main chat Avatar">
          <div className="absolute inset-0 rounded-[41.984px]" data-name="Male04">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[41.984px] size-full" src={imgMale04} />
          </div>
        </div>
        <Text6 />
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)] shrink-0" data-name="Small card">
        <div className="relative shrink-0 size-[24px]" data-name="Main chat Avatar">
          <div className="absolute inset-0 rounded-[41.984px]" data-name="Male04">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[41.984px] size-full" src={imgMale04} />
          </div>
        </div>
        <Text7 />
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)] shrink-0" data-name="Small card">
        <div className="relative shrink-0 size-[24px]" data-name="Main chat Avatar">
          <div className="absolute inset-0 rounded-[41.984px]" data-name="Male04">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[41.984px] size-full" src={imgMale04} />
          </div>
        </div>
        <Text8 />
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)] shrink-0" data-name="Small card">
        <div className="relative shrink-0 size-[24px]" data-name="Main chat Avatar">
          <div className="absolute inset-0 rounded-[41.984px]" data-name="Male04">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[41.984px] size-full" src={imgMale04} />
          </div>
        </div>
        <Text9 />
      </div>
    </div>
  );
}

function IncludedAgents() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Included agents">
      <Title7 />
      <InputField1 />
      <SmallCard />
    </div>
  );
}

function Button() {
  return (
    <button className="bg-[#01cbd2] cursor-pointer h-[44px] relative rounded-[20px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="flex-[1_0_0] font-['TT_Commons:Medium',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[16px] text-center text-white whitespace-pre-wrap" dir="auto">
            Done
          </p>
        </div>
      </div>
    </button>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[341px]" data-name="Content">
      <FilterName />
      <IncludedAgents />
      <Button />
    </div>
  );
}

function Title13() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-full" data-name="Title">
      <div aria-hidden="true" className="absolute border-[#f8f8f8] border-b border-solid inset-0 pointer-events-none" />
      <div className="h-0 relative shrink-0 w-[46px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 3">
            <line id="Line 1" stroke="var(--stroke-0, #050B2E)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="44.5" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#050b2e] text-[21px] text-center w-[min-content] whitespace-pre-wrap">Create Label</p>
    </div>
  );
}

function Title14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#050b2e] text-[0px] w-full whitespace-pre-wrap">
        <span className="leading-none text-[21px]">{`Label name `}</span>
        <span className="leading-none text-[#ccc] text-[12px]">(Min 2 characters)</span>
      </p>
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-white h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-px items-center p-[10px] relative size-full">
          <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[17px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                    <line id="Line 2" stroke="var(--stroke-0, #333333)" x2="17" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#ccc] text-[21px] text-center">e.g. Top agents, Fast responders</p>
        </div>
      </div>
    </div>
  );
}

function InputField2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input field">
      <Label3 />
    </div>
  );
}

function FilterName1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Filter name">
      <Title14 />
      <InputField2 />
    </div>
  );
}

function Title15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] w-full whitespace-pre-wrap">Included investors</p>
    </div>
  );
}

function Label4() {
  return (
    <div className="bg-white h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <p className="font-['TT_Commons:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#ccc] text-[21px] text-center">
            <span className="leading-none text-[#050b2e]">+</span>
            <span className="leading-none">{` Add agent`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function InputField3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input field">
      <Label4 />
    </div>
  );
}

function IncludedAgents1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Included agents">
      <Title15 />
      <InputField3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ccc] content-stretch flex h-[44px] items-center justify-center p-[10px] relative rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-[361px]" data-name="Button">
      <p className="flex-[1_0_0] font-['TT_Commons:Medium',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[16px] text-center text-white whitespace-pre-wrap" dir="auto">
        Done
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[341px]" data-name="Content">
      <FilterName1 />
      <IncludedAgents1 />
      <Button1 />
    </div>
  );
}

function ConfrimDeal() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[15px] bg-white bottom-0 content-stretch flex flex-col gap-[24px] items-center left-1/2 py-[32px] rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_5px_20px_0px_rgba(0,0,0,0.15)] w-[393px]" data-name="Confrim deal">
      <Title13 />
      <Content2 />
    </div>
  );
}

export default function ChatListApplyLabel() {
  return (
    <div className="bg-[#01cbd2] content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] size-full" data-name="Chat-list [ Apply Label]">
      <ChatListMain />
      <div className="absolute bg-[rgba(51,51,51,0.5)] h-[852px] left-0 top-0 w-[393px]" />
      <div className="-translate-x-1/2 absolute backdrop-blur-[15px] bg-white bottom-[-516px] content-stretch flex flex-col gap-[24px] items-center left-1/2 py-[32px] rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_5px_20px_0px_rgba(0,0,0,0.15)] w-[393px]" data-name="Confrim deal">
        <Title5 />
        <Content1 />
      </div>
      <ConfrimDeal />
    </div>
  );
}
