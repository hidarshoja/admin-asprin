import React, { useRef } from "react";
import Tiptap from "../components/Tiptap"

export default function EditFacility() {

  const editorRef = useRef(null)

  return (
    <>
      <p className="text-[#000] text-[18px] lg:text-[21px]">
          ویرایش امکانات
      </p>
      <div className="flex items-center justify-start gap-2.5  w-full md:w-[80%] lg:w-[50%] bg-[#ffd7d7] rounded-xl h-[34px] px-2 mt-4">
          <div>
              <img src="/img/ell.svg" alt="" />
          </div>
          <div className="text-[#d14045] text-[14px]">
          ذخیره اطلاعات شما با خطا مواجه شد .
          </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-12 gap-6">
        <div className="w-full lgw-9/12">
            <div>
           
            <div className="flex items-center justify-between lg:justify-start mt-3">
              <span className="text-[#b4b4b4] text-[15px] lg:w-[114px]"> نام :</span>
              <input
                type="text"
                className="w-[80%] lg:w-[50%] rounded-md border border-[#d9d9d9] py-1.5 px-4 text-[#b4b4b4] text-sm"
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between lg:justify-start mt-3">
              <span className="text-[#b4b4b4] text-[15px] lg:w-[114px]"> نامک :</span>
              <input
                type="text"
                className="w-[80%] lg:w-[50%] rounded-md border border-[#d9d9d9] py-1.5 px-4 text-[#b4b4b4] text-sm"
                placeholder=""
              />
            </div>
           
            <div className="flex items-start justify-between mt-3">
              <span className="text-[#b4b4b4] text-[15px] lg:w-[130px]"> توضیحات  :</span>
              <textarea className="w-[80%] xl:w-full h-[165px] rounded-md border border-[#d9d9d9] py-1.5 px-4 text-[#b4b4b4] text-sm"></textarea>
            </div>
            {/* <div className="flex items-center justify-end mt-4">
              <span className="bg-[#f9e6be] rounded-3xl px-5 py-1 flex items-center justify-center text-[14px] text-[#000]">
                افزودن خدمات
              </span>
            </div> */}
           
            </div>
            <div className="w-full min-h-[300px] flex items-center justify-center bg-[#f9f9f9] mt-6 border border-[#dbdbdb] rounded-xl">
              <Tiptap editorRef={editorRef}/>
            </div>
        </div>
        <div className="w-full lg:w-3/12 flex justify-center">
          <div className="w-[204px] h-[212px] bg-[#f9f9f9] border border-[#ddd] rounded-lg relative">
                <div className="w-full flex items-center justify-between py-1.5 px-3 border-b border-[#DDD]">
                  <div className="flex items-center justify-center text-[#878787] text-sm">انتشار</div>
                  <div className="flex items-center justify-center gap-1">
                    <img src="/img/top.svg" alt="" />
                    <img src="/img/bottom.svg" alt="" />
                    <img src="/img/Pol.svg" alt="" />
                  </div>
                </div>
                <div>
                <div className="w-full mt-2 px-2 flex gap-1">
                  <div className="w-1/2 border border-[#dbdbdb] rounded-2xl flex items-center justify-center text-[#354d5a text-[9px]">
                  ذخیره پیشنویس ها
                  </div>
                  <div className="w-1/2 border border-[#dbdbdb] rounded-2xl flex items-center justify-center text-[#354d5a text-[9px]">
                  نمایش پیشنویس
                  </div>
                </div>
                <div className="mt-4 w-full text-[#878787] text-[10px] px-4 flex flex-col gap-3">
                  <div>
                  وضعیت : پیش نویس ویرایش
                  </div>
                  <div>
                  قابلیت مشاهده: عمومی ویرایش
                  </div>
                  <div>
                  انتشار فوری ویرایش
                  </div>
                  <div>
                  سئو : در دسترس نمیباشد
                  </div>
                </div>
                </div>
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-[#F9E5C0] border border-[#FFAC03] text-[#354d5a] text-[20px] rounded-b-lg">
                    انتشار / بروزرسانی
                  </div> 
          </div>
        </div>
      </div>
      
   </>
  )
}
