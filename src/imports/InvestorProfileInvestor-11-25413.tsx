import svgPaths from "./svg-cy9sgxxs4f";
import imgCover from "@/assets/101f0cf0c9e9079c919c41a7b91a2e582505b02d.png";
import imgMale01 from "@/assets/a72455879433bac68d798446ed0c6b18a5115ab7.png";
import { imgContents, imgFlag } from "./svg-2zwni";

function Left() {
  return (
    <div className="absolute inset-[26.04%_38.54%]" data-name="Left 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.88894 10.2223">
        <g id="Left 2">
          <path d={svgPaths.p27a974c0} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Setting() {
  return (
    <div className="absolute inset-[2.73%_7.02%_2.73%_7.01%]" data-name="Setting">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3402 20.1677">
        <g id="Setting">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1d850540} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2d6bad80} fill="var(--fill-0, #333333)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

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

function Contents() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_24px]" data-name="contents" style={{ maskImage: `url('${imgContents}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286">
        <g id="contents">
          <path clipRule="evenodd" d="M0 0V21.4286H21.4286V0H0Z" fill="var(--fill-0, #F7FCFF)" fillRule="evenodd" id="background" />
          <mask height="22" id="mask0_11_26104" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="22" x="0" y="0">
            <path clipRule="evenodd" d="M0 0V21.4286H21.4286V0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="background_2" />
          </mask>
          <g mask="url(#mask0_11_26104)">
            <path clipRule="evenodd" d="M0 0V7.14286H21.4286V0H0Z" fill="var(--fill-0, #E31D1C)" fillRule="evenodd" id="top" />
            <path clipRule="evenodd" d={svgPaths.p3667b680} fill="var(--fill-0, #3D58DB)" fillRule="evenodd" id="bottom" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Flag() {
  return (
    <div className="absolute contents inset-0" data-name="flag">
      <Contents />
    </div>
  );
}

function Bio() {
  return (
    <div className="backdrop-blur-[25px] content-stretch flex flex-col items-start relative rounded-[12px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] shrink-0 w-[355px]" data-name="Bio">
      <div className="font-['Lato:Regular','Noto_Sans:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#050b2e] text-[12px] w-[296px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        <p className="mb-0">{`Specializing in high-yield off-plan developments and `}</p>
        <p className="mb-0">{`luxury secondary market portfolios. I provide data- `}</p>
        <p className="mb-0">{`driven insights to institutional and private investors `}</p>
        <p className="mb-0">{`looking to maximize their rental yield and capital `}</p>
        <p>appreciation in the Dubai market.</p>
      </div>
    </div>
  );
}

function BioSpecializations() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bio & Specializations">
      <Bio />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px]">Anwar hosny</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#999] text-[16px]">Business Owner / Entrepreneur</p>
      </div>
      <BioSpecializations />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title">
      <Title1 />
    </div>
  );
}

function Information() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Information">
      <div className="absolute h-[80px] left-[-19px] top-[-29px] w-[393px]" data-name="Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[311.9%] left-0 max-w-none top-[-71.43%] w-full" src={imgCover} />
          </div>
          <div className="absolute bg-[rgba(11,11,11,0.6)] inset-0" />
        </div>
      </div>
      <div className="relative shrink-0 size-[75px]" data-name="Avatar Card">
        <div className="absolute inset-0 pointer-events-none rounded-[64.286px]" data-name="Male01">
          <div className="absolute inset-0 overflow-hidden rounded-[64.286px]">
            <img alt="" className="absolute h-[133.33%] left-[-0.81%] max-w-none top-[-4.16%] w-full" src={imgMale01} />
          </div>
          <div aria-hidden="true" className="absolute border-[4.018px] border-solid border-white inset-0 rounded-[64.286px]" />
        </div>
        <div className="-translate-y-1/2 absolute aspect-[24/24] left-0 right-[71.43%] top-[calc(50%-29.46px)]" data-name="flag placeholder">
          <div className="absolute inset-0 rounded-[9999px] shadow-[0px_2.679px_4.018px_0px_rgba(0,0,0,0.1)]" data-name="shadow" />
          <div className="absolute inset-0 overflow-clip rounded-[9999px]" data-name="flag">
            <Flag />
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.7)] inset-0 mix-blend-overlay rounded-[9999px] to-[rgba(0,0,0,0.3)]" data-name="overlay-top-down" />
          <div className="absolute inset-0 mix-blend-overlay rounded-[9999px]" data-name="overlay-real-linear" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 32.143 32.143\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(4.5531e-15 3.683 -3.4547 -2.267e-15 16.071 4.6875)\\'><stop stop-color=\\'rgba(255,255,255,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(191,191,191,0.285)\\' offset=\\'0.072313\\'/><stop stop-color=\\'rgba(128,128,128,0.27)\\' offset=\\'0.14463\\'/><stop stop-color=\\'rgba(64,64,64,0.255)\\' offset=\\'0.21694\\'/><stop stop-color=\\'rgba(32,32,32,0.2475)\\' offset=\\'0.2531\\'/><stop stop-color=\\'rgba(0,0,0,0.24)\\' offset=\\'0.28925\\'/><stop stop-color=\\'rgba(0,0,0,0.55)\\' offset=\\'0.46298\\'/><stop stop-color=\\'rgba(16,16,16,0.53188)\\' offset=\\'0.4719\\'/><stop stop-color=\\'rgba(32,32,32,0.51375)\\' offset=\\'0.48082\\'/><stop stop-color=\\'rgba(64,64,64,0.4775)\\' offset=\\'0.49866\\'/><stop stop-color=\\'rgba(96,96,96,0.44125)\\' offset=\\'0.5165\\'/><stop stop-color=\\'rgba(128,128,128,0.405)\\' offset=\\'0.53434\\'/><stop stop-color=\\'rgba(191,191,191,0.3325)\\' offset=\\'0.57002\\'/><stop stop-color=\\'rgba(255,255,255,0.26)\\' offset=\\'0.6057\\'/><stop stop-color=\\'rgba(191,191,191,0.2375)\\' offset=\\'0.63595\\'/><stop stop-color=\\'rgba(128,128,128,0.215)\\' offset=\\'0.6662\\'/><stop stop-color=\\'rgba(64,64,64,0.1925)\\' offset=\\'0.69645\\'/><stop stop-color=\\'rgba(32,32,32,0.18125)\\' offset=\\'0.71158\\'/><stop stop-color=\\'rgba(0,0,0,0.17)\\' offset=\\'0.7267\\'/><stop stop-color=\\'rgba(32,32,32,0.18625)\\' offset=\\'0.76087\\'/><stop stop-color=\\'rgba(64,64,64,0.2025)\\' offset=\\'0.79503\\'/><stop stop-color=\\'rgba(128,128,128,0.235)\\' offset=\\'0.86335\\'/><stop stop-color=\\'rgba(191,191,191,0.2675)\\' offset=\\'0.93168\\'/><stop stop-color=\\'rgba(255,255,255,0.3)\\' offset=\\'1\\'/></radialGradient></defs></svg>\')" }} />
          <div className="absolute border-[1.339px] border-[rgba(0,0,0,0.1)] border-solid inset-0 rounded-[9999px]" data-name="border" />
        </div>
      </div>
      <Title />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Information />
    </div>
  );
}

function Message() {
  return (
    <div className="absolute inset-[5.21%_5.21%_9.25%_5.21%]" data-name="Message 3">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3334 13.687">
        <g id="Message 3">
          <g id="Vector">
            <path d={svgPaths.p62e2100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f087a80} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p3d2eee00} fill="var(--fill-0, white)" fillRule="evenodd" />
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
          <div className="relative shrink-0 size-[16px]" data-name="Icon swap">
            <div className="absolute inset-0" data-name="Duseat-icons-24PT-Message 3">
              <Message />
            </div>
          </div>
          <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white" dir="auto">
            Edit profile
          </p>
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[355px]" data-name="CTA">
      <Button />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Content">
      <Frame />
      <Cta />
    </div>
  );
}

function CoreExpertise() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Core Expertise">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px]" dir="auto">
        My requests
      </p>
    </div>
  );
}

function Insights() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Insights">
      <CoreExpertise />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Insights />
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Avatar">
      <Content1 />
      <Text />
    </div>
  );
}

function AvatarCard() {
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
                  <mask height="24" id="mask0_11_26036" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
                    <path clipRule="evenodd" d="M0 0V24H32V0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="background_2" />
                  </mask>
                  <g mask="url(#mask0_11_26036)">
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

function Name() {
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
      <Name />
      <Online />
    </div>
  );
}

function AvatarName() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Avatar + name">
      <AvatarCard />
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
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-h-px min-w-px relative w-full" data-name="Time">
      <div className="relative shrink-0 size-[14px]" data-name="Icon swap">
        <div className="absolute inset-0" data-name="Duseat-icons-24PT-Time Circle 1">
          <TimeCircle />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#a6a6a6] text-[12px]">3 min ago</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end min-h-px min-w-px relative">
      <Time />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[50px] items-center relative shrink-0 w-full">
      <AvatarName />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame8 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function User() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="User">
      <Frame12 />
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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <NoteStreamlineTabler />
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#666] text-[12px] text-center" dir="auto">
        Note:
      </p>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[12px]">Flexible on handover date</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[3px] relative shrink-0 w-full">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] w-full whitespace-pre-wrap">I’m looking for a ready-to-move 4 Bedroom Villa for living in Al Barsha.</p>
      <Frame7 />
    </div>
  );
}

function Frame10() {
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame10 />
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
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame11 />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] text-center">Living</p>
    </div>
  );
}

function Budget1() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Budget">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-[8px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame14 />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] text-center">Mortgage</p>
    </div>
  );
}

function Budget2() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Budget">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-[8px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Cards() {
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
            <path d={svgPaths.p13849f80} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.p2714f580} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.pe073a00} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.p2f90d100} fill="var(--fill-0, #999999)" />
            <path clipRule="evenodd" d={svgPaths.p37ccadb1} fill="var(--fill-0, #999999)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p24c28380} fill="var(--fill-0, #999999)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Message1() {
  return (
    <div className="absolute inset-[5.21%_5.21%_5.17%_1.04%]" data-name="Message 18">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8752 16.1321">
        <g id="Message 18">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p142d1d00} fill="#CCCCCC" fillRule="evenodd" />
            <path d={svgPaths.p200d8880} fill="#CCCCCC" />
            <path d={svgPaths.p24114e00} fill="#CCCCCC" />
            <path d={svgPaths.p170c9400} fill="#CCCCCC" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[18px]" data-name="Icon swap">
        <div className="absolute inset-0" data-name="Duseat-icons-24PT-Message 18">
          <Message1 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(5,11,46,0.07)] content-stretch flex gap-[4px] h-[21px] items-center justify-center pr-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="tags base">
        <div className="relative shrink-0 size-[14px]" data-name="Icon swap">
          <div className="absolute inset-0" data-name="Duseat-icons-24PT-Ticket Star 2">
            <TicketStar />
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#999] text-[12px] text-center">12 offers submitted</p>
      </div>
      <Frame28 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Cards />
      <Frame27 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame23 />
    </div>
  );
}

function DocumentJustifyCenter() {
  return (
    <div className="absolute inset-[5.21%_9.38%_5.21%_9.37%]" data-name="Document Justify Center 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 10.75">
        <g id="Document Justify Center 2">
          <g id="Vector">
            <path d={svgPaths.p25f91e70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1cdabf00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa0e5680} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p2a06cd00} fill="var(--fill-0, white)" fillRule="evenodd" />
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
            <div className="absolute inset-0" data-name="Duseat-icons-24PT-Document Justify Center 2">
              <DocumentJustifyCenter />
            </div>
          </div>
          <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white" dir="auto">
            Offers received
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuMeatballs() {
  return (
    <div className="absolute inset-[38.54%_5.21%]" data-name="Menu Meatballs">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3335 3.66682">
        <g id="Menu Meatballs">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p26eef770} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p33a23b00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1011ab00} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#01cbd2] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0" data-name="Button">
      <div className="relative shrink-0 size-[16px]" data-name="Icon swap">
        <div className="absolute inset-0" data-name="Duseat-icons-24PT-Menu Meatballs">
          <MenuMeatballs />
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Buttons">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Request() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-center px-[16px] py-[24px] relative shrink-0 w-[393px]" data-name="Request">
      <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <User />
      <Frame13 />
      <Buttons />
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
                  <mask height="24" id="mask0_11_26036" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
                    <path clipRule="evenodd" d="M0 0V24H32V0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="background_2" />
                  </mask>
                  <g mask="url(#mask0_11_26036)">
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
      <Name1 />
      <Online1 />
    </div>
  );
}

function AvatarName1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Avatar + name">
      <AvatarCard1 />
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
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-h-px min-w-px relative w-full" data-name="Time">
      <div className="relative shrink-0 size-[14px]" data-name="Icon swap">
        <div className="absolute inset-0" data-name="Duseat-icons-24PT-Time Circle 1">
          <TimeCircle1 />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#a6a6a6] text-[12px]">3 min ago</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end min-h-px min-w-px relative">
      <Time1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[50px] items-center relative shrink-0 w-full">
      <AvatarName1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame17 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function User1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="User">
      <Frame15 />
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

function Frame19() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <NoteStreamlineTabler1 />
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#666] text-[12px] text-center" dir="auto">
        Note:
      </p>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[12px]">Flexible on handover date</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[3px] relative shrink-0 w-full">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] w-full whitespace-pre-wrap">I’m looking for a ready-to-move 4 Bedroom Villa for living in Al Barsha.</p>
      <Frame19 />
    </div>
  );
}

function Frame20() {
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame20 />
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
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
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

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame21 />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] text-center">Living</p>
    </div>
  );
}

function Budget4() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Budget">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-[8px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Frame22 />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] text-center">Mortgage</p>
    </div>
  );
}

function Budget5() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Budget">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-[8px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Cards1() {
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
            <path d={svgPaths.p13849f80} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.p2714f580} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.pe073a00} fill="var(--fill-0, #999999)" />
            <path d={svgPaths.p2f90d100} fill="var(--fill-0, #999999)" />
            <path clipRule="evenodd" d={svgPaths.p37ccadb1} fill="var(--fill-0, #999999)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p24c28380} fill="var(--fill-0, #999999)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Message2() {
  return (
    <div className="absolute inset-[5.21%_5.21%_5.17%_1.04%]" data-name="Message 18">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8752 16.1321">
        <g id="Message 18">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p142d1d00} fill="#CCCCCC" fillRule="evenodd" />
            <path d={svgPaths.p200d8880} fill="#CCCCCC" />
            <path d={svgPaths.p24114e00} fill="#CCCCCC" />
            <path d={svgPaths.p170c9400} fill="#CCCCCC" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[18px]" data-name="Icon swap">
        <div className="absolute inset-0" data-name="Duseat-icons-24PT-Message 18">
          <Message2 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(5,11,46,0.07)] content-stretch flex gap-[4px] h-[21px] items-center justify-center pr-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="tags base">
        <div className="relative shrink-0 size-[14px]" data-name="Icon swap">
          <div className="absolute inset-0" data-name="Duseat-icons-24PT-Ticket Star 2">
            <TicketStar1 />
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#999] text-[12px] text-center">12 offers submitted</p>
      </div>
      <Frame30 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Cards1 />
      <Frame29 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function DocumentJustifyCenter1() {
  return (
    <div className="absolute inset-[5.21%_9.38%_5.21%_9.37%]" data-name="Document Justify Center 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 10.75">
        <g id="Document Justify Center 2">
          <g id="Vector">
            <path d={svgPaths.p25f91e70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1cdabf00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa0e5680} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p2a06cd00} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#01cbd2] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[24px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative size-full">
          <div className="relative shrink-0 size-[12px]" data-name="Icon swap">
            <div className="absolute inset-0" data-name="Duseat-icons-24PT-Document Justify Center 2">
              <DocumentJustifyCenter1 />
            </div>
          </div>
          <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white" dir="auto">
            Offers received
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuMeatballs1() {
  return (
    <div className="absolute inset-[38.54%_5.21%]" data-name="Menu Meatballs">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3335 3.66682">
        <g id="Menu Meatballs">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p26eef770} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p33a23b00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1011ab00} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#01cbd2] content-stretch flex items-center justify-center p-[10px] relative rounded-[24px] shrink-0" data-name="Button">
      <div className="relative shrink-0 size-[16px]" data-name="Icon swap">
        <div className="absolute inset-0" data-name="Duseat-icons-24PT-Menu Meatballs">
          <MenuMeatballs1 />
        </div>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Buttons">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Request1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-center px-[16px] py-[24px] relative shrink-0 w-[393px]" data-name="Request">
      <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <User1 />
      <Frame18 />
      <Buttons1 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[844px] items-center left-[19px] top-[130px] w-[355px]" data-name="Content">
      <Avatar />
      <Request />
      <Request1 />
    </div>
  );
}

export default function InvestorProfileInvestor() {
  return (
    <div className="bg-white relative size-full" data-name="Investor profile (investor)">
      <div className="absolute bg-white content-stretch flex gap-[12px] h-[60px] items-center justify-center left-0 px-[16px] top-[47px] w-[393px]" data-name="Page bar">
        <div aria-hidden="true" className="absolute border-[#f8f8f8] border-b border-solid inset-0 pointer-events-none" />
        <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[21.333px] shrink-0 size-[36px]" data-name="Button 1">
          <div className="overflow-clip relative shrink-0 size-[21.333px]" data-name="Duseat-icons-24PT-Left 2">
            <Left />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
        </div>
        <p className="flex-[1_0_0] font-['TT_Commons:Medium',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[#050b2e] text-[21px] text-center whitespace-pre-wrap" dir="auto">
          Anwerhosney
        </p>
        <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[21.333px] shrink-0 size-[36px]" data-name="Button 3">
          <div className="overflow-clip relative shrink-0 size-[21.333px]" data-name="Duseat-icons-24PT-Setting">
            <Setting />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
        </div>
      </div>
      <StatusBar />
      <Content />
    </div>
  );
}
