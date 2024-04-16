import React, { useRef, useState } from "react";
import Tiptap2 from "../components/Tiptap2";
import ChartComponent2 from "../components/ChartComponent2";
import TableCompnent from "../components/Table";

export default function AddServices() {
  const editorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isPhone2, setIsPhone2] = useState(false);
  const [isPhoneBox, setIsPhoneBox] = useState(false);
  const [isPhoneBox2, setIsPhoneBox2] = useState(false);

  const [videoFiles, setVideoFiles] = useState(Array(5).fill(null));
  const [statuses, setStatuses] = useState(Array(5).fill("empty"));
  const [imageFiles, setImageFiles] = useState(Array(5).fill(null));
  const [statusesImg, setStatusesImg] = useState(Array(5).fill("empty"));
  const [imageFiles2, setImageFiles2] = useState(Array(5).fill(null));
  const [statusesImg2, setStatusesImg2] = useState(Array(5).fill("empty"));

  const handleVideoInputChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newVideoFiles = [...videoFiles];
      newVideoFiles[index] = file;
      setVideoFiles(newVideoFiles);
      const newStatuses = [...statuses];
      newStatuses[index] = "uploaded";
      setStatuses(newStatuses);
    }
  };

  const handleRemoveVideo = (index) => {
    const newVideoFiles = [...videoFiles];
    newVideoFiles[index] = null;
    setVideoFiles(newVideoFiles);
    const newStatuses = [...statuses];
    newStatuses[index] = "empty";
    setStatuses(newStatuses);
  };

  const handleImageInputChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newImageFiles = [...imageFiles];
      newImageFiles[index] = file;
      setImageFiles(newImageFiles);
      const newStatuses = [...statusesImg];
      newStatuses[index] = "uploaded";
      setStatusesImg(newStatuses);
    }
  };

  const handleRemoveImage = (index) => {
    const newImageFiles = [...imageFiles];
    newImageFiles[index] = null;
    setImageFiles(newImageFiles);
    const newStatuses = [...statusesImg];
    newStatuses[index] = "empty";
    setStatusesImg(newStatuses);
  };

  const handleImageInputChange2 = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newImageFiles = [...imageFiles2];
      newImageFiles[index] = file;
      setImageFiles2(newImageFiles);
      const newStatuses = [...statusesImg2];
      newStatuses[index] = "uploaded";
      setStatusesImg2(newStatuses);
    }
  };

  const handleRemoveImage2 = (index) => {
    const newImageFiles = [...imageFiles2];
    newImageFiles[index] = null;
    setImageFiles2(newImageFiles);
    const newStatuses = [...statusesImg2];
    newStatuses[index] = "empty";
    setStatusesImg2(newStatuses);
  };

  const phoneHandleClick = () => {
    setIsPhone(!isPhone);
  };

  const phoneHandleClick2 = () => {
    setIsPhone2(!isPhone2);
  };

  const phoneHandleClickBox = () => {
    setIsPhoneBox(!isPhoneBox);
  };

  const phoneHandleClickBox2 = () => {
    setIsPhone2(!isPhoneBox2);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] lg:text-[21px]">
          اطلاعات خود را وارد نمایید
        </p>
      </div>
      <div className="text-[#d14045] text-[14px] flex items-center justify-start w-full lg:w-[80%] h-[34px] rounded-xl bg-[#ffd7d7] gap-2 px-3 mt-4">
        <img src="./img/Elli.svg" alt="1" />
        <span>ذخیره اطلاعات شما با خطا مواجه شد .</span>
      </div>
      <div className="w-[97%] mr-auto mt-16 border border-[#696969] rounded-xl bg-[#fbfaf6] min-h-[160px] relative py-6">
        <div className="absolute top-[-10px] bg-[#fbfaf6] px-2 right-32 text-[#000] text-sm">
          اطلاعات فردی
        </div>
        <div className="absolute right-0 top-[-40px] lg:right-[-50px] lg:top-[-15px]">
          <img
            src="/img/users.svg"
            className="w-[120x] h-[120px] lg:w-[183px] lg:h-[183px]"
            alt=""
          />
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-around gap-3 px-2">
          <div className="w-1/6"></div>
          <div className="w-[60%] mr-auto lg:w-2/6 flex flex-col">
            <p className="text-[#000] text-sm">تصویر پروفایل</p>
            <p className="text-[#000] text-[9px]">
              – تصاویر ارسالی باید کیفیت بالایی داشته باشند. <br />
              - سایز عکس 400 در 400 پیکسل باشد. <br />
              – فرمت عکس jpg باشد. <br />
              – حجم عکس کمتر از 300 کیلوبایت باشد. <br />
            </p>
            <span className="bg-[#29709F] text-white rounded-xl px-6 py-0.5 cursor-pointer lg:w-[40%] text-sm mt-5  flex items-center justify-center">
              ارسال عکس
            </span>
          </div>
          <div className="w-full lg:w-2/6">
            <div className="w-full mt-3">
              <div className="text-[#000] text-sm py-0.5">
                نام و نام خانوادگی مالک حساب کاربری :
              </div>
              <div>
                <input
                  type="text"
                  className="border border-[#cdcccc] bg-[#f9f9f9] rounded-md w-full py-0.5"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="text-[#000] text-sm py-0.5">
                {" "}
                شماره مجوز یا نظام پزشکی :
              </div>
              <div>
                <input
                  type="text"
                  className="border border-[#cdcccc] bg-[#f9f9f9] rounded-md w-full py-0.5"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="text-[#000] text-sm py-0.5">
                {" "}
                شماره تماس مالک حساب کاربری :
              </div>
              <div>
                <input
                  type="text"
                  className="border border-[#cdcccc] bg-[#f9f9f9] rounded-md w-full py-0.5"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="text-[#000] text-sm py-0.5">
                {" "}
                ایمیل مالک حساب کاربری :
              </div>
              <div>
                <input
                  type="text"
                  className="border border-[#cdcccc] bg-[#f9f9f9] rounded-md w-full py-0.5"
                />
              </div>
            </div>
          </div>
          <div className="w-1/6"></div>
        </div>
        <div className="rounded-xl py-1.5 px-2 bg-[#29709F] flex items-center justify-center text-white text-sm absolute bottom-[-16px] left-7 cursor-pointer">
          <span>ذخیره</span>
        </div>
      </div>
      <div>
        {/* باکس اینپوت ها */}
        <div className="w-full flex flex-col lg:flex-row gap-6 mt-24">
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              خدمات
            </label>
            <div className="mt-2">
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              >
                <option value="" selected disabled>
                  خدمات خود را انتخاب کنید
                </option>
                <option value="1">خدمت 1</option>
                <option value="2">خدمت 2</option>
                <option value="3">خدمت 3</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              نام مرکز درمانی *
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="کوثر"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              نام نمایش صفحه
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="
                "
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-6 mt-6">
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              تخصص *
            </label>
            <div className="mt-2">
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              >
                <option value="" selected disabled>
                  خدمات خود را انتخاب کنید
                </option>
                <option value="1">خدمت 1</option>
                <option value="2">خدمت 2</option>
                <option value="3">خدمت 3</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              زیر تخصص *
            </label>
            <div className="mt-2">
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              >
                <option value="" selected disabled>
                  خدمات خود را انتخاب کنید
                </option>
                <option value="1">خدمت 1</option>
                <option value="2">خدمت 2</option>
                <option value="3">خدمت 3</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              خدمات ویژه
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="
                "
              />
            </div>
          </div>
        </div>
        {/*  اتمام باکس اینپوت ها */}
        {/* شروع باکس ریزدرمان و ... */}
        <div className="w-full flex flex-col lg:flex-row gap-6 mt-16">
          <div className="w-full lg:w-5/12">
            <p className="text-[#000] text-[10px] py-2">ریز درمان ها : *</p>
            <div className="h-[360px] w-full rounded-xl border border-[#cdcccc] bg-[#f9f9f9] p-2">
              <p className="text-[#d2a09f] text-[9px]">
                - انتخاب ریز درمان های تخصصی که توسط شما انجام میشود به (ترتیب
                الویت) حداکثر ۵ مورد
              </p>
              <p className="text-[11px] text-[#000]">موارد : </p>
              <ul className="list-decimal flex flex-col gap-12 w-[96%] mt-8 mr-auto">
                <li className="relative">
                  <div className="w-full">
                    <div>
                      <select
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                      >
                        <option value="" selected disabled>
                          خدمات خود را انتخاب کنید
                        </option>
                        <option value="1">خدمت 1</option>
                        <option value="2">خدمت 2</option>
                        <option value="3">خدمت 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="absolute flex gap-3 mt-1">
                    <span className="w-4 font-bold h-4 rounded-full text-[#4a6dcb] text-[10px] bg-[#dce7eb] flex items-center justify-center cursor-pointer">
                      +
                    </span>
                    <span className="w-4 font-bold h-4 rounded-full text-[#4a6dcb] text-[12px] bg-[#dce7eb] flex items-center justify-center cursor-pointer">
                      -
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <p className="text-[#000] text-[10px] py-2">
              توضیحات درباره ما : *
            </p>
            <div className="h-[360px] w-full rounded-xl border border-[#cdcccc] bg-[#f9f9f9] ">
              <p className="text-[#d2a09f] text-[9px] p-2">
                – لطفا در کادر زیر اطلاعاتی از قبیل خدماتی که ارائه میدهید،
                سابقه کاری، جوایز و افتخارات، مزیت های شما نسبت به رقبا و سال
                تاسیس را واردنمایید. – توضیحات حداکثر ۱۵۰ کلمه باشد .
              </p>
              <div className="w-full">
                <Tiptap2 editorRef={editorRef} />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/12">
            <p className="text-[#000] text-[10px] py-2"> شبکه های اجتماعی </p>
            <div className="h-[360px] w-full rounded-xl border border-[#cdcccc] bg-[#f9f9f9] p-2">
              <div className="w-full mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  وب سایت
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="وب سایت"
                  />
                </div>
              </div>
              <div className="w-full mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  لینک اینستاگرام
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="لینک اینستاگرام"
                  />
                </div>
              </div>
              <div className="w-full mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  لینک تلگرام
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="لینک تلگرام"
                  />
                </div>
              </div>
              <div className="w-full mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  لینک واتس آپ
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="لینک واتس آپ"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* شروع باکس اطلاعات ادرس  */}
        <div className="mt-20 w-full">
          <p className="text-base lg:text-lg text-[#000]">
            اطلاعات آدرس و شماره تماس
          </p>
          <div className="w-full h-auto p-3 rounded-xl mt-3 bg-[#fbfaf6] border border-[#e9e8e4] relative">
            <div className="absolute right-[-18px] top-[-5px] cursor-pointer">
              {isVisible && (
                <img src="/img/minus.svg" onClick={toggleVisibility} alt="" />
              )}
              {!isVisible && (
                <img src="/img/pluss.svg" onClick={toggleVisibility} alt="" />
              )}
            </div>
            <p className="flex gap-3 items-center">
              <span className="block w-1 h-1 bg-[#304a59] rounded-full"></span>
              <span className="text-[#000] text-sm">
                دسترسی و راه های ارتباطی اول
              </span>
            </p>
            <div
              className={`w-full min-h-24 mt-4 gap-4 flex flex-col lg:flex-row  ${
                isVisible ? "" : "hidden"
              }`}
            >
              {/* باکس سمت راست */}
              <div className="w-full lg:w-1/3">
                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      استان
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="تهران"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شهر
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="تهران"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 mt-3">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شماره موبایل
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="شماره موبایل"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شماره ثابت
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="شماره ثابت"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between flex-col lg:flex-row gap-3 mt-3">
                  <button
                    onClick={phoneHandleClick}
                    className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white"
                  >
                    افزودن شماره موبایل جدید
                  </button>
                  <button
                    onClick={phoneHandleClick2}
                    className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white"
                  >
                    افزودن شماره ثابت جدید
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 mt-3">
                  {isPhone && (
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        شماره موبایل
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="شماره موبایل"
                        />
                      </div>
                    </div>
                  )}
                  {isPhone2 && (
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        شماره ثابت
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="شماره ثابت"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <div className="w-full flex items-center justify-center mt-3">
                    <p className="text-center border border-[#81817f] rounded-3xl bg-[#f9f9f9] py-0.5 px-4 flex items-center justify-center w-[120px] text-sm">
                      ساعت کاری
                    </p>
                  </div>
                  <div className="w-full min-h-[300px] rounded-lg border border-[#e9e8e4] bg-[#fbfaf6] mt-3 p-2">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری1شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری2شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری3شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری4شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری5شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری جمعه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <p className=" py-1  text-base text-[#000]">امکانات</p>
                  <div className="flex items-center mt-5">
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        آسانسور
                      </label>
                    </div>
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        پارکینگ
                      </label>
                    </div>
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        شبانه روزی
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* باکس سمت چپ */}
              <div className="w-full lg:w-2/3">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    آدرس کامل
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="آدرس کامل"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    نشانه گذاری دقیق تر روی نقشه
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="آدرس کامل"
                    />
                  </div>
                </div>
                <div className="w-full mt-7">
                  <p className="text-[#d14045] text-[10px]">
                    برای ثبت موقعیت مکانی خود روی صفحه کلیک کنید *
                  </p>
                  <div className="w-full h-[380px] rounded-lg mt-5">
                    <iframe
                      title="Mashhad Map"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0, borderRadius: "10px" }}
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Bojnord+Iran`}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <button className="absolute left-8 bottom-[-15px] bg-[#29709F] text-white py-1 px-6 rounded-lg text-[11px] flex items-center justify-center">
              ذخیره
            </button>
          </div>
        </div>
        {/* راه ارتباطی دوم */}
        <div className="mt-20 w-full">
          <p className="text-base lg:text-lg text-[#000]">
            اطلاعات آدرس و شماره تماس
          </p>
          <div className="w-full h-auto p-3 rounded-xl mt-3 bg-[#fbfaf6] border border-[#e9e8e4] relative">
            <div className="absolute right-[-18px] top-[-5px] cursor-pointer">
              {isVisible2 && (
                <img src="/img/minus.svg" onClick={toggleVisibility2} alt="" />
              )}
              {!isVisible2 && (
                <img src="/img/pluss.svg" onClick={toggleVisibility2} alt="" />
              )}
            </div>
            <p className="flex gap-3 items-center">
              <span className="block w-1 h-1 bg-[#304a59] rounded-full"></span>
              <span className="text-[#000] text-sm">
                دسترسی و راه های ارتباطی دوم
              </span>
            </p>
            <div
              className={`w-full min-h-24 mt-4 gap-4 flex flex-col lg:flex-row  ${
                isVisible2 ? "" : "hidden"
              }`}
            >
              {/* باکس سمت راست */}
              <div className="w-full lg:w-1/3">
                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      استان
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="تهران"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شهر
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="تهران"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 mt-3">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شماره موبایل
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="شماره موبایل"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شماره ثابت
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="شماره ثابت"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between flex-col lg:flex-row gap-3 mt-3">
                  <button
                    onClick={phoneHandleClickBox}
                    className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white"
                  >
                    افزودن شماره موبایل جدید
                  </button>
                  <button
                    onClick={phoneHandleClickBox2}
                    className="text-sm text-[#31546b] font-bold border-[#31546b] border rounded-xl p-1.5 px-3 flex items-center justify-center hover:bg-[#31546b] hover:text-white"
                  >
                    افزودن شماره ثابت جدید
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 mt-3">
                  {isPhoneBox && (
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        شماره موبایل
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="شماره موبایل"
                        />
                      </div>
                    </div>
                  )}
                  {isPhoneBox2 && (
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        شماره ثابت
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="شماره ثابت"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <div className="w-full flex items-center justify-center mt-3">
                    <p className="text-center border border-[#81817f] rounded-3xl bg-[#f9f9f9] py-0.5 px-4 flex items-center justify-center w-[120px] text-sm">
                      ساعت کاری
                    </p>
                  </div>
                  <div className="w-full min-h-[300px] rounded-lg border border-[#e9e8e4] bg-[#fbfaf6] mt-3 p-2">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری1شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری2شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری3شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری4شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری5شنبه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-5">
                      <div className="w-1/3">
                        <span className="bg-[#28448d] py-0.5 rounded-3xl w-full flex items-center justify-center text-white text-[10px]">
                          ساعت کاری جمعه
                        </span>
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">صبح</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                      <div className="w-1/3 flex items-center">
                        <span className="text-[#000] text-[11px]">عصر</span>
                        <input
                          type="text"
                          className="border border-[#e9e8e4] bg-[#f9f9f9] rounded-3xl w-[70%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <p className=" py-1  text-base text-[#000]">امکانات</p>
                  <div className="flex items-center mt-5">
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        آسانسور
                      </label>
                    </div>
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        پارکینگ
                      </label>
                    </div>
                    <div className="flex items-center gap-1 w-1/3">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="text-[#000] text-[11px]">
                        شبانه روزی
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* باکس سمت چپ */}
              <div className="w-full lg:w-2/3">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    آدرس کامل
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="آدرس کامل"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    نشانه گذاری دقیق تر روی نقشه
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pr-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="آدرس کامل"
                    />
                  </div>
                </div>
                <div className="w-full mt-7">
                  <p className="text-[#d14045] text-[10px]">
                    برای ثبت موقعیت مکانی خود روی صفحه کلیک کنید *
                  </p>
                  <div className="w-full h-[380px] rounded-lg mt-5">
                    <iframe
                      title="Mashhad Map"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0, borderRadius: "10px" }}
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Bojnord+Iran`}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <button className="absolute left-8 bottom-[-15px] bg-[#29709F] text-white py-1 px-6 rounded-lg text-[11px] flex items-center justify-center">
              ذخیره
            </button>
          </div>
        </div>
      </div>
      {/* بارگذاری مدارک */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-24 min-h-[200px] rounded-lg border border-[#d4d3cf] relative py-2 px-4 gap-8">
        <div className="text-[#adacab] text-sm absolute right-6 top-[-10px] bg-[#fdfdfd] px-2">
          ارسال مدارک
        </div>
        <div className="w-full lg:w-1/6 h-[132px] ">
          <p className="text-[#000] text-sm">گالری مدارک پزشک</p>
          <p className="text-[#000] text-[9px]">
            – تصاویر ارسالی باید کیفیت بالایی داشته باشند. <br />
            - سایز عکس 400 در 400 پیکسل باشد. <br />
            – فرمت عکس jpg باشد. <br />
            – حجم عکس کمتر از 300 کیلوبایت باشد. <br />
          </p>
        </div>
        {imageFiles2.map((imageFile, index) => (
          <div
            className="w-full lg:w-1/6 h-[132px] border border-[##D4D3CF] rounded-lg relative p-1"
            key={index}
          >
            {imageFile ? (
              <img
                src={URL.createObjectURL(imageFile)}
                className="w-full h-full rounded-lg"
                style={{ objectFit: "cover" }}
                alt={`Image ${index}`}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full rounded-lg bg-gray-200">
                <span className="text-[12px] font-semibold">
                  تصویر {statusesImg2[index] === "empty" ? "جدید" : "آپلود شده"}
                </span>
              </div>
            )}
            {statusesImg2[index] === "empty" && (
              <label className="absolute left-[-12px] top-[45px] cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleImageInputChange2(index, e)}
                />
                <img src="/img/pluss2.svg" alt="" />
              </label>
            )}
            {imageFile && (
              <button
                className="absolute right-2 w-6 h-6 text-[12px] top-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
                onClick={() => handleRemoveImage2(index)}
              >
                X
              </button>
            )}
          </div>
        ))}

        <div className="text-[#fdfdfd] text-sm absolute left-6 rounded-lg bottom-[-10px] bg-[#28448D] px-3 cursor-pointer">
          ارسال عکس
        </div>
      </div>
      {/* بارگذاری تصاویر */}

      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-24 min-h-[200px] rounded-lg border border-[#d4d3cf] relative py-2 px-4 gap-8">
        <div className="text-[#adacab] text-sm absolute right-6 top-[-10px] bg-[#fdfdfd] px-2">
          ارسال تصاویر
        </div>
        <div className="w-full lg:w-1/6 h-[132px] ">
          <p className="text-[#000] text-sm">گالری تصاویر پزشک</p>
          <p className="text-[#000] text-[9px]">
            – تصاویر ارسالی باید کیفیت بالایی داشته باشند. <br />
            - سایز عکس 400 در 400 پیکسل باشد. <br />
            – فرمت عکس jpg باشد. <br />
            – حجم عکس کمتر از 300 کیلوبایت باشد. <br />
          </p>
        </div>
        {imageFiles.map((imageFile, index) => (
          <div
            className="w-full lg:w-1/6 h-[132px] border border-[##D4D3CF] rounded-lg relative p-1"
            key={index}
          >
            {imageFile ? (
              <img
                src={URL.createObjectURL(imageFile)}
                className="w-full h-full rounded-lg"
                style={{ objectFit: "cover" }}
                alt={`Image ${index}`}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full rounded-lg bg-gray-200">
                <span className="text-[12px] font-semibold">
                  تصویر {statusesImg[index] === "empty" ? "جدید" : "آپلود شده"}
                </span>
              </div>
            )}
            {statusesImg[index] === "empty" && (
              <label className="absolute left-[-12px] top-[45px] cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleImageInputChange(index, e)}
                />
                <img src="/img/pluss2.svg" alt="" />
              </label>
            )}
            {imageFile && (
              <button
                className="absolute right-2 w-6 h-6 text-[12px] top-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
                onClick={() => handleRemoveImage(index)}
              >
                X
              </button>
            )}
          </div>
        ))}

        <div className="text-[#fdfdfd] text-sm absolute left-6 rounded-lg bottom-[-10px] bg-[#28448D] px-3 cursor-pointer">
          ارسال عکس
        </div>
      </div>
      {/* بارگذاری ویدیو */}

      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-24 min-h-[200px] rounded-lg border border-[#d4d3cf] relative py-2 px-4 gap-8">
        <div className="text-[#adacab] text-sm absolute right-6 top-[-10px] bg-[#fdfdfd] px-2">
          ارسال ویدیو
        </div>
        <div className="w-full lg:w-1/6 h-[132px] ">
          <p className="text-[#000] text-sm">گالری ویدیو پزشک</p>
          <p className="text-[#000] text-[9px]">
            – تصاویر ارسالی باید کیفیت بالایی داشته باشند. <br />
            - سایز عکس 400 در 400 پیکسل باشد. <br />
            – فرمت عکس jpg باشد. <br />
            – حجم عکس کمتر از 300 کیلوبایت باشد. <br />
          </p>
        </div>
        {videoFiles.map((videoFile, index) => (
          <div
            className="w-full lg:w-1/6 h-[132px] border border-[##D4D3CF] rounded-lg relative p-1"
            key={index}
          >
            {videoFile ? (
              <video className="w-full h-full rounded-lg" controls>
                <source
                  src={URL.createObjectURL(videoFile)}
                  type={videoFile.type}
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex items-center justify-center w-full h-full rounded-lg bg-gray-200">
                <span className="text-[12px] font-semibold">
                  ویدیوی {statuses[index] === "empty" ? "جدید" : "آپلود شده"}
                </span>
              </div>
            )}
            {statuses[index] === "empty" && (
              <label className="absolute left-[-12px] top-[45px] cursor-pointer">
                <input
                  type="file"
                  accept="video/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleVideoInputChange(index, e)}
                />
                <img src="/img/pluss2.svg" alt="" />
              </label>
            )}
            {videoFile && (
              <button
                className="absolute right-2 w-6 h-6 text-[12px] top-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
                onClick={() => handleRemoveVideo(index)}
              >
                X
              </button>
            )}
          </div>
        ))}

        <div className="text-[#fdfdfd] text-sm absolute left-6 rounded-lg bottom-[-10px] bg-[#28448D] px-3 cursor-pointer">
          ارسال ویدیو
        </div>
      </div>
      {/* چارت  */}
      <div className="mt-20 border-2 rounded-lg border-dashed border-[#BEBEBC] relative">
        <ChartComponent2 />
        <div className="w-[80%] lg:w-[493px] absolute border-2 rounded-lg border-dashed border-[#BEBEBC] bottom-[-215px] bg-white left-1/2 translate-x-[-50%] px-4 py-6">
          <div className="text-[10px] text-color2 absolute top-[-8px] bg-white px-1">
            گزارش آمار پروفایل
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="w-11/12 py-2 px-3 flex items-center justify-between text-sm text-[#000] bg-[#EBF5FF] rounded-lg">
              <span>آبدیت بازدید</span>
              <span>251374</span>
            </div>
            <div className="w-1/12 p-0.5 rounded-full border border-borderC flex items-center justify-center">
              <img src="/img/ref.svg" className="w-6" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-[#000] px-2 mt-7">
            <span>تعداد بازدید کننده آنلاین</span>
            <span>25</span>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-[#000] px-2 mt-7">
            <span> تعداد بازدید کل</span>
            <span>2111115</span>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-[#000] px-2 mt-7">
            <span>پر بازدید ترین روز</span>
            <span>1402/10/25</span>
          </div>
        </div>
      </div>
      {/* تیبل */}
      <div className="w-full min-h-[500px] rounded-lg border-2 py-3 px-2 border-dashed border-borderC mt-56 bg-white">
        <div className="flex flex-col lg:flex-row w-full py-2 gap-6">
          <div className="w-full lg:w-1/2 flex items-center gap-3 justify-between">
            <input
              type="text"
              placeholder="تاریخ ثبت از"
              className="w-1/2 border border-borderC rounded-lg py-1 outline-none px-2 text-sm"
            />
            <input
              type="text"
              placeholder="تاریخ ثبت تا"
              className="w-1/2 border border-borderC rounded-lg py-1 outline-none px-2 text-sm"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-between gap-3">
            <button className="bg-bgBtn rounded-lg w-1/3 py-1 px-3 text-white text-sm flex items-center justify-center">
              جستجو
            </button>
            <button className="bg-bgBtn rounded-lg w-1/3 py-1 px-3 text-white text-sm flex items-center justify-center">
              پرینت
            </button>
            <button className="bg-bgBtn rounded-lg w-1/3 py-1 px-3 text-white text-sm flex items-center justify-center">
              خروجی pdf
            </button>
          </div>
        </div>
        <div className="w-full mt-5">
          <TableCompnent />
        </div>
      </div>
      {/* مشکلات */}
      <div className="mt-[150px] w-full min-h-24 rounded-md border border-borderC bg-[#f9f9f9] flex items-center flex-col lg:flex-row justify-around">
        <div className="flex gap-2 px-2 items-center justify-between  w-full lg:w-1/2">
          <div className="text-[#c4c4c4] text-[11px] flex items-center justify-center w-1/6">
            ۲۳۴۵۶۷۸۵
          </div>
          <div className="text-color4 text-base lg:text-[20px] flex items-center justify-center w-3/6">
            مشکل در نمایش بخش دیدگاه محصولات
          </div>
          <div className="flex items-center justify-around gap-3">
            <button className="px-3 py-0.5 bg-bgBtn rounded-lg text-white cursor-pointer text-[11px]">
              داروخانه
            </button>
            <button className="px-3 py-0.5 bg-bgBtn rounded-lg text-white cursor-pointer text-[11px]">
              پزشک عمومی
            </button>
          </div>
        </div>
        <div className="flex gap-2 px-2 items-center justify-between  w-full lg:w-1/2">
          <div className="text-[#c4c4c4] text-[11px] flex items-center justify-center w-1/6">
            <span className=" rounded-lg w-16 h-[24px] border border-[#f81b1a]  flex items-center gap-3 justify-center cursor-pointer">
              <span className="w-1 h-1 rounded-full bg-[#F81B1A]"></span>
              <span className="text-[#708188] text-sm">باز</span>
            </span>
          </div>
          <div className="text-color2 text-sm  flex items-center justify-center w-3/6">
            15:35 1402-04-23 3 روز قبل
          </div>
          <div className="flex items-center justify-around gap-3">
            <img src="/img/eye.svg" className="cursor-pointer" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-[20px] w-full min-h-24 rounded-md border border-borderC bg-[#f9f9f9] flex items-center flex-col lg:flex-row justify-around">
        <div className="flex gap-2 px-2 items-center justify-between  w-full lg:w-1/2">
          <div className="text-[#c4c4c4] text-[11px] flex items-center justify-center w-1/6">
            ۲۳۴۵۶۷۸۵
          </div>
          <div className="text-color4 text-base lg:text-[20px] flex items-center justify-center w-3/6">
            مشکل در نمایش بخش دیدگاه محصولات
          </div>
          <div className="flex items-center justify-around gap-3">
            <button className="px-3 py-0.5 bg-bgBtn rounded-lg text-white cursor-pointer text-[11px]">
              داروخانه
            </button>
            <button className="px-3 py-0.5 bg-bgBtn rounded-lg text-white cursor-pointer text-[11px]">
              پزشک عمومی
            </button>
          </div>
        </div>
        <div className="flex gap-2 px-2 items-center justify-between  w-full lg:w-1/2">
          <div className="text-[#c4c4c4] text-[11px] flex items-center justify-center w-1/6">
            <span className=" rounded-lg w-16 h-[24px] border border-[#f81b1a]  flex items-center gap-3 justify-center cursor-pointer">
              <span className="w-1 h-1 rounded-full bg-[#F0932C]"></span>
              <span className="text-[#708188] text-sm">بسته</span>
            </span>
          </div>
          <div className="text-color2 text-sm  flex items-center justify-center w-3/6">
            15:35 1402-04-23 3 روز قبل
          </div>
          <div className="flex items-center justify-around gap-3">
            <img src="/img/eye1.svg" className="cursor-pointer" alt="" />
          </div>
        </div>
      </div>
      {/* پسورد */}
      <div className="w-full flex items-center mt-[100px]">
        <div className="w-full lg:w-1/4">
          <p className="text-[#000] text-base">ویرایش رمز عبور</p>
          <div className="w-full h-auto py-6 px-3 border border-borderC bg-white rounded-lg mt-7 relative">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                رمز عبور جدید
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="******"
                />
              </div>
            </div>
            <div className="w-full mt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                تکرار رمز عبور جدید
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="********"
                />
              </div>
            </div>
           <div className="mt-5 flex items-center justify-end">
           <button className="bg-bgBtn rounded-lg w-1/3 py-1 px-3 text-white text-sm flex items-center justify-center">
              تغییر رمز
            </button>
           </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
