import { Link } from "react-router-dom";

export default function Expertise() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
          افزودن و لیست تخصص ها
        </p>
        <Link to="/edit-expertise">
        <button className="w-[140px] bg-color4 hover:bg-color3 rounded-lg  py-1 px-3 text-white text-sm flex items-center justify-center">
            ویرایش تخصص ها
          </button>
        </Link>
      </div>

      <div className="w-full min-h-[400px] rounded-2xl bg-white border border-[#dbdbdb] mt-10 flex flex-col lg:flex-row py-2 px-4 lg:px-5 gap-4">
       
        <div className="w-full lg:w-1/3">
          <p className="text-color3 text-sm">افزودن  تخصص تازه</p>
          <form action="">
            <div className="w-full mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-4 text-color3"
              >
                تخصص :
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
                تخصص مادر :
              </label>
              <div className="mt-2">
                <select
                  name="select"
                  id="select"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="option1" selected disabled>
                    تخصص مادر 1
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
                 خدمات :
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
                افزودن خدمات
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-2/3 ">
        <div className="w-full lg:w-1/3 relative">
              <input
                type="search"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="انواع تخصص ها ..."
              />
              <img
                src="/img/searchBox.svg"
                alt=""
                className="absolute left-3 cursor-pointer top-1"
              />
            </div>
            
          <div className="w-full border mt-1 border-[#d9d9d9] bg-white min-h-[300px] rounded-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-[#b4b4b4] text-[14px]">
                <thead className="border-b border-[#D9D9D9] bg-[#FBFAF6] rounded-t-lg">
                  <tr>
                    <th className="flex gap-6 items-center justify-center py-1.5">
                      <input
                        type="checkbox"
                        className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                      />
                      <span>تخصص</span>
                    </th>
                    <th>خدمات</th>
                    <th>نامک</th>
                    <th>تعداد کاربران</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center border-b border-[#D9D9D9]">
                    <td className="flex gap-6 items-center justify-center py-4">
                      <input
                        type="checkbox"
                        className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                      />
                      <span>متخصص قلب و عروق</span>
                    </td>
                    <td>دکتر</td>
                    <td>متخصص قلب و عروق</td>
                    <td>500</td>
                  </tr>
                  <tr className="text-center border-b border-[#D9D9D9]">
                    <td className="py-4">
                      <div className="flex gap-6 items-center justify-center">
                        <input
                          type="checkbox"
                          className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                        />
                        <span>-جراح قلب کودکان</span>
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
                    <td>دکتر</td>
                    <td>متخصص پوست و مو</td>
                    <td>1520</td>
                  </tr>
                  <tr className="text-center border-b border-[#D9D9D9]">
                    <td className="py-4">
                      <div className="flex gap-6 items-center justify-center">
                        <input
                          type="checkbox"
                          className="w-3 h-3 rounded-full border border-gray-400 appearance-none checked:bg-yellow-600 focus:outline-none"
                        />
                        <span>رادیولوژی شکم</span>
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
                    <td>مرکز تصویر برداری</td>
                    <td>دکتر زنان</td>
                    <td>1520</td>
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
