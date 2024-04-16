

import { transactionStatus } from "../constant/TransactionComponent"

export default function TableDashboard() {
    let peopleList = transactionStatus;
  return (
    
    <table className="w-[100%] overflow-hidden  rounded-lg">
    <thead>
      <tr>
        <th
          scope="col"
          className="pt-8 pb-4 text-center text-[9px] font-semibold text-[#354D5A] border border-gray-300"
        >
          شماره تراکنش
        </th>
        <th
          scope="col"
          className="pt-8 pb-4 text-center text-[9px] font-semibold text-[#354D5A] border border-gray-300"
        >
          مبلغ(تومان)
        </th>
        <th
          scope="col"
          className="pt-8 pb-4 text-center text-[9px] font-semibold text-[#354D5A] border border-gray-300"
        >
          وضعیت
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
      {peopleList.map((person) => (
        <tr key={person.id}>
          <td className=" py-4  text-[9px] font-medium text-gray-900 text-center border border-gray-300">
            {person.writer}
          </td>
          <td className="  py-4 text-[9px] text-gray-500 text-center border border-gray-300">
          {new Intl.NumberFormat('fa-IR').format(person.viewpoint)}
            
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
