import { Link } from 'react-router-dom';

const Single_Article = ({ article }) => {
	return (
		<Link to={`/articles/${article.article_id}`}>
			<h2 className='singleArticle__title'>{article.title}</h2>
			<p className='singleArticle__author'>
				<span>by</span> {article.author}
			</p>
			<p>
				<span className='singleArticle__topic'>{article.topic}</span>
				<span className='singleArticle__date'>{article.created_at.match(/([0-9]){4}\-([0-9]){2}\-([0-9]){2}/)[0]}</span>
			</p>
			<p className='singleArticle__vote'>{article.votes}</p>
			<p className='singleArticle__comment'>comments {article.comment_count}</p>
		</Link>
	);
};
export default Single_Article;