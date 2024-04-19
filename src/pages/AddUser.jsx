export default function AddUser() {
  return (
    <>
      <p className="text-[#000] text-[18px] lg:text-[21px]">
        افزودن کاربر تازه{" "}
      </p>

      <form className="w-full mx-auto border border-[#b4b4b4] bg-[#f9f9f9] min-h-[402px] rounded-2xl mt-12 px-10 py-5 relative">
        <p className="text-[#b4b4b4] text-[11px]">
          کاربر جدیدی بسازید و آن را اضافه کنید
        </p>

        <form action="" className="w-full">
          <div className="flex items-center flex-col lg:flex-row gap-4">
            <div className="w-full mt-3 lg:w-1/2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-4 text-color3"
              >
                <span>نام کاربری</span>
                <span className="text-[#c38383] text-sm"> (لازم) :</span>
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
            <div className="w-full mt-3 lg:w-1/2">
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
          </div>
          <div className="flex items-center flex-col lg:flex-row gap-4">
            <div className="w-full mt-3 lg:w-1/2">
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
                  placeholder="محمد"
                />
              </div>
            </div>
            <div className="w-full mt-3 lg:w-1/2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-4 text-color3"
              >
                نام خانوادگی :
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="فرصیاد"
                />
              </div>
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
                placeholder="محمد"
              />
            </div>
          </div>
          <div className="flex  flex-col items-start gap-2 mt-4">
            <span className="text-[#596271] text-[15px] w-28">رمز عبور:</span>
            <div className="flex flex-col lg:flex-row gap-1">
              <input
                type="text"
                placeholder="*******"
                className="text-[11px] text-[#b4b4b4] w-[210px] py-1.5 px-4 border border-[#d9d9d9] bg-[#f9f9f9] rounded"
              />
              <div className="flex gap-1 items-center">
                <img src="/img/eh.svg" className="cursor-pointer" alt="" />
                <span className="text-[#b4b4b4] text-[12px] bg-[#eeedeb] rounded-lg py-1.5 px-3 flex items-center justify-center cursor-pointer">
                  ساختن رمز
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 mt-4">
            <span className="text-[#596271] text-[15px] w-28">ایمیل:</span>
            <div className="flex flex-col lg:flex-row gap-1">
              <input
                type="text"
                placeholder="hidarshoja@gmail.com"
                className="text-[11px] text-[#b4b4b4] w-[210px] py-1.5 px-4 border border-[#d9d9d9] bg-[#f9f9f9] rounded"
              />
              <span className="text-[#b4b4b4] text-[12px] bg-[#eeedeb] rounded-lg py-1.5 px-3 flex items-center justify-center cursor-pointer">
                ارسال بازنشانی کاربر‍
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-4 py-3">
            <button className="bg-orange-600 hover:bg-orange-500 rounded-lg  py-1 px-8 text-white text-sm flex items-center justify-center">
              انصراف
            </button>
            <button className="bg-color4 hover:bg-color3 rounded-lg  py-1 px-8 text-white text-sm flex items-center justify-center">
              ذخیره
            </button>
          </div>
        </form>

      </form>
    </>
  );
}
