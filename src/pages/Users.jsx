import { Link } from "react-router-dom";
export default function Users() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] lg:text-[21px]">لیست کاربران</p>
        <Link to="/add-user">
          <span className="bg-color4 hover:bg-color3 rounded-lg px-5 py-1 gap-3 flex items-center justify-between text-[14px] text-[#fff] cursor-pointer">
            <span>+</span>
            <span>افزودن کاربر</span>
          </span>
        </Link>
      </div>
      <div className="w-full min-h-[702px] rounded-2xl border border-[#dbdbdb] bg-[#f9f9f9] mt-20 lg:mt-11 relative">
        <div className="absolute text-[#B4B4B4] text-[12px] left-4 top-[60px] hidden lg:flex">
          {" "}
          ۵۴۲۱ مورد
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-2 left-1/2 absolute text-[11px] text-[#596271] font-bold border-2 border-[#d8d8d8] bg-[#f6f5f1] rounded-xl lg:rounded-[112px] py-1.5 px-4 top-[-60px] lg:top-[-30px] translate-x-[-50%] lg:right-2 lg:left-auto lg:translate-x-0 lg:w-[530px]">
          <div className="absolute text-[#B4B4B4] text-[12px] left-1 top-[-20px] lg:hidden">
            {" "}
            ۵۴۲۱ مورد
          </div>
          <div className="flex items-center justify-between gap-1 w-full lg:w-6/12">
            <span>جستجوی کاربران</span>
            <input
              type="search"
              name=""
              id=""
              className="rounded-[77px] h-[30px] bg-[#eeedeb] px-2"
            />
          </div>
          <div className="flex items-center justify-between gap-1 w-full  lg:w-5/12">
            <span>نقش</span>
            <input
              type="text"
              className="rounded-[77px] h-[30px] bg-[#eeedeb] px-2"
            />
          </div>
          <div className="w-full flex items-center justify-end lg:justify-center  lg:w-1/12">
            <img
              src="/img/phoneSearch.svg"
              className="hidden lg:flex"
              alt="1"
            />
            <img src="/img/desSearch.svg" className="flex lg:hidden" alt="2" />
          </div>
        </div>
        <div className="flex  items-center justify-around gap-2 left-1/2 absolute text-[11px] text-[#b4b4b4]  py-1.5 px-4 top-[53px] lg:top-[12px] translate-x-[-50%] lg:right-2 lg:left-auto lg:translate-x-0 w-[273px] lg:w-[530px]">
          <div className="bg-[#f6f5f1] border border-[#dddddc] rounded-b-xl pt-1 px-1 lg:px-6 pb-[2px]">
            <span>همه</span>
            <span className="pr-1 lg:pr-2">2521</span>
          </div>
          <div className="bg-[#f6f5f1] border border-[#dddddc] rounded-b-xl pt-1 px-1 lg:px-6 pb-[2px] ">
            <span>غیرفعال</span>
            <span className="pr-1 lg:pr-2">2521</span>
          </div>
          <div className="bg-[#f6f5f1] border border-[#dddddc] rounded-b-xl pt-1 px-1 lg:px-6 pb-[2px] ">
            <span>حذف</span>
            <span className="pr-1 lg:pr-2">2521</span>
          </div>
        </div>

        <div className="hidden lg:block w-full border mt-20 border-[#d9d9d9] rounded-t-xl  bg-white min-h-[300px] ">
          <div className="overflow-x-auto ">
            <table className="w-full text-[#b4b4b4] text-[14px] ">
              <thead className="border-b border-[#D9D9D9]  ">
                <tr className="bg-[#FBFAF6]">
                  <th className="flex gap-6 items-center justify-center py-2 ">
                    <input
                      type="checkbox"
                      className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                    />
                    <span>نام کاربری</span>
                  </th>
                  <th>نام نمایشی</th>
                  <th>ایمیل</th>
                  <th> نقش </th>
                  <th>نوشته ها</th>
                  <th> شماره موبایل </th>
                  <th>نام</th>
                  <th> فامیل </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center border-b border-[#D9D9D9]">
                  <td className="flex gap-6 items-center justify-center py-4">
                    <input
                      type="checkbox"
                      className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                    />
                    <span> farsiPars </span>
                  </td>
                  <td>محمد فرصیاد</td>
                  <td className="text-[10px]">hidarshoja@gmail.com</td>
                  <td>مدیر کل</td>
                  <td>15</td>
                  <td>09384251320</td>
                  <td>محمد</td>
                  <td>فرصیاد</td>
                </tr>
                <tr className="text-center border-b border-[#D9D9D9]">
                  <td className="py-4">
                    <div className="flex gap-6 items-center justify-center">
                      <input
                        type="checkbox"
                        className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                      />
                      <span>fghkllklkj</span>
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
                  <td>رضا فرصیاد</td>
                  <td>
                    <div className="flex gap-6 items-center justify-center">
                      <span className="text-[10px]">hidarshoja@gmail.com</span>
                    </div>
                    <div className="flex gap-1 text-[#b4b4b4] text-[10px] w-full items-center justify-center">
                      <span className="text-[#b4b4b4] text-[12px] bg-[#eeedeb] rounded-lg px-1">
                        ارسال بازنشانی کاربر‍
                      </span>
                    </div>
                  </td>
                  <td>مدیر کل</td>
                  <td>15</td>
                  <td>09384251320</td>
                  <td>محمد</td>
                  <td>فرصیاد</td>
                </tr>
                <tr className="text-center border-b border-[#D9D9D9]">
                  <td className="py-4">
                    <div className="flex gap-6 items-center justify-center">
                      <input
                        type="checkbox"
                        className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                      />
                      <span> ukoohgf</span>
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
                  <td>رضا فرصیاد</td>
                  <td>
                    <div className="flex gap-6 items-center justify-center">
                      <span className="text-[10px]">hidarshoja@gmail.com</span>
                    </div>
                    <div className="flex gap-1 text-[#b4b4b4] text-[10px] w-full items-center justify-center">
                      <span className="text-[#b4b4b4] text-[12px] bg-[#eeedeb] rounded-lg px-1">
                        ارسال بازنشانی کاربر‍
                      </span>
                    </div>
                  </td>
                  <td>مدیر کل</td>
                  <td>15</td>
                  <td>09384251320</td>
                  <td>محمد</td>
                  <td>فرصیاد</td>
                </tr>
              </tbody>
            </table>
            <div className="w-full">
              <div className="flex items-center justify-start mt-3 px-5 gap-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <label className="text-[#596271] text-[10px]">عنوان:</label>
                  <input
                    id="input1"
                    type="text"
                    className="border border-[#dddddc] rounded-lg h-[19px] w-[140px] px-2 text-[#b4b4b4] text-[11px]"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label className="text-[#596271] text-[10px]">نقش:</label>
                  <input
                    id="input1"
                    type="text"
                    className="border border-[#dddddc] rounded-lg h-[19px] w-[140px] px-2 text-[#b4b4b4] text-[11px]"
                    placeholder="مدیر کل"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label className="text-[#596271] text-[10px]">
                    شماره موبایل:
                  </label>
                  <input
                    id="input1"
                    type="text"
                    className="border border-[#dddddc] rounded-lg h-[19px] w-[140px] px-2 text-[#b4b4b4] text-[11px]"
                    placeholder="09159886129"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label className="text-[#596271] text-[10px]">
                    نام نمایشی:
                  </label>
                  <input
                    id="input1"
                    type="text"
                    className="border border-[#dddddc] rounded-lg h-[19px] w-[140px] px-2 text-[#b4b4b4] text-[11px]"
                    placeholder="محمد فرصیاد"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label className="text-[#596271] text-[10px]">
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
            <div className="mt-4 w-full flex items-center justify-end px-4 gap-2 py-3">
              <span className="bg-[#a3a2a1] rounded-lg px-5 py-1 gap-3 flex items-center justify-between text-[14px] text-[#fff] cursor-pointer">
                انصراف
              </span>
              <span className="bg-color4 hover:bg-color3 rounded-lg px-5 py-1 gap-3 flex items-center justify-between text-[14px] text-[#fff] cursor-pointer">
                <span>ذخیره کاربر</span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:hidden mt-24">
          {/* تیبل موبایل روی این مپ بزنم  */}
          <div className="w-full mt-5">
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
                  <span>نام کاربری</span>
                </div>
                <div className="w-2/3 flex gap-1 items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                  />
                  <span>fkddjjffl</span>
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  نام نمایشی
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  محمد فرصیاد
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  ایمیل
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[11px]">
                  hidarshoja@gmail.com
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  ایمیل
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[11px]">
                  hidarshoja@gmail.com
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  نقش
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  مدیر کل
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  نوشته ها
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  15
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  شماره موبایل
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  09159886129
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  نام
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  محمد
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  فامیل
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  فرصیاد
                </div>
              </div>
            </div>
          </div>
          {/* اتمام تیبل موبایل روی این مپ بزنم  */}
          <div className="w-full mt-5">
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
                  <span>نام کاربری</span>
                </div>
                <div className="w-2/3 flex gap-1 items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                  />
                  <span>fkddjjffl</span>
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  نام نمایشی
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  محمد فرصیاد
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  ایمیل
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[11px]">
                  hidarshoja@gmail.com
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  ایمیل
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[11px]">
                  hidarshoja@gmail.com
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  نقش
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  مدیر کل
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  نوشته ها
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  15
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  شماره موبایل
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  09159886129
                </div>
              </div>
              <div className="w-full flex  border-b">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  نام
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  محمد
                </div>
              </div>
              <div className="w-full flex ">
                <div className="w-1/3 flex items-center justify-center text-[#596271] text-base">
                  فامیل
                </div>
                <div className="w-2/3 flex items-center justify-center border-r h-10 text-[#708188] text-[14px]">
                  فرصیاد
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start mt-3  gap-3 flex-wrap w-[80%] mx-auto">
            <form action="" className="w-full">
              <div className="w-full mt-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-4 text-color3"
                >
                  عنوان :
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="w-full mt-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-4 text-color3"
                >
                  نقش :
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="مدیر کل"
                  />
                </div>
              </div>
              <div className="w-full mt-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-4 text-color3"
                >
                  شماره موبایل :
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="09159886129"
                  />
                </div>
              </div>
              <div className="w-full mt-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-4 text-color3"
                >
                  نام نمایشی :
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="محمد"
                  />
                </div>
              </div>
              <div className="w-full mt-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-4 text-color3"
                >
                  آدرس URL :
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
              <div className="flex items-center justify-end gap-3 mt-4 py-3">
              <button className="bg-orange-600 hover:bg-color3 rounded-lg  py-1 px-8 text-white text-sm flex items-center justify-center">
                  انصراف
                </button>
                <button className="bg-color4 hover:bg-color3 rounded-lg  py-1 px-8 text-white text-sm flex items-center justify-center">
                  ذخیره
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </>
  );
}
