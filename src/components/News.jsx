import React, { useState, useEffect } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
// if any news does not contain an image then we will use noimg
import noimg from "./noimg.jpg";

const News = () => {
  const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchLoading, setIsSearchLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState([]);
  const [activeLiCategory, setActiveLiCategory] = useState(null);
  const [activeLiCountry, setActiveLiCountry] = useState(null);
  const [category, setCategory] = useState(() => {
    const savedCategory = localStorage.getItem("SelectedCategory");
    if (savedCategory != null) {
      return savedCategory;
    }
    return "general";
  });
  const [country, setCountry] = useState(() => {
    const savedCountry = localStorage.getItem("SelectedCountry");
    if (savedCountry != null) {
      return savedCountry;
    }
    return "us";
  });

  useEffect(() => {
    const apiKey = "73f05d004bb047ec897b15d66ebcbddf";

    const getTopHeadlines = async () => {
      setIsLoading(true);
      const params = {
        country,
        category,
        page,
        apiKey,
      };
      const response = await axios.get(
        "https://mocki.io/v1/3caf9af0-cc0f-41d0-bd5f-4900e39cd07c"
      );
      setNews(response.data.articles);
      setIsLoading(false);
    };

    const searchForArticles = async () => {
      if (searchQuery) {
        setIsSearchLoading(true);
        const params = {
          q: searchQuery,
          pageSize: 25,
          apiKey,
        };
        const response = await axios.get(
          "https://mocki.io/v1/3caf9af0-cc0f-41d0-bd5f-4900e39cd07c"
        );
        setSearchNews(response.data.articles);
        setIsSearchLoading(false);
      }
    };

    getTopHeadlines();
    searchForArticles();

    localStorage.setItem("selectedCategory", category);
    localStorage.setItem("selectedCountry", country);
  }, [category, country, page, searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.getAttribute("value"));
    setActiveLiCountry(e.target);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.getAttribute("value"));
    setActiveLiCategory(e.target);
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };


  return (
    //  going to define structure
    <>
      <div className="flex flex-wrap justify-center w-full text-slate-900 dark:text-slate-100">
        <h1 className="text-center  text-4xl font-bold m-1 hover:cursor-pointer text-indigo-600">
          World News
        </h1>

        <div
          className="w-full flex justify-center"
          value={country}
          onClick={handleCountryChange}
        >
        </div>

        {/* news will be here */}
        <div className="w-full flex">
          <div className="w-full grid grid-cols-2">
            {isLoading ? (
              <div className="flex justify-center items-center h-screen">
                <InfinitySpin color="#dc2626" width={100} />
              </div>
            ) : (
              news.map((article, index) => (
                <div className="w-full" key={index}>
                  <div
                    className="rounded-b-3xl overflow-hidden bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900 hover:transition-all dark:hover:transition-all shadow-lg m-5 border dark:border-slate-600"
                    style={{ height: "600px" }}
                  >
                    <img
                      className="w-full h-80 object-cover"
                      src={article.urlToImage ? article.urlToImage : noimg}
                      alt={article.title}
                      onError={(e) => {
                        e.target.src = noimg;
                      }}
                    />
                    <div className="px-6 py-4 h-56">
                      <div className="font-bold text-xl mb-2">
                        {article.title}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">
                        {article.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-baseline px-6">
                      <div className="text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900 px-3 py-1">
                        {article.source.name}
                      </div>
                      <a
                        className="bg-rose-500 hover:bg-rose-600 hover:transition-all text-white font-bold py-2 px-4 rounded"
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="w-1/3">
            <div>
              <form onSubmit={handleSearchSubmit}>
                <div className="w-full flex justify-between bg-slate-50 dark:bg-slate-900 border-2 dark:border-slate-600 rounded-xl h-10 mt-5">
                  <input
                    type="text"
                    className="bg-slate-50 dark:bg-slate-900 pl-5 text-rose-600 focus:outline-none rounded-xl"
                    value={searchQuery}
                    placeholder="search news articles..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {/* <button type='submit' className='hover:bg-slate-100 px-2 pr-5'>Search</button> */}
                </div>
              </form>

              {isSearchLoading ? (
                <div className="flex justify-center items-center h-screen">
                  <InfinitySpin color="#dc2626" width={100} />
                </div>
              ) : (
                <>
                  {searchNews.map((article) => (
                    <div
                      className="rounded-xl bg-slate-50 hover:bg-white dark:bg-slate-900 dark:hover:bg-slate-800 hover:transition-all dark:hover:transition-all shadow-lg m-5 border dark:border-slate-600"
                      key={article.title}
                    >
                      <img
                        className="w-full h-36 object-cover rounded-t-xl"
                        src={article.urlToImage ? article.urlToImage : noimg}
                        alt={article.title}
                        onError={(e) => {
                          e.target.src = noimg;
                        }}
                      />
                      <ul>
                        <li className="p-2 m-2" key={article.id}>
                          <a href={article.url} target="_blank">
                            {article.title}
                          </a>
                        </li>
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        {/* build previous and next page buttons */}
        <div className="w-full flex justify-center  mb-5">
          <button
            className="text-red-600 bg-red-100 dark:bg-red-900 dark:text-slate-200 py-1 px-4 rounded mt-10 mr-5"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous Page
          </button>

          <button
            className="text-red-600 bg-red-100 dark:bg-red-900 dark:text-slate-200 py-1 px-4 rounded mt-10 mr-5"
            onClick={() => handlePageChange(page + 1)}
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
};

export default News;
