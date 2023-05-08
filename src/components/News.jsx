import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewsFetch } from "../newsState";

const News = () => {
  const news = useSelector((state) => state.news.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsFetch());
  }, [dispatch]);
  console.log(news);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-1">
      <div>
        <h1 className="text-indigo-600 text-xl">News Update</h1>
        <div className="Gallery">
          {news.length === 0 ? (
            <p>Loading news</p>
          ) : (
            news.map((news, index) => (
              <div className="w-full" key={index}>
                <div
                  className="rounded-b-3xl overflow-hidden bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900 hover:transition-all dark:hover:transition-all shadow-lg m-5 border dark:border-slate-600"
                  style={{ height: "600px" }}
                >
                  <img
                    alt={news.title}
                    src={news.urlToImage}
                    className="w-full h-80 object-cover"
                  />
                  <div className="px-6 py-4 h-56">
                    <div className="font-bold text-xl mb-2">{news.title}</div>
                    <p className="text-slate-700 dark:text-slate-300">
                      {news.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-baseline px-6">
                    <div className="text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900 px-3 py-1">
                      {news.source.name}
                    </div>
                    <a
                      className="bg-rose-500 hover:bg-rose-600 hover:transition-all text-white font-bold py-2 px-4 rounded"
                      href={news.url}
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
      </div>
    </div>
  );
};

export default News;
