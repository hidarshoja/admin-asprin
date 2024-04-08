import { Link } from "react-router-dom"

export default function Expertise() {
  return (
    <>
    <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
        افزودن و لیست تخصص ها
        </p>
        <Link to="/edit-expertise">
          <span className="bg-[#f9e6be] rounded-3xl px-5 py-1 flex items-center justify-center text-[14px] text-[#000] cursor-pointer">
            ویرایش تخصص ها
          </span>
        </Link>
      </div>
    
    <div className="w-full min-h-[400px] rounded-2xl bg-white border border-[#dbdbdb] mt-10 flex flex-col lg:flex-row py-2 px-4 lg:px-5 gap-4">
      <div className="w-full lg:w-1/3">
        <p className="text-[#b0b5b8] text-sm">افزودن تخصص تازه</p>
        <form action="">
          <div className="flex items-center justify-between mt-8">
            <span className="text-[#b4b4b4] text-[15px]">تخصص :</span>
            <input
              type="text"
              className="w-[80%]  rounded-md border border-[#d9d9d9] py-1.5 px-4 text-[#b4b4b4] text-sm"
             
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-[#b4b4b4] text-[15px]">نامک :</span>
            <input
              type="text"
              className="w-[80%] rounded-md border border-[#d9d9d9] py-1.5 px-4 text-[#b4b4b4] text-sm"
              placeholder="نامک (نشانه url)"
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-[#b4b4b4] text-[15px]">تخصص مادر:</span>

            <select className="w-[80%]  rounded-md border border-[#d9d9d9] py-1.5 px-4 text-[#b4b4b4] text-sm">
              <option value="option1" disabled selected>تخصص اصلی زیر تخصص مربوطه</option>
              <option value="option2">گزینه 2</option>
              <option value="option3">گزینه 3</option>
              <option value="option4">گزینه 4</option>
              <option value="option5">گزینه 5</option>
            </select>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-[#b4b4b4] text-[15px]"> خدمات:</span>

            <select className="w-[80%]  rounded-md border border-[#d9d9d9] py-1.5 px-4 text-[#b4b4b4] text-sm">
              <option value="option1" disabled selected> این تخصص مربوط به تمام خدمات است</option>
              <option value="option2">گزینه 2</option>
              <option value="option3">گزینه 3</option>
              <option value="option4">گزینه 4</option>
              <option value="option5">گزینه 5</option>
            </select>
          </div>
          <div className="flex items-start justify-between mt-3">
            <span className="text-[#b4b4b4] text-[15px]"> توضیحات :</span>
            <textarea className="w-[80%]  h-[165px] rounded-md border border-[#d9d9d9] py-1.5 px-4 text-[#b4b4b4] text-sm"></textarea>
          </div>
          <div className="flex items-center justify-end mt-4">
            <span className="bg-[#f9e6be] rounded-3xl px-5 py-1 flex items-center justify-center text-[14px] text-[#000]">
              افزودن تخصص
            </span>
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
              placeholder="جستجوی تخصص ها"
              className="rounded-md border border-[#d9d9d9] bg-[#f9f9f9] px-1 py-1 w-[120px] md:w-[200px] text-sm"
            />
            <span className="rounded-md border border-[#ffc351] bg-[#f9e6be] text-[#b4b4b4] text-[14px] px-4 py-1">
              اجرا
            </span>
          </div>
          <div>
            <select className="w-full  rounded-md border border-[#d9d9d9] py-1 px-4 text-[#b4b4b4] text-sm">
              <option value="option1" disabled selected>زیر تخصص ها</option>
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
  )
}