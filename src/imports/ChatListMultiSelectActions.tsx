import svgPaths from "./svg-izm28wsrf4";
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

function Top() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[393px]" data-name="Top">
      <StatusBar />
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

function Left() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[260px] pt-px top-[-1px] w-[32px]" data-name="Left">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#767779] text-[14px] text-right tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[8px] relative shrink-0 w-[292px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <MainContent />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[254px]" data-name="Messages\' preview">
        <div className="overflow-clip relative shrink-0 size-[19px]" data-name="Check mark">
          <div className="absolute h-[9.136px] left-px top-[4px] w-[14.202px]" data-name="Ico">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2022 9.13692">
              <path d={svgPaths.p28807900} fill="var(--fill-0, black)" fillOpacity="0.5" id="Ico" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic overflow-hidden relative text-[#ccc] text-[14px] text-ellipsis tracking-[-0.14px] whitespace-pre-wrap">Thanks. Is the villa available for...</p>
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

function MentionBadge() {
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
      <MentionBadge />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[8px] relative shrink-0 w-[292px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <MainContent1 />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[254px]" data-name="Messages\' preview">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Message type">
          <div className="absolute h-[14.6px] left-[2.9px] top-px w-[10.199px]" data-name="Ico">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1992 14.5996">
              <path d={svgPaths.pa4a0e80} fill="var(--fill-0, #333333)" id="Ico" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic overflow-hidden relative text-[#333] text-[14px] text-ellipsis tracking-[-0.14px] whitespace-pre-wrap">0:25</p>
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

function Left3() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[260px] pt-px top-[-1px] w-[32px]" data-name="Left">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#767779] text-[14px] text-right tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[8px] relative shrink-0 w-[292px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <MainContent2 />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[254px]" data-name="Messages\' preview">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Message type">
          <div className="absolute h-[10px] left-0 top-[3px] w-[16px]" data-name="Ico">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
              <path d={svgPaths.p19f63b00} fill="var(--fill-0, #CCCCCC)" id="Ico" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[19px]" data-name="Check mark">
          <div className="absolute h-[10.601px] left-px top-[4px] w-[16.267px]" data-name="Ico">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2659 10.6005">
              <path d={svgPaths.p1fd76200} fill="var(--fill-0, #01CBD2)" id="Ico" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic overflow-hidden relative text-[#ccc] text-[14px] text-ellipsis tracking-[-0.14px] whitespace-pre-wrap">Video</p>
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

function MentionBadge1() {
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
      <MentionBadge1 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[8px] relative shrink-0 w-[292px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <MainContent3 />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[254px]" data-name="Messages\' preview">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Message type">
          <div className="absolute h-[10px] left-0 top-[3px] w-[16px]" data-name="Ico">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
              <path d={svgPaths.p19f63b00} fill="var(--fill-0, #333333)" id="Ico" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic overflow-hidden relative text-[#333] text-[14px] text-ellipsis tracking-[-0.14px] whitespace-pre-wrap">Video</p>
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

function Left5() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[260px] pt-px top-[-1px] w-[32px]" data-name="Left">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#767779] text-[14px] text-right tracking-[-0.14px] w-[80px] whitespace-pre-wrap">11:23</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[8px] relative shrink-0 w-[292px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <MainContent4 />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[254px]" data-name="Messages\' preview">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Message type">
          <div className="absolute h-[11.5px] left-px top-[2px] w-[14px]" data-name="Ico">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11.5">
              <path d={svgPaths.p1ac5a472} fill="var(--fill-0, #CCCCCC)" id="Ico" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[19px]" data-name="Check mark">
          <div className="absolute h-[10.601px] left-px top-[4px] w-[16.267px]" data-name="Ico">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2665 10.5998">
              <path d={svgPaths.pccf9700} fill="var(--fill-0, #CCCCCC)" id="Ico" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic overflow-hidden relative text-[#ccc] text-[14px] text-ellipsis tracking-[-0.14px] whitespace-pre-wrap">Photo</p>
      </div>
      <Left5 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] h-[627px] items-center overflow-x-clip overflow-y-auto relative shrink-0 w-[369px]" data-name="Content">
      <Filters />
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

function Setting() {
  return (
    <div className="absolute inset-[2.73%_7.02%_2.73%_7.01%]" data-name="Setting">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6327 22.6885">
        <g id="Setting">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p26739700} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p191af900} fill="var(--fill-0, #333333)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GeneralSettings() {
  return (
    <div className="relative shrink-0 w-full" data-name="General Settings">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Duseat-icons-24PT-Setting">
            <Setting />
          </div>
          <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-black">General Settings</p>
        </div>
      </div>
    </div>
  );
}

function TickSquare() {
  return (
    <div className="absolute inset-[9.37%_9.38%_9.38%_9.37%]" data-name="Tick Square">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        <g id="Tick Square">
          <g id="Vector">
            <path d={svgPaths.p5a6b400} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p142cf000} fill="var(--fill-0, #333333)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArchiveChats() {
  return (
    <div className="relative shrink-0 w-full" data-name="Archive chats">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Duseat-icons-24PT-Tick Square">
            <TickSquare />
          </div>
          <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[16px] text-black whitespace-pre-wrap">Select chat</p>
        </div>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="absolute inset-[9.38%_7.86%_13.54%_9.38%]" data-name="Message 38">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8642 18.5">
        <g id="Message 38">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p9a81200} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p23d2ed80} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArchiveChats1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Archive chats">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Duseat-icons-24PT-Message 38">
            <Message />
          </div>
          <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[16px] text-black whitespace-pre-wrap">Select all as read</p>
        </div>
      </div>
    </div>
  );
}

function Knob() {
  return <div className="absolute bg-white bottom-[6.45%] right-[2px] rounded-[100px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.04),0px_3px_8px_0px_rgba(0,0,0,0.15),0px_3px_1px_0px_rgba(0,0,0,0.06)] top-[6.45%] w-[27px]" data-name="Knob" />;
}

function ArchiveChats2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Archive chats">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[16px] text-black whitespace-pre-wrap">Show Archive</p>
          <button className="bg-[#01cbd2] block cursor-pointer h-[31px] overflow-clip relative rounded-[100px] shrink-0 w-[51px]" data-name="Toggle">
            <Knob />
          </button>
        </div>
      </div>
    </div>
  );
}

function Knob1() {
  return <div className="absolute bg-white bottom-[6.45%] right-[2px] rounded-[100px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.04),0px_3px_8px_0px_rgba(0,0,0,0.15),0px_3px_1px_0px_rgba(0,0,0,0.06)] top-[6.45%] w-[27px]" data-name="Knob" />;
}

function ArchiveChats3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Archive chats">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[16px] text-black whitespace-pre-wrap">Show Labels</p>
          <button className="bg-[#01cbd2] block cursor-pointer h-[31px] overflow-clip relative rounded-[100px] shrink-0 w-[51px]" data-name="Toggle">
            <Knob1 />
          </button>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[19px] items-center min-h-px min-w-px py-[12px] relative w-[393px]" data-name="Main">
      <Content />
      <div className="absolute bg-white content-stretch flex flex-col items-center left-[191px] px-[14px] py-[8px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0" data-name="Pop menu">
        <GeneralSettings />
        <ArchiveChats />
        <ArchiveChats1 />
        <ArchiveChats2 />
        <ArchiveChats3 />
      </div>
    </div>
  );
}

export default function ChatListMultiSelectActions() {
  return (
    <div className="bg-[#01cbd2] content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] size-full" data-name="Chat-list [Multi select actions]">
      <Top />
      <Main />
    </div>
  );
}
