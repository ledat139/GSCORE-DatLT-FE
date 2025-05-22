import axiosInstance from "../api/axiosInstance";

const fetchSubjectReport = () => {
  const res = axiosInstance.get("/student-score/report");
  return res;
};

const fetchTop10KhoiA = () => {
  const res = axiosInstance.get("/student-score/top10groupA");
  return res;
};

const fetchStudentScore = (sbd) => {
  const res = axiosInstance.get(`/student-score/${sbd}`);
  return res;
};

export const StudentScoreRepository = {
  fetchSubjectReport,
  fetchTop10KhoiA,
  fetchStudentScore,
};
