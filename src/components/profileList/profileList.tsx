import Image from "next/image";
import React from "react";
import Profile from "../profile/profile";
import { ProfileData, allProfileData } from "@/types/globalTypes";

export default function ProfileList({profileData}: allProfileData) {
  
  return (
    <div className="min-w-[360px] h-screen overflow-hidden border-e-2 border-slate-400 overflow-y-scroll">
      <div className="Top relative sticky top-0">
        <div className="Top-Content h-24 w-full flex justify-center items-center bg-white bg-opacity-80 backdrop-filter backdrop-blur-md">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="logo"
            className="h-8 w-auto"
          ></Image>
          <Image
            src={"/na.png"}
            width={100}
            height={100}
            alt="logo"
            className="h-8 w-auto"
          ></Image>
        </div>
      </div>
      <div className="bottom px-4">
        <div className="Search flex justify-center items-center my-2">
          <input
            type="text"
            placeholder="Search Room"
            className="border rounded-lg w-full px-4 py-1.5 focus:border-blue-500 outline-none flex items-center"
          />
        </div>
        <div className="ConversationList ">
          {profileData.map((data,index) => 
            <Profile data={data} key={index} />
          )}
          {/* {conversationArray.map((_, index) => (
            
          ))} */}
        </div>
      </div>
    </div>
  );
}
