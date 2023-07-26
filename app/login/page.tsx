import React from "react";
import Image from "next/image";
import LgImg from "./assets/login.png";

type Props = {};
export metadata = {
  title: 'Login',
  description: "login page"
}

function page({}: Props) {
  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <div className="w-1/2 flex flex-row bg-white items-center gap-4 justify-center shadow-xl">
        <div className="image-lg grow w-1/2">
          <Image
            className="w-full "
            src={LgImg}
            alt="err"
            height={500}
            width={350}
          />
        </div>
        <div className="creds-lg p-3  gap-4 flex w-1/2 justify-start flex-col">
          <div>
            <span className="font-bold">Login</span>
            <br />
            <span>Lorem ipsum dolor sit amet minim</span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-light">Label title</label>
            <input
              className="p-2 rounded-sm border border-black"
              placeholder="Placeholder Content"
              type="text"
            />
          </div>

          <div className="flex flex-col  gap-2">
            <label className="font-light">Label title</label>
            <input
              className="p-2 rounded-sm border border-black"
              placeholder="Placeholder Content"
              type="text"
            />
          </div>

          <div className="self-end"> Forgot Password?</div>
          <button className="bg-blue-600 p-2"> Login</button>
          <div className="self-center flex flex-row gap-2 items-center w-full justify-center">
            <div className="h-[1px] relative mt-[3px]  grow bg-gray-300"></div>
            <div className="grow-0"> or</div>
            <div className="h-[1px] relative mt-[3px]  grow bg-gray-300"></div>
          </div>
          <button className="border border-blue-400 p-2"> Registor Now</button>
        </div>
      </div>
    </div>
  );
}

export default page;
