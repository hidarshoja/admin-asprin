import React from 'react';

const transaction = [
    {
      id : 1 ,
      writer: "ندا میر حاجی",
     
      service: "تیکت رد شده است",
      role: "1402-04-23",
    },
    {
      id : 2 ,
      writer: "ندا میر حاجی",
      
      service: "تیکت ها جواب داده شده",
      role: "1402-04-23",
    },
  ];

export default function TableComponen2() {
  return (
    <table className="w-[100%] overflow-hidden  rounded-lg">
    <thead>
      <tr>
        <th
          scope="col"
          className="pt-8 pb-4 text-center text-[9px] font-semibold text-[#354D5A] border border-gray-300"
        >
           آخرین فعالیت کاربر
        </th>
        
        <th
          scope="col"
          className="pt-8 pb-4 text-center text-[9px] font-semibold text-[#354D5A] border border-gray-300"
        >
          فعالیت
        </th>
        <th
          scope="col"
          className="pt-8 pb-4 text-center text-[9px] font-semibold text-[#354D5A] border border-gray-300"
        >
          تاریخ ثبت
        </th>
      </tr>
    </thead>
    <tbody className="bg-white">
      {transaction.map((person) => (
        <tr key={person.id}>
          <td className=" py-4  text-[9px] font-medium text-gray-900 text-center border border-gray-300">
            {person.writer}
          </td>
         
          <td className=" py-4 text-[9px] text-gray-500 text-center border border-gray-300">
            {person.service}
          </td>
          <td className="  py-4 text-[9px] text-gray-500 text-center border border-gray-300">
            {person.role}
            
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}
