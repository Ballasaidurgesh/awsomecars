import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsLayout from "./layouts/NewsLayout";
import Loader from "./Loader";
import ScrollToTopOnMount from "./partials/ScrolltoTop";

function Home() {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/news")
      .then((response) => {
        setNews(response.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div id="home">
      <ScrollToTopOnMount />
      {isLoading ? (
        news.map((foundNews, index) => {
          return (
            <NewsLayout
              key={index}
              image={foundNews.image}
              title={foundNews.title}
              content={foundNews.content}
            />
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;
