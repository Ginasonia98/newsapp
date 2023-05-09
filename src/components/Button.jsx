import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewsFetch } from "../newsState";

const Button = () => {
  const news = useSelector((state) => state.news.news);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);

  let limit = 5;

  useEffect(() => {
    dispatch(getNewsFetch({ limit, page: currentPage }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (news.length > 0) {
      const totalPageCount = Math.ceil(news[0].totalResults / limit);
      setTotalPageCount(totalPageCount);
    }
  }, [news]);

  const handlePrev = async () => {
    if (currentPage === 1) return;
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = async () => {
    if (currentPage >= totalPageCount) return;
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-full flex justify-center mb-5">
      <button
        className="text-white bg-rose-500 hover:bg-rose-600 dark:text-slate-200 py-1 px-4 rounded mt-10 mr-5"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="text-white bg-rose-500 hover:bg-rose-600 dark:text-slate-200 py-1 px-4 rounded mt-10"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Button;

