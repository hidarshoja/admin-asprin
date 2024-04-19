import React from "react";
import TableDashboard from "../components/TableDashboard";
import TableComponen2 from "../components/TableComponen2";
import ChartComonent from "../components/ChartComponent"

export default function Dashboard() {
   
    
  return (
    <>
      <p className="text-[#000] text-[18px] lg:text-[21px]">داشبورد مدیریت</p>
      <div className="w-full flex flex-col lg:flex-row mt-6 border border-[#d9d9d9] bg-[#f9f9f9] rounded-xl py-3.5 px-4 gap-2">
        <div className="w-full lg:w-8/12 flex flex-col items-center justify-center flex-wrap gap-3">
          <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-5">
            <div className="w-full md:w-[157px] h-[147px] flex flex-col relative rounded-md overflow-hidden">
              <div className="w-full bg-[#FFDDAD] h-[63px]">
                <div className="w-full flex items-center justify-center flex-col">
                  <div className="text-[#708188] text-sm flex  items-center justify-center rounded-b-md bg-white px-3 py-0.5">
                    همه کاربران
                  </div>
                  <div className="flex  items-center justify-around w-full">
                    <div>
                      <img src="/img/use.svg" alt="" />
                    </div>
                    <div>504</div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#FFF5E9] h-[84px] text-[##81653D] text-[10px] flex flex-col items-center justify-between py-3">
                <div className="flex w-full items-center justify-around">
                  <div>کاربران VIP</div>
                  <div>5000</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>کاربران پیشرفته </div>
                  <div>50</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>کاربران عادی</div>
                  <div>1250</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[157px] h-[147px] flex flex-col relative rounded-md overflow-hidden">
              <div className="w-full bg-[#ECFFAD] h-[63px]">
                <div className="w-full flex items-center justify-center flex-col">
                  <div className="text-[#708188] text-sm flex  items-center justify-center rounded-b-md bg-white px-3 py-0.5">
                    همه کاربران
                  </div>
                  <div className="flex  items-center justify-around w-full">
                    <div>
                      <img src="/img/use.svg" alt="" />
                    </div>
                    <div>504</div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#F8FFE0] h-[84px] text-[##81653D] text-[10px] flex flex-col items-center justify-between py-3">
                <div className="flex w-full items-center justify-around">
                  <div>کاربران VIP</div>
                  <div>5000</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>کاربران پیشرفته </div>
                  <div>50</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>کاربران عادی</div>
                  <div>1250</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[157px] h-[147px] flex flex-col relative rounded-md overflow-hidden">
              <div className="w-full bg-[#C9FFDD] h-[63px]">
                <div className="w-full flex items-center justify-center flex-col">
                  <div className="text-[#708188] text-sm flex  items-center justify-center rounded-b-md bg-white px-3 py-0.5">
                    همه کاربران
                  </div>
                  <div className="flex  items-center justify-around w-full">
                    <div>
                      <img src="/img/use.svg" alt="" />
                    </div>
                    <div>504</div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#EDFFF3] h-[84px] text-[##81653D] text-[10px] flex flex-col items-center justify-between py-3">
                <div className="flex w-full items-center justify-around">
                  <div>کاربران VIP</div>
                  <div>5000</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>کاربران پیشرفته </div>
                  <div>50</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>کاربران عادی</div>
                  <div>1250</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[157px] h-[147px] flex flex-col relative rounded-md overflow-hidden">
              <div className="w-full bg-[#CBF3FF] h-[63px]">
                <div className="w-full flex items-center justify-center flex-col">
                  <div className="text-[#708188] text-sm flex  items-center justify-center rounded-b-md bg-white px-3 py-0.5">
                    همه کاربران
                  </div>
                  <div className="flex  items-center justify-around w-full">
                    <div>
                      <img src="/img/use.svg" alt="" />
                    </div>
                    <div>504</div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#EBFAFF] h-[84px] text-[##81653D] text-[10px] flex flex-col items-center justify-between py-3">
                <div className="flex w-full items-center justify-around">
                  <div>کاربران VIP</div>
                  <div>5000</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>کاربران پیشرفته </div>
                  <div>50</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>کاربران عادی</div>
                  <div>1250</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[157px] h-[147px] flex flex-col relative rounded-md overflow-hidden">
              <div className="w-full bg-[#ECE3FE] h-[63px]">
                <div className="w-full flex items-center justify-center flex-col">
                  <div className="text-[#708188] text-sm flex  items-center justify-center rounded-b-md bg-white px-3 py-0.5">
                    همه کاربران
                  </div>
                  <div className="flex  items-center justify-around w-full">
                    <div>
                      <img src="/img/use.svg" alt="" />
                    </div>
                    <div>504</div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#F7F4FF] h-[84px] text-[##81653D] text-[10px] flex flex-col items-center justify-between py-3">
                <div className="flex w-full items-center justify-around">
                  <div>کاربران VIP</div>
                  <div>5000</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>کاربران پیشرفته </div>
                  <div>50</div>
                </div>
                <div className="flex w-full items-center justify-around">
                  <div>کاربران عادی</div>
                  <div>1250</div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 lg:flex-row items-center justify-center w-full'>
             <div className='w-full lg:w-1/2 h-[270px] border border-[#d9d9d9] bg-white rounded-xl'>
                   <TableDashboard />
             </div>
             <div className='w-full lg:w-1/2 h-[270px] border border-[#d9d9d9] bg-white rounded-xl'>
              <TableComponen2 />
             </div>
         </div> 
        </div>

        <div className="w-full flex flex-col lg:w-4/12 gap-7">
          <div className="w-full h-[200px] rounded-lg border border-[#d9d9d9] bg-[#fbfbfb] mt-8 lg:mt-2">
            <ChartComonent />
          </div>
          <div className="w-full h-[200px] rounded-lg border border-[#d9d9d9] bg-[#fbfbfb] lg:mt-2">
          <ChartComonent />
          </div>
          <div className="w-full text-[#708188] h-[200px] rounded-lg border border-[#d9d9d9] lg:mt-2 bg-[#fbfbfb] relative">
          <div className="absolute left-1/2 top-0 bottom-0 bg-[#d9d9d9] w-[1px]"></div>
          <div className="absolute left-1/2 translate-x-[-50%] top-[-10px] bg-white px-2 rounded-lg border-b text-[#708188]">بازدید خدمات</div>
                <div className="w-full border-b flex items-center">
                  <div className="w-1/2 text-center py-2">شهرها</div>
                  <div className="w-1/2 text-center py-2">تعداد</div>
                </div>
                <div className="w-full border-b flex items-center">
                  <div className="w-1/2 text-center py-2">تهران</div>
                  <div className="w-1/2 text-center py-2">200</div>
                </div>
                <div className="w-full border-b flex items-center">
                  <div className="w-1/2 text-center py-2">مشهد</div>
                  <div className="w-1/2 text-center py-2">302</div>
                </div>
                <div className="w-full border-b flex items-center">
                  <div className="w-1/2 text-center py-2">تبریز</div>
                  <div className="w-1/2 text-center py-2">312</div>
                </div>
                <div className="w-full flex items-center">
                  <div className="w-1/2 text-center py-2">کرمان</div>
                  <div className="w-1/2 text-center py-2">112</div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}


