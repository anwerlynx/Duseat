import svgPaths from "./svg-wl2axekp9t";
import imgMale01 from "@/assets/a72455879433bac68d798446ed0c6b18a5115ab7.png";
import imgRectangle9 from "@/assets/899b9f268f6f14dd9d83eb6b6cc032635a40877c.png";
import imgRectangle12 from "@/assets/7b4ee15a579e1b529395aced7bb7c5f413b9d0af.png";
import { imgFlag } from "./svg-p6lv8";

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
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Avatar + name">
      <AvatarCard />
      <NameStatus />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <AvatarName />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] h-full leading-none min-h-px min-w-px not-italic relative text-[#999] text-[12px] whitespace-pre-wrap">I’m looking for a ready-to-move 4 Bedroom Villa for living in Al Barsha.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="backdrop-blur-[25px] bg-white content-stretch flex flex-col gap-[3px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0 w-[361px]">
      <div aria-hidden="true" className="absolute border border-[#f8f8f8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)]" />
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex font-['TT_Commons:Medium',sans-serif] gap-[12px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-none relative shrink-0 text-[#050b2e] text-[16px]">Proposal message</p>
      <div className="flex flex-[1_0_0] flex-col justify-end leading-[0] min-h-px min-w-px relative text-[#01cbd2] text-[0px] text-right">
        <p className="decoration-solid leading-none text-[16px] underline whitespace-pre-wrap">AI ENHANCE</p>
      </div>
    </div>
  );
}

function FieldEmail() {
  return (
    <div className="backdrop-blur-[25px] bg-white h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="Field / Email">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)]" />
      <div className="content-stretch flex flex-col items-start px-[10px] py-[12px] relative size-full">
        <div className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#ccc] text-[16px] w-full whitespace-pre-wrap">
          <p className="mb-0">{`Start your Pitch here Mention the ROI. `}</p>
          <p className="mb-0">{`neighborhood trends. or Why this unit fits `}</p>
          <p>their portfolio</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[361px]">
      <Frame18 />
      <FieldEmail />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between leading-none not-italic relative shrink-0 text-[16px] w-[361px] whitespace-pre-wrap">
      <p className="flex-[1_0_0] font-['TT_Commons:Medium',sans-serif] min-h-px min-w-px relative text-[#050b2e]">Attachments</p>
      <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] min-h-px min-w-px relative text-[#999] text-right">4/10 Uploaded</p>
    </div>
  );
}

function Folder() {
  return (
    <div className="absolute inset-[1.04%_9.38%_5.21%_9.37%]" data-name="Folder 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4461 14.3609">
        <g id="Folder 2">
          <g id="Vector">
            <path d={svgPaths.p10002000} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p1b6d9b00} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.872px] items-center left-[218.06px] top-[24.14px]">
      <div className="bg-[#050b2e] content-stretch flex items-center justify-center p-[5.744px] relative rounded-[15.318px] shrink-0 size-[25.849px]" data-name="Button 1">
        <div className="overflow-clip relative shrink-0 size-[15.318px]" data-name="Duseat-icons-24PT-Folder 2">
          <Folder />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[11.489px]">Unit_brochure.pdf</p>
    </div>
  );
}

function Add() {
  return (
    <div className="absolute inset-[13.54%]" data-name="Add">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1695 11.1695">
        <g id="Add">
          <path d={svgPaths.p339f8700} fill="var(--fill-0, #999999)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.872px] items-center left-[28px] top-[24.41px] w-[39.492px]">
      <div className="bg-[#ccc] content-stretch flex items-center justify-center p-[5.744px] relative rounded-[15.318px] shrink-0 size-[25.849px]" data-name="Button 1">
        <div className="overflow-clip relative shrink-0 size-[15.318px]" data-name="Duseat-icons-24PT-Add">
          <Add />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#999] text-[11.489px] w-[min-content] whitespace-pre-wrap">Add files</p>
    </div>
  );
}

function Play() {
  return (
    <div className="absolute inset-[9.38%_9.38%_9.38%_13.54%]" data-name="Play">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8078 12.4461">
        <g id="Play">
          <path clipRule="evenodd" d={svgPaths.p27ebf280} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[9.334px] items-center relative shrink-0 w-full">
      <div className="bg-white h-[88.319px] relative rounded-[8.616px] shrink-0 w-[95.499px]">
        <div aria-hidden="true" className="absolute border-[#999] border-[1.136px] border-dashed inset-0 pointer-events-none rounded-[8.616px]" />
      </div>
      <div className="h-[88.319px] pointer-events-none relative rounded-[8.616px] shrink-0 w-[95.499px]">
        <div className="absolute inset-0 overflow-hidden rounded-[8.616px]">
          <img alt="" className="absolute h-[163.32%] left-[-84.21%] max-w-none top-[-31.66%] w-[268.42%]" src={imgRectangle9} />
        </div>
        <div aria-hidden="true" className="absolute border-[0.718px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[8.616px]" />
      </div>
      <div className="bg-white h-[88.319px] relative rounded-[8.616px] shrink-0 w-[95.499px]">
        <div aria-hidden="true" className="absolute border-[0.718px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8.616px]" />
      </div>
      <Frame8 />
      <div className="h-[88.319px] pointer-events-none relative rounded-[8.616px] shrink-0 w-[95.499px]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[8.616px]">
          <div className="absolute inset-0 overflow-hidden rounded-[8.616px]">
            <img alt="" className="absolute h-[163.32%] left-[-84.21%] max-w-none top-[-31.66%] w-[268.42%]" src={imgRectangle12} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.42)] inset-0 rounded-[8.616px]" />
        </div>
        <div aria-hidden="true" className="absolute border-[0.718px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[8.616px]" />
      </div>
      <Frame7 />
      <div className="absolute bg-[rgba(204,204,204,0.31)] content-stretch flex items-center justify-center left-[349.81px] p-[5.744px] rounded-[15.318px] size-[25.849px] top-[32.09px]" data-name="Button 1">
        <div className="overflow-clip relative shrink-0 size-[15.318px]" data-name="Duseat-icons-24PT-Play">
          <Play />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['TT_Commons:Medium',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[#050b2e] text-[16px] whitespace-pre-wrap">Location details</p>
    </div>
  );
}

function Map() {
  return (
    <div className="absolute inset-[13.54%_9.38%_15.63%_9.38%]" data-name="Map">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2963 15.9508">
        <g id="Map">
          <path clipRule="evenodd" d={svgPaths.p10a91770} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px]">Add location</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[228px]">
      <p className="flex-[1_0_0] font-['TT_Commons:Regular',sans-serif] h-full leading-none min-h-px min-w-px not-italic relative text-[#050b2e] text-[12px] whitespace-pre-wrap">View on Google Maps</p>
    </div>
  );
}

function NameStatus1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[39px] items-start justify-center min-h-px min-w-px relative" data-name="Name + status">
      <Name1 />
      <Frame12 />
    </div>
  );
}

function Left1() {
  return (
    <div className="absolute inset-[26.04%_38.54%]" data-name="Left 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33334 15.3333">
        <g id="Left 2">
          <path d={svgPaths.p13398400} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-end min-h-px min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[32px]" data-name="Icon swap">
            <div className="absolute inset-0" data-name="Duseat-icons-24PT-Left 2">
              <Left1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AvatarName1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Avatar + name">
      <div className="bg-[#050b2e] content-stretch flex items-center justify-center p-[8.444px] relative rounded-[22.519px] shrink-0 size-[38px]" data-name="Button 1">
        <div className="overflow-clip relative shrink-0 size-[22.519px]" data-name="Duseat-icons-24PT-Map">
          <Map />
        </div>
      </div>
      <NameStatus1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame17 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <AvatarName1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="backdrop-blur-[25px] bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f8f8f8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[361px]">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[16px] top-[126px]">
      <Frame4 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
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
    <div className="-translate-x-1/2 absolute bg-[#01cbd2] content-stretch flex gap-[4px] h-[44px] items-center justify-center left-1/2 p-[10px] rounded-[24px] top-[757px] w-[361px]" data-name="Button">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white" dir="auto">
        Send offer
      </p>
      <div className="relative shrink-0 size-[12px]" data-name="Icon swap">
        <div className="absolute inset-0" data-name="Duseat-icons-24PT-Send 2">
          <Send />
        </div>
      </div>
    </div>
  );
}

export default function IPhone1415Pro() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 14 & 15 Pro - 18">
      <div className="absolute bg-white content-stretch flex gap-[12px] h-[60px] items-center justify-center left-0 px-[16px] top-[47px] w-[393px]" data-name="Page bar">
        <div aria-hidden="true" className="absolute border-[#f8f8f8] border-b border-solid inset-0 pointer-events-none" />
        <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[21.333px] shrink-0 size-[36px]" data-name="Button 1">
          <div className="overflow-clip relative shrink-0 size-[21.333px]" data-name="Duseat-icons-24PT-Left 2">
            <Left />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
        </div>
        <p className="flex-[1_0_0] font-['TT_Commons:Medium',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[#050b2e] text-[23px] text-center whitespace-pre-wrap" dir="auto">
          Request apply
        </p>
        <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[21.333px] shrink-0 size-[36px]" data-name="Button 3">
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
        </div>
      </div>
      <StatusBar />
      <Frame16 />
      <Button />
    </div>
  );
}
