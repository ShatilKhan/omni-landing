import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
}

export default function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto" style={{ width: '280px' }}>
      {/* Phone outer frame - solid color, no gradient */}
      <div className="relative rounded-[45px] bg-[#1a1a1a] p-[10px] shadow-2xl">
        {/* Screen area */}
        <div className="relative rounded-[35px] bg-white overflow-hidden">
          {/* Content area - the screenshot image */}
          <div className="relative">
            {children}
          </div>
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute left-[-2px] top-[100px] h-[30px] w-[3px] rounded-l-sm bg-[#2a2a2a]" />
      <div className="absolute left-[-2px] top-[145px] h-[55px] w-[3px] rounded-l-sm bg-[#2a2a2a]" />
      <div className="absolute right-[-2px] top-[130px] h-[70px] w-[3px] rounded-r-sm bg-[#2a2a2a]" />
    </div>
  );
}
