import svgPaths from "./svg-gc9mw7j7wl";
import imgMale04 from "@/assets/1c3bb7e8ea358f8837dfe2bd41230f4b3be6a4c8.png";
import { imgFlag } from "./svg-stifh";

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
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[393px]" data-name="Top">
      <StatusBar />
    </div>
  );
}

function Left() {
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

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[180px]" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Name">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px]" dir="auto">
          Ahmed Khaled
        </p>
      </div>
      <div className="shrink-0 size-[18px]" data-name="Business badge" />
    </div>
  );
}

function Plan() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Plan">
      <div className="relative shrink-0 size-[9.643px]" data-name="online">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.64286 9.64286">
          <circle cx="4.82143" cy="4.82143" fill="var(--fill-0, #0ED221)" id="online" r="4.41143" stroke="var(--stroke-0, white)" strokeWidth="0.82" />
        </svg>
      </div>
      <div className="content-stretch flex h-[13px] items-center relative shrink-0" data-name="Status">
        <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#0ed221] text-[14px] tracking-[-0.14px]" dir="auto">
          Online now
        </p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[157px]" data-name="Text">
      <Title />
      <Plan />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[45px]" data-name="Main chat Avatar">
        <div className="absolute inset-0 rounded-[41.984px]" data-name="Male04">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[41.984px] size-full" src={imgMale04} />
        </div>
        <div className="-translate-y-1/2 absolute aspect-[24/24] left-0 right-[71.43%] top-[calc(50%-18.25px)]" data-name="flag placeholder">
          <div className="absolute inset-0 rounded-[9999px] shadow-[0px_1.749px_2.624px_0px_rgba(0,0,0,0.1)]" data-name="shadow" />
          <div className="absolute inset-0 overflow-clip rounded-[9999px]" data-name="flag">
            <div className="absolute contents inset-0" data-name="flag">
              <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_24px]" data-name="contents" style={{ maskImage: `url('${imgFlag}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 24">
                  <g id="contents">
                    <path clipRule="evenodd" d="M0 0V24H32V0H0Z" fill="var(--fill-0, #F7FCFF)" fillRule="evenodd" id="background" />
                    <mask height="24" id="mask0_8_1610" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
                      <path clipRule="evenodd" d="M0 0V24H32V0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="background_2" />
                    </mask>
                    <g mask="url(#mask0_8_1610)">
                      <path clipRule="evenodd" d="M0 0V8H32V0H0Z" fill="var(--fill-0, #E31D1C)" fillRule="evenodd" id="top" />
                      <path clipRule="evenodd" d="M0 16V24H32V16H0Z" fill="var(--fill-0, #3D58DB)" fillRule="evenodd" id="bottom" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.7)] inset-0 mix-blend-overlay rounded-[9999px] to-[rgba(0,0,0,0.3)]" data-name="overlay-top-down" />
          <div className="absolute inset-0 mix-blend-overlay rounded-[9999px]" data-name="overlay-real-linear" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 20.992 20.992\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(2.9736e-15 2.4053 -2.2562 -1.4805e-15 10.496 3.0613)\\'><stop stop-color=\\'rgba(255,255,255,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(191,191,191,0.285)\\' offset=\\'0.072313\\'/><stop stop-color=\\'rgba(128,128,128,0.27)\\' offset=\\'0.14463\\'/><stop stop-color=\\'rgba(64,64,64,0.255)\\' offset=\\'0.21694\\'/><stop stop-color=\\'rgba(32,32,32,0.2475)\\' offset=\\'0.2531\\'/><stop stop-color=\\'rgba(0,0,0,0.24)\\' offset=\\'0.28925\\'/><stop stop-color=\\'rgba(0,0,0,0.55)\\' offset=\\'0.46298\\'/><stop stop-color=\\'rgba(16,16,16,0.53188)\\' offset=\\'0.4719\\'/><stop stop-color=\\'rgba(32,32,32,0.51375)\\' offset=\\'0.48082\\'/><stop stop-color=\\'rgba(64,64,64,0.4775)\\' offset=\\'0.49866\\'/><stop stop-color=\\'rgba(96,96,96,0.44125)\\' offset=\\'0.5165\\'/><stop stop-color=\\'rgba(128,128,128,0.405)\\' offset=\\'0.53434\\'/><stop stop-color=\\'rgba(191,191,191,0.3325)\\' offset=\\'0.57002\\'/><stop stop-color=\\'rgba(255,255,255,0.26)\\' offset=\\'0.6057\\'/><stop stop-color=\\'rgba(191,191,191,0.2375)\\' offset=\\'0.63595\\'/><stop stop-color=\\'rgba(128,128,128,0.215)\\' offset=\\'0.6662\\'/><stop stop-color=\\'rgba(64,64,64,0.1925)\\' offset=\\'0.69645\\'/><stop stop-color=\\'rgba(32,32,32,0.18125)\\' offset=\\'0.71158\\'/><stop stop-color=\\'rgba(0,0,0,0.17)\\' offset=\\'0.7267\\'/><stop stop-color=\\'rgba(32,32,32,0.18625)\\' offset=\\'0.76087\\'/><stop stop-color=\\'rgba(64,64,64,0.2025)\\' offset=\\'0.79503\\'/><stop stop-color=\\'rgba(128,128,128,0.235)\\' offset=\\'0.86335\\'/><stop stop-color=\\'rgba(191,191,191,0.2675)\\' offset=\\'0.93168\\'/><stop stop-color=\\'rgba(255,255,255,0.3)\\' offset=\\'1\\'/></radialGradient></defs></svg>\')" }} />
          <div className="absolute border-[0.875px] border-[rgba(0,0,0,0.1)] border-solid inset-0 rounded-[9999px]" data-name="border" />
        </div>
      </div>
      <Text />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[21.333px] shrink-0 size-[36px]" data-name="Button 49">
        <div className="overflow-clip relative shrink-0 size-[21.333px]" data-name="Duseat-icons-24PT-Left 2">
          <Left />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
      </div>
      <Frame />
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

function UserChatCard() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[361px]" data-name="User chat card">
      <Frame1 />
      <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[21.333px] shrink-0 size-[36px]" data-name="Button 50">
        <div className="overflow-clip relative shrink-0 size-[21.333px]" data-name="Duseat-icons-24PT-Menu Meatballs">
          <MenuMeatballs />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Header">
      <Top />
      <div className="bg-white content-stretch flex h-[60px] items-center justify-center py-[17px] relative shrink-0 w-[393px]" data-name="User chat card">
        <div aria-hidden="true" className="absolute border-[#ccc] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <UserChatCard />
      </div>
    </div>
  );
}
