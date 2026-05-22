import { useState, useEffect } from 'react';
import NewsItem from './NewsItem.jsx';

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setArticles(data.articles || []);
      })
      .catch(error => console.log(error));

  }, [category]);

  return (
    <div className="container mt-3">
      <h2 className="card-title">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="d-flex flex-wrap gap-3">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsBoard;