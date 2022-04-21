import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
// import { Link } from 'react-router-dom';

const Articles = ()=> {
    const [articles,setArticles] = useState ([]);
    useEffect(() => {
        getArticles().then((articlesFromApi)    => {
            setArticles(articlesFromApi)
        })
    },[])

return (
    <section className="Articles">
      <h1>Articles</h1>
      <ul className="Artciles_list">
        {articles.map((article) => {
              console.log(article.article_id)
          const { article_id, title, author, votes, comment_count } = article;
          return (
            <li key={article_id}>
              <h2>{title}</h2>
              <p>
                Written by: {author} Votes: {votes} Comments: {comment_count}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};


export default Articles;