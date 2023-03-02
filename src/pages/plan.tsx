import Form from "@/components/Form";
import { TbBrandAppleArcade } from "react-icons/tb";
import { FaGamepad } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";

export default function Page() {
  return (
    <div className="grid min-h-screen place-content-center bg-[#d6d9e6] bg-opacity-80">
      <Form previousPageUrl="/" nextPageUrl="/add-ons">
        <div className="h-full pt-6 pl-20">
          <h1 className="text-3xl font-bold leading-tight">Select your plan</h1>
          <p className="mt-3 text-sm text-gray-400">
            You have the option for monthly or yearly planning
          </p>
          <div className="flex items-center gap-4 mt-3">
            <button className="h-[10rem] w-[10rem] border border-gray-200 shadow-md rounded-xl flex flex-col items-start justify-start p-3">
              <div className="px-3 py-3 bg-orange-400 rounded-full">
                <TbBrandAppleArcade className="text-xl text-white" />
              </div>
              <div className="mt-auto text-start">
                <p className="font-bold ">Arcade</p>
                <span className="text-xs text-gray-400">$9 / month</span>
              </div>
            </button>
            <button className="h-[10rem] w-[10rem] border border-gray-200 shadow-md rounded-xl flex flex-col items-start justify-start p-3">
              <div className="px-3 py-3 bg-pink-600 rounded-full">
                <FaGamepad className="text-xl text-white" />
              </div>
              <div className="mt-auto text-start">
                <p className="font-bold ">Advanced</p>
                <span className="text-xs text-gray-400">$12 / month</span>
              </div>
            </button>
            <button className="h-[10rem] w-[10rem] border border-gray-200 shadow-md rounded-xl flex flex-col items-start justify-start p-3">
              <div className="px-3 py-3 bg-blue-500 rounded-full">
                <IoGameControllerOutline className="text-xl text-white" />
              </div>
              <div className="mt-auto text-start">
                <p className="font-bold ">Pro</p>
                <span className="text-xs text-gray-400">$15 / month</span>
              </div>
            </button>
          </div>

          <div className="mt-5 h-[4rem] gap-3 bg-gray-100 rounded-xl flex items-center justify-center">
            <span>Monthly</span>{" "}
            <input
              type="checkbox"
              role="switch"
              className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[rgba(0,0,0,0.25)] outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
            />
            <span>Yearly</span>
          </div>
        </div>
      </Form>
    </div>
  );
}
