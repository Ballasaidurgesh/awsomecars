import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsLayout from "./layouts/NewsLayout";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/news")
      .then((response) => {
        setNews(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div id="home">
      {news.map((foundNews, index) => {
        return (
          <NewsLayout
            key={index}
            image={foundNews.image}
            title={foundNews.title}
            content={foundNews.content}
          />
        );
      })}
    </div>
  );
}

export default Home;
