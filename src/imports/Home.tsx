import svgPaths from "./svg-wb9ji724zn";
import imgMale01 from "@/assets/a72455879433bac68d798446ed0c6b18a5115ab7.png";
import { imgFlag } from "./svg-lchmx";

function LeftSide() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(16.67%-10.5px)] top-[14px]" data-name="Left Side">
      <div className="-translate-x-1/2 absolute h-[21px] left-[calc(16.67%-10.5px)] rounded-[24px] top-[14px] w-[54px]" data-name="_StatusBar-time">
        <p className="-translate-x-1/2 absolute font-['TT_Commons:DemiBold',sans-serif] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-black text-center top-px tracking-[-0.408px] w-[54px] whitespace-pre-wrap">9:41</p>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="-translate-x-1/2 absolute h-[13px] left-[calc(83.33%+0.2px)] top-[19px] w-[77.401px]" data-name="Right Side">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.4012 13.0001">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p2646e000} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="1.05509" />
            <path d={svgPaths.p4c0c710} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
            <path d={svgPaths.p22239c00} fill="var(--fill-0, black)" id="Fill" />
          </g>
          <path d={svgPaths.p2fb3b980} fill="var(--fill-0, black)" id="Wifi" />
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p16816b00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p18ef7a00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2262f080} fill="var(--fill-0, black)" />
            <path d={svgPaths.pc5da680} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute backdrop-blur-[15px] bg-[rgba(255,255,255,0.01)] h-[47px] left-0 overflow-clip top-0 w-[393px]" data-name="Status Bar">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function AvatarCard() {
  return (
    <div className="content-stretch flex h-[50px] items-center justify-center relative shrink-0 w-[51px]" data-name="Avatar Card">
      <div className="absolute inset-[0.04%_0.07%_-0.04%_1.89%] pointer-events-none rounded-[64.286px]" data-name="Male01">
        <div className="absolute inset-0 overflow-hidden rounded-[64.286px]">
          <img alt="" className="absolute h-[133.33%] left-[-0.81%] max-w-none top-[-4.16%] w-full" src={imgMale01} />
        </div>
        <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 rounded-[64.286px]" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <AvatarCard />
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#050b2e] text-[0px] text-[21px]">
        <span className="font-['TT_Commons:Medium',sans-serif] leading-none text-[#01cbd2]">Welcome</span>
        <span className="leading-none text-[#01cbd2]">,</span>
        <span className="leading-none">{` Mohamed Salah`}</span>
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0">
      <Frame5 />
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#999] text-[16px] w-[359px] whitespace-pre-wrap">Opportunities don’t wait — post your request and let offers come to you</p>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative shrink-0 w-[55px]">
      <div aria-hidden="true" className="absolute border-[#01cbd2] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#01cbd2] text-[16px]">General</p>
    </div>
  );
}

function Frame1() {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center px-[10px] relative shrink-0">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#999] text-[16px] text-left">Offers</p>
    </button>
  );
}

function Frame2() {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center px-[10px] relative shrink-0">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#999] text-[16px] text-left">{`Real estate owners `}</p>
    </button>
  );
}

function Frame3() {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center px-[10px] relative shrink-0">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#999] text-[16px] text-left">Archives</p>
    </button>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[13px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[392.913px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Name />
      <div className="content-stretch flex gap-[13px] items-center relative shrink-0" data-name="Filters">
        <Frame />
        <Frame1 />
        <Frame2 />
        <Frame3 />
      </div>
    </div>
  );
}

function Ico24SearchBig() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ico-24-search-big">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ico-24-search-big">
          <path d={svgPaths.pa7dd2c0} fill="var(--fill-0, #CCCCCC)" id="Ico" />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <Ico24SearchBig />
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#ccc] text-[16px]">Search</p>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[32px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01)]" data-name="Search bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[15px] py-[12px] relative size-full">
          <Label />
        </div>
      </div>
    </div>
  );
}

function ButtonSearchBar() {
  return (
    <div className="content-stretch flex h-[44px] items-center relative shrink-0 w-[361px]" data-name="Button + Search bar">
      <SearchBar />
    </div>
  );
}

function Search() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[16px] py-[12px] relative shrink-0 w-[393px]" data-name="Search">
      <ButtonSearchBar />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Main">
      <Header />
      <Search />
    </div>
  );
}

function AvatarCard1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Avatar Card">
      <div className="absolute inset-[1.06%_0_-1.06%_0] rounded-[43.025px]" data-name="Male01">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[43.025px]">
          <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-1.11%] w-full" src={imgMale01} />
        </div>
      </div>
      <div className="absolute left-[-2px] overflow-clip size-[12px] top-[-2.12px]" data-name="flag placeholder">
        <div className="absolute inset-0 rounded-[9999px] shadow-[0px_1.594px_2.39px_0px_rgba(0,0,0,0.1)]" data-name="shadow" />
        <div className="absolute inset-0 overflow-clip rounded-[7966.835px]" data-name="flag">
          <div className="absolute contents inset-0" data-name="flag">
            <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_24px]" data-name="contents" style={{ maskImage: `url('${imgFlag}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 24">
                <g id="contents">
                  <path clipRule="evenodd" d="M0 0V24H32V0H0Z" fill="var(--fill-0, #F7FCFF)" fillRule="evenodd" id="background" />
                  <mask height="24" id="mask0_1_1216" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
                    <path clipRule="evenodd" d="M0 0V24H32V0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="background_2" />
                  </mask>
                  <g mask="url(#mask0_1_1216)">
                    <path clipRule="evenodd" d="M0 0V8H32V0H0Z" fill="var(--fill-0, #E31D1C)" fillRule="evenodd" id="top" />
                    <path clipRule="evenodd" d="M0 16V24H32V16H0Z" fill="var(--fill-0, #3D58DB)" fillRule="evenodd" id="bottom" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.7)] inset-0 mix-blend-overlay rounded-[9999px] to-[rgba(0,0,0,0.3)]" data-name="overlay-top-down" />
        <div className="absolute inset-0 mix-blend-overlay rounded-[9999px]" data-name="overlay-real-linear" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 19.122 19.122\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(2.7087e-15 2.1911 -2.0553 -1.3487e-15 9.5612 2.7887)\\'><stop stop-color=\\'rgba(255,255,255,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(191,191,191,0.285)\\' offset=\\'0.072313\\'/><stop stop-color=\\'rgba(128,128,128,0.27)\\' offset=\\'0.14463\\'/><stop stop-color=\\'rgba(64,64,64,0.255)\\' offset=\\'0.21694\\'/><stop stop-color=\\'rgba(32,32,32,0.2475)\\' offset=\\'0.2531\\'/><stop stop-color=\\'rgba(0,0,0,0.24)\\' offset=\\'0.28925\\'/><stop stop-color=\\'rgba(0,0,0,0.55)\\' offset=\\'0.46298\\'/><stop stop-color=\\'rgba(16,16,16,0.53188)\\' offset=\\'0.4719\\'/><stop stop-color=\\'rgba(32,32,32,0.51375)\\' offset=\\'0.48082\\'/><stop stop-color=\\'rgba(64,64,64,0.4775)\\' offset=\\'0.49866\\'/><stop stop-color=\\'rgba(96,96,96,0.44125)\\' offset=\\'0.5165\\'/><stop stop-color=\\'rgba(128,128,128,0.405)\\' offset=\\'0.53434\\'/><stop stop-color=\\'rgba(191,191,191,0.3325)\\' offset=\\'0.57002\\'/><stop stop-color=\\'rgba(255,255,255,0.26)\\' offset=\\'0.6057\\'/><stop stop-color=\\'rgba(191,191,191,0.2375)\\' offset=\\'0.63595\\'/><stop stop-color=\\'rgba(128,128,128,0.215)\\' offset=\\'0.6662\\'/><stop stop-color=\\'rgba(64,64,64,0.1925)\\' offset=\\'0.69645\\'/><stop stop-color=\\'rgba(32,32,32,0.18125)\\' offset=\\'0.71158\\'/><stop stop-color=\\'rgba(0,0,0,0.17)\\' offset=\\'0.7267\\'/><stop stop-color=\\'rgba(32,32,32,0.18625)\\' offset=\\'0.76087\\'/><stop stop-color=\\'rgba(64,64,64,0.2025)\\' offset=\\'0.79503\\'/><stop stop-color=\\'rgba(128,128,128,0.235)\\' offset=\\'0.86335\\'/><stop stop-color=\\'rgba(191,191,191,0.2675)\\' offset=\\'0.93168\\'/><stop stop-color=\\'rgba(255,255,255,0.3)\\' offset=\\'1\\'/></radialGradient></defs></svg>\')" }} />
        <div className="absolute border-[0.797px] border-[rgba(0,0,0,0.1)] border-solid inset-0 rounded-[9999px]" data-name="border" />
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Name">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px]">Anwar hosny</p>
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

function Online() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="online">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #0ED221)" id="Ellipse 5" r="4" />
        </svg>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#a6a6a6] text-[12px]">Online (Avg 10m)</p>
    </div>
  );
}

function NameStatus() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[39px] items-start justify-center relative shrink-0" data-name="Name + status">
      <Name1 />
      <Online />
    </div>
  );
}

function AvatarName() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Avatar + name">
      <AvatarCard1 />
      <NameStatus />
    </div>
  );
}

function TimeCircle() {
  return (
    <div className="absolute inset-[2.08%_5.21%_4.17%_5.21%]" data-name="Time Circle 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5417 13.1251">
        <g id="Time Circle 1">
          <g id="Vector">
            <path d={svgPaths.p5ad5900} fill="var(--fill-0, #A6A6A6)" />
            <path d={svgPaths.p29111c80} fill="var(--fill-0, #A6A6A6)" />
            <path d={svgPaths.p3aedf000} fill="var(--fill-0, #A6A6A6)" />
            <path clipRule="evenodd" d={svgPaths.pd070e00} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-h-px min-w-px relative" data-name="Time">
      <div className="relative shrink-0 size-[14px]" data-name="Icon swap">
        <div className="absolute inset-0" data-name="Duseat-icons-24PT-Time Circle 1">
          <TimeCircle />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#a6a6a6] text-[12px]">3 min ago</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-end min-h-px min-w-px relative">
      <div className="content-stretch flex flex-[1_0_0] items-start justify-end min-h-px min-w-px relative w-full" data-name="tags base">
        <div className="content-stretch flex gap-[6px] items-center justify-center pl-[6px] pr-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tags base">
          <div aria-hidden="true" className="absolute border border-[rgba(5,11,46,0.63)] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="overflow-clip relative shrink-0 size-[8px]" data-name="_Dot">
            <div className="absolute left-px size-[6px] top-px" data-name="Dot">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <circle cx="3" cy="3" fill="var(--fill-0, #050B2E)" fillOpacity="0.63" id="Dot" r="3" />
              </svg>
            </div>
          </div>
          <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(5,11,46,0.63)] text-center">New request</p>
        </div>
      </div>
      <Time />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[50px] items-center relative shrink-0 w-full">
      <AvatarName />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame13 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function User() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="User">
      <Frame17 />
    </div>
  );
}

function NoteStreamlineTabler() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Note Streamline Tabler">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Note Streamline Tabler">
          <path d={svgPaths.p386d9a80} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p191fe580} id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Note() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Note">
      <NoteStreamlineTabler />
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#666] text-[12px] text-center" dir="auto">
        Note:
      </p>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[12px]">Flexible on handover date</p>
    </div>
  );
}

function Request() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[3px] relative shrink-0 w-full" data-name="Request">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] w-full whitespace-pre-wrap">I’m looking for a ready-to-move 4 Bedroom Villa for living in Al Barsha.</p>
      <Note />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10.08px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.08 10.08">
          <path d={svgPaths.p36253400} fill="var(--fill-0, #A6A6A6)" id="Vector" />
        </svg>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#a6a6a6] text-[12px] text-center" dir="auto">
        Budget
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame12 />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] text-center">3.8M AED</p>
    </div>
  );
}

function Budget() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Budget">
      <div aria-hidden="true" className="absolute border border-[#f8f8f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-[8px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <div className="h-[10.08px] relative shrink-0 w-[7.56px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.56 10.08">
          <path d={svgPaths.p24665a00} fill="var(--fill-0, #A6A6A6)" id="Vector" />
        </svg>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#a6a6a6] text-[12px] text-center" dir="auto">
        Type
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame15 />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] text-center">Living</p>
    </div>
  );
}

function Budget1() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Budget">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-[8px] relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <div className="h-[10px] relative shrink-0 w-[10.08px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.08 10.0003">
          <path clipRule="evenodd" d={svgPaths.pd00870} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" id="Union" />
        </svg>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#717171] text-[12px] text-center" dir="auto">
        Method
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame16 />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] text-center">Mortgage</p>
    </div>
  );
}

function Budget2() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Budget">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-[8px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Cards1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-center justify-center relative shrink-0 w-[361px]" data-name="Cards">
      <Budget />
      <Budget1 />
      <Budget2 />
    </div>
  );
}

function TicketStar() {
  return (
    <div className="absolute inset-[13.54%_5.21%]" data-name="Ticket Star 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5417 10.2084">
        <g id="Ticket Star 2">
          <g id="Vector">
            <path d={svgPaths.pf08f270} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.p15dc2600} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.p502a500} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.p2d52c00} fill="var(--fill-0, #999999)" />
            <path clipRule="evenodd" d={svgPaths.p16800200} fill="var(--fill-0, #999999)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p25b9a3f0} fill="var(--fill-0, #999999)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Message() {
  return (
    <div className="absolute inset-[5.21%_5.21%_5.17%_1.04%]" data-name="Message 18">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8751 16.1321">
        <g id="Message 18">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pdcb5180} fill="#999999" fillRule="evenodd" />
            <path d={svgPaths.p3e4f6500} fill="#999999" />
            <path d={svgPaths.p2c8af780} fill="#999999" />
            <path d={svgPaths.p147b2400} fill="#999999" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Comment() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Comment">
      <div className="relative shrink-0 size-[18px]" data-name="Icon swap">
        <div className="absolute inset-0" data-name="Duseat-icons-24PT-Message 18">
          <Message />
        </div>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[rgba(5,11,46,0.07)] content-stretch flex gap-[4px] h-[21px] items-center justify-center pr-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="tags base">
        <div className="relative shrink-0 size-[14px]" data-name="Icon swap">
          <div className="absolute inset-0" data-name="Duseat-icons-24PT-Ticket Star 2">
            <TicketStar />
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#999] text-[12px] text-center">12 offers submitted</p>
      </div>
      <Comment />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Cards">
      <Cards1 />
      <Tags />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Request />
      <Cards />
    </div>
  );
}

function DocumentAlignRight() {
  return (
    <div className="absolute inset-[5.21%_9.38%_5.21%_9.37%]" data-name="Document Align Right 7">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 10.75">
        <g id="Document Align Right 7">
          <g id="Vector">
            <path d={svgPaths.p25f91e70} fill="var(--fill-0, #01CBD2)" />
            <path d={svgPaths.p2db6d500} fill="var(--fill-0, #01CBD2)" />
            <path d={svgPaths.pa0e5680} fill="var(--fill-0, #01CBD2)" />
            <path clipRule="evenodd" d={svgPaths.p27094500} fill="var(--fill-0, #01CBD2)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DeatilsButton() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[24px]" data-name="Deatils Button">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative size-full">
          <div className="relative shrink-0 size-[12px]" data-name="Icon swap">
            <div className="absolute inset-0" data-name="Duseat-icons-24PT-Document Align Right 7">
              <DocumentAlignRight />
            </div>
          </div>
          <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#01cbd2] text-[16px] text-center" dir="auto">
            See Details
          </p>
        </div>
      </div>
    </div>
  );
}

function Send() {
  return (
    <div className="absolute inset-[7.94%_6.03%_7.46%_9.38%]" data-name="Send 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1517 10.1519">
        <g id="Send 2">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p964bd00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p36f6b700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3a38e700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b65cc00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#01cbd2] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[24px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative size-full">
          <div className="relative shrink-0 size-[12px]" data-name="Icon swap">
            <div className="absolute inset-0" data-name="Duseat-icons-24PT-Send 2">
              <Send />
            </div>
          </div>
          <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white w-[37px] whitespace-pre-wrap" dir="auto">
            Apply
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuMeatballs() {
  return (
    <div className="absolute inset-[38.54%_5.21%]" data-name="Menu Meatballs">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1111 4.88894">
        <g id="Menu Meatballs">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p17aefa00} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf505340} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p32868c80} fill="var(--fill-0, #333333)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Buttons">
      <DeatilsButton />
      <Button />
      <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[21.333px] shrink-0 size-[36px]" data-name="Button 3">
        <div className="overflow-clip relative shrink-0 size-[21.333px]" data-name="Duseat-icons-24PT-Menu Meatballs">
          <MenuMeatballs />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
      </div>
    </div>
  );
}

function AvatarCard2() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Avatar Card">
      <div className="absolute inset-[1.06%_0_-1.06%_0] rounded-[43.025px]" data-name="Male01">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[43.025px]">
          <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-1.11%] w-full" src={imgMale01} />
        </div>
      </div>
      <div className="absolute left-[-2px] overflow-clip size-[12px] top-[-2.12px]" data-name="flag placeholder">
        <div className="absolute inset-0 rounded-[9999px] shadow-[0px_1.594px_2.39px_0px_rgba(0,0,0,0.1)]" data-name="shadow" />
        <div className="absolute inset-0 overflow-clip rounded-[7966.835px]" data-name="flag">
          <div className="absolute contents inset-0" data-name="flag">
            <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_24px]" data-name="contents" style={{ maskImage: `url('${imgFlag}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 24">
                <g id="contents">
                  <path clipRule="evenodd" d="M0 0V24H32V0H0Z" fill="var(--fill-0, #F7FCFF)" fillRule="evenodd" id="background" />
                  <mask height="24" id="mask0_1_1216" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
                    <path clipRule="evenodd" d="M0 0V24H32V0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="background_2" />
                  </mask>
                  <g mask="url(#mask0_1_1216)">
                    <path clipRule="evenodd" d="M0 0V8H32V0H0Z" fill="var(--fill-0, #E31D1C)" fillRule="evenodd" id="top" />
                    <path clipRule="evenodd" d="M0 16V24H32V16H0Z" fill="var(--fill-0, #3D58DB)" fillRule="evenodd" id="bottom" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.7)] inset-0 mix-blend-overlay rounded-[9999px] to-[rgba(0,0,0,0.3)]" data-name="overlay-top-down" />
        <div className="absolute inset-0 mix-blend-overlay rounded-[9999px]" data-name="overlay-real-linear" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 19.122 19.122\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(2.7087e-15 2.1911 -2.0553 -1.3487e-15 9.5612 2.7887)\\'><stop stop-color=\\'rgba(255,255,255,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(191,191,191,0.285)\\' offset=\\'0.072313\\'/><stop stop-color=\\'rgba(128,128,128,0.27)\\' offset=\\'0.14463\\'/><stop stop-color=\\'rgba(64,64,64,0.255)\\' offset=\\'0.21694\\'/><stop stop-color=\\'rgba(32,32,32,0.2475)\\' offset=\\'0.2531\\'/><stop stop-color=\\'rgba(0,0,0,0.24)\\' offset=\\'0.28925\\'/><stop stop-color=\\'rgba(0,0,0,0.55)\\' offset=\\'0.46298\\'/><stop stop-color=\\'rgba(16,16,16,0.53188)\\' offset=\\'0.4719\\'/><stop stop-color=\\'rgba(32,32,32,0.51375)\\' offset=\\'0.48082\\'/><stop stop-color=\\'rgba(64,64,64,0.4775)\\' offset=\\'0.49866\\'/><stop stop-color=\\'rgba(96,96,96,0.44125)\\' offset=\\'0.5165\\'/><stop stop-color=\\'rgba(128,128,128,0.405)\\' offset=\\'0.53434\\'/><stop stop-color=\\'rgba(191,191,191,0.3325)\\' offset=\\'0.57002\\'/><stop stop-color=\\'rgba(255,255,255,0.26)\\' offset=\\'0.6057\\'/><stop stop-color=\\'rgba(191,191,191,0.2375)\\' offset=\\'0.63595\\'/><stop stop-color=\\'rgba(128,128,128,0.215)\\' offset=\\'0.6662\\'/><stop stop-color=\\'rgba(64,64,64,0.1925)\\' offset=\\'0.69645\\'/><stop stop-color=\\'rgba(32,32,32,0.18125)\\' offset=\\'0.71158\\'/><stop stop-color=\\'rgba(0,0,0,0.17)\\' offset=\\'0.7267\\'/><stop stop-color=\\'rgba(32,32,32,0.18625)\\' offset=\\'0.76087\\'/><stop stop-color=\\'rgba(64,64,64,0.2025)\\' offset=\\'0.79503\\'/><stop stop-color=\\'rgba(128,128,128,0.235)\\' offset=\\'0.86335\\'/><stop stop-color=\\'rgba(191,191,191,0.2675)\\' offset=\\'0.93168\\'/><stop stop-color=\\'rgba(255,255,255,0.3)\\' offset=\\'1\\'/></radialGradient></defs></svg>\')" }} />
        <div className="absolute border-[0.797px] border-[rgba(0,0,0,0.1)] border-solid inset-0 rounded-[9999px]" data-name="border" />
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Name">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px]">Anwar hosny</p>
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

function Online1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="online">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #0ED221)" id="Ellipse 5" r="4" />
        </svg>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#a6a6a6] text-[12px]">Online (Avg 10m)</p>
    </div>
  );
}

function NameStatus1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[39px] items-start justify-center relative shrink-0" data-name="Name + status">
      <Name2 />
      <Online1 />
    </div>
  );
}

function AvatarName1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Avatar + name">
      <AvatarCard2 />
      <NameStatus1 />
    </div>
  );
}

function TimeCircle1() {
  return (
    <div className="absolute inset-[2.08%_5.21%_4.17%_5.21%]" data-name="Time Circle 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5417 13.1251">
        <g id="Time Circle 1">
          <g id="Vector">
            <path d={svgPaths.p5ad5900} fill="var(--fill-0, #A6A6A6)" />
            <path d={svgPaths.p29111c80} fill="var(--fill-0, #A6A6A6)" />
            <path d={svgPaths.p3aedf000} fill="var(--fill-0, #A6A6A6)" />
            <path clipRule="evenodd" d={svgPaths.pd070e00} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Time1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-h-px min-w-px relative" data-name="Time">
      <div className="relative shrink-0 size-[14px]" data-name="Icon swap">
        <div className="absolute inset-0" data-name="Duseat-icons-24PT-Time Circle 1">
          <TimeCircle1 />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#a6a6a6] text-[12px]">3 min ago</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-end min-h-px min-w-px relative">
      <div className="content-stretch flex flex-[1_0_0] items-start justify-end min-h-px min-w-px relative w-full" data-name="tags base">
        <div className="content-stretch flex gap-[6px] items-center justify-center pl-[6px] pr-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="tags base">
          <div aria-hidden="true" className="absolute border border-[rgba(5,11,46,0.63)] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="overflow-clip relative shrink-0 size-[8px]" data-name="_Dot">
            <div className="absolute left-px size-[6px] top-px" data-name="Dot">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <circle cx="3" cy="3" fill="var(--fill-0, #050B2E)" fillOpacity="0.63" id="Dot" r="3" />
              </svg>
            </div>
          </div>
          <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(5,11,46,0.63)] text-center">New request</p>
        </div>
      </div>
      <Time1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[50px] items-center relative shrink-0 w-full">
      <AvatarName1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame20 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function User1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="User">
      <Frame18 />
    </div>
  );
}

function NoteStreamlineTabler1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Note Streamline Tabler">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Note Streamline Tabler">
          <path d={svgPaths.p386d9a80} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p191fe580} id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Note1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Note">
      <NoteStreamlineTabler1 />
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#666] text-[12px] text-center" dir="auto">
        Note:
      </p>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[12px]">Flexible on handover date</p>
    </div>
  );
}

function Request1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[3px] relative shrink-0 w-full" data-name="Request">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] w-full whitespace-pre-wrap">I’m looking for a ready-to-move 4 Bedroom Villa for living in Al Barsha.</p>
      <Note1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[10.08px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.08 10.08">
          <path d={svgPaths.p36253400} fill="var(--fill-0, #A6A6A6)" id="Vector" />
        </svg>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#a6a6a6] text-[12px] text-center" dir="auto">
        Budget
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame21 />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] text-center">3.8M AED</p>
    </div>
  );
}

function Budget3() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Budget">
      <div aria-hidden="true" className="absolute border border-[#f8f8f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-[8px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <div className="h-[10.08px] relative shrink-0 w-[7.56px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.56 10.08">
          <path d={svgPaths.p24665a00} fill="var(--fill-0, #A6A6A6)" id="Vector" />
        </svg>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#a6a6a6] text-[12px] text-center" dir="auto">
        Type
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame22 />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] text-center">Living</p>
    </div>
  );
}

function Budget4() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Budget">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-[8px] relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <div className="h-[10px] relative shrink-0 w-[10.08px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.08 10.0003">
          <path clipRule="evenodd" d={svgPaths.pd00870} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" id="Union" />
        </svg>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#717171] text-[12px] text-center" dir="auto">
        Method
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame23 />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] text-center">Mortgage</p>
    </div>
  );
}

function Budget5() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Budget">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-[8px] relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Cards3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-center justify-center relative shrink-0 w-[361px]" data-name="Cards">
      <Budget3 />
      <Budget4 />
      <Budget5 />
    </div>
  );
}

function TicketStar1() {
  return (
    <div className="absolute inset-[13.54%_5.21%]" data-name="Ticket Star 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5417 10.2084">
        <g id="Ticket Star 2">
          <g id="Vector">
            <path d={svgPaths.pf08f270} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.p15dc2600} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.p502a500} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.p2d52c00} fill="var(--fill-0, #999999)" />
            <path clipRule="evenodd" d={svgPaths.p16800200} fill="var(--fill-0, #999999)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p25b9a3f0} fill="var(--fill-0, #999999)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Message1() {
  return (
    <div className="absolute inset-[5.21%_5.21%_5.17%_1.04%]" data-name="Message 18">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8751 16.1321">
        <g id="Message 18">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pdcb5180} fill="#999999" fillRule="evenodd" />
            <path d={svgPaths.p3e4f6500} fill="#999999" />
            <path d={svgPaths.p2c8af780} fill="#999999" />
            <path d={svgPaths.p147b2400} fill="#999999" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Comment1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Comment">
      <div className="relative shrink-0 size-[18px]" data-name="Icon swap">
        <div className="absolute inset-0" data-name="Duseat-icons-24PT-Message 18">
          <Message1 />
        </div>
      </div>
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[rgba(5,11,46,0.07)] content-stretch flex gap-[4px] h-[21px] items-center justify-center pr-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="tags base">
        <div className="relative shrink-0 size-[14px]" data-name="Icon swap">
          <div className="absolute inset-0" data-name="Duseat-icons-24PT-Ticket Star 2">
            <TicketStar1 />
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#999] text-[12px] text-center">12 offers submitted</p>
      </div>
      <Comment1 />
    </div>
  );
}

function Cards2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Cards">
      <Cards3 />
      <Tags1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Request1 />
      <Cards2 />
    </div>
  );
}

function DocumentAlignRight1() {
  return (
    <div className="absolute inset-[5.21%_9.38%_5.21%_9.37%]" data-name="Document Align Right 7">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 10.75">
        <g id="Document Align Right 7">
          <g id="Vector">
            <path d={svgPaths.p25f91e70} fill="var(--fill-0, #01CBD2)" />
            <path d={svgPaths.p2db6d500} fill="var(--fill-0, #01CBD2)" />
            <path d={svgPaths.pa0e5680} fill="var(--fill-0, #01CBD2)" />
            <path clipRule="evenodd" d={svgPaths.p27094500} fill="var(--fill-0, #01CBD2)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DeatilsButton1() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[24px]" data-name="Deatils Button">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative size-full">
          <div className="relative shrink-0 size-[12px]" data-name="Icon swap">
            <div className="absolute inset-0" data-name="Duseat-icons-24PT-Document Align Right 7">
              <DocumentAlignRight1 />
            </div>
          </div>
          <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#01cbd2] text-[16px] text-center" dir="auto">
            See Details
          </p>
        </div>
      </div>
    </div>
  );
}

function Send1() {
  return (
    <div className="absolute inset-[7.94%_6.03%_7.46%_9.38%]" data-name="Send 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1517 10.1519">
        <g id="Send 2">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p964bd00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p36f6b700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3a38e700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b65cc00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#01cbd2] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[24px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative size-full">
          <div className="relative shrink-0 size-[12px]" data-name="Icon swap">
            <div className="absolute inset-0" data-name="Duseat-icons-24PT-Send 2">
              <Send1 />
            </div>
          </div>
          <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white w-[37px] whitespace-pre-wrap" dir="auto">
            Apply
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuMeatballs1() {
  return (
    <div className="absolute inset-[38.54%_5.21%]" data-name="Menu Meatballs">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1111 4.88894">
        <g id="Menu Meatballs">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p17aefa00} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf505340} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p32868c80} fill="var(--fill-0, #333333)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Buttons">
      <DeatilsButton1 />
      <Button1 />
      <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[21.333px] shrink-0 size-[36px]" data-name="Button 3">
        <div className="overflow-clip relative shrink-0 size-[21.333px]" data-name="Duseat-icons-24PT-Menu Meatballs">
          <MenuMeatballs1 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
      </div>
    </div>
  );
}

function Requests() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Requests">
      <div className="bg-white content-stretch flex flex-col gap-[12px] items-center px-[16px] py-[24px] relative shrink-0 w-[393px]" data-name="Request">
        <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
        <User />
        <Content1 />
        <Buttons />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[12px] items-center px-[16px] py-[24px] relative shrink-0 w-[393px]" data-name="Request">
        <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
        <User1 />
        <Content2 />
        <Buttons1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-0 px-[10px] top-[46px] w-[393px]" data-name="Content">
      <Main />
      <Requests />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f8f8f8] relative size-full" data-name="Home">
      <StatusBar />
      <Content />
    </div>
  );
}
