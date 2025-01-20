'use client'

import { FiHome, FiMail, FiMonitor, FiSettings, FiUsers } from "react-icons/fi";
import { useState } from "react";

export default function AdminNavBar () {
  const [selected, setSelected] = useState("الرئيسية");

  return (
    <nav className="w-60 h-screen border-l-[3px] border-[#BFBFBF] bg-white " >
      <TitleSection />

      <div className="flex flex-col gap-2 mx-6 my-12 ">
        <Option
          Icon={FiHome}
          title="الرئيسية"
          selected={selected}
          setSelected={setSelected}
        />
        <Option
          Icon={FiUsers}
          title="المستخدمين"
          selected={selected}
          setSelected={setSelected}
        />
        <Option
          Icon={FiMail}
          title="صندوق البريد"
          selected={selected}
          setSelected={setSelected}
        />
        <Option
          Icon={FiMonitor}
          title="إدارة التطبيق"
          selected={selected}
          setSelected={setSelected}
        />
        <Option
          Icon={FiSettings}
          title="إعدادات"
          selected={selected}
          setSelected={setSelected}
        />
      </div>

    </nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, notifs }) => {
  return (
    <button
      onClick={() => setSelected(title)}
      className={`h-10 w-full flex justify-start items-center rounded-md transition-colors ${selected === title ? "bg-[#EFEDFB] text-[#7164FA]" : "text-black hover:bg-slate-100"}`} 
    >
      <div className="w-10 h-full flex justify-center items-center text-lg" >
        <Icon />
      </div>
      <span className="text-xs font-bold" >
        {title}
      </span>
      {notifs && (
        <span className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white" >
          {notifs}
        </span>
      )}
    </button>
  );
};

function TitleSection () {
  return (
    <div className="w-full h-24 flex justify-start items-center border-b-[3px] border-[#BFBFBF] px-6 ">
      <div className="w-full flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <ProfilePicture />
          <div>
            <h1 className="text-base font-semibold">
              طارق صابوني
            </h1>
            <h2 className="text-xs font-normal text-[#808080] ">
              مشرف التطبيق
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

function ProfilePicture () {
  
  return (
    <div
      className="size-12 rounded-2xl border-2 border-[#7164FA] bg-[#B1D4FE] "
    >

    </div>
  );
};