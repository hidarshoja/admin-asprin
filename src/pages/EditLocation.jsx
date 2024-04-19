import React, { useRef } from "react";
import Tiptap from '../components/Tiptap';

export default function EditLocation() {
  const editorRef = useRef(null)

  return (
    <>
      <p className="text-[#000] text-[18px] lg:text-[21px]">
      ویرایش اطلاعات شهر یا استان 
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
        <form action="">
            <div className="w-full mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-4 text-color3"
              >
                نام شهر :
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="بجنورد"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-4 text-color3"
              >
                نامک :
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="نامک (نشانه url)"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-4 text-color3"
              >
                دسته مادر :
              </label>
              <div className="mt-2">
                <select
                  name="select"
                  id="select"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="option1" selected disabled>
                    خدمات
                  </option>
                  <option value="option1">گزینه ۱</option>
                  <option value="option2">گزینه ۲</option>
                  <option value="option3">گزینه ۳</option>
                </select>
              </div>
            </div>
            <div className="w-full mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-4 text-color3"
              >
                توضیحات :
              </label>
              <div className="mt-2">
                <textarea
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 h-[100px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder=""
                ></textarea>
              </div>
            </div>

           
          </form>
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
