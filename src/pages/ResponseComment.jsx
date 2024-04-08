import React, { useRef } from "react";
import Tiptap from "../components/Tiptap";

const ResponseComment = () => {
  const editorRef = useRef(null);
  return (
    <>
      <p className="text-[#000] text-[18px] lg:text-[21px]">پاسخ دیدگاه</p>
      <p className="my-5  flex w-full lg:w-[80%] text-[#000] text-[14px] bg-green-400 h-[35px] rounded-xl items-center gap-3 px-3">
        <img src="/img/refresh.svg" alt="" />
        <span>Activate Now</span>
      </p>
      <div className="flex flex-col lg:flex-row items-start justify-center">
        <div className="flex flex-col w-full lg:w-:9/12">
          <div className="flex flex-col w-full">
            <div className="w-full">
              <textarea
                name=""
                placeholder="پیوند یکتا :"
                className="w-full px-4 py-5 lg:py-0 h-56 lg:h-10 border border-[#dbdbdb] bg-[#f9f9f9] rounded-[30px]"
                id=""
                cols="30"
              ></textarea>
              <div className="w-full min-h-[190px] rounded-2xl border border-[#dbdbdb] bg-[#f9f9f9] mt-8 relative px-2 py-8 lg:px-6">
                <div className="bg-inherit rounded-full top-[-12px] px-2 text-[#708188] absolute">
                  نویسنده
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="w-full lg:w-1/6 text-[#708188] text-[15px]">
                    نام :
                  </div>
                  <div className="w-full lg:w-5/6">
                    <input
                      type="text"
                      className="w-full outline-none rounded-2xl bg-[#f0eeef] h-8 px-3 text-sm"
                      placeholder="نام"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center mt-4">
                  <div className="w-full lg:w-1/6 text-[#708188] text-[15px]">
                    ایمیل :
                  </div>
                  <div className="w-full lg:w-5/6">
                    <input
                      type="text"
                      className="w-full outline-none rounded-2xl bg-[#f0eeef] h-8 px-3 text-sm"
                      placeholder="ایمیل"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center mt-4">
                  <div className="w-full lg:w-1/6 text-[#708188] text-[15px]">
                    نشانه اینترنت :
                  </div>
                  <div className="w-full lg:w-5/6">
                    <input
                      type="text"
                      className="w-full outline-none rounded-2xl bg-[#f0eeef] h-8 px-3 text-sm"
                      placeholder="نشانه اینترنت"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[190px] rounded-2xl border border-[#dbdbdb] bg-[#f9f9f9] mt-8">
            <Tiptap editorRef={editorRef} />
          </div>
        </div>
        <div className="w-full mt-5 lg:mt-0 flex items-center justify-start lg:justify-center lg:w-3/12">
          <div className="w-[204px] h-[270px] bg-[#f9f9f9] border border-[#ddd] rounded-lg relative">
            <div className="w-full flex items-center justify-between py-1.5 px-3 border-b border-[#DDD]">
              <div className="flex items-center justify-center text-[#878787] text-sm">
                انتشار
              </div>
              <div className="flex items-center justify-center gap-1">
                <img src="/img/top.svg" alt="1" />
                <img src="/img/bottom.svg" alt="2" />
                <img src="/img/Pol.svg" alt="3" />
              </div>
            </div>
            <div>
              <div className="mt-4 w-full text-[#878787] text-[10px] px-4 flex flex-col gap-1">
              <div> وضعیت :  تایید شده</div>
                <div className="flex gap-2 items-center justify-start py-1">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                  />
                  <span>تایید شده</span>
                </div>
                <div className="flex gap-2 items-center justify-start py-1">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                  />
                  <span>در انتظار تایید</span>
                </div>
                <div className="flex gap-2 items-center justify-start py-1">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                  />
                  <span>زباله دان</span>
                </div>
                <div className="flex gap-2 items-center justify-between py-1">
                 <img src="/img/calender.svg" alt="" />
                  <span>فرستاده شده در : اردیبهشت۱۶،۱۴۰۲ در </span>
                </div>
                <div className="flex gap-2 items-center justify-between py-1">
                  <span>۱۷:۵۴</span>
                 <span className="w-16 h-5 border border-[#f0932c] rounded-lg text-[10px] text-[#878787] flex items-center justify-center">ویرایش</span>
                </div>
                <div className="flex gap-2 items-center justify-start py-1">
                  <img src="/img/sms.svg" alt="" />
                  <span>در پاسخ به :‌ صنعت CGI‌در ایران</span>
                
                </div>
                
              </div>
            </div>
            <div className="absolute flex items-center justify-between bottom-0 w-full border-t h-[35px] text-[#354d5a] text-[11px] rounded-b-lg px-3">
              <span className="text-[#d14045]">انتقال به زباله دان</span>
              <span className="bg-[#ffac03] rounded-xl w-[74px] h-[22px] flex items-center justify-center cursor-pointer"> به روز رسانی</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponseComment;
