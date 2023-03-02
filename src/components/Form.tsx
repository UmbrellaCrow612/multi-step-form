import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Form({ children }: { children: ReactNode }) {
  return (
    <div className="w-[50rem] h-[40rem] rounded-xl shadow-md bg-white p-4 grid grid-cols-6 grid-rows-1">
      {/* Left */}
      <div className="col-span-2 bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover bg-center rounded-xl py-6 px-3 space-y-4">
        <Step stepNumber={1} stepUrl="/">
          your info
        </Step>
        <Step stepNumber={2} stepUrl="/plan">
          selected plan
        </Step>
        <Step stepNumber={3} stepUrl="/add-ons">
          add-ons
        </Step>
        <Step stepNumber={4} stepUrl="/summary">
          summary
        </Step>
      </div>
      {/* Right */}
      <div className="col-span-4 border border-black">{children}</div>
    </div>
  );
}

const Step = ({
  stepNumber,
  stepUrl,
  children,
}: {
  stepNumber: number;
  stepUrl: string;
  children: string;
}) => {
  const { asPath } = useRouter();
  return (
    <div className="flex items-center gap-4 p-2 pl-4">
      {/*Number */}
      <div
        className={`px-3 py-1 text-white border border-white rounded-full ${
          stepUrl === asPath ? "text-black bg-blue-400 border-blue-300" : ""
        }`}
      >
        {stepNumber}
      </div>
      {/*Info */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-400 uppercase">
          step {stepNumber}
        </span>{" "}
        <span className="font-bold text-white uppercase">{children}</span>
      </div>
    </div>
  );
};

// Pass is then put on the right hand side
// Left hand side use router to highlight which step your on
// Buttons use router to shiw back or forth just hide if on "/" then use router push back or window push back
