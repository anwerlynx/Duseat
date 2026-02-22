import svgPaths from "./svg-cahgvh2llz";
import imgMale01 from "@/assets/a72455879433bac68d798446ed0c6b18a5115ab7.png";

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
    <div className="backdrop-blur-[15px] h-[47px] overflow-clip relative shrink-0 w-full" data-name="Status Bar">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function Left() {
  return (
    <div className="absolute inset-[26.04%_38.54%]" data-name="Left 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.88894 10.2222">
        <g id="Left 2">
          <path d={svgPaths.pede6800} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackButton() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Back button">
      <div className="bg-[#f8f8f8] content-stretch flex items-center p-[8px] relative rounded-[21.333px] shrink-0 size-[36px]" data-name="Button 1">
        <div className="overflow-clip relative shrink-0 size-[21.333px]" data-name="Duseat-icons-24PT-Left 2">
          <Left />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_4px_0px_#00a2a8,inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]" />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[361px]" data-name="Title">
      <BackButton />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[23px] text-center w-[297px] whitespace-pre-wrap">Profile</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[95px] items-center left-0 top-0 w-[393px]" data-name="Header">
      <StatusBar />
      <Title />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-none not-italic relative shrink-0 text-center w-full" data-name="Text">
      <p className="font-['TT_Commons:Medium',sans-serif] min-w-full relative shrink-0 text-[#050b2e] text-[23px] w-[min-content] whitespace-pre-wrap">Anwar hosny</p>
      <p className="font-['TT_Commons:Regular',sans-serif] relative shrink-0 text-[#ccc] text-[16px]">@anwerhosney</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[107px] size-[26px] top-[53px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icon">
          <rect fill="var(--fill-0, white)" height="26" rx="13" width="26" />
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3eb6c100} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p20703780} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p31464000} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Avatar">
      <div className="relative shrink-0 size-[75px]" data-name="Investor Avatar Card">
        <div className="absolute inset-0 rounded-[64.286px]" data-name="Male01">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[64.286px]">
            <img alt="" className="absolute h-[133.33%] left-[-0.81%] max-w-none top-[-4.16%] w-full" src={imgMale01} />
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start left-[calc(50%+29.46px)] top-[calc(50%+29.46px)]" data-name="online">
          <div className="relative shrink-0 size-[16.071px]" data-name="online">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0714 16.0714">
              <circle cx="8.03571" cy="8.03571" fill="var(--fill-0, #0ED221)" id="online" r="7.36607" stroke="var(--stroke-0, white)" strokeWidth="1.33929" />
            </svg>
          </div>
        </div>
      </div>
      <Text />
      <Icon />
    </div>
  );
}

function Botton() {
  return (
    <div className="bg-[#01cbd2] content-stretch flex flex-col h-[33px] items-center justify-center px-[10px] relative rounded-[20px] shrink-0 w-[118px]" data-name="Botton">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.14px] w-full whitespace-pre-wrap">Edit profile</p>
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[171px]" data-name="Profile">
      <Avatar />
      <Botton />
    </div>
  );
}

function FreeGradientInterfaceEssentialStar2RewardRatingRateSocialStarMediaFavoriteLikeStarsSpark() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Free Gradient/Interface Essential/star-2--reward-rating-rate-social-star-media-favorite-like-stars-spark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Free Gradient/Interface Essential/star-2--reward-rating-rate-social-star-media-favorite-like-stars-spark">
          <rect fill="var(--fill-0, #CCFDFF)" height="48" rx="24" width="48" />
          <path clipRule="evenodd" d={svgPaths.p1f2b0e00} fill="url(#paint0_linear_8_1467)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_1467" x1="24" x2="24" y1="7.00002" y2="41">
            <stop stopColor="#060E3C" />
            <stop offset="1" stopColor="#01C4CB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-none not-italic relative shrink-0 w-[165px] whitespace-pre-wrap">
      <p className="font-['TT_Commons:Medium',sans-serif] relative shrink-0 text-[#050b2e] text-[21px] w-full">Upgrade to Plus</p>
      <p className="font-['TT_Commons:Regular',sans-serif] relative shrink-0 text-[#666] text-[16px] text-center w-full">Unlock advanced features</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#060e3c] content-stretch flex items-center justify-center p-[10px] relative rounded-[9999px] shrink-0">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white">See plan</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <div className="absolute h-[126px] left-[324px] top-[-45px] w-[131px]" data-name="Vector">
            <div className="absolute inset-[-61.98%_-59.62%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 287.2 282.2">
                <g filter="url(#filter0_f_8_1494)" id="Vector" opacity="0.62">
                  <path d={svgPaths.p27368b40} fill="url(#paint0_linear_8_1494)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="282.2" id="filter0_f_8_1494" width="287.2" x="1.3041e-07" y="-1.26171e-07">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_8_1494" stdDeviation="39.05" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_1494" x1="143.6" x2="143.6" y1="78.1" y2="204.1">
                    <stop stopColor="#060E3C" />
                    <stop offset="1" stopColor="#01C4CB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute flex h-[147.504px] items-center justify-center left-[258.66px] top-[24.08px] w-[140.706px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[147.504px] relative w-[140.706px]" data-name="Vector">
                <div className="absolute inset-[-52.95%_-55.51%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296.906 303.704">
                    <g filter="url(#filter0_f_8_1499)" id="Vector">
                      <path d={svgPaths.p3d7cb780} fill="var(--fill-0, #01CBD2)" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="303.704" id="filter0_f_8_1499" width="296.906" x="1.3041e-07" y="-3.82259e-08">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_8_1499" stdDeviation="39.05" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <FreeGradientInterfaceEssentialStar2RewardRatingRateSocialStarMediaFavoriteLikeStarsSpark />
          <Frame />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Subscription() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Subscription">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[23px] w-full whitespace-pre-wrap">Subscription</p>
      <Frame2 />
    </div>
  );
}

function Filter() {
  return (
    <div className="absolute inset-[9.38%_13.54%]" data-name="Filter 5">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3334 26">
        <g id="Filter 5">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pf4bdd00} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p2d6b8e40} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p117a2b00} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p18c4fd00} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p2c1f2900} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p10465a00} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsSettings() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-[56px]" data-name="Icons settings">
      <div className="aspect-[56/56] relative rounded-[32px] shrink-0 w-full" data-name="56 pixel screen button">
        <div aria-hidden="true" className="absolute border border-[#050b2e] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Duseat-icons-24PT-Filter 5">
              <Filter />
            </div>
          </div>
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-black text-center w-full whitespace-pre-wrap">Privacy</p>
    </div>
  );
}

function Filter1() {
  return (
    <div className="absolute inset-[9.38%_13.54%]" data-name="Filter 5">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3334 26">
        <g id="Filter 5">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pf4bdd00} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p2d6b8e40} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p117a2b00} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p18c4fd00} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p2c1f2900} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p10465a00} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsSettings1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-[56px]" data-name="Icons settings">
      <div className="aspect-[56/56] relative rounded-[32px] shrink-0 w-full" data-name="56 pixel screen button">
        <div aria-hidden="true" className="absolute border border-[#050b2e] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Duseat-icons-24PT-Filter 5">
              <Filter1 />
            </div>
          </div>
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-black text-center w-full whitespace-pre-wrap">System</p>
    </div>
  );
}

function Filter2() {
  return (
    <div className="absolute inset-[9.38%_13.54%]" data-name="Filter 5">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3334 26">
        <g id="Filter 5">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pf4bdd00} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p2d6b8e40} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p117a2b00} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p18c4fd00} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p2c1f2900} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p10465a00} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsSettings2() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-[56px]" data-name="Icons settings">
      <div className="aspect-[56/56] relative rounded-[32px] shrink-0 w-full" data-name="56 pixel screen button">
        <div aria-hidden="true" className="absolute border border-[#050b2e] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Duseat-icons-24PT-Filter 5">
              <Filter2 />
            </div>
          </div>
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-black text-center w-full whitespace-pre-wrap">System</p>
    </div>
  );
}

function Filter3() {
  return (
    <div className="absolute inset-[9.38%_13.54%]" data-name="Filter 5">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3334 26">
        <g id="Filter 5">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pf4bdd00} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p2d6b8e40} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p117a2b00} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p18c4fd00} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p2c1f2900} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p10465a00} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsSettings3() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-[56px]" data-name="Icons settings">
      <div className="aspect-[56/56] relative rounded-[32px] shrink-0 w-full" data-name="56 pixel screen button">
        <div aria-hidden="true" className="absolute border border-[#050b2e] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Duseat-icons-24PT-Filter 5">
              <Filter3 />
            </div>
          </div>
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-black text-center w-full whitespace-pre-wrap">System</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Buttons">
      <IconsSettings />
      <IconsSettings1 />
      <IconsSettings2 />
      <IconsSettings3 />
    </div>
  );
}

function AppDeatils() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="App deatils 1">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#050b2e] text-[23px] w-[min-content] whitespace-pre-wrap">App Deatils</p>
      <Buttons />
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

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <div className="relative shrink-0 size-[24px]" data-name="Icon 24 swap">
        <div className="absolute inset-0 overflow-clip" data-name="Duseat-icons-24PT-Setting">
          <Setting />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] text-center">Settings</p>
    </div>
  );
}

function Right() {
  return (
    <div className="absolute inset-[26.04%_13.54%]" data-name="Right 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3334 15.3333">
        <g id="Right 1">
          <path d={svgPaths.p1e6d9700} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Arrow">
      <div className="relative shrink-0 size-[32px]" data-name="Duseat-icons-24PT-Right 1">
        <Right />
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="backdrop-blur-[25px] bg-white relative rounded-[999px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Settings">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Label />
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function ShieldTick() {
  return (
    <div className="absolute inset-[5.21%_9.44%_6.41%_9.47%]" data-name="Shield Tick">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4621 21.2107">
        <g id="Shield Tick">
          <g id="Vector">
            <path d={svgPaths.p2022f900} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p3e2d5d80} fill="var(--fill-0, #333333)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <div className="relative shrink-0 size-[24px]" data-name="Icon 24 swap">
        <div className="absolute inset-0 overflow-clip" data-name="Duseat-icons-24PT-Shield Tick">
          <ShieldTick />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] text-center">Dueset verified</p>
    </div>
  );
}

function Right1() {
  return (
    <div className="absolute inset-[26.04%_13.54%]" data-name="Right 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3334 15.3333">
        <g id="Right 1">
          <path d={svgPaths.p1e6d9700} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Arrow">
      <div className="relative shrink-0 size-[32px]" data-name="Duseat-icons-24PT-Right 1">
        <Right1 />
      </div>
    </div>
  );
}

function Verified() {
  return (
    <div className="backdrop-blur-[25px] bg-white relative rounded-[999px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Verified">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Label1 />
          <Arrow1 />
        </div>
      </div>
    </div>
  );
}

function Website() {
  return (
    <div className="absolute inset-[5.21%]" data-name="Website">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
        <g id="Website">
          <path d={svgPaths.p38d3b600} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <div className="relative shrink-0 size-[24px]" data-name="Icon 24 swap">
        <div className="absolute inset-0 overflow-clip" data-name="Duseat-icons-24PT-Website">
          <Website />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] text-center">Languages</p>
    </div>
  );
}

function Right2() {
  return (
    <div className="absolute inset-[26.04%_13.54%]" data-name="Right 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3334 15.3333">
        <g id="Right 1">
          <path d={svgPaths.p1e6d9700} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrow2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Arrow">
      <div className="relative shrink-0 size-[32px]" data-name="Duseat-icons-24PT-Right 1">
        <Right2 />
      </div>
    </div>
  );
}

function Languages() {
  return (
    <div className="backdrop-blur-[25px] bg-white relative rounded-[999px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Languages">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Label2 />
          <Arrow2 />
        </div>
      </div>
    </div>
  );
}

function Logout() {
  return (
    <div className="absolute inset-[9.37%_9.38%_9.37%_9.37%]" data-name="Logout">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        <g id="Logout">
          <g id="Vector">
            <path d={svgPaths.p8bc5900} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p188bee80} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <div className="relative shrink-0 size-[24px]" data-name="Icon 24 swap">
        <div className="absolute inset-0 overflow-clip" data-name="Duseat-icons-24PT-Logout">
          <Logout />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] text-center">Log out</p>
    </div>
  );
}

function Right3() {
  return (
    <div className="absolute inset-[26.04%_13.54%]" data-name="Right 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3334 15.3333">
        <g id="Right 1">
          <path d={svgPaths.p1e6d9700} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrow3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Arrow">
      <div className="relative shrink-0 size-[32px]" data-name="Duseat-icons-24PT-Right 1">
        <Right3 />
      </div>
    </div>
  );
}

function LogOut() {
  return (
    <div className="backdrop-blur-[25px] bg-white relative rounded-[999px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Log out">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Label3 />
          <Arrow3 />
        </div>
      </div>
    </div>
  );
}

function Blocks() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Blocks">
      <Settings />
      <Verified />
      <Languages />
      <LogOut />
    </div>
  );
}

function AppDeatils1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="App deatils 2">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[23px]">App Deatils</p>
      <Blocks />
    </div>
  );
}

function FaqCircle() {
  return (
    <div className="absolute inset-[5.21%]" data-name="FAQ Circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
        <g id="FAQ Circle">
          <g id="Vector">
            <path d={svgPaths.p3dd4bd00} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p3032e272} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.pccded70} fill="#333333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <div className="relative shrink-0 size-[24px]" data-name="Icon 24 swap">
        <div className="absolute inset-0 overflow-clip" data-name="Duseat-icons-24PT-FAQ Circle">
          <FaqCircle />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] text-center">FAQ</p>
    </div>
  );
}

function Right4() {
  return (
    <div className="absolute inset-[26.04%_13.54%]" data-name="Right 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3334 15.3333">
        <g id="Right 1">
          <path d={svgPaths.p1e6d9700} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrow4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Arrow">
      <div className="relative shrink-0 size-[32px]" data-name="Duseat-icons-24PT-Right 1">
        <Right4 />
      </div>
    </div>
  );
}

function Faq() {
  return (
    <div className="backdrop-blur-[25px] bg-white relative rounded-[999px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Faq">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Label4 />
          <Arrow4 />
        </div>
      </div>
    </div>
  );
}

function Calling() {
  return (
    <div className="absolute inset-[5.21%_5.63%_5.09%_5.21%]" data-name="Calling 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3996 21.5293">
        <g id="Calling 1">
          <g id="Vector">
            <path d={svgPaths.p34a6de80} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p9397a40} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            <path d={svgPaths.p3bfa9000} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <div className="relative shrink-0 size-[24px]" data-name="Icon 24 swap">
        <div className="absolute inset-0 overflow-clip" data-name="Duseat-icons-24PT-Calling 1">
          <Calling />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[21px] text-center">Support</p>
    </div>
  );
}

function Right5() {
  return (
    <div className="absolute inset-[26.04%_13.54%]" data-name="Right 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3334 15.3333">
        <g id="Right 1">
          <path d={svgPaths.p1e6d9700} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrow5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Arrow">
      <div className="relative shrink-0 size-[32px]" data-name="Duseat-icons-24PT-Right 1">
        <Right5 />
      </div>
    </div>
  );
}

function Support1() {
  return (
    <div className="backdrop-blur-[25px] bg-white relative rounded-[999px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Support">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Label5 />
          <Arrow5 />
        </div>
      </div>
    </div>
  );
}

function Blocks1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Blocks">
      <Faq />
      <Support1 />
    </div>
  );
}

function Support() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Support">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[23px] w-full whitespace-pre-wrap">Support</p>
      <Blocks1 />
    </div>
  );
}

function Labels() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Labels">
      <Subscription />
      <AppDeatils />
      <AppDeatils1 />
      <Support />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[655px] items-center left-[16px] top-[140px] w-[361px]" data-name="Content">
      <Profile />
      <Labels />
    </div>
  );
}

export default function ScreenSettings() {
  return (
    <div className="bg-white relative size-full" data-name="Screen / Settings">
      <Header />
      <Content />
    </div>
  );
}
