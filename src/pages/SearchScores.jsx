import React, { useState } from "react";
import { StudentScoreRepository } from "../repository/StudentScoreRepository";

const SearchScores = () => {
  const [sbd, setSbd] = useState();
  const [data, setData] = useState();
  const [err, setErr] = useState("");

  const submit = async () => {
    try {
      const res = await StudentScoreRepository.fetchStudentScore(sbd);
      if (res) {
        setErr("");
        setData(res.data.data);
      }
    } catch (error) {
      setData(null);
      setErr("Không tìm thấy số báo danh");
    }
  };
  const validate = () => {
    if (sbd.length != 8) {
      setData(null);
      setErr("Số báo danh phải có 8 kí tự");
    } else submit();
  };

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <div className="min-h-[10rem] md:w-2/3 w-full rounded rounded-lg shadow-md p-6">
        <h1 className="text-xl font-semibold">Tra cứu điểm theo số báo danh</h1>
        <div className="mt-6 md:flex md:gap-2">
          <input
            className="bg-gray-100 p-2 px-5 rounded rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:shadow-indigo-100 focus:shadow-lg"
            type="text"
            onChange={(e) => {
              setSbd(e.target.value);
            }}
            value={sbd}
            placeholder="Nhập số báo danh"
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                validate();
              }
            }}
          />
          <div>
            <button
              onClick={() => validate()}
              className="p-2 mt-2 md:mt-0 px-4 font-semibold hover:cursor-pointer rounded rounded-xl bg-indigo-400 text-white focus:ring-2 focus:ring-indigo-300 focus:shadow-indigo-100 focus:shadow-lg"
            >
              Tra cứu
            </button>
          </div>
        </div>
        {err && <div className="text-red-500 mt-4 ms-1">{err}</div>}
      </div>
      {data && (
        <div className="min-h-[10rem] md:w-2/3 w-full rounded rounded-lg shadow-md p-6">
          <h1 className="text-xl font-semibold">Chi tiết điểm thi</h1>
          <div className="mt-1">
            {Object.entries(data).map(([key, value]) => {
              if (value !== null) {
                return (
                  <div key={key} className="text-md">
                    {key == "sbd" && <span className="">Số báo danh: </span>}
                    {key == "toan" && <span className="">Toán: </span>}
                    {key == "nguVan" && <span className="">Ngữ Văn: </span>}
                    {key == "ngoaiNgu" && <span className="">Ngoại ngữ: </span>}
                    {key == "lichSu" && <span className="">Lịch sử: </span>}
                    {key == "diaLi" && <span className="">Địa lí: </span>}
                    {key == "gdcd" && (
                      <span className="">Giáo dục công dân: </span>
                    )}
                    {key == "maNgoaiNgu" && (
                      <span className="">Mã ngoại ngữ: </span>
                    )}
                    {key == "sinhHoc" && <span className="">Sinh Học: </span>}
                    {key == "hoaHoc" && <span className="">Hóa học: </span>}
                    {key == "vatLi" && <span className="">Vật lí: </span>}

                    <span className="">{value}</span>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchScores;
