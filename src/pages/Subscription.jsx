import React from "react";

const Subscription = () => {
  return (
    <>
      <p className="text-[#000] text-[18px] lg:text-[21px]">
        افزودن خدمات تازه
      </p>
      <div className="text-[#d14045] text-[14px] flex items-center justify-start w-full lg:w-[80%] h-[34px] rounded-xl bg-[#ffd7d7] gap-2 px-3 mt-4">
        <img src="./img/Elli.svg" alt="1" />
        <span>ذخیره اطلاعات شما با خطا مواجه شد .</span>
      </div>
      <div className="w-full min-h-[640px] border border-[#ddd] bg-[#f9f9f9] rounded-3xl mt-7 flex flex-col gap-3 lg:p-4 relative">
        <div className="w-full min-h-[300px] lg:border border-[#ddd] bg-[#f9f9f9] rounded-3xl  flex flex-col lg:flex-row gap-3 items-center justify-center px-3 py-3">
          <div className="w-full lg:w-1/3 h-[274px]  flex flex-col item-center justify-between">
            <input
              type="text"
              className="w-full py-3 px-6 rounded-xl border border-[#757575] bg-[#fff] text-[#a5a5a5] text-base"
              placeholder="عنوان اشتراک..."
            />
            <input
              type="text"
              className="w-full py-3 px-6 rounded-xl border border-[#757575] bg-[#fff] text-[#a5a5a5] text-base"
              placeholder="هزینه اشتراک بدون تخفیف..."
            />
            <input
              type="text"
              className="w-full py-3 px-6 rounded-xl border border-[#757575] bg-[#fff] text-[#a5a5a5] text-base"
              placeholder="هزینه اشتراک با اعمال تخفیف..."
            />
            <input
              type="text"
              className="w-full py-3 px-6 rounded-xl border border-[#757575] bg-[#fff] text-[#a5a5a5] text-base"
              placeholder="مدت زمان اشتراک..."
            />
          </div>
          <div className="w-full lg:w-1/3 h-[274px] py-3 px-6 border border-[#757575] rounded-xl bg-[#fff]">
            <textarea
              name=""
              id=""
              className="w-full outline-none"
              rows="10"
              placeholder="توضیحات مختصر در حد سیصد کلمه"
            ></textarea>
          </div>
          <div className="w-full lg:w-1/3 h-[274px]  flex flex-col item-center justify-between">
            <input
              type="text"
              className="w-full py-3 px-6 rounded-xl border border-[#757575] bg-[#fff] text-[#a5a5a5] text-base"
              placeholder="ویژگی های اشتراک..."
            />
            <input
              type="text"
              className="w-full py-3 px-6 rounded-xl border border-[#757575] bg-[#fff] text-[#a5a5a5] text-base"
              placeholder="ویژگی های اشتراک..."
            />
            <input
              type="text"
              className="w-full py-3 px-6 rounded-xl border border-[#757575] bg-[#fff] text-[#a5a5a5] text-base"
              placeholder="ویژگی های اشتراک..."
            />
            <input
              type="text"
              className="w-full py-3 px-6 rounded-xl border border-[#757575] bg-[#fff] text-[#a5a5a5] text-base"
              placeholder="افزودن ویژگی جدید"
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-[96%] md:w-[97%] min-h-20 px-3 py-2 flex flex-col items-start  lg:items-center justify-between lg:flex-row border border-[#ddd] bg-white rounded-lg mx-2 md:mx-3 lg:mx-0 mb-3 lg:mb-0 gap-10 lg:gap-0">
            <div className=" flex flex-col gap-2">
              <p className="text-[#000] text-2xl">عضویت ساده</p>
              <p className="text-[#b0b0b0] text-[11px]">
                کسب‌و‌کار شما به‌صورت پیش‌فرض شامل عضویت رایگان می‌شود.
              </p>
            </div>
            <div className=" flex items-center justify-between lg:justify-center gap-2 flex-wrap lg:flex-nowrap">
              <div className="flex gap-2 items-center">
                <span className=" py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#304a59] text-[#304a59] text-[8px]">
                  دوره : یکساله
                </span>
                <span className=" py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#304a59] text-[#304a59] text-[8px]">
                  قیمت : رایگان
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className=" py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#FFAC03] bg-[#FFAC03] text-[#304a59] text-[8px]">
                  ویرایش
                </span>
                <span className="py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#FF0303] text-[#FF0303] text-[8px]">
                  حذف
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-[96%] md:w-[97%] min-h-20 px-3 py-2 flex flex-col items-start  lg:items-center justify-between lg:flex-row border border-[#ddd] bg-white rounded-lg mx-2 md:mx-3 lg:mx-0 mb-3 lg:mb-0 gap-10 lg:gap-0">
            <div className=" flex flex-col gap-2">
              <p className="text-[#000] text-2xl">عضویت ساده</p>
              <p className="text-[#b0b0b0] text-[11px]">
                کسب‌و‌کار شما به‌صورت پیش‌فرض شامل عضویت رایگان می‌شود.
              </p>
            </div>
            <div className=" flex items-center justify-between lg:justify-center gap-2 flex-wrap lg:flex-nowrap">
              <div className="flex gap-2 items-center">
                <span className=" py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#304a59] text-[#304a59] text-[8px]">
                  دوره : یکساله
                </span>
                <span className=" py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#304a59] text-[#304a59] text-[8px]">
                  قیمت : رایگان
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className=" py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#FFAC03] bg-[#FFAC03] text-[#304a59] text-[8px]">
                  ویرایش
                </span>
                <span className="py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#FF0303] text-[#FF0303] text-[8px]">
                  حذف
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-[96%] md:w-[97%] min-h-20 px-3 py-2 flex flex-col items-start  lg:items-center justify-between lg:flex-row border border-[#ddd] bg-white rounded-lg mx-2 md:mx-3 lg:mx-0 mb-3 lg:mb-0 gap-10 lg:gap-0">
            <div className=" flex flex-col gap-2">
              <p className="text-[#000] text-2xl">عضویت ساده</p>
              <p className="text-[#b0b0b0] text-[11px]">
                کسب‌و‌کار شما به‌صورت پیش‌فرض شامل عضویت رایگان می‌شود.
              </p>
            </div>
            <div className=" flex items-center justify-between lg:justify-center gap-2 flex-wrap lg:flex-nowrap">
              <div className="flex gap-2 items-center">
                <span className=" py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#304a59] text-[#304a59] text-[8px]">
                  دوره : یکساله
                </span>
                <span className=" py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#304a59] text-[#304a59] text-[8px]">
                  قیمت : رایگان
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className=" py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#FFAC03] bg-[#FFAC03] text-[#304a59] text-[8px]">
                  ویرایش
                </span>
                <span className="py-2 px-6 flex items-center justify-center border rounded-[4px] border-[#FF0303] text-[#FF0303] text-[8px]">
                  حذف
                </span>
              </div>
            </div>
          </div>
        </div>
          <div className="absolute bottom-[-10px] left-7 bg-[#F9E6BE] rounded-3xl w-[127px] h-6 flex items-center justify-center text-sm text-[#000]">ذخیره</div>
      </div>
    </>
  );
};

export default Subscription;
