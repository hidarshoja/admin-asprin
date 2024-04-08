import { useState } from "react";
import TableComment from "../components/TableComment";
const Comments = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <p className="text-[#000] text-[18px] lg:text-[21px]">همه دیدگاه ها</p>
      <div className="w-full lg:w-[80%] rounded-2xl border border-[#dbdbdb] bg-[#f9f9f9] h-[130px] mt-20 relative">
        <div className="w-full flex items-center justify-between px-4 py-2">
          <span className="text-[#000]">
            نقد و بررسی های محصول جا به جا شده!
          </span>
          <span>
            <img src="/img/cancel.svg" alt="" />
          </span>
        </div>
        <div className="bg-[#ffac03] border border-[#ffac03] rounded-xl w-[105px] h-[23px] text-[#354d5a] text-[11px] absolute left-2 bottom-2 flex items-center justify-center">
          بازدید از مکان جدید
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-start flex-wrap gap-3 mt-10 text-[#354d5a] text-[15px]">
        <span
          className={`rounded-2xl px-6 py-1 cursor-pointer ${
            activeTab === "all" ? "bg-[#ffac03]" : ""
          }`}
          onClick={() => handleTabClick("all")}
        >
          همه (21)
        </span>
        <span
          className={`rounded-2xl px-6 py-1 cursor-pointer ${activeTab === "mine" ? "bg-[#ffac03]" : ""}`}
          onClick={() => handleTabClick("mine")}
        >
          مال من (12)
        </span>
        <span
          className={`rounded-2xl cursor-pointer px-6 py-1 ${activeTab === "pending" ? "bg-[#ffac03]" : ""}`}
          onClick={() => handleTabClick("pending")}
        >
          در انتظار (31)
        </span>
        <span
          className={`cursor-pointer rounded-2xl px-6 py-1 ${activeTab === "approved" ? "bg-[#ffac03]" : ""}`}
          onClick={() => handleTabClick("approved")}
        >
          تایید شده (29)
        </span>
        <span
          className={`cursor-pointer rounded-2xl px-6 py-1 ${activeTab === "published" ? "bg-[#ffac03]" : ""}`}
          onClick={() => handleTabClick("published")}
        >
          منتشر شده (10)
        </span>
        <span
          className={`cursor-pointer rounded-2xl px-6 py-1 ${activeTab === "trash" ? "bg-[#ffac03]" : ""}`}
          onClick={() => handleTabClick("trash")}
        >
          زباله دان (4)
        </span>
      </div>
      <div className="mt-16">
        {activeTab === "all" && <div>  <TableComment /></div>}
        {activeTab === "mine" && <div>  <TableComment /></div>}
        {activeTab === "pending" && <div> <TableComment /></div>}
        {activeTab === "approved" && <div> <TableComment /></div>}
        {activeTab === "published" && <div> <TableComment /></div>}
        {activeTab === "trash" && <div>  <TableComment /></div>}
      </div>
    </>
  );
};

export default Comments;
