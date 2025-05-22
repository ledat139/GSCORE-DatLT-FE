import { useEffect, useState } from "react";
import React from "react";
import { StudentScoreRepository } from "../repository/StudentScoreRepository";

const Report = () => {
  const [data, setData] = useState(null);

  const fetchGroupA = async () => {
    try {
      const res = await StudentScoreRepository.fetchTop10KhoiA();
      if (res) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log("Không tìm thấy");
    }
  };
  useEffect(() => {
    fetchGroupA();
  }, []);

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <h1 className="text-xl font-semibold">
        Top 10 thí sinh có điểm khối A cao nhất
      </h1>
      {data ? (
        <table className="w-full text-center border border-gray-300 shadow rounded-xl">
          <thead className="border border-indigo-500">
            <tr>
              <th className="px-x py-2">#</th>
              <th className="px-2 py-2">SBD</th>
              <th className="px-2 py-2">Toán</th>
              <th className="px-2 py-2">Vật lí</th>
              <th className="px-2 py-2">Hóa học</th>
              <th className="px-2 py-2">Tổng điểm</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={item.sbd}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="px-4 py-2 font-medium">{index + 1}</td>
                  <td className="px-2 py-2">{item.sbd}</td>
                  <td className="px-2 py-2">{item.toan}</td>
                  <td className="px-2 py-2">{item.vatLi}</td>
                  <td className="px-2 py-2">{item.hoaHoc}</td>
                  <td className="px-2 py-2 font-semibold">{item.totalScore}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>
          <p className="text-gray-500">Đang tải dữ liệu...</p>
        </div>
      )}
    </div>
  );
};

export default Report;
