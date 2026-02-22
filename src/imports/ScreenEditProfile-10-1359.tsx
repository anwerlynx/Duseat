import svgPaths from "./svg-adkuxyk3d7";
import imgMale01 from "@/assets/a72455879433bac68d798446ed0c6b18a5115ab7.png";
import { imgFlag } from "./svg-6x0ji";

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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.88894 10.2223">
        <g id="Left 2">
          <path d={svgPaths.p27a974c0} fill="var(--fill-0, #333333)" id="Vector" />
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
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[23px] text-center w-[297px] whitespace-pre-wrap">Edit profile</p>
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

function Icon() {
  return (
    <div className="absolute left-[201.5px] size-[26px] top-[53px]" data-name="icon">
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

function FieldFirstName() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px]" data-name="Field / First_Name">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center leading-none not-italic px-[10px] relative size-full whitespace-pre-wrap">
          <p className="font-['TT_Commons:Medium',sans-serif] relative shrink-0 text-[#666] text-[12px] w-full">First name</p>
          <p className="font-['TT_Commons:Regular',sans-serif] relative shrink-0 text-[#050b2e] text-[16px] w-full">Anwar</p>
        </div>
      </div>
    </div>
  );
}

function FieldLastName() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px]" data-name="Field / Last_Name">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center leading-none not-italic px-[10px] relative size-full whitespace-pre-wrap">
          <p className="font-['TT_Commons:Medium',sans-serif] relative shrink-0 text-[#666] text-[12px] w-full">Last name</p>
          <p className="font-['TT_Commons:Regular',sans-serif] relative shrink-0 text-[#050b2e] text-[16px] w-full">Hosny</p>
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Name">
      <FieldFirstName />
      <FieldLastName />
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

function CCode() {
  return (
    <div className="content-stretch flex gap-[4px] h-[56px] items-center px-[10px] relative rounded-[12px] shrink-0" data-name="C/code">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="h-[24px] relative shrink-0 w-[32px]" data-name="flag placeholder">
        <div className="absolute inset-0 shadow-[0px_2px_3px_0px_rgba(0,0,0,0.1)]" data-name="shadow" />
        <div className="absolute inset-0" data-name="flag">
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
        <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.7)] inset-0 mix-blend-overlay to-[rgba(0,0,0,0.3)]" data-name="overlay-top-down" />
        <div className="absolute inset-0 mix-blend-overlay" data-name="overlay-real-linear" style={{ backgroundImage: "linear-gradient(233.13deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.27) 26.274%, rgba(255, 255, 255, 0.26) 36.996%, rgba(0, 0, 0, 0.55) 48.7%, rgba(0, 0, 0, 0.24) 59.444%, rgba(255, 255, 255, 0.3) 73.641%, rgba(39, 39, 39, 0.22) 90.146%, rgba(0, 0, 0, 0.2) 100%)" }} />
        <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0" data-name="border" />
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px]">+010</p>
      <div className="flex items-center justify-center relative shrink-0 size-[32px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[32px]" data-name="Duseat-icons-24PT-Left 2">
            <Left1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldPhoneNumber() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px]" data-name="Field / Phone_Number">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center leading-none not-italic px-[10px] relative size-full whitespace-pre-wrap">
          <p className="font-['TT_Commons:Medium',sans-serif] relative shrink-0 text-[#666] text-[12px] w-full">Phone number</p>
          <p className="font-['TT_Commons:Regular',sans-serif] relative shrink-0 text-[#050b2e] text-[16px] w-full">+201017130116</p>
        </div>
      </div>
    </div>
  );
}

function PhoneNumber() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Phone number">
      <CCode />
      <FieldPhoneNumber />
    </div>
  );
}

function Left2() {
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

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px]">Male</p>
      <div className="flex items-center justify-center relative shrink-0 size-[32px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[32px]" data-name="Duseat-icons-24PT-Left 2">
            <Left2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldGender() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center px-[10px] relative rounded-[12px] shrink-0" data-name="Field / Gender">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#666] text-[12px] w-full whitespace-pre-wrap">Gender</p>
      <Frame1 />
    </div>
  );
}

function FieldBithday() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px]" data-name="Field / Bithday">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center leading-none not-italic px-[10px] relative size-full whitespace-pre-wrap">
          <p className="font-['TT_Commons:Medium',sans-serif] relative shrink-0 text-[#666] text-[12px] w-full">Birthday</p>
          <p className="font-['TT_Commons:Regular',sans-serif] relative shrink-0 text-[#050b2e] text-[16px] w-full">1/1/2001</p>
        </div>
      </div>
    </div>
  );
}

function Birthday() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Birthday">
      <FieldGender />
      <FieldBithday />
    </div>
  );
}

function FieldEmail() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px]" data-name="Field / Email">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center leading-none not-italic px-[10px] relative size-full whitespace-pre-wrap">
          <p className="font-['TT_Commons:Medium',sans-serif] relative shrink-0 text-[#666] text-[12px] w-full">Email</p>
          <p className="font-['TT_Commons:Regular',sans-serif] relative shrink-0 text-[#050b2e] text-[16px] w-full">anwerhosney@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Email">
      <FieldEmail />
    </div>
  );
}

function FieldAddress() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px]" data-name="Field / Address">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center leading-none not-italic px-[10px] relative size-full whitespace-pre-wrap">
          <p className="font-['TT_Commons:Medium',sans-serif] relative shrink-0 text-[#666] text-[12px] w-full">Adress</p>
          <p className="font-['TT_Commons:Regular',sans-serif] relative shrink-0 text-[#050b2e] text-[16px] w-full">Egypt , Kafr-elshiekh</p>
        </div>
      </div>
    </div>
  );
}

function Adress() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Adress">
      <FieldAddress />
    </div>
  );
}

function FieldUsername() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px]" data-name="Field / Username">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center leading-none not-italic px-[10px] relative size-full whitespace-pre-wrap">
          <p className="font-['TT_Commons:Medium',sans-serif] relative shrink-0 text-[#666] text-[12px] w-full">Username</p>
          <p className="font-['TT_Commons:Regular',sans-serif] relative shrink-0 text-[#050b2e] text-[16px] w-full">anwerhosney</p>
        </div>
      </div>
    </div>
  );
}

function Username() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Username">
      <FieldUsername />
    </div>
  );
}

function Fields() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Fields">
      <Name />
      <PhoneNumber />
      <Birthday />
      <Email />
      <Adress />
      <Username />
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Personal_Info">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#666] text-[21px] w-full whitespace-pre-wrap">Personal deatils</p>
      <Fields />
    </div>
  );
}

function ProfileDelete() {
  return (
    <div className="absolute inset-[5.21%_12.03%_9.38%_13.54%]" data-name="Profile Delete 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.864 20.5">
        <g id="Profile Delete 2">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p149a3600} fill="var(--fill-0, #BE1A0E)" fillRule="evenodd" />
            <path d={svgPaths.p30ba8900} fill="var(--fill-0, #BE1A0E)" />
            <path d={svgPaths.p4c8bf00} fill="var(--fill-0, #BE1A0E)" />
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
        <div className="absolute inset-0 overflow-clip" data-name="Duseat-icons-24PT-Profile Delete 2">
          <ProfileDelete />
        </div>
      </div>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#be1a0e] text-[16px] text-center">Delete account</p>
    </div>
  );
}

function Right() {
  return (
    <div className="absolute inset-[26.04%_13.54%]" data-name="Right 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5001 11.5001">
        <g id="Right 1">
          <path d={svgPaths.p2c8d2380} fill="var(--fill-0, #BE1A0E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Arrow">
      <div className="relative shrink-0 size-[24px]" data-name="Duseat-icons-24PT-Right 1">
        <Right />
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="backdrop-blur-[25px] bg-white flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[999px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)]" data-name="Settings">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Label />
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start py-[10px] relative shrink-0 w-full">
      <Settings />
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

function Other() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Other">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#666] text-[21px] w-full whitespace-pre-wrap">Other</p>
      <Frame2 />
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#01cbd2] content-stretch flex flex-col h-[44px] items-start justify-center px-[10px] relative rounded-[24px] shrink-0 w-[361px]" data-name="Button / Primary">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white w-full whitespace-pre-wrap">Save</p>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Section">
      <PersonalInfo />
      <Other />
      <ButtonPrimary />
    </div>
  );
}

function PersonalDetails() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[17px] top-[137px] w-[360px]" data-name="Personal_Details">
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
      <Icon />
      <Section />
    </div>
  );
}

export default function ScreenEditProfile() {
  return (
    <div className="bg-white relative size-full" data-name="Screen / Edit Profile">
      <Header />
      <PersonalDetails />
    </div>
  );
}
