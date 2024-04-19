import { Link } from "react-router-dom";

export default function Location() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
          افزودن شهر یا استان تازه
        </p>
        <Link to="/edit-location">
        <button className="w-[140px] bg-color4 hover:bg-color3 rounded-lg  py-1 px-3 text-white text-sm flex items-center justify-center">
            ویرایش  موقعیت
          </button>
        </Link>
      </div>

      <div className="w-full min-h-[400px] rounded-2xl bg-white border border-[#dbdbdb] mt-10 flex flex-col lg:flex-row py-2 px-4 lg:px-5 gap-4">
        <div className="w-full lg:w-1/3">
          <p className="text-[#b0b5b8] text-sm">افزودن استان تازه</p>
          <form action="">
            <div className="w-full mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-4 text-color3"
              >
                نام :
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="پرستار در منزل"
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

            <div className="flex items-center justify-end mt-4">
              <button className="bg-color4 hover:bg-color3 rounded-lg w-1/3 py-1 px-3 text-white text-sm flex items-center justify-center">
                افزودن موقعیت
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-2/3 ">
          <div className="w-full flex items-center justify-between flex-wrap gap-2 pb-4">
            <div className="flex items-center gap-1">
              <div className="flex gap-1">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="جستجوی استان ها"
                  className="rounded-md border border-[#d9d9d9] bg-[#f9f9f9] px-1 py-1 w-[120px] md:w-[200px] text-sm"
                />
                <span className="rounded-md border border-[#ffc351] bg-[#f9e6be] text-[#b4b4b4] text-[14px] px-4 py-1">
                  اجرا
                </span>
              </div>
              <div>
                <select className="w-full  rounded-md border border-[#d9d9d9] py-1 px-4 text-[#b4b4b4] text-sm">
                  <option value="option1" disabled selected>
                    شهر، منطقه
                  </option>
                  <option value="option2">گزینه 2</option>
                  <option value="option3">گزینه 3</option>
                  <option value="option4">گزینه 4</option>
                  <option value="option5">گزینه 5</option>
                </select>
              </div>
            </div>
            <div className="flex gap-[3px] items-center text-[#b4b4b4] text-[14px]">
              <div>
                <img src="/img/rightI.svg" alt="" />
              </div>
              <div className="w-[33px] h-[28px] border border-[#d9d9d9] rounded flex items-center justify-center">
                2
              </div>
              <div>از 55</div>
              <div>
                <img src="/img/leftL.svg" alt="" />
              </div>
              <div>
                <img src="/img/toLeft.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full border mt-1 border-[#d9d9d9] bg-white min-h-[300px] rounded-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-[#b4b4b4] text-[14px]">
                <thead className="border-b border-[#D9D9D9] bg-[#FBFAF6] rounded-t-lg">
                  <tr className="text-center">
                    <th className="py-1.5">
                      <div className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                        />
                        <span className="pr-1">شهر و استان</span>
                      </div>
                    </th>
                    <th className="w-[25%]">شهر</th>
                    <th className="w-[25%]">منطقه</th>
                    <th className="w-[25%]">تعداد کاربران</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center border-b border-[#D9D9D9]">
                    <td className="py-4">
                      <div className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                        />
                        <span className="pr-1">ایلام</span>
                      </div>
                    </td>
                    <td className="w-[25%]">-</td>
                    <td className="w-[25%]">3 منطقه</td>
                    <td className="w-[25%]">500</td>
                  </tr>
                  <tr className="text-center border-b border-[#D9D9D9]">
                    <td className="py-4">
                      <div className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                        />
                        <span className="pr-1">تهران</span>
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
                    <td className="w-[25%]">-</td>
                    <td className="w-[25%]">22 منطقه</td>
                    <td className="w-[25%]">1520</td>
                  </tr>
                  <tr className="text-center border-b border-[#D9D9D9]">
                    <td className="py-4">
                      <div className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                        />
                        <span className="pr-1">شهریار</span>
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
                    <td className="w-[25%]">-</td>
                    <td className="w-[25%]">5 منطقه</td>
                    <td className="w-[25%]">120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
