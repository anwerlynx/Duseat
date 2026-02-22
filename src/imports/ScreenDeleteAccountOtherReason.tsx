import svgPaths from "./svg-clc4hry646";
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
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[23px] text-center w-[297px] whitespace-pre-wrap">Delete account</p>
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

function ProfileDelete() {
  return (
    <div className="absolute inset-[5.21%_7.86%_9.38%_5.21%]" data-name="Profile Delete 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9094 13.6667">
        <g id="Profile Delete 1">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3c246500} fill="var(--fill-0, #BE1A0E)" fillRule="evenodd" />
            <path d={svgPaths.p3e7f600} fill="var(--fill-0, #BE1A0E)" />
            <path clipRule="evenodd" d={svgPaths.pdee5af0} fill="var(--fill-0, #BE1A0E)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[201.5px] p-[5px] rounded-[9999px] top-[53px]">
      <div className="relative shrink-0 size-[16px]" data-name="Icon 16 swap">
        <div className="absolute inset-0 overflow-clip" data-name="Duseat-icons-16PT-Profile Delete 1">
          <ProfileDelete />
        </div>
      </div>
    </div>
  );
}

function Up() {
  return (
    <div className="absolute h-[5.5px] left-[2px] top-[5px] w-[11.5px]" data-name="Up 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 5.5">
        <g id="Up 2">
          <path d={svgPaths.p18db5d80} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListBulletPoints() {
  return (
    <div className="bg-white h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="List / Bullet_Points">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[70px] items-center p-[10px] relative size-full">
          <p className="flex-[1_0_0] font-['TT_Commons:Medium',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[#666] text-[16px] whitespace-pre-wrap">Other</p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="relative size-[16px]" data-name="Icon 16 swap">
                <div className="absolute inset-0 overflow-clip" data-name="Duseat-icons-16PT-Up 2">
                  <Up />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldDelete() {
  return (
    <div className="backdrop-blur-[25px] bg-white h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Field / delete">
      <div aria-hidden="true" className="absolute border border-[#01cbd2] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] relative size-full">
          <p className="font-['TT_Commons:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#666] text-[0px] text-[16px] text-center">
            <span className="font-['VDS_Compensated:Light',sans-serif] leading-none text-[#050b2e]">|</span>
            <span className="leading-none text-[#ccc]">{` This helps us keep the platform safe`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input field">
      <FieldDelete />
    </div>
  );
}

function DescribeIssue() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Describe issue">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] w-full whitespace-pre-wrap">Please describe the issue</p>
      <InputField />
    </div>
  );
}

function Deatils() {
  return (
    <div className="content-stretch flex flex-col font-['TT_Commons:Regular',sans-serif] gap-[4px] items-start leading-[0] relative shrink-0 text-[#666] w-full" data-name="Deatils">
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[24px] whitespace-pre-wrap">
          <span className="leading-none">You won’t be able to log in after deletion</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[24px] whitespace-pre-wrap">
          <span className="leading-none">You can’t create a new account with the same email</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[24px] whitespace-pre-wrap">
          <span className="leading-none">Your data and conversations will be removed</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[24px] whitespace-pre-wrap">
          <span className="leading-none">Account deletion is permanent after 14 days</span>
        </li>
      </ul>
    </div>
  );
}

function InfoDeletionWarnings() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[16px] w-full" data-name="Info / Deletion_Warnings">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none relative shrink-0 text-[#050b2e]">Things to check when deleting your account:</p>
      <Deatils />
    </div>
  );
}

function Blocks() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full" data-name="Blocks">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#050b2e] text-[16px] w-full whitespace-pre-wrap">Tell us the reason for closing your account:</p>
      <ListBulletPoints />
      <DescribeIssue />
      <InfoDeletionWarnings />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Info">
      <Blocks />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-px top-0 w-[360px]" data-name="Content">
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
      <Frame />
      <Info />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[655px] left-[16px] top-[137px] w-[361px]" data-name="Content">
      <Content1 />
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#01cbd2] content-stretch flex flex-col h-[44px] items-start justify-center px-[10px] relative rounded-[24px] shrink-0 w-[340px]" data-name="Button / Primary">
      <p className="font-['TT_Commons:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white w-full whitespace-pre-wrap">Deactivate Account</p>
    </div>
  );
}

function AccountActions() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[26px] top-[673px] w-[340px]" data-name="Account_Actions">
      <ButtonPrimary />
      <p className="decoration-solid font-['TT_Commons:Medium',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#be1a0e] text-[16px] text-center underline w-[min-content] whitespace-pre-wrap">Delete My Account</p>
    </div>
  );
}

export default function ScreenDeleteAccountOtherReason() {
  return (
    <div className="bg-white relative size-full" data-name="Screen / Delete_Account / Other reason">
      <Header />
      <Content />
      <AccountActions />
    </div>
  );
}
