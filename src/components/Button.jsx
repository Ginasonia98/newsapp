import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeCurrentPage } from "../newsState";

const Pagination = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const currentPage = useSelector((state) => state.news.currentPage);

  const handlePageChange = (page) => {
    dispatch(changeCurrentPage(page));
  };

  return (
    <div className="w-full flex justify-center mb-5">
      <button
        className="text-white bg-rose-500 hover:bg-rose-600 dark:text-slate-200 py-1 px-4 rounded mt-10 mr-5"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {news.map((_, pageNumber) => (
        <button
          key={pageNumber}
          className={`text-white bg-rose-500 hover:bg-rose-600 dark:text-slate-200 py-1 px-4 rounded mt-10 mx-1 ${
            pageNumber + 1 === currentPage ? "bg-rose-600" : ""
          }`}
          onClick={() => handlePageChange(pageNumber + 1)}
        >
          {pageNumber + 1}
        </button>
      ))}
      <button
        className="text-white bg-rose-500 hover:bg-rose-600 dark:text-slate-200 py-1 px-4 rounded mt-10 ml-5"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === news.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
