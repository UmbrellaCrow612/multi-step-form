import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Form({
  children,
  nextPageUrl,
  previousPageUrl,
}: {
  children: ReactNode;
  nextPageUrl: string;
  previousPageUrl: string;
}) {
  const router = useRouter();
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
      <div className="grid col-span-4 grid-rows-6">
        <div className="row-span-5">{children} </div>
        <div
          className={`flex items-center row-span-1 px-4 ${
            previousPageUrl.length >= 1 ? "justify-between" : "justify-end"
          }`}
        >
          {previousPageUrl === "" ? (
            <></>
          ) : (
            <button
              className="px-4 py-2 text-gray-400 border border-gray-100 rounded-md shadow-sm"
              onClick={() => router.push(previousPageUrl)}
            >
              Go Back
            </button>
          )}
          {nextPageUrl === "" ? (
            <></>
          ) : (
            <button
              className="px-4 py-2 rounded-md bg-[#03295A] text-white shadow-sm"
              onClick={() => router.push(nextPageUrl)}
            >
              Next step
            </button>
          )}
        </div>
      </div>
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
          stepUrl === asPath ? "text-black bg-blue-200 border-blue-100" : ""
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
