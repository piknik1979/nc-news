import { Link } from 'react-router-dom';

const Card = ({ article }) => {
	return (
		<Link to={`/articles/${article.article_id}`}>
			<h2 className='Card__title'>{article.title}</h2>
			<p className='Card__author'>
				<span>by</span> {article.author}
			</p>
			<p>
				<span className='Card__topic'>{article.topic}</span>
				<span className='Card__date'>{article.created_at.match(/([0-9]){4}\-([0-9]){2}\-([0-9]){2}/)[0]}</span>
			</p>
			<p className='Card__vote'>{article.votes}</p>
			<p className='Card__comment'>comments {article.comment_count}</p>
		</Link>
	);
};
export default Card;