'use client'

import { FiHome, FiMail, FiMonitor, FiSettings, FiUsers } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

export default function AdminNavBar () {
  const [selected, setSelected] = useState("الرئيسية");

  return (
    <>
      <TitleSection />
      <div className="flex flex-col gap-2 mx-6 my-12 ">
        <Option
          Icon={FiHome}
          title="الرئيسية"
          selected={selected}
          setSelected={setSelected}
          link={"/admin-dashboard/main"}
        />
        <Option
          Icon={FiUsers}
          title="المستخدمين"
          selected={selected}
          setSelected={setSelected}
          link={"/admin-dashboard/users"}
        />
        <Option
          Icon={FiMail}
          title="صندوق البريد"
          selected={selected}
          setSelected={setSelected}
          link={"/"}
        />
        <Option
          Icon={FiMonitor}
          title="إدارة التطبيق"
          selected={selected}
          setSelected={setSelected}
          link={"/"}
        />
        <Option
          Icon={FiSettings}
          title="إعدادات"
          selected={selected}
          setSelected={setSelected}
          link={"/"}
        />
      </div>
    </>
  );
};

const Option = ({ Icon, title, selected, setSelected, link, notifs }) => {
  return (
    <Link
      href={link}
      onClick={() => setSelected(title)}
      className={`h-10 w-full flex justify-start items-center relative rounded-md transition-colors ${selected === title ? "bg-[#EFEDFB] text-[#7164FA]" : "text-black hover:bg-slate-100"}`} 
    >
      <div className="w-10 h-full flex justify-center items-center text-lg" >
        <Icon />
      </div>
      <span className="text-xs font-bold" >
        {title}
      </span>
      {notifs && (
        <span className="absolute right-40 size-4 rounded bg-indigo-500 text-xs text-white" >
          {notifs}
        </span>
      )}
    </Link>
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