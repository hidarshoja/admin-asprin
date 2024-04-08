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
        <div className="flex items-center gap-2 mt-4">
          <span className="text-[#596271] text-[15px] w-28">
            <span>نام کاربری</span>
            <span className="text-[#c38383] text-sm"> (لازم) :</span>
          </span>
          <input
            type="text"
            placeholder="farsayyad"
            className="text-[11px] text-[#b4b4b4] w-[210px] py-1.5 px-4 border border-[#d9d9d9] bg-[#f9f9f9] rounded"
          />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-[#596271] text-[15px] w-28">
            شماره موبایل :
          </span>
          <input
            type="text"
            placeholder="09159886129"
            className="text-[11px] text-[#b4b4b4] w-[210px] py-1.5 px-4 border border-[#d9d9d9] bg-[#f9f9f9] rounded"
          />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-[#596271] text-[15px] w-28">ایمیل:</span>
          <div className="flex flex-col lg:flex-row gap-1">
            <input
              type="text"
              placeholder="hidarshoja@gmail.com"
              className="text-[11px] text-[#b4b4b4] w-[210px] py-1.5 px-4 border border-[#d9d9d9] bg-[#f9f9f9] rounded"
            />
            <span className="text-[#b4b4b4] text-[12px] bg-[#eeedeb] rounded-lg py-1.5 px-3 flex items-center justify-center">
              ارسال بازنشانی کاربر‍
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-[#596271] text-[15px] w-28">نام:</span>
          <input
            type="text"
            placeholder="محمد"
            className="text-[11px] text-[#b4b4b4] w-[210px] py-1.5 px-4 border border-[#d9d9d9] bg-[#f9f9f9] rounded"
          />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-[#596271] text-[15px] w-28">نام خانوادگی:</span>
          <input
            type="text"
            placeholder="فرصیاد"
            className="text-[11px] text-[#b4b4b4] w-[210px] py-1.5 px-4 border border-[#d9d9d9] bg-[#f9f9f9] rounded"
          />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-[#596271] text-[15px] w-28">رمز عبور:</span>
          <div className="flex flex-col lg:flex-row gap-1">
            <input
              type="text"
              placeholder="*******"
              className="text-[11px] text-[#b4b4b4] w-[210px] py-1.5 px-4 border border-[#d9d9d9] bg-[#f9f9f9] rounded"
            />
            <div className="flex gap-1 items-center">
              <img src="/img/eh.svg" alt="" />
              <span className="text-[#b4b4b4] text-[12px] bg-[#eeedeb] rounded-lg py-1.5 px-3 flex items-center justify-center">
                ساختن رمز
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-[#596271] text-[15px] w-28">نقش :</span>
          <input
            type="text"
            placeholder="مدیر"
            className="text-[11px] text-[#b4b4b4] w-[210px] py-1.5 px-4 border border-[#d9d9d9] bg-[#f9f9f9] rounded"
          />
        </div>
        <div className=" w-full flex items-center justify-end px-4 gap-2 absolute bottom-[-10px] left-2">
          <span className="rounded-[10px] flex items-center justify-center text-[#000] text-[10px] bg-[#EEEDEB] p-0.5 px-4 cursor-pointer">
            انصراف
          </span>
          <span className="w-[126px] py-0.5 px-2 bg-[#f8e5bf] rounded-[10px] flex items-center justify-center text-[#000] text-[10px] cursor-pointer">
            ذخیره
          </span>
        </div>
      </form>
    </>
  );
}
