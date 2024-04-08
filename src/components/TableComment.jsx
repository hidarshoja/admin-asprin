import React from "react";
import { people } from "../constant/People";

export default function TableComment() {
  let peopleList = people;
  return (
    <div>
      <div className="hidden  mt-8 lg:flow-root">
        <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className=" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="relative">
                    <div className="absolute flex w-full items-center justify-between px-5 top-[-18px]">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <div>
                            <select
                              name=""
                              id=""
                              className="rounded-md border border-[#dddddc] bg-[#fbfaf6] w-[141px] h-[31px] text-[#354d5a] text-[14px] outline-none"
                            >
                              <option value="" selected disabled>
                                کارهای دسته جمعی
                              </option>
                              <option value="1">نپذیرفتن </option>
                              <option value="2"> پذیرفتن</option>
                              <option value="3"> انتقال به زباله دان</option>
                            </select>
                          </div>
                          <div className="cursor-pointer rounded-md border border-[#ffac03] bg-[#f9e5c0] w-14 h-8 flex items-center justify-center text-[#354d5a] text-[14px]">
                            اجرا
                          </div>
                        </div>
                        <div>
                          <select
                            name=""
                            id=""
                            className="rounded-md border border-[#dddddc] bg-[#fbfaf6] w-[141px] h-[31px] text-[#354d5a] text-[14px] outline-none"
                          >
                            <option value="" selected disabled>
                              همه تاریخ ها
                            </option>
                            <option value="1">نپذیرفتن </option>
                            <option value="2"> پذیرفتن</option>
                            <option value="3"> انتقال به زباله دان</option>
                          </select>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div>
                            <select
                              name=""
                              id=""
                              className="rounded-md border border-[#dddddc] bg-[#fbfaf6] w-[141px] h-[31px] text-[#354d5a] text-[14px] outline-none"
                            >
                              <option value="" selected disabled>
                                همه دسته ها
                              </option>
                              <option value="1">پزشکان </option>
                              <option value="2"> دامپزشکی</option>
                              <option value="3">تصویربرداری</option>
                              <option value="4">رادیولوژی </option>
                              <option value="5"> فیزیوتراپی</option>
                            </select>
                          </div>
                          <div className="cursor-pointer rounded-md border border-[#ffac03] bg-[#f9e5c0] w-14 h-8 flex items-center justify-center text-[#354d5a] text-[14px]">
                            صافی
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div>
                          <input
                            type="search"
                            name=""
                            id=""
                            className="w-[162px] h-[31px] rounded-md bg-[#fbfaf6] border-[#dddddc] outline-none px-3 py-0.5 border"
                          />
                        </div>
                        <div>
                          <img
                            src="/img/phoneSearch.svg"
                            className="cursor-pointer"
                            alt="1"
                          />
                        </div>
                      </div>
                    </div>
                    <th
                      scope="col"
                      className="px-3 pt-8 pb-4 text-center text-sm font-semibold text-[#354D5A] flex items-center gap-2 justify-center"
                    >
                      <input
                        type="checkbox"
                        className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                      />
                      <span>نویسنده</span>
                    </th>
                    <th
                      scope="col"
                      className="pt-8 pb-4 text-center text-sm font-semibold text-[#354D5A]"
                    >
                      دیدگاه
                    </th>
                    <th
                      scope="col"
                      className="pt-8 pb-4 text-center text-sm font-semibold text-[#354D5A]"
                    >
                      صفحه خدمات دهنده
                    </th>
                    <th
                      scope="col"
                      className="pt-8 pb-4 text-center text-sm font-semibold text-[#354D5A]"
                    >
                      ارسال شده در
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {peopleList.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 text-center">
                        {person.writer}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.viewpoint}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.service}
                        <span className="text-[#354d5a] text-sm rounded-md border border-[#ffac03] bg-[#f9e5c0] px-1 mr-1 cursor-pointer">
                          نمایش نوشته{" "}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="w-full flex flex-col gap-5 h-[277px] rounded-[20px] border border-[#dbdbdb] py-5 px-3">
          <div className="flex items-center gap-1.5">
            <div>
              <select
                name=""
                id=""
                className="rounded-md border border-[#dddddc] bg-[#fbfaf6] w-[141px] h-[31px] text-[#354d5a] text-[14px] outline-none"
              >
                <option value="" selected disabled>
                  کارهای دسته جمعی
                </option>
                <option value="1">نپذیرفتن </option>
                <option value="2"> پذیرفتن</option>
                <option value="3"> انتقال به زباله دان</option>
              </select>
            </div>
            <div className="cursor-pointer rounded-md border border-[#ffac03] bg-[#f9e5c0] w-14 h-8 flex items-center justify-center text-[#354d5a] text-[14px]">
              اجرا
            </div>
          </div>
          <div>
            <select
              name=""
              id=""
              className="rounded-md border border-[#dddddc] bg-[#fbfaf6] w-[141px] h-[31px] text-[#354d5a] text-[14px] outline-none"
            >
              <option value="" selected disabled>
                همه تاریخ ها
              </option>
              <option value="1">نپذیرفتن </option>
              <option value="2"> پذیرفتن</option>
              <option value="3"> انتقال به زباله دان</option>
            </select>
          </div>
          <div className="flex items-center gap-1.5">
            <div>
              <select
                name=""
                id=""
                className="rounded-md border border-[#dddddc] bg-[#fbfaf6] w-[141px] h-[31px] text-[#354d5a] text-[14px] outline-none"
              >
                <option value="" selected disabled>
                  همه دسته ها
                </option>
                <option value="1">پزشکان </option>
                <option value="2"> دامپزشکی</option>
                <option value="3">تصویربرداری</option>
                <option value="4">رادیولوژی </option>
                <option value="5"> فیزیوتراپی</option>
              </select>
            </div>
            <div className="cursor-pointer rounded-md border border-[#ffac03] bg-[#f9e5c0] w-14 h-8 flex items-center justify-center text-[#354d5a] text-[14px]">
              صافی
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#DDD] py-[1px]"></div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <div>
              <input
                type="search"
                name=""
                id=""
                className="w-[262px] h-[31px] rounded-md bg-[#fbfaf6] border-[#dddddc] outline-none px-3 py-0.5 border"
              />
            </div>
            <div>
              <img
                src="/img/desSearch.svg"
                className="cursor-pointer"
                alt="1"
              />
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto flex flex-col  min-h-[270px] rounded-b-[20px] border border-[#dbdbdb]">
          <div className="flex items-center justify-center">
            <div className="w-1/3 flex items-center justify-center gap-2">
              <input
                type="checkbox"
                className="w-3 h-3  rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
              />
              <span className="">نویسنده</span>
            </div>
            <div className="w-2/3 text-center border-r py-3 border-[#dbdbdb] ">
              میلاد فاضلیان
            </div>
          </div>
          <div className="flex items-center justify-center border-t">
            <div className="w-1/3 flex items-center justify-center gap-2">
              <span className="pt-3">دیدگاه</span>
            </div>
            <div className="w-2/3 py-3 text-center border-r border-[#dbdbdb] ">
              سلااااااااام
            </div>
          </div>
          <div className="flex items-center justify-center border-t">
            <div className="w-1/3 flex items-center justify-center gap-2">
              <span className="pt-3">نویسنده</span>
            </div>
            <div className="w-2/3 py-3 text-center border-r border-[#dbdbdb] ">
              میلاد فاضلیان
            </div>
          </div>
          <div className="flex items-center justify-center border-t">
            <div className="w-1/3 flex items-center justify-center gap-2">
              <span className="pt-3">در پاسخ به </span>
            </div>
            <div className="w-2/3 py-3 text-center border-r border-[#dbdbdb] ">
              <div>
                <div>صنعت CGI در ایران</div>
                <div className="mt-2">
                  <span className="text-[#354d5a] text-sm rounded-md border border-[#ffac03] bg-[#f9e5c0] px-1 mr-1 cursor-pointer">
                    نمایش نوشته{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border-t">
            <div className="w-1/3 flex items-center justify-center gap-2">
              <span className="pt-3">ارسال شده در</span>
            </div>
            <div className="w-2/3 py-3 text-center border-r border-[#dbdbdb] ">           
                15:35  1402-04-23 
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
