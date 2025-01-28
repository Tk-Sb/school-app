'use client'

import { FiHome, FiMail, FiMonitor, FiSettings, FiUsers } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNavBar () {
  const selectedRoute = usePathname()

  return (
    <>
      <TitleSection />
      <div className="flex flex-col gap-2 mx-6 my-12 ">
        <Option
          Icon={FiHome}
          title="الرئيسية"
          selected={selectedRoute}
          link={"/admin-dashboard/home"}
        />
        <Option
          Icon={FiUsers}
          title="المستخدمين"
          selected={selectedRoute}
          link={"/admin-dashboard/users"}
        />
        <Option
          Icon={FiMail}
          title="صندوق البريد"
          selected={selectedRoute}
          link={"/"}
        />
        <Option
          Icon={FiMonitor}
          title="إدارة التطبيق"
          selected={selectedRoute}
          link={"/"}
        />
        <Option
          Icon={FiSettings}
          title="إعدادات"
          selected={selectedRoute}
          link={"/"}
        />
      </div>
    </>
  );
};

const Option = ({ Icon, title, selected, link, notifs }) => {
  return (
    <Link
      href={link}
      className={`h-10 w-full flex justify-start items-center relative rounded-md transition-colors ${selected === link ? "bg-[#EFEDFB] text-[#7164FA]" : "text-black hover:bg-slate-100"}`} 
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