'use client'

import { FiHome, FiMail, FiMonitor, FiSettings, FiUsers } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AdminNavBar () {
  const [selected, setSelected] = useState("الرئيسية");

  return (
    <motion.nav
      layout
      className="w-60 h-screen border-l-[3px] border-[#BFBFBF] bg-white "
    >
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

    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, notifs }) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`h-10 w-full flex justify-start items-center rounded-md transition-colors ${selected === title ? "bg-[#EFEDFB] text-[#7164FA]" : "text-black hover:bg-slate-100"}`}
    >
      <motion.div
        layout
        className="w-10 h-full flex justify-center items-center text-lg"
      >
        <Icon />
      </motion.div>
      
      <motion.span
        layout
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
        className="text-xs font-bold"
      >
        {title}
      </motion.span>
      

      {notifs && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

function TitleSection () {
  return (
    <div className="w-full h-24 flex justify-start items-center border-b-[3px] border-[#BFBFBF] px-6 ">
      <div className="w-full flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <ProfilePicture />
          <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
          >
            <h1 className="text-base font-semibold">
              طارق صابوني
            </h1>
            <h2 className="text-xs font-normal text-[#808080] ">
              مشرف التطبيق
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

function ProfilePicture () {
  
  return (
    <motion.div
      layout
      className="size-12 rounded-2xl border-2 border-[#7164FA] bg-[#B1D4FE] "
    >

    </motion.div>
  );
};