import React from "react";
import { Link } from "react-router-dom";

export default function ServiceProviders() {
   
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] lg:text-[21px]">خدمات دهندگان</p>
        {/* <div className='hidden  md:flex gap-5 text-[#596271] text-sm lg:text-base'>
        <div>
            <span>همه : </span>
            <span> 1500 </span>
        </div>
        <div>
            <span>منتظر تایید : </span>
            <span> 1500 </span>
        </div>
        <div>
            <span>اعضا VIP : </span>
            <span> 1500 </span>
        </div>
      </div> */}
        <Link to="/addServices">
          <span className="bg-[#FFAC03] rounded-3xl px-5 py-1 gap-3 flex items-center justify-between text-[14px] text-[#fff] cursor-pointer">
            <span>+</span>
            <span>افزودن خدمات دهنده</span>
          </span>
        </Link>
      </div>
      <div className="relative flex flex-col items-center justify-between gap-2 text-[11px] text-[#596271] font-bold border-2 border-[#d8d8d8] bg-[#f6f5f1] rounded-xl l py-1.5 px-4   lg:w-full mt-10">
       
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex items-start flex-col text-[10px]  gap-1 w-full lg:w-[25%]">
            <span>نام خدمات دهنده</span>
            <input
              type="search"
              name=""
              id=""
              className="rounded-[77px] h-[30px] bg-[#eeedeb] px-2 w-[80%]"
            />
          </div>
          <div className="flex items-start flex-col text-[10px]  gap-1 w-full  lg:w-[25%]">
            <span>خدمات</span>
            <input
              type="text"
              className="rounded-[77px] h-[30px] bg-[#eeedeb] px-2 w-[80%]"
            />
          </div>
          <div className="flex items-start flex-col text-[10px]  gap-1 w-full  lg:w-[25%]">
            <span>تخصص :</span>
            <input
              type="text"
              className="rounded-[77px] h-[30px] bg-[#eeedeb] px-2 w-[80%]"
            />
          </div>
          <div className="flex items-start flex-col text-[10px]  gap-1 w-full  lg:w-[25%]">
            <span>امکانات :</span>
            <input
              type="text"
              className="rounded-[77px] h-[30px] bg-[#eeedeb] px-2 w-[80%]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full items-center ">
          <div className="flex items-start flex-col   gap-1 w-full  lg:w-4/12">
            <span>شهر :</span>
            <input
              type="text"
              className="rounded-[77px]  h-[30px] bg-[#eeedeb] px-2 w-[80%]"
            />
          </div>
          <div className="flex items-start flex-col  gap-1 w-full  lg:w-4/12">
            <span>منطقه :</span>
            <input
              type="text"
              className="rounded-[77px] h-[30px] bg-[#eeedeb] px-2 w-[80%]"
            />
          </div>
          <div className="flex items-start flex-col  gap-1 w-full  lg:w-4/12">
            <span>اشتراک :</span>
            <input
              type="text"
              className="rounded-[77px] h-[30px] bg-[#eeedeb] px-2 w-[80%]"
            />
          </div>
          <div className="w-full flex items-start flex-col justify-end lg:justify-center mt-4 lg:mt-0  lg:w-4/12">
            {/* <img
              src="/img/phoneSearch.svg"
              className="hidden lg:flex "
              alt="1"
            /> */}
            <img src="/img/desSearch.svg" className="flex absolute bottom-[-14px] left-2 " alt="2" />
          </div>
        </div>
        <div className="flex   items-center justify-around gap-2 left-1/2 absolute text-[9px] font-normal text-[#b4b4b4]  py-1.5 px-2 bottom-[-70px] lg:bottom-[-28px]  translate-x-[-50%]  lg:right-1 lg:left-auto lg:translate-x-0 w-[273px] lg:w-[500px]">
          <div className="bg-[#f6f5f1] border border-[#dddddc] rounded-b-xl pt-1 px-1  pb-[2px]">
            <span>همه</span>
            <span className="pr-1 lg:pr-2">2521</span>
          </div>
          <div className="bg-[#f6f5f1] border border-[#dddddc] rounded-b-xl pt-1 px-1  pb-[2px] ">
            <span>منتظر تایید</span>
            <span className="pr-1 lg:pr-2">2521</span>
          </div>
          <div className="bg-[#f6f5f1] border border-[#dddddc] rounded-b-xl pt-1 px-1  pb-[2px] ">
            <span>تمام اشتراک</span>
            <span className="pr-1 lg:pr-2">2521</span>
          </div>
          <div className="bg-[#f6f5f1] border border-[#dddddc] rounded-b-xl pt-1 px-1  pb-[2px]">
            <span>vip </span>
            <span className="pr-1 lg:pr-2">2521</span>
          </div>
          <div className="hidden lg:flex bg-[#f6f5f1] border border-[#dddddc] rounded-b-xl pt-1 px-1  pb-[2px]">
            <span>سالانه</span>
            <span className="pr-1 lg:pr-2">2521</span>
          </div>
          <div className="hidden lg:flex bg-[#f6f5f1] border border-[#dddddc] rounded-b-xl pt-1 px-1 lg:px-6 pb-[2px]">
            <span>حذف</span>
            <span className="pr-1 lg:pr-2">2521</span>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[402px] rounded-2xl border border-[#dbdbdb] bg-[#f9f9f9] mt-20 lg:mt-24 relative">
       

       

        <div className="hidden lg:block w-full border mt-20 border-[#d9d9d9] rounded-t-xl  bg-white min-h-[50px] ">
          <div className="overflow-x-auto ">
            <table className="w-full text-[#b4b4b4] text-[14px] ">
              <thead className="border-b border-[#D9D9D9]  ">
                <tr className="bg-[#FBFAF6]">
                  <th className="flex gap-6 items-center justify-center py-2 ">
                    <input
                      type="checkbox"
                      className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                    />
                    <span>نام </span>
                  </th>
                  <th>خدمات </th>
                  <th>تخصص</th>
                  <th> استان </th>
                  <th>شهر</th>
                  <th>منطقه</th>
                  <th>فیلترها</th>
                  <th> دیدگاه </th>
                  <th>بازدید</th>
                  <th> اشتراک </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center border-b border-[#D9D9D9]">
                  <td className="flex gap-6 items-center justify-center py-4">
                    <input
                      type="checkbox"
                      className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                    />
                    <span> محسن حیدری </span>
                  </td>
                  <td>داروخانه</td>
                  <td>متخصص قلب</td>
                  <td>تهران</td>
                  <td>شهریار</td>
                  <td>وایین</td>
                  <td>شبانه روزی</td>
                  <td className="flex items-center justify-center">
                    <img src="/img/com.svg" alt="" />
                  </td>
                  <td>86 بازدید</td>
                  <td className="flex items-center justify-center">
                  <img src="/img/Lay.svg" alt="" />
                  </td>
                </tr>
                <tr className="text-center border-b border-[#D9D9D9]">
                  <td className="py-4">
                    <div className="flex gap-6 items-center justify-center">
                      <input
                        type="checkbox"
                        className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                      />
                      <span>میلاد فاضلیان</span>
                    </div>
                    <div className="flex gap-1 text-[#b4b4b4] text-[10px] w-full items-center justify-center">
                      <span>ویرایش</span>
                      <span className="border-r border-l px-[2px]">
                        ویرایش سریع
                      </span>
                      <span className="border-l pl-[2px]">حذف </span>
                      <span>نمایش</span>
                    </div>
                  </td>
                  <td>دکتر داروخانه</td>
                  <td>
                    <div className="flex gap-6 items-center justify-center">
                      <span>متخصص قلب</span>
                    </div>
                  
                  </td>
                  <td>مشهد</td>
                  <td>مشهد </td>
                  <td>5تن</td>
                  <td>شبانه روزی</td>
                  <td className="flex items-center justify-center">
                    <img src="/img/com.svg" alt="" />
                  </td>
                  <td>
                    <div>
                    86 بازدید
                    </div>
                  <div className="flex gap-1 text-[#b4b4b4] text-[10px] w-full items-center justify-center">
                      <span>عکس</span>
                      <span className="border-r border-l px-[2px]">
                         توضیحات
                      </span>
                      <span className="border-l pl-[2px]">مقالات </span>
                      <span>خدمات</span>
                    </div>
                  </td>
                  <td className="flex items-center justify-center">
                  <img src="/img/Lay.svg" alt="" />

                  </td>
                </tr>
               
              </tbody>
            </table>
            <div className="w-full">
              <div className="flex items-center justify-start mt-3 px-5 gap-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <label for="input1" className="text-[#596271] text-[10px]">
                    عنوان:
                  </label>
                  <input
                    id="input1"
                    type="text"
                    className="border border-[#dddddc] rounded-lg h-[19px] w-[140px] px-2 text-[#b4b4b4] text-[11px]"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label for="input1" className="text-[#596271] text-[10px]">
                    درمان:
                  </label>
                  <input
                    id="input1"
                    type="text"
                    className="border border-[#dddddc] rounded-lg h-[19px] w-[140px] px-2 text-[#b4b4b4] text-[11px]"
                    placeholder=""
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label for="input1" className="text-[#596271] text-[10px]">
                    استان:
                  </label>
                  <input
                    id="input1"
                    type="text"
                    className="border border-[#dddddc] rounded-lg h-[19px] w-[140px] px-2 text-[#b4b4b4] text-[11px]"
                    placeholder=""
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label for="input1" className="text-[#596271] text-[10px]">
                     شهر:
                  </label>
                  <input
                    id="input1"
                    type="text"
                    className="border border-[#dddddc] rounded-lg h-[19px] w-[140px] px-2 text-[#b4b4b4] text-[11px]"
                    placeholder=""
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label for="input1" className="text-[#596271] text-[10px]">
                     منطقه:
                  </label>
                  <input
                    id="input1"
                    type="text"
                    className="border border-[#dddddc] rounded-lg h-[19px] w-[140px] px-2 text-[#b4b4b4] text-[11px]"
                    placeholder=""
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label for="input1" className="text-[#596271] text-[10px]">
                    {" "}
                    آدرس URL ::
                  </label>
                  <input
                    id="input1"
                    type="text"
                    className="border border-[#dddddc] rounded-lg h-[19px] w-[140px] px-2 text-[#b4b4b4] text-[11px]"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 w-full flex items-center justify-end px-4 gap-2">
              <span className="rounded-[10px] flex items-center justify-center text-[#000] text-[10px] bg-[#EEEDEB] p-0.5 px-4 cursor-pointer">
                انصراف
              </span>
              <span className="w-[126px] py-0.5 px-2 bg-[#f8e5bf] rounded-[10px] flex items-center justify-center text-[#000] text-[10px] cursor-pointer">
                ذخیره
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:hidden mt-24">
          {/* تیبل موبایل روی این مپ بزنم  */}
          <div className="w-full mt-10">
            <div className="flex flex-wrap px-7 gap-2 text-[#b4b4b4] text-[10px] w-full items-center justify-center">
              <span className="text-[#b4b4b4] text-[12px] bg-[#eeedeb] rounded-lg px-1">
                ویرایش
              </span>
              <span className="text-[#b4b4b4] text-[12px] bg-[#eeedeb] rounded-lg px-1">
                ویرایش سریع
              </span>
              <span className="text-[#b4b4b4] text-[12px] bg-[#eeedeb] rounded-lg px-1">
                حذف
              </span>
              <span className="text-[#b4b4b4] text-[12px] bg-[#eeedeb] rounded-lg px-1">
                نمایش
              </span>
              <span className="text-[#b4b4b4] text-[12px] bg-[#eeedeb] rounded-lg px-1">
                ارسال بازنشانی کاربر‍
              </span>
            </div>
            <div className="w-[80%] border rounded-2xl border-[#dbdbdb] bg-[#f6f5f1] h-auto mx-auto mt-3">
              <div className="w-full flex  border-b">
                <div className="w-1/3 gap-1 flex items-center justify-center text-[#596271] text-base">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                  />
                  <span>نام </span>
                </div>
                <div className="w-2/3 flex gap-1 items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                  />
                  <span>محسن حیدری</span>
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                   خدمات
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                   داروخانه
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  درمان
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[11px]">
                  متخصص قلب
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  استان
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[11px]">
                  تهران
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  منطقه
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  شهریار 
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                   شهر
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  وایین
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                   فیلترها
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  شبانه روزی
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  دیدگاه
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  <img src="/img/com.svg" alt="" />
                </div>
              </div>
              <div className="w-full flex border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  بازید
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  65 بازدید
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  اشتراک
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  <img src="/img/Lay.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* اتمام تیبل موبایل روی این مپ بزنم  */}
         
          <div className="flex flex-col items-start justify-start mt-3 px-5 gap-3 flex-wrap w-[80%] mx-auto">
            <div className="flex items-center gap-1 w-full">
              <label for="input1" className="text-[#596271] text-[10px]">
                عنوان:
              </label>
              <input
                id="input1"
                type="text"
                className="border border-[#dddddc] rounded-lg h-[19px] w-full px-2 text-[#b4b4b4] text-[11px]"
              />
            </div>
            <div className="flex items-center gap-1 w-full">
              <label for="input1" className="text-[#596271] text-[10px]">
                درمان:
              </label>
              <input
                id="input1"
                type="text"
                className="border border-[#dddddc] rounded-lg h-[19px] px-2 text-[#b4b4b4] text-[11px] w-full"
                placeholder=" "
              />
            </div>
            <div className="flex items-center gap-1 w-full">
              <label for="input1" className="text-[#596271] text-[10px]">
                 استان:
              </label>
              <input
                id="input1"
                type="text"
                className="border border-[#dddddc] rounded-lg h-[19px]  px-2 text-[#b4b4b4] text-[11px] w-full"
                placeholder=""
              />
            </div>
            <div className="flex items-center gap-1 w-full">
              <label for="input1" className="text-[#596271] text-[10px]">
                 شهر:
              </label>
              <input
                id="input1"
                type="text"
                className="border border-[#dddddc] rounded-lg h-[19px]  px-2 text-[#b4b4b4] text-[11px] w-full"
                placeholder=""
              />
            </div>
            <div className="flex items-center gap-1 w-full">
              <label for="input1" className="text-[#596271] text-[10px]">
                 منطقه:
              </label>
              <input
                id="input1"
                type="text"
                className="border border-[#dddddc] rounded-lg h-[19px]  px-2 text-[#b4b4b4] text-[11px] w-full"
                placeholder=""
              />
            </div>
            <div className="flex items-center gap-1 w-full">
              <label for="input1" className="text-[#596271] text-[10px]">
                {" "}
                آدرس URL ::
              </label>
              <input
                id="input1"
                type="text"
                className="border w-full border-[#dddddc] rounded-lg h-[19px]  px-2 text-[#b4b4b4] text-[11px]"
                placeholder=""
              />
            </div>
          </div>
          <div className="mt-4 w-full flex items-center justify-end px-4 gap-2">
            <span className="rounded-[10px] flex items-center justify-center text-[#000] text-[10px] bg-[#EEEDEB] p-0.5 px-4 cursor-pointer">
              انصراف
            </span>
            <span className="w-[126px] py-0.5 px-2 bg-[#f8e5bf] rounded-[10px] flex items-center justify-center text-[#000] text-[10px] cursor-pointer">
              ذخیره
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
